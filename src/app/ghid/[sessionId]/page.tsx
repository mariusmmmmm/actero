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
  type: 'info' | 'warning' | 'tip' | 'action' | 'note'
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
    actionItem: {
      label: 'Deschide econsulat.ro',
      href: 'https://www.econsulat.ro',
    },
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
          { text: 'Dacă documentul a fost furat și nu ai depus încă Diebstahlsanzeige la poliție — fă asta ÎNAINTE de a pleca la consulat. Adeverința poliției este obligatorie la toate consulatele. Traducerea autorizată în română este obligatorie: München, Stuttgart, Berlin. La Bonn pagina nu specifică traducerea, dar la toate celelalte 3 consulate este obligatorie — adu traducere și la Bonn.', type: 'warning' },
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
          { text: 'Opțiuni pașaport în România: pașaport simplu electronic — 265 lei, max 5 zile lucrătoare (în prezent 1–2 zile în medie), fără taxă suplimentară de urgență, livrare gratuită la domiciliu. Pașaport simplu temporar — 265 lei, max 3 zile lucrătoare, valabil 12 luni. Programare online la epasapoarte.ro. Poți merge la ORICE serviciu de pașapoarte din țară.', type: 'info' },
          { text: 'Opțiuni carte de identitate în România: mergi la SPCLEP din sectorul/orașul de domiciliu. Prezența fizică obligatorie (din sept. 2025).', type: 'info' },
          { text: 'Dacă știi deja ce document îți trebuie după revenire, ghidurile ActeRO pentru pașaport și carte de identitate te pot ajuta să pregătești dosarul din Germania, înainte de a pleca.', type: 'tip' },
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
  const activeGuideId = TEST_MODE && testGuideId ? testGuideId : guideId

  const content = activeGuideId ? getFullPaidGuideContent(activeGuideId) : null

  useEffect(() => {
    let cancelled = false

    async function bootstrapSession() {
      if (!sessionId || (TEST_MODE && !!testGuideId)) {
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
  }, [router, sessionId, testGuideId])

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

          {activeTab === 'checklist' && <ChecklistTab />}
          {activeTab === 'tracker' && <TrackerTab />}
          {activeTab === 'parteneri' && <ParteneriTab />}
        </div>

        {/* Navigare fixă jos */}
        {showGuideTab && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4">
            <div className="max-w-2xl mx-auto w-full flex gap-3">
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
