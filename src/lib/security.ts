import type { NextRequest, NextResponse } from 'next/server'
import { getBaseUrl } from '@/lib/base-url'

export const ACCESS_COOKIE_NAME = 'actero_access_token'
export const CHECKOUT_CONFIRM_COOKIE_NAME = 'actero_checkout_confirm'
export const NO_STORE_HEADERS = {
  'Cache-Control': 'no-store, max-age=0',
} as const

const SESSION_ID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidSessionId(value: string | null | undefined): value is string {
  return typeof value === 'string' && SESSION_ID_REGEX.test(value.trim())
}

export function isValidEmail(value: string | null | undefined): value is string {
  return typeof value === 'string' && EMAIL_REGEX.test(value.trim())
}

export function normalizeString(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null

  const trimmed = value.trim()
  if (!trimmed || trimmed.length > maxLength) return null

  return trimmed
}

export function hasTrustedOrigin(req: NextRequest): boolean {
  const origin = req.headers.get('origin')

  if (!origin) return false

  try {
    const requestOrigin = new URL(req.url).origin
    const configuredOrigin = new URL(getBaseUrl()).origin
    const normalizedOrigin = new URL(origin).origin

    return normalizedOrigin === requestOrigin || normalizedOrigin === configuredOrigin
  } catch {
    return false
  }
}

export function getAccessTokenFromRequest(req: NextRequest): string | null {
  const token = req.cookies.get(ACCESS_COOKIE_NAME)?.value?.trim()
  return token || null
}

export async function getCheckoutConfirmSessionIdFromRequest(req: NextRequest): Promise<string | null> {
  const rawValue = req.cookies.get(CHECKOUT_CONFIRM_COOKIE_NAME)?.value?.trim()

  if (!rawValue) return null

  const [sessionId, nonce, signature] = rawValue.split(':')

  if (!isValidSessionId(sessionId) || !nonce || !signature) {
    return null
  }

  const expectedSignature = await signOpaqueValue(`${sessionId}:${nonce}`)
  if (!expectedSignature) return null

  if (signature !== expectedSignature) {
    return null
  }

  return sessionId
}

export function generateOpaqueToken(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(32))
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('')
}

async function signOpaqueValue(value: string): Promise<string | null> {
  const secret =
    process.env.ACTERO_COOKIE_SECRET?.trim() ||
    process.env.STRIPE_SECRET_KEY?.trim() ||
    process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()

  if (!secret) return null

  const encodedSecret = new TextEncoder().encode(secret)
  const encodedValue = new TextEncoder().encode(value)
  const key = await crypto.subtle.importKey(
    'raw',
    encodedSecret,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const signature = await crypto.subtle.sign('HMAC', key, encodedValue)
  return Array.from(new Uint8Array(signature), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

export function getClientAddress(req: NextRequest): string {
  const forwardedFor = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  const realIp = req.headers.get('x-real-ip')?.trim()

  return forwardedFor || realIp || 'unknown'
}

export function setAccessCookie(response: NextResponse, accessToken: string) {
  response.cookies.set(ACCESS_COOKIE_NAME, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 180,
    path: '/',
  })

  response.cookies.set('actero_session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  })
}

export async function setCheckoutConfirmCookie(response: NextResponse, sessionId: string) {
  const nonce = generateOpaqueToken()
  const signature = await signOpaqueValue(`${sessionId}:${nonce}`)

  if (!signature) {
    throw new Error('Missing ACTERO_COOKIE_SECRET or equivalent server secret')
  }

  response.cookies.set(CHECKOUT_CONFIRM_COOKIE_NAME, `${sessionId}:${nonce}:${signature}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 2,
    path: '/',
  })
}

export function clearCheckoutConfirmCookie(response: NextResponse) {
  response.cookies.set(CHECKOUT_CONFIRM_COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  })
}
