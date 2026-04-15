import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
export const metadata: Metadata = {
  title: 'Pașaport la Consulatul din Trieste — Ghid complet 2026 | ActeRO',
  description: 'Exclusiv cu programare. Taxa 53€ confirmată. Minori: 2–3 luni procesare. Ridicare L-J 15:30–16:30, V 14:00–15:00. DHL contra cost. Veneto, Friuli-Venezia Giulia.',
  keywords: ['pasaport consulat trieste','romani trieste pasaport','programare consulat trieste','pasaport minor trieste 2 3 luni'],
  openGraph: { title: 'Pașaport la Consulatul din Trieste — Ghid 2026', description: 'Taxa 53€ confirmată. Minori: 2–3 luni (nu 45 zile). Ridicare L-J 15:30–16:30.', url: 'https://www.actero.ro/pasaport-consulat-trieste', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/pasaport-consulat-trieste' },
}
const faqItems = [
  { question: 'Cât costă pașaportul la Trieste?', answer: '53€ — confirmat explicit pe trieste.mae.ro. Taxa actualizată din 01.10.2025.' },
  { question: 'Cât durează procesarea pașaportului unui minor la Trieste?', answer: '2–3 luni — confirmat explicit pe site. Spre deosebire de adulți (45 zile lucrătoare), minorii au un termen semnificativ mai lung la Trieste și Bari.' },
  { question: 'Ce regiuni sunt arondate Consulatului din Trieste?', answer: 'Veneto și Friuli-Venezia Giulia.' },
  { question: 'Trebuie programare la Trieste?', answer: 'Da — toate serviciile exclusiv cu programare econsulat.ro. Program: L-V 09:00–14:00.' },
  { question: 'Când ridic pașaportul la Trieste?', answer: 'Luni–Joi 15:30–16:30 sau Vineri 14:00–15:00. Sau prin DHL contra cost — soliciți la depunere.' },
  { question: 'Pot ridica prin DHL?', answer: 'Da. DHL contra cost — soliciți la depunere, DHL te contactează pentru plată.' },
  { question: 'Există urgențe walk-in?', answer: 'Nu — toate serviciile exclusiv cu programare. Urgențe: +39 340.882.1688.' },
  { question: 'Taxa de transcriere naștere la Trieste?', answer: 'Site-ul afișează 125€ sau 170€ — probabil pagina veche neactualizată. La alte consulate transcrierea este gratuită. Confirmă direct înainte de deplasare.' },
]
const howToSteps = [
  { name: 'Verifică că ești arondat Trieste', text: 'Veneto și Friuli-Venezia Giulia → Trieste.' },
  { name: 'Pregătește documentele', text: 'CRDS: pașaport + certificat naștere + document domiciliu italian. Non-CRDS: CI românească + pașaport + certificat naștere.' },
  { name: 'Cerere și programare pe econsulat.ro', text: 'Login → Cerere nouă → tipul corect → încarci → trimiți → după validare programare.' },
  { name: 'Ziua consulatului', text: 'L-V 09:00–14:00. Fotografii NU. Plătești 53€ numerar. Dacă vrei DHL, anunți la ghișeu.' },
  { name: 'Ridică sau DHL', text: 'L-J 15:30–16:30 / V 14:00–15:00. SAU DHL contra cost.' },
]
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://www.actero.ro/pasaport-consulat-trieste#article', headline: 'Pașaport la Consulatul din Trieste — Ghid 2026', datePublished: '2026-04-01', dateModified: '2026-04-10', author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, mainEntityOfPage: 'https://www.actero.ro/pasaport-consulat-trieste', inLanguage: 'ro' }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' }, { '@type': 'ListItem', position: 2, name: 'Acte românești Italia', item: 'https://www.actero.ro/acte-romanesti-italia' }, { '@type': 'ListItem', position: 3, name: 'Pașaport România Italia', item: 'https://www.actero.ro/pasaport-romania-italia' }, { '@type': 'ListItem', position: 4, name: 'Consulat Trieste', item: 'https://www.actero.ro/pasaport-consulat-trieste' } ] }
export default function PasaportConsulatTriestePage() {
  return (
    <LlmOptimizedPage
      lpSlug="pasaport-consulat-trieste"
      lpTopic="pasaport-geo-trieste"
      h1="Pașaport românesc la Consulatul din Trieste"
      intro="Ești din Veneto sau Friuli-Venezia Giulia? Consulatul din Trieste are una din cele mai importante particularități din Italia: pașapoartele pentru minori durează 2–3 luni, nu 45 de zile."
      tldr="Exclusiv cu programare. Taxa: 53€ confirmat. Adulți: 45 zile luc. Minori: 2–3 luni ⚠️. Ridicare: L-J 15:30–16:30, V 14:00–15:00. DHL disponibil."
      ctaHref="/wizard?problem=pasaport&country=it&consulat=trieste"
      ctaLabel="Documentele exacte pentru consulatul din Trieste →"
      updatedAt="aprilie 2026"
      sourceNote="Verificat live: trieste.mae.ro · econsulat.ro — aprilie 2026"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'date-consulat', title: 'Date consulat Trieste', content: (<div className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-3 text-sm"><div className="flex gap-3"><span>📍</span><div><p className="font-medium">Via Udine 11, 34132 Trieste</p><a href="https://www.google.com/maps/search/?api=1&query=Via+Udine+11+Trieste" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs underline">Google Maps →</a></div></div><div className="flex gap-3"><span>📞</span><p><a href="tel:+393408821688" className="text-blue-600 underline">+39 340.882.1688</a> <span className="text-xs text-gray-500">(urgențe)</span></p></div><div className="flex gap-3"><span>🕐</span><div><p className="font-medium">Depunere:</p><p>L-V 09:00–14:00 · exclusiv cu programare</p></div></div><div className="flex gap-3"><span>🕐</span><div><p className="font-medium">Ridicare:</p><p>Luni–Joi 15:30–16:30 · Vineri 14:00–15:00</p></div></div><div className="flex gap-3"><span>💳</span><p className="text-green-700 font-medium">53€ numerar ✅ confirmat</p></div><div className="flex gap-3"><span>⏱</span><div><p className="font-medium">Termen adulți: 45 zile luc.</p><p className="text-orange-700 font-medium">Termen minori: <strong>2–3 luni ⚠️</strong></p></div></div><div className="flex gap-3"><span>📦</span><p>DHL contra cost — la cerere ✅</p></div><div className="flex gap-3"><span>🌍</span><p>Veneto · Friuli-Venezia Giulia</p></div></div>) },
        { id: 'minor-atentie', title: '⚠️ Pașaport minor la Trieste: 2–3 luni', content: (<div className="rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm"><p className="font-semibold text-orange-900">Termenul pentru minori este 2–3 luni — confirmat pe trieste.mae.ro</p><p className="text-orange-800 mt-2">Dacă ai nevoie de pașaport pentru copil, planifică din timp. Spre deosebire de alte consulate (45 zile luc.), Trieste și Bari procesează pașapoartele de minori în 2–3 luni calendaristice.</p><a href="/pasaport-minor-italia" className="mt-2 inline-block text-xs font-medium text-orange-900 underline">Ghid pașaport copil CRDS Italia →</a></div>) },
        {
          id: 'pagini-conexe',
          title: 'Pagini conexe utile',
          content: (
            <div className="grid gap-3 sm:grid-cols-2 text-sm">
              <Link href="/pasaport-minor-italia" className="rounded-lg border border-orange-200 bg-orange-50 p-3 hover:bg-orange-100/60">
                <p className="font-medium text-orange-900">Pașaport copil CRDS din Italia</p>
                <p className="mt-1 text-orange-800">Pagina cea mai relevantă dacă ai de gestionat cazul minorului la Trieste.</p>
              </Link>
              <Link href="/pasaport-romania-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Pașaport românesc în Italia</p>
                <p className="mt-1 text-gray-600">Hub-ul general pentru toate situațiile de pașaport și toate consulatele.</p>
              </Link>
              <Link href="/titlu-calatorie-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Titlu de călătorie din Italia</p>
                <p className="mt-1 text-gray-600">La Trieste, titlul trebuie tratat conservator ca flux cu programare.</p>
              </Link>
              <Link href="/acte-romanesti-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Acte românești din Italia</p>
                <p className="mt-1 text-gray-600">Pentru orientare rapidă între toate procedurile disponibile din clusterul Italia.</p>
              </Link>
            </div>
          ),
        },
        { id: 'alte-consulate', title: 'Nu ești din Veneto?', content: (<div className="grid grid-cols-2 gap-2 text-sm">{[{city:'Roma',regions:'Lazio, Campania',href:'/pasaport-consulat-roma'},{city:'Milano',regions:'Lombardia, Trentino',href:'/pasaport-consulat-milano'},{city:'Bologna',regions:'Emilia-Romagna, Toscana',href:'/pasaport-consulat-bologna'},{city:'Torino',regions:'Piemonte, Liguria',href:'/pasaport-consulat-torino'},{city:'Bari',regions:'Puglia, Calabria',href:'/pasaport-consulat-bari'},{city:'Catania',regions:'Sicilia',href:'/pasaport-consulat-catania'}].map(({city,regions,href})=>(<a key={city} href={href} className="rounded-lg border border-gray-200 p-2.5 hover:bg-gray-50"><p className="font-medium">{city}</p><p className="text-xs text-gray-500">{regions}</p></a>))}</div>) },
      ]}
      finalCtaTitle="Documentele exacte pentru Trieste"
      finalCtaText="Lista completă verificată pentru consulatul din Trieste — adulți și minori."
    />
  )
}
