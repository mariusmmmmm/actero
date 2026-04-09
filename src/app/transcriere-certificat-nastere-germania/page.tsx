import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Transcriere certificat de naștere Germania — Formule A, fără apostilă | ActeRO',
  description:
    'Transcriere naștere copil născut în Germania: Formule A fără apostilă vs Geburtsurkunde cu apostilă. Gratuit. Cerințe per consulat, termene și ridicare.',
  keywords: [
    'transcriere certificat de nastere germania',
    'copil nascut in germania certificat romanesc',
    'formule a geburtsurkunde romania',
    'transcriere nastere consulat romania germania',
    'certificat nastere transcris romania',
    'apostila geburtsurkunde consulat romania',
    'formule a extras multilingv nastere',
    'transcriere nastere bonn munchen stuttgart berlin',
    'patronimic berlin transcriere nastere',
    'gratuit transcriere nastere consulat',
  ],
  openGraph: {
    title: 'Transcriere certificat de naștere Germania — Formule A, fără apostilă',
    description:
      'Formule A este varianta simplă, fără apostilă și fără traducere. Gratuit la toate consulatele, cu diferențe practice per consulat.',
    url: 'https://actero.ro/transcriere-certificat-nastere-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/transcriere-certificat-nastere-germania',
  },
}

const faqItems = [
  {
    question: 'Cât costă transcrierea certificatului de naștere la consulat?',
    answer:
      'Transcrierea este gratuită la consulatele României din Germania. Asta este una dintre cele mai importante clarificări practice pentru părinți.',
  },
  {
    question: 'Ce este Formule A și de ce e recomandat față de Geburtsurkunde?',
    answer:
      'Formule A este extrasul multilingv de naștere. În practică, acesta simplifică mult dosarul pentru că nu mai ai nevoie nici de apostilă, nici de traducere autorizată în majoritatea situațiilor.',
  },
  {
    question: 'Cum obțin extrasul Formule A în Germania?',
    answer:
      'De la Standesamt-ul localității unde s-a născut copilul. Trebuie cerut explicit extrasul internațional sau varianta multilingvă.',
  },
  {
    question: 'La Berlin nu se acceptă Formule A?',
    answer:
      'În general se acceptă, dar există excepția importantă legată de patronimic. Dacă un părinte are nume patronimic în actele românești, Berlin poate cere varianta mai strictă cu Geburtsurkunde, apostilă și traducere.',
  },
  {
    question: 'Trebuie să aduc certificatele de naștere românești ale părinților?',
    answer:
      'Depinde de consulat. Aici apar diferențe practice importante între Bonn, München, Stuttgart și Berlin.',
  },
  {
    question: 'Cât durează transcrierea și când ridic certificatul?',
    answer:
      'Durata și modul de ridicare diferă între consulate. Unele au cazuri simple rezolvate foarte repede, altele nu publică termene clare.',
  },
  {
    question: 'Ce fac după ce primesc certificatul de naștere transcris?',
    answer:
      'După transcriere, copilul intră în evidențele românești și poate merge mai departe spre primul pașaport sau primul buletin, în funcție de traseul ales.',
  },
  {
    question: 'Trebuie să fiu prezent la consulat sau poate merge un mandatar?',
    answer:
      'În practică, regula exactă trebuie confirmată cu consulatul tău, pentru că pot exista diferențe de aplicare sau de cerințe suplimentare.',
  },
]

const howToSteps = [
  {
    name: 'Obții documentul german al copilului',
    text: 'Ideal Formule A, pentru că simplifică mult dosarul. Dacă situația cere Geburtsurkunde, pregătești și apostila plus traducerea.',
  },
  {
    name: 'Pregătești documentele părinților',
    text: 'Aici intră actele de identitate și, în funcție de consulat, certificatele de naștere sau de căsătorie.',
  },
  {
    name: 'Faci programarea pe econsulat',
    text: 'Selectezi serviciul corect de stare civilă și încarci documentele cerute.',
  },
  {
    name: 'Te prezinți cu originalele',
    text: 'Cererea se depune la consulat, iar transcrierea este gratuită.',
  },
  {
    name: 'Ridici certificatul și continui pe traseul următor',
    text: 'După transcriere poți merge spre pașaport sau spre primul buletin al copilului.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/transcriere-certificat-nastere-germania#article',
  headline: 'Transcriere certificat de naștere Germania — Formule A, fără apostilă 2026',
  description:
    'Ghid pentru transcrierea certificatului de naștere german: Formule A vs Geburtsurkunde, diferențele per consulat și pașii după transcriere.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/transcriere-certificat-nastere-germania',
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
      name: 'Transcriere certificat naștere Germania',
      item: 'https://actero.ro/transcriere-certificat-nastere-germania',
    },
  ],
}

const sections = [
  {
    id: 'formule-a-vs-geburtsurkunde',
    title: 'Formule A sau Geburtsurkunde — decizia care îți economisește timp și bani',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Cea mai importantă alegere practică este documentul german pe care îl aduci la
          consulat. El decide dacă dosarul rămâne simplu sau se complică.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-1 font-semibold text-green-900">Formule A — recomandat</p>
            <p className="mb-2 text-xs font-medium text-green-700">
              Extras multilingv de naștere
            </p>
            <ul className="space-y-1 text-sm text-green-800">
              <li>Fără apostilă</li>
              <li>Fără traducere autorizată</li>
              <li>Mai simplu și mai ieftin</li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 font-semibold text-gray-900">Geburtsurkunde — alternativă</p>
            <p className="mb-2 text-xs font-medium text-gray-600">Certificat standard german</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>Necesită apostilă</li>
              <li>Necesită traducere autorizată</li>
              <li>Înseamnă mai mult timp și cost</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border border-red-200 bg-red-50 p-3">
          <p className="text-sm text-red-800">
            <strong>Excepția importantă Berlin:</strong> dacă există patronimic în actele
            românești ale unui părinte, situația poate ieși din varianta simplă cu Formule A.
          </p>
        </div>

        <p className="text-sm text-gray-600">
          Comparativul complet este aici:{' '}
          <Link
            href="/formule-a-vs-geburtsurkunde"
            className="font-medium text-blue-600 underline hover:text-blue-800"
          >
            Formule A vs Geburtsurkunde
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: 'tabel-consulate',
    title: 'Cerințele per consulat — ce diferă',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600">
          Diferențele dintre consulate contează în special la actele părinților și la modul
          de ridicare.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">
                  Consulat
                </th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">
                  Certificate naștere părinți
                </th>
                <th className="hidden border border-gray-200 p-2 text-left font-semibold text-gray-700 sm:table-cell">
                  Termen procesare
                </th>
                <th className="hidden border border-gray-200 p-2 text-left font-semibold text-gray-700 sm:table-cell">
                  Ridicare
                </th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">
                  Poștă
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  consulat: 'Bonn',
                  cerinta: 'Necesare doar în anumite situații',
                  termen: '7–30 zile',
                  ridicare: 'Program dedicat',
                  posta: 'Nu',
                  highlight: false,
                },
                {
                  consulat: 'München',
                  cerinta: 'Obligatorii dacă ambii părinți sunt români',
                  termen: 'Cazuri simple pot merge foarte repede',
                  ridicare: 'Program dedicat',
                  posta: 'Nu',
                  highlight: false,
                },
                {
                  consulat: 'Stuttgart',
                  cerinta: 'Necesare în situații specifice',
                  termen: 'Nepublicat clar',
                  ridicare: 'Program dedicat',
                  posta: 'Da',
                  highlight: false,
                },
                {
                  consulat: 'Berlin',
                  cerinta: 'Obligatorii fără excepție',
                  termen: 'Nepublicat clar',
                  ridicare: 'Program dedicat',
                  posta: 'Nu',
                  highlight: true,
                },
              ].map(({ consulat, cerinta, termen, ridicare, posta, highlight }) => (
                <tr key={consulat} className={highlight ? 'bg-amber-50' : 'bg-white even:bg-gray-50'}>
                  <td className="border border-gray-200 p-2 font-semibold text-gray-800">
                    {consulat}
                  </td>
                  <td className="border border-gray-200 p-2 text-xs text-gray-700">{cerinta}</td>
                  <td className="hidden border border-gray-200 p-2 text-xs text-gray-600 sm:table-cell">
                    {termen}
                  </td>
                  <td className="hidden border border-gray-200 p-2 text-xs text-gray-600 sm:table-cell">
                    {ridicare}
                  </td>
                  <td className="border border-gray-200 p-2 text-xs text-gray-600">{posta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: 'documente-complete',
    title: 'Lista completă de documente la consulat',
    content: (
      <div className="space-y-3">
        <div className="space-y-2">
          {[
            {
              req: true,
              doc: 'Documentul german al copilului',
              detaliu:
                'Ideal Formule A. În alte situații, Geburtsurkunde cu apostilă și traducere.',
            },
            {
              req: true,
              doc: 'Actele de identitate ale părinților',
              detaliu: 'Pașapoarte sau cărți de identitate valabile.',
            },
            {
              req: false,
              doc: 'Certificatele de naștere românești ale părinților',
              label: 'depinde de consulat',
              detaliu: 'Aici apar diferențele practice de la un consulat la altul.',
            },
            {
              req: false,
              doc: 'Certificatul de căsătorie românesc',
              label: 'dacă e cazul',
              detaliu: 'Poate fi util pentru dovada situației părinților.',
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

        <div className="rounded-lg border border-green-100 bg-green-50 p-3">
          <p className="text-xs text-green-800">
            Transcrierea este gratuită la toate consulatele.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'dupa-transcriere',
    title: 'Ce urmează după transcriere — pașaport sau buletin',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          După transcriere, copilul intră în evidențele românești și poți continua spre primul
          document de identitate.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="mb-1 font-semibold text-blue-900">Varianta pașaport — primul pașaport</p>
            <p className="mb-2 text-sm text-blue-800">
              Fluxul consular pentru pașaportul copilului după transcriere.
            </p>
            <Link
              href="/primul-pasaport-copil-germania"
              className="text-xs font-medium text-blue-700 underline hover:text-blue-900"
            >
              Ghid primul pașaport copil →
            </Link>
          </div>

          <div className="rounded-xl border border-purple-200 bg-purple-50 p-4">
            <p className="mb-1 font-semibold text-purple-900">Varianta buletin — primul buletin</p>
            <p className="mb-2 text-sm text-purple-800">
              Fluxul pentru primul buletin al copilului în România.
            </p>
            <Link
              href="/primul-buletin-copil-nascut-in-germania"
              className="text-xs font-medium text-purple-700 underline hover:text-purple-900"
            >
              Ghid primul buletin copil →
            </Link>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'greseli',
    title: 'Greșeli frecvente la transcrierea nașterii',
    content: (
      <div className="space-y-2">
        {[
          {
            gresit: 'Alegi documentul german greșit și te trezești cu apostilă și traducere',
            corect: 'Verifici din timp dacă poți merge pe Formule A.',
          },
          {
            gresit: 'Ignori excepția Berlin cu patronimic',
            corect: 'Verifici dacă situația ta intră în această excepție înainte de programare.',
          },
          {
            gresit: 'Crezi că după transcriere copilul primește automat pașaport sau buletin',
            corect: 'După transcriere urmează încă un pas separat pentru documentul de identitate.',
          },
          {
            gresit: 'Încerci să sari direct la pașaport fără transcriere',
            corect: 'Transcrierea este blocajul obligatoriu înainte de emiterea documentelor copilului.',
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
    title: 'Pagini conexe',
    content: (
      <div className="space-y-2">
        {[
          {
            text: 'Comparativ complet Formule A vs Geburtsurkunde',
            href: '/formule-a-vs-geburtsurkunde',
            label: 'Formule A vs Geburtsurkunde →',
          },
          {
            text: 'Tot traseul complet pentru copilul fără acte românești',
            href: '/acte-copil-nascut-in-germania',
            label: 'Ghid acte copil Germania →',
          },
          {
            text: 'Primul pașaport al copilului după transcriere',
            href: '/primul-pasaport-copil-germania',
            label: 'Ghid primul pașaport copil →',
          },
          {
            text: 'Primul buletin al copilului după transcriere',
            href: '/primul-buletin-copil-nascut-in-germania',
            label: 'Ghid primul buletin copil →',
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

export default function TranscriereCertificatNasterePage() {
  return (
    <LlmOptimizedPage
      lpSlug="transcriere-certificat-nastere-germania"
      lpTopic="copil"
      h1="Transcriere certificat de naștere Germania — Formule A, fără apostilă"
      intro="Dacă un copil s-a născut în Germania și are nevoie de acte românești, transcrierea certificatului de naștere este pasul obligatoriu de început. Procedura este gratuită, dar alegerea documentului german corect îți poate economisi timp, bani și multă frustrare."
      tldr="Transcrierea este gratuită. În majoritatea cazurilor, Formule A este varianta simplă, fără apostilă și fără traducere. După transcriere, copilul poate merge spre primul pașaport sau primul buletin."
      ctaHref="/formule-a-vs-geburtsurkunde"
      ctaLabel="Vezi mai întâi ce document german trebuie să obții →"
      updatedAt="aprilie 2026"
      sourceNote="Consulatele României din Germania și regulile practice pentru transcriere"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu e clar dacă problema ta este încă transcrierea sau deja pașaportul / buletinul copilului?"
      finalCtaText="Începe cu comparația Formule A vs Geburtsurkunde, apoi continuă spre primul pașaport sau primul buletin în funcție de ce vrei să rezolvi după transcriere."
    />
  )
}
