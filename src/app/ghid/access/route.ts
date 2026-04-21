// ActeRO — app/ghid/access/route.ts
// Primește tokenul din email → verifică → setează cookie → redirect ghid paid

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import {
  generateOpaqueToken,
  hashAccessToken,
  NO_STORE_HEADERS,
  setAccessCookie,
} from '@/lib/security'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const token = searchParams.get('token')

  if (!token) {
    const response = NextResponse.redirect(new URL('/token-expirat', req.url))
    response.headers.set('Cache-Control', NO_STORE_HEADERS['Cache-Control'])
    return response
  }

  const supabase = createClient()
  const hashedToken = await hashAccessToken(token)

  if (!hashedToken) {
    const response = NextResponse.redirect(new URL('/token-expirat', req.url))
    response.headers.set('Cache-Control', NO_STORE_HEADERS['Cache-Control'])
    return response
  }

  // Caută sesiunea după token
  const { data: session, error } = await supabase
    .from('user_sessions')
    .select('id, is_paid, token_expires_at, guide_id, access_token')
    .eq('access_token', hashedToken)
    .single()

  if (error || !session) {
    const response = NextResponse.redirect(new URL('/token-expirat', req.url))
    response.headers.set('Cache-Control', NO_STORE_HEADERS['Cache-Control'])
    return response
  }

  // Verifică dacă e plătit
  if (!session.is_paid) {
    const response = NextResponse.redirect(new URL(`/paywall?session=${session.id}`, req.url))
    response.headers.set('Cache-Control', NO_STORE_HEADERS['Cache-Control'])
    return response
  }

  // Verifică expiry
  if (session.token_expires_at) {
    const expiry = new Date(session.token_expires_at)
      if (expiry < new Date()) {
      const response = NextResponse.redirect(new URL('/token-expirat', req.url))
      response.headers.set('Cache-Control', NO_STORE_HEADERS['Cache-Control'])
      return response
    }
  }

  const rotatedAccessToken = generateOpaqueToken()
  const rotatedAccessTokenHash = await hashAccessToken(rotatedAccessToken)

  if (!rotatedAccessTokenHash) {
    const response = NextResponse.redirect(new URL('/token-expirat', req.url))
    response.headers.set('Cache-Control', NO_STORE_HEADERS['Cache-Control'])
    return response
  }

  const { data: rotatedSession, error: rotateError } = await supabase
    .from('user_sessions')
    .update({
      access_token: rotatedAccessTokenHash,
      last_accessed_at: new Date().toISOString(),
    })
    .eq('id', session.id)
    .eq('access_token', session.access_token)
    .select('id')
    .single()

  if (rotateError || !rotatedSession) {
    const response = NextResponse.redirect(new URL('/token-expirat', req.url))
    response.headers.set('Cache-Control', NO_STORE_HEADERS['Cache-Control'])
    return response
  }

  const response = NextResponse.redirect(
    new URL(`/ghid/${session.id}`, req.url)
  )

  await setAccessCookie(response, session.id)
  response.headers.set('Cache-Control', NO_STORE_HEADERS['Cache-Control'])

  return response
}
