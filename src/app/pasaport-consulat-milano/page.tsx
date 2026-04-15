import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
export const metadata: Metadata = {
  title: 'Pașaport la Consulatul din Milano — Ghid complet 2026 | ActeRO',
  description: 'Documente, programare econsulat.ro, plată numerar sau card, ridicare DHL — tot ce trebuie dacă ești din Lombardia sau Trentino. Verificat live aprilie 2026.',
  keywords: ['pasaport consulat milano','programare consulat milano','documente pasaport milano','consulat romaniei la milano','pasaport romanesc milano 2026'],
  openGraph: { title: 'Pașaport la Consulatul din Milano — Ghid 2026', description: 'Programare, documente, plată numerar sau card, ridicare DHL — ghid verificat pentru românii din Lombardia și Trentino.', url: 'https://www.actero.ro/pasaport-consulat-milano', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/pasaport-consulat-milano' },
}
const faqItems = [
  { question: 'Ce regiuni sunt arondate Consulatului din Milano?', answer: 'Lombardia și Trentino-Alto Adige. Dacă ești din altă regiune, consulatul tău este diferit.' },
  { question: 'Trebuie programare la Milano?', answer: 'Da, pe econsulat.ro. Program depunere: L-V 09:00–12:30 și 13:30–16:00.' },
  { question: 'Cum plătesc la Milano?', answer: 'Numerar (cash) SAU card bancar la ghișeu — unul din puținele consulate italiene care acceptă și card.' },
  { question: 'Cât costă pașaportul la Milano?', answer: 'Taxa legală 53€. Site-ul afișează 59€ (probabil neactualizat). Confirmă la ghișeu.' },
  { question: 'Pot ridica pașaportul prin DHL?', answer: 'Da. Soliciți DHL la depunere, primești link WhatsApp pentru plată, pașaportul vine la tine.' },
  { question: 'Există consulat itinerant la Trento?', answer: 'Da, în mod regulat. Calendarul 2026 nu era publicat în aprilie — urmărește milano.mae.ro.' },
  { question: 'Trebuie copii după acte?', answer: 'Nu. Milano specifică explicit că nu sunt necesare copii pentru pașapoarte și titluri de călătorie.' },
  { question: 'Cât durează procesarea?', answer: '45 zile lucrătoare adulți și minori. Verifici pe milano.mae.ro/cauta-pasaport.' },
]
const howToSteps = [
  { name: 'Verifică că ești arondat Milano', text: 'Lombardia și Trentino-Alto Adige → Milano. Altă regiune → alt consulat.' },
  { name: 'Pregătește documentele', text: 'CRDS: pașaport + certificat naștere + CI italiană. Domiciliu RO: CI românească + pașaport + certificat naștere. Copii NU sunt necesare.' },
  { name: 'Cerere pe econsulat.ro', text: 'Login → Cerere nouă → tipul corect → încarci documentele → trimiți.' },
  { name: 'Programare econsulat.ro', text: 'Program depunere: L-V 09:00–12:30 și 13:30–16:00.' },
  { name: 'Ziua consulatului', text: 'Originalele (fără copii, fără fotografii). Plătești 53€ numerar sau card. Chitanță → fotografiaz-o.' },
  { name: 'Ridică sau ceri DHL', text: 'Personal: L-V 09:00–10:00 sau 14:00–15:00. DHL: soliciți la depunere, plata prin WhatsApp.' },
]
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://www.actero.ro/pasaport-consulat-milano#article', headline: 'Pașaport la Consulatul din Milano — Ghid 2026', datePublished: '2026-04-01', dateModified: '2026-04-10', author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, mainEntityOfPage: 'https://www.actero.ro/pasaport-consulat-milano', inLanguage: 'ro' }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' }, { '@type': 'ListItem', position: 2, name: 'Acte românești Italia', item: 'https://www.actero.ro/acte-romanesti-italia' }, { '@type': 'ListItem', position: 3, name: 'Pașaport România Italia', item: 'https://www.actero.ro/pasaport-romania-italia' }, { '@type': 'ListItem', position: 4, name: 'Consulat Milano', item: 'https://www.actero.ro/pasaport-consulat-milano' } ] }
const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'GovernmentOffice', name: 'Consulatul General al României la Milano', address: { '@type': 'PostalAddress', streetAddress: 'Via Gignese 2', postalCode: '20148', addressLocality: 'Milano', addressCountry: 'IT' }, telephone: '+39 366.108.1444', url: 'https://milano.mae.ro', geo: { '@type': 'GeoCoordinates', latitude: 45.4537, longitude: 9.1355 } }
export default function PasaportConsulatMilanoPage() {
  return (
    <LlmOptimizedPage
      lpSlug="pasaport-consulat-milano"
      lpTopic="pasaport-geo-milano"
      h1="Pașaport românesc la Consulatul din Milano"
      intro="Locuiești în Lombardia sau Trentino și ai nevoie de pașaport românesc? Ghid complet cu programare, documente, plată și ridicare DHL — verificat live aprilie 2026."
      tldr="Programare obligatorie econsulat.ro. Plată: numerar SAU card bancar. Copii după acte NU. Fotografii NU — biometrie la ghișeu. Taxa: 53€ (site afișează 59€). Ridicare DHL disponibilă."
      ctaHref="/wizard?problem=pasaport&country=it&consulat=milano"
      ctaLabel="Documentele exacte pentru consulatul din Milano →"
      updatedAt="aprilie 2026"
      sourceNote="Verificat live: milano.mae.ro · econsulat.ro — aprilie 2026"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'date-consulat', title: 'Date consulat Milano', content: (<div className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-3 text-sm"><div className="flex gap-3"><span>📍</span><div><p className="font-medium">Via Gignese 2, 20148 Milano</p><a href="https://www.google.com/maps/search/?api=1&query=Via+Gignese+2+Milano" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs underline">Google Maps →</a></div></div><div className="flex gap-3"><span>📞</span><p><a href="tel:+393661081444" className="text-blue-600 underline">+39 366.108.1444</a> <span className="text-xs text-gray-500">(urgențe)</span></p></div><div className="flex gap-3"><span>🕐</span><div><p className="font-medium">Depunere:</p><p>L-V 09:00–12:30 și 13:30–16:00 · cu programare</p></div></div><div className="flex gap-3"><span>🕐</span><div><p className="font-medium">Ridicare:</p><p>L-V 09:00–10:00 și 14:00–15:00 · fără programare</p></div></div><div className="flex gap-3"><span>💳</span><div><p className="font-medium">Plată:</p><p>Numerar SAU card bancar · 53€ <span className="text-orange-600 text-xs">(site: 59€ ⚠️)</span></p></div></div><div className="flex gap-3"><span>📦</span><div><p className="font-medium">Livrare:</p><p>DHL — soliciți la depunere, plata prin WhatsApp</p></div></div><div className="flex gap-3"><span>🌍</span><p>Lombardia · Trentino-Alto Adige</p></div></div>) },
        { id: 'particularitati', title: 'Ce e specific față de alte consulate', content: (<div className="space-y-3 text-sm"><div className="flex gap-3 rounded-lg border border-green-100 bg-green-50 p-3"><span className="text-green-600 font-bold">✓</span><div><p className="font-medium text-green-900">Plată cu card bancar acceptată</p><p className="text-green-800">Unic în Italia — acceptă și card bancar, nu doar numerar.</p></div></div><div className="flex gap-3 rounded-lg border border-green-100 bg-green-50 p-3"><span className="text-green-600 font-bold">✓</span><div><p className="font-medium text-green-900">Copii după acte NU sunt necesare</p><p className="text-green-800">Explicit confirmat pe site — aduci doar originalele.</p></div></div><div className="flex gap-3 rounded-lg border border-green-100 bg-green-50 p-3"><span className="text-green-600 font-bold">✓</span><div><p className="font-medium text-green-900">Ridicare DHL prin WhatsApp</p><p className="text-green-800">Nu mai faci al doilea drum la consulat.</p></div></div><div className="flex gap-3 rounded-lg border border-orange-100 bg-orange-50 p-3"><span className="text-orange-600 font-bold">⚠</span><div><p className="font-medium text-orange-900">Taxă afișată pe site: 59€ (probabil incorect)</p><p className="text-orange-800">Taxa legală din 01.10.2025 este 53€. Confirmă la ghișeu.</p></div></div></div>) },
        { id: 'urgente', title: 'Urgențe — titlu de călătorie la Milano', content: (<div className="rounded-lg border border-orange-200 bg-orange-50 p-4 text-sm"><p className="font-semibold text-orange-900">⚡ Pașaport expirat/pierdut și trebuie să pleci urgent?</p><p className="text-orange-800 mt-2">Titlul de călătorie urgent se eliberează <strong>fără programare</strong> la Milano — anunți pe linia de urgență: <a href="tel:+393661081444" className="underline font-medium">+39 366.108.1444</a>.</p><a href="/titlu-calatorie-urgenta-italia" className="mt-2 inline-block text-xs font-medium text-orange-900 underline">Ghid titlu de călătorie urgent →</a></div>) },
        {
          id: 'pagini-conexe',
          title: 'Pagini conexe utile',
          content: (
            <div className="grid gap-3 sm:grid-cols-2 text-sm">
              <Link href="/pasaport-romania-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Pașaport românesc în Italia</p>
                <p className="mt-1 text-gray-600">Ghidul general pentru toate situațiile de pașaport, nu doar pentru Milano.</p>
              </Link>
              <Link href="/pasaport-expirat-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Pașaport expirat în Italia</p>
                <p className="mt-1 text-gray-600">Pentru traseul complet când documentul este expirat sau deteriorat.</p>
              </Link>
              <Link href="/titlu-calatorie-urgenta-italia" className="rounded-lg border border-orange-200 bg-orange-50 p-3 hover:bg-orange-100/60">
                <p className="font-medium text-orange-900">Titlu de călătorie urgent</p>
                <p className="mt-1 text-orange-800">La Milano, acest flux este unul dintre cele mai flexibile din Italia.</p>
              </Link>
              <Link href="/acte-romanesti-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Acte românești din Italia</p>
                <p className="mt-1 text-gray-600">Hub-ul principal pentru toate procedurile consulare și cele care cer drum în România.</p>
              </Link>
            </div>
          ),
        },
        { id: 'alte-consulate', title: 'Nu ești din Lombardia?', content: (<div className="grid grid-cols-2 gap-2 text-sm">{[{city:'Roma',regions:'Lazio, Campania…',href:'/pasaport-consulat-roma'},{city:'Bologna',regions:'Emilia-Romagna, Toscana…',href:'/pasaport-consulat-bologna'},{city:'Torino',regions:'Piemonte, Liguria…',href:'/pasaport-consulat-torino'},{city:'Trieste',regions:'Veneto, Friuli…',href:'/pasaport-consulat-trieste'},{city:'Bari',regions:'Puglia, Calabria…',href:'/pasaport-consulat-bari'},{city:'Catania',regions:'Sicilia',href:'/pasaport-consulat-catania'}].map(({city,regions,href})=>(<a key={city} href={href} className="rounded-lg border border-gray-200 p-2.5 hover:bg-gray-50"><p className="font-medium">{city}</p><p className="text-xs text-gray-500">{regions}</p></a>))}</div>) },
      ]}
      finalCtaTitle="Documentele exacte pentru consulatul din Milano"
      finalCtaText="Wizardul ActeRO îți dă lista completă verificată pentru depunerea la Milano în 30 de secunde."
    />
  )
}
