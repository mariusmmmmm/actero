import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Buletin expirat fără domiciliu activ în România — Ce se adaugă',
  description:
    'Buletin expirat fără domiciliu în România: extras CF obligatoriu, CEI la orice SPCLEP și diferența față de primul buletin. Ghid 2026.',
  keywords: [
    'buletin expirat fara domiciliu romania',
    'buletin expirat fara domiciliu romania germania',
    'spclep competent fara domiciliu buletin',
    'extras cf buletin fara domiciliu',
    'orice spclep buletin fara domiciliu cei',
    'buletin expirat diaspora fara domiciliu',
    'primul buletin fara domiciliu romania',
    'spclep ultim domiciliu buletin expirat',
    'buletin expirat niciodata inregistrat romania',
    'cei fara domiciliu romania din germania',
  ],
  openGraph: {
    title: 'Buletin expirat fără domiciliu activ în România — Ce se adaugă',
    description:
      'Extras CF obligatoriu, CEI la orice SPCLEP și clarificarea critică dintre reînnoire și primul buletin. Ghid 2026.',
    url: 'https://www.actero.ro/buletin-expirat-fara-domiciliu-romania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/buletin-expirat-fara-domiciliu-romania',
  },
}

const faqItems = [
  {
    question: 'De ce am nevoie de extras CF dacă nu mai am domiciliu activ?',
    answer:
      'Fără domiciliu activ, SPCLEP-ul nu mai poate verifica direct adresa din România. Extrasul de carte funciară ajută la dovedirea adresei la care urmează să figurezi.',
  },
  {
    question: 'Cum obțin extrasul CF din Germania?',
    answer:
      'Se poate obține online, de pe platforma ANCPI, și trebuie emis suficient de recent față de data depunerii. Important este să ai documentul valabil la momentul prezentării la SPCLEP.',
  },
  {
    question: 'La ce SPCLEP merg dacă nu mai am domiciliu activ?',
    answer:
      'Pentru CEI ai, de regulă, mai multă flexibilitate. Pentru CIS, traseul rămâne legat de ultima adresă înregistrată în România. Merită verificată exact practica locală înainte de drum.',
  },
  {
    question: 'Când intru pe procedura de primul buletin în loc de reînnoire?',
    answer:
      'Dacă nu ai fost niciodată înregistrat cu domiciliu în România și nu ai avut niciodată buletin românesc, atunci nu mai vorbim de reînnoire, ci de primul buletin.',
  },
  {
    question: 'Dacă nu sunt titularul imobilului, pot folosi extrasul CF al altcuiva?',
    answer:
      'Da, dar nu este suficient singur. În practică ai nevoie și de acordul persoanei care te găzduiește la adresa respectivă.',
  },
  {
    question: 'Trebuie să aduc fotografii la SPCLEP?',
    answer:
      'Nu. Fotografia și biometria se preiau direct la ghișeul SPCLEP.',
  },
  {
    question: 'Pot ridica buletinul prin procură dacă nu mă pot întoarce?',
    answer:
      'Pentru CEI trebuie planificată ridicarea personală. Pentru CIS poate exista varianta procurii speciale, în funcție de procedura acceptată.',
  },
  {
    question: 'Cât costă și cât durează?',
    answer:
      'CEI și CIS au costuri și termene diferite, iar plata se face în afara ghișeului SPCLEP. Verifică mereu regula actuală a serviciului unde mergi.',
  },
]

const howToSteps = [
  {
    name: 'Verifici dacă ai avut vreodată domiciliu înregistrat în România',
    text: 'Dacă da, ești pe reînnoire. Dacă nu, s-ar putea să fii pe procedura de primul buletin.',
  },
  {
    name: 'Obții extrasul CF',
    text: 'Acesta este documentul suplimentar important față de cazul cu domiciliu activ.',
  },
  {
    name: 'Alegi CEI sau CIS și clarifici SPCLEP-ul',
    text: 'Alegerea actului influențează flexibilitatea traseului și utilitatea actului după emitere.',
  },
  {
    name: 'Plătești taxa și te prezinți la SPCLEP',
    text: 'Biometria se face la ghișeu, iar documentele trebuie să fie pregătite complet înainte de drum.',
  },
  {
    name: 'Ridici buletinul',
    text: 'Ia în calcul din start dacă vei putea reveni personal sau dacă ai nevoie de o soluție compatibilă cu CIS.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/buletin-expirat-fara-domiciliu-romania#article',
  headline: 'Buletin expirat fără domiciliu activ în România — Ce se adaugă 2026',
  description:
    'Ghid pentru buletin expirat fără domiciliu activ: extras CF, diferența între reînnoire și primul buletin și orientare către SPCLEP.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/buletin-expirat-fara-domiciliu-romania',
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
      name: 'Buletin expirat fără domiciliu',
      item: 'https://www.actero.ro/buletin-expirat-fara-domiciliu-romania',
    },
  ],
}

const sections = [
  {
    id: 'diferenta-cu-domiciliu',
    title: 'Ce se adaugă față de cazul cu domiciliu activ',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Față de varianta cu domiciliu activ, lipsa domiciliului adaugă un document important și schimbă modul în care te uiți la adresa din România.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Aspect</th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-green-700">
                  Cu domiciliu activ
                </th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-amber-700">
                  Fără domiciliu activ
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { aspect: 'Extras CF', cu: 'Nu este necesar', fara: 'Devine important / poate fi cerut' },
                { aspect: 'Adresa din România', cu: 'Este deja vizibilă în sistem', fara: 'Trebuie dovedită mai clar' },
                { aspect: 'Complexitatea dosarului', cu: 'Mai simplă', fara: 'Puțin mai mare' },
                { aspect: 'Fotografii', cu: 'Nu', fara: 'Nu' },
              ].map(({ aspect, cu, fara }, index) => (
                <tr key={aspect} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 p-2 text-xs font-medium text-gray-800">{aspect}</td>
                  <td className="border border-gray-200 p-2 text-xs text-green-700">{cu}</td>
                  <td className="border border-gray-200 p-2 text-xs text-amber-700">{fara}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: 'primul-buletin',
    title: 'Ești pe reînnoire sau pe primul buletin?',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
            <p className="mb-1 font-semibold text-blue-900">Reînnoire</p>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>Ai avut domiciliu înregistrat în România în trecut</li>
              <li>Ai mai avut un buletin românesc</li>
              <li>Adresa nu mai este acum activă sau cazul a devenit mai vechi</li>
            </ul>
          </div>

          <div className="rounded-xl border border-purple-100 bg-purple-50 p-4">
            <p className="mb-1 font-semibold text-purple-900">Primul buletin</p>
            <ul className="space-y-1 text-sm text-purple-800">
              <li>Nu ai fost niciodată înregistrat în România</li>
              <li>Nu ai mai avut niciodată buletin românesc</li>
            </ul>
            <p className="mt-2 text-xs text-purple-700">
              Pentru copil născut în Germania, începi de regulă din fluxul de transcriere și apoi continui spre primul buletin.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Dacă ai avut vreodată buletin românesc, chiar și cu ani în urmă, în mod normal ești pe reînnoire, nu pe primul buletin.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'extras-cf',
    title: 'Extrasul CF — documentul important în plus',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Fără domiciliu activ, SPCLEP-ul are nevoie de mai multă claritate despre adresa din România. Aici apare extrasul CF ca document suplimentar important.
        </p>

        <div className="space-y-2 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="font-semibold text-blue-900">Cum să te gândești la extrasul CF</p>
          <ol className="space-y-1 text-sm text-blue-800">
            <li>Îl obții online, înainte de deplasare.</li>
            <li>Îl scoți suficient de aproape de data depunerii.</li>
            <li>Verifici dacă adresa corespunde cu locul unde vei figura.</li>
            <li>Dacă nu ești titular, pregătești și acordul persoanei care te găzduiește.</li>
          </ol>
        </div>

        <div className="grid gap-2 sm:grid-cols-3">
          {[
            { label: 'Se obține', value: 'online' },
            { label: 'Moment', value: 'aproape de depunere' },
            { label: 'Rol', value: 'clarifică adresa' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg border border-gray-200 bg-white p-3 text-center">
              <p className="mb-1 text-xs text-gray-500">{label}</p>
              <p className="text-sm font-semibold text-gray-800">{value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-1 rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-xs text-amber-800">
            Dacă nu ești titularul imobilului, ai nevoie și de acordul proprietarului sau al găzduitorului.
          </p>
          <p className="text-xs text-amber-800">
            Nu amâna scoaterea extrasului prea mult înainte de drum, ca să nu ajungi cu el neconvingător sau expirat procedural.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'documente',
    title: 'Lista completă de documente la SPCLEP',
    content: (
      <div className="space-y-3">
        <div className="space-y-2">
          {[
            { req: true, doc: 'Buletinul expirat', detaliu: 'Original, dacă îl mai ai.' },
            {
              req: true,
              doc: 'Certificat de naștere românesc',
              detaliu: 'Original și în stare bună, fără plastifiere sau deteriorări problematice.',
            },
            {
              req: true,
              doc: 'Extras de carte funciară',
              detaliu: 'Documentul suplimentar important atunci când nu mai ai domiciliu activ.',
            },
            {
              req: false,
              label: 'dacă nu ești titularul',
              doc: 'Consimțământul proprietarului sau găzduitorului',
              detaliu: 'Ajută la susținerea folosirii adresei respective.',
            },
            {
              req: false,
              label: 'condiționat',
              doc: 'Certificat de căsătorie românesc',
              detaliu: 'Dacă numele actual diferă de cel din certificatul de naștere.',
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
            Fotografii proprii nu sunt necesare. Biometria se face la ghișeul SPCLEP.
          </p>
          <p className="mt-1 text-xs text-blue-700">
            Nu ai nevoie de Anmeldung, Aufenthaltstitel, apostilă sau traduceri pentru acest pas.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'spclep-plata',
    title: 'La ce SPCLEP mergi și cum plătești',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="mb-1 font-semibold text-blue-900">Dacă alegi CEI</p>
            <p className="text-sm text-blue-800">
              Traseul poate fi mai flexibil și îți oferă o soluție mai practică pentru cine locuiește în Germania.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 font-semibold text-gray-900">Dacă alegi CIS</p>
            <p className="text-sm text-gray-700">
              Verifică atent legătura cu ultima adresă înregistrată și restricțiile de folosire ale actului.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Taxa se plătește separat de ghișeu, iar chitanța trebuie pregătită înainte de depunere.
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
            gresit: 'Merg la SPCLEP fără extras CF',
            corect: 'Fără domiciliu activ, lipsa acestui document poate bloca dosarul.',
          },
          {
            gresit: 'Cred că sunt pe primul buletin doar pentru că nu mai am domiciliu activ',
            corect: 'Primul buletin se aplică doar dacă nu ai fost niciodată înregistrat în România.',
          },
          {
            gresit: 'Aleg CIS doar pentru că pare mai ieftin',
            corect: 'Trebuie să ții cont și de limitările lui pentru călătorii și flexibilitate.',
          },
          {
            gresit: 'Presupun că pot rezolva totul la consulat',
            corect: 'Buletinul tot la SPCLEP în România se rezolvă.',
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
            text: 'Am domiciliu activ în România',
            href: '/buletin-expirat-cu-domiciliu-romania',
            label: 'Ghid cu domiciliu activ →',
          },
          {
            text: 'Nu am fost niciodată înregistrat în România',
            href: '/wizard?problem=buletin',
            label: 'Verifică traseul pentru primul buletin →',
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
  {
    id: 'pagini-conexe',
    title: 'Pagini conexe utile',
    content: (
      <div className="grid gap-3 sm:grid-cols-3">
        <Link href="/buletin-romania-germania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Hub buletin Germania</p>
          <p className="mt-1 text-sm text-gray-600">Vezi toate situațiile de buletin pentru românii din Germania.</p>
        </Link>
        <Link href="/cei-vs-cis-diaspora" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">CEI vs CIS</p>
          <p className="mt-1 text-sm text-gray-600">Comparatorul care decide flexibilitatea traseului și a ridicării.</p>
        </Link>
        <Link href="/buletin-expirat-cu-domiciliu-romania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Expirat cu domiciliu activ</p>
          <p className="mt-1 text-sm text-gray-600">Varianta complementară, mai simplă, fără documentele suplimentare legate de adresă.</p>
        </Link>
      </div>
    ),
  },
]

export default function BuletinExpiratFaraDomiciliuRomaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="buletin-expirat-fara-domiciliu-romania"
      lpTopic="buletin"
      h1="Buletin expirat fără domiciliu activ în România — ce se adaugă"
      intro="Față de cazul cu domiciliu activ, lipsa domiciliului adaugă un document important și mai multă atenție la adresa din România. În rest, logica mare rămâne aceeași: buletinul se rezolvă în România, nu la consulat."
      tldr="Cazul fără domiciliu activ este puțin mai tehnic: extrasul CF devine important, iar diferența dintre reînnoire și primul buletin trebuie clarificată din start. CEI rămâne, în general, varianta mai practică."
      ctaHref="/wizard?problem=buletin"
      ctaLabel="Confirmă traseul tău exact →"
      updatedAt="aprilie 2026"
      sourceNote="MAI, hub.mai.gov.ro, ANCPI"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi dacă e reînnoire sau primul buletin?"
      finalCtaText="Ghidul rapid ActeRO îți clarifică repede situația și te ajută să nu pleci în România pe traseul greșit."
    />
  )
}
