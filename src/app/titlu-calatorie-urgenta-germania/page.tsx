import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Titlu de călătorie URGENT din Germania — fără programare, aceeași zi',
  description:
    'Zbor în câteva ore și nu ai pașaport? Titlul de călătorie: gratuit, fără programare, aceeași zi. Intervale per consulat, ce aduci și ce faci după ce ajungi în România.',
  keywords: [
    'titlu de calatorie urgent germania',
    'plec in romania fara pasaport',
    'consulat romania fara programare',
    'titlu calatorie aceeasi zi germania',
    'document urgenta consulat romania germania',
    'pasaport expirat zbor maine',
    'fara programare econsulat romania',
    'titlu calatorie bonn munchen stuttgart berlin',
    'consulat romania urgenta germania',
    'titlu calatorie gratuit germania',
  ],
  openGraph: {
    title: 'Titlu de călătorie URGENT din Germania — fără programare, aceeași zi',
    description:
      'Gratuit, fără programare, aceeași zi. Intervale exacte per consulat și pașii de urgență până ajungi în România.',
    url: 'https://www.actero.ro/titlu-calatorie-urgenta-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/titlu-calatorie-urgenta-germania',
  },
}

const faqItems = [
  {
    question: 'Pot obține titlul de călătorie chiar azi?',
    answer:
      'Da, dacă ajungi în intervalul dedicat al consulatului tău. În practică, acesta este unul dintre cele mai rapide servicii consulare.',
  },
  {
    question: 'Am nevoie de programare pe econsulat.ro pentru titlul de călătorie urgent?',
    answer:
      'Nu. Titlul de călătorie urgent nu funcționează ca un serviciu clasic cu programare pe econsulat.',
  },
  {
    question: 'Cât costă titlul de călătorie urgent?',
    answer:
      'În logica practică a consulatelor, serviciul este gratuit.',
  },
  {
    question: 'Trebuie să aduc dovada că am zbor iminent?',
    answer:
      'Nu este mereu formulată ca obligație strictă, dar este foarte util să ai orice dovadă a urgenței.',
  },
  {
    question: 'Ce se întâmplă cu titlul de călătorie la intrarea în România?',
    answer:
      'Nu îl predai la frontieră. Îl păstrezi pentru etapa următoare din România, când rezolvi pașaportul.',
  },
  {
    question: 'Am nevoie de fotografii pentru titlul de călătorie?',
    answer:
      'Depinde de consulat. Aici apar diferențe practice importante între orașe.',
  },
  {
    question: 'Pașaportul meu a fost furat. Am nevoie de adeverința poliției?',
    answer:
      'Da, în caz de furt trebuie tratată și partea de raportare la poliția germană. Cerințele de traducere diferă per consulat.',
  },
  {
    question: 'Titlul de călătorie e valabil și pentru alte țări?',
    answer:
      'Nu. Este destinat exclusiv revenirii în România.',
  },
]

const howToSteps = [
  {
    name: 'Verifici intervalul consulatului tău',
    text: 'Asta este prioritatea absolută. Dacă pierzi intervalul, pierzi ziua.',
  },
  {
    name: 'Pregătești ce documente ai la îndemână',
    text: 'Acte, dovezi de identitate și, dacă e cazul, dovada urgenței sau documentele de la poliție.',
  },
  {
    name: 'Verifici dacă ai nevoie de fotografii',
    text: 'Regula nu este identică la toate consulatele.',
  },
  {
    name: 'Te prezinți direct la consulat',
    text: 'Fără programare, cu accent pe rapiditate și prezență în intervalul corect.',
  },
  {
    name: 'În România, folosești titlul pentru pasul următor',
    text: 'Titlul nu se pierde la frontieră, ci te ajută și la rezolvarea noului pașaport.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/titlu-calatorie-urgenta-germania#article',
  headline: 'Titlu de călătorie urgent din Germania — fără programare, aceeași zi',
  description:
    'Ghid complet pentru titlul de călătorie urgent din Germania: intervale per consulat, acte, fotografii și pașii de după intrarea în România.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/titlu-calatorie-urgenta-germania',
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
      name: 'Titlu de călătorie urgent',
      item: 'https://www.actero.ro/titlu-calatorie-urgenta-germania',
    },
  ],
}

const sections = [
  {
    id: 'raspuns-imediat',
    title: 'Răspuns imediat — cele 4 lucruri care contează',
    content: (
      <div className="grid gap-2 sm:grid-cols-2">
        {[
          {
            icon: '📅',
            titlu: 'Programare necesară?',
            valoare: 'NU',
            detaliu: 'Te prezinți direct la consulat.',
            color: 'border-green-200 bg-green-50',
            valoareColor: 'text-green-700',
          },
          {
            icon: '💶',
            titlu: 'Cost?',
            valoare: 'GRATUIT',
            detaliu: 'În logica serviciului consular de urgență.',
            color: 'border-green-200 bg-green-50',
            valoareColor: 'text-green-700',
          },
          {
            icon: '⏱',
            titlu: 'Când îl primești?',
            valoare: 'ACEEAȘI ZI',
            detaliu: 'Dacă ajungi în intervalul corect.',
            color: 'border-blue-100 bg-blue-50',
            valoareColor: 'text-blue-700',
          },
          {
            icon: '🌍',
            titlu: 'Valabil pentru?',
            valoare: 'DOAR ROMÂNIA',
            detaliu: 'Nu este document de călătorie general pentru alte țări.',
            color: 'border-amber-100 bg-amber-50',
            valoareColor: 'text-amber-700',
          },
        ].map(({ icon, titlu, valoare, detaliu, color, valoareColor }) => (
          <div key={titlu} className={`rounded-xl border p-4 ${color}`}>
            <p className="mb-1 text-xs text-gray-500">
              {icon} {titlu}
            </p>
            <p className={`mb-1 text-2xl font-black ${valoareColor}`}>{valoare}</p>
            <p className="text-xs text-gray-600">{detaliu}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'intervale-consulate',
    title: 'Intervalele consulatelor — când trebuie să fii acolo',
    content: (
      <div className="space-y-3">
        <div className="mb-1 rounded-lg border border-red-200 bg-red-50 p-3">
          <p className="text-sm font-semibold text-red-800">
            Dacă ajungi după interval, riști să pierzi ziua.
          </p>
        </div>

        <div className="space-y-2">
          {[
            {
              oras: 'Bonn',
              interval: '09:00–12:00',
              eliberare: 'Aceeași zi',
              foto: 'Fără fotografii proprii',
              alert: null,
            },
            {
              oras: 'München',
              interval: '08:00–14:00, vineri 08:00–12:00',
              eliberare: 'Aceeași zi',
              foto: '2 fotografii biometrice proprii',
              alert: 'Vino cu fotografiile pregătite.',
            },
            {
              oras: 'Stuttgart',
              interval: '10:00–14:00',
              eliberare: 'Aceeași zi',
              foto: 'Depinde de vârstă',
              alert: 'Atenție la adresa și intrarea corectă.',
            },
            {
              oras: 'Berlin',
              interval: '08:00–10:00',
              eliberare: 'Preluare și eliberare în același interval',
              foto: 'Fără fotografii proprii',
              alert: 'Fereastra este foarte scurtă.',
            },
          ].map(({ oras, interval, eliberare, foto, alert }) => (
            <div key={oras} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="mb-2 flex items-start justify-between">
                <p className="text-lg font-bold text-gray-900">{oras}</p>
              </div>
              <div className="grid gap-2 text-xs sm:grid-cols-3">
                <div>
                  <p className="mb-0.5 font-semibold text-gray-600">Interval</p>
                  <p className="font-medium text-gray-800">{interval}</p>
                </div>
                <div>
                  <p className="mb-0.5 font-semibold text-gray-600">Eliberare</p>
                  <p className="text-gray-700">{eliberare}</p>
                </div>
                <div>
                  <p className="mb-0.5 font-semibold text-gray-600">Fotografii</p>
                  <p className="text-gray-700">{foto}</p>
                </div>
              </div>
              {alert ? (
                <p className="mt-2 rounded bg-amber-50 px-2 py-1.5 text-xs text-amber-700">
                  {alert}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'documente',
    title: 'Ce aduci la consulat',
    content: (
      <div className="space-y-3">
        <div className="space-y-2">
          {[
            {
              req: false,
              doc: 'Pașaportul expirat sau deteriorat',
              label: 'dacă îl mai ai',
              detaliu: 'Ajută mult la identificare.',
            },
            {
              req: false,
              doc: 'Carte de identitate românească',
              label: 'dacă o ai',
              detaliu: 'Inclusiv una expirată poate ajuta.',
            },
            {
              req: false,
              doc: 'Certificat de naștere românesc',
              label: 'recomandat',
              detaliu: 'Util dacă nu mai ai alt act de identitate.',
            },
            {
              req: false,
              doc: 'Dovada urgenței',
              label: 'recomandat',
              detaliu: 'Bilet de avion, document medical sau alt motiv urgent.',
            },
            {
              req: false,
              doc: 'Adeverință de la poliție și eventual traducere',
              label: 'dacă pașaportul a fost furat',
              detaliu: 'Important mai ales la cazurile de furt, nu doar de pierdere.',
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

        <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
          <p className="text-xs text-blue-800">
            Dacă nu ai niciun document, tot merită să mergi cu ce informații ai. Identitatea se
            poate clarifica uneori și pe baza datelor existente în sistemele românești.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'tabel-furt',
    title: 'Pașaport furat — adeverință poliție și traducere per consulat',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-700">
          Pentru furt, partea de poliție devine obligatorie. Regula de traducere diferă între consulate.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">
                  Consulat
                </th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">
                  Adeverință poliție
                </th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">
                  Traducere română
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { consulat: 'Bonn', adeverinta: 'Obligatorie', traducere: 'Nu se cere' },
                { consulat: 'München', adeverinta: 'Obligatorie', traducere: 'Autorizată' },
                { consulat: 'Stuttgart', adeverinta: 'Obligatorie', traducere: 'Autorizată' },
                { consulat: 'Berlin', adeverinta: 'Obligatorie', traducere: 'Autorizată' },
              ].map(({ consulat, adeverinta, traducere }, index) => (
                <tr key={consulat} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 p-2 font-semibold text-gray-800">
                    {consulat}
                  </td>
                  <td className="border border-gray-200 p-2 text-gray-700">{adeverinta}</td>
                  <td className="border border-gray-200 p-2 text-gray-700">{traducere}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: 'dupa-romania',
    title: 'Ce faci după ce ajungi în România',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="mb-1 font-semibold text-amber-900">
            Titlul de călătorie nu se predă la frontieră
          </p>
          <p className="text-sm text-amber-800">
            Îl păstrezi și îl folosești la etapa următoare, când mergi să rezolvi noul pașaport.
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {[
            {
              tip: 'Pașaport simplu electronic',
              termen: 'Aproximativ 5 zile lucrătoare',
              taxa: 'Taxa standard',
            },
            {
              tip: 'Pașaport simplu temporar',
              termen: 'Până la 3 zile lucrătoare',
              taxa: 'Taxa temporarului',
            },
          ].map(({ tip, termen, taxa }) => (
            <div key={tip} className="rounded-lg border border-gray-200 bg-white p-3">
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
    title: 'Greșeli care costă timp',
    content: (
      <div className="space-y-2">
        {[
          {
            gresit: 'Ajungi la consulat în afara intervalului dedicat',
            corect: 'Verifici ora înainte să pleci și tratezi drumul ca pe o urgență reală.',
          },
          {
            gresit: 'Mergi la München fără fotografii',
            corect: 'La München regulile sunt mai stricte pentru fotografii și trebuie verificate din timp.',
          },
          {
            gresit: 'Predai titlul la frontieră',
            corect: 'Îl păstrezi pentru etapa următoare din România.',
          },
          {
            gresit: 'Crezi că titlul e bun și pentru alte țări',
            corect: 'Titlul este exclusiv pentru revenirea în România.',
          },
          {
            gresit: 'Nu mergi întâi la poliție în caz de furt',
            corect: 'Pentru furt, raportarea la poliția germană este un pas real și important.',
          },
        ].map(({ gresit, corect }) => (
          <div key={gresit} className="rounded-lg border border-red-100 bg-red-50 p-3">
            <p className="mb-0.5 text-xs font-semibold text-red-700">❌ {gresit}</p>
            <p className="text-xs text-gray-700">✅ {corect}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'alte-situatii',
    title: 'Nu e chiar urgent — sau situația e diferită?',
    content: (
      <div className="space-y-2">
        {[
          {
            text: 'Comparația completă între titlu de călătorie și pașaport temporar',
            href: '/titlu-calatorie-vs-pasaport-temporar',
            label: 'Vezi comparația →',
          },
          {
            text: 'Ai timp să aștepți și vrei pașaport nou',
            href: '/pasaport-expirat-germania',
            label: 'Ghid pașaport expirat →',
          },
          {
            text: 'Pașaport pierdut sau furat — ghid complet',
            href: '/pasaport-pierdut-furat-germania',
            label: 'Ghid pașaport pierdut/furat →',
          },
        ].map(({ text, href, label }) => (
          <div
            key={`${href}-${text}`}
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
  {
    id: 'pagini-conexe',
    title: 'Pagini conexe utile după urgență',
    content: (
      <div className="grid gap-3 sm:grid-cols-3">
        <Link href="/titlu-calatorie-germania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Titlu de călătorie din Germania</p>
          <p className="mt-1 text-sm text-gray-600">Varianta completă, nu doar scenariul urgent.</p>
        </Link>
        <Link href="/pasaport-pierdut-furat-germania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Pașaport pierdut sau furat</p>
          <p className="mt-1 text-sm text-gray-600">Dacă urgența a pornit din furt sau pierdere, aici continui corect.</p>
        </Link>
        <Link href="/pasaport-expirat-germania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Pașaport expirat</p>
          <p className="mt-1 text-sm text-gray-600">După întoarcerea în România sau pentru reînnoirea completă a documentului.</p>
        </Link>
      </div>
    ),
  },
]

export default function TitluCalatorieUrgentaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="titlu-calatorie-urgenta-germania"
      lpTopic="titlu-calatorie"
      h1="Titlu de călătorie urgent din Germania — fără programare, gratuit, aceeași zi"
      intro="Dacă nu mai poți folosi documentele actuale și trebuie să ajungi rapid în România, titlul de călătorie este traseul de urgență. Nu pierzi timp cu econsulat și nu ai nevoie de programare, dar trebuie să ajungi în intervalul corect al consulatului."
      tldr="Fără programare. Gratuit. În aceeași zi. Important este să mergi la consulatul potrivit, în intervalul lui, cu documentele pe care le ai și cu atenție la regulile speciale de fotografii sau poliție."
      ctaHref="/titlu-calatorie-vs-pasaport-temporar"
      ctaLabel="Vezi ce urmează după intrarea în România →"
      updatedAt="aprilie 2026"
      sourceNote="Consulatele României din Germania și regulile practice pentru titlul de călătorie"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi dacă problema ta este urgența de azi sau pașaportul de după?"
      finalCtaText="Pentru urgența imediată rămâi pe această pagină. Pentru pasul următor după intrarea în România, continuă pe comparația dintre titlu de călătorie și pașaport temporar."
    />
  )
}
