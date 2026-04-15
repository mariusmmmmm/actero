import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Pașaport CRDS vs pașaport cu domiciliu în România — Cum alegi | ActeRO',
  description:
    'CRDS sau pașaport standard? Criteriul unic este domiciliul oficial. Ghid comparativ 2026.',
  keywords: [
    'pasaport crds vs pasaport cu domiciliu romania',
    'crds vs pasaport simplu electronic',
    'pasaport domiciliu germania vs romania',
    'ce inseamna crds pasaport econsulat',
    'diferenta crds pasaport standard',
    'pasaport simplu electronic vs crds',
    'econsulat selectie gresita pasaport',
    'cum stiu daca fac crds sau standard',
    'ci anulata pasaport crds',
    'fotografii pasaport crds vs standard',
  ],
  openGraph: {
    title: 'Pașaport CRDS vs pașaport cu domiciliu în România — Cum alegi',
    description:
      'Criteriul unic: domiciliul oficial. Fotografii, CI, selecție econsulat.ro și diferențele practice care contează.',
    url: 'https://www.actero.ro/pasaport-crds-vs-pasaport-cu-domiciliu-romania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/pasaport-crds-vs-pasaport-cu-domiciliu-romania',
  },
}

const faqItems = [
  {
    question: 'Cum știu dacă trebuie CRDS sau pașaport standard?',
    answer:
      'Întrebarea care decide totul este unde ai domiciliul oficial, nu de cât timp locuiești efectiv în Germania.',
  },
  {
    question: 'Am locuit mulți ani în Germania, dar am domiciliu activ în România. CRDS sau standard?',
    answer:
      'Durata șederii în Germania nu decide singură nimic. Dacă domiciliul oficial rămâne în România, nu intri automat pe CRDS.',
  },
  {
    question: 'Ce se întâmplă dacă selectez CRDS din greșeală când am domiciliu în România?',
    answer:
      'În practică, dosarul nu mai corespunde tipului de cerere și ajungi să refaci pașii, uneori chiar de la zero.',
  },
  {
    question: 'La CRDS trebuie fotografii proprii?',
    answer:
      'Nu, aceasta este una dintre diferențele practice importante dintre cele două fluxuri.',
  },
  {
    question: 'La pașaportul standard trebuie fotografii?',
    answer:
      'De cele mai multe ori da, cu nuanțe pe consulat. Tocmai de aceea este bine să nu amesteci fluxurile.',
  },
  {
    question: 'Cartea de identitate se anulează la ambele tipuri de pașaport?',
    answer:
      'Nu. Aici apare o diferență practică importantă între CRDS și varianta cu domiciliu în România.',
  },
  {
    question: 'Costul și termenul diferă între CRDS și standard?',
    answer:
      'Nu semnificativ din perspectiva tipului de pașaport. Diferențele importante sunt în documente și în consecințele administrative.',
  },
  {
    question: 'Pot trece de la standard la CRDS sau invers?',
    answer:
      'Da, dacă ți se schimbă situația de domiciliu oficial. Fluxul urmează statutul actual, nu istoricul.',
  },
]

const howToSteps = [
  {
    name: 'Răspunzi la întrebarea corectă',
    text: 'Nu te întrebi de cât timp stai în Germania, ci unde ai domiciliul oficial în acest moment.',
  },
  {
    name: 'Selectezi varianta corectă pe econsulat.ro',
    text: 'Alegerea greșită te poate întoarce înapoi cu tot cu documente și programare.',
  },
  {
    name: 'Pregătești documentele potrivite fluxului tău',
    text: 'Diferențele practice apar la fotografii, documentul de domiciliu și statutul cărții de identitate.',
  },
  {
    name: 'Te prezinți la consulat cu dosarul potrivit',
    text: 'Costul și termenul seamănă, dar logica administrativă diferă între cele două fluxuri.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/pasaport-crds-vs-pasaport-cu-domiciliu-romania#article',
  headline: 'Pașaport CRDS vs pașaport cu domiciliu în România — Cum alegi 2026',
  description:
    'Comparație între pașaportul CRDS și pașaportul cu domiciliu în România: criteriul de calificare, fotografii, CI și selecția corectă pe econsulat.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/pasaport-crds-vs-pasaport-cu-domiciliu-romania',
  inLanguage: 'ro',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://www.actero.ro' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Pașaport România Germania',
      item: 'https://www.actero.ro/pasaport-romania-germania',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'CRDS vs domiciliu România',
      item: 'https://www.actero.ro/pasaport-crds-vs-pasaport-cu-domiciliu-romania',
    },
  ],
}

const sections = [
  {
    id: 'criteriu-unic',
    title: 'Criteriul unic — un singur lucru contează',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">Există o singură întrebare care decide totul:</p>

        <div className="rounded-xl border-2 border-blue-300 bg-blue-50 p-5 text-center">
          <p className="mb-3 text-lg font-black text-blue-900">
            Ai carte de identitate valabilă cu adresă din România?
          </p>
          <div className="grid gap-3 text-left sm:grid-cols-2">
            <div className="rounded-lg bg-green-100 p-3">
              <p className="mb-1 font-semibold text-green-800">Da</p>
              <p className="text-sm text-green-800">
                Mergi pe pașaportul simplu electronic standard, fără CRDS.
              </p>
            </div>
            <div className="rounded-lg bg-blue-100 p-3">
              <p className="mb-1 font-semibold text-blue-800">Nu</p>
              <p className="text-sm text-blue-800">
                Intri pe fluxul CRDS, pentru că nu mai ai domiciliu activ în România.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Dacă ai un caz neclar sau o carte de identitate expirată și nu știi ce statut mai are domiciliul tău, ghidul rapid este cea mai sigură cale să nu alegi varianta greșită.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'tabel-comparativ',
    title: 'Diferențele practice — tabel complet',
    content: (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Aspect</th>
              <th className="border border-gray-200 p-2 text-left font-semibold text-blue-700">CRDS</th>
              <th className="border border-gray-200 p-2 text-left font-semibold text-green-700">Standard</th>
            </tr>
          </thead>
          <tbody>
            {[
              { aspect: 'Criteriu de calificare', crds: 'Fără domiciliu activ în România', std: 'Domiciliu oficial în România', highlight: true },
              { aspect: 'Selectarea pe econsulat', crds: 'Fluxul CRDS', std: 'Fluxul standard', highlight: false },
              { aspect: 'Document de domiciliu german', crds: 'Relevant', std: 'Nu este criteriul principal', highlight: false },
              { aspect: 'Fotografii proprii', crds: 'Nu', std: 'În multe situații da', highlight: true },
              { aspect: 'Cartea de identitate românească', crds: 'Situația ei se schimbă practic', std: 'Rămâne în logica domiciliului din România', highlight: true },
              { aspect: 'Taxă și termen', crds: 'Comparabile', std: 'Comparabile', highlight: false },
            ].map(({ aspect, crds, std, highlight }, index) => (
              <tr key={aspect} className={highlight ? 'bg-yellow-50' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-200 p-2 text-xs font-medium text-gray-800">{aspect}</td>
                <td className="border border-gray-200 p-2 text-xs text-blue-700">{crds}</td>
                <td className="border border-gray-200 p-2 text-xs text-green-700">{std}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-1 text-xs text-gray-400">Rândurile galbene sunt diferențele practice care contează cel mai des.</p>
      </div>
    ),
  },
  {
    id: 'selectie-gresita',
    title: 'Ce se întâmplă dacă selectezi greșit pe econsulat.ro',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="mb-2 font-semibold text-red-900">Selectezi CRDS când nu ești CRDS</p>
            <ul className="space-y-1 text-sm text-red-800">
              <li>Dosarul nu mai corespunde realității tale</li>
              <li>Poți pierde timp cu validări greșite</li>
              <li>Ajungi să refaci cererea</li>
            </ul>
          </div>

          <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
            <p className="mb-2 font-semibold text-orange-900">Selectezi standard când ești CRDS</p>
            <ul className="space-y-1 text-sm text-orange-800">
              <li>Documentele cerute nu se mai pupă cu fluxul ales</li>
              <li>Poți ajunge blocat la validare sau la ghișeu</li>
              <li>Refaci cererea pe varianta corectă</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
          <p className="text-sm text-blue-800">
            Dacă ai selectat greșit, soluția practică este să revii, să alegi corect fluxul și să nu forțezi un dosar care nu corespunde situației tale.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'fotografii-detaliat',
    title: 'Fotografiile — diferența practică pe care mulți o descoperă târziu',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Aici apar cele mai multe confuzii practice: oamenii vin cu poze când nu trebuie sau nu le aduc când fluxul lor chiar le cere.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="mb-2 font-semibold text-blue-900">CRDS — nu aduci fotografii proprii</p>
            <p className="text-sm text-blue-800">
              Imaginea se preia biometric la ghișeu. Din punct de vedere practic, asta e una dintre cele mai simple diferențe față de fluxul standard.
            </p>
          </div>

          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-2 font-semibold text-green-900">Standard — verifici regula consulatului</p>
            <p className="text-sm text-green-800">
              În fluxul standard apar mai multe nuanțe pe consulat, inclusiv situații în care trebuie să vii pregătit cu fotografii.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'ci-anulata',
    title: 'CI românească — anulată la CRDS, păstrată la standard',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
            <p className="mb-1 font-semibold text-blue-900">CRDS</p>
            <p className="text-sm text-blue-800">
              Dacă intri pe logica de domiciliu în Germania, relația cu cartea de identitate românească se schimbă și trebuie înțeleasă corect înainte de depunere.
            </p>
          </div>

          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-1 font-semibold text-green-900">Standard</p>
            <p className="text-sm text-green-800">
              Dacă domiciliul rămâne în România, logica păstrării cărții de identitate este diferită și mult mai intuitivă.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'ghiduri',
    title: 'Ghidul specific pentru situația ta',
    content: (
      <div className="space-y-2">
        {[
          {
            text: 'Sunt CRDS — pașaport expirat, deteriorat sau primul pașaport',
            href: '/pasaport-crds-germania',
            label: 'Ghid CRDS →',
          },
          {
            text: 'Nu știu încă exact dacă sunt CRDS sau standard',
            href: '/pasaport-romania-germania',
            label: 'Ghid complet pașaport →',
          },
          {
            text: 'Vreau să verific rapid prin ghidul rapid',
            href: '/wizard?problem=pasaport',
            label: 'Verifică în ghidul rapid →',
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

export default function PasaportCrdsVsDomiciliuRomaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="pasaport-crds-vs-pasaport-cu-domiciliu-romania"
      lpTopic="pasaport"
      h1="Pașaport CRDS vs pașaport cu domiciliu în România — cum alegi corect"
      intro="Pe econsulat apar două opțiuni care par apropiate, dar în spate ascund două logici administrative complet diferite. Dacă pornești de la întrebarea greșită, riști să alegi greșit și să pierzi timp inutil."
      tldr="Criteriul real nu este de cât timp locuiești în Germania, ci unde ai domiciliul oficial. De aici derivă tot: ce alegi pe econsulat, dacă aduci fotografii și cum stă treaba cu cartea ta de identitate românească."
      ctaHref="/wizard?problem=pasaport"
      ctaLabel="Confirmă în 30 de secunde dacă ești CRDS sau standard →"
      updatedAt="aprilie 2026"
      sourceNote="MAE, econsulat.ro, consulatele României din Germania"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu ești sigur ce tip de pașaport ți se aplică?"
      finalCtaText="ActeRO îți răspunde rapid și te trimite pe ghidul potrivit pentru situația ta concretă."
    />
  )
}
