import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'CEI vs CIS pentru diaspora — Care e mai bun pentru tine? | ActeRO',
  description:
    'CEI sau CIS pentru românii din Germania? Diferențele practice: UE, SPCLEP, ridicare, cost și termen. Ghid 2026.',
  keywords: [
    'cei vs cis diaspora',
    'carte electronica identitate vs simpla',
    'cei diaspora romania',
    'diferenta cei cis romani strainatate',
    'cis valabil ue',
    'cei cip electronic romania',
    'care e mai bun cei sau cis diaspora',
    'cei orice spclep romania',
    'cis spclep domiciliu',
    'cei gratuit pnrr diaspora',
  ],
  openGraph: {
    title: 'CEI vs CIS pentru diaspora — Care e mai bun pentru tine?',
    description:
      'CIS nu este valabil în UE. CEI oferă mai multă flexibilitate pentru diaspora. Tabel complet și recomandări practice.',
    url: 'https://www.actero.ro/cei-vs-cis-diaspora',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/cei-vs-cis-diaspora',
  },
}

const faqItems = [
  {
    question: 'CIS este valabil pentru călătorii în UE?',
    answer:
      'Nu. Pentru cine locuiește în Germania, asta este diferența practică cea mai importantă dintre CIS și CEI.',
  },
  {
    question: 'CEI este gratuită?',
    answer:
      'Există contexte în care CEI poate fi mai avantajoasă inclusiv la cost, nu doar la utilitate. Totuși, verifică mereu regula actuală înainte de depunere.',
  },
  {
    question: 'La ce SPCLEP pot merge cu CEI vs CIS?',
    answer:
      'CEI oferă mai multă flexibilitate decât CIS. Pentru diaspora, asta contează foarte mult când încerci să legi actul de o deplasare scurtă în România.',
  },
  {
    question: 'Pot ridica CIS prin procură?',
    answer:
      'Da, tocmai asta este unul dintre puținele avantaje practice reale ale CIS. Pentru CEI trebuie planificată ridicarea personală.',
  },
  {
    question: 'CEI are cip electronic — la ce folosește?',
    answer:
      'Dincolo de partea tehnică, pentru diaspora cel mai vizibil avantaj rămâne utilizarea mai bună a actului în viața practică și în deplasările din UE.',
  },
  {
    question: 'Dacă nu am domiciliu activ în România, pot face CIS?',
    answer:
      'În practică, lipsa domiciliului activ favorizează clar alegerea CEI, nu a CIS.',
  },
  {
    question: 'CEI este valabilă cât timp?',
    answer:
      'Valabilitatea legală diferă după vârstă, dar comparația practică între CEI și CIS ține mai puțin de durată și mai mult de utilizare, deplasări și flexibilitate.',
  },
  {
    question: 'Pot face atât CEI cât și CIS?',
    answer:
      'Nu în paralel. Alegi varianta care îți servește cel mai bine situația concretă.',
  },
]

const howToSteps = [
  {
    name: 'Verifici dacă ai domiciliu activ în România',
    text: 'Asta îți arată imediat dacă ai ambele opțiuni sau dacă, practic, te împinge spre CEI.',
  },
  {
    name: 'Te întrebi dacă poți ridica personal',
    text: 'Dacă nu poți reveni personal pentru ridicare, CIS poate deveni o opțiune doar din acest motiv.',
  },
  {
    name: 'Te întrebi dacă vrei să călătorești cu buletinul în UE',
    text: 'Dacă răspunsul este da, comparația aproape se închide în favoarea CEI.',
  },
  {
    name: 'Compari SPCLEP, cost, termen și ridicare',
    text: 'Abia după aceea merită să te uiți la restul diferențelor practice.',
  },
  {
    name: 'Alegi varianta și mergi pe ghidul specific situației tale',
    text: 'Compararea este doar începutul; traseul concret depinde apoi de expirat, pierdut, domiciliu activ sau nu.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/cei-vs-cis-diaspora#article',
  headline: 'CEI vs CIS pentru diaspora — Care e mai bun pentru tine? 2026',
  description:
    'Comparație practică între CEI și CIS pentru românii din diaspora: UE, SPCLEP, ridicare, cost și recomandări pe profil.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/cei-vs-cis-diaspora',
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
      name: 'CEI vs CIS diaspora',
      item: 'https://www.actero.ro/cei-vs-cis-diaspora',
    },
  ],
}

const sections = [
  {
    id: 'diferenta-esentiala',
    title: 'Diferența esențială — ce contează pentru diaspora',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Pentru un român care locuiește în Germania, există o singură diferență care bate aproape tot restul comparației:
        </p>

        <div className="rounded-xl border-2 border-red-300 bg-red-50 p-4 text-center">
          <p className="text-lg font-black text-red-900">CIS nu este document de călătorie în UE</p>
          <p className="mt-1 text-sm text-red-800">
            Dacă vrei să te poți mișca practic cu actul tău de identitate, CEI este varianta care contează.
          </p>
        </div>

        <p className="text-sm text-gray-600">
          Costul, ridicarea și SPCLEP-ul sunt importante, dar pentru diaspora această diferență schimbă cel mai mult utilitatea reală a documentului.
        </p>
      </div>
    ),
  },
  {
    id: 'tabel-comparativ',
    title: 'Tabel comparativ complet',
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
              { criteriu: 'Valabilă pentru călătorii în UE / Schengen', cei: 'Da', cis: 'Nu', highlight: true },
              { criteriu: 'Flexibilitate procedurală', cei: 'Mai mare', cis: 'Mai mică', highlight: false },
              { criteriu: 'Dacă nu ai domiciliu activ', cei: 'Favorizată', cis: 'Defavorizată', highlight: false },
              { criteriu: 'Termen de emitere', cei: 'Mai scurt', cis: 'Mai lung', highlight: false },
              { criteriu: 'Cost', cei: 'Poate fi mai avantajoasă', cis: 'Mai ieftină ca taxă simplă', highlight: false },
              { criteriu: 'Ridicare', cei: 'Personală', cis: 'Poate permite procură', highlight: false },
            ].map(({ criteriu, cei, cis, highlight }, index) => (
              <tr key={criteriu} className={highlight ? 'bg-red-50' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className={`border border-gray-200 p-2 text-xs font-medium ${highlight ? 'text-red-900' : 'text-gray-800'}`}>
                  {criteriu}
                </td>
                <td className={`border border-gray-200 p-2 text-xs ${highlight ? 'font-semibold text-blue-700' : 'text-blue-700'}`}>
                  {cei}
                </td>
                <td className={`border border-gray-200 p-2 text-xs ${highlight ? 'font-semibold text-red-700' : 'text-gray-600'}`}>
                  {cis}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'pentru-cine',
    title: 'Care îți convine — pe profilul tău',
    content: (
      <div className="space-y-3">
        {[
          {
            profil: 'Locuiești în Germania și călătorești în UE',
            recomandare: 'CEI',
            motivul: 'Este varianta practică dacă vrei ca actul tău să te ajute și în deplasări, nu doar să existe pe hârtie.',
            color: 'border-blue-200 bg-blue-50',
            badge: 'bg-blue-100 text-blue-800',
          },
          {
            profil: 'Nu poți reveni personal în România pentru ridicare',
            recomandare: 'CIS, doar dacă restul condițiilor îți permit',
            motivul: 'Aici apare principalul avantaj real al CIS: partea de ridicare prin procură.',
            color: 'border-gray-200 bg-gray-50',
            badge: 'bg-gray-100 text-gray-700',
          },
          {
            profil: 'Nu ai domiciliu activ în România',
            recomandare: 'CEI',
            motivul: 'În practică, comparația se înclină clar spre CEI.',
            color: 'border-blue-200 bg-blue-50',
            badge: 'bg-blue-100 text-blue-800',
          },
          {
            profil: 'Vrei varianta cea mai utilă, nu doar cea mai ieftină',
            recomandare: 'CEI',
            motivul: 'Costul mai mic al CIS pierde repede din importanță când apar limitările ei reale.',
            color: 'border-green-200 bg-green-50',
            badge: 'bg-green-100 text-green-800',
          },
        ].map(({ profil, recomandare, motivul, color, badge }) => (
          <div key={profil} className={`rounded-xl border p-4 ${color}`}>
            <p className="mb-1 text-sm font-semibold text-gray-800">{profil}</p>
            <span className={`mb-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${badge}`}>
              → {recomandare}
            </span>
            <p className="text-xs text-gray-600">{motivul}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'procura-ridicare',
    title: 'Ridicarea prin procură — doar la CIS',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-red-100 bg-red-50 p-4">
            <p className="mb-1 font-semibold text-red-900">CEI — ridicare personală</p>
            <p className="text-sm text-red-800">
              Dacă alegi CEI, gândește din start și logistica ridicării, nu doar depunerea.
            </p>
          </div>

          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-1 font-semibold text-green-900">CIS — poate permite procură</p>
            <p className="text-sm text-green-800">
              Acesta este marele argument pentru CIS atunci când vrei să eviți două drumuri sau o ședere mai lungă în România.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Dacă poți rămâne suficient în România sau reveni pentru ridicare, CEI rămâne de regulă alegerea mai bună. Dacă nu poți, CIS poate deveni o soluție strict logistică.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'concluzie',
    title: 'Concluzia pentru românii din Germania',
    content: (
      <div className="space-y-3 rounded-xl border-2 border-blue-200 bg-blue-50 p-4">
        <p className="font-semibold text-blue-900">
          În majoritatea cazurilor, CEI este alegerea corectă pentru diaspora
        </p>
        <ul className="space-y-1 text-sm text-blue-800">
          <li>Este utilă în UE</li>
          <li>Îți oferă un traseu mai flexibil</li>
          <li>Are sens practic pentru cine locuiește în afara României</li>
          <li>Te scapă de multe limitări care reapar cu CIS</li>
        </ul>
        <p className="text-sm text-blue-800">
          CIS devine preferabilă doar în nișe clare, în special când nu poți gestiona ridicarea personală și accepți toate compromisurile ei.
        </p>
      </div>
    ),
  },
  {
    id: 'alte-situatii',
    title: 'Ghiduri pentru situația ta specifică',
    content: (
      <div className="space-y-2">
        {[
          {
            text: 'Buletin expirat cu domiciliu activ în România',
            href: '/buletin-expirat-cu-domiciliu-romania',
            label: 'Ghid →',
          },
          {
            text: 'Buletin expirat fără domiciliu activ în România',
            href: '/buletin-expirat-fara-domiciliu-romania',
            label: 'Ghid →',
          },
          {
            text: 'Buletin pierdut cu domiciliu activ',
            href: '/buletin-pierdut-furat-cu-domiciliu-romania',
            label: 'Ghid →',
          },
          {
            text: 'Buletin pierdut fără domiciliu activ',
            href: '/buletin-pierdut-furat-fara-domiciliu-romania',
            label: 'Ghid →',
          },
          {
            text: 'Toate situațiile de buletin din Germania',
            href: '/buletin-romania-germania',
            label: 'Ghidul principal →',
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

export default function CeiVsCisDiasporaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="cei-vs-cis-diaspora"
      lpTopic="buletin"
      h1="CEI vs CIS pentru diaspora — care e mai bun pentru tine"
      intro="Dacă locuiești în Germania, diferența dintre CEI și CIS nu este doar tehnică. Este o diferență practică, de viață reală: mobilitate, flexibilitate, ridicare și utilitate după ce ajungi înapoi acasă."
      tldr="Pentru diaspora, CEI este în cele mai multe cazuri alegerea mai bună. CIS devine relevantă mai ales atunci când ridicarea personală este problema principală și ești dispus să accepți limitările documentului."
      ctaHref="/buletin-romania-germania"
      ctaLabel="Vezi apoi ghidul de buletin care corespunde cazului tău →"
      updatedAt="aprilie 2026"
      sourceNote="MAI, hub.mai.gov.ro, carteadeidentitate.gov.ro"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Ai înțeles diferența, dar nu știi ce pagină urmează?"
      finalCtaText="După comparația CEI vs CIS, mergi pe ghidul de buletin care corespunde cazului tău: expirat, pierdut, cu domiciliu activ sau fără domiciliu."
    />
  )
}
