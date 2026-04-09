// ActeRO — app/api/ajutor/route.ts
// Salvează cererea de ajutor în Supabase + trimite email de confirmare

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { sendHelpConfirmation } from '@/lib/resend'
import type { HelpRequestPayload } from '@/types'
import {
  hasTrustedOrigin,
  isValidEmail,
  isValidSessionId,
  normalizeString,
  NO_STORE_HEADERS,
} from '@/lib/security'

export async function POST(req: NextRequest) {
  try {
    if (!hasTrustedOrigin(req)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: NO_STORE_HEADERS })
    }

    const body: HelpRequestPayload = await req.json()
    const firstName = normalizeString(body.firstName, 120)
    const email = normalizeString(body.email, 320)
    const guideId = normalizeString(body.guideId, 80)
    const message = normalizeString(body.message, 500)
    const sessionId = body.sessionId && isValidSessionId(body.sessionId) ? body.sessionId : null
    const stepNumber =
      typeof body.stepNumber === 'number' &&
      Number.isInteger(body.stepNumber) &&
      body.stepNumber >= 1 &&
      body.stepNumber <= 20
        ? body.stepNumber
        : null

    if (!email || !message || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Email și mesaj sunt obligatorii' },
        { status: 400, headers: NO_STORE_HEADERS }
      )
    }

    const supabase = createClient()

    const { error } = await supabase.from('help_requests').insert({
      first_name: firstName ?? null,
      email,
      guide_id: guideId ?? null,
      step_number: stepNumber ?? null,
      message,
      session_id: sessionId ?? null,
      is_resolved: false,
    })

    if (error) {
      console.error('Ajutor insert error:', error)
      return NextResponse.json({ error: 'Nu s-a putut salva cererea' }, { status: 500, headers: NO_STORE_HEADERS })
    }

    // Trimite email de confirmare utilizatorului
    await sendHelpConfirmation({ to: email, firstName: firstName ?? undefined })

    return NextResponse.json({ ok: true }, { status: 201, headers: NO_STORE_HEADERS })
  } catch (err) {
    console.error('Ajutor route error:', err)
    return NextResponse.json({ error: 'Eroare internă' }, { status: 500, headers: NO_STORE_HEADERS })
  }
}
