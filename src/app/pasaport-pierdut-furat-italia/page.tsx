import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
export const metadata: Metadata = {
  title: 'Pașaport pierdut sau furat în Italia — ce faci 2026 | ActeRO',
  description: 'Pașaport românesc pierdut sau furat în Italia: declarație la poliție, traducere autorizată MJ, procedura la consulat. Uniform Italia — fără apostilă, fără legalizare.',
  keywords: ['pasaport pierdut furat italia','procedura pasaport furat italia','adeverinta politie pasaport furat romania','pasaport pierdut romani italia'],
  openGraph: { title: 'Pașaport pierdut sau furat în Italia — Ghid 2026', description: 'Adeverință poliție + traducere autorizată MJ (uniform în Italia). Declarație pierdere: la ghișeul consulatului.', url: 'https://www.actero.ro/pasaport-pierdut-furat-italia', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/pasaport-pierdut-furat-italia' },
}
const faqItems = [
  { question: 'Ce fac dacă pașaportul mi-a fost furat în Italia?', answer: 'Raportezi furtul la poliția locală italiană (Denuncia di furto/smarrimento) în 24 ore. Obții adeverința + traducere autorizată de un traducător autorizat MJ român. Mergi la consulat cu programare pe econsulat.ro.' },
  { question: 'Ce traducere trebuie pentru adeverința de furt?', answer: 'Traducere autorizată de un traducător autorizat de Ministerul Justiției român — uniform la toate cele 7 consulate italiene. Spre deosebire de Germania (unde Stuttgart cere legalizată), în Italia nu se cere legalizare.' },
  { question: 'Dacă pașaportul e pierdut (nu furat), trebuie declarație la poliție?', answer: 'Nu — pentru pierdere se completează o declarație pe proprie răspundere direct la ghișeul consulatului. Nu trebuie pregătită în avans.' },
  { question: 'Cât costă noul pașaport după furt/pierdere?', answer: '53€ — aceeași taxă ca la reînnoire normală.' },
  { question: 'Am nevoie de titlu de călătorie dacă am pașaportul furat și trebuie să plec urgent?', answer: 'Da. Titlul de călătorie se eliberează gratuit în aceeași zi — Roma și Milano acceptă walk-in urgent, Bologna direct în program.' },
]
const howToSteps = [
  { name: 'Dacă a fost FURAT: raportezi la poliție', text: 'Denuncia di furto la poliția locală italiană în 24 ore de la constatare. Obții o copie a denunțului.' },
  { name: 'Obții traducerea', text: 'Traducător autorizat Ministerul Justiției român. Nu e necesară apostilă sau legalizare — uniform în Italia.' },
  { name: 'Dacă a fost PIERDUT: nicio pregătire specială', text: 'Declarația pe proprie răspundere se completează exclusiv la ghișeul consulatului în ziua programării. Nu se pregătește în avans.' },
  { name: 'Pregătești celelalte documente', text: 'CI română (dacă o ai), certificat naștere, document domiciliu italian.' },
  { name: 'Cerere pe econsulat.ro și programare', text: 'CRDS: selectezi Pașaport CRDS. La câmpul pașaport anterior: menționezi că e pierdut/furat + numărul dacă îl știi.' },
  { name: 'Ziua consulatului', text: 'Furt: aduci denunțul + traducerea. Pierdere: completezi declarația la ghișeu. Plătești 53€. Termen: 45 zile luc.' },
]
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://www.actero.ro/pasaport-pierdut-furat-italia#article', headline: 'Pașaport pierdut sau furat în Italia — Ghid 2026', datePublished: '2026-04-01', dateModified: '2026-04-10', author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, mainEntityOfPage: 'https://www.actero.ro/pasaport-pierdut-furat-italia', inLanguage: 'ro' }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' }, { '@type': 'ListItem', position: 2, name: 'Acte românești Italia', item: 'https://www.actero.ro/acte-romanesti-italia' }, { '@type': 'ListItem', position: 3, name: 'Pașaport pierdut furat Italia', item: 'https://www.actero.ro/pasaport-pierdut-furat-italia' } ] }
export default function PasaportPierdutFuratItaliaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="pasaport-pierdut-furat-italia"
      lpTopic="pasaport-pierdut-italia"
      h1="Pașaport pierdut sau furat în Italia — ce faci"
      intro="Ai pierdut pașaportul sau ți-a fost furat în Italia? Procedura diferă față de reînnoire normală, dar e mai simplă decât în Germania — traducerea adeverinței de furt nu necesită legalizare, e autorizată MJ uniform."
      tldr="Furat: denuncia la poliție + traducere autorizată MJ (fără apostilă, fără legalizare — uniform Italia). Pierdut: declarație la ghișeul consulatului (nu în avans). Taxa: 53€. Termen: 45 zile luc."
      ctaHref="/wizard?problem=pasaport&country=it"
      ctaLabel="Pașii exacți pentru situația mea →"
      updatedAt="aprilie 2026"
      sourceNote="Verificat live: toate consulatele italiene MAE — aprilie 2026"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'pierdut-vs-furat', title: 'Pierdut vs furat — proceduri diferite', content: (<div className="grid grid-cols-1 gap-3 text-sm"><div className="rounded-lg border border-orange-100 bg-orange-50 p-3"><p className="font-semibold text-orange-900">📋 Pașaport PIERDUT</p><ul className="text-orange-800 mt-1 space-y-0.5"><li>• NU mergi la poliție (nu e obligatoriu)</li><li>• Declarația pe proprie răspundere: se completează LA GHIȘEUL CONSULATULUI</li><li>• Nu pregătești niciun document suplimentar față de reînnoire normală</li></ul></div><div className="rounded-lg border border-red-100 bg-red-50 p-3"><p className="font-semibold text-red-900">🚨 Pașaport FURAT</p><ul className="text-red-800 mt-1 space-y-0.5"><li>• Raportezi la poliția italiană în 24 ore (Denuncia di furto)</li><li>• Obții copie a denunțului</li><li>• Traducere autorizată MJ român — uniform Italia, fără legalizare</li><li>• Aduci denunțul + traducerea la consulat</li></ul></div></div>) },
        { id: 'urgent', title: 'Ai nevoie să pleci urgent?', content: (<div className="rounded-lg border border-orange-200 bg-orange-50 p-4 text-sm"><p className="font-semibold text-orange-900">⚡ Titlu de călătorie — gratuit, aceeași zi</p><p className="text-orange-800 mt-1">Roma: walk-in L-V 11:00–13:00. Milano: linia urgențe. Bologna: direct în program.</p><a href="/titlu-calatorie-urgenta-italia" className="mt-1 inline-block text-xs text-orange-900 underline font-medium">Ghid titlu urgent →</a></div>) },
        { id: 'pagini-conexe', title: 'Pagini conexe pentru acest caz', content: (<div className="grid gap-3 text-sm md:grid-cols-2"><Link href="/pasaport-romania-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"><p className="font-medium text-gray-900">Hub pașaport Italia</p><p className="mt-1 text-gray-600">Pornești de aici dacă vrei și celelalte situații de pașaport.</p></Link><Link href="/pasaport-expirat-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"><p className="font-medium text-gray-900">Pașaport expirat</p><p className="mt-1 text-gray-600">Compară cu reînnoirea standard, fără furt sau pierdere.</p></Link><Link href="/programare-consulat-romania-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"><p className="font-medium text-gray-900">Programare consulat</p><p className="mt-1 text-gray-600">Vezi cum faci programarea și unde ai excepții locale.</p></Link><Link href="/acte-romanesti-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"><p className="font-medium text-gray-900">Acte românești în Italia</p><p className="mt-1 text-gray-600">Hub-ul general pentru pașaport, buletin, transcriere și procuri.</p></Link></div>) },
      ]}
      finalCtaTitle="Pașii exacți pentru situația ta"
      finalCtaText="Pierdut sau furat, CRDS sau domiciliu România — wizardul ActeRO îți dă documentele exacte."
    />
  )
}
