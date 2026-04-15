import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Pașaport românesc în Italia — Tot ce trebuie să știi în 2026 | ActeRO',
  description: 'Pașaport CRDS (domiciliu Italia) sau cu domiciliu în România: documente, programare econsulat.ro, taxe confirmate per consulat. Verificat live aprilie 2026.',
  keywords: ['pasaport romania italia','pasaport romanesc italia','pasaport crds italia','documente necesare pasaport romanesc in italia','reinnoire pasaport romanesc italia','programare pasaport consulat italia'],
  openGraph: { title: 'Pașaport românesc în Italia — Ghid complet 2026', description: 'CRDS sau domiciliu RO, expirat sau pierdut — documente exacte, taxe și programare pentru toate cele 7 consulate.', url: 'https://www.actero.ro/pasaport-romania-italia', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/pasaport-romania-italia' },
}

const faqItems = [
  { question: 'Ce înseamnă pașaport CRDS?', answer: 'CRDS = Cetățeni Români cu Domiciliul în Străinătate. Dacă domiciliul oficial e în Italia, ai pașaport CRDS. Dacă ai CI românească cu adresă din România, ești pe ghidul cu domiciliu în România.' },
  { question: 'Cât costă pașaportul în Italia în 2026?', answer: 'Taxa legală din 01.10.2025 este 53€. Torino, Trieste, Bari: 53€ confirmat. Roma, Milano, Bologna afișează 59€ (probabil neactualizat). Catania afișează incorect 100€.' },
  { question: 'Trebuie fotografii pentru pașaport?', answer: 'Nu. La toate cele 7 consulate italiene fotografia se preia biometric la ghișeu.' },
  { question: 'Cât durează procesarea?', answer: '45 zile lucrătoare standard. Excepție: Trieste și Bari procesează pașapoartele pentru minori în 2–3 luni.' },
  { question: 'Pot ridica pașaportul prin DHL?', answer: 'Da, la Milano (DHL WhatsApp), Bari și Trieste (DHL contra cost), Torino (plic preplătit), Roma și Bologna (curierat ales de titular).' },
  { question: 'Am nevoie de permesso di soggiorno?', answer: 'Nu. Nu apare în lista de documente obligatorii la niciunul din cele 7 consulate italiene.' },
  { question: 'Trebuie programare?', answer: 'Da, la 6 din 7 consulate prin econsulat.ro. Excepție: Bologna — fără programare obligatorie.' },
  { question: 'Pașaportul vechi trebuie adus?', answer: 'Da — originalul. La ridicare, dacă ai un pașaport anterior neanulat, trebuie prezentat pentru anulare.' },
]

const howToSteps = [
  { name: 'Clarifică tipul: CRDS sau domiciliu România', text: 'Dacă domiciliul oficial e în Italia → CRDS. Dacă ai CI românească cu adresă RO → domiciliu România. Contează pentru formularul de pe econsulat.ro.' },
  { name: 'Identifică consulatul arondat', text: 'Lombardia → Milano · Emilia-Romagna/Toscana → Bologna · Lazio/Campania → Roma · Piemonte → Torino · Veneto → Trieste · Puglia/Calabria → Bari · Sicilia → Catania.' },
  { name: 'Pregătește documentele', text: 'CRDS: pașaport expirat + certificat naștere + CI italiană/certificato di residenza. Domiciliu RO: CI românească valabilă + pașaport anterior + certificat naștere.' },
  { name: 'Cerere pe econsulat.ro', text: 'Cont → Cerere nouă → tipul corect (CRDS sau simplu electronic) → încarci scanuri → trimiți. Stare: "În așteptare" → "Validată".' },
  { name: 'Obține programarea', text: 'După validare: econsulat.ro → Programările mele → Programare nouă. Bologna: mergi direct fără programare L-V 09:00–14:00.' },
  { name: 'Ziua consulatului', text: 'Originalele + câte o copie. Fotografii NU. Plătești 53€. Primești chitanța. Termen: 45 zile luc.' },
  { name: 'Ridică pașaportul', text: 'Verifici pe [consulat].mae.ro/cauta-pasaport. Vii în programul de ridicare sau ceri livrare DHL/curierat.' },
]

const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://www.actero.ro/pasaport-romania-italia#article', headline: 'Pașaport românesc în Italia — Ghid complet 2026', datePublished: '2026-04-01', dateModified: '2026-04-10', author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, mainEntityOfPage: 'https://www.actero.ro/pasaport-romania-italia', inLanguage: 'ro' }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' }, { '@type': 'ListItem', position: 2, name: 'Acte românești Italia', item: 'https://www.actero.ro/acte-romanesti-italia' }, { '@type': 'ListItem', position: 3, name: 'Pașaport România Italia', item: 'https://www.actero.ro/pasaport-romania-italia' } ] }

export default function PasaportRomaniaItaliaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="pasaport-romania-italia"
      lpTopic="pasaport-hub-italia"
      h1="Pașaport românesc în Italia — ghid complet 2026"
      intro="Locuiești în Italia și ai nevoie de pașaport românesc? Procedura depinde de unde ai domiciliul oficial — în Italia sau în România. Informații verificate live din toate cele 7 consulate, aprilie 2026."
      tldr="Taxa: 53€ (Torino/Trieste/Bari confirmat; Roma/Milano/Bologna afișează 59€ — probabil neactualizat). Fotografii: NU — biometrie la ghișeu. Termen: 45 zile luc. (Trieste/Bari minori: 2–3 luni). Programare: econsulat.ro (excepție: Bologna fără programare)."
      ctaHref="/wizard?problem=pasaport&country=it"
      ctaLabel="Arată-mi pașii exacți pentru situația mea →"
      updatedAt="aprilie 2026"
      sourceNote="Verificat live: cgroma.mae.ro · milano.mae.ro · bologna.mae.ro · torino.mae.ro · trieste.mae.ro · bari.mae.ro · catania.mae.ro"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'crds-vs-domiciliu', title: 'CRDS sau domiciliu în România?', content: (<div className="space-y-3"><div className="rounded-lg border border-blue-200 bg-blue-50 p-4"><p className="font-semibold text-blue-900">🇮🇹 Pașaport CRDS — domiciliul tău este în Italia</p><ul className="text-sm text-blue-800 mt-2 space-y-1"><li>• Pe econsulat.ro: <strong>Pașaport simplu electronic CRDS</strong></li><li>• Document obligatoriu: CI italiană / certificato di residenza</li><li>• Fotografii: NU — biometrie la ghișeu ✅</li></ul></div><div className="rounded-lg border border-gray-200 bg-gray-50 p-4"><p className="font-semibold text-gray-900">🇷🇴 Pașaport domiciliu România — ai CI românească cu adresă RO</p><ul className="text-sm text-gray-700 mt-2 space-y-1"><li>• Pe econsulat.ro: <strong>Pașaport simplu electronic</strong> (fără CRDS)</li><li>• NU aduci document de domiciliu italian</li></ul></div></div>) },
        { id: 'taxe', title: 'Taxă per consulat 2026', content: (<div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-gray-50"><th className="p-2 border border-gray-200">Consulat</th><th className="p-2 border border-gray-200">Taxă afișată</th><th className="p-2 border border-gray-200">Status</th><th className="p-2 border border-gray-200">Plată</th></tr></thead><tbody><tr><td className="p-2 border border-gray-200">Torino</td><td className="p-2 border border-gray-200">53€</td><td className="p-2 border border-gray-200 text-green-700">✅ Confirmat</td><td className="p-2 border border-gray-200">Numerar</td></tr><tr className="bg-gray-50"><td className="p-2 border border-gray-200">Trieste</td><td className="p-2 border border-gray-200">53€</td><td className="p-2 border border-gray-200 text-green-700">✅ Confirmat</td><td className="p-2 border border-gray-200">Numerar</td></tr><tr><td className="p-2 border border-gray-200">Bari</td><td className="p-2 border border-gray-200">53€</td><td className="p-2 border border-gray-200 text-green-700">✅ Confirmat</td><td className="p-2 border border-gray-200">Numerar</td></tr><tr className="bg-gray-50"><td className="p-2 border border-gray-200">Roma</td><td className="p-2 border border-gray-200">59€</td><td className="p-2 border border-gray-200 text-orange-600">⚠️ Neactualizat</td><td className="p-2 border border-gray-200">Nespecificat</td></tr><tr><td className="p-2 border border-gray-200">Milano</td><td className="p-2 border border-gray-200">59€</td><td className="p-2 border border-gray-200 text-orange-600">⚠️ Neactualizat</td><td className="p-2 border border-gray-200">Numerar / card</td></tr><tr className="bg-gray-50"><td className="p-2 border border-gray-200">Bologna</td><td className="p-2 border border-gray-200">59€</td><td className="p-2 border border-gray-200 text-orange-600">⚠️ Neactualizat</td><td className="p-2 border border-gray-200">Nespecificat</td></tr><tr><td className="p-2 border border-gray-200">Catania</td><td className="p-2 border border-gray-200 text-red-600">100€ ❌</td><td className="p-2 border border-gray-200 text-red-600">❌ Incorect</td><td className="p-2 border border-gray-200">Confirmare directă</td></tr></tbody></table></div>) },
        { id: 'situatii', title: 'Ghiduri per situație', content: (<div className="space-y-2"><a href="/pasaport-expirat-italia" className="flex items-center justify-between rounded-lg border border-gray-200 p-3 hover:bg-gray-50"><div><p className="font-medium text-sm">Pașaport expirat sau deteriorat</p><p className="text-xs text-gray-500">Cel mai frecvent caz</p></div><span className="text-gray-400">→</span></a><a href="/pasaport-crds-italia" className="flex items-center justify-between rounded-lg border border-gray-200 p-3 hover:bg-gray-50"><div><p className="font-medium text-sm">Primul pașaport CRDS</p><p className="text-xs text-gray-500">Nu ai mai avut pașaport cu domiciliu Italia</p></div><span className="text-gray-400">→</span></a><a href="/pasaport-pierdut-furat-italia" className="flex items-center justify-between rounded-lg border border-gray-200 p-3 hover:bg-gray-50"><div><p className="font-medium text-sm">Pașaport pierdut sau furat</p><p className="text-xs text-gray-500">Adeverință poliție + traducere autorizată MJ</p></div><span className="text-gray-400">→</span></a><a href="/pasaport-minor-italia" className="flex items-center justify-between rounded-lg border border-gray-200 p-3 hover:bg-gray-50"><div><p className="font-medium text-sm">Pașaport copil (minor) CRDS</p><p className="text-xs text-gray-500">Trieste + Bari: 2–3 luni. Prezență ambii părinți.</p></div><span className="text-gray-400">→</span></a></div>) },
        { id: 'legaturi-utile', title: 'Pagini utile din clusterul pașaport Italia', content: (<div className="grid gap-3 text-sm md:grid-cols-2"><Link href="/programare-consulat-romania-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"><p className="font-medium text-gray-900">Programare la consulat</p><p className="mt-1 text-gray-600">Vezi cum funcționează econsulat.ro și excepția Bologna.</p></Link><Link href="/titlu-calatorie-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"><p className="font-medium text-gray-900">Titlu de călătorie în Italia</p><p className="mt-1 text-gray-600">Alternativa rapidă când trebuie să revii în România fără pașaport valabil.</p></Link><Link href="/titlu-calatorie-urgenta-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"><p className="font-medium text-gray-900">Titlu de călătorie urgent</p><p className="mt-1 text-gray-600">Reguli diferite la Roma, Milano, Bologna și restul consulatelor.</p></Link><Link href="/acte-romanesti-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"><p className="font-medium text-gray-900">Hub acte românești Italia</p><p className="mt-1 text-gray-600">Toate procedurile importante grupate într-un singur loc.</p></Link></div>) },
      ]}
      finalCtaTitle="Care e exact situația ta?"
      finalCtaText="CRDS sau domiciliu România, expirat sau pierdut — wizardul ActeRO identifică ghidul corect și îți dă lista exactă de documente pentru consulatul tău."
    />
  )
}
