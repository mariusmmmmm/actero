import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
export const metadata: Metadata = {
  title: 'Cum obții programare la consulat în Italia — Ghid 2026 | ActeRO',
  description: 'econsulat.ro pas cu pas, excepțiile Bologna și Bari, plus regulile care diferă între consulate. Programările sunt gratuite — nu apela la intermediari.',
  keywords: ['programare consulat romania italia','programare consulat milano','programare consulat roma','econsulat ro programare italia','consulat romania italia fara programare'],
  openGraph: { title: 'Programare la consulat în Italia — Ghid 2026', description: 'econsulat.ro + excepțiile Bologna și Bari. Regulile diferă după consulat și tipul de serviciu.', url: 'https://www.actero.ro/programare-consulat-romania-italia', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/programare-consulat-romania-italia' },
}
const faqItems = [
  { question: 'Cum obțin programare la consulatul din Italia?', answer: 'În general, pe econsulat.ro: creezi cont, depui cerere digitală, după validare faci programare. Există însă excepții locale, mai ales la Bologna și Bari, iar regula exactă depinde și de tipul de serviciu.' },
  { question: 'Bologna chiar nu cere programare?', answer: 'Pentru multe fluxuri uzuale, Bologna funcționează fără programare obligatorie. Totuși, regula trebuie verificată în funcție de serviciu și de urgență; nu trata asta ca regulă universală pentru orice cerere.' },
  { question: 'Programările sunt gratuite?', answer: 'Da — absolut gratuite pe econsulat.ro. Nu apela la intermediari care pretind că vând programări — este ilegal.' },
  { question: 'Nu găsesc sloturi la Bari pe econsulat.ro — ce fac?', answer: 'Trimite email la bari.programari@mae.ro — alternativă oficială confirmată.' },
  { question: 'CNP-ul este obligatoriu pentru contul econsulat.ro?', answer: 'Nu. Poți crea cont pe econsulat.ro fără CNP — cu email și parolă.' },
  { question: 'Sloturile de programare apar la ore fixe?', answer: 'Nu există un moment fix confirmat oficial. Din experiența comunității: sloturile noi apar sporadic pe măsură ce cererile sunt procesate sau anulate.' },
]
const howToSteps = [
  { name: 'Creează cont pe econsulat.ro', text: 'Email + parolă. CNP-ul nu este obligatoriu.' },
  { name: 'Depune cererea digitală', text: 'Cerere nouă → tipul documentului → completezi datele → încarci documentele scanate → trimiți.' },
  { name: 'Aștepți validarea', text: 'Cererea trece din &quot;În așteptare&quot; în &quot;Validată&quot; — apoi devine programabilă.' },
  { name: 'Obții programarea', text: 'econsulat.ro → Programările mele → Programare nouă → selectezi consulatul → prima dată disponibilă.' },
  { name: 'Bologna: verifică excepția locală', text: 'Pentru multe fluxuri uzuale poți merge fără programare obligatorie, dar regula trebuie verificată în funcție de serviciu. De regulă, depui și cererea pe econsulat.ro.' },
]
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://www.actero.ro/programare-consulat-romania-italia#article', headline: 'Programare la consulat în Italia — Ghid 2026', datePublished: '2026-04-01', dateModified: '2026-04-10', author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, mainEntityOfPage: 'https://www.actero.ro/programare-consulat-romania-italia', inLanguage: 'ro' }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' }, { '@type': 'ListItem', position: 2, name: 'Acte românești Italia', item: 'https://www.actero.ro/acte-romanesti-italia' }, { '@type': 'ListItem', position: 3, name: 'Programare consulat Italia', item: 'https://www.actero.ro/programare-consulat-romania-italia' } ] }
export default function ProgramareConsulatItalia() {
  return (
    <LlmOptimizedPage
      lpSlug="programare-consulat-romania-italia"
      lpTopic="programare-italia"
      h1="Cum obții programare la consulatul românesc din Italia"
      intro="Vrei să te programezi la consulatul din Italia pentru pașaport, procură sau titlu de călătorie? Iată tot ce trebuie să știi despre econsulat.ro și excepțiile per consulat."
      tldr="econsulat.ro: cont → cerere digitală → validare → programare. Gratuit. Bologna are excepții de programare pentru multe fluxuri uzuale, iar Bari poate avea și alternativă pe email. CNP-ul nu e obligatoriu pentru cont."
      ctaHref="/wizard?country=it"
      ctaLabel="Ghidul complet pentru documentul tău →"
      updatedAt="aprilie 2026"
      sourceNote="econsulat.ro · consulatele MAE Italia — aprilie 2026"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'per-consulat', title: 'Programare per consulat — rezumat', content: (<div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-gray-50"><th className="p-2 border border-gray-200">Consulat</th><th className="p-2 border border-gray-200">Metodă</th><th className="p-2 border border-gray-200">Particularitate</th></tr></thead><tbody><tr><td className="p-2 border border-gray-200">Roma</td><td className="p-2 border border-gray-200">econsulat.ro</td><td className="p-2 border border-gray-200 text-xs text-orange-700">Vineri NU pașapoarte obișnuite</td></tr><tr className="bg-gray-50"><td className="p-2 border border-gray-200">Milano</td><td className="p-2 border border-gray-200">econsulat.ro</td><td className="p-2 border border-gray-200 text-xs">Urgențe titlu: linia de urgențe</td></tr><tr><td className="p-2 border border-gray-200 text-green-700 font-medium">Bologna</td><td className="p-2 border border-gray-200 text-green-700 font-medium">Excepție locală</td><td className="p-2 border border-gray-200 text-xs">Pentru multe fluxuri uzuale nu cere programare obligatorie</td></tr><tr className="bg-gray-50"><td className="p-2 border border-gray-200">Torino</td><td className="p-2 border border-gray-200">econsulat.ro</td><td className="p-2 border border-gray-200 text-xs text-orange-700">Exclusiv programare — inclusiv urgențe</td></tr><tr><td className="p-2 border border-gray-200">Trieste</td><td className="p-2 border border-gray-200">econsulat.ro</td><td className="p-2 border border-gray-200 text-xs">Toate serviciile cu programare</td></tr><tr className="bg-gray-50"><td className="p-2 border border-gray-200">Bari</td><td className="p-2 border border-gray-200">econsulat.ro sau email</td><td className="p-2 border border-gray-200 text-xs text-blue-700">bari.programari@mae.ro poate fi alternativă</td></tr><tr><td className="p-2 border border-gray-200">Catania</td><td className="p-2 border border-gray-200">econsulat.ro</td><td className="p-2 border border-gray-200 text-xs text-orange-600">⚠️ Sună înainte — site neîntreținut</td></tr></tbody></table></div>) },
        {
          id: 'pagini-conexe',
          title: 'Pagini conexe pentru Italia',
          content: (
            <div className="grid gap-3 text-sm md:grid-cols-2">
              <Link href="/acte-romanesti-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Hub acte românești Italia</p>
                <p className="mt-1 text-gray-600">Intrarea principală în clusterul Italia pentru pașaport, buletin, procuri și acte de copil.</p>
              </Link>
              <Link href="/pasaport-romania-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Pașaport românesc în Italia</p>
                <p className="mt-1 text-gray-600">Vezi diferența dintre CRDS, domiciliu în România, expirat, pierdut și pașaport minor.</p>
              </Link>
              <Link href="/titlu-calatorie-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Titlu de călătorie în Italia</p>
                <p className="mt-1 text-gray-600">Flux separat față de programarea clasică, mai ales la urgențe și excepțiile locale.</p>
              </Link>
              <Link href="/procura-notariala-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Procură notarială din Italia</p>
                <p className="mt-1 text-gray-600">Programarea contează, dar taxele și actele diferă față de pașaport.</p>
              </Link>
            </div>
          ),
        },
        { id: 'intermediari', title: '⚠️ Programările sunt gratuite — nu plăti intermediari', content: (<div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm"><p className="font-semibold text-red-900">Programările pe econsulat.ro sunt gratuite</p><p className="text-red-800 mt-1">Există intermediari privați care vând &quot;programări&quot; la prețuri între 50–300€. Aceste servicii sunt ilegale. Programările sunt gratuite și se fac direct pe econsulat.ro de orice utilizator înregistrat.</p></div>) },
      ]}
      finalCtaTitle="Ghidul complet pentru documentul tău"
      finalCtaText="ActeRO îți dă pașii exacți pentru programare și depunere la consulatul tău din Italia."
    />
  )
}
