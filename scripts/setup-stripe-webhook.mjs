import fs from 'node:fs'
import path from 'node:path'
import Stripe from 'stripe'

const envPath = path.join(process.cwd(), '.env.local')

if (fs.existsSync(envPath)) {
  const raw = fs.readFileSync(envPath, 'utf8')
  for (const line of raw.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const idx = trimmed.indexOf('=')
    if (idx === -1) continue
    const key = trimmed.slice(0, idx).trim()
    const value = trimmed.slice(idx + 1).trim()
    if (!(key in process.env)) {
      process.env[key] = value
    }
  }
}

const secretKey = process.env.STRIPE_SECRET_KEY?.trim()

if (!secretKey) {
  console.error('Missing STRIPE_SECRET_KEY')
  process.exit(1)
}

const baseUrl = (process.env.STRIPE_WEBHOOK_BASE_URL?.trim() || 'https://www.actero.ro').replace(/\/$/, '')
const webhookUrl = `${baseUrl}/api/stripe/webhook`
const stripe = new Stripe(secretKey)

const existing = await stripe.webhookEndpoints.list({ limit: 100 })
const match = existing.data.find((endpoint) => endpoint.url === webhookUrl)

if (match) {
  console.log(`existing_webhook=${match.id}`)
  console.log(`url=${match.url}`)
  console.log('signing secret is only shown at creation time')
  process.exit(0)
}

const created = await stripe.webhookEndpoints.create({
  url: webhookUrl,
  enabled_events: ['checkout.session.completed'],
  description: 'ActeRO Stripe webhook',
})

console.log(`webhook=${created.id}`)
console.log(`url=${created.url}`)
console.log(`secret=${created.secret}`)
