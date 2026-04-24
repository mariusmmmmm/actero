// ActeRO — app/api/session/status/route.ts
// Polling endpoint — verifică dacă sesiunea e plătită

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import {
  getAccessSessionIdFromRequest,
  getAdminPreviewSessionIdFromRequest,
  isValidSessionId,
  NO_STORE_HEADERS,
} from '@/lib/security'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const sessionId = searchParams.get('session')
  const accessSessionId = await getAccessSessionIdFromRequest(req)
  const adminPreviewSessionId = await getAdminPreviewSessionIdFromRequest(req)

  if (!isValidSessionId(sessionId)) {
    return NextResponse.json({ isPaid: false }, { status: 400 })
  }

  if (!accessSessionId) {
    return NextResponse.json({ isPaid: false }, { status: 401, headers: NO_STORE_HEADERS })
  }

  const supabase = createClient()

  const { data, error } = await supabase
    .from('user_sessions')
    .select('id, is_paid')
    .eq('id', sessionId)
    .single()

  if (error || !data) {
    return NextResponse.json({ isPaid: false }, { status: 404, headers: NO_STORE_HEADERS })
  }

  if (accessSessionId !== data.id) {
    return NextResponse.json({ isPaid: false }, { status: 404, headers: NO_STORE_HEADERS })
  }

  const isAdminPreview = adminPreviewSessionId === data.id

  return NextResponse.json({ isPaid: data.is_paid || isAdminPreview }, { headers: NO_STORE_HEADERS })
}
