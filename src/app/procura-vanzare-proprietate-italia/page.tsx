import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
export const metadata: Metadata = {
  title: 'Procură vânzare proprietate din Italia — Ghid complet 2026 | ActeRO',
  description: 'Procură pentru vânzare sau cumpărare proprietate în România, făcută la consulatul din Italia. Gratuit, aceeași zi, valabilă fără apostilă. RNNEPR virament bancar.',
  keywords: ['procura vanzare proprietate italia','procura imobiliara italia romania','procura notariala vanzare din italia','imobil romania procura consulat italia'],
  openGraph: { title: 'Procură vânzare proprietate din Italia — Ghid 2026', description: 'Gratuită, gata în aceeași zi, valabilă în România fără apostilă. Plată RNNEPR prin virament.', url: 'https://www.actero.ro/procura-vanzare-proprietate-italia', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/procura-vanzare-proprietate-italia' },
}
const faqItems = [
  { question: 'Pot face o procură pentru vânzarea apartamentului meu din România, din Italia?', answer: 'Da. Consulatele românești din Italia autentifică procuri notariale pentru vânzare/cumpărare proprietăți. Serviciul este gratuit, se face cu programare, procura e gata în aceeași zi.' },
  { question: 'Procura făcută la consulat este valabilă la notarul din România?', answer: 'Da — valabilă direct, fără apostilă și fără legalizări suplimentare. Notarul român o acceptă ca document autentic.' },
  { question: 'Am nevoie de datele notarului din România pentru procură?', answer: 'Nu neapărat. Poți face o procură generală pentru vânzare fără a specifica notarul. Dacă ai deja un notar ales, datele lui ajută la redactarea mai precisă a procurii.' },
  { question: 'Cât este valabilă procura de vânzare?', answer: '3 ani dacă nu specifici un termen mai scurt. Verifică cu notarul din România dacă are cerințe specifice de valabilitate.' },
  { question: 'Ce informații trebuie să am despre proprietate?', answer: 'Adresa completă, numărul cadastral dacă îl ai, datele persoanei împuternicite (mandatarul), datele notarului dacă e ales.' },
]
const howToSteps = [
  { name: 'Pregătește datele proprietății', text: 'Adresa completă în România, număr cadastral (din CF sau contractul de proprietate), datele mandatarului (persoana care va semna în locul tău).' },
  { name: 'Programare econsulat.ro', text: 'Acte notariale → Autentificări → Procuri. Obții IBAN pentru plata RNNEPR.' },
  { name: 'Virament RNNEPR în avans', text: '3€ (+ 5€ la Trieste) cu minimum 2–3 zile înainte. Aduci ordinul de plată confirmat.' },
  { name: 'Ziua programării', text: 'Pașaport valabil + ordinul de plată. Funcționarul redactează procura pe loc.' },
  { name: 'Primești procura', text: 'Aceeași zi. Trimite-o mandatarului din România — nu necesită apostilă.' },
]
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://www.actero.ro/procura-vanzare-proprietate-italia#article', headline: 'Procură vânzare proprietate din Italia — Ghid 2026', datePublished: '2026-04-01', dateModified: '2026-04-10', author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, mainEntityOfPage: 'https://www.actero.ro/procura-vanzare-proprietate-italia', inLanguage: 'ro' }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' }, { '@type': 'ListItem', position: 2, name: 'Procură notarială Italia', item: 'https://www.actero.ro/procura-notariala-italia' }, { '@type': 'ListItem', position: 3, name: 'Procură vânzare proprietate Italia', item: 'https://www.actero.ro/procura-vanzare-proprietate-italia' } ] }
export default function ProcuraVanzareProprietateItaliaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="procura-vanzare-proprietate-italia"
      lpTopic="procura-vanzare-italia"
      h1="Procură vânzare proprietate din Italia — tot ce trebuie"
      intro="Vrei să vinzi sau să cumperi o proprietate în România dar ești în Italia? Procura se face la consulatul tău — gratuit, gata în aceeași zi, valabilă direct la notarul din România."
      tldr="Serviciu gratuit. RNNEPR: 3€ virament bancar în avans. Programare: econsulat.ro → Acte notariale → Procuri. Aceeași zi. Fără apostilă. Valabilitate: 3 ani."
      ctaHref="/wizard?problem=procura&country=it"
      ctaLabel="Documentele exacte pentru procura mea →"
      updatedAt="aprilie 2026"
      sourceNote="Verificat live: toate consulatele italiene MAE — aprilie 2026"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'ce-trebuie', title: 'Ce informații trebuie să ai la tine', content: (<div className="rounded-lg border border-gray-200 p-3 text-sm space-y-2"><p className="font-medium">Pregătește-le înainte de programare:</p><ul className="space-y-1 text-gray-700"><li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Adresa completă a proprietății din România</span></li><li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Numărul cadastral (din CF sau contractul de proprietate)</span></li><li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>Datele complete ale mandatarului (CNP, adresă, CI)</span></li><li className="flex gap-2"><span className="text-orange-500 font-bold">±</span><span>Datele notarului din România (opțional dar recomandat)</span></li></ul></div>) },
        { id: 'rnnepr', title: 'Cum plătești taxa RNNEPR', content: (<div className="rounded-lg border border-blue-100 bg-blue-50 p-3 text-sm"><p className="font-semibold text-blue-900">Virament bancar în avans — uniform Italia</p><ul className="text-blue-800 mt-1 space-y-0.5"><li>• Sumă: 3€ (+ 5€ la Trieste)</li><li>• Minimum 2–3 zile înainte de programare</li><li>• IBAN: obții la confirmare programare econsulat.ro</li><li>• Aduci ordinul de plată în ziua programării</li></ul></div>) },
        {
          id: 'pagini-conexe',
          title: 'Pagini conexe utile pentru Italia',
          content: (
            <div className="grid gap-3 text-sm md:grid-cols-3">
              <Link href="/procura-notariala-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Hub procuri Italia</p>
                <p className="mt-1 text-gray-600">Pagina mamă pentru toate procurile notariale din Italia.</p>
              </Link>
              <Link href="/programare-consulat-romania-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Programare la consulat în Italia</p>
                <p className="mt-1 text-gray-600">Vezi pașii din econsulat și excepțiile locale înainte de depunere.</p>
              </Link>
              <Link href="/acte-romanesti-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Acte românești din Italia</p>
                <p className="mt-1 text-gray-600">Hubul principal dacă mai ai și alte acte de rezolvat în afară de procura imobiliară.</p>
              </Link>
            </div>
          ),
        },
      ]}
      finalCtaTitle="Documentele exacte pentru procura ta"
      finalCtaText="Wizardul ActeRO îți dă lista completă și te ghidează prin programarea econsulat.ro."
    />
  )
}
