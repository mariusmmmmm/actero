import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { fulfillStripeCheckoutSession } from '@/lib/stripe-fulfillment'
import { createClient } from '@/lib/supabase/server'
import {
  clearCheckoutConfirmCookie,
  getCheckoutConfirmSessionIdFromRequest,
  hasTrustedOrigin,
  isValidSessionId,
  NO_STORE_HEADERS,
  setAccessCookie,
} from '@/lib/security'
import { enforceRateLimit } from '@/lib/rate-limit'

export async function POST(req: NextRequest) {
  try {
    if (!hasTrustedOrigin(req)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: NO_STORE_HEADERS })
    }

    const rateLimit = enforceRateLimit(req, {
      key: 'stripe-confirm-session',
      limit: 20,
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
      checkoutSessionId?: string
      sessionId?: string
    }

    const checkoutSessionId = body.checkoutSessionId?.trim()
    const sessionId = body.sessionId?.trim()

    if (!checkoutSessionId || !isValidSessionId(sessionId)) {
      return NextResponse.json({ error: 'Missing checkoutSessionId or sessionId' }, { status: 400, headers: NO_STORE_HEADERS })
    }

    const checkoutConfirmSessionId = await getCheckoutConfirmSessionIdFromRequest(req)

    if (checkoutConfirmSessionId !== sessionId) {
      return NextResponse.json({ error: 'Missing checkout confirmation context' }, { status: 403, headers: NO_STORE_HEADERS })
    }

    const stripe = getStripe()
    const checkoutSession = await stripe.checkout.sessions.retrieve(checkoutSessionId)

    if (checkoutSession.metadata?.acteroSessionId !== sessionId) {
      return NextResponse.json({ error: 'Session mismatch' }, { status: 400, headers: NO_STORE_HEADERS })
    }

    if (checkoutSession.payment_status !== 'paid') {
      return NextResponse.json({ isPaid: false, paymentStatus: checkoutSession.payment_status }, { headers: NO_STORE_HEADERS })
    }

    await fulfillStripeCheckoutSession(checkoutSession)

    const supabase = createClient()
    const { data: userSession, error } = await supabase
      .from('user_sessions')
      .select('access_token, is_paid')
      .eq('id', sessionId)
      .single()

    if (error || !userSession?.is_paid || !userSession.access_token) {
      return NextResponse.json({ error: 'Confirmation failed' }, { status: 500, headers: NO_STORE_HEADERS })
    }

    const response = NextResponse.json({ isPaid: true }, { headers: NO_STORE_HEADERS })
    setAccessCookie(response, userSession.access_token)
    clearCheckoutConfirmCookie(response)
    return response
  } catch (error) {
    console.error('Stripe confirm session error:', error)
    return NextResponse.json({ error: 'Confirmation failed' }, { status: 500, headers: NO_STORE_HEADERS })
  }
}
