import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { sendContactEmail } from '@/lib/resend'

type ContactPayload = {
  name?: string
  email: string
  subject?: string
  message: string
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json()
    const { name, email, subject, message } = body

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email și mesaj sunt obligatorii' },
        { status: 400 }
      )
    }

    await sendContactEmail({
      name,
      email,
      subject,
      message,
    })

    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Eroare internă' }, { status: 500 })
  }
}
