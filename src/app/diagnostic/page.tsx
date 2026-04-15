// ActeRO — app/diagnostic/page.tsx
// S3 — Diagnostic personalizat cu loader animat + reveal progresiv

'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import SiteHeader from '@/components/layout/SiteHeader'
import { persistAttribution, trackEvent, trackOnce, withAttribution } from '@/lib/analytics'
import {
  convertGuideIdToItaly,
  getCountryLabel,
  getGuideCountryCode,
  localizeGuideTextForCountry,
} from '@/lib/guides/countryCopy'
import {
  getBirthPostalRule,
  getTravelBadgeSummary,
  getTravelPhotoRule,
  personalizeGuideText,
} from '@/lib/guides/consulateRules'
import { getConsulateById, getRegionOptionsByCountry } from '@/lib/utils/deriveConsulate'
import { useAppStore } from '@/store/appStore'
import type { ConsulateId, CountryCode, GuideId, ProblemType } from '@/types'

// ─── TIPURI ───────────────────────────────────────────────────────────────────

type LoaderCheck = { label: string; done: boolean }

type DiagnosticData = {
  title: string
  subtitle: string
  warnings: string[]
  estimatedWeeks: string
  estimatedAppointments: number | string
  previewSteps: { id: number; label: string; locked: boolean }[]
  guideTitle: string
  isRoute: boolean
  routeSteps?: { guideId: string; title: string; weeks: string }[]
}

// ─── DATE DIAGNOSTIC per ghid ─────────────────────────────────────────────────

const diagnosticMap: Record<string, DiagnosticData> = {
  'pasaport-crds-de': {
    title: 'Pașaport CRDS · Domiciliu Germania',
    subtitle: 'Pașaport expirat sau distrus · o singură vizită la consulat',
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
  'pasaport-crds-de-pierdut': {
    title: 'Pașaport pierdut / furat · Domiciliu Germania',
    subtitle: 'Pașaport CRDS anterior · o singură vizită la consulat',
    warnings: [
      'Dacă pașaportul a fost PIERDUT: declarația se completează exclusiv la ghișeul consulatului, în ziua programării.',
      'Dacă pașaportul a fost FURAT: ai nevoie de adeverință de poliție + traducere în română conform consulatului tău: Bonn = autorizată, Stuttgart = legalizată, München și Berlin = autorizată.',
    ],
    estimatedWeeks: '6–10 săptămâni',
    estimatedAppointments: 1,
    guideTitle: 'Ghid pașaport CRDS pierdut/furat',
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
    subtitle: 'Născut în România · o singură vizită la consulat',
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
  'pasaport-minor-crds-de': {
    title: 'Pașaport pentru copilul tău din Germania',
    subtitle: 'Prim pașaport sau reînnoire pentru minori cu domiciliu în Germania',
    warnings: [
      'Prezența minorului și a ambilor părinți este obligatorie la depunere. Dacă un singur părinte vine, ai nevoie de procură specială sau acord scris autentificat.',
      'Minorul poate obține pașaport CRDS numai dacă cel puțin un părinte are deja pașaport CRDS sau depune cerere CRDS simultan cu minorul.',
      'Dacă minorul s-a născut în Germania și nu are certificat de naștere românesc, transcrierea trebuie făcută mai întâi.',
    ],
    estimatedWeeks: '8–12 săptămâni',
    estimatedAppointments: '1 programare · 1 vizită la consulat',
    guideTitle: 'Pașaport copil CRDS — Germania',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Documentele necesare', locked: false },
      { id: 2, label: 'Pregătește documentele', locked: false },
      { id: 3, label: 'Cerere pe econsulat.ro', locked: true },
      { id: 4, label: 'Obține programarea', locked: true },
      { id: 5, label: 'Pregătire pentru ziua programării', locked: true },
      { id: 6, label: 'Ziua consulatului', locked: true },
      { id: 7, label: 'Ridică pașaportul', locked: true },
    ],
  },
  'pasaport-de-cu-domiciliu': {
    title: 'Pașaport expirat · Domiciliu România',
    subtitle: 'Rezident în Germania · o singură vizită la consulat',
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
    subtitle: 'Rezident în Germania · o singură vizită la consulat',
    warnings: ['Dacă pașaportul a fost furat — ai nevoie de adeverință de poliție + traducere în română conform consulatului tău: Bonn = autorizată, Stuttgart = legalizată, München și Berlin = autorizată.'],
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
  'buletin-de-cu-domiciliu-pierdut': {
    title: 'Buletin pierdut sau furat — cu domiciliu în România',
    subtitle: 'Ai domiciliul activ în România și buletinul nu mai e la tine — trebuie să te prezinți personal la SPCLEP.',
    warnings: [
      'Prezența ta fizică la SPCLEP este obligatorie la depunere. Cererea nu se poate face prin procură.',
      'Ai obligația legală să soliciți buletin nou în termen de 15 zile de la constatarea lipsei.',
      'Dacă buletinul a fost furat: raportezi la poliția locală germană în 24 ore (obligație legală). Raportul poliției NU este document SPCLEP — funcționarul înregistrează furtul din declarația ta.',
      'CEI se ridică personal (setup PIN obligatoriu la ghișeu). CIS poate fi ridicat prin procură specială notarială.',
    ],
    estimatedWeeks: '2–5 săptămâni',
    estimatedAppointments: 1,
    guideTitle: 'Buletin pierdut/furat · Domiciliu România · Germania',
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
  'buletin-de-primul-de': {
    title: 'Primul tău buletin românesc',
    subtitle: 'Nu ai fost niciodată înregistrat la o primărie din România. Stabilirea domiciliului și prima carte de identitate se fac împreună, la același ghișeu SPCLEP — dar ai nevoie de o adresă și de actele de identitate pregătite înainte să pleci.',
    warnings: [
      'Prezența fizică în România este obligatorie — nu există procură sau alternativă la distanță.',
      'Ai nevoie de o adresă de domiciliu în România. Fără aceasta, cererea nu poate fi depusă.',
      "Excepție importantă față de regula generică CEI: în această procedură NU poți merge la orice SPCLEP. Schimbarea domiciliului din străinătate în România se face obligatoriu la SPCLEP-ul de pe raza adresei unde îți stabilești domiciliul.",
      'Această procedură folosește un formular distinct față de reînnoirea standard de CI — spune la ghișeu că vii pentru schimbarea domiciliului din străinătate în România.',
    ],
    estimatedWeeks: '1–6 săptămâni de la deplasare (CEI: ~5 zile calendaristice / CIS: ~30–45 zile)',
    estimatedAppointments: 'o singură deplasare în România · 1 vizită la SPCLEP pentru depunere · 1 vizită pentru ridicare',
    guideTitle: 'Ghid: Primul buletin românesc · Schimbare domiciliu din străinătate în România',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Documentele necesare', locked: false },
      { id: 2, label: 'Pregătește dovada de adresă', locked: false },
      { id: 3, label: 'Alege tipul de carte de identitate', locked: true },
      { id: 4, label: 'Planifică deplasarea și programarea', locked: true },
      { id: 5, label: 'Pregătire pentru ziua deplasării', locked: true },
      { id: 6, label: 'Ziua la SPCLEP', locked: true },
      { id: 7, label: 'Ridică buletinul', locked: true },
    ],
  },
  'buletin-de-primul-de-b': {
    title: 'Primul tău buletin românesc',
    subtitle: 'Ai certificatul de naștere transcris — acum poți obține Cartea Electronică de Identitate (CEI) la orice SPCLEP din România, indiferent de adresa de domiciliu.',
    warnings: [
      'Prezența fizică obligatorie în România — biometricele (fotografie, amprente, semnătură) se preiau exclusiv la ghișeu. Nu există procură pentru depunere.',
      'Ridicarea CEI este de asemenea personală — la ridicare stabilești tu PIN-urile cu aplicația MAI. Nu se poate ridica prin procură.',
      'Prima CEI este GRATUITĂ (14+ ani) până la 30 iunie 2026 prin PNRR. Plata de 70 lei intervine doar de la a doua emitere sau dacă solicitantul are sub 14 ani.',
      'Dovada rezidenței în Germania se acceptă direct în original: Anmeldung sau Meldebescheinigung, fără apostilă și fără traducere autorizată în română.',
      "CEI cu mențiunea 'fără domiciliu în România': dacă nu stabilești o adresă în RO, aceasta apare pe actul electronic. Poți stabili domiciliu la o rudă — comunică la ghișeu înainte de semnarea cererii.",
    ],
    estimatedWeeks: '1–2 săptămâni (din momentul sosirii în România)',
    estimatedAppointments: 'o singură deplasare în România · 1 vizită SPCLEP pentru depunere (cu programare prealabilă) · 1 vizită SPCLEP pentru ridicare',
    guideTitle: 'Primul buletin românesc · Germania',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Documentele necesare', locked: false },
      { id: 2, label: 'Pregătește documentele', locked: false },
      { id: 3, label: 'Creează cont și programează-te pe hub.mai.gov.ro', locked: true },
      { id: 4, label: 'Planifică deplasarea în România', locked: true },
      { id: 5, label: 'Ziua la SPCLEP — depunerea cererii', locked: true },
      { id: 6, label: 'Ridică CEI-ul și activează PIN-urile', locked: true },
    ],
  },
  'titlu-calatorie-urgenta-de': {
    title: 'Titlu de călătorie — urgență',
    subtitle: 'Nu mai ai act valabil și trebuie să ajungi în România în câteva zile. Titlul de călătorie se obține fără programare, gratuit, în aceeași zi la consulatul tău.',
    warnings: [
      'Titlul de călătorie este valabil EXCLUSIV pentru revenirea în România — expiră în momentul în care treci frontiera.',
      'Dacă documentul a fost FURAT: trebuie să declari furtul la poliția locală (Diebstahlsanzeige) ÎNAINTE de a merge la consulat. Fără adeverința poliției, titlul nu se eliberează.',
      'Odată în România, titlul de călătorie nu mai are nicio valabilitate. Trebuie să obții pașaport sau carte de identitate înainte de orice viitoare deplasare în afara țării.',
    ],
    estimatedWeeks: '1 zi lucrătoare',
    estimatedAppointments: 'o vizită la consulat · fără programare · eliberare în aceeași zi',
    guideTitle: 'Titlu de călătorie urgență · Germania',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Identifică documentele necesare', locked: false },
      { id: 2, label: 'Pregătește-te pentru consulat', locked: false },
      { id: 3, label: 'Mergi la consulat azi', locked: true },
      { id: 4, label: 'La ghișeu', locked: true },
      { id: 5, label: 'Ce faci după ce ajungi în România', locked: true },
    ],
  },
  'titlu-calatorie-de': {
    title: 'Titlu de călătorie — Germania',
    subtitle: 'Nu mai ai acte valide și trebuie să te întorci în România. Titlul de călătorie se obține direct la consulat, fără programare, de regulă în aceeași zi.',
    warnings: [
      'Titlul ÎȘI PIERDE VALABILITATEA la intrarea în România — nu poți reveni în Germania cu el. Trebuie să îți faci urgent un pașaport sau buletin nou în România.',
      'Dacă documentul a fost FURAT (nu expirat/pierdut), ai nevoie și de adeverință poliție. La München, Stuttgart și Berlin trebuie și traducere autorizată în română — pregătește-o înainte.',
    ],
    estimatedWeeks: '1–2 săptămâni',
    estimatedAppointments: 'o vizită la consulat (fără programare) · eliberare de regulă în aceeași zi',
    guideTitle: 'Titlu de călătorie · Germania · 1–2 săptămâni',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Documentele necesare', locked: false },
      { id: 2, label: 'Pregătește fotografiile', locked: false },
      { id: 3, label: 'Mergi la consulat', locked: true },
      { id: 4, label: 'Ridică titlul de călătorie', locked: true },
      { id: 5, label: 'Ce faci în România', locked: true },
    ],
  },
  'procura-vanzare-de': {
    title: 'Procură notarială pentru proprietate',
    subtitle: 'Ești în Germania și vrei să vinzi sau cumperi o proprietate în România fără să te deplasezi — împuternicești pe cineva din România să semneze în locul tău la notar.',
    warnings: [
      'Consulatul autentifică PROCURA — nu contractul de vânzare. Tranzacția propriu-zisă se semnează la notar în România, de către persoana pe care o împuternicești.',
      'Procura de vânzare TREBUIE să fie specială (nu generală). Procura generală nu este valabilă pentru transferul de proprietate.',
      'Dacă imobilul este bun comun (dobândit în căsătorie) — ambii soți trebuie să dea procura, fie împreună la același consulat, fie separat.',
      'Înainte de programare: contactează notarul din România care va instrumenta tranzacția și întreabă ce conținut exact trebuie să aibă procura.',
    ],
    estimatedWeeks: 'Procura = 1 zi · Tranzacția finală în România: depinde de notar și dosar',
    estimatedAppointments: '1 programare · o vizită la consulat · procura se ridică în aceeași zi',
    guideTitle: 'Procură de vânzare/cumpărare proprietate din Germania',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Adună documentele necesare', locked: false },
      { id: 2, label: 'Pregătește conținutul procurii', locked: false },
      { id: 3, label: 'Creează cererea pe econsulat.ro', locked: true },
      { id: 4, label: 'Obține programarea la consulat', locked: true },
      { id: 5, label: 'Pregătire pentru ziua programării', locked: true },
      { id: 6, label: 'Ziua consulatului — semnezi procura', locked: true },
      { id: 7, label: 'Trimite procura și coordonează cu notarul din România', locked: true },
    ],
  },
  'procura-mostenire-de': {
    title: 'Procură pentru moștenire în România',
    subtitle: 'Ești în Germania și vrei să împuternicești pe cineva să te reprezinte în succesiune, fără să mergi personal în România.',
    warnings: [
      'Conținutul procurii trebuie să se potrivească exact cu dosarul de succesiune și cu cerințele notarului din România. Dacă ai deja notar ales, cere-i înainte lista exactă de date.',
      'La Bonn, Stuttgart și Berlin, copia certificatului de deces trebuie pregătită înainte de programare. Actele de rudenie sau de calitate de moștenitor nu sunt cerute de consulat, dar rămân utile pentru notarul din România.',
    ],
    estimatedWeeks: '1–2 săptămâni',
    estimatedAppointments: 1,
    guideTitle: 'Ghid procură moștenire · Germania',
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
    title: 'Procură notarială — divorț, firmă sau cont bancar',
    subtitle: 'Îți împuternicești o persoană din România să acționeze în numele tău — fără să te deplasezi în țară.',
    warnings: [
      'Consulatele NU fac procedura de divorț. Pot autentifica procura pentru depunerea cererii de divorț la notar din România — sunt lucruri diferite.',
      'Conținutul exact al procurii trebuie stabilit în avans cu autoritatea sau notarul din România unde va fi folosită. Răspunderea pentru conținut incorect este exclusiv a ta.',
      'Dacă procura e pentru divorț notarial, succesiune sau vânzare prin mandatar: taxa de publicitate notarială de 3 euro se plătește după regula consulatului tău — Bonn = EC-Karte, München = numerar, Stuttgart = POS sau virament, Berlin = virament în avans.',
    ],
    estimatedWeeks: '1–2 săptămâni',
    estimatedAppointments: '1 programare · o vizită la consulat · procura se eliberează pe loc în aceeași zi',
    guideTitle: 'Procură notarială generală · Germania',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Documentele necesare', locked: false },
      { id: 2, label: 'Stabilește conținutul exact al procurii', locked: false },
      { id: 3, label: 'Plătește taxa de publicitate notarială (dacă e cazul)', locked: true },
      { id: 4, label: 'Cerere pe econsulat.ro', locked: true },
      { id: 5, label: 'Obține programarea', locked: true },
      { id: 6, label: 'Ziua consulatului — semnezi și ridici procura', locked: true },
      { id: 7, label: 'Trimite procura mandatarului în România', locked: true },
    ],
  },
  'transcriere-nastere-de': {
    title: 'Transcriere certificat de naștere german',
    subtitle: 'Copilul tău este născut în Germania. Ca să primească CNP și documente românești, nașterea trebuie înregistrată în registrele de stare civilă din România — prin consulat.',
    warnings: [
      'Dacă părinții s-au căsătorit în Germania și căsătoria NU este înregistrată în RO, trebuie transcrisă MAI ÎNTÂI — abia după poți depune cererea de naștere.',
      'Minorul sub 14 ani NU trebuie să fie prezent. Un singur părinte cetățean român este suficient.',
      'Minorul care a împlinit 14 ani vine personal la consulat, asistat de un părinte.',
    ],
    estimatedWeeks: '3–6 luni total cu programare și procesare',
    estimatedAppointments: '1 programare pentru depunere · 1 prezentare pentru ridicare (sau poștă la Stuttgart)',
    guideTitle: 'Transcriere naștere Germania → România',
    isRoute: false,
    previewSteps: [
      { id: 1, label: 'Documentele necesare', locked: false },
      { id: 2, label: 'Pregătește documentele', locked: false },
      { id: 3, label: 'Creează cererea pe econsulat.ro', locked: true },
      { id: 4, label: 'Obține programarea', locked: true },
      { id: 5, label: 'Pregătire pentru ziua programării', locked: true },
      { id: 6, label: 'Ziua consulatului', locked: true },
      { id: 7, label: 'Ridică certificatul românesc', locked: true },
    ],
  },
}

function cloneDiagnosticForCountry(base: DiagnosticData, country: CountryCode): DiagnosticData {
  return {
    ...base,
    title: localizeGuideTextForCountry(base.title, country),
    subtitle: localizeGuideTextForCountry(base.subtitle, country),
    guideTitle: localizeGuideTextForCountry(base.guideTitle, country),
    warnings: base.warnings.map((warning) => localizeGuideTextForCountry(warning, country)),
    routeSteps: base.routeSteps?.map((step) => ({
      ...step,
      guideId: country === 'it' ? convertGuideIdToItaly(step.guideId as GuideId) : step.guideId,
      title: localizeGuideTextForCountry(step.title, country),
      weeks: localizeGuideTextForCountry(step.weeks, country),
    })),
    previewSteps: base.previewSteps.map((step) => ({
      ...step,
      label: localizeGuideTextForCountry(step.label, country),
    })),
  }
}

Object.assign(diagnosticMap, {
  'pasaport-crds-it': cloneDiagnosticForCountry(diagnosticMap['pasaport-crds-de'], 'it'),
  'pasaport-crds-it-pierdut': cloneDiagnosticForCountry(diagnosticMap['pasaport-crds-de-pierdut'], 'it'),
  'pasaport-crds-nou-it': cloneDiagnosticForCountry(diagnosticMap['pasaport-crds-nou-de'], 'it'),
  'pasaport-minor-crds-it': {
    ...cloneDiagnosticForCountry(diagnosticMap['pasaport-minor-crds-de'], 'it'),
    warnings: [
      'Prezența minorului și a ambilor părinți este obligatorie la depunere. Dacă vine un singur părinte, ai nevoie de procură specială sau acord scris autentificat înainte de programare.',
      'Minorul poate obține pașaport CRDS numai dacă cel puțin un părinte are deja pașaport CRDS sau depune cerere simultan.',
      'Dacă minorul s-a născut în Italia și nu are certificat de naștere românesc, transcrierea trebuie făcută mai întâi.',
      'Trieste și Bari: termenul pentru pașapoarte minori este 2–3 luni.',
    ],
    estimatedWeeks: '7–10 săptămâni standard · 10–14 săptămâni Trieste și Bari',
    estimatedAppointments: '1 programare · 1 vizită la consulat',
    guideTitle: 'Pașaport copil CRDS — Italia',
  },
  'pasaport-it-cu-domiciliu': cloneDiagnosticForCountry(diagnosticMap['pasaport-de-cu-domiciliu'], 'it'),
  'pasaport-it-cu-domiciliu-pierdut': cloneDiagnosticForCountry(diagnosticMap['pasaport-de-cu-domiciliu-pierdut'], 'it'),
  'buletin-it-fara-domiciliu': cloneDiagnosticForCountry(diagnosticMap['buletin-de-fara-domiciliu'], 'it'),
  'buletin-it-cu-domiciliu': cloneDiagnosticForCountry(diagnosticMap['buletin-de-cu-domiciliu'], 'it'),
  'buletin-it-fara-domiciliu-pierdut': cloneDiagnosticForCountry(diagnosticMap['buletin-de-fara-domiciliu-pierdut'], 'it'),
  'buletin-it-cu-domiciliu-pierdut': cloneDiagnosticForCountry(diagnosticMap['buletin-de-cu-domiciliu-pierdut'], 'it'),
  'buletin-it-primul-it': cloneDiagnosticForCountry(diagnosticMap['buletin-de-primul-de'], 'it'),
  'buletin-it-primul-it-b': cloneDiagnosticForCountry(diagnosticMap['buletin-de-primul-de-b'], 'it'),
  'titlu-calatorie-urgenta-it': cloneDiagnosticForCountry(diagnosticMap['titlu-calatorie-urgenta-de'], 'it'),
  'titlu-calatorie-it': cloneDiagnosticForCountry(diagnosticMap['titlu-calatorie-de'], 'it'),
  'procura-vanzare-it': cloneDiagnosticForCountry(diagnosticMap['procura-vanzare-de'], 'it'),
  'procura-mostenire-it': cloneDiagnosticForCountry(diagnosticMap['procura-mostenire-de'], 'it'),
  'procura-generala-it': cloneDiagnosticForCountry(diagnosticMap['procura-generala-de'], 'it'),
  'transcriere-nastere-it': cloneDiagnosticForCountry(diagnosticMap['transcriere-nastere-de'], 'it'),
} satisfies Partial<Record<string, DiagnosticData>>)

// Date pentru Route-uri
const routeMap: Record<string, DiagnosticData> = {
  'route-a': {
    title: 'Primul pașaport · Născut în Germania',
    subtitle: 'Mai întâi transcrierea certificatului de naștere, apoi pașaportul',
    warnings: ['Nu poți solicita încă pașaportul. Mai întâi trebuie să transcrii certificatul de naștere în România și să obții CNP-ul, apoi continui cu ghidul de pașaport.'],
    estimatedWeeks: '3–6 luni total',
    estimatedAppointments: 2,
    guideTitle: '',
    isRoute: true,
    routeSteps: [
      { guideId: 'transcriere-nastere-de', title: 'Ghid A: Transcriere certificat de naștere', weeks: 'pasul obligatoriu 1 · ~3–6 luni' },
      { guideId: 'pasaport-crds-nou-de', title: 'Ghid B: Primul pașaport CRDS (după transcriere)', weeks: 'pasul 2 · ~6–8 săptămâni' },
    ],
    previewSteps: [],
  },
  'route-b': {
    title: 'Primul buletin · Născut în Germania',
    subtitle: 'Mai întâi transcrierea certificatului de naștere, apoi primul buletin',
    warnings: ['Nu poți solicita încă buletinul. Mai întâi trebuie să transcrii certificatul de naștere în România și să obții CNP-ul, apoi continui cu ghidul pentru primul buletin.'],
    estimatedWeeks: '3–6 luni total',
    estimatedAppointments: 2,
    guideTitle: '',
    isRoute: true,
    routeSteps: [
      { guideId: 'transcriere-nastere-de', title: 'Ghid A: Transcriere certificat de naștere', weeks: 'pasul obligatoriu 1 · ~3–6 luni' },
      { guideId: 'buletin-de-primul-de-b', title: 'Ghid B: Primul buletin (după transcriere)', weeks: 'pasul 2 · după obținerea certificatului românesc și a CNP-ului' },
    ],
    previewSteps: [],
  },
}

Object.assign(routeMap, {
  'route-a-it': cloneDiagnosticForCountry({
    ...routeMap['route-a'],
    routeSteps: routeMap['route-a'].routeSteps?.map((step) => ({
      ...step,
      guideId: convertGuideIdToItaly(step.guideId as GuideId),
    })),
  }, 'it'),
  'route-b-it': cloneDiagnosticForCountry({
    ...routeMap['route-b'],
    routeSteps: routeMap['route-b'].routeSteps?.map((step) => ({
      ...step,
      guideId: convertGuideIdToItaly(step.guideId as GuideId),
    })),
  }, 'it'),
} satisfies Partial<Record<string, DiagnosticData>>)

const BULETIN_COMMON_WARNING_RIDICARE =
  'Regulă comună pentru ghidurile de buletin: la CEI ridicarea este personală și activezi PIN-urile la ridicare; la CIS poți organiza ridicarea prin procură specială notarială.'

const BULETIN_COMMON_WARNING_REZIDENTA_DE =
  'Când ghidul cere dovada rezidenței în Germania, Anmeldung sau Meldebescheinigung se acceptă în original, fără apostilă și fără traducere autorizată în română.'

function getDiagnosticWarnings(
  guideId: GuideId | null,
  problemType: ProblemType | null,
  baseWarnings: string[],
  consulate: ConsulateId | null | undefined
) {
  const extra: string[] = []
  const country = getGuideCountryCode(guideId)

  if (problemType === 'buletin') {
    extra.push(BULETIN_COMMON_WARNING_RIDICARE)
  }

  if (
    guideId === 'buletin-de-primul-de' ||
    guideId === 'buletin-de-primul-de-b' ||
    guideId === 'buletin-it-primul-it' ||
    guideId === 'buletin-it-primul-it-b'
  ) {
    extra.push(country === 'it'
      ? 'Când ghidul cere dovada rezidenței în Italia, certificato di residenza, carta d’identità italiană sau permesso di soggiorno se acceptă în original, fără apostilă și fără traducere autorizată în română.'
      : BULETIN_COMMON_WARNING_REZIDENTA_DE)
  }

  const rawWarnings = [...baseWarnings, ...extra.filter((item) => !baseWarnings.includes(item))]

  return rawWarnings.flatMap((warning) => {
    const personalized = personalizeGuideText(warning, consulate ?? null)
    return personalized ? [personalized] : []
  })
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

function getEmotionalCopy(
  guideId: GuideId | null,
  problemType: ProblemType | null,
  routeId?: string
): { title: string; subtitle: string } {
  const country = getGuideCountryCode(guideId)
  const localize = (title: string, subtitle: string) => ({
    title: localizeGuideTextForCountry(title, country),
    subtitle: localizeGuideTextForCountry(subtitle, country),
  })

  if (routeId === 'route-a' || routeId === 'route-a-it') {
    return localize(
      'Primul pașaport românesc vine în 2 pași — îți arătăm ordinea corectă.',
      'Mai întâi transcrierea certificatului de naștere, apoi pașaportul. Ai mai jos ambele ghiduri, în ordinea corectă.'
    )
  }

  if (routeId === 'route-b' || routeId === 'route-b-it') {
    return localize(
      'Primul tău buletin românesc vine în 2 pași — îți arătăm ordinea corectă.',
      'Mai întâi transcrierea certificatului de naștere, apoi ghidul pentru primul buletin. Ai mai jos ambele ghiduri, în ordinea corectă.'
    )
  }

  if (guideId === 'pasaport-crds-nou-de' || guideId === 'pasaport-crds-nou-it') {
    return localize('Primul tău pașaport din Germania — iată exact ce trebuie să faci.', 'Ghidul tău e personalizat pentru situația ta exactă — nu o listă generică.')
  }

  if (guideId === 'pasaport-minor-crds-de' || guideId === 'pasaport-minor-crds-it') {
    return localize('Pașaportul copilului se rezolvă — iată pașii corecți pentru consulat.', 'Îți arătăm exact ce pregătești pentru minor, pentru părinți și pentru ziua programării.')
  }

  if (guideId === 'pasaport-crds-de-pierdut' || guideId === 'pasaport-crds-it-pierdut') {
    return localize('Pașaportul CRDS pierdut sau furat se rezolvă — iată exact pașii.', 'Îți arătăm exact ce pregătești pentru consulat și ce se completează direct la ghișeu.')
  }

  if (guideId === 'buletin-de-primul-de' || guideId === 'buletin-de-primul-de-b' || guideId === 'buletin-it-primul-it' || guideId === 'buletin-it-primul-it-b') {
    return localize('Primul tău buletin românesc se rezolvă — ghid exact pentru situația ta.', 'Ghidul tău e personalizat pentru situația ta exactă — nu o listă generică.')
  }

  if (
    guideId === 'buletin-de-fara-domiciliu-pierdut' ||
    guideId === 'buletin-de-cu-domiciliu-pierdut'
  ) {
    return {
      title: 'Buletinul lipsă se rezolvă — iată exact pașii pentru situația ta.',
      subtitle: 'Ghidul tău e personalizat pentru situația ta exactă — nu o listă generică.',
    }
  }

  if (guideId === 'titlu-calatorie-de' || guideId === 'titlu-calatorie-it') {
    return localize(
      'Te întorci în România cu titlul de călătorie — iată pașii corecți.',
      'Ghidul tău e personalizat pentru situația ta exactă — nu o listă generică.'
    )
  }

  if (guideId === 'procura-mostenire-de' || guideId === 'procura-mostenire-it') {
    return localize(
      'Moștenirea se poate mișca și din străinătate — iată procura corectă.',
      'Îți arătăm exact ce pregătești înainte de consulat și ce trimiți notarului din România.'
    )
  }

  if (guideId === 'procura-vanzare-de' || guideId === 'procura-vanzare-it') {
    return localize(
      'Tranzacția se poate face și din străinătate — iată procura corectă.',
      'Îți arătăm exact ce pregătești, ce trebuie să conțină procura și ce verifici cu notarul din România.'
    )
  }

  if (guideId === 'procura-generala-de' || guideId === 'procura-generala-it') {
    return localize(
      'Procura se face din străinătate — important e să fie redactată corect.',
      'Îți arătăm exact ce pregătești, când se aplică taxa de registru și ce limite ai pentru divorț, firmă sau bancă.'
    )
  }

  if (guideId === 'transcriere-nastere-de' || guideId === 'transcriere-nastere-it') {
    return {
      title: 'Transcrierea nașterii se face prin consulat — iată ordinea corectă.',
      subtitle: 'Îți arătăm exact ce documente pregătești, cum faci cererea și când ridici certificatul românesc cu CNP.',
    }
  }

  switch (problemType) {
    case 'pasaport':
      return localize('Pașaportul expirat te ține pe loc — rezolvăm corect, din prima.', 'Ghidul tău e personalizat pentru situația ta exactă — nu o listă generică.')
    case 'buletin':
      return localize('Buletinul expirat se rezolvă — ghid exact pentru situația ta.', 'Ghidul tău e personalizat pentru situația ta exactă — nu o listă generică.')
    case 'titlu-calatorie':
      return localize('Titlul de călătorie te aduce acasă — îți arătăm exact pașii.', 'Ghidul tău e personalizat pentru situația ta exactă — nu o listă generică.')
    case 'procura':
      return localize('Procura notarială din Germania — fără drumuri în România.', 'Ghidul tău e personalizat pentru situația ta exactă — nu o listă generică.')
    case 'transcriere-nastere':
      return localize('Transcrierea certificatului de naștere este primul pas corect.', 'Îți arătăm exact cum obții certificatul românesc și CNP-ul copilului.')
    default:
      return localize('Am înțeles. Îți arătăm exact ce ai de făcut.', 'Ghidul tău e personalizat pentru situația ta exactă — nu o listă generică.')
  }
}

function getBadgeText(
  guideId: GuideId | null,
  estimatedWeeks: string,
  estimatedAppointments: number | string,
  consulate: ConsulateId | null | undefined
) {
  if (typeof estimatedAppointments === 'string') {
    return `⏱ ${estimatedAppointments} · ${estimatedWeeks}`
  }

  switch (guideId) {
    case 'pasaport-crds-de':
    case 'pasaport-crds-it':
      return '⏱ o singură vizită la consulat · 6–8 săptămâni'
    case 'pasaport-crds-de-pierdut':
    case 'pasaport-crds-it-pierdut':
      return '⏱ o singură vizită la consulat · 6–10 săptămâni'
    case 'pasaport-crds-nou-de':
    case 'pasaport-crds-nou-it':
      return '⏱ o singură vizită la consulat · 8–10 săptămâni'
    case 'pasaport-minor-crds-de':
    case 'pasaport-minor-crds-it':
      return '⏱ o singură vizită la consulat · 8–12 săptămâni'
    case 'pasaport-de-cu-domiciliu':
    case 'pasaport-de-cu-domiciliu-pierdut':
    case 'pasaport-it-cu-domiciliu':
    case 'pasaport-it-cu-domiciliu-pierdut':
      return '⏱ o singură vizită la consulat · 4–6 săptămâni'
    case 'buletin-de-fara-domiciliu':
    case 'buletin-de-fara-domiciliu-pierdut':
    case 'buletin-it-fara-domiciliu':
    case 'buletin-it-fara-domiciliu-pierdut':
      return '⏱ o singură deplasare în România · 3–5 săptămâni'
    case 'buletin-de-cu-domiciliu':
    case 'buletin-de-cu-domiciliu-pierdut':
    case 'buletin-it-cu-domiciliu':
    case 'buletin-it-cu-domiciliu-pierdut':
      return '⏱ o singură deplasare în România · 2–4 săptămâni'
    case 'procura-vanzare-de':
    case 'procura-vanzare-it':
      return '⏱ 1 programare · o singură vizită la consulat · procura în aceeași zi'
    case 'procura-mostenire-de':
    case 'procura-generala-de':
    case 'procura-mostenire-it':
    case 'procura-generala-it':
      return '⏱ o singură vizită la consulat · 1–2 săptămâni'
    case 'titlu-calatorie-urgenta-de':
      return '⏱ o vizită la consulat · fără programare · aceeași zi'
    case 'titlu-calatorie-urgenta-it':
      return `⏱ o vizită la consulat · ${getTravelBadgeSummary(consulate ?? null, true)}`
    case 'titlu-calatorie-de':
      return '⏱ o vizită la consulat · fără programare · aceeași zi în majoritatea cazurilor'
    case 'titlu-calatorie-it':
      return `⏱ o vizită la consulat · ${getTravelBadgeSummary(consulate ?? null, false)}`
    case 'transcriere-nastere-de':
    case 'transcriere-nastere-it':
      return getBirthPostalRule(consulate ?? null)
        ? '⏱ 1 programare pentru depunere · 1 ridicare sau poștă · ~3–6 luni total'
        : '⏱ 1 programare pentru depunere · 1 ridicare · ~3–6 luni total'
    default:
      return `⏱ ${estimatedAppointments === 1 ? 'o singură vizită' : `${estimatedAppointments} deplasări`} · ${estimatedWeeks}`
  }
}

function getActRow(guideId: GuideId | null, problemType: ProblemType | null, isPrimulPasaport?: boolean) {
  if (guideId === 'transcriere-nastere-de' || guideId === 'transcriere-nastere-it') {
    return {
      icon: '🍼',
      title: 'Stare civilă românească',
      subtitle: guideId === 'transcriere-nastere-it'
        ? 'Transcriere naștere Italia → România'
        : 'Transcriere naștere Germania → România',
    }
  }

  if (
    guideId === 'buletin-de-primul-de' ||
    guideId === 'buletin-de-primul-de-b' ||
    guideId === 'buletin-it-primul-it' ||
    guideId === 'buletin-it-primul-it-b'
  ) {
    return {
      icon: '🪪',
      title: 'Carte de identitate',
      subtitle: 'Primul buletin românesc',
    }
  }

  if (problemType === 'pasaport') {
    if (guideId === 'pasaport-minor-crds-de' || guideId === 'pasaport-minor-crds-it') {
      return {
        icon: '🧒',
        title: 'Pașaport CRDS pentru minor',
        subtitle: guideId === 'pasaport-minor-crds-it'
          ? 'Prim pașaport sau reînnoire pentru copil cu domiciliu în Italia'
          : 'Prim pașaport sau reînnoire pentru copil cu domiciliu în Germania',
      }
    }

    if (guideId === 'pasaport-crds-de-pierdut') {
      return {
        icon: '📕',
        title: 'Pașaport CRDS',
        subtitle: 'Pierdut / furat',
      }
    }

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
      : 'Divorț / firmă / cont bancar',
  }
}

function getDiagnosticValueCopy(
  guideId: GuideId | null,
  problemType: ProblemType | null,
  guideTitle: string
) {
  const country = getGuideCountryCode(guideId)
  const localizeValue = (value: { benefits: string[]; paidTitle: string; paidSubtitle: string }) => ({
    benefits: value.benefits.map((item) => localizeGuideTextForCountry(item, country)),
    paidTitle: localizeGuideTextForCountry(value.paidTitle, country),
    paidSubtitle: localizeGuideTextForCountry(value.paidSubtitle, country),
  })

  if (guideId === 'transcriere-nastere-de' || guideId === 'transcriere-nastere-it') {
    return localizeValue({
      benefits: [
        'lista exactă de acte pentru transcriere și excepțiile importante pe care să nu le ratezi',
        'toți pașii în ordinea corectă pentru cerere, programare și ridicare',
        'cum continui apoi cu pașaportul sau primul buletin al copilului',
      ],
      paidTitle: 'Deblochez ghidul complet pentru transcriere pentru 9,99€ →',
      paidSubtitle: 'ghidul complet, lista de acte, progresul pe pași și ce urmează după certificatul românesc',
    })
  }

  if (problemType === 'pasaport') {
    return localizeValue({
      benefits: [
        `lista exactă de acte pentru ${guideTitle.toLowerCase() || 'situația ta'} și consulatul tău`,
        'toți pașii în ordine, fără să ghicești ce urmează după primii 2 pași',
        'ce alegi pe econsulat și ce faci la ghișeu, în cazul tău exact',
      ],
      paidTitle: 'Deblochez ghidul complet pentru pașaport pentru 9,99€ →',
      paidSubtitle: 'ghidul complet, lista de acte, progresul pe pași și accesul personal pe email',
    })
  }

  if (problemType === 'buletin') {
    return localizeValue({
      benefits: [
        `lista exactă de acte pentru ${guideTitle.toLowerCase() || 'situația ta'} și tipul tău de domiciliu`,
        'toți pașii în ordine, inclusiv deplasarea, depunerea și ridicarea',
        'ce faci diferit dacă buletinul e expirat, pierdut sau este primul tău act românesc',
      ],
      paidTitle: 'Deblochez ghidul complet pentru buletin pentru 9,99€ →',
      paidSubtitle: 'ghidul complet, lista de acte, progresul pe pași și planul complet pentru România',
    })
  }

  if (problemType === 'titlu-calatorie') {
    return localizeValue({
      benefits: [
        `lista exactă de acte pentru ${guideTitle.toLowerCase() || 'situația ta'} și mersul la consulat`,
        'toți pașii în ordine pentru urgență, fără să pierzi timpul cu acte inutile',
        'ce faci imediat după întoarcerea în România ca să nu rămâi iar fără acte',
      ],
      paidTitle: 'Deblochez ghidul complet pentru titlul de călătorie pentru 9,99€ →',
      paidSubtitle: 'ghidul complet, lista de acte, progresul pe pași și ce rezolvi după urgență',
    })
  }

  if (problemType === 'procura') {
    return localizeValue({
      benefits: [
        `lista exactă de acte pentru ${guideTitle.toLowerCase() || 'situația ta'} și programarea la consulat`,
        'toți pașii în ordine, de la pregătirea conținutului până la trimiterea procurii în România',
        'ce verifici înainte cu notarul, banca sau autoritatea care va folosi procura',
      ],
      paidTitle: 'Deblochez ghidul complet pentru procură pentru 9,99€ →',
      paidSubtitle: 'ghidul complet, lista de acte, progresul pe pași și ce trimiți mai departe în România',
    })
  }

  return localizeValue({
    benefits: [
      `lista exactă de acte pentru ${guideTitle.toLowerCase() || 'situația ta'}`,
      'toți pașii în ordine, fără să ghicești ce urmează',
      'ce alegi și ce faci mai departe în cazul tău exact',
    ],
    paidTitle: 'Deblochez ghidul complet pentru 9,99€ →',
    paidSubtitle: 'ghidul complet, lista de acte, progresul pe pași și accesul personal pe email',
  })
}

function getFeeInfo(
  guideId: GuideId | null,
  problemType: ProblemType | null,
  consulateName: string,
  paymentMethod?: string
): { title: string; subtitle: string } | null {
  if (!guideId || !problemType) return null

  if (problemType === 'titlu-calatorie') {
    return {
      title: 'Taxă: gratuit',
      subtitle: 'Titlul de călătorie se eliberează fără taxă consulară',
    }
  }

  if (guideId === 'transcriere-nastere-de' || guideId === 'transcriere-nastere-it') {
    return {
      title: 'Taxă: gratuit',
      subtitle: guideId === 'transcriere-nastere-it'
        ? 'Transcrierea certificatului de naștere este, de regulă, gratuită în Italia, dar unele consulate cer confirmare directă.'
        : 'Transcrierea certificatului de naștere este gratuită la toate consulatele din Germania',
    }
  }

  if (problemType === 'pasaport' && paymentMethod) {
    return {
      title: `Taxă: 53€ — ${getPaymentLabel(paymentMethod)}`,
      subtitle: getPaymentSubtitle(consulateName, paymentMethod),
    }
  }

  return null
}

function getPhotoInfo(
  guideId: GuideId | null,
  problemType: ProblemType | null,
  consulate?: ReturnType<typeof getConsulateById> | null
): { title: string; subtitle: string } | null {
  if (!guideId || !problemType || !consulate) return null

  if (problemType === 'pasaport') {
    if (
      guideId === 'pasaport-crds-de' ||
      guideId === 'pasaport-crds-it' ||
      guideId === 'pasaport-crds-de-pierdut' ||
      guideId === 'pasaport-crds-it-pierdut' ||
      guideId === 'pasaport-crds-nou-de' ||
      guideId === 'pasaport-crds-nou-it' ||
      guideId === 'pasaport-minor-crds-de' ||
      guideId === 'pasaport-minor-crds-it'
    ) {
      return {
        title: 'Fotografia se preia la ghișeu',
        subtitle: guideId === 'pasaport-minor-crds-it'
          ? 'Pentru pașapoartele CRDS din Italia, fotografia se preia la ghișeu la toate consulatele'
          : 'Pentru pașapoartele CRDS nu trebuie să aduci fotografii proprii la niciunul dintre cele 4 consulate',
      }
    }

    return {
      title: consulate.fotografiiLaGhiseu ? 'Fotografii — se fac la consulat' : 'Fotografii biometrice necesare',
      subtitle: consulate.fotografiiLaGhiseu
        ? 'Nu trebuie să aduci poze de acasă'
        : 'Vino cu fotografiile pregătite înainte de programare',
    }
  }

  if (problemType === 'titlu-calatorie') {
    if (consulate.id === 'roma' || consulate.id === 'torino' || consulate.id === 'trieste' || consulate.id === 'bari' || consulate.id === 'catania' || consulate.id === 'milano' || consulate.id === 'bologna') {
      return {
        title: 'Fotografia depinde de consulat și de vârsta minorului',
        subtitle: localizeGuideTextForCountry(getTravelPhotoRule(consulate.id), 'it'),
      }
    }
    if (consulate.id === 'muenchen') {
      return {
        title: 'Fotografii biometrice necesare',
        subtitle: 'La München trebuie să vii cu 2 fotografii biometrice tipărite',
      }
    }

    if (consulate.id === 'stuttgart') {
      return {
        title: 'Fotografia depinde de vârstă',
        subtitle: 'Adulții fac poza la ghișeu; sub 14 ani au nevoie de 1 fotografie pe hârtie',
      }
    }

    return {
      title: 'Fotografia se preia la ghișeu',
      subtitle: 'Nu trebuie să aduci fotografii proprii',
    }
  }

  return null
}

function getContextRow(
  guideId: GuideId | null,
  problemType: ProblemType | null,
  hasDomiciliuRO?: boolean
): { icon: string; title: string; subtitle: string } | null {
  if (!guideId || !problemType) return null

  if (problemType === 'buletin') {
    if (guideId === 'buletin-de-primul-de' || guideId === 'buletin-it-primul-it') {
      return {
        icon: '🏠',
        title: guideId === 'buletin-it-primul-it' ? 'Domiciliu în Italia → România' : 'Domiciliu în Germania → România',
        subtitle: 'Depui doar la SPCLEP-ul competent pentru adresa pe care o alegi ca domiciliu',
      }
    }

    if (guideId === 'buletin-de-primul-de-b' || guideId === 'buletin-it-primul-it-b') {
      return {
        icon: '🏠',
        title: guideId === 'buletin-it-primul-it-b' ? 'Rezidență Italia · CEI în România' : 'Rezidență Germania · CEI în România',
        subtitle: 'Poți depune la orice SPCLEP din România, cu programare activă pe hub.mai.gov.ro',
      }
    }

    return {
      icon: '🏠',
      title: hasDomiciliuRO ? 'Domiciliu în România' : `Domiciliu în ${getCountryLabel(getGuideCountryCode(guideId))}`,
      subtitle: hasDomiciliuRO
        ? 'Cererea se depune personal la SPCLEP-ul competent'
        : 'Trebuie să te prezinți personal în România pentru depunere',
    }
  }

  if (problemType === 'pasaport') {
    return {
      icon: '🏠',
      title: hasDomiciliuRO ? 'Domiciliu în România' : `Domiciliu în ${getCountryLabel(getGuideCountryCode(guideId))}`,
      subtitle: hasDomiciliuRO ? 'Ai adresă activă în România' : 'Fără adresă activă în România',
    }
  }

  return null
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
  consulateId?: ConsulateId
}) {
  const actRow = getActRow(guideId, problemType, isPrimulPasaport)
  const country = getGuideCountryCode(guideId)
  const regionName = bundesland
    ? getRegionOptionsByCountry(country).find((item) => item.code === bundesland)?.name ?? 'Regiune nespecificată'
    : 'Regiune nespecificată'
  const consulate = consulateId ? getConsulateById(consulateId) : null
  const consulateShortName = consulateId
    ? {
        muenchen: 'München',
        bonn: 'Bonn',
        stuttgart: 'Stuttgart',
        berlin: 'Berlin',
        roma: 'Roma',
        milano: 'Milano',
        bologna: 'Bologna',
        torino: 'Torino',
        trieste: 'Trieste',
        bari: 'Bari',
        catania: 'Catania',
      }[consulateId]
    : 'Consulat nespecificat'
  const feeInfo = getFeeInfo(guideId, problemType, consulateShortName ?? 'Consulat', consulate?.paymentMethod)
  const photoInfo = getPhotoInfo(guideId, problemType, consulate)

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

      {getContextRow(guideId, problemType, hasDomiciliuRO) && (
        <div className="flex items-center gap-3">
          <span className="text-xl">{getContextRow(guideId, problemType, hasDomiciliuRO)?.icon}</span>
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {getContextRow(guideId, problemType, hasDomiciliuRO)?.title}
            </p>
            <p className="text-xs text-gray-500">
              {getContextRow(guideId, problemType, hasDomiciliuRO)?.subtitle}
            </p>
          </div>
        </div>
      )}

      {problemType !== 'buletin' && (
        <div className="flex items-center gap-3">
          <span className="text-xl">📍</span>
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {regionName} → {consulateShortName}
            </p>
            <p className="text-xs text-gray-500">{consulate?.address ?? 'Adresa consulatului va fi confirmată în ghid'}</p>
          </div>
        </div>
      )}

      {feeInfo && (
        <div className="flex items-center gap-3">
          <span className="text-xl">💶</span>
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {feeInfo.title}
            </p>
            <p className="text-xs text-gray-500">
              {feeInfo.subtitle}
            </p>
          </div>
        </div>
      )}

      {photoInfo && (
        <div className="flex items-center gap-3">
          <span className="text-xl">📸</span>
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {photoInfo.title}
            </p>
            <p className="text-xs text-gray-500">
              {photoInfo.subtitle}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

function DiagnosticResult({ data, sessionId }: { data: DiagnosticData; sessionId: string }) {
  const router = useRouter()
  const { wizardResult, problemType, guideId, situation } = useAppStore()
  const [visible, setVisible] = useState(0)
  const emotionalCopy = getEmotionalCopy(
    guideId,
    problemType,
    wizardResult?.type === 'route' ? wizardResult.routeId : undefined
  )
  const resolvedWarnings = getDiagnosticWarnings(guideId, problemType, data.warnings, situation.consulate)
  const valueCopy = getDiagnosticValueCopy(guideId, problemType, data.guideTitle)

  // Reveal progresiv — câte o secțiune la 150ms
  useEffect(() => {
    if (visible < 5) {
      const t = setTimeout(() => setVisible((v) => v + 1), 150)
      return () => clearTimeout(t)
    }
  }, [visible])

  const handleFree = () => {
    trackEvent('diagnostic_cta_free_click', withAttribution({
      guide_id: guideId ?? undefined,
      route_id: wizardResult?.type === 'route' ? wizardResult.routeId : undefined,
      result_type: wizardResult?.type ?? undefined,
      problem_type: problemType ?? undefined,
    }))
    router.push(`/ghid?session=${sessionId}`)
  }
  const handlePaid = () => {
    trackEvent('diagnostic_cta_paid_click', withAttribution({
      guide_id: guideId ?? undefined,
      route_id: wizardResult?.type === 'route' ? wizardResult.routeId : undefined,
      result_type: wizardResult?.type ?? undefined,
      problem_type: problemType ?? undefined,
    }))
    router.push(`/paywall?session=${sessionId}`)
  }
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
      {visible >= 2 && resolvedWarnings.length > 0 && (
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 animate-fadeIn">
          <div className="text-xs font-bold text-orange-700 uppercase tracking-wide mb-2">
            De știut în cazul tău
          </div>
          {resolvedWarnings.map((w, i) => (
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
            {getBadgeText(guideId, data.estimatedWeeks, data.estimatedAppointments, situation.consulate)}
          </span>
        </div>
      )}

      {visible >= 3 && !data.isRoute && (
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 animate-fadeIn">
          <div className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">
            Ce primești dacă mergi mai departe
          </div>
          <div className="space-y-2">
            {valueCopy.benefits.map((benefit) => (
              <div key={benefit} className="flex gap-2 text-sm text-gray-700">
                <span className="text-green-500">✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
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
            Văd primii 2 pași gratuit →
          </button>
          <p className="text-center text-xs text-gray-400 mt-2">
            Vezi imediat cum începi · fără plată
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
            {valueCopy.paidTitle}
          </button>
          <div className="rounded-xl border border-green-100 bg-green-50 px-4 py-3">
            <p className="text-sm font-semibold text-green-900">
              Primești imediat după plată
            </p>
            <p className="mt-1 text-xs leading-relaxed text-green-800">
              {valueCopy.paidSubtitle}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

function DiagnosticPageContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session') ?? ''
  const { guideId, wizardResult, problemType, situation } = useAppStore()
  const [showResult, setShowResult] = useState(false)

  // Determină datele diagnosticului
  let diagnosticData: DiagnosticData | null = null
  if (wizardResult?.type === 'route') {
    diagnosticData = routeMap[wizardResult.routeId] ?? null
  } else if (guideId) {
    diagnosticData = diagnosticMap[guideId] ?? null
  }

  useEffect(() => {
    persistAttribution(searchParams)
  }, [searchParams])

  useEffect(() => {
    if (!showResult || !diagnosticData) return

    trackOnce(
      `diagnostic_view:${sessionId || guideId || wizardResult?.type || 'unknown'}`,
      'diagnostic_view',
      withAttribution({
        problem_type: problemType ?? undefined,
        guide_id: guideId ?? undefined,
        route_id: wizardResult?.type === 'route' ? wizardResult.routeId : undefined,
        result_type: wizardResult?.type ?? undefined,
        bundesland: situation.bundesland ?? undefined,
        consulate: situation.consulate ?? undefined,
      }, searchParams)
    )
  }, [showResult, diagnosticData, sessionId, guideId, wizardResult, problemType, situation, searchParams])

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
      <div className="max-w-2xl mx-auto w-full px-5 py-8 flex-1">
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

export default function DiagnosticPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-white flex flex-col">
        <SiteHeader />
        <div className="max-w-2xl mx-auto w-full px-5 py-8 flex-1" />
      </main>
    }>
      <DiagnosticPageContent />
    </Suspense>
  )
}
