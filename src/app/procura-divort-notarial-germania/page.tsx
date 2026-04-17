import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Procură divorț notarial din Germania — Ce acoperă și ce nu | ActeRO',
  description:
    'Procură pentru divorț notarial în România din Germania. Ce acoperă procura, limitele ei, când nu se poate notarial și de ce ambii soți au nevoie de procură.',
  keywords: [
    'procura divort notarial germania',
    'procura divort germania romania',
    'divort notarial procura',
    'divort romania din germania fara prezenta',
    'procura divort notarial consulat romania',
    'divort prin procura notariala romania',
    'ce acopera procura de divort notarial',
    'procura divort copii romania germania',
    'divort fara sa fii prezent in romania din germania',
    'divort amiabil procura germania',
  ],
  openGraph: {
    title: 'Procură divorț notarial din Germania — Ce acoperă și ce nu',
    description:
      'Procura acoperă depunerea, nu garantează pronunțarea fără prezență. Cu copii minori nu se merge pe notar.',
    url: 'https://www.actero.ro/procura-divort-notarial-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/procura-divort-notarial-germania',
  },
}

const faqItems = [
  {
    question: 'Poate acoperi procura toată procedura de divorț notarial?',
    answer:
      'Nu complet în toate cazurile. Procura îl poate împuternici pe mandatar pentru depunere și pentru pașii procedurii, dar unii notari pot cere prezență personală la final sau la pronunțare.',
  },
  {
    question: 'Amândoi soții trebuie să facă procuri dacă locuiesc în Germania?',
    answer:
      'Da, dacă niciunul nu poate fi prezent în România. Divorțul notarial este o procedură consensuală, deci acordul și reprezentarea ambilor contează.',
  },
  {
    question: 'Avem copii minori. Putem divorța notarial prin procură?',
    answer:
      'Nu. Dacă există copii minori, situația nu merge pe calea notarială simplă descrisă aici și trebuie tratată pe ruta corectă, de regulă judiciară.',
  },
  {
    question: 'Ce date ale notarului trebuie în procură?',
    answer:
      'Dacă ai deja notarul ales, este util să incluzi datele lui. Dacă nu, procura poate fi redactată și fără a numi un birou notarial anume.',
  },
  {
    question: 'Cât costă procura de divorț la consulat?',
    answer:
      'Ca la celelalte procuri notariale, apare și taxa RNNEPR de 3€, iar metoda de plată diferă de la un consulat la altul.',
  },
  {
    question: 'Procura se eliberează în aceeași zi?',
    answer:
      'Da. În fluxul consular obișnuit, procura este eliberată în aceeași zi după semnare.',
  },
  {
    question: 'Mandatarul poate fi același pentru ambii soți?',
    answer:
      'Tehnic poate fi posibil, dar poate ridica discuții de conflict de interese. Este mai sigur ca fiecare soț să aibă propriul mandatar.',
  },
  {
    question: 'Ce se întâmplă cu bunurile comune? Trebuie menționate în procură?',
    answer:
      'Dacă divorțul implică și partaj sau alte bunuri, merită discutat cu notarul ce clauze trebuie incluse, ca procura să fie suficient de clară.',
  },
]

const howToSteps = [
  {
    name: 'Verifici dacă divorțul notarial este posibil',
    text: 'Înainte de orice, clarifici dacă situația ta poate merge notarial sau nu.',
  },
  {
    name: 'Discuți cu notarul ce acoperă procura',
    text: 'E important să afli din timp dacă notarul cere sau nu prezență personală la final.',
  },
  {
    name: 'Ambii soți fac procuri dacă niciunul nu poate fi prezent',
    text: 'Fiecare are nevoie de propria reprezentare, nu doar unul dintre ei.',
  },
  {
    name: 'Pregătești datele mandatarului și ale notarului',
    text: 'Aici intră și eventualele clauze legate de bunuri comune.',
  },
  {
    name: 'Semnezi la consulat și primești procura în aceeași zi',
    text: 'Plata RNNEPR trebuie făcută conform regulii specifice consulatului tău.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/procura-divort-notarial-germania#article',
  headline: 'Procură divorț notarial din Germania — Ce acoperă și ce nu 2026',
  description:
    'Ghid pentru procura de divorț notarial din Germania: limitele ei, situațiile cu copii minori și cum funcționează reprezentarea soților.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/procura-divort-notarial-germania',
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
      name: 'Procură generală Germania',
      item: 'https://www.actero.ro/procura-generala-germania',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Procură divorț notarial Germania',
      item: 'https://www.actero.ro/procura-divort-notarial-germania',
    },
  ],
}

const sections = [
  {
    id: 'conditii-notarial',
    title: 'Când se poate divorța notarial în România — și când nu',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-2 font-semibold text-green-900">Divorț notarial posibil dacă</p>
            <ul className="space-y-1 text-sm text-green-800">
              <li>Ambii soți sunt de acord</li>
              <li>Nu există blocaje care scot cazul din procedura notarială</li>
              <li>Documentele și situația juridică permit această cale</li>
            </ul>
          </div>

          <div className="rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="mb-2 font-semibold text-red-900">Divorț notarial imposibil dacă</p>
            <ul className="space-y-1 text-sm text-red-800">
              <li>Există copii minori în situația care cere altă procedură</li>
              <li>Unul dintre soți nu este de acord</li>
              <li>Notarul sau cadrul juridic cer alt tip de procedură</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'ce-acopera-procura',
    title: 'Ce acoperă procura — și limita critică',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="mb-2 font-semibold text-blue-900">Ce poate face mandatarul</p>
          <ul className="space-y-1 text-sm text-blue-800">
            <li>Depune cererea</li>
            <li>Reprezintă soțul în pașii procedurali acoperiți de notar</li>
            <li>Semnează actele pentru care a fost împuternicit</li>
          </ul>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="mb-2 font-semibold text-amber-900">Limita critică</p>
          <p className="text-sm text-amber-800">
            Procura nu înseamnă automat că notarul va accepta finalizarea fără nicio
            prezență personală. Acest punct trebuie verificat direct cu notarul ales.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'ambii-soti',
    title: 'Ambii soți în Germania — ambii fac procuri',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Dacă niciunul dintre soți nu poate merge în România, fiecare are nevoie de propria
          procură. Divorțul notarial nu funcționează ca o reprezentare unilaterală.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-3">
            <p className="mb-2 text-sm font-semibold text-gray-800">Mandatari diferiți</p>
            <p className="text-xs text-gray-600">
              Este varianta cea mai simplă din perspectiva riscului de conflict de interese.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-3">
            <p className="mb-2 text-sm font-semibold text-gray-800">Același mandatar</p>
            <p className="text-xs text-gray-600">
              Poate fi posibil, dar merită confirmat din timp cu notarul.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'documente',
    title: 'Documentele tale la consulat',
    content: (
      <div className="space-y-3">
        <div className="space-y-2">
          {[
            {
              req: true,
              doc: 'Pașaport românesc valabil sau carte de identitate',
              detaliu: 'Actul tău în original.',
            },
            {
              req: true,
              doc: 'Date complete ale mandatarului',
              detaliu: 'CNP și datele actului lui de identitate.',
            },
            {
              req: false,
              doc: 'Date birou notarial',
              label: 'dacă există',
              detaliu: 'Ajută la o procură mai specifică.',
            },
            {
              req: false,
              doc: 'Date privind bunurile comune',
              label: 'după caz',
              detaliu: 'Utile dacă procura trebuie să atingă și aspecte legate de partaj.',
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
            Nu ai nevoie de apostilă sau traduceri pentru această etapă consulară.
          </p>
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
            special: 'Se face cu 3-4 zile lucrătoare înainte.',
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
            gresit: 'Presupui că procura acoperă automat toată procedura până la final',
            corect: 'Verifici cu notarul dacă cere prezență personală la final sau nu.',
          },
          {
            gresit: 'Crezi că divorțul notarial merge și în situații cu copii minori',
            corect: 'Cu copii minori trebuie clarificată ruta juridică potrivită, nu presupusă cea notarială.',
          },
          {
            gresit: 'Doar unul dintre soți face procură',
            corect: 'Dacă niciunul nu este prezent în România, ambii trebuie reprezentați.',
          },
          {
            gresit: 'La Berlin nu faci viramentul din timp',
            corect: 'La Berlin plata RNNEPR trebuie rezolvată înainte de ziua programării.',
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
            text: 'Procură pentru cont bancar în România',
            href: '/procura-cont-bancar-romania-din-germania',
            label: 'Ghid procură bancară →',
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
  {
    id: 'pagini-conexe',
    title: 'Pagini conexe pentru divorț și procuri',
    content: (
      <div className="grid gap-3 sm:grid-cols-3">
        <Link href="/procura-generala-germania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Procură generală</p>
          <p className="mt-1 text-sm text-gray-600">Contextul mare pentru divorț, firmă, bancă și alte acte administrative.</p>
        </Link>
        <Link href="/procura-notariala-germania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Hub procuri Germania</p>
          <p className="mt-1 text-sm text-gray-600">Dacă vrei să compari rapid toate tipurile de procuri și regulile lor.</p>
        </Link>
        <Link href="/programare-econsulat-germania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Programare pe econsulat.ro</p>
          <p className="mt-1 text-sm text-gray-600">Pentru partea practică de validare, documente și alegerea serviciului corect.</p>
        </Link>
      </div>
    ),
  },
]

export default function ProcuraDivortNotarialGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="procura-divort-notarial-germania"
      lpTopic="procura"
      h1="Procură divorț notarial din Germania — ce acoperă și ce nu"
      intro="Dacă vrei să rezolvi un divorț notarial în România din Germania, procura consulară poate acoperi o parte importantă din traseu. Înainte de programare, trebuie însă clarificate două lucruri: dacă situația ta chiar merge pe cale notarială și ce limitări are notarul ales."
      tldr="Divorțul notarial este posibil doar în anumite condiții. Procura poate acoperi depunerea și o parte din procedură, dar nu garantează că finalizarea se face fără prezență. Dacă niciunul dintre soți nu poate merge în România, ambii au nevoie de procură."
      ctaHref="/procura-generala-germania"
      ctaLabel="Vezi și celelalte situații de procură generală →"
      updatedAt="aprilie 2026"
      sourceNote="Consulatele României din Germania și regulile practice pentru procuri"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi dacă divorțul tău merge notarial sau cere altă procedură?"
      finalCtaText="Pagina aceasta acoperă doar divorțul notarial. Pentru bancă, firmă sau alte acte, mută-te pe ghidurile conexe din aceeași familie de procuri."
    />
  )
}
