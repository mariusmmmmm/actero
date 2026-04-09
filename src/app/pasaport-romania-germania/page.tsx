import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Pașaport românesc din Germania — Ghid complet 2026 | ActeRO',
  description:
    'CRDS sau domiciliu în România? Expirat, pierdut sau primul pașaport? Află exact ce traseu ți se aplică și ce documente pregătești.',
  keywords: [
    'pasaport romania germania',
    'consulat romania germania pasaport',
    'reinnoire pasaport germania',
    'pasaport crds germania',
    'pasaport expirat germania',
    'pasaport pierdut germania',
    'primul pasaport germania',
    'programare pasaport consulat germania',
    'documente pasaport consulat germania',
    'pasaport romanesc din germania',
  ],
  openGraph: {
    title: 'Pașaport românesc din Germania — Ghid complet 2026',
    description:
      'CRDS sau domiciliu în România? Expirat, pierdut sau primul pașaport? Traseul exact în funcție de situația ta.',
    url: 'https://actero.ro/pasaport-romania-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/pasaport-romania-germania',
  },
}

const faqItems = [
  {
    question: 'Ce este pașaportul CRDS și cum știu dacă îl am?',
    answer:
      'CRDS înseamnă că domiciliul tău oficial este înregistrat în Germania. Dacă nu mai ai domiciliu activ în România și locuiești în Germania cu Anmeldung, ești de regulă pe fluxul CRDS.',
  },
  {
    question: 'Am domiciliu în România, dar locuiesc în Germania. Ce pașaport îmi fac?',
    answer:
      'Dacă ai domiciliu activ în România și o carte de identitate cu adresă din RO, nu ești pe fluxul CRDS. Pe econsulat.ro selectezi pașaportul simplu electronic standard, fără CRDS.',
  },
  {
    question: 'Trebuie să aduc fotografii la consulat pentru pașaport?',
    answer:
      'Pentru pașaportul CRDS nu aduci fotografii — imaginea facială se preia biometric la ghișeu. Pentru pașaportul cu domiciliu în România, la München fotografiile se fac la consulat, iar la Bonn, Stuttgart și Berlin aduci 2 fotografii biometrice.',
  },
  {
    question: 'Cât costă pașaportul la consulatul din Germania?',
    answer:
      'Taxa este 53€ la toate cele patru consulate. Metoda de plată diferă: Bonn acceptă EC-Karte, München cash, Stuttgart POS sau virament, iar Berlin POS debit sau virament.',
  },
  {
    question: 'Cât durează să primesc noul pașaport?',
    answer:
      'Termenul oficial de procesare este de 45 de zile lucrătoare de la depunerea dosarului la consulat. La acesta se adaugă timpul de așteptare pentru programare.',
  },
  {
    question: 'Pașaportul meu a fost pierdut sau furat. Este diferit față de cel expirat?',
    answer:
      'Da. Pentru pierdere completezi declarația pe proprie răspundere la ghișeul consulatului. Pentru furt ai nevoie de adeverința poliției și, în funcție de consulat, de traducere autorizată sau legalizată.',
  },
  {
    question: 'Copilul meu s-a născut în Germania și nu are niciun act românesc. De unde încep?',
    answer:
      'Primul pas este transcrierea certificatului de naștere german. Abia după aceea poți continua cu primul pașaport al copilului.',
  },
  {
    question: 'Trebuie să am cartea de identitate românească pentru a-mi face pașaportul?',
    answer:
      'Nu este obligatorie, dar dacă o ai, chiar expirată, o aduci. La eliberarea noului pașaport CRDS, cartea de identitate va fi anulată automat.',
  },
]

const howToSteps = [
  {
    name: 'Stabilește dacă ești pe fluxul CRDS sau domiciliu România',
    text: 'Dacă nu mai ai adresă activă în România, ești pe fluxul CRDS. Dacă ai CI valabilă cu adresă din RO, ești pe fluxul standard.',
  },
  {
    name: 'Verifică situația pașaportului actual',
    text: 'Expirat sau deteriorat înseamnă reînnoire standard. Pierdut sau furat înseamnă traseu separat cu declarație sau adeverință de poliție.',
  },
  {
    name: 'Creează cererea pe econsulat.ro',
    text: 'Selectezi tipul corect de pașaport, încarci documentele scanate și aștepți validarea.',
  },
  {
    name: 'Obții programarea și pregătești documentele originale',
    text: 'După validare alegi slotul și vii cu originalele. Pentru CRDS nu ai nevoie de fotografii proprii.',
  },
  {
    name: 'Te prezinți la consulat și ridici pașaportul',
    text: 'Depui, plătești 53€, primești chitanța și apoi ridici pașaportul în programul de ridicare.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/pasaport-romania-germania#article',
  headline: 'Pașaport românesc din Germania — Ghid complet 2026',
  description:
    'Ghidul principal pentru toate situațiile de pașaport românesc din Germania: CRDS, domiciliu România, expirat, pierdut sau primul pașaport.',
  datePublished: '2026-04-06',
  dateModified: '2026-04-06',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/pasaport-romania-germania',
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
      name: 'Pașaport România Germania',
      item: 'https://actero.ro/pasaport-romania-germania',
    },
  ],
}

const sections = [
  {
    id: 'context',
    title: 'Prima decizie: CRDS sau domiciliu în România?',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Cel mai frecvent blocaj pe econsulat.ro este alegerea tipului greșit de cerere. Diferența
          dintre CRDS și pașaportul standard schimbă documentele, pașii și uneori chiar felul în
          care privești traseul complet.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="font-semibold text-blue-900 mb-2">Fluxul CRDS</p>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>Nu mai ai domiciliu activ în România</li>
              <li>Locuiești în Germania și dovedești adresa de acolo</li>
              <li>Poți avea un pașaport CRDS anterior</li>
              <li>Pentru acest flux nu aduci fotografii proprii</li>
            </ul>
          </div>

          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="font-semibold text-green-900 mb-2">Fluxul cu domiciliu în România</p>
            <ul className="space-y-1 text-sm text-green-800">
              <li>Ai carte de identitate cu adresă activă în România</li>
              <li>Domiciliul oficial este încă în România</li>
              <li>Selectezi pașaportul standard, fără CRDS</li>
              <li>La unele consulate aduci 2 fotografii biometrice</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Dacă nu ești sigur în ce categorie intri, ghidul rapid ActeRO îți confirmă traseul în 30
            de secunde.
          </p>
        </div>

        <p className="text-sm text-gray-600">
          Dacă vrei răspunsul direct înainte de ghidul rapid, pornește cu{' '}
          <Link
            href="/pasaport-crds-vs-pasaport-cu-domiciliu-romania"
            className="font-medium text-blue-600 underline hover:text-blue-800"
          >
            comparația CRDS vs domiciliu în România
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    id: 'situatii',
    title: 'Situația ta — ghidul potrivit',
    content: (
      <div className="space-y-2 overflow-x-auto">
        <p className="text-sm text-gray-600 mb-3">
          Găsește rândul care seamănă cel mai mult cu situația ta și pornește de acolo.
        </p>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-2 font-semibold text-gray-700 border border-gray-200">Situație</th>
              <th className="text-left p-2 font-semibold text-gray-700 border border-gray-200">Domiciliu</th>
              <th className="text-left p-2 font-semibold text-gray-700 border border-gray-200">Pagină recomandată</th>
              <th className="text-left p-2 font-semibold text-gray-700 border border-gray-200 hidden sm:table-cell">Blocaj frecvent</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                situatie: 'Pașaport expirat sau deteriorat',
                domiciliu: 'Germania (CRDS) sau România',
                ghid: '/pasaport-expirat-germania',
                label: 'Ghid pașaport expirat →',
                blocare: 'Alegerea greșită între CRDS și standard',
              },
              {
                situatie: 'Pașaport pierdut sau furat',
                domiciliu: 'Germania (CRDS) sau România',
                ghid: '/pasaport-pierdut-furat-germania',
                label: 'Ghid pașaport pierdut/furat →',
                blocare: 'Traducerea adeverinței de poliție diferă per consulat',
              },
              {
                situatie: 'Primul pașaport ca adult, domiciliu în Germania',
                domiciliu: 'Germania (CRDS)',
                ghid: '/pasaport-crds-germania',
                label: 'Ghid pașaport CRDS →',
                blocare: 'Nu e clar dacă ai nevoie de transcriere sau nu',
              },
              {
                situatie: 'Primul pașaport pentru copil născut în Germania',
                domiciliu: 'Germania',
                ghid: '/primul-pasaport-copil-germania',
                label: 'Ghid primul pașaport copil →',
                blocare: 'Se sare peste transcrierea certificatului de naștere',
              },
            ].map(({ situatie, domiciliu, ghid, label, blocare }, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-2 border border-gray-200 font-medium text-gray-800">{situatie}</td>
                <td className="p-2 border border-gray-200 text-gray-600 whitespace-nowrap">{domiciliu}</td>
                <td className="p-2 border border-gray-200">
                  <Link href={ghid} className="text-blue-600 underline hover:text-blue-800 text-xs font-medium">
                    {label}
                  </Link>
                </td>
                <td className="p-2 border border-gray-200 text-gray-500 text-xs hidden sm:table-cell">{blocare}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'diferente',
    title: 'CRDS vs domiciliu România — diferențele cheie',
    content: (
      <div className="grid gap-2 sm:grid-cols-3 text-sm">
        {[
          { aspect: 'Ce selectezi pe econsulat.ro', crds: 'Pașaport simplu electronic CRDS', ro: 'Pașaport simplu electronic' },
          { aspect: 'Fotografii proprii', crds: 'Nu', ro: 'Da, cu excepția München' },
          { aspect: 'Document adresă', crds: 'Meldebescheinigung / Anmeldung / Personalausweis german', ro: 'Nu se cere separat' },
          { aspect: 'Cartea de identitate', crds: 'Poate fi anulată la eliberare', ro: 'Rămâne documentul principal' },
          { aspect: 'Taxă', crds: '53€', ro: '53€' },
          { aspect: 'Termen', crds: '45 zile lucrătoare', ro: '45 zile lucrătoare' },
        ].map(({ aspect, crds, ro }) => (
          <div key={aspect} className="rounded-lg border border-gray-200 p-3">
            <p className="font-semibold text-gray-700 text-xs mb-2">{aspect}</p>
            <p className="text-blue-700 text-xs mb-1">
              <span className="font-medium">CRDS:</span> {crds}
            </p>
            <p className="text-green-700 text-xs">
              <span className="font-medium">Domiciliu RO:</span> {ro}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'ghiduri-conexe',
    title: 'Ghiduri conexe după situația ta',
    content: (
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          {
            href: '/pasaport-crds-germania',
            title: 'Pașaport CRDS',
            text: 'Pentru cine locuiește în Germania și nu mai are domiciliu activ în România.',
          },
          {
            href: '/pasaport-cu-domiciliu-romania-din-germania',
            title: 'Pașaport cu domiciliu în România',
            text: 'Pentru cine locuiește în Germania, dar are încă buletin cu adresă activă în România.',
          },
          {
            href: '/pasaport-pierdut-furat-germania',
            title: 'Pașaport pierdut, furat sau deteriorat',
            text: 'Ce se schimbă la declarații, poliție și traduceri în funcție de consulat.',
          },
          {
            href: '/titlu-calatorie-vs-pasaport-temporar',
            title: 'Titlu de călătorie vs pașaport temporar',
            text: 'Ruta de urgență dacă nu mai ai timp să aștepți un pașaport nou din Germania.',
          },
        ].map(({ href, title, text }) => (
          <Link
            key={href}
            href={href}
            className="rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-blue-200"
          >
            <p className="mb-1 font-semibold text-gray-900">{title}</p>
            <p className="text-sm text-gray-600">{text}</p>
          </Link>
        ))}
      </div>
    ),
  },
  {
    id: 'consulate',
    title: 'Plata celor 53€ — diferă per consulat',
    content: (
      <div className="space-y-2">
        <p className="text-sm text-gray-600">
          Taxa este aceeași la toate consulatele. Metoda de plată nu. Dacă vii cu metoda greșită,
          poți bloca sau întârzia depunerea.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { oras: 'Bonn', plata: 'EC-Karte', posta: 'Nu' },
            { oras: 'München', plata: 'Cash', posta: 'Da, pentru unele situații' },
            { oras: 'Stuttgart', plata: 'POS sau virament', posta: 'Da, pentru unele situații' },
            { oras: 'Berlin', plata: 'POS debit sau virament', posta: 'Nu' },
          ].map(({ oras, plata, posta }) => (
            <div key={oras} className="rounded-lg border border-gray-200 bg-white p-3">
              <p className="font-semibold text-gray-900 mb-1">{oras}</p>
              <p className="text-sm text-gray-700 mb-1">Plată: {plata}</p>
              <p className="text-xs text-gray-500">Ridicare prin poștă: {posta}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'greseli',
    title: 'Greșeli frecvente care îi trimit pe oameni degeaba la consulat',
    content: (
      <div className="space-y-2">
        {[
          {
            gresit: 'Selectează tipul greșit de pașaport pe econsulat.ro',
            corect: 'Dacă nu mai ai domiciliu în România, de regulă intri pe CRDS. Dacă ai domiciliu activ în RO, intri pe pașaport standard.',
          },
          {
            gresit: 'Aduc fotografii pentru CRDS',
            corect: 'Pentru CRDS, imaginea facială se preia biometric la ghișeu la toate cele 4 consulate.',
          },
          {
            gresit: 'Pregătesc declarația de pierdere acasă',
            corect: 'Declarația se completează la ghișeul consulatului, nu înainte.',
          },
          {
            gresit: 'Se bazează pe Aufenthaltstitel ca document obligatoriu',
            corect: 'Nu apare în listele oficiale ca document obligatoriu pentru pașaport.',
          },
        ].map(({ gresit, corect }, i) => (
          <div key={i} className="rounded-lg border border-red-100 bg-red-50 p-3">
            <p className="text-xs font-semibold text-red-700 mb-0.5">Greșit: {gresit}</p>
            <p className="text-xs text-gray-700">Corect: {corect}</p>
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
          Dacă nu îți este clar ce variantă ți se aplică sau ai o combinație mai puțin obișnuită,
          ghidul rapid îți arată repede pașii potriviți.
        </p>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-2">
          <p className="text-sm font-medium text-gray-800">Ghidul rapid te ajută să afli:</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>CRDS sau pașaport standard</li>
            <li>ce documente îți trebuie exact</li>
            <li>cum tratezi cazul de pierdere sau furt</li>
            <li>cum se aplică situația copilului născut în Germania</li>
          </ul>
        </div>
      </div>
    ),
  },
]

export default function PasaportRomaniaGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="pasaport-romania-germania"
      lpTopic="pasaport"
      h1="Pașaport românesc din Germania — toate situațiile"
      intro="Înainte de orice altceva, un singur lucru schimbă tot traseul: dacă domiciliul tău oficial este în Germania sau în România. Răspunsul la această întrebare determină ce selectezi pe econsulat.ro și ce documente pregătești."
      tldr="Domiciliu în Germania înseamnă de regulă flux CRDS. Domiciliu activ în România înseamnă flux standard. Taxa este 53€ la toate consulatele, iar termenul oficial de procesare este 45 de zile lucrătoare."
      ctaHref="/pasaport-crds-vs-pasaport-cu-domiciliu-romania"
      ctaLabel="Vezi mai întâi dacă ești CRDS sau domiciliu în România →"
      updatedAt="aprilie 2026"
      sourceNote="MAE, econsulat.ro, consulatele României din Germania — date verificate live"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Încă nu e clar ce ghid ți se potrivește?"
      finalCtaText="Compară mai întâi CRDS cu pașaportul pe domiciliu în România, apoi intră în ghidul rapid dacă ai un caz mai atipic. Așa ajungi mai repede la ghidul corect."
    />
  )
}
