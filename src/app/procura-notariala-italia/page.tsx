import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
export const metadata: Metadata = {
  title: 'Procură notarială din Italia — Ghid complet 2026',
  description: 'Procură la consulatele italiene: gratuită, aceeași zi, valabilă în România fără apostilă. Plată RNNEPR prin virament bancar în avans. Verificat live aprilie 2026.',
  keywords: ['procura notariala italia','procura din italia pentru romania','cat costa o procura la ambasada italia','in cat timp se elibereaza o procura italia','procura vanzare proprietate italia'],
  openGraph: { title: 'Procură notarială din Italia — Ghid 2026', description: 'Gratuită, gata în aceeași zi, valabilă în RO fără apostilă. Plată RNNEPR prin virament în avans.', url: 'https://www.actero.ro/procura-notariala-italia', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/procura-notariala-italia' },
}
const faqItems = [
  { question: 'Cât costă o procură notarială la consulatele din Italia?', answer: 'Serviciul consular este gratuit (0€). Se plătește taxa RNNEPR de 3€ + 5€ verificare registru (la unele consulate). Plata se face prin virament bancar în avans — IBAN-ul se obține la programare pe econsulat.ro.' },
  { question: 'Procura făcută la consulat este valabilă în România fără apostilă?', answer: 'Da. Procura autentificată la consulatul românesc din Italia este valabilă direct în România, fără apostilă și fără alte legalizări suplimentare.' },
  { question: 'Cât durează eliberarea procurii?', answer: 'Procura se eliberează în aceeași zi, în cadrul programării.' },
  { question: 'Cât este valabilă o procură?', answer: '3 ani dacă nu se specifică un termen mai scurt. Procurile pentru pensie: 18 luni, gratuite total.' },
  { question: 'Ce documente trebuie pentru o procură?', answer: 'Pașaport valabil sau alt document de identitate. Dacă procura e pentru vânzare proprietate: datele complete ale proprietății și ale notarului din România.' },
  { question: 'Cum plătesc taxa RNNEPR?', answer: 'Virament bancar în avans, cu minimum 2–3 zile înainte de programare. IBAN-ul se obține la programare pe econsulat.ro sau direct la ghișeu.' },
  { question: 'Există procuri pe care consulatul NU le poate face?', answer: 'Da. Consulatele nu pot autentifica contracte, donații, testamente sau tranzacții judiciare.' },
  { question: 'Divorțul pronunțat în Italia trebuie înscris în România?', answer: 'Hotărârile judecătorești din UE sunt recunoscute de plin drept în România — fără exequatur, fără proceduri speciale. Nu ai nevoie de procură pentru divorțul italian.' },
]
const howToSteps = [
  { name: 'Pregătește datele necesare', text: 'Ce vrei să împuternicești, pentru ce act, datele beneficiarului. Pentru proprietate: extrasul CF sau datele imobilului, datele notarului din România dacă îl ai.' },
  { name: 'Programare pe econsulat.ro', text: 'Acte notariale → Autentificări → Procuri. Obții IBAN-ul pentru plata RNNEPR.' },
  { name: 'Plătești RNNEPR în avans', text: '3€ (+ 5€ la Trieste) prin virament bancar, minimum 2–3 zile înainte. Aduci ordinul de plată la programare.' },
  { name: 'Ziua programării', text: 'Pașaport valabil + ordinul de plată RNNEPR. Funcționarul redactează procura pe loc.' },
  { name: 'Primești procura', text: 'Aceeași zi. Valabilă direct în România, fără apostilă.' },
]
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://www.actero.ro/procura-notariala-italia#article', headline: 'Procură notarială din Italia — Ghid 2026', datePublished: '2026-04-01', dateModified: '2026-04-10', author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, mainEntityOfPage: 'https://www.actero.ro/procura-notariala-italia', inLanguage: 'ro' }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' }, { '@type': 'ListItem', position: 2, name: 'Acte românești Italia', item: 'https://www.actero.ro/acte-romanesti-italia' }, { '@type': 'ListItem', position: 3, name: 'Procură notarială Italia', item: 'https://www.actero.ro/procura-notariala-italia' } ] }
export default function ProcuraNotarialaItaliaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="procura-notariala-italia"
      lpTopic="procuri-hub-italia"
      h1="Procură notarială din Italia — tot ce trebuie să știi"
      intro="Trebuie să dai cuiva putere de reprezentare pentru acte în România? Procura se face la consulatul tău din Italia, este gratuită, gata în aceeași zi și valabilă direct în România fără apostilă."
      tldr="Serviciu consular gratuit. Plata RNNEPR: 3€ + 5€ (Trieste) prin virament bancar în avans. Programare: econsulat.ro → Acte notariale → Procuri. Eliberare aceeași zi. Valabilitate: 3 ani. Fără apostilă."
      ctaHref="/wizard?problem=procura&country=it"
      ctaLabel="Documentele exacte pentru procura mea →"
      updatedAt="aprilie 2026"
      sourceNote="Verificat live: toate consulatele italiene MAE · econsulat.ro — aprilie 2026"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'tipuri-procuri', title: 'Ce tipuri de procuri poți face', content: (<div className="space-y-2 text-sm"><div className="rounded-lg border border-gray-200 p-3"><p className="font-medium">📋 Procură vânzare/cumpărare proprietate</p><p className="text-gray-600 mt-0.5">Împuternicești pe cineva să semneze actele la notarul din România. <a href="/procura-vanzare-proprietate-italia" className="text-blue-600 underline text-xs">Ghid complet →</a></p></div><div className="rounded-lg border border-gray-200 p-3"><p className="font-medium">📋 Procură moștenire/succesiune</p><p className="text-gray-600 mt-0.5">Reprezentare în procedura succesorală din România.</p></div><div className="rounded-lg border border-gray-200 p-3"><p className="font-medium">📋 Procură generală</p><p className="text-gray-600 mt-0.5">Divorț, firmă, cont bancar, alte acte administrative.</p></div><div className="rounded-lg border border-red-100 bg-red-50 p-3"><p className="font-medium text-red-800">❌ Ce NU poate face consulatul</p><p className="text-red-700 mt-0.5 text-xs">Contracte, donații, testamente, tranzacții judiciare.</p></div></div>) },
        { id: 'divort-italia', title: 'Divorț pronunțat în Italia — nu ai nevoie de procură', content: (<div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm"><p className="font-semibold text-blue-900">Hotărârile judecătorești UE sunt recunoscute automat în România</p><p className="text-blue-800 mt-2">Dacă ai divorțat în Italia, hotărârea este recunoscută de plin drept în România fără exequatur și fără proceduri speciale. Nu ai nevoie de procură pentru a înregistra divorțul italian în România.</p></div>) },
        { id: 'plata-rnnepr', title: 'Cum plătești taxa RNNEPR', content: (<div className="rounded-lg border border-gray-200 p-3 text-sm space-y-2"><p className="font-medium">Plată uniformă la toate consulatele italiene: virament bancar în avans</p><ul className="space-y-1 text-gray-700"><li>• Suma: 3€ (+ 5€ verificare registru la Trieste)</li><li>• Timing: minimum 2–3 zile înainte de programare</li><li>• IBAN: se obține pe econsulat.ro la confirmare programare sau direct la ghișeu</li><li>• Aduci ordinul de plată confirmat în ziua programării</li></ul></div>) },
        {
          id: 'interlinking',
          title: 'Pagini conexe utile',
          content: (
            <div className="grid gap-3 sm:grid-cols-2 text-sm">
              <Link href="/procura-vanzare-proprietate-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Procură vânzare proprietate</p>
                <p className="mt-1 text-gray-600">Pentru actele imobiliare, pagina dedicată intră mai adânc în documente și conținutul procurii.</p>
              </Link>
              <Link href="/divort-italia-romania" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Divorț pronunțat în Italia</p>
                <p className="mt-1 text-gray-600">Dacă de fapt ai nevoie de recunoașterea divorțului, nu de procură, pornește de aici.</p>
              </Link>
              <Link href="/programare-consulat-romania-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Programare la consulat în Italia</p>
                <p className="mt-1 text-gray-600">Pentru econsulat.ro, excepțiile Bologna și Bari și pașii de programare.</p>
              </Link>
              <Link href="/acte-romanesti-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Acte românești din Italia</p>
                <p className="mt-1 text-gray-600">Hub-ul principal dacă încă nu e clar că procura este procedura potrivită.</p>
              </Link>
            </div>
          ),
        },
      ]}
      finalCtaTitle="Documentele exacte pentru procura ta"
      finalCtaText="Wizardul ActeRO îți dă lista completă verificată — inclusiv ce date trebuie să ai despre proprietate sau mandatar."
    />
  )
}
