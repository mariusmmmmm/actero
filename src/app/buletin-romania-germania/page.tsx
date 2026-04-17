import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Buletin românesc din Germania — Ghid complet 2026 | ActeRO',
  description:
    'Buletin expirat sau pierdut în Germania? Din 2025 nu mai merge la consulat — afli rapid unde mergi, CEI sau CIS și traseul exact pentru situația ta.',
  keywords: [
    'buletin romania germania',
    'carte de identitate romania germania',
    'spclep diaspora buletin',
    'buletin expirat germania',
    'buletin pierdut germania',
    'cei cis romania din germania',
    'reinnoire buletin din germania',
    'prezenta fizica buletin 2025',
    'buletin la consulat romania',
    'primul buletin nascut in germania',
  ],
  openGraph: {
    title: 'Buletin românesc din Germania — Ghid complet 2026',
    description:
      'Din 2025 buletinul nu se mai rezolvă la consulat. CEI sau CIS, cu sau fără domiciliu — traseul exact pentru situația ta.',
    url: 'https://www.actero.ro/buletin-romania-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/buletin-romania-germania',
  },
}

const faqItems = [
  {
    question: 'Pot să-mi fac buletinul la consulatul din Germania?',
    answer:
      'Nu. Buletinul (CEI sau CIS) necesită prezență fizică la SPCLEP în România — biometria, fotografia și amprentele nu se pot face la consulat și nu se pot evita prin procură.',
  },
  {
    question: 'Ce este CEI și ce este CIS?',
    answer:
      'CEI este Cartea Electronică de Identitate: are cip, este valabilă pentru călătorii în UE și se poate obține la orice SPCLEP din România. CIS este Cartea de Identitate Simplă: fără cip, nu este valabilă pentru călătorii UE, se obține doar la SPCLEP-ul de domiciliu și durează mai mult.',
  },
  {
    question: 'Mai funcționează procura pentru buletin?',
    answer:
      'Nu pentru depunere și nu pentru CEI. Depunerea necesită prezență fizică pentru biometrie. CEI se ridică obligatoriu personal. Pentru CIS, ridicarea prin procură specială notarială este încă posibilă, dar depunerea tot necesită prezență fizică.',
  },
  {
    question: 'La ce SPCLEP mă duc dacă nu mai am domiciliu activ în România?',
    answer:
      'Dacă alegi CEI, poți merge la orice SPCLEP din România. Dacă alegi CIS, mergi la SPCLEP-ul din orașul unde ai avut ultimul domiciliu înregistrat în România.',
  },
  {
    question: 'Buletinul meu a fost pierdut sau furat. E diferit față de cel expirat?',
    answer:
      'Da. Dacă buletinul a fost furat în Germania, raportezi la poliția locală. Sesizarea la poliție nu este document obligatoriu la SPCLEP, dar declarația pe proprie răspundere se completează acolo.',
  },
  {
    question: 'Am 15 zile să solicit buletin nou dacă l-am pierdut?',
    answer:
      'Da. Există obligație legală de a solicita un nou act de identitate în termen de 15 zile de la constatarea pierderii sau distrugerii.',
  },
  {
    question: 'Copilul meu s-a născut în Germania și nu a avut niciodată buletin. Cum procedez?',
    answer:
      'Primul pas obligatoriu este transcrierea certificatului de naștere german în registrele române. Abia după transcriere se poate solicita primul buletin.',
  },
  {
    question: 'CEI este gratuită?',
    answer:
      'Prima CEI este gratuită în cadrul programului PNRR până la 30 iunie 2026. După această dată, taxa este 70 RON. CIS costă 40 RON.',
  },
]

const howToSteps = [
  {
    name: 'Verifică dacă ai domiciliu activ în România',
    text: 'Dacă ai adresă înregistrată în România, mergi la SPCLEP de domiciliu. Dacă nu mai ai, traseul diferă în funcție de CEI sau CIS.',
  },
  {
    name: 'Alege CEI sau CIS',
    text: 'CEI este mai flexibilă și valabilă UE. CIS este mai ieftină, dar mai limitată și se obține doar la SPCLEP-ul de domiciliu.',
  },
  {
    name: 'Pregătește documentele pentru SPCLEP',
    text: 'Certificat de naștere, buletin vechi dacă îl mai ai, certificat de căsătorie dacă ți-ai schimbat numele. Fotografii proprii nu sunt necesare.',
  },
  {
    name: 'Planifică deplasarea în România',
    text: 'Verifică SPCLEP-ul competent și dacă există programare online. Prezentarea personală este obligatorie.',
  },
  {
    name: 'Ridică noul buletin',
    text: 'CEI se ridică personal. CIS poate fi ridicat prin procură specială, dar depunerea rămâne cu prezență fizică.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/buletin-romania-germania#article',
  headline: 'Buletin românesc din Germania — Ghid complet 2026',
  description:
    'Ghidul principal pentru toate situațiile de buletin pentru românii din Germania: expirat, pierdut, cu sau fără domiciliu, CEI și CIS.',
  datePublished: '2026-04-01',
  dateModified: '2026-04-01',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/buletin-romania-germania',
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
      name: 'Acte românești Germania',
      item: 'https://www.actero.ro/acte-romanesti-germania',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Buletin România Germania',
      item: 'https://www.actero.ro/buletin-romania-germania',
    },
  ],
}

const sections = [
  {
    id: 'schimbare-2025',
    title: 'Ce s-a schimbat din 2025',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
          <p className="mb-2 font-semibold text-orange-900">
            Buletinul nu se rezolvă la consulatul din Germania
          </p>
          <p className="text-sm text-orange-800">
            Spre deosebire de pașaport, buletinul necesită deplasare obligatorie în România.
            Biometria se preia exclusiv la ghișeul SPCLEP.
          </p>
        </div>

        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="mb-2 font-semibold text-red-900">
            Procura pentru buletin nu mai înlocuiește depunerea
          </p>
          <p className="text-sm text-red-800">
            Din septembrie 2025, depunerea și biometria necesită prezență fizică. CEI se ridică
            obligatoriu personal. CIS poate fi ridicat prin procură specială, dar depunerea rămâne
            cu prezență fizică.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'cei-cis',
    title: 'CEI sau CIS',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="mb-2 font-semibold text-blue-900">CEI — Cartea Electronică de Identitate</p>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>Are cip electronic</li>
              <li>Este valabilă pentru călătorii în UE</li>
              <li>Se poate obține la orice SPCLEP</li>
              <li>Termen mai scurt</li>
              <li>Ridicare obligatoriu personală</li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="mb-2 font-semibold text-gray-900">CIS — Cartea de Identitate Simplă</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>Nu are cip</li>
              <li>Nu este valabilă pentru călătorii în UE</li>
              <li>Se obține doar la SPCLEP-ul de domiciliu</li>
              <li>Termen mai lung</li>
              <li>Ridicare posibilă prin procură specială</li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-600">
          Dacă poți ridica personal, CEI este de obicei varianta mai bună: mai flexibilă, mai
          rapidă și valabilă în UE.
        </p>
      </div>
    ),
  },
  {
    id: 'situatii',
    title: 'Situația ta — traseul potrivit',
    content: (
      <div className="overflow-x-auto">
        <p className="mb-3 text-sm text-gray-600">Găsește rândul care descrie cel mai bine situația ta.</p>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Situație</th>
              <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Domiciliu RO</th>
              <th className="hidden border border-gray-200 p-2 text-left font-semibold text-gray-700 sm:table-cell">
                Unde mergi
              </th>
              <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">CEI / CIS</th>
              <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Ghid</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                situatie: 'Buletin expirat',
                domiciliu: 'Da',
                unde: 'SPCLEP de domiciliu',
                ceicis: 'CEI sau CIS',
                href: '/buletin-expirat-cu-domiciliu-romania',
                label: 'Ghid cu domiciliu RO →',
              },
              {
                situatie: 'Buletin expirat',
                domiciliu: 'Nu, dar ai mai fost înregistrat',
                unde: 'SPCLEP ultim domiciliu sau orice SPCLEP dacă alegi CEI',
                ceicis: 'CEI sau CIS',
                href: '/buletin-expirat-fara-domiciliu-romania',
                label: 'Ghid fără domiciliu RO →',
              },
              {
                situatie: 'Buletin pierdut sau furat',
                domiciliu: 'Da',
                unde: 'SPCLEP de domiciliu',
                ceicis: 'CEI sau CIS',
                href: '/buletin-pierdut-furat-cu-domiciliu-romania',
                label: 'Ghid pierdut/furat cu domiciliu RO →',
              },
              {
                situatie: 'Buletin pierdut sau furat',
                domiciliu: 'Nu, dar ai mai fost înregistrat',
                unde: 'SPCLEP ultim domiciliu sau orice SPCLEP dacă alegi CEI',
                ceicis: 'CEI sau CIS',
                href: '/buletin-pierdut-furat-fara-domiciliu-romania',
                label: 'Ghid pierdut/furat fără domiciliu RO →',
              },
              {
                situatie: 'Primul buletin, niciodată înregistrat în România',
                domiciliu: 'Nu',
                unde: 'Orice SPCLEP',
                ceicis: 'CEI',
                href: '/cei-vs-cis-diaspora',
                label: 'Vezi mai întâi CEI vs CIS →',
              },
              {
                situatie: 'Primul buletin, copil născut în Germania',
                domiciliu: 'Nu',
                unde: 'Mai întâi transcriere, apoi SPCLEP',
                ceicis: 'CEI după transcriere',
                href: '/primul-buletin-copil-nascut-in-germania',
                label: 'Ghid primul buletin copil →',
              },
            ].map(({ situatie, domiciliu, unde, ceicis, href, label }, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-200 p-2 font-medium text-gray-800">{situatie}</td>
                <td className="border border-gray-200 p-2 text-xs text-gray-600">{domiciliu}</td>
                <td className="hidden border border-gray-200 p-2 text-xs text-gray-500 sm:table-cell">{unde}</td>
                <td className="whitespace-nowrap border border-gray-200 p-2 text-xs text-gray-600">{ceicis}</td>
                <td className="border border-gray-200 p-2">
                  <Link href={href} className="text-xs font-medium text-blue-600 underline hover:text-blue-800">
                    {label}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'ghiduri-conexe',
    title: 'Ghiduri utile pentru alegerea traseului corect',
    content: (
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          {
            href: '/buletin-expirat-cu-domiciliu-romania',
            title: 'Buletin expirat cu domiciliu în România',
            text: 'Cazul cel mai simplu: mergi la SPCLEP-ul de domiciliu și alegi între CEI și CIS.',
          },
          {
            href: '/buletin-expirat-fara-domiciliu-romania',
            title: 'Buletin expirat fără domiciliu activ în România',
            text: 'Explică traseul când locuiești în Germania și nu mai ai adresă activă în România.',
          },
          {
            href: '/buletin-pierdut-furat-cu-domiciliu-romania',
            title: 'Buletin pierdut sau furat cu domiciliu în România',
            text: 'Include obligația legală de 15 zile și diferențele dintre pierdut și furat.',
          },
          {
            href: '/buletin-pierdut-furat-fara-domiciliu-romania',
            title: 'Buletin pierdut sau furat fără domiciliu în România',
            text: 'Te ajută să alegi SPCLEP-ul corect și să nu încurci traseul cu varianta CEI/CIS.',
          },
          {
            href: '/cei-vs-cis-diaspora',
            title: 'CEI vs CIS pentru diaspora',
            text: 'Pagina de comparație rapidă ca să alegi documentul potrivit înainte de drum.',
          },
          {
            href: '/schimbare-domiciliu-copil-din-germania-in-romania',
            title: 'Domiciliu pentru copil în România',
            text: 'Util dacă pregătești primul buletin pentru copil și trebuie să clarifici adresa din România.',
          },
        ].map(({ href, title, text }) => (
          <Link
            key={href}
            href={href}
            className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-blue-200"
          >
            <p className="mb-1 font-semibold text-gray-900">{title}</p>
            <p className="text-sm text-gray-600">{text}</p>
          </Link>
        ))}
      </div>
    ),
  },
  {
    id: 'spclep',
    title: 'La ce SPCLEP mergi dacă nu mai ai domiciliu activ în România',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Dacă nu mai ai adresă înregistrată în România, regulile diferă în funcție de ce alegi:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
            <p className="mb-1 text-sm font-semibold text-blue-900">Dacă alegi CEI</p>
            <p className="text-sm text-blue-800">
              Poți merge la <strong>orice SPCLEP din România</strong>.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
            <p className="mb-1 text-sm font-semibold text-gray-900">Dacă alegi CIS</p>
            <p className="text-sm text-gray-700">
              Mergi la <strong>SPCLEP-ul ultimului domiciliu înregistrat</strong> în România.
            </p>
          </div>
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
            gresit: 'Merg la consulat să-mi fac buletinul',
            corect:
              'Buletinul nu se rezolvă la consulat. Trebuie deplasare în România la SPCLEP.',
          },
          {
            gresit: 'Trimit pe cineva cu procură să depună cererea',
            corect:
              'Depunerea necesită prezență fizică pentru biometrie. Procura nu înlocuiește prezența la ghișeu.',
          },
          {
            gresit: 'Aleg CIS fără să țin cont că nu este valabilă în UE',
            corect:
              'CIS nu este document de călătorie în UE. Dacă locuiești în Germania și călătorești, CEI sau pașaportul sunt mai potrivite.',
          },
          {
            gresit: 'Nu știu că există obligația legală de 15 zile după pierdere',
            corect:
              'Legea impune solicitarea unui nou act de identitate în termen de 15 zile de la constatarea pierderii sau distrugerii.',
          },
          {
            gresit: 'Aduc fotografii biometrice la SPCLEP',
            corect:
              'Fotografiile proprii nu sunt necesare. Imaginea facială și amprentele se preiau biometric la ghișeu.',
          },
        ].map(({ gresit, corect }, i) => (
          <div key={i} className="rounded-lg border border-red-100 bg-red-50 p-3">
            <p className="mb-0.5 text-xs font-semibold text-red-700">❌ {gresit}</p>
            <p className="text-xs text-gray-700">✅ {corect}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'wizard',
    title: 'Când merită să folosești ghidul rapid ActeRO',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Dacă ai mai multe neclarități, ghidul rapid îți dă răspunsul exact pentru situația ta
          concretă: domiciliu activ sau nu, expirat sau pierdut, CEI sau CIS.
        </p>
        <div className="space-y-2 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-medium text-gray-800">Ghidul rapid îți clarifică:</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>la ce SPCLEP mergi exact</li>
            <li>ce documente pregătești înainte de drum</li>
            <li>dacă poți ridica prin procură sau trebuie să fii prezent</li>
            <li>ce se schimbă dacă buletinul este pierdut, furat sau expirat</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'ghiduri-conexe',
    title: 'Ghiduri conexe pentru buletin și identitate',
    content: (
      <div className="grid gap-3 sm:grid-cols-2">
        <Link href="/buletin-expirat-germania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Buletin expirat în Germania</p>
          <p className="mt-1 text-sm text-gray-600">Pagina de orientare rapidă pentru reînnoire, CEI și CIS.</p>
        </Link>
        <Link href="/buletin-pierdut-furat-cu-domiciliu-romania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Buletin pierdut sau furat</p>
          <p className="mt-1 text-sm text-gray-600">Vezi traseul separat pentru pierdere sau furt și termenul legal de 15 zile.</p>
        </Link>
        <Link href="/cei-vs-cis-diaspora" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">CEI vs CIS pentru diaspora</p>
          <p className="mt-1 text-sm text-gray-600">Comparația care îți schimbă alegerea SPCLEP-ului și planul de drum.</p>
        </Link>
        <Link href="/acte-copil-nascut-in-germania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Primul buletin pentru copil</p>
          <p className="mt-1 text-sm text-gray-600">Dacă este vorba despre primul act după transcriere, traseul pornește din ghidul copilului.</p>
        </Link>
      </div>
    ),
  },
]

export default function BuletinRomaniaGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="buletin-romania-germania"
      lpTopic="buletin"
      h1="Buletin românesc din Germania — ce s-a schimbat și cum procedezi"
      intro="Spre deosebire de pașaport, buletinul nu se rezolvă la consulatul din Germania. Din 2025, prezența fizică în România este obligatorie pentru depunere. Înainte să pleci la drum, merită să afli exact la ce SPCLEP mergi și dacă alegi CEI sau CIS."
      tldr="Buletinul înseamnă deplasare în România la SPCLEP. CEI: valabilă UE, orice SPCLEP, termen mai scurt. CIS: nu este valabilă UE, doar la SPCLEP de domiciliu, termen mai lung. Fotografii proprii nu sunt necesare. CEI se ridică obligatoriu personal."
      ctaHref="/cei-vs-cis-diaspora"
      ctaLabel="Vezi mai întâi diferența dintre CEI și CIS →"
      updatedAt="aprilie 2026"
      sourceNote="MAI, hub.mai.gov.ro, carteadeidentitate.gov.ro — date verificate live"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Încă nu e clar ce pagină ți se aplică?"
      finalCtaText="Pornește cu CEI vs CIS și cu ghidul care corespunde cazului tău de expirat sau pierdut. Dacă situația rămâne neclară, ghidul rapid îți confirmă traseul final."
    />
  )
}
