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
  const sessionId = req.nextUrl.searchParams.get('session')
  const accessSessionId = await getAccessSessionIdFromRequest(req)
  const adminPreviewSessionId = await getAdminPreviewSessionIdFromRequest(req)

  if (!isValidSessionId(sessionId)) {
    return NextResponse.json({ error: 'Missing session' }, { status: 400 })
  }

  if (!accessSessionId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: NO_STORE_HEADERS })
  }

  const supabase = createClient()
  const { data, error } = await supabase
    .from('user_sessions')
    .select('id, document_type, country, situation, guide_id, is_paid')
    .eq('id', sessionId)
    .single()

  if (error || !data) {
    return NextResponse.json({ error: 'Session not found' }, { status: 404, headers: NO_STORE_HEADERS })
  }

  if (accessSessionId !== data.id) {
    return NextResponse.json({ error: 'Session not found' }, { status: 404, headers: NO_STORE_HEADERS })
  }

  const isAdminPreview = adminPreviewSessionId === data.id

  return NextResponse.json({
    sessionId: data.id,
    problemType: data.document_type,
    country: data.country,
    situation: data.situation ?? {},
    guideId: data.guide_id,
    isPaid: data.is_paid || isAdminPreview,
    isAdminPreview,
  }, { headers: NO_STORE_HEADERS })
}
