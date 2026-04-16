import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
export const metadata: Metadata = {
  title: 'Pașaport la Consulatul din Bari — Ghid complet 2026 | ActeRO',
  description: 'Taxa 53€ confirmată. Minori: 2–3 luni. Programare econsulat.ro sau bari.programari@mae.ro. Ridicare L-J 09:00–15:00. DHL contra cost. Puglia, Calabria, Basilicata.',
  keywords: ['pasaport consulat bari','romani bari pasaport','programare consulat bari','pasaport minor bari'],
  openGraph: { title: 'Pașaport la Consulatul din Bari — Ghid 2026', description: 'Taxa 53€ confirmată. Minori: 2–3 luni. Programare alternativă prin email.', url: 'https://www.actero.ro/pasaport-consulat-bari', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/pasaport-consulat-bari' },
}
const faqItems = [
  { question: 'Cât costă pașaportul la Bari?', answer: '53€ — confirmat explicit pe bari.mae.ro. Taxa corectă din 01.10.2025.' },
  { question: 'Nu găsesc sloturi pe econsulat.ro pentru Bari — ce fac?', answer: 'Consulatul Bari are o alternativă: trimiți email la bari.programari@mae.ro pentru a solicita programare.' },
  { question: 'Cât durează procesarea pașaportului unui minor la Bari?', answer: '2–3 luni — confirmat explicit pe bari.mae.ro/node/923. La fel ca Trieste.' },
  { question: 'Ce regiuni sunt arondate Consulatului din Bari?', answer: 'Basilicata, Calabria, Molise și Puglia.' },
  { question: 'Trebuie programare?', answer: 'Da — pe econsulat.ro sau prin email la bari.programari@mae.ro.' },
  { question: 'Pot ridica prin DHL?', answer: 'Da — DHL contra cost, solicitare scrisă la depunere.' },
]
const howToSteps = [
  { name: 'Verifică că ești arondat Bari', text: 'Basilicata, Calabria, Molise, Puglia → Bari.' },
  { name: 'Pregătește documentele', text: 'CRDS: pașaport + certificat naștere + document domiciliu italian. Non-CRDS: CI românească + pașaport + certificat naștere.' },
  { name: 'Programare econsulat.ro sau email', text: 'Dacă nu găsești sloturi pe econsulat.ro: bari.programari@mae.ro.' },
  { name: 'Ziua consulatului', text: 'L-V 09:00–15:00. Fotografii NU. Plătești 53€ numerar. DHL: anunți la ghișeu.' },
  { name: 'Ridică sau DHL', text: 'L-J 09:00–15:00 fără programare. SAU DHL contra cost.' },
]
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://www.actero.ro/pasaport-consulat-bari#article', headline: 'Pașaport la Consulatul din Bari — Ghid 2026', datePublished: '2026-04-01', dateModified: '2026-04-10', author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, mainEntityOfPage: 'https://www.actero.ro/pasaport-consulat-bari', inLanguage: 'ro' }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' }, { '@type': 'ListItem', position: 2, name: 'Acte românești Italia', item: 'https://www.actero.ro/acte-romanesti-italia' }, { '@type': 'ListItem', position: 3, name: 'Pașaport România Italia', item: 'https://www.actero.ro/pasaport-romania-italia' }, { '@type': 'ListItem', position: 4, name: 'Consulat Bari', item: 'https://www.actero.ro/pasaport-consulat-bari' } ] }
export default function PasaportConsulatBariPage() {
  return (
    <LlmOptimizedPage
      lpSlug="pasaport-consulat-bari"
      lpTopic="pasaport-geo-bari"
      h1="Pașaport românesc la Consulatul din Bari"
      intro="Ești din Puglia, Calabria sau Basilicata? Consulatul din Bari este relativ nou (2022–2023) și are două particularități importante: programare alternativă prin email și termen 2–3 luni pentru minori."
      tldr="Programare: econsulat.ro SAU bari.programari@mae.ro. Taxa: 53€ confirmat. Adulți: 45 zile luc. Minori: 2–3 luni ⚠️. Ridicare: L-J 09:00–15:00. DHL disponibil."
      ctaHref="/wizard?problem=pasaport&country=it&consulat=bari"
      ctaLabel="Documentele exacte pentru consulatul din Bari →"
      updatedAt="aprilie 2026"
      sourceNote="Verificat live: bari.mae.ro · econsulat.ro — aprilie 2026"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'date-consulat', title: 'Date consulat Bari', content: (<div className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-3 text-sm"><div className="flex gap-3"><span>📍</span><div><p className="font-medium">Via Bruno Zaccaro 19, 70126 Bari</p><a href="https://www.google.com/maps/search/?api=1&query=Via+Bruno+Zaccaro+19+Bari" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs underline">Google Maps →</a></div></div><div className="flex gap-3"><span>📞</span><p><a href="tel:+393346042299" className="text-blue-600 underline">+39 334.604.2299</a></p></div><div className="flex gap-3"><span>📧</span><p><a href="mailto:bari.programari@mae.ro" className="text-blue-600 underline text-xs">bari.programari@mae.ro</a> <span className="text-xs text-gray-500">(alternativă programare)</span></p></div><div className="flex gap-3"><span>🕐</span><p>Depunere: L-V 09:00–15:00 · cu programare</p></div><div className="flex gap-3"><span>🕐</span><p>Ridicare: Luni–Joi 09:00–15:00</p></div><div className="flex gap-3"><span>💳</span><p className="text-green-700 font-medium">53€ numerar ✅ confirmat</p></div><div className="flex gap-3"><span>⏱</span><div><p>Adulți: 45 zile luc.</p><p className="text-orange-700 font-medium">Minori: <strong>2–3 luni ⚠️</strong></p></div></div><div className="flex gap-3"><span>📦</span><p>DHL contra cost — la cerere ✅</p></div><div className="flex gap-3"><span>🌍</span><p>Basilicata · Calabria · Molise · Puglia</p></div></div>) },
        { id: 'email-programare', title: 'Nu găsești sloturi pe econsulat.ro?', content: (<div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm"><p className="font-semibold text-blue-900">Alternativă programare prin email</p><p className="text-blue-800 mt-1">Bari este singurul consulat italian cu adresă de email dedicată pentru programări: <a href="mailto:bari.programari@mae.ro" className="underline font-medium">bari.programari@mae.ro</a>. Dacă nu găsești sloturi pe econsulat.ro, trimite email cu cererea de programare.</p></div>) },
        {
          id: 'pagini-conexe',
          title: 'Pagini conexe utile',
          content: (
            <div className="grid gap-3 sm:grid-cols-2 text-sm">
              <Link href="/pasaport-minor-italia" className="rounded-lg border border-orange-200 bg-orange-50 p-3 hover:bg-orange-100/60">
                <p className="font-medium text-orange-900">Pașaport copil CRDS din Italia</p>
                <p className="mt-1 text-orange-800">La Bari, termenul pentru minori este una dintre cele mai importante excepții din Italia.</p>
              </Link>
              <Link href="/pasaport-romania-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Pașaport românesc în Italia</p>
                <p className="mt-1 text-gray-600">Pentru toate situațiile generale de pașaport, nu doar Bari.</p>
              </Link>
              <Link href="/programare-consulat-romania-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Programare la consulat în Italia</p>
                <p className="mt-1 text-gray-600">Include și excepția Bari, unde există alternativă prin email pentru programare.</p>
              </Link>
              <Link href="/acte-romanesti-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Acte românești din Italia</p>
                <p className="mt-1 text-gray-600">Hub-ul principal pentru toate procedurile și toate consulatele.</p>
              </Link>
            </div>
          ),
        },
        { id: 'alte-consulate', title: 'Nu ești din Puglia?', content: (<div className="grid grid-cols-2 gap-2 text-sm">{[{city:'Roma',regions:'Lazio, Campania',href:'/pasaport-consulat-roma'},{city:'Milano',regions:'Lombardia, Trentino',href:'/pasaport-consulat-milano'},{city:'Bologna',regions:'Emilia-Romagna, Toscana',href:'/pasaport-consulat-bologna'},{city:'Torino',regions:'Piemonte, Liguria',href:'/pasaport-consulat-torino'},{city:'Trieste',regions:'Veneto, Friuli',href:'/pasaport-consulat-trieste'},{city:'Catania',regions:'Sicilia',href:'/pasaport-consulat-catania'}].map(({city,regions,href})=>(<a key={city} href={href} className="rounded-lg border border-gray-200 p-2.5 hover:bg-gray-50"><p className="font-medium">{city}</p><p className="text-xs text-gray-500">{regions}</p></a>))}</div>) },
      ]}
      finalCtaTitle="Documentele exacte pentru consulatul din Bari"
      finalCtaText="Lista completă verificată pentru Bari — cu toți pașii pentru adulți și minori."
    />
  )
}
