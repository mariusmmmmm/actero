import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getBaseUrl } from '@/lib/base-url'
import { getStripe } from '@/lib/stripe'
import { createClient } from '@/lib/supabase/server'

type OfferType = 'single' | 'family'

const PRICE_BY_OFFER: Record<OfferType, string | undefined> = {
  single: process.env.STRIPE_PRICE_SINGLE?.trim(),
  family: process.env.STRIPE_PRICE_FAMILY?.trim(),
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as {
      sessionId?: string
      offerType?: OfferType
      guideId?: string | null
    }

    const sessionId = body.sessionId?.trim()
    const offerType = body.offerType

    if (!sessionId || (offerType !== 'single' && offerType !== 'family')) {
      return NextResponse.json({ error: 'Missing sessionId or invalid offerType' }, { status: 400 })
    }

    const priceId = PRICE_BY_OFFER[offerType]

    if (!priceId) {
      return NextResponse.json({ error: 'Stripe price is not configured' }, { status: 500 })
    }

    const supabase = createClient()
    const { data: userSession, error } = await supabase
      .from('user_sessions')
      .select('id, guide_id, document_type, email, is_paid')
      .eq('id', sessionId)
      .single()

    if (error || !userSession) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    if (userSession.is_paid) {
      return NextResponse.json({
        url: `${getBaseUrl()}/ghid/${userSession.id}`,
      })
    }

    const stripe = getStripe()
    const baseUrl = getBaseUrl()

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${baseUrl}/succes?session=${userSession.id}&checkout_session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/paywall?session=${userSession.id}`,
      customer_email: userSession.email ?? undefined,
      billing_address_collection: 'auto',
      allow_promotion_codes: true,
      metadata: {
        acteroSessionId: userSession.id,
        offerType,
        guideId: userSession.guide_id ?? '',
        problemType: userSession.document_type ?? '',
      },
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error('Stripe create checkout session error:', error)
    return NextResponse.json({ error: 'Checkout init failed' }, { status: 500 })
  }
}
