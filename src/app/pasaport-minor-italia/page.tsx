import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
export const metadata: Metadata = {
  title: 'Pașaport copil CRDS din Italia — Ghid complet 2026',
  description: 'Pașaport minor CRDS: prezență ambii părinți obligatorie, termen 2–3 luni la Trieste și Bari, 45 zile la restul. Reguli procură dacă lipsește un părinte. Verificat 2026.',
  keywords: ['pasaport minor italia','pasaport copil italia 2026','pasaport crds copil italia','pasaport minor trieste bari 2 3 luni','procura parinte pasaport copil italia'],
  openGraph: { title: 'Pașaport copil CRDS din Italia — Ghid 2026', description: 'Prezență ambii părinți. Trieste + Bari: 2–3 luni. Lipsește un părinte → procură specială.', url: 'https://www.actero.ro/pasaport-minor-italia', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/pasaport-minor-italia' },
}
const faqItems = [
  { question: 'Trebuie să vină ambii părinți la depunerea pașaportului pentru copil?', answer: 'Da. Prezența minorului și a ambilor părinți este obligatorie la depunere. Dacă vine un singur părinte, ai nevoie de procură specială autentificată de la celălalt părinte — făcută la consulat ÎNAINTE de ziua programării.' },
  { question: 'Cât durează pașaportul copilului la Trieste și Bari?', answer: '2–3 luni — confirmat explicit pe site-urile trieste.mae.ro și bari.mae.ro/node/923. Spre deosebire de adulți (45 zile luc.) și alte consulate, Trieste și Bari au termen semnificativ mai lung pentru minori.' },
  { question: 'Copilul trebuie să fie prezent la depunere?', answer: 'Da. Imaginea facială se preia biometric la ghișeu — copilul trebuie prezent.' },
  { question: 'Ce se întâmplă dacă un părinte lipsește și nu poate face procură?', answer: 'Dacă nu există acordul celuilalt părinte și nu poate fi obținut (dispărut, decedat, drepturi parentale suspendate), există proceduri juridice speciale — consultă un avocat.' },
  { question: 'Minorul poate ridica pașaportul fără să mai vină?', answer: 'Sub 14 ani: un părinte poate ridica fără ca minorul să fie prezent. 14–17 ani: ridică personal titularul (minorul).' },
  { question: 'Cât timp este valabil pașaportul copilului?', answer: 'Sub 12 ani: 3 ani. 12–17 ani: 5 ani.' },
  { question: 'Copilul a fost născut în Italia — trebuie transcriere înainte?', answer: 'Da. Dacă copilul nu are certificat de naștere românesc, trebuie mai întâi transcrierea la consulat. Abia după transcriere poate obține pașaport CRDS.' },
]
const howToSteps = [
  { name: 'Verifică dacă e nevoie de transcriere', text: 'Copil născut în Italia fără certificat naștere românesc → mai întâi transcriere. Ghid: actero.ro/transcriere-certificat-nastere-italia.' },
  { name: 'Verifică prezența ambilor părinți', text: 'Ambii părinți trebuie prezenți la depunere. Dacă un părinte lipsește: procură specială autentificată la consulat ÎNAINTE de programare.' },
  { name: 'Pregătește documentele', text: 'Certificat naștere copil (românesc transcris) + CI/pașaport ambii părinți + document domiciliu italian. Dacă copilul are CI română: o aduci — va fi anulată.' },
  { name: 'Cerere pe econsulat.ro', text: 'Cerere nouă pentru minor → CRDS → încarci documentele → trimiți.' },
  { name: 'Programare și ziua consulatului', text: 'Copilul + ambii părinți (sau 1 + procură). Fotografii NU — biometrie la ghișeu. Plătești taxa (53€ confirmat Torino/Trieste/Bari; altele afișează 59€).' },
  { name: 'Ridică pașaportul', text: 'Sub 14 ani: ridică un părinte. 14–17 ani: ridică minorul personal. Termen: 45 zile luc. standard; Trieste + Bari: 2–3 luni.' },
]
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://www.actero.ro/pasaport-minor-italia#article', headline: 'Pașaport copil CRDS din Italia — Ghid 2026', datePublished: '2026-04-01', dateModified: '2026-04-10', author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, mainEntityOfPage: 'https://www.actero.ro/pasaport-minor-italia', inLanguage: 'ro' }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' }, { '@type': 'ListItem', position: 2, name: 'Acte românești Italia', item: 'https://www.actero.ro/acte-romanesti-italia' }, { '@type': 'ListItem', position: 3, name: 'Pașaport minor Italia', item: 'https://www.actero.ro/pasaport-minor-italia' } ] }
export default function PasaportMinorItaliaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="pasaport-minor-italia"
      lpTopic="pasaport-minor-italia"
      h1="Pașaport copil CRDS din Italia — ghid complet 2026"
      intro="Ai nevoie de pașaport pentru copilul tău din Italia? Procedura pentru minori are reguli speciale față de adulți — prezența ambilor părinți, termen mai lung la unele consulate și reguli diferite de ridicare."
      tldr="Prezență obligatorie: minor + ambii părinți (sau procură specială dacă lipsește unul). Fotografii NU — biometrie la ghișeu. Termen: 45 zile luc. standard; Trieste + Bari: 2–3 luni ⚠️. Sub 14 ani: valabil 3 ani. 12–17 ani: valabil 5 ani."
      ctaHref="/wizard?problem=pasaport&country=it"
      ctaLabel="Documentele exacte pentru pașaportul copilului →"
      updatedAt="aprilie 2026"
      sourceNote="Verificat live: toate consulatele italiene MAE — aprilie 2026"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'termen-per-consulat', title: 'Termen procesare minor — per consulat', content: (<div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-gray-50"><th className="p-2 border border-gray-200">Consulat</th><th className="p-2 border border-gray-200">Termen minor</th><th className="p-2 border border-gray-200">Program ridicare minor</th></tr></thead><tbody><tr><td className="p-2 border border-gray-200">Roma</td><td className="p-2 border border-gray-200">45 zile luc. ✅</td><td className="p-2 border border-gray-200 font-medium text-blue-700">L-V 14:30–16:00 ✅</td></tr><tr className="bg-gray-50"><td className="p-2 border border-gray-200">Milano</td><td className="p-2 border border-gray-200">45 zile luc. ✅</td><td className="p-2 border border-gray-200">L-V 09:00–10:00, 14:00–15:00</td></tr><tr><td className="p-2 border border-gray-200">Bologna</td><td className="p-2 border border-gray-200 text-orange-600">"30–45 zile" ⚠️</td><td className="p-2 border border-gray-200">L-J 15:00–17:00</td></tr><tr className="bg-gray-50"><td className="p-2 border border-gray-200">Torino</td><td className="p-2 border border-gray-200">45 zile luc. ✅</td><td className="p-2 border border-gray-200">Joi 14:30–15:30</td></tr><tr><td className="p-2 border border-gray-200 font-medium text-orange-700">Trieste</td><td className="p-2 border border-gray-200 text-red-600 font-bold">2–3 luni ⚠️</td><td className="p-2 border border-gray-200">L-J 15:30–16:30, V 14:00–15:00</td></tr><tr className="bg-gray-50"><td className="p-2 border border-gray-200 font-medium text-orange-700">Bari</td><td className="p-2 border border-gray-200 text-red-600 font-bold">2–3 luni ⚠️</td><td className="p-2 border border-gray-200">L-J 09:00–15:00</td></tr><tr><td className="p-2 border border-gray-200">Catania</td><td className="p-2 border border-gray-200 text-orange-600">⚠️ Neconfirmat</td><td className="p-2 border border-gray-200 text-orange-600">⚠️ Neconfirmat</td></tr></tbody></table><p className="text-xs text-gray-500 mt-1">⚠️ Roma CRDS: program ridicare minor = L-V 14:30–16:00 (diferit față de non-CRDS L-J 09:00–14:00).</p></div>) },
        { id: 'parinte-absent', title: 'Ce faci dacă un părinte nu poate veni', content: (<div className="rounded-lg border border-orange-200 bg-orange-50 p-4 text-sm"><p className="font-semibold text-orange-900">Un singur părinte poate depune dacă are procură specială</p><p className="text-orange-800 mt-2">Procura specială de la celălalt părinte trebuie:</p><ul className="text-orange-800 space-y-0.5 mt-1"><li>• Autentificată la consulat (dacă părintele e în Italia)</li><li>• Sau la notar în România (dacă e în RO)</li><li>• Făcută ÎNAINTE de ziua programării — nu se improvizează în ultima clipă</li></ul></div>) },
        { id: 'transcriere-first', title: 'Copil născut în Italia — transcrierea vine primul', content: (<div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm"><p className="font-semibold text-blue-900">Fără certificat de naștere românesc, pașaportul nu e posibil</p><p className="text-blue-800 mt-1">Dacă copilul s-a născut în Italia și nu are certificat de naștere românesc, primul pas este transcrierea. Abia după aceea poate obține pașaport CRDS.</p><a href="/transcriere-certificat-nastere-italia" className="mt-2 inline-block text-xs font-medium text-blue-900 underline">Ghid transcriere certificat naștere italian →</a></div>) },
        { id: 'pagini-conexe', title: 'Pagini conexe pentru pașaportul copilului', content: (<div className="grid gap-3 text-sm md:grid-cols-2"><Link href="/pasaport-crds-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"><p className="font-medium text-gray-900">Pașaport CRDS adult</p><p className="mt-1 text-gray-600">Procedura de bază pentru domiciliu în Italia, dacă vrei comparația cu adulții.</p></Link><Link href="/procura-notariala-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"><p className="font-medium text-gray-900">Procura notarială</p><p className="mt-1 text-gray-600">Utilă când un părinte nu poate veni și ai nevoie de împuternicire.</p></Link><Link href="/programare-consulat-romania-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"><p className="font-medium text-gray-900">Programare consulat</p><p className="mt-1 text-gray-600">Cum rezervi corect în econsulat și ce excepții ai la Bologna.</p></Link><Link href="/acte-romanesti-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"><p className="font-medium text-gray-900">Hub acte românești Italia</p><p className="mt-1 text-gray-600">Navighezi rapid spre transcriere, buletin și restul procedurilor utile familiei.</p></Link></div>) },
      ]}
      finalCtaTitle="Documentele exacte pentru pașaportul copilului"
      finalCtaText="Wizardul ActeRO îți spune exact ce aduc părinții, dacă e nevoie de procură și cât durează la consulatul vostru."
    />
  )
}
