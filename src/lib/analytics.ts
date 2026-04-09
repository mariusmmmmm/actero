type AnalyticsValue =
  | string
  | number
  | boolean
  | AnalyticsValue[]
  | { [key: string]: AnalyticsValue }
type AnalyticsParams = Record<string, AnalyticsValue | null | undefined>

type SearchParamsLike = {
  get: (name: string) => string | null
} | null | undefined

type StoredAttribution = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const ATTRIBUTION_KEY = 'actero:attribution'

function cleanParams(params: AnalyticsParams): Record<string, AnalyticsValue> {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== '')
  ) as Record<string, AnalyticsValue>
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', eventName, cleanParams(params))
}

export function trackOnce(storageKey: string, eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined') return
  const key = `actero:ga:${storageKey}`
  if (window.sessionStorage.getItem(key)) return
  trackEvent(eventName, params)
  window.sessionStorage.setItem(key, '1')
}

export function getUtmParams(searchParams?: SearchParamsLike): StoredAttribution {
  return cleanParams({
    utm_source: searchParams?.get('utm_source') ?? undefined,
    utm_medium: searchParams?.get('utm_medium') ?? undefined,
    utm_campaign: searchParams?.get('utm_campaign') ?? undefined,
    utm_content: searchParams?.get('utm_content') ?? undefined,
  }) as StoredAttribution
}

export function persistAttribution(searchParams?: SearchParamsLike) {
  if (typeof window === 'undefined') return
  const nextAttribution = getUtmParams(searchParams)
  if (Object.keys(nextAttribution).length === 0) return

  const previous = getStoredAttribution()
  window.sessionStorage.setItem(
    ATTRIBUTION_KEY,
    JSON.stringify({
      ...previous,
      ...nextAttribution,
    })
  )
}

export function getStoredAttribution(): StoredAttribution {
  if (typeof window === 'undefined') return {}
  const raw = window.sessionStorage.getItem(ATTRIBUTION_KEY)
  if (!raw) return {}

  try {
    const parsed = JSON.parse(raw) as StoredAttribution
    return cleanParams(parsed) as StoredAttribution
  } catch {
    return {}
  }
}

export function withAttribution(
  params: AnalyticsParams = {},
  searchParams?: SearchParamsLike
): Record<string, AnalyticsValue> {
  return cleanParams({
    ...getStoredAttribution(),
    ...getUtmParams(searchParams),
    ...params,
  })
}

export function getGaClientId(): string | null {
  if (typeof document === 'undefined') return null

  const gaCookie = document.cookie
    .split('; ')
    .find((part) => part.startsWith('_ga='))

  if (!gaCookie) return null

  const raw = decodeURIComponent(gaCookie.slice(4))
  const parts = raw.split('.')

  if (parts.length < 4) return null

  return `${parts[2]}.${parts[3]}`
}
