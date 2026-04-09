import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Buletin expirat în Germania — Nu la consulat, ci la SPCLEP | ActeRO',
  description:
    'Buletinul expirat nu se reînnoiește la consulat. Din 2025, prezență fizică obligatorie la SPCLEP în România. CEI sau CIS, cu sau fără domiciliu — ghid complet.',
  keywords: [
    'buletin expirat germania',
    'carte identitate expirata germania',
    'buletin romania din germania',
    'reinnoire buletin din germania',
    'spclep buletin expirat diaspora',
    'cei cis buletin expirat',
    'prezenta fizica buletin romania 2025',
    'buletin cu domiciliu romania din germania',
    'buletin fara domiciliu romania din germania',
    'primul buletin din germania',
  ],
  openGraph: {
    title: 'Buletin expirat în Germania — Nu la consulat, ci la SPCLEP',
    description:
      'Din 2025, prezență fizică obligatorie la SPCLEP. CEI sau CIS, cu sau fără domiciliu în România — traseul exact pentru situația ta.',
    url: 'https://actero.ro/buletin-expirat-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/buletin-expirat-germania',
  },
}

const faqItems = [
  {
    question: 'Pot să-mi reînnoiesc buletinul la consulatul din Germania?',
    answer:
      'Nu. Buletinul necesită prezență fizică în România la SPCLEP, unde se face biometria. Consulatul nu emite buletine.',
  },
  {
    question: 'La ce SPCLEP mă duc dacă am domiciliu activ în România?',
    answer:
      'Te uiți în primul rând la SPCLEP-ul de domiciliu. Pentru CEI există mai multă flexibilitate decât pentru CIS.',
  },
  {
    question: 'La ce SPCLEP mă duc dacă nu mai am domiciliu activ în România?',
    answer:
      'Pentru CEI traseul poate fi mai flexibil. Pentru CIS trebuie urmărită legătura cu ultima adresă înregistrată în România.',
  },
  {
    question: 'Ce este CEI și ce este CIS? Care e mai bun pentru mine?',
    answer:
      'CEI este varianta mai practică pentru cine locuiește în Germania, fiind mai utilă pentru deplasări în UE și mai flexibilă procedural. CIS este mai ieftină, dar mai limitată.',
  },
  {
    question: 'Mai funcționează procura pentru reînnoirea buletinului?',
    answer:
      'Nu pentru depunere și biometrie. Prezența personală la SPCLEP rămâne pasul critic. Pentru CIS poate exista utilitate la ridicare, nu la depunere.',
  },
  {
    question: 'Trebuie să aduc fotografii la SPCLEP?',
    answer:
      'Nu. Fotografia și amprentele se preiau biometric la ghișeu.',
  },
  {
    question: 'Cât costă reînnoirea buletinului?',
    answer:
      'CEI și CIS au costuri diferite, iar plata se face separat de ghișeul SPCLEP. Merită verificată situația actuală înainte de drum.',
  },
  {
    question: 'Pot ridica buletinul prin procură dacă nu pot veni personal a doua oară?',
    answer:
      'Pentru CEI trebuie planificată ridicarea personală. Pentru CIS poate exista varianta procurii speciale, în funcție de procedura acceptată.',
  },
]

const howToSteps = [
  {
    name: 'Stabilește sub-situația ta',
    text: 'Ai domiciliu activ în România, nu mai ai, sau e primul tău buletin? De aici pleacă tot traseul corect.',
  },
  {
    name: 'Alege CEI sau CIS',
    text: 'CEI este varianta mai practică pentru cine locuiește în Germania. CIS este mai ieftină, dar cu limitări mai mari.',
  },
  {
    name: 'Pregătește documentele',
    text: 'Certificatul de naștere, buletinul vechi dacă îl mai ai și documentele suplimentare care depind de situația ta.',
  },
  {
    name: 'Planifică deplasarea în România',
    text: 'Verifici SPCLEP-ul relevant și te asiguri că ai și document valabil pentru a călători până acolo.',
  },
  {
    name: 'Prezintă-te personal la SPCLEP și ridică actul',
    text: 'Biometria se face la ghișeu, iar ridicarea diferă între CEI și CIS.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/buletin-expirat-germania#article',
  headline: 'Buletin expirat în Germania — Nu la consulat, ci la SPCLEP 2026',
  description:
    'Ghid pentru reînnoirea buletinului expirat din Germania: SPCLEP obligatoriu, CEI vs CIS, cu sau fără domiciliu și orientare spre situația corectă.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/buletin-expirat-germania',
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
      name: 'Buletin România Germania',
      item: 'https://actero.ro/buletin-romania-germania',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Buletin expirat Germania',
      item: 'https://actero.ro/buletin-expirat-germania',
    },
  ],
}

const sections = [
  {
    id: 'nu-la-consulat',
    title: 'Buletinul NU se rezolvă la consulat — de ce contează',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="mb-1 font-semibold text-red-900">Consulatul din Germania nu eliberează buletine</p>
          <p className="text-sm text-red-800">
            Spre deosebire de pașaport, buletinul necesită deplasare în România. Biometria se face exclusiv la ghișeul SPCLEP și nu poate fi mutată la consulat.
          </p>
        </div>

        <div className="rounded-xl border border-green-200 bg-green-50 p-4">
          <p className="mb-1 font-semibold text-green-900">Ce poți face din Germania înainte de drum</p>
          <ul className="space-y-1 text-sm text-green-800">
            <li>Verifici ce variantă ți se aplică</li>
            <li>Decizi CEI sau CIS</li>
            <li>Pregătești documentele și eventual extrasul CF</li>
            <li>Planifici eventual și o procură pentru ridicarea CIS</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'situatia-ta',
    title: 'Situația ta — ghidul potrivit',
    content: (
      <div className="space-y-2">
        {[
          {
            icon: '🏠',
            titlu: 'Buletin expirat, am domiciliu activ în România',
            descriere:
              'Este cazul mai simplu. Documentele sunt mai puține și nu ai nevoie de extras CF.',
            href: '/buletin-expirat-cu-domiciliu-romania',
            hrefLabel: 'Ghid cu domiciliu activ →',
            color: 'border-green-200 bg-green-50',
            titleColor: 'text-green-900',
          },
          {
            icon: '🌍',
            titlu: 'Buletin expirat, nu mai am domiciliu activ în România',
            descriere:
              'Ai nevoie de atenție suplimentară la adresa din România și la documentele care o susțin.',
            href: '/buletin-expirat-fara-domiciliu-romania',
            hrefLabel: 'Ghid fără domiciliu activ →',
            color: 'border-blue-100 bg-blue-50',
            titleColor: 'text-blue-900',
          },
          {
            icon: '🆕',
            titlu: 'Primul meu buletin — nu am mai avut niciodată',
            descriere:
              'Dacă te-ai născut în Germania sau nu ai fost niciodată înregistrat în România, traseul este diferit de reînnoire.',
            href: '/acte-copil-nascut-in-germania',
            hrefLabel: 'Ghid acte copil →',
            color: 'border-purple-100 bg-purple-50',
            titleColor: 'text-purple-900',
          },
        ].map(({ icon, titlu, descriere, href, hrefLabel, color, titleColor }) => (
          <div key={titlu} className={`rounded-xl border p-4 ${color}`}>
            <p className={`mb-1 font-semibold ${titleColor}`}>
              {icon} {titlu}
            </p>
            <p className="mb-2 text-sm text-gray-700">{descriere}</p>
            <Link href={href} className="text-xs font-medium text-blue-700 underline hover:text-blue-900">
              {hrefLabel}
            </Link>
          </div>
        ))}

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Dacă nu e vorba de buletin expirat, ci de pierdut sau furat, traseul se schimbă puțin. Ghidul rapid te duce mai sigur pe varianta corectă.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'cei-cis',
    title: 'CEI sau CIS — decizia care schimbă traseul',
    content: (
      <div className="space-y-3">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Criteriu</th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-blue-700">CEI</th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">CIS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { criteriu: 'Valabilă pentru călătorii în UE', cei: 'Da', cis: 'Nu' },
                { criteriu: 'Flexibilitate procedurală', cei: 'Mai mare', cis: 'Mai mică' },
                { criteriu: 'Timp de emitere', cei: 'Mai scurt', cis: 'Mai lung' },
                { criteriu: 'Ridicare', cei: 'Personală', cis: 'Poate permite procură' },
              ].map(({ criteriu, cei, cis }, index) => (
                <tr key={criteriu} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 p-2 text-xs font-medium text-gray-800">{criteriu}</td>
                  <td className="border border-gray-200 p-2 text-xs text-blue-700">{cei}</td>
                  <td className="border border-gray-200 p-2 text-xs text-gray-600">{cis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
          <p className="text-sm text-blue-800">
            Pentru cine locuiește în Germania, CEI este de regulă varianta practică. CIS poate părea mai ieftină, dar vine cu limitări importante.
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
              doc: 'Buletinul expirat',
              detaliu: 'Original, dacă îl mai ai.',
            },
            {
              req: true,
              doc: 'Certificat de naștere românesc',
              detaliu: 'Original și în stare bună.',
            },
            {
              req: false,
              label: 'condiționat',
              doc: 'Certificat de căsătorie românesc',
              detaliu: 'Dacă ți-ai schimbat numele.',
            },
            {
              req: false,
              label: 'depinde de situație',
              doc: 'Extras de carte funciară',
              detaliu: 'Mai ales relevant când nu mai ai domiciliu activ în România.',
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
            Imaginea facială și amprentele se preiau biometric la ghișeul SPCLEP.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'plata-taxa',
    title: 'Cum și unde plătești taxa',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="mb-1 font-semibold text-amber-900">Taxa se plătește separat de ghișeul SPCLEP</p>
          <p className="text-sm text-amber-800">
            În practică, pregătești plata în avans sau separat, apoi vii cu dovada la depunere.
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
            <p className="mb-1 text-sm font-semibold text-blue-900">CEI</p>
            <p className="text-sm text-blue-800">Varianta mai practică pentru diaspora</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
            <p className="mb-1 text-sm font-semibold text-gray-900">CIS</p>
            <p className="text-sm text-gray-800">Varianta mai ieftină, dar mai limitată</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'ridicare',
    title: 'Ridicarea buletinului — personal sau prin procură',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-red-100 bg-red-50 p-4">
            <p className="mb-1 font-semibold text-red-900">CEI — planifică ridicarea personală</p>
            <p className="text-sm text-red-800">
              Pentru CEI trebuie să te gândești din start și la momentul ridicării, nu doar la depunere.
            </p>
          </div>
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-1 font-semibold text-green-900">CIS — poate permite procură</p>
            <p className="text-sm text-green-800">
              Dacă nu poți reveni personal, CIS poate fi mai flexibilă pe partea de ridicare.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'greseli',
    title: 'Greșeli frecvente cu buletinul expirat',
    content: (
      <div className="space-y-2">
        {[
          {
            gresit: 'Mă duc la consulatul din Germania să-mi reînnoiesc buletinul',
            corect: 'Buletinul nu se reînnoiește la consulat, ci în România la SPCLEP.',
          },
          {
            gresit: 'Cred că pot evita deplasarea în România prin procură',
            corect: 'Procura nu înlocuiește depunerea și biometria.',
          },
          {
            gresit: 'Aleg CIS doar pentru că pare mai ieftin',
            corect: 'Trebuie să ții cont și de limitările ei pentru folosire și deplasări.',
          },
          {
            gresit: 'Aduc fotografii biometrice la SPCLEP',
            corect: 'Nu ai nevoie de ele; fotografia se face la ghișeu.',
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
    title: 'Situația ta e diferită?',
    content: (
      <div className="space-y-2">
        {[
          {
            text: 'Buletin expirat cu domiciliu activ în România',
            href: '/buletin-expirat-cu-domiciliu-romania',
            label: 'Ghid cu domiciliu activ →',
          },
          {
            text: 'Buletin expirat fără domiciliu activ în România',
            href: '/buletin-expirat-fara-domiciliu-romania',
            label: 'Ghid fără domiciliu activ →',
          },
          {
            text: 'Copil născut în Germania și fără acte românești',
            href: '/acte-copil-nascut-in-germania',
            label: 'Ghid acte copil →',
          },
          {
            text: 'Nu ai niciun act valabil și trebuie să pleci urgent în România',
            href: '/titlu-calatorie-germania',
            label: 'Ghid titlu de călătorie →',
          },
        ].map(({ text, href, label }) => (
          <div key={href} className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3">
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

export default function BuletinExpiratGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="buletin-expirat-germania"
      lpTopic="buletin"
      h1="Buletin expirat în Germania — nu la consulat, ci la SPCLEP în România"
      intro="Buletinul expirat nu se rezolvă la consulatul din Germania. Spre deosebire de pașaport, reînnoirea lui cere deplasare în România și clarificarea corectă a situației tale înainte de drum."
      tldr="Pentru buletinul expirat trebuie să te uiți întâi dacă ai domiciliu activ, dacă nu mai ai sau dacă de fapt e primul tău buletin. Apoi alegi CEI sau CIS și pregătești dosarul pentru SPCLEP, nu pentru consulat."
      ctaHref="/wizard?problem=buletin"
      ctaLabel="Primește lista exactă pentru situația ta →"
      updatedAt="aprilie 2026"
      sourceNote="MAI, hub.mai.gov.ro, carteadeidentitate.gov.ro"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi la ce SPCLEP mergi sau ce documente pregătești?"
      finalCtaText="Ghidul rapid ActeRO combină situația ta exactă și îți dă traseul corect, fără să te lase să pleci în România pe varianta greșită."
    />
  )
}
