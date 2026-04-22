import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { deriveConsulateId } from '@/lib/utils/deriveConsulate'
import type {
  ConsulateId,
  CountryCode,
  ProblemType,
  RegionCode,
  SituationFlags,
} from '@/types'
import {
  getAccessSessionIdFromRequest,
  hasTrustedOrigin,
  isValidSessionId,
  NO_STORE_HEADERS,
} from '@/lib/security'
import { enforceRateLimit } from '@/lib/rate-limit'

type FeedbackType = 'like' | 'dislike'

function getDerivedConsulateId(
  country: CountryCode,
  situation: SituationFlags
): ConsulateId | null {
  const explicitConsulate = situation.consulate
  if (explicitConsulate) return explicitConsulate

  const region = (situation.region ?? situation.bundesland ?? null) as RegionCode | null
  if (!region) return null

  try {
    return deriveConsulateId(country, region)
  } catch {
    return null
  }
}

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get('session')
  const accessSessionId = await getAccessSessionIdFromRequest(req)

  if (!isValidSessionId(sessionId)) {
    return NextResponse.json({ error: 'Missing session' }, { status: 400, headers: NO_STORE_HEADERS })
  }

  if (!accessSessionId || accessSessionId !== sessionId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: NO_STORE_HEADERS })
  }

  const supabase = createClient()
  const { data, error } = await supabase
    .from('guide_step_feedback')
    .select('step_id, feedback_type')
    .eq('session_id', sessionId)
    .order('step_id', { ascending: true })

  if (error) {
    console.error('Guide feedback GET error:', error)
    return NextResponse.json({ error: 'Nu s-a putut încărca feedback-ul' }, { status: 500, headers: NO_STORE_HEADERS })
  }

  return NextResponse.json({
    items: (data ?? []).map((item) => ({
      stepId: item.step_id,
      feedbackType: item.feedback_type as FeedbackType,
    })),
  }, { headers: NO_STORE_HEADERS })
}

export async function POST(req: NextRequest) {
  if (!hasTrustedOrigin(req)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: NO_STORE_HEADERS })
  }

  const rateLimit = await enforceRateLimit(req, {
    key: 'guide-feedback',
    limit: 30,
    windowMs: 10 * 60 * 1000,
  })

  if (!rateLimit.ok) {
    return NextResponse.json(
      { error: 'Prea multe încercări. Reîncearcă în câteva minute.' },
      {
        status: 429,
        headers: {
          ...NO_STORE_HEADERS,
          'Retry-After': String(rateLimit.retryAfterSeconds),
        },
      }
    )
  }

  const body = await req.json() as {
    sessionId?: string
    stepId?: number
    stepTitle?: string
    feedbackType?: FeedbackType
  }

  const sessionId = body.sessionId?.trim()
  const stepTitle = body.stepTitle?.trim()
  const stepId =
    typeof body.stepId === 'number' && Number.isInteger(body.stepId) && body.stepId >= 1 && body.stepId <= 20
      ? body.stepId
      : null
  const feedbackType = body.feedbackType === 'like' || body.feedbackType === 'dislike'
    ? body.feedbackType
    : null

  if (!isValidSessionId(sessionId) || !stepId || !stepTitle || !feedbackType) {
    return NextResponse.json({ error: 'Date invalide' }, { status: 400, headers: NO_STORE_HEADERS })
  }

  const accessSessionId = await getAccessSessionIdFromRequest(req)
  if (!accessSessionId || accessSessionId !== sessionId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: NO_STORE_HEADERS })
  }

  const supabase = createClient()
  const { data: session, error: sessionError } = await supabase
    .from('user_sessions')
    .select('id, guide_id, country, document_type, situation, is_paid')
    .eq('id', sessionId)
    .single()

  if (sessionError || !session || !session.is_paid) {
    return NextResponse.json({ error: 'Session not found' }, { status: 404, headers: NO_STORE_HEADERS })
  }

  const country = session.country as CountryCode | null
  const situation = (session.situation ?? {}) as SituationFlags
  const consulateId = country ? getDerivedConsulateId(country, situation) : null

  const { error } = await supabase
    .from('guide_step_feedback')
    .upsert({
      session_id: session.id,
      guide_id: session.guide_id,
      country: session.country,
      problem_type: session.document_type as ProblemType,
      consulate_id: consulateId,
      step_id: stepId,
      step_title: stepTitle,
      feedback_type: feedbackType,
      updated_at: new Date().toISOString(),
    }, {
      onConflict: 'session_id,step_id',
    })

  if (error) {
    console.error('Guide feedback POST error:', error)
    return NextResponse.json({ error: 'Nu s-a putut salva feedback-ul' }, { status: 500, headers: NO_STORE_HEADERS })
  }

  return NextResponse.json({ ok: true }, { status: 201, headers: NO_STORE_HEADERS })
}
