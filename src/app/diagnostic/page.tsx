// ActeRO — app/diagnostic/page.tsx
// S3 — Diagnostic personalizat cu loader animat + reveal progresiv

'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import SiteHeader from '@/components/layout/SiteHeader'
import { bundeslandOptions, consulates } from '@/lib/content/consulates/de'
import { useAppStore } from '@/store/appStore'
import type { GuideId, ProblemType } from '@/types'

// ─── TIPURI ───────────────────────────────────────────────────────────────────

type LoaderCheck = { label: string; done: boolean }

type DiagnosticData = {
  title: string
  subtitle: string
  warnings: string[]
  estimatedWeeks: string
  estimatedAppointments: number
  previewSteps: { id: number; label: string; locked: boolean }[]
  guideTitle: string
  isRoute: boolean
  routeSteps?: { guideId: string; title: string; weeks: string }[]
}

// ─── DATE DIAGNOSTIC per ghid ─────────────────────────────────────────────────

const diagnosticMap: Record<string, DiagnosticData> = {
  'pasaport-crds-de': {
    title: 'Pașaport CRDS · Domiciliu Germania',
    subtitle: 'Pașaport expirat sau distrus · 1 deplasare la consulat',
    warnings: [],
    estimatedWeeks: '6–10 săptămâni',
    estimatedAppointments: 1,
    guideTitle: 'Ghid reînnoire pașaport CRDS',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Documentele necesare', locked: false },
      { id: 2, label: 'Pregătește documentele', locked: false },
      { id: 3, label: 'Cont și cerere pe econsulat.ro', locked: true },
      { id: 4, label: 'Obține programarea', locked: true },
      { id: 5, label: 'Pregătire pentru ziua programării', locked: true },
      { id: 6, label: 'Ziua consulatului', locked: true },
      { id: 7, label: 'Ridică pașaportul', locked: true },
    ],
  },
  'pasaport-crds-nou-de': {
    title: 'Primul pașaport CRDS · Domiciliu Germania',
    subtitle: 'Născut în România · 1 deplasare la consulat',
    warnings: [],
    estimatedWeeks: '8–12 săptămâni',
    estimatedAppointments: 1,
    guideTitle: 'Ghid primul pașaport CRDS',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Documentele necesare', locked: false },
      { id: 2, label: 'Pregătește documentele', locked: false },
      { id: 3, label: 'Cont și cerere pe econsulat.ro', locked: true },
      { id: 4, label: 'Obține programarea', locked: true },
      { id: 5, label: 'Pregătire pentru ziua programării', locked: true },
      { id: 6, label: 'Ziua consulatului', locked: true },
      { id: 7, label: 'Ridică pașaportul', locked: true },
    ],
  },
  'pasaport-de-cu-domiciliu': {
    title: 'Pașaport expirat · Domiciliu România',
    subtitle: 'Rezident în Germania · 1 deplasare la consulat',
    warnings: [],
    estimatedWeeks: '4–8 săptămâni',
    estimatedAppointments: 1,
    guideTitle: 'Ghid pașaport cu domiciliu în România',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Documentele necesare', locked: false },
      { id: 2, label: 'Pregătește documentele', locked: false },
      { id: 3, label: 'Cont și cerere pe econsulat.ro', locked: true },
      { id: 4, label: 'Obține programarea', locked: true },
      { id: 5, label: 'Pregătire pentru ziua programării', locked: true },
      { id: 6, label: 'Ziua consulatului', locked: true },
      { id: 7, label: 'Ridică pașaportul', locked: true },
    ],
  },
  'pasaport-de-cu-domiciliu-pierdut': {
    title: 'Pașaport pierdut / furat / distrus · Domiciliu România',
    subtitle: 'Rezident în Germania · 1 deplasare la consulat',
    warnings: ['Dacă pașaportul a fost furat — ai nevoie de confirmare poliție + traducere autorizată în română.'],
    estimatedWeeks: '4–8 săptămâni',
    estimatedAppointments: 1,
    guideTitle: 'Ghid pașaport pierdut/furat',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Documentele necesare', locked: false },
      { id: 2, label: 'Pregătește documentele', locked: false },
      { id: 3, label: 'Cont și cerere pe econsulat.ro', locked: true },
      { id: 4, label: 'Obține programarea', locked: true },
      { id: 5, label: 'Pregătire pentru ziua programării', locked: true },
      { id: 6, label: 'Ziua consulatului', locked: true },
      { id: 7, label: 'Ridică pașaportul', locked: true },
    ],
  },
  'buletin-de-fara-domiciliu': {
    title: 'Buletin expirat · Fără domiciliu în România',
    subtitle: 'Prezență fizică obligatorie în România',
    warnings: ['Din septembrie 2025, buletinul necesită prezența ta fizică în România. Procura nu mai funcționează.'],
    estimatedWeeks: '4–8 săptămâni',
    estimatedAppointments: 1,
    guideTitle: 'Ghid buletin expirat fără domiciliu RO',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Documentele necesare', locked: false },
      { id: 2, label: 'Pregătește documentele', locked: false },
      { id: 3, label: 'Planifică deplasarea în România', locked: true },
      { id: 4, label: 'Pregătire pentru deplasare', locked: true },
      { id: 5, label: 'Ziua la SPCLEP', locked: true },
      { id: 6, label: 'Ridică buletinul', locked: true },
    ],
  },
  'buletin-de-cu-domiciliu': {
    title: 'Buletin expirat · Domiciliu activ în România',
    subtitle: 'Prezență fizică obligatorie în România',
    warnings: ['Din septembrie 2025, buletinul necesită prezența ta fizică în România. Procura nu mai funcționează.'],
    estimatedWeeks: '2–4 săptămâni',
    estimatedAppointments: 1,
    guideTitle: 'Ghid buletin expirat cu domiciliu RO',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Documentele necesare', locked: false },
      { id: 2, label: 'Pregătește documentele', locked: false },
      { id: 3, label: 'Planifică deplasarea în România', locked: true },
      { id: 4, label: 'Pregătire pentru deplasare', locked: true },
      { id: 5, label: 'Ziua la SPCLEP', locked: true },
      { id: 6, label: 'Ridică buletinul', locked: true },
    ],
  },
  'buletin-de-fara-domiciliu-pierdut': {
    title: 'Buletin pierdut / furat / distrus · Fără domiciliu în România',
    subtitle: 'Prezență fizică obligatorie în România',
    warnings: [
      'Din septembrie 2025, buletinul necesită prezența ta fizică în România.',
      'Dacă a fost furat — ai nevoie de sesizare poliție.',
    ],
    estimatedWeeks: '4–8 săptămâni',
    estimatedAppointments: 1,
    guideTitle: 'Ghid buletin pierdut/furat fără domiciliu RO',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Documentele necesare', locked: false },
      { id: 2, label: 'Pregătește documentele', locked: false },
      { id: 3, label: 'Planifică deplasarea în România', locked: true },
      { id: 4, label: 'Pregătire pentru deplasare', locked: true },
      { id: 5, label: 'Ziua la SPCLEP', locked: true },
      { id: 6, label: 'Ridică buletinul', locked: true },
    ],
  },
  'titlu-calatorie-urgenta-de': {
    title: 'Titlu de călătorie · Urgență sub 3 zile',
    subtitle: 'Fără programare prealabilă',
    warnings: ['Trebuie să dovedești urgența cu documente (bilet, invitație medicală etc.)'],
    estimatedWeeks: '1–3 zile',
    estimatedAppointments: 1,
    guideTitle: 'Ghid titlu de călătorie urgență',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Documentele necesare', locked: false },
      { id: 2, label: 'Obține programarea de urgență', locked: true },
      { id: 3, label: 'Ziua consulatului', locked: true },
      { id: 4, label: 'Pasul următor după urgență', locked: true },
    ],
  },
  'titlu-calatorie-de': {
    title: 'Titlu de călătorie · 1–2 săptămâni',
    subtitle: 'Programare standard',
    warnings: [],
    estimatedWeeks: '1–2 săptămâni',
    estimatedAppointments: 1,
    guideTitle: 'Ghid titlu de călătorie',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Documentele necesare', locked: false },
      { id: 2, label: 'Cont și cerere pe econsulat.ro', locked: true },
      { id: 3, label: 'Ziua consulatului', locked: true },
      { id: 4, label: 'Pasul următor', locked: true },
    ],
  },
  'procura-vanzare-de': {
    title: 'Procură notarială · Vânzare / Cumpărare proprietate',
    subtitle: '1 deplasare la consulat',
    warnings: [],
    estimatedWeeks: '1–2 săptămâni',
    estimatedAppointments: 1,
    guideTitle: 'Ghid procură vânzare proprietate',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Documentele necesare', locked: false },
      { id: 2, label: 'Pregătește documentele', locked: false },
      { id: 3, label: 'Obține programarea', locked: true },
      { id: 4, label: 'Pregătire pentru ziua programării', locked: true },
      { id: 5, label: 'Ziua consulatului', locked: true },
      { id: 6, label: 'Trimite procura în România', locked: true },
    ],
  },
  'procura-mostenire-de': {
    title: 'Procură notarială · Moștenire / Succesiune',
    subtitle: '1 deplasare la consulat',
    warnings: [],
    estimatedWeeks: '1–2 săptămâni',
    estimatedAppointments: 1,
    guideTitle: 'Ghid procură moștenire',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Documentele necesare', locked: false },
      { id: 2, label: 'Pregătește documentele', locked: false },
      { id: 3, label: 'Obține programarea', locked: true },
      { id: 4, label: 'Pregătire pentru ziua programării', locked: true },
      { id: 5, label: 'Ziua consulatului', locked: true },
      { id: 6, label: 'Trimite procura în România', locked: true },
    ],
  },
  'procura-generala-de': {
    title: 'Procură notarială · Altceva',
    subtitle: 'Divorț, firmă, cont bancar · 1 deplasare la consulat',
    warnings: [],
    estimatedWeeks: '1–2 săptămâni',
    estimatedAppointments: 1,
    guideTitle: 'Ghid procură generală',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Documentele necesare', locked: false },
      { id: 2, label: 'Pregătește documentele', locked: false },
      { id: 3, label: 'Obține programarea', locked: true },
      { id: 4, label: 'Pregătire pentru ziua programării', locked: true },
      { id: 5, label: 'Ziua consulatului', locked: true },
      { id: 6, label: 'Trimite procura în România', locked: true },
    ],
  },
}

// Date pentru Route-uri
const routeMap: Record<string, DiagnosticData> = {
  'route-a': {
    title: 'Primul pașaport · Născut în Germania',
    subtitle: 'Situația ta necesită 2 acte separate',
    warnings: ['Trebuie mai întâi să transcrii certificatul de naștere în România, apoi poți solicita pașaportul.'],
    estimatedWeeks: '4–8 luni total',
    estimatedAppointments: 2,
    guideTitle: '',
    isRoute: true,
    routeSteps: [
      { guideId: 'transcriere-nastere-de', title: 'Ghid A: Transcriere certificat de naștere', weeks: '~3–6 luni' },
      { guideId: 'pasaport-crds-nou-de', title: 'Ghid B: Primul pașaport CRDS', weeks: '~6–8 săptămâni' },
    ],
    previewSteps: [],
  },
  'route-b': {
    title: 'Primul buletin · Născut în Germania',
    subtitle: 'Situația ta necesită 2 acte separate',
    warnings: ['Trebuie mai întâi să transcrii certificatul de naștere în România, apoi poți solicita buletinul.'],
    estimatedWeeks: '4–8 luni total',
    estimatedAppointments: 2,
    guideTitle: '',
    isRoute: true,
    routeSteps: [
      { guideId: 'transcriere-nastere-de', title: 'Ghid A: Transcriere certificat de naștere', weeks: '~3–6 luni' },
      { guideId: 'buletin-de-primul-de-b', title: 'Ghid B: Primul buletin', weeks: 'după transcriere' },
    ],
    previewSteps: [],
  },
}

// ─── LOADER ───────────────────────────────────────────────────────────────────

const loaderChecks: LoaderCheck[] = [
  { label: 'Analizăm situația ta...', done: false },
  { label: 'Identificăm consulatul arondat...', done: false },
  { label: 'Verificăm documentele necesare...', done: false },
  { label: '✓ Am găsit ghidul pentru situația ta', done: false },
]

function Loader({ onDone }: { onDone: () => void }) {
  const [checks, setChecks] = useState<LoaderCheck[]>(loaderChecks)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (current >= loaderChecks.length) {
      setTimeout(onDone, 400)
      return
    }
    const t = setTimeout(() => {
      setChecks((prev) =>
        prev.map((c, i) => (i === current ? { ...c, done: true } : c))
      )
      setCurrent((c) => c + 1)
    }, 700)
    return () => clearTimeout(t)
  }, [current, onDone])

  return (
    <div className="flex flex-col gap-4 py-8">
      <div className="text-center mb-4">
        <div className="text-3xl mb-3">🔍</div>
        <h2 className="text-xl font-bold text-gray-900">Analizăm situația ta</h2>
      </div>
      <div className="flex flex-col gap-3">
        {checks.map((c, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
              c.done ? 'bg-green-50' : i === current ? 'bg-gray-50' : 'opacity-30'
            }`}
          >
            <span className="text-lg w-6 text-center">
              {c.done ? '✓' : i === current ? '⏳' : '○'}
            </span>
            <span className={`text-sm font-medium ${c.done ? 'text-green-700' : 'text-gray-600'}`}>
              {c.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── DIAGNOSTIC ───────────────────────────────────────────────────────────────

function getEmotionalCopy(guideId: GuideId | null, problemType: ProblemType | null): { title: string; subtitle: string } {
  if (guideId === 'pasaport-crds-nou-de') {
    return {
      title: 'Primul tău pașaport din Germania — iată exact ce trebuie să faci.',
      subtitle: 'Ghidul tău e personalizat pentru situația ta exactă — nu o listă generică.',
    }
  }

  switch (problemType) {
    case 'pasaport':
      return {
        title: 'Pașaportul expirat te ține pe loc — rezolvăm corect, din prima.',
        subtitle: 'Ghidul tău e personalizat pentru situația ta exactă — nu o listă generică.',
      }
    case 'buletin':
      return {
        title: 'Buletinul expirat se rezolvă — ghid exact pentru situația ta.',
        subtitle: 'Ghidul tău e personalizat pentru situația ta exactă — nu o listă generică.',
      }
    case 'titlu-calatorie':
      return {
        title: 'Trebuie să pleci urgent — există o soluție pentru 3 zile.',
        subtitle: 'Ghidul tău e personalizat pentru situația ta exactă — nu o listă generică.',
      }
    case 'procura':
      return {
        title: 'Procura notarială din Germania — fără drumuri în România.',
        subtitle: 'Ghidul tău e personalizat pentru situația ta exactă — nu o listă generică.',
      }
    default:
      return {
        title: 'Am înțeles. Îți arătăm exact ce ai de făcut.',
        subtitle: 'Ghidul tău e personalizat pentru situația ta exactă — nu o listă generică.',
      }
  }
}

function getBadgeText(guideId: GuideId | null, estimatedWeeks: string, estimatedAppointments: number) {
  switch (guideId) {
    case 'pasaport-crds-de':
      return '⏱ 1 singură deplasare la consulat · 6–8 săptămâni'
    case 'pasaport-crds-nou-de':
      return '⏱ 1 singură deplasare la consulat · 8–10 săptămâni'
    case 'pasaport-de-cu-domiciliu':
    case 'pasaport-de-cu-domiciliu-pierdut':
      return '⏱ 1 singură deplasare la consulat · 4–6 săptămâni'
    case 'buletin-de-fara-domiciliu':
    case 'buletin-de-fara-domiciliu-pierdut':
      return '⏱ 1 deplasare în România · 3–5 săptămâni'
    case 'buletin-de-cu-domiciliu':
    case 'buletin-de-cu-domiciliu-pierdut':
      return '⏱ 1 deplasare în România · 2–4 săptămâni'
    case 'procura-vanzare-de':
    case 'procura-mostenire-de':
    case 'procura-generala-de':
      return '⏱ 1 singură deplasare la consulat · 1–2 săptămâni'
    case 'titlu-calatorie-urgenta-de':
      return '⏱ 1 deplasare urgentă · 1–3 zile'
    default:
      return `⏱ ${estimatedAppointments === 1 ? '1 singură deplasare' : `${estimatedAppointments} deplasări`} · ${estimatedWeeks}`
  }
}

function getActRow(guideId: GuideId | null, problemType: ProblemType | null, isPrimulPasaport?: boolean) {
  if (problemType === 'pasaport') {
    if (guideId?.includes('crds')) {
      return {
        icon: '📕',
        title: 'Pașaport CRDS',
        subtitle: isPrimulPasaport ? 'Primul pașaport' : 'Reînnoire · ai mai avut pașaport',
      }
    }
    return {
      icon: '📕',
      title: 'Pașaport simplu electronic',
      subtitle: guideId?.includes('pierdut') ? 'Pierdut / furat / distrus' : 'Reînnoire pașaport',
    }
  }

  if (problemType === 'buletin') {
    return {
      icon: '🪪',
      title: 'Carte de identitate',
      subtitle: guideId?.includes('pierdut') ? 'Pierdut / furat / distrus' : 'Reînnoire buletin',
    }
  }

  if (problemType === 'titlu-calatorie') {
    return {
      icon: '✈️',
      title: 'Titlu de călătorie',
      subtitle: guideId?.includes('urgenta') ? 'Urgență' : 'Procedură standard',
    }
  }

  return {
    icon: '📜',
    title: 'Procură notarială',
    subtitle: guideId?.includes('vanzare')
      ? 'Vânzare / cumpărare proprietate'
      : guideId?.includes('mostenire')
      ? 'Moștenire / succesiune'
      : 'Mandat general',
  }
}

function getPaymentLabel(paymentMethod: string) {
  if (paymentMethod.includes('numerar') || paymentMethod.includes('cash')) {
    return 'numerar'
  }
  if (paymentMethod.includes('EC-Karte')) {
    return 'EC-Karte'
  }
  if (paymentMethod.includes('POS')) {
    return 'POS sau transfer'
  }
  return paymentMethod.replace('⚠️ ', '')
}

function getPaymentSubtitle(consulateName: string, paymentMethod: string) {
  if (paymentMethod.includes('numerar') || paymentMethod.includes('cash')) {
    return `${consulateName} acceptă exclusiv cash`
  }
  if (paymentMethod.includes('EC-Karte')) {
    return `${consulateName} acceptă plata exclusiv cu EC-Karte`
  }
  if (paymentMethod.includes('POS')) {
    return `${consulateName} acceptă POS sau transfer bancar`
  }
  return `Verifică direct la ghișeu metoda de plată`
}

function SituationCard({
  guideId,
  problemType,
  hasDomiciliuRO,
  isPrimulPasaport,
  bundesland,
  consulateId,
}: {
  guideId: GuideId | null
  problemType: ProblemType | null
  hasDomiciliuRO?: boolean
  isPrimulPasaport?: boolean
  bundesland?: string
  consulateId?: keyof typeof consulates
}) {
  const actRow = getActRow(guideId, problemType, isPrimulPasaport)
  const bundeslandName = bundeslandOptions.find((item) => item.code === bundesland)?.name ?? 'Land nespecificat'
  const consulate = consulateId ? consulates[consulateId] : null
  const consulateShortName = consulateId
    ? {
        muenchen: 'München',
        bonn: 'Bonn',
        stuttgart: 'Stuttgart',
        berlin: 'Berlin',
      }[consulateId]
    : 'Consulat nespecificat'

  return (
    <div className="animate-fadeIn bg-white border border-gray-200 rounded-2xl p-4 flex flex-col gap-3">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">
        ✅ Situația ta
      </p>

      <div className="flex items-center gap-3">
        <span className="text-xl">{actRow.icon}</span>
        <div>
          <p className="text-sm font-semibold text-gray-900">{actRow.title}</p>
          <p className="text-xs text-gray-500">{actRow.subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xl">🏠</span>
        <div>
          <p className="text-sm font-semibold text-gray-900">
            {hasDomiciliuRO ? 'Domiciliu în România' : 'Domiciliu în Germania'}
          </p>
          <p className="text-xs text-gray-500">
            {hasDomiciliuRO ? 'Ai adresă activă în România' : 'Fără adresă activă în România'}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xl">📍</span>
        <div>
          <p className="text-sm font-semibold text-gray-900">
            {bundeslandName} → {consulateShortName}
          </p>
          <p className="text-xs text-gray-500">{consulate?.address ?? 'Adresa consulatului va fi confirmată în ghid'}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xl">💶</span>
        <div>
          <p className="text-sm font-semibold text-gray-900">
            Taxă: 53€ — {consulate ? getPaymentLabel(consulate.paymentMethod) : 'vezi ghidul'}
          </p>
          <p className="text-xs text-gray-500">
            {consulate ? getPaymentSubtitle(consulateShortName, consulate.paymentMethod) : 'Metoda exactă apare în ghidul tău'}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xl">📸</span>
        <div>
          <p className="text-sm font-semibold text-gray-900">
            {consulate?.fotografiiLaGhiseu ? 'Fotografii — se fac la consulat' : 'Fotografii biometrice necesare'}
          </p>
          <p className="text-xs text-gray-500">
            {consulate?.fotografiiLaGhiseu ? 'Nu trebuie să aduci poze de acasă' : 'Vino cu fotografiile pregătite înainte de programare'}
          </p>
        </div>
      </div>
    </div>
  )
}

function DiagnosticResult({ data, sessionId }: { data: DiagnosticData; sessionId: string }) {
  const router = useRouter()
  const { wizardResult, problemType, guideId, situation } = useAppStore()
  const [visible, setVisible] = useState(0)
  const emotionalCopy = getEmotionalCopy(guideId, problemType)

  // Reveal progresiv — câte o secțiune la 150ms
  useEffect(() => {
    if (visible < 5) {
      const t = setTimeout(() => setVisible((v) => v + 1), 150)
      return () => clearTimeout(t)
    }
  }, [visible])

  const handleFree = () => router.push(`/ghid?session=${sessionId}`)
  const handlePaid = () => router.push(`/paywall?session=${sessionId}`)
  const handleRouteGuide = (guideId: string) => {
    router.push(`/ghid?session=${sessionId}&guide=${guideId}`)
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Header confirmare */}
      {visible >= 1 && (
        <div className="animate-fadeIn">
          <p className="text-sm font-bold text-gray-900 mb-2">
            ✓ Am înțeles situația ta
          </p>
          <p className="text-xs text-gray-500 mb-3">{data.subtitle}</p>
          <p className="text-2xl font-bold text-gray-900 leading-tight">
            {emotionalCopy.title}
          </p>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            {emotionalCopy.subtitle}
          </p>
        </div>
      )}

      {/* Avertizări */}
      {visible >= 2 && data.warnings.length > 0 && (
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 animate-fadeIn">
          <div className="text-xs font-bold text-orange-700 uppercase tracking-wide mb-2">
            De știut în cazul tău
          </div>
          {data.warnings.map((w, i) => (
            <div key={i} className="flex gap-2 items-start mb-1">
              <span className="text-orange-400 mt-0.5">•</span>
              <span className="text-sm text-orange-800">{w}</span>
            </div>
          ))}
        </div>
      )}

      {/* Situația ta */}
      {visible >= 2 && !data.isRoute && (
        <SituationCard
          guideId={guideId}
          problemType={problemType}
          hasDomiciliuRO={situation.hasDomiciliuRO}
          isPrimulPasaport={situation.isPrimulPasaport}
          bundesland={situation.bundesland}
          consulateId={situation.consulate}
        />
      )}

      {/* Badge timp estimat */}
      {visible >= 3 && (
        <div className="flex items-center gap-2 bg-blue-50 rounded-xl px-4 py-3 animate-fadeIn">
          <span className="text-sm text-blue-700 font-medium">
            {getBadgeText(guideId, data.estimatedWeeks, data.estimatedAppointments)}
          </span>
        </div>
      )}

      {/* Route — 2 ghiduri */}
      {visible >= 4 && data.isRoute && data.routeSteps && (
        <div className="animate-fadeIn">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
            Situația ta necesită 2 ghiduri
          </div>
          <div className="flex flex-col gap-3">
            {data.routeSteps.map((step, i) => (
              <button
                key={step.guideId}
                onClick={() => handleRouteGuide(step.guideId)}
                className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-gray-400 transition-all text-left"
              >
                <div>
                  <div className="text-xs font-bold text-gray-400 mb-1">Ghid {i === 0 ? 'A' : 'B'}</div>
                  <div className="font-semibold text-sm text-gray-900">{step.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{step.weeks}</div>
                </div>
                <span className="text-gray-400 text-lg">›</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* CTA-uri */}
      {visible >= 4 && !data.isRoute && (
        <div className="flex flex-col gap-3 mt-2 animate-fadeIn">
          <button
            onClick={handleFree}
            className="w-full py-4 bg-gray-900 text-white font-semibold rounded-xl"
          >
            Primesc primii 2 pași gratuit →
          </button>
          <p className="text-center text-xs text-gray-400 mt-2">
            Fără cont · Fără card · 30 de secunde
          </p>
          <div className="flex items-center gap-3 my-3">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-300">sau</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
          <button
            onClick={handlePaid}
            className="w-full py-4 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-xl text-sm hover:border-gray-400 transition-colors"
          >
            Ghid complet  9,99€  →
          </button>
          <p className="text-center text-xs text-gray-400 mt-1">
            Ghid complet + checklist + parteneri verificați
          </p>
        </div>
      )}
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function DiagnosticPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session') ?? ''
  const { guideId, wizardResult } = useAppStore()
  const [showResult, setShowResult] = useState(false)

  // Determină datele diagnosticului
  let diagnosticData: DiagnosticData | null = null
  if (wizardResult?.type === 'route') {
    diagnosticData = routeMap[wizardResult.routeId] ?? null
  } else if (guideId) {
    diagnosticData = diagnosticMap[guideId] ?? null
  }

  if (!diagnosticData) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-3xl mb-3">⚠️</div>
          <p className="text-sm">Sesiune invalidă. <a href="/wizard" className="underline">Reîncepe</a></p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <SiteHeader />
      <div className="max-w-md mx-auto w-full px-5 py-8 flex-1">
        <div className="mb-6 flex justify-end">
          <a href="/wizard" className="text-sm text-gray-400 hover:text-gray-600">← Înapoi</a>
        </div>

        {!showResult ? (
          <Loader onDone={() => setShowResult(true)} />
        ) : (
          <DiagnosticResult data={diagnosticData} sessionId={sessionId} />
        )}
      </div>
    </main>
  )
}
