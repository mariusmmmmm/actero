import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Titlu de călătorie vs pașaport temporar — Diferența reală | ActeRO',
  description:
    'Titlu de călătorie și pașaport temporar nu sunt alternative, ci pași diferiți. Titlul te aduce în România, pașaportul temporar îl obții acolo.',
  keywords: [
    'titlu de calatorie vs pasaport temporar',
    'titlu de calatorie sau pasaport temporar',
    'revenire in romania fara pasaport',
    'pasaport temporar romania urgenta',
    'diferenta titlu calatorie pasaport temporar',
    'titlu calatorie valabilitate',
    'pasaport simplu temporar 12 luni',
    'unde fac pasaport temporar in romania',
    'urgenta pasaport germania',
    'document urgenta calatorie romania germania',
  ],
  openGraph: {
    title: 'Titlu de călătorie vs pașaport temporar — Diferența reală',
    description:
      'Nu sunt alternative, ci documente complementare pentru două etape diferite.',
    url: 'https://www.actero.ro/titlu-calatorie-vs-pasaport-temporar',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/titlu-calatorie-vs-pasaport-temporar',
  },
}

const faqItems = [
  {
    question: 'Care e diferența dintre titlul de călătorie și pașaportul temporar?',
    answer:
      'Titlul de călătorie se obține în Germania și este util pentru a ajunge în România. Pașaportul temporar se obține în România și este documentul cu care poți pleca din nou.',
  },
  {
    question: 'Pot folosi titlul de călătorie să mă întorc în Germania după ce ajung în România?',
    answer:
      'Nu. Titlul de călătorie nu este gândit ca document de ieșire din România sau de călătorie internațională repetată.',
  },
  {
    question: 'Pașaportul temporar se poate face la consulat din Germania?',
    answer:
      'Nu. El se face în România, la serviciul de pașapoarte.',
  },
  {
    question: 'Care este traseul complet dacă sunt în Germania fără niciun document valabil?',
    answer:
      'Mai întâi rezolvi intrarea în România prin titlul de călătorie. După aceea, în România, rezolvi pașaportul cu care vei putea ieși din nou.',
  },
  {
    question: 'Cât costă pașaportul temporar în România?',
    answer:
      'Are taxă separată și termen scurt de eliberare, dar important este că se obține în România, nu la consulatul din Germania.',
  },
  {
    question: 'Titlul de călătorie se predă la frontieră?',
    answer:
      'Nu. Trebuie păstrat pentru etapa următoare din România.',
  },
  {
    question: 'Pașaportul temporar este valabil pentru toate țările?',
    answer:
      'Nu în toate situațiile practice. Unele state au restricții sau tratamente diferite pentru pașapoartele temporare.',
  },
]

const howToSteps = [
  {
    name: 'Din Germania: obții titlul de călătorie',
    text: 'Acesta este documentul care te ajută să intri în România când nu mai ai act valabil.',
  },
  {
    name: 'Intri în România cu titlul',
    text: 'Titlul rămâne important și după intrare, nu se aruncă și nu se predă inutil.',
  },
  {
    name: 'În România: depui cererea pentru pașaport',
    text: 'Aici alegi între varianta temporară și cea electronică standard, în funcție de urgență.',
  },
  {
    name: 'Ridici noul pașaport',
    text: 'Acesta este documentul cu care poți ieși din nou din România și continua călătoria normal.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/titlu-calatorie-vs-pasaport-temporar#article',
  headline: 'Titlu de călătorie vs pașaport temporar — Diferența reală 2026',
  description:
    'Pagina comparativă dintre titlul de călătorie și pașaportul temporar: două documente diferite pentru două etape diferite.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/titlu-calatorie-vs-pasaport-temporar',
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
      name: 'Titlu de călătorie Germania',
      item: 'https://www.actero.ro/titlu-calatorie-urgenta-germania',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Titlu de călătorie vs pașaport temporar',
      item: 'https://www.actero.ro/titlu-calatorie-vs-pasaport-temporar',
    },
  ],
}

const sections = [
  {
    id: 'clarificare-principala',
    title: 'Clarificarea principală — nu sunt alternative, sunt complementare',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border-2 border-blue-300 bg-blue-50 p-4">
          <p className="mb-2 text-center font-semibold text-blue-900">
            Titlul de călătorie și pașaportul temporar sunt două etape din același traseu
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-blue-100 p-3 text-center">
              <p className="mb-1 text-2xl">🇩🇪</p>
              <p className="text-sm font-semibold text-blue-900">Titlu de călătorie</p>
              <p className="mt-1 text-xs text-blue-800">
                Se obține în Germania și te aduce în România
              </p>
            </div>
            <div className="rounded-lg bg-blue-100 p-3 text-center">
              <p className="mb-1 text-2xl">🇷🇴</p>
              <p className="text-sm font-semibold text-blue-900">Pașaport temporar</p>
              <p className="mt-1 text-xs text-blue-800">
                Se obține în România și te lasă să pleci din nou
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600">
          Confuzia apare pentru că ambele par „temporare” sau „de urgență”, dar au roluri
          complet diferite.
        </p>
      </div>
    ),
  },
  {
    id: 'tabel-comparativ',
    title: 'Tabel comparativ complet',
    content: (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">
                Criteriu
              </th>
              <th className="border border-gray-200 p-2 text-left font-semibold text-blue-700">
                Titlu de călătorie
              </th>
              <th className="border border-gray-200 p-2 text-left font-semibold text-purple-700">
                Pașaport simplu temporar
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                criteriu: 'Unde se obține',
                titlu: 'La consulatul din Germania',
                pasaport: 'În România',
                highlight: true,
              },
              {
                criteriu: 'Cost',
                titlu: 'Foarte redus sau gratuit în logica consulară',
                pasaport: 'Are taxă separată în România',
                highlight: false,
              },
              {
                criteriu: 'Timp',
                titlu: 'Foarte rapid',
                pasaport: 'Câteva zile lucrătoare',
                highlight: false,
              },
              {
                criteriu: 'Pentru ce îl folosești',
                titlu: 'Pentru a intra în România',
                pasaport: 'Pentru a călători după ce ești în România',
                highlight: true,
              },
              {
                criteriu: 'Valabilitate practică',
                titlu: 'O etapă de drum',
                pasaport: 'Document temporar de călătorie',
                highlight: false,
              },
            ].map(({ criteriu, titlu, pasaport, highlight }, index) => (
              <tr
                key={criteriu}
                className={highlight ? 'bg-yellow-50' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="border border-gray-200 p-2 text-xs font-medium text-gray-800">
                  {criteriu}
                </td>
                <td className="border border-gray-200 p-2 text-xs text-blue-700">{titlu}</td>
                <td className="border border-gray-200 p-2 text-xs text-purple-700">
                  {pasaport}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'traseu-complet',
    title: 'Traseul complet — din Germania fără pașaport, înapoi cu pașaport',
    content: (
      <div className="space-y-2">
        {[
          {
            step: '1',
            loc: 'Germania',
            titlu: 'Obții titlul de călătorie',
            detaliu: 'Acesta este pasul care te scoate din blocajul imediat.',
            color: 'border-blue-200 bg-blue-50',
          },
          {
            step: '2',
            loc: 'Drum spre România',
            titlu: 'Intri în România cu titlul',
            detaliu: 'Titlul rămâne util și pentru etapa următoare.',
            color: 'border-gray-200 bg-gray-50',
          },
          {
            step: '3',
            loc: 'România',
            titlu: 'Depui cerere pentru pașaport',
            detaliu: 'Aici alegi tipul de pașaport potrivit pentru urgența ta.',
            color: 'border-purple-200 bg-purple-50',
          },
          {
            step: '4',
            loc: 'România',
            titlu: 'Ridici pașaportul nou',
            detaliu: 'Cu el poți ieși din nou din România.',
            color: 'border-green-200 bg-green-50',
          },
        ].map(({ step, loc, titlu, detaliu, color }) => (
          <div key={step} className={`flex gap-3 rounded-xl border p-4 ${color}`}>
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-bold text-gray-700">
              {step}
            </span>
            <div>
              <p className="mb-0.5 text-xs text-gray-500">{loc}</p>
              <p className="text-sm font-semibold text-gray-800">{titlu}</p>
              <p className="mt-0.5 text-xs text-gray-600">{detaliu}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'pasaport-temporar-detalii',
    title: 'Pașaportul temporar — ce trebuie să știi',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-purple-200 bg-purple-50 p-4">
            <p className="mb-2 font-semibold text-purple-900">Pașaport simplu temporar</p>
            <ul className="space-y-1 text-sm text-purple-800">
              <li>Se face în România</li>
              <li>Are valabilitate limitată</li>
              <li>Este util pentru urgențe reale</li>
              <li>Poate avea limitări pentru anumite țări</li>
            </ul>
          </div>

          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-2 font-semibold text-green-900">Pașaport simplu electronic</p>
            <ul className="space-y-1 text-sm text-green-800">
              <li>Se face tot în România</li>
              <li>Are valabilitate mai bună pe termen lung</li>
              <li>Este mai potrivit dacă ai timp să aștepți</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Dacă ai timp suficient în România, varianta standard poate fi mai bună decât cea
            temporară. Dacă urgența este reală și trebuie să pleci repede, temporarul devine
            logic.
          </p>
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
            gresit: 'Predai titlul de călătorie la frontieră',
            corect: 'Îl păstrezi pentru etapa din România în care depui cererea de pașaport.',
          },
          {
            gresit: 'Crezi că poți face pașaportul temporar la consulat din Germania',
            corect: 'Pașaportul temporar se rezolvă în România, nu în Germania.',
          },
          {
            gresit: 'Folosești titlul ca document de ieșire din România',
            corect: 'Titlul este pentru intrarea în România, nu pentru următoarele drumuri.',
          },
          {
            gresit: 'Presupui că pașaportul temporar este acceptat la fel peste tot',
            corect: 'Verifici mereu cerințele țării unde urmează să călătorești.',
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
    title: 'Ghiduri pentru situația ta',
    content: (
      <div className="space-y-2">
        {[
          {
            text: 'Titlu de călătorie urgent din Germania',
            href: '/titlu-calatorie-urgenta-germania',
            label: 'Ghid urgent →',
          },
          {
            text: 'Pașaport expirat — reînnoire la consulat',
            href: '/pasaport-expirat-germania',
            label: 'Ghid pașaport expirat →',
          },
          {
            text: 'Pașaport pierdut sau furat în Germania',
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
]

export default function TitluCalatorieVsPasaportTemporarPage() {
  return (
    <LlmOptimizedPage
      lpSlug="titlu-calatorie-vs-pasaport-temporar"
      lpTopic="titlu-calatorie"
      h1="Titlu de călătorie vs pașaport temporar — nu sunt alternative"
      intro="Cele două documente par asemănătoare doar la prima vedere. În realitate, ele rezolvă două probleme diferite: una te ajută să ajungi în România, cealaltă te ajută să pleci din nou de acolo."
      tldr="Titlul de călătorie se obține în Germania și te aduce în România. Pașaportul temporar se obține în România și îți permite să călătorești din nou. Nu alegi între ele ca între două opțiuni identice."
      ctaHref="/wizard?problem=titlu-calatorie"
      ctaLabel="Găsește traseul exact pentru situația ta →"
      updatedAt="aprilie 2026"
      sourceNote="Consulatele României din Germania și regulile practice pentru documentele de urgență"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Ești în Germania fără niciun document valabil?"
      finalCtaText="Ghidul rapid ActeRO îți arată ce faci acum la consulat și ce faci după ce ajungi în România."
    />
  )
}
