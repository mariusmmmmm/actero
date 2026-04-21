import type { NextRequest } from 'next/server'
import { getClientAddress } from '@/lib/security'
import { createClient } from '@/lib/supabase/server'

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

function enforceInMemoryRateLimit(req: NextRequest, config: RateLimitConfig) {
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

export async function enforceRateLimit(req: NextRequest, config: RateLimitConfig) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return enforceInMemoryRateLimit(req, config)
  }

  try {
    const now = new Date()
    const windowStart = new Date(now.getTime() - config.windowMs).toISOString()
    const client = getClientAddress(req)
    const supabase = createClient()

    const { count, error: countError } = await supabase
      .from('request_rate_limits')
      .select('*', { count: 'exact', head: true })
      .eq('route_key', config.key)
      .eq('client_ip', client)
      .gte('created_at', windowStart)

    if (countError) {
      console.error('Rate limit count error:', countError)
      return enforceInMemoryRateLimit(req, config)
    }

    if ((count ?? 0) >= config.limit) {
      return {
        ok: false as const,
        retryAfterSeconds: Math.max(1, Math.ceil(config.windowMs / 1000)),
      }
    }

    const { error: insertError } = await supabase.from('request_rate_limits').insert({
      route_key: config.key,
      client_ip: client,
      created_at: now.toISOString(),
    })

    if (insertError) {
      console.error('Rate limit insert error:', insertError)
      return enforceInMemoryRateLimit(req, config)
    }

    return { ok: true as const, retryAfterSeconds: 0 }
  } catch (error) {
    console.error('Rate limit fallback error:', error)
    return enforceInMemoryRateLimit(req, config)
  }
}
