// ActeRO — app/ghid/access/route.ts
// Primește tokenul din email → verifică → setează cookie → redirect ghid paid

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/token-expirat', req.url))
  }

  const supabase = createClient()

  // Caută sesiunea după token
  const { data: session, error } = await supabase
    .from('user_sessions')
    .select('id, is_paid, token_expires_at, guide_id')
    .eq('access_token', token)
    .single()

  if (error || !session) {
    return NextResponse.redirect(new URL('/token-expirat', req.url))
  }

  // Verifică dacă e plătit
  if (!session.is_paid) {
    return NextResponse.redirect(new URL(`/paywall?session=${session.id}`, req.url))
  }

  // Verifică expiry
  if (session.token_expires_at) {
    const expiry = new Date(session.token_expires_at)
    if (expiry < new Date()) {
      return NextResponse.redirect(new URL('/token-expirat', req.url))
    }
  }

  // Actualizează last_accessed_at
  await supabase
    .from('user_sessions')
    .update({ last_accessed_at: new Date().toISOString() })
    .eq('id', session.id)

  // Setează cookie httpOnly + redirect spre ghidul paid
  const response = NextResponse.redirect(
    new URL(`/ghid/${session.id}`, req.url)
  )

  response.cookies.set('actero_session', session.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 180, // 6 luni în secunde
    path: '/',
  })

  return response
}
