// SEO PAGE COPY — /titlu-calatorie-urgent-anglia
// Tip: LEAF conversie · intent urgent
// Component: LlmOptimizedPage
// Surse: ghid #8-UK, #9-UK, #10-UK verificate live — Aprilie 2026

export const metadata = {
  title: 'Titlu de călătorie urgent din Anglia — Gratuit, aceeași zi | ActeRO',
  description:
    'Londra și Edinburgh: fără programare dacă ai bilet ≤7 zile. Manchester: programare obligatorie (email urgent). Gratuit, valabil 30 zile, exclusiv pentru România.',
  keywords: [
    'titlu calatorie urgent anglia',
    'titlu de calatorie urgent anglia',
    'titlu calatorie anglia aceeasi zi',
    'titlu calatorie fara programare anglia',
    'titlu calatorie documente necesare anglia',
    'titlu calatorie gratuit anglia',
    'consulat roman londra titlu calatorie fara programare',
    'titlu calatorie manchester programare',
  ],
  alternates: { canonical: 'https://www.actero.ro/titlu-calatorie-urgent-anglia' },
  openGraph: {
    title: 'Titlu de călătorie urgent din Anglia — Gratuit, aceeași zi',
    description: 'Londra/Edinburgh: fără programare cu bilet ≤7 zile. Manchester: email obligatoriu. Gratuit, 30 zile, numai România.',
    url: 'https://www.actero.ro/titlu-calatorie-urgent-anglia',
    type: 'article',
  },
};

export const pageProps = {
  lpSlug: 'titlu-calatorie-urgent-anglia',
  lpTopic:
    'Ghid pentru obținerea titlului de călătorie urgent din UK. Gratuit, eliberat în aceeași zi, valabil 30 zile, exclusiv pentru întoarcerea în România. Londra și Edinburgh: fără programare dacă ai bilet ≤7 zile lucrătoare. Manchester: programare obligatorie prin email. Edinburgh: apostilă FCDO obligatorie dacă pașaportul a fost furat.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Titlu de călătorie Anglia', href: '/titlu-calatorie-anglia' },
    { label: 'Titlu urgent Anglia', href: '/titlu-calatorie-urgent-anglia' },
  ],

  h1: 'Titlu de călătorie urgent din Anglia — gratuit, în aceeași zi',

  tldr: {
    label: 'Răspuns rapid:',
    text:
      'Londra și Edinburgh: te prezinți fără programare dacă ai bilet de călătorie spre România cu plecare în maxim 7 zile lucrătoare. Manchester: programare obligatorie — email la manchester.consul@mae.ro cu biletul atașat. Gratuit, valabil 30 de zile, folosit exclusiv pentru întoarcerea în România.',
  },

  intro:
    'Dacă nu ai niciun document de călătorie valabil și trebuie să te întorci urgent în România, titlul de călătorie este soluția cea mai rapidă. Procedura diferă semnificativ între consulatele din UK.',

  ctaLabel: 'Vreau traseul exact pentru situația mea →',
  ctaHref: '/wizard?problem=titlu-calatorie&tara=uk',
  ctaNote: 'Fără cont · Gratuit',

  sourceNote: 'Actualizat: aprilie 2026 · Surse: cglondra.mae.ro · manchester.mae.ro · edinburgh.mae.ro',

  sections: [
    {
      id: 'rules-per-consulate',
      title: 'Reguli per consulat — diferențe critice',
      type: 'comparison-cards',
      cards: [
        {
          name: 'Londra',
          color: 'green',
          highlight: 'Fără programare cu bilet ≤7 zile',
          rules: [
            '✅ Te prezinți direct la ghișeu cu biletul de călătorie spre România (max 7 zile lucrătoare)',
            '✅ Sau faci programare pe econsulat.ro dacă nu pleci în 7 zile',
            'ℹ️ Adresă: Glen House, etajul 1, 22 Glenthorne Road, Hammersmith, W6 0PP',
            'ℹ️ Program: L-J 09:00–16:00 · V 09:00–14:00',
          ],
        },
        {
          name: 'Edinburgh',
          color: 'green',
          highlight: 'Fără programare cu bilet ≤7 zile · toți minorii prezenți',
          rules: [
            '✅ Fără programare dacă ai bilet ≤7 zile lucrătoare',
            '✅ Sau programare pe econsulat.ro',
            '⚠️ Vineri program până la 12:00',
            '⚠️ Dacă pașaportul furat: raport poliție + apostilă FCDO + traducere autorizată',
            '⚠️ Minori: TOȚI prezenți personal, indiferent de vârstă',
          ],
        },
        {
          name: 'Manchester',
          color: 'warning',
          highlight: 'Programare OBLIGATORIE — nicio excepție',
          rules: [
            '⚠️ Nu te prezenta fără programare — nu vei fi primit',
            '📧 Urgențe (plecare ≤48h): trimite email la manchester.consul@mae.ro',
            'ℹ️ În email: numele tău + data nașterii + copia biletului de călătorie',
            'ℹ️ Sau programare normală pe econsulat.ro',
            '⚠️ Aduceți 2 fotografii tip pașaport (fundal alb)',
          ],
        },
      ],
    },
    {
      id: 'documents',
      title: 'Ce documente aduci',
      type: 'checklist-conditional',
      items: [
        { text: 'Biletul de călătorie spre România — original sau printout (avion, tren, autocar, ferryboat)', required: true },
        { text: 'Orice act de identitate disponibil: CI sau pașaport expirat / permis de conducere românesc / livret militar', note: 'Dacă nu ai niciun document, trebuie să cunoști CNP-ul' },
        { text: '[DACĂ PAȘAPORT PIERDUT] Declarație de pierdere — completezi la ghișeu, nu aduci nimic suplimentar' },
        { text: '[DACĂ PAȘAPORT FURAT — Londra/Manchester] Raport poliție britanică — original + traducere autorizată română' },
        { text: '[DACĂ PAȘAPORT FURAT — Edinburgh] Raport poliție + apostilă FCDO + traducere autorizată română' },
        { text: '[DACĂ MINOR SUB 14 — Londra/Manchester] Ambii parties prezenți + 2 fotografii ale minorului (fundal alb)' },
        { text: '[DACĂ MINOR — Edinburgh] Minor prezent personal + ambii parties' },
        { text: '[DACĂ MANCHESTER] Original + xerocopie pentru fiecare document + 2 fotografii tip pașaport' },
      ],
    },
    {
      id: 'limitations',
      title: 'Ce trebuie să știi despre titlul de călătorie',
      type: 'facts',
      items: [
        {
          title: 'Valabil 30 de zile — exclusiv pentru România',
          text: 'Titlul de călătorie nu poate fi folosit pentru alte destinații decât România. La intrarea în România valabilitatea încetează — nu poți folosi același document pentru a reveni în UK.',
        },
        {
          title: 'La întoarcerea din România ai nevoie de pașaport sau CI',
          text: 'Pentru a reveni în UK după vizita în România trebuie să ai un document valabil (pașaport sau CI). Profită de șederea în România pentru a-ți reînnoi documentele — la SPCLEP pentru CI sau serviciul de pașapoarte pentru pașaport.',
        },
        {
          title: 'Caz special: titlu pentru procura CI',
          text: 'Dacă nu ai CI sau pașaport valabil și ai nevoie să autentifici o procură CI la consulat — programează-te la „Procura CI" (nu la titlu de călătorie separat). Titlul se eliberează automat la aceeași programare, ca document de identificare.',
          href: '/buletin-romanesc-anglia',
          linkLabel: 'Ghid procura CI →',
        },
      ],
    },
    {
      id: 'vs-temporar',
      title: 'Titlu de călătorie vs. pașaport temporar',
      type: 'comparison',
      rows: [
        { aspect: 'Cost', titlu: '✅ GRATUIT', temporar: '~18–46 GBP' },
        { aspect: 'Termen', titlu: '✅ Aceeași zi', temporar: '3 zile lucrătoare (urgențe)' },
        { aspect: 'Valabilitate', titlu: '30 zile', temporar: '✅ 12 luni' },
        { aspect: 'Destinație', titlu: 'EXCLUSIV România', temporar: '✅ Orice destinație' },
        { aspect: 'Programare Londra/Edinburgh', titlu: '✅ Fără (bilet ≤7 zile)', temporar: 'Da (econsulat.ro)' },
        { aspect: 'Programare Manchester', titlu: 'Email obligatoriu', temporar: 'Econsulat.ro' },
      ],
      note: 'Dacă ai nevoie să călătorești în altă destinație decât România sau ai timp să aștepți, pașaportul temporar este soluția potrivită.',
      noteHref: '/pasaport-temporar-anglia',
    },
    {
      id: 'related',
      title: 'Pagini conexe',
      type: 'links',
      items: [
        { title: 'Pașaport temporar din Anglia', description: '12 luni, orice destinație, Edinburgh ~18 GBP.', href: '/pasaport-temporar-anglia' },
        { title: 'Pașaport expirat în Anglia', description: 'Reînnoire ~60 zile, taxă GBP, CRDS sau domiciliu România.', href: '/pasaport-expirat-anglia' },
        { title: 'Apostila FCDO', description: 'Edinburgh: necesară pe raportul de poliție pentru pașaport furat.', href: '/apostila-fcdo-anglia' },
        { title: 'Consulat Londra', description: 'Adresă, program, L-J 09–16 / V 09–14.', href: '/pasaport-consulat-londra' },
        { title: 'Consulat Manchester', description: 'Urgențe: email manchester.consul@mae.ro.', href: '/pasaport-consulat-manchester' },
        { title: 'Consulat Edinburgh', description: 'Fără programare cu bilet. Vineri 12:00.', href: '/pasaport-consulat-edinburgh' },
      ],
    },
  ],

  faqItems: [
    {
      question: 'Pot merge la consulat fără programare pentru titlu de călătorie?',
      answer: 'Londra și Edinburgh: da, dacă ai bilet de călătorie spre România cu plecare în maxim 7 zile lucrătoare. Manchester: nu — programare obligatorie prin email (manchester.consul@mae.ro) sau econsulat.ro.',
    },
    {
      question: 'Ce bilet este acceptat pentru titlul de călătorie fără programare?',
      answer: 'Bilet de avion, tren, autocar sau ferryboat cu plecare în România în maxim 7 zile lucrătoare, pe numele tău. Rezervarea trebuie să fie confirmată (nu provizorie).',
    },
    {
      question: 'Câte zile este valabil titlul de călătorie?',
      answer: '30 de zile de la data aleasă. Valabilitatea încetează la intrarea în România — nu poate fi folosit pentru alte destinații sau pentru a reveni în UK.',
    },
    {
      question: 'Cât costă titlul de călătorie la consulat?',
      answer: 'Gratuit — 0 GBP. Nu există nicio taxă pentru titlul de călătorie.',
    },
    {
      question: 'Am pierdut pașaportul. Pot totuși obține titlul de călătorie?',
      answer: 'Da. Declari pierderea direct la ghișeu — completezi o declarație pe proprie răspundere. Nu ai nevoie de documente suplimentare dacă pașaportul a fost pierdut (nu furat). Dacă a fost furat: raport poliție + traducere (+ apostilă FCDO dacă ești la Edinburgh).',
    },
  ],

  finalCtaTitle: 'Trebuie să pleci urgent în România?',
  finalCtaText: 'Wizardul ActeRO îți confirmă în 30 de secunde ce aduci și dacă poți merge fără programare.',
  finalCtaLabel: 'Vreau traseul exact →',
  finalCtaHref: '/wizard?problem=titlu-calatorie&tara=uk',
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Pot merge fără programare pentru titlu de călătorie la consulatul din Londra?',
      acceptedAnswer: { '@type': 'Answer', text: 'Da, dacă ai bilet spre România în maxim 7 zile lucrătoare. La Manchester programarea este obligatorie — email la manchester.consul@mae.ro.' },
    },
    {
      '@type': 'Question',
      name: 'Cât costă titlul de călătorie în Anglia?',
      acceptedAnswer: { '@type': 'Answer', text: 'Gratuit — 0 GBP la toate cele 3 consulate.' },
    },
    {
      '@type': 'Question',
      name: 'Titlul de călătorie este valabil pentru călătorii în UE din Anglia?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nu. Titlul de călătorie este valabil exclusiv pentru o singură călătorie în România. Nu poate fi folosit pentru alte destinații.' },
    },
  ],
};
