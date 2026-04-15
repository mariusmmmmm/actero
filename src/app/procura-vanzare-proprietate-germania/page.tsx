import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Procură vânzare proprietate din Germania — Consulat, aceeași zi | ActeRO',
  description:
    'Procură pentru vânzare sau cumpărare proprietate în România, făcută la consulat din Germania. Notar ales vs neales, taxa 3€ RNNEPR și ce date ale imobilului trebuie.',
  keywords: [
    'procura vanzare proprietate germania',
    'procura vanzare germania romania',
    'procura cumparare apartament romania din germania',
    'procura imobiliara consulat romania germania',
    'notar ales procura vanzare',
    'procura vanzare rnnepr germania',
    'procura vanzare proprietate bonn munchen stuttgart berlin',
    'procura specifica imobil consulat romania',
    'ce date trebuie procura vanzare',
    'procura autentificata vanzare romania din strainatate',
  ],
  openGraph: {
    title: 'Procură vânzare proprietate din Germania — Consulat, aceeași zi',
    description:
      'Notar ales sau nu, taxa RNNEPR per consulat și datele imobilului care contează într-o procură imobiliară.',
    url: 'https://www.actero.ro/procura-vanzare-proprietate-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/procura-vanzare-proprietate-germania',
  },
}

const faqItems = [
  {
    question: 'Trebuie să știu exact datele notarului înainte să fac procura?',
    answer:
      'Nu este obligatoriu, dar dacă ai deja notarul ales, procura poate fi mai specifică și mai clară pentru tranzacția imobiliară. Dacă nu, se poate redacta și o variantă suficient de utilă fără notar nominalizat.',
  },
  {
    question: 'Ce date ale imobilului trebuie să am pregătite pentru procură?',
    answer:
      'Ideal este să ai adresa completă și, dacă se poate, numărul de carte funciară și numărul cadastral. Cu cât imobilul este identificat mai precis, cu atât procura este mai robustă.',
  },
  {
    question: 'Cât costă o procură de vânzare proprietate la consulat?',
    answer:
      'Pe lângă eventualele taxe consulare, apare și taxa de 3€ pentru RNNEPR. Diferența practică importantă este metoda de plată, care variază de la un consulat la altul.',
  },
  {
    question: 'Cât durează — primesc procura în aceeași zi?',
    answer:
      'Da. În fluxul obișnuit, procura este eliberată în aceeași zi.',
  },
  {
    question: 'La Berlin de ce trebuie să trimit viramentul cu 3-4 zile înainte?',
    answer:
      'Pentru că la Berlin plata RNNEPR se face exclusiv prin virament și trebuie confirmată înainte de programare. Dacă o lași pentru ultima zi, riști să nu primești procura.',
  },
  {
    question: 'Ce este regula de pre-scanning la Bonn?',
    answer:
      'La Bonn documentele trebuie încărcate în econsulat înainte de prezentare. Este o diferență practică față de alte consulate și merită tratată ca pas separat.',
  },
  {
    question: 'Pot face o procură generală în loc de una specifică pentru vânzare imobiliară?',
    answer:
      'Poți, dar pentru tranzacțiile imobiliare este mai sigură o procură cât mai specifică. O formulare prea generală poate crea complicații la notar.',
  },
  {
    question: 'Mandatarul meu e din afara familiei — schimbă ceva?',
    answer:
      'Nu. Procedura la consulat rămâne aceeași. Contează să ai datele complete ale mandatarului, nu relația de rudenie.',
  },
]

const howToSteps = [
  {
    name: 'Pregătești datele imobilului și ale mandatarului',
    text: 'Adresa imobilului și, dacă le ai, numărul CF și numărul cadastral, plus datele complete ale mandatarului.',
  },
  {
    name: 'Verifici plata RNNEPR pentru consulatul tău',
    text: 'Berlin cere virament în avans, Bonn are o regulă distinctă de pre-scanning, iar restul consulatelor au alte metode.',
  },
  {
    name: 'Dacă ești la Bonn, încarci documentele înainte în econsulat',
    text: 'Acesta este un pas separat care nu trebuie să rămână pentru ultima zi.',
  },
  {
    name: 'Faci programarea și semnezi la consulat',
    text: 'Te prezinți cu actul tău și primești procura în aceeași zi.',
  },
  {
    name: 'Trimiți procura mandatarului pentru notarul din România',
    text: 'Procura consulară este folosită direct în România, fără apostilă și fără traducere.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/procura-vanzare-proprietate-germania#article',
  headline: 'Procură vânzare proprietate din Germania — Consulat, aceeași zi 2026',
  description:
    'Ghid pentru procura de vânzare sau cumpărare proprietate din Germania: notar ales, datele imobilului și regulile practice pe consulat.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/procura-vanzare-proprietate-germania',
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
      name: 'Procură vânzare proprietate',
      item: 'https://www.actero.ro/procura-vanzare-proprietate-germania',
    },
  ],
}

const sections = [
  {
    id: 'notar-ales',
    title: 'Notar ales sau neales — ce schimbă în procură',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Prima decizie practică este dacă ai deja notarul ales în România. Asta schimbă
          nivelul de specificitate al procurii.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-2 font-semibold text-green-900">Ai notar ales</p>
            <p className="text-sm text-green-800">
              Procura poate include datele biroului notarial și devine mai clar legată de
              tranzacția concretă.
            </p>
          </div>

          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
            <p className="mb-2 font-semibold text-blue-900">Nu ai notar ales</p>
            <p className="text-sm text-blue-800">
              Procura se poate redacta și fără aceste date, dar este bine ca imobilul și
              puterile mandatarului să fie descrise cât mai clar.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            <strong>Recomandare:</strong> dacă poți, clarifică notarul înainte de programare.
            Procura specifică este mai sigură decât una prea generală.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'date-imobil',
    title: 'Ce date ale imobilului trebuie pregătite',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Procura trebuie să identifice proprietatea suficient de clar încât notarul să poată
          lucra cu ea fără interpretări inutile.
        </p>

        <div className="space-y-2">
          {[
            {
              req: true,
              item: 'Adresa completă a imobilului',
              detaliu: 'Minimul practic pentru a descrie proprietatea.',
            },
            {
              req: false,
              item: 'Numărul de carte funciară',
              label: 'recomandat',
              detaliu: 'Ajută mult la identificarea exactă a imobilului.',
            },
            {
              req: false,
              item: 'Numărul cadastral',
              label: 'recomandat',
              detaliu: 'Completează identificarea tehnică a proprietății.',
            },
            {
              req: false,
              item: 'Datele din actul de proprietate',
              label: 'dacă le ai',
              detaliu: 'Nu trebuie adus actul în original, dar informațiile utile din el pot intra în procură.',
            },
          ].map(({ req, item, detaliu, label }) => (
            <div key={item} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-3">
              <span className="flex-shrink-0 text-base">{req ? '✅' : '⚪'}</span>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {item}
                  {label ? <span className="ml-2 text-xs font-normal text-gray-500">— {label}</span> : null}
                </p>
                <p className="mt-0.5 text-xs text-gray-600">{detaliu}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
          <p className="text-xs text-blue-800">
            La fel de importante sunt și datele complete ale mandatarului: CNP și actul de
            identitate.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'documente-consulat',
    title: 'Documentele tale necesare la consulat',
    content: (
      <div className="space-y-2">
        {[
          {
            req: true,
            doc: 'Pașaport românesc valabil sau carte de identitate',
            detaliu: 'Actul tău în original.',
          },
          {
            req: true,
            doc: 'Date complete ale mandatarului',
            detaliu: 'CNP și datele actului de identitate ale persoanei împuternicite.',
          },
          {
            req: true,
            doc: 'Datele imobilului',
            detaliu: 'Cel puțin adresa completă, ideal și CF plus cadastral.',
          },
          {
            req: false,
            doc: 'Datele biroului notarial',
            label: 'dacă există',
            detaliu: 'Ajută la o procură mai specifică.',
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
    id: 'rnnepr-plata',
    title: 'Taxa 3€ RNNEPR — metoda diferă per consulat',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-700">
          Toate procurile notariale intră în RNNEPR, dar modul în care plătești diferă între
          consulate.
        </p>

        <div className="space-y-2">
          {[
            {
              oras: 'Bonn',
              metoda: 'EC-Karte',
              timing: 'Ziua programării',
              special: 'Documentele se încarcă înainte pe econsulat.',
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
              timing: 'POS în ziua programării sau virament cu minimum 3 zile înainte',
              special: null,
            },
            {
              oras: 'Berlin',
              metoda: 'Exclusiv virament',
              timing: 'Cu 3-4 zile lucrătoare înainte',
              special: 'Fără confirmarea viramentului, procura nu se eliberează.',
            },
          ].map(({ oras, metoda, timing, special }) => (
            <div key={oras} className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="mb-2 font-bold text-gray-900">{oras}</p>
              <p className="text-sm text-gray-700">Metodă: {metoda}</p>
              <p className="text-xs text-gray-600">Când: {timing}</p>
              {special ? <p className="mt-1 text-xs text-amber-700">{special}</p> : null}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'bonn-special',
    title: 'Regula specială Bonn — pre-scanning obligatoriu',
    content: (
      <div className="space-y-2 rounded-xl border border-blue-200 bg-blue-50 p-4">
        <p className="font-semibold text-blue-900">
          La Bonn, documentele se urcă în econsulat înainte de programare
        </p>
        <p className="text-sm text-blue-800">
          Este una dintre diferențele practice importante față de celelalte consulate. Dacă
          lași acest pas pe ultima clipă, riști complicații inutile.
        </p>
      </div>
    ),
  },
  {
    id: 'dupa-consulat',
    title: 'După consulat — cum folosești procura în România',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-green-200 bg-green-50 p-4">
          <p className="mb-1 font-semibold text-green-900">
            Procura consulară este direct recunoscută în România
          </p>
          <p className="text-sm text-green-800">
            Nu are nevoie de apostilă sau traducere înainte să ajungă la notarul român.
          </p>
        </div>

        <div className="space-y-2 text-sm text-gray-700">
          <p>
            Mandatarul merge la notarul din România cu procura în original și cu actele
            imobilului și semnează în numele tău.
          </p>
          <p>
            Dacă tranzacția nu mai are loc, procura trebuie revocată. Nu este bine să rămână
            activă inutil.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'greseli',
    title: 'Greșeli frecvente cu procura de vânzare',
    content: (
      <div className="space-y-2">
        {[
          {
            gresit: 'Faci o procură prea generală pentru tranzacție imobiliară',
            corect: 'Pentru proprietăți, cu cât procura este mai specifică, cu atât e mai sigură.',
          },
          {
            gresit: 'La Berlin lași plata RNNEPR pe ultima zi',
            corect: 'La Berlin trebuie rezolvat viramentul în avans.',
          },
          {
            gresit: 'La Bonn te bazezi doar pe documentele aduse fizic',
            corect: 'Bonn are nevoie și de pre-scanning în econsulat.',
          },
          {
            gresit: 'Faci procura mult prea devreme față de tranzacție',
            corect: 'Deși nu expiră automat, este mai bine să fie relativ recentă.',
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
    title: 'Ai nevoie de alt tip de procură?',
    content: (
      <div className="space-y-2">
        {[
          {
            text: 'Procură pentru moștenire sau succesiune',
            href: '/procura-mostenire-germania',
            label: 'Ghid procură moștenire →',
          },
          {
            text: 'Procură pentru divorț, firmă sau cont bancar',
            href: '/procura-notariala-germania',
            label: 'Vezi ghidul de procuri →',
          },
          {
            text: 'Toate tipurile de procuri la consulat',
            href: '/procura-notariala-germania',
            label: 'Ghidul principal →',
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

export default function ProcuraVanzareProprietateGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="procura-vanzare-proprietate-germania"
      lpTopic="procura"
      h1="Procură vânzare proprietate din Germania — la consulat, aceeași zi"
      intro="Dacă vinzi sau cumperi o proprietate în România și nu poți merge personal, procura consulară este soluția practică. Ce contează cel mai mult înainte de programare este să știi cât mai clar ce proprietate este implicată și dacă ai deja notarul ales."
      tldr="Procura se face la consulat și se eliberează în aceeași zi. Berlin cere virament în avans pentru RNNEPR, Bonn cere pre-scanning în econsulat, iar o procură specifică pentru imobil este mai sigură decât una generală."
      ctaHref="/procura-consulat-vs-notar-german"
      ctaLabel="Vezi când alegi consulatul și când notarul german →"
      updatedAt="aprilie 2026"
      sourceNote="Consulatele României din Germania și regulile practice pentru procuri"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi dacă mergi pe procură imobiliară sau pe alt tip de procură?"
      finalCtaText="Dacă problema este vânzarea sau cumpărarea unei proprietăți, rămâi pe acest ghid. Pentru succesiune, bancă sau divorț, folosește paginile conexe din clusterul de procuri."
    />
  )
}
