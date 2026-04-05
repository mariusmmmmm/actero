// ActeRO — app/paywall/page.tsx
// Ecran de conversie Free → Paid · 2 opțiuni + Gumroad overlay

'use client'

import { Suspense, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import SiteHeader from '@/components/layout/SiteHeader'
import { TEST_MODE } from '@/lib/config'
import { useAppStore } from '@/store/appStore'

// ─── CONFIGURARE GUMROAD ──────────────────────────────────────────────────────

const GUMROAD_LINK_GHID = process.env.NEXT_PUBLIC_GUMROAD_LINK_GHID ?? 'https://actero.gumroad.com/l/ghid'
const GUMROAD_LINK_FAMILIE = process.env.NEXT_PUBLIC_GUMROAD_LINK_FAMILIE ?? 'https://actero.gumroad.com/l/familie'

// ─── CONȚINUT PAYWALL per ghid ────────────────────────────────────────────────

const includes: Record<string, string[]> = {
  pasaport: [
    'Toți pașii cu instrucțiuni detaliate',
    'Cum creezi cererea corect pe econsulat.ro',
    'Cum obții programarea — trucuri reale din comunitate',
    'Card consulat: adresă, telefon, Maps, Waze, program ridicare',
    'Ce se întâmplă la ghișeu și cum reacționezi la surprize',
    'Checklist downloadabil pentru ghișeu',
    'Tracker status dosar',
    'Parteneri verificați în Germania',
    'Suport prin email dacă rămâi blocat',
  ],
  buletin: [
    'Toți pașii cu instrucțiuni detaliate',
    'Cum găsești și contactezi SPCLEP-ul competent',
    'Cum faci programare online (acolo unde există)',
    'Ce se întâmplă la ghișeu — pas cu pas',
    'Checklist downloadabil',
    'Tracker status dosar',
    'Suport prin email dacă rămâi blocat',
  ],
  'titlu-calatorie': [
    'Toți pașii cu instrucțiuni detaliate',
    'Numere urgențe la toate 4 consulatele',
    'Cum obții programarea de urgență rapid',
    'Ce document permanent să faci după urgență',
    'Checklist + Tracker',
    'Suport prin email',
  ],
  procura: [
    'Toți pașii cu instrucțiuni detaliate',
    'Cum obții programarea pentru acte notariale',
    'Ce se întâmplă la ghișeu când semnezi procura',
    'Cum trimiți procura în România prin curier',
    'Cum găsești un notar de încredere în România',
    'Checklist + Tracker',
    'Suport prin email',
  ],
  default: [
    'Toți pașii cu instrucțiuni detaliate',
    'Checklist downloadabil pentru ghișeu',
    'Tracker status dosar',
    'Parteneri verificați în Germania',
    'Suport prin email dacă rămâi blocat',
  ],
}

function getIncludes(problemType: string | null): string[] {
  if (!problemType) return includes.default
  return includes[problemType] ?? includes.default
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

// ─── PAGE ─────────────────────────────────────────────────────────────────────

function PaywallPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const sessionId = searchParams.get('session') ?? ''
  const { guideId, problemType, unlockPaid } = useAppStore()
  const [benefitsOpen, setBenefitsOpen] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)

  const includesList = getIncludes(problemType)

  // Construiește URL Gumroad cu sessionId ca parametru custom
  const buildGumroadUrl = (baseUrl: string) => {
    const url = new URL(baseUrl)
    if (sessionId) url.searchParams.set('actero_session_id', sessionId)
    return url.toString()
  }

  const handleGhid = () => {
    if (TEST_MODE) {
      unlockPaid()
      router.push(`/ghid/${sessionId}`)
      return
    }
    window.location.href = buildGumroadUrl(GUMROAD_LINK_GHID)
  }

  const handleFamilie = () => {
    if (TEST_MODE) {
      unlockPaid()
      router.push(`/ghid/${sessionId}`)
      return
    }
    window.location.href = buildGumroadUrl(GUMROAD_LINK_FAMILIE)
  }

  const handleBack = () => {
    router.push(`/ghid?session=${sessionId}`)
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
            Ești la jumătatea drumului.
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            Primii 2 pași ți-au arătat că ghidul funcționează.
            Deblochează restul și rezolvă actul corect din prima.
          </p>
        </div>

        {/* Trust badges */}
        <TrustBadges />

        {/* Opțiuni preț */}
        <div className="flex flex-col gap-3 mb-6">
          <label className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-400"
            />
            <span className="leading-relaxed">
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

          {/* Opțiunea recomandată */}
          <div className="border-2 border-green-500 bg-green-50 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="font-bold text-gray-900 text-sm">Ghid complet</div>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Recomandat
              </span>
            </div>
            <div className="text-2xl font-extrabold text-gray-900 mb-1">
              9,99€ <span className="text-sm font-normal text-gray-500">· o singură dată</span>
            </div>
            <div className="text-xs text-gray-600 mb-3">
              Ghid personalizat complet + checklist + tracker + parteneri verificați
            </div>
            <button
              onClick={handleGhid}
              disabled={!termsAccepted}
              className="w-full py-3 bg-gray-900 text-white font-bold rounded-xl text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Plătesc 9,99€ și primesc ghidul →
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
              disabled={!termsAccepted}
              className="w-full py-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Aleg pachetul familie →
            </button>
          </div>

        </div>

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
