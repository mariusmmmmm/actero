// SEO PAGE COPY — /pasaport-expirat-anglia
// Tip: LEAF — Pagină de conversie · Sprint 1 final
// Component: LlmOptimizedPage
// Surse: uk_consulates_ts.ts + ghiduri #1-UK, #2-UK, #7-UK verificate live
// Generat: Aprilie 2026

// ============================================================
// ANALIZA PREALABILĂ
// ============================================================

/*
SEARCH INTENT:
  Conversie directă. Utilizatorul are pașaportul expirat și caută soluția
  concretă. Este cel mai înalt intent din toată seria UK — utilizatorul
  știe ce problemă are, vrea răspuns rapid. Două segmente:
  (A) Domiciliu UK (CRDS) — cerere diferită, nevoie de dovadă rezidență
  (B) Domiciliu România — cerere mai simplă, fără dovadă rezidență
  Pagina dezambiguizează imediat și trimite la ghidul corect.

KEYWORD PRINCIPAL:
  pasaport expirat anglia

KEYWORD-URI SECUNDARE:
  - pasaport romanesc expirat anglia ce fac
  - reinnoire pasaport romanesc anglia
  - pasaport expirat uk 2026
  - pasaport romanesc anglia reinnoire taxa
  - pasaport crds anglia expirat
  - pasaport domiciliu romania expirat anglia
  - pret pasaport romanesc anglia gbp 2026
  - termen pasaport romanesc anglia

UNGHI DIFERENȚIATOR:
  Dezambiguizare CRDS vs. domiciliu RO — confuzie frecventă în diaspora UK.
  Mulți nu știu că există două tipuri de cerere și că taxa diferă.
  Pagina clarifică în primul bloc și trimite direct la ghidul corect.
  Element unic UK față de toate celelalte țări: taxa GBP variabilă lunar
  (nu EUR fix ca IT/ES/DE) + Manchester numerar exclusiv.

DATE CHEIE (verificate live):
  - Termen pașaport: ~60 zile lucrătoare legal (Edinburgh: ~45 zile practic)
  - Taxa Londra/Manchester: ~46 GBP ✅ (variabilă lunar)
  - Taxa Edinburgh electronic: ~52 GBP ✅ (variabilă lunar)
  - Taxa Edinburgh temporar: ~18 GBP ✅
  - Manchester: EXCLUSIV numerar ✅
  - Edinburgh: Vineri 12:00 ✅ · Ridicare L-J 15:00–17:00 fără programare ✅
  - Verificare sosire: cglondra.mae.ro/cauta-pasaport / manchester.mae.ro/cauta-pasaport
  - Termen pașaport temporar: 3 zile lucrătoare (urgențe) ✅
  - NU există regim de urgență pentru pașaport electronic ✅
*/

// ============================================================
// METADATA
// ============================================================

export const metadata = {
  title: 'Pașaport românesc expirat în Anglia — ce faci | ActeRO',
  description:
    'CRDS sau domiciliu în România: proceduri diferite pentru pașaportul expirat în UK. Taxă în GBP, termen ~60 zile și reguli per consulat.',
  keywords: [
    'pasaport expirat anglia',
    'pasaport romanesc expirat anglia ce fac',
    'reinnoire pasaport romanesc anglia',
    'pasaport expirat uk 2026',
    'pasaport crds anglia expirat',
    'pret pasaport romanesc anglia',
    'termen pasaport romanesc anglia',
    'pasaport domiciliu romania expirat anglia',
  ],
  alternates: {
    canonical: 'https://www.actero.ro/pasaport-expirat-anglia',
  },
  openGraph: {
    title: 'Pașaport românesc expirat în Anglia — Ce faci 2026',
    description:
      'CRDS sau domiciliu în România — proceduri diferite. ~60 zile, taxă GBP, Manchester numerar exclusiv. Ghid complet pentru Londra, Manchester, Edinburgh.',
    url: 'https://www.actero.ro/pasaport-expirat-anglia',
    type: 'article',
  },
};

// ============================================================
// PROPS LlmOptimizedPage
// ============================================================

export const pageProps = {
  lpSlug: 'pasaport-expirat-anglia',
  lpTopic:
    'Ghid pentru reînnoirea pașaportului românesc expirat din Marea Britanie. Dezambiguizare CRDS (domiciliu UK) vs. domiciliu în România — proceduri, documente și taxe diferite. Consulatele din Londra, Manchester și Edinburgh. Taxe în GBP, termen ~60 zile lucrătoare.',

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
    {
      label: 'Pașaport expirat Anglia',
      href: '/pasaport-expirat-anglia',
    },
  ],

  // ----------------------------------------------------------
  // HERO
  // ----------------------------------------------------------
  h1: 'Pașaport românesc expirat în Anglia — ce faci, unde mergi, cât durează',

  tldr: {
    label: 'Răspuns rapid:',
    text:
      'Pașaportul se reînnoiește la consulatul român din zona ta (Londra, Manchester sau Edinburgh), cu programare pe econsulat.ro. Termen: ~60 zile lucrătoare. Taxă în GBP (~46–52 GBP, variabilă lunar). Manchester: EXCLUSIV numerar. Nu există urgență pentru pașaportul electronic — dacă trebuie să pleci rapid, pașaportul temporar este soluția.',
  },

  intro:
    'Primul lucru de stabilit: domiciliul tău oficial este în UK sau în România? Procedura, documentele necesare și taxa diferă în funcție de răspuns.',

  ctaLabel: 'Vreau lista exactă de documente pentru situația mea →',
  ctaHref: '/wizard?problem=pasaport&tara=uk',
  ctaNote: 'Fără cont · Începi gratuit · 30 de secunde',

  sourceNote:
    'Actualizat: aprilie 2026 · Surse: cglondra.mae.ro · manchester.mae.ro · edinburgh.mae.ro · ActeRO',

  // ----------------------------------------------------------
  // SECTIONS
  // ----------------------------------------------------------
  sections: [
    {
      id: 'disambiguation',
      title: 'Primul pas: care este domiciliul tău oficial?',
      type: 'decision',
      intro:
        'Există două tipuri de cerere de pașaport. Alegerea greșită înseamnă că vei fi refuzat la ghișeu.',
      options: [
        {
          label: 'Domiciliu înregistrat în UK (CRDS)',
          description:
            'Pașaportul vechi arată o adresă din UK sau conține mențiunea CRDS. Ai locuit oficial în UK și ai înregistrat domiciliul la consulat.',
          requirements: [
            'Certificat de naștere românesc — original',
            'Dovadă rezidență UK (share code, NINo, P60, P45, council tax, ILR)',
            'Fotografiere biometrică la consulat',
          ],
          fee: '~46 GBP Londra/Manchester · ~52 GBP Edinburgh (variabilă lunar)',
          guideHref: '/pasaport-crds-anglia',
          guideLabel: 'Ghid pașaport CRDS →',
          badge: 'CRDS',
        },
        {
          label: 'Domiciliu în România',
          description:
            'Pașaportul vechi arată un județ din România. Locuiești în UK dar domiciliul oficial rămâne în România.',
          requirements: [
            'Carte de identitate românească valabilă — original',
            'Fără dovadă de rezidență UK necesară',
            'Fotografiere biometrică la consulat',
          ],
          fee: '~46 GBP Londra/Manchester · ~52 GBP Edinburgh (variabilă lunar)',
          guideHref: '/pasaport-romania-marea-britanie',
          guideLabel: 'Ghid pașaport domiciliu România →',
          badge: 'Domiciliu RO',
        },
      ],
    },

    {
      id: 'process',
      title: 'Cum funcționează procesul de reînnoire',
      type: 'steps',
      items: [
        {
          step: '1',
          title: 'Faci programarea pe econsulat.ro',
          text:
            'Mergi pe econsulat.ro, selectezi „Pașapoarte" și tipul cererii (CRDS sau domiciliu România). Încarci documentele scanate. Slotul de programare apare după aprobare. Programările sunt gratuite.',
        },
        {
          step: '2',
          title: 'Te prezinți la consulat',
          text:
            'Aduci documentele în original. La ghișeu: fotografiere biometrică + amprente, semnezi cererea, plătești taxa în GBP. Primești chitanța de depunere — fotografiaz-o imediat.',
        },
        {
          step: '3',
          title: 'Aștepți ~60 de zile lucrătoare',
          text:
            'Pașaportul se produce în România și se trimite la consulat. Termen legal: 60 zile lucrătoare (UK = non-UE). Edinburgh în practică ~45 zile calendaristice. Nu există regim de urgență pentru pașaportul electronic.',
        },
        {
          step: '4',
          title: 'Ridici sau primești pașaportul prin poștă',
          text:
            'Verifici sosirea pe cglondra.mae.ro/cauta-pasaport (Londra) sau manchester.mae.ro/cauta-pasaport (Manchester). Edinburgh: ridicare L-J 15:00–17:00, fără programare prealabilă. Alternativ: plic Royal Mail Special Delivery preplătit depus la cerere.',
        },
      ],
    },

    {
      id: 'consulate-rules',
      title: 'Reguli specifice per consulat — ce să nu uiți',
      type: 'warnings-per-consulate',
      consulates: [
        {
          name: 'Londra',
          color: 'neutral',
          rules: [
            '✅ Plată cu cardul (preferabil)',
            '✅ Verificare sosire: cglondra.mae.ro/cauta-pasaport',
            '✅ Ridicare cu programare pe econsulat.ro sau prin poștă (plic Royal Mail SD)',
            'ℹ️ Taxă: ~46 GBP (variabilă lunar) — verificați pe cglondra.mae.ro/node/762',
          ],
        },
        {
          name: 'Manchester',
          color: 'warning',
          rules: [
            '⚠️ EXCLUSIV NUMERAR — cardul nu este acceptat',
            '⚠️ Verificați suma exactă pe manchester.mae.ro înainte de programare',
            '✅ Verificare sosire: manchester.mae.ro/cauta-pasaport',
            '✅ Ridicare L-J 15:00–16:30 · V 10:00–14:00',
            '✅ Poștă disponibilă — plic Royal Mail SD preplătit',
          ],
        },
        {
          name: 'Edinburgh',
          color: 'info',
          rules: [
            '⚠️ Vineri programul se încheie la 12:00 (nu 14:00)',
            '✅ Ridicare L-J 15:00–17:00, FĂRĂ programare prealabilă',
            '✅ Pașaport temporar: ~18 GBP (față de ~46–52 GBP electronic)',
            '✅ Termen practic: ~45 zile calendaristice',
            '✅ Poștă: plic Royal Mail SD cu timbru 100g',
          ],
        },
      ],
    },

    {
      id: 'urgent',
      title: 'Trebuie să pleci urgent? Pașaportul temporar',
      type: 'highlight',
      text:
        'Dacă ai o urgență demonstrată (bilet de avion iminent, urgență medicală, urgență familială) și nu poți aștepta 60 de zile, poți solicita un pașaport temporar (valabil 12 luni). Se eliberează în 3 zile lucrătoare pentru urgențe. Taxa la Edinburgh: ~18 GBP — semnificativ mai ieftină față de Londra și Manchester (~46 GBP). Atenție la Manchester: depunerea temporar se face EXCLUSIV L-J 09:30–13:30.',
      ctaLabel: 'Ghid pașaport temporar →',
      ctaHref: '/pasaport-temporar-anglia',
      note:
        'Dacă nu ai niciun document valabil și trebuie să te întorci imediat în România: titlul de călătorie se eliberează în aceeași zi, gratuit. Ghid →',
      noteHref: '/titlu-calatorie-urgent-anglia',
    },

    {
      id: 'ci-warning',
      title: 'Atenție: CI trebuie să fie valabilă la ridicarea pașaportului',
      type: 'warning-block',
      text:
        'Dacă ai domiciliu în România și reînnoiești pașaportul, CI-ul tău trebuie să fie valabil nu doar la depunere, ci și la ridicarea pașaportului (~60 de zile mai târziu). Dacă CI-ul expiră în interval — nu vei putea ridica pașaportul. Verifică data de expirare a CI înainte de programare. Dacă expiră în mai puțin de 70 de zile, rezolvă mai întâi CI-ul prin procură (ghid #11-UK).',
      href: '/buletin-romanesc-anglia',
      linkLabel: 'Procură reînnoire CI din UK →',
    },

    {
      id: 'related',
      title: 'Pagini conexe utile',
      type: 'links',
      items: [
        {
          title: 'Pașaport CRDS din Anglia',
          description:
            'Dacă domiciliul este înregistrat în UK — documente specifice CRDS.',
          href: '/pasaport-crds-anglia',
        },
        {
          title: 'Pașaport temporar din Anglia',
          description:
            'Urgențe: 3 zile lucrătoare. Edinburgh: ~18 GBP. Manchester: L-J 09:30–13:30.',
          href: '/pasaport-temporar-anglia',
        },
        {
          title: 'Pașaport pierdut sau furat în Anglia',
          description:
            'Raport poliție + traducere. Edinburgh: apostilă FCDO obligatorie.',
          href: '/pasaport-pierdut-furat-anglia',
        },
        {
          title: 'Consulat Londra — adresă, program, taxă',
          href: '/pasaport-consulat-londra',
          description: 'Glen House, Hammersmith. Card acceptat. Itinerante 2026.',
        },
        {
          title: 'Consulat Manchester — adresă, program, taxă',
          href: '/pasaport-consulat-manchester',
          description: 'Cooper Street. EXCLUSIV numerar. Temporar L-J 09:30–13:30.',
        },
        {
          title: 'Consulat Edinburgh — adresă, program, taxă',
          href: '/pasaport-consulat-edinburgh',
          description: 'North St. David Street. Temporar ~18 GBP. Vineri 12:00.',
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
        'Care este diferența dintre CRDS și domiciliu în România pentru pașaport?',
      answer:
        'CRDS (Cetățean Român cu Domiciliul în Străinătate) înseamnă că ți-ai înregistrat oficial domiciliul în UK la consulat — pașaportul arată o adresă UK. Dacă domiciliul rămâne în România, pașaportul arată un județ românesc. Cele două cereri au documente diferite: CRDS necesită certificat de naștere și dovadă de rezidență UK; domiciliu România necesită CI valabilă, fără dovadă de rezidență UK.',
    },
    {
      question: 'Cât durează reînnoirea pașaportului în UK?',
      answer:
        'Termenul legal este 60 de zile lucrătoare pentru UK (țară non-UE). Edinburgh în practică finalizează în aproximativ 45 de zile calendaristice. Nu există regim de urgență pentru pașaportul electronic. Dacă aveți o urgență demonstrată, pașaportul temporar se eliberează în 3 zile lucrătoare.',
    },
    {
      question: 'Cât costă pașaportul românesc în UK?',
      answer:
        'Taxa variază lunar și se exprimă în GBP (este legată de cursul EUR). Referință orientativă: ~46 GBP la Londra și Manchester, ~52 GBP la Edinburgh pentru pașaport electronic. Pașaport temporar la Edinburgh: ~18 GBP. Verificați suma curentă pe site-ul consulatului înainte de programare.',
    },
    {
      question: 'Pot plăti cu cardul la consulat în UK?',
      answer:
        'Depinde de consulat. Londra: preferabil card. Edinburgh: numerar sau card. Manchester: EXCLUSIV NUMERAR — cardul nu este acceptat. La Manchester aduceți suma exactă în GBP.',
    },
    {
      question: 'Pașaportul meu expirat. Pot totuși să plec din UK?',
      answer:
        'Nu — pașaportul expirat nu este acceptat pentru călătorii internaționale din UK. Opțiunile disponibile: (1) pașaport temporar dacă aveți urgență demonstrată (3 zile lucrătoare, ~18–46 GBP); (2) titlu de călătorie dacă trebuie să vă întoarceți urgent în România (aceeași zi, gratuit, valabil 30 zile); (3) pașaport electronic standard (~60 zile lucrătoare).',
    },
    {
      question: 'Cum verific că pașaportul meu a sosit la consulat?',
      answer:
        'Londra: cglondra.mae.ro/cauta-pasaport. Manchester: manchester.mae.ro/cauta-pasaport. Edinburgh: contactați consulatul direct sau urmăriți pe econsulat.ro.',
    },
    {
      question: 'Trebuie să mă duc în România pentru pașaport?',
      answer:
        'Nu. Pașaportul românesc se obține integral de la consulatele din UK — Londra, Manchester sau Edinburgh. Programare pe econsulat.ro. Pașaportul se produce în România și se trimite la consulat. Nu este necesară nicio deplasare în România.',
    },
  ],

  // ----------------------------------------------------------
  // FINAL CTA
  // ----------------------------------------------------------
  finalCtaTitle: 'Vrei lista exactă pentru situația ta?',
  finalCtaText:
    'CRDS sau domiciliu în România, Londra sau Manchester sau Edinburgh — wizardul ActeRO îți spune exact ce aduci și cum faci programarea.',
  finalCtaLabel: 'Vreau lista exactă de documente →',
  finalCtaHref: '/wizard?problem=pasaport&tara=uk',
};

// ============================================================
// SCHEMA.ORG
// ============================================================

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/pasaport-expirat-anglia#article',
  headline:
    'Pașaport românesc expirat în Anglia — ce faci, unde mergi, cât durează',
  description:
    'Pașaportul expirat în UK: CRDS sau domiciliu în România — proceduri diferite. Londra, Manchester, Edinburgh. ~60 zile lucrătoare, taxă în GBP.',
  url: 'https://www.actero.ro/pasaport-expirat-anglia',
  inLanguage: 'ro',
  datePublished: '2026-04-01',
  dateModified: '2026-04-24',
  author: { '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@id': 'https://www.actero.ro/#organization' },
  about: [
    { '@type': 'Thing', name: 'Pașaport românesc' },
    { '@type': 'Thing', name: 'CRDS' },
    { '@type': 'GovernmentOrganization', name: 'Consulatul General al României la Londra' },
    { '@type': 'GovernmentOrganization', name: 'Consulatul General al României la Manchester' },
    { '@type': 'GovernmentOrganization', name: 'Consulatul General al României la Edinburgh' },
  ],
};

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' },
    { '@type': 'ListItem', position: 2, name: 'Acte românești Marea Britanie', item: 'https://www.actero.ro/acte-romanesti-marea-britanie' },
    { '@type': 'ListItem', position: 3, name: 'Pașaport România Marea Britanie', item: 'https://www.actero.ro/pasaport-romania-marea-britanie' },
    { '@type': 'ListItem', position: 4, name: 'Pașaport expirat Anglia', item: 'https://www.actero.ro/pasaport-expirat-anglia' },
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cât durează reînnoirea pașaportului în UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Termenul legal este 60 de zile lucrătoare (UK = non-UE). Edinburgh în practică ~45 zile calendaristice. Nu există urgență pentru pașaportul electronic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cât costă pașaportul românesc în UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Taxa variabilă lunar în GBP: ~46 GBP Londra/Manchester, ~52 GBP Edinburgh electronic, ~18 GBP Edinburgh temporar. Verificați suma curentă pe site-ul consulatului.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pot plăti cu cardul la consulatul din Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nu. Manchester acceptă EXCLUSIV numerar. Londra: preferabil card. Edinburgh: numerar sau card.',
      },
    },
    {
      '@type': 'Question',
      name: 'Trebuie să mă duc în România pentru pașaport dacă sunt în UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nu. Pașaportul se obține la consulatele din Londra, Manchester sau Edinburgh, cu programare pe econsulat.ro. Nu este necesară deplasarea în România.',
      },
    },
    {
      '@type': 'Question',
      name: 'Care este diferența dintre CRDS și domiciliu România pentru pașaport?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CRDS: domiciliu înregistrat în UK — necesită certificat de naștere + dovadă rezidență UK. Domiciliu România: necesită doar CI românească valabilă, fără dovadă rezidență UK.',
      },
    },
  ],
};

// ============================================================
// NOTE INTERNE
// ============================================================

/*
ELEMENT CENTRAL — Decision block CRDS vs. domiciliu RO:
  Aceasta este cea mai importantă dezambiguizare din toată platforma UK.
  Prezentată ca un bloc de decizie cu 2 opțiuni clare, fiecare cu cerințe
  și link direct la ghidul specific. Analogul nu există la ES sau IT
  deoarece acolo tipul de cerere nu variază la fel de dramatic.

SECȚIUNEA CI VALABILĂ LA RIDICARE:
  Regula este specifică pașaportului cu domiciliu România și este o
  capcană reală — CI poate expira în cele 60 de zile de producție.
  Menționată explicit cu link spre procura CI (#11-UK).

PAGINI NECESARE LA LANSARE:
  - /pasaport-crds-anglia
  - /pasaport-romania-marea-britanie
  - /pasaport-temporar-anglia
  - /pasaport-pierdut-furat-anglia
  - /pasaport-consulat-londra ← deja generat
  - /pasaport-consulat-manchester
  - /pasaport-consulat-edinburgh
  - /buletin-romanesc-anglia
  - /titlu-calatorie-urgent-anglia
  - /wizard?problem=pasaport&tara=uk

RECOMANDAT: Lansați această pagină odată cu /pasaport-crds-anglia pentru
  ca decision block să aibă ambele destinații active.
*/
