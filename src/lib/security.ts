import type { NextRequest, NextResponse } from 'next/server'
import { getBaseUrl } from '@/lib/base-url'

export const ACCESS_COOKIE_NAME = 'actero_access_token'
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

  if (!origin) return true

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
