// ActeRO — app/ghid/page.tsx
// S4 — Ghid Free: primii 2 pași vizibili + paywall banner

'use client'

import { Suspense, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import SiteHeader from '@/components/layout/SiteHeader'
import { TEST_MODE } from '@/lib/config'
import { useAppStore } from '@/store/appStore'
import type { GuideId } from '@/types'

// ─── CONȚINUT FREE per ghid ───────────────────────────────────────────────────

type FreeStep = {
  id: number
  title: string
  blocks: { text: string; type: 'info' | 'warning' | 'tip' | 'action' }[]
}

type GhidFreeContent = {
  title: string
  meta: { free: string; total: string }
  steps: FreeStep[]
  paywallTeaser: string[]
  totalSteps: number
  lockedSteps: { id: number; title: string }[]
}

const ghidFreeMap: Record<GuideId, GhidFreeContent> = {
  'pasaport-crds-de': {
    title: 'Ghid reînnoire pașaport CRDS · Germania',
    meta: { free: '2 pași gratuiți', total: '7 pași total' },
    totalSteps: 7,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Pașaportul expirat sau distrus/deteriorat — original (chiar și în stare proastă, cu condiția să existe elemente de identificare).', type: 'info' },
          { text: 'Cartea de identitate românească (dacă o ai, chiar expirată) — original. Va fi anulată la eliberarea noului pașaport CRDS — e normal.', type: 'info' },
          { text: 'Certificat de naștere românesc — original.', type: 'info' },
          { text: 'Document de domiciliu în Germania: Meldebescheinigung, Anmeldung sau Personalausweis german — original, emis în ultimii 5 ani.', type: 'info' },
          { text: '2 fotografii color recente, 3,5 × 4,5 cm, fond alb. Automatele foto din Rossmann sau DM (selectezi „biometric") produc fotografii acceptate.', type: 'tip' },
          { text: 'Certificat de căsătorie românesc — doar dacă ești căsătorit/ă ȘI ți-ai schimbat numele. Dacă nu ți-ai schimbat numele, nu e necesar.', type: 'info' },
          { text: 'Certificatele plastifiate, rupte, pătate sau corectate cu scotch sunt nule de drept și nu sunt acceptate la ghișeu. Solicită duplicat de la primărie dacă e cazul.', type: 'warning' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Scanează toate documentele din lista de mai sus înainte să creezi cererea pe econsulat.ro. Platforma îți va cere să le încarci.', type: 'info' },
          { text: 'Format recomandat: JPG sau PDF · calitate bună, lizibile, fără tăieturi. Fotografiile: scanate sau fotografiate pe fond alb, fără umbre.', type: 'tip' },
          { text: 'Pregătește și câte o copie simplă din fiecare document original — o vei aduce la ghișeu alături de original.', type: 'action' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Cont și cerere pe econsulat.ro' },
      { id: 4, title: 'Obține programarea' },
      { id: 5, title: 'Pregătire pentru ziua programării' },
      { id: 6, title: 'Ziua consulatului' },
      { id: 7, title: 'Ridică pașaportul' },
    ],
    paywallTeaser: [
      'Cum creezi cererea corect pe econsulat.ro (pas cu pas)',
      'Cum obții programarea — inclusiv trucuri reale din comunitate',
      'Card consulat complet: adresă, telefon, Maps, Waze, program',
      'Ce se întâmplă exact la ghișeu și cum reacționezi dacă ți se cere ceva neașteptat',
      'Checklist downloadabil pentru ghișeu + Tracker dosar',
    ],
  },

  'pasaport-crds-nou-de': {
    title: 'Ghid primul pașaport CRDS · Germania',
    meta: { free: '2 pași gratuiți', total: '7 pași total' },
    totalSteps: 7,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Certificat de naștere românesc — original. Certificatele plastifiate, rupte sau pătate sunt nule de drept — solicită duplicat dacă e cazul.', type: 'info' },
          { text: 'Carte de identitate românească (dacă există, chiar expirată) — original. Va fi anulată la eliberarea pașaportului CRDS.', type: 'info' },
          { text: 'Document de domiciliu în Germania: Meldebescheinigung / Anmeldung / Personalausweis german — original, emis în ultimii 5 ani.', type: 'info' },
          { text: '2 fotografii color recente, 3,5 × 4,5 cm, fond alb. Automatele din Rossmann/DM (selectezi „biometric") sunt acceptate.', type: 'tip' },
          { text: 'Certificat de căsătorie românesc — doar dacă ești căsătorit/ă ȘI ți-ai schimbat numele. Dacă nu ți-ai schimbat numele, nu e necesar.', type: 'info' },
          { text: 'Taxa: 53€ — se achită la consulat (Bonn = EC-Karte, München = numerar, Stuttgart = POS sau transfer bancar).', type: 'action' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Scanează toate documentele din lista de mai sus înainte să creezi cererea pe econsulat.ro.', type: 'info' },
          { text: 'Format recomandat: JPG sau PDF · calitate bună, lizibile, fără tăieturi.', type: 'tip' },
          { text: 'Pregătește și câte o copie simplă din fiecare document original.', type: 'action' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Cont și cerere pe econsulat.ro' },
      { id: 4, title: 'Obține programarea' },
      { id: 5, title: 'Pregătire pentru ziua programării' },
      { id: 6, title: 'Ziua consulatului' },
      { id: 7, title: 'Ridică pașaportul' },
    ],
    paywallTeaser: [
      'Cum creezi cererea corect pe econsulat.ro',
      'Cum obții programarea rapid',
      'Card consulat complet cu adresă, telefon, Maps, Waze',
      'Checklist downloadabil + Tracker dosar',
    ],
  },

  'pasaport-de-cu-domiciliu': {
    title: 'Ghid pașaport · Domiciliu România · Germania',
    meta: { free: '2 pași gratuiți', total: '7 pași total' },
    totalSteps: 7,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Cartea de identitate valabilă cu domiciliu în România — original. Trebuie să fie valabilă și cu numele actual.', type: 'info' },
          { text: 'Pașaportul anterior (dacă există, chiar expirat) — original.', type: 'info' },
          { text: 'Certificat de naștere românesc — original. Certificate plastifiate/deteriorate = nule de drept.', type: 'info' },
          { text: '2 fotografii color recente, 3,5 × 4,5 cm, fond alb. Excepție München: fotografiile se fac la consulat — nu aduci fotografii proprii.', type: 'tip' },
          { text: 'Certificat de căsătorie românesc — doar dacă ești căsătorit/ă ȘI ți-ai schimbat numele.', type: 'info' },
          { text: 'Nu ai nevoie de Anmeldung — domiciliul e în România, dovedit de CI. Taxa: 53€ la consulat.', type: 'action' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Scanează documentele din lista de mai sus. Format: JPG sau PDF, calitate bună.', type: 'info' },
          { text: 'Pregătește câte o copie simplă din fiecare document original.', type: 'action' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Cont și cerere pe econsulat.ro' },
      { id: 4, title: 'Obține programarea' },
      { id: 5, title: 'Pregătire pentru ziua programării' },
      { id: 6, title: 'Ziua consulatului' },
      { id: 7, title: 'Ridică pașaportul' },
    ],
    paywallTeaser: [
      'Cum selectezi corect serviciul pe econsulat.ro (nu CRDS)',
      'Cum obții programarea și cât durează',
      'Card consulat complet cu adresă, Maps, Waze, program',
      'Checklist downloadabil + Tracker dosar',
    ],
  },

  'pasaport-de-cu-domiciliu-pierdut': {
    title: 'Ghid pașaport pierdut/furat · Germania',
    meta: { free: '2 pași gratuiți', total: '7 pași total' },
    totalSteps: 7,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Cartea de identitate valabilă cu domiciliu în România — original.', type: 'info' },
          { text: 'Certificat de naștere românesc — original. Certificate deteriorate = nule de drept.', type: 'info' },
          { text: 'Dacă a fost PIERDUT: declarație pe proprie răspundere — se completează direct la ghișeul consulatului.', type: 'info' },
          { text: 'Dacă a fost FURAT: confirmare poliție locală (Verlustanzeige/Diebstahlsanzeige) + traducere autorizată în română.', type: 'warning' },
          { text: 'Dacă a fost DISTRUS: prezinți documentul distrus/deteriorat sau fragmentele — trebuie să existe elemente de identificare.', type: 'info' },
          { text: '2 fotografii color recente, 3,5 × 4,5 cm, fond alb. München: fotografiile se fac la consulat.', type: 'tip' },
          { text: 'Certificat de căsătorie românesc — doar dacă ești căsătorit/ă ȘI ți-ai schimbat numele. Taxa: 53€ la consulat.', type: 'action' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Scanează documentele disponibile. Declarația pentru pierdere se completează la ghișeu — nu e nevoie s-o prepari în avans.', type: 'info' },
          { text: 'Dacă ai nevoie de traducere autorizată (caz furt), partenerii ActeRO din Germania pot face acest lucru rapid.', type: 'tip' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Cont și cerere pe econsulat.ro' },
      { id: 4, title: 'Obține programarea' },
      { id: 5, title: 'Pregătire pentru ziua programării' },
      { id: 6, title: 'Ziua consulatului' },
      { id: 7, title: 'Ridică pașaportul' },
    ],
    paywallTeaser: [
      'Cum completezi cererea pe econsulat.ro pentru document lipsă',
      'Ce se întâmplă la ghișeu când declari pierderea',
      'Card consulat complet + program ridicare',
      'Checklist downloadabil + Tracker dosar',
    ],
  },

  'buletin-de-fara-domiciliu': {
    title: 'Ghid buletin expirat · Fără domiciliu RO',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Din septembrie 2025, buletinul necesită prezența ta fizică în România. Procura nu mai funcționează.', type: 'warning' },
          { text: 'Buletinul expirat — original.', type: 'info' },
          { text: 'Certificat de naștere românesc — original. Certificate plastifiate/deteriorate = nule de drept.', type: 'info' },
          { text: '1 fotografie color recentă, 3 × 4 cm, fond alb (verifică la SPCLEP-ul tău dacă mai e necesară sau se face biometric).', type: 'info' },
          { text: 'Certificat de căsătorie românesc — doar dacă ești căsătorit/ă ȘI ți-ai schimbat numele.', type: 'info' },
          { text: 'Unde mergi în România: la SPCLEP din orașul unde ai avut ultimul domiciliu înregistrat.', type: 'action' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Verifică înainte de deplasare că toate actele sunt în regulă (nu deteriorate, nu plastifiate).', type: 'info' },
          { text: 'Asigură-te că ai un document valabil cu care poți călători în România (pașaport valabil sau titlu de călătorie).', type: 'warning' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Planifică deplasarea în România' },
      { id: 4, title: 'Pregătire pentru deplasare' },
      { id: 5, title: 'Ziua la SPCLEP' },
      { id: 6, title: 'Ridică buletinul' },
    ],
    paywallTeaser: [
      'Cum găsești și contactezi SPCLEP-ul competent',
      'Cum faci programare online (acolo unde există)',
      'Ce se întâmplă la ghișeul SPCLEP — pas cu pas',
      'Checker downloadabil + Tracker dosar',
    ],
  },

  'buletin-de-cu-domiciliu': {
    title: 'Ghid buletin expirat · Domiciliu activ RO',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Din septembrie 2025, buletinul necesită prezența ta fizică în România. Procura nu mai funcționează.', type: 'warning' },
          { text: 'Buletinul expirat — original.', type: 'info' },
          { text: 'Certificat de naștere românesc — original. Certificate deteriorate = nule de drept.', type: 'info' },
          { text: '1 fotografie color recentă, 3 × 4 cm (verifică la SPCLEP-ul tău).', type: 'info' },
          { text: 'Certificat de căsătorie românesc — doar dacă ești căsătorit/ă ȘI ți-ai schimbat numele.', type: 'info' },
          { text: 'Unde mergi: la SPCLEP din sectorul/orașul unde ești înregistrat cu domiciliul în România.', type: 'action' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Verifică că toate actele sunt în regulă înainte de deplasare.', type: 'info' },
          { text: 'Asigură-te că ai un document valabil pentru călătoria în România.', type: 'warning' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Planifică deplasarea în România' },
      { id: 4, title: 'Pregătire pentru deplasare' },
      { id: 5, title: 'Ziua la SPCLEP' },
      { id: 6, title: 'Ridică buletinul' },
    ],
    paywallTeaser: [
      'Cum găsești SPCLEP-ul tău și programarea online',
      'Ce se întâmplă la ghișeu — pas cu pas',
      'Checklist downloadabil + Tracker dosar',
    ],
  },

  'buletin-de-fara-domiciliu-pierdut': {
    title: 'Ghid buletin pierdut/furat · Fără domiciliu RO',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Din septembrie 2025, buletinul necesită prezența ta fizică în România. Procura nu mai funcționează.', type: 'warning' },
          { text: 'Certificat de naștere românesc — original. Certificate deteriorate = nule de drept.', type: 'info' },
          { text: 'Dacă a fost PIERDUT: declarație pe proprie răspundere — se completează la SPCLEP.', type: 'info' },
          { text: 'Dacă a fost FURAT: sesizare poliție (din România sau Germania).', type: 'warning' },
          { text: 'Dacă a fost DISTRUS: prezinți documentul deteriorat sau fragmentele.', type: 'info' },
          { text: 'Certificat de căsătorie românesc — doar dacă ești căsătorit/ă ȘI ți-ai schimbat numele.', type: 'info' },
          { text: 'Unde mergi: la SPCLEP din orașul unde ai avut ultimul domiciliu înregistrat.', type: 'action' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Documentele disponibile pregătite. Declarația de pierdere se completează la SPCLEP.', type: 'info' },
          { text: 'Asigură-te că ai un document valabil pentru călătoria în România.', type: 'warning' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Planifică deplasarea în România' },
      { id: 4, title: 'Pregătire pentru deplasare' },
      { id: 5, title: 'Ziua la SPCLEP' },
      { id: 6, title: 'Ridică buletinul' },
    ],
    paywallTeaser: [
      'Cum găsești SPCLEP-ul competent',
      'Procedura exactă pentru buletin pierdut/furat la SPCLEP',
      'Checklist downloadabil + Tracker dosar',
    ],
  },

  'titlu-calatorie-urgenta-de': {
    title: 'Ghid titlu de călătorie · Urgență sub 3 zile',
    meta: { free: '1 pas gratuit', total: '4 pași total' },
    totalSteps: 4,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Orice act de identitate disponibil (pașaport expirat / buletin expirat / ambele) — original.', type: 'info' },
          { text: 'Dovada urgenței: bilet de avion/tren, invitație medicală, deces în familie sau altă situație obiectivă documentată.', type: 'warning' },
          { text: 'Dovada domiciliului în Germania (Anmeldung) — original.', type: 'info' },
          { text: '2 fotografii color recente, 3,5 × 4,5 cm, fond alb.', type: 'info' },
          { text: 'Certificat de naștere românesc — original.', type: 'info' },
        ],
      },
    ],
    lockedSteps: [
      { id: 2, title: 'Obține programarea de urgență' },
      { id: 3, title: 'Ziua consulatului' },
      { id: 4, title: 'Pasul următor după urgență' },
    ],
    paywallTeaser: [
      'Numerele de telefon pentru urgențe la toate 4 consulatele',
      'Cum obții programarea de urgență rapid',
      'Ce se întâmplă la ghișeu și cât durează eliberarea',
      'Ce document permanent să faci după ce rezolvi urgența',
    ],
  },

  'titlu-calatorie-de': {
    title: 'Ghid titlu de călătorie · 1–2 săptămâni',
    meta: { free: '1 pas gratuit', total: '4 pași total' },
    totalSteps: 4,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Orice act de identitate disponibil (pașaport expirat / buletin expirat / ambele) — original.', type: 'info' },
          { text: 'Dovada domiciliului în Germania (Anmeldung) — original.', type: 'info' },
          { text: '2 fotografii color recente, 3,5 × 4,5 cm, fond alb.', type: 'info' },
          { text: 'Certificat de naștere românesc — original.', type: 'info' },
        ],
      },
    ],
    lockedSteps: [
      { id: 2, title: 'Cont și cerere pe econsulat.ro' },
      { id: 3, title: 'Ziua consulatului' },
      { id: 4, title: 'Pasul următor' },
    ],
    paywallTeaser: [
      'Cum selectezi corect serviciul pe econsulat.ro',
      'Card consulat complet cu adresă, Maps, Waze',
      'Ce document permanent să faci după',
    ],
  },

  'procura-vanzare-de': {
    title: 'Ghid procură · Vânzare proprietate · Germania',
    meta: { free: '1 pas gratuit', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Actul de identitate valabil (pașaport CRDS valabil sau buletin) — original.', type: 'info' },
          { text: 'Datele complete ale notarului din România care va instrumenta tranzacția: nume, adresă birou, număr înregistrare UNNPR.', type: 'info' },
          { text: 'Datele proprietății: adresă, număr cadastral (dacă îl ai).', type: 'info' },
          { text: 'Datele cumpărătorului/vânzătorului (dacă sunt necesare în procură).', type: 'info' },
          { text: 'Dacă nu ai notar ales: ghidul te ajută să găsești unul în România.', type: 'tip' },
        ],
      },
    ],
    lockedSteps: [
      { id: 2, title: 'Pregătește documentele' },
      { id: 3, title: 'Obține programarea' },
      { id: 4, title: 'Pregătire pentru ziua programării' },
      { id: 5, title: 'Ziua consulatului' },
      { id: 6, title: 'Trimite procura în România' },
    ],
    paywallTeaser: [
      'Cum obții programarea pentru acte notariale',
      'Ce se întâmplă la ghișeu când semnezi procura',
      'Cum trimiți procura în România prin curier',
      'Cum găsești un notar de încredere în România',
    ],
  },

  'procura-mostenire-de': {
    title: 'Ghid procură · Moștenire · Germania',
    meta: { free: '1 pas gratuit', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Actul de identitate valabil (pașaport CRDS valabil sau buletin) — original.', type: 'info' },
          { text: 'Certificatul de deces al celui decedat — original sau copie legalizată.', type: 'info' },
          { text: 'Datele notarului din România care instrumentează succesiunea.', type: 'info' },
          { text: 'Dovada calității de moștenitor (certificat de naștere care atestă relația de rudenie) — original.', type: 'info' },
        ],
      },
    ],
    lockedSteps: [
      { id: 2, title: 'Pregătește documentele' },
      { id: 3, title: 'Obține programarea' },
      { id: 4, title: 'Pregătire pentru ziua programării' },
      { id: 5, title: 'Ziua consulatului' },
      { id: 6, title: 'Trimite procura în România' },
    ],
    paywallTeaser: [
      'Cum obții programarea pentru acte notariale',
      'Ce se întâmplă la ghișeu când semnezi procura de moștenire',
      'Cum trimiți procura în România',
    ],
  },

  'procura-generala-de': {
    title: 'Ghid procură generală · Germania',
    meta: { free: '1 pas gratuit', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Actul de identitate valabil (pașaport CRDS valabil sau buletin) — original.', type: 'info' },
          { text: 'Datele mandatarului din România: nume, CNP, serie și număr CI, adresă exactă.', type: 'info' },
          { text: 'Scopul exact al procurii — pentru a putea fi redactată corect.', type: 'info' },
        ],
      },
    ],
    lockedSteps: [
      { id: 2, title: 'Pregătește documentele' },
      { id: 3, title: 'Obține programarea' },
      { id: 4, title: 'Pregătire pentru ziua programării' },
      { id: 5, title: 'Ziua consulatului' },
      { id: 6, title: 'Trimite procura în România' },
    ],
    paywallTeaser: [
      'Cum obții programarea pentru acte notariale',
      'Ce se întâmplă la ghișeu când semnezi procura',
      'Cum trimiți procura în România',
    ],
  },

  // Ghiduri parțiale — redirect spre /in-curand
  'buletin-de-cu-domiciliu-pierdut': {
    title: 'Ghid buletin pierdut · Domiciliu activ RO',
    meta: { free: '1 pas gratuit', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Din septembrie 2025, buletinul necesită prezența ta fizică în România.', type: 'warning' },
          { text: 'Certificat de naștere românesc — original.', type: 'info' },
          { text: 'Dacă a fost PIERDUT: declarație pe proprie răspundere la SPCLEP.', type: 'info' },
          { text: 'Dacă a fost FURAT: sesizare poliție.', type: 'warning' },
        ],
      },
    ],
    lockedSteps: [
      { id: 2, title: 'Pregătește documentele' },
      { id: 3, title: 'Planifică deplasarea în România' },
      { id: 4, title: 'Pregătire pentru deplasare' },
      { id: 5, title: 'Ziua la SPCLEP' },
      { id: 6, title: 'Ridică buletinul' },
    ],
    paywallTeaser: ['Ghid complet pas cu pas', 'Checklist + Tracker'],
  },
  'buletin-de-primul-de': {
    title: 'Ghid primul buletin · Născut România',
    meta: { free: '1 pas gratuit', total: '6 pași total' },
    totalSteps: 6,
    steps: [{ id: 1, title: 'Documentele necesare', blocks: [{ text: 'Certificat de naștere românesc — original.', type: 'info' }] }],
    lockedSteps: [{ id: 2, title: 'Planifică deplasarea' }, { id: 3, title: 'SPCLEP' }],
    paywallTeaser: ['Ghid complet pas cu pas'],
  },
  'buletin-de-primul-de-b': {
    title: 'Ghid primul buletin · Născut Germania',
    meta: { free: '1 pas gratuit', total: '6 pași total' },
    totalSteps: 6,
    steps: [{ id: 1, title: 'Documentele necesare', blocks: [{ text: 'Necesită finalizarea transcrierii certificatului de naștere.', type: 'warning' }] }],
    lockedSteps: [{ id: 2, title: 'Planifică deplasarea' }, { id: 3, title: 'SPCLEP' }],
    paywallTeaser: ['Ghid complet pas cu pas'],
  },
  'transcriere-nastere-de': {
    title: 'Ghid transcriere certificat de naștere',
    meta: { free: '2 pași gratuiți', total: '7 pași total' },
    totalSteps: 7,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Certificatul de naștere german (Geburtsurkunde) — original.', type: 'info' },
          { text: 'Traducere legalizată în română a certificatului de naștere german — obligatorie.', type: 'warning' },
          { text: 'Actele de identitate ale ambilor părinți (pașaport/buletin valabil) — originale.', type: 'info' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Obține traducerea legalizată a certificatului de naștere german de la un traducător autorizat de Ministerul Justiției din România.', type: 'info' },
          { text: 'Partenerii ActeRO din München/Bonn pot face această traducere în 2–5 zile lucrătoare.', type: 'tip' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Cont și cerere pe econsulat.ro' },
      { id: 4, title: 'Obține programarea' },
      { id: 5, title: 'Pregătire pentru ziua programării' },
      { id: 6, title: 'Ziua consulatului' },
      { id: 7, title: 'Ridică certificatul de naștere românesc' },
    ],
    paywallTeaser: ['Ghid complet transcriere', 'Checklist + Tracker'],
  },
}

// ─── COMPONENTE UI ────────────────────────────────────────────────────────────

const blockStyles = {
  info: 'bg-gray-50 border border-gray-200 text-gray-700',
  warning: 'bg-orange-50 border border-orange-200 text-orange-800',
  tip: 'bg-green-50 border border-green-200 text-green-800',
  action: 'bg-blue-50 border border-blue-200 text-blue-800',
}

const blockIcons = {
  info: '📋',
  warning: '⚠️',
  tip: '💡',
  action: '→',
}

function StepCard({ step, isActive }: { step: FreeStep; isActive: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldCollapse = step.id === 1 || step.id === 2
  const visibleBlocks = shouldCollapse ? step.blocks.slice(0, 2) : step.blocks
  const hiddenBlocks = shouldCollapse ? step.blocks.slice(2) : []

  return (
    <div className={`rounded-2xl border-2 p-4 mb-4 ${isActive ? 'border-green-400 bg-green-50/30' : 'border-gray-200 bg-white'}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${isActive ? 'bg-green-500 text-white' : 'bg-gray-900 text-white'}`}>
          {step.id}
        </div>
        <div className="font-semibold text-gray-900 text-sm">{step.title}</div>
      </div>
      <div className="flex flex-col gap-2 ml-11">
        {visibleBlocks.map((block, i) => (
          <div key={i} className={`rounded-xl px-3 py-2 text-sm flex gap-2 ${blockStyles[block.type]}`}>
            <span className="flex-shrink-0">{blockIcons[block.type]}</span>
            <span>{block.text}</span>
          </div>
        ))}
        {hiddenBlocks.length > 0 && (
          <>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="self-start mt-1 rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600 hover:border-gray-300 hover:text-gray-800 transition-colors"
            >
              {isExpanded
                ? '▲ Ascunde informațiile suplimentare'
                : step.id === 1
                ? `▼ Vezi toate documentele necesare (${hiddenBlocks.length} în plus)`
                : `▼ Vezi toți pașii de pregătire (${hiddenBlocks.length} în plus)`}
            </button>
            {isExpanded && (
              <div className="flex flex-col gap-2">
                {hiddenBlocks.map((block, i) => (
                  <div key={`${step.id}-${i + 2}`} className={`rounded-xl px-3 py-2 text-sm flex gap-2 ${blockStyles[block.type]}`}>
                    <span className="flex-shrink-0">{blockIcons[block.type]}</span>
                    <span>{block.text}</span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

function LockedStep({ step }: { step: { id: number; title: string } }) {
  return (
    <div className="flex items-center gap-3 py-2 opacity-40">
      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-400 flex-shrink-0">
        {step.id}
      </div>
      <span className="text-sm text-gray-400">{step.title}</span>
      <span className="ml-auto text-gray-300 text-xs">🔒</span>
    </div>
  )
}

function PaywallBanner({
  teaser,
  price,
  onUnlock,
}: {
  teaser: string[]
  price: string
  onUnlock: () => void
}) {
  const [benefitsOpen, setBenefitsOpen] = useState(false)
  const visibleTeaser = teaser.slice(0, 3)
  const hiddenTeaser = teaser.slice(3)

  return (
    <div className="bg-gray-900 rounded-2xl p-5 my-4">
      <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/70 mb-3">
        Acces complet
      </div>
      <div className="font-bold text-white text-xl mb-2">
        Deblochezi restul ghidului complet
      </div>
      <div className="text-white font-bold text-xl mb-1">
        {price} <span className="text-gray-400 text-sm font-normal">· plată o singură dată</span>
      </div>
      <p className="text-xs text-gray-400 mb-4">
        Acces instant după plată
      </p>
      <button
        onClick={onUnlock}
        className="w-full py-3 bg-green-500 text-white font-bold rounded-xl text-sm"
      >
        Deblochează ghidul complet →
      </button>
      <div className="text-xs text-gray-500 text-center mt-2 mb-4">
        Checklist + tracker + parteneri verificați
      </div>
      <div className="flex flex-col gap-2">
        {visibleTeaser.map((item, i) => (
          <div key={i} className="flex gap-2 text-sm text-gray-300">
            <span className="text-green-400 flex-shrink-0">✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      {hiddenTeaser.length > 0 && (
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setBenefitsOpen(!benefitsOpen)}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-300 hover:border-white/20 hover:text-white transition-colors"
          >
            {benefitsOpen
              ? '▲ Mai puține beneficii'
              : `▼ Vezi toate beneficiile (${hiddenTeaser.length} în plus)`}
          </button>
          {benefitsOpen && (
            <div className="mt-3 flex flex-col gap-2">
              {hiddenTeaser.map((item, i) => (
                <div key={`${item}-${i}`} className="flex gap-2 text-sm text-gray-300">
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

function GhidFreePageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const sessionId = searchParams.get('session') ?? ''
  const testGuideId = searchParams.get('guide') as GuideId | null
  const { guideId } = useAppStore()
  const activeGuideId = TEST_MODE && testGuideId ? testGuideId : guideId

  const content = activeGuideId ? ghidFreeMap[activeGuideId] : null

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

  const handleUnlock = () => router.push(`/paywall?session=${sessionId}`)

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <SiteHeader />
      <div className="max-w-2xl mx-auto w-full px-5 py-6 flex-1">
        <div className="mb-4 flex justify-end">
          <a href={`/diagnostic?session=${sessionId}`} className="text-sm text-gray-400">← Înapoi</a>
        </div>

        {/* Titlu ghid */}
        <div className="mb-4">
          <h1 className="text-lg font-bold text-gray-900 mb-1">{content.title}</h1>
          <div className="flex gap-2">
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
              {content.meta.free}
            </span>
            <span className="bg-gray-100 text-gray-500 text-xs font-semibold px-2 py-1 rounded-full">
              {content.meta.total}
            </span>
          </div>
        </div>

        {/* Pași free */}
        {content.steps.map((step, i) => (
          <StepCard key={step.id} step={step} isActive={i === 0} />
        ))}

        {/* Paywall banner */}
        <PaywallBanner
          teaser={content.paywallTeaser}
          price="9,99€"
          onUnlock={handleUnlock}
        />

        {/* Pași locked */}
        <div className="px-1">
          {content.lockedSteps.map((step) => (
            <LockedStep key={step.id} step={step} />
          ))}
        </div>

        {/* Tab bar fix jos */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex">
          <div className="max-w-2xl mx-auto w-full flex">
            {[
              { label: 'Ghid', icon: '📋', active: true },
              { label: 'Checklist', icon: '✓', locked: true },
              { label: 'Tracker', icon: '📍', locked: true },
              { label: 'Parteneri', icon: '🤝', locked: true },
            ].map((tab) => (
              <button
                key={tab.label}
                onClick={() => !tab.active && handleUnlock()}
                className={`flex-1 py-3 flex flex-col items-center gap-0.5 text-xs font-medium ${
                  tab.active ? 'text-gray-900' : 'text-gray-300'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}{tab.locked ? ' 🔒' : ''}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Spațiu pentru tab bar */}
        <div className="h-16" />
      </div>
    </main>
  )
}

export default function GhidFreePage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-white flex flex-col">
        <SiteHeader />
        <div className="max-w-2xl mx-auto w-full px-5 py-6 flex-1" />
      </main>
    }>
      <GhidFreePageContent />
    </Suspense>
  )
}
