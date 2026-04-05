import type { GuideId } from '@/types'

export type FreeBlockType = 'info' | 'warning' | 'tip' | 'action'

export type FreeStep = {
  id: number
  title: string
  blocks: { text: string; type: FreeBlockType }[]
}

export type GhidFreeContent = {
  title: string
  meta: { free: string; total: string }
  steps: FreeStep[]
  paywallTeaser: string[]
  totalSteps: number
  lockedSteps: { id: number; title: string }[]
}

export const ghidFreeMap: Record<GuideId, GhidFreeContent> = {
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
      'Checklist downloadabil + Tracker dosar',
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
  'buletin-de-cu-domiciliu-pierdut': {
    title: 'Ghid buletin pierdut · Domiciliu activ RO',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Din septembrie 2025, buletinul necesită prezența ta fizică în România. Procura nu mai funcționează.', type: 'warning' },
          { text: 'Certificat de naștere românesc — original.', type: 'info' },
          { text: 'Pașaport valabil — original. Funcționarul SPCLEP are nevoie de un document cu fotografie pentru identificare.', type: 'info' },
          { text: 'Extras de carte funciară — max 30 de zile. Obții online pe epay.ancpi.ro (~20 RON, PDF cu semnătură digitală, acceptat la SPCLEP).', type: 'info' },
          { text: 'Dacă a fost PIERDUT: declarație pe proprie răspundere — se completează la SPCLEP.', type: 'info' },
          { text: 'Dacă a fost FURAT: raportezi la poliția germană în 24h (obligație legală). Sesizarea NU e document SPCLEP.', type: 'warning' },
          { text: 'Fotografii proprii nu sunt necesare — fotografia se face biometric la ghișeul SPCLEP.', type: 'tip' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Ai obligația legală să soliciți buletin nou în 15 zile de la constatarea lipsei. Ia în calcul deplasarea din Germania.', type: 'warning' },
          { text: 'Obții extrasul CF cât mai aproape de data deplasării — valabil max 30 zile de la emitere.', type: 'action' },
          { text: 'Taxa: 70 RON pentru CEI (gratuit prima dată, până 30 iun 2026) / 40 RON pentru CIS. Se plătește la CEC Bank sau SelfPay — nu la SPCLEP.', type: 'info' },
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
      'Cum alegi între CEI și CIS — ce contează pentru tine',
      'Cum identifici SPCLEP-ul și dacă are programare online',
      'Pas cu pas la ghișeu: fotografiere biometrică, plată, recipisă',
      'Cum ridici CIS prin procură dacă nu poți rămâne în România',
      'Checklist downloadabil + Tracker dosar',
    ],
  },
  'buletin-de-primul-de': {
    title: 'Ghid: Primul buletin românesc · Schimbare domiciliu din străinătate',
    meta: { free: '2 pași gratuiți', total: '7 pași total' },
    totalSteps: 7,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Certificat de naștere românesc — original ✅', type: 'info' },
          { text: 'Certificatele plastifiate, rupte, pătate sau corectate sunt nule de drept. Dacă al tău e deteriorat, solicită un duplicat de la serviciul de stare civilă al județului unde ai fost înregistrat la naștere, înainte de deplasare. ✅', type: 'warning' },
          { text: 'Pașaportul românesc valabil sau expirat — original ✅. Acesta este obligatoriu pentru procedura de schimbare domiciliu din străinătate în România.', type: 'info' },
          { text: 'Dacă nu ai pașaport românesc deloc, ai nevoie de certificatul de cetățenie română — eliberat de Autoritatea Națională pentru Cetățenie sau de la consulatul României din Germania. ⚠️ Verifică în avans termenele de eliberare.', type: 'warning' },
          { text: 'Actul de identitate german (Personalausweis) sau pașaportul german — original ✅. Se prezintă alături de documentele românești.', type: 'info' },
          { text: 'Dovada adresei de domiciliu în România — original ✅. Vezi Pasul 2 pentru opțiuni detaliate.', type: 'info' },
          { text: 'Nu trebuie să aduci fotografii — imaginea facială și amprentele digitale se preiau biometric la ghișeul SPCLEP. ✅', type: 'info' },
          { text: 'Certificat de căsătorie românesc — original · doar dacă ești căsătorit/ă ȘI ți-ai schimbat numele prin căsătorie ✅. Certificatele de stare civilă trebuie să fie emise de autoritățile române — dacă certificatul de căsătorie e german, acesta trebuie transcris în prealabil în Registrul de Stare Civilă din România. ✅', type: 'info' },
          { text: 'Taxa: CEI este GRATUITĂ la prima eliberare pentru cetățeni 14+ (finanțare PNRR, valabilă până la 30 iunie 2026) ✅. CIS costă 40 RON indiferent de situație. ✅ Plata se face exclusiv la CEC Bank sau automate SelfPay — nu la ghișeul SPCLEP. ✅', type: 'info' },
          { text: 'Dacă aplici după 30 iunie 2026, prima CEI va costa 70 RON. Planifică deplasarea înainte de această dată pentru a beneficia de gratuitate. ✅', type: 'warning' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește dovada de adresă',
        blocks: [
          { text: 'Fără o adresă de domiciliu în România, cererea nu poate fi depusă. Stabilirea domiciliului și cererea pentru CI se fac simultan, în aceeași vizită la SPCLEP. ✅', type: 'warning' },
          { text: 'Opțiunea 1 — Proprietate proprie: actul de proprietate (titlu de proprietate, contract de vânzare-cumpărare autentificat, sau extras de carte funciară — nu mai vechi de 30 de zile) — original. ✅', type: 'info' },
          { text: 'Opțiunea 2 — Adresa unui familiar sau prieten din România: proprietarul vine cu tine la SPCLEP și semnează declarația de primire în spațiu direct în fața funcționarului, prezentând actul de proprietate și CI-ul propriu. NU este necesară notarizarea. ✅', type: 'info' },
          { text: 'Dacă proprietarul NU poate veni cu tine la SPCLEP, declarația trebuie notarizată (la notar român — valabilă 90 de zile) SAU dată la consulatul României din Germania (valabilă 6 luni, cu traducere și legalizare). ✅', type: 'warning' },
          { text: 'Opțiunea 3 — Contract de închiriere: trebuie să fie înregistrat la ANAF (Declarația C168, obligatorie din 2023 — obligația proprietarului) SAU autentificat la notar SAU atestat de avocat. Un contract simplu neînregistrat nu este acceptat la SPCLEP. ✅', type: 'info' },
          { text: 'Stabilește adresa și pregătește documentul aferent ÎNAINTE să rezervi biletul de avion. Pregătirea adresei este cel mai lung pas din întregul proces.', type: 'action' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Alege tipul de carte de identitate' },
      { id: 4, title: 'Planifică deplasarea și programarea' },
      { id: 5, title: 'Pregătire pentru ziua deplasării' },
      { id: 6, title: 'Ziua la SPCLEP' },
      { id: 7, title: 'Ridică buletinul' },
    ],
    paywallTeaser: [
      'Diferențele concrete între CEI și CIS: termen, cost, valid sau nu pentru UE — și de ce CEI este varianta logică dacă vii din Germania',
      'La ce SPCLEP trebuie să mergi pentru schimbarea domiciliului din străinătate (nu e oricare)',
      'Cum te programezi online și ce formular specific se completează la ghișeu',
      'Ce se întâmplă cu pașaportul tău românesc la eliberarea CI — și de ce trebuie să-l aduci cu tine',
      'Ce faci dacă funcționarul cere ceva suplimentar față de lista ta',
      'Când și cum ridici buletinul — și de ce nu poți trimite pe altcineva',
    ],
  },
  'buletin-de-primul-de-b': {
    title: 'Ghid primul buletin · Născut Germania',
    meta: { free: '1 pas gratuit', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [{ text: 'Necesită finalizarea transcrierii certificatului de naștere.', type: 'warning' }],
      },
    ],
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
