import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'
export const metadata: Metadata = {
  title: 'Buletin românesc din Italia — Ghid complet 2026',
  description: 'Reînnoire buletin din Italia: prezență obligatorie în România din 2025, CEI sau CIS, SPCLEP competent. Pași verificați pentru românii din Italia.',
  keywords: ['buletin romania italia','buletin romanesc din italia','reinnoire buletin romanesc italia','carte identitate romaneasca italia','cei cis romani italia'],
  openGraph: { title: 'Buletin românesc din Italia — Ghid 2026', description: 'Prezență obligatorie în România din 2025. CEI sau CIS — ce alegi și de ce.', url: 'https://www.actero.ro/buletin-romania-italia', type: 'article' },
  alternates: { canonical: 'https://www.actero.ro/buletin-romania-italia' },
}
const faqItems = [
  { question: 'Pot reînnoi buletinul fără să merg în România?', answer: 'Nu complet. Din septembrie 2025, biometria (fotografie, amprente) și ridicarea CEI sunt obligatorii personal la SPCLEP. Cererea poate fi pregătită din Italia, dar deplasarea în România este obligatorie.' },
  { question: 'Mai funcționează procura pentru buletin?', answer: 'Parțial. Poți folosi un mandatar pentru pregătirea documentelor și anumite etape administrative, dar pentru CEI și CIS depunerea și biometria necesită prezență personală.' },
  { question: 'Ce înseamnă CEI și CIS?', answer: 'CEI = Cartea Electronică de Identitate (cu cip, valabilă în UE, biometrie obligatorie, ~5 zile luc.). CIS = Cartea de Identitate Simplă (fără cip, nu valabilă ca document de călătorie în UE, ~30 zile, doar SPCLEP de domiciliu).' },
  { question: 'La ce SPCLEP merg?', answer: 'CEI: orice SPCLEP din România (din august 2025). CIS: doar SPCLEP de domiciliu. Dacă nu ai domiciliu activ în România, trebuie mai întâi să restabilești domiciliul.' },
  { question: 'Cât costă buletinul?', answer: 'CEI: gratuit prima dată (program PNRR până 30 iunie 2026), apoi 70 RON. CIS: 40 RON. Taxa se plătește la CEC Bank sau SelfPay — nu la casieria SPCLEP.' },
]
const howToSteps = [
  { name: 'Verifică situația domiciliului', text: 'Ai domiciliu activ în România (pe CI) → SPCLEP de domiciliu sau orice SPCLEP (CEI). Nu ai domiciliu → trebuie restabilit mai întâi.' },
  { name: 'Alege: CEI sau CIS', text: 'CEI: biometric, valabil UE, orice SPCLEP. CIS: simplu, doar SPCLEP de domiciliu, nu valabil pentru călătorii UE.' },
  { name: 'Pregătește documentele din Italia', text: 'Certificat naștere, certificat căsătorie dacă ți-ai schimbat numele, buletinul expirat dacă îl mai ai.' },
  { name: 'Planifică deplasarea în România', text: 'Rezervă timp pentru SPCLEP. Programare online: hub.mai.gov.ro/cei/programari (CEI).' },
  { name: 'Prezintă-te personal la SPCLEP', text: 'Biometrie obligatorie. Plătești taxa la CEC/SelfPay. Primești recipisa.' },
  { name: 'Ridică', text: 'CEI: personal obligatoriu (setup PIN). CIS: personal sau prin procură specială notarială.' },
]
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://www.actero.ro/buletin-romania-italia#article', headline: 'Buletin românesc din Italia — Ghid 2026', datePublished: '2026-04-01', dateModified: '2026-04-10', author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' }, mainEntityOfPage: 'https://www.actero.ro/buletin-romania-italia', inLanguage: 'ro' }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' }, { '@type': 'ListItem', position: 2, name: 'Acte românești Italia', item: 'https://www.actero.ro/acte-romanesti-italia' }, { '@type': 'ListItem', position: 3, name: 'Buletin România Italia', item: 'https://www.actero.ro/buletin-romania-italia' } ] }
export default function BuletinRomaniaItaliaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="buletin-romania-italia"
      lpTopic="buletin-hub-italia"
      h1="Buletin românesc din Italia — ce s-a schimbat în 2025"
      intro="Locuiești în Italia și ai buletinul românesc expirat? Din septembrie 2025, procedura s-a schimbat fundamental: prezența fizică în România este obligatorie. Iată ce înseamnă asta pentru tine."
      tldr="Din sept 2025: biometria și depunerea la SPCLEP necesită prezență personală — procura nu mai ajunge pentru tot procesul. CEI (biometric, valabil UE): orice SPCLEP. CIS (simplu): doar SPCLEP de domiciliu. CEI gratuit prima dată până 30 iunie 2026."
      ctaHref="/wizard?problem=buletin&country=it"
      ctaLabel="Arată-mi pașii exacți pentru situația mea →"
      updatedAt="aprilie 2026"
      sourceNote="MAI România · hub.mai.gov.ro · consulatele României din Italia"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        { id: 'schimbare-2025', title: 'Schimbarea din septembrie 2025', content: (<div className="rounded-xl border border-orange-200 bg-orange-50 p-4"><p className="font-semibold text-orange-900 mb-2">⚠️ Ce s-a schimbat față de procedura veche</p><p className="text-sm text-orange-800">Înainte: puteai trimite un mandatar cu procură specială să depună cererea și să ridice buletinul. <strong>Din septembrie 2025:</strong> depunerea și biometria (fotografie + amprente) se fac obligatoriu personal la SPCLEP. Ridici CEI-ul personal (setup PIN obligatoriu). CIS-ul poate fi ridicat prin procură specială.</p></div>) },
        { id: 'cei-vs-cis', title: 'CEI sau CIS — ce alegi?', content: (<div className="grid grid-cols-1 gap-3 text-sm"><div className="rounded-lg border border-blue-200 bg-blue-50 p-3"><p className="font-semibold text-blue-900">CEI — Cartea Electronică de Identitate</p><ul className="text-blue-800 mt-1 space-y-0.5"><li>• Biometric (fotografie + amprente)</li><li>• Valabilă pentru călătorii în UE ✅</li><li>• Orice SPCLEP (din august 2025)</li><li>• ~5 zile lucrătoare</li><li>• Gratuit prima dată până 30 iun 2026, apoi 70 RON</li></ul></div><div className="rounded-lg border border-gray-200 bg-gray-50 p-3"><p className="font-semibold text-gray-900">CIS — Cartea de Identitate Simplă</p><ul className="text-gray-700 mt-1 space-y-0.5"><li>• Fără cip, fără amprente</li><li>• NU valabilă pentru călătorii UE ⚠️</li><li>• Doar SPCLEP de domiciliu</li><li>• ~30 zile</li><li>• 40 RON</li></ul></div></div>) },
        {
          id: 'legaturi-utile',
          title: 'Pagini utile din același cluster Italia',
          content: (
            <div className="grid gap-3 sm:grid-cols-2 text-sm">
              <Link href="/acte-romanesti-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Acte românești din Italia</p>
                <p className="mt-1 text-gray-600">Hub-ul principal pentru toate procedurile consulare și cele care cer drum în România.</p>
              </Link>
              <Link href="/transcriere-certificat-nastere-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Transcriere certificat de naștere italian</p>
                <p className="mt-1 text-gray-600">Dacă este vorba despre primul buletin al copilului, transcrierea vine înainte.</p>
              </Link>
              <Link href="/pasaport-romania-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Pașaport românesc în Italia</p>
                <p className="mt-1 text-gray-600">Pentru situațiile în care ai nevoie să alegi între buletin și pașaport.</p>
              </Link>
              <Link href="/procura-notariala-italia" className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                <p className="font-medium text-gray-900">Procură notarială din Italia</p>
                <p className="mt-1 text-gray-600">Utilă dacă ai nevoie de reprezentare în România pentru pași administrativi conexi.</p>
              </Link>
            </div>
          ),
        },
      ]}
      finalCtaTitle="Care e exact situația ta cu buletinul?"
      finalCtaText="Wizardul ActeRO identifică dacă ai domiciliu activ, ce documente pregătești din Italia și ce SPCLEP mergi."
    />
  )
}
