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

const stripe = new Stripe(secretKey)

const products = [
  {
    name: 'ActeRO — Ghid complet',
    price: 999,
    metadata: { offerType: 'single' },
  },
  {
    name: 'ActeRO — Pachet familie',
    price: 2499,
    metadata: { offerType: 'family' },
  },
]

for (const item of products) {
  const product = await stripe.products.create({
    name: item.name,
    metadata: item.metadata,
  })

  const price = await stripe.prices.create({
    product: product.id,
    currency: 'eur',
    unit_amount: item.price,
  })

  console.log(`${item.metadata.offerType}:`)
  console.log(`  product=${product.id}`)
  console.log(`  price=${price.id}`)
}
