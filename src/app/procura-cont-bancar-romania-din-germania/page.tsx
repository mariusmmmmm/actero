import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Procură cont bancar România din Germania — Ce operațiuni, ce bănci | ActeRO',
  description:
    'Procură pentru operațiuni bancare în România din Germania. Ce operațiuni specifici, ce bănci acceptă și de ce trebuie să verifici înainte cu banca.',
  keywords: [
    'procura cont bancar romania din germania',
    'procura banca romania germania',
    'deschidere cont prin procura romania',
    'ing procura cont romania',
    'procura retragere bani romania din germania',
    'procura operatiuni bancare romania germania',
    'banca accepta procura notariala romania',
    'procura consulat banca romania',
    'imputernicire cont bancar romania din strainatate',
    'ce banci accepta procura romania',
  ],
  openGraph: {
    title: 'Procură cont bancar România din Germania — Ce operațiuni, ce bănci',
    description:
      'Verifică banca înainte de consulat, specifică operațiunile clar și tratează separat cazurile restrictive precum ING.',
    url: 'https://actero.ro/procura-cont-bancar-romania-din-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/procura-cont-bancar-romania-din-germania',
  },
}

const faqItems = [
  {
    question: 'Pot deschide un cont bancar nou în România prin procură?',
    answer:
      'Depinde de bancă. Unele acceptă, altele cer prezența titularului. Nu este un lucru care se presupune, ci unul care trebuie verificat înainte.',
  },
  {
    question: 'Ce operațiuni bancare pot face prin procură?',
    answer:
      'Operațiuni precum retrageri, depuneri, transferuri sau modificări de date pot fi uneori acoperite, dar trebuie enumerate explicit în procură, nu lăsate la nivel vag.',
  },
  {
    question: 'ING România acceptă procuri notariale?',
    answer:
      'ING este cunoscută pentru o abordare mai restrictivă în anumite situații. Dacă ai cont la ING, verificarea directă înainte de programarea la consulat este obligatorie.',
  },
  {
    question: 'Trebuie să știu numărul de cont înainte de a face procura?',
    answer:
      'Dacă contul există deja, da, este foarte util să-l incluzi. Asta face procura mai specifică și mai ușor de folosit la bancă.',
  },
  {
    question: 'Banca îmi poate cere un formular propriu de procură?',
    answer:
      'Da. Unele bănci preferă sau cer formulare proprii. Dacă primești unul, ideal este să îl ai înainte de programarea la consulat.',
  },
  {
    question: 'Cât costă procura bancară la consulat?',
    answer:
      'În logica practică a consulatului apare și taxa RNNEPR de 3€, iar metoda de plată depinde de consulatul la care mergi.',
  },
  {
    question: 'Procura bancară se eliberează în aceeași zi?',
    answer:
      'Da. Ca celelalte procuri consulare, în fluxul normal se eliberează în aceeași zi.',
  },
  {
    question: 'Procura trebuie legalizată sau tradusă pentru banca din România?',
    answer:
      'Nu. Procura consulară românească este folosită direct în România, fără apostilă și fără traducere.',
  },
]

const howToSteps = [
  {
    name: 'Verifici cu banca ce acceptă',
    text: 'Acesta este pasul critic: afli ce operațiuni permit, ce clauze cer și dacă au formular propriu.',
  },
  {
    name: 'Pregătești datele pentru procură',
    text: 'Banca, contul, operațiunile autorizate și datele mandatarului trebuie clarificate din timp.',
  },
  {
    name: 'Verifici plata RNNEPR la consulatul tău',
    text: 'Metoda diferă între consulate și contează mai ales la Berlin și Bonn.',
  },
  {
    name: 'Faci programarea și mergi la consulat',
    text: 'Semnezi la ghișeu și primești procura în aceeași zi.',
  },
  {
    name: 'Mandatarul merge la bancă',
    text: 'El folosește procura împreună cu actul propriu de identitate și cu cerințele băncii.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/procura-cont-bancar-romania-din-germania#article',
  headline: 'Procură cont bancar România din Germania — Ce operațiuni, ce bănci 2026',
  description:
    'Ghid pentru procura bancară din Germania: verificarea cu banca, operațiunile ce trebuie enumerate explicit și excepțiile practice.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/procura-cont-bancar-romania-din-germania',
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
      name: 'Procură generală Germania',
      item: 'https://actero.ro/procura-generala-germania',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Procură cont bancar România',
      item: 'https://actero.ro/procura-cont-bancar-romania-din-germania',
    },
  ],
}

const sections = [
  {
    id: 'pasul-critic',
    title: 'Pasul critic înainte de consulat — verificarea cu banca',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="mb-1 font-semibold text-red-900">
            Verifică cu banca înainte de programarea la consulat
          </p>
          <p className="text-sm text-red-800">
            Mulți oameni fac procura și află abia după aceea că banca nu acceptă formularea,
            nu acceptă anumite operațiuni sau vrea alt document. Aici se câștigă sau se pierde
            cel mai mult timp.
          </p>
        </div>

        <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
          <p className="mb-2 text-sm font-semibold text-blue-900">Ce întrebi banca:</p>
          <ul className="space-y-1 text-sm text-blue-800">
            <li>Ce operațiuni acceptați prin procură?</li>
            <li>Ce formulare sau clauze trebuie incluse?</li>
            <li>Aveți formular propriu?</li>
            <li>Acceptați deschiderea de cont prin procură sau doar operațiuni pe cont existent?</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'operatiuni',
    title: 'Ce operațiuni poți acoperi prin procură',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Operațiunile trebuie enumerate clar. O procură vagă poate fi tratată ca insuficientă.
        </p>

        <div className="grid gap-2 sm:grid-cols-2">
          {[
            {
              categorie: 'Operațiuni uzuale',
              operatiuni: [
                'Retrageri de numerar',
                'Depuneri',
                'Transferuri',
                'Consultarea extraselor',
                'Modificarea unor date de cont',
              ],
              color: 'border-green-200 bg-green-50',
              textColor: 'text-green-800',
            },
            {
              categorie: 'Operațiuni cu restricții posibile',
              operatiuni: [
                'Deschiderea unui cont nou',
                'Închiderea contului',
                'Contractarea de credite',
                'Produse bancare speciale',
              ],
              color: 'border-amber-100 bg-amber-50',
              textColor: 'text-amber-800',
            },
          ].map(({ categorie, operatiuni, color, textColor }) => (
            <div key={categorie} className={`rounded-xl border p-4 ${color}`}>
              <p className={`mb-2 text-sm font-semibold ${textColor}`}>{categorie}</p>
              <ul className="space-y-1">
                {operatiuni.map((op) => (
                  <li key={op} className={`text-xs ${textColor}`}>
                    • {op}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'ing-exceptie',
    title: 'Excepția ING — politică mai restrictivă',
    content: (
      <div className="space-y-2 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <p className="font-semibold text-amber-900">ING România — verificare obligatorie</p>
        <p className="text-sm text-amber-800">
          Dacă ai cont la ING, nu porni de la ideea că o procură standard va fi suficientă.
          Politica lor este percepută frecvent ca mai restrictivă decât la alte bănci.
        </p>
        <p className="text-sm text-amber-800">
          Înainte de programare, cere direct de la ING ce operațiuni acceptă și dacă au un
          formular propriu.
        </p>
      </div>
    ),
  },
  {
    id: 'ce-specifici',
    title: 'Ce date incluzi în procură pentru bancă',
    content: (
      <div className="space-y-3">
        <div className="space-y-2">
          {[
            {
              req: true,
              item: 'Denumirea completă a băncii',
              detaliu: 'Identifică exact instituția.',
            },
            {
              req: false,
              item: 'Numărul de cont sau IBAN',
              label: 'recomandat',
              detaliu: 'Face procura mai specifică dacă contul există deja.',
            },
            {
              req: true,
              item: 'Lista operațiunilor autorizate',
              detaliu: 'Aici trebuie trecute explicit acțiunile aprobate.',
            },
            {
              req: false,
              item: 'Formularul băncii',
              label: 'dacă există',
              detaliu: 'Unele bănci preferă propriul model de împuternicire.',
            },
            {
              req: true,
              item: 'Datele complete ale mandatarului',
              detaliu: 'CNP și datele actului de identitate.',
            },
          ].map(({ req, item, detaliu, label }) => (
            <div key={item} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-3">
              <span className="flex-shrink-0 text-base">{req ? '✅' : '⚪'}</span>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {item}
                  {label ? <span className="ml-2 text-xs font-normal text-gray-500">— {label}</span> : null}
                </p>
                <p className="mt-0.5 text-xs text-gray-600">{detaliu}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'rnnepr-plata',
    title: 'Taxa 3€ RNNEPR — metoda per consulat',
    content: (
      <div className="space-y-2">
        {[
          {
            oras: 'Bonn',
            metoda: 'EC-Karte în ziua programării',
            special: 'Documentele se încarcă înainte în econsulat.',
            alert: false,
          },
          {
            oras: 'München',
            metoda: 'Numerar în ziua programării',
            special: null,
            alert: false,
          },
          {
            oras: 'Stuttgart',
            metoda: 'POS sau virament',
            special: 'Viramentul se face din timp dacă alegi varianta bancară.',
            alert: false,
          },
          {
            oras: 'Berlin',
            metoda: 'Exclusiv virament',
            special: 'Cu 3-4 zile lucrătoare înainte.',
            alert: true,
          },
        ].map(({ oras, metoda, special, alert }) => (
          <div
            key={oras}
            className={`rounded-lg border p-3 ${alert ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-white'}`}
          >
            <p className="text-sm font-semibold text-gray-900">{oras}</p>
            <p className="mt-0.5 text-xs text-gray-700">{metoda}</p>
            {special ? (
              <p className={`mt-0.5 text-xs ${alert ? 'font-semibold text-red-700' : 'text-amber-700'}`}>
                {special}
              </p>
            ) : null}
          </div>
        ))}
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
            gresit: 'Faci procura fără să verifici cu banca',
            corect: 'Confirmi înainte exact ce acceptă banca și ce clauze cere.',
          },
          {
            gresit: 'Scrii doar “orice operațiuni bancare”',
            corect: 'Enumeri explicit operațiunile aprobate.',
          },
          {
            gresit: 'Ignori faptul că ING poate avea restricții proprii',
            corect: 'Pentru ING, verificarea directă este obligatorie.',
          },
          {
            gresit: 'La Berlin lași plata RNNEPR pe ultima zi',
            corect: 'La Berlin plata trebuie rezolvată în avans.',
          },
          {
            gresit: 'Presupui că orice bancă permite deschiderea de cont prin procură',
            corect: 'Deschiderea de cont prin procură trebuie verificată separat la fiecare bancă.',
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
    title: 'Ai nevoie de alt tip de procură?',
    content: (
      <div className="space-y-2">
        {[
          {
            text: 'Procură generală pentru mai multe situații',
            href: '/procura-generala-germania',
            label: 'Ghid procură generală →',
          },
          {
            text: 'Procură pentru divorț notarial',
            href: '/procura-divort-notarial-germania',
            label: 'Ghid procură divorț →',
          },
          {
            text: 'Procură pentru vânzare proprietate',
            href: '/procura-vanzare-proprietate-germania',
            label: 'Ghid procură vânzare →',
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

export default function ProcuraContBancarRomaniaGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="procura-cont-bancar-romania-din-germania"
      lpTopic="procura"
      h1="Procură pentru cont bancar în România din Germania"
      intro="Dacă ai nevoie să rezolvi probleme bancare în România fără să fii prezent, procura consulară poate fi soluția. Totuși, în zona bancară contează mai mult decât în alte cazuri să știi exact ce acceptă banca ta înainte să ajungi la consulat."
      tldr="Verificarea cu banca este pasul critic. Operațiunile trebuie enumerate clar în procură, iar unele bănci, precum ING, pot avea politici mai restrictive. Procura se eliberează în aceeași zi și este valabilă direct în România."
      ctaHref="/procura-generala-germania"
      ctaLabel="Vezi când ajunge o procură generală și când trebuie una bancară →"
      updatedAt="aprilie 2026"
      sourceNote="Consulatele României din Germania și regulile practice pentru procuri bancare"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi dacă banca ta acceptă procura sau cere altă formulare?"
      finalCtaText="Începe cu ghidul acesta pentru verificarea cu banca. Dacă problema ta nu este bancară, mergi pe ghidurile conexe din clusterul de procuri."
    />
  )
}
