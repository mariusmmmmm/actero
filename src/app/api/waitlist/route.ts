// ActeRO — app/api/waitlist/route.ts
// Salvează email sau telefon în waitlist pentru țări indisponibile

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import type { WaitlistPayload } from '@/types'

export async function POST(req: NextRequest) {
  try {
    const body: WaitlistPayload = await req.json()
    const { email, phone, country, sourceUrl, utmSource } = body
    const service = body.service?.trim() || 'general'

    if (!country) {
      return NextResponse.json(
        { error: 'country este obligatoriu' },
        { status: 400 }
      )
    }

    if (!email && !phone) {
      return NextResponse.json(
        { error: 'Email sau telefon sunt obligatorii' },
        { status: 400 }
      )
    }

    const supabase = createClient()

    const { error } = await supabase
      .from('waitlist')
      .insert({
        email: email ?? null,
        phone: phone ?? null,
        country,
        service,
        source_url: sourceUrl ?? null,
        utm_source: utmSource ?? null,
      })

    // Deduplicare silențioasă — UNIQUE constraint pe (email, service)
    if (error && error.code !== '23505') {
      console.error('Waitlist insert error:', error)
      return NextResponse.json({ error: 'Nu s-a putut salva' }, { status: 500 })
    }

    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (err) {
    console.error('Waitlist route error:', err)
    return NextResponse.json({ error: 'Eroare internă' }, { status: 500 })
  }
}
