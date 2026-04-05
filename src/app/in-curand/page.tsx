// ActeRO — app/in-curand/page.tsx
// Waitlist pentru țări sau ghiduri indisponibile

'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import SiteHeader from '@/components/layout/SiteHeader'

const countryNames: Record<string, string> = {
  it: 'Italia',
  es: 'Spania',
  gb: 'Marea Britanie',
  fr: 'Franța',
  at: 'Austria',
  be: 'Belgia',
  nl: 'Olanda',
}

const countryDates: Record<string, string | null> = {
  it: 'Mai 2026',
  es: 'Mai 2026',
  gb: 'Iunie 2026',
  fr: null,
  at: null,
  be: null,
  nl: null,
}

const countryFlags: Record<string, string> = {
  it: '🇮🇹',
  es: '🇪🇸',
  gb: '🇬🇧',
  fr: '🇫🇷',
  at: '🇦🇹',
  be: '🇧🇪',
  nl: '🇳🇱',
}

type InputType = 'email' | 'phone'
type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

function InCurandPageContent() {
  const searchParams = useSearchParams()
  const country = searchParams.get('country') ?? ''
  const service = searchParams.get('service') ?? 'general'

  const countryName = countryNames[country] ?? 'această țară'
  const countryDate = countryDates[country] ?? null
  const countryFlag = countryFlags[country] ?? '🌍'

  const [inputType, setInputType] = useState<InputType>('email')
  const [value, setValue] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const handleSubmit = async () => {
    if (!value.trim()) return
    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          [inputType]: value.trim(),
          country,
          service,
          sourceUrl: window.location.href,
        }),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <main className="min-h-screen bg-white flex flex-col">
        <SiteHeader />
        <div className="max-w-2xl mx-auto w-full px-5 py-8 flex-1 flex flex-col justify-center text-center">
          <div className="text-4xl mb-4">{countryFlag}</div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            {countryDate ? `Te anunțăm în ${countryDate}!` : 'Te-am adăugat pe listă!'}
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            {countryDate
              ? `Când lansăm pentru ${countryName}, ești primul care află.`
              : `Când ${countryName} devine disponibil, îți dăm de veste.`}
          </p>
          <a
            href="/wizard"
            className="block w-full py-4 bg-gray-900 text-white font-semibold rounded-xl text-sm text-center"
          >
            Continuă cu Germania →
          </a>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <SiteHeader />
      <div className="max-w-2xl mx-auto w-full px-5 py-8 flex-1">
        <div className="mb-10 flex justify-end">
          <a href="/wizard" className="text-sm text-gray-400 hover:text-gray-600">← Înapoi</a>
        </div>

        <div className="text-center mb-8">
          <div className="text-5xl mb-4">{countryFlag}</div>
          <h1 className="text-xl font-bold text-gray-900 mb-3">
            {countryName} — {countryDate ? `Disponibil din ${countryDate}` : 'În curând'}
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            {countryDate
              ? `Suntem aproape de tine. Îți dăm un semn în ${countryDate} — ca să fii primul care rezolvă actele din ${countryName}.`
              : `Nu avem încă o dată exactă pentru ${countryName}, dar fiecare semn de la tine ne ajută să știm unde să mergem mai repede.`}
          </p>
        </div>

        {/* Toggle email / telefon */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-4">
          {(['email', 'phone'] as InputType[]).map((type) => (
            <button
              key={type}
              onClick={() => { setInputType(type); setValue('') }}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                inputType === type
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500'
              }`}
            >
              {type === 'email' ? '✉ Email' : '📱 Telefon'}
            </button>
          ))}
        </div>

        <input
          type={inputType === 'email' ? 'email' : 'tel'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={
            inputType === 'email'
              ? 'adresa ta de email'
              : '+49 ... (WhatsApp)'
          }
          className="w-full border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-400 mb-3"
        />

        <button
          onClick={handleSubmit}
          disabled={!value.trim() || status === 'loading'}
          className="w-full py-4 bg-gray-900 text-white font-semibold rounded-xl text-sm disabled:opacity-40 disabled:cursor-not-allowed mb-4"
        >
          {status === 'loading'
            ? 'Se trimite...'
            : countryDate
            ? `Anunță-mă în ${countryDate} →`
            : 'Anunță-mă când e disponibil →'}
        </button>

        {status === 'error' && (
          <p className="text-sm text-red-500 text-center mb-4">
            A apărut o eroare. Încearcă din nou.
          </p>
        )}

        <p className="text-xs text-gray-400 text-center">
          Fără spam · dezabonare oricând
        </p>

        {/* Separator */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-xs text-gray-400">sau</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* CTA Germania */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-3">
            Ai acte de rezolvat din Germania?
          </p>
          <a
            href="/wizard"
            className="block w-full py-3 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-xl text-sm text-center"
          >
            🇩🇪 Rezolvă acum din Germania →
          </a>
        </div>

      </div>
    </main>
  )
}

export default function InCurandPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-white flex flex-col">
        <SiteHeader />
        <div className="max-w-2xl mx-auto w-full px-5 py-8 flex-1" />
      </main>
    }>
      <InCurandPageContent />
    </Suspense>
  )
}
