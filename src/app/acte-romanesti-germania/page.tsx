import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Acte românești din Germania — Ghid complet 2026 | ActeRO',
  description:
    'Pașaport, buletin, procuri, titlu de călătorie sau acte copil — ce rezolvi la consulat, ce necesită drum în România și cum găsești traseul exact.',
  keywords: [
    'acte românești germania',
    'consulat romania germania acte',
    'acte consulat romania germania',
    'cum rezolv acte romanesti din germania',
    'pasaport germania romani',
    'buletin germania romani',
    'procura notariala germania',
    'titlu calatorie germania',
    'econsulat germania',
    'copil nascut germania acte romanesti',
  ],
  openGraph: {
    title: 'Acte românești din Germania — Ghid complet 2026',
    description:
      'Ce rezolvi la consulat, ce necesită drum în România și cum găsești traseul exact în 30 de secunde.',
    url: 'https://actero.ro/acte-romanesti-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/acte-romanesti-germania',
  },
}

const faqItems = [
  {
    question: 'Ce acte românești pot rezolva din Germania fără să merg în România?',
    answer:
      'Pașaportul, titlul de călătorie, procurile notariale și transcrierea certificatului de naștere se rezolvă prin consulatul României din Germania. Buletinul necesită deplasare în România la SPCLEP.',
  },
  {
    question: 'Ce acte românești necesită prezență fizică în România?',
    answer:
      'Buletinul, fie că vorbim de CEI sau CIS, necesită deplasare în România. Biometria se face la SPCLEP, nu la consulat.',
  },
  {
    question: 'Cât durează obținerea unui pașaport la consulatul din Germania?',
    answer:
      'Termenul oficial de procesare este de 45 de zile lucrătoare de la depunere. La acesta se adaugă timpul până obții programarea pe econsulat.ro.',
  },
  {
    question: 'Am nevoie de programare la consulat pentru orice act?',
    answer:
      'Pașaportul și procurile notariale necesită programare pe econsulat.ro. Titlul de călătorie se obține fără programare, prezentându-te direct în intervalul dedicat.',
  },
  {
    question: 'Ce este econsulat.ro și am nevoie de el?',
    answer:
      'Econsulat.ro este platforma oficială pentru cereri și programări consulare. Este necesară pentru pașaport și procuri, dar nu pentru titlul de călătorie.',
  },
  {
    question: 'Copilul meu s-a născut în Germania — ce acte românești are nevoie?',
    answer:
      'Primul pas este transcrierea certificatului de naștere german în registrele românești. După transcriere, poți continua cu primul pașaport sau primul buletin.',
  },
  {
    question: 'La ce consulat mă adresez dacă locuiesc în NRW, Bayern sau Baden-Württemberg?',
    answer:
      'Consulatul arondat depinde de landul în care locuiești: NRW, Hessen și nordul Germaniei merg la Bonn, Bayern la München, Baden-Württemberg la Stuttgart, iar Berlinul și estul Germaniei la Berlin.',
  },
  {
    question: 'Pot rezolva mai multe acte odată la consulat?',
    answer:
      'În unele situații da, dar depinde de act și de disponibilitatea consulatului. Wizardul ActeRO te ajută să vezi ce poți combina și ce rămâne separat.',
  },
]

const howToSteps = [
  {
    name: 'Identifică actul de care ai nevoie',
    text: 'Pașaport, buletin, titlu de călătorie, procură sau acte pentru copil — fiecare are un traseu diferit.',
  },
  {
    name: 'Verifică dacă se rezolvă la consulat sau în România',
    text: 'Pașaportul, titlul de călătorie și procurile merg prin consulat. Buletinul necesită deplasare în România.',
  },
  {
    name: 'Află consulatul arondat landului tău',
    text: 'Germania are 4 consulate relevante pentru români: Bonn, München, Stuttgart și Berlin.',
  },
  {
    name: 'Pregătește documentele conform situației tale',
    text: 'Lista exactă depinde de tipul actului, de consulat și de situația ta concretă.',
  },
  {
    name: 'Fă programarea pe econsulat.ro dacă este necesar',
    text: 'Pentru pașaport și procuri, programarea se face pe econsulat.ro și este gratuită.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/acte-romanesti-germania#article',
  headline: 'Acte românești din Germania — Ghid complet 2026',
  description:
    'Pagina hub pentru actele românești rezolvate din Germania: pașaport, buletin, titlu de călătorie, procuri și acte pentru copil.',
  datePublished: '2026-04-06',
  dateModified: '2026-04-06',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/acte-romanesti-germania',
  inLanguage: 'ro',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://actero.ro' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Acte românești Germania',
      item: 'https://actero.ro/acte-romanesti-germania',
    },
  ],
}

const sections = [
  {
    id: 'context',
    title: 'Ce rezolvi la consulat și ce necesită drum în România',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Cel mai frecvent blocaj al românilor din Germania nu este lipsa documentelor, ci lipsa
          clarității despre unde se rezolvă fiecare act. Unele se fac exclusiv la consulat.
          Altele cer prezență fizică în România, indiferent ce pregătești înainte.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="font-semibold text-green-900 mb-2">La consulatul din Germania</p>
            <ul className="space-y-1 text-sm text-green-800">
              <li>
                <Link href="/pasaport-expirat-germania" className="underline hover:text-green-900">
                  Pașaport
                </Link>{' '}
                — reînnoire, CRDS sau situații conexe
              </li>
              <li>
                <Link href="/titlu-calatorie-urgenta-germania" className="underline hover:text-green-900">
                  Titlu de călătorie
                </Link>{' '}
                — fără programare
              </li>
              <li>
                <Link href="/procura-notariala-germania" className="underline hover:text-green-900">
                  Procuri notariale
                </Link>{' '}
                — proprietate, moștenire, bancă, divorț
              </li>
              <li>
                <Link href="/transcriere-certificat-nastere-germania" className="underline hover:text-green-900">
                  Transcriere certificat de naștere german
                </Link>{' '}
                — primul pas pentru actele copilului
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
            <p className="font-semibold text-orange-900 mb-2">Necesită deplasare în România</p>
            <ul className="space-y-1 text-sm text-orange-800">
              <li>
                <Link href="/buletin-expirat-germania" className="underline hover:text-orange-900">
                  Buletinul
                </Link>{' '}
                — biometria se face la SPCLEP
              </li>
              <li>Primul buletin pentru copil — după transcriere</li>
              <li>Unele schimbări de domiciliu sau pași de stare civilă locală</li>
            </ul>
            <p className="mt-2 text-xs text-orange-700">
              Din 2025, procura pentru buletin nu mai acoperă biometria și prezența la SPCLEP.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'documente',
    title: 'Cele 5 situații principale — pe scurt',
    content: (
      <div className="space-y-3">
        {[
          {
            href: '/pasaport-romania-germania',
            emoji: '🛂',
            titlu: 'Pașaport românesc din Germania',
            text: 'Alege rapid între CRDS, domiciliu în România, pașaport expirat, pierdut sau primul pașaport pentru copil.',
            anchor: 'Ghid pașaport →',
          },
          {
            href: '/buletin-expirat-germania',
            emoji: '🪪',
            titlu: 'Buletin expirat sau pierdut',
            text: 'Necesită deplasare în România la SPCLEP-ul competent. CEI și CIS schimbă traseul și regulile de ridicare.',
            anchor: 'Ghid buletin →',
          },
          {
            href: '/titlu-calatorie-urgenta-germania',
            emoji: '⚡',
            titlu: 'Trebuie să pleci urgent și nu ai acte valabile',
            text: 'Titlul de călătorie se obține fără programare, de obicei în aceeași zi, exclusiv pentru revenirea în România.',
            anchor: 'Ghid titlu de călătorie →',
          },
          {
            href: '/procura-notariala-germania',
            emoji: '📜',
            titlu: 'Ai ceva de rezolvat în România, dar nu poți merge',
            text: 'Procura notarială se face la consulat și acoperă proprietăți, moșteniri, firmă, cont bancar sau divorț.',
            anchor: 'Ghid procuri →',
          },
          {
            href: '/acte-copil-nascut-in-germania',
            emoji: '🧒',
            titlu: 'Copilul tău s-a născut în Germania și nu are acte românești',
            text: 'Primul pas este transcrierea certificatului de naștere. Abia apoi poți continua cu pașaportul sau buletinul.',
            anchor: 'Ghid acte copil →',
          },
        ].map(({ href, emoji, titlu, text, anchor }) => (
          <div
            key={href}
            className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4 hover:border-blue-200 transition-colors"
          >
            <span className="text-2xl flex-shrink-0">{emoji}</span>
            <div>
              <p className="font-semibold text-gray-900 mb-1">{titlu}</p>
              <p className="text-sm text-gray-600 mb-2">{text}</p>
              <Link href={href} className="text-sm font-medium text-blue-600 hover:text-blue-800 underline">
                {anchor}
              </Link>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'consulate',
    title: 'Cele 4 consulate din Germania — care te acoperă',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600">
          Consulatul competent depinde de landul în care locuiești. Nu poți alege liber alt
          consulat doar pentru că pare mai convenabil.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            {
              oras: 'Bonn',
              landuri: 'NRW, Hessen, Renania-Palatinat, Saarland și nordul Germaniei',
              nota: 'Programări mai rare în anumite perioade',
            },
            {
              oras: 'München',
              landuri: 'Bayern',
              nota: 'Plata taxelor de pașaport este cash',
            },
            {
              oras: 'Stuttgart',
              landuri: 'Baden-Württemberg',
              nota: 'Ridicare prin poștă disponibilă pentru unele acte',
            },
            {
              oras: 'Berlin',
              landuri: 'Berlin și estul Germaniei',
              nota: 'Plată pașaport prin POS debit sau virament',
            },
          ].map(({ oras, landuri, nota }) => (
            <div key={oras} className="rounded-lg border border-gray-200 p-3">
              <p className="font-semibold text-gray-900">{oras}</p>
              <p className="text-xs text-gray-500 mb-1">{landuri}</p>
              <p className="text-xs text-gray-600">{nota}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'ghiduri-cheie',
    title: 'Cele mai utile pagini din site — intrări directe',
    content: (
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          {
            href: '/programare-econsulat-germania',
            title: 'Programare pe econsulat',
            text: 'Cum treci de la cerere depusă la programare validată, fără blocaje și fără intermediari.',
          },
          {
            href: '/pasaport-crds-vs-pasaport-cu-domiciliu-romania',
            title: 'CRDS vs pașaport cu domiciliu în România',
            text: 'Pagina care te ajută să alegi corect tipul de pașaport înainte să intri pe econsulat.',
          },
          {
            href: '/pasaport-pierdut-furat-germania',
            title: 'Pașaport pierdut sau furat',
            text: 'Flux separat pentru declarație de pierdere, poliție și traducere în funcție de consulat.',
          },
          {
            href: '/procura-consulat-vs-notar-german',
            title: 'Procura la consulat vs notar german',
            text: 'Clarifică rapid când are sens consulatul și când te complici inutil cu notarul german.',
          },
          {
            href: '/transcriere-certificat-nastere-germania',
            title: 'Transcriere certificat de naștere',
            text: 'Primul pas pentru copilul născut în Germania înainte de pașaport sau primul buletin.',
          },
          {
            href: '/titlu-calatorie-vs-pasaport-temporar',
            title: 'Titlu de călătorie vs pașaport temporar',
            text: 'Explică ce iei din Germania și ce document îți faci după ce ajungi în România.',
          },
        ].map(({ href, title, text }) => (
          <Link
            key={href}
            href={href}
            className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-blue-200"
          >
            <p className="mb-1 font-semibold text-gray-900">{title}</p>
            <p className="text-sm text-gray-600">{text}</p>
          </Link>
        ))}
      </div>
    ),
  },
  {
    id: 'econsulat',
    title: 'econsulat.ro — platforma de programări',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Econsulat.ro este platforma oficială pentru cereri și programări consulare. O folosești
          pentru pașaport și procuri. Pentru titlul de călătorie nu ai nevoie de ea.
        </p>
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 space-y-2">
          <p className="font-semibold text-blue-900 text-sm">Cum funcționează, pe scurt:</p>
          <ul className="space-y-1 text-sm text-blue-800">
            <li>Creezi contul cu email și parolă</li>
            <li>Depui cererea online cu documentele scanate</li>
            <li>Aștepți validarea și alegi slotul de programare</li>
            <li>Te prezinți la consulat cu documentele originale</li>
          </ul>
        </div>
        <p className="text-sm text-gray-600">
          <Link
            href="/programare-econsulat-germania"
            className="font-medium text-blue-600 hover:text-blue-800 underline"
          >
            Ghid complet despre programări și econsulat →
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: 'greseli',
    title: 'Greșeli frecvente — ce îi trimite pe oameni degeaba la ghișeu',
    content: (
      <div className="space-y-2">
        {[
          {
            gresit: 'Vin cu informații vechi sau cu pașii amestecați',
            corect: 'Procedura diferă în funcție de act, țară și autoritate. Pașii trebuie verificați pe situația exactă.',
          },
          {
            gresit: 'Merg la alt consulat decât cel arondat landului lor',
            corect: 'Consulatul competent este stabilit după landul de domiciliu.',
          },
          {
            gresit: 'Se bazează pe programări plătite prin intermediari',
            corect: 'Programările oficiale sunt gratuite și se fac direct în platforma oficială.',
          },
          {
            gresit: 'Aduc certificate plastifiate sau deteriorate',
            corect: 'Certificatele plastifiate sau rupte pot fi refuzate. Duplicatul se obține înainte de drum.',
          },
        ].map(({ gresit, corect }, i) => (
          <div key={i} className="rounded-lg border border-red-100 bg-red-50 p-3">
            <p className="text-xs font-semibold text-red-700 mb-0.5">Greșit: {gresit}</p>
            <p className="text-xs text-gray-700">Corect: {corect}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'wizard',
    title: 'Când merită să folosești ghidul rapid ActeRO',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Dacă nu știi clar pe ce traseu intri sau ai mai multe acte expirate deodată, ghidul rapid
          îți arată rapid varianta corectă și diferențele care contează.
        </p>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-2">
          <p className="text-sm text-gray-700">Primești, pe scurt:</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>lista exactă de documente pentru situația ta</li>
            <li>consulatul corect sau autoritatea din România</li>
            <li>pașii în ordine și avertizările importante</li>
            <li>diferențele dintre situații care par similare, dar nu sunt</li>
          </ul>
        </div>
      </div>
    ),
  },
]

export default function ActeRomanestiGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="acte-romanesti-germania"
      lpTopic="hub"
      h1="Acte românești din Germania — ce rezolvi la consulat și ce nu"
      intro="Ești în Germania și ai nevoie să rezolvi un act românesc. Primul pas nu este să mergi direct la consulat, ci să afli dacă actul tău se rezolvă acolo sau în România. Diferența asta îți poate salva timp, bani și un drum inutil."
      tldr="Pașaportul, titlul de călătorie și procurile se rezolvă prin consulatul României din Germania. Buletinul necesită deplasare în România. Pentru copil născut în Germania, primul pas este transcrierea certificatului de naștere."
      ctaHref="/wizard"
      ctaLabel="Găsește traseul tău în 30 de secunde →"
      updatedAt="aprilie 2026"
      sourceNote="MAE, econsulat.ro, consulatele României din Germania, hub.mai.gov.ro"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi exact de unde să pornești?"
      finalCtaText="Spune în ghidul rapid ActeRO ce act ai nevoie și din ce land ești. Primești lista exactă de documente, consulatul corect și pașii în ordine."
    />
  )
}
