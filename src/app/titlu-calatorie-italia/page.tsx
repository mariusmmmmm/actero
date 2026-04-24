import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Titlu de călătorie din Italia — Ghid complet 2026',
  description:
    'Cum revii în România din Italia când nu mai ai pașaport sau buletin valabil. Reguli diferite la Roma, Milano, Bologna, Torino, Trieste, Bari și Catania.',
  keywords: [
    'titlu de calatorie italia',
    'document de calatorie romania italia',
    'titlu de calatorie urgent italia',
    'consulat romania italia fara programare',
  ],
  openGraph: {
    title: 'Titlu de călătorie din Italia — Ghid complet 2026',
    description:
      'Regulile nu sunt identice în toată Italia: unele consulate primesc walk-in, altele cer programare chiar și pentru urgențe.',
    url: 'https://www.actero.ro/titlu-calatorie-italia',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/titlu-calatorie-italia',
  },
}

const faqItems = [
  {
    question: 'Am nevoie de programare pentru titlul de călătorie în Italia?',
    answer:
      'Depinde de consulat. Roma, Milano și Bologna pot prelua anumite urgențe fără programare. Torino cere programare chiar și pentru urgențe. Trieste, Bari și Catania trebuie tratate conservator ca flux cu programare.',
  },
  {
    question: 'Se eliberează în aceeași zi?',
    answer:
      'La Roma, Milano și Bologna, de regulă da, după verificarea identității și a documentelor. La Torino, Trieste, Bari și Catania eliberarea depinde de programare și de verificarea consulatului.',
  },
  {
    question: 'Cât costă titlul de călătorie?',
    answer: 'Titlul de călătorie este gratuit.',
  },
  {
    question: 'Dacă documentul a fost furat, am nevoie de traducere?',
    answer:
      'Ai nevoie de adeverința poliției. În Italia, pentru titlul de călătorie nu se cere de regulă traducere în română.',
  },
]

const howToSteps = [
  {
    name: 'Verifică regula consulatului tău',
    text: 'Italia nu are o regulă unică pentru titlul de călătorie. Unele consulate acceptă urgențe walk-in, altele nu.',
  },
  {
    name: 'Pregătește actul românesc disponibil',
    text: 'Pașaport expirat, buletin expirat, permis românesc sau certificat de naștere cu CNP.',
  },
  {
    name: 'Dacă a fost furt, mergi mai întâi la poliție',
    text: 'Adeverința poliției este obligatorie înainte de consulat.',
  },
  {
    name: 'Prezintă-te la consulat sau fă programarea',
    text: 'Urmează regula consulatului tău: walk-in controlat la unele sedii, programare strictă la altele.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/titlu-calatorie-italia#article',
  headline: 'Titlu de călătorie din Italia — Ghid complet 2026',
  description:
    'Ghid principal pentru titlul de călătorie din Italia: când mergi fără programare, când ai nevoie de programare și ce acte pregătești.',
  datePublished: '2026-04-15',
  dateModified: '2026-04-15',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/titlu-calatorie-italia',
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
      name: 'Acte românești Italia',
      item: 'https://www.actero.ro/acte-romanesti-italia',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Titlu de călătorie Italia',
      item: 'https://www.actero.ro/titlu-calatorie-italia',
    },
  ],
}

export default function TitluCalatorieItaliaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="titlu-calatorie-italia"
      lpTopic="titlu-calatorie-italia"
      h1="Titlu de călătorie din Italia — ghid complet 2026"
      intro="Dacă trebuie să revii în România și nu mai ai pașaport sau buletin valabil, titlul de călătorie poate fi soluția. În Italia, însă, regula diferă real de la un consulat la altul."
      tldr="Titlul de călătorie este gratuit. Roma, Milano și Bologna pot prelua anumite urgențe fără programare. Torino cere programare chiar și pentru urgențe. Trieste, Bari și Catania trebuie tratate conservator ca flux cu programare."
      ctaHref="/wizard?problem=titlu-calatorie&country=it"
      ctaLabel="Arată-mi pașii exacți pentru titlul de călătorie →"
      updatedAt="aprilie 2026"
      sourceNote="Consulatele României din Italia · ActeRO"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        {
          id: 'pe-consulate',
          title: 'Regula diferă pe consulate',
          content: (
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <p className="mb-2 font-semibold text-green-900">Mai flexibile</p>
                <ul className="space-y-1 text-sm text-green-800">
                  <li>Roma: urgențe walk-in L-V 11:00–13:00</li>
                  <li>Milano: urgențe după apel pe linia de urgență</li>
                  <li>Bologna: walk-in cu documente justificative</li>
                </ul>
              </div>
              <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
                <p className="mb-2 font-semibold text-orange-900">Conservatoare</p>
                <ul className="space-y-1 text-sm text-orange-800">
                  <li>Torino: numai cu programare</li>
                  <li>Trieste: fără walk-in confirmat</li>
                  <li>Bari: fără walk-in confirmat</li>
                  <li>Catania: confirmare directă obligatorie</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          id: 'ghid-urgent',
          title: 'Dacă pleci foarte repede',
          content: (
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
              <p className="font-semibold text-blue-900">Pentru cazurile urgente folosește ghidul dedicat</p>
              <p className="mt-2 text-blue-800">
                Dacă ai plecare iminentă, mergi direct la{' '}
                <Link href="/titlu-calatorie-urgenta-italia" className="underline hover:text-blue-950">
                  titlu de călătorie urgent din Italia
                </Link>
                .
              </p>
            </div>
          ),
        },
        {
          id: 'pagini-conexe',
          title: 'Pagini conexe utile',
          content: (
            <div className="grid gap-3 sm:grid-cols-2 text-sm">
              <Link href="/titlu-calatorie-urgenta-italia" className="rounded-lg border border-blue-200 bg-blue-50 p-3 hover:bg-blue-100/60">
                <p className="font-medium text-blue-900">Titlu de călătorie urgent</p>
                <p className="mt-1 text-blue-800">Pentru plecări imediate și excepțiile reale pe consulate.</p>
              </Link>
              <Link href="/pasaport-expirat-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Pașaport expirat în Italia</p>
                <p className="mt-1 text-gray-600">Dacă încă ai timp pentru pașaport, nu pentru titlu de călătorie.</p>
              </Link>
              <Link href="/pasaport-pierdut-furat-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Pașaport pierdut sau furat</p>
                <p className="mt-1 text-gray-600">Pentru situațiile în care trebuie să clarifici mai întâi pașaportul lipsă și documentele de poliție.</p>
              </Link>
              <Link href="/acte-romanesti-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Acte românești din Italia</p>
                <p className="mt-1 text-gray-600">Hub-ul principal pentru toate traseele consulare și cele care cer drum în România.</p>
              </Link>
            </div>
          ),
        },
      ]}
      finalCtaTitle="Nu risca un drum greșit"
      finalCtaText="Wizardul ActeRO îți spune rapid dacă poți merge direct la consulat sau dacă ai nevoie de programare în funcție de consulatul tău din Italia."
    />
  )
}
