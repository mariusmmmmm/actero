// SEO PAGE COPY — /acte-romanesti-marea-britanie
// Tip: HUB PRINCIPAL — Marea Britanie
// Component: LlmOptimizedPage
// Analog: /acte-romanesti-spania (live, structură verificată)
// Generat: Aprilie 2026

// ============================================================
// ANALIZA PREALABILĂ
// ============================================================

/*
SEARCH INTENT:
  Informațional broad → conversie. Utilizatorul a aterizat căutând „acte
  românești anglia", „documente românești marea britanie" sau echivalente.
  Nu știe exact de ce anume are nevoie — caută un punct de intrare clar.
  Intent secundar: validare că există o sursă în română, actualizată 2026.

KEYWORD PRINCIPAL:
  acte romanesti anglia

KEYWORD-URI SECUNDARE:
  - acte romanesti marea britanie
  - acte romanesti uk 2026
  - pasaport romanesc anglia
  - buletin romanesc anglia
  - consulat roman anglia
  - titlu calatorie anglia
  - procura notariala anglia
  - acte romanesti dupa brexit
  - consulat roman londra manchester edinburgh

UNGHI DIFERENȚIATOR față de paginile hub Spania/Italia/Germania:
  Singurul hub din ActeRO care include un context post-Brexit explicit.
  Mulți români din UK sunt confuzi: pot călători în UE cu buletinul sau nu?
  Paginile MAE nu răspund direct. Aceasta o face — clar, pe loc.
  Al doilea diferențiator: 3 consulate cu reguli radical diferite
  (Manchester numerar exclusiv / Edinburgh 18 GBP temporar / Edinburgh vineri 12:00).

CE TREBUIE VERIFICAT ÎNAINTE DE PUBLICARE:
  - Confirmare email Edinburgh apostilă furt (UK-G3-OI-1 deschis)
  - Manchester fotografii 14+ biometrice sau aduse (UK-G10-OI-1)
  - Taxele exacte în GBP la momentul publicării (variabile lunar)
*/

// ============================================================
// METADATA
// ============================================================

export const metadata = {
  title: 'Acte românești în Marea Britanie — Ghid complet 2026 | ActeRO',
  description:
    'Pașaport, buletin, titlu de călătorie, procuri — ghid pas cu pas pentru românii din UK. Londra, Manchester, Edinburgh. Date verificate live, fără drumuri degeaba.',
  keywords: [
    'acte romanesti anglia',
    'acte romanesti marea britanie',
    'pasaport romanesc anglia',
    'buletin romanesc anglia',
    'consulat roman londra',
    'consulat roman manchester',
    'consulat roman edinburgh',
    'titlu calatorie anglia',
    'procura notariala anglia',
    'acte romanesti uk 2026',
  ],
  alternates: {
    canonical: 'https://www.actero.ro/acte-romanesti-marea-britanie',
  },
  openGraph: {
    title: 'Acte românești în Marea Britanie — Ghid complet 2026',
    description:
      'Pașaport, buletin, titlu de călătorie, procuri — ghid pas cu pas. Londra, Manchester, Edinburgh. Actualizat aprilie 2026.',
    url: 'https://www.actero.ro/acte-romanesti-marea-britanie',
    type: 'article',
  },
};

// ============================================================
// PROPS LlmOptimizedPage
// ============================================================

export const pageProps = {
  lpSlug: 'acte-romanesti-marea-britanie',
  lpTopic:
    'Ghid complet pentru acte românești în Marea Britanie — pașaport CRDS, pașaport domiciliu România, buletin, titlu de călătorie, procuri, transcrieri — pentru românii din Londra, Manchester și Edinburgh.',

  // ----------------------------------------------------------
  // BREADCRUMBS
  // ----------------------------------------------------------
  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
  ],

  // ----------------------------------------------------------
  // HERO
  // ----------------------------------------------------------
  h1: 'Acte românești în Marea Britanie — ghid complet pentru diaspora română',

  tldr: {
    label: 'Răspuns rapid:',
    text:
      'Marea Britanie are 3 consulate române: Londra, Manchester și Edinburgh. Regulile diferă semnificativ între ele — Manchester acceptă exclusiv numerar, Edinburgh are taxa mai mică pentru pașaportul temporar, iar programul de vineri se încheie la 12:00. Pașaportul, procurile și transcrierea se rezolvă prin consulat; buletinul se procesează în România.',
  },

  intro:
    'Dacă locuiești în UK și ai nevoie de pașaport, buletin, procură, titlu de călătorie sau acte pentru copil, această pagină este hub-ul principal din care pornești spre procedura corectă.',

  ctaLabel: 'Arată-mi traseul corect pentru situația mea →',
  ctaHref: '/wizard?problem=pasaport&tara=uk',
  ctaNote: 'Fără cont · Începi gratuit · 30 de secunde',

  sourceNote:
    'Actualizat: aprilie 2026 · Surse: Consulatele României din UK · econsulat.ro · ActeRO',

  // ----------------------------------------------------------
  // SECTIONS
  // ----------------------------------------------------------
  sections: [
    {
      id: 'consulate',
      title: 'Cele 3 consulate din UK și zonele lor',
      type: 'table',
      data: {
        headers: ['Zonă', 'Consulat'],
        rows: [
          [
            'Londra · Sudul Angliei · Wales · Midlands · East England',
            'Londra',
          ],
          [
            'Nord-Vest Anglia · Nord-Est Anglia · Yorkshire',
            'Manchester',
          ],
          [
            'Scoția · Irlanda de Nord · Nordul Angliei (până la Middlesbrough)',
            'Edinburgh',
          ],
        ],
        note:
          'North East England (Northumberland, Durham, North Yorkshire): atât Edinburgh cât și Manchester acceptă cereri din această zonă.',
      },
    },

    {
      id: 'guides',
      title: 'Cele mai importante ghiduri pentru Marea Britanie',
      type: 'cards',
      items: [
        {
          title: 'Pașaport România Marea Britanie',
          description:
            'Hub-ul principal pentru CRDS, domiciliu în România, minor și pierdut/furat.',
          href: '/pasaport-romania-marea-britanie',
        },
        {
          title: 'Buletin românesc din Anglia',
          description:
            'Adult, minor, majorat — prin procură la consulat sau cerere directă.',
          href: '/buletin-romanesc-anglia',
        },
        {
          title: 'Titlu de călătorie din Anglia',
          description:
            'Gratuit, în aceeași zi. Londra și Edinburgh: fără programare dacă ai bilet ≤7 zile.',
          href: '/titlu-calatorie-anglia',
        },
        {
          title: 'Procură notarială din Anglia',
          description:
            'Aceeași zi, în GBP. Solicitor britanic NU este echivalent — procura se autentifică la consulat sau solicitor + apostilă FCDO.',
          href: '/procura-notariala-anglia',
        },
        {
          title: 'Acte pentru copil născut în Anglia',
          description:
            'Certificat naștere britanic forma lungă → transcriere → pașaport. Pașii în ordine.',
          href: '/acte-copil-nascut-in-anglia',
        },
        {
          title: 'Programare la consulat în UK',
          description:
            'econsulat.ro pentru toate serviciile. Manchester urgent: email. Londra/Edinburgh titlu: fără programare cu bilet.',
          href: '/programare-consulat-roman-anglia',
        },
      ],
    },

    {
      id: 'key-facts',
      title: 'Ce trebuie să știi înainte să începi',
      type: 'facts',
      items: [
        {
          title: 'Pașaport obligatoriu pentru călătoriile internaționale din UK',
          text:
            'După Brexit, Marea Britanie nu mai face parte din spațiul de liberă circulație. Buletinul românesc nu îți garantează intrarea în toate statele europene dacă pleci din UK. Pașaportul românesc este documentul corect pentru orice călătorie din UK în UE.',
          href: '/pot-calatori-ue-buletin-romanesc-anglia',
          linkLabel: 'Detalii despre buletin și călătorii UE →',
        },
        {
          title: 'Manchester acceptă EXCLUSIV numerar',
          text:
            'Consulatul din Manchester nu acceptă plata cu cardul. Aduceți suma exactă în GBP — taxa variază lunar. Verificați suma curentă pe manchester.mae.ro înainte de programare.',
        },
        {
          title: 'Edinburgh: taxă redusă pentru pașaportul temporar și vineri 12:00',
          text:
            'Pașaportul temporar la Edinburgh costă ~18 GBP (față de ~46 GBP la Londra și Manchester). Vineri, programul se încheie la 12:00 — nu 14:00 sau 16:00. Ridicare pașapoarte: L-J 15:00–17:00, fără programare.',
        },
        {
          title: 'Apostila FCDO — nu notarul britanic',
          text:
            'Apostila Haga pentru acte românești în UK se obține de la FCDO (gov.uk/get-document-legalised), nu de la notari britanici sau solicitori. Greșeala frecventă: documentul apostilat de notarul britanic nu este acceptat în registrele de stare civilă române.',
          href: '/apostila-fcdo-anglia',
          linkLabel: 'Cum obții apostila FCDO →',
        },
      ],
    },

    {
      id: 'geo-pages',
      title: 'Pagini dedicate pe consulat',
      type: 'links',
      items: [
        {
          title: 'Consulat Londra',
          description: 'Preferabil card, ridicare cu programare sau prin poștă.',
          href: '/pasaport-consulat-londra',
        },
        {
          title: 'Consulat Manchester',
          description: 'EXCLUSIV numerar. Temporar: L-J 09:30–13:30.',
          href: '/pasaport-consulat-manchester',
        },
        {
          title: 'Consulat Edinburgh',
          description: 'Temporar ~18 GBP. Vineri 12:00. Ridicare fără programare.',
          href: '/pasaport-consulat-edinburgh',
        },
      ],
    },

    {
      id: 'comparative',
      title: 'Pagini utile pentru context UK',
      type: 'links',
      items: [
        {
          title: 'Pot merge în UE cu buletinul românesc din Anglia?',
          description:
            'Răspuns clar la cea mai frecventă întrebare post-Brexit.',
          href: '/pot-calatori-ue-buletin-romanesc-anglia',
        },
        {
          title: 'Pașaport românesc după Brexit — ce s-a schimbat',
          description:
            'De ce pașaportul românesc este mai important ca oricând pentru românii din UK.',
          href: '/pasaport-romanesc-dupa-brexit',
        },
        {
          title: 'Apostila FCDO pentru acte românești',
          description:
            'Nu notarii britanici — FCDO. Unde, cum, cât costă.',
          href: '/apostila-fcdo-anglia',
        },
        {
          title: 'Care consulat te deservește în UK',
          description:
            'Tabel complet pe regiuni. North East England: Edinburgh sau Manchester.',
          href: '/consulat-competent-anglia',
        },
        {
          title: 'Certificat britanic vs românesc',
          description:
            'Long form vs short form, apostilă FCDO și câte traduceri ceri per consulat.',
          href: '/certificat-nastere-britanic-roman',
        },
      ],
    },
  ],

  // ----------------------------------------------------------
  // FAQ
  // ----------------------------------------------------------
  faqItems: [
    {
      question: 'Ce acte pot rezolva prin consulat în UK?',
      answer:
        'Pașaport, titlu de călătorie, procuri notariale și transcrierea certificatelor de naștere și căsătorie se rezolvă prin consulatele din Londra, Manchester sau Edinburgh. Buletinul românesc se procesează în România — prin procură specială autentificată la consulat.',
    },
    {
      question: 'Pot merge în UE cu buletinul românesc dacă locuiesc în Anglia?',
      answer:
        'Buletinul românesc îți permite intrarea în unele state europene, dar nu îți permite să ieși din UK fără un document de călătorie valid. Pașaportul românesc este documentul corect pentru orice călătorie internațională plecată din UK. Detalii complete pe pagina dedicată.',
    },
    {
      question: 'Cum aflu consulatul competent pentru zona mea?',
      answer:
        'Londra deservește sudul Angliei, Wales, Midlands și East England. Manchester deservește Nord-Vestul și Yorkshire. Edinburgh deservește Scoția și Irlanda de Nord. North East England (Northumberland, Durham, Yorkshire de Nord) poate merge la Edinburgh sau Manchester — ambele acceptă cereri din această zonă.',
    },
    {
      question: 'Programarea se face pe econsulat.ro pentru toate consulatele?',
      answer:
        'Da, econsulat.ro este platforma uniformă pentru toate cele 3 consulate din UK. Excepție: titlul de călătorie urgent la Londra și Edinburgh se poate obține fără programare dacă ai bilet de călătorie în maximum 7 zile lucrătoare. La Manchester, programarea este obligatorie inclusiv pentru urgențe — contactați manchester.consul@mae.ro.',
    },
    {
      question: 'Cât costă pașaportul românesc în UK?',
      answer:
        'Taxa se exprimă în GBP și variază lunar (este legată de cursul EUR). Referință orientativă: ~46 GBP pașaport electronic la Londra și Manchester, ~52 GBP la Edinburgh, ~18 GBP pașaport temporar la Edinburgh. Verificați suma curentă pe site-ul consulatului înainte de programare.',
    },
    {
      question: 'Ce este apostila FCDO și de ce e importantă?',
      answer:
        'Apostila Haga pentru documente eliberate în UK se obține de la FCDO (Foreign, Commonwealth & Development Office), nu de la notari britanici. Sursa oficială: gov.uk/get-document-legalised. Este obligatorie pentru transcrierea certificatelor de naștere și căsătorie, și pentru raportul de poliție în caz de furt la Edinburgh.',
    },
  ],

  // ----------------------------------------------------------
  // FINAL CTA
  // ----------------------------------------------------------
  finalCtaTitle: 'Nu ghici procedura',
  finalCtaText:
    'Wizardul ActeRO îți spune rapid dacă rezolvi la consulat, ce documente trebuie și ce pagină ți se aplică.',
  finalCtaLabel: 'Arată-mi traseul corect pentru situația mea →',
  finalCtaHref: '/wizard?problem=pasaport&tara=uk',
};

// ============================================================
// SCHEMA.ORG
// ============================================================

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/acte-romanesti-marea-britanie#article',
  headline: 'Acte românești în Marea Britanie — Ghid complet 2026',
  description:
    'Ghid complet pentru acte românești în Marea Britanie: pașaport, buletin, titlu de călătorie, procuri. Londra, Manchester, Edinburgh. Actualizat aprilie 2026.',
  url: 'https://www.actero.ro/acte-romanesti-marea-britanie',
  inLanguage: 'ro',
  datePublished: '2026-04-01',
  dateModified: '2026-04-24',
  author: { '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@id': 'https://www.actero.ro/#organization' },
  about: [
    { '@type': 'Thing', name: 'Pașaport românesc' },
    { '@type': 'Thing', name: 'Carte de identitate românească' },
    { '@type': 'Thing', name: 'Titlu de călătorie' },
    { '@type': 'Thing', name: 'Procură notarială' },
    { '@type': 'GovernmentOrganization', name: 'Consulatul General al României la Londra' },
    { '@type': 'GovernmentOrganization', name: 'Consulatul General al României la Manchester' },
    { '@type': 'GovernmentOrganization', name: 'Consulatul General al României la Edinburgh' },
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
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ce acte pot rezolva prin consulat în UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pașaport, titlu de călătorie, procuri notariale și transcrierea certificatelor de naștere și căsătorie se rezolvă prin consulatele din Londra, Manchester sau Edinburgh. Buletinul românesc se procesează în România — prin procură specială autentificată la consulat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pot merge în UE cu buletinul românesc dacă locuiesc în Anglia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Buletinul românesc îți permite intrarea în unele state europene, dar nu îți permite să ieși din UK fără un document de călătorie valid. Pașaportul românesc este documentul corect pentru orice călătorie internațională plecată din UK.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cât costă pașaportul românesc în UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Taxa se exprimă în GBP și variază lunar. Referință orientativă: ~46 GBP la Londra și Manchester, ~52 GBP la Edinburgh. Pașaport temporar Edinburgh: ~18 GBP. Verificați suma curentă pe site-ul consulatului înainte de programare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce este apostila FCDO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Apostila Haga pentru documente din UK se obține de la FCDO (gov.uk/get-document-legalised), nu de la notari britanici. Este obligatorie pentru transcrierea actelor de stare civilă și pentru Edinburgh în caz de pașaport furat.',
      },
    },
  ],
};

// ============================================================
// STRUCTURA PAGE.TSX (referință implementare)
// ============================================================

/*
// src/app/(seo)/acte-romanesti-marea-britanie/page.tsx

import { LlmOptimizedPage } from '@/components/seo/LlmOptimizedPage'
import { metadata as meta, pageProps, articleSchema, breadcrumbSchema, faqSchema } from './content'

export const metadata = meta

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LlmOptimizedPage {...pageProps} />
    </>
  )
}
*/

// ============================================================
// NOTE INTERNE
// ============================================================

/*
DIFERENȚE față de /acte-romanesti-spania:

1. Section consulate: 3 rânduri (vs 8 pentru Spania) — tabel mai simplu
2. Section key-facts: include fact post-Brexit (unic în toată platforma)
   + link spre /pot-calatori-ue-buletin-romanesc-anglia
3. Section key-facts: include apostila FCDO (nu există la ES/IT/DE)
4. Section comparative: primele 2 iteme sunt pagini post-Brexit unice UK
5. FAQ: include întrebarea post-Brexit + întrebarea apostilă FCDO
6. sourceNote: include gov.uk (suplimentar față de celelalte țări)
7. Currency: GBP variabil lunar (vs EUR fix pentru ES/IT/DE)
   → formular diferit în TL;DR și FAQ

PAGINI INTERNE NECESARE LA LANSARE (link-uri active în această pagină):
  - /pasaport-romania-marea-britanie ← hub pașaport
  - /buletin-romanesc-anglia ← hub buletin
  - /titlu-calatorie-anglia ← hub titlu
  - /procura-notariala-anglia ← hub procuri
  - /acte-copil-nascut-in-anglia ← hub copil
  - /programare-consulat-roman-anglia ← leaf programare
  - /pasaport-consulat-londra ← GEO
  - /pasaport-consulat-manchester ← GEO
  - /pasaport-consulat-edinburgh ← GEO
  - /pot-calatori-ue-buletin-romanesc-anglia ← BREXIT-1
  - /pasaport-romanesc-dupa-brexit ← BREXIT-2
  - /apostila-fcdo-anglia ← LEAF-2
  - /consulat-competent-anglia ← COMP-1
  - /wizard?problem=pasaport&tara=uk ← CTA principal

RECOMANDARE: lansați hub-ul odată cu cel puțin
  /pot-calatori-ue-buletin-romanesc-anglia și
  /pasaport-consulat-londra — altfel link-urile P0 duc la 404.
*/
