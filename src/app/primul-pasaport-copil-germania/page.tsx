import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Primul pașaport copil născut în Germania — după transcriere | ActeRO',
  description:
    'Primul pașaport CRDS al copilului după transcriere: acordul părinților, fără fotografii proprii, pașii practici și diferențele importante. Ghid 2026.',
  keywords: [
    'primul pasaport copil germania',
    'primul pasaport copil nascut in germania',
    'pasaport copil dupa transcriere',
    'pasaport crds copil germania',
    'pasaport minor nascut germania',
    'documente primul pasaport copil germania',
    'acordul ambilor parinti pasaport copil',
    'procura parinte pasaport minor',
    '53 euro pasaport copil germania',
    'cat dureaza pasaport copil germania',
  ],
  openGraph: {
    title: 'Primul pașaport copil născut în Germania — după transcriere',
    description:
      'După transcriere, urmează primul pașaport: acordul părinților, prezența copilului și logica pașilor la consulat.',
    url: 'https://actero.ro/primul-pasaport-copil-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/primul-pasaport-copil-germania',
  },
}

const faqItems = [
  {
    question: 'Trebuie să finalizez transcrierea nașterii înainte de a face pașaportul?',
    answer:
      'Da. Acesta este blocajul principal: fără transcriere finalizată nu ai baza românească necesară pentru cerere.',
  },
  {
    question: 'Trebuie să fie prezenți ambii părinți la consulat pentru pașaportul copilului?',
    answer:
      'Ideal, da. Când unul dintre părinți lipsește, trebuie înțeles corect cum se suplimentează acordul lui.',
  },
  {
    question: 'Trebuie să aduc fotografii pentru pașaportul copilului?',
    answer:
      'Nu. Aici regula seamănă cu fluxul CRDS: imaginea se preia la ghișeu.',
  },
  {
    question: 'Cât costă pașaportul pentru copil?',
    answer:
      'Costul urmează logica pașaportului românesc emis prin consulat, nu o regulă specială separată doar pentru copii.',
  },
  {
    question: 'Cât durează pașaportul copilului?',
    answer:
      'Termenul este comparabil cu pașaportul CRDS obișnuit, nu cu un document de urgență.',
  },
  {
    question: 'Pașaportul copilului este CRDS dacă s-a născut și locuiește în Germania?',
    answer:
      'Da, logica de domiciliu a copilului merge în aceeași direcție practică cu cea a părinților care locuiesc în Germania.',
  },
  {
    question: 'Copilul trebuie să fie prezent la consulat?',
    answer:
      'Da, pentru partea biometrică și de identificare.',
  },
  {
    question: 'Pot face pașaportul copilului și altă cerere în aceeași zi?',
    answer:
      'Este posibil doar dacă logistica și programările permit, pentru că rămân cereri distincte.',
  },
]

const howToSteps = [
  {
    name: 'Verifici că transcrierea e finalizată',
    text: 'Fără acest pas, nu are rost să pornești cererea de pașaport.',
  },
  {
    name: 'Clarifici acordul părinților',
    text: 'Asta este una dintre diferențele importante față de pașaportul unui adult.',
  },
  {
    name: 'Creezi cererea pe contul unui părinte',
    text: 'Cererea copilului nu pornește dintr-un cont separat al copilului.',
  },
  {
    name: 'Mergi cu copilul și documentele la consulat',
    text: 'Prezența copilului și documentele părinților sunt esențiale la depunere.',
  },
  {
    name: 'Ridici pașaportul după emitere',
    text: 'Planifici și ridicarea, chiar dacă logica ei este mai simplă decât la CEI.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/primul-pasaport-copil-germania#article',
  headline: 'Primul pașaport copil născut în Germania — după transcriere 2026',
  description:
    'Ghid pentru primul pașaport al copilului născut în Germania după transcriere: acordul părinților, prezența copilului și pașii practici.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/primul-pasaport-copil-germania',
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
      name: 'Acte copil născut în Germania',
      item: 'https://actero.ro/acte-copil-nascut-in-germania',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Primul pașaport copil Germania',
      item: 'https://actero.ro/primul-pasaport-copil-germania',
    },
  ],
}

const sections = [
  {
    id: 'blocaj-transcriere',
    title: 'Înainte de orice — transcrierea trebuie finalizată',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
          <p className="mb-1 font-semibold text-orange-900">Fără transcriere, nu pornește nimic</p>
          <p className="text-sm text-orange-800">
            Acesta este cel mai frecvent blocaj al părinților: încearcă să sară direct la pașaport înainte ca transcrierea să fie cu adevărat închisă.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-3">
            <p className="mb-1 text-sm font-semibold text-gray-800">Transcrierea e gata</p>
            <p className="text-sm text-gray-600">
              Atunci poți trece la primul pașaport al copilului.
            </p>
          </div>
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
            <p className="mb-1 text-sm font-semibold text-blue-900">Transcrierea nu e gata</p>
            <p className="mb-1 text-sm text-blue-800">
              Atunci de acolo trebuie să începi.
            </p>
            <Link
              href="/transcriere-certificat-nastere-germania"
              className="text-xs font-medium text-blue-700 underline hover:text-blue-900"
            >
              Ghid transcriere naștere →
            </Link>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'acordul-parintilor',
    title: 'Acordul ambilor părinți — situații și soluții',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Față de alte fluxuri, aici acordul părinților este una dintre piesele care trebuie clarificate din timp, nu lăsate pentru ziua programării.
        </p>

        <div className="space-y-2">
          {[
            {
              situatie: 'Ambii părinți pot veni',
              solutie: 'Este scenariul cel mai simplu: vin împreună și semnează împreună.',
              icon: '✅',
              color: 'border-green-200 bg-green-50',
              textColor: 'text-green-800',
            },
            {
              situatie: 'Un părinte nu poate veni',
              solutie: 'Trebuie clarificat dinainte cum își exprimă acordul în formă valabilă.',
              icon: '⚠️',
              color: 'border-amber-100 bg-amber-50',
              textColor: 'text-amber-800',
            },
            {
              situatie: 'Situația juridică a autorității părintești este complicată',
              solutie: 'Aici nu mai mergi pe presupuneri și ai nevoie de clarificare juridică serioasă înainte de dosar.',
              icon: '❗',
              color: 'border-red-100 bg-red-50',
              textColor: 'text-red-800',
            },
          ].map(({ situatie, solutie, icon, color, textColor }) => (
            <div key={situatie} className={`rounded-xl border p-4 ${color}`}>
              <p className={`mb-1 text-sm font-semibold ${textColor}`}>
                {icon} {situatie}
              </p>
              <p className={`text-sm ${textColor}`}>{solutie}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'documente',
    title: 'Documentele necesare la consulat',
    content: (
      <div className="space-y-3">
        <div className="space-y-2">
          {[
            {
              req: true,
              doc: 'Certificatul de naștere românesc transcris al copilului',
              detaliu: 'Documentul care confirmă că etapa anterioară este închisă.',
            },
            {
              req: true,
              doc: 'Actele de identitate ale părinților',
              detaliu: 'Părinții trebuie să poată susține corect identitatea și acordul.',
            },
            {
              req: true,
              doc: 'Document de domiciliu al copilului în Germania',
              detaliu: 'Ajută la susținerea logicii de domiciliu pentru pașaportul copilului.',
            },
            {
              req: false,
              label: 'dacă un părinte lipsește',
              doc: 'Documentul care suplinește prezența părintelui absent',
              detaliu: 'Trebuie pregătit din timp, nu lăsat pe ultima zi.',
            },
            {
              req: false,
              label: 'după caz',
              doc: 'Certificat de căsătorie românesc',
              detaliu: 'În funcție de situația părinților și de structura dosarului.',
            },
          ].map(({ req, doc, detaliu, label }) => (
            <div key={doc} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-3">
              <span className="flex-shrink-0 text-base">{req ? '✅' : '⚪'}</span>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {doc}
                  {label ? <span className="ml-2 text-xs font-normal text-gray-500">— {label}</span> : null}
                </p>
                <p className="mt-0.5 text-xs text-gray-600">{detaliu}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-1 rounded-lg border border-blue-100 bg-blue-50 p-3">
          <p className="text-xs font-semibold text-blue-800">Fotografii proprii nu sunt necesare</p>
          <p className="text-xs text-blue-700">
            Imaginea se preia la ghișeu, iar copilul trebuie să fie prezent fizic.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'econsulat-selectie',
    title: 'Ce selectezi pe econsulat.ro',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-green-200 bg-green-50 p-4">
          <p className="mb-1 font-semibold text-green-900">Cererea pornește din contul unui părinte</p>
          <p className="text-sm text-green-800">
            Asta este o diferență practică pe care mulți o descoperă prea târziu: copilul nu are cont separat, ci cererea lui se depune din contul părintelui.
          </p>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            În momentul selecției trebuie să fii atent la logica de domiciliu a copilului, nu să pornești din intuiția pentru un adult cu pașaport obișnuit.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'plata-ridicare',
    title: 'Plata și ridicarea — per consulat',
    content: (
      <div className="space-y-2">
        {[
          { oras: 'Bonn', plata: 'Regulă locală de plată', ridicare: 'La ghișeu', posta: 'Nu' },
          { oras: 'München', plata: 'Regulă locală de plată', ridicare: 'La ghișeu sau cu opțiuni locale', posta: 'Poate exista' },
          { oras: 'Stuttgart', plata: 'Regulă locală de plată', ridicare: 'La ghișeu sau cu opțiuni locale', posta: 'Poate exista' },
          { oras: 'Berlin', plata: 'Regulă locală de plată', ridicare: 'La ghișeu', posta: 'Nu' },
        ].map(({ oras, plata, ridicare, posta }) => (
          <div key={oras} className="rounded-lg border border-gray-200 bg-white p-3">
            <p className="mb-1 text-sm font-semibold text-gray-900">{oras}</p>
            <div className="grid grid-cols-3 gap-1 text-xs">
              <div>
                <p className="text-gray-500">💳 Plată</p>
                <p className="text-gray-800">{plata}</p>
              </div>
              <div>
                <p className="text-gray-500">🕐 Ridicare</p>
                <p className="text-gray-800">{ridicare}</p>
              </div>
              <div>
                <p className="text-gray-500">✉️ Poștă</p>
                <p className="text-gray-800">{posta}</p>
              </div>
            </div>
          </div>
        ))}
        <p className="text-xs text-gray-500">
          Ridicarea este mai simplă logistic decât la CEI, dar tot trebuie planificată din timp.
        </p>
      </div>
    ),
  },
  {
    id: 'greseli',
    title: 'Greșeli frecvente',
    content: (
      <div className="space-y-2">
        {[
          {
            gresit: 'Merg la consulat fără să fi terminat transcrierea',
            corect: 'Transcrierea este pasul obligatoriu dinainte.',
          },
          {
            gresit: 'Vin doar cu un părinte fără să pregătesc dinainte partea de acord',
            corect: 'Asta trebuie clarificată înainte de programare, nu în fața ghișeului.',
          },
          {
            gresit: 'Aduc fotografii biometrice ale copilului',
            corect: 'Nu ai nevoie de ele; imaginea se preia la ghișeu.',
          },
          {
            gresit: 'Mă uit la pașaportul copilului ca la un flux complet separat de logica CRDS',
            corect: 'Domiciliul copilului contează și aici în mod practic.',
          },
          {
            gresit: 'Cred că și ridicarea cere aceeași prezență a copilului',
            corect: 'Trebuie planificată separat, dar logica ei este diferită de depunere.',
          },
        ].map(({ gresit, corect }, index) => (
          <div key={index} className="rounded-lg border border-red-100 bg-red-50 p-3">
            <p className="mb-0.5 text-xs font-semibold text-red-700">❌ {gresit}</p>
            <p className="text-xs text-gray-700">✅ {corect}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'alte-situatii',
    title: 'Pagini conexe',
    content: (
      <div className="space-y-2">
        {[
          {
            text: 'Transcrierea certificatului de naștere — pasul anterior obligatoriu',
            href: '/transcriere-certificat-nastere-germania',
            label: 'Ghid transcriere naștere →',
          },
          {
            text: 'Primul buletin CEI al copilului',
            href: '/primul-buletin-copil-nascut-in-germania',
            label: 'Ghid primul buletin copil →',
          },
          {
            text: 'Traseul complet pentru copilul fără acte românești',
            href: '/acte-copil-nascut-in-germania',
            label: 'Ghid acte copil →',
          },
        ].map(({ text, href, label }) => (
          <div
            key={href}
            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3"
          >
            <p className="text-sm text-gray-700">{text}</p>
            <Link
              href={href}
              className="ml-3 flex-shrink-0 text-xs font-medium text-blue-600 underline hover:text-blue-800"
            >
              {label}
            </Link>
          </div>
        ))}
      </div>
    ),
  },
]

export default function PrimulPasaportCopilGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="primul-pasaport-copil-germania"
      lpTopic="copil"
      h1="Primul pașaport al copilului născut în Germania — după transcriere"
      intro="După transcriere, primul pașaport al copilului devine traseul natural pentru mulți părinți. Față de primul buletin, aici rămâi pe logică de consulat și econsulat, dar trebuie să fii atent la două lucruri: transcrierea chiar finalizată și acordul părinților."
      tldr="Fără transcriere finalizată nu poți porni cererea. Copilul trebuie să fie prezent la depunere, fotografiile nu se aduc, iar acordul părinților trebuie clarificat din timp. Este un traseu diferit de primul buletin, dar la fel de sensibil la pașii făcuți în ordine greșită."
      ctaHref="/transcriere-certificat-nastere-germania"
      ctaLabel="Verifică mai întâi dacă transcrierea este într-adevăr închisă →"
      updatedAt="aprilie 2026"
      sourceNote="MAE, econsulat.ro, consulatele României din Germania"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi dacă e momentul pentru pașaport sau trebuie să revii la transcriere?"
      finalCtaText="Dacă transcrierea nu este finalizată, întoarce-te pe ghidul de transcriere. Dacă este închisă, paginile conexe te ajută să alegi între pașaport și primul buletin."
    />
  )
}
