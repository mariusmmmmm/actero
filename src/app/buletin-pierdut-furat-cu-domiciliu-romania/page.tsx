import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Buletin pierdut sau furat — cu domiciliu activ în România',
  description:
    'Buletin pierdut cu domiciliu în România: termenul de 15 zile, extras CF online, CEI sau CIS și pașii corecți la SPCLEP.',
  keywords: [
    'buletin pierdut germania cu domiciliu in romania',
    'buletin pierdut germania domiciliu romania',
    'extras carte funciara buletin',
    'termen 15 zile buletin pierdut',
    'buletin furat germania domiciliu activ',
    'spclep domiciliu buletin pierdut',
    'epay ancpi extras cf buletin',
    'cei cis pierdut buletin',
    'declaratie pierdere buletin spclep domiciliu',
    'buletin pierdut 15 zile lege',
  ],
  openGraph: {
    title: 'Buletin pierdut sau furat — cu domiciliu activ în România',
    description:
      'Termen legal de 15 zile, extras CF online și pașii practici pentru CEI sau CIS.',
    url: 'https://www.actero.ro/buletin-pierdut-furat-cu-domiciliu-romania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/buletin-pierdut-furat-cu-domiciliu-romania',
  },
}

const faqItems = [
  {
    question: 'Am 15 zile să cer noul buletin după ce l-am pierdut?',
    answer:
      'Da, există un termen legal scurt pentru solicitarea unui nou act de identitate după pierdere, furt sau distrugere. Chiar dacă ești în Germania, e bine să acționezi cât mai repede.',
  },
  {
    question: 'Ce este extrasul de carte funciară și de ce am nevoie de el?',
    answer:
      'Când buletinul lipsește, adresa nu mai poate fi verificată direct din actul fizic. Extrasul CF ajută la susținerea adresei de domiciliu din România.',
  },
  {
    question: 'Pot obține extrasul CF din Germania?',
    answer:
      'Da, în practică se poate obține online înainte de deplasare, astfel încât să nu mai pierzi timp în România cu acest pas.',
  },
  {
    question: 'Sesizarea la poliție pentru furt este obligatorie la SPCLEP?',
    answer:
      'Dacă buletinul a fost furat, raportarea la poliția locală este utilă și, în Germania, poate fi importantă ca obligație locală. Pentru SPCLEP, documentul central rămâne declarația ta la ghișeu și dosarul complet.',
  },
  {
    question: 'La ce SPCLEP mă duc dacă am domiciliu activ în România?',
    answer:
      'Punctul de referință rămâne SPCLEP-ul de domiciliu, iar pentru CEI există mai multă flexibilitate decât pentru CIS.',
  },
  {
    question: 'CEI sau CIS — care e mai bun dacă am domiciliu activ?',
    answer:
      'Pentru cine locuiește în Germania, CEI este în general varianta practică. CIS poate fi utilă doar dacă accepți limitările ei și te avantajează partea de cost sau ridicare.',
  },
  {
    question: 'Pot ridica noul buletin prin procură?',
    answer:
      'Pentru CEI trebuie planificată ridicarea personală. Pentru CIS poate exista varianta procurii speciale, dacă este acceptată în forma cerută.',
  },
  {
    question: 'Trebuie să aduc fotografii?',
    answer:
      'Nu. Biometria se face la ghișeul SPCLEP, inclusiv fotografia.',
  },
]

const howToSteps = [
  {
    name: 'Dacă a fost furat, raportezi local',
    text: 'Raportarea la poliția locală germană poate fi importantă pentru tine ca dovadă și pentru formalitățile locale.',
  },
  {
    name: 'Pregătești extrasul CF și restul documentelor',
    text: 'Nu lăsa extrasul pe ultimul moment, dar nici prea devreme față de data deplasării.',
  },
  {
    name: 'Alegi CEI sau CIS și clarifici SPCLEP-ul',
    text: 'Alegerea îți schimbă flexibilitatea și modul de ridicare.',
  },
  {
    name: 'Te prezinți personal la SPCLEP',
    text: 'Declarația despre pierdere sau furt se gestionează la ghișeu, împreună cu biometria și verificarea dosarului.',
  },
  {
    name: 'Planifici ridicarea',
    text: 'Gândește din start dacă poți reveni personal sau dacă ai nevoie de o opțiune compatibilă cu CIS.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/buletin-pierdut-furat-cu-domiciliu-romania#article',
  headline: 'Buletin pierdut sau furat — cu domiciliu activ în România — Ghid 2026',
  description:
    'Ghid pentru buletin pierdut sau furat, cu domiciliu activ în România: termen de reacție, extras CF, CEI vs CIS și pași la SPCLEP.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/buletin-pierdut-furat-cu-domiciliu-romania',
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
      name: 'Buletin România Germania',
      item: 'https://www.actero.ro/buletin-romania-germania',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Buletin pierdut cu domiciliu',
      item: 'https://www.actero.ro/buletin-pierdut-furat-cu-domiciliu-romania',
    },
  ],
}

const sections = [
  {
    id: 'termen-15-zile',
    title: 'Ai 15 zile legale — termenul care surprinde',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="mb-1 font-semibold text-red-900">Obligație legală: reacționezi repede</p>
          <p className="text-sm text-red-800">
            Pentru pierderea, furtul sau distrugerea actului de identitate există un termen legal scurt. Nu e doar un sfat practic, ci o obligație de care mulți află prea târziu.
          </p>
        </div>
        <p className="text-sm text-gray-700">
          Dacă ești în Germania și nu poți ajunge imediat în România, important este să nu tratezi problema ca pe ceva care poate aștepta luni. Cu cât reacționezi mai repede, cu atât eviți mai multe complicații.
        </p>
      </div>
    ),
  },
  {
    id: 'pierdut-vs-furat',
    title: 'Ce faci imediat — pierdut vs furat',
    content: (
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
          <p className="mb-2 font-bold text-orange-900">PIERDUT</p>
          <ul className="space-y-1 text-sm text-orange-800">
            <li>Nu ai de regulă nevoie de poliție pentru pasul românesc</li>
            <li>Te concentrezi pe dosarul pentru SPCLEP</li>
            <li>Pregătești extrasul CF și restul actelor</li>
            <li>Declarația se gestionează la ghișeu</li>
          </ul>
        </div>

        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="mb-2 font-bold text-red-900">FURAT</p>
          <ul className="space-y-1 text-sm text-red-800">
            <li>Raportezi la poliția locală germană</li>
            <li>Păstrezi dovada dacă o primești</li>
            <li>Pregătești același dosar pentru SPCLEP</li>
            <li>Declarația despre furt se gestionează tot la ghișeu</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'extras-cf',
    title: 'Extrasul de carte funciară — documentul important în acest flux',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Când buletinul lipsește, extrasul de carte funciară devine piesa care ajută la susținerea adresei de domiciliu din România.
        </p>

        <div className="space-y-2 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="font-semibold text-blue-900">Cum să te gândești la extrasul CF</p>
          <ol className="space-y-1 text-sm text-blue-800">
            <li>Îl obții online, înainte de drum.</li>
            <li>Îl scoți suficient de aproape de data depunerii.</li>
            <li>Verifici să fie corelat cu adresa la care figurezi.</li>
            <li>Dacă nu ești titular, pregătești și acordul proprietarului sau găzduitorului.</li>
          </ol>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Nu scoate extrasul prea devreme. Dacă îl faci mult înainte de deplasare, riști să nu mai fie util procedural când ajungi la SPCLEP.
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
              req: true,
              doc: 'Extras de carte funciară',
              detaliu: 'Documentul important care suplimentează lipsa buletinului fizic.',
            },
            {
              req: false,
              label: 'recomandat',
              doc: 'Pașaport valabil',
              detaliu: 'Ajută la identificare și la deplasare.',
            },
            {
              req: false,
              label: 'dacă a fost distrus',
              doc: 'Fragmentele actului vechi',
              detaliu: 'Dacă le mai ai, pot ajuta.',
            },
            {
              req: false,
              label: 'util dacă a fost furat',
              doc: 'Dovada de la poliția germană',
              detaliu: 'Utilă, dar nu nucleul dosarului la SPCLEP.',
            },
            {
              req: false,
              label: 'condiționat',
              doc: 'Certificat de căsătorie românesc',
              detaliu: 'Dacă numele actual diferă.',
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
            Biometria, inclusiv fotografia, se face la ghișeul SPCLEP.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'spclep-unde',
    title: 'La ce SPCLEP mergi cu domiciliu activ',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="mb-1 font-semibold text-blue-900">Dacă alegi CEI</p>
            <p className="text-sm text-blue-800">
              Ai mai multă flexibilitate și poți verifica o variantă convenabilă pentru deplasarea ta.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 font-semibold text-gray-900">Dacă alegi CIS</p>
            <p className="text-sm text-gray-700">
              Te uiți în primul rând la SPCLEP-ul de domiciliu și la regulile lui locale.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'cei-cis',
    title: 'CEI vs CIS — comparativ pentru situația ta',
    content: (
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
    ),
  },
  {
    id: 'plata-ridicare',
    title: 'Plata taxei și ridicarea',
    content: (
      <div className="space-y-3">
        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Taxa se plătește separat de ghișeul SPCLEP, iar dovada trebuie pregătită înainte de depunere.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-red-100 bg-red-50 p-4">
            <p className="mb-1 font-semibold text-red-900">CEI — ridici personal</p>
            <p className="text-sm text-red-800">
              Dacă alegi CEI, planifică din start și pasul ridicării, nu doar depunerea.
            </p>
          </div>
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-1 font-semibold text-green-900">CIS — poate permite procură</p>
            <p className="text-sm text-green-800">
              Dacă nu poți reveni personal, CIS poate fi mai flexibilă la ridicare.
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
            gresit: 'Cred că sesizarea la poliție este documentul principal la SPCLEP',
            corect: 'Pentru dosarul românesc contează mai mult declarația și documentele civile decât hârtia de la poliția germană.',
          },
          {
            gresit: 'Nu știu că trebuie să reacționez repede',
            corect: 'Există un termen legal scurt și e bine să nu amâni.',
          },
          {
            gresit: 'Mă prezint fără extras CF',
            corect: 'Fără buletinul fizic, extrasul devine foarte important pentru susținerea adresei.',
          },
          {
            gresit: 'Aleg CIS doar pentru că pare mai ieftin',
            corect: 'Trebuie să ții cont și de limitările ei pentru folosire și deplasări.',
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
            text: 'Vreau să înțeleg toate opțiunile pentru buletin din Germania',
            href: '/buletin-romania-germania',
            label: 'Ghid complet buletin →',
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
  {
    id: 'pagini-conexe',
    title: 'Pagini conexe utile',
    content: (
      <div className="grid gap-3 sm:grid-cols-3">
        <Link href="/buletin-romania-germania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Hub buletin Germania</p>
          <p className="mt-1 text-sm text-gray-600">Pagina mamă pentru toate variantele de buletin din Germania.</p>
        </Link>
        <Link href="/cei-vs-cis-diaspora" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">CEI vs CIS</p>
          <p className="mt-1 text-sm text-gray-600">Te ajută să alegi varianta de act și să planifici ridicarea corectă.</p>
        </Link>
        <Link href="/buletin-pierdut-furat-fara-domiciliu-romania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Pierdut sau furat fără domiciliu activ</p>
          <p className="mt-1 text-sm text-gray-600">Varianta complementară, dacă situația ta reală nu mai include domiciliu activ în România.</p>
        </Link>
      </div>
    ),
  },
]

export default function BuletinPierdutFuratCuDomiciliuPage() {
  return (
    <LlmOptimizedPage
      lpSlug="buletin-pierdut-furat-cu-domiciliu-romania"
      lpTopic="buletin"
      h1="Buletin pierdut sau furat în Germania, cu domiciliu activ în România"
      intro="Față de buletinul expirat, această situație are câteva diferențe practice: termenul legal scurt, rolul extrasului de carte funciară și, dacă a fost furt, interacțiunea cu poliția locală germană. În rest, traseul spre SPCLEP rămâne punctul central."
      tldr="Reacționezi repede, pregătești extrasul CF, clarifici dacă alegi CEI sau CIS și te prezinți la SPCLEP în România. Pentru CEI planifici ridicarea personală; pentru CIS poate exista varianta procurii."
      ctaHref="/wizard?problem=buletin"
      ctaLabel="Primește lista exactă pentru situația ta →"
      updatedAt="aprilie 2026"
      sourceNote="MAI, hub.mai.gov.ro, ANCPI"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi ce faci prima dată?"
      finalCtaText="ActeRO îți ordonează pașii și îți spune clar ce pregătești înainte să pleci în România."
    />
  )
}
