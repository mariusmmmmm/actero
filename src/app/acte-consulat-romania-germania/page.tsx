import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Ce acte rezolvi la consulatul României din Germania — Listă completă 2026 | ActeRO',
  description:
    'Lista completă a actelor ce se rezolvă la consulatul României din Germania și ce NU se rezolvă acolo. Pașaport, procuri, stare civilă, transcriere. Ghid 2026.',
  keywords: [
    'acte consulat romania germania',
    'ce pot face la consulat romania germania',
    'servicii consulat romania germania',
    'ce rezolv la consulat roman germania',
    'consulat romania germania lista servicii',
    'ce acte se fac la consulat romania germania',
    'procura consulat romania germania',
    'transcriere nastere consulat romania germania',
    'stare civila consulat romania germania',
    'ce nu se face la consulat romania germania',
  ],
  openGraph: {
    title: 'Ce acte rezolvi la consulatul României din Germania — Listă completă 2026',
    description:
      'Tabel complet: ce se face la consulat și ce NU se face. Pașaport, procuri, transcriere, stare civilă, titlu de călătorie.',
    url: 'https://actero.ro/acte-consulat-romania-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/acte-consulat-romania-germania',
  },
}

const faqItems = [
  {
    question: 'Pot face buletinul la consulatul din Germania?',
    answer:
      'Nu. Buletinul, fie CEI, fie CIS, nu se eliberează la consulat. Necesită prezență fizică în România la SPCLEP pentru biometrie. Este una dintre cele mai frecvente confuzii.',
  },
  {
    question: 'Ce acte pot rezolva complet la consulat, fără să merg în România?',
    answer:
      'Pașaportul, titlul de călătorie, procurile notariale, transcrierea certificatelor de naștere și alte acte de stare civilă se pot rezolva prin consulatul României din Germania.',
  },
  {
    question: 'Pot face atât pașaport cât și procură în aceeași zi la consulat?',
    answer:
      'Da, dacă obții programări separate pe econsulat.ro pentru fiecare serviciu. Sunt servicii distincte și fiecare are propria programare.',
  },
  {
    question: 'Apostila Haga se obține la consulat?',
    answer:
      'Nu. Apostila Haga pentru documente românești se obține în România, la instituția emitentă sau la prefectura competentă. Consulatul nu are competență pentru apostilă.',
  },
  {
    question: 'Cazierul judiciar se poate obține la consulat?',
    answer:
      'Da, există situații în care îl poți solicita prin consulat, dar procedura poate dura mai mult decât obținerea directă din România sau online. Merită să verifici cu consulatul tău înainte.',
  },
  {
    question: 'Pot transcrie certificatul meu de căsătorie din Germania la consulat?',
    answer:
      'Da. Consulatul poate transcrie certificate de căsătorie și alte acte de stare civilă emise în Germania în registrele românești, similar cu transcrierea certificatelor de naștere.',
  },
  {
    question: 'NIF se obține la consulat?',
    answer:
      'Nu. NIF-ul se obține de la ANAF în România, nu la consulat. Pentru majoritatea românilor cu CNP, CNP-ul acoperă deja funcția de identificare fiscală.',
  },
]

const howToSteps = [
  {
    name: 'Identifică actul de care ai nevoie',
    text: 'Folosește tabelul de pe pagină pentru a verifica rapid dacă actul tău se rezolvă la consulat sau necesită drum în România.',
  },
  {
    name: 'Verifică dacă ai nevoie de programare',
    text: 'Pașaportul, procurile și transcrierile merg prin econsulat.ro. Titlul de călătorie se obține fără programare.',
  },
  {
    name: 'Pregătește documentele pentru serviciul tău specific',
        text: 'Fiecare act are propriile documente și capcane. Urmează ghidul specific sau ghidul rapid pentru situația ta concretă.',
  },
  {
    name: 'Prezintă-te la consulatul arondat landului tău',
    text: 'Bonn, München, Stuttgart și Berlin au competență diferită în funcție de landul în care locuiești.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/acte-consulat-romania-germania#article',
  headline: 'Ce acte rezolvi la consulatul României din Germania — Listă completă 2026',
  description:
    'Pagina broad despre serviciile consulare din Germania: tabel ce se face și ce nu, programare și ghiduri specifice.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/acte-consulat-romania-germania',
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
      name: 'Acte românești Germania',
      item: 'https://actero.ro/acte-romanesti-germania',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Acte consulat România Germania',
      item: 'https://actero.ro/acte-consulat-romania-germania',
    },
  ],
}

const sections = [
  {
    id: 'tabel-complet',
    title: 'Tabel complet — ce se face și ce NU se face la consulat',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600">
          Verifică rapid dacă actul tău se rezolvă la consulat sau necesită deplasare în România.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Act</th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">La consulat?</th>
                <th className="hidden border border-gray-200 p-2 text-left font-semibold text-gray-700 sm:table-cell">
                  Programare?
                </th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Ghid</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  act: 'Pașaport (reînnoire sau primul)',
                  laConsulat: '✅ Da',
                  programare: 'econsulat.ro',
                  href: '/pasaport-romania-germania',
                  label: 'Ghid pașaport →',
                  highlight: false,
                },
                {
                  act: 'Pașaport pierdut sau furat',
                  laConsulat: '✅ Da',
                  programare: 'econsulat.ro',
                  href: '/wizard?problem=pasaport',
                  label: 'Vezi traseul →',
                  highlight: false,
                },
                {
                  act: 'Titlu de călătorie (urgență)',
                  laConsulat: '✅ Da',
                  programare: '❌ Fără programare',
                  href: '/titlu-calatorie-urgenta-germania',
                  label: 'Ghid →',
                  highlight: false,
                },
                {
                  act: 'Buletin (CEI sau CIS)',
                  laConsulat: '❌ Nu — SPCLEP în România',
                  programare: '—',
                  href: '/buletin-romania-germania',
                  label: 'Ghid buletin →',
                  highlight: true,
                },
                {
                  act: 'Procură notarială (vânzare, moștenire, firmă, bancă, divorț)',
                  laConsulat: '✅ Da',
                  programare: 'econsulat.ro',
                  href: '/procura-notariala-germania',
                  label: 'Ghid →',
                  highlight: false,
                },
                {
                  act: 'Transcriere certificat de naștere',
                  laConsulat: '✅ Da — gratuit',
                  programare: 'econsulat.ro',
                  href: '/wizard?problem=transcriere-nastere',
                  label: 'Începe traseul →',
                  highlight: false,
                },
                {
                  act: 'Transcriere certificat de căsătorie / deces',
                  laConsulat: '✅ Da',
                  programare: 'econsulat.ro',
                  href: null,
                  label: null,
                  highlight: false,
                },
                {
                  act: 'Apostilă Haga',
                  laConsulat: '❌ Nu — se obține în România',
                  programare: '—',
                  href: null,
                  label: null,
                  highlight: true,
                },
                {
                  act: 'Cazier judiciar',
                  laConsulat: '⚠️ Posibil — durează mai mult',
                  programare: 'Verifică cu consulatul',
                  href: null,
                  label: null,
                  highlight: false,
                },
                {
                  act: 'NIF (număr identificare fiscală)',
                  laConsulat: '❌ Nu — ANAF în România',
                  programare: '—',
                  href: null,
                  label: null,
                  highlight: true,
                },
                {
                  act: 'Permis de ședere (Aufenthaltstitel)',
                  laConsulat: '❌ Nu — autorități germane (Ausländerbehörde)',
                  programare: '—',
                  href: null,
                  label: null,
                  highlight: true,
                },
                {
                  act: 'Cetățenie română (dobândire sau redobândire)',
                  laConsulat: '⚠️ Cerere posibilă prin consulat',
                  programare: 'Verifică cu consulatul',
                  href: null,
                  label: null,
                  highlight: false,
                },
              ].map(({ act, laConsulat, programare, href, label, highlight }, index) => (
                <tr
                  key={act}
                  className={highlight ? 'bg-red-50' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="border border-gray-200 p-2 text-xs font-medium text-gray-800">{act}</td>
                  <td className="border border-gray-200 p-2 text-xs">
                    <span
                      className={
                        highlight && laConsulat.startsWith('❌')
                          ? 'font-semibold text-red-700'
                          : 'text-gray-700'
                      }
                    >
                      {laConsulat}
                    </span>
                  </td>
                  <td className="hidden border border-gray-200 p-2 text-xs text-gray-600 sm:table-cell">
                    {programare}
                  </td>
                  <td className="border border-gray-200 p-2 text-xs">
                    {href && label ? (
                      <Link href={href} className="font-medium text-blue-600 underline hover:text-blue-800">
                        {label}
                      </Link>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-500">
          Rândurile roșii sunt acte care nu se rezolvă la consulat. Coloana „Programare?” apare pe ecrane mai mari.
        </p>
      </div>
    ),
  },
  {
    id: 'ce-nu-se-face',
    title: 'Ce NU se face la consulat — confuziile frecvente',
    content: (
      <div className="space-y-2">
        {[
          {
            act: 'Buletin (CEI / CIS)',
            unde: 'SPCLEP în România',
            motivul:
              'Biometria, fotografia, amprentele și semnătura se fac exclusiv la ghișeul SPCLEP. Din septembrie 2025, nicio procură nu înlocuiește prezența fizică.',
            href: '/buletin-romania-germania',
            hrefLabel: 'Ghid buletin →',
          },
          {
            act: 'Apostilă Haga',
            unde: 'Prefectura sau instituția emitentă din România',
            motivul:
              'Apostila certifică autenticitatea unui document public. Consulatul nu are competență pentru apostilare.',
            href: null,
            hrefLabel: null,
          },
          {
            act: 'NIF',
            unde: 'ANAF în România',
            motivul:
              'Românii cu CNP nu au nevoie de NIF separat în cele mai multe cazuri. Dacă apare o excepție, procedura este la ANAF, nu la consulat.',
            href: null,
            hrefLabel: null,
          },
          {
            act: 'Permis de ședere (Aufenthaltstitel)',
            unde: 'Ausländerbehörde',
            motivul:
              'Permisul de ședere este un document german, emis de autoritățile germane. Nu ține de consulatul român.',
            href: null,
            hrefLabel: null,
          },
        ].map(({ act, unde, motivul, href, hrefLabel }) => (
          <div key={act} className="rounded-xl border border-red-100 bg-red-50 p-4">
            <div className="mb-1 flex items-start justify-between gap-2">
              <p className="text-sm font-semibold text-red-900">❌ {act} — nu se face la consulat</p>
              {href && hrefLabel ? (
                <Link
                  href={href}
                  className="flex-shrink-0 text-xs font-medium text-red-700 underline hover:text-red-900"
                >
                  {hrefLabel}
                </Link>
              ) : null}
            </div>
            <p className="mb-0.5 text-xs font-medium text-red-700">Unde mergi: {unde}</p>
            <p className="text-xs text-gray-600">{motivul}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'programare',
    title: 'Programare sau fără programare — pe serviciu',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="mb-2 font-semibold text-blue-900">📋 Necesită programare pe econsulat.ro</p>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>Pașaport, indiferent de tip</li>
              <li>Procuri notariale</li>
              <li>Transcriere acte de stare civilă</li>
              <li>Alte servicii consulare programabile</li>
            </ul>
          </div>

          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-2 font-semibold text-green-900">⚡ Fără programare — prezentare directă</p>
            <ul className="space-y-1 text-sm text-green-800">
              <li>Titlu de călătorie</li>
              <li>Ridicare documente, unde consulatul permite</li>
            </ul>
            <p className="mt-2 text-xs text-green-700">
              Prezentarea se face în intervalul dedicat al consulatului tău.
            </p>
          </div>
        </div>

        <Link
          href="/programare-consulat-romania"
          className="inline-block text-sm font-medium text-blue-600 underline hover:text-blue-800"
        >
          Ghid complet: cum funcționează econsulat.ro →
        </Link>
      </div>
    ),
  },
  {
    id: 'consulate',
    title: 'Cele 4 consulate — care te acoperă',
    content: (
      <div className="space-y-2">
        <p className="text-sm text-gray-600">
          Consulatul competent este determinat de landul în care ești înregistrat cu adresa. Nu poți alege liber alt consulat.
        </p>

        <div className="grid gap-2 sm:grid-cols-2">
          {[
            {
              oras: 'Bonn',
              landuri: 'NRW, RP, SL, HE, HB, NI, HH, SH',
              nota: 'Programările pot fi mai rare în anumite perioade',
            },
            {
              oras: 'München',
              landuri: 'Bayern',
              nota: 'La multe servicii, plata se face cash',
            },
            {
              oras: 'Stuttgart',
              landuri: 'Baden-Württemberg',
              nota: 'Pentru unele documente există ridicare prin poștă',
            },
            {
              oras: 'Berlin',
              landuri: 'BE, BB, SN, ST, TH, MV',
              nota: 'Pentru unele taxe se folosește POS sau virament',
            },
          ].map(({ oras, landuri, nota }) => (
            <div key={oras} className="rounded-lg border border-gray-200 bg-white p-3">
              <p className="font-semibold text-gray-900">{oras}</p>
              <p className="mb-1 text-xs text-gray-500">{landuri}</p>
              <p className="text-xs text-gray-600">{nota}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500">
          Frankfurt nu are consulat operațional pentru fluxurile uzuale din proiect; pentru Hessen te uiți la arondarea spre Bonn.
        </p>
      </div>
    ),
  },
  {
    id: 'ghiduri',
    title: 'Ghidurile specifice per act',
    content: (
      <div className="space-y-2">
        {[
          {
            categorie: 'Pașaport',
            items: [
              { text: 'Pașaport expirat sau reînnoire', href: '/pasaport-expirat-germania' },
              { text: 'Pașaport CRDS', href: '/pasaport-crds-germania' },
              { text: 'Pașaport cu domiciliu în România', href: '/pasaport-romania-germania' },
              { text: 'Pașaport pierdut sau furat', href: '/wizard?problem=pasaport' },
            ],
          },
          {
            categorie: 'Titlu de călătorie',
            items: [
              { text: 'Titlu de călătorie urgent', href: '/titlu-calatorie-urgenta-germania' },
              { text: 'Titlu de călătorie', href: '/titlu-calatorie-germania' },
            ],
          },
          {
            categorie: 'Procuri notariale',
            items: [
              { text: 'Procură pentru proprietate, moștenire sau altă situație', href: '/procura-notariala-germania' },
              { text: 'Wizard procură pe tipul exact de problemă', href: '/wizard?problem=procura' },
            ],
          },
          {
            categorie: 'Acte copil',
            items: [
              { text: 'Transcriere certificat de naștere', href: '/wizard?problem=transcriere-nastere' },
              { text: 'Primul pașaport copil', href: '/acte-copil-nascut-in-germania' },
            ],
          },
        ].map(({ categorie, items }) => (
          <div key={categorie} className="rounded-lg border border-gray-200 bg-white p-3">
            <p className="mb-2 text-sm font-semibold text-gray-800">{categorie}</p>
            <div className="space-y-1">
              {items.map(({ text, href }) => (
                <div key={`${categorie}-${href}`} className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">→</span>
                  <Link href={href} className="text-xs text-blue-600 underline hover:text-blue-800">
                    {text}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
]

export default function ActeConsulatRomaniaGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="acte-consulat-romania-germania"
      lpTopic="hub"
      h1="Ce acte rezolvi la consulatul României din Germania — și ce nu"
      intro="Consulatul din Germania nu poate face orice. Există acte care se rezolvă complet acolo și acte care necesită deplasare în România. Cea mai frecventă confuzie rămâne buletinul: nu se face la consulat."
      tldr="La consulat: pașaport, titlu de călătorie, procuri notariale și transcriere. Nu la consulat: buletin, apostilă Haga, NIF și permis de ședere german. Pașaportul și procurile cer programare pe econsulat.ro, titlul de călătorie nu."
      ctaHref="/wizard"
      ctaLabel="Găsește ghidul exact pentru actul tău →"
      updatedAt="aprilie 2026"
      sourceNote="MAE, econsulat.ro, consulatele României din Germania"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi sigur unde se rezolvă actul tău?"
      finalCtaText="Wizardul ActeRO îți spune în 30 de secunde dacă actul tău se face la consulat sau în România și îți dă traseul potrivit."
    />
  )
}
