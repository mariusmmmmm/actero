'use client'

import { useEffect, useMemo, useState, useSyncExternalStore } from 'react'
import { trackEvent, withAttribution } from '@/lib/analytics'
import {
  applyAnalyticsConsent,
  getStoredConsentPreferences,
  OPEN_COOKIE_SETTINGS_EVENT,
  saveConsentPreferences,
} from '@/lib/consent'

export default function ConsentManager({ gaId }: { gaId: string }) {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [consentVersion, setConsentVersion] = useState(0)
  const [draftAnalyticsEnabled, setDraftAnalyticsEnabled] = useState(false)
  const isHydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  const storedConsent = useMemo(() => {
    if (!isHydrated) return null
    return getStoredConsentPreferences()
  }, [consentVersion, isHydrated])

  const hasDecision = storedConsent !== null
  const analyticsEnabled = storedConsent?.analytics ?? false
  const bannerOpen = isHydrated && (!hasDecision || settingsOpen)

  useEffect(() => {
    if (!isHydrated) return
    applyAnalyticsConsent(analyticsEnabled && hasDecision, gaId)

    const handleOpenSettings = () => {
      const latest = getStoredConsentPreferences()
      setDraftAnalyticsEnabled(latest?.analytics ?? false)
      setSettingsOpen(true)
    }

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpenSettings)
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpenSettings)
  }, [analyticsEnabled, gaId, hasDecision, isHydrated])

  useEffect(() => {
    if (!isHydrated || !hasDecision || !analyticsEnabled) return
    if (typeof document === 'undefined') return
    if (document.querySelector('script[data-actero-ga="external"]')) return

    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`
    script.async = true
    script.dataset.acteroGa = 'external'
    document.head.appendChild(script)
  }, [analyticsEnabled, gaId, hasDecision, isHydrated])

  const bannerTitle = useMemo(() => {
    if (settingsOpen) return 'Alege ce cookie-uri opționale accepți'
    return 'Respectăm confidențialitatea ta'
  }, [settingsOpen])

  const saveChoice = (analytics: boolean, source: 'accept' | 'essential_only' | 'settings') => {
    saveConsentPreferences({ analytics })
    applyAnalyticsConsent(analytics, gaId)
    setConsentVersion((value) => value + 1)
    setDraftAnalyticsEnabled(analytics)
    setSettingsOpen(false)

    if (analytics) {
      trackEvent('consent_analytics_accept', withAttribution({
        consent_source: source,
      }))
    } else {
      trackEvent('consent_analytics_reject', withAttribution({
        consent_source: source,
      }))
    }
  }

  return (
    <>
      {bannerOpen && (
        <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-gray-200 bg-white/98 backdrop-blur">
          <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold text-gray-900">{bannerTitle}</p>
              <p className="text-sm leading-relaxed text-gray-600">
                Folosim cookie-uri esențiale pentru funcționarea site-ului. Cookie-urile de analiză sunt opționale și ne ajută să înțelegem ce pagini funcționează bine, fără să îți afecteze accesul la ghiduri dacă refuzi.
              </p>
              <p className="text-xs leading-relaxed text-gray-500">
                Poți citi detaliile în{' '}
                <a href="/politica-de-confidentialitate" className="underline underline-offset-2">
                  Politica de confidențialitate
                </a>
                {' '}și poți schimba alegerea oricând din footer, din linkul „Preferințe cookie-uri”.
              </p>
            </div>

            {settingsOpen && (
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Cookie-uri esențiale</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500">
                      Necesare pentru securitate, sesiuni, plată și accesul la ghiduri. Sunt mereu active.
                    </p>
                  </div>
                  <span className="rounded-full bg-gray-900 px-2 py-1 text-[11px] font-semibold text-white">
                    Mereu active
                  </span>
                </div>

                <div className="mt-4 flex items-start justify-between gap-4 border-t border-gray-200 pt-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Cookie-uri de analiză</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500">
                      Ne ajută să măsurăm pagini vizitate, pași din ghidul rapid, plăți și deschiderea ghidului, prin Google Analytics. Nu folosim cookie-uri de marketing sau publicitate.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDraftAnalyticsEnabled((value) => !value)}
                    aria-pressed={settingsOpen ? draftAnalyticsEnabled : analyticsEnabled}
                    className={`relative h-7 w-12 rounded-full transition-colors ${
                      (settingsOpen ? draftAnalyticsEnabled : analyticsEnabled) ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-transform ${
                        (settingsOpen ? draftAnalyticsEnabled : analyticsEnabled) ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                    <span className="sr-only">Activează sau dezactivează cookie-urile de analiză</span>
                  </button>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
              {!settingsOpen && (
                <button
                  type="button"
                  onClick={() => {
                    setDraftAnalyticsEnabled(analyticsEnabled)
                    setSettingsOpen(true)
                  }}
                  className="rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700"
                >
                  Aleg eu
                </button>
              )}
              <button
                type="button"
                onClick={() => saveChoice(false, settingsOpen ? 'settings' : 'essential_only')}
                className="rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700"
              >
                Doar esențiale
              </button>
              <button
                type="button"
                onClick={() => saveChoice(settingsOpen ? draftAnalyticsEnabled : true, settingsOpen ? 'settings' : 'accept')}
                className="rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white"
              >
                {settingsOpen ? 'Salvează alegerea' : 'Accept analitice'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
