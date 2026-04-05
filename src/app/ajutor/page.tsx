// ActeRO — app/ajutor/page.tsx
// Formular de ajutor pentru utilizatorii blocați într-un pas

'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import SiteHeader from '@/components/layout/SiteHeader'
import { useAppStore } from '@/store/appStore'
import type { GuideId } from '@/types'

const guideTitles: Partial<Record<GuideId, string>> = {
  'pasaport-crds-de': 'Reînnoire pașaport CRDS · Germania',
  'pasaport-crds-nou-de': 'Primul pașaport CRDS · Germania',
  'pasaport-de-cu-domiciliu': 'Pașaport expirat · Domiciliu România',
  'pasaport-de-cu-domiciliu-pierdut': 'Pașaport pierdut/furat · Germania',
  'buletin-de-fara-domiciliu': 'Buletin expirat · Fără domiciliu RO',
  'buletin-de-cu-domiciliu': 'Buletin expirat · Domiciliu activ RO',
  'buletin-de-fara-domiciliu-pierdut': 'Buletin pierdut/furat · Fără domiciliu RO',
  'buletin-de-cu-domiciliu-pierdut': 'Buletin pierdut/furat · Domiciliu activ RO',
  'titlu-calatorie-urgenta-de': 'Titlu de călătorie · Urgență',
  'titlu-calatorie-de': 'Titlu de călătorie · 1–2 săptămâni',
  'procura-vanzare-de': 'Procură vânzare proprietate',
  'procura-mostenire-de': 'Procură moștenire',
  'procura-generala-de': 'Procură generală',
  'transcriere-nastere-de': 'Transcriere certificat de naștere',
}

const stepOptions = [
  { value: '', label: 'Selectează pasul...' },
  { value: '1', label: 'Pas 1 — Documentele necesare' },
  { value: '2', label: 'Pas 2 — Pregătire documente' },
  { value: '3', label: 'Pas 3 — Cont / Cerere econsulat.ro' },
  { value: '4', label: 'Pas 4 — Programare' },
  { value: '5', label: 'Pas 5 — Pregătire pentru programare' },
  { value: '6', label: 'Pas 6 — Ziua consulatului / SPCLEP' },
  { value: '7', label: 'Pas 7 — Ridicare document' },
  { value: '0', label: 'Nu știu exact / Altceva' },
]

type FormState = {
  firstName: string
  email: string
  stepNumber: string
  message: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

function AjutorPageContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session') ?? ''
  const { guideId } = useAppStore()

  const [form, setForm] = useState<FormState>({
    firstName: '',
    email: '',
    stepNumber: '',
    message: '',
  })
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [charCount, setCharCount] = useState(0)

  const guideTitle = guideId ? guideTitles[guideId] : null

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (name === 'message') setCharCount(value.length)
  }

  const handleSubmit = async () => {
    if (!form.email || !form.message) return

    setStatus('loading')
    try {
      const res = await fetch('/api/ajutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName || undefined,
          email: form.email,
          guideId: guideId ?? undefined,
          stepNumber: form.stepNumber ? parseInt(form.stepNumber) : undefined,
          message: form.message,
          sessionId: sessionId || undefined,
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

  const isValid = form.email.trim().length > 0 && form.message.trim().length > 0

  if (status === 'success') {
    return (
      <main className="min-h-screen bg-white flex flex-col">
        <div className="max-w-2xl mx-auto w-full px-5 py-8 flex-1 flex flex-col items-center justify-center text-center">
          <div className="text-5xl mb-4">✉️</div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Am primit întrebarea ta!</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Îți vom răspunde pe emailul tău cât mai curând posibil.
            Verifică și folderul Spam dacă nu vezi mesajul nostru.
          </p>
          {sessionId && guideId && (
            <a
              href={`/ghid/${sessionId}`}
              className="w-full py-4 bg-gray-900 text-white font-semibold rounded-xl text-sm text-center block"
            >
              ← Înapoi la ghidul meu
            </a>
          )}
          <a
            href="/"
            className="w-full py-4 bg-gray-900 text-white font-semibold rounded-xl text-sm text-center block mt-3"
          >
            Înapoi la homepage
          </a>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <SiteHeader />
      <div className="max-w-2xl mx-auto w-full px-5 py-8 flex-1">
        <div className="mb-6 flex justify-end">
          {sessionId && (
            <a href={`/ghid/${sessionId}`} className="text-sm text-gray-400 hover:text-gray-600">
              ← Înapoi la ghid
            </a>
          )}
        </div>

        <h1 className="text-xl font-bold text-gray-900 mb-2">Ai nevoie de ajutor?</h1>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          Descrie problema și îți răspundem în cel mult 48 de ore.
        </p>

        {/* Ghid pre-completat */}
        {guideTitle && (
          <div className="bg-gray-50 rounded-xl px-4 py-3 mb-5 text-sm text-gray-600">
            📋 Ghidul tău: <strong className="text-gray-900">{guideTitle}</strong>
          </div>
        )}

        <div className="flex flex-col gap-4">

          {/* Prenume — opțional */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Prenume <span className="text-gray-400 font-normal">(opțional)</span>
            </label>
            <input
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              placeholder="ex: Andrei"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-400"
            />
          </div>

          {/* Email — obligatoriu */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="adresa ta de email"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-400"
            />
            <p className="text-xs text-gray-400 mt-1">Îți răspundem pe acest email</p>
          </div>

          {/* Pasul — select */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              La ce pas ești blocat? <span className="text-gray-400 font-normal">(opțional)</span>
            </label>
            <select
              name="stepNumber"
              value={form.stepNumber}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400 bg-white"
            >
              {stepOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Mesaj — obligatoriu */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Ce s-a întâmplat? <span className="text-red-400">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Descrie problema cât mai detaliat: ce pas ai încercat, ce eroare ai primit, ce ți-a spus funcționarul..."
              rows={5}
              maxLength={500}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 resize-none focus:outline-none focus:border-gray-400"
            />
            <div className="flex justify-between mt-1">
              <p className="text-xs text-gray-400">Maximum 500 caractere</p>
              <p className={`text-xs ${charCount > 450 ? 'text-orange-500' : 'text-gray-400'}`}>
                {charCount}/500
              </p>
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!isValid || status === 'loading'}
            className="w-full py-4 bg-gray-900 text-white font-semibold rounded-xl text-sm disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Se trimite...' : 'Trimite întrebarea →'}
          </button>

          {status === 'error' && (
            <p className="text-sm text-red-500 text-center">
              A apărut o eroare. Încearcă din nou sau scrie direct la{' '}
              <a href="mailto:contac@actero.ro" className="underline">contac@actero.ro</a>
            </p>
          )}

          {/* Note */}
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            Răspundem în cel mult 48 de ore · fără promisiuni mai scurte
          </p>

        </div>
      </div>
    </main>
  )
}

export default function AjutorPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-white flex flex-col">
        <SiteHeader />
        <div className="max-w-2xl mx-auto w-full px-5 py-8 flex-1" />
      </main>
    }>
      <AjutorPageContent />
    </Suspense>
  )
}
