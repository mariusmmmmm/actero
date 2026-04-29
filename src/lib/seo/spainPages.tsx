import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
import { spainConsulates, spainRegionToConsulate } from '@/lib/content/consulates/es'
import type { SpainConsulateId } from '@/types'

type FaqItem = {
  question: string
  answer: string
}

type HowToStepItem = {
  name: string
  text: string
}

type SectionItem = {
  id: string
  title: string
  content: ReactNode
}

type BreadcrumbEntry = {
  name: string
  item: string
}

type SpainSeoPageConfig = {
  slug: string
  lpTopic: string
  title: string
  description: string
  keywords?: string[]
  h1: string
  intro: string
  tldr: string
  ctaHref: string
  ctaLabel: string
  updatedAt: string
  sourceNote: string
  faqItems: FaqItem[]
  howToSteps: HowToStepItem[]
  sections: SectionItem[]
  finalCtaTitle: string
  finalCtaText: string
  breadcrumbs: BreadcrumbEntry[]
  extraSchemas?: Record<string, unknown>[]
  publishedAt?: string
  modifiedAt?: string
}

const BASE_URL = 'https://www.actero.ro'
const SPAIN_UPDATED_AT = 'aprilie 2026'
const SPAIN_PUBLISHED = '2026-04-21'
const SPAIN_DEFAULT_IMAGE = `${BASE_URL}/logo.png`

function normalizeSeoTitle(title: string): string {
  return title.replace(/ \| ActeRO$/, '')
}

function getSpainModifiedAt(slug: string): string {
  if (slug === 'acte-romanesti-spania' || slug === 'pasaport-romania-spania') return '2026-04-21'
  if (slug.startsWith('pasaport-consulat-')) return '2026-04-21'
  if (slug.includes('titlu-calatorie')) return '2026-04-21'
  if (slug.includes('pasaport')) return '2026-04-20'
  if (slug.includes('procura') || slug.includes('transcriere') || slug.includes('copil')) return '2026-04-20'
  return '2026-04-19'
}

const consulateRegions = Object.entries(spainRegionToConsulate).reduce<Record<SpainConsulateId, string[]>>(
  (acc, [region, consulateId]) => {
    const key = consulateId as SpainConsulateId
    acc[key] = acc[key] ?? []
    acc[key].push(region)
    return acc
  },
  {
    madrid: [],
    barcelona: [],
    valencia: [],
    sevilla: [],
    bilbao: [],
    zaragoza: [],
    ciudadreal: [],
    almeria: [],
  }
)

function makeMetadata(config: SpainSeoPageConfig): Metadata {
  const normalizedTitle = normalizeSeoTitle(config.title)

  return {
    title: normalizedTitle,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: normalizedTitle,
      description: config.description,
      url: `${BASE_URL}/${config.slug}`,
      type: 'article',
      images: [{ url: SPAIN_DEFAULT_IMAGE }],
    },
    twitter: {
      card: 'summary_large_image',
      title: normalizedTitle,
      description: config.description,
      images: [SPAIN_DEFAULT_IMAGE],
    },
    alternates: {
      canonical: `${BASE_URL}/${config.slug}`,
    },
  }
}

function makeArticleSchema(config: SpainSeoPageConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${BASE_URL}/${config.slug}#article`,
    headline: config.h1,
    description: config.description,
    datePublished: config.publishedAt ?? SPAIN_PUBLISHED,
    dateModified: config.modifiedAt ?? getSpainModifiedAt(config.slug),
    author: { '@type': 'Organization', '@id': `${BASE_URL}/#organization` },
    publisher: { '@type': 'Organization', '@id': `${BASE_URL}/#organization` },
    mainEntityOfPage: `${BASE_URL}/${config.slug}`,
    inLanguage: 'ro',
    image: [SPAIN_DEFAULT_IMAGE],
  }
}

function makeBreadcrumbSchema(config: SpainSeoPageConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: config.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  }
}

function cardLink(href: string, title: string, description: string, accent?: 'orange' | 'blue') {
  const classes =
    accent === 'orange'
      ? 'rounded-lg border border-orange-200 bg-orange-50 p-3 hover:bg-orange-100/60'
      : accent === 'blue'
      ? 'rounded-lg border border-blue-200 bg-blue-50 p-3 hover:bg-blue-100/60'
      : 'rounded-lg border border-gray-200 p-3 hover:bg-gray-50'

  return (
    <Link href={href} className={classes}>
      <p className={`font-medium ${accent === 'orange' ? 'text-orange-900' : accent === 'blue' ? 'text-blue-900' : 'text-gray-900'}`}>
        {title}
      </p>
      <p className={`mt-1 text-sm ${accent === 'orange' ? 'text-orange-800' : accent === 'blue' ? 'text-blue-800' : 'text-gray-600'}`}>
        {description}
      </p>
    </Link>
  )
}

function quickLinks(items: Array<[string, string, string, 'orange' | 'blue' | undefined]>) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map(([href, title, description, accent]) => (
        <div key={href}>{cardLink(href, title, description, accent)}</div>
      ))}
    </div>
  )
}

const spainCoreLinks = {
  hub: '/acte-romanesti-spania',
  passport: '/pasaport-romania-spania',
  passportCrds: '/pasaport-crds-spania',
  passportLost: '/pasaport-pierdut-furat-spania',
  passportMinor: '/pasaport-minor-spania',
  buletin: '/buletin-romania-spania',
  titleStandard: '/titlu-calatorie-spania',
  titleUrgent: '/titlu-calatorie-urgenta-spania',
  procuraHub: '/procura-notariala-spania',
  procuraSale: '/procura-vanzare-proprietate-spania',
  transcription: '/transcriere-nastere-spania',
  childActs: '/acte-copil-nascut-in-spania',
  booking: '/programare-consulat-roman-spania',
  competentConsulate: '/consulat-competent-spania',
  taxPassport: '/taxa-pasaport-romanesc-spania',
  empadronamiento: '/empadronamiento-pasaport-roman',
  apostille: '/apostila-haga-spania',
  translator: '/traducator-autorizat-spania',
}

const consulatePageSlugById: Record<SpainConsulateId, string> = {
  madrid: '/pasaport-consulat-madrid',
  barcelona: '/pasaport-consulat-barcelona',
  valencia: '/pasaport-consulat-valencia',
  sevilla: '/pasaport-consulat-sevilla',
  bilbao: '/pasaport-consulat-bilbao',
  zaragoza: '/pasaport-consulat-zaragoza',
  ciudadreal: '/pasaport-consulat-ciudad-real',
  almeria: '/pasaport-consulat-almeria',
}

const consulateHighlights: Record<SpainConsulateId, Array<{ title: string; body: string; tone?: 'warning' | 'positive' }>> = {
  madrid: [
    { title: 'CRDS cu poștă obligatorie', body: 'La Madrid, pașaportul CRDS se trimite obligatoriu prin poștă. Costul total devine 60€.' },
    { title: 'Ridicare doar Luni–Miercuri', body: 'Joi și Vineri nu se ridică pașapoarte la Madrid.' , tone: 'warning'},
    { title: 'Card bancar exclusiv', body: 'Madrid este clar pe plată: exclusiv card, fără numerar.' , tone: 'positive'},
  ],
  barcelona: [
    { title: 'Adresă nouă din 2025', body: 'Barcelona funcționează la Carrer de Munner 10. Nu mai folosi adresa veche.' , tone: 'warning'},
    { title: 'Ridicare L-V', body: 'Ridicarea pașapoartelor se face de luni până vineri, în programul de după-amiază.' },
    { title: 'Metodă de plată de confirmat', body: 'Taxa este 53€, dar metoda de plată trebuie confirmată direct cu consulatul.' },
  ],
  valencia: [
    { title: 'Curier disponibil', body: 'Valencia permite livrare poștală. Verifică formularul și pașii de pe site înainte de depunere.', tone: 'positive' },
    { title: 'Traducere pentru furt', body: 'Pentru unele cazuri de furt, Valencia cere traducere autorizată a denunțului.' , tone: 'warning'},
    { title: 'Program clasic cu programare', body: 'Depunerea și ridicarea urmează modelul standard econsulat.ro + ridicare fără programare.' },
  ],
  sevilla: [
    { title: 'Acoperă sudul mare', body: 'Sevilla deservește o parte mare din Andaluzia, plus Extremadura, Ceuta și Melilla.' },
    { title: 'Titlul urgent se confirmă direct', body: 'Pentru titlu de călătorie urgent, Sevilla cere de regulă programare, dar merită verificat telefonic orice caz special.', tone: 'warning' },
    { title: 'Procura rămâne gratuită', body: 'Ca în toată Spania, RNNEPR nu se aplică.' , tone: 'positive'},
  ],
  bilbao: [
    { title: 'Vineri nu sunt pașapoarte obișnuite', body: 'Bilbao rezervă ziua de vineri pentru servicii speciale. Nu conta pe depunere obișnuită de pașaport vinerea.', tone: 'warning' },
    { title: 'Burgos merge la Bilbao', body: 'Burgos este excepția importantă din Castilla y León și este arondat Bilbao.' },
    { title: 'Ridicare în același interval', body: 'Ridicarea se suprapune cu programul de depunere, de luni până joi.' },
  ],
  zaragoza: [
    { title: 'Intrarea este prin spatele clădirii', body: 'Este una dintre confuziile logistice frecvente la Zaragoza.', tone: 'warning' },
    { title: '53€ confirmat explicit', body: 'Zaragoza este unul dintre puținele consulate care confirmă clar taxa reală de 53€.', tone: 'positive' },
    { title: 'Numerar sau POS', body: 'Metoda de plată este mai clară aici decât în alte consulate spaniole.' },
  ],
  ciudadreal: [
    { title: 'Exclusiv numerar', body: 'Ciudad Real este consulatul unde trebuie să pleci cu numerarul pregătit.', tone: 'warning' },
    { title: 'Toți minorii la titlu', body: 'Pentru titlu de călătorie, Ciudad Real cere prezența tuturor minorilor, indiferent de vârstă.' },
    { title: 'Guvernează mare parte din Castilla-La Mancha', body: 'Toledo, Ciudad Real, Albacete și Cuenca merg aici.' },
  ],
  almeria: [
    { title: 'Sud-estul Spaniei', body: 'Almería acoperă Almería, Granada, Jaén și Murcia.' },
    { title: 'Fără traducere la furt pentru titlu', body: 'În fluxul de titlu de călătorie, denunțul spaniol este suficient.', tone: 'positive' },
    { title: 'Plata trebuie confirmată direct', body: 'Taxa este 53€, dar metoda de plată nu este comunicată suficient de clar online.', tone: 'warning' },
  ],
}

function makeConsulatePage(consulateId: SpainConsulateId): SpainSeoPageConfig {
  const consulate = spainConsulates[consulateId]
  const cityLabelMap: Record<SpainConsulateId, string> = {
    madrid: 'Madrid',
    barcelona: 'Barcelona',
    valencia: 'Valencia',
    sevilla: 'Sevilla',
    bilbao: 'Bilbao',
    zaragoza: 'Zaragoza',
    ciudadreal: 'Ciudad Real',
    almeria: 'Almería',
  }
  const city = cityLabelMap[consulateId]
  const slug = consulatePageSlugById[consulateId].slice(1)
  const isMadrid = consulateId === 'madrid'
  const regions = consulateRegions[consulateId]
  const regionPreview = regions.slice(0, 5).join(' · ')
  const sectionLinks = Object.entries(consulatePageSlugById)
    .filter(([id]) => id !== consulateId)
    .slice(0, 4)
    .map(([id, href]) => {
      const otherCity = cityLabelMap[id as SpainConsulateId]
      return [href, `Consulat ${otherCity}`, `Dacă nu locuiești în zona ${city}, verifică regula și programul consulatului corect.`] as const
    })

  return {
    slug,
    lpTopic: `pasaport-consulat-${consulateId}`,
    title: `Pașaport la Consulatul Român din ${city} — Ghid 2026 | ActeRO`,
    description: `Programare, documente, taxă și ridicare pentru pașaport la consulatul din ${city}. Reguli verificate pentru zona ta din Spania.`,
    keywords: [`pasaport consulat ${city.toLowerCase()}`, `consulat roman ${city.toLowerCase()}`, `programare consulat ${city.toLowerCase()}`],
    h1: `Pașaport la Consulatul Român din ${city} — ghid 2026`,
    intro: `Locuiești în zona arondată consulatului din ${city}? Aici ai pașii practici pentru depunere, plată, ridicare și particularitățile locale care pot schimba experiența față de celelalte consulate din Spania.`,
    tldr: isMadrid
      ? `${city}: ${consulate.scheduleDeponere}. Plata standard: 53€ cu card. Pentru CRDS, totalul ajunge la 60€ din cauza taxei poștale obligatorii. Ridicare standard: ${consulate.schedulePassportPickupStandard ?? consulate.scheduleRidicare}.`
      : `${city}: ${consulate.scheduleDeponere}. Plata: ${consulate.paymentMethod}. Ridicare: ${consulate.schedulePassportPickup ?? consulate.scheduleRidicare}. Taxa legală: 53€${consulate.paymentPassportNote ? ` · ${consulate.paymentPassportNote}` : ''}`,
    ctaHref: '/wizard?problem=pasaport&country=es',
    ctaLabel: `Vreau lista exactă pentru consulatul din ${city} →`,
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: `${consulate.website} · econsulat.ro · ActeRO`,
    faqItems: [
      { question: `Ce zone sunt arondate la ${city}?`, answer: regions.join(', ') },
      { question: `Cum plătesc pașaportul la ${city}?`, answer: consulate.paymentPassportNote ?? consulate.paymentMethod },
      { question: `Trebuie programare la ${city}?`, answer: consulate.scheduleDeponere },
      { question: `Cum ridic pașaportul la ${city}?`, answer: consulate.schedulePassportPickup ?? consulate.scheduleRidicare },
    ],
    howToSteps: [
      { name: 'Confirmă arondarea', text: `Verifică întâi că regiunea ta intră la ${city}.` },
      { name: 'Fă programarea', text: consulate.scheduleDeponere },
      { name: 'Pregătește originalele', text: 'Pentru pașaport aduci documentele originale și te fotografiezi biometric la ghișeu.' },
      { name: 'Verifică plata și ridicarea', text: `${consulate.paymentMethod}. Ridicare: ${consulate.schedulePassportPickup ?? consulate.scheduleRidicare}` },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Pașaport România Spania', item: `${BASE_URL}${spainCoreLinks.passport}` },
      { name: `Consulat ${city}`, item: `${BASE_URL}/${slug}` },
    ],
    sections: [
      {
        id: 'date-consulat',
        title: `Date utile pentru consulatul din ${city}`,
        content: (
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-3 text-sm">
            <div>
              <p className="font-semibold text-gray-900">Adresă</p>
              <p className="text-gray-700">{consulate.address}</p>
              {consulate.addressNote && <p className="mt-1 text-xs text-orange-700">{consulate.addressNote}</p>}
            </div>
            <div>
              <p className="font-semibold text-gray-900">Program depunere</p>
              <p className="text-gray-700">{consulate.scheduleDeponere}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Ridicare</p>
              <p className="text-gray-700">{consulate.schedulePassportPickup ?? consulate.scheduleRidicare}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Plată</p>
              <p className="text-gray-700">
                {isMadrid
                  ? `${consulate.paymentPassport ?? consulate.paymentMethod} · CRDS: ${consulate.paymentPassportCrds ?? '60€ · exclusiv card bancar'}`
                  : consulate.paymentPassport ?? consulate.paymentMethod}
              </p>
            </div>
          </div>
        ),
      },
      {
        id: 'particularitati',
        title: `Ce e diferit la ${city} față de alte consulate`,
        content: (
          <div className="space-y-3 text-sm">
            {consulateHighlights[consulateId].map((item) => (
              <div
                key={item.title}
                className={`rounded-lg border p-3 ${
                  item.tone === 'warning'
                    ? 'border-orange-200 bg-orange-50'
                    : item.tone === 'positive'
                    ? 'border-green-200 bg-green-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <p className={`font-medium ${item.tone === 'warning' ? 'text-orange-900' : item.tone === 'positive' ? 'text-green-900' : 'text-gray-900'}`}>
                  {item.title}
                </p>
                <p className={`mt-1 ${item.tone === 'warning' ? 'text-orange-800' : item.tone === 'positive' ? 'text-green-800' : 'text-gray-700'}`}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        ),
      },
      {
        id: 'zone-arondate',
        title: `Ce zone din Spania merg la ${city}`,
        content: (
          <div className="rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-700">{regionPreview}{regions.length > 5 ? ' …' : ''}</p>
            <p className="mt-2 text-xs text-gray-500">
              Dacă nu ești sigur, verifică și pagina despre consulatul competent pentru Spania.
            </p>
          </div>
        ),
      },
      {
        id: 'pagini-conexe',
        title: 'Pagini conexe utile',
        content: quickLinks([
          [spainCoreLinks.passport, 'Pașaport România Spania', 'Hub-ul principal pentru toate situațiile de pașaport din Spania.', undefined],
          [spainCoreLinks.taxPassport, 'Taxa reală a pașaportului', '53€ vs 59€ și excepția Madrid 60€.', 'orange'],
          [spainCoreLinks.competentConsulate, 'Consulatul competent în Spania', 'Verifică rapid dacă ai ales consulatul corect.', 'blue'],
          (consulateId === 'madrid' || consulateId === 'barcelona')
            ? ['/consulat-madrid-vs-barcelona', 'Madrid vs Barcelona', 'Comparația utilă pentru cele două mari consulate din Spania.', undefined]
            : [spainCoreLinks.booking, 'Programare la consulat în Spania', 'Pașii generali de programare pe econsulat.ro pentru Spania.', undefined],
        ]),
      },
      {
        id: 'alte-consulate',
        title: 'Alte consulate din Spania',
        content: quickLinks(sectionLinks.map(([href, title, description]) => [href, title, description, undefined])),
      },
    ],
    finalCtaTitle: `Vrei traseul exact pentru ${city}?`,
    finalCtaText: 'Wizardul ActeRO îți spune în 30 de secunde dacă ai toate documentele și ce consulat ți se aplică.',
    extraSchemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'GovernmentOffice',
        name: consulate.name,
        url: consulate.website,
        telephone: consulate.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: consulate.address,
          addressCountry: 'ES',
        },
      },
    ],
  }
}

const spainPages: Record<string, SpainSeoPageConfig> = {
  'acte-romanesti-spania': {
    slug: 'acte-romanesti-spania',
    lpTopic: 'acte-romanesti-spania',
    title: 'Acte românești în Spania — Ghid complet 2026',
    description: 'Pașaport, buletin, procuri, titlu de călătorie și transcriere naștere pentru românii din Spania. 8 consulate, reguli verificate, fără drumuri degeaba.',
    keywords: ['acte romanesti spania', 'pasaport romania spania', 'consulat roman spania', 'procura notariala spania'],
    h1: 'Acte românești în Spania — ghid complet pentru diaspora română',
    intro: 'Dacă locuiești în Spania și ai nevoie de pașaport, buletin, procură, titlu de călătorie sau acte pentru copil, această pagină este hub-ul principal din care pornești spre procedura corectă.',
    tldr: 'Spania are 8 consulate române, iar regulile diferă real între ele. Pașaportul, procurile și transcrierea se rezolvă prin consulat; buletinul depinde de tipul cererii și de domiciliu.',
    ctaHref: '/wizard?country=es',
    ctaLabel: 'Arată-mi traseul corect pentru situația mea →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'Consulatele României din Spania · econsulat.ro · ActeRO',
    faqItems: [
      { question: 'Ce acte pot rezolva prin consulat în Spania?', answer: 'Pașaport, titlu de călătorie, procuri și transcrierea nașterii se rezolvă prin consulat. Buletinul are fluxuri diferite în funcție de domiciliu și tipul cererii.' },
      { question: 'Cum aflu consulatul competent?', answer: 'După comunitatea autonomă și, în câteva zone, chiar după provincie. Castilla y León, Castilla-La Mancha și Andaluzia au excepții importante.' },
      { question: 'Programarea se face peste tot pe econsulat.ro?', answer: 'Da, pentru majoritatea serviciilor. Titlul de călătorie urgent și unele excepții se verifică direct cu consulatul.' },
      { question: 'Cât costă pașaportul în Spania?', answer: 'Taxa reală este 53€, cu excepția Madrid CRDS unde costul total este 60€ din cauza taxei poștale obligatorii.' },
    ],
    howToSteps: [
      { name: 'Alege actul de care ai nevoie', text: 'Pașaport, buletin, titlu de călătorie, procură sau transcriere de naștere.' },
      { name: 'Verifică consulatul competent', text: 'Nu toate regiunile merg la consulatul intuitiv. Unele provincii sunt excepții.' },
      { name: 'Vezi dacă procedura e consulară sau mixtă', text: 'La unele documente, o parte din proces rămâne în România.' },
      { name: 'Intră în ghidul dedicat', text: 'Fiecare pagină de mai jos intră în documente, taxe și excepții locale.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}/acte-romanesti-spania` },
    ],
    sections: [
      {
        id: 'consulate',
        title: 'Cele 8 consulate din Spania și zonele lor',
        content: (
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Zonă</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Consulat</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200"><td className="px-4 py-3">Madrid · Canare · majoritatea Castilla y León · Guadalajara</td><td className="px-4 py-3"><Link href="/pasaport-consulat-madrid" className="underline">Madrid</Link></td></tr>
                <tr className="border-t border-gray-200"><td className="px-4 py-3">Cataluña · Baleare</td><td className="px-4 py-3"><Link href="/pasaport-consulat-barcelona" className="underline">Barcelona</Link></td></tr>
                <tr className="border-t border-gray-200"><td className="px-4 py-3">Comunidad Valenciana</td><td className="px-4 py-3"><Link href="/pasaport-consulat-valencia" className="underline">Valencia</Link></td></tr>
                <tr className="border-t border-gray-200"><td className="px-4 py-3">Vestul Andaluziei · Extremadura · Ceuta · Melilla</td><td className="px-4 py-3"><Link href="/pasaport-consulat-sevilla" className="underline">Sevilla</Link></td></tr>
                <tr className="border-t border-gray-200"><td className="px-4 py-3">Galicia · Asturias · Cantabria · País Vasco · Navarra · La Rioja · Burgos</td><td className="px-4 py-3"><Link href="/pasaport-consulat-bilbao" className="underline">Bilbao</Link></td></tr>
                <tr className="border-t border-gray-200"><td className="px-4 py-3">Aragón</td><td className="px-4 py-3"><Link href="/pasaport-consulat-zaragoza" className="underline">Zaragoza</Link></td></tr>
                <tr className="border-t border-gray-200"><td className="px-4 py-3">Toledo · Ciudad Real · Albacete · Cuenca</td><td className="px-4 py-3"><Link href="/pasaport-consulat-ciudad-real" className="underline">Ciudad Real</Link></td></tr>
                <tr className="border-t border-gray-200"><td className="px-4 py-3">Almería · Granada · Jaén · Murcia</td><td className="px-4 py-3"><Link href="/pasaport-consulat-almeria" className="underline">Almería</Link></td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        id: 'ghiduri',
        title: 'Cele mai importante ghiduri pentru Spania',
        content: quickLinks([
          [spainCoreLinks.passport, 'Pașaport România Spania', 'Hub-ul principal pentru CRDS, domiciliu în România, minor și pierdut/furat.', undefined],
          [spainCoreLinks.buletin, 'Buletin românesc din Spania', 'Adult, minor, majorat, cu sau fără domiciliu în România.', undefined],
          [spainCoreLinks.titleStandard, 'Titlu de călătorie din Spania', 'Fluxul standard și varianta urgentă pentru plecare rapidă.', 'orange'],
          [spainCoreLinks.procuraHub, 'Procură notarială din Spania', '0€, aceeași zi, fără RNNEPR.', undefined],
          [spainCoreLinks.transcription, 'Transcriere naștere din Spania', 'Pentru copil născut în Spania și actele următoare.', 'blue'],
          [spainCoreLinks.booking, 'Programare la consulat în Spania', 'Pașii de pe econsulat.ro și capcanele frecvente.', undefined],
        ]),
      },
      {
        id: 'ce-trebuie-stiut',
        title: 'Ce trebuie să știi înainte să începi',
        content: (
          <div className="space-y-3 text-sm">
            <div className="rounded-lg border border-orange-200 bg-orange-50 p-3">
              <p className="font-medium text-orange-900">Taxa reală a pașaportului este 53€</p>
              <p className="mt-1 text-orange-800">Unele pagini MAE afișează încă 59€. Excepția importantă este Madrid CRDS, unde totalul este 60€.</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
              <p className="font-medium text-blue-900">Empadronamiento poate fi suficient pentru CRDS</p>
              <p className="mt-1 text-blue-800">Nu trebuie să blochezi dosarul până apare NIE-ul dacă ai deja dovada de domiciliu de la ayuntamiento.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-3">
              <p className="font-medium text-gray-900">Unele consulate au reguli locale reale</p>
              <p className="mt-1 text-gray-700">Bilbao nu face pașapoarte vinerea, Barcelona are adresă nouă, Madrid ridică pașapoarte doar L-Mi, Ciudad Real cere numerar.</p>
            </div>
          </div>
        ),
      },
      {
        id: 'pagini-consulat',
        title: 'Pagini dedicate pe consulat',
        content: quickLinks([
          ['/pasaport-consulat-madrid', 'Consulat Madrid', 'Card exclusiv, CRDS 60€, ridicare L-Mi.', undefined],
          ['/pasaport-consulat-barcelona', 'Consulat Barcelona', 'Adresă nouă din 2025 și ridicare L-V.', undefined],
          ['/pasaport-consulat-valencia', 'Consulat Valencia', 'Curier disponibil și reguli proprii pe titlu.', undefined],
          ['/pasaport-consulat-sevilla', 'Consulat Sevilla', 'Andaluzia de vest, Extremadura, Ceuta și Melilla.', undefined],
          ['/pasaport-consulat-bilbao', 'Consulat Bilbao', 'Burgos este excepția importantă.', undefined],
          ['/pasaport-consulat-zaragoza', 'Consulat Zaragoza', 'Intrare prin spatele clădirii și 53€ confirmat.', undefined],
        ]),
      },
      {
        id: 'comparatii',
        title: 'Pagini comparative utile',
        content: quickLinks([
          [spainCoreLinks.competentConsulate, 'Consulatul competent în Spania', 'Tabelul complet pe comunități și provincii, cu excepțiile importante.', undefined],
          ['/consulat-madrid-vs-barcelona', 'Madrid vs Barcelona', 'Comparația utilă dacă oscilezi între cele două mari consulate.', undefined],
          [spainCoreLinks.booking, 'Programare la consulat în Spania', 'Pașii econsulat.ro și capcanele frecvente la programare.', undefined],
        ]),
      },
    ],
    finalCtaTitle: 'Nu ghici procedura',
    finalCtaText: 'Wizardul ActeRO îți spune rapid dacă rezolvi la consulat, ce documente trebuie și ce pagină ți se aplică.',
  },
  'pasaport-romania-spania': {
    slug: 'pasaport-romania-spania',
    lpTopic: 'pasaport-romania-spania',
    title: 'Pașaport românesc în Spania — CRDS, minor, pierdut, domiciliu RO',
    description: 'Hub pentru pașaportul românesc din Spania: CRDS, domiciliu în România, pașaport minor, pierdut/furat și taxa reală 53€.',
    keywords: ['pasaport romania spania', 'pasaport crds spania', 'pasaport pierdut furat spania'],
    h1: 'Pașaport românesc în Spania — ghid complet 2026',
    intro: 'Aici pleci dacă ai nevoie de un pașaport românesc din Spania și nu știi încă ce categorie ți se aplică: CRDS, domiciliu în România, minor sau pierdut/furat.',
    tldr: 'În Spania contează trei lucruri: dacă ai CRDS sau domiciliu în România, dacă documentul este pierdut/furat și dacă cererea este pentru minor. Taxa de bază este 53€.',
    ctaHref: '/wizard?problem=pasaport&country=es',
    ctaLabel: 'Vreau ghidul meu de pașaport →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'Consulatele României din Spania · econsulat.ro · ActeRO',
    faqItems: [
      { question: 'Care este diferența dintre pașaport CRDS și pașaport cu domiciliu în România?', answer: 'CRDS înseamnă domiciliu înregistrat în Spania la consulat. Dacă în actele românești ai încă domiciliu în România, urmezi alt flux.' },
      { question: 'Taxa este 53€ sau 59€?', answer: 'Taxa legală este 53€. Excepția este Madrid CRDS, unde totalul este 60€ din cauza taxei poștale.' },
      { question: 'Unde fac fotografiile?', answer: 'La ghișeu, biometric. Nu aduci fotografii proprii pentru pașaport.' },
      { question: 'Cum aleg consulatul?', answer: 'După zona de domiciliu din Spania. Castilla y León, Castilla-La Mancha și Andaluzia au excepții pe provincie.' },
    ],
    howToSteps: [
      { name: 'Alege categoria corectă', text: 'CRDS, domiciliu în România, minor sau pierdut/furat.' },
      { name: 'Verifică taxa și consulatul', text: 'Taxa standard este 53€, dar programul și ridicarea diferă per consulat.' },
      { name: 'Pregătește documentele', text: 'Pașaportul vechi, dovada domiciliului, certificatul de naștere și, după caz, certificatul de căsătorie.' },
      { name: 'Depune prin econsulat.ro', text: 'Programarea și selecția serviciului se fac online.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Pașaport România Spania', item: `${BASE_URL}${spainCoreLinks.passport}` },
    ],
    sections: [
      {
        id: 'tipuri',
        title: 'Cele 4 mari situații de pașaport din Spania',
        content: quickLinks([
          [spainCoreLinks.passportCrds, 'Pașaport CRDS', 'Pentru cei care au domiciliul înregistrat în Spania.', undefined],
          ['/pasaport-cu-domiciliu-romania-din-spania', 'Pașaport cu domiciliu în România', 'Fluxul pentru cei care locuiesc în Spania, dar au domiciliu românesc activ.', undefined],
          [spainCoreLinks.passportMinor, 'Pașaport minor', 'Pentru copilul tău, cu reguli speciale de prezență și documente.', 'blue'],
          [spainCoreLinks.passportLost, 'Pașaport pierdut sau furat', 'Când documentul s-a pierdut și trebuie să alegi între pașaport nou și titlu urgent.', 'orange'],
        ]),
      },
      {
        id: 'taxa',
        title: 'Taxa și diferențele reale între consulate',
        content: (
          <div className="space-y-3 text-sm">
            <div className="rounded-lg border border-orange-200 bg-orange-50 p-3">
              <p className="font-medium text-orange-900">Taxa standard este 53€</p>
              <p className="mt-1 text-orange-800">Unele pagini oficiale încă afișează 59€, dar taxa legală actuală este 53€.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-3">
              <p className="font-medium text-gray-900">Excepția importantă: Madrid CRDS</p>
              <p className="mt-1 text-gray-700">La Madrid, pașaportul CRDS se trimite prin poștă și costul total ajunge la 60€.</p>
            </div>
          </div>
        ),
      },
      {
        id: 'interlinking',
        title: 'Pagini conexe utile',
        content: quickLinks([
          [spainCoreLinks.taxPassport, 'Taxa pașaportului în Spania', '53€ vs 59€ și de ce Madrid CRDS ajunge la 60€.', 'orange'],
          [spainCoreLinks.competentConsulate, 'Consulatul competent în Spania', 'Alege corect consulatul înainte de programare.', undefined],
          ['/pasaport-consulat-madrid', 'Ghid Madrid', 'Pentru Madrid, Canare și o parte din Castilia.', undefined],
          ['/pasaport-consulat-barcelona', 'Ghid Barcelona', 'Pentru Cataluña și Baleare.', undefined],
        ]),
      },
    ],
    finalCtaTitle: 'Nu vrei să alegi singur categoria?',
    finalCtaText: 'Wizardul îți spune imediat dacă intri la CRDS, domiciliu în România, minor sau pierdut/furat.',
  },
  'pasaport-cu-domiciliu-romania-din-spania': {
    slug: 'pasaport-cu-domiciliu-romania-din-spania',
    lpTopic: 'pasaport-domiciliu-ro-spania',
    title: 'Pașaport cu domiciliu în România din Spania — Ghid 2026',
    description: 'Locuiești în Spania, dar în actele românești ai încă domiciliul în România? Aici este ghidul corect pentru pașaportul tău.',
    h1: 'Pașaport cu domiciliu în România din Spania',
    intro: 'Această pagină este pentru românii care locuiesc în Spania, dar au încă domiciliul oficial în România și cer un pașaport nou prin consulat.',
    tldr: 'Domiciliul oficial din actele românești schimbă complet fluxul. Nu intri la CRDS. Taxa de bază rămâne 53€, iar programarea se face pe econsulat.ro.',
    ctaHref: '/wizard?problem=pasaport&country=es',
    ctaLabel: 'Vreau lista exactă pentru pașaportul meu →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'econsulat.ro · consulatele României din Spania · ActeRO',
    faqItems: [
      { question: 'Cum știu dacă intru la acest flux?', answer: 'Dacă în actele românești ai încă domiciliul activ în România, chiar dacă locuiești efectiv în Spania.' },
      { question: 'Pot folosi empadronamiento-ul aici?', answer: 'Nu pentru a transforma cererea în CRDS. Empadronamiento-ul ajută la fluxul CRDS, nu la cel cu domiciliu în România.' },
      { question: 'Ce se întâmplă dacă pașaportul este pierdut?', answer: 'Intri pe ramura dedicată pentru pierdut/furat din wizard, nu pe reînnoirea standard.' },
      { question: 'Este aceeași taxă?', answer: 'Da, 53€, cu excepțiile locale de consulat și modalitate de plată.' },
    ],
    howToSteps: [
      { name: 'Confirmă domiciliul', text: 'Verifică în pașaportul sau actele actuale dacă domiciliul este în România.' },
      { name: 'Selectează categoria corectă', text: 'Fluxul nu este CRDS, chiar dacă locuiești în Spania.' },
      { name: 'Pregătește documentele', text: 'Pașaport, acte de stare civilă și, după caz, acte privind numele sau căsătoria.' },
      { name: 'Depune la consulatul arondat', text: 'Prin econsulat.ro și cu regulile locale de plată și ridicare.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Pașaport România Spania', item: `${BASE_URL}${spainCoreLinks.passport}` },
      { name: 'Pașaport cu domiciliu în România', item: `${BASE_URL}/pasaport-cu-domiciliu-romania-din-spania` },
    ],
    sections: [
      {
        id: 'cand-se-aplica',
        title: 'Când se aplică acest ghid',
        content: (
          <div className="space-y-3 text-sm">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
              <p className="font-medium text-blue-900">Ți se aplică dacă ai domiciliul oficial în România</p>
              <p className="mt-1 text-blue-800">Locuiești în Spania, dar în actele românești figurezi încă cu domiciliu în România.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-3">
              <p className="font-medium text-gray-900">Nu ți se aplică dacă ai deja CRDS</p>
              <p className="mt-1 text-gray-700">Dacă prima pagină a pașaportului indică domiciliu în Spania, mergi pe ghidul CRDS.</p>
            </div>
          </div>
        ),
      },
      {
        id: 'legaturi',
        title: 'Pagini conexe utile',
        content: quickLinks([
          [spainCoreLinks.passportCrds, 'Pașaport CRDS Spania', 'Dacă de fapt ai domiciliul deja înregistrat în Spania.', undefined],
          [spainCoreLinks.passportLost, 'Pașaport pierdut sau furat', 'Pentru varianta în care documentul nu mai există fizic.', 'orange'],
          [spainCoreLinks.passport, 'Hub pașaport Spania', 'Toate celelalte ramuri de pașaport din Spania.', undefined],
          [spainCoreLinks.taxPassport, 'Taxa pașaportului în Spania', '53€ vs 59€ și diferențe între consulate.', undefined],
        ]),
      },
    ],
    finalCtaTitle: 'Verificăm dacă acesta este fluxul tău',
    finalCtaText: 'Wizardul separă clar domiciliul în România de CRDS, ca să nu începi procedura greșită.',
  },
  'taxa-pasaport-romanesc-spania': {
    slug: 'taxa-pasaport-romanesc-spania',
    lpTopic: 'taxa-pasaport-spania',
    title: 'Cât costă pașaportul românesc în Spania — 53€ sau 59€?',
    description: 'Taxa legală este 53€. Unele pagini afișează 59€. Excepția importantă: Madrid CRDS = 60€ total. Tabel practic și clar.',
    h1: 'Cât costă pașaportul românesc în Spania — 53€ sau 59€?',
    intro: 'Pagina aceasta există ca să elimine o confuzie foarte frecventă: în Spania vei vedea uneori 53€, alteori 59€, iar la Madrid CRDS chiar 60€.',
    tldr: 'Taxa legală actuală este 53€. Dacă vezi 59€, cel mai probabil pagina nu a fost actualizată. Madrid CRDS este excepția: 60€ total cu taxa poștală obligatorie.',
    ctaHref: '/wizard?problem=pasaport&country=es',
    ctaLabel: 'Vreau ghidul meu de pașaport →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'Pagini MAE Spania · consulatele României · ActeRO',
    faqItems: [
      { question: 'Care este taxa legală actuală?', answer: '53€ pentru pașaportul românesc în Spania.' },
      { question: 'De ce unele site-uri afișează 59€?', answer: 'Pentru că nu toate paginile MAE au fost actualizate după schimbarea de tarif.' },
      { question: 'De ce Madrid CRDS costă 60€?', answer: 'Pentru că se adaugă 7€ taxă poștală obligatorie pentru trimiterea documentului la domiciliu.' },
      { question: 'Taxa diferă dacă pașaportul este pierdut sau expirat?', answer: 'Nu, baza rămâne aceeași. Diferențele apar din livrare și modalitatea de ridicare.' },
    ],
    howToSteps: [
      { name: 'Pleacă de la taxa legală de bază', text: '53€ este valoarea de referință în Spania.' },
      { name: 'Verifică tipul tău de dosar', text: 'Mai ales dacă ești CRDS și mai ales dacă depui la Madrid.' },
      { name: 'Confirmă metoda de plată', text: 'Unele consulate cer card, altele numerar, iar altele nu spun clar pe site.' },
      { name: 'Nu te baza doar pe o pagină veche MAE', text: 'Comparația dintre consulate te scapă de drumuri inutile.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Taxa pașaportului în Spania', item: `${BASE_URL}${spainCoreLinks.taxPassport}` },
    ],
    sections: [
      {
        id: 'confuzie',
        title: 'De unde vine confuzia 53€ vs 59€',
        content: (
          <div className="space-y-3 text-sm">
            <p className="text-gray-700">Înainte de actualizarea tarifelor, unele pagini oficiale afișau 59€. După modificare, taxa legală a devenit 53€, dar nu toate site-urile au fost sincronizate.</p>
            <div className="rounded-lg border border-orange-200 bg-orange-50 p-3">
              <p className="font-medium text-orange-900">Ce să reții</p>
              <p className="mt-1 text-orange-800">53€ este cifra de bază. Dacă vezi 59€, tratează pagina ca posibil neactualizată și verifică la consulat.</p>
            </div>
          </div>
        ),
      },
      {
        id: 'tabel',
        title: 'Tabel rapid pe consulat',
        content: (
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Consulat</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Cost real</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Observație</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200"><td className="px-4 py-3">Madrid</td><td className="px-4 py-3">53€ / 60€ CRDS</td><td className="px-4 py-3">7€ poștă obligatorie la CRDS</td></tr>
                <tr className="border-t border-gray-200"><td className="px-4 py-3">Barcelona</td><td className="px-4 py-3">53€</td><td className="px-4 py-3">Metoda de plată se confirmă direct</td></tr>
                <tr className="border-t border-gray-200"><td className="px-4 py-3">Valencia</td><td className="px-4 py-3">53€</td><td className="px-4 py-3">Poate exista livrare poștală</td></tr>
                <tr className="border-t border-gray-200"><td className="px-4 py-3">Zaragoza</td><td className="px-4 py-3">53€</td><td className="px-4 py-3">Confirmat explicit pe site</td></tr>
                <tr className="border-t border-gray-200"><td className="px-4 py-3">Ciudad Real</td><td className="px-4 py-3">53€</td><td className="px-4 py-3">Exclusiv numerar</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        id: 'legaturi',
        title: 'Pagini conexe utile',
        content: quickLinks([
          [spainCoreLinks.passport, 'Hub pașaport Spania', 'Toate fluxurile de pașaport din Spania, într-un singur loc.', undefined],
          ['/pasaport-consulat-madrid', 'Consulat Madrid', 'Unde apare excepția 60€ pentru CRDS.', 'orange'],
          ['/pasaport-consulat-zaragoza', 'Consulat Zaragoza', 'Unul dintre puținele consulate care confirmă clar taxa de 53€.', undefined],
          [spainCoreLinks.passportCrds, 'Pașaport CRDS', 'Pentru cei care au domiciliul în Spania.', undefined],
        ]),
      },
    ],
    finalCtaTitle: 'Vrei lista completă pentru cazul tău?',
    finalCtaText: 'Wizardul îți spune nu doar taxa de bază, ci și consulatul și fluxul care ți se aplică.',
  },
  'titlu-calatorie-spania': {
    slug: 'titlu-calatorie-spania',
    lpTopic: 'titlu-calatorie-spania',
    title: 'Titlu de călătorie din Spania — Ghid 2026',
    description: 'Titlu de călătorie din Spania: când îl folosești, când ai nevoie de programare și cum diferă regula pe consulate.',
    h1: 'Titlu de călătorie din Spania — când îl folosești și ce îți trebuie',
    intro: 'Dacă nu mai ai pașaport valabil și trebuie să te deplasezi, titlul de călătorie este documentul de urgență pe termen scurt. În Spania, regula practică diferă ușor de la un consulat la altul.',
    tldr: 'Titlul de călătorie este gratuit și valabil pe termen scurt. Pentru urgențe reale există uneori și varianta fără programare, dar regula exactă trebuie confirmată la consulatul tău.',
    ctaHref: '/wizard?problem=titlu-calatorie&country=es',
    ctaLabel: 'Vreau varianta corectă de titlu →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'Consulatele României din Spania · ActeRO',
    faqItems: [
      { question: 'Cât costă titlul de călătorie?', answer: 'Este gratuit la consulatele din Spania.' },
      { question: 'Pot merge fără programare?', answer: 'Uneori da, în urgențe reale, dar merită verificat telefonic consulatul tău înainte să pleci.' },
      { question: 'Este valabil pentru orice călătorie?', answer: 'Este document de urgență, nu înlocuiește pașaportul pe termen lung.' },
      { question: 'Trebuie traducere pentru denunțul de furt?', answer: 'Depinde de consulat. Unele cer traducere autorizată, altele nu.' },
    ],
    howToSteps: [
      { name: 'Verifică dacă intri pe titlu, nu pe pașaport nou', text: 'Titlul rezolvă urgența de deplasare, nu documentul pe termen lung.' },
      { name: 'Alege între standard și urgent', text: 'Dacă ai zbor foarte apropiat, intri pe varianta urgentă.' },
      { name: 'Pregătește dovada situației', text: 'Pașaport expirat, denunț de furt sau alt document justificativ.' },
      { name: 'Contactează consulatul dacă urgența este imediată', text: 'Asta scurtează mult riscul de drum inutil.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Titlu de călătorie Spania', item: `${BASE_URL}${spainCoreLinks.titleStandard}` },
    ],
    sections: [
      {
        id: 'standard-vs-urgent',
        title: 'Titlu standard vs titlu urgent',
        content: quickLinks([
          [spainCoreLinks.titleUrgent, 'Titlu de călătorie urgent', 'Pentru zbor apropiat sau altă urgență cu timp foarte scurt.', 'orange'],
          [spainCoreLinks.passportLost, 'Pașaport pierdut sau furat', 'Dacă vrei să înțelegi și ce faci după urgență.', undefined],
          [spainCoreLinks.passport, 'Pașaport nou după urgență', 'După titlu, următorul pas este pașaportul complet.', undefined],
        ]),
      },
      {
        id: 'consulate',
        title: 'Ce se schimbă de la un consulat la altul',
        content: (
          <div className="space-y-3 text-sm">
            <p className="text-gray-700">Diferențele cele mai importante apar la trei lucruri: dacă urgența merge fără programare, dacă denunțul de furt trebuie tradus și de la ce vârstă trebuie prezent minorul.</p>
            <p className="text-gray-700">Dacă ai dubii, mergi întâi pe ghidul urgent și apoi pe pagina consulatului tău.</p>
          </div>
        ),
      },
    ],
    finalCtaTitle: 'Spune-ne cât de urgent este',
    finalCtaText: 'Wizardul separă titlul standard de titlul urgent și ține cont de regulile din Spania.',
  },
  'titlu-calatorie-urgenta-spania': {
    slug: 'titlu-calatorie-urgenta-spania',
    lpTopic: 'titlu-calatorie-urgenta-spania',
    title: 'Titlu de călătorie urgent din Spania — Ghid 2026',
    description: 'Gratuit, pe flux rapid în cazuri reale de urgență. Când poți merge fără programare și ce documente aduci la consulat.',
    h1: 'Titlu de călătorie urgent din Spania — gratuit, pe flux rapid',
    intro: 'Aceasta este pagina pentru urgențele reale: pașaport expirat, pierdut sau furat și nevoie de plecare rapidă. În practică, acesta este unul dintre cele mai sensibile fluxuri consulare din Spania.',
    tldr: 'Titlul de călătorie urgent este gratuit și poate fi obținut rapid. Fără programare este posibil în unele cazuri, dar nu este o regulă universală pentru toate consulatele din Spania.',
    ctaHref: '/wizard?problem=titlu-calatorie&country=es',
    ctaLabel: 'Vreau pașii exacți pentru urgența mea →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'Consulatele României din Spania · ActeRO',
    faqItems: [
      { question: 'Este gratuit?', answer: 'Da, titlul de călătorie este gratuit în Spania.' },
      { question: 'Se poate emite în aceeași zi?', answer: 'Uneori da, în funcție de urgență și de consulat. Nu trata asta ca pe o garanție universală.' },
      { question: 'Pot merge fără programare?', answer: 'Uneori da, în urgențe reale, dar regula trebuie confirmată direct cu consulatul tău.' },
      { question: 'Ce fac după ce ajung în România?', answer: 'Trebuie să refaci documentul permanent, de regulă pașaportul.' },
    ],
    howToSteps: [
      { name: 'Pregătește dovada urgenței', text: 'Bilet, rezervare, document medical sau altă justificare puternică.' },
      { name: 'Adu documentele de identificare pe care le mai ai', text: 'Pașaport expirat, certificat de naștere, denunț de furt sau alt document disponibil.' },
      { name: 'Confirmă telefonic consulatul', text: 'Mai ales dacă vrei să mergi fără programare.' },
      { name: 'După urgență, rezolvă documentul permanent', text: 'Pașaportul nou sau alt act de identitate rămâne pasul următor.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Titlu de călătorie Spania', item: `${BASE_URL}${spainCoreLinks.titleStandard}` },
      { name: 'Titlu de călătorie urgent', item: `${BASE_URL}${spainCoreLinks.titleUrgent}` },
    ],
    sections: [
      {
        id: 'cand-il-folosesti',
        title: 'Când folosești titlul urgent',
        content: (
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>Pașaport expirat și plecare rapidă</li>
            <li>Pașaport pierdut sau furat și nu mai poți aștepta fluxul standard</li>
            <li>Urgență medicală sau familială documentată</li>
          </ul>
        ),
      },
      {
        id: 'consulate-differences',
        title: 'Unde apar diferențele între consulate',
        content: (
          <div className="space-y-3 text-sm">
            <p className="text-gray-700">La Madrid, Barcelona, Bilbao și Almería, regula pe denunțul de furt este de regulă mai simplă. La Valencia, Zaragoza și Ciudad Real apar cerințe mai stricte de traducere.</p>
            <p className="text-gray-700">Pentru minori, pragul de prezență fizică diferă între consulate.</p>
          </div>
        ),
      },
      {
        id: 'legaturi',
        title: 'Pagini conexe utile',
        content: quickLinks([
          [spainCoreLinks.titleStandard, 'Titlu de călătorie Spania', 'Contextul general al documentului, nu doar varianta urgentă.', undefined],
          [spainCoreLinks.passportLost, 'Pașaport pierdut sau furat în Spania', 'Pentru pasul de după urgență.', 'orange'],
          ['/pasaport-consulat-madrid', 'Consulat Madrid', 'Una dintre cele mai importante pagini locale pentru trafic mare.', undefined],
          ['/pasaport-consulat-barcelona', 'Consulat Barcelona', 'Pentru Cataluña și Baleare.', undefined],
        ]),
      },
    ],
    finalCtaTitle: 'Nu pierde timp cu pașii greșiți',
    finalCtaText: 'Wizardul îți spune dacă ai nevoie de titlu urgent și ce documente aduci la consulatul tău.',
  },
  'pasaport-crds-spania': {
    slug: 'pasaport-crds-spania',
    lpTopic: 'pasaport-crds-spania',
    title: 'Pașaport CRDS din Spania — cu domiciliul înregistrat în Spania',
    description: 'CRDS în Spania: empadronamiento acceptat, taxa 53€, excepția Madrid 60€, documente și reguli pe consulat.',
    h1: 'Pașaport CRDS din Spania — ce este, ce acte trebuie, cât costă',
    intro: 'Dacă locuiești permanent în Spania și ai sau vrei domiciliul înregistrat acolo, aceasta este ramura ta de pașaport. În practică, CRDS este una dintre cele mai căutate proceduri consulare din Spania.',
    tldr: 'CRDS înseamnă domiciliu în Spania. Empadronamiento este acceptat ca dovadă de domiciliu. Taxa de bază este 53€, iar Madrid CRDS ajunge la 60€ prin poștă obligatorie.',
    ctaHref: '/wizard?problem=pasaport&country=es',
    ctaLabel: 'Vreau lista exactă pentru CRDS →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'Consulatele României din Spania · econsulat.ro · ActeRO',
    faqItems: [
      { question: 'Ce înseamnă CRDS?', answer: 'Cetățean român cu domiciliul în străinătate, adică domiciliul tău oficial românesc este în Spania.' },
      { question: 'Empadronamiento este suficient?', answer: 'Da, în Spania este acceptat ca document de domiciliu pentru CRDS.' },
      { question: 'Unde este excepția de cost?', answer: 'La Madrid, unde CRDS se trimite prin poștă și totalul ajunge la 60€.' },
      { question: 'Trebuie fotografii?', answer: 'Nu, fotografia biometrică se face la ghișeu.' },
    ],
    howToSteps: [
      { name: 'Confirmă că intri la CRDS', text: 'Dacă domiciliul oficial românesc este în Spania, nu în România.' },
      { name: 'Pregătește dovada de domiciliu', text: 'Empadronamiento, NIE sau alt document acceptat.' },
      { name: 'Verifică regulile consulatului tău', text: 'Mai ales pentru plată, ridicare și curier.' },
      { name: 'Depune pe econsulat.ro', text: 'Selectezi serviciul de pașaport CRDS și urmezi programarea confirmată.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Pașaport România Spania', item: `${BASE_URL}${spainCoreLinks.passport}` },
      { name: 'Pașaport CRDS Spania', item: `${BASE_URL}${spainCoreLinks.passportCrds}` },
    ],
    sections: [
      {
        id: 'crds',
        title: 'Cum știi dacă intri la CRDS',
        content: (
          <div className="space-y-3 text-sm">
            <p className="text-gray-700">Ai domiciliu în Spania și vrei ca aceasta să fie și adresa oficială românească. Dacă încă ai domiciliul oficial în România, nu intri la CRDS.</p>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
              <p className="font-medium text-blue-900">Documentul care simplifică totul: empadronamiento</p>
              <p className="mt-1 text-blue-800">Poate înlocui în practică alte documente spaniole mai greu de obținut.</p>
            </div>
          </div>
        ),
      },
      {
        id: 'costuri',
        title: 'Cost și diferențe între consulate',
        content: quickLinks([
          [spainCoreLinks.taxPassport, 'Taxa pașaportului în Spania', '53€ vs 59€ și excepția Madrid 60€.', 'orange'],
          ['/pasaport-consulat-madrid', 'Consulat Madrid', 'Aici apare costul total 60€ la CRDS.', undefined],
          [spainCoreLinks.empadronamiento, 'Empadronamiento pentru CRDS', 'Cum îl obții și de ce contează.', 'blue'],
        ]),
      },
      {
        id: 'legaturi',
        title: 'Pagini conexe utile',
        content: quickLinks([
          [spainCoreLinks.passportLost, 'Pașaport pierdut sau furat', 'Dacă documentul nu mai există și ai nevoie de alt flux.', undefined],
          [spainCoreLinks.passportMinor, 'Pașaport minor Spania', 'Pentru cererea copilului.', undefined],
          [spainCoreLinks.passport, 'Hub pașaport Spania', 'Toate categoriile de pașaport într-un singur loc.', undefined],
          [spainCoreLinks.competentConsulate, 'Consulatul competent', 'Verifică dacă te adresezi consulatului corect.', undefined],
        ]),
      },
    ],
    finalCtaTitle: 'Verificăm dacă intri la CRDS',
    finalCtaText: 'Wizardul separă imediat CRDS de domiciliul în România și îți dă lista exactă de documente.',
  },
  'buletin-romania-spania': {
    slug: 'buletin-romania-spania',
    lpTopic: 'buletin-romania-spania',
    title: 'Buletin românesc din Spania — adult, minor, majorat, pierdut',
    description: 'Buletin din Spania: cu domiciliu în România, fără domiciliu, majorat, minor sau pierdut. Ghid 2026 pentru toate ramurile.',
    h1: 'Buletin românesc din Spania — CRDS sau domiciliu în România?',
    intro: 'La buletin, Spania are mai multe ramuri distincte decât pare la prima vedere: adult, minor, majorat, cu domiciliu în România, fără domiciliu sau document pierdut.',
    tldr: 'Pentru Spania există ramuri separate pentru adult, minor și majorat. Contează dacă mai ai domiciliu activ în România și dacă documentul este expirat sau pierdut.',
    ctaHref: '/wizard?problem=buletin&country=es',
    ctaLabel: 'Vreau varianta corectă de buletin →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'ActeRO · reguli de produs Spania · fluxuri buletin',
    faqItems: [
      { question: 'Contează dacă cererea este pentru adult sau minor?', answer: 'Da, în Spania există ghiduri distincte pentru adult și minor.' },
      { question: 'Contează dacă este majorat?', answer: 'Da. Există o ramură separată pentru primul buletin după împlinirea vârstei de 18 ani.' },
      { question: 'Contează dacă mai ai domiciliu în România?', answer: 'Da, acesta este unul dintre criteriile principale de separare a ghidurilor.' },
      { question: 'Există și ghid separat pentru document pierdut?', answer: 'Da, documentul pierdut/furat merge pe o ramură dedicată.' },
    ],
    howToSteps: [
      { name: 'Alege statutul documentului', text: 'Expirat, pierdut/furat sau primul buletin.' },
      { name: 'Spune dacă este adult sau minor', text: 'În Spania această distincție schimbă ghidul.' },
      { name: 'Verifică domiciliul oficial', text: 'Domiciliu în România vs fără domiciliu în România.' },
      { name: 'Vezi dacă e caz de majorat', text: 'Dacă treci de la buletin de minor la adult, există ghid special.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Buletin România Spania', item: `${BASE_URL}${spainCoreLinks.buletin}` },
    ],
    sections: [
      {
        id: 'ramuri',
        title: 'Ramurile principale de buletin din Spania',
        content: (
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-3 text-sm">
              <p className="font-medium text-gray-900">Cu domiciliu în România</p>
              <p className="mt-1 text-gray-600">Adult, minor și varianta de majorat.</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-3 text-sm">
              <p className="font-medium text-gray-900">Fără domiciliu în România</p>
              <p className="mt-1 text-gray-600">Adult și minor, pe ramuri distincte.</p>
            </div>
            <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 text-sm">
              <p className="font-medium text-orange-900">Document pierdut/furat</p>
              <p className="mt-1 text-orange-800">Merge pe o ramură separată, indiferent de restul diferențelor.</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm">
              <p className="font-medium text-blue-900">Majorat</p>
              <p className="mt-1 text-blue-800">Este tratat separat pentru Spania și trebuie identificat corect în wizard.</p>
            </div>
          </div>
        ),
      },
      {
        id: 'legaturi',
        title: 'Pagini conexe utile',
        content: quickLinks([
          [spainCoreLinks.childActs, 'Acte pentru copil născut în Spania', 'Dacă încă nu ai intrat în etapa de buletin, ci în cea de transcriere.', 'blue'],
          [spainCoreLinks.transcription, 'Transcriere naștere Spania', 'Pentru cazurile unde primul act românesc începe cu transcrierea.', undefined],
          [spainCoreLinks.passport, 'Pașaport România Spania', 'Mulți utilizatori au nevoie de ambele fluxuri la distanță mică de timp.', undefined],
          [spainCoreLinks.hub, 'Acte românești Spania', 'Hub-ul principal pentru toate procedurile.', undefined],
        ]),
      },
    ],
    finalCtaTitle: 'Nu vrei să ghicești ramura corectă?',
    finalCtaText: 'Wizardul Spania separă adult, minor, majorat și pierdut/furat fără să te trimită pe ghidul greșit.',
  },
  'procura-notariala-spania': {
    slug: 'procura-notariala-spania',
    lpTopic: 'procura-notariala-spania',
    title: 'Procură notarială din Spania — Gratuită, aceeași zi',
    description: 'Procura la consulatul român din Spania este gratuită, se face pe econsulat.ro și este valabilă direct în România fără apostilă.',
    h1: 'Procură notarială din Spania — gratuită, eliberată în aceeași zi',
    intro: 'Spania este una dintre țările în care procura consulară este mult mai simplă decât în alte state: fără RNNEPR, fără apostilă și, în practică, cu eliberare foarte rapidă.',
    tldr: 'Procura consulară din Spania este 0€. Se face cu programare pe econsulat.ro și este valabilă direct în România fără apostilă sau alte legalizări.',
    ctaHref: '/wizard?problem=procura&country=es',
    ctaLabel: 'Vreau ghidul pentru procura mea →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'Consulatele României din Spania · econsulat.ro · ActeRO',
    faqItems: [
      { question: 'Cât costă procura consulară în Spania?', answer: '0€. RNNEPR nu se aplică în Spania.' },
      { question: 'Este valabilă în România fără apostilă?', answer: 'Da, direct.' },
      { question: 'Există și procură pentru pensie?', answer: 'Da, iar în produsul ActeRO este tratată distinct pentru Spania.' },
      { question: 'Pot face procură pentru vânzare imobil?', answer: 'Da, dacă ai datele complete ale proprietății și textul potrivit.' },
    ],
    howToSteps: [
      { name: 'Alege tipul procurii', text: 'Generală, pensie, vânzare imobil sau alt scop.' },
      { name: 'Pregătește textul și datele', text: 'Mai ales dacă este vorba de proprietate sau instituții concrete din România.' },
      { name: 'Programează-te pe econsulat.ro', text: 'Acte notariale → procuri.' },
      { name: 'Ridici procura în aceeași zi', text: 'Fără costuri consulare în Spania.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Procură notarială Spania', item: `${BASE_URL}${spainCoreLinks.procuraHub}` },
    ],
    sections: [
      {
        id: 'tipuri',
        title: 'Ce tipuri de procuri apar cel mai des',
        content: quickLinks([
          [spainCoreLinks.procuraSale, 'Procură vânzare proprietate', 'Când vinzi sau semnezi prin mandatar în România.', undefined],
          ['/wizard?problem=procura&country=es', 'Procură pensie', 'Ramura separată din produs pentru Casa de Pensii și reprezentare.', 'blue'],
          [spainCoreLinks.booking, 'Programare la consulat', 'Pașii de programare pe econsulat.ro.', undefined],
          [spainCoreLinks.hub, 'Acte românești Spania', 'Hub-ul principal, dacă încă nu e clar că ai nevoie de procură.', undefined],
        ]),
      },
      {
        id: 'de-ce-e-simplu',
        title: 'De ce este mai simplu în Spania',
        content: (
          <div className="space-y-3 text-sm">
            <div className="rounded-lg border border-green-200 bg-green-50 p-3">
              <p className="font-medium text-green-900">Fără RNNEPR</p>
              <p className="mt-1 text-green-800">În Spania nu se aplică taxa de registru notarial care complică Germania sau Italia.</p>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-3">
              <p className="font-medium text-green-900">Fără apostilă</p>
              <p className="mt-1 text-green-800">Procura consulară este valabilă direct în România.</p>
            </div>
          </div>
        ),
      },
    ],
    finalCtaTitle: 'Nu știi dacă ai nevoie de procură generală, pensie sau vânzare?',
    finalCtaText: 'Wizardul Spania separă aceste ramuri și îți arată exact ghidul potrivit.',
  },
  'empadronamiento-pasaport-roman': {
    slug: 'empadronamiento-pasaport-roman',
    lpTopic: 'empadronamiento-pasaport-roman',
    title: 'Empadronamiento pentru pașaport românesc CRDS',
    description: 'Empadronamiento-ul este acceptat ca dovadă de domiciliu pentru CRDS la consulatele române din Spania. Ce este și cum îl obții.',
    h1: 'Empadronamiento — documentul spaniol care simplifică pașaportul românesc CRDS',
    intro: 'Această pagină există pentru una dintre cele mai importante scurtături legitime din Spania: empadronamiento-ul poate fi folosit ca dovadă de domiciliu pentru CRDS.',
    tldr: 'Empadronamiento este dovada de domiciliu de la ayuntamiento și poate fi suficient pentru CRDS. Se obține mai simplu decât alte documente de rezidență și este acceptat de consulatele române din Spania.',
    ctaHref: '/wizard?problem=pasaport&country=es',
    ctaLabel: 'Vreau ghidul meu de pașaport CRDS →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'Consulatele României din Spania · ayuntamiento · ActeRO',
    faqItems: [
      { question: 'Empadronamiento înlocuiește NIE-ul?', answer: 'Ca dovadă de domiciliu pentru CRDS, da, în multe cazuri este suficient.' },
      { question: 'Se obține greu?', answer: 'De regulă nu. Este de obicei mai simplu decât alte documente de rezidență spaniole.' },
      { question: 'Unde îl obțin?', answer: 'La ayuntamiento-ul localității unde locuiești.' },
      { question: 'La ce proceduri îl folosesc?', answer: 'Mai ales la pașaportul CRDS și alte proceduri unde trebuie dovedit domiciliul în Spania.' },
    ],
    howToSteps: [
      { name: 'Mergi la ayuntamiento', text: 'Cu documentul de identitate și dovada adresei.' },
      { name: 'Ceri certificado de empadronamiento', text: 'Acesta este documentul util pentru consulat.' },
      { name: 'Folosește-l în dosarul CRDS', text: 'Îl încarci la pasaportul CRDS sau alte proceduri de domiciliu.' },
      { name: 'Verifică să fie recent', text: 'Pentru siguranță, folosește un document emis recent.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Empadronamiento pentru CRDS', item: `${BASE_URL}${spainCoreLinks.empadronamiento}` },
    ],
    sections: [
      {
        id: 'de-ce-conteaza',
        title: 'De ce contează atât de mult',
        content: (
          <div className="space-y-3 text-sm">
            <p className="text-gray-700">În multe cazuri, empadronamiento te scapă de așteptarea după alte documente de rezidență spaniole și îți permite să deschizi dosarul CRDS mai repede.</p>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
              <p className="font-medium text-blue-900">Este una dintre diferențele reale dintre Spania și alte țări</p>
              <p className="mt-1 text-blue-800">Acesta este și motivul pentru care merită o pagină SEO separată.</p>
            </div>
          </div>
        ),
      },
      {
        id: 'legaturi',
        title: 'Pagini conexe utile',
        content: quickLinks([
          [spainCoreLinks.passportCrds, 'Pașaport CRDS Spania', 'Procedura în care empadronamiento este cel mai util.', undefined],
          [spainCoreLinks.passport, 'Hub pașaport Spania', 'Toate categoriile de pașaport.', undefined],
          [spainCoreLinks.hub, 'Acte românești Spania', 'Hub-ul principal.', undefined],
        ]),
      },
    ],
    finalCtaTitle: 'Verificăm dacă empadronamiento este suficient pentru tine',
    finalCtaText: 'Wizardul Spania te duce pe fluxul corect de CRDS, fără să complici inutil dosarul.',
  },
  'acte-copil-nascut-in-spania': {
    slug: 'acte-copil-nascut-in-spania',
    lpTopic: 'acte-copil-nascut-in-spania',
    title: 'Copil născut în Spania — ce acte românești îi trebuie',
    description: 'Ordinea corectă pentru copil născut în Spania: transcriere, pașaport, apoi alte acte. Ghid 2026 pentru părinți.',
    h1: 'Copil născut în Spania — ce acte românești îi trebuie și în ce ordine',
    intro: 'Aceasta este pagina pentru părinții care încep de la zero: copil născut în Spania, fără acte românești, și nevoie de traseu clar fără pași inversați.',
    tldr: 'Ordinea contează: mai întâi transcrierea nașterii, apoi pașaportul românesc și, mai târziu, celelalte acte. Dacă sari peste ordine, te blochezi.',
    ctaHref: '/wizard?problem=transcriere-nastere&country=es',
    ctaLabel: 'Vreau traseul complet pentru copil →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'Consulatele României din Spania · ActeRO',
    faqItems: [
      { question: 'Care este primul pas?', answer: 'În mod normal, transcrierea certificatului de naștere în registrele românești.' },
      { question: 'Se poate direct pașaportul?', answer: 'De regulă nu. Mai întâi trebuie să existe actul românesc de bază.' },
      { question: 'Am nevoie de apostilă?', answer: 'Nu întotdeauna. Certificado Plurilingüe simplifică mult procedura.' },
      { question: 'Unde intră pașaportul minorului?', answer: 'După transcriere, pe ghidul dedicat pentru pașaport minor.' },
    ],
    howToSteps: [
      { name: 'Obține actul spaniol potrivit', text: 'Ideal, Certificado Plurilingüe sau forma cerută de consulat.' },
      { name: 'Fă transcrierea', text: 'Acesta este pasul-cheie care deschide restul procedurilor românești.' },
      { name: 'Treci la pașaportul minorului', text: 'După transcriere, poți merge spre pașaportul pentru copil.' },
      { name: 'Planifică restul actelor', text: 'În funcție de vârstă și de domiciliu, urmează și alte documente.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Acte copil născut în Spania', item: `${BASE_URL}${spainCoreLinks.childActs}` },
    ],
    sections: [
      {
        id: 'ordine',
        title: 'Ordinea corectă a actelor',
        content: quickLinks([
          [spainCoreLinks.transcription, '1. Transcriere naștere', 'Pasul de bază și cel mai important.', 'blue'],
          [spainCoreLinks.passportMinor, '2. Pașaport minor', 'Pasul următor pentru document de călătorie.', undefined],
          [spainCoreLinks.buletin, '3. Buletin / alte acte', 'Apare mai târziu, în funcție de vârstă și situație.', undefined],
        ]),
      },
      {
        id: 'ce-eviti',
        title: 'Greșeli frecvente',
        content: (
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>Începi cu pașaportul înainte de transcriere</li>
            <li>Pregătești traduceri inutile pentru acte plurilingve</li>
            <li>Nu verifici consulatul competent după provincia unde locuiești</li>
          </ul>
        ),
      },
    ],
    finalCtaTitle: 'Spune-ne de unde pornești',
    finalCtaText: 'Wizardul îți arată ordinea corectă pentru copilul născut în Spania, fără pași inversați.',
  },
  'transcriere-nastere-spania': {
    slug: 'transcriere-nastere-spania',
    lpTopic: 'transcriere-nastere-spania',
    title: 'Transcriere certificat de naștere din Spania — ghid complet 2026',
    description: 'Cum transcrii certificatul de naștere spaniol în România prin consulat. Acte, apostilă, traduceri și pașii practici.',
    h1: 'Transcriere certificat de naștere din Spania — ghid complet 2026',
    intro: 'Aceasta este una dintre cele mai importante proceduri pentru familiile din Spania: fără transcriere, copilul nu poate intra corect în restul fluxurilor de acte românești.',
    tldr: 'Pentru copil născut în Spania, transcrierea nașterii este primul pas. Certificado Plurilingüe simplifică mult procedura și poate elimina apostila și traducerea.',
    ctaHref: '/wizard?problem=transcriere-nastere&country=es',
    ctaLabel: 'Vreau pașii exacți pentru transcriere →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'Consulatele României din Spania · ActeRO',
    faqItems: [
      { question: 'Ce variantă de certificat spaniol ajută cel mai mult?', answer: 'Certificado Plurilingüe este de regulă varianta cea mai simplă.' },
      { question: 'Când am nevoie de apostilă?', answer: 'Nu pentru toate actele. Depinde mult de tipul certificatului emis de autoritatea spaniolă.' },
      { question: 'Când am nevoie de traducere?', answer: 'Nu întotdeauna. Dacă ai Certificado Plurilingüe, de multe ori eviți traducerea.' },
      { question: 'Ce fac după transcriere?', answer: 'De obicei pașaportul minorului este pasul imediat următor.' },
    ],
    howToSteps: [
      { name: 'Alege forma potrivită a certificatului', text: 'Dacă poți, mergi pe varianta plurilingvă.' },
      { name: 'Verifică dacă ai nevoie de apostilă sau traducere', text: 'Nu presupune automat că trebuie ambele.' },
      { name: 'Depune la consulatul competent', text: 'După zona ta din Spania.' },
      { name: 'După transcriere, mergi la pașaport minor', text: 'Acesta este traseul cel mai frecvent.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Transcriere naștere Spania', item: `${BASE_URL}${spainCoreLinks.transcription}` },
    ],
    sections: [
      {
        id: 'plurilingv',
        title: 'Certificado Plurilingüe vs alte variante',
        content: (
          <div className="space-y-3 text-sm">
            <div className="rounded-lg border border-green-200 bg-green-50 p-3">
              <p className="font-medium text-green-900">Certificado Plurilingüe</p>
              <p className="mt-1 text-green-800">Este varianta care simplifică cel mai mult dosarul pentru consulatul român.</p>
            </div>
            <div className="rounded-lg border border-orange-200 bg-orange-50 p-3">
              <p className="font-medium text-orange-900">Alte forme de certificat</p>
              <p className="mt-1 text-orange-800">Pot necesita apostilă Haga și/sau traducere autorizată, în funcție de conținut și consulat.</p>
            </div>
          </div>
        ),
      },
      {
        id: 'legaturi',
        title: 'Pagini conexe utile',
        content: quickLinks([
          [spainCoreLinks.childActs, 'Acte copil născut în Spania', 'Ordinea completă a pașilor pentru părinți.', undefined],
          [spainCoreLinks.passportMinor, 'Pașaport minor Spania', 'Pasul următor frecvent după transcriere.', undefined],
          [spainCoreLinks.apostille, 'Apostila Haga în Spania', 'Când este necesară și unde o obții corect.', 'orange'],
          [spainCoreLinks.translator, 'Traducător autorizat în Spania', 'Pentru cazurile unde ai nevoie de traducere acceptată la consulat.', undefined],
        ]),
      },
    ],
    finalCtaTitle: 'Nu complica dosarul copilului',
    finalCtaText: 'Wizardul îți spune ce tip de ghid se aplică și ce documente contează cu adevărat pentru transcriere.',
  },
  'pasaport-minor-spania': {
    slug: 'pasaport-minor-spania',
    lpTopic: 'pasaport-minor-spania',
    title: 'Pașaport pentru copilul tău din Spania — ghid 2026',
    description: 'Pașaport minor din Spania: după transcriere, documente, prezența copilului și diferențe între consulate.',
    h1: 'Pașaport pentru copilul tău din Spania — ghid 2026',
    intro: 'Această pagină este pentru părinții care au trecut sau sunt aproape să treacă de transcriere și au nevoie de pașaportul românesc pentru copil.',
    tldr: 'Pașaportul minorului vine, de regulă, după transcriere. Contează actele părinților, prezența copilului și consulatul competent.',
    ctaHref: '/wizard?problem=pasaport&country=es',
    ctaLabel: 'Vreau ghidul pentru pașaportul copilului →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'Consulatele României din Spania · ActeRO',
    faqItems: [
      { question: 'Se poate face înainte de transcriere?', answer: 'De regulă nu. Transcrierea este pasul de bază.' },
      { question: 'Trebuie prezent copilul?', answer: 'Da, pentru pașaport, de regulă da. Pentru alte fluxuri, pragurile de vârstă pot diferi.' },
      { question: 'Contează consulatul?', answer: 'Da, pentru program, ridicare și mici diferențe locale.' },
      { question: 'Trebuie fotografii?', answer: 'Nu, biometria se face la ghișeu.' },
    ],
    howToSteps: [
      { name: 'Confirmă că transcrierea este rezolvată', text: 'Fără actul românesc de bază, pașaportul se blochează.' },
      { name: 'Pregătește actele părinților', text: 'Identitate, stare civilă și documentele copilului.' },
      { name: 'Verifică prezența copilului', text: 'Pentru pașaport, regula este în general mai strictă.' },
      { name: 'Depune la consulatul arondat', text: 'Cu programare și documentele originale.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Pașaport România Spania', item: `${BASE_URL}${spainCoreLinks.passport}` },
      { name: 'Pașaport minor Spania', item: `${BASE_URL}${spainCoreLinks.passportMinor}` },
    ],
    sections: [
      {
        id: 'ordine',
        title: 'În ce ordine intră pașaportul minorului',
        content: quickLinks([
          [spainCoreLinks.transcription, 'Transcriere naștere', 'Pasul care, de obicei, vine înainte.', 'blue'],
          [spainCoreLinks.childActs, 'Acte copil născut în Spania', 'Imaginea de ansamblu pentru părinți.', undefined],
          [spainCoreLinks.passport, 'Hub pașaport Spania', 'Dacă vrei să compari și alte ramuri.', undefined],
        ]),
      },
    ],
    finalCtaTitle: 'Verificăm exact situația copilului',
    finalCtaText: 'Wizardul separă cererea pentru minor de cea pentru adult și te duce pe ghidul corect.',
  },
  'pasaport-pierdut-furat-spania': {
    slug: 'pasaport-pierdut-furat-spania',
    lpTopic: 'pasaport-pierdut-furat-spania',
    title: 'Pașaport pierdut sau furat în Spania — ce faci pas cu pas',
    description: 'Pașaport pierdut sau furat în Spania: când mergi pe pașaport nou, când pe titlu urgent și când apare traducerea denunțului.',
    h1: 'Pașaport pierdut sau furat în Spania — ce faci pas cu pas',
    intro: 'Aceasta este una dintre cele mai frecvente situații de panică pentru diaspora: ai rămas fără pașaport și nu știi dacă rezolvi cu titlu de călătorie, cu pașaport nou sau cu ambele.',
    tldr: 'Dacă pașaportul este pierdut sau furat, întâi stabilești urgența: plecare rapidă = titlu de călătorie, altfel pașaport nou. La unele consulate, denunțul trebuie tradus.',
    ctaHref: '/wizard?problem=pasaport&country=es',
    ctaLabel: 'Vreau pașii exacți pentru cazul meu →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'Consulatele României din Spania · ActeRO',
    faqItems: [
      { question: 'Ce fac mai întâi dacă pașaportul a fost furat?', answer: 'Depui denunțul și verifici dacă urgența de călătorie impune titlu de călătorie.' },
      { question: 'Când aleg titlul de călătorie?', answer: 'Când trebuie să pleci foarte repede și nu poți aștepta pașaportul nou.' },
      { question: 'Trebuie tradus denunțul?', answer: 'Depinde de consulat. Unele cer traducere autorizată, altele nu.' },
      { question: 'Există și variantă combinată?', answer: 'Da. Pentru Spania există un flux combinat pentru pașaport CRDS pierdut + urgență.' },
    ],
    howToSteps: [
      { name: 'Stabilește dacă ai urgență', text: 'Acesta este primul criteriu care împarte fluxul.' },
      { name: 'Depune denunțul de furt/pierdere', text: 'Și verifică dacă ai nevoie de traducere.' },
      { name: 'Alege între titlu și pașaport nou', text: 'În unele cazuri, produsul te duce pe varianta combinată.' },
      { name: 'Verifică consulatul tău', text: 'Traducerea și urgența diferă real între consulate.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Pașaport România Spania', item: `${BASE_URL}${spainCoreLinks.passport}` },
      { name: 'Pașaport pierdut sau furat', item: `${BASE_URL}${spainCoreLinks.passportLost}` },
    ],
    sections: [
      {
        id: 'alegere',
        title: 'Titlu de călătorie sau pașaport nou?',
        content: quickLinks([
          [spainCoreLinks.titleUrgent, 'Titlu de călătorie urgent', 'Dacă trebuie să pleci foarte repede.', 'orange'],
          [spainCoreLinks.titleStandard, 'Titlu de călătorie Spania', 'Contextul general al documentului de urgență.', undefined],
          [spainCoreLinks.passportCrds, 'Pașaport CRDS', 'Dacă nu ai urgență și intri pe fluxul standard de înlocuire.', undefined],
        ]),
      },
      {
        id: 'traduceri',
        title: 'Unde apare traducerea denunțului',
        content: quickLinks([
          [spainCoreLinks.translator, 'Traducător autorizat în Spania', 'Când consulatul cere traducere acceptată local.', undefined],
          ['/pasaport-consulat-valencia', 'Consulat Valencia', 'Unul dintre consulatele mai stricte pe traducere.', undefined],
          ['/pasaport-consulat-zaragoza', 'Consulat Zaragoza', 'De asemenea mai strict pe denunț și traduceri.', undefined],
        ]),
      },
    ],
    finalCtaTitle: 'Nu alege la întâmplare între titlu și pașaport',
    finalCtaText: 'Wizardul Spania ține cont de urgență și te duce inclusiv pe varianta combinată, dacă ți se aplică.',
  },
  'procura-vanzare-proprietate-spania': {
    slug: 'procura-vanzare-proprietate-spania',
    lpTopic: 'procura-vanzare-proprietate-spania',
    title: 'Procură pentru vânzarea unui imobil din România — din Spania',
    description: 'Cum faci din Spania procura pentru vânzarea unui apartament, teren sau casă din România. Ce date trebuie să ai pregătite.',
    h1: 'Procură pentru vânzarea unui imobil din România — din Spania',
    intro: 'Această pagină este pentru una dintre cele mai sensibile procuri: cea de vânzare imobiliară. Aici contează foarte mult să ai datele corecte înainte de programare.',
    tldr: 'Procura de vânzare se face gratuit la consulatul român din Spania, dar textul trebuie pregătit corect: adresă imobil, cadastru, carte funciară și datele mandatarului.',
    ctaHref: '/wizard?problem=procura&country=es',
    ctaLabel: 'Vreau ghidul pentru procura mea imobiliară →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'Consulatele României din Spania · ActeRO',
    faqItems: [
      { question: 'Este gratuită?', answer: 'Da, ca toate procurile consulare din Spania.' },
      { question: 'Ce date trebuie să am?', answer: 'Datele complete ale imobilului, inclusiv număr cadastral și carte funciară, plus mandatarul.' },
      { question: 'Trebuie apostilă?', answer: 'Nu, procura consulară este valabilă direct în România.' },
      { question: 'Trebuie notar român ales deja?', answer: 'Ajută mult, dar nu este obligatoriu din primul moment.' },
    ],
    howToSteps: [
      { name: 'Strânge datele imobilului', text: 'Adresă, număr cadastral, carte funciară și orice date cerute de notar.' },
      { name: 'Pregătește datele mandatarului', text: 'Persoana care va semna în România.' },
      { name: 'Programează-te pe econsulat.ro', text: 'Pe fluxul de procuri notariale.' },
      { name: 'Verifică textul înainte de semnare', text: 'Aici nu merită să improvizezi.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Procură notarială Spania', item: `${BASE_URL}${spainCoreLinks.procuraHub}` },
      { name: 'Procură vânzare proprietate', item: `${BASE_URL}${spainCoreLinks.procuraSale}` },
    ],
    sections: [
      {
        id: 'date-necesare',
        title: 'Ce date trebuie să ai înainte de programare',
        content: (
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>Adresa completă a imobilului</li>
            <li>Numărul cadastral și numărul de carte funciară</li>
            <li>Datele mandatarului din România</li>
            <li>Ideal, textul pregătit sau verificat de notarul din România</li>
          </ul>
        ),
      },
      {
        id: 'legaturi',
        title: 'Pagini conexe utile',
        content: quickLinks([
          [spainCoreLinks.procuraHub, 'Procura notarială Spania', 'Hub-ul pentru toate tipurile de procuri.', undefined],
          [spainCoreLinks.booking, 'Programare la consulat în Spania', 'Pentru pașii practici pe econsulat.ro.', undefined],
          [spainCoreLinks.hub, 'Acte românești Spania', 'Hub-ul general al clusterului Spania.', undefined],
        ]),
      },
    ],
    finalCtaTitle: 'Nu risca o procură incompletă',
    finalCtaText: 'Wizardul îți spune exact dacă intri la procura de vânzare și ce trebuie pregătit înainte de consulat.',
  },
  'programare-consulat-roman-spania': {
    slug: 'programare-consulat-roman-spania',
    lpTopic: 'programare-consulat-spania',
    title: 'Cum faci programare la consulatul român din Spania — ghid econsulat.ro',
    description: 'Programare la consulatul român din Spania pe econsulat.ro: pași, capcane și diferențe locale între consulate.',
    h1: 'Cum faci programare la consulatul român din Spania — ghid econsulat.ro',
    intro: 'Pagina aceasta este pentru utilizatorii care știu deja ce serviciu vor, dar se blochează la programarea efectivă pe econsulat.ro sau la alegerea consulatului potrivit.',
    tldr: 'În Spania, programarea standard se face pe econsulat.ro. Capcanele reale sunt alegerea consulatului greșit, serviciul greșit și neînțelegerea excepțiilor locale.',
    ctaHref: '/wizard?country=es',
    ctaLabel: 'Vreau să aflu întâi serviciul corect →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'econsulat.ro · consulatele României din Spania · ActeRO',
    faqItems: [
      { question: 'Se face totul prin econsulat.ro?', answer: 'Pentru majoritatea serviciilor, da.' },
      { question: 'Care este cea mai frecventă greșeală?', answer: 'Programarea pe consulatul greșit, mai ales în zonele cu excepții pe provincie.' },
      { question: 'Titlul urgent are aceleași reguli?', answer: 'Nu întotdeauna. Urgențele se pot verifica direct cu consulatul.' },
      { question: 'Trebuie să aleg serviciul foarte exact?', answer: 'Da. Serviciul greșit te poate bloca sau poate face programarea inutilă.' },
    ],
    howToSteps: [
      { name: 'Identifică serviciul corect', text: 'Pașaport, titlu, procură, transcriere etc.' },
      { name: 'Verifică consulatul competent', text: 'Nu merge după presupuneri, mai ales în Spania.' },
      { name: 'Încarcă documentele cerute', text: 'În funcție de procedură.' },
      { name: 'Păstrează confirmarea și instrucțiunile', text: 'Mai ales pentru pașii din ziua programării.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Programare consulat Spania', item: `${BASE_URL}${spainCoreLinks.booking}` },
    ],
    sections: [
      {
        id: 'capcane',
        title: 'Cele mai frecvente capcane',
        content: (
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>Alegi consulatul greșit pentru provincia ta</li>
            <li>Intri pe serviciul greșit în locul fluxului corect</li>
            <li>Presupui că regula unui consulat se aplică și altuia</li>
          </ul>
        ),
      },
      {
        id: 'legaturi',
        title: 'Pagini conexe utile',
        content: quickLinks([
          [spainCoreLinks.competentConsulate, 'Consulatul competent', 'Ca să nu începi programarea pe zona greșită.', undefined],
          [spainCoreLinks.hub, 'Acte românești Spania', 'Dacă încă nu e clar ce serviciu ți se aplică.', undefined],
          [spainCoreLinks.passport, 'Pașaport România Spania', 'Unul dintre cele mai frecvente servicii programate.', undefined],
          [spainCoreLinks.procuraHub, 'Procură notarială Spania', 'O altă categorie frecventă de programare.', undefined],
        ]),
      },
    ],
    finalCtaTitle: 'Mai întâi ghidul corect, apoi programarea',
    finalCtaText: 'Wizardul îți spune serviciul exact, ca să nu pierzi timp cu programarea greșită.',
  },
  'consulat-competent-spania': {
    slug: 'consulat-competent-spania',
    lpTopic: 'consulat-competent-spania',
    title: 'Care este consulatul român competent în Spania',
    description: 'Consulatul român competent în Spania depinde de comunitatea autonomă și uneori de provincie. Tabel complet și excepții.',
    h1: 'Care este consulatul român competent pentru zona ta din Spania',
    intro: 'Aceasta este pagina care rezolvă una dintre cele mai frecvente surse de eroare: alegerea consulatului greșit. În Spania, unele comunități sunt împărțite pe provincii.',
    tldr: 'Consulatul competent depinde de comunitatea autonomă și, în câteva cazuri, de provincie. Castilla y León, Castilla-La Mancha și Andaluzia sunt cele mai importante zone cu excepții.',
    ctaHref: '/wizard?country=es',
    ctaLabel: 'Vreau să-mi afl consulatul corect →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'MAE Spania · ActeRO',
    faqItems: [
      { question: 'De ce nu pot alege consulatul intuitiv?', answer: 'Pentru că în Spania competența consulară nu urmează mereu exact comunitatea autonomă întreagă.' },
      { question: 'Care sunt cele mai importante excepții?', answer: 'Burgos merge la Bilbao, Guadalajara merge la Madrid, iar Andaluzia este împărțită între Sevilla și Almería.' },
      { question: 'Murcia unde merge?', answer: 'La Almería.' },
      { question: 'Canarele unde merg?', answer: 'La Madrid.' },
    ],
    howToSteps: [
      { name: 'Identifică provincia exactă', text: 'Nu este suficient doar să știi comunitatea autonomă.' },
      { name: 'Verifică excepțiile mari', text: 'Burgos, Guadalajara și Andaluzia sunt cele mai importante.' },
      { name: 'Intră pe pagina consulatului', text: 'Acolo vezi și programul, plata și regulile locale.' },
      { name: 'Abia apoi programează-te', text: 'Asta te scapă de programări anulate sau inutile.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Consulat competent Spania', item: `${BASE_URL}${spainCoreLinks.competentConsulate}` },
    ],
    sections: [
      {
        id: 'tabel',
        title: 'Tabel complet pe zone',
        content: (
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 text-sm">
                <p className="font-medium text-orange-900">Burgos este excepție</p>
                <p className="mt-1 text-orange-800">Deși este în Castilla y León, Burgos merge la Bilbao, nu la Madrid.</p>
              </div>
              <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 text-sm">
                <p className="font-medium text-orange-900">Guadalajara este excepție</p>
                <p className="mt-1 text-orange-800">Deși este în Castilla-La Mancha, Guadalajara merge la Madrid, nu la Ciudad Real.</p>
              </div>
              <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 text-sm">
                <p className="font-medium text-orange-900">Andaluzia este împărțită</p>
                <p className="mt-1 text-orange-800">Vestul merge la Sevilla, iar Almería, Granada și Jaén merg la Almería.</p>
              </div>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Zonă</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Consulat</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(consulateRegions).map(([id, regions]) => (
                    <tr key={id} className="border-t border-gray-200">
                      <td className="px-4 py-3">{regions.join(', ')}</td>
                      <td className="px-4 py-3">
                        <Link href={consulatePageSlugById[id as SpainConsulateId]} className="underline">
                          {spainConsulates[id as SpainConsulateId].name.replace('Consulatul General al României la ', '').replace('Consulatul României la ', '')}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        id: 'legaturi',
        title: 'Pagini conexe utile',
        content: quickLinks([
          ['/pasaport-consulat-madrid', 'Consulat Madrid', 'Pentru Madrid, Canare și mai multe excepții din Castilia.', undefined],
          ['/pasaport-consulat-bilbao', 'Consulat Bilbao', 'Important pentru Burgos și nordul Spaniei.', undefined],
          ['/pasaport-consulat-almeria', 'Consulat Almería', 'Pentru sud-est și Murcia.', undefined],
          [spainCoreLinks.booking, 'Programare consulat Spania', 'După ce știi sigur consulatul.', undefined],
          ['/consulat-madrid-vs-barcelona', 'Madrid vs Barcelona', 'Comparația rapidă dintre cele mai căutate două consulate din Spania.', undefined],
        ]),
      },
    ],
    finalCtaTitle: 'Nu începe cu consulatul greșit',
    finalCtaText: 'Wizardul ActeRO îți derivă automat consulatul în funcție de regiune și provincie.',
  },
  'apostila-haga-spania': {
    slug: 'apostila-haga-spania',
    lpTopic: 'apostila-haga-spania',
    title: 'Apostila Haga pentru acte spaniole — TSJ, nu notarul',
    description: 'Apostila Haga pe acte spaniole de stare civilă se obține la Tribunalul Superior de Justicia, nu la notar. Ghid practic 2026.',
    h1: 'Apostila Haga în Spania — cum o obții gratuit și de ce nu merge la notar',
    intro: 'Această pagină există pentru o confuzie foarte costisitoare: mulți utilizatori ajung la notar pentru apostilă, deși pentru actele de stare civilă spaniole traseul corect este altul.',
    tldr: 'Pentru actele spaniole de stare civilă, apostila Haga se obține la TSJ, nu la notar. Notarul nu este drumul corect pentru această categorie de acte.',
    ctaHref: '/wizard?problem=transcriere-nastere&country=es',
    ctaLabel: 'Vreau ghidul de transcriere corect →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'TSJ · consulatele României din Spania · ActeRO',
    faqItems: [
      { question: 'Unde se obține apostila?', answer: 'La Tribunalul Superior de Justicia competent.' },
      { question: 'Notarul poate pune apostila corect?', answer: 'Nu pentru această categorie de acte de stare civilă spaniole.' },
      { question: 'Este gratuită?', answer: 'În practică, acesta este unul dintre avantajele procedurii corecte la TSJ.' },
      { question: 'Când nu am nevoie de apostilă?', answer: 'Când ai certificatul potrivit, de exemplu forma plurilingvă acceptată de procedură.' },
    ],
    howToSteps: [
      { name: 'Verifică dacă ai într-adevăr nevoie de apostilă', text: 'Nu toate certificatele spaniole o cer.' },
      { name: 'Dacă da, mergi la TSJ', text: 'Nu la notar.' },
      { name: 'Verifică și traducerea', text: 'În unele cazuri apostila și traducerea sunt probleme separate.' },
      { name: 'Continuă apoi cu procedura românească', text: 'Mai ales transcrierea nașterii.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Apostila Haga Spania', item: `${BASE_URL}${spainCoreLinks.apostille}` },
    ],
    sections: [
      {
        id: 'cand',
        title: 'Când apare apostila în clusterul Spania',
        content: quickLinks([
          [spainCoreLinks.transcription, 'Transcriere naștere Spania', 'Aici apare cel mai des întrebarea despre apostilă.', undefined],
          [spainCoreLinks.childActs, 'Acte copil născut în Spania', 'Ordinea completă a pașilor pentru părinți.', undefined],
        ]),
      },
    ],
    finalCtaTitle: 'Nu pierde timp la instituția greșită',
    finalCtaText: 'Wizardul și ghidurile ActeRO îți spun când ai nevoie de apostilă și când nu.',
  },
  'traducator-autorizat-spania': {
    slug: 'traducator-autorizat-spania',
    lpTopic: 'traducator-autorizat-spania',
    title: 'Traducător autorizat pentru acte românești în Spania',
    description: 'Când ai nevoie de traducător autorizat MJ înregistrat la consulat și cum afli lista corectă în Spania.',
    h1: 'Traducător autorizat MJ pentru acte românești în Spania — ce trebuie să știi',
    intro: 'Această pagină clarifică un detaliu care blochează multe dosare: nu orice traducător autorizat te ajută la orice consulat. În Spania contează și înregistrarea locală.',
    tldr: 'Pentru unele proceduri consulare din Spania, traducătorul trebuie să fie autorizat de Ministerul Justiției din România și acceptat la consulatul local.',
    ctaHref: '/wizard?country=es',
    ctaLabel: 'Vreau să văd dacă am nevoie de traducere →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'Consulatele României din Spania · ActeRO',
    faqItems: [
      { question: 'Poate orice traducător autorizat să facă documentul?', answer: 'Nu întotdeauna. Contează și dacă este acceptat la consulatul local.' },
      { question: 'La ce proceduri apare cel mai des problema?', answer: 'La furt de pașaport și la anumite certificate neplurilingve.' },
      { question: 'Cum obțin lista corectă?', answer: 'Direct de la consulatul competent.' },
      { question: 'Certificado Plurilingüe cere traducere?', answer: 'De multe ori nu, tocmai acesta este avantajul lui.' },
    ],
    howToSteps: [
      { name: 'Verifică dacă ai nevoie de traducere', text: 'Nu porni din reflex cu traducere dacă nu este clar necesară.' },
      { name: 'Cere lista de la consulat', text: 'Nu presupune că orice traducător autorizat este acceptat.' },
      { name: 'Leagă traducerea de procedura concretă', text: 'Pașaport pierdut sau transcriere de naștere au reguli diferite.' },
      { name: 'Păstrează copii și dovada autorizării', text: 'Ajută la orice clarificare ulterioară.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Traducător autorizat Spania', item: `${BASE_URL}${spainCoreLinks.translator}` },
    ],
    sections: [
      {
        id: 'cand',
        title: 'Unde apare cel mai des nevoia de traducere',
        content: quickLinks([
          [spainCoreLinks.passportLost, 'Pașaport pierdut sau furat', 'În unele consulate, denunțul trebuie tradus.', 'orange'],
          [spainCoreLinks.transcription, 'Transcriere naștere', 'Mai ales când nu ai varianta plurilingvă.', undefined],
          [spainCoreLinks.apostille, 'Apostila Haga', 'Pentru cazurile unde apostila și traducerea apar împreună.', undefined],
        ]),
      },
    ],
    finalCtaTitle: 'Nu traduce inutil și nici cu persoana greșită',
    finalCtaText: 'Wizardul și ghidurile te ajută să vezi când chiar ai nevoie de traducere în Spania.',
  },
  'consulat-madrid-vs-barcelona': {
    slug: 'consulat-madrid-vs-barcelona',
    lpTopic: 'consulat-madrid-vs-barcelona',
    title: 'Consulatul din Madrid sau Barcelona — cum știi care e al tău',
    description: 'Madrid sau Barcelona depinde de comunitatea autonomă. Diferențe de arondare și reguli cheie între cele două consulate.',
    h1: 'Madrid sau Barcelona — consulatul tău după adresă din Spania',
    intro: 'Aceasta este comparația pentru cea mai mare sursă de trafic și confuzie din Spania: Madrid vs Barcelona. Mulți utilizatori pornesc doar de la orașul mare, fără să verifice arondarea reală.',
    tldr: 'Cataluña și Baleare merg la Barcelona. Madrid, Canare, cea mai mare parte din Castilla y León și Guadalajara merg la Madrid. Regulile locale diferă și ele real.',
    ctaHref: '/wizard?country=es',
    ctaLabel: 'Vreau să aflu consulatul corect →',
    updatedAt: SPAIN_UPDATED_AT,
    sourceNote: 'MAE Madrid · MAE Barcelona · ActeRO',
    faqItems: [
      { question: 'Cataluña unde merge?', answer: 'La Barcelona.' },
      { question: 'Canarele unde merg?', answer: 'La Madrid.' },
      { question: 'Care sunt diferențele cheie între ele?', answer: 'Madrid are card exclusiv și CRDS 60€; Barcelona are adresă nouă și ridicare L-V.' },
      { question: 'Dacă nu sunt sigur, ce fac?', answer: 'Verifici mai întâi pagina despre consulatul competent pentru Spania.' },
    ],
    howToSteps: [
      { name: 'Verifică zona ta', text: 'Cataluña și Baleare = Barcelona; Madrid, Canare și anumite provincii = Madrid.' },
      { name: 'Compară regulile locale', text: 'Nu doar arondarea contează, ci și plata, ridicarea și logistica.' },
      { name: 'Intră pe pagina consulatului corect', text: 'Acolo vezi programul și particularitățile reale.' },
      { name: 'Programează-te abia după aceea', text: 'Asta reduce mult riscul de programare invalidă.' },
    ],
    breadcrumbs: [
      { name: 'ActeRO', item: BASE_URL },
      { name: 'Acte românești Spania', item: `${BASE_URL}${spainCoreLinks.hub}` },
      { name: 'Madrid vs Barcelona', item: `${BASE_URL}/consulat-madrid-vs-barcelona` },
    ],
    sections: [
      {
        id: 'comparatie',
        title: 'Diferențe cheie între Madrid și Barcelona',
        content: quickLinks([
          ['/pasaport-consulat-madrid', 'Consulat Madrid', 'Card exclusiv, ridicare L-Mi, CRDS 60€.', 'orange'],
          ['/pasaport-consulat-barcelona', 'Consulat Barcelona', 'Adresă nouă din 2025 și ridicare L-V.', 'blue'],
          [spainCoreLinks.competentConsulate, 'Consulat competent în Spania', 'Dacă încă nu e clar unde te încadrezi.', undefined],
          [spainCoreLinks.booking, 'Programare la consulat în Spania', 'După ce alegi între Madrid și Barcelona, aici vezi pașii de programare.', undefined],
        ]),
      },
    ],
    finalCtaTitle: 'Nu alege între Madrid și Barcelona după instinct',
    finalCtaText: 'Wizardul derivă consulatul din regiunea selectată și te scapă de comparații greșite.',
  },
  ...Object.fromEntries(
    (['madrid', 'barcelona', 'valencia', 'sevilla', 'bilbao', 'zaragoza', 'ciudadreal', 'almeria'] as SpainConsulateId[]).map((id) => {
      const page = makeConsulatePage(id)
      return [page.slug, page]
    })
  ),
}

export const spainSeoSlugs = Object.keys(spainPages)

export function getSpainSeoPageConfig(slug: string) {
  return spainPages[slug] ?? null
}

export function getSpainSeoMetadata(slug: string): Metadata | null {
  const config = getSpainSeoPageConfig(slug)
  return config ? makeMetadata(config) : null
}

export function renderSpainSeoPage(slug: string) {
  const config = getSpainSeoPageConfig(slug)

  if (!config) {
    notFound()
  }

  return (
    <LlmOptimizedPage
      lpSlug={config.slug}
      lpTopic={config.lpTopic}
      h1={config.h1}
      intro={config.intro}
      tldr={config.tldr}
      ctaHref={config.ctaHref}
      ctaLabel={config.ctaLabel}
      updatedAt={config.updatedAt}
      sourceNote={config.sourceNote}
      updatedAtIso={config.modifiedAt ?? getSpainModifiedAt(config.slug)}
      faqItems={config.faqItems}
      howToSteps={config.howToSteps}
      articleSchema={makeArticleSchema(config)}
      breadcrumbSchema={makeBreadcrumbSchema(config)}
      extraSchemas={config.extraSchemas}
      sections={config.sections}
      finalCtaTitle={config.finalCtaTitle}
      finalCtaText={config.finalCtaText}
    />
  )
}
