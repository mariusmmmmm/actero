import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { sendContactEmail } from '@/lib/resend'
import {
  hasTrustedOrigin,
  isValidEmail,
  normalizeString,
  NO_STORE_HEADERS,
} from '@/lib/security'

type ContactPayload = {
  name?: string
  email: string
  subject?: string
  message: string
}

export async function POST(req: NextRequest) {
  try {
    if (!hasTrustedOrigin(req)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: NO_STORE_HEADERS })
    }

    const body: ContactPayload = await req.json()
    const name = normalizeString(body.name, 120)
    const email = normalizeString(body.email, 320)
    const subject = normalizeString(body.subject, 180)
    const message = normalizeString(body.message, 2000)

    if (!email || !message || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Email și mesaj sunt obligatorii' },
        { status: 400, headers: NO_STORE_HEADERS }
      )
    }

    await sendContactEmail({
      name: name ?? undefined,
      email,
      subject: subject ?? undefined,
      message,
    })

    return NextResponse.json({ ok: true }, { status: 201, headers: NO_STORE_HEADERS })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Eroare internă' }, { status: 500, headers: NO_STORE_HEADERS })
  }
}
