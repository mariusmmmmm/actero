import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Acte românești copil născut în Germania — de unde începi | ActeRO',
  description:
    'Copilul s-a născut în Germania și nu are acte românești? Transcrierea nașterii vine prima — abia după poți obține pașaport sau buletin. Ordinea corectă pas cu pas.',
  keywords: [
    'acte copil nascut in germania',
    'certificat nastere romanesc copil germania',
    'primul pasaport copil germania',
    'transcriere nastere germania',
    'cetatenie romana copil nascut germania',
    'copil dubla cetatenie germania romania',
    'primul buletin copil nascut germania',
    'pasaport minor nascut in germania',
    'acte romanesti copil nascut in strainatate',
    'formule a geburtsurkunde romania',
  ],
  openGraph: {
    title: 'Acte românești copil născut în Germania — de unde începi',
    description:
      'Transcrierea nașterii vine prima. Fără ea nu poți obține pașaport sau buletin românesc. Ordinea corectă și ce document alegi.',
    url: 'https://actero.ro/acte-copil-nascut-in-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/acte-copil-nascut-in-germania',
  },
}

const faqItems = [
  {
    question: 'Copilul meu s-a născut în Germania. Are automat cetățenie română?',
    answer:
      'Da, dacă cel puțin unul dintre părinți este cetățean român, copilul dobândește cetățenia română prin naștere. Dar pentru a putea obține documente românești, nașterea trebuie înregistrată și în evidențele statului român prin transcriere.',
  },
  {
    question: 'Ce este transcrierea certificatului de naștere și de ce este obligatorie?',
    answer:
      'Transcrierea înseamnă înregistrarea nașterii copilului în Registrul de Stare Civilă român. Fără ea, copilul nu apare în bazele de date românești și nu i se poate emite niciun document românesc.',
  },
  {
    question: 'Cât costă transcrierea la consulat?',
    answer: 'Transcrierea este gratuită la toate cele 4 consulate românești din Germania.',
  },
  {
    question: 'Cât durează transcrierea nașterii?',
    answer:
      'Depinde de consulat. München poate rezolva cazuri simple în aceeași zi. Bonn procesează în 7–30 de zile. Stuttgart și Berlin nu publică termene oficiale.',
  },
  {
    question: 'Ce document german al copilului aduc la consulat?',
    answer:
      'Ai două opțiuni: extrasul multilingv Formule A sau Geburtsurkunde-ul standard. Formule A este varianta recomandată, pentru că în general nu necesită apostilă sau traducere. Geburtsurkunde necesită apostilă și traducere autorizată în română.',
  },
  {
    question: 'Pot face pașaportul copilului înainte de transcriere?',
    answer:
      'Nu. Pașaportul sau buletinul se poate solicita doar după ce transcrierea este finalizată și copilul apare în bazele de date românești.',
  },
  {
    question: 'Care e diferența dintre varianta pentru pașaport și varianta pentru buletin?',
    answer:
      'Varianta pentru pașaport înseamnă transcrierea nașterii și apoi primul pașaport. Varianta pentru buletin înseamnă transcrierea nașterii și apoi primul buletin. Ambele pornesc obligatoriu de la transcriere.',
  },
  {
    question: 'Trebuie să aduc certificatele de naștere românești ale părinților?',
    answer:
      'Depinde de consulat. La Berlin sunt obligatorii fără excepție. La München sunt obligatorii dacă ambii părinți sunt cetățeni români. La Stuttgart sunt necesare doar dacă părinții nu sunt căsătoriți. La Bonn sunt necesare dacă actele părinților nu conțin locul nașterii.',
  },
]

const howToSteps = [
  {
    name: 'Pasul 1 — Transcrierea certificatului de naștere',
    text: 'Înregistrezi nașterea copilului în evidențele române la consulat. Fără acest pas, niciun alt document românesc nu este posibil.',
  },
  {
    name: 'Alege documentul german potrivit',
    text: 'Formule A este de obicei varianta recomandată. Geburtsurkunde este varianta alternativă, dar presupune apostilă și traducere.',
  },
  {
    name: 'Ridică certificatul de naștere transcris',
    text: 'După acest moment copilul apare în sistemele românești și poți continua cu pașaportul sau buletinul.',
  },
  {
    name: 'Varianta pașaport — primul pașaport',
    text: 'După transcriere, poți continua cu cererea de pașaport prin consulat și econsulat.ro.',
  },
  {
    name: 'Varianta buletin — primul buletin',
    text: 'După transcriere, poți continua în România la SPCLEP pentru primul buletin al copilului.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/acte-copil-nascut-in-germania#article',
  headline: 'Acte românești copil născut în Germania — de unde începi',
  description:
    'Ghidul principal pentru actele românești ale copilului născut în Germania: transcrierea nașterii, primul pașaport și primul buletin.',
  datePublished: '2026-04-01',
  dateModified: '2026-04-01',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/acte-copil-nascut-in-germania',
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
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Acte copil născut în Germania',
      item: 'https://actero.ro/acte-copil-nascut-in-germania',
    },
  ],
}

const sections = [
  {
    id: 'blocaj',
    title: 'De ce nu poți porni direct la pașaport sau buletin',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Blocajul cel mai frecvent pentru părinții din diaspora este acesta: încearcă să facă direct pașaportul copilului și află că nu se poate. Nu pentru că documentele sunt greșite, ci pentru că lipsește pasul obligatoriu de la început.
        </p>

        <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
          <p className="mb-2 font-semibold text-orange-900">
            Fără transcriere, niciun document românesc nu este posibil
          </p>
          <p className="text-sm text-orange-800">
            Un copil născut în Germania nu apare în bazele de date românești până când nașterea nu este transcrisă în Registrul de Stare Civilă din România.
          </p>
        </div>

        <div className="rounded-xl border border-green-200 bg-green-50 p-4">
          <p className="mb-2 font-semibold text-green-900">Vestea bună</p>
          <ul className="space-y-1 text-sm text-green-800">
            <li>transcrierea se face la consulatul din Germania</li>
            <li>este gratuită</li>
            <li>după transcriere, copilul poate obține documente românești</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'rute',
    title: 'După transcriere: pașaport sau buletin',
    content: (
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          Ambele variante pornesc din același punct: transcrierea nașterii. Ce diferă este documentul final pe care vrei să îl obții.
        </p>

        <div className="flex flex-col items-center gap-2">
          <div className="w-full max-w-md rounded-xl border-2 border-blue-300 bg-blue-50 p-4 text-center">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
              Pasul 1 — obligatoriu
            </p>
            <p className="text-lg font-bold text-blue-900">Transcriere certificat de naștere</p>
            <p className="mt-1 text-xs text-blue-700">La consulat · Gratuită · termen variabil per consulat</p>
          </div>

          <div className="flex w-full max-w-md justify-around items-start pt-1">
            <div className="flex w-5/12 flex-col items-center gap-1">
              <div className="h-6 w-0.5 bg-blue-300" />
              <div className="w-full rounded-xl border-2 border-green-300 bg-green-50 p-3 text-center">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-green-700">Varianta pașaport</p>
                <p className="font-bold text-green-900">Primul pașaport</p>
                <p className="mt-1 text-xs text-green-700">Consulat · econsulat.ro</p>
                <Link
                  href="/primul-pasaport-copil-germania"
                  className="mt-2 inline-block text-xs text-green-700 underline hover:text-green-900"
                >
                  Ghid primul pașaport →
                </Link>
              </div>
            </div>

            <div className="flex w-5/12 flex-col items-center gap-1">
              <div className="h-6 w-0.5 bg-blue-300" />
              <div className="w-full rounded-xl border-2 border-purple-300 bg-purple-50 p-3 text-center">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-purple-700">Varianta buletin</p>
                <p className="font-bold text-purple-900">Primul buletin</p>
                <p className="mt-1 text-xs text-purple-700">SPCLEP România · CEI</p>
                <Link
                  href="/primul-buletin-copil-nascut-in-germania"
                  className="mt-2 inline-block text-xs text-purple-700 underline hover:text-purple-900"
                >
                  Ghid primul buletin →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'transcriere',
    title: 'Ce document german aduci pentru transcriere',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Documentul german principal al copilului poate fi în două forme. Alegerea influențează dacă ai nevoie de apostilă și traducere sau nu.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-1 font-semibold text-green-900">Formule A — recomandat</p>
            <p className="mb-2 text-xs text-green-700">Extras multilingv de naștere</p>
            <ul className="space-y-1 text-sm text-green-800">
              <li>fără apostilă</li>
              <li>fără traducere autorizată</li>
              <li>mai rapid și mai ieftin</li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 font-semibold text-gray-900">Geburtsurkunde — alternativă</p>
            <p className="mb-2 text-xs text-gray-600">Certificat standard de naștere german</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>necesită apostilă Haga</li>
              <li>necesită traducere autorizată</li>
              <li>este mai lent și mai scump</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
          <p className="text-sm text-blue-800">
            Pentru traseul exact și diferențele per consulat, vezi mai întâi{' '}
            <Link
              href="/transcriere-certificat-nastere-germania"
              className="font-medium underline hover:text-blue-900"
            >
              ghidul complet de transcriere
            </Link>{' '}
            și apoi continui spre ruta potrivită.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'consulate-transcriere',
    title: 'Termene și ridicare după transcriere',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600">
          Termenele diferă mult per consulat. Dacă ai nevoie repede de pașaport sau buletin, planifică de aici întreaga durată.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            {
              oras: 'Bonn',
              termen: '7–30 zile',
              ridicare: 'Luni–Joi 14:00–15:00',
              posta: 'Nu',
            },
            {
              oras: 'München',
              termen: 'Cazuri simple: aceeași zi',
              ridicare: 'L/Mi/J 11:00–14:00 · Ma 15:00–18:00',
              posta: 'Nu',
            },
            {
              oras: 'Stuttgart',
              termen: 'Nepublicat',
              ridicare: 'Luni–Vineri 14:00–15:00',
              posta: 'Da, cu plic DIN C5',
            },
            {
              oras: 'Berlin',
              termen: 'Nepublicat',
              ridicare: 'Luni–Vineri 13:00–14:00',
              posta: 'Nu',
            },
          ].map(({ oras, termen, ridicare, posta }) => (
            <div key={oras} className="rounded-lg border border-gray-200 bg-white p-3">
              <p className="mb-1 font-semibold text-gray-900">{oras}</p>
              <p className="text-xs text-gray-700">⏱ Termen: {termen}</p>
              <p className="text-xs text-gray-700">🕐 Ridicare: {ridicare}</p>
              <p className="text-xs text-gray-500">✉️ Poștă: {posta}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'dupa-transcriere',
    title: 'Ce faci după ce ai certificatul transcris',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-2 font-semibold text-green-900">Vrei pașaport</p>
            <ol className="list-inside list-decimal space-y-1 text-sm text-green-800">
              <li>mergi pe econsulat.ro</li>
              <li>cerere de pașaport</li>
              <li>programare la consulat</li>
              <li>depunere și așteptare termen</li>
            </ol>
            <Link
              href="/primul-pasaport-copil-germania"
              className="mt-3 inline-block text-xs font-medium text-green-700 underline hover:text-green-900"
            >
              Ghid primul pașaport copil →
            </Link>
          </div>

          <div className="rounded-xl border border-purple-200 bg-purple-50 p-4">
            <p className="mb-2 font-semibold text-purple-900">Vrei buletin</p>
            <ol className="list-inside list-decimal space-y-1 text-sm text-purple-800">
              <li>planifici deplasarea în România</li>
              <li>mergi la SPCLEP</li>
              <li>biometric la ghișeu</li>
              <li>ridici documentul</li>
            </ol>
            <Link
              href="/buletin-romania-germania"
              className="mt-3 inline-block text-xs font-medium text-purple-700 underline hover:text-purple-900"
            >
              Ghid complet buletin →
            </Link>
          </div>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Durata totală reală este: transcriere plus documentul final. De aceea, transcrierea trebuie pornită cât mai devreme.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'greseli',
    title: 'Greșeli frecvente ale părinților',
    content: (
      <div className="space-y-2">
        {[
          {
            gresit: 'Merg direct la consulat pentru pașaport fără transcriere',
            corect:
              'Fără certificat de naștere transcris în registrele românești, pașaportul nu se poate emite.',
          },
          {
            gresit: 'Aduc Geburtsurkunde și află târziu că trebuie apostilă',
            corect:
              'Formule A este de obicei varianta mai simplă. Geburtsurkunde presupune pași suplimentari.',
          },
          {
            gresit: 'Nu știu că la Berlin pot exista cerințe suplimentare dacă în acte apare și numele tatălui',
            corect:
              'La Berlin există excepții importante, de aceea merită verificat traseul exact înainte de depunere.',
          },
          {
            gresit: 'Cred că după transcriere primesc separat un document pentru CNP',
            corect:
              'CNP-ul apare în evidențele românești după transcriere. Nu există un document separat doar pentru asta.',
          },
          {
            gresit: 'Nu știu că după transcriere pot alege între pașaport și buletin',
            corect:
              'După transcriere poți continua cu pașaportul, cu buletinul sau ulterior cu ambele, în funcție de nevoie.',
          },
        ].map(({ gresit, corect }, i) => (
          <div key={i} className="rounded-lg border border-red-100 bg-red-50 p-3">
            <p className="mb-0.5 text-xs font-semibold text-red-700">❌ {gresit}</p>
            <p className="text-xs text-gray-700">✅ {corect}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'wizard',
    title: 'Când folosești ghidul rapid ActeRO',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Dacă nu știi ce document german să obții pentru copil, ce cerințe are consulatul tău sau dacă vrei să continui ulterior cu pașaport sau buletin, ghidul rapid îți ordonează traseul complet.
        </p>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-2">
          <p className="text-sm font-medium text-gray-800">Ghidul rapid te ajută să afli:</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>ce document german este mai potrivit</li>
            <li>ce acte ale părinților sunt necesare</li>
            <li>ce urmează după transcriere</li>
            <li>lista completă de documente pentru fiecare pas</li>
          </ul>
        </div>
      </div>
    ),
  },
]

export default function ActeCopilNascutInGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="acte-copil-nascut-in-germania"
      lpTopic="copil"
      h1="Copilul s-a născut în Germania și nu are acte românești — de unde începi"
      intro="Dacă cel puțin unul dintre părinți este cetățean român, copilul are dreptul la cetățenie română. Dar pentru a obține documente românești există un pas obligatoriu pe care mulți părinți îl sar: transcrierea certificatului de naștere german în evidențele române."
      tldr="Pasul 1 obligatoriu: transcrierea nașterii la consulat. După aceea poți merge fie spre primul pașaport, fie spre primul buletin. Formule A este în general varianta recomandată pentru documentul german de pornire."
      ctaHref="/transcriere-certificat-nastere-germania"
      ctaLabel="Începe cu ghidul complet de transcriere →"
      updatedAt="aprilie 2026"
      sourceNote="MAE, consulatele României din Germania — date verificate live per consulat"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi dacă blocajul tău este transcrierea sau alegerea dintre pașaport și buletin?"
      finalCtaText="Pornește din transcriere, apoi sari direct pe primul pașaport sau primul buletin al copilului, în funcție de ce vrei să rezolvi după aceea."
    />
  )
}
