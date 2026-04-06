import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Titlu de călătorie din Germania — fără programare, aceeași zi | ActeRO',
  description:
    'Pașaportul a expirat și ai un zbor în câteva zile? Titlul de călătorie se obține la consulat fără programare, gratuit, de obicei în aceeași zi. Află ce acte trebuie.',
  keywords: [
    'titlu de calatorie germania',
    'document de calatorie romania germania',
    'fara programare consulat romania germania',
    'titlu de calatorie urgent germania',
    'plec in romania fara pasaport',
    'pasaport expirat zbor romania',
    'consulat romania fara programare',
    'titlu de calatorie gratuit germania',
    'titlu calatorie aceeasi zi germania',
    'document urgenta consulat romania',
  ],
  openGraph: {
    title: 'Titlu de călătorie din Germania — fără programare, aceeași zi',
    description:
      'Pașaportul expirat și zbor în câteva zile? Titlul de călătorie e gratuit, fără programare, aceeași zi. Află exact ce aduci la consulat.',
    url: 'https://actero.ro/titlu-calatorie-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/titlu-calatorie-germania',
  },
}

const faqItems = [
  {
    question: 'Ce este titlul de călătorie și când îl folosesc?',
    answer:
      'Titlul de călătorie este un document de urgență eliberat de consulatul României, valabil exclusiv pentru revenirea în România. Îl folosești când pașaportul tău a expirat, a fost pierdut sau furat și nu mai ai timp să aștepți un nou pașaport.',
  },
  {
    question: 'Am nevoie de programare pentru titlul de călătorie?',
    answer:
      'Nu. Titlul de călătorie se obține fără programare pe econsulat.ro. Te prezinți direct la consulat în intervalul dedicat acestui serviciu.',
  },
  {
    question: 'Cât costă titlul de călătorie?',
    answer: 'Este gratuit la toate cele 4 consulate românești din Germania.',
  },
  {
    question: 'Se eliberează în aceeași zi?',
    answer:
      'Da. La toate cele 4 consulate titlul de călătorie se eliberează în aceeași zi, în intervalul dedicat acestui serviciu.',
  },
  {
    question: 'Pot folosi titlul de călătorie pentru alte țări în afară de România?',
    answer:
      'Nu. Este valabil exclusiv pentru revenirea în România. Nu este un document de identitate în UE și nu poate fi folosit pentru alte călătorii.',
  },
  {
    question: 'Ce se întâmplă cu titlul de călătorie după ce ajung în România?',
    answer:
      'Titlul de călătorie nu se predă la frontieră. Se predă la ghișeul SPCP când depui cererea pentru noul pașaport.',
  },
  {
    question: 'Am nevoie de fotografii?',
    answer:
      'Depinde de consulat. La Bonn și Berlin, imaginea se preia la ghișeu. La München trebuie să aduci 2 fotografii biometrice proprii. La Stuttgart, adulții și minorii peste 14 ani nu aduc fotografii, dar copiii sub 14 ani au nevoie de 1 fotografie.',
  },
  {
    question: 'Pașaportul meu a fost furat. Am nevoie de adeverința poliției?',
    answer:
      'Da. La toate consulatele adeverința poliției este obligatorie în caz de furt. Traducerea în română este necesară la München, Stuttgart și Berlin. La Bonn, adeverința este obligatorie dar traducerea nu se cere.',
  },
]

const howToSteps = [
  {
    name: 'Verifică intervalul titluri de călătorie al consulatului tău',
    text: 'Fiecare consulat are un interval fix fără programare. Prezentarea în afara lui nu este acceptată.',
  },
  {
    name: 'Pregătește documentele disponibile',
    text: 'Pașaportul expirat sau deteriorat, cartea de identitate dacă o ai, certificatul de naștere românesc și, dacă este cazul, adeverința poliției.',
  },
  {
    name: 'Verifică dacă trebuie fotografii',
    text: 'München cere 2 fotografii biometrice proprii. Bonn și Berlin nu. Stuttgart cere fotografie doar pentru minorii sub 14 ani.',
  },
  {
    name: 'Prezintă-te la consulat în intervalul dedicat',
    text: 'Nu ai nevoie de programare pe econsulat.ro. Titlul este gratuit și se eliberează în aceeași zi.',
  },
  {
    name: 'Când ajungi în România, predă titlul la SPCP',
    text: 'Titlul de călătorie nu se predă la frontieră. Se predă la SPCP când depui cererea pentru noul pașaport.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/titlu-calatorie-germania#article',
  headline: 'Titlu de călătorie din Germania — fără programare, aceeași zi',
  description:
    'Hub pentru titlul de călătorie din Germania: urgentă sub 3 zile, 1–2 săptămâni, fotografii și traduceri per consulat.',
  datePublished: '2026-04-01',
  dateModified: '2026-04-01',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/titlu-calatorie-germania',
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
      name: 'Titlu de călătorie Germania',
      item: 'https://actero.ro/titlu-calatorie-germania',
    },
  ],
}

const sections = [
  {
    id: 'context',
    title: 'Pașaport sau titlu de călătorie',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Titlul de călătorie nu este o alternativă la pașaport pe termen lung.{' '}
          <strong>Este o soluție de urgență pentru revenirea în România</strong> când nu mai ai timp să aștepți un pașaport nou.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-2 font-semibold text-green-900">Mergi pe titlu de călătorie dacă:</p>
            <ul className="space-y-1 text-sm text-green-800">
              <li>ai un zbor în mai puțin de 2 săptămâni</li>
              <li>nu există programări disponibile pe econsulat.ro</li>
              <li>pașaportul a fost pierdut sau furat și nu ai alt document</li>
              <li>vrei să ajungi rapid în România ca să îți faci pașaportul acolo</li>
            </ul>
          </div>

          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="mb-2 font-semibold text-blue-900">Continuă cu pașaportul dacă:</p>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>plecarea este la mai mult de 2–3 săptămâni distanță</li>
              <li>există programări disponibile pe econsulat.ro</li>
              <li>vrei un document valabil pe termen lung</li>
            </ul>
            <p className="mt-2 text-xs text-blue-700">
              <Link href="/pasaport-romania-germania" className="underline">
                Ghid pașaport →
              </Link>
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Important: titlul de călătorie este valabil <strong>exclusiv pentru revenirea în România</strong>.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'variante',
    title: 'Sub 3 zile sau 1–2 săptămâni',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="mb-1 font-semibold text-red-900">Urgență — sub 3 zile</p>
            <p className="mb-3 text-xs text-red-700">Zbor iminent, situație critică</p>
            <ul className="space-y-1 text-sm text-red-800">
              <li>fără programare</li>
              <li>gratuit</li>
              <li>aceeași zi</li>
              <li>prezentare directă în intervalul consulatului</li>
            </ul>
            <div className="mt-3">
              <Link
                href="/titlu-calatorie-urgenta-germania"
                className="text-sm font-medium text-red-700 underline hover:text-red-900"
              >
                Ghid urgență →
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="mb-1 font-semibold text-blue-900">Standard — 1–2 săptămâni</p>
            <p className="mb-3 text-xs text-blue-700">Ai puțin mai mult timp la dispoziție</p>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>fără programare</li>
              <li>gratuit</li>
              <li>aceeași zi</li>
              <li>același flux de documente</li>
            </ul>
            <div className="mt-3">
              <Link
                href="/wizard?problem=titlu-calatorie"
                className="text-sm font-medium text-blue-700 underline hover:text-blue-900"
              >
                Vezi traseul standard →
              </Link>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          Diferența practică dintre cele două variante este mică: același flux, aceleași documente, același rezultat.
        </p>
      </div>
    ),
  },
  {
    id: 'consulate',
    title: 'Intervalele pe consulate',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600">
          Te prezinți direct în interval, fără programare prealabilă pe econsulat.ro.
          <strong> Dacă ajungi în afara intervalului, nu te pot primi.</strong>
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            {
              oras: 'Bonn',
              interval: 'Luni–Vineri · 09:00–12:00',
              eliberare: 'Aceeași zi',
              foto: 'Fără fotografii proprii',
            },
            {
              oras: 'München',
              interval: 'Luni–Joi · 08:00–14:00\nVineri · 08:00–12:00',
              eliberare: 'Aceeași zi',
              foto: '2 fotografii biometrice proprii obligatorii',
            },
            {
              oras: 'Stuttgart',
              interval: 'Luni–Vineri · 10:00–14:00',
              eliberare: 'Aceeași zi',
              foto: 'Adulți și 14+: electronic\nMinori sub 14: 1 fotografie 3,5×4,5 cm',
            },
            {
              oras: 'Berlin',
              interval: 'Luni–Vineri · 08:00–10:00',
              eliberare: 'Preluare și eliberare în același interval',
              foto: 'Fără fotografii proprii',
            },
          ].map(({ oras, interval, eliberare, foto }) => (
            <div key={oras} className="space-y-1 rounded-lg border border-gray-200 bg-white p-3">
              <p className="font-semibold text-gray-900">{oras}</p>
              <p className="whitespace-pre-line text-sm text-gray-700">🕐 {interval}</p>
              <p className="text-xs text-green-700">✅ {eliberare}</p>
              <p className="whitespace-pre-line text-xs text-gray-600">📷 {foto}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'furt',
    title: 'Adeverința poliției și traducerea',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-700">
          Dacă pașaportul a fost <strong>furat</strong>, adeverința poliției germane este obligatorie
          la toate consulatele. Traducerea ei în română se cere diferit:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Consulat</th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Adeverință poliție</th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Traducere română</th>
              </tr>
            </thead>
            <tbody>
              {[
                { consulat: 'Bonn', adeverinta: 'Obligatorie', traducere: 'Nu se cere' },
                { consulat: 'München', adeverinta: 'Obligatorie', traducere: 'Autorizată' },
                { consulat: 'Stuttgart', adeverinta: 'Obligatorie', traducere: 'Autorizată' },
                { consulat: 'Berlin', adeverinta: 'Obligatorie', traducere: 'Autorizată' },
              ].map(({ consulat, adeverinta, traducere }, i) => (
                <tr key={consulat} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 p-2 font-medium text-gray-800">{consulat}</td>
                  <td className="border border-gray-200 p-2 text-gray-700">{adeverinta}</td>
                  <td className="border border-gray-200 p-2 text-gray-700">{traducere}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">
          Pentru pașaport pierdut, nu furat: declarație pe proprie răspundere completată la ghișeul consulatului.
        </p>
      </div>
    ),
  },
  {
    id: 'dupa-romania',
    title: 'Ce faci după ce ajungi în România',
    content: (
      <div className="space-y-3">
        <div className="space-y-2 rounded-xl border border-blue-100 bg-blue-50 p-4">
          <p className="font-semibold text-blue-900">Titlul de călătorie nu se predă la frontieră</p>
          <p className="text-sm text-blue-800">
            Intrarea în România se face cu titlul, iar documentul îl păstrezi.
          </p>
          <p className="text-sm text-blue-800">
            Se predă la ghișeul <strong>SPCP</strong> când depui cererea pentru noul pașaport.
          </p>
        </div>

        <p className="text-sm font-medium text-gray-700">Termene pentru pașaport în România:</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { tip: 'Pașaport simplu electronic', termen: '~5 zile lucrătoare', taxa: '265 RON' },
            { tip: 'Pașaport simplu temporar (12 luni)', termen: 'max. 3 zile lucrătoare', taxa: '96 RON' },
          ].map(({ tip, termen, taxa }) => (
            <div key={tip} className="rounded-lg border border-gray-200 p-3">
              <p className="mb-1 text-sm font-medium text-gray-800">{tip}</p>
              <p className="text-xs text-gray-600">⏱ {termen}</p>
              <p className="text-xs text-gray-600">💳 {taxa}</p>
            </div>
          ))}
        </div>
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
            gresit: 'Predau titlul de călătorie la frontieră',
            corect: 'Titlul de călătorie nu se predă la frontieră. Se predă la SPCP când depui cererea pentru noul pașaport.',
          },
          {
            gresit: 'Merg la München fără fotografii biometrice proprii',
            corect: 'La München sunt obligatorii 2 fotografii biometrice proprii. La Bonn și Berlin nu sunt necesare.',
          },
          {
            gresit: 'Cred că pot folosi titlul pentru altă țară din UE',
            corect: 'Titlul de călătorie este valabil exclusiv pentru revenirea în România.',
          },
          {
            gresit: 'Nu raportez furtul la poliția germană înainte de consulat',
            corect: 'Dacă pașaportul a fost furat, raportezi la poliția locală înainte de a merge la consulat.',
          },
          {
            gresit: 'Mă prezint în afara intervalului dedicat',
            corect: 'Fiecare consulat are un interval fix. În afara lui nu se acceptă cereri pentru titlu de călătorie.',
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
    title: 'Când folosești wizardul ActeRO',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Dacă nu ești sigur ce documente să aduci exact în funcție de consulat, dacă pașaportul este pierdut sau expirat și dacă sunt minori în dosar, wizardul îți dă lista completă pentru situația ta concretă.
        </p>
        <div className="space-y-2 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-medium text-gray-800">Wizardul te ajută să afli:</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>ce documente aduci la consulatul tău</li>
            <li>dacă ai nevoie de fotografii sau nu</li>
            <li>dacă ai nevoie de traducerea adeverinței poliției</li>
            <li>ce faci după ce ajungi în România cu titlul</li>
            <li>intervalul exact de prezentare la consulatul tău</li>
          </ul>
        </div>
      </div>
    ),
  },
]

export default function TitluCalatoriePage() {
  return (
    <LlmOptimizedPage
      lpSlug="titlu-calatorie-germania"
      lpTopic="titlu-calatorie"
      h1="Titlu de călătorie din Germania — fără programare, gratuit, aceeași zi"
      intro="Pașaportul a expirat și ai un zbor în câteva zile sau nu există programări disponibile pe econsulat.ro. Titlul de călătorie este soluția de urgență: fără programare, gratuit și eliberat în aceeași zi la consulat."
      tldr="Titlul de călătorie este gratuit, nu cere programare și este valabil exclusiv pentru revenirea în România. München cere fotografii biometrice proprii, celelalte consulate nu. Documentul se predă la SPCP în România când depui cererea pentru noul pașaport."
      ctaHref="/wizard?problem=titlu-calatorie"
      ctaLabel="Găsește ce documente aduci la consulatul tău →"
      updatedAt="aprilie 2026"
      sourceNote="Consulatele României din Germania — date verificate live per consulat"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Zbor în curând și nu știi exact ce aduci?"
      finalCtaText="Spune-i wizardul ce consulat ai, dacă pașaportul este pierdut sau expirat și dacă sunt minori în dosar. Primești lista exactă de documente și intervalul de prezentare."
    />
  )
}
