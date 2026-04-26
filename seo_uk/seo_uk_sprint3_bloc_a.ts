// ================================================================
// SPRINT 3 — BLOC A: Pagini #1–5
// /pasaport-consulat-edinburgh
// /pasaport-romania-marea-britanie
// /procura-notariala-anglia
// /acte-copil-nascut-in-anglia
// /titlu-calatorie-anglia
// ================================================================

// ----------------------------------------------------------------
// 1. /pasaport-consulat-edinburgh
// ----------------------------------------------------------------

export const edinburghMetadata = {
  title: 'Pașaport la Consulatul Român din Edinburgh — Taxă redusă, Vineri 12:00 | ActeRO',
  description:
    'Pașaport temporar ~18 GBP (față de ~46–52 GBP Londra/Manchester). ⚠️ Vineri program până la 12:00. Ridicare pașapoarte L-J 15:00–17:00 fără programare. Scoția și Irlanda de Nord.',
  keywords: [
    'pasaport consulat edinburgh',
    'consulat roman edinburgh',
    'taxa pasaport temporar edinburgh',
    'consulat roman edinburgh vineri 12',
    'pasaport romanesc edinburgh 2026',
    'consulat roman edinburgh adresa',
    'consulat roman edinburgh programare',
  ],
  alternates: { canonical: 'https://www.actero.ro/pasaport-consulat-edinburgh' },
};

export const edinburghPageProps = {
  lpSlug: 'pasaport-consulat-edinburgh',
  lpTopic:
    'Ghid pentru pașaportul românesc la Consulatul General din Edinburgh (7-9 North St. David Street, EH2 1AW). Pașaport temporar ~18 GBP — cel mai ieftin din UK. Vineri program se încheie la 12:00. Ridicare pașapoarte L-J 15:00–17:00 fără programare. Apostilă FCDO obligatorie la Edinburgh pentru pașaport furat. Toți minorii prezenți pentru titlu de călătorie.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Pașaport România Marea Britanie', href: '/pasaport-romania-marea-britanie' },
    { label: 'Consulat Edinburgh', href: '/pasaport-consulat-edinburgh' },
  ],

  h1: 'Pașaport la Consulatul Român din Edinburgh — taxă redusă, vineri 12:00',

  tldr: {
    label: 'Ce e diferit la Edinburgh:',
    text:
      'Pașaport temporar ~18 GBP (față de ~46–52 GBP la Londra și Manchester). ⚠️ Vineri programul se încheie la 12:00. Ridicare pașapoarte L-J 15:00–17:00, FĂRĂ programare prealabilă. Pașaport furat: apostilă FCDO obligatorie pe raportul de poliție. Poștă: plic Royal Mail SD cu timbru 100g.',
  },

  intro:
    'Locuiești în Scoția, Irlanda de Nord sau nordul Angliei (până la Middlesbrough)? Edinburgh are câteva avantaje clare față de celelalte consulate — și câteva reguli unice de cunoscut înainte de programare.',

  ctaLabel: 'Vreau lista exactă pentru consulatul din Edinburgh →',
  ctaHref: '/wizard?problem=pasaport&tara=uk',
  ctaNote: 'Fără cont · Gratuit',
  sourceNote: 'Actualizat: aprilie 2026 · Surse: edinburgh.mae.ro · ActeRO',

  sections: [
    {
      id: 'consulate-data',
      title: 'Date utile pentru consulatul din Edinburgh',
      type: 'consulate-card',
      data: {
        name: 'Consulatul General al României la Edinburgh',
        address: '7-9 North St. David Street, Edinburgh, EH2 1AW',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=7-9+North+St+David+Street+Edinburgh+EH2+1AW',
        schedule: [
          { days: 'Luni–Joi', hours: '09:00–16:00' },
          { days: 'Vineri', hours: '09:00–12:00 ⚠️' },
        ],
        schedulePickup: [
          { days: 'Luni–Joi', hours: '15:00–17:00', note: '✅ Fără programare prealabilă' },
        ],
        payment: 'Numerar sau card',
        paymentNote: 'Pașaport electronic: ~52 GBP · Pașaport temporar: ~18 GBP (variabile lunar).',
        phone: '+44 (0) 131 524 9498',
        email: 'edinburgh@mae.ro',
        website: 'edinburgh.mae.ro',
        bookingUrl: 'econsulat.ro',
        postalNote: 'Poștă: plic Royal Mail Special Delivery cu timbru 100g',
      },
    },
    {
      id: 'unique-rules',
      title: 'Ce e unic la Edinburgh față de Londra și Manchester',
      type: 'facts',
      items: [
        {
          title: '✅ Pașaport temporar ~18 GBP — cu 28–34 GBP mai ieftin',
          text: 'Taxa pașaport temporar la Edinburgh este ~18 GBP față de ~46 GBP la Londra și ~46 GBP la Manchester. Dacă ai o urgență demonstrată și locuiești în zona Edinburgh, aceasta este cea mai accesibilă opțiune din UK pentru pașaport temporar.',
        },
        {
          title: '✅ Ridicare pașapoarte L-J 15:00–17:00 fără programare',
          text: 'Edinburgh este singurul consulat din UK cu fereastră dedicată de ridicare pașapoarte fără programare prealabilă. Verificați mai întâi că documentul a sosit înainte de a vă deplasa.',
        },
        {
          title: '⚠️ Vineri program se încheie la 12:00',
          text: 'Spre deosebire de Londra (14:00) și Manchester (14:00), la Edinburgh vineri programul se încheie la 12:00. Programările după 12:00 vineri nu există — verificați că ora voastră este înainte de această limită.',
          severity: 'critical',
        },
        {
          title: '⚠️ Pașaport furat: apostilă FCDO obligatorie pe raportul de poliție',
          text: 'Edinburgh este singurul consulat UK care cere apostilarea raportului de poliție britanic în caz de furt (prin FCDO — gov.uk/get-document-legalised) + traducere autorizată română. Londra și Manchester cer doar traducerea, fără apostilă.',
          href: '/apostila-fcdo-anglia',
          linkLabel: 'Cum obții apostila FCDO →',
          severity: 'warning',
        },
        {
          title: '⚠️ Toți minorii prezenți personal pentru titlu de călătorie',
          text: 'La Edinburgh, minorii indiferent de vârstă (inclusiv sub 14 ani) trebuie prezenți personal pentru titlul de călătorie. La Londra și Manchester, minorii sub 14 ani NU trebuie să fie prezenți.',
        },
        {
          title: 'ℹ️ Poștă: plic cu timbru 100 grame',
          text: 'Dacă solicitați livrarea documentelor prin poștă, plicul Royal Mail Special Delivery trebuie să aibă timbru pentru 100 de grame. Detaliu specific Edinburgh — la Londra și Manchester gramajul nu este specificat.',
        },
        {
          title: 'ℹ️ CRDS dovadă rezidență: fără share code',
          text: 'Edinburgh nu acceptă share code ca dovadă de rezidență pentru pașaport CRDS. Documente acceptate: NINo, ILR, pașaport britanic, card albastru/galben. Londra și Manchester acceptă și share code.',
        },
        {
          title: 'ℹ️ Consulat itinerant Belfast',
          text: 'Edinburgh organizează consultate itinerante în Belfast (22-23 mai 2026: vineri 09:00-17:00 + sâmbătă). Dacă locuiți în Irlanda de Nord, aceasta poate fi o alternativă la deplasarea la Edinburgh.',
        },
      ],
    },
    {
      id: 'regions',
      title: 'Zone arondate la Edinburgh',
      type: 'regions',
      regions: [
        'Scoția (toate regiunile)',
        'Irlanda de Nord',
        'Nordul Angliei până la Keswick, Penrith, Darlington, Stockton on Tees, Middlesbrough (inclusiv)',
      ],
      note: 'North East England (Northumberland, Durham, N. Yorkshire): atât Edinburgh cât și Manchester acceptă cereri din această zonă.',
      noteHref: '/consulat-competent-anglia',
    },
    {
      id: 'related',
      title: 'Pagini conexe',
      type: 'links',
      items: [
        { title: 'Apostila FCDO', description: 'Obligatorie la Edinburgh pentru pașaport furat.', href: '/apostila-fcdo-anglia' },
        { title: 'Pașaport temporar din Anglia', description: 'Edinburgh: ~18 GBP — cel mai ieftin din UK.', href: '/pasaport-temporar-anglia' },
        { title: 'Consulat Londra', description: 'Card acceptat. Fără apostilă pașaport furat. 1 traducere.', href: '/pasaport-consulat-londra' },
        { title: 'Consulat Manchester', description: 'EXCLUSIV numerar. Xerocopii obligatorii.', href: '/pasaport-consulat-manchester' },
      ],
    },
  ],

  faqItems: [
    {
      question: 'Cât costă pașaportul temporar la Edinburgh?',
      answer: '~18 GBP (față de ~46–52 GBP la Londra și Manchester). Taxa variabilă lunar — verificați pe edinburgh.mae.ro/node/2079.',
    },
    {
      question: 'Până la ce oră primesc la Edinburgh vineri?',
      answer: 'Vineri programul se încheie la 12:00 (nu 14:00 ca la Londra sau Manchester). Ridicare pașapoarte: L-J 15:00–17:00, nu vineri.',
    },
    {
      question: 'La Edinburgh trebuie apostilă pe raportul de poliție pentru pașaport furat?',
      answer: 'Da — Edinburgh este singurul consulat UK care cere apostilă FCDO pe raportul de poliție britanic, plus traducere autorizată română. Londra și Manchester cer doar traducerea.',
    },
    {
      question: 'Ce dovadă de rezidență UK acceptă Edinburgh pentru CRDS?',
      answer: 'NINo, ILR, pașaport britanic, card albastru/galben, card violet muncă, rezidență permanentă. Edinburgh NU acceptă share code (față de Londra și Manchester care îl acceptă).',
    },
  ],

  finalCtaTitle: 'Ești în Scoția sau Irlanda de Nord?',
  finalCtaText: 'Wizardul ActeRO îți confirmă documentele pentru Edinburgh cu detaliile specifice acestui consulat.',
  finalCtaLabel: 'Vreau lista exactă →',
  finalCtaHref: '/wizard?problem=pasaport&tara=uk',
};

export const edinburghGovernmentOfficeSchema = {
  '@context': 'https://schema.org',
  '@type': 'GovernmentOffice',
  name: 'Consulatul General al României la Edinburgh',
  url: 'https://edinburgh.mae.ro',
  address: { '@type': 'PostalAddress', streetAddress: '7-9 North St. David Street', addressLocality: 'Edinburgh', postalCode: 'EH2 1AW', addressCountry: 'GB' },
  telephone: '+441315249498',
  email: 'edinburgh@mae.ro',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '16:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '12:00' },
  ],
  areaServed: ['Scotland', 'Northern Ireland', 'North England to Middlesbrough'],
};

// ----------------------------------------------------------------
// 2. /pasaport-romania-marea-britanie
// ----------------------------------------------------------------

export const pasaportHubMetadata = {
  title: 'Pașaport românesc în Marea Britanie — Toate situațiile, Ghid 2026 | ActeRO',
  description:
    'CRDS, domiciliu România, minor, pierdut, temporar — toate tipurile de pașaport din UK. Londra, Manchester, Edinburgh. Programare econsulat.ro. Taxă GBP.',
  keywords: [
    'pasaport romanesc marea britanie',
    'pasaport romania anglia',
    'pasaport romanesc uk 2026',
    'pasaport crds anglia',
    'pasaport minor anglia',
    'pasaport temporar anglia',
    'pasaport pierdut anglia',
    'reinnoire pasaport romanesc uk',
  ],
  alternates: { canonical: 'https://www.actero.ro/pasaport-romania-marea-britanie' },
};

export const pasaportHubPageProps = {
  lpSlug: 'pasaport-romania-marea-britanie',
  lpTopic:
    'Hub complet pentru toate tipurile de pașaport românesc din Marea Britanie: CRDS, domiciliu România, minor CRDS, minor domiciliu România, pierdut/furat, temporar. Informații generale despre cele 3 consulate, taxe GBP, termen ~60 zile.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Pașaport România Marea Britanie', href: '/pasaport-romania-marea-britanie' },
  ],

  h1: 'Pașaport românesc în Marea Britanie — toate situațiile',

  tldr: {
    label: 'Răspuns rapid:',
    text:
      'Pașaportul românesc se obține la cele 3 consulate din UK (Londra, Manchester, Edinburgh), cu programare pe econsulat.ro. Termen ~60 zile lucrătoare. Taxă variabilă în GBP. Manchester: EXCLUSIV numerar. Edinburgh: pașaport temporar ~18 GBP (față de ~46 GBP la celelalte). Nu este necesară deplasarea în România.',
  },

  intro: 'Alege situația ta pentru a ajunge direct la ghidul corect.',
  ctaLabel: 'Vreau lista exactă pentru situația mea →',
  ctaHref: '/wizard?problem=pasaport&tara=uk',
  ctaNote: 'Fără cont · Gratuit',
  sourceNote: 'Actualizat: aprilie 2026 · Surse: cglondra.mae.ro · manchester.mae.ro · edinburgh.mae.ro',

  sections: [
    {
      id: 'guide-matrix',
      title: 'Ghidul potrivit situației tale',
      type: 'cards',
      items: [
        { title: 'Pașaport expirat în Anglia', description: 'CRDS sau domiciliu România — dezambiguizare și pași.', href: '/pasaport-expirat-anglia', badge: 'Cel mai căutat' },
        { title: 'Pașaport CRDS (domiciliu UK)', description: 'Cert naștere + dovadă rezidență UK. Edinburgh: fără share code.', href: '/pasaport-crds-anglia' },
        { title: 'Pașaport pierdut sau furat', description: 'Raport poliție + traducere. Edinburgh: + apostilă FCDO.', href: '/pasaport-pierdut-furat-anglia' },
        { title: 'Pașaport temporar urgent', description: '12 luni, 3 zile lucrătoare. Edinburgh: ~18 GBP.', href: '/pasaport-temporar-anglia' },
        { title: 'Pașaport minor din Anglia', description: 'Cert naștere britanic blocat. CRDS: condiție parental.', href: '/pasaport-minor-anglia' },
      ],
    },
    {
      id: 'key-facts',
      title: 'Date esențiale valabile pentru toate consulatele',
      type: 'facts',
      items: [
        { title: 'Termen: ~60 zile lucrătoare', text: 'Edinburgh în practică ~45 zile calendaristice. NU există urgență pentru pașaportul electronic. Dacă aveți o urgență demonstrată: pașaport temporar (3 zile lucrătoare).' },
        { title: 'Taxă variabilă în GBP', text: 'Taxa se actualizează lunar. Referință: ~46 GBP Londra/Manchester, ~52 GBP Edinburgh, ~18 GBP Edinburgh temporar. Verificați pe site-ul consulatului înainte de programare.' },
        { title: 'Programare pe econsulat.ro — GRATUITĂ', text: 'Toate serviciile necesită programare. Excepție: titlul de călătorie la Londra și Edinburgh se poate obține fără programare cu bilet ≤7 zile.' },
        { title: 'Manchester: EXCLUSIV numerar', text: 'Cardul nu este acceptat la Manchester. Aduceți suma exactă în GBP.', severity: 'warning' },
      ],
    },
    {
      id: 'consulates',
      title: 'Cele 3 consulate',
      type: 'links',
      items: [
        { title: 'Consulat Londra', description: 'Card acceptat. Itinerante 10 locații 2026.', href: '/pasaport-consulat-londra' },
        { title: 'Consulat Manchester', description: 'EXCLUSIV numerar. Temporar L-J 09:30-13:30.', href: '/pasaport-consulat-manchester' },
        { title: 'Consulat Edinburgh', description: 'Temporar ~18 GBP. Vineri 12:00. Fără programare la ridicare.', href: '/pasaport-consulat-edinburgh' },
      ],
    },
  ],

  faqItems: [
    { question: 'Trebuie să mă duc în România pentru pașaport dacă sunt în UK?', answer: 'Nu. Pașaportul se obține la consulatele din Londra, Manchester sau Edinburgh — programare pe econsulat.ro, termen ~60 zile.' },
    { question: 'Cât costă pașaportul românesc în UK?', answer: '~46 GBP Londra/Manchester, ~52 GBP Edinburgh electronic, ~18 GBP Edinburgh temporar. Taxă variabilă lunar în GBP — verificați pe site-ul consulatului.' },
    { question: 'Ce se întâmplă dacă pașaportul a expirat și trebuie să plec urgent?', answer: 'Pașaport temporar: 3 zile lucrătoare dacă aveți urgență demonstrată (~18–46 GBP). Titlu de călătorie: aceeași zi, gratuit, dar numai pentru România.' },
  ],

  finalCtaTitle: 'Nu știi ce tip de cerere îți trebuie?',
  finalCtaText: 'Wizardul ActeRO îți spune în 30 de secunde ghidul exact pentru situația ta.',
  finalCtaLabel: 'Vreau ghidul potrivit →',
  finalCtaHref: '/wizard?problem=pasaport&tara=uk',
};

// ----------------------------------------------------------------
// 3. /procura-notariala-anglia
// ----------------------------------------------------------------

export const procuraHubMetadata = {
  title: 'Procură notarială din Anglia — Aceeași zi, în GBP | ActeRO',
  description:
    'Procuri vânzare imobil, generală, CI, declarații notariale — autentificate la consulat. Solicitor britanic NU = valabil fără apostilă. Manchester: plic SD obligatoriu.',
  keywords: [
    'procura notariala anglia',
    'procura din anglia pentru romania',
    'procura vanzare imobil anglia',
    'procura consulat roman anglia',
    'acte notariale anglia',
    'declaratie notariala anglia',
    'cat costa o procura la consulat anglia',
  ],
  alternates: { canonical: 'https://www.actero.ro/procura-notariala-anglia' },
};

export const procuraHubPageProps = {
  lpSlug: 'procura-notariala-anglia',
  lpTopic: 'Hub pentru acte notariale din UK: procuri speciale (vânzare imobil, administrare, pensii, CI), declarații notariale, legalizare copii și traduceri. Autentificate la consulat în aceeași zi.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Procura notarială Anglia', href: '/procura-notariala-anglia' },
  ],

  h1: 'Procură notarială din Anglia — autentificare la consulat, aceeași zi',

  tldr: {
    label: 'Răspuns rapid:',
    text: 'Procurile și actele notariale se autentifică la consulatele din Londra, Manchester sau Edinburgh. Eliberate în aceeași zi. ⚠️ Solicitor britanic NU este echivalent — procura autentificată de solicitor britanic, chiar apostilată, nu este acceptată de SPCLEP România. ⚠️ Manchester: aduceți plic Royal Mail SD preplătit — actele notariale se trimit prin poștă, nu se ridică la ghișeu.',
  },

  intro: 'Alege tipul de act de care ai nevoie pentru a ajunge direct la ghidul corect.',
  ctaLabel: 'Vreau lista exactă pentru situația mea →',
  ctaHref: '/wizard?problem=procura&tara=uk',
  ctaNote: 'Fără cont · Gratuit',
  sourceNote: 'Actualizat: aprilie 2026 · Surse: cglondra.mae.ro · manchester.mae.ro · edinburgh.mae.ro',

  sections: [
    {
      id: 'guide-matrix',
      title: 'Ce act notarial ai nevoie?',
      type: 'cards',
      items: [
        { title: 'Procura vânzare proprietate', description: 'NU se autentifică contractul la consulat — se autentifică procura. Contractul se semnează la notarul din România.', href: '/procura-vanzare-proprietate-anglia' },
        { title: 'Procura reînnoire buletin (CI)', description: '6 fotografii Londra · 5 fotografii Manchester/Edinburgh. Procura CI: exclusiv la consulat.', href: '/buletin-romanesc-anglia' },
        { title: 'Declarație notarială', description: 'Consimțământ, stare civilă, acord parental. Aceeași zi.' },
        { title: 'Legalizare copii și traduceri', description: 'Document original + traducere autorizată română.' },
      ],
    },
    {
      id: 'critical',
      title: 'Reguli critice aplicabile tuturor actelor notariale',
      type: 'facts',
      items: [
        { title: '⚠️ Solicitor britanic NU înlocuiește consulatul', text: 'Procura autentificată de solicitor britanic nu este acceptată de SPCLEP România. Excepție: solicitor britanic + apostilă FCDO + traducere autorizată = document acceptat în România. Dar pentru procura CI, consulatul rămâne singura opțiune validă.', severity: 'warning' },
        { title: '⚠️ Manchester: acte notariale prin poștă', text: 'La Manchester actele notariale se trimit prin poștă — NU se ridică la ghișeu. Obligatoriu: plic Royal Mail Special Delivery preplătit (timbru 100g) + cerere de expediere.', severity: 'warning' },
        { title: 'ℹ️ Prezența personală obligatorie', text: 'Procurile nu pot fi autentificate prin corespondență, fax sau email. Trebuie să te prezinți personal la consulat.' },
        { title: 'ℹ️ Cetățeni străini: traducător la ghișeu', text: 'Dacă ești cetățean neromân, trebuie să fii însoțit de un traducător autorizat MJ România, prezent fizic la ghișeu.' },
      ],
    },
  ],

  faqItems: [
    { question: 'Pot vinde un imobil din România printr-o procura autentificată la consulatul din UK?', answer: 'Da. Autentifici procura la consulatul român din UK — contractul de vânzare se semnează de persoana împuternicită la notarul din România. Consulatul nu autentifică contractul direct.' },
    { question: 'Procura de la solicitor britanic este valabilă în România?', answer: 'Procura autentificată de solicitor britanic este acceptată în România DACĂ este apostilată la FCDO și tradusă autorizat în română. Excepție: procura CI — aceasta se autentifică exclusiv la consulat sau misiune diplomatică română.' },
  ],

  finalCtaTitle: 'Vrei lista exactă de documente?',
  finalCtaText: 'Wizardul ActeRO îți arată documentele necesare și consulatul potrivit.',
  finalCtaLabel: 'Vreau lista exactă →',
  finalCtaHref: '/wizard?problem=procura&tara=uk',
};

// ----------------------------------------------------------------
// 4. /acte-copil-nascut-in-anglia
// ----------------------------------------------------------------

export const copilHubMetadata = {
  title: 'Acte românești pentru copil născut în Anglia | ActeRO',
  description:
    'Fluxul complet pentru copil născut în UK: transcriere, certificat românesc și pașaport. Hub-ul principal pentru pașii în ordine.',
  keywords: [
    'acte copil nascut in anglia',
    'certificat nastere romanesc copii nascuti in anglia',
    'transcriere nastere anglia',
    'pasaport minor anglia',
    'long certificate anglia roman',
    'apostila fcdo certificat nastere copil',
    'acte copil nascut uk 2026',
  ],
  alternates: { canonical: 'https://www.actero.ro/acte-copil-nascut-in-anglia' },
};

export const copilHubPageProps = {
  lpSlug: 'acte-copil-nascut-in-anglia',
  lpTopic: 'Ghid complet pentru actele românești ale unui copil născut în Marea Britanie: pașii obligatorii în ordine (transcriere certificat britanic → certificat naștere românesc → pașaport / CI). Documente specifice UK: long certificate, apostilă FCDO, număr de exemplare traducere per consulat.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Acte copil născut în Anglia', href: '/acte-copil-nascut-in-anglia' },
  ],

  h1: 'Acte românești pentru copil născut în Anglia — pașii în ordine',

  tldr: {
    label: 'Răspuns rapid:',
    text: 'Copil născut în UK cu certificat britanic: (1) Transcriere la consulat → certificat de naștere românesc. (2) Cu certificatul românesc: pașaport și/sau CI. Certificatul britanic forma SCURTĂ nu este acceptat — trebuie forma LUNGĂ + apostilă FCDO. 1 exemplar traducere la Londra, 2 exemplare la Manchester și Edinburgh.',
  },

  intro: 'Orice document românesc pentru un copil născut în UK pornește de la același pas: transcrierea certificatului de naștere britanic în registrele române.',
  ctaLabel: 'Vreau pașii exacți pentru situația mea →',
  ctaHref: '/wizard?problem=transcriere&tara=uk',
  ctaNote: 'Fără cont · Gratuit',
  sourceNote: 'Actualizat: aprilie 2026 · Surse: cglondra.mae.ro · manchester.mae.ro · edinburgh.mae.ro',

  sections: [
    {
      id: 'order',
      title: 'Ordinea obligatorie a pașilor',
      type: 'steps',
      items: [
        { step: '1', title: 'Obții certificatul britanic forma LUNGĂ (long certificate)', text: 'General Register Office (GRO) UK emite două formate: forma scurtă (short certificate) și forma lungă (long certificate cu datele ambilor părinți). Numai forma lungă este acceptată pentru transcriere. Comandă pe gov.uk/order-copy-birth-death-marriage-certificate.' },
        { step: '2', title: 'Apostilezi la FCDO', text: 'Certificatul britanic trebuie apostilat la FCDO (gov.uk/get-document-legalised). Notarul britanic sau solicitorul NU pot face apostila.', href: '/apostila-fcdo-anglia', linkLabel: 'Ghid apostilă FCDO →' },
        { step: '3', title: 'Obții traducerea autorizată', text: '1 exemplar la Londra · 2 exemplare la Manchester și Edinburgh. Traducătorul trebuie să fie autorizat MJ România cu specimen de semnătură la consulat. Traducerea acoperă atât certificatul cât și apostila.' },
        { step: '4', title: 'Transcriere la consulat → certificat de naștere românesc', text: 'Aceeași zi dacă dosarul este complet. Ghid complet: transcriere naștere minor.', href: '/transcriere-nastere-anglia', linkLabel: 'Ghid transcriere naștere →' },
        { step: '5', title: 'Cu certificatul românesc: pașaport și/sau CI', text: 'Odată obținut certificatul de naștere românesc, poți depune cerere de pașaport (ghid #5-UK sau #6-UK) sau prima CI (ghid #12-UK).' },
      ],
    },
    {
      id: 'pitfalls',
      title: 'Cele mai frecvente greșeli',
      type: 'warnings',
      items: [
        { title: 'Forma scurtă în loc de forma lungă', text: 'Short certificate nu conține datele părinților și nu este acceptat. Comandați întotdeauna long certificate (costa mai mult dar este singurul acceptat).', severity: 'critical' },
        { title: 'Apostilă de la solicitor, nu de la FCDO', text: 'Solicitorul britanic nu poate emite apostilă validă pentru SPCLEP România. Apostila Haga se obține exclusiv de la FCDO.', severity: 'critical' },
        { title: '1 exemplar traducere la Manchester/Edinburgh', text: 'Manchester și Edinburgh cer 2 exemplare originale ale traducerii. Venind cu 1 exemplar, cererea nu va fi primită.', severity: 'warning' },
        { title: 'Părinți căsătoriți în UK fără transcriere căsătorie', text: 'Dacă părinții s-au căsătorit în UK ÎNAINTEA nașterii și căsătoria nu este transcrisă — mai întâi transcrierea căsătoriei (ghid #17-UK), abia apoi nașterea.', severity: 'warning' },
      ],
    },
    {
      id: 'related',
      title: 'Ghiduri detaliate',
      type: 'links',
      items: [
        { title: 'Transcriere certificat naștere britanic', description: '1 vs 2 exemplare. Edinburgh: 2 traduceri + 2 fotocopii per doc.', href: '/transcriere-nastere-anglia' },
        { title: 'Apostila FCDO', description: 'FCDO — nu solicitor britanic.', href: '/apostila-fcdo-anglia' },
        { title: 'Pașaport minor din Anglia', description: 'CRDS sau domiciliu România.', href: '/pasaport-minor-anglia' },
        { title: 'Prima CI minor 14+', description: 'Edinburgh: 4 fotografii + doc justificativ + 6-9 luni.', href: '/buletin-romanesc-anglia' },
      ],
    },
  ],

  faqItems: [
    { question: 'Copilul meu s-a născut în UK. Are nevoie de acte românești?', answer: 'Da, dacă cel puțin unul dintre părinți este cetățean român. Certificatul de naștere românesc este necesar pentru pașaport, CI, și orice act oficial în România.' },
    { question: 'Ce certificat britanic trebuie pentru transcriere?', answer: 'Forma lungă (long certificate) cu datele ambilor părinți, apostilată la FCDO. Forma scurtă (short certificate) nu este acceptată.' },
    { question: 'În cât timp primim certificatul de naștere românesc?', answer: 'Aceeași zi dacă dosarul este complet și CNP-ul este disponibil (copii din UK primesc CNP în câteva zile de la cerere). Edinburgh are termene similare.' },
  ],

  finalCtaTitle: 'Vrei pașii exacți pentru copilul tău?',
  finalCtaText: 'Wizardul ActeRO îți spune ordinea corectă și ce documente să pregătești pentru consulatul din zona ta.',
  finalCtaLabel: 'Vreau pașii exacți →',
  finalCtaHref: '/wizard?problem=transcriere&tara=uk',
};

// ----------------------------------------------------------------
// 5. /titlu-calatorie-anglia
// ----------------------------------------------------------------

export const titluHubMetadata = {
  title: 'Titlu de călătorie din Anglia — Ghid complet 2026 | ActeRO',
  description:
    'Titlu de călătorie pentru adulți și minori din UK. Gratuit, valabil 30 zile, exclusiv România. Londra/Edinburgh fără programare cu bilet. Manchester: email urgent.',
  keywords: [
    'titlu de calatorie anglia',
    'titlu calatorie anglia 2026',
    'titlu de calatorie consulat roman anglia',
    'titlu calatorie minor anglia',
    'titlu calatorie adult anglia',
    'titlu calatorie documente necesare anglia',
  ],
  alternates: { canonical: 'https://www.actero.ro/titlu-calatorie-anglia' },
};

export const titluHubPageProps = {
  lpSlug: 'titlu-calatorie-anglia',
  lpTopic: 'Hub pentru titlul de călătorie din UK. Gratuit, în aceeași zi, exclusiv pentru întoarcerea în România. Adult, minor sub 14 și minor 14-18 — reguli diferite de prezență.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Titlu de călătorie Anglia', href: '/titlu-calatorie-anglia' },
  ],

  h1: 'Titlu de călătorie din Anglia — gratuit, în aceeași zi',

  tldr: {
    label: 'Răspuns rapid:',
    text: 'Gratuit, valabil 30 zile, exclusiv pentru întoarcerea în România. Londra și Edinburgh: fără programare dacă ai bilet ≤7 zile. Manchester: programare obligatorie. Minori: reguli de prezență diferite — sub 14 ani nu trebuie prezenți la Londra/Manchester dar trebuie la Edinburgh.',
  },

  intro: 'Alege situația ta pentru ghidul detaliat.',
  ctaLabel: 'Vreau ghidul exact pentru situația mea →',
  ctaHref: '/wizard?problem=titlu-calatorie&tara=uk',
  ctaNote: 'Fără cont · Gratuit',
  sourceNote: 'Actualizat: aprilie 2026 · Surse: consulatele UK · ActeRO',

  sections: [
    {
      id: 'guide-matrix',
      title: 'Ghidul potrivit situației tale',
      type: 'cards',
      items: [
        { title: 'Titlu de călătorie urgent — adult', description: 'Londra/Edinburgh: fără programare cu bilet. Manchester: email obligatoriu.', href: '/titlu-calatorie-urgent-anglia', badge: 'Cel mai căutat' },
        { title: 'Titlu de călătorie minor sub 14 ani', description: 'Londra/Manchester: minor absent. Edinburgh: minor prezent obligatoriu.', href: '/titlu-calatorie-anglia' },
        { title: 'Titlu de călătorie minor 14-18 ani', description: 'Minor prezent la toate 3 consulatele.', href: '/titlu-calatorie-anglia' },
      ],
    },
    {
      id: 'key-facts',
      title: 'Date comune tuturor titlurilor de călătorie',
      type: 'facts',
      items: [
        { title: 'Gratuit — 0 GBP', text: 'Titlul de călătorie este un document gratuit la toate cele 3 consulate.' },
        { title: 'Valabil 30 zile — exclusiv România', text: 'Nu poate fi folosit pentru alte destinații. Valabilitatea încetează la intrarea în România.' },
        { title: 'Edinburgh: apostilă FCDO pentru pașaport furat', text: 'Dacă pașaportul a fost furat și solicitați titlu la Edinburgh — raport poliție + apostilă FCDO + traducere.', href: '/apostila-fcdo-anglia' },
      ],
    },
  ],

  faqItems: [
    { question: 'Titlul de călătorie este valabil pentru călătorii în UE din UK?', answer: 'Nu. Exclusiv pentru întoarcerea în România — o singură călătorie.' },
    { question: 'Cât costă titlul de călătorie în UK?', answer: 'Gratuit — 0 GBP.' },
  ],

  finalCtaTitle: 'Trebuie să pleci urgent?',
  finalCtaText: 'Wizardul ActeRO îți confirmă ce aduci și dacă poți merge fără programare.',
  finalCtaLabel: 'Vreau ghidul exact →',
  finalCtaHref: '/wizard?problem=titlu-calatorie&tara=uk',
};
