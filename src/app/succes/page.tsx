// ActeRO — app/succes/page.tsx
// Ecran succes după plată — polling webhook + cross-sell + share

'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import SiteHeader from '@/components/layout/SiteHeader'
import { persistAttribution, trackOnce, withAttribution } from '@/lib/analytics'
import { useAppStore } from '@/store/appStore'

const POLL_INTERVAL_MS = 2000

// Cross-sell per problemType
const crossSell: Record<string, { icon: string; text: string; href: string }[]> = {
  pasaport: [
    { icon: '🪪', text: 'Ai și buletinul expirat? Rezolvă-l acum', href: '/wizard' },
    { icon: '📜', text: 'Ai ceva de rezolvat în România? Ghid procură', href: '/wizard' },
  ],
  buletin: [
    { icon: '📕', text: 'Ai și pașaportul expirat? Ghid pașaport CRDS', href: '/wizard' },
    { icon: '📜', text: 'Ai proprietăți în România? Ghid procură', href: '/wizard' },
  ],
  'titlu-calatorie': [
    { icon: '📕', text: 'Acum rezolvă și pașaportul permanent', href: '/wizard' },
    { icon: '🪪', text: 'Sau buletinul — depinde ce îți lipsește', href: '/wizard' },
  ],
  procura: [
    { icon: '📕', text: 'Ai și pașaportul expirat? Ghid pașaport CRDS', href: '/wizard' },
    { icon: '🪪', text: 'Sau buletinul expirat', href: '/wizard' },
  ],
  default: [
    { icon: '📕', text: 'Rezolvă și pașaportul', href: '/wizard' },
    { icon: '🪪', text: 'Sau buletinul', href: '/wizard' },
  ],
}

const shareText =
  'Am rezolvat actele din Germania cu ActeRO. Dacă și tu ești blocat, încearcă — primii pași sunt gratuiți. actero.ro'

function SuccesPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const sessionId = searchParams.get('session') ?? ''
  const { problemType, unlockPaid } = useAppStore()

  const [status, setStatus] = useState<'polling' | 'ready'>('polling')
  const [timedOut, setTimedOut] = useState(false)
  const [copied, setCopied] = useState(false)
  const isPaid = status === 'ready'

  useEffect(() => {
    persistAttribution(searchParams)
  }, [searchParams])

  // Polling — verifică dacă webhook-ul a setat is_paid = true
  useEffect(() => {
    if (!sessionId || status !== 'polling' || timedOut) return

    const poll = async () => {
      try {
        const res = await fetch(`/api/session/status?session=${sessionId}`)
        const data = await res.json()
        if (data.isPaid) {
          unlockPaid()
          setStatus('ready')
          setTimedOut(false)
        }
      } catch {}
    }

    const timeout = setTimeout(() => setTimedOut(true), 10000)
    const interval = setInterval(poll, POLL_INTERVAL_MS)
    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [sessionId, status, timedOut, unlockPaid])

  useEffect(() => {
    if (!isPaid) return
    const offerType =
      typeof window !== 'undefined'
        ? window.sessionStorage.getItem('actero:last_offer_type') ?? 'single'
        : 'single'
    const rawValue =
      typeof window !== 'undefined'
        ? window.sessionStorage.getItem('actero:last_offer_value') ?? '9.99'
        : '9.99'
    const parsedValue = Number(rawValue)

    trackOnce(
      `paid_success_page_view:${sessionId}`,
      'paid_success_page_view',
      withAttribution({
        guide_id: useAppStore.getState().guideId ?? undefined,
        problem_type: problemType ?? undefined,
        offer_type: offerType,
        value: Number.isFinite(parsedValue) ? parsedValue : 9.99,
        currency: 'EUR',
        payment_provider: 'gumroad',
      }, searchParams)
    )
  }, [isPaid, problemType, searchParams, sessionId])

  const handleOpenGuide = () => {
    router.push(`/ghid/${sessionId}`)
  }

  const handleBackToGuide = () => {
    router.push(`/ghid/${sessionId}`)
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank')
  }

  const handleFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=https://actero.ro&quote=${encodeURIComponent(shareText)}`, '_blank')
  }

  const crossSellItems = crossSell[problemType ?? 'default'] ?? crossSell.default

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <SiteHeader />
      <div className="max-w-2xl mx-auto w-full px-5 py-8 flex-1">

        {/* Status polling */}
        {status === 'polling' && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4 animate-pulse">⏳</div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Confirmăm plata...</h2>
            <p className="text-sm text-gray-500">Câteva secunde</p>
          </div>
        )}

        {/* Timeout — plata nu a fost confirmată în timp */}
        {timedOut === true && !isPaid && (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">📧</div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Nu ai primit accesul?</h2>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Verifică folderul Spam. Dacă tot nu găsești emailul, scrie-ne la
              {' '}
              <a href="mailto:contact@actero.ro" className="font-semibold underline">
                contact@actero.ro
              </a>
              {' '}
              cu data plății și îți trimitem linkul în cel mult 24h.
            </p>
            <button
              onClick={handleBackToGuide}
              className="w-full py-4 bg-gray-900 text-white font-semibold rounded-xl text-sm"
            >
              Înapoi la ghid
            </button>
          </div>
        )}

        {/* Succes */}
        {status === 'ready' && (
          <>
            {/* Hero succes */}
            <div className="bg-green-50 rounded-2xl p-6 text-center mb-6">
              <div className="text-5xl mb-3">🎉</div>
              <h1 className="text-xl font-extrabold text-gray-900 mb-2">
                Ghidul tău este gata!
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ai acces complet la toți pașii. Poți începe acum.
              </p>
            </div>

            {/* CTA principal */}
            <button
              onClick={handleOpenGuide}
              className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl text-base mb-6"
            >
              Deschide ghidul meu →
            </button>

            {/* Share */}
            <div className="mb-6">
              <div className="text-sm font-semibold text-gray-900 mb-3">
                Ajută și un prieten cu același act:
              </div>
              <div className="bg-gray-50 rounded-xl p-4 mb-3">
                <p className="text-sm text-gray-600 italic leading-relaxed mb-3">
                  „{shareText}”
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={handleWhatsApp}
                    className="flex-1 py-2 bg-green-500 text-white font-semibold rounded-lg text-xs"
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={handleFacebook}
                    className="flex-1 py-2 bg-blue-600 text-white font-semibold rounded-lg text-xs"
                  >
                    Facebook
                  </button>
                  <button
                    onClick={handleCopy}
                    className="flex-1 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg text-xs"
                  >
                    {copied ? 'Copiat ✓' : 'Copiază'}
                  </button>
                </div>
              </div>
            </div>

            {/* Cross-sell */}
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">
                Ce urmează
              </div>
              {crossSellItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-gray-700 flex-1">{item.text}</span>
                  <span className="text-gray-300">›</span>
                </a>
              ))}
            </div>
          </>
        )}

      </div>
    </main>
  )
}

export default function SuccesPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-white flex flex-col">
        <SiteHeader />
        <div className="max-w-2xl mx-auto w-full px-5 py-8 flex-1" />
      </main>
    }>
      <SuccesPageContent />
    </Suspense>
  )
}
