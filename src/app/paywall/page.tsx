// ActeRO — app/paywall/page.tsx
// Ecran de conversie Free → Paid · 2 opțiuni + Stripe Checkout

'use client'

import { Suspense, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import SiteHeader from '@/components/layout/SiteHeader'
import { getGaClientId, persistAttribution, trackEvent, trackOnce, withAttribution } from '@/lib/analytics'
import { TEST_MODE } from '@/lib/config'
import { hasAnalyticsConsent } from '@/lib/consent'
import { getGuideTitle } from '@/lib/guides/meta'
import { useAppStore } from '@/store/appStore'

// ─── CONȚINUT PAYWALL per ghid ────────────────────────────────────────────────

const includes: Record<string, string[]> = {
  pasaport: [
    'Toți pașii cu instrucțiuni detaliate',
    'Cum creezi cererea corect pe econsulat.ro',
    'Cum obții programarea — trucuri reale din comunitate',
    'Card consulat: adresă, telefon, Maps, Waze, program ridicare',
    'Ce se întâmplă la ghișeu și cum reacționezi la surprize',
    'Listă de acte pe care o poți descărca',
    'Stadiul dosarului, pas cu pas',
    'Parteneri verificați în Germania',
    'Suport prin email dacă rămâi blocat',
  ],
  buletin: [
    'Toți pașii cu instrucțiuni detaliate',
    'Cum găsești și contactezi SPCLEP-ul competent',
    'Cum faci programare online (acolo unde există)',
    'Ce se întâmplă la ghișeu — pas cu pas',
    'Listă de acte pe care o poți descărca',
    'Stadiul dosarului, pas cu pas',
    'Suport prin email dacă rămâi blocat',
  ],
  'titlu-calatorie': [
    'Toți pașii cu instrucțiuni detaliate',
    'Numere urgențe la toate 4 consulatele',
    'Cum obții programarea de urgență rapid',
    'Ce document permanent să faci după urgență',
    'Listă de acte + stadiul dosarului',
    'Suport prin email',
  ],
  procura: [
    'Toți pașii cu instrucțiuni detaliate',
    'Cum obții programarea pentru acte notariale',
    'Ce se întâmplă la ghișeu când semnezi procura',
    'Cum trimiți procura în România prin curier',
    'Cum găsești un notar de încredere în România',
    'Listă de acte + stadiul dosarului',
    'Suport prin email',
  ],
  default: [
    'Toți pașii cu instrucțiuni detaliate',
    'Listă de acte pe care o poți descărca',
    'Stadiul dosarului, pas cu pas',
    'Parteneri verificați în Germania',
    'Suport prin email dacă rămâi blocat',
  ],
}

function getIncludes(problemType: string | null): string[] {
  if (!problemType) return includes.default
  return includes[problemType] ?? includes.default
}

function getPaywallCopy(guideId: string | null, problemType: string | null) {
  if (guideId === 'pasaport-minor-crds-de') {
    return {
      title: 'Deblochezi ghidul pentru pașaportul copilului.',
      subtitle: 'Vezi exact ce pregătesc părinții, ce trebuie pentru minor și ce se întâmplă la consulat.',
      bullets: [
        'lista exactă de acte pentru minor și pentru părinți',
        'toți pașii în ordinea corectă pentru cerere, programare și depunere',
        'ce faci diferit dacă lipsește un părinte sau copilul e născut în Germania',
      ],
      cardTitle: 'Ghid complet pentru pașaportul copilului',
      cardSubtitle: 'Pași clari pentru minor + părinți + consulat, fără să ghicești ce lipsește.',
    }
  }

  if (guideId === 'transcriere-nastere-de') {
    return {
      title: 'Deblochezi ghidul pentru transcrierea certificatului de naștere.',
      subtitle: 'Vezi ordinea exactă a pașilor, actele corecte și ce urmează după ce copilul primește CNP-ul.',
      bullets: [
        'lista exactă de acte pentru transcriere și excepțiile importante',
        'toți pașii în ordinea corectă pentru cerere, programare și ridicare',
        'cum continui apoi cu pașaportul sau primul buletin al copilului',
      ],
      cardTitle: 'Ghid complet pentru transcriere',
      cardSubtitle: 'Documente, programare, consulat și ce urmează după certificatul românesc.',
    }
  }

  if (problemType === 'pasaport') {
    return {
      title: 'Deblochezi ghidul complet pentru pașaportul tău.',
      subtitle: 'Vezi exact ce acte îți trebuie, ce alegi pe econsulat și cum ajungi la programare fără pași greșiți.',
      bullets: [
        'lista exactă de acte pentru cazul tău și consulatul tău',
        'toți pașii în ordinea corectă pentru cerere, programare și ridicare',
        'ce alegi pe econsulat și ce faci diferit dacă pașaportul e expirat, pierdut sau pentru copil',
      ],
      cardTitle: 'Ghid complet pentru pașaport',
      cardSubtitle: 'Cerere, programare, consulat și ridicare, în ordinea corectă.',
    }
  }

  if (problemType === 'buletin') {
    return {
      title: 'Deblochezi ghidul complet pentru buletinul tău.',
      subtitle: 'Vezi exact ce acte pregătești, unde mergi și cum organizezi corect deplasarea în România.',
      bullets: [
        'lista exactă de acte pentru situația ta și tipul de domiciliu',
        'toți pașii în ordinea corectă pentru deplasare, depunere și ridicare',
        'ce faci diferit dacă buletinul e expirat, pierdut sau este primul tău act românesc',
      ],
      cardTitle: 'Ghid complet pentru buletin',
      cardSubtitle: 'Acte, deplasare, SPCLEP și ridicare, fără drumuri făcute prost.',
    }
  }

  if (problemType === 'titlu-calatorie') {
    return {
      title: 'Deblochezi ghidul complet pentru titlul de călătorie.',
      subtitle: 'Vezi exact cu ce mergi la consulat, ce faci dacă e furt și ce document permanent rezolvi după România.',
      bullets: [
        'lista exactă de acte pentru urgența ta',
        'toți pașii în ordinea corectă pentru mersul la consulat și emitere',
        'ce faci imediat după ce ajungi în România ca să nu rămâi iar fără acte',
      ],
      cardTitle: 'Ghid complet pentru titlu de călătorie',
      cardSubtitle: 'Urgență, consulat și pașii de după întoarcerea în România.',
    }
  }

  if (problemType === 'procura') {
    return {
      title: 'Deblochezi ghidul complet pentru procura ta.',
      subtitle: 'Vezi exact ce pregătești înainte de consulat, ce trebuie să conțină procura și ce trimiți în România.',
      bullets: [
        'lista exactă de acte și conținutul de verificat înainte de programare',
        'toți pașii în ordinea corectă pentru consulat, semnare și trimiterea procurii',
        'ce faci diferit dacă procura e pentru proprietate, moștenire, bancă sau divorț',
      ],
      cardTitle: 'Ghid complet pentru procură',
      cardSubtitle: 'Conținut, programare, consulat și trimiterea actului în România.',
    }
  }

  return {
    title: 'Deblochezi ghidul complet pentru cazul tău.',
    subtitle: 'Vezi exact ce acte îți trebuie, ce alegi și ce faci mai departe, fără drumuri degeaba.',
    bullets: [
      'lista exactă de acte pentru situația ta',
      'toți pașii în ordinea corectă, fără să ghicești ce urmează',
      'ce alegi și ce faci mai departe în cazul tău exact',
    ],
    cardTitle: 'Ghid complet',
    cardSubtitle: 'Pașii exacți pentru cazul tău, într-un singur loc.',
  }
}

// ─── COMPONENTE ───────────────────────────────────────────────────────────────

function TrustBadges() {
  return (
    <div className="flex justify-center gap-4 text-xs text-gray-500 mb-6">
      <span>🔒 Plată securizată</span>
      <span>↩️ 30 zile returnare</span>
      <span>⭐ 600+ utilizatori</span>
    </div>
  )
}

function IncludesList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-2 mb-6">
      {items.map((item, i) => (
        <div key={i} className="flex gap-3 text-sm text-gray-700">
          <span className="text-green-500 font-bold flex-shrink-0">✓</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

function getOfferAnalytics(offerType: 'single' | 'family') {
  if (offerType === 'family') {
    return {
      value: 24.99,
      itemId: 'actero_family',
      itemName: 'Pachet familie ActeRO',
    }
  }

  return {
    value: 9.99,
    itemId: 'actero_single',
    itemName: 'Ghid complet ActeRO',
  }
}

function markPostPurchaseIntent(sessionId: string, offerType: 'single' | 'family', value: number) {
  if (typeof window === 'undefined') return

  window.sessionStorage.setItem('actero:last_offer_type', offerType)
  window.sessionStorage.setItem('actero:last_offer_value', String(value))
  if (sessionId) {
    window.sessionStorage.setItem('actero:last_checkout_session_id', sessionId)
  }
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

function PaywallPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const sessionId = searchParams.get('session') ?? ''
  const { guideId, problemType, unlockPaid } = useAppStore()
  const isHydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
  const [benefitsOpen, setBenefitsOpen] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [termsPromptVisible, setTermsPromptVisible] = useState(false)
  const [checkoutLoading, setCheckoutLoading] = useState<'single' | 'family' | null>(null)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)
  const termsCardRef = useRef<HTMLLabelElement | null>(null)
  const termsCheckboxRef = useRef<HTMLInputElement | null>(null)

  const includesList = getIncludes(problemType)
  const guideLabel = getGuideTitle(guideId)
  const paywallCopy = getPaywallCopy(guideId, problemType)

  useEffect(() => {
    if (!isHydrated) return
    persistAttribution(searchParams)
    trackOnce(
      `paywall_view:${sessionId || guideId || problemType || 'unknown'}`,
      'paywall_view',
      withAttribution({
        guide_id: guideId ?? undefined,
        problem_type: problemType ?? undefined,
      }, searchParams)
    )
  }, [guideId, isHydrated, problemType, searchParams, sessionId])

  const createCheckoutSession = async (offerType: 'single' | 'family') => {
    const gaClientId = getGaClientId()
    const res = await fetch('/api/stripe/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId,
        guideId,
        offerType,
        gaClientId,
        analyticsConsent: hasAnalyticsConsent(),
      }),
    })

    if (!res.ok) {
      throw new Error('Nu am putut inițializa checkout-ul')
    }

    const data = await res.json() as { url: string; checkoutSessionId?: string }
    return data
  }

  const ensureTermsAccepted = (offerType: 'single' | 'family') => {
    if (termsAccepted) return true

    setTermsPromptVisible(true)
    setCheckoutError(null)
    trackOnce(
      `paywall_terms_prompt_view:${sessionId}:${offerType}`,
      'paywall_terms_prompt_view',
      withAttribution({
        guide_id: guideId ?? undefined,
        problem_type: problemType ?? undefined,
        offer_type: offerType,
      }, searchParams)
    )
    trackEvent('paywall_terms_required_click', withAttribution({
      guide_id: guideId ?? undefined,
      problem_type: problemType ?? undefined,
      offer_type: offerType,
    }, searchParams))

    termsCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    window.setTimeout(() => {
      termsCheckboxRef.current?.focus()
    }, 250)

    return false
  }

  const handleGhid = async () => {
    if (!ensureTermsAccepted('single')) return
    const offer = getOfferAnalytics('single')
    markPostPurchaseIntent(sessionId, 'single', offer.value)
    setCheckoutError(null)
    trackEvent('paywall_purchase_click', withAttribution({
      guide_id: guideId ?? undefined,
      problem_type: problemType ?? undefined,
      offer_type: 'single',
      value: offer.value,
      currency: 'EUR',
    }, searchParams))
    if (TEST_MODE) {
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem('actero:pending_open_guide_session', sessionId)
      }
      unlockPaid()
      router.push(`/ghid/${sessionId}`)
      return
    }
    try {
      setCheckoutLoading('single')
      const { url: checkoutUrl, checkoutSessionId } = await createCheckoutSession('single')
      trackEvent('begin_checkout', withAttribution({
        guide_id: guideId ?? undefined,
        problem_type: problemType ?? undefined,
        offer_type: 'single',
        currency: 'EUR',
        value: offer.value,
        items: [
          {
            item_id: offer.itemId,
            item_name: offer.itemName,
            item_category: problemType ?? 'default',
            price: offer.value,
            quantity: 1,
          },
        ],
      }, searchParams))
      trackEvent('checkout_redirect', withAttribution({
        guide_id: guideId ?? undefined,
        problem_type: problemType ?? undefined,
        offer_type: 'single',
        currency: 'EUR',
        value: offer.value,
        checkout_session_id: checkoutSessionId ?? undefined,
        payment_provider: 'stripe',
      }, searchParams))
      window.location.href = checkoutUrl
    } catch (error) {
      console.error('Stripe checkout init error:', error)
      setCheckoutError('Checkout-ul nu a putut fi inițializat. Încearcă din nou.')
      trackEvent('checkout_init_error', withAttribution({
        guide_id: guideId ?? undefined,
        problem_type: problemType ?? undefined,
        offer_type: 'single',
        payment_provider: 'stripe',
      }, searchParams))
      setCheckoutLoading(null)
    }
  }

  const handleFamilie = async () => {
    if (!ensureTermsAccepted('family')) return
    const offer = getOfferAnalytics('family')
    markPostPurchaseIntent(sessionId, 'family', offer.value)
    setCheckoutError(null)
    trackEvent('paywall_family_click', withAttribution({
      guide_id: guideId ?? undefined,
      problem_type: problemType ?? undefined,
      offer_type: 'family',
      value: offer.value,
      currency: 'EUR',
    }, searchParams))
    if (TEST_MODE) {
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem('actero:pending_open_guide_session', sessionId)
      }
      unlockPaid()
      router.push(`/ghid/${sessionId}`)
      return
    }
    try {
      setCheckoutLoading('family')
      const { url: checkoutUrl, checkoutSessionId } = await createCheckoutSession('family')
      trackEvent('begin_checkout', withAttribution({
        guide_id: guideId ?? undefined,
        problem_type: problemType ?? undefined,
        offer_type: 'family',
        currency: 'EUR',
        value: offer.value,
        items: [
          {
            item_id: offer.itemId,
            item_name: offer.itemName,
            item_category: problemType ?? 'default',
            price: offer.value,
            quantity: 1,
          },
        ],
      }, searchParams))
      trackEvent('checkout_redirect', withAttribution({
        guide_id: guideId ?? undefined,
        problem_type: problemType ?? undefined,
        offer_type: 'family',
        currency: 'EUR',
        value: offer.value,
        checkout_session_id: checkoutSessionId ?? undefined,
        payment_provider: 'stripe',
      }, searchParams))
      window.location.href = checkoutUrl
    } catch (error) {
      console.error('Stripe family checkout init error:', error)
      setCheckoutError('Checkout-ul nu a putut fi inițializat. Încearcă din nou.')
      trackEvent('checkout_init_error', withAttribution({
        guide_id: guideId ?? undefined,
        problem_type: problemType ?? undefined,
        offer_type: 'family',
        payment_provider: 'stripe',
      }, searchParams))
      setCheckoutLoading(null)
    }
  }

  const handleBack = () => {
    router.push(`/ghid?session=${sessionId}`)
  }

  if (!isHydrated) {
    return (
      <main className="min-h-screen bg-white flex flex-col">
        <SiteHeader />
        <div className="max-w-2xl mx-auto w-full px-5 flex-1 flex flex-col" />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <SiteHeader />
      <div className="max-w-2xl mx-auto w-full px-5 flex-1 flex flex-col">

        <div className="py-6 flex justify-end">
          <button onClick={handleBack} className="text-sm text-gray-400 hover:text-gray-600">
            ← Înapoi la ghid
          </button>
        </div>

        {/* Hero */}
        <div className="bg-gray-900 rounded-2xl px-5 py-6 text-center mb-6">
          <h1 className="text-xl font-extrabold text-white mb-2">
            {paywallCopy.title}
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            {paywallCopy.subtitle}
          </p>
        </div>

        {/* Trust badges */}
        <TrustBadges />

        <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-4">
          <div className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">
            Ce primești la 9,99€
          </div>
          <div className="space-y-2">
            {paywallCopy.bullets.map((bullet) => (
              <div key={bullet} className="flex gap-2 text-sm text-gray-700">
                <span className="text-green-500">✓</span>
                <span>{bullet}</span>
              </div>
            ))}
            <div className="flex gap-2 text-sm text-gray-700">
              <span className="text-green-500">✓</span>
              <span>acces imediat după plată, plus link pe email valabil 6 luni</span>
            </div>
          </div>
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
            <div className="mb-2 text-xs font-bold uppercase tracking-wide text-green-700">
              Te ajută dacă
            </div>
            <div className="space-y-2 text-sm text-green-900">
              <p>știi deja ce problemă ai, dar nu vrei să ratezi un act sau un pas important</p>
              <p>vrei tot traseul pentru {guideLabel ?? 'cazul tău'}, nu doar orientarea inițială</p>
              <p>vrei să vezi exact ce faci la consulat, pe econsulat sau în România</p>
            </div>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <div className="mb-2 text-xs font-bold uppercase tracking-wide text-amber-700">
              Nu e pentru tine dacă
            </div>
            <div className="space-y-2 text-sm text-amber-900">
              <p>vrei doar să vezi direcția generală, fără pașii compleți</p>
              <p>situația ta s-a schimbat și trebuie mai întâi să refaci răspunsurile din ghidul rapid</p>
              <p>cauți reprezentare juridică sau intervenție directă în locul tău</p>
            </div>
          </div>
        </div>

        {/* Opțiuni preț */}
        <div className="flex flex-col gap-3 mb-6">
          <label
            ref={termsCardRef}
            className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
              termsPromptVisible && !termsAccepted
                ? 'border-red-300 bg-red-50 text-red-800'
                : 'border-gray-200 bg-gray-50 text-gray-600'
            }`}
          >
            <input
              ref={termsCheckboxRef}
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => {
                const accepted = e.target.checked
                setTermsAccepted(accepted)
                if (accepted) {
                  setTermsPromptVisible(false)
                }
                if (accepted) {
                  trackEvent('paywall_terms_accept', withAttribution({
                    guide_id: guideId ?? undefined,
                    problem_type: problemType ?? undefined,
                  }, searchParams))
                }
              }}
              className="mt-0.5 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-400"
            />
            <span className="leading-relaxed">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide">
                Pas obligatoriu înainte de plată
              </span>
              Am citit și accept{' '}
              <a href="/termeni-si-conditii" className="underline underline-offset-2">
                Termenii și Condițiile
              </a>{' '}
              și{' '}
              <a
                href="/politica-de-confidentialitate"
                className="underline underline-offset-2"
              >
                Politica de confidențialitate
              </a>
              . Sunt de acord să primesc acces imediat la conținutul digital după
              confirmarea plății.
            </span>
          </label>
          {!termsAccepted && (
            <div className={`rounded-xl px-4 py-3 text-sm ${
              termsPromptVisible
                ? 'border border-red-200 bg-red-50 text-red-700'
                : 'border border-blue-100 bg-blue-50 text-blue-900'
            }`}>
              {termsPromptVisible
                ? 'Trebuie să accepți mai întâi Termenii și Condițiile pentru a continua la plată.'
                : 'Bifează mai întâi acceptarea Termenilor și Condițiilor, apoi butonul de plată devine activ.'}
            </div>
          )}

          {/* Opțiunea recomandată */}
          <div className="border-2 border-green-500 bg-green-50 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="font-bold text-gray-900 text-sm">{paywallCopy.cardTitle}</div>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Recomandat
              </span>
            </div>
            <div className="text-2xl font-extrabold text-gray-900 mb-1">
              9,99€ <span className="text-sm font-normal text-gray-500">· o singură dată</span>
            </div>
            <div className="text-xs text-gray-600 mb-3">
              {paywallCopy.cardSubtitle}
            </div>
            <div className="mb-3 rounded-xl bg-white/70 px-3 py-2 text-xs text-gray-700">
              Îl primești imediat după plată și îl poți deschide direct din email.
            </div>
            <button
              onClick={handleGhid}
              disabled={checkoutLoading !== null}
              aria-describedby={!termsAccepted ? 'paywall-terms-hint' : undefined}
              className="w-full py-3 bg-gray-900 text-white font-bold rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {checkoutLoading === 'single'
                ? 'Se deschide checkout-ul...'
                : 'Plătesc 9,99€ și primesc ghidul →'}
            </button>
          </div>

          {/* Pachet familie */}
          <div className="border-2 border-gray-200 bg-white rounded-2xl p-4">
            <div className="font-bold text-gray-900 text-sm mb-1">Pachet familie</div>
            <div className="text-2xl font-extrabold text-gray-900 mb-1">
              24,99€ <span className="text-sm font-normal text-gray-500">· până la 4 acte</span>
            </div>
            <div className="text-xs text-gray-600 mb-3">
              Rezolvi toate actele familiei: buletin + pașaport + procură + orice altceva
            </div>
            <button
              onClick={handleFamilie}
              disabled={checkoutLoading !== null}
              aria-describedby={!termsAccepted ? 'paywall-terms-hint' : undefined}
              className="w-full py-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {checkoutLoading === 'family'
                ? 'Se deschide checkout-ul...'
                : 'Aleg pachetul familie →'}
            </button>
          </div>

          {checkoutError && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {checkoutError}
            </div>
          )}

        </div>

        <div className="mb-6 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-4">
          <div className="mb-1 text-sm font-semibold text-blue-900">
            După plată primești imediat emailul cu linkul tău de acces
          </div>
          <p className="text-sm leading-relaxed text-blue-800">
            Plata se finalizează securizat prin Stripe, iar apoi primești pe email linkul personal către ghidul tău complet.
            După confirmare, verifică inbox-ul și spam-ul pentru emailul de la ActeRO.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-gray-200 bg-white px-4 py-4">
          <div className="mb-2 text-sm font-semibold text-gray-900">
            Ce se întâmplă dacă nu te ajută
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p>ai 30 de zile pentru returnare dacă ghidul nu îți este util în cazul tău</p>
            <p>ne scrii pe email, verificăm rapid situația și îți returnăm banii fără să te plimbăm inutil</p>
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-green-100 bg-green-50 px-4 py-4">
          <div className="mb-1 text-sm font-semibold text-green-900">
            Varianta gratuită vs ghidul complet
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white px-3 py-3">
              <div className="mb-1 text-xs font-bold uppercase tracking-wide text-gray-500">
                Gratuit
              </div>
              <p className="text-sm text-gray-700">
                vezi direcția corectă și primii 2 pași
              </p>
            </div>
            <div className="rounded-xl border border-green-200 bg-white px-3 py-3">
              <div className="mb-1 text-xs font-bold uppercase tracking-wide text-green-700">
                Complet
              </div>
              <p className="text-sm text-gray-700">
                primești tot traseul, toate actele și explicațiile pentru cazul tău
              </p>
            </div>
          </div>
        </div>
        <p id="paywall-terms-hint" className="sr-only">
          Pentru a continua la checkout, acceptă mai întâi Termenii și Condițiile.
        </p>

        {/* Ce primești */}
        <div className="mb-4">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
            Ce primești în ghidul complet:
          </div>

          <IncludesList items={includesList.slice(0, 3)} />

          <button
            onClick={() => setBenefitsOpen(!benefitsOpen)}
            className="mt-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600 hover:border-gray-300 hover:text-gray-800 transition-colors"
          >
            {benefitsOpen ? '▲ Mai puține' : `▼ Vezi toate beneficiile (${includesList.length - 3} în plus)`}
          </button>

          {benefitsOpen && (
            <div className="mt-2 flex flex-col gap-2">
              <IncludesList items={includesList.slice(3)} />
            </div>
          )}
        </div>

        {/* Garanție */}
        <div className="text-center text-xs text-gray-400 mb-8">
          Satisfacție garantată · dacă ghidul nu te ajută, returnăm banii în 30 de zile.
          <br />
          Fără întrebări.
        </div>

      </div>
    </main>
  )
}

export default function PaywallPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-white flex flex-col">
        <SiteHeader />
        <div className="max-w-2xl mx-auto w-full px-5 flex-1 flex flex-col" />
      </main>
    }>
      <PaywallPageContent />
    </Suspense>
  )
}
