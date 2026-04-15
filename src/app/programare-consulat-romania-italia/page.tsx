import type { Metadata } from 'next'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
export const metadata: Metadata = {
  title: 'Cum obții programare la consulat în Italia — Ghid 2026 | ActeRO',
  description: 'econsulat.ro pas cu pas, Bologna fără programare, Bari alternativă email. Toate cele 7 consulate italiene. Programările sunt gratuite — nu apela la intermediari.',
  keywords: ['programare consulat romania italia','programare consulat milano','programare consulat roma','econsulat ro programare italia','consulat romania italia fara programare'],
  openGraph: { title: 'Programare la consulat în Italia — Ghid 2026', description: 'econsulat.ro + excepțiile: Bologna fără programare, Bari email alternativ. Gratuit.', url: 'https://www.actero.ro/programare-consulat-romania-italia', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/programare-consulat-romania-italia' },
}
const faqItems = [
  { question: 'Cum obțin programare la consulatul din Italia?', answer: 'Pe econsulat.ro: creezi cont, depui cerere digitală, după validare faci programare. Excepție: Bologna nu cere programare — te prezinți direct. Bari: alternativ bari.programari@mae.ro.' },
  { question: 'Bologna chiar nu cere programare?', answer: 'Corect. Bologna este singurul consulat italian fără programare obligatorie. Te prezinți L-V 09:00–14:00.' },
  { question: 'Programările sunt gratuite?', answer: 'Da — absolut gratuite pe econsulat.ro. Nu apela la intermediari care pretind că vând programări — este ilegal.' },
  { question: 'Nu găsesc sloturi la Bari pe econsulat.ro — ce fac?', answer: 'Trimite email la bari.programari@mae.ro — alternativă oficială confirmată.' },
  { question: 'CNP-ul este obligatoriu pentru contul econsulat.ro?', answer: 'Nu. Poți crea cont pe econsulat.ro fără CNP — cu email și parolă.' },
  { question: 'Sloturile de programare apar la ore fixe?', answer: 'Nu există un moment fix confirmat oficial. Din experiența comunității: sloturile noi apar sporadic pe măsură ce cererile sunt procesate sau anulate.' },
]
const howToSteps = [
  { name: 'Creează cont pe econsulat.ro', text: 'Email + parolă. CNP-ul nu este obligatoriu.' },
  { name: 'Depune cererea digitală', text: 'Cerere nouă → tipul documentului → completezi datele → încarci documentele scanate → trimiți.' },
  { name: 'Aștepți validarea', text: 'Cererea trece din "În așteptare" în "Validată" — apoi devine programabilă.' },
  { name: 'Obții programarea', text: 'econsulat.ro → Programările mele → Programare nouă → selectezi consulatul → prima dată disponibilă.' },
  { name: 'Bologna: prezentare directă', text: 'Fără programare — L-V 09:00–14:00. Depui cererea și pe econsulat.ro dar nu mai aștepți slot.' },
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
      tldr="econsulat.ro: cont → cerere digitală → validare → programare. Gratuit. Bologna: fără programare — direct în program. Bari: alternativ bari.programari@mae.ro. CNP-ul nu e obligatoriu pentru cont."
      ctaHref="/wizard?country=it"
      ctaLabel="Ghidul complet pentru documentul tău →"
      updatedAt="aprilie 2026"
      sourceNote="econsulat.ro · consulatele MAE Italia — aprilie 2026"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'per-consulat', title: 'Programare per consulat — rezumat', content: (<div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-gray-50"><th className="p-2 border border-gray-200">Consulat</th><th className="p-2 border border-gray-200">Metodă</th><th className="p-2 border border-gray-200">Particularitate</th></tr></thead><tbody><tr><td className="p-2 border border-gray-200">Roma</td><td className="p-2 border border-gray-200">econsulat.ro</td><td className="p-2 border border-gray-200 text-xs text-orange-700">Vineri NU pașapoarte obișnuite</td></tr><tr className="bg-gray-50"><td className="p-2 border border-gray-200">Milano</td><td className="p-2 border border-gray-200">econsulat.ro</td><td className="p-2 border border-gray-200 text-xs">Urgențe titlu: linia de urgențe</td></tr><tr><td className="p-2 border border-gray-200 text-green-700 font-medium">Bologna</td><td className="p-2 border border-gray-200 text-green-700 font-medium">Fără programare ✓</td><td className="p-2 border border-gray-200 text-xs">Direct L-V 09:00–14:00</td></tr><tr className="bg-gray-50"><td className="p-2 border border-gray-200">Torino</td><td className="p-2 border border-gray-200">econsulat.ro</td><td className="p-2 border border-gray-200 text-xs text-orange-700">Exclusiv programare — inclusiv urgențe</td></tr><tr><td className="p-2 border border-gray-200">Trieste</td><td className="p-2 border border-gray-200">econsulat.ro</td><td className="p-2 border border-gray-200 text-xs">Toate serviciile cu programare</td></tr><tr className="bg-gray-50"><td className="p-2 border border-gray-200">Bari</td><td className="p-2 border border-gray-200">econsulat.ro SAU email</td><td className="p-2 border border-gray-200 text-xs text-blue-700">bari.programari@mae.ro alternativă</td></tr><tr><td className="p-2 border border-gray-200">Catania</td><td className="p-2 border border-gray-200">econsulat.ro</td><td className="p-2 border border-gray-200 text-xs text-orange-600">⚠️ Sună înainte — site neîntreținut</td></tr></tbody></table></div>) },
        { id: 'intermediari', title: '⚠️ Programările sunt gratuite — nu plăti intermediari', content: (<div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm"><p className="font-semibold text-red-900">Programările pe econsulat.ro sunt gratuite</p><p className="text-red-800 mt-1">Există intermediari privați care vând "programări" la prețuri între 50–300€. Aceste servicii sunt ilegale. Programările sunt gratuite și se fac direct pe econsulat.ro de orice utilizator înregistrat.</p></div>) },
      ]}
      finalCtaTitle="Ghidul complet pentru documentul tău"
      finalCtaText="ActeRO îți dă pașii exacți pentru programare și depunere la consulatul tău din Italia."
    />
  )
}
