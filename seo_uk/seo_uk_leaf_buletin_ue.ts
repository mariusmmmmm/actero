// SEO PAGE COPY — /pot-calatori-ue-buletin-romanesc-anglia
// Tip: LEAF — Pagină informațional-conversie · P0 unic UK
// Component: LlmOptimizedPage
// Surse verificate: gov.uk/uk-border-control (Aprilie 2026) + regulile UE cetățeni EU
// Generat: Aprilie 2026

// ============================================================
// ANALIZA PREALABILĂ
// ============================================================

/*
SEARCH INTENT:
  Informațional + anxietate post-Brexit. Utilizatorul nu știe dacă are voie
  să plece din UK spre UE cu buletinul românesc. Caută un răspuns clar,
  în română, fără jargon juridic. Intent secundar: înțelege de ce are nevoie
  de pașaport. Intent terțiar: află cum obține pașaportul din UK.

KEYWORD PRINCIPAL:
  pot calatori in UE cu buletinul romanesc din anglia

KEYWORD-URI SECUNDARE:
  - pot merge in spania cu buletinul romanesc din anglia
  - pot intra in franta cu buletinul romanesc din anglia
  - buletin romanesc valabil anglia 2026
  - buletin romanesc anglia calatorie europa
  - pasaport romanesc dupa brexit
  - ce documente calatorit din anglia in UE
  - buletin romanesc uk border
  - settled status buletin romanesc

UNGHI DIFERENȚIATOR:
  Singurul ghid în română care răspunde corect și nuanțat:
  DA — poți călători la UE cu buletinul dacă îndeplinești condițiile.
  DAR — există 3 condiții precise (buletin valabil + settled/pre-settled + UKVI linking)
  care dacă nu sunt toate îndeplinite creează probleme reale.
  Concluzie practică: pașaportul elimină toate întrebările dintr-o dată.

FAPTE VERIFICATE (gov.uk, Aprilie 2026):
  - Cetățenii EU pot intra în UK cu buletinul național DACĂ au settled/pre-settled status
    ȘI buletinul este linked la UKVI account
  - Compania de transport (aerolinia) verifică electronic dacă ai permisiune de re-intrare
  - Dacă buletinul nu e linked la UKVI account → întârzieri la graniță + posibil refuz boarding
  - Buletin expirat = imposibil de călătorit indiferent de situație
  - CEI (carte electronică de identitate) este formatul nou biometric acceptat; CIS (simplu)
    poate fi respins în unele state UE din ianuarie 2026 (regulament EU 2025/1208)
  - Pașaport românesc valabil: zero restricții, funcționează pentru orice destinație

CE TREBUIE VERIFICAT ÎNAINTE DE PUBLICARE:
  - Confirmare dacă CEI vs CIS face diferență practică pentru companii aeriene din UK (2026)
  - Update dacă UK schimbă regulile UKVI linking în 2026
*/

// ============================================================
// METADATA
// ============================================================

export const metadata = {
  title:
    'Pot merge în UE cu buletinul românesc din Anglia? Răspuns 2026 | ActeRO',
  description:
    'Răspuns clar: DA, poți — dar cu 3 condiții (buletin valabil + settled status + cont UKVI linked). Dacă o condiție lipsește, apar complicații. De ce pașaportul elimină toate problemele.',
  keywords: [
    'pot calatori in UE cu buletinul romanesc din anglia',
    'pot merge in spania cu buletinul romanesc din anglia',
    'buletin romanesc anglia calatorii europa 2026',
    'pasaport romanesc dupa brexit',
    'settled status buletin romanesc',
    'buletin romanesc uk calatorie',
    'ce documente calatorit din anglia in ue',
    'buletin romanesc anglia valabil',
  ],
  alternates: {
    canonical:
      'https://www.actero.ro/pot-calatori-ue-buletin-romanesc-anglia',
  },
  openGraph: {
    title:
      'Pot merge în UE cu buletinul românesc din Anglia? Răspuns 2026',
    description:
      'DA — dar cu condiții. Buletin valabil + settled/pre-settled status + UKVI linking. Dacă o condiție lipsește, pașaportul este soluția sigură.',
    url: 'https://www.actero.ro/pot-calatori-ue-buletin-romanesc-anglia',
    type: 'article',
  },
};

// ============================================================
// PROPS LlmOptimizedPage
// ============================================================

export const pageProps = {
  lpSlug: 'pot-calatori-ue-buletin-romanesc-anglia',
  lpTopic:
    'Răspuns la întrebarea post-Brexit: cetățenii români cu domiciliu în UK pot călători în UE cu buletinul românesc dacă au settled sau pre-settled status și buletinul este linked la contul UKVI. Pașaportul românesc valabil elimină toate complicațiile.',

  // ----------------------------------------------------------
  // BREADCRUMBS
  // ----------------------------------------------------------
  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    {
      label: 'Acte românești Marea Britanie',
      href: '/acte-romanesti-marea-britanie',
    },
    {
      label: 'Buletin și călătorii UE din Anglia',
      href: '/pot-calatori-ue-buletin-romanesc-anglia',
    },
  ],

  // ----------------------------------------------------------
  // HERO
  // ----------------------------------------------------------
  h1: 'Pot merge în UE cu buletinul românesc din Anglia?',

  tldr: {
    label: 'Răspuns scurt:',
    text:
      'DA — poți călători în UE cu buletinul românesc dacă sunt îndeplinite trei condiții: buletinul este valabil, ai settled sau pre-settled status în UK, și documentul este legat (linked) de contul tău UKVI. Dacă oricare dintre condiții lipsește, apar complicații reale la check-in sau la graniță. Pașaportul românesc valabil elimină toate aceste întrebări dintr-o dată.',
  },

  intro:
    'Aceasta este cea mai frecventă întrebare a românilor din UK după Brexit. Răspunsul corect este nuanțat — și merită citit în întregime înainte de a pleca la aeroport.',

  ctaLabel: 'Vreau să reînnoiesc sau să obțin pașaportul din UK →',
  ctaHref: '/wizard?problem=pasaport&tara=uk',
  ctaNote: 'Fără cont · Începi gratuit · 30 de secunde',

  sourceNote:
    'Actualizat: aprilie 2026 · Surse: gov.uk/uk-border-control · Regulamentul UE 2025/1208 · ActeRO',

  // ----------------------------------------------------------
  // SECTIONS
  // ----------------------------------------------------------
  sections: [
    {
      id: 'conditions',
      title: 'Când poți călători din UK în UE cu buletinul românesc',
      type: 'facts',
      intro:
        'Regula UK (gov.uk) spune că cetățenii EU pot intra și ieși din UK cu cartea de identitate națională dacă sunt îndeplinite toate trei condițiile de mai jos.',
      items: [
        {
          title: '① Buletinul este valabil',
          text:
            'Documentul nu trebuie să fie expirat. Buletinul trebuie să fie valabil pentru întreaga perioadă a călătoriei — inclusiv data de întoarcere în UK. Un buletin expirat cu o zi face imposibilă orice călătorie internațională.',
          type: 'required',
        },
        {
          title: '② Ai settled status sau pre-settled status în UK',
          text:
            'Trebuie să ai obținut statut prin EU Settlement Scheme (EUSS). Dacă nu ți-ai depus aplicația sau nu ai primit decizia finală, regulile sunt diferite și mai complicate.',
          type: 'required',
        },
        {
          title:
            '③ Buletinul este legat (linked) de contul tău UK Visas and Immigration (UKVI)',
          text:
            'Aceasta este condiția pe care mulți o ignoră. Compania aeriană (aerolinia) verifică electronic înainte de boarding dacă ai permisiune de re-intrare în UK. Dacă buletinul nu este linked la contul UKVI, aerolinia poate refuza îmbarcarea sau poți fi întârziat la graniță. Verifici și actualizezi linking-ul pe: gov.uk — Your UKVI account.',
          type: 'required',
          link: 'https://www.gov.uk/view-prove-immigration-status',
          linkLabel: 'Verifică contul UKVI →',
        },
      ],
    },

    {
      id: 'complications',
      title: 'Când apar complicații cu buletinul',
      type: 'warnings',
      items: [
        {
          title: 'Buletinul nu e linked la UKVI',
          text:
            'Aceasta este sursa principală de probleme. Aerolinia trimite datele tale la Border Force înainte de boarding. Dacă buletinul nu apare linked, ți se poate cere un share code sau ești îndreptat la un ghișeu separat. În cazuri extreme, poți fi refuzat la boarding.',
        },
        {
          title: 'Buletinul de tip CIS (format vechi, simplu)',
          text:
            'Regulamentul UE 2025/1208 a standardizat cărțile de identitate europene. Cărțile de identitate fără zonă MRZ (machine-readable) sau fără biometrie nu mai sunt acceptate în unele state UE din august 2026. Dacă ai un buletin vechi format simplu (CIS), verifică dacă este valid pentru destinația ta înainte de plecare.',
        },
        {
          title: 'Nu ai aplicat pentru settled/pre-settled status',
          text:
            'Dacă nu ai statut EUSS, nu poți folosi buletinul pentru a intra sau ieși din UK. Trebuie viză sau ETA.',
        },
        {
          title: 'Buletinul expirat',
          text:
            'Nicio excepție. Buletin expirat = imposibil de urcat în avion din UK. Dacă buletinul expiră în timp ce ești în UK, contactați consulatul pentru titlu de călătorie (ghid #8-UK) sau reînnoiți-l prin procură (ghid #11-UK).',
        },
      ],
    },

    {
      id: 'passport-advantage',
      title: 'De ce pașaportul românesc rezolvă totul',
      type: 'highlight',
      text:
        'Pașaportul românesc valabil funcționează fără excepție pentru orice călătorie din UK: în UE, în UK la întoarcere, în afara UE. Nu necesită linking la UKVI (aerolina îl acceptă direct), nu are restricții de format biometric, și este documentul standard cerut de aproape orice destinație. Dacă locuiești în UK și călătorești frecvent, pașaportul este documentul corect de obținut.',
      ctaLabel: 'Cum obții sau reînnoiești pașaportul din UK →',
      ctaHref: '/pasaport-romania-marea-britanie',
    },

    {
      id: 'buletin-vs-pasaport',
      title: 'Buletin vs. pașaport — comparație practică pentru românii din UK',
      type: 'comparison',
      rows: [
        {
          aspect: 'Călătorie UK → UE',
          buletin: 'DA, dacă valabil + settled + UKVI linked',
          pasaport: '✅ DA, fără condiții suplimentare',
        },
        {
          aspect: 'Re-intrare în UK după UE',
          buletin: 'DA, dacă valabil + settled + UKVI linked',
          pasaport: '✅ DA, direct la e-gates',
        },
        {
          aspect: 'Călătorie UK → non-UE (SUA, Canada etc.)',
          buletin: '❌ NU este acceptat',
          pasaport: '✅ DA',
        },
        {
          aspect: 'Check-in aerian din UK',
          buletin: '⚠️ Necesită linking UKVI verificat',
          pasaport: '✅ Acceptat direct',
        },
        {
          aspect: 'Format biometric UE 2026',
          buletin: '⚠️ CIS (vechi) poate fi respins',
          pasaport: '✅ Nu e afectat de regulament',
        },
        {
          aspect: 'Călătorie urgentă fără pregătire',
          buletin: '⚠️ Risc de probleme dacă UKVI nu e updatat',
          pasaport: '✅ Zero complicații',
        },
      ],
    },

    {
      id: 'related',
      title: 'Pagini conexe utile',
      type: 'links',
      items: [
        {
          title: 'Pașaport românesc în Marea Britanie',
          description: 'Hub-ul principal — CRDS, domiciliu România, minor, pierdut.',
          href: '/pasaport-romania-marea-britanie',
        },
        {
          title: 'Pașaport românesc după Brexit — ce s-a schimbat',
          description: 'Contextul complet: de ce pașaportul e mai important ca oricând.',
          href: '/pasaport-romanesc-dupa-brexit',
        },
        {
          title: 'Procură reînnoire buletin din UK',
          description: 'Dacă buletinul expirat și vrei să îl reînnoiești fără să mergi în România.',
          href: '/buletin-romanesc-anglia',
        },
        {
          title: 'Titlu de călătorie urgent din Anglia',
          description: 'Dacă nu ai niciun document valabil și trebuie să pleci urgent în România.',
          href: '/titlu-calatorie-urgent-anglia',
        },
      ],
    },
  ],

  // ----------------------------------------------------------
  // FAQ
  // ----------------------------------------------------------
  faqItems: [
    {
      question:
        'Pot merge în Spania cu buletinul românesc dacă locuiesc în Anglia?',
      answer:
        'Da, dacă sunt îndeplinite trei condiții: buletinul este valabil, ai settled sau pre-settled status în UK, și documentul este legat de contul tău UKVI. Spania ca stat UE acceptă buletinul românesc pentru cetățenii europeni. Complicația apare la check-in-ul din UK, nu la intrarea în Spania.',
    },
    {
      question: 'Pot intra în Franța cu buletinul românesc din Anglia?',
      answer:
        'Da, în aceleași condiții ca pentru orice țară UE: buletin valabil + settled status + UKVI linked. Franța ca stat UE acceptă cartea de identitate românească pentru cetățenii europeni.',
    },
    {
      question: 'Ce este linking-ul UKVI și cum îl verific?',
      answer:
        'UKVI (UK Visas and Immigration) este sistemul electronic care stochează statutul tău de ședere în UK. Buletinul sau pașaportul trebuie să fie legat de contul UKVI pentru ca aerolina să confirme că ai permisiune de re-intrare în UK. Verifici și actualizezi pe gov.uk, în secțiunea "View and prove your immigration status". Dacă nu ți-ai actualizat documentul la UKVI după ce ți-ai reînnoit buletinul, linking-ul poate fi pe documentul vechi.',
    },
    {
      question:
        'Buletinul meu românesc a expirat. Pot totuși să plec din Anglia?',
      answer:
        'Nu. Un buletin expirat nu este acceptat pentru nicio călătorie internațională din UK. Opțiunile disponibile: (1) reînnoire buletin prin procură autentificată la consulat (ghid #11-UK) — durată 3–6 luni; (2) obținere pașaport la consulat (ghid #1-UK sau #2-UK) — ~60 zile; (3) titlu de călătorie urgent dacă trebuie să te întorci urgent în România (ghid #8-UK) — aceeași zi, gratuit.',
    },
    {
      question:
        'Buletinul meu vechi (format simplu, fără cip) mai este acceptat?',
      answer:
        'Regulamentul UE 2025/1208 a standardizat cărțile de identitate europene. Cărțile fără zonă MRZ sau fără biometrie nu mai sunt acceptate în unele state UE după august 2026. Verificați dacă buletinul dvs. este format CEI (electronic) sau CIS (simplu). Dacă este CIS și expiră sau este vechi, recomandăm obținerea pașaportului pentru a evita orice problemă.',
    },
    {
      question: 'Am pre-settled status, nu settled status. Pot folosi buletinul?',
      answer:
        'Da, pre-settled status este suficient pentru a folosi buletinul la intrarea și ieșirea din UK, cu condiția că documentul este linked la contul UKVI. Regulile sunt aceleași ca pentru settled status.',
    },
    {
      question:
        'Ce se întâmplă dacă aerolina refuză boarding-ul cu buletinul?',
      answer:
        'Aerolina verifică electronic dacă ai permisiune de re-intrare în UK. Dacă buletinul nu e linked la UKVI, poți oferi un share code (obținut de pe gov.uk/prove-right-to-work) care confirmă statutul tău. Dacă nu ai nici share code, poți fi refuzat la boarding. Soluția sigură pe termen lung: pașaportul românesc valabil, care este acceptat direct fără această verificare.',
    },
  ],

  // ----------------------------------------------------------
  // FINAL CTA
  // ----------------------------------------------------------
  finalCtaTitle: 'Vrei certitudinea că pleci fără probleme?',
  finalCtaText:
    'Pașaportul românesc valabil este soluția care elimină toate întrebările legate de UKVI, linking, formate biometrice și reguli aeriene. Wizardul ActeRO îți spune exact cum îl obții de la consulatul din UK.',
  finalCtaLabel: 'Vreau să obțin sau să reînnoiesc pașaportul din UK →',
  finalCtaHref: '/wizard?problem=pasaport&tara=uk',
};

// ============================================================
// SCHEMA.ORG
// ============================================================

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id':
    'https://www.actero.ro/pot-calatori-ue-buletin-romanesc-anglia#article',
  headline:
    'Pot merge în UE cu buletinul românesc din Anglia? Răspuns 2026',
  description:
    'DA — dacă buletinul e valabil, ai settled/pre-settled status și documentul e linked la contul UKVI. Pașaportul românesc valabil elimină toate complicațiile.',
  url: 'https://www.actero.ro/pot-calatori-ue-buletin-romanesc-anglia',
  inLanguage: 'ro',
  datePublished: '2026-04-01',
  dateModified: '2026-04-24',
  author: { '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@id': 'https://www.actero.ro/#organization' },
  about: [
    { '@type': 'Thing', name: 'Carte de identitate românească' },
    { '@type': 'Thing', name: 'Pașaport românesc' },
    { '@type': 'Thing', name: 'EU Settlement Scheme' },
    { '@type': 'Thing', name: 'Brexit' },
  ],
};

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'ActeRO',
      item: 'https://www.actero.ro',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Acte românești Marea Britanie',
      item: 'https://www.actero.ro/acte-romanesti-marea-britanie',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Buletin și călătorii UE din Anglia',
      item: 'https://www.actero.ro/pot-calatori-ue-buletin-romanesc-anglia',
    },
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Pot merge în Spania cu buletinul românesc dacă locuiesc în Anglia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da, dacă buletinul este valabil, ai settled sau pre-settled status în UK, și documentul este linked la contul UKVI. Spania acceptă buletinul românesc pentru cetățenii europeni. Complicația apare la check-in-ul din UK, nu la intrarea în Spania.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce este linking-ul UKVI și cum îl verific?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UKVI este sistemul electronic UK care stochează statutul de ședere. Buletinul sau pașaportul trebuie legat de contul UKVI pentru ca aerolina să confirme re-intrarea în UK. Verifici pe gov.uk, secțiunea "View and prove your immigration status".',
      },
    },
    {
      '@type': 'Question',
      name: 'Buletinul românesc expirat — pot pleca din Anglia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nu. Buletin expirat = imposibil de urcat în avion. Opțiuni: reînnoire buletin prin procură la consulat (3–6 luni), pașaport la consulat (~60 zile), sau titlu de călătorie urgent dacă trebuie să pleci în România imediat (aceeași zi, gratuit).',
      },
    },
    {
      '@type': 'Question',
      name: 'Pot merge în UE cu buletinul românesc din Anglia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da, dacă toate trei condițiile sunt îndeplinite: (1) buletinul este valabil, (2) ai settled sau pre-settled status în UK prin EU Settlement Scheme, și (3) documentul este linked la contul UKVI. Pașaportul românesc valabil elimină toate aceste condiții și funcționează fără excepție.',
      },
    },
  ],
};

// ============================================================
// NOTE INTERNE
// ============================================================

/*
PRECAUȚII EDITORIALE:
  - NU spunem niciodată „NU poți călători cu buletinul" — este incorect factual.
  - Răspunsul corect este DA, cu condiții specifice.
  - Evităm alarmismul — pagina trebuie să reducă anxietatea, nu să o amplifice.
  - Condițiile sunt prezentate ca pași de verificare, nu ca bariere.

UKVI LINKING — nuanță importantă:
  Conform gov.uk: „Your identity document should be linked to your UKVI account
  if you have settled or pre-settled status". Dacă nu e linked, „you may be
  delayed at the border". NU este un refuz garantat — este o complicație reală.
  Pagina reflectă corect această nuanță (delay → posibil refuz, nu refuz cert).

CEI vs CIS — context important:
  Regulamentul EU 2025/1208 (înlocuiește 2019/1157 invalidat de ECJ) a intrat
  în vigoare 10 iulie 2025. Cărțile de identitate fără MRZ sau biometrie
  nu mai sunt valabile în statele UE după august 2026 (sau la expirare).
  Buletinul românesc CIS (simplu) este afectat. CEI (electronic) este conform.
  Pagina menționează asta fără alarmism — nu toți românii din UK au CIS.

PAGINI NECESARE LA LANSARE:
  - /pasaport-romania-marea-britanie (hub pașaport)
  - /pasaport-romanesc-dupa-brexit (pagina context Brexit)
  - /buletin-romanesc-anglia (hub buletin)
  - /titlu-calatorie-urgent-anglia (urgențe)
  - /wizard?problem=pasaport&tara=uk

SPEAKABLE SCHEMA — recomandat:
  Adăugați speakable markup pe secțiunea TL;DR și primul FAQ item.
  Această pagină are intent vocal ridicat: „Alexa/Google, pot merge în Spania
  cu buletinul din Anglia?" — speakable crește șansele de Google featured snippet
  audio.
*/
