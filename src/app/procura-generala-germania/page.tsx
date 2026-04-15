import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Procură generală din Germania — Divorț, firmă, bancă, acte diverse | ActeRO',
  description:
    'Procură generală la consulatul din Germania pentru divorț, firmă, cont bancar sau acte diverse. Taxa 3€ RNNEPR, ce trebuie specificat și când procura e prea generală.',
  keywords: [
    'procura generala germania',
    'procura generala germania romania',
    'procura banca romania din germania',
    'procura firma romania germania',
    'procura divort germania romania',
    'procura generala consulat romania germania',
    'cand se aplica taxa rnnepr procura',
    'procura generala vs procura speciala',
    'procura administrativa germania romania',
    'procura acte diverse romania din germania',
  ],
  openGraph: {
    title: 'Procură generală din Germania — Divorț, firmă, bancă, acte diverse',
    description:
      'Taxa 3€ RNNEPR la toate procurile. Ce specifici pentru bancă, firmă sau divorț și când procura generală e prea generală.',
    url: 'https://www.actero.ro/procura-generala-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/procura-generala-germania',
  },
}

const faqItems = [
  {
    question: 'Care e diferența dintre procura generală și procura specială?',
    answer:
      'Procura specială este pentru un act precis, bine definit. Procura generală acoperă mai multe tipuri de acte. În practică, cu cât procura este mai specifică, cu atât este acceptată mai ușor de bănci, notari sau instituții.',
  },
  {
    question: 'Se aplică taxa de 3€ RNNEPR și la procura generală?',
    answer:
      'Da. Taxa de 3€ pentru înscrierea în RNNEPR se aplică la toate procurile notariale eliberate de consulat, inclusiv la procurile generale.',
  },
  {
    question: 'Pot face o singură procură generală pentru mai multe situații?',
    answer:
      'Tehnic da, dar există riscul să fie considerată prea vagă. Este mai sigur să specifici clar instituțiile și actele pe care mandatarul le poate face.',
  },
  {
    question: 'Banca din România acceptă orice procură notarială?',
    answer:
      'Nu neapărat. Băncile pot avea propriile cerințe și uneori cer formulări sau clauze precise. Merită să verifici înainte de programarea la consulat.',
  },
  {
    question: 'Procura pentru divorț acoperă întreaga procedură?',
    answer:
      'Nu întotdeauna. Poate acoperi depunerea și pașii pregătitori, dar uneori la final sau la pronunțare poate fi necesară prezența personală. Verificarea trebuie făcută cu notarul sau avocatul din România.',
  },
  {
    question: 'Am nevoie de procură pentru a înființa o firmă în România din Germania?',
    answer:
      'Da, dacă nu poți fi prezent personal. Procura trebuie să descrie explicit operațiunile pentru ONRC și documentele pe care mandatarul le poate semna.',
  },
  {
    question: 'Primesc procura în aceeași zi?',
    answer:
      'Da, în fluxul consular obișnuit procura se eliberează în aceeași zi după programare și semnare.',
  },
  {
    question: 'Mandatarul trebuie să fie prezent la consulat?',
    answer:
      'Nu. Ai nevoie doar de datele lui complete, nu de prezența lui fizică la ghișeu.',
  },
]

const howToSteps = [
  {
    name: 'Clarifici scopul exact al procurii',
    text: 'Stabilești dacă este pentru bancă, firmă, divorț sau alte acte și notezi exact ce trebuie să poată face mandatarul.',
  },
  {
    name: 'Verifici metoda de plată a taxei RNNEPR',
    text: 'Metoda diferă între Bonn, München, Stuttgart și Berlin, iar la Berlin viramentul trebuie făcut în avans.',
  },
  {
    name: 'Pregătești datele mandatarului',
    text: 'Ai nevoie de CNP și datele actului de identitate ale persoanei împuternicite.',
  },
  {
    name: 'Faci programarea pe econsulat și te prezinți cu actul tău',
    text: 'Semnezi la consulat și primești procura în aceeași zi.',
  },
  {
    name: 'Trimiți procura în România',
    text: 'Procura consulară este recunoscută direct, fără apostilă și fără traducere.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/procura-generala-germania#article',
  headline: 'Procură generală din Germania — Divorț, firmă, bancă, acte diverse 2026',
  description:
    'Ghid pentru procura generală la consulatul din Germania: bancă, firmă, divorț și acte diverse, plus taxa RNNEPR și limitele unei procuri prea generale.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/procura-generala-germania',
  inLanguage: 'ro',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Procură notarială Germania',
      item: 'https://www.actero.ro/procura-notariala-germania',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Procură generală Germania',
      item: 'https://www.actero.ro/procura-generala-germania',
    },
  ],
}

const sections = [
  {
    id: 'generala-vs-speciala',
    title: 'Procură generală vs specială — când folosești ce',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="mb-1 font-semibold text-blue-900">Procură specială</p>
            <p className="mb-2 text-sm text-blue-800">
              Împuternicire pentru un act specific, bine definit.
            </p>
            <ul className="space-y-1 text-xs text-blue-700">
              <li>Vânzare apartament</li>
              <li>Acceptare moștenire</li>
              <li>Ridicare document concret</li>
            </ul>
            <p className="mt-2 text-xs font-medium text-blue-700">
              Este preferată când vrei risc minim de refuz.
            </p>
          </div>

          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-1 font-semibold text-green-900">Procură generală</p>
            <p className="mb-2 text-sm text-green-800">
              Împuternicire pentru mai multe tipuri de acte.
            </p>
            <ul className="space-y-1 text-xs text-green-700">
              <li>Operațiuni la bancă</li>
              <li>Acte pentru firmă</li>
              <li>Acte administrative diverse</li>
            </ul>
            <p className="mt-2 text-xs font-medium text-green-700">
              Este mai flexibilă, dar trebuie formulată clar.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            <strong>Regula practică:</strong> chiar și la o procură generală, enumeri
            explicit instituțiile și tipurile de acte. O formulare prea vagă poate fi
            refuzată.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'subcazuri',
    title: 'Situația ta — ce trebuie specificat în procură',
    content: (
      <div className="space-y-2">
        {[
          {
            icon: '🏦',
            titlu: 'Cont bancar în România',
            trebuie:
              'Denumirea băncii și operațiunile permise: retrageri, depuneri, modificări, închidere sau deschidere de cont.',
            atentie:
              'Băncile pot avea reguli proprii. Verifică înainte exact ce formulare acceptă.',
            href: '/procura-cont-bancar-romania-din-germania',
            hrefLabel: 'Ghid procură bancară →',
          },
          {
            icon: '🏢',
            titlu: 'Firmă în România',
            trebuie:
              'Operațiunile exacte pentru ONRC sau pentru administrarea firmei, inclusiv documentele ce pot fi semnate.',
            atentie:
              'Pentru firme, o formulare precisă este importantă. Uneori merită să pornești de la textul primit de la avocat sau consultant.',
            href: '/procura-notariala-germania',
            hrefLabel: 'Vezi ghidul pentru firmă și alte acte →',
          },
          {
            icon: '⚖️',
            titlu: 'Divorț notarial în România',
            trebuie:
              'Datele notarului sau ale procedurii și acțiunile exacte pe care mandatarul le poate face.',
            atentie:
              'Procura nu garantează că vei evita orice prezență personală. Unele etape finale pot cere verificare suplimentară.',
            href: '/procura-divort-notarial-germania',
            hrefLabel: 'Ghid procură pentru divorț →',
          },
          {
            icon: '📋',
            titlu: 'Acte diverse la instituții din România',
            trebuie:
              'Instituțiile și tipurile de cereri sau documente pe care mandatarul le poate depune ori ridica.',
            atentie:
              'Formularea „pentru orice acte” este exact genul de text care poate crea refuzuri.',
            href: '/procura-notariala-germania',
            hrefLabel: 'Vezi ghidul complet de procuri →',
          },
        ].map(({ icon, titlu, trebuie, atentie, href, hrefLabel }) => (
          <div key={titlu} className="rounded-xl border border-gray-200 bg-white p-4">
            <p className="mb-2 font-semibold text-gray-900">
              {icon} {titlu}
            </p>
            <div className="mb-2 space-y-1">
              <p className="text-xs text-gray-700">
                <span className="font-semibold text-green-700">Ce specifici:</span> {trebuie}
              </p>
              <p className="text-xs text-amber-700">
                <span className="font-semibold">Atenție:</span> {atentie}
              </p>
            </div>
            <Link
              href={href}
              className="text-xs font-medium text-blue-600 underline hover:text-blue-800"
            >
              {hrefLabel}
            </Link>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'rnnepr',
    title: 'Taxa 3€ RNNEPR — se aplică la toate procurile',
    content: (
      <div className="space-y-3">
        <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
          <p className="text-sm text-blue-800">
            Taxa de 3€ pentru înscrierea în RNNEPR se aplică la toate procurile
            notariale, inclusiv la procurile generale.
          </p>
        </div>

        <div className="space-y-2">
          {[
            {
              oras: 'Bonn',
              metoda: 'EC-Karte',
              timing: 'Ziua programării',
              special: 'Documentele se urcă în econsulat înainte de prezentare.',
            },
            {
              oras: 'München',
              metoda: 'Numerar',
              timing: 'Ziua programării',
              special: null,
            },
            {
              oras: 'Stuttgart',
              metoda: 'POS sau virament',
              timing: 'POS în ziua programării sau virament cu minim 3 zile înainte',
              special: null,
            },
            {
              oras: 'Berlin',
              metoda: 'Exclusiv virament',
              timing: 'Cu minimum 3-4 zile lucrătoare înainte',
              special: 'Fără virament confirmat în avans, procura nu se eliberează.',
            },
          ].map(({ oras, metoda, timing, special }) => (
            <div key={oras} className="rounded-xl border border-gray-200 bg-white p-3">
              <p className="mb-1 font-bold text-gray-900">{oras}</p>
              <p className="text-xs text-gray-700">Metodă: {metoda}</p>
              <p className="text-xs text-gray-600">Timp: {timing}</p>
              {special ? <p className="mt-1 text-xs text-amber-700">{special}</p> : null}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'documente',
    title: 'Documentele tale la consulat',
    content: (
      <div className="space-y-2">
        {[
          {
            req: true,
            doc: 'Pașaport românesc valabil sau carte de identitate',
            detaliu: 'Actul tău de identitate în original.',
          },
          {
            req: true,
            doc: 'Datele complete ale mandatarului',
            detaliu: 'CNP și datele actului de identitate ale persoanei împuternicite.',
          },
          {
            req: false,
            doc: 'Date specifice actului',
            label: 'după caz',
            detaliu:
              'De exemplu bancă, firmă, notar, dosar, număr de cont sau alte repere care fac procura clară și utilizabilă.',
          },
        ].map(({ req, doc, detaliu, label }) => (
          <div key={doc} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-3">
            <span className="flex-shrink-0 text-base">{req ? '✅' : '⚪'}</span>
            <div>
              <p className="text-sm font-medium text-gray-800">
                {doc}
                {label ? <span className="ml-2 text-xs font-normal text-gray-500">— {label}</span> : null}
              </p>
              <p className="mt-0.5 text-xs text-gray-600">{detaliu}</p>
            </div>
          </div>
        ))}

        <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
          <p className="text-xs text-blue-800">
            Nu ai nevoie de apostilă, traduceri sau de prezența mandatarului la consulat.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'greseli',
    title: 'Greșeli frecvente',
    content: (
      <div className="space-y-2">
        {[
          {
            gresit: 'Procura este formulată prea vag',
            corect:
              'Scrii clar ce instituții și ce operațiuni poate face mandatarul, chiar dacă alegi o procură generală.',
          },
          {
            gresit: 'La Berlin nu faci viramentul din timp',
            corect:
              'La Berlin plata pentru RNNEPR trebuie rezolvată în avans, altfel programarea nu se închide cu emiterea procurii.',
          },
          {
            gresit: 'Nu verifici cu banca sau instituția ce formulare acceptă',
            corect:
              'Pentru bancă, firmă sau divorț, cerințele exacte trebuie verificate înainte de programare.',
          },
          {
            gresit: 'Presupui că o procură pentru divorț rezolvă tot fără excepție',
            corect:
              'Unele etape finale pot cere verificări suplimentare sau chiar prezență personală.',
          },
        ].map(({ gresit, corect }) => (
          <div key={gresit} className="rounded-lg border border-red-100 bg-red-50 p-3">
            <p className="mb-0.5 text-xs font-semibold text-red-700">❌ {gresit}</p>
            <p className="text-xs text-gray-700">✅ {corect}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'alte-situatii',
    title: 'Ai nevoie de un tip specific de procură?',
    content: (
      <div className="space-y-2">
        {[
          {
            text: 'Procură pentru proprietate în România',
            href: '/procura-vanzare-proprietate-germania',
            label: 'Ghid proprietate →',
          },
          {
            text: 'Procură pentru moștenire sau succesiune',
            href: '/procura-mostenire-germania',
            label: 'Ghid moștenire →',
          },
          {
            text: 'Procură pentru cont bancar în România',
            href: '/procura-cont-bancar-romania-din-germania',
            label: 'Ghid bancă →',
          },
          {
            text: 'Ghidul complet cu toate tipurile de procuri',
            href: '/procura-notariala-germania',
            label: 'Vezi ghidul principal →',
          },
        ].map(({ text, href, label }) => (
          <div
            key={`${href}-${text}`}
            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3"
          >
            <p className="text-sm text-gray-700">{text}</p>
            <Link
              href={href}
              className="ml-3 flex-shrink-0 text-xs font-medium text-blue-600 underline hover:text-blue-800"
            >
              {label}
            </Link>
          </div>
        ))}
      </div>
    ),
  },
]

export default function ProcuraGeneralaGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="procura-generala-germania"
      lpTopic="procura"
      h1="Procură generală din Germania — divorț, firmă, bancă și acte diverse"
      intro="Pagina asta te ajută când nu e vorba de vânzare de proprietate sau moștenire, ci de situații precum bancă, firmă, divorț notarial sau alte acte în România. Cheia este să formulezi procura suficient de clar încât să fie acceptată de instituția la care ajunge."
      tldr="Taxa 3€ RNNEPR se aplică și la procura generală. Procura se eliberează în aceeași zi, dar dacă este prea vagă poate fi refuzată de bănci sau instituții. Specifică exact ce trebuie să poată face mandatarul."
      ctaHref="/procura-notariala-germania"
      ctaLabel="Vezi toate tipurile de procuri consulare →"
      updatedAt="aprilie 2026"
      sourceNote="Consulatele României din Germania și regulile practice pentru procuri"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu e clar dacă ai nevoie de procură generală sau specială?"
      finalCtaText="Compară mai întâi ghidurile pentru bancă, moștenire, proprietate și divorț. Dacă situația ta rămâne mixtă, ghidul principal de procuri te duce pe traseul potrivit."
    />
  )
}
