import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Buletin expirat cu domiciliu activ în România — Cel mai simplu caz | ActeRO',
  description:
    'Buletin expirat și domiciliu activ în România: cel mai simplu traseu. Fără extras CF, CEI la orice SPCLEP. Prezență fizică obligatorie, fotografii nu. Ghid 2026.',
  keywords: [
    'buletin expirat cu domiciliu in romania',
    'buletin expirat domiciliu romania din germania',
    'reinnoire buletin cu domiciliu romania din germania',
    'spclep domiciliu activ buletin expirat',
    'cei cis domiciliu activ romania',
    'buletin expirat romani germania domiciliu romania',
    'orice spclep buletin domiciliu activ',
    'prezenta fizica buletin domiciliu romania 2025',
    'cel mai simplu caz buletin germania',
    'buletin expirat domiciliu ci valabila romania',
  ],
  openGraph: {
    title: 'Buletin expirat cu domiciliu activ în România — Cel mai simplu caz',
    description:
      'Fără extras CF. CEI la orice SPCLEP. Fotografii nu. Cel mai simplu traseu pentru buletin din Germania.',
    url: 'https://www.actero.ro/buletin-expirat-cu-domiciliu-romania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/buletin-expirat-cu-domiciliu-romania',
  },
}

const faqItems = [
  {
    question: 'Ce avantaj îmi dă faptul că am domiciliu activ în România?',
    answer:
      'Principalul avantaj este că nu ai nevoie de extras de carte funciară. Adresa ta este deja vizibilă în sistemele MAI prin domiciliu, iar documentele rămân minime: buletinul expirat și certificatul de naștere.',
  },
  {
    question: 'La ce SPCLEP merg dacă am domiciliu activ?',
    answer:
      'La SPCLEP-ul din sectorul sau orașul unde ești înregistrat cu domiciliul. Dacă alegi CEI, din august 2025 poți merge și la alte SPCLEP-uri din România, nu doar la cel de domiciliu.',
  },
  {
    question: 'Trebuie să aduc extras de carte funciară?',
    answer:
      'Nu. Extrasul CF este relevant în situațiile fără domiciliu activ sau când adresa nu poate fi confirmată din evidențe. Cu domiciliu activ în România, în mod normal nu ai nevoie de el.',
  },
  {
    question: 'Pot alege CEI sau CIS?',
    answer:
      'Da. CEI este mai potrivită dacă locuiești în Germania, pentru că este valabilă în UE și are termen mai scurt. CIS este mai ieftină, dar nu este document de călătorie și implică mai multe limitări.',
  },
  {
    question: 'Trebuie să aduc fotografii la SPCLEP?',
    answer:
      'Nu. Fotografia și biometria se preiau la ghișeul SPCLEP, deci nu ai nevoie de poze proprii.',
  },
  {
    question: 'Pot ridica buletinul prin procură?',
    answer:
      'Pentru CEI, ridicarea este în practică personală. Pentru CIS, ridicarea prin procură specială este posibilă, dacă SPCLEP-ul o acceptă în forma cerută.',
  },
  {
    question: 'Unde plătesc taxa pentru buletin?',
    answer:
      'Taxa se plătește de obicei la CEC Bank sau la un terminal SelfPay, nu la casieria SPCLEP. Merită să verifici regula exactă a serviciului unde mergi.',
  },
  {
    question: 'Buletinul se poate face la consulatul din Germania?',
    answer:
      'Nu. Buletinul necesită prezență fizică în România pentru biometrie și nu se emite la consulat. Nicio procură nu înlocuiește prezentarea la depunere.',
  },
]

const howToSteps = [
  {
    name: 'Alegi între CEI și CIS',
    text: 'CEI este varianta practică pentru cine locuiește în Germania. CIS are cost mai mic, dar nu este valabilă pentru călătorii în UE.',
  },
  {
    name: 'Pregătești documentele, care sunt puține',
    text: 'În mod obișnuit aduci buletinul expirat, certificatul de naștere și, dacă este cazul, certificatul de căsătorie.',
  },
  {
    name: 'Planifici deplasarea în România',
    text: 'Verifici la ce SPCLEP mergi: cel de domiciliu sau, pentru CEI, un alt SPCLEP convenabil.',
  },
  {
    name: 'Plătești taxa și te prezinți la SPCLEP',
    text: 'La ghișeu se fac fotografia, amprentele și semnătura. Nu aduci poze proprii.',
  },
  {
    name: 'Ridici noul act',
    text: 'Ridicarea diferă între CEI și CIS, iar pentru CEI trebuie să iei în calcul prezentarea personală.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/buletin-expirat-cu-domiciliu-romania#article',
  headline: 'Buletin expirat cu domiciliu activ în România — Cel mai simplu caz 2026',
  description:
    'Ghid leaf pentru buletinul expirat cu domiciliu activ în România: fără extras CF, CEI la orice SPCLEP, fotografii nu, prezență fizică obligatorie.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/buletin-expirat-cu-domiciliu-romania',
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
      name: 'Buletin România Germania',
      item: 'https://www.actero.ro/buletin-romania-germania',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Buletin expirat domiciliu România',
      item: 'https://www.actero.ro/buletin-expirat-cu-domiciliu-romania',
    },
  ],
}

const sections = [
  {
    id: 'avantaj-domiciliu',
    title: 'Ce simplifică domiciliul activ — față de cazul fără domiciliu',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Dacă ai domiciliu activ în România, ești pe cel mai simplu traseu din seria de buletin. Domiciliul activ elimină un document important și reduce complicațiile.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-2 font-semibold text-green-900">Cu domiciliu activ — ce nu mai trebuie</p>
            <ul className="space-y-1 text-sm text-green-800">
              <li>Fără extras de carte funciară</li>
              <li>Fără dovadă suplimentară de adresă</li>
              <li>Fără căutări inutile despre ce adresă mai figurează în sistem</li>
            </ul>
            <p className="mt-2 text-xs text-green-700">
              SPCLEP-ul îți poate verifica adresa prin domiciliul deja activ.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="mb-2 font-semibold text-gray-800">Dacă nu ai domiciliu activ</p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Se poate cere extras CF recent</li>
              <li>Traseul către SPCLEP poate deveni mai restrictiv</li>
              <li>Trebuie verificată separat situația adresei din România</li>
            </ul>
            <p className="mt-2 text-xs text-gray-500">
              <Link href="/buletin-expirat-fara-domiciliu-romania" className="text-blue-600 underline hover:text-blue-800">
                Vezi ghidul pentru varianta fără domiciliu activ →
              </Link>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'nu-la-consulat',
    title: 'Buletinul nu se face la consulat — indiferent de situație',
    content: (
      <div className="space-y-2 rounded-xl border border-red-200 bg-red-50 p-4">
        <p className="font-semibold text-red-900">Consulatul din Germania nu eliberează buletine</p>
        <p className="text-sm text-red-800">
          Indiferent dacă ai domiciliu activ sau nu, buletinul necesită prezență fizică la SPCLEP în România. Biometria, fotografia, amprentele și semnătura se fac exclusiv la ghișeu.
        </p>
      </div>
    ),
  },
  {
    id: 'cei-cis',
    title: 'CEI sau CIS — decizia practică',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="mb-1 font-semibold text-blue-900">CEI — varianta recomandată</p>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>Valabilă pentru călătorii în UE</li>
              <li>Mai flexibilă la alegerea SPCLEP-ului</li>
              <li>Timp de emitere mai scurt</li>
              <li>Ridicare personală</li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 font-semibold text-gray-800">CIS</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>Nu este document de călătorie în UE</li>
              <li>Este mai ieftină</li>
              <li>Este mai restrictivă ca folosire</li>
              <li>Poate permite ridicare prin procură, în funcție de procedură</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Dacă locuiești în Germania și te deplasezi în UE, CEI este de regulă alegerea logică. CIS nu îți rezolvă partea de călătorie.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'documente',
    title: 'Documentele necesare la SPCLEP',
    content: (
      <div className="space-y-3">
        <div className="space-y-2">
          {[
            {
              req: true,
              doc: 'Buletinul expirat',
              detaliu: 'Original, dacă îl mai ai.',
            },
            {
              req: true,
              doc: 'Certificat de naștere românesc',
              detaliu:
                'Original. Dacă este plastifiat, rupt sau deteriorat, trebuie înlocuit înainte de deplasare.',
            },
            {
              req: false,
              label: 'condiționat',
              doc: 'Certificat de căsătorie românesc',
              detaliu: 'Doar dacă ți-ai schimbat numele prin căsătorie.',
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

        <div className="space-y-1 rounded-lg border border-green-100 bg-green-50 p-3">
          <p className="text-xs font-semibold text-green-800">Nu ai nevoie de extras CF</p>
          <p className="text-xs text-green-700">
            Domiciliul activ elimină nevoia de extras de carte funciară și de alte dovezi de adresă din Germania.
          </p>
          <p className="text-xs text-green-700">
            Nu ai nevoie de Anmeldung, Aufenthaltstitel, apostilă, traduceri sau fotografii proprii.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'spclep-unde',
    title: 'La ce SPCLEP mergi',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="mb-1 font-semibold text-blue-900">Dacă alegi CEI</p>
            <p className="text-sm text-blue-800">
              Poți avea mai multă flexibilitate și poți verifica dacă te poți prezenta la un SPCLEP mai convenabil, nu doar la cel de domiciliu.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 font-semibold text-gray-900">Dacă alegi CIS</p>
            <p className="text-sm text-gray-700">
              În practică, traseul rămâne legat de SPCLEP-ul de domiciliu. Verifică exact regula locală înainte de drum.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'plata-ridicare',
    title: 'Plata taxei și ridicarea',
    content: (
      <div className="space-y-3">
        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Taxa nu se plătește, de regulă, la casieria SPCLEP. Pregătește-te pentru plată la CEC Bank sau SelfPay și verifică exact practica locală.
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
            <p className="mb-1 text-sm font-semibold text-blue-900">CEI</p>
            <p className="text-xs text-blue-700">Cost mai mare, dar utilitate mai bună pentru cine locuiește în Germania</p>
            <p className="mt-1 text-xs text-blue-800">Ridicarea trebuie planificată ca prezență personală</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
            <p className="mb-1 text-sm font-semibold text-gray-900">CIS</p>
            <p className="text-xs text-gray-600">Cost mai mic, dar limitări de folosire</p>
            <p className="mt-1 text-xs text-gray-700">Ridicarea prin procură poate fi o opțiune</p>
          </div>
        </div>

        <p className="text-xs text-gray-600">
          Dacă vrei procură specială pentru ridicarea CIS, o poți pregăti separat la consulatul din Germania.
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
            gresit: 'Merg la consulatul din Germania să-mi fac buletinul',
            corect: 'Buletinul nu se face la consulat. Ai nevoie de prezentare la SPCLEP în România.',
          },
          {
            gresit: 'Aduc extras CF deși am domiciliu activ',
            corect: 'Cu domiciliu activ, extrasul CF este de obicei inutil.',
          },
          {
            gresit: 'Aleg CIS fără să țin cont că nu este valabilă în UE',
            corect: 'Dacă locuiești în Germania, CEI sau pașaportul sunt mult mai practice pentru deplasări.',
          },
          {
            gresit: 'Cred că taxa se plătește la ghișeul SPCLEP',
            corect: 'De multe ori, plata se face separat, la CEC Bank sau SelfPay.',
          },
          {
            gresit: 'Cred că pot ridica CEI prin procură',
            corect: 'Pentru CEI trebuie să planifici ridicarea personală.',
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
    title: 'Situația ta e diferită?',
    content: (
      <div className="space-y-2">
        {[
          {
            text: 'Nu mai am domiciliu activ în România',
            href: '/buletin-expirat-fara-domiciliu-romania',
            label: 'Ghid fără domiciliu activ →',
          },
          {
            text: 'Buletinul a fost pierdut sau furat',
            href: '/buletin-pierdut-furat-cu-domiciliu-romania',
            label: 'Ghid pierdut/furat cu domiciliu →',
          },
          {
            text: 'Vreau să înțeleg toate situațiile de buletin',
            href: '/buletin-romania-germania',
            label: 'Ghid complet buletin →',
          },
        ].map(({ text, href, label }) => (
          <div
            key={href + label}
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

export default function BuletinExpiratCuDomiciliuRomaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="buletin-expirat-cu-domiciliu-romania"
      lpTopic="buletin"
      h1="Buletin expirat cu domiciliu activ în România — cel mai simplu caz"
      intro="Dacă ai buletinul expirat și domiciliul activ în România, ești pe cel mai simplu traseu din seria de buletin. Nu ai nevoie de extras CF și nici de dovezi suplimentare de adresă. Ce nu se schimbă: trebuie să mergi în România."
      tldr="Domiciliul activ simplifică documentele. Pentru CEI ai traseu mai flexibil și utilitate mai bună în UE. Pentru CIS ai cost mai mic, dar limitări mai mari. Fotografii nu, biometria se face la SPCLEP."
      ctaHref="/cei-vs-cis-diaspora"
      ctaLabel="Compară mai întâi CEI cu CIS pentru diaspora →"
      updatedAt="aprilie 2026"
      sourceNote="MAI, hub.mai.gov.ro, carteadeidentitate.gov.ro"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi dacă blocajul tău este domiciliul, tipul de buletin sau faptul că actul e pierdut?"
      finalCtaText="Paginile conexe te mută direct pe cazul corect: fără domiciliu activ, pierdut/furat sau comparația CEI vs CIS."
    />
  )
}
