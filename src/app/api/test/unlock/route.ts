// ActeRO — app/api/test/unlock/route.ts
// Simulează confirmarea plății în local — DOAR în development
// Setează is_paid=true + trimite emailul real via Resend

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getBaseUrl } from '@/lib/base-url'
import { createClient } from '@/lib/supabase/server'
import { sendAccessEmail, sendFamilieEmail } from '@/lib/resend'

export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  try {
  const { sessionId, email, type = 'single' } = (await req.json()) as {
      sessionId: string
      email: string
      type?: 'single' | 'familie'
    }

    if (!sessionId || !email) {
      return NextResponse.json(
        { error: 'sessionId și email sunt obligatorii' },
        { status: 400 }
      )
    }

    const supabase = createClient()
    const baseUrl = getBaseUrl()
    const tokenExpiry = new Date()
    tokenExpiry.setMonth(tokenExpiry.getMonth() + 6)

    if (type === 'familie') {
      const { data: s1, error: e1 } = await supabase
        .from('user_sessions')
        .update({
          is_paid: true,
          product_type: 'familie',
          payment_reference: `stripe_test_${Date.now()}`,
          paid_at: new Date().toISOString(),
          email,
          token_expires_at: tokenExpiry.toISOString(),
        })
        .eq('id', sessionId)
        .select('id, access_token, guide_id')
        .single()

      if (e1 || !s1) {
        return NextResponse.json({ error: 'Session update failed', detail: e1 }, { status: 500 })
      }

      const extraSessions: { id: string; access_token: string }[] = []
      for (let i = 0; i < 3; i++) {
        const { data, error } = await supabase
          .from('user_sessions')
          .insert({
            document_type: 'pasaport',
            country: 'de',
            situation: {},
            guide_id: 'pasaport-crds-de',
            is_paid: true,
            product_type: 'familie',
            family_parent_id: s1.id,
            email,
            token_expires_at: tokenExpiry.toISOString(),
          })
          .select('id, access_token')
          .single()
        if (!error && data) extraSessions.push(data)
      }

      const accessLinks = [
        { nr: 1, url: `${baseUrl}/ghid/access?token=${s1.access_token}` },
        ...extraSessions.map((s, i) => ({
          nr: i + 2,
          url: `${baseUrl}/ghid/access?token=${s.access_token}`,
        })),
      ]

      await sendFamilieEmail({ to: email, accessLinks })

      return NextResponse.json({
        ok: true,
        type: 'familie',
        accessLinks,
        emailSentTo: email,
      })
    }

    const { data: session, error } = await supabase
      .from('user_sessions')
      .update({
        is_paid: true,
        product_type: 'ghid',
        payment_reference: `stripe_test_${Date.now()}`,
        paid_at: new Date().toISOString(),
        email,
        token_expires_at: tokenExpiry.toISOString(),
      })
      .eq('id', sessionId)
      .select('id, access_token, guide_id')
      .single()

    if (error || !session) {
      return NextResponse.json({ error: 'Session update failed', detail: error }, { status: 500 })
    }

    const accessUrl = `${baseUrl}/ghid/access?token=${session.access_token}`
    await sendAccessEmail({ to: email, accessUrl, guideId: session.guide_id })

    return NextResponse.json({
      ok: true,
      type: 'single',
      accessUrl,
      guideId: session.guide_id,
      emailSentTo: email,
    })
  } catch (err) {
    console.error('Test unlock error:', err)
    const detail =
      err instanceof Error
        ? err.message
        : typeof err === 'string'
          ? err
          : JSON.stringify(err)

    return NextResponse.json({ error: 'Internal error', detail }, { status: 500 })
  }
}
