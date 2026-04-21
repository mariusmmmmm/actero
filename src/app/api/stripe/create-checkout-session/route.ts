import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getBaseUrl } from '@/lib/base-url'
import { getStripe } from '@/lib/stripe'
import { createClient } from '@/lib/supabase/server'
import {
  getAccessSessionIdFromRequest,
  hasTrustedOrigin,
  isValidSessionId,
  NO_STORE_HEADERS,
  setCheckoutConfirmCookie,
} from '@/lib/security'
import { enforceRateLimit } from '@/lib/rate-limit'

type OfferType = 'single' | 'family'

const PRICE_BY_OFFER: Record<OfferType, string | undefined> = {
  single: process.env.STRIPE_PRICE_SINGLE?.trim(),
  family: process.env.STRIPE_PRICE_FAMILY?.trim(),
}

export async function POST(req: NextRequest) {
  try {
    if (!hasTrustedOrigin(req)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: NO_STORE_HEADERS })
    }

    const rateLimit = await enforceRateLimit(req, {
      key: 'stripe-create-checkout-session',
      limit: 10,
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

    const body = await req.json() as {
      sessionId?: string
      offerType?: OfferType
      guideId?: string | null
      gaClientId?: string | null
      analyticsConsent?: boolean
    }

    const sessionId = body.sessionId?.trim()
    const offerType = body.offerType
    const gaClientId = body.gaClientId?.trim()
    const analyticsConsentGranted = body.analyticsConsent === true

    if (!isValidSessionId(sessionId) || (offerType !== 'single' && offerType !== 'family')) {
      return NextResponse.json({ error: 'Missing sessionId or invalid offerType' }, { status: 400, headers: NO_STORE_HEADERS })
    }

    const priceId = PRICE_BY_OFFER[offerType]

    if (!priceId) {
      return NextResponse.json({ error: 'Stripe price is not configured' }, { status: 500, headers: NO_STORE_HEADERS })
    }

    const accessSessionId = await getAccessSessionIdFromRequest(req)
    const supabase = createClient()
    const { data: userSession, error } = await supabase
      .from('user_sessions')
      .select('id, guide_id, document_type, email, is_paid')
      .eq('id', sessionId)
      .single()

    if (error || !userSession) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404, headers: NO_STORE_HEADERS })
    }

    if (userSession.is_paid) {
      if (accessSessionId === userSession.id) {
        return NextResponse.json({
          url: `${getBaseUrl()}/ghid/${userSession.id}`,
        }, { headers: NO_STORE_HEADERS })
      }

      return NextResponse.json({ error: 'Session already unlocked' }, { status: 409, headers: NO_STORE_HEADERS })
    }

    const stripe = getStripe()
    const baseUrl = getBaseUrl()

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      client_reference_id: userSession.id,
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
        gaClientId: analyticsConsentGranted ? gaClientId ?? '' : '',
        analyticsConsent: analyticsConsentGranted ? 'granted' : 'denied',
      },
    })

    const response = NextResponse.json(
      { url: checkoutSession.url, checkoutSessionId: checkoutSession.id },
      { headers: NO_STORE_HEADERS }
    )
    await setCheckoutConfirmCookie(response, userSession.id)
    return response
  } catch (error) {
    console.error('Stripe create checkout session error:', error)
    return NextResponse.json({ error: 'Checkout init failed' }, { status: 500, headers: NO_STORE_HEADERS })
  }
}
