import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Pașaport expirat în Germania — Ce faci, ce aduci, cât costă 2026 | ActeRO',
  description:
    'Pașaport expirat în Germania: CRDS sau domiciliu România, documente, taxă 53€, termen 45 zile. Tabel per consulat cu plată, ridicare și poștă.',
  keywords: [
    'pasaport expirat germania',
    'reinnoire pasaport germania',
    'reinnoire pasaport consulat romania germania',
    'cat costa pasaport consulat romania germania',
    'ce documente pasaport expirat germania',
    'cat dureaza pasaport germania',
    'programare pasaport econsulat germania',
    'pasaport crds expirat germania',
    'ridicare pasaport consulat germania',
    '53 euro pasaport germany',
  ],
  openGraph: {
    title: 'Pașaport expirat în Germania — Ce faci, ce aduci, cât costă 2026',
    description:
      'CRDS sau domiciliu România? Documente, taxă 53€, 45 zile, tabel complet per consulat cu plată, ridicare și poștă.',
    url: 'https://actero.ro/pasaport-expirat-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/pasaport-expirat-germania',
  },
}

const faqItems = [
  {
    question: 'Cât costă reînnoirea pașaportului la consulat în Germania?',
    answer:
      'Taxa este 53€ la toate cele 4 consulate românești din Germania. Metoda de plată diferă: Bonn — EC-Karte, München — cash, Stuttgart — POS sau virament, Berlin — POS card debit sau virament.',
  },
  {
    question: 'Cât durează să primesc noul pașaport?',
    answer:
      'Termenul de procesare este de 45 de zile lucrătoare de la depunerea dosarului la consulat. La aceasta se adaugă timpul de așteptare pentru obținerea programării pe econsulat.ro.',
  },
  {
    question: 'Ce documente îmi trebuie pentru reînnoire dacă locuiesc în Germania?',
    answer:
      'Pentru fluxul CRDS ai nevoie, în principal, de pașaportul expirat, certificatul de naștere românesc, document de domiciliu în Germania și, dacă o ai, cartea de identitate românească. Dacă ai domiciliu în România, ai nevoie de cartea de identitate valabilă și de fotografii, cu excepțiile specifice per consulat.',
  },
  {
    question: 'Trebuie să aduc fotografii pentru pașaport?',
    answer:
      'Pentru pașaportul CRDS nu. Imaginea se preia biometric la ghișeu la toate cele 4 consulate. Pentru pașaportul cu domiciliu în România, în general aduci 2 fotografii biometrice, cu excepția München unde ele se fac la consulat.',
  },
  {
    question: 'Ce se întâmplă cu cartea de identitate la eliberarea pașaportului CRDS?',
    answer:
      'Dacă ai carte de identitate românească și primești pașaport CRDS, CI va fi anulată de consulat la ridicarea noului pașaport. Este un pas normal și obligatoriu.',
  },
  {
    question: 'Pot ridica pașaportul prin poștă?',
    answer:
      'Da, la München și Stuttgart există opțiunea de ridicare prin poștă. La Bonn și Berlin ridicarea se face la ghișeu, în programul de ridicare.',
  },
  {
    question: 'Trebuie să aduc pașaportul expirat cu mine?',
    answer:
      'Da. Pașaportul expirat se aduce la depunere. La ridicarea noului pașaport trebuie să aduci și pașaportul anterior dacă nu a fost deja anulat, pentru anulare.',
  },
  {
    question: 'Programările pe econsulat.ro sunt greu de găsit. Ce fac?',
    answer:
      'Programările apar pe măsură ce cererile sunt validate sau alte programări sunt anulate. Verifică periodic econsulat.ro. Programările sunt gratuite și nu merită să apelezi la intermediari.',
  },
]

const howToSteps = [
  {
    name: 'Stabilește dacă ești CRDS sau domiciliu România',
    text: 'Dacă nu mai ai adresă activă în România, ești pe fluxul CRDS. Dacă ai carte de identitate valabilă cu adresă din România, ești pe fluxul standard.',
  },
  {
    name: 'Scanează documentele și creează cererea pe econsulat.ro',
    text: 'Selectezi tipul corect de pașaport și încarci documentele scanate în format JPG sau PDF.',
  },
  {
    name: 'Obții programarea după validarea cererii',
    text: 'Cererea trebuie mai întâi validată. Abia apoi poți alege un slot de programare.',
  },
  {
    name: 'Te prezinți la consulat cu originalele',
    text: 'Aduci toate documentele originale și câte o copie simplă din fiecare. Plătești 53€ conform regulii consulatului tău.',
  },
  {
    name: 'Ridici pașaportul după termenul de procesare',
    text: 'Verifici statusul pe site-ul consulatului. Ridicarea se face fără programare suplimentară, iar la unele consulate există și opțiunea de poștă.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/pasaport-expirat-germania#article',
  headline: 'Pașaport expirat în Germania — Ce faci, ce aduci, cât costă 2026',
  description:
    'Ghid pentru reînnoirea pașaportului expirat din Germania: CRDS vs domiciliu România, documente, 53€, 45 zile și diferențe per consulat.',
  datePublished: '2026-04-01',
  dateModified: '2026-04-01',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/pasaport-expirat-germania',
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
      name: 'Pașaport România Germania',
      item: 'https://actero.ro/pasaport-romania-germania',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Pașaport expirat Germania',
      item: 'https://actero.ro/pasaport-expirat-germania',
    },
  ],
}

const sections = [
  {
    id: 'crds-vs-standard',
    title: 'Primul pas — CRDS sau domiciliu România?',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Înainte de orice altceva, trebuie să știi pe ce flux intri. Răspunsul determină ce selectezi pe econsulat.ro, ce documente aduci și dacă ai nevoie de fotografii.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="mb-2 font-semibold text-blue-900">Ești pe CRDS dacă:</p>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>nu mai ai domiciliu activ în România</li>
              <li>nu ai carte de identitate valabilă cu adresă din România</li>
              <li>ai domiciliul oficial în Germania</li>
            </ul>
            <div className="mt-3 rounded-lg bg-blue-100 p-2">
              <p className="text-xs font-semibold text-blue-800">Pe econsulat.ro selectezi:</p>
              <p className="text-xs text-blue-700">
                Pașapoarte → Pașaport simplu electronic <strong>CRDS</strong>
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-2 font-semibold text-green-900">Ești pe domiciliu România dacă:</p>
            <ul className="space-y-1 text-sm text-green-800">
              <li>ai carte de identitate valabilă cu adresă din România</li>
              <li>domiciliul oficial rămâne în România</li>
            </ul>
            <div className="mt-3 rounded-lg bg-green-100 p-2">
              <p className="text-xs font-semibold text-green-800">Pe econsulat.ro selectezi:</p>
              <p className="text-xs text-green-700">
                Pașapoarte → Pașaport simplu electronic <strong>fără CRDS</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'documente',
    title: 'Documentele necesare',
    content: (
      <div className="space-y-4">
        <div>
          <p className="mb-2 font-semibold text-gray-900">Documente pentru CRDS</p>
          <div className="space-y-2">
            {[
              {
                doc: 'Pașaportul expirat',
                detaliu:
                  'Original. Dacă este pierdut sau furat, nu mai ești pe acest flux și trebuie tratat separat.',
                required: true,
              },
              {
                doc: 'Certificat de naștere românesc',
                detaliu:
                  'Original. Dacă este plastifiat sau deteriorat, trebuie înlocuit înainte de programare.',
                required: true,
              },
              {
                doc: 'Document de domiciliu în Germania',
                detaliu:
                  'Meldebescheinigung, Anmeldung sau Personalausweis german, emis în ultimii 5 ani.',
                required: true,
              },
              {
                doc: 'Cartea de identitate românească',
                detaliu:
                  'Dacă o ai, o aduci. Va fi anulată la eliberarea pașaportului CRDS.',
                required: false,
                label: 'dacă o ai',
              },
              {
                doc: 'Certificat de căsătorie românesc',
                detaliu:
                  'Doar dacă ți-ai schimbat numele prin căsătorie.',
                required: false,
                label: 'condiționat',
              },
            ].map(({ doc, detaliu, required, label }) => (
              <div key={doc} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-3">
                <span className="flex-shrink-0 text-lg">{required ? '✅' : '⚪'}</span>
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
          <div className="mt-2 rounded-lg border border-blue-100 bg-blue-50 p-3">
            <p className="text-xs text-blue-800">
              <strong>Fotografii:</strong> nu sunt necesare pentru CRDS. Imaginea se preia biometric la ghișeu.
            </p>
          </div>
        </div>

        <div>
          <p className="mb-2 font-semibold text-gray-900">Documente pentru domiciliu România</p>
          <div className="space-y-2">
            {[
              {
                doc: 'Carte de identitate valabilă cu domiciliu în România',
                detaliu: 'Este documentul principal pentru fluxul standard.',
                required: true,
              },
              {
                doc: 'Certificat de naștere românesc',
                detaliu: 'Original, în stare bună.',
                required: true,
              },
              {
                doc: '2 fotografii color, 3,5×4,5 cm',
                detaliu:
                  'În general obligatorii, cu excepția München unde fotografiile se fac la consulat.',
                required: true,
              },
              {
                doc: 'Pașaportul anterior expirat',
                detaliu: 'Dacă îl mai ai, îl aduci în original.',
                required: false,
                label: 'dacă îl ai',
              },
              {
                doc: 'Certificat de căsătorie românesc',
                detaliu: 'Doar dacă ți-ai schimbat numele.',
                required: false,
                label: 'condiționat',
              },
            ].map(({ doc, detaliu, required, label }) => (
              <div key={doc} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-3">
                <span className="flex-shrink-0 text-lg">{required ? '✅' : '⚪'}</span>
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
        </div>
      </div>
    ),
  },
  {
    id: 'consulate',
    title: 'Tabel per consulat — plată, ridicare, poștă',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600">
          Taxa este 53€ la toate consulatele. Diferă doar metoda de plată, programul de ridicare și opțiunea de poștă.
        </p>

        <div className="space-y-3">
          {[
            {
              oras: 'Bonn',
              land: 'NW, RP, SL, HE, HB, NI, HH, SH',
              adresa: 'Legionsweg 14, 53117 Bonn',
              plata: 'Exclusiv EC-Karte',
              ridicare: 'Luni–Joi 14:00–15:00',
              posta: 'Nu',
              nota: 'Programările pot fi mai rare',
            },
            {
              oras: 'München',
              land: 'Bavaria',
              adresa: 'Richard-Strauss-Strasse 149, 81679 München',
              plata: 'Exclusiv numerar (cash)',
              ridicare: 'Luni–Joi 14:00–16:00',
              posta: 'Da',
              nota: 'Pentru domiciliu România, fotografiile se fac la consulat',
            },
            {
              oras: 'Stuttgart',
              land: 'Baden-Württemberg',
              adresa: 'Hauptstätter Str. 70, 70178 Stuttgart',
              plata: 'POS sau virament bancar',
              ridicare: 'Luni–Vineri 10:00–14:00',
              posta: 'Da',
              nota: 'Intrarea este prin Gerberstr. 28',
            },
            {
              oras: 'Berlin',
              land: 'BE, BB, SN, ST, TH, MV',
              adresa: 'Dorotheenstrasse 62-66, 10117 Berlin',
              plata: 'POS (numai card debit) sau virament',
              ridicare: 'Luni–Vineri 13:00–14:00',
              posta: 'Nu',
              nota: null,
            },
          ].map(({ oras, land, adresa, plata, ridicare, posta, nota }) => (
            <div key={oras} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <p className="font-bold text-gray-900">{oras}</p>
                  <p className="text-xs text-gray-500">{land}</p>
                </div>
                <p className="hidden text-right text-xs text-gray-500 sm:block">{adresa}</p>
              </div>
              <div className="grid gap-1 text-xs sm:grid-cols-3">
                <div>
                  <p className="mb-0.5 font-semibold text-gray-600">Plată 53€</p>
                  <p className="text-gray-700">{plata}</p>
                </div>
                <div>
                  <p className="mb-0.5 font-semibold text-gray-600">Ridicare</p>
                  <p className="text-gray-700">{ridicare}</p>
                  <p className="mt-0.5 text-gray-500">Fără programare</p>
                </div>
                <div>
                  <p className="mb-0.5 font-semibold text-gray-600">Poștă</p>
                  <p className="text-gray-700">{posta}</p>
                </div>
              </div>
              {nota ? <p className="mt-2 rounded bg-amber-50 px-2 py-1 text-xs text-amber-700">{nota}</p> : null}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'econsulat',
    title: 'Cum funcționează programarea pe econsulat.ro',
    content: (
      <div className="space-y-3">
        <ol className="space-y-2">
          {[
            'Creezi un cont pe econsulat.ro.',
            'Selectezi tipul corect de pașaport.',
            'Completezi datele și încarci documentele scanate.',
            'Trimiți cererea și aștepți validarea.',
            'După validare, alegi un slot de programare.',
          ].map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-700">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-xs text-amber-800">
            Sloturile apar pe măsură ce cererile sunt validate sau anulate. Verifică periodic. Programările sunt gratuite.
          </p>
        </div>

        <p className="text-sm text-gray-600">
          Dacă blocajul tău este chiar programarea, nu dosarul, vezi și{' '}
          <Link
            href="/programare-econsulat-germania"
            className="font-medium text-blue-600 underline hover:text-blue-800"
          >
            ghidul complet pentru econsulat
          </Link>
          .
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
            gresit: 'Selectez tipul greșit de pașaport pe econsulat.ro',
            corect:
              'Dacă domiciliul tău este în Germania, intri pe CRDS. Dacă ai domiciliu activ în România, intri pe fluxul standard.',
          },
          {
            gresit: 'Aduc fotografii pentru pașaportul CRDS',
            corect:
              'Pentru CRDS, fotografiile nu sunt necesare. Pentru domiciliu România există reguli diferite, cu excepția München.',
          },
          {
            gresit: 'Aduc un certificat de naștere deteriorat',
            corect:
              'Certificatele plastifiate sau deteriorate pot fi refuzate. Merită înlocuite înainte de programare.',
          },
          {
            gresit: 'Ajung cu metoda de plată greșită la consulat',
            corect:
              'München acceptă cash, Bonn acceptă EC-Karte, Stuttgart și Berlin au reguli proprii de POS sau virament.',
          },
          {
            gresit: 'Nu aduc pașaportul expirat la depunere',
            corect:
              'Pașaportul expirat se aduce la depunere și, dacă este cazul, și la ridicare pentru anulare.',
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
    id: 'alte-situatii',
    title: 'Situația ta e diferită?',
    content: (
      <div className="space-y-2">
        {[
          {
            text: 'Pașaportul a fost pierdut sau furat',
            href: '/pasaport-pierdut-furat-germania',
            label: 'Ghid pierdut/furat →',
          },
          {
            text: 'Este primul tău pașaport',
            href: '/pasaport-crds-germania',
            label: 'Ghid primul pașaport CRDS →',
          },
          {
            text: 'Copilul tău nu are acte românești',
            href: '/acte-copil-nascut-in-germania',
            label: 'Ghid acte copil →',
          },
          {
            text: 'Ai nevoie urgent și nu poți aștepta',
            href: '/titlu-calatorie-urgenta-germania',
            label: 'Ghid titlu de călătorie urgent →',
          },
          {
            text: 'Nu înțelegi de ce nu apare programarea pe econsulat',
            href: '/programare-econsulat-germania',
            label: 'Ghid programare econsulat →',
          },
        ].map(({ text, href, label }) => (
          <div key={href + text} className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3">
            <p className="text-sm text-gray-700">{text}</p>
            <Link href={href} className="ml-3 flex-shrink-0 text-xs font-medium text-blue-600 underline hover:text-blue-800">
              {label}
            </Link>
          </div>
        ))}
      </div>
    ),
  },
]

export default function PasaportExpiratGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="pasaport-expirat-germania"
      lpTopic="pasaport"
      h1="Pașaport expirat în Germania — ce faci, ce aduci, cât costă"
      intro="Pașaportul expirat se reînnoiește la consulatul din Germania, fără deplasare în România. Dar înainte de econsulat.ro, un singur lucru schimbă tot traseul: dacă domiciliul tău oficial este în Germania sau în România."
      tldr="Taxă: 53€ la toate consulatele. Termen: 45 zile lucrătoare. CRDS: fără fotografii, cu document de domiciliu în Germania. Domiciliu România: în general cu 2 fotografii, cu excepția München. Programare obligatorie pe econsulat.ro."
      ctaHref="/programare-econsulat-germania"
      ctaLabel="Vezi mai întâi cum funcționează programarea pe econsulat →"
      updatedAt="aprilie 2026"
      sourceNote="MAE, econsulat.ro, consulatele României din Germania — date verificate live"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi dacă blocajul tău este dosarul, programarea sau urgența de a pleca?"
      finalCtaText="Dacă problema este programarea, continuă pe ghidul econsulat. Dacă situația s-a transformat în urgență reală, sari direct la titlul de călătorie urgent."
    />
  )
}
