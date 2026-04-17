import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { NO_STORE_HEADERS } from '@/lib/security'

export async function GET(req: NextRequest) {
  const cronSecret = process.env.CRON_SECRET?.trim()
  const authHeader = req.headers.get('authorization')

  if (!cronSecret) {
    return NextResponse.json(
      { ok: false, error: 'CRON_SECRET is not configured' },
      { status: 500, headers: NO_STORE_HEADERS }
    )
  }

  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json(
      { ok: false, error: 'Unauthorized' },
      { status: 401, headers: NO_STORE_HEADERS }
    )
  }

  try {
    const supabase = createClient()

    const { error } = await supabase
      .from('user_sessions')
      .select('id')
      .limit(1)

    if (error) {
      console.error('Supabase heartbeat failed:', error)

      return NextResponse.json(
        { ok: false, error: 'Supabase heartbeat query failed' },
        { status: 500, headers: NO_STORE_HEADERS }
      )
    }

    return NextResponse.json(
      {
        ok: true,
        checkedTable: 'user_sessions',
        touchedAt: new Date().toISOString(),
      },
      { headers: NO_STORE_HEADERS }
    )
  } catch (error) {
    console.error('Supabase heartbeat crashed:', error)

    return NextResponse.json(
      { ok: false, error: 'Unexpected heartbeat error' },
      { status: 500, headers: NO_STORE_HEADERS }
    )
  }
}
