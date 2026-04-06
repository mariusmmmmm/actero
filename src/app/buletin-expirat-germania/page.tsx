import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Buletin expirat în Germania? Ghid complet 2026 — ActeRO',
  description: 'Reînnoire buletin din Germania: schimbare procedură 2025, prezență fizică, procură specială, CEI/CIS și pașii exacți.',
  keywords: ['buletin expirat germania', 'carte identitate germania', 'cei cis 2025', 'procură specială buletin', 'spclep romania'],
  openGraph: {
    title: 'Buletin expirat în Germania — Ghid complet',
    description: 'Prezență obligatorie, procură, CEI/CIS, pași corecți pentru românii din Germania.',
    url: 'https://actero.ro/buletin-expirat-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/buletin-expirat-germania',
  },
}

const faqItems = [
  {
    question: 'Trebuie să fiu prezent personal pentru buletin dacă locuiesc în Germania?',
    answer: 'Da. Din 2025, CEI și CIS necesită prezență fizică pentru biometrie și ridicare. Cererea poate fi pregătită din timp, dar biometria și ridicarea nu se fac complet la distanță.',
  },
  {
    question: 'Mai funcționează procura pentru buletin?',
    answer: 'Procura specială poate ajuta pentru pregătirea documentelor și anumite etape administrative, dar pentru CEI și CIS prezența personală la SPCLEP este obligatorie pentru biometrie.',
  },
  {
    question: 'Ce înseamnă CEI și CIS?',
    answer: 'CEI este Cartea Electronică de Identitate, iar CIS este Cartea de Identitate Simplă. În 2025, ambele variante implică preluare biometrică și schimbă modul în care se rezolvă reînnoirea buletinului.',
  },
  {
    question: 'Ce documente îmi trebuie pentru reînnoirea buletinului?',
    answer: 'Ai nevoie de certificatul de naștere românesc, certificatul de căsătorie dacă ți-ai schimbat numele, buletinul vechi dacă îl mai ai și actele care dovedesc adresa din România, în funcție de situația ta.',
  },
  {
    question: 'Unde se face biometria pentru noul buletin?',
    answer: 'Biometria se face la SPCLEP-ul competent din România. Nu se face la consulatul din Germania și nu se poate evita prin procură.',
  },
]

const howToSteps = [
  { name: 'Clarifică situația ta', text: 'Verifică dacă ai domiciliu activ în România sau dacă nu mai ai deloc adresă activă. Asta schimbă traseul și documentele.' },
  { name: 'Pregătește procura dacă ai nevoie de ajutor', text: 'Dacă vrei ca o persoană din România să te ajute cu documentele, pregătește o procură specială la consulat.' },
  { name: 'Strânge documentele civile', text: 'Pregătește certificatul de naștere, certificatul de căsătorie și vechiul buletin, dacă îl mai ai.' },
  { name: 'Planifică deplasarea în România', text: 'Rezervă timpul necesar pentru prezentarea la SPCLEP-ul competent, acolo unde se face biometria.' },
  { name: 'Prezintă-te personal la SPCLEP', text: 'Biometria și verificarea identității se fac doar în prezență fizică.' },
  { name: 'Ridică actul', text: 'Ridicarea noului act se face conform regulilor SPCLEP-ului, în multe cazuri tot cu prezență personală.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/buletin-expirat-germania#article',
  headline: 'Buletin expirat în Germania — Ghid complet 2026',
  description: 'Ghid despre reînnoirea buletinului pentru românii din Germania: procură specială, prezență obligatorie, CEI/CIS, SPCLEP.',
  datePublished: '2026-01-01',
  dateModified: '2026-04-01',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/buletin-expirat-germania',
  inLanguage: 'ro',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://actero.ro' },
    { '@type': 'ListItem', position: 2, name: 'Buletin expirat Germania', item: 'https://actero.ro/buletin-expirat-germania' },
  ],
}

export default function BuletinExpiratGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="buletin-expirat-germania"
      lpTopic="buletin"
      h1="Buletin expirat în Germania?"
      intro="Dacă locuiești în Germania, schimbările din 2025 fac diferența între un drum pregătit corect și un drum făcut degeaba."
      tldr="Din 2025, CEI/CIS necesită prezență fizică pentru biometrie. Se poate depune cererea prin mandatar (procură de la consulat), dar ridicarea actului necesită prezență personală la SPCLEP România."
      ctaHref="/wizard?problem=buletin"
      ctaLabel="Rezolvă gratuit în 30 de secunde →"
      updatedAt="aprilie 2026"
      sourceNote="MAI, SPCLEP, consulatele României din Germania"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        {
          id: 'context',
          title: 'Schimbarea importantă din 2025',
          content: (
            <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
              <p className="font-semibold text-orange-900 mb-2">⚠️ Ce trebuie să știi înainte să te bazezi pe informații vechi</p>
              <p>
                Începând cu noile proceduri pentru CEI/CIS, prezența personală pentru biometrie a
                devenit punctul critic. Multe răspunsuri vechi de pe grupuri sau forumuri nu mai
                reflectă corect realitatea din 2025–2026. Pentru contextul mai larg, vezi și{' '}
                <Link href="/acte-romanesti-germania" className="underline text-blue-600 hover:text-blue-800">
                  ce acte românești poți rezolva din Germania
                </Link>.
              </p>
            </div>
          ),
        },
        {
          id: 'steps',
          title: 'Cum arată traseul real',
          content: (
            <ol className="list-decimal pl-5 space-y-2">
              <li>Clarifici dacă ai domiciliu activ în România.</li>
              <li>Pregătești documentele civile și, dacă e nevoie, procura.</li>
              <li>Planifici deplasarea la SPCLEP-ul competent.</li>
              <li>Te prezinți personal pentru biometrie.</li>
              <li>Ridici noul act conform regulilor locale.</li>
            </ol>
          ),
        },
      ]}
      finalCtaTitle="Află exact ce variantă se aplică în cazul tău"
      finalCtaText="ActeRO îți spune dacă ai nevoie de procură, dacă trebuie să mergi personal în România și ce documente pregătești înainte de drum."
    />
  )
}
