import type Stripe from 'stripe'
import { getBaseUrl } from '@/lib/base-url'
import { sendGaMeasurementEvent } from '@/lib/ga-measurement'
import { sendAccessEmail, sendFamilieEmail } from '@/lib/resend'
import { generateOpaqueToken, hashAccessToken } from '@/lib/security'
import { createClient } from '@/lib/supabase/server'

export async function fulfillStripeCheckoutSession(session: Stripe.Checkout.Session) {
  const sessionId = session.metadata?.acteroSessionId?.trim()
  const offerType = session.metadata?.offerType === 'family' ? 'family' : 'single'
  const gaClientId = session.metadata?.gaClientId?.trim()
  const analyticsConsentGranted = session.metadata?.analyticsConsent === 'granted'
  const email = session.customer_details?.email ?? session.customer_email ?? ''
  const paymentId = typeof session.payment_intent === 'string'
    ? session.payment_intent
    : session.id

  if (!sessionId) {
    console.warn('Stripe fulfillment: missing ActeRO session id', session.id)
    return { ok: false as const, reason: 'missing_session_id' }
  }

  const tokenExpiry = new Date()
  tokenExpiry.setMonth(tokenExpiry.getMonth() + 6)

  const supabase = createClient()
  const { data: existingSession } = await supabase
    .from('user_sessions')
    .select('id, is_paid, payment_reference')
    .eq('id', sessionId)
    .single()

  if (existingSession?.is_paid && existingSession.payment_reference === paymentId) {
    return { ok: true as const, reason: 'already_processed' }
  }

  if (offerType === 'family') {
    await handleFamiliePayment({
      supabase,
      email,
      paymentId,
      checkoutSessionId: session.id,
      sessionId,
      gaClientId,
      analyticsConsentGranted,
      tokenExpiry,
    })
    return { ok: true as const, reason: 'family_processed' }
  }

  const accessToken = generateOpaqueToken()
  const accessTokenHash = await hashAccessToken(accessToken)

  if (!accessTokenHash) {
    console.error('Stripe fulfillment: failed to hash access token')
    return { ok: false as const, reason: 'token_hash_failed' }
  }

  const { data: paidSession, error } = await supabase
    .from('user_sessions')
    .update({
      access_token: accessTokenHash,
      is_paid: true,
      product_type: 'ghid',
      payment_reference: paymentId,
      paid_at: new Date().toISOString(),
      email: email || null,
      token_expires_at: tokenExpiry.toISOString(),
      last_accessed_at: new Date().toISOString(),
    })
    .eq('id', sessionId)
    .select('id, guide_id, document_type')
    .single()

  if (error || !paidSession) {
    console.error('Stripe fulfillment: session update failed', error)
    return { ok: false as const, reason: 'session_update_failed' }
  }

  const accessUrl = `${getBaseUrl()}/ghid/access?token=${accessToken}`
  await sendAccessEmail({ to: email, accessUrl, guideId: paidSession.guide_id })
  if (analyticsConsentGranted && gaClientId) {
    await sendGaMeasurementEvent({
      clientId: gaClientId,
      eventName: 'purchase',
      params: {
        transaction_id: session.id,
        guide_id: paidSession.guide_id,
        problem_type: paidSession.document_type,
        offer_type: 'single',
        value: 9.99,
        currency: 'EUR',
        payment_provider: 'stripe',
        actero_session_id: paidSession.id,
        items: [
          {
            item_id: 'actero_single',
            item_name: 'Ghid complet ActeRO',
            item_category: paidSession.document_type ?? 'default',
            price: 9.99,
            quantity: 1,
          },
        ],
      },
    })
  }

  return { ok: true as const, reason: 'single_processed' }
}

async function handleFamiliePayment({
  supabase,
  email,
  paymentId,
  checkoutSessionId,
  sessionId,
  gaClientId,
  analyticsConsentGranted,
  tokenExpiry,
}: {
  supabase: ReturnType<typeof import('@/lib/supabase/server').createClient>
  email: string
  paymentId: string
  checkoutSessionId: string
  sessionId: string
  gaClientId?: string
  analyticsConsentGranted: boolean
  tokenExpiry: Date
}) {
  const baseUrl = getBaseUrl()
  const primaryAccessToken = generateOpaqueToken()
  const primaryAccessTokenHash = await hashAccessToken(primaryAccessToken)

  if (!primaryAccessTokenHash) {
    console.error('Stripe family fulfillment: failed to hash primary access token')
    return
  }

  const { data: session1, error: session1Error } = await supabase
    .from('user_sessions')
    .update({
      access_token: primaryAccessTokenHash,
      is_paid: true,
      product_type: 'familie',
      payment_reference: paymentId,
      paid_at: new Date().toISOString(),
      email: email || null,
      token_expires_at: tokenExpiry.toISOString(),
      last_accessed_at: new Date().toISOString(),
    })
    .eq('id', sessionId)
    .select('id, guide_id, document_type')
    .single()

  if (session1Error || !session1) {
    console.error('Stripe family fulfillment: session 1 update failed', session1Error)
    return
  }

  const { data: existingFamilySessions } = await supabase
    .from('user_sessions')
    .select('id')
    .eq('family_parent_id', session1.id)

  const extraSessions: { id: string; accessToken: string }[] = []

  for (const existingSession of existingFamilySessions ?? []) {
    const nextAccessToken = generateOpaqueToken()
    const nextAccessTokenHash = await hashAccessToken(nextAccessToken)

    if (!nextAccessTokenHash) {
      console.error('Stripe family fulfillment: failed to hash existing family access token')
      continue
    }

    const { error: updateError } = await supabase
      .from('user_sessions')
      .update({
        access_token: nextAccessTokenHash,
        token_expires_at: tokenExpiry.toISOString(),
        email: email || null,
        last_accessed_at: new Date().toISOString(),
      })
      .eq('id', existingSession.id)

    if (updateError) {
      console.error('Stripe family fulfillment: existing session token update failed', updateError)
      continue
    }

    extraSessions.push({ id: existingSession.id, accessToken: nextAccessToken })
  }

  for (let i = extraSessions.length; i < 3; i++) {
    const nextAccessToken = generateOpaqueToken()
    const nextAccessTokenHash = await hashAccessToken(nextAccessToken)

    if (!nextAccessTokenHash) {
      console.error('Stripe family fulfillment: failed to hash extra family access token')
      continue
    }

    const { data, error } = await supabase
      .from('user_sessions')
      .insert({
        access_token: nextAccessTokenHash,
        document_type: 'pasaport',
        country: 'de',
        situation: {},
        guide_id: 'pasaport-crds-de',
        is_paid: true,
        product_type: 'familie',
        family_parent_id: session1.id,
        email: email || null,
        token_expires_at: tokenExpiry.toISOString(),
      })
      .select('id')
      .single()

    if (error || !data) {
      console.error(`Stripe family fulfillment: extra session ${i + 2} create failed`, error)
      continue
    }

    extraSessions.push({ id: data.id, accessToken: nextAccessToken })
  }

  const accessLinks = [
    { nr: 1, url: `${baseUrl}/ghid/access?token=${primaryAccessToken}` },
    ...extraSessions.slice(0, 3).map((s, i) => ({
      nr: i + 2,
      url: `${baseUrl}/ghid/access?token=${s.accessToken}`,
    })),
  ]

  await sendFamilieEmail({ to: email, accessLinks })
  if (analyticsConsentGranted && gaClientId) {
    await sendGaMeasurementEvent({
      clientId: gaClientId,
      eventName: 'purchase',
      params: {
        transaction_id: checkoutSessionId,
        guide_id: session1.guide_id ?? undefined,
        problem_type: session1.document_type ?? undefined,
        offer_type: 'family',
        value: 24.99,
        currency: 'EUR',
        payment_provider: 'stripe',
        actero_session_id: session1.id,
        items: [
          {
            item_id: 'actero_family',
            item_name: 'Pachet familie ActeRO',
            item_category: session1.document_type ?? 'default',
            price: 24.99,
            quantity: 1,
          },
        ],
      },
    })
  }
}
