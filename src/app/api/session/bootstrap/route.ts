import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get('session')

  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session' }, { status: 400 })
  }

  const supabase = createClient()
  const { data, error } = await supabase
    .from('user_sessions')
    .select('id, document_type, country, situation, guide_id, is_paid')
    .eq('id', sessionId)
    .single()

  if (error || !data) {
    return NextResponse.json({ error: 'Session not found' }, { status: 404 })
  }

  return NextResponse.json({
    sessionId: data.id,
    problemType: data.document_type,
    country: data.country,
    situation: data.situation ?? {},
    guideId: data.guide_id,
    isPaid: data.is_paid,
  })
}
