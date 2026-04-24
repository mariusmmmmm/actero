import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import {
  isValidAdminPreviewSignature,
  isValidSessionId,
  NO_STORE_HEADERS,
  setAccessCookieWithMaxAge,
  setAdminPreviewCookie,
} from '@/lib/security'

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get('session')?.trim() ?? ''
  const signature = req.nextUrl.searchParams.get('sig')?.trim() ?? ''
  const expiresAtUnix = Number(req.nextUrl.searchParams.get('exp'))

  if (!isValidSessionId(sessionId)) {
    return NextResponse.json({ error: 'Invalid session' }, { status: 400, headers: NO_STORE_HEADERS })
  }

  const isValidSignature = await isValidAdminPreviewSignature(sessionId, expiresAtUnix, signature)
  if (!isValidSignature) {
    return NextResponse.json({ error: 'Invalid or expired preview link' }, { status: 401, headers: NO_STORE_HEADERS })
  }

  const supabase = createClient()
  const { data: session, error } = await supabase
    .from('user_sessions')
    .select('id')
    .eq('id', sessionId)
    .single()

  if (error || !session) {
    return NextResponse.json({ error: 'Session not found' }, { status: 404, headers: NO_STORE_HEADERS })
  }

  const maxAgeSeconds = Math.max(1, Math.floor(expiresAtUnix) - Math.floor(Date.now() / 1000))
  const response = NextResponse.redirect(new URL(`/ghid/${session.id}`, req.url), {
    headers: NO_STORE_HEADERS,
  })

  await setAccessCookieWithMaxAge(response, session.id, maxAgeSeconds)
  await setAdminPreviewCookie(response, session.id, Math.floor(expiresAtUnix))

  return response
}
