import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
export const metadata: Metadata = {
  title: 'Divorț pronunțat în Italia — ce trebuie să faci în România | ActeRO',
  description: 'Hotărârile judecătorești UE sunt recunoscute de plin drept în România — fără exequatur, fără procură specială. Ce trebuie cu adevărat înregistrat și cum.',
  keywords: ['divort italia romania acte','divort pronuntat in italia romania','inscrierea divortului din italia in romania','hotarare judecatoreasca italia romana'],
  openGraph: { title: 'Divorț pronunțat în Italia — ce faci în România', description: 'Hotărârea italiană e valabilă automat în România. Nu ai nevoie de exequatur.', url: 'https://www.actero.ro/divort-italia-romania', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/divort-italia-romania' },
}
const faqItems = [
  { question: 'Divorțul pronunțat în Italia trebuie recunoscut special în România?', answer: 'Nu. Conform regulamentului UE, hotărârile judecătorești definitive din statele membre sunt recunoscute de plin drept în toate celelalte state membre, inclusiv România — fără procedura de exequatur.' },
  { question: 'Trebuie să fac o procură pentru a înregistra divorțul în România?', answer: 'Nu neapărat. Dacă poți merge personal sau ai deja pe cineva de încredere în România, procura nu e obligatorie. Procura e utilă dacă vrei să mandatezi pe cineva să facă înregistrarea în locul tău.' },
  { question: 'Ce trebuie înregistrat în România după divorțul din Italia?', answer: 'Dacă căsătoria a fost înregistrată în România, divorțul trebuie menționat în marginea actului de căsătorie la SPCLEP sau consulat. Ai nevoie de hotărârea judecătorească cu mențiunea de definitivitate + traducere autorizată.' },
  { question: 'Trebuie apostilă pe hotărârea de divorț italiană?', answer: 'Nu — documentele din UE circulă fără apostilă conform regulamentului european. Este necesară traducerea autorizată în română.' },
]
const howToSteps = [
  { name: 'Verifică dacă căsătoria e înregistrată în România', text: 'Dacă v-ați căsătorit în România sau ați transcris certificatul de căsătorie, divorțul trebuie menționat în RSC român.' },
  { name: 'Obții hotărârea definitivă', text: 'Hotărârea judecătorească italiană cu mențiunea de definitivitate (passata in giudicato).' },
  { name: 'Traducere autorizată', text: 'Traducător autorizat MJ român. Fără apostilă — document UE.' },
  { name: 'Înregistrare la SPCLEP sau consulat', text: 'Mergi personal sau prin mandatar la SPCLEP de domiciliu sau la consulat cu hotărârea + traducerea.' },
]
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://www.actero.ro/divort-italia-romania#article', headline: 'Divorț pronunțat în Italia — ce faci în România', datePublished: '2026-04-01', dateModified: '2026-04-10', author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, mainEntityOfPage: 'https://www.actero.ro/divort-italia-romania', inLanguage: 'ro' }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' }, { '@type': 'ListItem', position: 2, name: 'Acte românești Italia', item: 'https://www.actero.ro/acte-romanesti-italia' }, { '@type': 'ListItem', position: 3, name: 'Divorț Italia România', item: 'https://www.actero.ro/divort-italia-romania' } ] }
export default function DivortItaliaRomaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="divort-italia-romania"
      lpTopic="divort-italia"
      h1="Divorț pronunțat în Italia — ce trebuie să faci în România"
      intro="Ai divorțat în Italia și te întrebi ce trebuie să faci în România? Vestea bună: hotărârea italiană este recunoscută automat în România — fără proceduri speciale, fără exequatur."
      tldr="Hotărârile judecătorești UE: recunoscute de plin drept în România — fără exequatur. Dacă căsătoria e înregistrată în RO: divorțul trebuie menționat în RSC. Ai nevoie de: hotărâre definitivă + traducere autorizată MJ. Fără apostilă."
      ctaHref="/acte-romanesti-italia"
      ctaLabel="Vezi toate ghidurile utile pentru Italia →"
      updatedAt="aprilie 2026"
      sourceNote="Regulament UE 1215/2012 · MAI România · consulatele României din Italia"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'recunoastere-ue', title: 'De ce nu ai nevoie de exequatur', content: (<div className="rounded-lg border border-green-100 bg-green-50 p-4 text-sm"><p className="font-semibold text-green-900">Regulamentul UE: hotărârile judecătorești circulă liber</p><p className="text-green-800 mt-2">Conform regulamentului european, o hotărâre judecătorească definitivă dintr-un stat UE este recunoscută automat în toate celelalte state membre. Nu există o procedură separată de &quot;recunoaștere&quot; în România pentru un divorț italian — hotărârea este direct valabilă.</p></div>) },
        { id: 'ce-trebuie-inregistrat', title: 'Ce trebuie totuși făcut în România', content: (<div className="rounded-lg border border-orange-100 bg-orange-50 p-4 text-sm space-y-2"><p className="font-semibold text-orange-900">Menționarea în Registrul de Stare Civilă</p><p className="text-orange-800">Dacă căsătoria a fost înregistrată în România, divorțul trebuie menționat în marginea actului de căsătorie. Asta nu înseamnă &quot;recunoașterea&quot; divorțului — acesta e deja valid — ci actualizarea evidențelor civile.</p><p className="text-orange-800 mt-1">Documentele necesare: hotărârea cu mențiunea de definitivitate (passata in giudicato) + traducere autorizată MJ.</p></div>) },
        {
          id: 'pagini-conexe',
          title: 'Pagini conexe pentru Italia',
          content: (
            <div className="grid gap-3 text-sm md:grid-cols-2">
              <Link href="/acte-romanesti-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Hub acte românești Italia</p>
                <p className="mt-1 text-gray-600">Pagina principală pentru pașaport, buletin, procuri și acte de stare civilă.</p>
              </Link>
              <Link href="/procura-notariala-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Procură notarială din Italia</p>
                <p className="mt-1 text-gray-600">Utilă doar dacă vrei să împuternicești pe cineva să depună sau să ridice acte în locul tău.</p>
              </Link>
              <Link href="/programare-consulat-romania-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Programare la consulat în Italia</p>
                <p className="mt-1 text-gray-600">Vezi când e nevoie de econsulat și ce excepții locale apar la consulatele italiene.</p>
              </Link>
              <Link href="/transcriere-certificat-nastere-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Transcriere certificat de naștere italian</p>
                <p className="mt-1 text-gray-600">Altă procedură de stare civilă care folosește aceeași logică de acte românești pentru Italia.</p>
              </Link>
            </div>
          ),
        },
      ]}
      finalCtaTitle="Ai nevoie de altceva de rezolvat în România?"
      finalCtaText="ActeRO acoperă procuri, pașapoarte și acte de stare civilă — ghiduri verificate pentru românii din Italia."
    />
  )
}
