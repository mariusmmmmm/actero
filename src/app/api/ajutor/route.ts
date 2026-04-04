// ActeRO — app/api/ajutor/route.ts
// Salvează cererea de ajutor în Supabase + trimite email de confirmare

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { sendHelpConfirmation } from '@/lib/resend'
import type { HelpRequestPayload } from '@/types'

export async function POST(req: NextRequest) {
  try {
    const body: HelpRequestPayload = await req.json()
    const { firstName, email, guideId, stepNumber, message, sessionId } = body

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email și mesaj sunt obligatorii' },
        { status: 400 }
      )
    }

    if (message.length > 500) {
      return NextResponse.json(
        { error: 'Mesajul depășește 500 de caractere' },
        { status: 400 }
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
      return NextResponse.json({ error: 'Nu s-a putut salva cererea' }, { status: 500 })
    }

    // Trimite email de confirmare utilizatorului
    await sendHelpConfirmation({ to: email, firstName })

    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (err) {
    console.error('Ajutor route error:', err)
    return NextResponse.json({ error: 'Eroare internă' }, { status: 500 })
  }
}
