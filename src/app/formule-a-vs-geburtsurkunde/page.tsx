import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Formule A vs Geburtsurkunde — Ce document alegi pentru transcriere România | ActeRO',
  description:
    'Formule A sau Geburtsurkunde pentru transcrierea nașterii copilului la consulatul din Germania? Formule A este, de obicei, varianta mai simplă. Ghid 2026.',
  keywords: [
    'formule a vs geburtsurkunde',
    'extras multilingv certificat nastere germania',
    'formule a sau geburtsurkunde transcriere romania',
    'apostila geburtsurkunde consulat roman',
    'formule a fara apostila romania',
    'internationaler auszug nastere copil romania',
    'ce document german transcriere nastere romania',
    'formule a standesamt germany',
    'geburtsurkunde apostila haga romania',
    'patronimic berlin formule a',
  ],
  openGraph: {
    title: 'Formule A vs Geburtsurkunde — Ce document alegi pentru transcriere România',
    description:
      'Formule A elimină de obicei apostila și traducerea. Există însă o excepție importantă pentru Berlin și patronimic.',
    url: 'https://actero.ro/formule-a-vs-geburtsurkunde',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/formule-a-vs-geburtsurkunde',
  },
}

const faqItems = [
  {
    question: 'Ce este Formule A?',
    answer:
      'Este extrasul multilingv de naștere, folosit tocmai pentru a simplifica recunoașterea documentului între statele semnatare.',
  },
  {
    question: 'Ce este Geburtsurkunde?',
    answer:
      'Este certificatul standard de naștere german. Este perfect valid, dar în practică poate însemna pași suplimentari pentru folosirea lui în România.',
  },
  {
    question: 'Care este recomandarea generală — Formule A sau Geburtsurkunde?',
    answer:
      'În cele mai multe cazuri, Formule A este varianta logică: mai puține formalități, mai puțin timp pierdut și aceeași utilitate practică pentru transcriere.',
  },
  {
    question: 'Cum obțin Formule A?',
    answer:
      'Îl ceri de la Standesamt-ul unde a fost înregistrată nașterea copilului. Important este să ceri explicit varianta internațională, nu certificatul standard.',
  },
  {
    question: 'Există situații când trebuie obligatoriu Geburtsurkunde?',
    answer:
      'Da, există o excepție importantă legată de Berlin și de cazurile în care unul dintre părinți are nume patronimic în actele românești.',
  },
  {
    question: 'Formule A este acceptat la toate consulatele românești din Germania?',
    answer:
      'În linii mari, da, cu excepția practică importantă pe care o verifici separat pentru Berlin și patronimic.',
  },
  {
    question: 'Apostila Haga pentru Geburtsurkunde se obține la consulat?',
    answer:
      'Nu. Apostila ține de autoritățile germane competente, nu de consulatul român.',
  },
  {
    question: 'Traducerea Geburtsurkunde trebuie legalizată sau doar autorizată?',
    answer:
      'În practică trebuie să te uiți la cerința exactă a consulatului, dar ideea principală rămâne aceeași: Geburtsurkunde adaugă pași pe care Formule A îi poate evita.',
  },
]

const howToSteps = [
  {
    name: 'Verifici dacă există excepția de patronimic',
    text: 'Dacă da și ești în aria Berlinului, trebuie să fii atent la varianta de document acceptată.',
  },
  {
    name: 'Ceri explicit Formule A la Standesamt',
    text: 'Nu cere generic certificatul de naștere, pentru că riști să primești direct varianta standard.',
  },
  {
    name: 'Verifici documentul primit',
    text: 'Asigură-te că datele copilului și ale părinților sunt corecte înainte să mergi mai departe.',
  },
  {
    name: 'Mergi pe fluxul corect de transcriere',
    text: 'După ce ai documentul bun, continui spre transcrierea la consulat.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/formule-a-vs-geburtsurkunde#article',
  headline: 'Formule A vs Geburtsurkunde — Ce document alegi pentru transcriere 2026',
  description:
    'Comparație între Formule A și Geburtsurkunde pentru transcrierea nașterii la consulatul din Germania.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/formule-a-vs-geburtsurkunde',
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
      name: 'Formule A vs Geburtsurkunde',
      item: 'https://actero.ro/formule-a-vs-geburtsurkunde',
    },
  ],
}

const sections = [
  {
    id: 'verdictul',
    title: 'Verdictul rapid — în cele mai multe cazuri alegi Formule A',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border-2 border-green-300 bg-green-50 p-4 text-center">
          <p className="mb-2 text-lg font-black text-green-900">
            Dacă nu intri pe excepția Berlin + patronimic, Formule A este de regulă alegerea corectă
          </p>
          <p className="text-sm text-green-800">
            Scutește pași, timp și costuri suplimentare și este, în practică, documentul pe care vrei să îl ai primul în mână.
          </p>
        </div>

        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="mb-1 font-semibold text-red-900">Excepție importantă — Berlin și patronimic</p>
          <p className="text-sm text-red-800">
            Dacă unul dintre părinți are nume patronimic în actele românești și ești în aria consulatului Berlin, regulile practice se schimbă și trebuie verificată varianta standard cu formalitățile ei suplimentare.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'ce-sunt',
    title: 'Ce sunt cele două documente',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-1 font-semibold text-green-900">Formule A</p>
            <p className="mb-2 text-xs font-medium text-green-700">Varianta internațională / multilingvă</p>
            <p className="text-sm text-green-800">
              Este documentul pe care îl vrei în mod normal pentru transcriere, tocmai pentru că simplifică recunoașterea lui în România.
            </p>
            <div className="mt-3 rounded-lg bg-green-100 p-2">
              <p className="text-xs font-medium text-green-800">Îl obții de la:</p>
              <p className="text-xs text-green-700">Standesamt-ul unde a fost înregistrată nașterea copilului.</p>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="mb-1 font-semibold text-gray-900">Geburtsurkunde</p>
            <p className="mb-2 text-xs font-medium text-gray-600">Certificatul standard german</p>
            <p className="text-sm text-gray-700">
              Este valid și oficial, dar pentru România înseamnă adesea un traseu mai lung, cu formalități suplimentare pe care Formule A le poate evita.
            </p>
            <div className="mt-3 rounded-lg bg-gray-100 p-2">
              <p className="text-xs font-medium text-gray-700">Pe scurt:</p>
              <p className="text-xs text-gray-600">îl poți folosi, dar de obicei cu mai mult efort.</p>
            </div>
          </div>
        </div>
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
              <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Criteriu</th>
              <th className="border border-gray-200 p-2 text-left font-semibold text-green-700">Formule A</th>
              <th className="border border-gray-200 p-2 text-left font-semibold text-gray-600">Geburtsurkunde</th>
            </tr>
          </thead>
          <tbody>
            {[
              { criteriu: 'Formalități suplimentare', a: 'Mai puține', g: 'Mai multe', highlight: true },
              { criteriu: 'Timp total până ești gata de consulat', a: 'Mai scurt', g: 'Mai lung', highlight: true },
              { criteriu: 'Cost total', a: 'Mai mic', g: 'Mai mare', highlight: true },
              { criteriu: 'Acceptare practică la consulate', a: 'Bună, cu excepția relevantă de Berlin + patronimic', g: 'Acceptat, dar mai încărcat procedural', highlight: false },
              { criteriu: 'Valabilitate juridică', a: 'Utilă pentru transcriere', g: 'Utilă pentru transcriere', highlight: false },
            ].map(({ criteriu, a, g, highlight }, index) => (
              <tr key={criteriu} className={highlight ? 'bg-green-50' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-200 p-2 text-xs font-medium text-gray-800">{criteriu}</td>
                <td className="border border-gray-200 p-2 text-xs text-green-700">{a}</td>
                <td className="border border-gray-200 p-2 text-xs text-gray-600">{g}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-1 text-xs text-gray-400">Rândurile verzi sunt avantajele decisive ale Formule A.</p>
      </div>
    ),
  },
  {
    id: 'patronimic-berlin',
    title: 'Excepția patronimic — Berlin',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="mb-2 font-semibold text-amber-900">Ce este numele patronimic</p>
          <p className="text-sm text-amber-800">
            Este acel tip de formulare din actele românești care introduce explicit filiația în nume. În practică, exact aici apare excepția importantă pentru Berlin.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-red-100 bg-red-50 p-3">
            <p className="mb-1 text-sm font-semibold text-red-800">Berlin + patronimic</p>
            <p className="text-xs text-red-700">Aici nu te mai bazezi pe scenariul simplu cu Formule A.</p>
          </div>
          <div className="rounded-lg border border-green-100 bg-green-50 p-3">
            <p className="mb-1 text-sm font-semibold text-green-800">Berlin fără patronimic</p>
            <p className="text-xs text-green-700">În mod normal rămâi pe varianta simplificată, cu Formule A.</p>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          Bonn, München și Stuttgart nu sunt menționate în această excepție în același mod practic.
        </p>
      </div>
    ),
  },
  {
    id: 'cerinte-per-consulat',
    title: 'Cerințele pentru documentul copilului per consulat',
    content: (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Consulat</th>
              <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Document recomandat</th>
              <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Excepție</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                consulat: 'Bonn',
                doc: 'Formule A',
                exceptie: 'Geburtsurkunde rămâne varianta mai încărcată procedural',
                highlight: false,
              },
              {
                consulat: 'München',
                doc: 'Formule A',
                exceptie: 'Geburtsurkunde rămâne varianta mai încărcată procedural',
                highlight: false,
              },
              {
                consulat: 'Stuttgart',
                doc: 'Formule A',
                exceptie: 'Geburtsurkunde rămâne varianta mai încărcată procedural',
                highlight: false,
              },
              {
                consulat: 'Berlin',
                doc: 'Formule A',
                exceptie: 'Dacă există patronimic la un părinte, verifici excepția și traseul se schimbă',
                highlight: true,
              },
            ].map(({ consulat, doc, exceptie, highlight }) => (
              <tr key={consulat} className={highlight ? 'bg-amber-50' : 'bg-white even:bg-gray-50'}>
                <td className="border border-gray-200 p-2 font-semibold text-gray-800">{consulat}</td>
                <td className="border border-gray-200 p-2 text-xs text-green-700">{doc}</td>
                <td className={`border border-gray-200 p-2 text-xs ${highlight ? 'font-medium text-amber-800' : 'text-gray-500'}`}>
                  {exceptie}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'cum-obtii-formule-a',
    title: 'Cum obții Formule A — pas cu pas',
    content: (
      <div className="space-y-3">
        <div className="space-y-2">
          {[
            {
              pas: '1. Identifici Standesamt-ul competent',
              detaliu: 'Este oficiul de stare civilă unde a fost înregistrată nașterea copilului.',
            },
            {
              pas: '2. Ceri explicit Formule A',
              detaliu: 'Nu cere generic certificatul de naștere, ci varianta internațională / multilingvă.',
            },
            {
              pas: '3. Plătești taxa locală',
              detaliu: 'Costul este de regulă moderat și mult mai avantajos decât traseul cu documentul standard plus formalități suplimentare.',
            },
            {
              pas: '4. Verifici datele înainte să pleci mai departe',
              detaliu: 'Asigură-te că numele, data nașterii și datele părinților sunt corecte.',
            },
          ].map(({ pas, detaliu }) => (
            <div key={pas} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-3">
              <div>
                <p className="text-sm font-medium text-gray-800">{pas}</p>
                <p className="mt-0.5 text-xs text-gray-600">{detaliu}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
          <p className="text-sm text-blue-800">
            Multe Standesamt-uri permit cererea prin corespondență sau online, deci poți evita un drum inutil chiar din acest pas.
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
            gresit: 'Cer certificatul standard de naștere fără să specific varianta dorită',
            corect: 'Trebuie să ceri explicit Formule A dacă vrei traseul simplificat.',
          },
          {
            gresit: 'Presupun că Formule A este mai slab juridic decât Geburtsurkunde',
            corect: 'Diferența practică ține de formalități, nu de ideea că unul ar fi „serios” și celălalt nu.',
          },
          {
            gresit: 'Nu verific excepția Berlin + patronimic',
            corect: 'Exact acolo se poate strica planul dacă pornești din presupunerea greșită.',
          },
          {
            gresit: 'Aleg varianta care pare familiară, nu pe cea care simplifică procesul',
            corect: 'Pentru transcriere, contează traseul complet, nu doar numele documentului.',
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
    title: 'Pagini conexe',
    content: (
      <div className="space-y-2">
        {[
          {
            text: 'Transcriere certificat de naștere — traseul complet',
            href: '/wizard?problem=transcriere-nastere',
            label: 'Începe transcrierea →',
          },
          {
            text: 'Tot traseul pentru copilul fără acte românești',
            href: '/acte-copil-nascut-in-germania',
            label: 'Ghid acte copil →',
          },
          {
            text: 'Pașaportul copilului după transcriere',
            href: '/pasaport-romania-germania',
            label: 'Ghid pașaport →',
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

export default function FormuleAVsGeburtsurkundePage() {
  return (
    <LlmOptimizedPage
      lpSlug="formule-a-vs-geburtsurkunde"
      lpTopic="copil"
      h1="Formule A vs Geburtsurkunde — ce alegi pentru transcrierea nașterii"
      intro="Când începi transcrierea nașterii copilului, alegerea documentului german potrivit îți poate scurta mult drumul. Una dintre variante îți simplifică masiv procesul, cealaltă îl poate încărca inutil, cu excepția unui caz foarte specific."
      tldr="În cele mai multe situații, Formule A este varianta logică pentru transcriere. Excepția importantă apare la Berlin când unul dintre părinți are nume patronimic în actele românești. Acolo trebuie verificat traseul special."
      ctaHref="/wizard?problem=transcriere-nastere"
      ctaLabel="Găsește traseul exact pentru copilul tău →"
      updatedAt="aprilie 2026"
      sourceNote="MAE, consulatele României din Germania"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi ce document să ceri sau dacă excepția Berlin se aplică la tine?"
      finalCtaText="ActeRO te ajută să alegi documentul potrivit pentru consulatul tău și să pornești transcrierea fără pași inutili."
    />
  )
}
