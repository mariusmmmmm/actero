import type { Metadata } from 'next'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Procură notarială în Germania — Ghid complet 2026 | ActeRO',
  description: 'Cum faci procură notarială la consulatul României din Germania: documente, valabilitate, costuri, tipuri de procuri și diferența față de notarul german.',
  keywords: ['procura notariala germania', 'procura consulat romania germania', 'procura vanzare germania', 'procura mostenire germania', 'notar german vs consulat'],
  openGraph: {
    title: 'Procură notarială în Germania — Ghid complet',
    description: 'Procură la consulat, valabilitate, costuri și pași clari.',
    url: 'https://actero.ro/procura-notariala-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/procura-notariala-germania',
  },
}

const faqItems = [
  {
    question: 'Este valabilă în România o procură făcută la consulatul din Germania?',
    answer: 'Da. O procură autentificată la consulatul României din Germania este recunoscută direct în România, fără apostilă sau traducere suplimentară.',
  },
  {
    question: 'Cât costă o procură notarială la consulat?',
    answer: 'Procura notarială este gratuită în majoritatea cazurilor. Pentru tranzacții imobiliare poate exista o taxă suplimentară de 3€ pentru publicitate notarială.',
  },
  {
    question: 'Cât timp este valabilă o procură notarială?',
    answer: 'În practică, procura este folosită de regulă într-un interval de până la 3 ani, în funcție de conținutul ei și de scopul pentru care a fost emisă.',
  },
  {
    question: 'Ce tipuri de procuri pot face la consulat?',
    answer: 'Cele mai comune sunt procura pentru vânzare sau cumpărare proprietate, procura pentru moștenire sau succesiune și procura generală pentru reprezentare în fața autorităților sau notarilor.',
  },
  {
    question: 'Ce documente îmi trebuie pentru procură?',
    answer: 'Ai nevoie de actul de identitate valabil și de datele exacte ale persoanei împuternicite, notarului sau tranzacției. Pentru imobile și succesiuni, informațiile trebuie să fie cât mai precise.',
  },
]

const howToSteps = [
  { name: 'Clarifică scopul procurii', text: 'Stabilește dacă ai nevoie de procură pentru vânzare, moștenire sau reprezentare generală.' },
  { name: 'Strânge datele complete', text: 'Pregătește datele persoanei împuternicite, ale notarului și ale bunului sau procedurii vizate.' },
  { name: 'Intră pe econsulat.ro', text: 'Selectează serviciul de acte notariale și tipul de procură apropiat situației tale.' },
  { name: 'Obține programarea', text: 'După validarea cererii, rezervă locul la consulat.' },
  { name: 'Semnează la ghișeu', text: 'Funcționarul consular autentifică procura în prezența ta.' },
  { name: 'Trimite originalul în România', text: 'După emitere, procura se trimite notarului sau persoanei care te reprezintă.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/procura-notariala-germania#article',
  headline: 'Procură notarială în Germania — Ghid complet 2026',
  description: 'Ghid pentru procură notarială la consulatul României din Germania: costuri, valabilitate și pași.',
  datePublished: '2026-01-01',
  dateModified: '2026-04-01',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/procura-notariala-germania',
  inLanguage: 'ro',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://actero.ro' },
    { '@type': 'ListItem', position: 2, name: 'Procură notarială Germania', item: 'https://actero.ro/procura-notariala-germania' },
  ],
}

export default function ProcuraNotarialaGermaniaPage() {
  return (
    <LlmOptimizedPage
      h1="Procură notarială în Germania?"
      intro="Dacă ai ceva de rezolvat în România, procura de la consulat te poate scuti de drumuri, traduceri și pași inutili."
      tldr="O procură notarială de la consulatul României din Germania este gratuită (+ 3€ publicitate notarială pentru imobil), recunoscută direct în România fără apostilă sau traducere. Valabilă 3 ani. Se obține în aceeași zi a programării la consulat."
      ctaHref="/wizard?problem=procura"
      ctaLabel="Rezolvă gratuit în 30 de secunde →"
      updatedAt="aprilie 2026"
      sourceNote="consulatele României din Germania, practică notarială"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        {
          id: 'context',
          title: 'Consulat vs notar german',
          content: (
            <>
              <p className="mb-3">O procură de la consulatul României este, de regulă, mai simplă pentru folosirea directă în România. În multe cazuri, evită apostila și traducerea autorizată cerute pentru documentele făcute la notar german.</p>
              <p>Dacă știi deja scopul exact al procurii, procesul este mult mai rapid și mai clar.</p>
            </>
          ),
        },
        {
          id: 'steps',
          title: 'Cum o obții',
          content: (
            <ol className="list-decimal pl-5 space-y-2">
              {howToSteps.map((step) => (
                <li key={step.name}><strong>{step.name}:</strong> {step.text}</li>
              ))}
            </ol>
          ),
        },
      ]}
      finalCtaTitle="Află ce tip de procură ți se potrivește"
      finalCtaText="ActeRO te ajută să alegi între procură pentru vânzare, moștenire sau mandat general și îți spune ce pregătești pentru consulat."
    />
  )
}
