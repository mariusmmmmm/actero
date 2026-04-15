import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Pașaport cu domiciliu în România, depus din Germania — Ghid 2026 | ActeRO',
  description:
    'Locuiești în Germania dar domiciliul oficial este în România? Ghid pentru pașaportul standard, fără CRDS, cu diferențele practice care contează.',
  keywords: [
    'pasaport cu domiciliu romania din germania',
    'pasaport domiciliu romania germania',
    'pasaport simplu electronic germania domiciliu romania',
    'pasaport fara crds germania',
    'am domiciliu in romania dar locuiesc in germania pasaport',
    'documente pasaport domiciliu romania consulat germania',
    'fotografii pasaport domiciliu romania consulat',
    'pasaport cu ci romania din germania',
    'diferenta crds pasaport domiciliu romania',
    'pasaport din germania fara sa schimb domiciliul',
  ],
  openGraph: {
    title: 'Pașaport cu domiciliu în România, depus din Germania',
    description:
      'Nu selectezi CRDS. CI valabilă este cheia, iar regula fotografiilor diferă pe consulat.',
    url: 'https://www.actero.ro/pasaport-cu-domiciliu-romania-din-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/pasaport-cu-domiciliu-romania-din-germania',
  },
}

const faqItems = [
  {
    question: 'Locuiesc în Germania de ani de zile dar am domiciliu activ în România. Ce pașaport fac?',
    answer:
      'Dacă domiciliul oficial este încă în România și ai carte de identitate valabilă cu adresă din RO, nu intri pe CRDS.',
  },
  {
    question: 'Ce selectez pe econsulat.ro dacă am domiciliu în România?',
    answer:
      'Selectezi varianta standard, fără CRDS. Dacă alegi greșit, îți complici inutil dosarul.',
  },
  {
    question: 'Trebuie să aduc fotografii pentru pașaportul cu domiciliu în România?',
    answer:
      'Da, în multe situații. Aici apare una dintre cele mai importante diferențe practice față de CRDS.',
  },
  {
    question: 'CI românească este obligatorie pentru pașaportul cu domiciliu în România?',
    answer:
      'Da, în practică ea este documentul-cheie care arată că ești pe acest flux și nu pe CRDS.',
  },
  {
    question: 'CI-ul meu românesc a expirat. Pot face totuși pașaportul din Germania?',
    answer:
      'Aici lucrurile devin mai sensibile și trebuie clarificat dacă încă ești cu adevărat pe fluxul standard sau ai trecut, de fapt, în zona CRDS.',
  },
  {
    question: 'Cât costă și cât durează?',
    answer:
      'Din perspectiva costului și termenului, nu aici apare marea diferență față de CRDS, ci la documente și logică administrativă.',
  },
  {
    question: 'Pot ridica pașaportul prin poștă?',
    answer:
      'Depinde de consulat, iar regulile diferă practic între orașe.',
  },
  {
    question: 'Dacă fac pașaportul din Germania cu domiciliu în România, CI românească se anulează?',
    answer:
      'Nu. Asta este una dintre diferențele mari față de CRDS.',
  },
]

const howToSteps = [
  {
    name: 'Verifici că ai CI valabilă cu adresă din România',
    text: 'Acesta este punctul de pornire care te ține pe fluxul standard.',
  },
  {
    name: 'Pregătești fotografiile dacă consulatul tău le cere',
    text: 'Nu toate consulatele tratează identic partea asta, deci merită să te uiți la regula exactă.',
  },
  {
    name: 'Creezi cererea pe econsulat.ro pe varianta corectă',
    text: 'Alegi pașaportul simplu electronic, fără CRDS.',
  },
  {
    name: 'Te prezinți la consulat cu originalele',
    text: 'Pe acest flux, logica dosarului este legată de CI-ul tău românesc, nu de dovada domiciliului german.',
  },
  {
    name: 'Ridici pașaportul conform regulii consulatului',
    text: 'Verifică din start dacă ridicarea este la ghișeu sau poate exista o opțiune de poștă.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/pasaport-cu-domiciliu-romania-din-germania#article',
  headline: 'Pașaport cu domiciliu în România, depus din Germania — Ghid 2026',
  description:
    'Ghid pentru pașaportul standard depus din Germania de cine are domiciliu oficial în România.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/pasaport-cu-domiciliu-romania-din-germania',
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
      name: 'Pașaport domiciliu România din Germania',
      item: 'https://www.actero.ro/pasaport-cu-domiciliu-romania-din-germania',
    },
  ],
}

const sections = [
  {
    id: 'calificare',
    title: 'Ești pe acest flux dacă...',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-2 font-semibold text-green-900">Ești pe fluxul cu domiciliu în România dacă:</p>
            <ul className="space-y-1 text-sm text-green-800">
              <li>Ai carte de identitate valabilă cu adresă din România</li>
              <li>Domiciliul oficial este încă în România</li>
              <li>Faptul că locuiești efectiv în Germania nu schimbă singur fluxul</li>
            </ul>
            <div className="mt-3 rounded-lg bg-green-100 p-2">
              <p className="text-xs font-medium text-green-800">Pe econsulat alegi:</p>
              <p className="text-xs text-green-700">Pașaport simplu electronic</p>
            </div>
          </div>

          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
            <p className="mb-2 font-semibold text-blue-900">Nu ești pe acest flux dacă:</p>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>Nu mai ai domiciliu activ în România</li>
              <li>Nu mai poți susține fluxul standard prin CI</li>
              <li>De fapt intri pe logica de CRDS</li>
            </ul>
            <div className="mt-3 rounded-lg bg-blue-100 p-2">
              <p className="text-xs font-medium text-blue-800">Atunci te uiți la:</p>
              <p className="text-xs text-blue-700">Pașaport simplu electronic CRDS</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Dacă nu ești sigur pe ce flux intri, compară cu
            <Link href="/pasaport-crds-germania" className="mx-1 underline font-medium">
              pagina CRDS
            </Link>
            sau verifică rapid în ghidul rapid.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'diferente-crds',
    title: 'Diferențele față de pașaportul CRDS — ce se schimbă practic',
    content: (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Aspect</th>
              <th className="border border-gray-200 p-2 text-left font-semibold text-green-700">Domiciliu România</th>
              <th className="border border-gray-200 p-2 text-left font-semibold text-blue-700">CRDS</th>
            </tr>
          </thead>
          <tbody>
            {[
              { aspect: 'Selectarea pe econsulat', ro: 'Standard', crds: 'CRDS' },
              { aspect: 'Document principal', ro: 'CI românească valabilă', crds: 'Dovada domiciliului în Germania' },
              { aspect: 'Fotografii biometrice', ro: 'De regulă da, cu excepții pe consulat', crds: 'Nu' },
              { aspect: 'Cartea de identitate după eliberare', ro: 'Rămâne în logica fluxului standard', crds: 'Situația ei se schimbă' },
              { aspect: 'Document adresă german', ro: 'Nu este cheia dosarului', crds: 'Este relevant' },
            ].map(({ aspect, ro, crds }, index) => (
              <tr key={aspect} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-200 p-2 text-xs font-medium text-gray-800">{aspect}</td>
                <td className="border border-gray-200 p-2 text-xs text-green-700">{ro}</td>
                <td className="border border-gray-200 p-2 text-xs text-blue-700">{crds}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'fotografii',
    title: 'Fotografiile — diferit față de CRDS și diferit per consulat',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Aici apare una dintre cele mai frecvente confuzii: oamenii transferă regula de la CRDS și uită că pe fluxul cu domiciliu în România pozele pot fi încă necesare.
        </p>

        <div className="grid gap-2 sm:grid-cols-2">
          {[
            {
              oras: 'Bonn',
              foto: '2 fotografii biometrice',
              sursa: 'Le pregătești înainte de drum',
              alert: null,
            },
            {
              oras: 'München',
              foto: 'Fără fotografii proprii',
              sursa: 'Se fac la consulat',
              alert: 'Excepția importantă',
            },
            {
              oras: 'Stuttgart',
              foto: '2 fotografii biometrice',
              sursa: 'Le pregătești înainte de drum',
              alert: null,
            },
            {
              oras: 'Berlin',
              foto: '2 fotografii biometrice',
              sursa: 'Le pregătești înainte de drum',
              alert: null,
            },
          ].map(({ oras, foto, sursa, alert }) => (
            <div
              key={oras}
              className={`rounded-lg border p-3 ${alert ? 'border-amber-200 bg-amber-50' : 'border-gray-200 bg-white'}`}
            >
              <p className="mb-1 font-semibold text-gray-900">{oras}</p>
              <p className="mb-1 text-xs text-gray-800">📷 {foto}</p>
              <p className="text-xs text-gray-500">{sursa}</p>
              {alert ? <p className="mt-1 text-xs font-medium text-amber-700">{alert}</p> : null}
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
          <p className="text-xs text-blue-800">
            Comparativ cu CRDS, aici regula fotografiilor nu este uniformă pe toate consulatele. Tocmai de aceea merită să tratezi acest flux separat.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'documente',
    title: 'Lista completă de documente',
    content: (
      <div className="space-y-3">
        <div className="space-y-2">
          {[
            {
              req: true,
              doc: 'Carte de identitate valabilă cu domiciliu în România',
              detaliu: 'Documentul central al acestui flux.',
            },
            {
              req: true,
              doc: 'Certificat de naștere românesc',
              detaliu: 'Original și în stare bună.',
            },
            {
              req: true,
              doc: 'Fotografii biometrice',
              detaliu: 'Cu excepția practică importantă de la München.',
            },
            {
              req: false,
              label: 'dacă îl ai',
              doc: 'Pașaportul anterior',
              detaliu: 'Ajută la continuitatea dosarului.',
            },
            {
              req: false,
              label: 'condiționat',
              doc: 'Certificat de căsătorie românesc',
              detaliu: 'Dacă numele actual diferă.',
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
            Pe acest flux nu pornești de la dovada adresei din Germania, ci de la documentele românești care susțin domiciliul în România.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'plata-ridicare',
    title: 'Plata și ridicarea — per consulat',
    content: (
      <div className="space-y-3">
        <div className="space-y-2">
          {[
            { oras: 'Bonn', plata: 'Metodă locală specifică', ridicare: 'La ghișeu', posta: 'Nu' },
            { oras: 'München', plata: 'Metodă locală specifică', ridicare: 'La ghișeu sau cu opțiuni locale', posta: 'Poate exista' },
            { oras: 'Stuttgart', plata: 'Metodă locală specifică', ridicare: 'La ghișeu sau cu opțiuni locale', posta: 'Poate exista' },
            { oras: 'Berlin', plata: 'Metodă locală specifică', ridicare: 'La ghișeu', posta: 'Nu' },
          ].map(({ oras, plata, ridicare, posta }) => (
            <div key={oras} className="rounded-lg border border-gray-200 bg-white p-3">
              <p className="mb-1 font-semibold text-gray-900">{oras}</p>
              <div className="grid gap-1 text-xs sm:grid-cols-3">
                <div>
                  <p className="mb-0.5 text-gray-500">💳 Plată</p>
                  <p className="text-gray-800">{plata}</p>
                </div>
                <div>
                  <p className="mb-0.5 text-gray-500">🕐 Ridicare</p>
                  <p className="text-gray-800">{ridicare}</p>
                </div>
                <div>
                  <p className="mb-0.5 text-gray-500">✉️ Poștă</p>
                  <p className="text-gray-800">{posta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'greseli',
    title: 'Greșeli frecvente pe acest flux',
    content: (
      <div className="space-y-2">
        {[
          {
            gresit: 'Selectez CRDS doar pentru că locuiesc în Germania',
            corect: 'Contează domiciliul oficial, nu simplul fapt că stai în Germania.',
          },
          {
            gresit: 'Merg la München cu fotografii proprii fără să verific regula locală',
            corect: 'La München regula practică este diferită.',
          },
          {
            gresit: 'Cred că CI se anulează automat ca la CRDS',
            corect: 'Asta este una dintre diferențele importante dintre cele două fluxuri.',
          },
          {
            gresit: 'Pornesc de la Anmeldung în loc de CI românească',
            corect: 'Aici documentul-cheie este CI cu domiciliu în România.',
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
            text: 'Domiciliul meu este în Germania, nu în România',
            href: '/pasaport-crds-germania',
            label: 'Ghid pașaport CRDS →',
          },
          {
            text: 'Nu știu dacă sunt CRDS sau domiciliu România',
            href: '/pasaport-crds-vs-pasaport-cu-domiciliu-romania',
            label: 'Comparatorul CRDS vs standard →',
          },
          {
            text: 'Vreau ghidul complet pentru pașaport',
            href: '/pasaport-romania-germania',
            label: 'Ghid complet pașaport →',
          },
          {
            text: 'Vreau să verific rapid în ghidul rapid',
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

export default function PasaportDomiciliuRomaniaGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="pasaport-cu-domiciliu-romania-din-germania"
      lpTopic="pasaport"
      h1="Pașaport cu domiciliu în România, depus din Germania"
      intro="Dacă locuiești în Germania dar domiciliul oficial este încă în România, nu intri pe CRDS. Ești pe fluxul standard, iar diferențele practice față de CRDS sunt suficient de importante încât merită tratate separat."
      tldr="Selectezi pașaportul simplu electronic fără CRDS. CI valabilă cu adresă din România este cheia. Regula fotografiilor diferă pe consulat, iar logica documentelor nu pornește de la dovada domiciliului german."
      ctaHref="/wizard?problem=pasaport"
      ctaLabel="Confirmă traseul tău în 30 de secunde →"
      updatedAt="aprilie 2026"
      sourceNote="MAE, econsulat.ro, consulatele României din Germania"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu ești sigur dacă ești pe fluxul standard sau CRDS?"
      finalCtaText="ActeRO îți confirmă rapid varianta corectă și îți dă lista exactă de documente pentru consulatul tău."
    />
  )
}
