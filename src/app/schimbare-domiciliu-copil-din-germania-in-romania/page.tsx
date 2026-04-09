import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Schimbare domiciliu copil din Germania în România — SPCLEP | ActeRO',
  description:
    'Înregistrarea domiciliului copilului născut în Germania în România. Acordul ambilor părinți, extras CF, SPCLEP competent și legătura cu primul buletin.',
  keywords: [
    'schimbare domiciliu copil din germania in romania',
    'schimbare domiciliu copil romania germania',
    'domiciliu minor romania din strainatate',
    'inregistrare domiciliu copil romania spclep',
    'domiciliu copil nascut germania romania',
    'stabilire domiciliu minor romania din germania',
    'extras cf copil domiciliu romania',
    'acordul ambilor parinti domiciliu minor',
    'buletin copil domiciliu romania',
    'copil nascut germania adresa romania',
  ],
  openGraph: {
    title: 'Schimbare domiciliu copil din Germania în România',
    description:
      'Acordul ambilor părinți, extrasul CF și impactul asupra traseului pentru buletinul copilului.',
    url: 'https://actero.ro/schimbare-domiciliu-copil-din-germania-in-romania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/schimbare-domiciliu-copil-din-germania-in-romania',
  },
}

const faqItems = [
  {
    question: 'De ce aș vrea să înregistrez domiciliul copilului în România?',
    answer:
      'Motivul principal este flexibilitatea practică: uneori pentru primul buletin, alteori pentru acces la servicii sau situații familiale în România.',
  },
  {
    question: 'Este obligatoriu acordul ambilor părinți pentru schimbarea domiciliului copilului?',
    answer:
      'Da. Domiciliul unui minor nu se schimbă unilateral atunci când ambii părinți au autoritate părintească.',
  },
  {
    question: 'Ce documente trebuie la SPCLEP pentru înregistrarea domiciliului?',
    answer:
      'În practică, cheia este combinația dintre actele copilului, actele părinților și dovada adresei din România prin extras CF.',
  },
  {
    question: 'Extrasul CF trebuie să fie pe numele copilului?',
    answer:
      'Nu. Extrasul dovedește existența proprietății la adresa respectivă. Dacă proprietatea este a altcuiva, poate fi nevoie și de consimțământul proprietarului.',
  },
  {
    question: 'Cum afectează domiciliul ales SPCLEP-ul competent pentru buletin?',
    answer:
      'Aici apare diferența dintre ce poți face cu domiciliu în România și ce poți face fără el, mai ales pentru CIS.',
  },
  {
    question: 'Copilul trebuie să fie prezent la SPCLEP pentru schimbarea domiciliului?',
    answer:
      'Pentru simpla înregistrare a domiciliului, regulile pot fi mai simple decât la emiterea buletinului. Dacă se face și buletinul în același timp, copilul trebuie prezent pentru biometrie.',
  },
  {
    question: 'Pot înregistra domiciliul copilului și al meu simultan?',
    answer:
      'Da, în practică poți grupa pașii dacă și tu îți refaci domiciliul sau rezolvi acte conexe în aceeași deplasare.',
  },
]

const howToSteps = [
  {
    name: 'Clarifici acordul ambilor părinți',
    text: 'Acesta este primul filtru real. Fără acord, traseul devine juridic mai complicat.',
  },
  {
    name: 'Alegi adresa din România',
    text: 'Acolo unde va fi înregistrat copilul trebuie să existe o bază documentară clară.',
  },
  {
    name: 'Obții extrasul CF',
    text: 'Este documentul-cheie care susține adresa aleasă.',
  },
  {
    name: 'Mergi la SPCLEP cu documentele',
    text: 'Aici se înregistrează domiciliul, iar uneori poți continua direct și cu buletinul.',
  },
  {
    name: 'Dacă faci și buletinul, copilul trebuie prezent',
    text: 'Pentru partea biometrică, prezența lui nu mai este opțională.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/schimbare-domiciliu-copil-din-germania-in-romania#article',
  headline: 'Schimbare domiciliu copil din Germania în România — SPCLEP 2026',
  description:
    'Ghid pentru înregistrarea domiciliului copilului născut în Germania în România: acordul părinților, extras CF și legătura cu primul buletin.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/schimbare-domiciliu-copil-din-germania-in-romania',
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
      name: 'Schimbare domiciliu copil Germania-Romania',
      item: 'https://actero.ro/schimbare-domiciliu-copil-din-germania-in-romania',
    },
  ],
}

const sections = [
  {
    id: 'de-ce',
    title: 'De ce ai vrea domiciliu pentru copil în România',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Nu este mereu obligatoriu, dar poate deveni foarte util în anumite situații practice.
        </p>

        <div className="grid gap-2 sm:grid-cols-2">
          {[
            {
              motiv: 'Acces la CIS, nu doar CEI',
              detaliu: 'Domiciliul în România schimbă opțiunile disponibile la SPCLEP.',
            },
            {
              motiv: 'Proceduri familiale sau patrimoniale în România',
              detaliu: 'Poate simplifica alte acte care implică minorul.',
            },
            {
              motiv: 'Acces la servicii din România',
              detaliu: 'Școală, medic sau alte situații unde adresa din România contează.',
            },
            {
              motiv: 'Pregătirea revenirii familiei',
              detaliu: 'Dacă familia se mută înapoi, pasul acesta poate fi făcut din timp.',
            },
          ].map(({ motiv, detaliu }) => (
            <div key={motiv} className="rounded-lg border border-gray-200 bg-white p-3">
              <p className="mb-1 text-sm font-semibold text-gray-800">✓ {motiv}</p>
              <p className="text-xs text-gray-600">{detaliu}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
          <p className="text-sm text-blue-800">
            <strong>Important:</strong> dacă vrei doar CEI, domiciliul în România nu este
            mereu necesar.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'acordul-parintilor',
    title: 'Acordul ambilor părinți — obligatoriu',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="mb-1 font-semibold text-amber-900">
            Domiciliul minorului cere acordul ambilor părinți
          </p>
          <p className="text-sm text-amber-800">
            Acesta este punctul juridic central al întregii proceduri.
          </p>
        </div>

        <div className="space-y-2">
          {[
            {
              situatie: 'Ambii părinți sunt prezenți',
              solutie: 'Semnează împreună la SPCLEP.',
              icon: '✅',
              color: 'border-green-200 bg-green-50',
            },
            {
              situatie: 'Un părinte nu poate veni',
              solutie: 'Este nevoie de procură sau declarație valabilă din partea lui.',
              icon: '⚠️',
              color: 'border-orange-100 bg-orange-50',
            },
            {
              situatie: 'Nu există acord între părinți',
              solutie: 'Situația iese din procedura simplă și poate necesita intervenție judiciară.',
              icon: '❗',
              color: 'border-red-100 bg-red-50',
            },
          ].map(({ situatie, solutie, icon, color }) => (
            <div key={situatie} className={`rounded-lg border p-3 ${color}`}>
              <p className="mb-1 text-sm font-semibold text-gray-800">
                {icon} {situatie}
              </p>
              <p className="text-xs text-gray-600">{solutie}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'extras-cf',
    title: 'Extrasul CF — dovedește adresa din România',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Extrasul de carte funciară este documentul care leagă copilul de adresa din România.
        </p>

        <div className="space-y-2 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="font-semibold text-blue-900">Se poate obține online</p>
          <ul className="space-y-1 text-sm text-blue-800">
            <li>Cost redus</li>
            <li>Ajunge în format PDF</li>
            <li>Trebuie obținut relativ aproape de data depunerii</li>
          </ul>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3 space-y-1">
          <p className="text-xs text-amber-800">
            Dacă nu ești titularul imobilului, poate fi nevoie și de consimțământul proprietarului.
          </p>
          <p className="text-xs text-amber-800">
            Nu îl scoate prea devreme, ca să nu riști să ajungi cu el expirat.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'legatura-buletin',
    title: 'Cum afectează domiciliul buletinul copilului',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Domiciliul ales influențează ce tip de buletin poate face copilul și unde.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">
                  Situație
                </th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">
                  CEI
                </th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">
                  CIS
                </th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">
                  SPCLEP
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  situatie: 'Cu domiciliu în România',
                  cei: 'Da',
                  cis: 'Da',
                  spclep: 'Mai multă flexibilitate',
                },
                {
                  situatie: 'Fără domiciliu în România',
                  cei: 'Da',
                  cis: 'Nu',
                  spclep: 'Doar pentru fluxul compatibil',
                },
              ].map(({ situatie, cei, cis, spclep }, index) => (
                <tr key={situatie} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 p-2 text-xs font-medium text-gray-800">
                    {situatie}
                  </td>
                  <td className="border border-gray-200 p-2 text-xs text-gray-700">{cei}</td>
                  <td className="border border-gray-200 p-2 text-xs text-gray-700">{cis}</td>
                  <td className="border border-gray-200 p-2 text-xs text-gray-600">{spclep}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
              doc: 'Certificatul de naștere românesc transcris al copilului',
              detaliu: 'Este baza pentru orice pas următor.',
            },
            {
              req: true,
              doc: 'Actele de identitate ale părinților',
              detaliu: 'Trebuie să susțină acordul și identitatea.',
            },
            {
              req: true,
              doc: 'Extras de carte funciară',
              detaliu: 'Leagă copilul de adresa unde va avea domiciliul.',
            },
            {
              req: false,
              doc: 'Consimțământul proprietarului',
              label: 'dacă e cazul',
              detaliu: 'Necesar când adresa nu este pe numele tău.',
            },
            {
              req: false,
              doc: 'Procură sau declarație de la părintele absent',
              label: 'dacă e cazul',
              detaliu: 'Pentru situațiile în care un părinte nu este prezent.',
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
      </div>
    ),
  },
  {
    id: 'simultan-buletin',
    title: 'Poți face domiciliu și buletin simultan',
    content: (
      <div className="space-y-2 rounded-xl border border-green-200 bg-green-50 p-4">
        <p className="font-semibold text-green-900">
          O singură deplasare — domiciliu și primul buletin
        </p>
        <p className="text-sm text-green-800">
          Dacă documentele sunt pregătite corect, poți grupa cele două proceduri în aceeași vizită.
        </p>
        <p className="text-sm text-green-800">
          Pentru partea de buletin, copilul trebuie să fie prezent pentru biometrie.
        </p>
        <Link
          href="/primul-buletin-copil-nascut-in-germania"
          className="inline-block text-xs font-medium text-green-700 underline hover:text-green-900"
        >
          Ghid primul buletin copil →
        </Link>
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
            gresit: 'Încerci să schimbi domiciliul fără acordul celuilalt părinte',
            corect: 'Domiciliul minorului cere acordul ambilor părinți, dacă ambii au autoritate părintească.',
          },
          {
            gresit: 'Mergi fără extrasul CF',
            corect: 'Adresa trebuie susținută cu document, nu doar declarată verbal.',
          },
          {
            gresit: 'Crezi că ai nevoie de domiciliu în România pentru orice buletin',
            corect: 'Nu pentru orice scenariu; important este ce tip de document urmărești.',
          },
          {
            gresit: 'Scoți extrasul CF prea devreme',
            corect: 'Obține-l aproape de data deplasării ca să fie încă valabil.',
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
            text: 'Primul buletin CEI al copilului',
            href: '/primul-buletin-copil-nascut-in-germania',
            label: 'Ghid primul buletin copil →',
          },
          {
            text: 'Transcrierea nașterii — pasul anterior',
            href: '/transcriere-certificat-nastere-germania',
            label: 'Ghid transcriere naștere →',
          },
          {
            text: 'Tot traseul complet pentru copilul fără acte românești',
            href: '/acte-copil-nascut-in-germania',
            label: 'Ghid acte copil →',
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

export default function SchimbareDomiciliuCopilGermaniaRomaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="schimbare-domiciliu-copil-din-germania-in-romania"
      lpTopic="copil"
      h1="Schimbare domiciliu copil din Germania în România — ce trebuie și de ce"
      intro="Înregistrarea domiciliului copilului în România nu este obligatorie în orice scenariu, dar poate deveni foarte utilă pentru anumite acte și pentru flexibilitatea de mai târziu. Dacă vrei să o faci, sunt trei puncte-cheie: acordul ambilor părinți, extrasul CF și legătura directă cu traseul pentru buletin."
      tldr="Domiciliul în România nu este mereu necesar pentru CEI, dar poate conta pentru CIS și pentru alte situații practice. Ai nevoie de acordul ambilor părinți și de extrasul CF al adresei din România. În multe cazuri, poți grupa domiciliul și primul buletin în aceeași deplasare."
      ctaHref="/primul-buletin-copil-nascut-in-germania"
      ctaLabel="Vezi cum se leagă domiciliul de primul buletin al copilului →"
      updatedAt="aprilie 2026"
      sourceNote="Reguli practice SPCLEP, extras CF și fluxurile pentru actele copilului"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi dacă domiciliul copilului este obligatoriu sau doar util?"
      finalCtaText="Dacă ținta ta este primul buletin, pornește din pagina conexă pentru copil. Dacă încă ești la pasul anterior, revino la transcriere."
    />
  )
}
