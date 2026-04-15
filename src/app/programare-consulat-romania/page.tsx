import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Programare la consulatul României în Germania — Ghid 2026 | ActeRO',
  description: 'Cum obții programare pe econsulat.ro: validare, luni la 08:00, greșeli frecvente și reguli importante pentru consulatele României din Germania.',
  keywords: ['programare consulat romania germania', 'econsulat luni 08:00', 'programare pașaport germania', 'econsulat validata', 'intermediari programări consulat'],
  openGraph: {
    title: 'Programare consulat România în Germania — Ghid complet',
    description: 'Cum obții programare pe econsulat.ro și ce greșeli să eviți.',
    url: 'https://www.actero.ro/programare-consulat-romania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/programare-consulat-romania',
  },
}

const faqItems = [
  {
    question: 'Când apar de obicei programările noi pe econsulat.ro?',
    answer: 'Programările la consulatele din Germania apar de obicei luni la ora 08:00. Nu este o regulă absolută, dar acesta este intervalul observat cel mai des de utilizatori.',
  },
  {
    question: 'Pot face programare imediat după ce trimit cererea?',
    answer: 'Nu. Mai întâi cererea trebuie să fie în starea Validată. De regulă, validarea durează 1-3 zile lucrătoare, în funcție de consulat și de cât de corect ai încărcat documentele.',
  },
  {
    question: 'Programările pe econsulat.ro sunt gratuite?',
    answer: 'Da. Programările sunt GRATUITE. Orice persoană sau intermediar care cere bani pentru o programare profită de lipsa de informație și nu reprezintă consulatul.',
  },
  {
    question: 'Care sunt cele mai frecvente greșeli pe econsulat.ro?',
    answer: 'Cele mai frecvente greșeli sunt alegerea serviciului greșit, documente scanate slab sau incomplete și încercarea de a programa înainte ca cererea să fie validată.',
  },
  {
    question: 'Ce fac dacă nu găsesc locuri disponibile?',
    answer: 'Verifică exact luni la 08:00, încearcă din nou în săptămânile următoare și asigură-te că cererea ta este validată. În multe cazuri problema nu este lipsa totală a locurilor, ci momentul nepotrivit al verificării.',
  },
  {
    question: 'Pot plăti pe cineva să îmi găsească loc mai repede?',
    answer: 'Nu este recomandat. Programările sunt gratuite, iar intermediarii care cer bani speculează anxietatea utilizatorilor. Cel mai sigur este să folosești direct platforma oficială econsulat.ro.',
  },
]

const howToSteps = [
  { name: 'Creează cont', text: 'Intră pe econsulat.ro și creează un cont valid cu emailul tău.' },
  { name: 'Alege serviciul corect', text: 'Selectează exact serviciul consular potrivit situației tale. Aici apar cele mai multe greșeli.' },
  { name: 'Încarcă documentele', text: 'Atașează copii scanate lizibile și complete.' },
  { name: 'Trimite cererea', text: 'După trimitere, starea va fi În așteptare până când consulatul verifică documentele.' },
  { name: 'Așteaptă validarea', text: 'Cererea trebuie să ajungă în starea Validată înainte să poți rezerva.' },
  { name: 'Intră luni la 08:00', text: 'Verifică platforma exact în intervalul când apar de obicei locurile noi.' },
  { name: 'Confirmă și salvează programarea', text: 'După rezervare, salvează confirmarea și pregătește documentele originale.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/programare-consulat-romania#article',
  headline: 'Programare consulat România în Germania — Ghid 2026',
  description: 'Cum obții programare pe econsulat.ro, când apar locurile și ce greșeli să eviți.',
  datePublished: '2026-01-01',
  dateModified: '2026-04-01',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/programare-consulat-romania',
  inLanguage: 'ro',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' },
    { '@type': 'ListItem', position: 2, name: 'Programare consulat România', item: 'https://www.actero.ro/programare-consulat-romania' },
  ],
}

export default function ProgramareConsulatRomaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="programare-consulat-romania"
      lpTopic="programare-consulat"
      h1="Cum obții programare la consulatul României?"
      intro="Dacă ai cererea pregătită corect, momentul și ordinea pașilor fac toată diferența pe econsulat.ro."
      tldr="Programările la consulatele din Germania se obțin pe econsulat.ro. Sunt disponibile de obicei luni la 08:00. Cererea trebuie mai întâi să fie Validată (1-3 zile). Programările sunt GRATUITE — nu plătiți intermediari."
      ctaHref="/wizard"
      ctaLabel="Rezolvă gratuit în 30 de secunde →"
      updatedAt="aprilie 2026"
      sourceNote="econsulat.ro și experiențe verificate din comunitate"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        {
          id: 'context',
          title: 'Ce trebuie să știi înainte să începi',
          content: (
            <>
              <p className="mb-3">Mulți utilizatori cred că lipsa locurilor este problema principală. În practică, cele mai multe blocaje apar înainte: serviciul ales greșit, documente ilizibile sau încercarea de programare înainte de validare.</p>
              <p>
                Programările sunt gratuite. Dacă cineva cere bani pentru un loc, nu lucrează
                pentru consulat și nu oferă niciun avantaj legitim. Dacă vrei să vezi pentru ce
                acte ai nevoie de econsulat și pentru ce nu, vezi și{' '}
                <Link href="/acte-romanesti-germania" className="underline text-blue-600 hover:text-blue-800">
                  pagina principală cu toate actele românești din Germania
                </Link>.
              </p>
            </>
          ),
        },
        {
          id: 'steps',
          title: 'Pașii exacți pe econsulat.ro',
          content: (
            <ol className="list-decimal pl-5 space-y-2">
              {howToSteps.map((step) => (
                <li key={step.name}><strong>{step.name}:</strong> {step.text}</li>
              ))}
            </ol>
          ),
        },
        {
          id: 'pagini-conexe',
          title: 'Ghiduri conexe',
          content: (
            <div className="grid gap-3 sm:grid-cols-3">
              <Link href="/pasaport-romania-germania" className="rounded-xl border border-gray-200 bg-white p-4 hover:border-blue-200">
                <p className="mb-1 font-semibold text-gray-900">Pașaport</p>
                <p className="text-sm text-gray-600">Cel mai frecvent flux care trece prin econsulat.</p>
              </Link>
              <Link href="/procura-notariala-germania" className="rounded-xl border border-gray-200 bg-white p-4 hover:border-blue-200">
                <p className="mb-1 font-semibold text-gray-900">Procură</p>
                <p className="text-sm text-gray-600">Serviciile notariale unde alegerea corectă a categoriei contează mult.</p>
              </Link>
              <Link href="/transcriere-certificat-nastere-germania" className="rounded-xl border border-gray-200 bg-white p-4 hover:border-blue-200">
                <p className="mb-1 font-semibold text-gray-900">Transcriere</p>
                <p className="text-sm text-gray-600">Pentru copilul născut în Germania și pașii de după transcriere.</p>
              </Link>
            </div>
          ),
        },
      ]}
      finalCtaTitle="După programare, trebuie să știi și pe ce ghid continui"
      finalCtaText="Pagina asta explică mecanica econsulat. Pentru pașii concreți ai actului tău, continuă pe ghidul de pașaport, procură sau transcriere."
    />
  )
}
