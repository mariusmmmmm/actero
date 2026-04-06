import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Stripe from 'stripe'
import { fulfillStripeCheckoutSession } from '@/lib/stripe-fulfillment'
import { getStripe, getStripeWebhookSecret } from '@/lib/stripe'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.text()
    const signature = (await headers()).get('stripe-signature')

    if (!signature) {
      return NextResponse.json({ error: 'Missing Stripe signature' }, { status: 400 })
    }

    const stripe = getStripe()
    const event = stripe.webhooks.constructEvent(body, signature, getStripeWebhookSecret())

    switch (event.type) {
      case 'checkout.session.completed':
        await fulfillStripeCheckoutSession(event.data.object as Stripe.Checkout.Session)
        break
      default:
        break
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Stripe webhook error:', error)
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 })
  }
}
