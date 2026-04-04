// ActeRO — app/api/session/status/route.ts
// Polling endpoint — verifică dacă sesiunea e plătită

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const sessionId = searchParams.get('session')

  if (!sessionId) {
    return NextResponse.json({ isPaid: false }, { status: 400 })
  }

  const supabase = createClient()

  const { data, error } = await supabase
    .from('user_sessions')
    .select('is_paid')
    .eq('id', sessionId)
    .single()

  if (error || !data) {
    return NextResponse.json({ isPaid: false }, { status: 404 })
  }

  return NextResponse.json({ isPaid: data.is_paid })
}
