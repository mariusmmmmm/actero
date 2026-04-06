import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { fulfillStripeCheckoutSession } from '@/lib/stripe-fulfillment'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as {
      checkoutSessionId?: string
      sessionId?: string
    }

    const checkoutSessionId = body.checkoutSessionId?.trim()
    const sessionId = body.sessionId?.trim()

    if (!checkoutSessionId || !sessionId) {
      return NextResponse.json({ error: 'Missing checkoutSessionId or sessionId' }, { status: 400 })
    }

    const stripe = getStripe()
    const checkoutSession = await stripe.checkout.sessions.retrieve(checkoutSessionId)

    if (checkoutSession.metadata?.acteroSessionId !== sessionId) {
      return NextResponse.json({ error: 'Session mismatch' }, { status: 400 })
    }

    if (checkoutSession.payment_status !== 'paid') {
      return NextResponse.json({ isPaid: false, paymentStatus: checkoutSession.payment_status })
    }

    await fulfillStripeCheckoutSession(checkoutSession)

    return NextResponse.json({ isPaid: true })
  } catch (error) {
    console.error('Stripe confirm session error:', error)
    return NextResponse.json({ error: 'Confirmation failed' }, { status: 500 })
  }
}
