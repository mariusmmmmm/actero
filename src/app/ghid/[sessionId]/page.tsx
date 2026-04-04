// ActeRO — app/ghid/[sessionId]/page.tsx
// S5 — Ghid Paid: un pas pe ecran, navigare ← →, card consulat dinamic, note

'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { TEST_MODE } from '@/lib/config'
import SiteHeader from '@/components/layout/SiteHeader'
import { useAppStore } from '@/store/appStore'
import { getConsulateCard } from '@/lib/utils/deriveConsulate'
import type { GuideId, ConsulateId } from '@/types'

// ─── CONȚINUT PAȘI PAID per ghid ─────────────────────────────────────────────

type Block = {
  text: string
  type: 'info' | 'warning' | 'tip' | 'action' | 'note'
}

type PaidStep = {
  id: number
  title: string
  shortLabel: string
  hasConsulateCard?: boolean
  blocks: Block[]
  actionItem?: string
}

type GhidPaidContent = {
  title: string
  steps: PaidStep[]
}

const blockStyles: Record<string, string> = {
  info: 'bg-gray-50 border border-gray-200 text-gray-700',
  warning: 'bg-orange-50 border border-orange-200 text-orange-800',
  tip: 'bg-green-50 border border-green-200 text-green-800',
  action: 'bg-blue-50 border border-blue-200 text-blue-800',
  note: 'bg-yellow-50 border border-yellow-200 text-yellow-800',
}

const blockIcons: Record<string, string> = {
  info: '📋',
  warning: '⚠️',
  tip: '💡',
  action: '→',
  note: '📝',
}

// Pașii paid comuni pașaport CRDS (ghid #1 și #2)
const pasaportCrdsSteps: PaidStep[] = [
  {
    id: 3,
    title: 'Cont și cerere pe econsulat.ro',
    shortLabel: 'Cerere',
    blocks: [
      { text: 'Mergi pe econsulat.ro și creează un cont dacă nu ai unul — folosești email + parolă.', type: 'info' },
      { text: 'După login → „Cerere nouă" → Pașapoarte → „Pașaport simplu electronic CRDS".', type: 'action' },
      { text: 'Completează formularul: date personale, adresa din Germania, consulatul arondat landului tău.', type: 'info' },
      { text: 'Încarc documentele scanate pregătite la Pasul 2. Trimite cererea. Starea inițială: „În așteptare".', type: 'info' },
      { text: 'Nu selecta „Pașaport simplu temporar" dacă nu ai o urgență documentată. CRDS = pașaport electronic standard, valabil 10 ani.', type: 'warning' },
    ],
    actionItem: 'Deschide econsulat.ro →',
  },
  {
    id: 4,
    title: 'Obține programarea',
    shortLabel: 'Programare',
    blocks: [
      { text: 'Programarea devine disponibilă după ce cererea trece în starea „Validată".', type: 'info' },
      { text: 'Intră pe econsulat.ro → „Programările mele" → „Programare nouă" → alege consulatul tău → alege prima dată disponibilă.', type: 'action' },
      { text: 'Programările se eliberează de obicei luni dimineața la 08:00. Intră exact la 08:00 pentru cele mai bune șanse.', type: 'tip' },
      { text: 'Programările sunt GRATUITE. Nu apela la intermediari care oferă programări contra cost.', type: 'warning' },
    ],
  },
  {
    id: 5,
    title: 'Pregătire pentru ziua programării',
    shortLabel: 'Pregătire',
    hasConsulateCard: true,
    blocks: [
      { text: 'Verifică că ai toate documentele originale în geantă (nu doar copiile).', type: 'info' },
      { text: 'Ai câte o copie simplă din fiecare document original.', type: 'info' },
      { text: 'Fotografiile sunt conform specificațiilor (3,5 × 4,5 cm, fond alb).', type: 'info' },
      { text: 'Programarea e activă în contul tău pe econsulat.ro.', type: 'info' },
    ],
  },
  {
    id: 6,
    title: 'Ziua consulatului',
    shortLabel: 'Consulat',
    blocks: [
      { text: 'Ajungi cu 10 minute înainte de programare.', type: 'info' },
      { text: 'Prezinți documentele la ghișeu — funcționarul le verifică și îți preia cererea.', type: 'info' },
      { text: 'Taxa: 53€ — se achită la consulat (metodă diferită per consulat: Bonn = EC-Karte, München = numerar, Stuttgart = POS sau transfer bancar).', type: 'action' },
      { text: 'Primești chitanța de depunere — păstreaz-o ca dovadă că dosarul a fost acceptat. Fă-i imediat o poză cu telefonul.', type: 'note' },
      { text: 'Dacă funcționarul cere ceva ce nu e în lista ta: notează calm și întreabă diplomatic de ce s-a modificat procedura.', type: 'warning' },
      { text: 'Pașaportul se produce la București și se trimite la consulat. Termen: 45 zile lucrătoare.', type: 'info' },
    ],
  },
  {
    id: 7,
    title: 'Ridică pașaportul',
    shortLabel: 'Ridicare',
    blocks: [
      { text: 'Verifică statusul pe pagina consulatului tău (link în cardul de consulat de mai sus).', type: 'info' },
      { text: 'Când statusul e „disponibil", te prezinți în programul de ridicare (fără programare):\n• Bonn: Luni–Joi 14:00–15:00\n• München: Luni–Joi 14:00–16:00\n• Stuttgart: Luni–Vineri 10:00–14:00\n• Berlin: Luni–Vineri 13:00–14:00', type: 'action' },
      { text: 'Aduci chitanța de depunere + un act de identitate.', type: 'info' },
      { text: 'München și Stuttgart: poți opta pentru ridicare prin poștă — vezi detalii în cardul consulatului.', type: 'tip' },
      { text: 'Dacă ai pășaportul anterior neanulat — prezintă-l la ridicare pentru anulare în baza DGP.', type: 'warning' },
    ],
  },
]

// Pași paid pentru pașaport cu domiciliu România (#3 și #4)
const pasaportDomRoSteps: PaidStep[] = [
  {
    id: 3,
    title: 'Cont și cerere pe econsulat.ro',
    shortLabel: 'Cerere',
    blocks: [
      { text: 'Mergi pe econsulat.ro → „Cerere nouă" → Pașapoarte → „Pașaport simplu electronic".', type: 'action' },
      { text: 'Nu selecta „CRDS" — domiciliul tău e în România, nu în Germania.', type: 'warning' },
      { text: 'Completează datele personale și adresa din România. Încarc documentele scanate. Trimite cererea.', type: 'info' },
    ],
    actionItem: 'Deschide econsulat.ro →',
  },
  ...pasaportCrdsSteps.slice(1), // pașii 4-7 sunt identici
]

// Pași paid pentru buletin (SPCLEP)
const buletinSteps: PaidStep[] = [
  {
    id: 3,
    title: 'Planifică deplasarea în România',
    shortLabel: 'Planificare',
    blocks: [
      { text: 'Identifică SPCLEP-ul competent: cel din orașul unde ai ultimul domiciliu înregistrat în România.', type: 'info' },
      { text: 'Verifică dacă SPCLEP-ul tău permite programare online (unele prin ghiseul.ro sau site-ul primăriei locale).', type: 'action' },
      { text: 'Dacă nu există programare online → te prezinți dimineața la prima oră.', type: 'tip' },
      { text: 'Verifică programul de lucru pe site-ul primăriei înainte de a pleca din Germania.', type: 'warning' },
    ],
  },
  {
    id: 4,
    title: 'Pregătire pentru deplasare',
    shortLabel: 'Pregătire',
    blocks: [
      { text: 'Ai un document valabil cu care poți călători în România (pașaport valabil sau titlu de călătorie).', type: 'warning' },
      { text: 'Toate documentele originale în geantă.', type: 'info' },
      { text: 'Adresa exactă a SPCLEP-ului și programul de lucru verificate.', type: 'info' },
    ],
  },
  {
    id: 5,
    title: 'Ziua la SPCLEP',
    shortLabel: 'SPCLEP',
    blocks: [
      { text: 'Te prezinți la ghișeul SPCLEP cu documentele.', type: 'info' },
      { text: 'Funcționarul preia documentele, îți face fotografia biometrică și amprentele.', type: 'info' },
      { text: 'Plătești taxa (câțiva lei). Primești bon/recipisă.', type: 'action' },
      { text: 'Buletinul gata în 1–5 zile lucrătoare (expres) sau până la 30 de zile (normal).', type: 'info' },
      { text: 'Dacă funcționarul cere ceva suplimentar: notează calm și întreabă diplomatic.', type: 'warning' },
    ],
  },
  {
    id: 6,
    title: 'Ridică buletinul',
    shortLabel: 'Ridicare',
    blocks: [
      { text: 'Revii la SPCLEP după termenul comunicat.', type: 'info' },
      { text: 'Prezinți recipisa și primești noul buletin.', type: 'action' },
      { text: 'Dacă nu poți rămâne în România: poți autoriza o rudă de gradul I să ridice buletinul cu o procură notarială.', type: 'tip' },
    ],
  },
]

// Pași paid procură
const procuraSteps: PaidStep[] = [
  {
    id: 2,
    title: 'Pregătește documentele',
    shortLabel: 'Pregătire docs',
    blocks: [
      { text: 'Scanează actul de identitate valabil (pașaport CRDS sau buletin).', type: 'info' },
      { text: 'Pregătește datele complete ale notarului, proprietății și/sau mandatarului.', type: 'action' },
    ],
  },
  {
    id: 3,
    title: 'Obține programarea',
    shortLabel: 'Programare',
    blocks: [
      { text: 'Intră pe econsulat.ro → „Cerere nouă" → „Acte notariale" → tipul de procură.', type: 'action' },
      { text: 'Timpii de așteptare pentru acte notariale sunt în general mai scurți decât pentru pașapoarte.', type: 'tip' },
      { text: 'Programările sunt GRATUITE.', type: 'info' },
    ],
  },
  {
    id: 4,
    title: 'Pregătire pentru ziua programării',
    shortLabel: 'Pregătire',
    hasConsulateCard: true,
    blocks: [
      { text: 'Ai actul de identitate valabil (pașaport sau buletin).', type: 'info' },
      { text: 'Ai datele complete ale notarului, proprietății, cumpărătorului/vânzătorului.', type: 'info' },
      { text: 'Dacă nu ai notar ales: caută pe unnpr.ro (Uniunea Națională a Notarilor Publici).', type: 'tip' },
    ],
  },
  {
    id: 5,
    title: 'Ziua consulatului',
    shortLabel: 'Consulat',
    blocks: [
      { text: 'Te prezinți la programare cu documentele.', type: 'info' },
      { text: 'Funcționarul consular redactează sau autentifică procura. Semnezi în fața funcționarului.', type: 'info' },
      { text: 'Plătești taxa consulară. Primești procura autentificată.', type: 'action' },
      { text: 'Fă o poză procurii imediat după semnare — înainte de a trimite originalul.', type: 'note' },
    ],
  },
  {
    id: 6,
    title: 'Trimite procura în România',
    shortLabel: 'Trimitere',
    blocks: [
      { text: 'Trimiți procura originală notarului din România prin curier (DHL, DPD, FedEx).', type: 'action' },
      { text: 'Folosește curier cu confirmare de livrare și tracking — nu trimite prin poștă normală.', type: 'warning' },
      { text: 'Notarul din România poate instrumenta tranzacția după primirea procurii.', type: 'info' },
    ],
  },
]

const ghidPaidMap: Record<GuideId, GhidPaidContent> = {
  'pasaport-crds-de': {
    title: 'Reînnoire pașaport CRDS · Germania',
    steps: pasaportCrdsSteps,
  },
  'pasaport-crds-nou-de': {
    title: 'Primul pașaport CRDS · Germania',
    steps: pasaportCrdsSteps,
  },
  'pasaport-de-cu-domiciliu': {
    title: 'Pașaport expirat · Domiciliu România',
    steps: pasaportDomRoSteps,
  },
  'pasaport-de-cu-domiciliu-pierdut': {
    title: 'Pașaport pierdut/furat · Domiciliu România',
    steps: pasaportDomRoSteps,
  },
  'buletin-de-fara-domiciliu': {
    title: 'Buletin expirat · Fără domiciliu RO',
    steps: buletinSteps,
  },
  'buletin-de-cu-domiciliu': {
    title: 'Buletin expirat · Domiciliu activ RO',
    steps: buletinSteps,
  },
  'buletin-de-fara-domiciliu-pierdut': {
    title: 'Buletin pierdut/furat · Fără domiciliu RO',
    steps: buletinSteps,
  },
  'buletin-de-cu-domiciliu-pierdut': {
    title: 'Buletin pierdut/furat · Domiciliu activ RO',
    steps: buletinSteps,
  },
  'buletin-de-primul-de': {
    title: 'Primul buletin · Născut România',
    steps: buletinSteps,
  },
  'buletin-de-primul-de-b': {
    title: 'Primul buletin · Născut Germania',
    steps: buletinSteps,
  },
  'titlu-calatorie-urgenta-de': {
    title: 'Titlu de călătorie · Urgență',
    steps: [
      {
        id: 2,
        title: 'Obține programarea de urgență',
        shortLabel: 'Programare',
        hasConsulateCard: true,
        blocks: [
          { text: 'Sună la consulat pentru programare de urgență. Titlul de călătorie poate fi eliberat în aceeași zi sau a doua zi.', type: 'action' },
          { text: 'Alternativ: econsulat.ro → „Cerere nouă" → „Titlu de călătorie".', type: 'info' },
          { text: 'Pregătește dovada urgenței: bilet de avion/tren, invitație medicală, deces în familie.', type: 'warning' },
        ],
      },
      {
        id: 3,
        title: 'Ziua consulatului',
        shortLabel: 'Consulat',
        blocks: [
          { text: 'Prezinți documentele la ghișeu. Funcționarul verifică urgența și eliberează titlul de călătorie.', type: 'info' },
          { text: 'Titlul e valabil pentru o singură călătorie sau o perioadă scurtă determinată.', type: 'warning' },
          { text: 'Plătești taxa consulară la ghișeu.', type: 'action' },
        ],
      },
      {
        id: 4,
        title: 'Pasul următor după urgență',
        shortLabel: 'Următor',
        blocks: [
          { text: 'Titlul de călătorie rezolvă urgența. Acum trebuie să rezolvi documentul permanent.', type: 'info' },
          { text: 'Dacă ai pașaportul expirat → Ghid reînnoire pașaport CRDS.', type: 'tip' },
          { text: 'Dacă ai buletinul expirat → Ghid buletin (necesită deplasare în România).', type: 'tip' },
        ],
      },
    ],
  },
  'titlu-calatorie-de': {
    title: 'Titlu de călătorie · 1–2 săptămâni',
    steps: [
      {
        id: 2,
        title: 'Cont și cerere pe econsulat.ro',
        shortLabel: 'Cerere',
        hasConsulateCard: true,
        blocks: [
          { text: 'econsulat.ro → „Cerere nouă" → „Titlu de călătorie".', type: 'action' },
          { text: 'Completează datele și încarc documentele. Titlul de călătorie nu necesită programare prealabilă la unele consulate.', type: 'info' },
        ],
      },
      {
        id: 3,
        title: 'Ziua consulatului',
        shortLabel: 'Consulat',
        blocks: [
          { text: 'Te prezinți la consulat cu documentele în programul pentru titluri de călătorie (fără programare).', type: 'info' },
          { text: 'Funcționarul verifică documentele și eliberează titlul.', type: 'info' },
          { text: 'Plătești taxa consulară.', type: 'action' },
        ],
      },
      {
        id: 4,
        title: 'Pasul următor',
        shortLabel: 'Următor',
        blocks: [
          { text: 'Acum rezolvă documentul permanent: pașaport sau buletin.', type: 'tip' },
        ],
      },
    ],
  },
  'procura-vanzare-de': { title: 'Procură vânzare proprietate · Germania', steps: procuraSteps },
  'procura-mostenire-de': { title: 'Procură moștenire · Germania', steps: procuraSteps },
  'procura-generala-de': { title: 'Procură generală · Germania', steps: procuraSteps },
  'transcriere-nastere-de': {
    title: 'Transcriere certificat de naștere · Germania',
    steps: [
      {
        id: 3,
        title: 'Cont și cerere pe econsulat.ro',
        shortLabel: 'Cerere',
        blocks: [
          { text: 'econsulat.ro → „Cerere nouă" → „Acte de stare civilă" → „Transcriere certificat de naștere".', type: 'action' },
          { text: 'Completează datele copilului și ale părinților. Încarc documentele scanate inclusiv traducerea legalizată.', type: 'info' },
        ],
      },
      {
        id: 4,
        title: 'Obține programarea',
        shortLabel: 'Programare',
        blocks: [
          { text: 'Programare pe econsulat.ro după validarea cererii.', type: 'action' },
          { text: 'Transcrierea e un serviciu cu timp de procesare lung — termenul legal este de până la 6 luni de la depunere.', type: 'warning' },
        ],
      },
      {
        id: 5,
        title: 'Pregătire pentru ziua programării',
        shortLabel: 'Pregătire',
        hasConsulateCard: true,
        blocks: [
          { text: 'Toate documentele originale + traducerile legalizate în geantă.', type: 'info' },
          { text: 'La unele consulate, ambii părinți trebuie să fie prezenți la depunere — verifică în avans.', type: 'warning' },
        ],
      },
      {
        id: 6,
        title: 'Ziua consulatului',
        shortLabel: 'Consulat',
        blocks: [
          { text: 'Depui dosarul complet la ghișeu. Funcționarul verifică documentele.', type: 'info' },
          { text: 'Plătești taxa consulară. Primești numărul de dosar / recipisa.', type: 'action' },
          { text: 'Procesarea se face la Direcția de Stare Civilă din România — consulatul transmite dosarul.', type: 'info' },
        ],
      },
      {
        id: 7,
        title: 'Ridică certificatul de naștere românesc',
        shortLabel: 'Ridicare',
        blocks: [
          { text: 'După procesare (3–6 luni), certificatul de naștere românesc e disponibil la consulat.', type: 'info' },
          { text: 'Odată obținut certificatul, CNP-ul este atribuit automat.', type: 'tip' },
          { text: 'Cu CNP-ul, poți continua cu ghidul de pașaport sau buletin.', type: 'action' },
        ],
      },
    ],
  },
}

// ─── CARD CONSULAT ────────────────────────────────────────────────────────────

function ConsulateCard({ consulateId }: { consulateId: ConsulateId }) {
  const card = getConsulateCard(consulateId)

  return (
    <div className="bg-gray-900 rounded-2xl p-4 my-3 text-white">
      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
        📍 Consulatul tău
      </div>
      <div className="font-bold text-sm mb-1">{card.name}</div>
      <div className="text-xs text-gray-300 mb-3">{card.address}</div>
      {card.addressNote && (
        <div className="text-xs text-orange-300 mb-3">⚠️ {card.addressNote}</div>
      )}

      {/* Links Maps + Waze */}
      <div className="flex gap-2 mb-3">
        <a href={card.googleMapsUrl} target="_blank" rel="noopener noreferrer"
           className="flex-1 py-2 bg-gray-800 rounded-lg text-xs text-center font-medium text-gray-200 hover:bg-gray-700">
          🗺 Google Maps
        </a>
        <a href={card.wazeUrl} target="_blank" rel="noopener noreferrer"
           className="flex-1 py-2 bg-gray-800 rounded-lg text-xs text-center font-medium text-gray-200 hover:bg-gray-700">
          🚗 Waze
        </a>
      </div>

      {/* Program + plată */}
      <div className="text-xs text-gray-400 mb-1">
        <span className="text-gray-500">Program depunere:</span> {card.scheduleDeponere}
      </div>
      <div className="text-xs text-gray-400 mb-1">
        <span className="text-gray-500">Ridicare:</span> {card.scheduleRidicare}
      </div>
      <div className="text-xs text-gray-400 mb-2">
        <span className="text-gray-500">Plată:</span> {card.paymentMethod}
      </div>
      {card.paymentNote && (
        <div className="text-xs text-gray-500 mb-2">{card.paymentNote}</div>
      )}

      {/* Tel */}
      <div className="text-xs text-gray-500">
        📞 {card.phone} · {card.phoneNote}
      </div>

      {/* Warnings */}
      {card.warnings.length > 0 && (
        <div className="mt-3 flex flex-col gap-1">
          {card.warnings.map((w, i) => (
            <div key={i} className="text-xs text-orange-300 bg-orange-900/30 rounded-lg px-3 py-2">
              ⚠️ {w}
            </div>
          ))}
        </div>
      )}

      {/* Poștă */}
      {card.postalPickup && card.postalPickupUrl && (
        <a href={card.postalPickupUrl} target="_blank" rel="noopener noreferrer"
           onClick={(e) => e.stopPropagation()}
           className="block mt-3 text-xs text-blue-300 underline">
          ✉ Ridicare prin poștă disponibilă — vezi instrucțiuni
        </a>
      )}

      {/* URL căutare pașaport */}
      <a href={card.pasaportSearchUrl} target="_blank" rel="noopener noreferrer"
         onClick={(e) => e.stopPropagation()}
         className="block mt-2 text-xs text-blue-300 underline">
        🔍 Verifică dacă pașaportul a sosit
      </a>
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function GhidPaidPage() {
  const { sessionId } = useParams<{ sessionId: string }>()
  const searchParams = useSearchParams()
  const router = useRouter()
  const {
    guideId,
    consulate,
    currentStepIndex,
    totalSteps,
    notes,
    setCurrentStepIndex,
    setTotalSteps,
    goToNextStep,
    goToPrevStep,
    setNote,
  } = useAppStore()

  const [noteValue, setNoteValue] = useState('')
  const [noteSaved, setNoteSaved] = useState(false)
  const testGuideId = searchParams.get('guide') as GuideId | null
  const activeGuideId = TEST_MODE && testGuideId ? testGuideId : guideId

  const content = activeGuideId ? ghidPaidMap[activeGuideId] : null

  useEffect(() => {
    if (content) setTotalSteps(content.steps.length)
  }, [content, setTotalSteps])

  useEffect(() => {
    if (activeGuideId) {
      setNoteValue(notes[currentStepIndex] ?? '')
      setNoteSaved(false)
    }
  }, [currentStepIndex, activeGuideId, notes])

  if (!content) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-3xl mb-3">⚠️</div>
          <p className="text-sm">Ghid negăsit. <a href="/wizard" className="underline">Reîncepe</a></p>
        </div>
      </main>
    )
  }

  const step = content.steps[currentStepIndex]
  const isFirst = currentStepIndex === 0
  const isLast = currentStepIndex === content.steps.length - 1
  const showNoteField = step.id === 5

  const handleNoteChange = (val: string) => {
    setNoteValue(val)
    setNoteSaved(false)
    // Autosave debounce
    clearTimeout((window as unknown as { _noteTimeout: ReturnType<typeof setTimeout> })._noteTimeout)
    ;(window as unknown as { _noteTimeout: ReturnType<typeof setTimeout> })._noteTimeout = setTimeout(() => {
      setNote(currentStepIndex, val)
      setNoteSaved(true)
    }, 800)
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <SiteHeader />
      <div className="max-w-md mx-auto w-full flex flex-col flex-1">

        {/* Header */}
        <div className="px-5 pt-6 pb-3">
          <div className="mb-3 flex justify-end">
            <a href={`/ajutor?session=${sessionId}`} className="text-xs text-gray-400 hover:text-gray-600">
              Ajutor →
            </a>
          </div>
          <div className="text-xs text-gray-500 mb-1">{content.title}</div>

          {/* Progress dots */}
          <div className="flex gap-1.5 flex-wrap">
            {content.steps.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setCurrentStepIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentStepIndex
                    ? 'bg-gray-900 w-6'
                    : i < currentStepIndex
                    ? 'bg-green-500 w-2'
                    : 'bg-gray-200 w-2'
                }`}
                title={s.shortLabel}
              />
            ))}
          </div>
        </div>

        {/* Step counter */}
        <div className="px-5 mb-1">
          <span className="text-xs text-gray-400">
            Pasul {currentStepIndex + 1} / {totalSteps} — {step.shortLabel}
          </span>
        </div>

        {/* Conținut pas */}
        <div className="flex-1 px-5 overflow-y-auto pb-32">
          <h2 className="text-lg font-bold text-gray-900 mb-4">{step.title}</h2>

          {/* Blocks */}
          <div className="flex flex-col gap-3 mb-4">
            {step.blocks.map((block, i) => (
              <div
                key={i}
                className={`rounded-xl px-3 py-3 text-sm flex gap-2 ${blockStyles[block.type]}`}
              >
                <span className="flex-shrink-0 mt-0.5">{blockIcons[block.type]}</span>
                <span className="whitespace-pre-line">{block.text}</span>
              </div>
            ))}
          </div>

          {/* Card consulat dinamic */}
          {step.hasConsulateCard && consulate && (
            <ConsulateCard consulateId={consulate as ConsulateId} />
          )}

          {/* Action item */}
          {step.actionItem && (
            <div className="bg-gray-900 rounded-xl px-4 py-3 text-white text-sm font-semibold mb-4">
              {step.actionItem}
            </div>
          )}

          {/* Notă per pas */}
          {showNoteField && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-1">
                <div className="text-xs font-semibold text-gray-500">📝 Nota mea pentru acest pas</div>
                {noteSaved && <span className="text-xs text-green-500">Salvat ✓</span>}
              </div>
              <textarea
                value={noteValue}
                onChange={(e) => handleNoteChange(e.target.value)}
                placeholder="ex: Programare joi 15 mai, ora 10:00 · Adresă consulat salvată · Vin cu soțul/soția"
                rows={3}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 placeholder-gray-300 resize-none focus:outline-none focus:border-gray-400"
              />
            </div>
          )}

          {/* Ultimul pas — card celebrare */}
          {isLast && (
            <div className="mt-6 bg-green-50 border-2 border-green-400 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-2">🎉</div>
              <div className="font-bold text-gray-900 mb-1">Ai terminat toți pașii!</div>
              <div className="text-sm text-gray-600 mb-4">
                Când primești documentul, marchează ghidul ca finalizat.
              </div>
              <button
                onClick={() => router.push(`/succes?session=${sessionId}`)}
                className="w-full py-3 bg-green-500 text-white font-bold rounded-xl text-sm"
              >
                Am rezolvat! →
              </button>
            </div>
          )}
        </div>

        {/* Navigare fixă jos */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4">
          <div className="max-w-md mx-auto flex gap-3">
            <button
              onClick={isFirst ? () => router.push(`/ghid?session=${sessionId}`) : goToPrevStep}
              className="flex-1 py-3 bg-gray-100 text-gray-600 font-medium rounded-xl text-sm"
            >
              ← {isFirst ? 'Înapoi' : content.steps[currentStepIndex - 1]?.shortLabel}
            </button>
            {!isLast && (
              <button
                onClick={goToNextStep}
                className="flex-[2] py-3 bg-gray-900 text-white font-semibold rounded-xl text-sm"
              >
                {content.steps[currentStepIndex + 1]?.shortLabel} →
              </button>
            )}
          </div>
        </div>

      </div>
    </main>
  )
}
