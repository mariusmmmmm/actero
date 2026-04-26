// SEO PAGE COPY — /pasaport-romanesc-dupa-brexit
// Tip: LEAF — Pagină context post-Brexit + conversie · P0 unic UK
// Component: LlmOptimizedPage
// Surse verificate: gov.uk/uk-border-control (Aprilie 2026) + EU Settlement Scheme
// Generat: Aprilie 2026

// ============================================================
// ANALIZA PREALABILĂ
// ============================================================

/*
SEARCH INTENT:
  Informațional + anxietate. Utilizatorul caută context: ce s-a schimbat
  după Brexit pentru el ca cetățean român în UK. Sunt două tipuri de utilizator:
  (A) cel care vrea să înțeleagă situația generală
  (B) cel care are o problemă concretă (pașaport expirat / nu poate călători)
  Pagina servește pe amândoi: context clar + CTA spre soluție.

KEYWORD PRINCIPAL:
  pasaport romanesc dupa brexit

KEYWORD-URI SECUNDARE:
  - acte romanesti anglia dupa brexit
  - cetatean roman in uk dupa brexit acte
  - ce s-a schimbat dupa brexit pentru romani
  - pasaport obligatoriu anglia dupa brexit
  - cetateniii romani uk ce documente
  - eu settlement scheme pașaport
  - romani uk settled status acte

UNGHI DIFERENȚIATOR:
  Nu există nicio pagină în română care explică clar și simplu ce s-a
  schimbat după Brexit pentru cetățenii români din UK în materie de documente.
  Forumurile din 2021-2022 sunt depășite. Gov.uk este în engleză.
  Această pagină răspunde în română, actualizată 2026, cu pași concreți.

FAPTE CHEIE:
  - Înainte de 31 decembrie 2020: cetățenii români în UK beneficiau de
    libera circulație UE — pașaport sau buletin, intrare liberă, fără statut
  - Din 1 ianuarie 2021: UK a ieșit din piața unică UE. Cetățenii EU din UK
    au nevoie de EU Settlement Scheme (settled sau pre-settled status) pentru
    a rămâne legal
  - Deadline EUSS: 30 iunie 2021 (pentru cei care erau în UK înainte de 31 dec 2020)
  - Cei care au ajuns după 31 dec 2020: reguli diferite (vizare sau EUSS dacă
    sunt în relație de familie cu cineva cu drept de ședere)
  - Pașaportul românesc: recomandat pentru orice călătorie internațională din UK
  - Buletin: poate fi folosit DACĂ settled/pre-settled + linked UKVI (detalii
    în pagina /pot-calatori-ue-buletin-romanesc-anglia)
  - BRP (Biometric Residence Permit): expirate, înlocuite cu eVisa
  - eVisa: documentul digital care înlocuiește BRP pentru statut de ședere UK

CE TREBUIE VERIFICAT ÎNAINTE DE PUBLICARE:
  - Verificare dacă mai există deadline-uri EUSS active pentru anumite categorii
  - Confirmare că BRP sunt definitiv expirate și înlocuite cu eVisa (gov.uk confirmă)
*/

// ============================================================
// METADATA
// ============================================================

export const metadata = {
  title:
    'Pașaport românesc după Brexit — Ce s-a schimbat pentru românii din UK | ActeRO',
  description:
    'Ce documente ai nevoie dacă ești cetățean român în UK după Brexit. De ce pașaportul a devenit documentul esențial. Settled status, eVisa, UKVI — explicate simplu în română.',
  keywords: [
    'pasaport romanesc dupa brexit',
    'acte romanesti anglia dupa brexit',
    'cetatean roman in uk dupa brexit acte',
    'ce s-a schimbat dupa brexit pentru romani',
    'eu settlement scheme pasaport roman',
    'settled status romani uk',
    'pasaport obligatoriu anglia dupa brexit',
    'romani uk documente necesare 2026',
  ],
  alternates: {
    canonical: 'https://www.actero.ro/pasaport-romanesc-dupa-brexit',
  },
  openGraph: {
    title: 'Pașaport românesc după Brexit — Ce s-a schimbat',
    description:
      'Dacă ești cetățean român în UK, Brexit a schimbat regulile de ședere și de călătorie. Explicat simplu, actualizat 2026.',
    url: 'https://www.actero.ro/pasaport-romanesc-dupa-brexit',
    type: 'article',
  },
};

// ============================================================
// PROPS LlmOptimizedPage
// ============================================================

export const pageProps = {
  lpSlug: 'pasaport-romanesc-dupa-brexit',
  lpTopic:
    'Context post-Brexit pentru cetățenii români din UK: ce s-a schimbat după 1 ianuarie 2021, de ce pașaportul românesc a devenit documentul esențial, ce este EU Settlement Scheme (settled/pre-settled status), eVisa și UKVI, și cum se obține sau se reînnoiește pașaportul românesc de la consulatele din Londra, Manchester și Edinburgh.',

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
      label: 'Pașaport după Brexit',
      href: '/pasaport-romanesc-dupa-brexit',
    },
  ],

  // ----------------------------------------------------------
  // HERO
  // ----------------------------------------------------------
  h1: 'Pașaport românesc după Brexit — ce s-a schimbat pentru românii din UK',

  tldr: {
    label: 'Răspuns rapid:',
    text:
      'Din 1 ianuarie 2021, cetățenii români din UK nu mai beneficiază de libera circulație UE. Ai nevoie de settled sau pre-settled status pentru a rămâne legal și a călători. Pașaportul românesc valabil a devenit documentul esențial: este singurul care funcționează fără complicații la orice graniță, indiferent de statutul UKVI. BRP-urile au expirat — statutul se dovedește acum prin eVisa.',
  },

  intro:
    'Brexit a schimbat regulile pentru toți cetățenii EU din UK. Dacă ești cetățean român și locuiești în UK, iată ce trebuie să știi în 2026.',

  ctaLabel: 'Obțin sau reînnoiesc pașaportul din UK →',
  ctaHref: '/wizard?problem=pasaport&tara=uk',
  ctaNote: 'Fără cont · Începi gratuit · 30 de secunde',

  sourceNote:
    'Actualizat: aprilie 2026 · Surse: gov.uk · EU Settlement Scheme · econsulat.ro · ActeRO',

  // ----------------------------------------------------------
  // SECTIONS
  // ----------------------------------------------------------
  sections: [
    {
      id: 'what-changed',
      title: 'Ce s-a schimbat concret după Brexit',
      type: 'timeline',
      items: [
        {
          period: 'Înainte de 31 decembrie 2020',
          title: 'Libera circulație UE — fără restricții',
          text:
            'Cetățenii români (și toți cetățenii EU) puteau intra, locui și munci în UK fără viză, fără statut special, folosind pașaportul sau buletinul. Singura regulă: document de identitate valabil.',
          status: 'past',
        },
        {
          period: '1 ianuarie 2021',
          title: 'Brexit intrat în vigoare — regulile s-au schimbat',
          text:
            'UK a ieșit din piața unică și din uniunea vamală a UE. Libera circulație a încetat. Cetățenii EU din UK au trebuit să aplice pentru EU Settlement Scheme (EUSS) pentru a-și proteja dreptul de ședere.',
          status: 'change',
        },
        {
          period: '30 iunie 2021',
          title: 'Deadline EUSS — termen de aplicare',
          text:
            'Cetățenii EU care trăiau în UK înainte de 31 decembrie 2020 au trebuit să aplice pentru settled sau pre-settled status până la această dată. Cei care nu au aplicat la timp pot face late applications în anumite circumstanțe.',
          status: 'deadline',
        },
        {
          period: '2023–2026',
          title: 'BRP expirate — înlocuite cu eVisa',
          text:
            'Cardurile fizice BRP (Biometric Residence Permit) au expirat. Statutul de ședere se dovedește acum exclusiv prin eVisa — un document digital legat de contul tău UKVI. Nu mai există card fizic.',
          status: 'current',
        },
        {
          period: 'Prezent (2026)',
          title: 'Reguli stabile — pașaportul ca document central',
          text:
            'Situația s-a stabilizat. Românii cu settled/pre-settled status au drepturi clare. Pașaportul românesc valabil este documentul care funcționează cel mai simplu pentru călătorii, identificare și proceduri consulare.',
          status: 'current',
        },
      ],
    },

    {
      id: 'statuses',
      title: 'Settled status vs. pre-settled status — diferența practică',
      type: 'comparison',
      intro:
        'Ambele statute îți permit să rămâi în UK. Diferența principală este perioada de ședere demonstrată și drepturile pe termen lung.',
      rows: [
        {
          aspect: 'Cine îl primește',
          settled: 'Cei cu ≥5 ani de ședere continuă în UK',
          presettled: 'Cei cu <5 ani de ședere continuă în UK',
        },
        {
          aspect: 'Dreptul de ședere',
          settled: 'Permanent — fără limită de timp',
          presettled: 'Temporar — max 5 ani, trebuie transformat în settled',
        },
        {
          aspect: 'Călătorii din UK',
          settled: '✅ Fără restricții suplimentare',
          presettled: '✅ Fără restricții suplimentare (dacă UKVI linked)',
        },
        {
          aspect: 'Absență din UK',
          settled: 'Max 5 ani fără a pierde statutul',
          presettled: 'Max 2 ani fără a pierde statutul',
        },
        {
          aspect: 'Pașaport necesar',
          settled: '✅ Recomandat pentru orice călătorie',
          presettled: '✅ Recomandat pentru orice călătorie',
        },
      ],
    },

    {
      id: 'evisa',
      title: 'eVisa — ce este și de ce contează pentru pașaport',
      type: 'info-block',
      items: [
        {
          title: 'BRP a expirat — eVisa îl înlocuiește',
          text:
            'Dacă aveai un BRP (card fizic), acesta a expirat. Statutul tău de ședere nu a dispărut — a fost mutat automat la eVisa. Accesezi eVisa prin contul UKVI pe gov.uk.',
        },
        {
          title: 'eVisa este legat de documentul de identitate',
          text:
            'eVisa este atașat pașaportului sau buletinului cu care ai aplicat sau pe care l-ai adăugat ulterior în contul UKVI. Dacă ți-ai reînnoit pașaportul și nu l-ai adăugat în contul UKVI, eVisa apare pe documentul vechi — și apar complicații la graniță.',
        },
        {
          title: 'La reînnoirea pașaportului — actualizați contul UKVI',
          text:
            'Imediat după ce primești pașaportul nou de la consulat, accesează gov.uk și adaugă noul document în contul UKVI. Aceasta este o acțiune obligatorie — fără ea, aerolina sau Border Force nu pot confirma că ai permisiunea de re-intrare în UK.',
          isAction: true,
          link: 'https://www.gov.uk/view-prove-immigration-status',
          linkLabel: 'Actualizează contul UKVI →',
        },
      ],
    },

    {
      id: 'passport-now',
      title: 'De ce pașaportul românesc este documentul central după Brexit',
      type: 'highlight',
      points: [
        'Funcționează la orice graniță fără verificare UKVI separată — aerolina îl acceptă direct',
        'Necesar pentru călătorii în afara UE (SUA, Canada, Turkey, Dubai etc.) — buletinul nu funcționează',
        'Recomandat la adăugarea în contul UKVI — pașaportul este documentul standard pentru linking',
        'Valabil 10 ani — investiție pe termen lung în mobilitate',
        'Recunoscut ca document primar în toate procedurile consulare românești din UK',
      ],
      ctaText:
        'Pașaportul românesc se obține sau se reînnoiește de la consulatele din Londra, Manchester sau Edinburgh — fără deplasare în România.',
      ctaLabel: 'Vreau să obțin sau să reînnoiesc pașaportul →',
      ctaHref: '/pasaport-romania-marea-britanie',
    },

    {
      id: 'action-checklist',
      title: 'Ce ai de făcut dacă ești cetățean român în UK în 2026',
      type: 'checklist',
      items: [
        {
          action: 'Verifică că ai settled sau pre-settled status',
          detail: 'Dacă nu ai aplicat la EUSS, contactați un consilier de imigrație. Late applications sunt acceptate în anumite circumstanțe.',
          link: 'https://www.gov.uk/settled-status-eu-citizens-families',
          linkLabel: 'Verifică statusul pe gov.uk →',
          priority: 'high',
        },
        {
          action: 'Accesează contul UKVI și verifică că documentul tău e linked',
          detail: 'Contul UKVI este locul unde găsești eVisa și unde adaugi sau actualizezi documentele de identitate (pașaport sau buletin).',
          link: 'https://www.gov.uk/view-prove-immigration-status',
          linkLabel: 'Accesează contul UKVI →',
          priority: 'high',
        },
        {
          action: 'Dacă pașaportul a expirat — reînnoiește-l de la consulat',
          detail: 'Consulatele din Londra, Manchester și Edinburgh eliberează pașapoarte românești. Termen ~60 zile lucrătoare. Programare pe econsulat.ro.',
          href: '/pasaport-romania-marea-britanie',
          linkLabel: 'Ghid reînnoire pașaport →',
          priority: 'high',
        },
        {
          action: 'La reînnoirea pașaportului — actualizează imediat contul UKVI',
          detail: 'Adaugă noul pașaport în contul UKVI imediat ce îl primești. Altfel, eVisa rămâne legat de documentul vechi.',
          priority: 'medium',
        },
        {
          action: 'Dacă pre-settled — verifică dacă ești eligibil pentru upgrade la settled',
          detail: 'După 5 ani de ședere continuă, poți aplica pentru settled status. Termenul de tranziție de la pre-settled la settled este important.',
          link: 'https://www.gov.uk/settled-status-eu-citizens-families/upgrading-to-settled-status',
          linkLabel: 'Upgrade la settled status →',
          priority: 'medium',
        },
      ],
    },

    {
      id: 'passport-guides',
      title: 'Ghiduri pentru pașaport din UK',
      type: 'links',
      items: [
        {
          title: 'Pașaport cu domiciliu în UK (CRDS)',
          description:
            'Dacă ai CRDS activ (domiciliu înregistrat în UK) — cerere cu dovadă rezidență UK.',
          href: '/pasaport-crds-anglia',
        },
        {
          title: 'Pașaport cu domiciliu în România',
          description:
            'Dacă domiciliul oficial rămâne în România — cerere fără dovadă rezidență UK.',
          href: '/pasaport-expirat-anglia',
        },
        {
          title: 'Pașaport Londra',
          description: 'Adresă, program, taxa în GBP, cum ridici.',
          href: '/pasaport-consulat-londra',
        },
        {
          title: 'Pașaport Manchester',
          description: 'EXCLUSIV numerar. Program special depunere temporar.',
          href: '/pasaport-consulat-manchester',
        },
        {
          title: 'Pașaport Edinburgh',
          description: 'Taxă redusă temporar ~18 GBP. Vineri program până la 12:00.',
          href: '/pasaport-consulat-edinburgh',
        },
      ],
    },
  ],

  // ----------------------------------------------------------
  // FAQ
  // ----------------------------------------------------------
  faqItems: [
    {
      question: 'Am settled status dar pașaportul mi-a expirat. Ce fac?',
      answer:
        'Settled statusul tău nu dispare — este legat de contul UKVI, nu de pașaport. Poți continua să locuiești în UK. Dar pentru a călători internațional, ai nevoie de un document valabil. Reînnoiești pașaportul la consulatul din Londra, Manchester sau Edinburgh. Programare pe econsulat.ro, termen ~60 zile lucrătoare.',
    },
    {
      question: 'Ce este BRP și de ce nu mai funcționează?',
      answer:
        'BRP (Biometric Residence Permit) era cardul fizic care dovedea dreptul de ședere în UK. Toate BRP-urile au expirat și au fost înlocuite cu eVisa — un document digital accesibil prin contul UKVI pe gov.uk. Nu mai există card fizic de ședere. Statutul tău rămâne valabil, doar că se dovedește acum altfel.',
    },
    {
      question: 'Trebuie să fac ceva cu pașaportul dacă am pre-settled status?',
      answer:
        'Da — dacă ți-ai reînnoit pașaportul, trebuie să îl adaugi în contul UKVI (gov.uk/view-prove-immigration-status). eVisa este legat de documentul de identitate, nu automat de persoană. Dacă nu actualizezi, apar complicații la aeroporturi.',
    },
    {
      question: 'Pot obține pașaportul românesc fără să mă duc în România?',
      answer:
        'Da. Pașaportul românesc se obține și se reînnoiește direct la consulatele din Londra, Manchester sau Edinburgh. Nu este necesară deplasarea în România. Programare pe econsulat.ro, termen ~60 zile lucrătoare. Pașaportul se poate ridica la consulat sau se poate trimite prin poștă (Royal Mail Special Delivery).',
    },
    {
      question: 'Am ajuns în UK după 31 decembrie 2020. Ce statut am?',
      answer:
        'Dacă ai venit în UK după 31 decembrie 2020 și nu ești în familie cu cineva cu statut EUSS, regulile sunt diferite — trebuie viză sau ETA pentru ședere temporară. Dacă ai venit cu un partener/soț/soție cu settled status, poți fi eligibil pentru statut de familie. Consultați un consilier de imigrație pentru situația dvs. specifică.',
    },
    {
      question: 'Cât de urgent este să reînnoi pașaportul expirat în UK?',
      answer:
        'Pașaportul expirat nu afectează dreptul de ședere în UK (acesta este dovedit prin eVisa/statut EUSS). Dar afectează orice călătorie internațională și poate crea complicații la identificare. Termenul de reînnoire la consulat este ~60 zile lucrătoare — planificați din timp dacă aveți o călătorie programată.',
    },
  ],

  // ----------------------------------------------------------
  // FINAL CTA
  // ----------------------------------------------------------
  finalCtaTitle: 'Pașaportul expirat sau aproape expirat?',
  finalCtaText:
    'Wizardul ActeRO îți spune în 30 de secunde la ce consulat mergi, ce documente aduci și cum faci programarea pe econsulat.ro.',
  finalCtaLabel: 'Obțin sau reînnoiesc pașaportul din UK →',
  finalCtaHref: '/wizard?problem=pasaport&tara=uk',
};

// ============================================================
// SCHEMA.ORG
// ============================================================

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/pasaport-romanesc-dupa-brexit#article',
  headline:
    'Pașaport românesc după Brexit — ce s-a schimbat pentru românii din UK',
  description:
    'Ce documente ai nevoie dacă ești cetățean român în UK după Brexit. Settled status, eVisa, UKVI, pașaport românesc — explicate simplu în română, actualizat 2026.',
  url: 'https://www.actero.ro/pasaport-romanesc-dupa-brexit',
  inLanguage: 'ro',
  datePublished: '2026-04-01',
  dateModified: '2026-04-24',
  author: { '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@id': 'https://www.actero.ro/#organization' },
  about: [
    { '@type': 'Thing', name: 'Brexit' },
    { '@type': 'Thing', name: 'EU Settlement Scheme' },
    { '@type': 'Thing', name: 'Pașaport românesc' },
    { '@type': 'Thing', name: 'eVisa UK' },
    { '@type': 'Thing', name: 'Settled status' },
  ],
  audience: {
    '@type': 'Audience',
    audienceType: 'Cetățeni români din Marea Britanie',
  },
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
      name: 'Pașaport după Brexit',
      item: 'https://www.actero.ro/pasaport-romanesc-dupa-brexit',
    },
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Am settled status dar pașaportul mi-a expirat. Ce fac?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Settled statusul rămâne — este în contul UKVI, nu în pașaport. Reînnoiești pașaportul la consulatul din Londra, Manchester sau Edinburgh. Programare pe econsulat.ro, termen ~60 zile lucrătoare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce este BRP și de ce nu mai funcționează?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BRP era cardul fizic de ședere în UK. A expirat și a fost înlocuit cu eVisa — un document digital accesibil prin contul UKVI pe gov.uk. Statutul rămâne valabil, se dovedește digital.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pot reînnoi pașaportul românesc fără să merg în România?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da. Pașaportul se obține și se reînnoiește la consulatele din Londra, Manchester sau Edinburgh. Programare pe econsulat.ro, termen ~60 zile lucrătoare. Nu este necesară deplasarea în România.',
      },
    },
    {
      '@type': 'Question',
      name: 'Trebuie să actualizez ceva în contul UKVI când reînnoiesc pașaportul?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da — obligatoriu. eVisa este legat de documentul de identitate. Dacă reînnoiești pașaportul, adaugă noul document în contul UKVI imediat ce îl primești (gov.uk/view-prove-immigration-status). Altfel, aerolina nu poate confirma permisiunea de re-intrare în UK.',
      },
    },
  ],
};

// ============================================================
// NOTE INTERNE
// ============================================================

/*
TON ȘI ABORDARE:
  Această pagină este diferită față de celelalte — are un element de
  context politico-administrativ (Brexit). Tonul trebuie să fie:
  - informativ, nu alarmat
  - util, nu condescendent
  - orientat spre acțiune, nu spre teorie

  Nu folosim „Brexit" ca termen negativ sau alarmist.
  Pur și simplu explicăm ce s-a schimbat și ce au de făcut.

TIMELINE SECTION:
  Componenta 'timeline' necesită implementare dacă nu există deja în
  LlmOptimizedPage. Alternativ, poate fi înlocuită cu 'facts' cu perioadele
  ca titluri. Verificați cu Codex disponibilitatea componentei.

PAGINI NECESARE LA LANSARE (link-uri active):
  - /acte-romanesti-marea-britanie (hub principal)
  - /pasaport-romania-marea-britanie (hub pașaport)
  - /pasaport-crds-anglia (CRDS leaf)
  - /pasaport-expirat-anglia (non-CRDS leaf)
  - /pasaport-consulat-londra / manchester / edinburgh (GEO)
  - /pot-calatori-ue-buletin-romanesc-anglia (cross-link natural)
  - /wizard?problem=pasaport&tara=uk

CROSS-LINKING BIDIRECȚIONAL:
  Această pagină și /pot-calatori-ue-buletin-romanesc-anglia sunt
  complementare — una explică contextul (Brexit), cealaltă răspunde
  la întrebarea concretă (buletin vs. pașaport pentru călătorii).
  Link bidirecțional între ele — ambele duc spre hub pașaport.
*/
