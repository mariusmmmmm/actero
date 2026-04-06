// ActeRO — app/ghid/[sessionId]/page.tsx
// S5 — Ghid Paid: un pas pe ecran, navigare ← →, card consulat dinamic, note

'use client'

import { Suspense, useEffect, useState } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { TEST_MODE } from '@/lib/config'
import SiteHeader from '@/components/layout/SiteHeader'
import ChecklistTab from '@/components/ghid/ChecklistTab'
import TrackerTab from '@/components/ghid/TrackerTab'
import ParteneriTab from '@/components/ghid/ParteneriTab'
import { trackEvent, trackOnce, withAttribution } from '@/lib/analytics'
import { ghidFreeMap, type FreeStep } from '@/lib/guides/freeContent'
import { useAppStore } from '@/store/appStore'
import { deriveConsulateId, getConsulateCard } from '@/lib/utils/deriveConsulate'
import type { BundeslandCode, GuideId, ConsulateId, ProblemType, SituationFlags } from '@/types'

// ─── CONȚINUT PAȘI PAID per ghid ─────────────────────────────────────────────

type Block = {
  text: string
  type: 'info' | 'warning' | 'tip' | 'action' | 'note' | 'alert'
}

type PaidStep = {
  id: number
  title: string
  shortLabel: string
  hasConsulateCard?: boolean
  blocks: Block[]
  actionItem?: {
    label: string
    href: string
  } | null
}

type GhidPaidContent = {
  title: string
  steps: PaidStep[]
}

type GhidTab = 'ghid' | 'checklist' | 'tracker' | 'parteneri'

const blockStyles: Record<string, string> = {
  info: 'bg-gray-50 border border-gray-200 text-gray-700',
  warning: 'bg-orange-50 border border-orange-200 text-orange-800',
  alert: 'bg-red-50 border-2 border-red-300 text-red-900 shadow-sm',
  tip: 'bg-green-50 border border-green-200 text-green-800',
  action: 'bg-blue-50 border border-blue-200 text-blue-800',
  note: 'bg-yellow-50 border border-yellow-200 text-yellow-800',
}

const blockIcons: Record<string, string> = {
  info: '📋',
  warning: '⚠️',
  alert: '🚨',
  tip: '💡',
  action: '→',
  note: '📝',
}

const getFreeStepShortLabel = (step: FreeStep): string => {
  if (step.id === 1) return 'Documente'
  if (step.id === 2) return 'Pregătire'
  return step.title
}

const toPaidFreeSteps = (steps: FreeStep[]): PaidStep[] =>
  steps.map((step) => ({
    id: step.id,
    title: step.title,
    shortLabel: getFreeStepShortLabel(step),
    blocks: step.blocks,
  }))

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
    actionItem: {
      label: 'Deschide econsulat.ro',
      href: 'https://www.econsulat.ro',
    },
  },
  {
    id: 4,
    title: 'Obține programarea',
    shortLabel: 'Programare',
    blocks: [
      { text: 'Programarea devine disponibilă după ce cererea trece în starea „Validată".', type: 'info' },
      { text: 'Intră pe econsulat.ro → „Programările mele" → „Programare nouă" → alege consulatul tău → alege prima dată disponibilă.', type: 'action' },
      { text: 'Din experiența comunității, sloturile apar mai des la început de săptămână sau după validarea cererilor și anulărilor. Verifică periodic econsulat.ro. (neconfirmat oficial)', type: 'tip' },
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
      { text: 'Nu trebuie să aduci fotografii — imaginea facială se preia biometric la ghișeu la toate cele 4 consulate.', type: 'info' },
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
    actionItem: {
      label: 'Deschide econsulat.ro',
      href: 'https://www.econsulat.ro',
    },
  },
  ...pasaportCrdsSteps.slice(1), // pașii 4-7 sunt identici
]

const buletinExpiratFaraDomSteps: PaidStep[] = [
  {
    id: 3,
    title: 'Planifică deplasarea în România',
    shortLabel: 'Planificare',
    blocks: [
      { text: 'Identifică exact SPCLEP-ul de care aparții: cel corespunzător ultimului domiciliu pe care l-ai avut înregistrat în România.', type: 'info' },
      { text: 'Verifică dacă acel SPCLEP lucrează cu programare online, prin platforma locală a primăriei, sau doar cu prezentare directă la ghișeu.', type: 'action' },
      { text: 'Rezervă drumul în România doar după ce știi exact unde depui și în ce zile are program cu publicul. Nu toate ghișeele lucrează zilnic pentru evidența persoanelor.', type: 'warning' },
      { text: 'Dacă localitatea ta are programări puține, sună sau verifică site-ul primăriei la prima oră a zilei. Uneori locurile apar din anulări de pe o zi pe alta.', type: 'tip' },
    ],
  },
  {
    id: 4,
    title: 'Pregătire pentru deplasare',
    shortLabel: 'Pregătire',
    blocks: [
      { text: 'Ai documentul cu care călătorești în România și toate originalele puse în geantă: buletinul expirat, certificatul de naștere, certificatul de căsătorie dacă e cazul.', type: 'action' },
      { text: 'Fotografia și amprentele se preiau biometric la ghișeul SPCLEP. Verifică doar modalitatea de plată și dacă localitatea cere copii simple ale actelor.', type: 'warning' },
      { text: 'Notează și adresa exactă a ghișeului, programul și modalitatea de plată. Nu presupune că aceeași regulă se aplică în toate orașele.', type: 'info' },
    ],
  },
  {
    id: 5,
    title: 'Ziua la SPCLEP',
    shortLabel: 'SPCLEP',
    blocks: [
      { text: 'Te prezinți la ghișeu și spui clar că vii pentru eliberarea unei noi cărți de identitate după expirare, fără domiciliu activ în România.', type: 'action' },
      { text: 'Funcționarul verifică actele, stabilește ce tip de document îți poate emite localitatea respectivă și îți generează cererea.', type: 'info' },
      { text: 'Dacă ți se cere taxă sau chitanță, plătești exact după instrucțiunile ghișeului sau ale primăriei locale. Nu există o practică uniformă între toate SPCLEP-urile.', type: 'info' },
      { text: 'Primești recipisă sau număr de înregistrare. Fă imediat o poză cu telefonul și notează termenul comunicat de funcționar.', type: 'tip' },
      { text: 'Dacă funcționarul cere un document neașteptat, notează exact ce cere și întreabă calm dacă este o regulă locală sau o schimbare de procedură.', type: 'warning' },
    ],
  },
  {
    id: 6,
    title: 'Ridică buletinul',
    shortLabel: 'Ridicare',
    blocks: [
      { text: 'Revii la SPCLEP după termenul comunicat de ghișeu. Nu te baza pe un termen generic văzut online pentru alt oraș.', type: 'info' },
      { text: 'Prezinți recipisa și ridici noua carte de identitate conform regulii locale de predare.', type: 'action' },
      { text: 'Întreabă din start la depunere dacă ridicarea este strict personală sau dacă localitatea respectivă permite excepții pentru CIS. Regulile practice diferă între CEI și CIS.', type: 'warning' },
    ],
  },
]

const buletinExpiratDomSteps: PaidStep[] = [
  {
    id: 3,
    title: 'Planifică deplasarea în România',
    shortLabel: 'Planificare',
    blocks: [
      { text: 'Identifică SPCLEP-ul exact corespunzător domiciliului tău activ din România. Nu poți depune oriunde doar pentru că ai deja adresă în țară.', type: 'info' },
      { text: 'Verifică dacă acest SPCLEP lucrează cu programare online sau prin prezentare directă și notează zilele cu publicul.', type: 'action' },
      { text: 'Confirmă înainte de drum și dacă trebuie adusă din nou dovada spațiului pentru adresa actuală. Unele ghișee o cer, altele nu.', type: 'warning' },
    ],
  },
  {
    id: 4,
    title: 'Pregătire pentru deplasare',
    shortLabel: 'Pregătire',
    blocks: [
      { text: 'Pune în geantă toate originalele: buletinul expirat, certificatul de naștere, dovada adresei, certificatul de căsătorie dacă e cazul și documentul de călătorie pentru România.', type: 'action' },
      { text: 'Verifică dacă localitatea ta cere plată în avans sau chitanță. Fotografia și amprentele se preiau biometric la ghișeu, nu trebuie să vii cu poze proprii.', type: 'warning' },
      { text: 'Dacă adresa este pe locuința altcuiva, clarifică înainte dacă proprietarul trebuie să vină fizic sau dacă este suficient actul de spațiu pregătit.', type: 'tip' },
    ],
  },
  {
    id: 5,
    title: 'Ziua la SPCLEP',
    shortLabel: 'SPCLEP',
    blocks: [
      { text: 'Te prezinți la ghișeu și spui că soliciți reînnoirea cărții de identitate pentru un domiciliu deja activ în România.', type: 'action' },
      { text: 'Funcționarul verifică actele, îți generează cererea și îți explică dacă localitatea emite CEI, CIS sau ambele.', type: 'info' },
      { text: 'Funcționarul îți preia fotografia biometrică și amprentele direct la ghișeu. Nu trebuie să vii cu fotografii proprii.', type: 'info' },
      { text: 'La final primești recipisa sau numărul cererii. Fotografiaz-o și notează termenul exact comunicat pentru ridicare.', type: 'tip' },
      { text: 'Dacă ți se cere un act care nu apare în lista ta, întreabă calm dacă este cerință legală sau practică locală și notează răspunsul.', type: 'warning' },
    ],
  },
  {
    id: 6,
    title: 'Ridică buletinul',
    shortLabel: 'Ridicare',
    blocks: [
      { text: 'Revii la același SPCLEP sau la punctul indicat de funcționar, în termenul comunicat la depunere.', type: 'info' },
      { text: 'Prezinți recipisa și ridici noul document. Verifică imediat numele, CNP-ul și adresa înainte să pleci din ghișeu.', type: 'action' },
      { text: 'CEI se ridică obligatoriu personal. Pentru CIS, întreabă de la depunere dacă localitatea permite ridicare prin procură specială notarială.', type: 'warning' },
    ],
  },
]

const buletinLipsaFaraDomSteps: PaidStep[] = [
  {
    id: 3,
    title: 'Planifică deplasarea în România',
    shortLabel: 'Planificare',
    blocks: [
      { text: 'Identifică SPCLEP-ul competent: localitatea ultimului domiciliu înregistrat în România.', type: 'info' },
      { text: 'Dacă buletinul a fost furat, notează exact data și locul evenimentului și păstrează dovada poliției. Îți va fi utilă la explicații și în declarație.', type: 'action' },
      { text: 'Asigură-te mai întâi că poți intra legal în România cu un document valabil de călătorie. Fără asta, partea de SPCLEP nici nu începe.', type: 'warning' },
    ],
  },
  {
    id: 4,
    title: 'Pregătire pentru deplasare',
    shortLabel: 'Pregătire',
    blocks: [
      { text: 'Pune în geantă toate actele rămase care te pot identifica: certificat de naștere, pașaport, permis românesc, certificat de căsătorie, copii vechi de buletin dacă există.', type: 'action' },
      { text: 'Pregătește explicația clară pentru ghișeu: când ai observat lipsa, dacă a fost pierdere sau furt, și dacă ai declarat la poliție.', type: 'tip' },
      { text: 'Nu presupune că dovada poliției înlocuiește actul de identitate. Ea doar susține declarația ta; identificarea se face pe baza documentelor și a verificărilor din sistem.', type: 'warning' },
    ],
  },
  {
    id: 5,
    title: 'Ziua la SPCLEP',
    shortLabel: 'SPCLEP',
    blocks: [
      { text: 'Te prezinți la ghișeu și spui clar că documentul de identitate este pierdut, furat sau distrus și că soliciți emiterea unei noi cărți de identitate.', type: 'action' },
      { text: 'Funcționarul te identifică pe baza actelor pe care le ai și a verificărilor din sistem, apoi îți cere declarația privind lipsa documentului.', type: 'info' },
      { text: 'Dacă ai sesizarea de la poliție, o arăți ca document-suport; dacă nu, continui cu declarația de la ghișeu conform explicațiilor funcționarului.', type: 'info' },
      { text: 'Primești recipisă sau număr de cerere. Notează termenul comunicat și fotografiază imediat dovada depunerii.', type: 'tip' },
      { text: 'Dacă ți se spune că mai lipsește ceva, cere să ți se spună exact ce document și în ce calitate este necesar, ca să nu revii inutil a doua oară.', type: 'warning' },
    ],
  },
  {
    id: 6,
    title: 'Ridică buletinul',
    shortLabel: 'Ridicare',
    blocks: [
      { text: 'Revii la SPCLEP după termenul primit la depunere. Nu te baza pe durata medie din alt oraș.', type: 'info' },
      { text: 'Prezinți recipisa și ridici noul document conform regulii locale de predare.', type: 'action' },
      { text: 'Verifică imediat datele noului act. CEI se ridică personal; dacă ai ales CIS, poți organiza ridicarea prin procură specială notarială.', type: 'warning' },
    ],
  },
]

const buletinLipsaDomSteps: PaidStep[] = [
  {
    id: 3,
    title: 'Planifică deplasarea în România',
    shortLabel: 'Planificare',
    blocks: [
      { text: 'Identifică exact SPCLEP-ul care corespunde domiciliului tău activ din România și verifică programul pentru emitere document lipsă.', type: 'info' },
      { text: 'Alege înainte de drum dacă vrei CEI sau CIS. CEI este gratuită la prima emitere pentru 14+ până la 30 iunie 2026, are termen mai scurt și se ridică personal; CIS costă 40 RON și durează mai mult.', type: 'info' },
      { text: 'Dacă documentul a fost furat, păstrează și dovada poliției. Dacă a fost pierdut, notează când ai constatat lipsa — informația îți va fi cerută la ghișeu.', type: 'action' },
      { text: 'Confirmă înainte de drum dacă ghișeul cere și dovada adresei actuale sau extras CF recent la reemiterea pentru document lipsă.', type: 'warning' },
      { text: 'Raportul poliției NU este documentul principal SPCLEP. Îl ai doar ca suport dacă a fost furt; funcționarul îți ia oricum declarația la ghișeu.', type: 'warning' },
    ],
  },
  {
    id: 4,
    title: 'Pregătire pentru deplasare',
    shortLabel: 'Pregătire',
    blocks: [
      { text: 'Pune în geantă actele de identificare rămase, certificatul de naștere, dovada adresei și certificatul de căsătorie dacă numele actual diferă.', type: 'action' },
      { text: 'Extrasul de carte funciară trebuie să fie recent: maxim 30 de zile. PDF-ul emis din epay.ancpi.ro este acceptat la ghișeu, nu e nevoie să alergi după o ștampilă fizică dacă ai extrasul electronic corect.', type: 'info' },
      { text: 'Dacă alegi CIS sau dacă nu mai beneficiezi de gratuitatea primei CEI, plătește taxa la CEC Bank sau SelfPay înainte de depunere și ia dovada cu tine.', type: 'info' },
      { text: 'Dacă ai copii vechi după buletinul dispărut sau după recipise mai vechi, ia-le cu tine. Nu înlocuiesc documentul, dar pot ajuta la verificarea rapidă a datelor.', type: 'tip' },
      { text: 'Asigură-te că ai și documentul cu care călătorești în România. Ghidul de emitere a buletinului nu înlocuiește partea de transport internațional.', type: 'warning' },
    ],
  },
  {
    id: 5,
    title: 'Ziua la SPCLEP',
    shortLabel: 'SPCLEP',
    blocks: [
      { text: 'La ghișeu spui clar că ai domiciliul activ în România, dar buletinul este pierdut, furat sau distrus și vrei emiterea unui nou document.', type: 'action' },
      { text: 'Funcționarul verifică actele, îți ia declarația privind lipsa documentului și îți spune exact ce variantă de carte de identitate se emite local.', type: 'info' },
      { text: 'Dacă ai sesizarea de la poliție, o prezinți ca document-suport. Dacă nu, continui pe baza declarației și a verificărilor în sistem. Important: și în cazul furtului, documentul-cheie pentru SPCLEP rămâne declarația ta, nu procesul-verbal al poliției.', type: 'info' },
      { text: 'Dacă alegi CEI, întreabă explicit despre termenul estimat și despre ridicarea personală cu setarea PIN-urilor. Dacă alegi CIS, întreabă dacă localitatea admite ridicare prin procură specială notarială.', type: 'tip' },
      { text: 'Primești recipisă sau număr de cerere. Fă o fotografie și notează termenul și locul de ridicare comunicate de funcționar.', type: 'tip' },
      { text: 'Dacă ți se cere un act în plus, notează exact ce este și de ce îl solicită, ca să poți reveni țintit dacă este nevoie.', type: 'warning' },
    ],
  },
  {
    id: 6,
    title: 'Ridică buletinul',
    shortLabel: 'Ridicare',
    blocks: [
      { text: 'Revii la SPCLEP sau la punctul indicat de funcționar, în termenul transmis la depunere.', type: 'info' },
      { text: 'Prezinți recipisa și ridici noul document. Verifică imediat corectitudinea datelor înainte să pleci.', type: 'action' },
      { text: 'CEI: ridicare personală, de regulă în câteva zile, iar la ridicare stabilești PIN-ul de autentificare și PIN-ul de semnătură. Fără prezența ta, documentul nu se finalizează corect.', type: 'info' },
      { text: 'CIS: termenul este de obicei mai lung, dar documentul poate fi ridicat prin procură specială notarială dacă alegi această variantă.', type: 'info' },
      { text: 'Nu pleca fără să clarifici de la depunere cine ridică documentul și când, mai ales dacă revii repede în Germania.', type: 'warning' },
    ],
  },
]

const buletinPrimulSteps: PaidStep[] = [
  {
    id: 3,
    title: 'Alege tipul de carte de identitate',
    shortLabel: 'Tip CI',
    blocks: [
      { text: 'Ai două opțiuni: Cartea Electronică de Identitate (CEI) sau Cartea de Identitate Simplă (CIS). Alegerea influențează termenul de eliberare, costul și cum ridici documentul. ✅', type: 'info' },
      { text: 'CEI — gratuită la prima eliberare pentru 14+ (PNRR, până la 30 iunie 2026) ✅ · biometrică, validă pentru călătorie în UE ✅ · termen mediu: 5 zile calendaristice, maxim 30 ✅ · necesită programare online pe hub.mai.gov.ro ✅ · ridici obligatoriu personal (stabilești PIN-urile la ridicare) ✅', type: 'info' },
      { text: 'CIS — 40 RON ✅ · fără cip, nu e valabilă pentru călătorie în UE ✅ · termen mediu: 30 zile calendaristice, maxim 45 ✅ · NU necesită programare — te prezinți direct la ghișeu ✅ · ridici obligatoriu personal ✅', type: 'info' },
      { text: 'Dacă vii din Germania special pentru buletin: CEI e varianta logică — gratuită, gata în ~5 zile, valabilă pentru zbor în UE chiar și fără pașaport. Cu CIS riști să stai 30–45 de zile în România sau să mai faci o deplasare.', type: 'tip' },
      { text: "Important: procedura de schimbare domiciliu din strainatate în România se face la SPCLEP-ul de pe raza teritorială a adresei unde îți stabilești domiciliul — nu poți alege orice SPCLEP. ✅ Regula 'orice SPCLEP' pentru CEI nu se aplică în această situație specifică.", type: 'warning' },
    ],
    actionItem: null,
  },
  {
    id: 4,
    title: 'Planifică deplasarea și programarea',
    shortLabel: 'Planificare',
    blocks: [
      { text: 'Identifică SPCLEP-ul din sectorul/orașul adresei unde îți stabilești domiciliul. Adresa exactă și programul de lucru se găsesc pe site-ul primăriei locale sau pe hub.mai.gov.ro secțiunea Ghișee. ✅', type: 'action' },
      { text: 'Dacă ai ales CEI: programarea este obligatorie și se face exclusiv online pe hub.mai.gov.ro → CEI → Programări. Alege SPCLEP-ul din zona adresei tale și prima dată disponibilă. ✅ Confirmă programarea în 30 de minute de la trimitere — altfel se anulează automat. ✅', type: 'info' },
      { text: 'Dacă ai ales CIS: nu este nevoie de programare online — te prezinți direct la ghișeul SPCLEP al adresei tale. ✅ Verifică în prealabil programul de lucru cu publicul pe site-ul primăriei locale. ⚠️ Programul diferă de la o localitate la alta.', type: 'info' },
      { text: 'Rezervă biletul de avion DUPĂ ce ai programarea confirmată (pentru CEI) sau după ce ai verificat orarul SPCLEP (pentru CIS). Planifică să rămâi minim 7–10 zile pentru a include și ridicarea CEI, sau să revii separat.', type: 'warning' },
      { text: 'Dacă SPCLEP-ul local e aglomerat și nu găsești programare rapid la CEI, verifică disponibilitate la alte sectoare din același oraș — uneori există locuri mai devreme în alt cartier.', type: 'tip' },
    ],
    actionItem: {
      label: 'Programează-te pe hub.mai.gov.ro',
      href: 'https://hub.mai.gov.ro/cei/programari/',
    },
  },
  {
    id: 5,
    title: 'Pregătire pentru ziua deplasării',
    shortLabel: 'Pregătire',
    blocks: [
      { text: 'Pune în geantă TOATE documentele originale: pașaport românesc (valabil sau expirat) + certificat de naștere + act de identitate german + dovada adresei de domiciliu (actul de proprietate / declarația de primire în spațiu + actul de proprietate al găzduitorului / contractul de închiriere înregistrat la ANAF) + certificatul de căsătorie dacă e cazul.', type: 'action' },
      { text: 'Nu trebuie să aduci fotografii — imaginea facială și amprentele se preiau biometric la ghișeu. ✅', type: 'info' },
      { text: 'Dacă proprietarul care te găzduiește vine cu tine la SPCLEP: asigură-te că are la el CI-ul și actul de proprietate — va semna declarația de primire în spațiu direct la ghișeu, fără notar. ✅ Dacă nu poate veni: asigură-te că ai declarația notarizată (max 90 de zile valabilitate) sau declarația de la consulat (max 6 luni). ✅', type: 'warning' },
      { text: 'Plata: dacă ai ales CIS (40 RON), plătește la CEC Bank sau automat SelfPay înainte de depunere și ia dovada plății cu tine. ✅ Dacă ai ales CEI (gratuit prima oară până în iunie 2026), nu trebuie să plătești nimic. ✅', type: 'info' },
      { text: 'Fă câte o copie simplă din fiecare document — unele SPCLEP-uri le cer, altele le fac pe loc la ghișeu. Cu copiile pregătite eviți aglomerația la copiator din vecinătate.', type: 'tip' },
    ],
    actionItem: null,
  },
  {
    id: 6,
    title: 'Ziua la SPCLEP',
    shortLabel: 'SPCLEP',
    blocks: [
      { text: 'Prezintă-te la ghișeul de evidența persoanelor și spune că vii pentru schimbarea domiciliului din Germania în România și eliberarea primei cărți de identitate. Funcționarul completează electronic cererea tip dedicată acestei proceduri. ✅', type: 'action' },
      { text: 'Funcționarul verifică documentele (originalele sunt returnate imediat după verificare ✅), înregistrează adresa de domiciliu, și preia datele biometrice: imagine facială + amprente (de la 12 ani în sus) + semnătură. ✅', type: 'info' },
      { text: 'Pașaportul românesc cu domiciliu în Germania va fi anulat la momentul eliberării CI — este procedura standard. ✅ Dacă nu mai ai pașaportul, vei da o declarație în acest sens la ghișeu. ✅', type: 'warning' },
      { text: 'Dacă găzduitorul vine cu tine: semnează declarația de primire în spațiu direct în fața funcționarului — simplu, gratuit, fără notar. ✅ Furnizează o adresă de email validă la depunere — vei primi notificări despre stadiul cererii CEI. ✅', type: 'tip' },
      { text: 'Dacă funcționarul cere un document care nu e în lista ta: notează calm ce anume și întreabă diplomatic de când s-a modificat procedura. Cere să vorbești cu supervizorul dacă cerința ți se pare nefundamentată. ✅', type: 'warning' },
      { text: 'La final primești o recipisă cu termenul estimat de eliberare: CEI mediu 5 zile calendaristice (maxim 30) ✅ · CIS mediu 30 zile calendaristice (maxim 45) ✅. Fă imediat o fotografie recipisei cu telefonul.', type: 'info' },
    ],
    actionItem: null,
  },
  {
    id: 7,
    title: 'Ridică buletinul',
    shortLabel: 'Ridicare',
    blocks: [
      { text: 'CEI și CIS se eliberează EXCLUSIV solicitantului — nu există procură sau mandatar pentru ridicare. ✅ La CEI stabilești personal codurile PIN la ridicare.', type: 'warning' },
      { text: 'Pentru CEI: verifici statusul pe hub.mai.gov.ro → Verificare Status CEI, sau aștepți emailul de confirmare. ✅ Poți ridica CEI de la orice SPCLEP din România, dacă ai optat pentru asta la momentul depunerii — nu trebuie să revii neapărat la același SPCLEP. ✅', type: 'action' },
      { text: 'La ridicare: aduci recipisa de depunere + un act de identitate. ✅ Pentru CEI stabilești pe loc cele două coduri PIN: PIN de autentificare (4 cifre) + PIN de semnătură electronică (6 cifre). ✅ Alege-le cu grijă și memorează-le.', type: 'info' },
      { text: 'Ridici CEI în maxim 90 de zile de la depunere — după această dată certificatul de autentificare poate necesita rescriere la ghișeu. ✅', type: 'warning' },
      { text: 'Verifică imediat la ghișeu datele înscrise electronic în CEI (prin aplicația RO CEI Reader pe telefon sau cititorul ghișeului): nume, CNP, adresă. Dacă există o eroare, semnalează pe loc.', type: 'tip' },
      { text: 'Adresa de domiciliu nu apare tipărită pe CEI — e stocată în cip. ✅ Dacă ai nevoie de dovada adresei, obții gratuit online un certificat de atestare a domiciliului de pe hub.mai.gov.ro. ✅', type: 'info' },
    ],
    actionItem: {
      label: 'Verifică statusul cererii pe hub.mai.gov.ro',
      href: 'https://hub.mai.gov.ro/cei/status/',
    },
  },
]

const buletinPrimulGermaniaSteps: PaidStep[] = [
  {
    id: 3,
    title: 'Creează cont și programează-te pe hub.mai.gov.ro',
    shortLabel: 'Programare',
    blocks: [
      { text: "Intră pe hub.mai.gov.ro → 'Autentificare' → 'Creare cont'. Completezi email + parolă și validezi contul prin link-ul primit pe email. Fără validare, butonul de programare nu devine activ.", type: 'action' },
      { text: "Mergi la 'Cartea electronică de identitate' → 'Programare' → selectezi județul și localitate. Alege orice localitate din țară — nu ești legat de adresa de domiciliu. Completezi datele și confirmi în 30 de minute prin link-ul de email.", type: 'action' },
      { text: 'Dacă nu confirmi programarea în 30 de minute, aceasta se anulează automat. Nu poți face o nouă programare cât timp una este activă — așteaptă anularea automată sau anulează manual din cont.', type: 'warning' },
      { text: 'Tinerii care solicită primul act de identitate (au împlinit sau vor împlini 14 ani în 30 de zile) beneficiază de un orizont extins de programare de 45 de zile — mai mult timp disponibil față de cetățenii care reînnoiesc.', type: 'tip' },
      { text: 'Dacă ai doi părinți în Germania: minorul 14-18 ani nu poate depune cererea la consulatul german — calea este exclusiv SPCLEP în România, cu prezența fizică a minorului și a unui părinte.', type: 'info' },
    ],
    actionItem: {
      label: 'Programare CEI — hub.mai.gov.ro',
      href: 'https://hub.mai.gov.ro/cei/programari/harta',
    },
  },
  {
    id: 4,
    title: 'Planifică deplasarea în România',
    shortLabel: 'Pregătire',
    blocks: [
      { text: 'Nu ai nevoie de pașaport românesc ca să intri în România — poți călători pe Personalausweis german sau pașaport german. Documentul german este valabil pentru intrarea în România.', type: 'info' },
      { text: 'Verifică adresa exactă și programul de lucru al SPCLEP-ului ales înainte de a pleca. Unele SPCLEP-uri au program scurtat vinerea — verifică pe site-ul primăriei locale sau pe carteadeidentitate.gov.ro/ghisee.', type: 'action' },
      { text: 'Pune în geantă documentele în original: certificat naștere transcris, Anmeldung sau pașaport CRDS, certificat căsătorie dacă e cazul. Nu aduci copii — funcționarul le face pe loc.', type: 'action' },
      { text: 'Dacă ești minor (14–18 ani): unul dintre părinți trebuie să vină fizic cu tine. Programarea se face pe numele minorului, dar prezența părintelui este obligatorie la ghișeu.', type: 'warning' },
      { text: 'Ajungi cu 10–15 minute înainte de ora programării. Dacă întârzii peste 15 minute, programarea poate fi marcată absență — trebuie reprogramat.', type: 'tip' },
      { text: 'Dacă vrei să stabilești domiciliu în România la această ocazie (la o rudă, de exemplu): pregătește actul de proprietate al imobilului + consimțământul scris al proprietarului. Comunică intenția la ghișeu ÎNAINTE de semnarea cererii.', type: 'note' },
    ],
  },
  {
    id: 5,
    title: 'Depune cererea la SPCLEP',
    shortLabel: 'SPCLEP',
    blocks: [
      { text: 'La ghișeu prezinți confirmarea programării + documentele în original. Funcționarul verifică actele, generează cererea în sistem și ți-o dă spre semnare.', type: 'action' },
      { text: 'Funcționarul preia pe loc: fotografia biometrică (se face la ghișeu — nu aduci fotografii proprii), impresiunile celor două degete (amprente) și semnătura electronică. Toate sunt obligatorii.', type: 'info' },
      { text: 'Prima CEI este GRATUITĂ — nu plătești nimic la ghișeu (până la 30 iunie 2026). Dacă funcționarul solicită chitanță de plată, amintește că prima emitere este fără taxă pentru cetățenii 14+ ani.', type: 'info' },
      { text: 'Dacă funcționarul cere un document care nu apare în lista ta: notează calm ce solicită și întreabă diplomatic de ce sau de când s-a modificat procedura. Nu pleca fără o explicație clară.', type: 'warning' },
      { text: 'Indică verbal la ghișeu, înainte de semnarea cererii, dacă vrei să ridici CEI-ul de la un alt SPCLEP decât cel unde depui — funcționarul operează opțiunea în sistem. Dacă nu specifici nimic, ridicarea va fi la același SPCLEP.', type: 'action' },
      { text: 'Dacă alegi un SPCLEP de ridicare diferit față de cel de depunere, termenul de confecționare se prelungește cu 10 zile lucrătoare în plus față de termenul standard de 5 zile. Ia în calcul asta la planificarea celei de-a doua deplasări.', type: 'warning' },
      { text: 'Primești un bon/recipisă la final — fotografiază-l imediat cu telefonul. Conține numărul cererii cu care verifici statusul CEI pe hub.mai.gov.ro.', type: 'note' },
    ],
  },
  {
    id: 6,
    title: 'Ridică CEI-ul și activează PIN-urile',
    shortLabel: 'Ridicare',
    blocks: [
      { text: "Verifică statusul CEI pe hub.mai.gov.ro → 'Verificare status cerere'. Dacă ai furnizat emailul la programare, primești notificare când CEI este confecționat.", type: 'action' },
      { text: 'Termen oficial: medie 5 zile calendaristice, maxim 30 zile calendaristice. Termenul de ridicare este de maximum 90 de zile de la depunere — după aceea pot fi necesare operații suplimentare.', type: 'info' },
      { text: 'CEI se ridică exclusiv personal — nu există ridicare prin procură. La ridicare stabilești tu PIN-urile, nu funcționarul. Planifică o a doua deplasare în România în fereastra de 90 de zile. Excepție: dacă ești minor 14–18 ani, CEI poate fi ridicată și de părintele care te-a însoțit la depunerea cererii.', type: 'warning' },
      { text: 'Prezinți la ridicare: recipisa de depunere + un act de identitate valid. Funcționarul îți înmânează CEI-ul și verifici datele pe loc — nume, data nașterii, CNP. Semnalează orice eroare imediat.', type: 'action' },
      { text: 'PIN-urile le stabilești tu singur, cu aplicația IDPlugManager (PC) sau RO CEI Reader (Android/iOS), descărcate de pe hub.mai.gov.ro/aplicatie-cei. PIN implicit de autentificare: 1234 → îl schimbi tu. PIN implicit de semnătură: 123456 → îl schimbi tu. Nu e nevoie să rămâi la ghișeu pentru asta.', type: 'info' },
      { text: 'CEI este validă ca document de călătorie în toate țările UE, Elveția, Islanda, Norvegia, Liechtenstein. Dacă te reîntorci în România și îți stabilești domiciliu, poți actualiza adresa electronic — fără să emiți un act nou.', type: 'tip' },
    ],
    actionItem: {
      label: 'Verificare status CEI',
      href: 'https://hub.mai.gov.ro/cei/programari/verifica-cei',
    },
  },
]

const travelReturnToRomaniaBlocks: PaidStep['blocks'] = [
  { text: 'Opțiuni pașaport în România: pașaport simplu electronic — 265 lei, max 5 zile lucrătoare (în prezent 1–2 zile în medie), fără taxă suplimentară de urgență, livrare gratuită la domiciliu. Pașaport simplu temporar — 265 lei, max 3 zile lucrătoare, valabil 12 luni. Programare online la epasapoarte.ro. Poți merge la ORICE serviciu de pașapoarte din țară.', type: 'info' },
  { text: 'Opțiuni carte de identitate în România: CEI — programare pe hub.mai.gov.ro/cei/programari, termen orientativ ~10 zile lucrătoare, fără posibilitate de urgentare. Dacă ai deja domiciliu activ în România și alegi alt tip de document, verifică SPCLEP-ul competent pentru situația ta concretă.', type: 'info' },
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

const procuraVanzareSteps: PaidStep[] = [
  {
    id: 3,
    title: 'Creează cererea pe econsulat.ro',
    shortLabel: 'Cerere',
    blocks: [
      { text: 'Mergi pe econsulat.ro → autentifică-te sau creează cont → apasă „Cerere nouă” → selectează „Acte notariale” → „Procură”. Serviciul există pe platformă.', type: 'action' },
      { text: 'Completează datele tale de identificare și alege consulatul arondat landului tău.', type: 'info' },
      { text: 'La câmpul de conținut al procurii: descrie scopul (ex. „vânzare imobil la adresa X, municipiul Y, județ Z, nr. cadastral Z”). Copiază datele complete ale mandatarului din nota pregătită la Pasul 2.', type: 'action' },
      { text: 'BONN — REGULĂ SPECIALĂ: Dacă nu trimiți în avans pe econsulat.ro copia actului de proprietate și copia CI a mandatarului, procura NU se eliberează în aceeași zi. Este singurul flux din produs în care econsulat este folosit și pentru transmiterea documentelor scanate înainte de vizită. Trimite documentele înainte de a veni la consulat.', type: 'alert' },
      { text: 'München / Stuttgart / Berlin: poți veni cu documentele în ziua programării și procura se redactează în aceeași zi — fără pre-scanning obligatoriu.', type: 'info' },
    ],
    actionItem: {
      label: 'Deschide econsulat.ro',
      href: 'https://econsulat.ro',
    },
  },
  {
    id: 4,
    title: 'Obține programarea la consulat',
    shortLabel: 'Programare',
    blocks: [
      { text: 'Programarea se face prin econsulat.ro → „Programările mele” → „Programare nouă” → alegi consulatul tău → prima dată disponibilă. Obligatorie la toate cele 4 consulatele.', type: 'info' },
      { text: 'Programările pentru acte notariale sunt separate de cele pentru pașapoarte și sunt de regulă mai disponibile — timpi de așteptare mai scurți.', type: 'tip' },
      { text: 'BERLIN — PLATĂ ÎN AVANS: taxa de 3€ RNNEPR se achită NUMAI prin virament bancar, cu 3–4 zile lucrătoare înainte de prezentarea la consulat. Fă transferul imediat după ce primești programarea.', type: 'warning' },
      { text: 'Programările sunt gratuite. Nu apela la intermediari.', type: 'info' },
    ],
    actionItem: {
      label: 'Programare econsulat.ro',
      href: 'https://econsulat.ro',
    },
  },
  {
    id: 5,
    title: 'Pregătire pentru ziua programării',
    shortLabel: 'Pregătire',
    hasConsulateCard: true,
    blocks: [
      { text: 'Verifică lista înainte de a pleca: act de identitate original valabil + copie CI mandatar + copie act de proprietate + cadastru/intabulare dacă există + nota cu conținutul procurii.', type: 'action' },
      { text: 'Trebuie să cunoști limba română — consulul verifică că înțelegi conținutul procurii înainte să semnezi.', type: 'warning' },
      { text: 'Tarif 3€ RNNEPR — pregătește metoda de plată conform consulatului tău: Bonn = EC-Karte la ghișeu, München = numerar la ghișeu, Stuttgart = POS sau virament, Berlin = numai virament înainte de programare.', type: 'info' },
      { text: 'Dacă ești căsătorit/ă și imobilul este bun comun, soțul/soția trebuie să vă programați separat sau împreună pentru a da fiecare câte o procură. Nu te prezenta singur cu intenția de a da procură și pentru celălalt soț — nu este posibil legal.', type: 'note' },
    ],
  },
  {
    id: 6,
    title: 'Ziua consulatului — semnezi procura',
    shortLabel: 'Consulat',
    hasConsulateCard: true,
    blocks: [
      { text: 'Ajungi cu 10 minute înainte. Prezinți actele la ghișeu. Funcționarul consular redactează procura pe loc sau verifică textul din cerere.', type: 'action' },
      { text: 'Citești procura, confirmi că datele sunt corecte (imobil, mandatar, puteri), semnezi în fața consulului. Consulul autentifică și aplică sigiliul.', type: 'info' },
      { text: 'Primești un duplicat al procurii. Originalul rămâne în arhiva consulatului. Duplicatul are aceeași forță juridică și este singurul document pe care îl vei folosi.', type: 'info' },
      { text: 'Consulatul înscrie procura din oficiu în RNNEPR (Registrul Național Notarial de Evidență a Procurilor). Notarul din România verifică obligatoriu această înregistrare înainte de tranzacție.', type: 'info' },
      { text: 'Fotografiază imediat procura primită și salvează imaginea în cloud. Dacă o pierzi în transport, poți solicita un duplicat suplimentar de la consulat.', type: 'tip' },
      { text: 'Dacă funcționarul cere un document neprevăzut în lista ta: notează calm ce se cere și întreabă diplomatic care este temeiul legal sau dacă s-a modificat procedura.', type: 'warning' },
    ],
  },
  {
    id: 7,
    title: 'Trimite procura și coordonează cu notarul din România',
    shortLabel: 'Trimitere',
    blocks: [
      { text: 'Trimite procura (duplicatul) mandatarului tău din România prin curier rapid cu număr de urmărire (DHL, FAN Curier, Cargus). Nu trimite prin poștă obișnuită — risc de pierdere.', type: 'action' },
      { text: 'Trimite și o copie scanată direct notarului din România, ca să verifice conținutul în avans și să pregătească actele. Îi economisești timp la semnarea contractului.', type: 'tip' },
      { text: 'Mandatarul duce procura la notar. Notarul verifică în RNNEPR că procura este valabilă și nerevocată, apoi instrumentează tranzacția.', type: 'info' },
      { text: 'Procura este valabilă 3 ani dacă nu ai specificat un termen mai scurt. Dacă renunți la tranzacție, o poți revoca oricând printr-o declarație notarială de revocare — la consulat sau la orice notar din România.', type: 'info' },
      { text: 'Cauze frecvente de refuz la notar: (1) procură generală în loc de specială; (2) mandatarul cumpără imobilul în același timp — în acest caz prețul trebuie menționat explicit în procură; (3) procura a fost revocată fără știrea mandatarului.', type: 'warning' },
    ],
  },
]

const procuraGeneralaSteps: PaidStep[] = [
  {
    id: 3,
    title: 'Plătește taxa de publicitate notarială (doar dacă e cazul)',
    shortLabel: 'Taxă',
    blocks: [
      { text: 'Pasul acesta se aplică DOAR dacă procura ta va fi folosită la un notar din România: divorț notarial, succesiune, vânzare prin mandatar. Dacă faci procura pentru firmă, bancă, cazier, auto sau orice altceva care NU implică un notar — SARI direct la Pasul 4.', type: 'warning' },
      { text: 'Pasul acesta se aplică doar dacă procura va fi folosită la un notar din România. Metoda de plată pentru taxa de 3€ diferă per consulat și trebuie respectată exact.', type: 'action' },
      { text: 'Bonn: EC-Karte (card de debit bancă germană) la ghișeu, în ziua programării.', type: 'info' },
      { text: 'München: numerar (cash) la ghișeu, în ziua programării.', type: 'info' },
      { text: 'Stuttgart: POS (EC-Karte) la ghișeu sau virament în avans la IBAN DE04 1007 0000 0976 1909 01 · BIC DEUTDEBBXXX.', type: 'info' },
      { text: 'Berlin: NUMAI virament bancar în avans la IBAN DE83 1007 0000 0435 4429 00 · BIC DEUTDEBBXXX · Botschaft von Rumänien · Deutsche Bank Berlin, cu 3–4 zile lucrătoare înainte.', type: 'info' },
      { text: 'Taxa de 3 euro nu e o taxă consulară — se virează la CNARNN (registrele notariale din România).', type: 'note' },
    ],
  },
  {
    id: 4,
    title: 'Cerere pe econsulat.ro',
    shortLabel: 'Cerere',
    blocks: [
      { text: 'Mergi pe econsulat.ro → Login → clic pe „Acte notariale” din grila de servicii → în popup selectezi AUTENTIFICĂRI → „Procuri”. (navigat live pe econsulat.ro, Aprilie 2026)', type: 'action' },
      { text: 'Nu selecta altă categorie — Declarații, Legalizări sau alte opțiuni sunt servicii diferite. Trebuie să ajungi la pagina „Cerere pentru Procuri”.', type: 'warning' },
      { text: 'Completează datele tale + datele complete ale mandatarului. În câmpul de conținut al procurii descrie clar și specific ce îl/o împuternicești să facă.', type: 'info' },
      { text: 'Dacă plătești taxa de 3 euro (Pasul 3) — încarci dovada plății (ordinul de plată) în cerere. (econsulat.ro/Procura/ActeNecesare)', type: 'info' },
      { text: 'Starea inițială: „În așteptare”. Programarea devine disponibilă după validarea cererii de consulat.', type: 'info' },
    ],
    actionItem: {
      label: 'Mergi pe econsulat.ro',
      href: 'https://www.econsulat.ro',
    },
  },
  {
    id: 5,
    title: 'Obține programarea',
    shortLabel: 'Programare',
    blocks: [
      { text: 'Programarea devine disponibilă după validarea cererii. Intră pe econsulat.ro → „Programările mele” → „Programare nouă” → alege consulatul arondat landului tău.', type: 'info' },
      { text: 'Procurile se eliberează de obicei în aceeași zi. Nu există un ritm fix de eliberare a programărilor pentru acte notariale — verifică periodic în platformă. (econsulat.ro/Procura/ModSolutionare)', type: 'info' },
      { text: 'Poți solicita la programare IBAN-ul pentru taxa de 3 euro (Bonn/München/Stuttgart), dacă nu l-ai identificat anterior.', type: 'tip' },
      { text: 'Programările sunt GRATUITE. Nu plăti niciodată unui intermediar.', type: 'warning' },
    ],
    actionItem: {
      label: 'Programare pe econsulat.ro',
      href: 'https://www.econsulat.ro',
    },
  },
  {
    id: 6,
    title: 'Ziua consulatului — semnezi și ridici procura',
    shortLabel: 'Consulat',
    hasConsulateCard: true,
    blocks: [
      { text: 'Ajungi cu 10 minute înainte de programare. Ai la tine actul de identitate original, datele complete ale mandatarului și, dacă e cazul, ordinul de plată al taxei de 3 euro.', type: 'action' },
      { text: 'Funcționarul consular îți verifică identitatea, redactează procura pe baza cererii tale și ți-o prezintă. Citești conținutul, confirmi că e corect, semnezi în fața consulului. (berlin.mae.ro/node/470)', type: 'info' },
      { text: 'Procura se eliberează pe loc, în aceeași zi. (econsulat.ro/Procura/ModSolutionare)', type: 'info' },
      { text: 'Excepție Bonn: procurile imobiliare (vânzare, succesiune) NU se eliberează în aceeași zi dacă nu ai trimis în prealabil copiile actelor de proprietate și CI-urile scanate pe econsulat.ro. (bonn.mae.ro/node/496)', type: 'warning' },
      { text: 'Poți solicita duplicate ale aceleiași procuri în număr nelimitat — cu aceeași forță juridică ca originalul. (econsulat.ro/Procura/ModSolutionare)', type: 'tip' },
      { text: 'Dacă funcționarul cere ceva ce nu era în lista ta: notează calm și întreabă diplomatic de ce s-a modificat procedura.', type: 'warning' },
    ],
  },
  {
    id: 7,
    title: 'Trimite procura mandatarului în România',
    shortLabel: 'Trimitere',
    blocks: [
      { text: 'Scanează originalul procurii înainte să îl trimiți — păstrează o copie digitală. Trimite originalul prin curier internațional (DHL, DPD, UPS) cu număr de urmărire.', type: 'action' },
      { text: 'Mandatarul prezintă procura în original la autoritatea din România. Fără original, procura nu produce efecte juridice.', type: 'info' },
      { text: 'Procura autentificată la consulatul României NU necesită apostilă pentru a fi folosită în România. Excepție: dacă o faci la un notar german — atunci DA, necesită apostilă + traducere legalizată în română.', type: 'warning' },
      { text: 'Dacă ai solicitat duplicate la consulat, trimite unul și păstrează unul la tine.', type: 'tip' },
      { text: 'Valabilitate: 3 ani dacă nu s-a specificat termen. Revocare posibilă oricând. Excepție: procuri pensie = 18 luni.', type: 'info' },
      { text: 'Procura de divorț: acoperă NUMAI depunerea cererii. Certificatul final de divorț necesită prezența fizică a ambilor soți la notar — nu se poate ridica prin procură. (notari.pro)', type: 'warning' },
    ],
  },
]

const procuraMostenireSteps: PaidStep[] = [
  {
    id: 3,
    title: 'Obține programarea',
    shortLabel: 'Programare',
    blocks: [
      { text: 'Intră pe econsulat.ro → „Cerere nouă” → „Acte notariale” → serviciul pentru procuri. ✅', type: 'action' },
      { text: 'Completează cererea cu datele tale și descrierea clară a scopului: reprezentare într-un dosar de moștenire / succesiune în România. ⚠️ Verifică să folosești formularea cerută de notar, nu una generică.', type: 'warning' },
      { text: 'Serviciul consular pentru procuri este gratuit ✅. Dacă procura trebuie înscrisă în registrele naționale notariale din România, se adaugă tariful de publicitate notarială de 3 euro ✅.', type: 'info' },
      { text: 'Procurile se autentifică de regulă pe loc, în aceeași zi ✅, dacă te prezinți cu toate datele și documentele necesare.', type: 'tip' },
    ],
    actionItem: {
      label: 'Deschide econsulat.ro',
      href: 'https://www.econsulat.ro/',
    },
  },
  {
    id: 4,
    title: 'Pregătește-te pentru consulat',
    shortLabel: 'Consulat',
    hasConsulateCard: true,
    blocks: [
      { text: 'Ai la tine actul de identitate valabil în original. Fără el, procura nu poate fi autentificată.', type: 'info' },
      { text: 'Ai notate clar datele mandatarului și ale notarului din România. Cel mai sigur este să le ai și într-un email sau PDF trimis de notar.', type: 'info' },
      { text: 'Dacă notarul ți-a trimis modelul sau formularea dorită pentru procură, ia-l cu tine. Acest lucru reduce mult riscul ca procura să nu fie acceptată ulterior în dosarul de succesiune.', type: 'tip' },
      { text: 'La Bonn, Stuttgart și Berlin: ai la tine și copia certificatului de deces. Actele de rudenie sau de calitate de moștenitor nu sunt cerute de consulat, dar rămân utile pentru notarul din România.', type: 'warning' },
    ],
  },
  {
    id: 5,
    title: 'Semnează procura la consulat',
    shortLabel: 'Semnare',
    blocks: [
      { text: 'Te prezinți personal la programare cu documentele și datele pregătite. ✅', type: 'action' },
      { text: 'Funcționarul consular redactează sau autentifică procura pe baza instrucțiunilor și a datelor furnizate. Verifică atent numele, CNP-urile, datele mandatarului și scopul procurii înainte să semnezi.', type: 'info' },
      { text: 'Serviciul se prestează, de regulă, pe loc în aceeași zi ✅. Durata poate crește în zile aglomerate sau dacă lipsesc date importante.', type: 'info' },
      { text: 'Poți cere duplicate ale aceleiași procuri dacă ai nevoie de mai multe exemplare pentru notar sau pentru dosar. ✅', type: 'tip' },
      { text: 'Fă imediat o fotografie procurii și salvează și o scanare PDF înainte să trimiți originalul în România.', type: 'note' },
    ],
  },
  {
    id: 6,
    title: 'Trimite procura în România',
    shortLabel: 'Trimitere',
    blocks: [
      { text: 'Trimite procura autentificată în original către notarul din România sau către persoana împuternicită, exact cum ți-a indicat notarul. ✅', type: 'action' },
      { text: 'Folosește curier cu tracking și confirmare de livrare — nu trimite documentul prin poștă simplă.', type: 'warning' },
      { text: 'Anunță notarul că documentul este pe drum și trimite-i și fotografia/scanarea, ca să confirme că textul este cel corect înainte de livrarea originalului. ⚠️', type: 'tip' },
      { text: 'Păstrează numărul AWB și o copie digitală a procurii până se închide dosarul de succesiune.', type: 'note' },
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
    steps: buletinExpiratFaraDomSteps,
  },
  'buletin-de-cu-domiciliu': {
    title: 'Buletin expirat · Domiciliu activ RO',
    steps: buletinExpiratDomSteps,
  },
  'buletin-de-fara-domiciliu-pierdut': {
    title: 'Buletin pierdut/furat · Fără domiciliu RO',
    steps: buletinLipsaFaraDomSteps,
  },
  'buletin-de-cu-domiciliu-pierdut': {
    title: 'Buletin pierdut/furat · Domiciliu activ RO',
    steps: buletinLipsaDomSteps,
  },
  'buletin-de-primul-de': {
    title: 'Primul buletin românesc · Schimbare domiciliu din străinătate',
    steps: buletinPrimulSteps,
  },
  'buletin-de-primul-de-b': {
    title: 'Primul buletin românesc · Germania',
    steps: buletinPrimulGermaniaSteps,
  },
  'titlu-calatorie-urgenta-de': {
    title: 'Titlu de călătorie urgență · Germania — Ghid complet',
    steps: [
      {
        id: 3,
        title: 'Mergi la consulat azi',
        shortLabel: 'Consulat',
        hasConsulateCard: true,
        blocks: [
          { text: 'Titlul de călătorie se preia fără programare, în intervalul dedicat al consulatului tău. Nu trebuie să creezi cerere pe econsulat.ro. Intervalul diferă per consulat — verifică cardul de mai jos.', type: 'info' },
          { text: 'Prezintă-te DOAR în intervalul de preluare titluri — nu în programul general de depunere pașapoarte. Dacă vii în afara intervalului, riști să nu fii primit.', type: 'warning' },
          { text: 'Dacă documentul a fost furat și nu ai depus încă Diebstahlsanzeige la poliție — fă asta ÎNAINTE de a pleca la consulat. Adeverința poliției este obligatorie la toate consulatele. Traducerea autorizată în română este obligatorie: München, Stuttgart, Berlin. La Bonn traducerea nu este cerută — adeverința poliției este suficientă.', type: 'warning' },
          { text: 'Vino cât mai devreme în interval. Dacă nu ai niciun document românesc cu fotografie, verificarea în baze de date durează mai mult.', type: 'tip' },
        ],
        actionItem: null,
      },
      {
        id: 4,
        title: 'La ghișeu',
        shortLabel: 'Ghișeu',
        blocks: [
          { text: 'Prezinți documentul(ele) de identificare în original. Funcționarul verifică identitatea și procesează cererea.', type: 'action' },
          { text: 'La Bonn, Stuttgart și Berlin: funcționarul preia fotografia electronic la ghișeu — nu aduci fotografii. La München: funcționarul verifică fotografiile biometrice pe care le-ai adus.', type: 'info' },
          { text: 'Taxa: GRATUIT. Nu se percep taxe consulare pentru titlul de călătorie.', type: 'info' },
          { text: 'Eliberare în aceeași zi la toate consulatele: München explicit / Berlin (preluare + eliberare 08:00–10:00) / Stuttgart implicit / Bonn implicit — titlurile nu apar în slotul de ridicare 14:00–15:00 (rezervat pașapoarte + stare civilă procesate din RO).', type: 'info' },
          { text: 'Dacă nu ai absolut niciun document românesc (nici CI expirat, nici pașaport, nici permis RO): funcționarul verifică identitatea în bazele de date MAI. Dacă nu poate stabili identitatea și cetățenia → trebuie să te identifici în România. Adu orice act românesc, fie și expirat de ani.', type: 'warning' },
          { text: 'Dacă funcționarul cere ceva suplimentar față de lista ta: notează calm ce se cere și întreabă diplomatic de ce sau când s-a modificat procedura.', type: 'tip' },
          { text: 'Fă imediat o poză cu telefonul titlului de călătorie primit — e mai greu să îl pierzi în format digital.', type: 'note' },
        ],
      },
      {
        id: 5,
        title: 'Ce faci după ce ajungi în România',
        shortLabel: 'România',
        blocks: [
          { text: 'Titlul de călătorie expiră în momentul în care intri în România — trecerea frontierei îi încetează valabilitatea de drept. NU îl predai la frontieră — continuă să îl ai la tine.', type: 'warning' },
          { text: 'Titlul se predă când depui cererea pentru noul pașaport în România, la ghișeul serviciului de pașapoarte.', type: 'info' },
          { text: 'Imediat după ajungerea în România: depune cerere pentru pașaport sau carte de identitate. Fără act valabil, nu poți reveni în Germania.', type: 'action' },
          ...travelReturnToRomaniaBlocks,
          { text: 'Dacă știi deja ce document îți trebuie după revenire, ghidurile ActeRO pentru pașaport și carte de identitate te pot ajuta să pregătești dosarul din Germania, înainte de a pleca.', type: 'tip' },
        ],
      },
    ],
  },
  'titlu-calatorie-de': {
    title: 'Ghid complet — Titlu de călătorie · Germania',
    steps: [
      {
        id: 3,
        title: 'Mergi la consulat',
        shortLabel: 'Consulat',
        hasConsulateCard: true,
        blocks: [
          { text: 'Titlul de călătorie se eliberează FĂRĂ PROGRAMARE, în intervalul orar dedicat. NU mergi la programarea standard pentru pașapoarte sau alte servicii — există un interval separat pentru titluri.', type: 'info' },
          { text: 'Verifică intervalul orar corect pentru consulatul tău în cardul de mai jos și prezintă-te în acea perioadă.', type: 'action' },
          { text: 'Bonn: dacă te prezinți VINERI dimineața, ridici titlul LUNI după-amiaza. Intervalul de ridicare 14:00–15:00 există doar Luni–Joi. Planifică în consecință.', type: 'warning' },
          { text: 'La ghișeu completezi cererea pe loc — nu există formular de pregătit în avans. Cererea se generează în sistem direct de funcționar.', type: 'info' },
          { text: 'Adu documentele în original. Funcționarul poate cere și o copie — mai ușor dacă ai deja câte una din fiecare.', type: 'tip' },
          { text: 'Dacă funcționarul cere ceva ce nu e în lista ta: notează calm și întreabă diplomatic de ce sau când s-a modificat procedura.', type: 'warning' },
        ],
      },
      {
        id: 4,
        title: 'Ridică titlul de călătorie',
        shortLabel: 'Ridicare',
        hasConsulateCard: true,
        blocks: [
          { text: 'München: eliberare în aceeași zi cu depunerea cererii, în program normal.', type: 'info' },
          { text: 'Stuttgart: depunere și procesare în același interval 10:00–14:00 — ridici în aceeași zi.', type: 'info' },
          { text: 'Berlin: depunere și eliberare în același interval 08:00–10:00 — ridici în aceeași ședință.', type: 'info' },
          { text: 'Bonn: depunere 09:00–12:00. Ridicare Luni–Joi 14:00–15:00 — de regulă în aceeași zi dacă te prezinți Luni–Joi dimineața.', type: 'info' },
          { text: 'Titlul se înmânează NUMAI titularului. Pentru minori sub 14 ani, se înmânează părintelui care prezintă un act valabil de identitate.', type: 'warning' },
          { text: 'Fotografiază titlul imediat ce îl primești — ai dovada digitală în caz că apare o problemă înainte de plecare.', type: 'note' },
        ],
      },
      {
        id: 5,
        title: 'Ce faci în România',
        shortLabel: 'România',
        blocks: [
          { text: 'Titlul ÎȘI PIERDE VALABILITATEA la data intrării în România — nu contează câte zile mai are. Nu poți reveni în Germania cu el.', type: 'warning' },
          { text: 'Imediat ce ajungi în România, depune cerere pentru un document nou. Alege în funcție de ce îți trebuie mai repede: pașaport în ~5 zile sau CEI în ~10 zile.', type: 'action' },
          ...travelReturnToRomaniaBlocks,
          { text: 'Dacă ai nevoie urgent de un document să ieși din România iar pașaportul nu e gata: poți solicita pașaport simplu temporar — termen maxim 3 zile lucrătoare, valabil 12 luni. Taxa: 96 RON.', type: 'tip' },
          { text: 'Nu pleca din România înainte să ai noul document în mână. La controlul de frontieră german ai nevoie de un document valabil — titlul nu mai este valabil odată ce ai intrat în țară.', type: 'warning' },
          { text: 'La depunerea cererii pentru pașaport sau buletin în România, prezinți și titlul de călătorie — va fi preluat și anulat de autorități.', type: 'note' },
        ],
      },
    ],
  },
  'procura-vanzare-de': { title: 'Procură de vânzare/cumpărare proprietate · Germania', steps: procuraVanzareSteps },
  'procura-mostenire-de': { title: 'Procură moștenire · Germania', steps: procuraMostenireSteps },
  'procura-generala-de': { title: 'Procură notarială generală · Germania', steps: procuraGeneralaSteps },
  'transcriere-nastere-de': {
    title: 'Transcriere naștere Germania → România',
    steps: [
      {
        id: 3,
        title: 'Creează cererea pe econsulat.ro',
        shortLabel: 'Cerere',
        actionItem: {
          label: 'Deschide econsulat.ro',
          href: 'https://econsulat.ro',
        },
        blocks: [
          { text: 'Mergi pe econsulat.ro și creează un cont — email + parolă. CNP-ul nu este obligatoriu pentru cont.', type: 'action' },
          { text: 'Apasă „Cerere nouă” → „Acte de stare civilă” → „Transcriere certificat de naștere străin în registrele de stare civilă române”. La unele consulate apare ca „Înscriere certificat de naștere” — este același serviciu.', type: 'action' },
          { text: 'Nu selecta servicii de pașaport sau carte de identitate — sunt categorii separate. Transcrierea de stare civilă este serviciu distinct.', type: 'warning' },
          { text: 'Completezi datele copilului, ale ambilor părinți și consulatul arondat landului tău, apoi încarci documentele scanate. Trimiți cererea — starea inițială: „În așteptare”.', type: 'info' },
          { text: 'München: la ridicarea certificatului transcris, dacă era singurul document lipsă pentru pașaportul copilului, poți depune pașaportul în aceeași zi — fără programare separată.', type: 'tip' },
        ],
      },
      {
        id: 4,
        title: 'Obține programarea',
        shortLabel: 'Programare',
        actionItem: {
          label: 'Deschide econsulat.ro',
          href: 'https://econsulat.ro',
        },
        blocks: [
          { text: 'Programarea devine disponibilă după ce cererea trece în starea „Validată”. Intră în cont → „Programările mele” → „Programare nouă” → alege consulatul și prima dată disponibilă.', type: 'info' },
          { text: 'Din experiența comunității, la început de săptămână apar mai des locuri noi după validări și anulări. Verifică periodic econsulat.ro. (neconfirmat oficial)', type: 'tip' },
          { text: 'Programările sunt gratuite. Nu apela la intermediari care oferă „locuri urgente” contra cost.', type: 'warning' },
          { text: 'München: verifică pe muenchen.mae.ro dacă există consulat itinerant planificat în Bavaria — ar reduce distanța până la consulat. Calendarul 2026 nu era publicat la apr. 2026, dar procedura de consultare a fost lansată.', type: 'info' },
        ],
      },
      {
        id: 5,
        title: 'Pregătire pentru ziua programării',
        shortLabel: 'Pregătire',
        hasConsulateCard: true,
        blocks: [
          { text: 'Verifică lista de documente din Pasul 1 și pune-le în geantă — toate în original, plus câte o copie simplă din fiecare.', type: 'action' },
          { text: 'Cine vine la consulat: minor sub 14 ani — nu este necesar; minor 14+ ani — vine personal, asistat de un părinte; un singur părinte cetățean român este suficient — nu trebuie ambii.', type: 'info' },
          { text: 'Dacă ai pașaport CRDS (mențiunea domiciliu Germania), ia și Meldebescheinigung sau Anmeldung. Fără el, ghișeul poate refuza dosarul.', type: 'warning' },
          { text: 'Stuttgart: dacă vrei certificatul prin poștă, pregătește un plic DIN C5 autoadresat, timbrat 6,65 EUR, și ia-l cu tine la depunere. Fără plic, ridici personal.', type: 'tip' },
          { text: 'Verifică adresa, programul de ridicare și particularitățile consulatului tău în cardul de mai jos.', type: 'note' },
        ],
      },
      {
        id: 6,
        title: 'Ziua consulatului',
        shortLabel: 'Consulat',
        blocks: [
          { text: 'Ajungi cu 10 minute înainte de ora programării. Nu te prezenta mult mai devreme — nu vei fi preluat înainte de ora stabilită.', type: 'action' },
          { text: 'La ghișeu funcționarul verifică documentele originale și printează formularul cererii (Stuttgart: se printează exclusiv la consulat). Semnezi pe loc declarația că nașterea nu a mai fost înscrisă în registrele românești — generată automat de sistemul SIMISC.', type: 'info' },
          { text: 'Taxă: zero. Transcrierea este gratuită la toate consulatele din Germania.', type: 'info' },
          { text: 'Primești un bon/recipisă de depunere. Termen de procesare: Bonn 7–30 de zile; München: cazurile simple se pot ridica în aceeași zi; Stuttgart și Berlin: termen nepublicat oficial, estimat similar Bonn.', type: 'info' },
          { text: 'Fă imediat o poză recipisei — e dovada depunerii dacă ceva merge prost.', type: 'note' },
          { text: 'Dacă funcționarul cere ceva ce nu e în lista ta, notează calm și întreabă diplomatic de ce s-a modificat procedura.', type: 'warning' },
          { text: 'Dosare incomplete: cererea nu poate fi preluată. Dacă lipsește orice document, trebuie să revii cu programare nouă — verifică lista de două ori înainte de drum.', type: 'warning' },
        ],
      },
      {
        id: 7,
        title: 'Ridică certificatul românesc',
        shortLabel: 'Ridicare',
        hasConsulateCard: true,
        blocks: [
          { text: 'Când certificatul este gata, te prezinți în programul de ridicare al consulatului, fără programare prealabilă. Prezinți recipisa de depunere și un act de identitate valabil.', type: 'info' },
          { text: 'Program ridicare acte stare civilă: Bonn — Luni–Joi 14:00–15:00; München — Luni/Miercuri/Joi 11:00–14:00, Marți 15:00–18:00; Stuttgart — Luni–Vineri 14:00–15:00; Berlin — Luni–Vineri 13:00–14:00.', type: 'info' },
          { text: 'München: dacă nu ridici în 3 luni de la data depunerii, certificatul este trimis la DPCS Sector 1 București și poate fi ridicat doar de acolo.', type: 'warning' },
          { text: 'Stuttgart: dacă ai adus plicul DIN C5 la depunere, certificatul îți este trimis prin poștă — nu mai trebuie să revii la consulat.', type: 'tip' },
          { text: 'Ce urmează: cu certificatul de naștere românesc care conține CNP poți continua cu primul pașaport CRDS sau primul buletin.', type: 'note' },
        ],
      },
    ],
  },
}

function getFullPaidGuideContent(guideId: GuideId): GhidPaidContent | null {
  const paidContent = ghidPaidMap[guideId]
  if (!paidContent) return null

  const freeContent = ghidFreeMap[guideId]
  if (!freeContent) return paidContent

  return {
    title: freeContent.title,
    steps: [...toPaidFreeSteps(freeContent.steps), ...paidContent.steps],
  }
}

// ─── CARD CONSULAT ────────────────────────────────────────────────────────────

function ConsulateCard({
  consulateId,
  guideId,
}: {
  consulateId: ConsulateId
  guideId?: GuideId | null
}) {
  const card = getConsulateCard(consulateId)
  const isTravelTitleGuide = guideId === 'titlu-calatorie-de' || guideId === 'titlu-calatorie-urgenta-de'
  const isGeneralPoaGuide = guideId === 'procura-generala-de'
  const isBirthTranscriptionGuide = guideId === 'transcriere-nastere-de'
  const displaySchedule = isBirthTranscriptionGuide
    ? card.scheduleDeponere
    : isTravelTitleGuide
      ? card.scheduleTravelDoc ?? card.scheduleTitluCalatorie
      : card.scheduleDeponere
  const displayPickup = isTravelTitleGuide
    ? consulateId === 'bonn'
      ? 'Luni–Joi 14:00–15:00 · vinerea nu se ridică, dacă depui vineri revii luni'
      : consulateId === 'muenchen'
        ? 'În aceeași zi, în programul normal al consulatului'
        : consulateId === 'stuttgart'
          ? 'În aceeași zi, în intervalul 10:00–14:00'
          : 'În aceeași zi, în intervalul 08:00–10:00'
    : isBirthTranscriptionGuide
      ? card.starecivilaProgramRidicare ?? 'Verifică direct programul de ridicare al actelor de stare civilă'
    : card.schedulePassportPickup ?? card.scheduleRidicare
  const displayPaymentMethod = isTravelTitleGuide
    ? 'gratuit'
    : isBirthTranscriptionGuide
      ? 'gratuit'
    : isGeneralPoaGuide
      ? card.paymentNotarial ?? 'procură obișnuită = gratuită · dacă se aplică taxa de 3€, plata se face prin virament în avans'
    : card.paymentPassport ?? card.paymentMethod
  const displayPaymentNote = isTravelTitleGuide
    ? 'Titlul de călătorie se eliberează fără taxă consulară.'
    : isBirthTranscriptionGuide
      ? card.starecivilaTermen
        ? `Termen orientativ confirmat: ${card.starecivilaTermen}.`
        : 'Termenul exact nu este publicat oficial la acest consulat; ia în calcul un interval similar cu Bonn.'
    : isGeneralPoaGuide
      ? card.paymentNotarialNote ?? 'Dacă se aplică taxa de 3€ RNNEPR, verifică IBAN-ul și momentul plății înainte de programare.'
    : card.paymentPassportNote ?? card.paymentNote
  const displayWarnings = isTravelTitleGuide
    ? [
        ...(consulateId === 'bonn'
          ? [
              'Fotografia se preia electronic la ghișeu — nu aduci fotografii proprii.',
              'Dacă documentul a fost furat: ai nevoie de adeverința poliției, fără traducere autorizată în română.',
            ]
          : consulateId === 'muenchen'
            ? [
                'Adu 2 fotografii biometrice proprii, tipărite — nu fotografii de pe telefon.',
                'Dacă documentul a fost furat: ai nevoie de adeverința poliției + traducere autorizată în română.',
              ]
            : consulateId === 'stuttgart'
              ? [
                  'Intrarea se face prin Gerberstr. 28, nu prin Hauptstätter Str.',
                  'Adulți: fotografia se preia la ghișeu. Minori sub 14 ani: adu 1 fotografie 3,5 × 4,5 cm pe hârtie.',
                  'Dacă documentul a fost furat: ai nevoie de adeverința poliției + traducere autorizată în română, dacă este cazul.',
                ]
              : [
                  'Fotografia se preia electronic la ghișeu — nu aduci fotografii proprii.',
                  'Dacă documentul a fost furat: ai nevoie de adeverința poliției + traducere autorizată în română.',
                ]),
      ]
    : isBirthTranscriptionGuide
      ? [
          ...(consulateId === 'bonn'
            ? [
                'Certificatul de naștere românesc al părinților este necesar dacă actele lor nu conțin locul nașterii.',
                'Minorul sub 14 ani nu trebuie să fie prezent la depunere.',
              ]
            : consulateId === 'muenchen'
              ? [
                  'Dacă ambii părinți sunt cetățeni români, ia și certificatele lor de naștere românești.',
                  'Dacă certificatul transcris era ultimul act lipsă, la ridicare poți depune și pașaportul copilului în aceeași zi.',
                ]
              : consulateId === 'stuttgart'
                ? [
                    'Formularul cererii se printează exclusiv la consulat.',
                    'Dacă vrei trimiterea prin poștă, adu la depunere plic DIN C5 autoadresat, timbrat 6,65 EUR.',
                  ]
                : [
                    'La Berlin, certificatele de naștere românești ale părinților sunt obligatorii fără excepție.',
                    'Dacă un părinte are nume patronimic, Formule A nu este acceptat — ai nevoie de Geburtsurkunde + apostilă + traducere.',
                  ]),
        ]
    : isGeneralPoaGuide
      ? [
          ...(consulateId === 'berlin'
            ? ['Taxa de 3€ RNNEPR se plătește exclusiv prin virament bancar cu 3–4 zile lucrătoare înainte, dacă procura va fi folosită la notar în România.']
            : []),
          'Mandatarul nu trebuie să fie prezent la consulat.',
          'Conținutul procurii trebuie stabilit în avans cu notarul, banca sau autoritatea unde va fi folosită în România.',
        ]
    : card.warnings

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
           onClick={() => trackEvent('paid_guide_external_consulate_click', withAttribution({
             guide_id: guideId ?? undefined,
             consulate: consulateId,
             link_type: 'google_maps',
           }))}
           className="flex-1 py-2 bg-gray-800 rounded-lg text-xs text-center font-medium text-gray-200 hover:bg-gray-700">
          🗺 Google Maps
        </a>
        <a href={card.wazeUrl} target="_blank" rel="noopener noreferrer"
           onClick={() => trackEvent('paid_guide_external_consulate_click', withAttribution({
             guide_id: guideId ?? undefined,
             consulate: consulateId,
             link_type: 'waze',
           }))}
           className="flex-1 py-2 bg-gray-800 rounded-lg text-xs text-center font-medium text-gray-200 hover:bg-gray-700">
          🚗 Waze
        </a>
      </div>

      {/* Program + plată */}
      <div className="text-xs text-gray-400 mb-1">
        <span className="text-gray-500">Program depunere:</span> {displaySchedule}
      </div>
      <div className="text-xs text-gray-400 mb-1">
        <span className="text-gray-500">Ridicare:</span> {displayPickup}
      </div>
      <div className="text-xs text-gray-400 mb-2">
        <span className="text-gray-500">Plată:</span> {displayPaymentMethod}
      </div>
      {displayPaymentNote && (
        <div className="text-xs text-gray-500 mb-2">{displayPaymentNote}</div>
      )}

      {/* Tel */}
      <div className="text-xs text-gray-500">
        📞 {card.phone} · {card.phoneNote}
      </div>

      {/* Warnings */}
      {displayWarnings.length > 0 && (
        <div className="mt-3 flex flex-col gap-1">
          {displayWarnings.map((w, i) => (
            <div key={i} className="text-xs text-orange-300 bg-orange-900/30 rounded-lg px-3 py-2">
              ⚠️ {w}
            </div>
          ))}
        </div>
      )}

      {/* Poștă */}
      {!isTravelTitleGuide && !isGeneralPoaGuide && !isBirthTranscriptionGuide && card.postalPickup && card.postalPickupUrl && (
        <a href={card.postalPickupUrl} target="_blank" rel="noopener noreferrer"
           onClick={(e) => {
             e.stopPropagation()
             trackEvent('paid_guide_external_consulate_click', withAttribution({
               guide_id: guideId ?? undefined,
               consulate: consulateId,
               link_type: 'postal_pickup',
             }))
           }}
           className="block mt-3 text-xs text-blue-300 underline">
          ✉ Ridicare prin poștă disponibilă — vezi instrucțiuni
        </a>
      )}

      {/* URL căutare pașaport */}
      {!isTravelTitleGuide && !isGeneralPoaGuide && !isBirthTranscriptionGuide && (
      <a href={card.pasaportSearchUrl} target="_blank" rel="noopener noreferrer"
         onClick={(e) => {
           e.stopPropagation()
           trackEvent('paid_guide_external_consulate_click', withAttribution({
             guide_id: guideId ?? undefined,
             consulate: consulateId,
             link_type: 'passport_search',
           }))
         }}
         className="block mt-2 text-xs text-blue-300 underline">
        🔍 Verifică dacă pașaportul a sosit
      </a>
      )}
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

function GhidPaidPageContent() {
  const { sessionId } = useParams<{ sessionId: string }>()
  const searchParams = useSearchParams()
  const router = useRouter()
  const guideId = useAppStore((s) => s.guideId)
  const consulate = useAppStore((s) => s.consulate)
  const currentStepIndex = useAppStore((s) => s.currentStepIndex)
  const totalSteps = useAppStore((s) => s.totalSteps)
  const notes = useAppStore((s) => s.notes)
  const setCurrentStepIndex = useAppStore((s) => s.setCurrentStepIndex)
  const setTotalSteps = useAppStore((s) => s.setTotalSteps)
  const goToNextStep = useAppStore((s) => s.goToNextStep)
  const goToPrevStep = useAppStore((s) => s.goToPrevStep)
  const setNote = useAppStore((s) => s.setNote)

  const [noteValue, setNoteValue] = useState('')
  const [noteSaved, setNoteSaved] = useState(false)
  const [activeTab, setActiveTab] = useState<GhidTab>('ghid')
  const [isBootstrapping, setIsBootstrapping] = useState(true)
  const testGuideId = searchParams.get('guide') as GuideId | null
  const isDevGuidePreview =
    process.env.NODE_ENV !== 'production' &&
    sessionId === 'test-session' &&
    !!testGuideId
  const activeGuideId = (TEST_MODE || isDevGuidePreview) && testGuideId ? testGuideId : guideId

  const content = activeGuideId ? getFullPaidGuideContent(activeGuideId) : null

  useEffect(() => {
    let cancelled = false

    async function bootstrapSession() {
      if (!sessionId || ((TEST_MODE || isDevGuidePreview) && !!testGuideId)) {
        if (!cancelled) setIsBootstrapping(false)
        return
      }

      try {
        const res = await fetch(`/api/session/bootstrap?session=${sessionId}`, {
          cache: 'no-store',
        })

        if (!res.ok) {
          if (!cancelled) setIsBootstrapping(false)
          return
        }

        const data = await res.json() as {
          sessionId: string
          problemType: ProblemType | null
          country: string | null
          situation: SituationFlags
          guideId: GuideId | null
          isPaid: boolean
        }

        const bundesland = data.situation?.bundesland as BundeslandCode | undefined
        const consulateFromSituation = data.situation?.consulate as ConsulateId | undefined
        const consulate = consulateFromSituation ?? (bundesland ? deriveConsulateId(bundesland) : null)

        useAppStore.setState({
          sessionId: data.sessionId,
          problemType: data.problemType,
          country: data.country,
          situation: data.situation ?? {},
          guideId: data.guideId,
          isPaid: data.isPaid,
          bundesland: bundesland ?? null,
          consulate,
        })

        if (!data.isPaid) {
          router.replace(`/paywall?session=${sessionId}`)
          return
        }
      } catch (err) {
        console.error('Paid guide bootstrap error:', err)
      } finally {
        if (!cancelled) setIsBootstrapping(false)
      }
    }

    void bootstrapSession()

    return () => {
      cancelled = true
    }
  }, [isDevGuidePreview, router, sessionId, testGuideId])

  useEffect(() => {
    if (content) setTotalSteps(content.steps.length)
  }, [content, setTotalSteps])

  useEffect(() => {
    if (typeof window === 'undefined' || !sessionId) return
    const lastOpenedSession = window.sessionStorage.getItem('actero:last_paid_session_opened')
    if (lastOpenedSession !== sessionId) {
      setCurrentStepIndex(0)
      window.sessionStorage.setItem('actero:last_paid_session_opened', sessionId)
    }
  }, [sessionId, setCurrentStepIndex])

  useEffect(() => {
    if (!content) return
    if (currentStepIndex < 0 || currentStepIndex >= content.steps.length) {
      setCurrentStepIndex(0)
    }
  }, [content, currentStepIndex, setCurrentStepIndex])

  useEffect(() => {
    if (activeGuideId) {
      setNoteValue(notes[currentStepIndex] ?? '')
      setNoteSaved(false)
    }
  }, [currentStepIndex, activeGuideId, notes])

  useEffect(() => {
    if (!activeGuideId) return
    trackOnce(
      `paid_guide_view:${sessionId}:${activeGuideId}`,
      'paid_guide_view',
      withAttribution({
        guide_id: activeGuideId,
        problem_type: useAppStore.getState().problemType ?? undefined,
      })
    )
  }, [activeGuideId, sessionId])

  const step = content?.steps[currentStepIndex]

  useEffect(() => {
    if (!activeGuideId || !step) return
    trackEvent('paid_guide_step_view', withAttribution({
      guide_id: activeGuideId,
      problem_type: useAppStore.getState().problemType ?? undefined,
      step_id: step.id,
      step_title: step.shortLabel,
    }))
  }, [activeGuideId, step])

  if (isBootstrapping) {
    return (
      <main className="min-h-screen bg-white flex flex-col">
        <SiteHeader />
        <div className="max-w-2xl mx-auto w-full flex flex-1 items-center justify-center px-5">
          <p className="text-sm text-gray-400">Se încarcă ghidul tău...</p>
        </div>
      </main>
    )
  }

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

  const stepSafe = step ?? content.steps[0]
  if (!stepSafe) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-3xl mb-3">⚠️</div>
          <p className="text-sm">Ghidul nu poate fi încărcat momentan.</p>
        </div>
      </main>
    )
  }
  const isFirst = currentStepIndex === 0
  const isLast = currentStepIndex === content.steps.length - 1
  const showNoteField = stepSafe.id === 5
  const showGuideTab = activeTab === 'ghid'

  const tabs: Array<{ id: GhidTab; label: string; icon: string }> = [
    { id: 'ghid', label: 'Ghid', icon: '📄' },
    { id: 'checklist', label: 'Checklist', icon: '✓' },
    { id: 'tracker', label: 'Tracker', icon: '📍' },
    { id: 'parteneri', label: 'Parteneri', icon: '🤝' },
  ]

  const activeTabStyles: Record<GhidTab, { bar: string; text: string }> = {
    ghid: { bar: 'bg-gray-900', text: 'text-gray-900' },
    checklist: { bar: 'bg-green-500', text: 'text-green-700' },
    tracker: { bar: 'bg-orange-400', text: 'text-orange-700' },
    parteneri: { bar: 'bg-amber-400', text: 'text-amber-700' },
  }

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
      <div className="max-w-2xl mx-auto w-full flex flex-col flex-1">

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

        {/* Tabs */}
        <div className="mb-3 border-b border-gray-100 bg-white px-2">
          <div className="grid grid-cols-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex flex-col items-center justify-center gap-0.5 px-2 py-3 text-center transition-colors ${
                  activeTab === tab.id
                    ? activeTabStyles[tab.id].text
                    : 'text-gray-300'
                }`}
              >
                <span
                  className={`absolute left-1/2 top-0 h-0.5 w-8 -translate-x-1/2 rounded-full transition-colors ${
                    activeTab === tab.id ? activeTabStyles[tab.id].bar : 'bg-transparent'
                  }`}
                />
                <div className={`text-base transition-transform ${
                  activeTab === tab.id ? 'scale-100' : 'scale-95'
                }`}>
                  {tab.icon}
                </div>
                <div className={`text-[11px] font-medium ${
                  activeTab === tab.id ? activeTabStyles[tab.id].text : 'text-gray-400'
                }`}>
                  {tab.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step counter */}
        {showGuideTab && (
          <div className="px-5 mb-1">
            <span className="text-xs text-gray-400">
              Pasul {currentStepIndex + 1} / {totalSteps} — {stepSafe.shortLabel}
            </span>
          </div>
        )}

        {/* Conținut pas */}
        <div className={`flex-1 overflow-y-auto ${showGuideTab ? 'px-5 pb-32' : 'pb-24'}`}>
          {activeTab === 'ghid' && (
            <>
              <h2 className="text-lg font-bold text-gray-900 mb-4">{stepSafe.title}</h2>

              <div className="flex flex-col gap-3 mb-4">
                {stepSafe.blocks.map((block, i) => (
                  <div
                    key={i}
                    className={`rounded-xl px-3 py-3 text-sm flex gap-2 ${blockStyles[block.type]}`}
                  >
                    <span className="flex-shrink-0 mt-0.5">{blockIcons[block.type]}</span>
                    <span className="whitespace-pre-line">{block.text}</span>
                  </div>
                ))}
              </div>

              {stepSafe.hasConsulateCard && consulate && (
                <ConsulateCard consulateId={consulate as ConsulateId} guideId={activeGuideId} />
              )}

              {stepSafe.actionItem && (
                <a
                  href={stepSafe.actionItem.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white"
                >
                  <span>{stepSafe.actionItem.label}</span>
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M6 4h6v6M10.5 5.5 4 12"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                    />
                  </svg>
                </a>
              )}

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

              {isLast && (
                <div className="mt-6 bg-green-50 border-2 border-green-400 rounded-2xl p-5 text-center">
                  <div className="text-3xl mb-2">🎉</div>
                  <div className="font-bold text-gray-900 mb-1">Ai terminat toți pașii!</div>
                  <div className="text-sm text-gray-600 mb-4">
                    Când primești documentul, marchează ghidul ca finalizat.
                  </div>
                  <button
                    onClick={() => {
                      trackEvent('paid_guide_completion_click', withAttribution({
                        guide_id: activeGuideId ?? undefined,
                        problem_type: useAppStore.getState().problemType ?? undefined,
                      }))
                      router.push(`/finalizat?session=${sessionId}`)
                    }}
                    className="w-full py-3 bg-green-500 text-white font-bold rounded-xl text-sm"
                  >
                    Am rezolvat! →
                  </button>
                </div>
              )}
            </>
          )}

          {activeTab === 'checklist' && <ChecklistTab guideIdOverride={activeGuideId} />}
          {activeTab === 'tracker' && <TrackerTab guideIdOverride={activeGuideId} />}
          {activeTab === 'parteneri' && <ParteneriTab />}
        </div>

        {/* Navigare fixă jos */}
        {showGuideTab && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4">
            <div className="max-w-2xl mx-auto w-full flex gap-3">
              {!isFirst && (
                <button
                  onClick={goToPrevStep}
                  className="flex-1 py-3 bg-gray-100 text-gray-600 font-medium rounded-xl text-sm"
                >
                  ← {content.steps[currentStepIndex - 1]?.shortLabel}
                </button>
              )}
              {!isLast && (
                <button
                  onClick={goToNextStep}
                  className={`${isFirst ? 'flex-1' : 'flex-[2]'} py-3 bg-gray-900 text-white font-semibold rounded-xl text-sm`}
                >
                  {content.steps[currentStepIndex + 1]?.shortLabel} →
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </main>
  )
}

export default function GhidPaidPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-white flex flex-col">
        <SiteHeader />
        <div className="max-w-2xl mx-auto w-full flex flex-col flex-1" />
      </main>
    }>
      <GhidPaidPageContent />
    </Suspense>
  )
}
