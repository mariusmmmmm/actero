import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Primul buletin (CEI) copil născut în Germania — după transcriere | ActeRO',
  description:
    'Primul buletin CEI al copilului după transcrierea nașterii: orice SPCLEP, copilul prezent și stabilirea domiciliului în România. Ghid 2026.',
  keywords: [
    'primul buletin copil nascut in germania',
    'cei copil germania romania',
    'primul buletin copil dupa transcriere',
    'buletin minor nascut in germania',
    'spclep copil nascut in germania',
    'orice spclep primul buletin copil',
    'domiciliu copil romani germania buletin',
    'biometrie copil spclep nastere germania',
    'primul act identitate copil nascut germania',
    'buletin dupa transcriere nastere germania',
  ],
  openGraph: {
    title: 'Primul buletin (CEI) copil născut în Germania — după transcriere',
    description:
      'După transcriere, primul buletin al copilului se face în România, la SPCLEP. Ghid practic 2026.',
    url: 'https://www.actero.ro/primul-buletin-copil-nascut-in-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/primul-buletin-copil-nascut-in-germania',
  },
}

const faqItems = [
  {
    question: 'Unde merg pentru primul buletin al copilului — la consulat sau în România?',
    answer:
      'În România, la SPCLEP. Asta este diferența practică majoră față de pașaportul copilului.',
  },
  {
    question: 'La ce SPCLEP merg dacă copilul nu a mai avut adresă în România?',
    answer:
      'Tocmai pentru că este prima înregistrare, traseul este mai flexibil decât cred mulți părinți.',
  },
  {
    question: 'Copilul trebuie să fie prezent la SPCLEP?',
    answer:
      'Da, prezența copilului contează chiar și la vârste foarte mici, pentru partea de biometrie și identificare.',
  },
  {
    question: 'Ce vârstă minimă are copilul pentru primul buletin?',
    answer:
      'Nu te uiți aici la o limită clasică de tip „prea mic”, ci la faptul că documentul poate fi cerut după ce există baza românească necesară.',
  },
  {
    question: 'Cât costă primul buletin al copilului?',
    answer:
      'Pentru prima emitere pot exista avantaje de cost în anumite perioade. Important este să verifici regula actuală înainte de drum.',
  },
  {
    question: 'Trebuie să aduc fotografii pentru buletin?',
    answer:
      'Nu. Biometria și fotografia se fac la ghișeul SPCLEP.',
  },
  {
    question: 'Transcrierea nașterii trebuie finalizată înainte?',
    answer:
      'Da, acesta este pasul obligatoriu de dinainte. Fără transcriere finalizată, nu are sens să mergi mai departe spre primul buletin.',
  },
  {
    question: 'Cum stabilesc domiciliul copilului în România?',
    answer:
      'Domiciliul copilului se leagă de adresa din România pe care o susții prin documentele potrivite atunci când mergi la SPCLEP.',
  },
]

const howToSteps = [
  {
    name: 'Verifici că transcrierea este finalizată',
    text: 'Fără acest pas, nu are rost să pornești drumul pentru primul buletin.',
  },
  {
    name: 'Pregătești adresa din România pentru domiciliul copilului',
    text: 'Aici intră logica extrasului CF și a documentelor care susțin prima înregistrare.',
  },
  {
    name: 'Alegi SPCLEP-ul convenabil',
    text: 'Pentru prima înregistrare nu pornești de la ideea că ești legat de un singur SPCLEP.',
  },
  {
    name: 'Mergi cu copilul și documentele la SPCLEP',
    text: 'Prezența copilului și documentele părinților sunt esențiale.',
  },
  {
    name: 'Ridici documentul după emitere',
    text: 'Planifică și partea de ridicare, nu doar depunerea.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/primul-buletin-copil-nascut-in-germania#article',
  headline: 'Primul buletin (CEI) copil născut în Germania — după transcriere 2026',
  description:
    'Ghid pentru primul buletin CEI al copilului născut în Germania, după transcriere: SPCLEP, prezența copilului și domiciliul în România.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/primul-buletin-copil-nascut-in-germania',
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
      name: 'Acte copil născut în Germania',
      item: 'https://www.actero.ro/acte-copil-nascut-in-germania',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Primul buletin copil Germania',
      item: 'https://www.actero.ro/primul-buletin-copil-nascut-in-germania',
    },
  ],
}

const sections = [
  {
    id: 'buletin-vs-pasaport',
    title: 'Buletin sau pașaport — ce alegi pentru copil',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          După transcriere, părinții intră adesea într-o nouă întrebare: buletin sau pașaport? Diferența practică principală este unde se rezolvă și cât de repede vrei să închizi situația.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="mb-1 font-semibold text-blue-900">Buletin (CEI) — această pagină</p>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>Necesită deplasare în România</li>
              <li>Se leagă de SPCLEP, nu de consulat</li>
              <li>Devine documentul principal de identitate</li>
            </ul>
          </div>

          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-1 font-semibold text-green-900">Pașaport — alternativă</p>
            <ul className="space-y-1 text-sm text-green-800">
              <li>Se face prin consulat</li>
              <li>Poate fi mai convenabil dacă nu vrei drumul la SPCLEP</li>
              <li>Este alegerea mai naturală când prioritatea e călătoria</li>
            </ul>
            <Link
              href="/acte-copil-nascut-in-germania"
              className="mt-2 inline-block text-xs font-medium text-green-700 underline hover:text-green-900"
            >
              Ghid acte copil →
            </Link>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'blocaj-transcriere',
    title: 'Transcrierea trebuie finalizată — verificare rapidă',
    content: (
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-green-200 bg-green-50 p-4">
          <p className="mb-1 font-semibold text-green-900">Copilul are deja baza românească finalizată</p>
          <p className="text-sm text-green-800">
            Atunci poți merge mai departe spre primul buletin.
          </p>
        </div>
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
          <p className="mb-1 font-semibold text-orange-900">Transcrierea nu e gata</p>
          <p className="mb-2 text-sm text-orange-800">
            Atunci primul pas nu este SPCLEP-ul, ci finalizarea transcrierii.
          </p>
          <Link
            href="/transcriere-certificat-nastere-germania"
            className="text-xs font-medium text-orange-800 underline hover:text-orange-900"
          >
            Ghid transcriere naștere →
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: 'domiciliu-copil',
    title: 'Domiciliul copilului — stabilit la SPCLEP',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Pentru primul buletin, copilul nu vine cu o adresă veche deja stabilită în România. Tocmai de aceea, la SPCLEP se clarifică și partea de domiciliu.
        </p>

        <div className="space-y-2 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="font-semibold text-blue-900">Extrasul CF — documentul care te ajută aici</p>
          <ol className="space-y-1 text-sm text-blue-800">
            <li>Identifici adresa din România la care va fi înregistrat copilul.</li>
            <li>Pregătești extrasul de carte funciară suficient de aproape de data drumului.</li>
            <li>Dacă nu ești titular, pregătești și consimțământul proprietarului sau găzduitorului.</li>
          </ol>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Nu lăsa partea de adresă pe ultima sută de metri. Pentru primul buletin, exact asta blochează frecvent părinții.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'documente',
    title: 'Documentele necesare la SPCLEP',
    content: (
      <div className="space-y-3">
        <div className="space-y-2">
          {[
            {
              req: true,
              doc: 'Certificatul de naștere românesc transcris al copilului',
              detaliu: 'Documentul care arată că etapa de transcriere este închisă.',
            },
            {
              req: true,
              doc: 'Actele de identitate ale părinților',
              detaliu: 'Părinții trebuie să poată susține corect identitatea și reprezentarea copilului.',
            },
            {
              req: true,
              doc: 'Extras de carte funciară',
              detaliu: 'Documentul important pentru domiciliul copilului.',
            },
            {
              req: false,
              label: 'dacă nu ești titularul',
              doc: 'Consimțământul proprietarului sau găzduitorului',
              detaliu: 'Ajută la susținerea adresei unde va figura copilul.',
            },
            {
              req: false,
              label: 'după caz',
              doc: 'Certificat de căsătorie românesc',
              detaliu: 'În funcție de situația părinților și de cum trebuie susținute datele familiei.',
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

        <div className="space-y-1 rounded-lg border border-blue-100 bg-blue-50 p-3">
          <p className="text-xs font-semibold text-blue-800">Fotografii proprii nu sunt necesare</p>
          <p className="text-xs text-blue-700">
            Biometria se face la ghișeul SPCLEP, inclusiv pentru copii.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'spclep-plata',
    title: 'La ce SPCLEP și cum plătești',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="mb-1 font-semibold text-blue-900">Orientează-te după conveniență</p>
          <p className="text-sm text-blue-800">
            Pentru prima înregistrare a copilului, părinții au de regulă mai multă libertate în alegerea SPCLEP-ului decât cred inițial.
          </p>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Taxa se plătește separat de ghișeul SPCLEP și trebuie verificată în forma actuală înainte de drum.
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-green-100 bg-green-50 p-3">
            <p className="mb-1 text-sm font-semibold text-green-900">Prima emitere</p>
            <p className="text-xs text-green-800">
              Pot exista avantaje de cost în anumite perioade, ceea ce face traseul și mai atractiv pentru părinți.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
            <p className="mb-1 text-sm font-semibold text-gray-900">Emiteri ulterioare</p>
            <p className="text-xs text-gray-700">
              Aici regula de cost revine la forma standard.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'ridicare',
    title: 'Ridicarea CEI — planifici din timp',
    content: (
      <div className="space-y-2 rounded-xl border border-red-100 bg-red-50 p-4">
        <p className="font-semibold text-red-900">Planifică și ridicarea, nu doar depunerea</p>
        <p className="text-sm text-red-800">
          Pentru CEI trebuie să te gândești din start la cine ridică, când și cum se închide complet drumul, nu doar la ziua în care depui documentele.
        </p>
        <p className="text-sm text-red-800">
          Dacă îți organizezi prost vizita în România, aici apare de obicei al doilea blocaj, după transcriere.
        </p>
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
            gresit: 'Merg direct la consulat pentru buletinul copilului',
            corect: 'Buletinul copilului se rezolvă la SPCLEP în România, nu la consulat.',
          },
          {
            gresit: 'Nu pregătesc partea de domiciliu și adresa din România',
            corect: 'Pentru primul buletin, asta este o piesă esențială a dosarului.',
          },
          {
            gresit: 'Cred că un copil foarte mic nu trebuie să fie prezent',
            corect: 'Prezența copilului rămâne importantă și la vârste mici.',
          },
          {
            gresit: 'Aduc fotografii ale copilului',
            corect: 'Nu ai nevoie de ele; biometria se face la ghișeu.',
          },
          {
            gresit: 'Cred că sunt legat de un singur SPCLEP fix',
            corect: 'Pentru prima înregistrare, logica poate fi mai flexibilă decât te aștepți.',
          },
        ].map(({ gresit, corect }, index) => (
          <div key={index} className="rounded-lg border border-red-100 bg-red-50 p-3">
            <p className="mb-0.5 text-xs font-semibold text-red-700">❌ {gresit}</p>
            <p className="text-xs text-gray-700">✅ {corect}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'alte-situatii',
    title: 'Pagini conexe',
    content: (
      <div className="space-y-2">
        {[
          {
            text: 'Transcrierea nașterii — pasul anterior obligatoriu',
            href: '/transcriere-certificat-nastere-germania',
            label: 'Ghid transcriere naștere →',
          },
          {
            text: 'Alternativa: pașaportul copilului',
            href: '/primul-pasaport-copil-germania',
            label: 'Ghid primul pașaport copil →',
          },
          {
            text: 'Traseul complet pentru copilul fără acte românești',
            href: '/acte-copil-nascut-in-germania',
            label: 'Ghid complet →',
          },
        ].map(({ text, href, label }) => (
          <div
            key={href + label}
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

export default function PrimulBuletinCopilNascutInGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="primul-buletin-copil-nascut-in-germania"
      lpTopic="copil"
      h1="Primul buletin (CEI) al copilului născut în Germania — după transcriere"
      intro="După ce transcrierea este gata și copilul apare în evidențele românești, poți merge spre primul buletin. Față de pașaport, aici logica se mută din Germania în România: SPCLEP, domiciliu, prezența copilului și organizarea drumului."
      tldr="Primul buletin al copilului se face după transcriere și presupune drum la SPCLEP în România. Contează mai ales: transcrierea deja finalizată, documentele pentru domiciliul copilului și prezența lui fizică la depunere."
      ctaHref="/schimbare-domiciliu-copil-din-germania-in-romania"
      ctaLabel="Vezi cum pregătești domiciliul copilului în România →"
      updatedAt="aprilie 2026"
      sourceNote="MAI, hub.mai.gov.ro, ANCPI"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi dacă îți trebuie întâi domiciliul copilului sau poți merge direct pe CEI?"
      finalCtaText="Paginile conexe te leagă direct de transcriere, de primul pașaport sau de domiciliul copilului în România, în funcție de blocajul tău real."
    />
  )
}
