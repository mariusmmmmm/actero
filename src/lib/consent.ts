'use client'

export const CONSENT_STORAGE_KEY = 'actero:cookie-consent'
export const OPEN_COOKIE_SETTINGS_EVENT = 'actero:open-cookie-settings'
export const CONSENT_VERSION = '2026-04-09'

export type ConsentPreferences = {
  analytics: boolean
  updatedAt: string
  version: string
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    __acteroGaConfigured?: boolean
  }
}

export function getStoredConsentPreferences(): ConsentPreferences | null {
  if (typeof window === 'undefined') return null

  const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
  if (!raw) return null

  try {
    const parsed = JSON.parse(raw) as ConsentPreferences
    if (typeof parsed.analytics !== 'boolean') return null
    return parsed
  } catch {
    return null
  }
}

export function hasAnalyticsConsent(): boolean {
  return getStoredConsentPreferences()?.analytics === true
}

export function saveConsentPreferences(preferences: { analytics: boolean }) {
  if (typeof window === 'undefined') return

  const payload: ConsentPreferences = {
    analytics: preferences.analytics,
    updatedAt: new Date().toISOString(),
    version: CONSENT_VERSION,
  }

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload))
}

function expireCookie(name: string, domain?: string) {
  if (typeof document === 'undefined') return

  const domainPart = domain ? `; domain=${domain}` : ''
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainPart}; SameSite=Lax`
}

export function clearAnalyticsCookies() {
  if (typeof document === 'undefined' || typeof window === 'undefined') return

  const hostname = window.location.hostname
  const rootDomainParts = hostname.split('.')
  const rootDomain =
    rootDomainParts.length >= 2
      ? `.${rootDomainParts.slice(-2).join('.')}`
      : undefined

  document.cookie
    .split('; ')
    .map((entry) => entry.split('=')[0])
    .filter((name) => name.startsWith('_ga'))
    .forEach((name) => {
      expireCookie(name)
      expireCookie(name, hostname)
      if (rootDomain) {
        expireCookie(name, rootDomain)
      }
    })
}

export function applyAnalyticsConsent(analyticsGranted: boolean, gaId?: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  const windowWithDisable = window as unknown as Window & Record<string, boolean | undefined>

  if (gaId) {
    windowWithDisable[`ga-disable-${gaId}`] = !analyticsGranted
  }

  window.gtag('consent', 'update', {
    ad_storage: 'denied',
    analytics_storage: analyticsGranted ? 'granted' : 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })

  if (analyticsGranted && gaId && !window.__acteroGaConfigured) {
    window.gtag('js', new Date())
    window.gtag('config', gaId, {
      anonymize_ip: true,
      allow_google_signals: false,
    })
    window.__acteroGaConfigured = true
  }

  if (!analyticsGranted) {
    clearAnalyticsCookies()
  }
}

export function openCookieSettings() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT))
}
