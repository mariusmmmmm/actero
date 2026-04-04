// ActeRO — app/api/gumroad-webhook/route.ts
// Primește confirmarea plății de la Gumroad
// Detectează produsul (ghid individual vs. pachet familie)
// Pachet familie → generează 4 sesiuni cu tokeni separați → trimite email cu 4 linkuri

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { sendAccessEmail, sendFamilieEmail } from '@/lib/resend'

const GUMROAD_SELLER_ID = process.env.GUMROAD_SELLER_ID ?? ''
const GUMROAD_LINK_FAMILIE = process.env.GUMROAD_LINK_FAMILIE ?? ''

// Detectează dacă plata e pentru pachetul familie
// Gumroad trimite permalink-ul produsului în câmpul `permalink`
function isFamilieProduct(formData: FormData): boolean {
  const permalink = formData.get('permalink') as string ?? ''
  const productName = formData.get('product_name') as string ?? ''
  return (
    permalink.includes('familie') ||
    productName.toLowerCase().includes('familie') ||
    productName.toLowerCase().includes('family')
  )
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const sellerId = formData.get('seller_id') as string
    const email = formData.get('email') as string
    const saleId = formData.get('sale_id') as string
    const refunded = formData.get('refunded') === 'true'
    const sessionId = formData.get('actero_session_id') as string | null

    // Verifică seller
    if (sellerId !== GUMROAD_SELLER_ID) {
      console.warn('Webhook: seller_id invalid', sellerId)
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const supabase = createClient()

    // ── Rambursare ────────────────────────────────────────────────────────────
    if (refunded) {
      if (saleId) {
        // Revocă sesiunea principală
        const { data: mainSession } = await supabase
          .from('user_sessions')
          .update({ is_paid: false, gumroad_sale_id: null, paid_at: null })
          .eq('gumroad_sale_id', saleId)
          .select('id')
          .single()

        // Revocă și sesiunile familie dacă există
        if (mainSession) {
          await supabase
            .from('user_sessions')
            .update({ is_paid: false })
            .eq('family_parent_id', mainSession.id)
        }
      }
      return NextResponse.json({ ok: true, action: 'refunded' })
    }

    const tokenExpiry = new Date()
    tokenExpiry.setMonth(tokenExpiry.getMonth() + 6)

    // ── Pachet familie ────────────────────────────────────────────────────────
    if (isFamilieProduct(formData)) {
      return await handleFamiliePayment({
        supabase,
        email,
        saleId,
        sessionId,
        tokenExpiry,
      })
    }

    // ── Ghid individual ───────────────────────────────────────────────────────
    if (!sessionId) {
      console.warn('Webhook: actero_session_id lipsă pentru', email)
      return NextResponse.json({ ok: true, action: 'no_session' })
    }

    const { data: session, error } = await supabase
      .from('user_sessions')
      .update({
        is_paid: true,
        product_type: 'ghid',
        gumroad_sale_id: saleId,
        paid_at: new Date().toISOString(),
        email,
        token_expires_at: tokenExpiry.toISOString(),
        last_accessed_at: new Date().toISOString(),
      })
      .eq('id', sessionId)
      .select('id, access_token, guide_id')
      .single()

    if (error || !session) {
      console.error('Webhook: eroare update sesiune', error)
      return NextResponse.json({ error: 'Session update failed' }, { status: 500 })
    }

    const accessUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/ghid/access?token=${session.access_token}`
    await sendAccessEmail({ to: email, accessUrl, guideId: session.guide_id })

    return NextResponse.json({ ok: true, action: 'paid_ghid' })
  } catch (err) {
    console.error('Webhook error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

// ─── HANDLER PACHET FAMILIE ───────────────────────────────────────────────────

async function handleFamiliePayment({
  supabase,
  email,
  saleId,
  sessionId,
  tokenExpiry,
}: {
  supabase: ReturnType<typeof import('@/lib/supabase/server').createClient>
  email: string
  saleId: string
  sessionId: string | null
  tokenExpiry: Date
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://actero.ro'

  // Sesiunea 1 — cea din wizard (dacă există), sau nouă goală
  let session1Id: string
  let session1Token: string

  if (sessionId) {
    // Actualizează sesiunea existentă din wizard
    const { data, error } = await supabase
      .from('user_sessions')
      .update({
        is_paid: true,
        product_type: 'familie',
        gumroad_sale_id: saleId,
        paid_at: new Date().toISOString(),
        email,
        token_expires_at: tokenExpiry.toISOString(),
        last_accessed_at: new Date().toISOString(),
      })
      .eq('id', sessionId)
      .select('id, access_token, guide_id')
      .single()

    if (error || !data) {
      console.error('Familie: eroare update sesiune 1', error)
      return NextResponse.json({ error: 'Session 1 update failed' }, { status: 500 })
    }

    session1Id = data.id
    session1Token = data.access_token
  } else {
    // Creează sesiune goală (va fi completată când userul face wizardul)
    const { data, error } = await supabase
      .from('user_sessions')
      .insert({
        document_type: 'pasaport',    // placeholder — se schimbă la wizard
        country: 'de',
        situation: {},
        guide_id: 'pasaport-crds-de', // placeholder
        is_paid: true,
        product_type: 'familie',
        gumroad_sale_id: saleId,
        paid_at: new Date().toISOString(),
        email,
        token_expires_at: tokenExpiry.toISOString(),
      })
      .select('id, access_token')
      .single()

    if (error || !data) {
      console.error('Familie: eroare creare sesiune 1', error)
      return NextResponse.json({ error: 'Session 1 create failed' }, { status: 500 })
    }

    session1Id = data.id
    session1Token = data.access_token
  }

  // Sesiunile 2, 3, 4 — goale, legate de sesiunea 1
  const extraSessions: { id: string; access_token: string }[] = []

  for (let i = 0; i < 3; i++) {
    const { data, error } = await supabase
      .from('user_sessions')
      .insert({
        document_type: 'pasaport',    // placeholder
        country: 'de',
        situation: {},
        guide_id: 'pasaport-crds-de', // placeholder
        is_paid: true,
        product_type: 'familie',
        family_parent_id: session1Id,
        email,
        token_expires_at: tokenExpiry.toISOString(),
      })
      .select('id, access_token')
      .single()

    if (error || !data) {
      console.error(`Familie: eroare creare sesiune ${i + 2}`, error)
      continue
    }

    extraSessions.push(data)
  }

  // Construiește cele 4 URL-uri de acces
  const accessLinks = [
    { nr: 1, url: `${baseUrl}/ghid/access?token=${session1Token}` },
    ...extraSessions.map((s, i) => ({
      nr: i + 2,
      url: `${baseUrl}/ghid/access?token=${s.access_token}`,
    })),
  ]

  // Trimite emailul cu toate cele 4 linkuri
  await sendFamilieEmail({ to: email, accessLinks })

  return NextResponse.json({ ok: true, action: 'paid_familie', linksGenerated: accessLinks.length })
}
