import type { NextRequest } from 'next/server'
import { getClientAddress } from '@/lib/security'

type RateLimitConfig = {
  key: string
  limit: number
  windowMs: number
}

type Entry = {
  count: number
  resetAt: number
}

const bucket = new Map<string, Entry>()

export function enforceRateLimit(req: NextRequest, config: RateLimitConfig) {
  const now = Date.now()
  const client = getClientAddress(req)
  const bucketKey = `${config.key}:${client}`
  const existing = bucket.get(bucketKey)

  if (!existing || existing.resetAt <= now) {
    bucket.set(bucketKey, { count: 1, resetAt: now + config.windowMs })
    return { ok: true as const, retryAfterSeconds: 0 }
  }

  if (existing.count >= config.limit) {
    return {
      ok: false as const,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    }
  }

  existing.count += 1
  bucket.set(bucketKey, existing)

  return { ok: true as const, retryAfterSeconds: 0 }
}
