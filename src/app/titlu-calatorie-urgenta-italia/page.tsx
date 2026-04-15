import type { Metadata } from 'next'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
export const metadata: Metadata = {
  title: 'Titlu de călătorie urgent din Italia — cine poate merge fără programare | ActeRO',
  description: 'Roma și Milano: urgent posibil fără programare în anumite condiții. Bologna: walk-in doar cu dovezi. Torino: exclusiv cu programare. Emiterea depinde de consulat și de verificarea dosarului.',
  keywords: ['titlu calatorie urgent italia','titlu de calatorie fara programare italia','titlu calatorie se elibereaza pe loc','titlu calatorie documente italia'],
  openGraph: { title: 'Titlu de călătorie urgent din Italia — reguli diferite pe consulat', description: 'Roma L-V 11:00–13:00 · Milano linia urgențe · Bologna direct. Torino: NU walk-in.', url: 'https://www.actero.ro/titlu-calatorie-urgenta-italia', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/titlu-calatorie-urgenta-italia' },
}
const faqItems = [
  { question: 'Pot obține titlul de călătorie fără programare în Italia?', answer: 'Depinde de consulat. Roma: walk-in L-V 11:00–13:00 cu dovadă de urgență. Milano: anunți urgența pe linia de urgențe. Bologna: walk-in doar dacă ai documente justificative, iar biletul de avion singur nu este suficient. Torino, Trieste, Bari și Catania trebuie tratate conservator ca flux cu programare.' },
  { question: 'Titlul de călătorie se eliberează în aceeași zi?', answer: 'De regulă da la Roma, Milano și Bologna. La Torino, Trieste, Bari și Catania termenul depinde de programare și de verificarea făcută de consulat.' },
  { question: 'Cât costă titlul de călătorie?', answer: 'Gratuit la toate consulatele italiene.' },
  { question: 'Ce documente trebuie pentru titlul de călătorie?', answer: 'În primul rând, orice act românesc disponibil pentru identificare: pașaport expirat, buletin expirat, certificat de naștere cu CNP sau alt document românesc relevant. Pentru urgențe, adaugă dovada situației urgente. La Bologna, biletul de avion singur NU este suficient.' },
  { question: 'Cât este valabil titlul de călătorie?', answer: 'Maxim 30 de zile. Valabil exclusiv pentru întoarcerea în România — nu pentru alte călătorii.' },
  { question: 'Ce fac cu titlul de călătorie la intrarea în România?', answer: 'Se predă la ghișeul SPCP la depunerea cererii de pașaport sau buletin. Nu se predă la frontieră.' },
  { question: 'Dacă pașaportul a fost furat, trebuie traducerea adeverinței poliției?', answer: 'Nu. În Italia nu este obligatorie traducerea adeverinței de furt pentru titlul de călătorie — spre deosebire de Germania unde da.' },
]
const howToSteps = [
  { name: 'Identifică consulatul tău', text: 'Consulatul depinde de regiunea italiană. Verifică dacă acceptă walk-in sau necesită programare.' },
  { name: 'Pregătește documentele', text: 'Certificat naștere + document domiciliu italian + dovadă urgență. Dacă pașaportul a fost furat: adeverință poliție (traducere NU e necesară în Italia).' },
  { name: 'Prezintă-te sau anunți urgența', text: 'Roma: L-V 11:00–13:00 walk-in pentru urgențe. Milano: +39 366.108.1444. Bologna: walk-in doar cu documente justificative. Torino/Trieste/Bari/Catania: tratează fluxul ca programare.' },
  { name: 'Ridici titlul după verificarea consulatului', text: 'La Roma, Milano și Bologna se rezolvă de regulă în aceeași zi. În rest, termenul depinde de programare și de verificarea internă.' },
  { name: 'La întoarcerea în România', text: 'Predai titlul la SPCP la depunerea cererii de nou pașaport/buletin.' },
]
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://www.actero.ro/titlu-calatorie-urgenta-italia#article', headline: 'Titlu de călătorie urgent din Italia', datePublished: '2026-04-01', dateModified: '2026-04-10', author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, mainEntityOfPage: 'https://www.actero.ro/titlu-calatorie-urgenta-italia', inLanguage: 'ro' }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' }, { '@type': 'ListItem', position: 2, name: 'Acte românești Italia', item: 'https://www.actero.ro/acte-romanesti-italia' }, { '@type': 'ListItem', position: 3, name: 'Titlu de călătorie Italia', item: 'https://www.actero.ro/titlu-calatorie-italia' }, { '@type': 'ListItem', position: 4, name: 'Titlu urgent Italia', item: 'https://www.actero.ro/titlu-calatorie-urgenta-italia' } ] }
export default function TitluCalatorieUrgentItaliaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="titlu-calatorie-urgenta-italia"
      lpTopic="titlu-urgenta-italia"
      h1="Titlu de călătorie urgent din Italia — cine poate merge fără programare"
      intro="Ai rămas fără pașaport valabil și trebuie să pleci urgent în România? Titlul de călătorie este gratuit, dar procedura și viteza de emitere diferă semnificativ între consulate."
      tldr="Roma: walk-in L-V 11:00–13:00 pentru urgențe. Milano: anunți pe linia urgențe. Bologna: walk-in doar cu documente justificative. Torino: NU walk-in — programare obligatorie. Emiterea în aceeași zi este frecventă la Roma, Milano și Bologna, dar depinde de verificarea consulatului."
      ctaHref="/wizard?problem=titlu-calatorie&country=it"
      ctaLabel="Arată-mi pașii exacți pentru consulatul meu →"
      updatedAt="aprilie 2026"
      sourceNote="Verificat live: toate consulatele italiene MAE — aprilie 2026"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'tabel-consulate', title: 'Walk-in sau programare — per consulat', content: (<div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-gray-50"><th className="p-2 border border-gray-200">Consulat</th><th className="p-2 border border-gray-200">Walk-in urgent?</th><th className="p-2 border border-gray-200">Interval / condiție</th></tr></thead><tbody><tr><td className="p-2 border border-gray-200 font-medium">Roma</td><td className="p-2 border border-gray-200 text-green-700 font-medium">✅ Da</td><td className="p-2 border border-gray-200">L-V 11:00–13:00 · urgențe cu documente justificative</td></tr><tr className="bg-gray-50"><td className="p-2 border border-gray-200 font-medium">Milano</td><td className="p-2 border border-gray-200 text-green-700 font-medium">✅ Da</td><td className="p-2 border border-gray-200">Anunți pe linia urgențe: +39 366.108.1444</td></tr><tr><td className="p-2 border border-gray-200 font-medium text-green-700">Bologna</td><td className="p-2 border border-gray-200 text-green-700 font-medium">✅ Condiționat</td><td className="p-2 border border-gray-200">Walk-in doar cu documente justificative · biletul de avion singur NU e suficient</td></tr><tr className="bg-gray-50"><td className="p-2 border border-gray-200 font-medium">Torino</td><td className="p-2 border border-gray-200 text-red-600 font-medium">❌ Nu</td><td className="p-2 border border-gray-200 text-orange-700">Exclusiv cu programare — chiar și urgențele</td></tr><tr><td className="p-2 border border-gray-200 font-medium">Trieste</td><td className="p-2 border border-gray-200 text-orange-600">⚠️ Nu e confirmat</td><td className="p-2 border border-gray-200">Tratează fluxul ca programare</td></tr><tr className="bg-gray-50"><td className="p-2 border border-gray-200 font-medium">Bari</td><td className="p-2 border border-gray-200 text-orange-600">⚠️ Nu e confirmat</td><td className="p-2 border border-gray-200">Tratează fluxul ca programare · +39 334.604.2299</td></tr><tr><td className="p-2 border border-gray-200 font-medium">Catania</td><td className="p-2 border border-gray-200 text-orange-600">⚠️ Nu e confirmat</td><td className="p-2 border border-gray-200">Mergi doar cu programare și confirmă direct înainte de drum</td></tr></tbody></table></div>) },
        { id: 'documente', title: 'Documente necesare pentru titlu de călătorie', content: (<div className="rounded-lg border border-gray-200 p-3 text-sm space-y-1.5"><ul className="space-y-1"><li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span><strong>Orice act românesc disponibil</strong> — pașaport expirat, buletin expirat, certificat de naștere cu CNP sau alt document relevant pentru identificare</span></li><li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span><strong>Dovadă de urgență</strong> — document medical, bilet de avion, convocare sau alt document justificativ, după caz</span></li><li className="flex gap-2"><span className="text-orange-500 font-bold">±</span><span><strong>Dacă pașaportul a fost furat:</strong> adeverință poliție (Denuncia di furto). <strong>Traducere NU este necesară în Italia.</strong></span></li></ul></div>) },
      ]}
      finalCtaTitle="Află pașii exacți pentru consulatul tău"
      finalCtaText="Wizardul ActeRO identifică consulatul tău și îți dă documentele exacte pentru titlul de călătorie urgent."
    />
  )
}
