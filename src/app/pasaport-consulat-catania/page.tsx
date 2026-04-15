import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
export const metadata: Metadata = {
  title: 'Pașaport la Consulatul din Catania — Date corecte 2026 | ActeRO',
  description: 'Atenție: site-ul oficial afișează 100€ — taxa incorectă. Datele reale și avertizarea completă pentru românii din Sicilia. Confirmă direct înainte de deplasare.',
  keywords: ['pasaport consulat catania','taxa pasaport consulat catania','romani catania pasaport','consulat romanesc catania sicilia'],
  openGraph: { title: 'Pașaport la Consulatul din Catania — Date corecte 2026', description: 'Site-ul afișează 100€ (incorect). Taxa reală estimată: 53€. Singura sursă cu avertizare clară pentru Sicilia.', url: 'https://www.actero.ro/pasaport-consulat-catania', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/pasaport-consulat-catania' },
}
const faqItems = [
  { question: 'De ce afișează site-ul Catania 100€ pentru pașaport?', answer: 'Site-ul catania.mae.ro conține conținut copiat incorect din consulatul din Lyon, Franța. Taxa afișată de 100€ este greșită. Taxa legală din 01.10.2025 este 53€. Confirmă direct la ghișeu sau telefonic: +39 320.965.3137.' },
  { question: 'Cât este taxa reală a pașaportului la Catania?', answer: '53€ — taxa legală uniformă la toate consulatele românești din UE din 01.10.2025. Site-ul afișează incorect 100€ (conținut copiat). Verifică direct înainte de deplasare.' },
  { question: 'Ce regiuni sunt arondate Consulatului din Catania?', answer: 'Sicilia.' },
  { question: 'Trebuie programare?', answer: 'Da — pe econsulat.ro. Program: Luni–Joi 09:00–15:00. Vineri: urgențe consulare și autorități locale, fără public obișnuit.' },
  { question: 'Există urgențe walk-in la Catania?', answer: 'Nu există mențiune de walk-in — probabil cu programare. Suni la +39 320.965.3137 pentru situații urgente.' },
  { question: 'Pot verifica date pe site-ul oficial?', answer: 'Site-ul catania.mae.ro este complet neîntreținut — conține date din consulatul din Lyon, inclusiv taxa greșită. Actero.ro și contactul direct sunt singurele surse fiabile.' },
]
const howToSteps = [
  { name: 'Sună înainte de orice deplasare', text: '+39 320.965.3137 — confirmă taxa, programul și documentele necesare. Site-ul oficial conține informații incorecte.' },
  { name: 'Pregătește documentele', text: 'Standard CRDS sau non-CRDS — identic cu alte consulate.' },
  { name: 'Programare econsulat.ro', text: 'L-J 09:00–15:00. Vineri: fără public obișnuit.' },
  { name: 'Confirmă taxa la ghișeu', text: 'Taxa legală este 53€ — nu 100€ cum afișează site-ul greșit.' },
]
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://www.actero.ro/pasaport-consulat-catania#article', headline: 'Pașaport la Consulatul din Catania — Date corecte 2026', datePublished: '2026-04-01', dateModified: '2026-04-10', author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, mainEntityOfPage: 'https://www.actero.ro/pasaport-consulat-catania', inLanguage: 'ro' }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' }, { '@type': 'ListItem', position: 2, name: 'Acte românești Italia', item: 'https://www.actero.ro/acte-romanesti-italia' }, { '@type': 'ListItem', position: 3, name: 'Consulat Catania', item: 'https://www.actero.ro/pasaport-consulat-catania' } ] }
export default function PasaportConsulatCataniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="pasaport-consulat-catania"
      lpTopic="pasaport-geo-catania"
      h1="Pașaport românesc la Consulatul din Catania — date corecte"
      intro="Ești din Sicilia și cauți informații despre consulatul din Catania? Site-ul oficial catania.mae.ro conține date incorecte copiate din consulatul din Lyon. Iată ce știm sigur și ce trebuie verificat direct."
      tldr="⚠️ Site-ul afișează 100€ — INCORECT. Taxa reală: 53€ (taxa legală UE). Program: L-J 09:00–15:00 cu programare. Sună la +39 320.965.3137 înainte de orice deplasare."
      ctaHref="/wizard?problem=pasaport&country=it&consulat=catania"
      ctaLabel="Documentele exacte — verifică și consulatul tău →"
      updatedAt="aprilie 2026"
      sourceNote="Verificat live: catania.mae.ro (site neîntreținut) · contact direct — aprilie 2026"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'avertizare', title: '⚠️ Avertizare importantă — site neîntreținut', content: (<div className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm space-y-2"><p className="font-bold text-red-900">Site-ul catania.mae.ro afișează informații INCORECTE</p><p className="text-red-800">Conținutul a fost copiat din consulatul din Lyon, Franța și include taxa de 100€ — complet greșită pentru Italia. Taxa legală din 01.10.2025 este 53€ la toate consulatele românești din UE.</p><p className="text-red-800 mt-1"><strong>Înainte de orice deplasare:</strong> sună la <a href="tel:+393209653137" className="underline font-medium">+39 320.965.3137</a> sau trimite email la <a href="mailto:catania@mae.ro" className="underline">catania@mae.ro</a> pentru a confirma taxa și programul curent.</p></div>) },
        { id: 'date-consulat', title: 'Date confirmate — Catania', content: (<div className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-3 text-sm"><div className="flex gap-3"><span>📍</span><p className="font-medium">Via Misterbianco 1, 95131 Catania</p></div><div className="flex gap-3"><span>📞</span><p><a href="tel:+393209653137" className="text-blue-600 underline font-medium">+39 320.965.3137</a> <span className="text-xs text-gray-500">(sună înainte)</span></p></div><div className="flex gap-3"><span>🕐</span><div><p className="font-medium">Program confirmat:</p><p>Luni–Joi 09:00–15:00 · cu programare</p><p className="text-orange-700 text-xs">Vineri: urgențe și autorități locale — fără public obișnuit</p></div></div><div className="flex gap-3"><span>💳</span><div><p className="font-medium text-red-700">Taxa afișată pe site: 100€ ❌ INCORECT</p><p className="text-green-700">Taxa legală reală: 53€ — confirmă la ghișeu</p></div></div><div className="flex gap-3"><span>🌍</span><p>Sicilia</p></div></div>) },
        {
          id: 'pagini-conexe',
          title: 'Pagini conexe utile',
          content: (
            <div className="grid gap-3 sm:grid-cols-2 text-sm">
              <Link href="/pasaport-romania-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Pașaport românesc în Italia</p>
                <p className="mt-1 text-gray-600">Pentru contextul general și diferențele între consulatele din Italia.</p>
              </Link>
              <Link href="/titlu-calatorie-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Titlu de călătorie din Italia</p>
                <p className="mt-1 text-gray-600">La Catania, acest flux trebuie tratat conservator și confirmat direct înainte de drum.</p>
              </Link>
              <Link href="/programare-consulat-romania-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Programare la consulat în Italia</p>
                <p className="mt-1 text-gray-600">Pentru pașii de econsulat și excepțiile de programare din restul Italiei.</p>
              </Link>
              <Link href="/acte-romanesti-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Acte românești din Italia</p>
                <p className="mt-1 text-gray-600">Hub-ul principal dacă vrei să vezi toate procedurile și toate consulatele din clusterul Italia.</p>
              </Link>
            </div>
          ),
        },
        { id: 'alte-consulate', title: 'Nu ești din Sicilia?', content: (<div className="grid grid-cols-2 gap-2 text-sm">{[{city:'Roma',regions:'Lazio, Campania',href:'/pasaport-consulat-roma'},{city:'Milano',regions:'Lombardia, Trentino',href:'/pasaport-consulat-milano'},{city:'Bologna',regions:'Emilia-Romagna, Toscana',href:'/pasaport-consulat-bologna'},{city:'Torino',regions:'Piemonte, Liguria',href:'/pasaport-consulat-torino'},{city:'Trieste',regions:'Veneto, Friuli',href:'/pasaport-consulat-trieste'},{city:'Bari',regions:'Puglia, Calabria',href:'/pasaport-consulat-bari'}].map(({city,regions,href})=>(<a key={city} href={href} className="rounded-lg border border-gray-200 p-2.5 hover:bg-gray-50"><p className="font-medium">{city}</p><p className="text-xs text-gray-500">{regions}</p></a>))}</div>) },
      ]}
      finalCtaTitle="Documente și pași — verificați pentru situația ta"
      finalCtaText="Wizardul ActeRO îți dă lista completă de documente — confirmă detaliile Catania direct la ghișeu."
    />
  )
}
