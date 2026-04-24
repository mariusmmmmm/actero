import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
export const metadata: Metadata = {
  title: 'Pașaport la Consulatul din Roma — Ghid complet 2026',
  description: 'Documente, programare, program ridicare CRDS vs non-CRDS, urgențe titlu de călătorie L-V 11:00–13:00. Lazio, Campania, Abruzzo, Sardegna. Verificat aprilie 2026.',
  keywords: ['pasaport consulat roma','programare ambasada romaniei la roma','acte necesare pasaport roma','consulat romani roma','pasaport crds roma'],
  openGraph: { title: 'Pașaport la Consulatul din Roma — Ghid 2026', description: 'Atenție: Vineri NU pașapoarte obișnuite. Ridicare CRDS vs non-CRDS: programe diferite. Urgențe walk-in L-V 11:00–13:00.', url: 'https://www.actero.ro/pasaport-consulat-roma', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/pasaport-consulat-roma' },
}
const faqItems = [
  { question: 'Ce regiuni sunt arondate Consulatului din Roma?', answer: 'Lazio, Abruzzo, Campania, Sardegna și Umbria.' },
  { question: 'Pot merge vineri să depun pașaportul la Roma?', answer: 'Nu. Vinerea nu se depun pașapoarte obișnuite — doar vize, minori tutelați, cetățenie, căsătorii și asistență consulară. Mergi luni–joi 09:00–15:00.' },
  { question: 'Care e programul de ridicare pentru CRDS vs non-CRDS la Roma?', answer: 'Pașaporte CRDS (domiciliu Italia): L-V 14:30–16:00. Pașapoarte non-CRDS (domiciliu România): L-J 09:00–14:00. Programele sunt complet diferite — verifică tipul tău.' },
  { question: 'Pot ridica pașaportul prin curier?', answer: 'Da. La cerere, poți folosi un curierat ales de tine, pe cheltuiala ta.' },
  { question: 'Cât costă pașaportul la Roma?', answer: 'Taxa legală din 01.10.2025 este 53€. Site-ul afișează 59€ (probabil neactualizat). Confirmă la ghișeu.' },
  { question: 'Există urgențe titlu de călătorie walk-in la Roma?', answer: 'Da. Titlul de călătorie urgent se eliberează fără programare L-V 11:00–13:00, cu dovadă de plecare în maxim 2 săptămâni.' },
  { question: 'Există consulate itinerante din Roma?', answer: 'Da. Consulatul din Roma acoperă și Malta cu misiuni consulare itinerante în 2026.' },
  { question: 'Trebuie fotografii pentru pașaport la Roma?', answer: 'Nu. Biometrie la ghișeu pentru ambele tipuri de pașaport (CRDS și non-CRDS).' },
]
const howToSteps = [
  { name: 'Verifică că ești arondat Roma', text: 'Lazio, Abruzzo, Campania, Sardegna, Umbria → Roma.' },
  { name: 'Pregătește documentele', text: 'CRDS: pașaport + certificat naștere + document domiciliu italian. Non-CRDS: CI românească valabilă + pașaport + certificat naștere.' },
  { name: 'Cerere pe econsulat.ro', text: 'Login → Cerere nouă → tipul corect → încarci documentele → trimiți.' },
  { name: 'Programare L-J', text: 'Program depunere: L-J 09:00–15:00. Vineri: NU pașapoarte obișnuite.' },
  { name: 'Ziua consulatului', text: 'Originalele. Fotografii NU. Plătești 53€. Chitanță → fotografiaz-o.' },
  { name: 'Ridică — verifică tipul pașaportului', text: 'CRDS: vii L-V 14:30–16:00. Non-CRDS: vii L-J 09:00–14:00. Sau ceri curierat.' },
]
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://www.actero.ro/pasaport-consulat-roma#article', headline: 'Pașaport la Consulatul din Roma — Ghid 2026', datePublished: '2026-04-01', dateModified: '2026-04-10', author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, mainEntityOfPage: 'https://www.actero.ro/pasaport-consulat-roma', inLanguage: 'ro' }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' }, { '@type': 'ListItem', position: 2, name: 'Acte românești Italia', item: 'https://www.actero.ro/acte-romanesti-italia' }, { '@type': 'ListItem', position: 3, name: 'Pașaport România Italia', item: 'https://www.actero.ro/pasaport-romania-italia' }, { '@type': 'ListItem', position: 4, name: 'Consulat Roma', item: 'https://www.actero.ro/pasaport-consulat-roma' } ] }
export default function PasaportConsulatRomaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="pasaport-consulat-roma"
      lpTopic="pasaport-geo-roma"
      h1="Pașaport românesc la Consulatul din Roma"
      intro="Ești din Lazio, Campania, Abruzzo sau Sardegna? Ghid complet pentru Consulatul General al României din Roma — cu toate particularitățile pe care nu le găsești pe site-ul oficial."
      tldr="Vineri NU se depun pașapoarte obișnuite. Ridicare CRDS (L-V 14:30–16:00) ≠ non-CRDS (L-J 09:00–14:00). Urgențe titlu: walk-in L-V 11:00–13:00. Taxa: 53€ (site: 59€). Fotografii NU — biometrie."
      ctaHref="/wizard?problem=pasaport&country=it&consulat=roma"
      ctaLabel="Documentele exacte pentru consulatul din Roma →"
      updatedAt="aprilie 2026"
      sourceNote="Verificat live: cgroma.mae.ro · econsulat.ro — aprilie 2026"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'date-consulat', title: 'Date consulat Roma', content: (<div className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-3 text-sm"><div className="flex gap-3"><span>📍</span><div><p className="font-medium">Viale Libano 40, 00144 Roma</p><a href="https://www.google.com/maps/search/?api=1&query=Viale+Libano+40+Roma" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs underline">Google Maps →</a></div></div><div className="flex gap-3"><span>📞</span><p><a href="tel:+393451473935" className="text-blue-600 underline">+39 345.147.3935</a> <span className="text-xs text-gray-500">(urgențe)</span></p></div><div className="flex gap-3"><span>🕐</span><div><p className="font-medium">Depunere:</p><p>Luni–Joi 09:00–15:00 · cu programare econsulat.ro</p><p className="text-orange-700 text-xs font-medium mt-0.5">⚠️ Vineri: NU pașapoarte obișnuite</p></div></div><div className="flex gap-3"><span>🕐</span><div><p className="font-medium">Ridicare CRDS (domiciliu Italia):</p><p className="font-medium text-blue-700">Luni–Vineri 14:30–16:00 ✅</p></div></div><div className="flex gap-3"><span>🕐</span><div><p className="font-medium">Ridicare non-CRDS (domiciliu România):</p><p>Luni–Joi 09:00–14:00</p></div></div><div className="flex gap-3"><span>⚡</span><div><p className="font-medium">Urgențe titlu de călătorie:</p><p>L-V 11:00–13:00 · fără programare · max 2 săptămâni</p></div></div><div className="flex gap-3"><span>💳</span><p>Plată: 53€ <span className="text-orange-600 text-xs">(site: 59€ ⚠️)</span> · metodă nespecificată</p></div><div className="flex gap-3"><span>📦</span><p>Livrare: curierat ales de titular la cerere ✅</p></div><div className="flex gap-3"><span>🌍</span><p>Lazio · Abruzzo · Campania · Sardegna · Umbria</p></div></div>) },
        { id: 'atentie-vineri', title: '⚠️ Greșeala frecventă: vinerea la Roma', content: (<div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm"><p className="font-semibold text-red-900">Vineri nu se depun pașapoarte obișnuite la Roma</p><p className="text-red-800 mt-2">Vinerea este rezervat exclusiv pentru: vize, minori tutelați, cetățenie, căsătorii și asistență consulară. Dacă vii vineri cu dosarul de pașaport, cererea nu va fi preluată. Mergi <strong>luni–joi</strong>.</p></div>) },
        { id: 'ridicare-crds-vs-ro', title: '⚠️ Ridicare CRDS ≠ non-CRDS — intervale diferite', content: (<div className="rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm space-y-2"><p className="font-semibold text-orange-900">Programul de ridicare depinde de tipul pașaportului</p><div className="grid grid-cols-2 gap-3 mt-2"><div className="rounded bg-white border border-blue-200 p-2"><p className="font-medium text-blue-800 text-xs">CRDS (domiciliu Italia)</p><p className="text-blue-700 font-bold mt-1">L-V 14:30–16:00</p></div><div className="rounded bg-white border border-gray-200 p-2"><p className="font-medium text-gray-700 text-xs">Non-CRDS (domiciliu România)</p><p className="text-gray-700 font-bold mt-1">L-J 09:00–14:00</p></div></div><p className="text-orange-700 text-xs mt-2">Dacă vii în intervalul greșit, pașaportul nu poate fi eliberat.</p></div>) },
        {
          id: 'pagini-conexe',
          title: 'Pagini conexe utile',
          content: (
            <div className="grid gap-3 sm:grid-cols-2 text-sm">
              <Link href="/pasaport-romania-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Pașaport românesc în Italia</p>
                <p className="mt-1 text-gray-600">Pentru traseul general CRDS vs domiciliu România și toate situațiile de bază.</p>
              </Link>
              <Link href="/titlu-calatorie-urgenta-italia" className="rounded-lg border border-orange-200 bg-orange-50 p-3 hover:bg-orange-100/60">
                <p className="font-medium text-orange-900">Titlu de călătorie urgent</p>
                <p className="mt-1 text-orange-800">La Roma există unul dintre cele mai clare fluxuri walk-in pentru urgențe.</p>
              </Link>
              <Link href="/programare-consulat-romania-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Programare la consulat în Italia</p>
                <p className="mt-1 text-gray-600">Pentru econsulat, validare și excepțiile de programare din Italia.</p>
              </Link>
              <Link href="/acte-romanesti-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Acte românești din Italia</p>
                <p className="mt-1 text-gray-600">Hub-ul principal pentru toate procedurile din clusterul Italia.</p>
              </Link>
            </div>
          ),
        },
        { id: 'alte-consulate', title: 'Nu ești din Lazio sau Campania?', content: (<div className="grid grid-cols-2 gap-2 text-sm">{[{city:'Milano',regions:'Lombardia, Trentino',href:'/pasaport-consulat-milano'},{city:'Bologna',regions:'Emilia-Romagna, Toscana',href:'/pasaport-consulat-bologna'},{city:'Torino',regions:'Piemonte, Liguria',href:'/pasaport-consulat-torino'},{city:'Trieste',regions:'Veneto, Friuli',href:'/pasaport-consulat-trieste'},{city:'Bari',regions:'Puglia, Calabria',href:'/pasaport-consulat-bari'},{city:'Catania',regions:'Sicilia',href:'/pasaport-consulat-catania'}].map(({city,regions,href})=>(<a key={city} href={href} className="rounded-lg border border-gray-200 p-2.5 hover:bg-gray-50"><p className="font-medium">{city}</p><p className="text-xs text-gray-500">{regions}</p></a>))}</div>) },
      ]}
      finalCtaTitle="Documentele exacte pentru consulatul din Roma"
      finalCtaText="Wizardul ActeRO îți spune tipul corect de pașaport și lista completă de documente verificată în aprilie 2026."
    />
  )
}
