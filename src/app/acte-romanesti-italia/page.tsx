import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Acte românești din Italia — Ghid complet 2026',
  description:
    'Pașaport, buletin, titlu de călătorie, procuri și acte pentru copil din Italia. Vezi ce rezolvi la consulat și ce necesită drum în România.',
  keywords: [
    'acte romanesti italia',
    'consulat romania italia acte',
    'pasaport romania italia',
    'buletin romania italia',
    'titlu de calatorie italia',
    'procura notariala italia',
    'transcriere certificat nastere italia',
  ],
  openGraph: {
    title: 'Acte românești din Italia — Ghid complet 2026',
    description:
      'Pagina hub pentru românii din Italia: pașaport, buletin, titlu de călătorie, procuri și acte pentru copil.',
    url: 'https://www.actero.ro/acte-romanesti-italia',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/acte-romanesti-italia',
  },
}

const faqItems = [
  {
    question: 'Ce acte românești pot rezolva din Italia fără să merg în România?',
    answer:
      'Pașaportul, titlul de călătorie, procurile notariale și transcrierea certificatului de naștere se rezolvă prin consulatul României din Italia. Buletinul necesită deplasare în România.',
  },
  {
    question: 'Ce acte necesită prezență fizică în România?',
    answer:
      'Buletinul, fie CEI, fie CIS, necesită prezentare personală la SPCLEP în România. Consulatul nu preia biometria pentru cartea de identitate.',
  },
  {
    question: 'Câte consulate relevante sunt în Italia pentru pașaport?',
    answer:
      'Șapte: Roma, Milano, Bologna, Torino, Trieste, Bari și Catania. Consulatul arondat depinde de regiunea în care locuiești.',
  },
  {
    question: 'Se face totul pe econsulat.ro?',
    answer:
      'Nu chiar. Pașaportul și procurile merg, de regulă, prin econsulat.ro. Titlul de călătorie are excepții pe consulat, iar Bologna are și fluxuri fără programare obligatorie.',
  },
]

const howToSteps = [
  {
    name: 'Alege actul de care ai nevoie',
    text: 'Pașaport, buletin, titlu de călătorie, procură sau acte pentru copil — fiecare are traseul lui.',
  },
  {
    name: 'Verifică dacă se rezolvă la consulat sau în România',
    text: 'Pașaportul, titlul de călătorie și procurile merg prin consulat. Buletinul necesită drum în România.',
  },
  {
    name: 'Află consulatul arondat',
    text: 'Roma, Milano, Bologna, Torino, Trieste, Bari sau Catania — în funcție de regiunea ta din Italia.',
  },
  {
    name: 'Pregătește documentele și programarea',
    text: 'Lista exactă depinde de situația ta și de consulatul tău.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/acte-romanesti-italia#article',
  headline: 'Acte românești din Italia — Ghid complet 2026',
  description:
    'Pagina hub pentru actele românești rezolvate din Italia: pașaport, buletin, titlu de călătorie, procuri și acte pentru copil.',
  datePublished: '2026-04-15',
  dateModified: '2026-04-15',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/acte-romanesti-italia',
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
  ],
}

export default function ActeRomanestiItaliaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="acte-romanesti-italia"
      lpTopic="acte-romanesti-italia"
      h1="Acte românești din Italia — ghid complet 2026"
      intro="Locuiești în Italia și nu e clar dacă actul tău se rezolvă la consulat sau în România? Aici ai hub-ul principal pentru pașaport, buletin, titlu de călătorie, procuri și acte pentru copil."
      tldr="Pașaportul, titlul de călătorie, procurile și transcrierea nașterii se rezolvă prin consulat. Buletinul necesită deplasare în România. Italia are 7 consulate, iar regulile diferă real între ele."
      ctaHref="/wizard?country=it"
      ctaLabel="Arată-mi traseul corect pentru situația mea →"
      updatedAt="aprilie 2026"
      sourceNote="Consulatele României din Italia · econsulat.ro · ActeRO"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        {
          id: 'consulat-vs-romania',
          title: 'Ce rezolvi la consulat și ce rezolvi în România',
          content: (
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <p className="mb-2 font-semibold text-green-900">La consulatul României din Italia</p>
                <ul className="space-y-1 text-sm text-green-800">
                  <li>
                    <Link href="/pasaport-romania-italia" className="underline hover:text-green-900">
                      Pașaport
                    </Link>
                  </li>
                  <li>
                    <Link href="/titlu-calatorie-italia" className="underline hover:text-green-900">
                      Titlu de călătorie
                    </Link>
                  </li>
                  <li>
                    <Link href="/procura-notariala-italia" className="underline hover:text-green-900">
                      Procuri notariale
                    </Link>
                  </li>
                  <li>
                    <Link href="/transcriere-certificat-nastere-italia" className="underline hover:text-green-900">
                      Transcriere certificat de naștere
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
                <p className="mb-2 font-semibold text-orange-900">Necesită deplasare în România</p>
                <ul className="space-y-1 text-sm text-orange-800">
                  <li>
                    <Link href="/buletin-romania-italia" className="underline hover:text-orange-900">
                      Buletinul
                    </Link>
                  </li>
                  <li>Primul buletin după transcriere</li>
                  <li>Unele formalități de domiciliu și evidență a persoanelor</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          id: 'ghiduri',
          title: 'Cele mai importante ghiduri pentru Italia',
          content: (
            <div className="space-y-3">
              {[
                ['/pasaport-romania-italia', 'Pașaport românesc în Italia', 'CRDS, domiciliu România, expirat, pierdut sau copil'],
                ['/buletin-romania-italia', 'Buletin românesc din Italia', 'Ce înseamnă CEI, CIS și prezența obligatorie în România'],
                ['/titlu-calatorie-italia', 'Titlu de călătorie din Italia', 'Când pleci urgent și nu mai ai act valabil'],
                ['/procura-notariala-italia', 'Procură notarială din Italia', 'Proprietate, moștenire, bancă, divorț'],
                ['/programare-consulat-romania-italia', 'Programare la consulat în Italia', 'econsulat.ro și excepțiile importante'],
              ].map(([href, title, desc]) => (
                <Link key={href} href={href} className="block rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </Link>
              ))}
            </div>
          ),
        },
      ]}
      finalCtaTitle="Nu ghici traseul"
      finalCtaText="Wizardul ActeRO îți spune în 30 de secunde dacă rezolvi la consulat, în România și ce pagină ți se aplică exact."
    />
  )
}
