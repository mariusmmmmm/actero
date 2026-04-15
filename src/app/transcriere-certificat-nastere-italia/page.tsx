import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
export const metadata: Metadata = {
  title: 'Transcriere certificat de naștere italian — Ghid complet 2026 | ActeRO',
  description: 'Copil născut în Italia fără acte românești: transcriere certificat naștere italian la consulat. Formular A vs Geburtsurkunde, termen, taxă gratuită. Verificat per consulat.',
  keywords: ['transcriere certificat nastere italia','certificat nastere romanesc copii nascuti in italia','acte copil nascut italia','cat dureaza transcrierea nastere italia consulat'],
  openGraph: { title: 'Transcriere certificat de naștere italian — Ghid 2026', description: 'Gratuit la consulat. Formular A (fără apostilă) sau Geburtsurkunde + apostilă + traducere.', url: 'https://www.actero.ro/transcriere-certificat-nastere-italia', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/transcriere-certificat-nastere-italia' },
}
const faqItems = [
  { question: 'Ce documente aduc pentru transcrierea certificatului de naștere italian?', answer: 'Varianta recomandată: Extrasul multilingv "Formule A" (fără apostilă, fără traducere) + certificatele de naștere ale părinților + documente identitate părinți. Alternativă: Geburtsurkunde + apostilă Haga + traducere autorizată română.' },
  { question: 'Cât costă transcrierea?', answer: 'Gratuit la Roma, Milano, Bologna, Torino, Bari — confirmat. Trieste: afișează 125€/170€ pe site (probabil vechi/incorect — confirmă direct). Catania: neconfirmat.' },
  { question: 'Cât durează transcrierea?', answer: 'Milano: aceeași zi. Trieste: ~20 zile. Bologna, Roma, Torino, Bari: nepublicat — verifică direct. Catania: neconfirmat.' },
  { question: 'Trebuie copilul prezent la transcriere?', answer: 'Depinde de consulat. La Roma: prezența copilului este menționată ca necesară. La Milano, Torino: nu se menționează. Verifică direct.' },
  { question: 'Ce urmează după transcriere?', answer: 'Odată certificatul transcris, poți obține primul pașaport sau primul buletin pentru copil prin procedura normală.' },
]
const howToSteps = [
  { name: 'Pregătește documentul copilului', text: 'Recomandare: Extrasul multilingv "Formule A" de la autoritățile italiene (nu necesită apostilă sau traducere). Alternativă: Geburtsurkunde + apostilă + traducere.' },
  { name: 'Pregătește certificatele de naștere ale părinților', text: 'Necesare la Milano, Torino, Trieste, Bari (explicit confirmat). La Roma și Bologna: verifică direct.' },
  { name: 'Programare pe econsulat.ro', text: 'Stare civilă → Transcriere certificat naștere. Bologna: fără programare obligatorie.' },
  { name: 'Ziua consulatului', text: 'Aduci originalele. Taxa: gratuită (excepție Trieste — confirmă).' },
  { name: 'Ridică certificatul transcris', text: 'Milano: aceeași zi. Alte consulate: verifică programul de ridicare.' },
  { name: 'Urmează pașaportul sau buletinul', text: 'Cu certificatul transcris, copilul poate obține primul pașaport CRDS sau buletin.' },
]
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://www.actero.ro/transcriere-certificat-nastere-italia#article', headline: 'Transcriere certificat naștere italian — Ghid 2026', datePublished: '2026-04-01', dateModified: '2026-04-10', author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, mainEntityOfPage: 'https://www.actero.ro/transcriere-certificat-nastere-italia', inLanguage: 'ro' }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' }, { '@type': 'ListItem', position: 2, name: 'Acte românești Italia', item: 'https://www.actero.ro/acte-romanesti-italia' }, { '@type': 'ListItem', position: 3, name: 'Transcriere naștere Italia', item: 'https://www.actero.ro/transcriere-certificat-nastere-italia' } ] }
export default function TranscriereNastereItaliaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="transcriere-certificat-nastere-italia"
      lpTopic="transcriere-certificat-nastere-italia"
      h1="Transcriere certificat de naștere italian — ghid 2026"
      intro="Copilul tău s-a născut în Italia și nu are acte românești? Primul pas este transcrierea certificatului de naștere italian în Registrul de Stare Civilă român — gratuit la consulat."
      tldr="Gratuit (excepție: Trieste — afișează 125€, probabil vechi). Document recomandat: Formule A (fără apostilă, fără traducere). Certificatele de naștere ale părinților: necesare la Milano, Torino, Trieste, Bari. După transcriere: primul pașaport sau buletin al copilului."
      ctaHref="/wizard?problem=transcriere-nastere&country=it"
      ctaLabel="Ghidul complet pentru situația copilului tău →"
      updatedAt="aprilie 2026"
      sourceNote="Verificat live: toate consulatele italiene MAE — aprilie 2026"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'document-copil', title: 'Ce document al copilului aduci', content: (<div className="space-y-3 text-sm"><div className="rounded-lg border border-green-200 bg-green-50 p-3"><p className="font-semibold text-green-900">✅ Recomandat: Extras multilingv "Formule A"</p><ul className="text-green-800 mt-1 space-y-0.5"><li>• Emis de autoritățile italiene (Comune)</li><li>• Nu necesită apostilă</li><li>• Nu necesită traducere</li><li>• Format standard UE, acceptat la toate consulatele</li></ul></div><div className="rounded-lg border border-gray-200 bg-gray-50 p-3"><p className="font-semibold text-gray-900">Alternativă: Geburtsurkunde italian</p><ul className="text-gray-700 mt-1 space-y-0.5"><li>• Necesită apostilă Haga</li><li>• Necesită traducere autorizată în română</li></ul></div></div>) },
        { id: 'tabel-consulate', title: 'Termen și taxă per consulat', content: (<div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-gray-50"><th className="p-2 border border-gray-200">Consulat</th><th className="p-2 border border-gray-200">Taxă</th><th className="p-2 border border-gray-200">Termen</th><th className="p-2 border border-gray-200">Cert. naștere părinți</th></tr></thead><tbody><tr><td className="p-2 border border-gray-200">Roma</td><td className="p-2 border border-gray-200 text-green-700">Gratuit ✅</td><td className="p-2 border border-gray-200 text-orange-600">⚠️ Nepublicat</td><td className="p-2 border border-gray-200 text-orange-600">⚠️ Verifică</td></tr><tr className="bg-gray-50"><td className="p-2 border border-gray-200">Milano</td><td className="p-2 border border-gray-200 text-green-700">Gratuit ✅</td><td className="p-2 border border-gray-200 text-green-700">Aceeași zi ✅</td><td className="p-2 border border-gray-200 text-orange-600">✅ Obligatorii</td></tr><tr><td className="p-2 border border-gray-200">Bologna</td><td className="p-2 border border-gray-200 text-green-700">Gratuit ✅</td><td className="p-2 border border-gray-200 text-orange-600">⚠️ Nepublicat</td><td className="p-2 border border-gray-200 text-orange-600">⚠️ Verifică</td></tr><tr className="bg-gray-50"><td className="p-2 border border-gray-200">Torino</td><td className="p-2 border border-gray-200 text-orange-600">⚠️ Neprecizat</td><td className="p-2 border border-gray-200 text-orange-600">⚠️ Nepublicat</td><td className="p-2 border border-gray-200">✅ Obligatorii</td></tr><tr><td className="p-2 border border-gray-200">Trieste</td><td className="p-2 border border-gray-200 text-red-600">⚠️ 125/170€ (vechi?)</td><td className="p-2 border border-gray-200">~20 zile</td><td className="p-2 border border-gray-200">✅ Obligatorii</td></tr><tr className="bg-gray-50"><td className="p-2 border border-gray-200">Bari</td><td className="p-2 border border-gray-200 text-red-600">⚠️ 125/170€ (copiat)</td><td className="p-2 border border-gray-200 text-orange-600">⚠️ Nepublicat</td><td className="p-2 border border-gray-200">✅ Obligatorii</td></tr><tr><td className="p-2 border border-gray-200">Catania</td><td className="p-2 border border-gray-200 text-red-600">⚠️ Neconfirmat</td><td className="p-2 border border-gray-200 text-red-600">⚠️ Neconfirmat</td><td className="p-2 border border-gray-200 text-red-600">⚠️ Neconfirmat</td></tr></tbody></table><p className="text-xs text-gray-500 mt-1">⚠️ Trieste și Bari afișează 125/170€ — probabil pagini vechi neactualizate. Confirmă direct înainte de deplasare.</p></div>) },
        {
          id: 'ce-urmeaza',
          title: 'Ce urmează după transcriere',
          content: (
            <div className="grid gap-3 sm:grid-cols-2 text-sm">
              <Link href="/pasaport-minor-italia" className="rounded-lg border border-blue-200 bg-blue-50 p-3 hover:bg-blue-100/60">
                <p className="font-medium text-blue-900">Pașaport copil CRDS din Italia</p>
                <p className="mt-1 text-blue-800">După transcriere, acesta este de obicei următorul pas pentru copilul născut în Italia.</p>
              </Link>
              <Link href="/buletin-romania-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Buletin românesc din Italia</p>
                <p className="mt-1 text-gray-600">Pentru situațiile în care următorul pas este primul buletin, nu pașaportul.</p>
              </Link>
              <Link href="/programare-consulat-romania-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Programare la consulat în Italia</p>
                <p className="mt-1 text-gray-600">Dacă mai ai nevoie de claritate despre econsulat și excepțiile de programare.</p>
              </Link>
              <Link href="/acte-romanesti-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Acte românești din Italia</p>
                <p className="mt-1 text-gray-600">Hub-ul principal pentru toate procedurile copilului și ale familiei.</p>
              </Link>
            </div>
          ),
        },
      ]}
      finalCtaTitle="Ghidul complet pentru copilul tău"
      finalCtaText="Wizardul ActeRO îți dă toți pașii pentru transcriere și primul pașaport sau buletin al copilului."
    />
  )
}
