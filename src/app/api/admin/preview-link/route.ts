import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getBaseUrl } from '@/lib/base-url'
import {
  createAdminPreviewSignature,
  isValidSessionId,
  NO_STORE_HEADERS,
} from '@/lib/security'

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization')?.trim() ?? ''
    const expectedSecret = process.env.ADMIN_GUIDE_ACCESS_SECRET?.trim()

    if (!expectedSecret) {
      return NextResponse.json(
        { error: 'ADMIN_GUIDE_ACCESS_SECRET is not configured' },
        { status: 500, headers: NO_STORE_HEADERS }
      )
    }

    if (authHeader !== `Bearer ${expectedSecret}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401, headers: NO_STORE_HEADERS }
      )
    }

    const body = (await req.json()) as {
      sessionId?: string
      expiresInMinutes?: number
    }

    const sessionId = body.sessionId?.trim()
    const requestedMinutes = Number(body.expiresInMinutes ?? 30)
    const expiresInMinutes =
      Number.isFinite(requestedMinutes) && requestedMinutes > 0
        ? Math.min(Math.floor(requestedMinutes), 60)
        : 30

    if (!isValidSessionId(sessionId)) {
      return NextResponse.json(
        { error: 'sessionId invalid' },
        { status: 400, headers: NO_STORE_HEADERS }
      )
    }

    const supabase = createClient()
    const { data: session, error } = await supabase
      .from('user_sessions')
      .select('id, guide_id')
      .eq('id', sessionId)
      .single()

    if (error || !session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404, headers: NO_STORE_HEADERS }
      )
    }

    const expiresAtUnix = Math.floor(Date.now() / 1000) + expiresInMinutes * 60
    const signature = await createAdminPreviewSignature(session.id, expiresAtUnix)

    if (!signature) {
      return NextResponse.json(
        { error: 'Could not sign preview link' },
        { status: 500, headers: NO_STORE_HEADERS }
      )
    }

    const previewUrl =
      `${getBaseUrl()}/ghid/admin-preview?session=${session.id}` +
      `&exp=${expiresAtUnix}&sig=${signature}`

    return NextResponse.json(
      {
        ok: true,
        previewUrl,
        sessionId: session.id,
        guideId: session.guide_id,
        expiresAtUnix,
        expiresInMinutes,
      },
      { headers: NO_STORE_HEADERS }
    )
  } catch (error) {
    console.error('Admin preview link error:', error)
    return NextResponse.json(
      { error: 'Internal error' },
      { status: 500, headers: NO_STORE_HEADERS }
    )
  }
}
