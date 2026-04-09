import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Buletin pierdut sau furat în Germania, fără domiciliu în România | ActeRO',
  description:
    'Buletin pierdut fără domiciliu activ în România: sesizarea la poliție nu este documentul principal la SPCLEP, CEI oferă traseu mai flexibil. Ghid 2026.',
  keywords: [
    'buletin pierdut germania fara domiciliu romania',
    'buletin pierdut germania',
    'fara domiciliu romania buletin',
    'spclep ultim domiciliu buletin',
    'buletin furat germania fara domiciliu',
    'sesizare politie buletin pierdut',
    'declaratie pierdere buletin spclep',
    'orice spclep buletin pierdut fara domiciliu',
    'cei cis fara domiciliu romania',
    'buletin pierdut fara adresa romania',
  ],
  openGraph: {
    title: 'Buletin pierdut sau furat în Germania, fără domiciliu în România',
    description:
      'Ce trebuie să știi despre poliție, SPCLEP, CEI vs CIS și traseul real fără domiciliu activ.',
    url: 'https://actero.ro/buletin-pierdut-furat-fara-domiciliu-romania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/buletin-pierdut-furat-fara-domiciliu-romania',
  },
}

const faqItems = [
  {
    question: 'Nu am sesizat poliția pentru buletinul furat. Pot totuși să merg la SPCLEP?',
    answer:
      'Da. Pentru SPCLEP, documentul central rămâne declarația ta și dosarul de identitate. Sesizarea la poliție este utilă și poate fi importantă legal în Germania, dar nu blochează singură procedura din România.',
  },
  {
    question: 'La ce SPCLEP mă duc dacă nu mai am domiciliu activ în România?',
    answer:
      'Pentru CEI traseul este mai flexibil decât pentru CIS. Pentru CIS rămâne relevantă ultima adresă înregistrată în România.',
  },
  {
    question: 'Trebuie să pregătesc o declarație de pierdere acasă înainte de SPCLEP?',
    answer:
      'Nu. În practică, declarația se gestionează la ghișeu, împreună cu restul pașilor de depunere.',
  },
  {
    question: 'Ce documente am nevoie dacă nu mai am domiciliu activ în România?',
    answer:
      'În centru rămân documentele civile românești și un act de identificare valabil dacă îl ai, iar restul depinde de situația ta exactă și de alegerea între CEI și CIS.',
  },
  {
    question: 'Furtul buletinului s-a întâmplat în Germania — raportez la poliția germană sau română?',
    answer:
      'Raportezi la poliția locală germană. Pentru partea românească, SPCLEP înregistrează situația pe baza declarației și a verificărilor sale.',
  },
  {
    question: 'Pot folosi pașaportul valabil ca document de identificare la SPCLEP fără buletin?',
    answer:
      'Da, pașaportul valabil ajută mult. Dacă nu îl ai, identificarea se poate face prin verificările din evidențe.',
  },
  {
    question: 'Cât costă noul buletin fără domiciliu activ în România?',
    answer:
      'CEI și CIS au costuri diferite, iar plata se face separat de ghișeul SPCLEP. Verifică regula exactă înainte de deplasare.',
  },
  {
    question: 'Pot ridica noul buletin prin procură dacă nu pot face două drumuri în România?',
    answer:
      'Pentru CEI trebuie să te gândești la ridicare personală. Pentru CIS poate exista varianta procurii speciale, în funcție de procedura acceptată.',
  },
]

const howToSteps = [
  {
    name: 'Dacă a fost furat în Germania, raportezi local',
    text: 'Raportarea la poliția locală este pasul util și normal pentru partea germană a situației.',
  },
  {
    name: 'Dacă a fost pierdut, nu te bloca în formalități inutile',
    text: 'Important este să pregătești dosarul pentru SPCLEP, nu să cauți formulare greșite.',
  },
  {
    name: 'Alegi CEI sau CIS înainte să pleci',
    text: 'Alegerea influențează atât flexibilitatea la SPCLEP, cât și ridicarea și utilitatea actului după emitere.',
  },
  {
    name: 'Pregătești documentele și planifici deplasarea',
    text: 'Verifici documentele civile, pașaportul dacă îl ai și tot ce ține de identificare și nume.',
  },
  {
    name: 'Te prezinți personal la SPCLEP',
    text: 'Declarația și biometria se fac la ghișeu, iar ridicarea trebuie gândită din timp.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/buletin-pierdut-furat-fara-domiciliu-romania#article',
  headline: 'Buletin pierdut sau furat în Germania, fără domiciliu în România — Ghid 2026',
  description:
    'Ghid pentru buletin pierdut sau furat fără domiciliu activ: poliție, SPCLEP, CEI vs CIS și pașii reali.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/buletin-pierdut-furat-fara-domiciliu-romania',
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
      name: 'Buletin pierdut fără domiciliu',
      item: 'https://actero.ro/buletin-pierdut-furat-fara-domiciliu-romania',
    },
  ],
}

const sections = [
  {
    id: 'doua-clarificari',
    title: 'Două lucruri pe care trebuie să le știi imediat',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="mb-1 font-semibold text-blue-900">1. Poliția nu este blocajul principal la SPCLEP</p>
          <p className="text-sm text-blue-800">
            Dacă buletinul a fost furat și nu ai încă dovada de la poliția germană, asta nu înseamnă automat că nu poți continua în România. Pentru dosarul românesc contează în primul rând identificarea și declarația.
          </p>
        </div>

        <div className="rounded-xl border border-green-200 bg-green-50 p-4">
          <p className="mb-1 font-semibold text-green-900">2. Fără domiciliu activ, CEI îți simplifică traseul</p>
          <p className="text-sm text-green-800">
            Când nu mai ai domiciliu activ, alegerea CEI este de multe ori cea mai practică, tocmai pentru că îți oferă mai multă flexibilitate procedurală decât CIS.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'pierdut-vs-furat',
    title: 'Ce faci imediat — pierdut vs furat',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
            <p className="mb-2 font-bold text-orange-900">PIERDUT</p>
            <ul className="space-y-1 text-sm text-orange-800">
              <li>Nu te bloca în formalități inutile înainte de SPCLEP</li>
              <li>Nu pregătești declarația acasă</li>
              <li>Te concentrezi pe documentele civile și pe alegerea între CEI și CIS</li>
            </ul>
          </div>

          <div className="rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="mb-2 font-bold text-red-900">FURAT</p>
            <ul className="space-y-1 text-sm text-red-800">
              <li>Raportezi la poliția locală germană</li>
              <li>Păstrezi dovada dacă o primești</li>
              <li>Nu confunzi hârtia de la poliție cu miezul dosarului SPCLEP</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
          <p className="text-sm text-gray-700">
            Dacă nu a fost pierdut sau furat, ci doar expirat, traseul corect este aici:
            <Link href="/buletin-expirat-fara-domiciliu-romania" className="ml-1 text-blue-600 underline hover:text-blue-800">
              ghid buletin expirat fără domiciliu activ
            </Link>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'spclep-unde',
    title: 'La ce SPCLEP mergi — fără domiciliu activ',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="mb-1 font-semibold text-blue-900">Dacă alegi CEI</p>
            <p className="text-sm text-blue-800">
              Ai traseu mai flexibil și poți căuta soluția cea mai convenabilă pentru deplasarea ta.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 font-semibold text-gray-900">Dacă alegi CIS</p>
            <p className="text-sm text-gray-700">
              Trebuie să te uiți mai atent la ultima adresă înregistrată și la legătura cu SPCLEP-ul relevant.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Pentru cine locuiește în Germania, CEI este în general strategia practică: mai utilă după emitere și mai flexibilă procedural.
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
              doc: 'Certificat de naștere românesc',
              detaliu: 'Original și în stare bună.',
            },
            {
              req: false,
              label: 'recomandat',
              doc: 'Pașaport valabil',
              detaliu: 'Ajută la identificare dacă îl ai.',
            },
            {
              req: false,
              label: 'util dacă a fost furat',
              doc: 'Dovada de la poliția germană',
              detaliu: 'Utilă, dar nu piesa centrală a dosarului românesc.',
            },
            {
              req: false,
              label: 'condiționat',
              doc: 'Certificat de căsătorie românesc',
              detaliu: 'Dacă numele actual diferă față de certificatul de naștere.',
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
            Biometria și fotografia se fac la ghișeul SPCLEP.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'cei-cis',
    title: 'CEI vs CIS — comparativ pentru situația ta',
    content: (
      <div className="space-y-3">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Criteriu</th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-blue-700">CEI</th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-600">CIS</th>
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
      </div>
    ),
  },
  {
    id: 'ridicare',
    title: 'Ridicarea — planifici din timp',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-700">
          Dacă poți face o singură deplasare în România, trebuie să iei în calcul și ridicarea actului, nu doar depunerea.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-red-100 bg-red-50 p-4">
            <p className="mb-1 font-semibold text-red-900">CEI — ridici personal</p>
            <p className="text-sm text-red-800">
              Pentru CEI trebuie să îți organizezi drumul astfel încât să poți reveni la ridicare sau să rămâi suficient în România.
            </p>
          </div>
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-1 font-semibold text-green-900">CIS — poate permite procură</p>
            <p className="text-sm text-green-800">
              Dacă nu poți face două drumuri, CIS poate părea mai flexibilă la ridicare, dar vine cu dezavantaje importante de folosire.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'greseli',
    title: 'Greșeli frecvente în această situație',
    content: (
      <div className="space-y-2">
        {[
          {
            gresit: 'Cred că fără poliție nu pot merge la SPCLEP',
            corect: 'Pentru partea românească, asta nu este blocajul principal.',
          },
          {
            gresit: 'Cred că fără domiciliu activ trebuie neapărat un singur SPCLEP anume',
            corect: 'Alegerea între CEI și CIS schimbă mult acest lucru.',
          },
          {
            gresit: 'Pregătesc declarația acasă, crezând că așa funcționează mai repede',
            corect: 'Declarația se gestionează la ghișeu, nu ca formular separat pregătit de acasă.',
          },
          {
            gresit: 'Aleg CIS doar pentru că pare mai simplă',
            corect: 'Trebuie să compari și limitările ei pentru utilizare și deplasări.',
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
            text: 'Buletinul e pierdut sau furat și am domiciliu activ în România',
            href: '/buletin-pierdut-furat-cu-domiciliu-romania',
            label: 'Ghid cu domiciliu activ →',
          },
          {
            text: 'Buletinul a expirat, nu a fost pierdut sau furat',
            href: '/buletin-expirat-germania',
            label: 'Ghid buletin expirat →',
          },
          {
            text: 'Nu am niciun act valabil și trebuie să plec urgent în România',
            href: '/titlu-calatorie-germania',
            label: 'Ghid titlu de călătorie →',
          },
          {
            text: 'Copilul meu s-a născut în Germania și nu are buletin',
            href: '/acte-copil-nascut-in-germania',
            label: 'Ghid acte copil →',
          },
        ].map(({ text, href, label }) => (
          <div
            key={href}
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

export default function BuletinPierdutFuratFaraDomiciliuPage() {
  return (
    <LlmOptimizedPage
      lpSlug="buletin-pierdut-furat-fara-domiciliu-romania"
      lpTopic="buletin"
      h1="Buletin pierdut sau furat în Germania, fără domiciliu în România — ce faci"
      intro="Aici apar de obicei două blocaje false: oamenii cred că fără hârtia de la poliție nu pot continua și cred că sunt condamnați la un singur SPCLEP greu accesibil. De fapt, trebuie doar să-ți clarifici bine traseul și alegerea între CEI și CIS."
      tldr="Dacă buletinul a fost pierdut sau furat și nu mai ai domiciliu activ în România, cheia este să nu confunzi obligațiile locale din Germania cu logica dosarului de la SPCLEP. CEI rămâne de regulă varianta practică, iar declarația se gestionează la ghișeu."
      ctaHref="/cei-vs-cis-diaspora"
      ctaLabel="Vezi mai întâi dacă pentru tine contează CEI sau CIS →"
      updatedAt="aprilie 2026"
      sourceNote="MAI, hub.mai.gov.ro, carteadeidentitate.gov.ro"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi dacă problema principală este pierderea actului sau lipsa domiciliului activ?"
      finalCtaText="Începe cu comparația CEI vs CIS și cu pagina de expirat fără domiciliu activ, apoi revino aici dacă situația ta este clar pierdută sau furată."
    />
  )
}
