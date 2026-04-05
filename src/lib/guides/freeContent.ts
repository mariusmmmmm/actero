import type { GuideId } from '@/types'

export type FreeBlockType = 'info' | 'warning' | 'tip' | 'action' | 'note'

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
    title: 'Titlu de călătorie urgență · Germania',
    meta: { free: '2 pași gratuiți', total: '5 pași total' },
    totalSteps: 5,
    steps: [
      {
        id: 1,
        title: 'Identifică documentele necesare',
        blocks: [
          { text: 'Ai nevoie de CEL PUȚIN UN document românesc de identificare, în original. Acceptat oricare dintre acestea: CI sau buletin expirat / pașaport românesc expirat / permis de conducere românesc / certificat de naștere românesc cu CNP (dacă nu mai ai niciun alt document cu fotografie).', type: 'info' },
          { text: 'Ghidul este același indiferent dacă ai pașaport expirat, buletin expirat sau ambele. Ce act ai acum schimbă doar documentul pe care îl aduci — nu procedura.', type: 'info' },
          { text: 'Dacă documentul a fost PIERDUT: nu ai nevoie de nicio hârtie în avans. Declarația privind împrejurările pierderii se completează direct la ghișeul consulatului.', type: 'warning' },
          { text: 'Dacă documentul a fost FURAT: du-te PRIMUL la poliția locală (Polizei) și depune Diebstahlsanzeige. Primești o adeverință scrisă. Această adeverință trebuie însoțită de traducere autorizată în română: obligatorie la München, Stuttgart și Berlin. La Bonn pagina nu specifică traducerea, dar la celelalte 3 consulate este obligatorie — adu traducere și la Bonn.', type: 'warning' },
          { text: 'Nu ai nevoie de econsulat.ro și nu există programare online pentru titlul de călătorie. Te prezinți direct la consulat în intervalul dedicat.', type: 'tip' },
          { text: 'Nu ai nevoie de: Anmeldung, Aufenthaltstitel, apostilă, traduceri pentru documente germane, nicio sumă de bani — serviciul este GRATUIT.', type: 'info' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește-te pentru consulat',
        blocks: [
          { text: 'FOTOGRAFII: depinde strict de consulatul tău. La München trebuie să aduci 2 fotografii biometrice color proprii — de la centre foto sau automate (NU salvate pe telefon). La Bonn, Stuttgart și Berlin fotografia se preia electronic la ghișeu — nu aduci nimic.', type: 'warning' },
          { text: 'Dacă nu ești sigur de consulatul tău sau dacă nu vrei să riști un drum degeaba: adu 2 fotografii biometrice (3,5 × 4,5 cm, fond alb, față descoperită). Automatele din Rossmann sau DM (selectezi „biometric”) sunt acceptate.', type: 'tip' },
          { text: 'Recomandare oficială de la toate consulatele: îmbracă-te în culori închise pentru o fotografie mai clară.', type: 'info' },
          { text: 'Titlul de călătorie nu conține date biometrice (amprente digitale). Este un document mai simplu decât pașaportul — de aceea se eliberează în aceeași zi.', type: 'note' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Mergi la consulat azi' },
      { id: 4, title: 'La ghișeu' },
      { id: 5, title: 'Ce faci după ce ajungi în România' },
    ],
    paywallTeaser: [
      'Programul exact de preluare la consulatul tău și adresa cu hartă',
      'Ce spui la ghișeu și la ce să te aștepți pas cu pas',
      'Ce faci dacă nu ai absolut niciun document românesc la tine',
      'Cum treci frontiera cu titlul de călătorie și ce se întâmplă cu documentul',
      'Pașii obligatorii în România după ce ajungi — pașaport în 1-2 zile, cum și de unde',
    ],
  },
  'titlu-calatorie-de': {
    title: 'Ghid titlu de călătorie · Germania',
    meta: { free: '2 pași gratuiți', total: '5 pași total' },
    totalSteps: 5,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Ai nevoie de UN document românesc de identitate cu fotografie — pașaport expirat, carte de identitate/buletin expirat sau permis de conducere românesc. Original + 1 copie.', type: 'info' },
          { text: 'Dacă nu ai niciun document de identitate: certificatul de naștere românesc sau orice alt act în care apare CNP-ul tău. Original + 1 copie. (confirmat bonn.mae.ro/node/479)', type: 'info' },
          { text: 'Dacă documentul a fost PIERDUT: declarație pe proprie răspundere — se completează pe loc la ghișeul consulatului. Nu trebuie pregătită în avans. (confirmat Bonn + München)', type: 'info' },
          { text: 'Dacă documentul a fost FURAT: adeverință eliberată de poliția locală (Verlustanzeige / Diebstahlsanzeige). La München, Stuttgart și Berlin: obligatoriu însoțită de traducere autorizată în română. La Bonn: traducerea NU este cerută — adeverința singură este suficientă.', type: 'warning' },
          { text: 'Dacă documentul a fost DISTRUS sau DETERIORAT: prezinți documentul în starea în care se află sau fragmentele din el.', type: 'info' },
          { text: 'Titlul de călătorie este GRATUIT — nu plătești nimic la consulat. (Legea 1/2017, confirmat la toate cele 4 consulate)', type: 'tip' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește fotografiile',
        blocks: [
          { text: 'Regula fotografiilor diferă per consulat — citește cu atenție ce se aplică la tine.', type: 'warning' },
          { text: 'Bonn: fotografia se preia ELECTRONIC la ghișeu — nu aduci fotografii proprii. Poartă haine de culoare închisă pentru calitate mai bună. (confirmat bonn.mae.ro/node/479)', type: 'info' },
          { text: 'München: aduci 2 fotografii color format biometric (3,5 × 4,5 cm, fond alb). NU fotografii salvate pe telefon — obținute de la centre foto sau automate de pașaport. (confirmat muenchen.mae.ro/node/479)', type: 'info' },
          { text: 'Stuttgart: adulții — fotografia se preia electronic la ghișeu, nu aduci proprii. Minori sub 14 ani: 1 fotografie color 3,5 × 4,5 cm pe suport hârtie. (confirmat stuttgart.mae.ro/node/479)', type: 'info' },
          { text: 'Berlin: fotografia se preia electronic la ghișeu — nu aduci fotografii proprii. Poartă haine de culoare închisă. (confirmat berlin.mae.ro/node/271)', type: 'info' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Mergi la consulat' },
      { id: 4, title: 'Ridică titlul de călătorie' },
      { id: 5, title: 'Ce faci în România' },
    ],
    paywallTeaser: [
      'Intervalul orar exact la consulatul tău — când să ajungi și când nu',
      'Ce spui și ce completezi la ghișeu — cererea se face pe loc',
      'Când ridici titlul — Bonn: același sau altă zi; München/Stuttgart/Berlin: aceeași zi',
      'Cardul complet al consulatului tău: adresă, program, particularități',
      'Ce trebuie să faci URGENT în România — pașaport în 5 zile vs. buletin în 10 zile',
      'Ce se întâmplă dacă funcționarul cere ceva neașteptat',
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
    title: 'Primul buletin românesc · Germania',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Verifică documentele necesare',
        blocks: [
          { text: 'Certificat de naștere românesc transcris — original (obținut prin Ghidul #16). Documentul dovedește identitatea și cetățenia română și trebuie să conțină CNP-ul.', type: 'info' },
          { text: 'Certificatul de naștere plastifiat, rupt, pătat sau corectat cu scotch este nul de drept — nu se acceptă la ghișeu. Dacă al tău e deteriorat, solicită duplicat înainte de a pleca în România.', type: 'warning' },
          { text: 'Dovada rezidenței în Germania — unul din: pașaport CRDS valabil sau Anmeldung / Meldebescheinigung emis de autoritățile germane — original. Fără apostilă, fără traducere.', type: 'info' },
          { text: 'Certificat de căsătorie românesc — original — doar dacă ești căsătorit/ă și ți-ai schimbat numele prin căsătorie. Dacă nu ți-ai schimbat numele, nu e necesar.', type: 'info' },
          { text: 'Prima CEI este GRATUITĂ pentru cetățenii 14+ ani, până la 30 iunie 2026 (finanțare PNRR). Nu ai nicio taxă de plătit la depunere — nu e nevoie de chitanță sau plată în avans.', type: 'tip' },
          { text: 'Dacă ești minor (14–18 ani): trebuie să fii însoțit obligatoriu de unul dintre părinți la ghișeu. Fără prezența unui părinte, cererea nu se poate depune.', type: 'warning' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Verifică că certificatul de naștere transcris este intact: nedeteriorat, neplastifiat, fără corecturi. Dacă e în stare proastă, trebuie duplicat înainte de deplasare.', type: 'action' },
          { text: 'Documentele se prezintă exclusiv în original la ghișeu. Funcționarul face copii pe loc — nu trebuie să aduci copii proprii.', type: 'info' },
          { text: 'Creează un cont pe hub.mai.gov.ro înainte de a pleca din Germania — validarea contului se face prin email și e necesară înainte de a putea face programarea la SPCLEP.', type: 'action' },
          { text: 'Programarea online pe hub.mai.gov.ro este obligatorie — nu te prezenta la SPCLEP fără programare activă în sistem. Ghișeele nu primesc walk-in pentru CEI.', type: 'warning' },
          { text: 'Din 1 august 2025, poți merge la ORICE SPCLEP din România, indiferent de adresa de domiciliu. Dacă orașul preferat nu are locuri, verifică localitățile din jur — sloturile se actualizează constant din anulări.', type: 'tip' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Creează cont și programează-te pe hub.mai.gov.ro' },
      { id: 4, title: 'Planifică deplasarea în România' },
      { id: 5, title: 'Ziua la SPCLEP — depunerea cererii' },
      { id: 6, title: 'Ridică CEI-ul și activează PIN-urile' },
    ],
    paywallTeaser: [
      'Cum te programezi exact pe hub.mai.gov.ro — pas cu pas, ce selectezi, ce câmp completezi',
      'La ce SPCLEP mergi și cum găsești cel mai rapid slot disponibil din țară',
      'Ce se întâmplă la ghișeu: fotografie biometrică, amprente, semnătură — tot procesul explicat',
      'Ce faci dacă funcționarul cere ceva care nu e în lista ta',
      'Cum ridici CEI-ul și cum activezi singur PIN-urile cu aplicația MAI',
      'Ce faci după: adresa de domiciliu pe CEI și accesul la servicii digitale românești',
    ],
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
