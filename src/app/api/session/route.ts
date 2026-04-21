// ActeRO — app/api/session/route.ts
// Creează o sesiune nouă după completarea wizard-ului

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { deriveGuideId } from '@/lib/utils/deriveGuideId'
import type { CreateSessionPayload, CreateSessionResponse } from '@/types'
import { hasTrustedOrigin, NO_STORE_HEADERS } from '@/lib/security'
import { enforceRateLimit } from '@/lib/rate-limit'

const ALLOWED_PROBLEM_TYPES = new Set(['pasaport', 'buletin', 'titlu-calatorie', 'procura', 'transcriere-nastere'])
const ALLOWED_COUNTRIES = new Set(['de', 'it', 'es'])

export async function POST(req: NextRequest) {
  try {
    if (!hasTrustedOrigin(req)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: NO_STORE_HEADERS })
    }

    const rateLimit = await enforceRateLimit(req, {
      key: 'create-session',
      limit: 20,
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

    const body: CreateSessionPayload = await req.json()
    const { problemType, country, situation, utmSource, utmMedium, utmCampaign } = body

    // Validare minimă
    if (
      !problemType ||
      !country ||
      !situation ||
      typeof situation !== 'object' ||
      Array.isArray(situation) ||
      !ALLOWED_PROBLEM_TYPES.has(problemType) ||
      !ALLOWED_COUNTRIES.has(country)
    ) {
      return NextResponse.json(
        { error: 'problemType, country și situation sunt obligatorii' },
        { status: 400, headers: NO_STORE_HEADERS }
      )
    }

    // Derivă ghidul sau route-ul din răspunsurile wizard-ului
    const wizardResult = deriveGuideId(problemType, country, situation)

    // Dacă e waitlist — nu creăm sesiune, returnăm direct
    if (wizardResult.type === 'waitlist') {
      return NextResponse.json({ wizardResult }, { status: 200, headers: NO_STORE_HEADERS })
    }

    // Determină guideId — pentru route folosim ghidul A
    const guideId =
      wizardResult.type === 'guide'
        ? wizardResult.guideId
        : wizardResult.guideAId

    // Inserează sesiunea în Supabase
    const supabase = createClient()
    const { data, error } = await supabase
      .from('user_sessions')
      .insert({
        document_type: problemType,
        country,
        situation,
        guide_id: guideId,
        is_paid: false,
        utm_source: utmSource ?? null,
        utm_medium: utmMedium ?? null,
        utm_campaign: utmCampaign ?? null,
      })
      .select('id')
      .single()

    if (error || !data) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Nu s-a putut crea sesiunea' },
        { status: 500, headers: NO_STORE_HEADERS }
      )
    }

    const response: CreateSessionResponse = {
      sessionId: data.id,
      guideId,
      wizardResult,
    }

    return NextResponse.json(response, { status: 201, headers: NO_STORE_HEADERS })
  } catch (err) {
    console.error('Session route error:', err)
    return NextResponse.json(
      { error: 'Eroare internă de server' },
      { status: 500, headers: NO_STORE_HEADERS }
    )
  }
}
