import { createHmac, timingSafeEqual } from 'crypto'

type GumroadSessionTokenPayload = {
  sid: string
  gid?: string | null
  typ: 'single' | 'family'
  exp: number
}

const DEFAULT_FIELD_NAME = 'Session token'
const DEFAULT_TTL_SECONDS = 60 * 60 * 2

function getSecret() {
  const secret = process.env.GUMROAD_SESSION_TOKEN_SECRET?.trim()
  if (!secret) {
    throw new Error('Missing GUMROAD_SESSION_TOKEN_SECRET')
  }
  return secret
}

function base64urlEncode(value: string) {
  return Buffer.from(value, 'utf8').toString('base64url')
}

function base64urlDecode(value: string) {
  return Buffer.from(value, 'base64url').toString('utf8')
}

function sign(input: string, secret: string) {
  return createHmac('sha256', secret).update(input).digest('base64url')
}

export function getGumroadSessionFieldName() {
  return process.env.GUMROAD_SESSION_FIELD_NAME?.trim() || DEFAULT_FIELD_NAME
}

export function createGumroadSessionToken({
  sessionId,
  guideId,
  offerType,
  ttlSeconds = DEFAULT_TTL_SECONDS,
}: {
  sessionId: string
  guideId?: string | null
  offerType: 'single' | 'family'
  ttlSeconds?: number
}) {
  const payload: GumroadSessionTokenPayload = {
    sid: sessionId,
    gid: guideId ?? null,
    typ: offerType,
    exp: Math.floor(Date.now() / 1000) + ttlSeconds,
  }

  const encodedPayload = base64urlEncode(JSON.stringify(payload))
  const signature = sign(encodedPayload, getSecret())
  return `${encodedPayload}.${signature}`
}

export function verifyGumroadSessionToken(token: string) {
  const [encodedPayload, providedSignature] = token.split('.')
  if (!encodedPayload || !providedSignature) {
    throw new Error('Invalid Gumroad session token format')
  }

  const expectedSignature = sign(encodedPayload, getSecret())
  const providedBuffer = Buffer.from(providedSignature)
  const expectedBuffer = Buffer.from(expectedSignature)

  if (
    providedBuffer.length !== expectedBuffer.length ||
    !timingSafeEqual(providedBuffer, expectedBuffer)
  ) {
    throw new Error('Invalid Gumroad session token signature')
  }

  const payload = JSON.parse(base64urlDecode(encodedPayload)) as GumroadSessionTokenPayload
  if (!payload.sid || !payload.typ || !payload.exp) {
    throw new Error('Invalid Gumroad session token payload')
  }

  if (payload.exp < Math.floor(Date.now() / 1000)) {
    throw new Error('Expired Gumroad session token')
  }

  return payload
}

export function extractGumroadSessionToken(formData: FormData) {
  const fieldName = getGumroadSessionFieldName()
  const expectedKeys = new Set([
    fieldName,
    `custom_fields[${fieldName}]`,
    `custom_fields[${fieldName.toLowerCase()}]`,
  ])

  for (const [key, value] of formData.entries()) {
    if (typeof value !== 'string') continue
    if (expectedKeys.has(key)) return value

    const normalizedKey = key.toLowerCase()
    const normalizedFieldName = fieldName.toLowerCase()
    if (
      normalizedKey === normalizedFieldName ||
      normalizedKey.includes(`custom_fields[${normalizedFieldName}]`) ||
      normalizedKey.includes(normalizedFieldName)
    ) {
      return value
    }
  }

  return null
}
