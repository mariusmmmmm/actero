import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
export const metadata: Metadata = {
  title: 'Pașaport la Consulatul din Torino — Ghid complet 2026',
  description: "Exclusiv cu programare — inclusiv urgențe. Ridicare: joi 14:30–15:30 (o singură zi/săptămână). Taxa 53€ confirmată. Piemonte, Liguria, Valle d'Aosta.",
  keywords: ['pasaport consulat torino','programare consulat torino','cat dureaza pasaport torino','romani torino pasaport'],
  openGraph: { title: 'Pașaport la Consulatul din Torino — Ghid 2026', description: 'EXCLUSIV cu programare — chiar și urgențele. Ridicare: joi 14:30–15:30 sau plic preplătit.', url: 'https://www.actero.ro/pasaport-consulat-torino', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/pasaport-consulat-torino' },
}
const faqItems = [
  { question: 'Pot merge fără programare la Consulatul din Torino?', answer: 'Nu. Torino este consulatul cu cea mai strictă politică de programare din Italia — chiar și urgențele cer programare pe econsulat.ro. Nu există walk-in pentru nicio procedură.' },
  { question: 'Când ridic pașaportul la Torino?', answer: 'Ridicarea este posibilă o singură zi pe săptămână: joi, 14:30–15:30. SAU prin plic preplătit autoadresat depus odată cu cererea.' },
  { question: 'Cât costă pașaportul la Torino?', answer: '53€ — confirmat explicit pe torino.mae.ro. Unul din puținele consulate care afișează corect taxa actualizată din 01.10.2025.' },
  { question: 'Cum plătesc la Torino?', answer: 'Numerar (cash) la ghișeu.' },
  { question: 'Ce regiuni sunt arondate Consulatului din Torino?', answer: "Piemonte, Liguria și Valle d'Aosta." },
  { question: 'Pot ridica pașaportul prin poștă?', answer: 'Da — prin plic preplătit autoadresat depus la depunerea cererii. Pașaportul vine direct la adresa ta.' },
  { question: 'Cât durează procesarea?', answer: '45 zile lucrătoare pentru adulți și minori. Taxa 53€.' },
  { question: 'Există urgențe walk-in la Torino?', answer: 'Nu. Chiar și pentru urgențe trebuie programare. Suni la +39 338.756.8134 pentru asistență.' },
]
const howToSteps = [
  { name: 'Verifică că ești arondat Torino', text: "Piemonte, Liguria, Valle d'Aosta → Torino." },
  { name: 'Pregătește documentele', text: 'CRDS: pașaport + certificat naștere + document domiciliu italian. Non-CRDS: CI românească + pașaport + certificat naștere.' },
  { name: 'Cerere pe econsulat.ro', text: 'Login → Cerere nouă → tipul corect → încarci → trimiți.' },
  { name: 'Programare econsulat.ro', text: 'OBLIGATORIE — inclusiv pentru urgențe. Fără programare nu ești primit.' },
  { name: 'Ziua consulatului', text: 'Fotografii NU. Plătești 53€ numerar. Dacă vrei livrare prin poștă, ai pregătit plicul preplătit autoadresat.' },
  { name: 'Ridică', text: 'Joi 14:30–15:30 fără programare. SAU pașaportul vine prin plicul preplătit.' },
]
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://www.actero.ro/pasaport-consulat-torino#article', headline: 'Pașaport la Consulatul din Torino — Ghid 2026', datePublished: '2026-04-01', dateModified: '2026-04-10', author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, mainEntityOfPage: 'https://www.actero.ro/pasaport-consulat-torino', inLanguage: 'ro' }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' }, { '@type': 'ListItem', position: 2, name: 'Acte românești Italia', item: 'https://www.actero.ro/acte-romanesti-italia' }, { '@type': 'ListItem', position: 3, name: 'Pașaport România Italia', item: 'https://www.actero.ro/pasaport-romania-italia' }, { '@type': 'ListItem', position: 4, name: 'Consulat Torino', item: 'https://www.actero.ro/pasaport-consulat-torino' } ] }
export default function PasaportConsulatTorinoPage() {
  return (
    <LlmOptimizedPage
      lpSlug="pasaport-consulat-torino"
      lpTopic="pasaport-geo-torino"
      h1="Pașaport românesc la Consulatul din Torino"
      intro="Ești din Piemonte sau Liguria? Consulatul din Torino funcționează exclusiv cu programare — chiar și urgențele. Ridici pașaportul o singură zi pe săptămână sau îl primești acasă prin plic preplătit."
      tldr="EXCLUSIV cu programare econsulat.ro — inclusiv urgențe. Taxa: 53€ confirmat (cel mai corect afișat din Italia). Ridicare: joi 14:30–15:30 SAU plic preplătit autoadresat. Fotografii NU."
      ctaHref="/wizard?problem=pasaport&country=it&consulat=torino"
      ctaLabel="Documentele exacte pentru consulatul din Torino →"
      updatedAt="aprilie 2026"
      sourceNote="Verificat live: torino.mae.ro · econsulat.ro — aprilie 2026"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'date-consulat', title: 'Date consulat Torino', content: (<div className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-3 text-sm"><div className="flex gap-3"><span>📍</span><div><p className="font-medium">Via Ancona 7, 10152 Torino</p><a href="https://www.google.com/maps/search/?api=1&query=Via+Ancona+7+Torino" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs underline">Google Maps →</a></div></div><div className="flex gap-3"><span>📞</span><p><a href="tel:+393387568134" className="text-blue-600 underline">+39 338.756.8134</a> <span className="text-xs text-gray-500">(urgențe)</span></p></div><div className="flex gap-3"><span className="text-orange-600 font-bold">⚠</span><div><p className="font-medium text-orange-900">EXCLUSIV cu programare econsulat.ro</p><p className="text-orange-700 text-xs">Fără walk-in pentru nicio procedură — inclusiv urgențe</p></div></div><div className="flex gap-3"><span>🕐</span><div><p className="font-medium">Ridicare:</p><p className="font-medium text-blue-700">Joi 14:30–15:30</p><p className="text-gray-500 text-xs">SAU plic preplătit autoadresat</p></div></div><div className="flex gap-3"><span>💳</span><p className="text-green-700 font-medium">53€ numerar ✅ confirmat</p></div><div className="flex gap-3"><span>📦</span><p>Livrare: plic preplătit autoadresat depus cu cererea ✅</p></div><div className="flex gap-3"><span>🌍</span><p>Piemonte · Liguria · Valle d&apos;Aosta</p></div></div>) },
        { id: 'atentie-programare', title: '⚠️ Nicio excepție de la programare', content: (<div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm"><p className="font-semibold text-red-900">Torino nu are urgențe walk-in</p><p className="text-red-800 mt-2">Spre deosebire de Roma, Milano sau Bologna, la Torino nu există nicio procedură fără programare prealabilă pe econsulat.ro — nici pentru titlu de călătorie urgent. Dacă ai o urgență, suni la <a href="tel:+393387568134" className="underline">+39 338.756.8134</a> pentru a discuta variante.</p></div>) },
        {
          id: 'pagini-conexe',
          title: 'Pagini conexe utile',
          content: (
            <div className="grid gap-3 sm:grid-cols-2 text-sm">
              <Link href="/pasaport-romania-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Pașaport românesc în Italia</p>
                <p className="mt-1 text-gray-600">Pentru contextul general dacă încă alegi între tipul de pașaport și traseul complet.</p>
              </Link>
              <Link href="/titlu-calatorie-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Titlu de călătorie din Italia</p>
                <p className="mt-1 text-gray-600">La Torino, această pagină este importantă pentru că nu există walk-in nici pentru urgențe.</p>
              </Link>
              <Link href="/programare-consulat-romania-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Programare la consulat în Italia</p>
                <p className="mt-1 text-gray-600">Pentru pașii de econsulat și excepțiile de programare din restul Italiei.</p>
              </Link>
              <Link href="/acte-romanesti-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Acte românești din Italia</p>
                <p className="mt-1 text-gray-600">Hub-ul principal pentru toate procedurile și toate consulatele.</p>
              </Link>
            </div>
          ),
        },
        { id: 'alte-consulate', title: 'Nu ești din Piemonte?', content: (<div className="grid grid-cols-2 gap-2 text-sm">{[{city:'Roma',regions:'Lazio, Campania',href:'/pasaport-consulat-roma'},{city:'Milano',regions:'Lombardia, Trentino',href:'/pasaport-consulat-milano'},{city:'Bologna',regions:'Emilia-Romagna, Toscana',href:'/pasaport-consulat-bologna'},{city:'Trieste',regions:'Veneto, Friuli',href:'/pasaport-consulat-trieste'},{city:'Bari',regions:'Puglia, Calabria',href:'/pasaport-consulat-bari'},{city:'Catania',regions:'Sicilia',href:'/pasaport-consulat-catania'}].map(({city,regions,href})=>(<a key={city} href={href} className="rounded-lg border border-gray-200 p-2.5 hover:bg-gray-50"><p className="font-medium">{city}</p><p className="text-xs text-gray-500">{regions}</p></a>))}</div>) },
      ]}
      finalCtaTitle="Lista exactă de documente pentru Torino"
      finalCtaText="Wizardul ActeRO îți dă lista completă verificată și te ghidează prin programarea pe econsulat.ro."
    />
  )
}
