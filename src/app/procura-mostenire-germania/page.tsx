import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Procură moștenire din Germania — Consulat sau notar, ce trebuie',
  description:
    'Procură pentru moștenire sau succesiune în România, din Germania. Ce cere consulatul vs notarul, certificatul de deces și taxa 3€ RNNEPR.',
  keywords: [
    'procura mostenire germania',
    'procura succesiune germania romania',
    'procura mostenire consulat romania germania',
    'certificat de deces procura germania',
    'notar succesiune procura romania din germania',
    'procura acceptare mostenire germania',
    'dosar succesoral romania din germania',
    'procura mostenire rnnepr germania',
    'procura notariala mostenire bonn munchen stuttgart berlin',
    'ce documente procura mostenire consulat',
  ],
  openGraph: {
    title: 'Procură moștenire din Germania — Ce cere consulatul vs notarul',
    description:
      'Certificatul de deces nu este pentru consulat, ci pentru notar. Acceptare vs renunțare, taxa RNNEPR și pașii practici.',
    url: 'https://www.actero.ro/procura-mostenire-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/procura-mostenire-germania',
  },
}

const faqItems = [
  {
    question: 'Trebuie să aduc certificatul de deces la consulat pentru procura de moștenire?',
    answer:
      'Nu. Certificatul de deces nu este documentul de bază pentru consulat, ci pentru notarul din România. La consulat ai nevoie în principal de identitatea ta, datele mandatarului și datele defunctului.',
  },
  {
    question: 'Care este diferența dintre procura de acceptare și procura de renunțare la moștenire?',
    answer:
      'Procura de acceptare îl împuternicește pe mandatar să accepte moștenirea în numele tău. Procura de renunțare îl împuternicește să renunțe la ea. Renunțarea are efecte serioase și nu trebuie tratată ca un simplu detaliu de formular.',
  },
  {
    question: 'Cât costă procura de moștenire la consulat?',
    answer:
      'Pentru orice procură notarială apare și taxa de 3€ pentru RNNEPR. În practică, important este să verifici mai ales metoda de plată corectă pentru consulatul tău.',
  },
  {
    question: 'Primesc procura în aceeași zi?',
    answer:
      'Da. În fluxul consular obișnuit, procura se eliberează în aceeași zi după programare și semnare.',
  },
  {
    question: 'Ce date ale defunctului trebuie să am pentru procură?',
    answer:
      'Numele complet și data decesului sunt esențiale. Dacă ai și alte detalii utile, precum locul decesului sau notarul ales, ele ajută la redactarea mai clară a procurii.',
  },
  {
    question: 'Trebuie să știu dinainte notarul care se ocupă de succesiune?',
    answer:
      'Nu este obligatoriu. Dacă îl știi, procura poate fi mai specifică. Dacă nu, se poate redacta suficient de clar și fără a numi un birou notarial anume.',
  },
  {
    question: 'Mandatarul meu trebuie să fie prezent la consulat?',
    answer:
      'Nu. Este suficient să ai datele lui complete de identificare.',
  },
  {
    question: 'Ce face notarul din România cu procura mea?',
    answer:
      'Notarul o folosește pentru a deschide sau continua dosarul succesoral și pentru a efectua actele pe care le-ai permis în procură. Procura consulară este recunoscută direct în România.',
  },
]

const howToSteps = [
  {
    name: 'Decizi dacă este acceptare sau renunțare',
    text: 'Acestea sunt două direcții juridice diferite și trebuie alese înainte de programare.',
  },
  {
    name: 'Pregătești datele defunctului și ale mandatarului',
    text: 'Ai nevoie de identificarea clară a moștenirii și a persoanei care te reprezintă în România.',
  },
  {
    name: 'Verifici plata RNNEPR pentru consulatul tău',
    text: 'Metoda diferă între consulate, iar la Berlin este obligatoriu viramentul în avans.',
  },
  {
    name: 'Faci programarea și semnezi la consulat',
    text: 'Te prezinți cu actul tău și primești procura în aceeași zi.',
  },
  {
    name: 'Mandatarul folosește procura la notarul din România',
    text: 'Acolo intră în joc certificatul de deces și celelalte documente succesorale.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/procura-mostenire-germania#article',
  headline: 'Procură moștenire din Germania — Ce cere consulatul vs notarul 2026',
  description:
    'Ghid pentru procura de moștenire din Germania: consulat vs notar, acceptare vs renunțare și documentele corecte pentru fiecare etapă.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/procura-mostenire-germania',
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
      name: 'Procură moștenire Germania',
      item: 'https://www.actero.ro/procura-mostenire-germania',
    },
  ],
}

const sections = [
  {
    id: 'consulat-vs-notar',
    title: 'Ce cere consulatul vs ce cere notarul — confuzia frecventă',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Cea mai frecventă greșeală este să tratezi consulatul și notarul ca pe același
          pas. Nu sunt. Consulatul emite procura, iar notarul din România lucrează apoi cu
          ea și cu restul dosarului succesoral.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="mb-2 font-semibold text-blue-900">Ce cere consulatul</p>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>Actul tău de identitate</li>
              <li>Datele mandatarului</li>
              <li>Datele defunctului</li>
              <li>Datele notarului, dacă îl ai deja</li>
              <li>Plata RNNEPR</li>
            </ul>
          </div>

          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-2 font-semibold text-green-900">Ce cere notarul din România</p>
            <ul className="space-y-1 text-sm text-green-800">
              <li>Procura în original</li>
              <li>Certificatul de deces</li>
              <li>Actele bunurilor</li>
              <li>Dovada gradului de rudenie</li>
              <li>Restul documentelor din dosarul succesoral</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            <strong>Punctul-cheie:</strong> certificatul de deces este pentru notar, nu pentru
            consulat.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'acceptare-vs-renuntare',
    title: 'Procură de acceptare vs procură de renunțare',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-1 font-semibold text-green-900">Procură de acceptare</p>
            <p className="text-sm text-green-800">
              Mandatarul acceptă moștenirea și poate continua procedura succesorală în
              numele tău.
            </p>
          </div>

          <div className="rounded-xl border border-red-100 bg-red-50 p-4">
            <p className="mb-1 font-semibold text-red-900">Procură de renunțare</p>
            <p className="text-sm text-red-800">
              Mandatarul renunță la moștenire în numele tău. Este o decizie care trebuie
              luată conștient și fără ambiguități.
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-700">
          Dacă nu ești sigur ce variantă ți se potrivește, clarificarea trebuie făcută
          înainte de programare, nu în fața ghișeului.
        </p>
      </div>
    ),
  },
  {
    id: 'documente-consulat',
    title: 'Documentele tale la consulat',
    content: (
      <div className="space-y-3">
        <div className="space-y-2">
          {[
            {
              req: true,
              doc: 'Pașaport românesc valabil sau carte de identitate',
              detaliu: 'Actul tău în original.',
            },
            {
              req: true,
              doc: 'Datele complete ale mandatarului',
              detaliu: 'CNP și datele actului de identitate.',
            },
            {
              req: true,
              doc: 'Datele defunctului',
              detaliu: 'Numele complet și data decesului.',
            },
            {
              req: false,
              doc: 'Datele biroului notarial',
              label: 'dacă există',
              detaliu: 'Ajută dacă ai deja notar ales pentru succesiune.',
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
        </div>

        <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
          <p className="text-xs text-blue-800">
            Nu ai nevoie la consulat de certificatul de deces, actele bunurilor, apostilă,
            traduceri sau de prezența mandatarului.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'rnnepr-plata',
    title: 'Taxa 3€ RNNEPR — metoda per consulat',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-700">
          Orice procură notarială intră în RNNEPR. Diferența practică este metoda de plată:
        </p>

        <div className="space-y-2">
          {[
            {
              oras: 'Bonn',
              metoda: 'EC-Karte',
              timing: 'Ziua programării',
              special: 'Documentele se încarcă înainte în econsulat.',
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
              timing: 'POS în ziua programării sau virament cu cel puțin 3 zile înainte',
              special: null,
            },
            {
              oras: 'Berlin',
              metoda: 'Exclusiv virament',
              timing: 'Cu 3-4 zile lucrătoare înainte',
              special: 'Fără virament confirmat, procura nu se eliberează.',
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
    id: 'dupa-consulat',
    title: 'Ce face mandatarul cu procura la notarul din România',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-green-200 bg-green-50 p-4">
          <p className="mb-1 font-semibold text-green-900">
            Procura de la consulat este direct recunoscută în România
          </p>
          <p className="text-sm text-green-800">
            Nu are nevoie de apostilă sau traducere înainte să ajungă la notarul român.
          </p>
        </div>

        <div className="space-y-2 text-sm text-gray-700">
          <p>
            Mandatarul merge apoi la notar cu procura în original și cu restul actelor
            succesorale: certificatul de deces, actele bunurilor și documentele care arată
            relația de rudenie.
          </p>
          <p>
            Dacă sunt mai mulți moștenitori și nu pot fi toți prezenți, fiecare persoană
            absentă are nevoie de propria procură.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'greseli',
    title: 'Greșeli frecvente cu procura de moștenire',
    content: (
      <div className="space-y-2">
        {[
          {
            gresit: 'Aduci certificatul de deces la consulat ca document central',
            corect: 'Îl păstrezi pentru dosarul de la notarul din România.',
          },
          {
            gresit: 'Nu clarifici dacă vrei acceptare sau renunțare',
            corect: 'Tipul procurii trebuie stabilit înainte de programare.',
          },
          {
            gresit: 'Plata RNNEPR pentru Berlin este lăsată pe ultima zi',
            corect: 'La Berlin viramentul trebuie făcut din timp și confirmat înainte.',
          },
          {
            gresit: 'Presupui că o singură procură acoperă toți moștenitorii',
            corect: 'Fiecare moștenitor absent are nevoie de propria procură.',
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
            text: 'Procură pentru proprietate în România',
            href: '/procura-vanzare-proprietate-germania',
            label: 'Ghid proprietate →',
          },
          {
            text: 'Procură pentru divorț, firmă sau cont bancar',
            href: '/procura-generala-germania',
            label: 'Ghid procură generală →',
          },
          {
            text: 'Vreau toate tipurile de procuri la consulat',
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
  {
    id: 'pagini-conexe',
    title: 'Pagini conexe pentru succesiune și procuri',
    content: (
      <div className="grid gap-3 sm:grid-cols-3">
        <Link href="/procura-notariala-germania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Hub procuri Germania</p>
          <p className="mt-1 text-sm text-gray-600">Intrarea principală dacă încă nu e clar ce tip de procură ți se aplică.</p>
        </Link>
        <Link href="/procura-consulat-vs-notar-german" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Consulat vs notar german</p>
          <p className="mt-1 text-sm text-gray-600">Comparația care explică de ce consulatul e, de regulă, varianta mai simplă.</p>
        </Link>
        <Link href="/programare-econsulat-germania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Programare pe econsulat.ro</p>
          <p className="mt-1 text-sm text-gray-600">Dacă întrebarea ta reală este despre validare, sloturi sau categoria serviciului.</p>
        </Link>
      </div>
    ),
  },
]

export default function ProcuraMostenireGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="procura-mostenire-germania"
      lpTopic="procura"
      h1="Procură moștenire din Germania — ce cere consulatul și ce cere notarul"
      intro="Dacă ai o succesiune de rezolvat în România și nu poți fi prezent, procura consulară este soluția practică. Important este să separi clar ce se rezolvă la consulat de ce se rezolvă mai târziu la notarul din România."
      tldr="Procura de moștenire se face la consulat și se eliberează în aceeași zi. Certificatul de deces nu este pentru consulat, ci pentru notar. Înainte de programare, trebuie să clarifici dacă este procură de acceptare sau de renunțare."
      ctaHref="/procura-notariala-germania"
      ctaLabel="Vezi toate tipurile de procuri consulare →"
      updatedAt="aprilie 2026"
      sourceNote="Consulatele României din Germania și regulile practice pentru procuri"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi dacă este moștenire, proprietate sau alt tip de procură?"
      finalCtaText="Pornește de aici dacă problema este succesiunea. Pentru restul situațiilor, paginile conexe te mută direct pe ghidul mai apropiat de cazul tău."
    />
  )
}
