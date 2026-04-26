// SEO PAGE COPY — /pasaport-consulat-londra
// Tip: GEO — Pagină per consulat · Londra
// Component: LlmOptimizedPage
// Analog: /pasaport-consulat-madrid (live, structură verificată)
// Surse: cglondra.mae.ro/node/258 · cglondra.mae.ro/node/847 · cglondra.mae.ro/node/268 ✅ live
// Generat: Aprilie 2026

// ============================================================
// ANALIZA PREALABILĂ
// ============================================================

/*
SEARCH INTENT:
  Navigațional + informațional geo-specific. Utilizatorul e din zona Londra
  sau sudul Angliei. Caută adresa exactă, programul, taxa GBP actuală
  și cum face programarea. Intent secundar: verificare că pașaportul a sosit
  (cglondra.mae.ro/cauta-pasaport).

KEYWORD PRINCIPAL:
  pasaport consulat londra

KEYWORD-URI SECUNDARE:
  - consulat roman londra
  - pasaport romanesc londra 2026
  - consulat roman londra hammersmith
  - consulat roman londra programare
  - pasaport consulat londra taxa
  - consulat roman londra adresa
  - pret pasaport romanesc londra gbp
  - consulat roman londra glen house

UNGHI DIFERENȚIATOR față de Manchester și Edinburgh:
  - Plată cu cardul (față de Manchester numerar exclusiv)
  - Fără restricție de vineri (față de Edinburgh 12:00)
  - Itinerante 2026 în 10 locații din sudul Angliei, Wales, Midlands
    — cel mai extins program itinerant din UK
  - Procuri CI: 6 fotografii (față de 5 Manchester/Edinburgh)
  - Transcrieri: 1 exemplar traducere (față de 2 Manchester/Edinburgh)

FAPTE VERIFICATE LIVE (cglondra.mae.ro/node/258, Aprilie 2026):
  - Adresă: Glen House, etajul 1, 22 Glenthorne Road, Hammersmith, W6 0PP ✅
  - Program: L-J 09:00–16:00 · V 09:00–14:00 ✅
  - Telefon principal: +44 (0)20 8741 3252 ✅
  - Urgențe 24/7: +44 (0) 77 387 16 335 ✅
  - Programare fără internet: 0742 528 5318 (L-V 09:00–15:00) ✅
  - Email: contact@informatiiconsulare.ro ✅
  - Programări: econsulat.ro, GRATUITE ✅
  - Taxa pașaport: variabilă lunar în GBP — ~46 GBP referință ✅ (verificați pe site)
  - Plată: preferabil card ✅
  - Verificare sosire pașaport: cglondra.mae.ro/cauta-pasaport ✅
  - Timbru poștă transcrieri: plic A4 Royal Mail SD ✅
  - Itinerant Taunton + Bristol: 24–26 aprilie 2026 ✅ (confirmat live)
*/

// ============================================================
// METADATA
// ============================================================

export const metadata = {
  title:
    'Pașaport la Consulatul Român din Londra — Ghid 2026 | ActeRO',
  description:
    'Consulatul României la Londra (Hammersmith, W6). Adresă, program L-J 09–16 / V 09–14, taxă GBP, programare econsulat.ro. Verificare sosire pașaport și itinerante 2026.',
  keywords: [
    'pasaport consulat londra',
    'consulat roman londra',
    'consulat roman londra hammersmith',
    'consulat roman londra programare',
    'pasaport romanesc londra 2026',
    'consulat roman londra adresa',
    'consulat roman londra glen house',
    'taxa pasaport romanesc londra',
  ],
  alternates: {
    canonical: 'https://www.actero.ro/pasaport-consulat-londra',
  },
  openGraph: {
    title: 'Pașaport la Consulatul Român din Londra — Ghid 2026',
    description:
      'Glen House, Hammersmith, W6. Program, taxă GBP, programare econsulat.ro. Itinerante 2026 în 10 locații din sudul Angliei.',
    url: 'https://www.actero.ro/pasaport-consulat-londra',
    type: 'article',
  },
};

// ============================================================
// PROPS LlmOptimizedPage
// ============================================================

export const pageProps = {
  lpSlug: 'pasaport-consulat-londra',
  lpTopic:
    'Ghid pentru obținerea pașaportului românesc la Consulatul General al României din Londra (Glen House, Hammersmith, W6 0PP). Adresă, program, taxă GBP, programare pe econsulat.ro, verificare sosire pașaport, itinerante 2026 în sudul Angliei.',

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
      label: 'Pașaport România Marea Britanie',
      href: '/pasaport-romania-marea-britanie',
    },
    { label: 'Consulat Londra', href: '/pasaport-consulat-londra' },
  ],

  // ----------------------------------------------------------
  // HERO
  // ----------------------------------------------------------
  h1: 'Pașaport la Consulatul Român din Londra — ghid 2026',

  tldr: {
    label: 'Răspuns rapid:',
    text:
      'Londra: Luni–Joi 09:00–16:00 · Vineri 09:00–14:00 · cu programare pe econsulat.ro. Plată cu cardul (recomandat). Taxă variabilă în GBP — referință ~46 GBP; verificați suma curentă pe cglondra.mae.ro. Verificare sosire pașaport: cglondra.mae.ro/cauta-pasaport.',
  },

  intro:
    'Locuiești în Londra, sudul Angliei, Wales, Midlands sau East England? Consulatul General din Londra este punctul tău de contact pentru pașaport, titlu de călătorie, procuri și transcrieri.',

  ctaLabel: 'Vreau lista exactă pentru consulatul din Londra →',
  ctaHref: '/wizard?problem=pasaport&tara=uk',
  ctaNote: 'Fără cont · Începi gratuit · 30 de secunde',

  sourceNote:
    'Actualizat: aprilie 2026 · Surse: cglondra.mae.ro · econsulat.ro · ActeRO',

  // ----------------------------------------------------------
  // SECTIONS
  // ----------------------------------------------------------
  sections: [
    {
      id: 'consulate-data',
      title: 'Date utile pentru consulatul din Londra',
      type: 'consulate-card',
      data: {
        name: 'Consulatul General al României la Londra',
        address: 'Glen House, etajul 1, 22 Glenthorne Road, Hammersmith, Londra, W6 0PP',
        addressNote: 'Intrare din Glenthorne Road. Etaj 1.',
        googleMapsUrl:
          'https://www.google.com/maps/search/?api=1&query=Glen+House+22+Glenthorne+Road+Hammersmith+London+W6+0PP',
        schedule: [
          { days: 'Luni–Joi', hours: '09:00–16:00' },
          { days: 'Vineri', hours: '09:00–14:00' },
        ],
        scheduleNote:
          'Program valabil pentru depunere cereri. Ridicare pașapoarte: cu programare pe econsulat.ro.',
        payment: 'Preferabil card bancar',
        paymentNote:
          'Taxa pașaport electronică: variabilă lunar în GBP — referință ~46 GBP. Verificați suma curentă pe cglondra.mae.ro/node/762 înainte de programare.',
        phone: '+44 (0)20 8741 3252',
        phoneAlternatives: [
          '+44 (0)20 8741 3955',
          '+44 (0)20 8741 3464',
          '+44 (0)20 8741 8707',
        ],
        phoneEmergency: '+44 (0) 77 387 16 335',
        phoneEmergencyNote: 'URGENȚE 24/7 — EXCLUSIV accidente, decese',
        phoneNoInternet: '0742 528 5318',
        phoneNoInternetNote: 'Programare fără internet · L-V 09:00–15:00',
        email: 'contact@informatiiconsulare.ro',
        website: 'cglondra.mae.ro',
        passportTracker: 'cglondra.mae.ro/cauta-pasaport',
        bookingUrl: 'econsulat.ro',
        bookingNote: 'Programările sunt GRATUITE.',
      },
    },

    {
      id: 'differentiators',
      title: 'Ce e diferit la Londra față de Manchester și Edinburgh',
      type: 'facts',
      items: [
        {
          title: 'Plată cu cardul — nu exclusiv numerar',
          text:
            'La Londra plata se face preferabil cu cardul bancar. Spre deosebire de Manchester, care acceptă EXCLUSIV numerar, la Londra cardul este binevenite. Aduceți totuși și numerar GBP ca alternativă.',
        },
        {
          title: 'Vineri program normal — fără restricție la 12:00',
          text:
            'Vineri programul se desfășoară normal până la 14:00, spre deosebire de Edinburgh unde vineri se încheie la 12:00. Nu există fereastră separată de ridicare pașapoarte fără programare — ridicarea se face cu programare pe econsulat.ro.',
        },
        {
          title: 'Procuri CI: 6 fotografii (față de 5 la Manchester/Edinburgh)',
          text:
            'Dacă vii pentru o procură de reînnoire buletin, la Londra sunt necesare 6 fotografii (3×4cm, bandă albă jos 7mm, fundal alb). La Manchester și Edinburgh sunt 5 fotografii. Pregătește numărul exact înainte de programare.',
        },
        {
          title: 'Transcrieri: 1 exemplar traducere (față de 2 la Manchester/Edinburgh)',
          text:
            'Pentru transcrierea certificatelor de naștere sau căsătorie, la Londra este necesar 1 exemplar original al traducerii autorizate. Manchester și Edinburgh cer 2 exemplare originale. Verificați înainte dacă îi pregătiți la un traducător.',
        },
        {
          title: 'Itinerante 2026 — cel mai extins program din UK',
          text:
            'Consulatul Londra organizează sesiuni itinerante în 10 locații în 2026: Taunton și Bristol (apr), Peterborough, Ipswich, Norwich (mai), Southampton și Portsmouth (iun), Exeter și Plymouth (sep), Swindon și Reading (oct). Dacă locuiți departe de Londra, verificați dacă urmează o sesiune în zona voastră.',
          href: 'https://cglondra.mae.ro/node/2256',
          linkLabel: 'Calendar itinerante 2026 →',
        },
        {
          title: 'Plic A4 pentru livrarea transcriererilor prin poștă',
          text:
            'Dacă solicitați livrarea prin poștă a certificatelor transcrise, Londra cere plic Royal Mail Special Delivery preplătit autoadresat de format A4 (nu plic standard). Edinburgh și Manchester acceptă plic SD standard.',
        },
      ],
    },

    {
      id: 'regions',
      title: 'Ce zone din UK sunt arondate la Londra',
      type: 'regions',
      intro:
        'Consulatul din Londra deservește cea mai mare parte a Angliei, plus Wales. Dacă nu ești sigur de consulatul competent pentru zona ta, verifică pagina dedicată.',
      regions: [
        'Londra (Greater London — toate cele 32 de boroughs)',
        'Sudul Angliei (Kent, Sussex, Surrey, Hampshire, Dorset, Somerset, Devon, Cornwall)',
        'Wales (toate județele)',
        'Midlands (West Midlands, East Midlands, Warwickshire, Oxfordshire)',
        'East England (Essex, Suffolk, Norfolk, Cambridgeshire, Hertfordshire)',
        'Insulele Channel (opțional — verificați direct)',
      ],
      note:
        'North East England (Northumberland, Durham, Yorkshire de Nord): atât Edinburgh cât și Manchester sunt competente. Verificați pe pagina „Care consulat te deservește în UK".',
      noteHref: '/consulat-competent-anglia',
    },

    {
      id: 'related',
      title: 'Pagini conexe utile',
      type: 'links',
      items: [
        {
          title: 'Pașaport România Marea Britanie',
          description:
            'Hub-ul principal pentru toate situațiile de pașaport din UK.',
          href: '/pasaport-romania-marea-britanie',
        },
        {
          title: 'Titlu de călătorie urgent din Anglia',
          description:
            'Londra: fără programare dacă ai bilet ≤7 zile lucrătoare. Gratuit, aceeași zi.',
          href: '/titlu-calatorie-urgent-anglia',
        },
        {
          title: 'Apostila FCDO pentru acte din UK',
          description:
            'Necesară pentru transcrieri și anumite acte. FCDO — nu notarul britanic.',
          href: '/apostila-fcdo-anglia',
        },
        {
          title: 'Transcriere certificat de naștere britanic',
          description:
            'La Londra: 1 exemplar traducere (față de 2 la Manchester/Edinburgh).',
          href: '/transcriere-nastere-anglia',
        },
      ],
    },

    {
      id: 'other-consulates',
      title: 'Alte consulate din UK',
      type: 'links',
      intro:
        'Dacă nu locuiești în zona Londra, verifică consulatul competent pentru zona ta.',
      items: [
        {
          title: 'Consulat Manchester',
          description:
            'Nord-Vest și Yorkshire. EXCLUSIV numerar. Temporar L-J 09:30–13:30.',
          href: '/pasaport-consulat-manchester',
        },
        {
          title: 'Consulat Edinburgh',
          description:
            'Scoția și Irlanda de Nord. Temporar ~18 GBP. Vineri 12:00.',
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
      question: 'Ce zone sunt arondate la Consulatul din Londra?',
      answer:
        'Londra, sudul Angliei (Kent, Sussex, Surrey, Hampshire, Dorset, Somerset, Devon, Cornwall), Wales, Midlands (West și East) și East England (Essex, Suffolk, Norfolk, Cambridgeshire, Hertfordshire). North East England poate fi adresat și la Edinburgh sau Manchester.',
    },
    {
      question: 'Cum plătesc pașaportul la Londra?',
      answer:
        'Preferabil cu cardul bancar. Taxa legală variabilă lunar în GBP — referință ~46 GBP pentru pașaport electronic. Verificați suma curentă pe cglondra.mae.ro/node/762 înainte de programare.',
    },
    {
      question: 'Trebuie programare la Consulatul din Londra?',
      answer:
        'Da, pentru majoritatea serviciilor consulare — programare pe econsulat.ro (GRATUITĂ). Excepție: titlul de călătorie urgent poate fi obținut fără programare dacă aveți bilet de călătorie în România cu plecare în maxim 7 zile lucrătoare.',
    },
    {
      question: 'Cum ridic pașaportul de la Consulatul din Londra?',
      answer:
        'Ridicarea se face cu programare pe econsulat.ro. Verificați mai întâi că pașaportul a sosit: cglondra.mae.ro/cauta-pasaport. Alternativ, dacă ați solicitat la depunere, pașaportul poate fi trimis prin poștă (plic Royal Mail Special Delivery preplătit autoadresat, depus la cerere).',
    },
    {
      question: 'Ce itinerante organizează Consulatul Londra în 2026?',
      answer:
        'Taunton și Bristol (24–26 aprilie), Peterborough, Ipswich, Norwich (mai), Southampton și Portsmouth (iunie), Exeter și Plymouth (septembrie), Swindon și Reading (octombrie). Calendarul complet pe cglondra.mae.ro/node/2256.',
    },
    {
      question: 'Câte fotografii trebuie pentru procura CI la Londra?',
      answer:
        '6 fotografii color identice (3×4cm, bandă albă jos 7mm, fundal alb, pe verso numele cu majuscule). Atenție: la Manchester și Edinburgh sunt necesare 5 fotografii — numărul diferă.',
    },
    {
      question: 'Câte exemplare de traducere trebuie pentru transcrieri la Londra?',
      answer:
        '1 exemplar original al traducerii autorizate (acoperind atât certificatul cât și apostila FCDO). La Manchester și Edinburgh sunt necesare 2 exemplare — dacă schimbați consulatul, ajustați numărul de traduceri.',
    },
  ],

  // ----------------------------------------------------------
  // FINAL CTA
  // ----------------------------------------------------------
  finalCtaTitle: 'Vrei traseul exact pentru Consulatul din Londra?',
  finalCtaText:
    'Wizardul ActeRO îți spune în 30 de secunde dacă ai toate documentele și ce pași urmezi pentru situația ta.',
  finalCtaLabel: 'Vreau lista exactă pentru consulatul din Londra →',
  finalCtaHref: '/wizard?problem=pasaport&tara=uk',
};

// ============================================================
// SCHEMA.ORG
// ============================================================

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/pasaport-consulat-londra#article',
  headline: 'Pașaport la Consulatul Român din Londra — Ghid 2026',
  description:
    'Ghid complet pentru pașaport la Consulatul General al României din Londra (Glen House, Hammersmith). Adresă, program, taxă GBP, programare, itinerante 2026.',
  url: 'https://www.actero.ro/pasaport-consulat-londra',
  inLanguage: 'ro',
  datePublished: '2026-04-01',
  dateModified: '2026-04-24',
  author: { '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@id': 'https://www.actero.ro/#organization' },
  about: [
    { '@type': 'Thing', name: 'Pașaport românesc' },
    {
      '@type': 'GovernmentOrganization',
      '@id': 'https://www.actero.ro/pasaport-consulat-londra#consulate',
      name: 'Consulatul General al României la Londra',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Glen House, etajul 1, 22 Glenthorne Road, Hammersmith',
        addressLocality: 'Londra',
        postalCode: 'W6 0PP',
        addressCountry: 'GB',
      },
      telephone: '+442087413252',
      url: 'https://cglondra.mae.ro',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '09:00',
          closes: '16:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Friday',
          opens: '09:00',
          closes: '14:00',
        },
      ],
    },
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
      name: 'Pașaport România Marea Britanie',
      item: 'https://www.actero.ro/pasaport-romania-marea-britanie',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Consulat Londra',
      item: 'https://www.actero.ro/pasaport-consulat-londra',
    },
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ce zone sunt arondate la Consulatul din Londra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Londra, sudul Angliei (Kent, Sussex, Surrey, Hampshire, Dorset, Somerset, Devon, Cornwall), Wales, Midlands și East England (Essex, Suffolk, Norfolk, Cambridgeshire, Hertfordshire).',
      },
    },
    {
      '@type': 'Question',
      name: 'Cum plătesc pașaportul la Londra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Preferabil cu cardul bancar. Taxa variabilă lunar în GBP — referință ~46 GBP. Verificați suma curentă pe cglondra.mae.ro/node/762.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cum ridic pașaportul de la Consulatul din Londra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cu programare pe econsulat.ro. Verificați sosirea pe cglondra.mae.ro/cauta-pasaport. Alternativ, plic Royal Mail Special Delivery preplătit depus la cerere.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce itinerante organizează Consulatul Londra în 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Taunton și Bristol (apr), Peterborough/Ipswich/Norwich (mai), Southampton/Portsmouth (iun), Exeter/Plymouth (sep), Swindon/Reading (oct). Calendar complet: cglondra.mae.ro/node/2256.',
      },
    },
  ],
};

// GovernmentOffice schema — separat pentru indexare locală
export const governmentOfficeSchema = {
  '@context': 'https://schema.org',
  '@type': 'GovernmentOffice',
  name: 'Consulatul General al României la Londra',
  url: 'https://cglondra.mae.ro',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Glen House, etajul 1, 22 Glenthorne Road, Hammersmith',
    addressLocality: 'Londra',
    postalCode: 'W6 0PP',
    addressCountry: 'GB',
  },
  telephone: '+442087413252',
  email: 'contact@informatiiconsulare.ro',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '16:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.4934,
    longitude: -0.2253,
  },
  areaServed: [
    'London',
    'South England',
    'Wales',
    'Midlands',
    'East England',
  ],
};

// ============================================================
// NOTE INTERNE
// ============================================================

/*
SCHEMA SPECIAL: GovernmentOffice
  Această pagină este singura din UK care trebuie să includă și
  GovernmentOffice schema (separat de Article), pentru indexare locală
  Google Maps / Knowledge Panel. Identic cu paginile GEO Madrid și Barcelona.

DIFERENȚE FAȚĂ DE GEO MADRID (Spania):
  - Section diferențiatori: 6 items față de 3 la Madrid (mai mulți pentru că
    UK are 3 consulate cu reguli diferite, comparațiile sunt mai valoroase)
  - GovernmentOffice schema: identic ca structură
  - Nu există sub-selector provincie (UK nu are echivalent Castilla y León)
  - Itinerante: mult mai detaliate (10 locații față de Tenerife la Madrid)
  - Taxa: GBP variabil lunar (față de EUR fix 53€ la Madrid)

PAGINI NECESARE LA LANSARE:
  - /acte-romanesti-marea-britanie (hub)
  - /pasaport-romania-marea-britanie (hub pașaport)
  - /titlu-calatorie-urgent-anglia (leaf titlu)
  - /apostila-fcdo-anglia (leaf apostilă)
  - /transcriere-nastere-anglia (leaf transcriere)
  - /pasaport-consulat-manchester (GEO Manchester)
  - /pasaport-consulat-edinburgh (GEO Edinburgh)
  - /consulat-competent-anglia (COMP)
  - /wizard?problem=pasaport&tara=uk

TAXA GBP — remarcă:
  Taxa se actualizează lunar pe cglondra.mae.ro/node/762. Pagina nu
  hardcodează suma — afișează ~46 GBP ca referință + link spre sursă.
  Aceasta evită devalorizarea paginii la fiecare modificare de taxă.

TRACKER PASAPORT LONDRA:
  cglondra.mae.ro/cauta-pasaport — menționat explicit în FAQ și în
  consulate-card. Este diferit de edinburgh.mae.ro (Edinburgh nu are
  tracker public confirmat) și manchester.mae.ro/cauta-pasaport (Manchester).
*/
