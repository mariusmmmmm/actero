import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Procură la consulat vs notar german — Ce alegi pentru România | ActeRO',
  description:
    'Consulat sau notar german pentru procura valabilă în România? Apostilă, traducere, cost, timp. De ce consulatul câștigă în aproape toate cazurile.',
  keywords: [
    'procura consulat vs notar german',
    'procura consulat sau notar german',
    'apostila procura notar german romania',
    'procura notar german valabila romania',
    'procura consulat roman avantaje',
    'notar german procura apostila haga',
    'traducere legalizata procura notar german',
    'procura fara apostila consulat romania',
    'cost procura notar german vs consulat',
    'procura din germania pentru romania',
  ],
  openGraph: {
    title: 'Procură la consulat vs notar german — Ce alegi pentru România',
    description:
      'Consulat: fără apostilă, fără traducere, aceeași zi. Notar german: apostilă + traducere legalizată + timp suplimentar. Când mergi totuși la notar german.',
    url: 'https://actero.ro/procura-consulat-vs-notar-german',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/procura-consulat-vs-notar-german',
  },
}

const faqItems = [
  {
    question: 'O procură de la notar german este valabilă în România?',
    answer:
      'Da, este valabilă, dar nu direct. Are nevoie de apostilă Haga și de traducere autorizată în română. Fără acești pași, instituția sau notarul din România poate refuza documentul.',
  },
  {
    question: 'O procură de la consulatul românesc din Germania necesită apostilă?',
    answer:
      'Nu. Procura emisă la consulatul românesc este recunoscută direct în România, fără apostilă și fără traducere, pentru că este un act autentic emis de statul român.',
  },
  {
    question: 'De ce ar alege cineva notarul german în loc de consulat?',
    answer:
      'Doar în cazuri speciale: urgență extremă fără programări la consulat, situații care produc efecte exclusiv în Germania sau când o instituție cere un formular propriu ce trebuie autentificat local.',
  },
  {
    question: 'Cât costă în plus procura la notar german față de consulat?',
    answer:
      'La notar german plătești onorariul notarului, apostila Haga și traducerea autorizată. În practică, costul total ajunge de multe ori la 100-300€ sau mai mult. La consulat, costul este mult mai mic.',
  },
  {
    question: 'Cât durează mai mult procura prin notar german?',
    answer:
      'Apostila Haga poate dura una sau două săptămâni, iar traducerea mai adaugă câteva zile. La consulat, procura se eliberează de regulă în aceeași zi.',
  },
  {
    question: 'Traducerea procurii de la notar german trebuie legalizată?',
    answer:
      'Depinde de instituția din România care o primește. Uneori este suficientă traducerea autorizată, alteori se cere și legalizare suplimentară. Verificarea trebuie făcută înainte cu destinatarul documentului.',
  },
  {
    question: 'Există situații când consulatul românesc nu poate face procura?',
    answer:
      'Da. Dacă actul produce efecte juridice exclusiv în Germania sau iese din competența consulatului, notarul german poate fi soluția corectă.',
  },
]

const howToSteps = [
  {
    name: 'Stabilești unde produce efecte procura',
    text: 'Dacă efectele sunt în România, consulatul este aproape întotdeauna varianta mai simplă. Dacă efectele sunt doar în Germania, notarul german poate fi corect.',
  },
  {
    name: 'Dacă alegi consulatul, faci programare pe econsulat',
    text: 'Procura este recunoscută direct în România, fără apostilă și fără traducere.',
  },
  {
    name: 'Dacă alegi notarul german, pregătești apostila și traducerea',
    text: 'După autentificare, ai nevoie de apostila Haga și de traducere autorizată în română înainte să trimiți actul în România.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/procura-consulat-vs-notar-german#article',
  headline: 'Procură la consulat vs notar german — Ce alegi pentru România 2026',
  description:
    'Pagina comparativă consulat vs notar german pentru procuri: apostilă, traducere, cost, timp și cazurile rare în care notarul german are sens.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/procura-consulat-vs-notar-german',
  inLanguage: 'ro',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://actero.ro' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Procură notarială Germania',
      item: 'https://actero.ro/procura-notariala-germania',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Consulat vs notar german',
      item: 'https://actero.ro/procura-consulat-vs-notar-german',
    },
  ],
}

const sections = [
  {
    id: 'verdictul',
    title: 'Verdictul rapid — pentru procuri cu efecte în România',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border-2 border-green-300 bg-green-50 p-4 text-center">
          <p className="mb-2 text-lg font-black text-green-900">
            Consulatul românesc este aproape întotdeauna alegerea mai bună
          </p>
          <p className="text-sm text-green-800">
            Procura făcută la consulat este recunoscută direct în România, fără
            apostilă, fără traducere și fără pași intermediari.
          </p>
        </div>

        <p className="text-sm text-gray-600">
          Notarul german rămâne o excepție utilă doar în câteva situații reale.
          Pentru majoritatea procurilor folosite în România, consulatul câștigă la
          timp, cost și simplitate.
        </p>
      </div>
    ),
  },
  {
    id: 'tabel-comparativ',
    title: 'Comparativ complet — consulat vs notar german',
    content: (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">
                Criteriu
              </th>
              <th className="border border-gray-200 p-2 text-left font-semibold text-green-700">
                Consulat românesc
              </th>
              <th className="border border-gray-200 p-2 text-left font-semibold text-gray-600">
                Notar german
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                criteriu: 'Recunoaștere în România',
                consulat: 'Directă, fără pași suplimentari',
                notar: 'Necesită apostilă și traducere',
                highlight: true,
              },
              {
                criteriu: 'Apostilă Haga',
                consulat: 'Nu',
                notar: 'Da',
                highlight: true,
              },
              {
                criteriu: 'Traducere în română',
                consulat: 'Nu',
                notar: 'Da',
                highlight: true,
              },
              {
                criteriu: 'Timp total',
                consulat: 'De regulă aceeași zi',
                notar: 'De obicei 2-4 săptămâni',
                highlight: false,
              },
              {
                criteriu: 'Cost total',
                consulat: 'Mic',
                notar: 'Mult mai mare',
                highlight: false,
              },
              {
                criteriu: 'Redactare în română',
                consulat: 'Da',
                notar: 'Nu, apoi traduci',
                highlight: false,
              },
            ].map(({ criteriu, consulat, notar, highlight }, index) => (
              <tr
                key={criteriu}
                className={
                  highlight ? 'bg-green-50' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }
              >
                <td className="border border-gray-200 p-2 text-xs font-medium text-gray-800">
                  {criteriu}
                </td>
                <td className="border border-gray-200 p-2 text-xs text-green-700">
                  {consulat}
                </td>
                <td className="border border-gray-200 p-2 text-xs text-gray-600">
                  {notar}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-1 text-xs text-gray-400">
          Rândurile marcate evidențiază avantajele decisive ale consulatului.
        </p>
      </div>
    ),
  },
  {
    id: 'fluxul-notar-german',
    title: 'Cum arată fluxul complet prin notar german',
    content: (
      <div className="space-y-2">
        <p className="mb-2 text-sm text-gray-700">
          Dacă alegi totuși notarul german, aceștia sunt pașii obligatorii pentru ca
          documentul să fie acceptat în România:
        </p>
        {[
          {
            pas: '1. Autentifici procura la notarul german',
            detaliu: 'Documentul este întocmit în germană și autentificat local.',
            timp: 'O zi',
          },
          {
            pas: '2. Obții apostila Haga',
            detaliu:
              'Apostila confirmă autenticitatea notarului german și se obține de la autoritatea competentă a landului.',
            timp: '1-2 săptămâni',
          },
          {
            pas: '3. Faci traducerea autorizată în română',
            detaliu:
              'În funcție de destinatar, poate fi nevoie și de legalizare suplimentară.',
            timp: '2-5 zile',
          },
          {
            pas: '4. Trimiți întreg pachetul în România',
            detaliu:
              'Instituția din România verifică procura, apostila și traducerea împreună.',
            timp: '—',
          },
        ].map(({ pas, detaliu, timp }) => (
          <div key={pas} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-3">
            <div className="w-12 flex-shrink-0 pt-0.5 text-right text-xs text-gray-400">
              {timp}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{pas}</p>
              <p className="mt-0.5 text-xs text-gray-600">{detaliu}</p>
            </div>
          </div>
        ))}

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            <strong>Total estimat:</strong> de regulă 2-4 săptămâni și cost semnificativ
            mai mare decât varianta consulară.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'cand-notar-german',
    title: 'Când are sens totuși notarul german',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Există câteva situații reale în care notarul german poate fi varianta corectă:
        </p>

        <div className="space-y-2">
          {[
            {
              situatie: 'Procura produce efecte exclusiv în Germania',
              detaliu:
                'Dacă actul nu este destinat României, autoritatea germană poate fi cea potrivită.',
            },
            {
              situatie: 'Ai o urgență extremă și nu găsești programare la consulat',
              detaliu:
                'Este varianta mai scumpă și mai lentă, dar uneori poate salva o situație cu termen fix.',
            },
            {
              situatie: 'Instituția cere un formular propriu',
              detaliu:
                'Unele bănci sau instituții pot accepta o formulă proprie autentificată local.',
            },
          ].map(({ situatie, detaliu }) => (
            <div key={situatie} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="mb-1 text-sm font-semibold text-gray-800">📌 {situatie}</p>
              <p className="text-xs text-gray-600">{detaliu}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
          <p className="text-sm text-blue-800">
            <strong>Regula practică:</strong> dacă procura produce efecte juridice în
            România și nu ai un motiv special, mergi la consulat.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'ghiduri',
    title: 'Ghiduri pentru tipul tău de procură',
    content: (
      <div className="space-y-2">
        {[
          {
            text: 'Am nevoie de procură pentru proprietate în România',
            href: '/wizard?problem=procura',
            label: 'Aleg tipul în ghidul rapid →',
          },
          {
            text: 'Am nevoie de procură pentru moștenire / succesiune',
            href: '/wizard?problem=procura',
            label: 'Aleg tipul în ghidul rapid →',
          },
          {
            text: 'Am nevoie de procură generală pentru bancă, firmă sau altceva',
            href: '/wizard?problem=procura',
            label: 'Aleg tipul în ghidul rapid →',
          },
          {
            text: 'Vreau ghidul complet pentru toate tipurile de procuri',
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

export default function ProcuraConsulatVsNotarGermanPage() {
  return (
    <LlmOptimizedPage
      lpSlug="procura-consulat-vs-notar-german"
      lpTopic="procura"
      h1="Procură la consulat vs notar german — ce alegi pentru acte în România"
      intro="Dacă ai nevoie de o procură pentru România și te gândești că notarul german din cartier pare mai simplu, merită să știi diferența reală. Pentru majoritatea cazurilor, consulatul românesc este mai rapid, mai ieftin și mai ușor de folosit în România."
      tldr="Consulatul este aproape întotdeauna alegerea mai bună pentru procuri folosite în România: fără apostilă, fără traducere, de regulă în aceeași zi. Notarul german are sens doar în cazuri speciale."
      ctaHref="/wizard?problem=procura"
      ctaLabel="Găsește ghidul pentru tipul tău de procură →"
      updatedAt="aprilie 2026"
      sourceNote="Consulatele României din Germania și regulile practice pentru procuri"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi ce tip de procură ai nevoie?"
      finalCtaText="Ghidul rapid ActeRO îți identifică repede tipul corect de procură și te trimite spre ghidul potrivit pentru problema ta."
    />
  )
}
