import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Titlu de călătorie urgentă din Germania — Ghid 2026 | ActeRO',
  description: 'Cum obții titlu de călătorie urgentă din Germania spre România: fără programare, gratuit, în aceeași zi, cu prezență fizică obligatorie.',
  keywords: ['titlu de calatorie germania', 'titlu de calatorie urgenta', 'fara programare consulat', 'document de urgenta romania', 'consulat romania germania urgenta'],
  openGraph: {
    title: 'Titlu de călătorie urgentă din Germania — Ghid complet',
    description: 'Fără programare, gratuit, aceeași zi, prezență fizică obligatorie.',
    url: 'https://actero.ro/titlu-calatorie-urgenta-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/titlu-calatorie-urgenta-germania',
  },
}

const faqItems = [
  {
    question: 'Se poate obține titlul de călătorie fără programare?',
    answer: 'Da. Titlul de călătorie românesc se obține fără programare la consulatele României din Germania, în cadrul programului dedicat acestui serviciu.',
  },
  {
    question: 'Cât costă titlul de călătorie?',
    answer: 'Titlul de călătorie este gratuit pentru întoarcerea în România, atunci când îndeplinești condițiile consulare pentru emitere.',
  },
  {
    question: 'Cât este valabil titlul de călătorie?',
    answer: 'Titlul de călătorie este valabil maximum 30 de zile și este emis exclusiv pentru întoarcerea în România.',
  },
  {
    question: 'Ce documente îmi trebuie pentru titlul de călătorie?',
    answer: 'Ai nevoie de documentele de identitate disponibile, de acte civile relevante și, în funcție de situație, de dovezi privind urgența sau imposibilitatea folosirii documentului actual.',
  },
  {
    question: 'Trebuie să merg personal la consulat?',
    answer: 'Da. Prezența fizică este obligatorie pentru eliberarea titlului de călătorie, chiar dacă procedura este rapidă și fără programare.',
  },
]

const howToSteps = [
  { name: 'Verifică programul pentru titlu de călătorie', text: 'Fiecare consulat are un interval dedicat pentru acest serviciu, fără programare prealabilă.' },
  { name: 'Pregătește documentele disponibile', text: 'Ia cu tine actele de identitate, certificatele și orice dovadă relevantă pentru urgență.' },
  { name: 'Mergi personal la consulat', text: 'Prezența fizică este obligatorie pentru verificarea identității.' },
  { name: 'Depune cererea la ghișeu', text: 'Funcționarul consular verifică situația și documentele disponibile.' },
  { name: 'Primește documentul', text: 'În multe cazuri, titlul de călătorie se eliberează în aceeași zi.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/titlu-calatorie-urgenta-germania#article',
  headline: 'Titlu de călătorie urgentă din Germania — Ghid 2026',
  description: 'Ghid pentru obținerea titlului de călătorie din Germania: fără programare, gratuit, aceeași zi.',
  datePublished: '2026-01-01',
  dateModified: '2026-04-01',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/titlu-calatorie-urgenta-germania',
  inLanguage: 'ro',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://actero.ro' },
    { '@type': 'ListItem', position: 2, name: 'Titlu de călătorie urgentă Germania', item: 'https://actero.ro/titlu-calatorie-urgenta-germania' },
  ],
}

export default function TitluCalatorieUrgentaGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="titlu-calatorie-urgenta-germania"
      lpTopic="titlu-calatorie"
      h1="Titlu de călătorie urgentă din Germania?"
      intro="Dacă trebuie să ajungi rapid în România și nu mai poți folosi documentele actuale, titlul de călătorie este soluția de urgență."
      tldr="Titlul de călătorie românesc se obține FĂRĂ programare la orice consulat din Germania, în aceeași zi, GRATUIT. Valabil maximum 30 de zile, exclusiv pentru întoarcerea în România. Prezență fizică obligatorie."
      ctaHref="/wizard?problem=titlu-calatorie"
      ctaLabel="Rezolvă gratuit în 30 de secunde →"
      updatedAt="aprilie 2026"
      sourceNote="consulatele României din Germania"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        {
          id: 'context',
          title: 'Cea mai importantă informație: fără programare',
          content: (
            <div className="rounded-xl border border-green-200 bg-green-50 p-4">
              <p className="font-semibold text-green-900 mb-2">FĂRĂ programare</p>
              <p>
                Acesta este serviciul cel mai căutat în regim de urgență și, în același timp, cel
                mai puțin explicat clar online. Pentru titlul de călătorie, mergi direct la
                consulat în programul dedicat. Dacă vrei imaginea completă a actelor pe care le
                poți porni din Germania, vezi și{' '}
                <Link href="/acte-romanesti-germania" className="underline text-blue-600 hover:text-blue-800">
                  pagina hub ActeRO
                </Link>.
              </p>
            </div>
          ),
        },
        {
          id: 'steps',
          title: 'Cum îl obții',
          content: (
            <ol className="list-decimal pl-5 space-y-2">
              {howToSteps.map((step) => (
                <li key={step.name}><strong>{step.name}:</strong> {step.text}</li>
              ))}
            </ol>
          ),
        },
      ]}
      finalCtaTitle="Vezi dacă titlul de călătorie e soluția potrivită pentru tine"
      finalCtaText="ActeRO îți spune când ai nevoie de titlu de călătorie și când e mai bine să intri direct pe traseul de pașaport sau buletin."
    />
  )
}
