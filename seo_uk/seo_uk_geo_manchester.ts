// SEO PAGE COPY — /pasaport-consulat-manchester
// Tip: GEO · Consulat Manchester
// Component: LlmOptimizedPage
// Surse: manchester.mae.ro/node/258 + node/829 + node/828 verificate live — Aprilie 2026

export const metadata = {
  title: 'Pașaport la Consulatul Român din Manchester — EXCLUSIV Numerar | ActeRO',
  description:
    '⚠️ Manchester acceptă EXCLUSIV numerar — cardul NU este acceptat. Temporar: L-J 09:30–13:30 exclusiv. Acte notariale: plic SD obligatoriu. Ghid complet 2026.',
  keywords: [
    'pasaport consulat manchester',
    'consulat roman manchester',
    'consulat roman manchester numerar',
    'programare consulat manchester',
    'pasaport romanesc manchester 2026',
    'consulat roman manchester adresa',
    'consulat roman manchester cooper street',
    'taxa pasaport romanesc manchester',
  ],
  alternates: { canonical: 'https://www.actero.ro/pasaport-consulat-manchester' },
  openGraph: {
    title: 'Pașaport la Consulatul din Manchester — EXCLUSIV Numerar',
    description: '⚠️ EXCLUSIV numerar. Temporar: L-J 09:30–13:30. Acte notariale: plic SD obligatoriu. Nord-Vest Anglia și Yorkshire.',
    url: 'https://www.actero.ro/pasaport-consulat-manchester',
    type: 'article',
  },
};

export const pageProps = {
  lpSlug: 'pasaport-consulat-manchester',
  lpTopic:
    'Ghid pentru pașaportul românesc la Consulatul General din Manchester (9 Cooper Street, M2 2FW). EXCLUSIV numerar pentru toate serviciile. Pașaport temporar: depunere L-J 09:30–13:30. Acte notariale: plic Royal Mail Special Delivery obligatoriu. Ridicare pașapoarte: L-J 15:00–16:30 / V 10:00–14:00.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Pașaport România Marea Britanie', href: '/pasaport-romania-marea-britanie' },
    { label: 'Consulat Manchester', href: '/pasaport-consulat-manchester' },
  ],

  h1: 'Pașaport la Consulatul Român din Manchester — ghid 2026',

  tldr: {
    label: 'Cele mai importante reguli:',
    text:
      '⚠️ EXCLUSIV NUMERAR — cardul nu este acceptat la Manchester. Verificați taxa curentă pe manchester.mae.ro înainte de programare. Pașaport temporar: depunere exclusiv L-J 09:30–13:30. Acte notariale: aduceți plic preplătit Royal Mail Special Delivery. Ridicare pașapoarte: L-J 15:00–16:30 / V 10:00–14:00.',
  },

  intro:
    'Locuiești în Nord-Vestul Angliei, Nord-Estul Angliei sau Yorkshire? Consulatul din Manchester are câteva reguli specifice care, dacă nu sunt cunoscute, pot ruina o programare.',

  ctaLabel: 'Vreau lista exactă pentru consulatul din Manchester →',
  ctaHref: '/wizard?problem=pasaport&tara=uk',
  ctaNote: 'Fără cont · Gratuit',

  sourceNote: 'Actualizat: aprilie 2026 · Surse: manchester.mae.ro · econsulat.ro · ActeRO',

  sections: [
    {
      id: 'consulate-data',
      title: 'Date utile pentru consulatul din Manchester',
      type: 'consulate-card',
      data: {
        name: 'Consulatul General al României la Manchester',
        address: '9 Cooper Street, Manchester, M2 2FW',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=9+Cooper+Street+Manchester+M2+2FW',
        schedule: [
          { days: 'Luni–Joi', hours: '09:00–14:00 și 15:00–16:30' },
          { days: 'Vineri', hours: '09:00–14:00' },
        ],
        schedulePickup: [
          { days: 'Luni–Joi', hours: '15:00–16:30', note: 'Ridicare pașapoarte — fereastră separată' },
          { days: 'Vineri', hours: '10:00–14:00' },
        ],
        payment: '⚠️ EXCLUSIV NUMERAR — cardul nu este acceptat',
        paymentNote: 'Taxa pașaport electronic: variabilă lunar în GBP — referință ~46 GBP. Verificați suma curentă pe manchester.mae.ro.',
        passportTracker: 'manchester.mae.ro/cauta-pasaport',
        bookingUrl: 'econsulat.ro',
        bookingNote: 'Programările sunt GRATUITE.',
        phoneEmergency: 'Urgențe titlu de călătorie: manchester.consul@mae.ro',
      },
    },
    {
      id: 'critical-rules',
      title: '4 reguli critice — specifice Manchester',
      type: 'warnings',
      items: [
        {
          title: '⚠️ EXCLUSIV NUMERAR — cardul NU este acceptat',
          text: 'Manchester nu acceptă plata cu cardul bancar pentru NICIUN serviciu. Aduceți suma exactă în GBP — taxa variază lunar. Verificați suma curentă pe manchester.mae.ro înainte de programare (referință: ~46 GBP pașaport electronic). Dacă veniți fără numerar, nu puteți finaliza cererea.',
          severity: 'critical',
        },
        {
          title: '⚠️ Pașaport temporar: depunere EXCLUSIV L-J 09:30–13:30',
          text: 'Dacă solicitați pașaport temporar (urgență), depunerea se face EXCLUSIV Luni–Joi între 09:30 și 13:30. Nu veniți în afara acestui interval pentru cereri de pașaport temporar — nu veți fi primiți. De asemenea, pașaportul temporar la Manchester NU se trimite prin poștă — ridicare obligatorie personal.',
          severity: 'critical',
        },
        {
          title: '⚠️ Acte notariale: plic preplătit Royal Mail SD obligatoriu',
          text: 'Actele notariale (procuri, declarații) la Manchester se trimit prin poștă — NU se ridică la ghișeu. Aduceți obligatoriu: plic preplătit Royal Mail Special Delivery (timbru până la 100g) + cerere de expediere completată. Fără plic, actul nu poate fi expediat.',
          severity: 'critical',
        },
        {
          title: '⚠️ Titlu de călătorie: programare obligatorie',
          text: 'La Manchester nu există walk-in pentru titlu de călătorie (spre deosebire de Londra și Edinburgh). Urgențe cu plecare în ≤48h: trimiteți email la manchester.consul@mae.ro cu numele, data nașterii și copia biletului de călătorie.',
          severity: 'warning',
        },
      ],
    },
    {
      id: 'differentiators',
      title: 'Ce mai trebuie să știi despre Manchester',
      type: 'facts',
      items: [
        {
          title: 'Xerocopii obligatorii pentru toate documentele',
          text: 'Manchester cere original + xerocopie pentru fiecare document prezentat la ghișeu (CI, pașaport, cert naștere, etc.). Pregătiți xerox-urile înainte de programare.',
        },
        {
          title: 'Verificare sosire pașaport: manchester.mae.ro/cauta-pasaport',
          text: 'Verificați că pașaportul a sosit la consulat înainte de a veni pentru ridicare. Program ridicare: L-J 15:00–16:30, V 10:00–14:00.',
        },
        {
          title: 'Procuri CI: 5 fotografii (față de 6 la Londra)',
          text: 'Pentru procura de reînnoire buletin, Manchester cere 5 fotografii (3×4cm, bandă albă 7mm, fundal alb). Londra cere 6 — numărul diferă.',
        },
        {
          title: 'Transcrieri: 2 exemplare traducere (față de 1 la Londra)',
          text: 'Pentru transcrierea certificatelor de naștere sau căsătorie, Manchester cere 2 exemplare originale ale traducerii autorizate. Londra cere 1 exemplar.',
        },
      ],
    },
    {
      id: 'regions',
      title: 'Zone arondate la Manchester',
      type: 'regions',
      regions: [
        'Nord-Vest Anglia (Greater Manchester, Lancashire, Merseyside, Cheshire, Cumbria)',
        'Yorkshire (West Yorkshire, South Yorkshire, East Yorkshire, North Yorkshire parțial)',
        'Nord-Est Anglia (Northumberland, Durham, Tyne and Wear — de confirmat cu consulatul)',
      ],
      note: 'North East England (Northumberland, Durham, North Yorkshire): atât Manchester cât și Edinburgh acceptă cereri. Verificați pe pagina "Care consulat te deservește în UK".',
      noteHref: '/consulat-competent-anglia',
    },
    {
      id: 'related',
      title: 'Pagini conexe',
      type: 'links',
      items: [
        { title: 'Pașaport România Marea Britanie', description: 'Hub pașaport — toate situațiile.', href: '/pasaport-romania-marea-britanie' },
        { title: 'Titlu de călătorie urgent', description: 'Email urgent: manchester.consul@mae.ro', href: '/titlu-calatorie-urgent-anglia' },
        { title: 'Consulat Londra', description: 'Card acceptat. Fără xerocopii obligatorii. 1 traducere.', href: '/pasaport-consulat-londra' },
        { title: 'Consulat Edinburgh', description: 'Temporar ~18 GBP. Vineri 12:00.', href: '/pasaport-consulat-edinburgh' },
      ],
    },
  ],

  faqItems: [
    {
      question: 'Consulatul din Manchester acceptă plata cu cardul?',
      answer: 'Nu. Manchester acceptă EXCLUSIV numerar pentru toate serviciile. Aduceți suma exactă în GBP — taxa pașaport variază lunar (referință ~46 GBP). Verificați suma curentă pe manchester.mae.ro înainte de programare.',
    },
    {
      question: 'Ce zone din UK sunt arondate la Consulatul din Manchester?',
      answer: 'Nord-Vest Anglia (Greater Manchester, Lancashire, Merseyside, Cheshire, Cumbria), Yorkshire și parțial Nord-Est Anglia. North East England poate fi adresat și la Edinburgh.',
    },
    {
      question: 'Cum ridic pașaportul de la Manchester?',
      answer: 'Verificați mai întâi că a sosit: manchester.mae.ro/cauta-pasaport. Program ridicare: Luni–Joi 15:00–16:30, Vineri 10:00–14:00. Poșta este disponibilă dacă ați solicitat-o la depunere (plic Royal Mail SD preplătit).',
    },
    {
      question: 'Cum obțin titlu de călătorie urgent la Manchester?',
      answer: 'Programare obligatorie — nu există walk-in. Urgențe (plecare ≤48h): email la manchester.consul@mae.ro cu numele, data nașterii și copia biletului. Sau programare normală pe econsulat.ro.',
    },
    {
      question: 'Trebuie xerocopii la Consulatul din Manchester?',
      answer: 'Da — Manchester cere original + xerocopie pentru fiecare document (CI, pașaport, certificate, etc.). Pregătiți xerocopiile înainte de programare.',
    },
  ],

  finalCtaTitle: 'Vrei lista exactă pentru Manchester?',
  finalCtaText: 'Wizardul ActeRO îți confirmă documentele necesare, taxa în numerar și pașii pentru consulatul din Manchester.',
  finalCtaLabel: 'Vreau lista exactă →',
  finalCtaHref: '/wizard?problem=pasaport&tara=uk',
};

export const governmentOfficeSchema = {
  '@context': 'https://schema.org',
  '@type': 'GovernmentOffice',
  name: 'Consulatul General al României la Manchester',
  url: 'https://manchester.mae.ro',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '9 Cooper Street',
    addressLocality: 'Manchester',
    postalCode: 'M2 2FW',
    addressCountry: 'GB',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '16:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '14:00' },
  ],
  areaServed: ['North West England', 'Yorkshire', 'North East England'],
  paymentAccepted: 'Cash only — GBP',
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Consulatul din Manchester acceptă plata cu cardul?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nu. Manchester acceptă EXCLUSIV numerar — cardul nu este acceptat. Aduceți suma exactă în GBP.' },
    },
    {
      '@type': 'Question',
      name: 'Cum obțin titlu de călătorie urgent la Manchester?',
      acceptedAnswer: { '@type': 'Answer', text: 'Programare obligatorie. Urgențe (plecare ≤48h): email la manchester.consul@mae.ro cu biletul atașat.' },
    },
  ],
};
