import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
export const metadata: Metadata = {
  title: 'Pașaport CRDS din Italia — cu domiciliul în Italia 2026 | ActeRO',
  description: 'Pașaport CRDS: domiciliu în Italia, document domiciliu italian obligatoriu, biometrie la ghișeu, 53€. Diferențe față de pașaportul cu domiciliu în România. Verificat 2026.',
  keywords: ['pasaport crds italia','pasaport crds ce inseamna','pasaport crds domiciliu italia','prim pasaport crds italia','pasaport simplu electronic crds'],
  openGraph: { title: 'Pașaport CRDS din Italia — Ghid 2026', description: 'CRDS = domiciliu în Italia. Document domiciliu italian obligatoriu. Biometrie la ghișeu. 53€.', url: 'https://www.actero.ro/pasaport-crds-italia', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/pasaport-crds-italia' },
}
const faqItems = [
  { question: 'Ce înseamnă CRDS?', answer: 'CRDS = Cetățeni Români cu Domiciliul în Străinătate. Dacă domiciliul tău oficial este stabilit în Italia (nu în România), pașaportul tău este CRDS.' },
  { question: 'Cum știu dacă am pașaport CRDS sau nu?', answer: 'Uită-te la pașaportul actual. Dacă ai adresă din Italia trecută sau dacă la ultima reînnoire ai ales domiciliu în Italia, ești CRDS. Dacă ai CI românească cu adresă din România, ești pe cealaltă procedură.' },
  { question: 'Ce document de domiciliu italian trebuie?', answer: 'CI italiană (carta di identità), certificato di residenza sau permesso di soggiorno. Original, fără apostilă, fără traducere.' },
  { question: 'Ce selectez pe econsulat.ro pentru CRDS?', answer: 'Pașaport simplu electronic CRDS. Nu selecta "simplu electronic" fără CRDS — asta e pentru domiciliu România.' },
  { question: 'CI mea românească va fi anulată?', answer: 'Da. Dacă ai CI românească (chiar expirată), aceasta va fi anulată la eliberarea pașaportului CRDS — e normal și obligatoriu prin lege.' },
  { question: 'Am nevoie de Aufenthaltstitel sau permesso di soggiorno obligatoriu?', answer: 'Nu. Permesso di soggiorno nu apare în lista obligatorie. Dacă ai CI italiană sau certificato di residenza, e suficient.' },
  { question: 'Fotografii pentru CRDS?', answer: 'Nu — biometrie la ghișeu la toate cele 7 consulate italiene.' },
  { question: 'Unde ridic pașaportul CRDS la Roma?', answer: 'Atenție: la Roma, ridicarea CRDS se face L-V 14:30–16:00 — diferit față de non-CRDS (L-J 09:00–14:00).' },
]
const howToSteps = [
  { name: 'Confirmă că ești CRDS', text: 'Domiciliu oficial în Italia → CRDS. CI românească cu adresă RO → altă procedură.' },
  { name: 'Pregătește documentele', text: 'Pașaport anterior (expirat sau valabil) + certificat naștere + document domiciliu italian (CI italiană / certificato di residenza) + CI română dacă o ai.' },
  { name: 'Cerere econsulat.ro', text: 'Cerere nouă → Pașaport simplu electronic CRDS → încarci documentele → trimiți.' },
  { name: 'Programare și ziua consulatului', text: 'Programare după validare. Fotografii NU. Plătești 53€. Termen: 45 zile luc.' },
  { name: 'Ridică', text: 'Verifici pe [consulat].mae.ro/cauta-pasaport. ATENȚIE Roma CRDS: L-V 14:30–16:00.' },
]
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://www.actero.ro/pasaport-crds-italia#article', headline: 'Pașaport CRDS din Italia — Ghid 2026', datePublished: '2026-04-01', dateModified: '2026-04-10', author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, mainEntityOfPage: 'https://www.actero.ro/pasaport-crds-italia', inLanguage: 'ro' }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' }, { '@type': 'ListItem', position: 2, name: 'Acte românești Italia', item: 'https://www.actero.ro/acte-romanesti-italia' }, { '@type': 'ListItem', position: 3, name: 'Pașaport România Italia', item: 'https://www.actero.ro/pasaport-romania-italia' }, { '@type': 'ListItem', position: 4, name: 'Pașaport CRDS Italia', item: 'https://www.actero.ro/pasaport-crds-italia' } ] }
export default function PasaportCrdsItaliaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="pasaport-crds-italia"
      lpTopic="pasaport-crds-italia"
      h1="Pașaport CRDS din Italia — domiciliul tău este în Italia"
      intro="Dacă domiciliul tău oficial este în Italia, pașaportul tău este CRDS. Procedura e similară cu reînnoirea normală, dar cu documente specifice și câteva capcane de evitat."
      tldr="CRDS = domiciliu Italia. Pe econsulat.ro: Pașaport simplu electronic CRDS. Documente în plus față de non-CRDS: CI italiană / certificato di residenza. CI română va fi anulată. Fotografii NU. 53€. Atenție Roma: ridicare CRDS L-V 14:30–16:00."
      ctaHref="/wizard?problem=pasaport&country=it"
      ctaLabel="Documentele exacte pentru CRDS-ul meu →"
      updatedAt="aprilie 2026"
      sourceNote="Verificat live: toate consulatele italiene MAE — aprilie 2026"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'documente', title: 'Lista documentelor pentru CRDS', content: (<div className="rounded-lg border border-gray-200 p-3 text-sm space-y-1.5"><ul className="space-y-1 text-gray-700"><li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span><strong>Pașaport anterior</strong> — expirat sau valabil. Original.</span></li><li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span><strong>Certificat de naștere românesc</strong> — original. Nu plastifiat/deteriorat.</span></li><li className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span><strong>Document domiciliu italian</strong> — CI italiană / certificato di residenza / permesso di soggiorno. Fără apostilă, fără traducere.</span></li><li className="flex gap-2"><span className="text-orange-500 font-bold">±</span><span><strong>CI românească</strong> — dacă o ai, chiar expirată. Va fi anulată la eliberare.</span></li><li className="flex gap-2"><span className="text-orange-500 font-bold">±</span><span><strong>Certificat căsătorie</strong> — DOAR dacă ți-ai schimbat numele.</span></li></ul><div className="mt-2 p-2 bg-blue-50 rounded border border-blue-100 text-xs text-blue-800"><strong>Fotografii: NU aduci.</strong> Biometrie la ghișeu la toate consulatele italiene.</div></div>) },
        { id: 'greseli', title: 'Greșelile frecvente la CRDS', content: (<div className="space-y-2 text-sm"><div className="flex gap-2 rounded border border-red-100 bg-red-50 p-2"><span className="text-red-500 font-bold">✗</span><span><strong>Selectezi "simplu electronic" fără CRDS</strong> pe econsulat.ro — cererea va fi invalidată la ghișeu.</span></div><div className="flex gap-2 rounded border border-red-100 bg-red-50 p-2"><span className="text-red-500 font-bold">✗</span><span><strong>Nu aduci documentul de domiciliu italian</strong> — indispensabil pentru CRDS.</span></div><div className="flex gap-2 rounded border border-red-100 bg-red-50 p-2"><span className="text-red-500 font-bold">✗</span><span><strong>Mergi la ridicare în intervalul greșit la Roma</strong> — CRDS: L-V 14:30–16:00, nu L-J 09:00–14:00.</span></div></div>) },
        { id: 'pagini-conexe', title: 'Pagini conexe pentru CRDS', content: (<div className="grid gap-3 text-sm md:grid-cols-2"><Link href="/pasaport-romania-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"><p className="font-medium text-gray-900">Hub pașaport Italia</p><p className="mt-1 text-gray-600">Compară rapid procedura CRDS cu celelalte situații de pașaport.</p></Link><Link href="/pasaport-expirat-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"><p className="font-medium text-gray-900">Pașaport expirat</p><p className="mt-1 text-gray-600">Dacă vrei ghidul de reînnoire standard, separat de explicația CRDS.</p></Link><Link href="/pasaport-minor-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"><p className="font-medium text-gray-900">Pașaport minor CRDS</p><p className="mt-1 text-gray-600">Reguli speciale pentru copii, ambii părinți și termene mai lungi.</p></Link><Link href="/programare-consulat-romania-italia" className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:bg-gray-50"><p className="font-medium text-gray-900">Programare consulat</p><p className="mt-1 text-gray-600">Vezi pașii în econsulat și diferențele dintre consulate.</p></Link></div>) },
      ]}
      finalCtaTitle="Documentele exacte pentru pașaportul tău CRDS"
      finalCtaText="Wizardul ActeRO confirmat că ești CRDS și îți dă lista completă pentru consulatul tău."
    />
  )
}
