import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
export const metadata: Metadata = {
  title: 'Pașaport la Consulatul din Bologna — fără programare obligatorie | ActeRO',
  description: 'Singurul consulat român din Italia fără programare obligatorie. Documente, ore, urgențe și ce înseamnă "bilet de avion nu e urgență". Emilia-Romagna, Toscana, Marche.',
  keywords: ['pasaport consulat bologna','consulat romania bologna fara programare','programare consulat bologna','acte pasaport bologna','romani bologna'],
  openGraph: { title: 'Pașaport la Consulatul din Bologna — fără programare obligatorie', description: 'Singurul consulat italian fără programare obligatorie. Mergi direct L-V 09:00–14:00.', url: 'https://www.actero.ro/pasaport-consulat-bologna', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/pasaport-consulat-bologna' },
}
const faqItems = [
  { question: 'Bologna chiar nu cere programare?', answer: 'Corect. Bologna este singurul consulat român din Italia fără programare obligatorie. Te prezinți direct L-V 09:00–14:00.' },
  { question: 'Ce regiuni sunt arondate Consulatului din Bologna?', answer: 'Emilia-Romagna, Marche, Toscana și San Marino.' },
  { question: 'Cât costă pașaportul la Bologna?', answer: 'Taxa legală 53€. Site-ul afișează 59€ (probabil neactualizat). Confirmă la ghișeu.' },
  { question: 'Pot merge urgent pentru titlu de călătorie la Bologna?', answer: 'Da — fără programare, direct în program L-V 09:00–14:00, cu documente justificative. Atenție: biletul de avion singur NU este considerată urgență.' },
  { question: 'Minorul sub 14 ani poate obține titlu de călătorie fără să vină?', answer: 'Nu. Bologna este singurul consulat italian unde prezența minorului sub 14 ani este obligatorie pentru titlul de călătorie — se face biometrie la ghișeu.' },
  { question: 'Pot ridica pașaportul fără să mă întorc?', answer: 'Da, prin curierat ales de tine pe cheltuiala ta.' },
  { question: 'Cât durează procesarea la Bologna?', answer: 'Adulți: 45 zile lucrătoare. Minori: "30–45 zile" (posibil calendaristice, nu lucrătoare — de confirmat).' },
  { question: 'Trebuie fotografii?', answer: 'Nu pentru pașaport. Biometrie la ghișeu. Excepție: minori sub 14 ani pentru titlu de călătorie — prezență obligatorie + biometrie la ghișeu.' },
]
const howToSteps = [
  { name: 'Verifică că ești arondat Bologna', text: 'Emilia-Romagna, Marche, Toscana, San Marino → Bologna.' },
  { name: 'Pregătește documentele', text: 'CRDS: pașaport + certificat naștere + document domiciliu italian. Non-CRDS: CI românească + pașaport + certificat naștere.' },
  { name: 'Scanează pe econsulat.ro', text: 'Login → Cerere nouă → tipul corect → încarci → trimiți.' },
  { name: 'Te prezinți direct', text: 'Fără programare. Program: L-V 09:00–14:00. Aduci originalele.' },
  { name: 'Ziua consulatului', text: 'Fotografii NU. Plătești 53€. Chitanță → fotografiaz-o. Termen: 45 zile luc.' },
  { name: 'Ridică', text: 'L-J 15:00–17:00, fără programare. SAU curierat ales de tine la cerere.' },
]
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://www.actero.ro/pasaport-consulat-bologna#article', headline: 'Pașaport la Consulatul din Bologna — fără programare', datePublished: '2026-04-01', dateModified: '2026-04-10', author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, mainEntityOfPage: 'https://www.actero.ro/pasaport-consulat-bologna', inLanguage: 'ro' }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' }, { '@type': 'ListItem', position: 2, name: 'Acte românești Italia', item: 'https://www.actero.ro/acte-romanesti-italia' }, { '@type': 'ListItem', position: 3, name: 'Pașaport România Italia', item: 'https://www.actero.ro/pasaport-romania-italia' }, { '@type': 'ListItem', position: 4, name: 'Consulat Bologna', item: 'https://www.actero.ro/pasaport-consulat-bologna' } ] }
export default function PasaportConsulatBolognaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="pasaport-consulat-bologna"
      lpTopic="pasaport-geo-bologna"
      h1="Pașaport românesc la Consulatul din Bologna — singurul fără programare"
      intro="Ești din Emilia-Romagna, Toscana sau Marche? Consulatul din Bologna este singurul din Italia unde nu ai nevoie de programare obligatorie — te prezinți direct în program."
      tldr="Fără programare obligatorie — mergi direct L-V 09:00–14:00. Ridicare: L-J 15:00–17:00 sau curierat. Urgențe: direct în program cu documente justificative (biletul de avion singur NU e urgență). Taxa: 53€ (site: 59€). Minori sub 14 titlu: prezență obligatorie."
      ctaHref="/wizard?problem=pasaport&country=it&consulat=bologna"
      ctaLabel="Documentele exacte pentru consulatul din Bologna →"
      updatedAt="aprilie 2026"
      sourceNote="Verificat live: bologna.mae.ro · econsulat.ro — aprilie 2026"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'date-consulat', title: 'Date consulat Bologna', content: (<div className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-3 text-sm"><div className="flex gap-3"><span>📍</span><div><p className="font-medium">Via Guelfa 9, Scala A, Int. 3, 40138 Bologna</p><a href="https://www.google.com/maps/search/?api=1&query=Via+Guelfa+9+Bologna" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs underline">Google Maps →</a></div></div><div className="flex gap-3"><span>📞</span><p><a href="tel:+393491178220" className="text-blue-600 underline">+39 349.117.8220</a> <span className="text-xs text-gray-500">(urgențe)</span></p></div><div className="flex gap-3"><span className="text-green-600 font-bold">✓</span><div><p className="font-medium text-green-800">Fără programare obligatorie</p><p className="text-green-700">L-V 09:00–14:00 · prezentare directă</p></div></div><div className="flex gap-3"><span>🕐</span><div><p className="font-medium">Ridicare:</p><p>Luni–Joi 15:00–17:00 · fără programare</p></div></div><div className="flex gap-3"><span>💳</span><p>Plată: 53€ <span className="text-orange-600 text-xs">(site: 59€ ⚠️)</span></p></div><div className="flex gap-3"><span>📦</span><p>Livrare: curierat ales de titular la cerere ✅</p></div><div className="flex gap-3"><span>🌍</span><p>Emilia-Romagna · Marche · Toscana · San Marino</p></div></div>) },
        { id: 'urgente', title: 'Urgențe titlu de călătorie — ce trebuie să știi', content: (<div className="rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm space-y-2"><p className="font-semibold text-orange-900">⚡ Urgențe la Bologna — fără programare</p><p className="text-orange-800">Te prezinți direct în program L-V 09:00–14:00 cu documente justificative.</p><div className="rounded bg-red-50 border border-red-200 p-2 mt-2"><p className="text-red-800 text-xs font-medium">⚠️ Biletul de avion singur NU este considerat urgență la Bologna.</p><p className="text-red-700 text-xs mt-0.5">Trebuie dovadă de urgență reală (medical, deces în familie, etc.).</p></div><p className="text-orange-800 mt-2"><strong>Minori sub 14 ani:</strong> prezență obligatorie pentru titlu de călătorie — biometrie la ghișeu. Unic în Italia.</p></div>) },
        {
          id: 'pagini-conexe',
          title: 'Pagini conexe utile',
          content: (
            <div className="grid gap-3 sm:grid-cols-2 text-sm">
              <Link href="/pasaport-romania-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Pașaport românesc în Italia</p>
                <p className="mt-1 text-gray-600">Ghidul general dacă încă alegi între CRDS, domiciliu România, expirat sau pierdut.</p>
              </Link>
              <Link href="/titlu-calatorie-urgenta-italia" className="rounded-lg border border-orange-200 bg-orange-50 p-3 hover:bg-orange-100/60">
                <p className="font-medium text-orange-900">Titlu de călătorie urgent</p>
                <p className="mt-1 text-orange-800">Relevant mai ales la Bologna, unde urgențele se preiau fără programare, dar cu dovezi reale.</p>
              </Link>
              <Link href="/titlu-calatorie-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Titlu de călătorie din Italia</p>
                <p className="mt-1 text-gray-600">Pentru diferențele dintre consulate și regulile complete pentru întoarcerea în România.</p>
              </Link>
              <Link href="/acte-romanesti-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Acte românești din Italia</p>
                <p className="mt-1 text-gray-600">Hub-ul principal dacă vrei să vezi toate procedurile din clusterul Italia.</p>
              </Link>
            </div>
          ),
        },
        { id: 'alte-consulate', title: 'Nu ești din Emilia-Romagna sau Toscana?', content: (<div className="grid grid-cols-2 gap-2 text-sm">{[{city:'Roma',regions:'Lazio, Campania',href:'/pasaport-consulat-roma'},{city:'Milano',regions:'Lombardia, Trentino',href:'/pasaport-consulat-milano'},{city:'Torino',regions:'Piemonte, Liguria',href:'/pasaport-consulat-torino'},{city:'Trieste',regions:'Veneto, Friuli',href:'/pasaport-consulat-trieste'},{city:'Bari',regions:'Puglia, Calabria',href:'/pasaport-consulat-bari'},{city:'Catania',regions:'Sicilia',href:'/pasaport-consulat-catania'}].map(({city,regions,href})=>(<a key={city} href={href} className="rounded-lg border border-gray-200 p-2.5 hover:bg-gray-50"><p className="font-medium">{city}</p><p className="text-xs text-gray-500">{regions}</p></a>))}</div>) },
      ]}
      finalCtaTitle="Lista exactă de documente pentru Bologna"
      finalCtaText="Wizardul ActeRO îți dă documentele verificate specific pentru consulatul din Bologna."
    />
  )
}
