// ActeRO — app/api/waitlist/route.ts
// Salvează email sau telefon în waitlist pentru țări indisponibile

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import type { WaitlistPayload } from '@/types'
import {
  hasTrustedOrigin,
  isValidEmail,
  normalizeString,
  NO_STORE_HEADERS,
} from '@/lib/security'
import { enforceRateLimit } from '@/lib/rate-limit'

export async function POST(req: NextRequest) {
  try {
    if (!hasTrustedOrigin(req)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: NO_STORE_HEADERS })
    }

    const rateLimit = enforceRateLimit(req, {
      key: 'waitlist',
      limit: 5,
      windowMs: 10 * 60 * 1000,
    })

    if (!rateLimit.ok) {
      return NextResponse.json(
        { error: 'Prea multe înscrieri. Reîncearcă în câteva minute.' },
        {
          status: 429,
          headers: {
            ...NO_STORE_HEADERS,
            'Retry-After': String(rateLimit.retryAfterSeconds),
          },
        }
      )
    }

    const body: WaitlistPayload = await req.json()
    const email = normalizeString(body.email, 320)
    const phone = normalizeString(body.phone, 40)
    const country = normalizeString(body.country, 8)
    const sourceUrl = normalizeString(body.sourceUrl, 500)
    const utmSource = normalizeString(body.utmSource, 120)
    const service = normalizeString(body.service, 80) || 'general'

    if (!country) {
      return NextResponse.json(
        { error: 'country este obligatoriu' },
        { status: 400, headers: NO_STORE_HEADERS }
      )
    }

    if (!email && !phone) {
      return NextResponse.json(
        { error: 'Email sau telefon sunt obligatorii' },
        { status: 400, headers: NO_STORE_HEADERS }
      )
    }

    if (email && !isValidEmail(email)) {
      return NextResponse.json({ error: 'Email invalid' }, { status: 400, headers: NO_STORE_HEADERS })
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
      return NextResponse.json({ error: 'Nu s-a putut salva' }, { status: 500, headers: NO_STORE_HEADERS })
    }

    return NextResponse.json({ ok: true }, { status: 201, headers: NO_STORE_HEADERS })
  } catch (err) {
    console.error('Waitlist route error:', err)
    return NextResponse.json({ error: 'Eroare internă' }, { status: 500, headers: NO_STORE_HEADERS })
  }
}
