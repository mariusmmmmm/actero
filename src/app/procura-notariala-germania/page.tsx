import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Procură notarială din Germania — Consulat sau notar german? Ghid 2026',
  description:
    'Procură pentru vânzare, moștenire, divorț sau firmă la consulatul României din Germania. Programare pe econsulat.ro, eliberare în aceeași zi, taxa 3€ RNNEPR.',
  keywords: [
    'procura notariala germania',
    'procura consulat romania germania',
    'notar german procura romania',
    'procura vanzare proprietate germania',
    'procura mostenire germania',
    'rnnepr procura germania',
    'procura generala romania din germania',
    'procura divort germania',
    'procura firma romania din germania',
    'programare procura econsulat romania',
  ],
  openGraph: {
    title: 'Procură notarială din Germania — Consulat sau notar german? Ghid 2026',
    description:
      'Procuri pentru vânzare, moștenire, divorț sau firmă la consulatul României. Aceeași zi, taxa 3€ RNNEPR și diferențele per consulat.',
    url: 'https://www.actero.ro/procura-notariala-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/procura-notariala-germania',
  },
}

const faqItems = [
  {
    question: 'Pot face o procură la un notar german care să fie valabilă în România?',
    answer:
      'Da, dar este mult mai complicat și mai scump. O procură făcută la notar german trebuie apostilată, apoi tradusă și legalizată. Consulatul românesc din Germania eliberează procuri direct recunoscute în România, fără apostilă sau traducere.',
  },
  {
    question: 'Cât costă o procură la consulatul din Germania?',
    answer:
      'Taxa de bază importantă este cea de 3€ pentru înscrierea în RNNEPR. În funcție de tipul procurii pot exista și taxe consulare suplimentare. Procura se eliberează în aceeași zi.',
  },
  {
    question: 'Ce este RNNEPR și de ce trebuie să plătesc 3€?',
    answer:
      'RNNEPR este Registrul Național Notarial al Evidenței Procurilor și Revocărilor. Înscrierea unei procuri în acest registru este obligatorie și costă 3€.',
  },
  {
    question: 'Am nevoie de programare pentru a face o procură la consulat?',
    answer:
      'Da. Programarea se face obligatoriu pe econsulat.ro. Nu există serviciu walk-in pentru procuri notariale.',
  },
  {
    question: 'Procura se face în aceeași zi sau trebuie să revin?',
    answer:
      'Procura se eliberează în aceeași zi cu programarea la toate cele 4 consulate din Germania.',
  },
  {
    question: 'Cum plătesc taxa de 3€ la consulatul din Berlin?',
    answer:
      'La Berlin, taxa de 3€ RNNEPR se plătește exclusiv prin virament bancar, cu cel puțin 3–4 zile lucrătoare înainte de programare. Fără plata făcută în avans, procura nu poate fi eliberată.',
  },
  {
    question: 'Trebuie să știu exact datele notarului din România înainte de programare?',
    answer:
      'Nu neapărat. Dacă ai deja un notar ales, procura poate fi redactată mai specific. Dacă nu, procura se poate face în termeni mai generali și notarul din România va lucra cu ea.',
  },
  {
    question: 'O procură pentru vânzare de proprietate este diferită de una generală?',
    answer:
      'Da. Procura pentru vânzare sau cumpărare proprietate este mult mai specifică și include de regulă date despre imobil sau tranzacție. O procură generală poate fi prea vagă pentru o tranzacție imobiliară.',
  },
]

const howToSteps = [
  {
    name: 'Identifică tipul de procură',
    text: 'Vânzare sau cumpărare proprietate, moștenire ori succesiune sau altceva, cum ar fi divorț, firmă ori cont bancar.',
  },
  {
    name: 'Verifică dacă ai notar ales în România',
    text: 'Dacă ai notar ales, procura poate include datele lui. Dacă nu, se poate redacta într-o formă mai generală.',
  },
  {
    name: 'Plătește taxa de 3€ RNNEPR conform regulii consulatului tău',
    text: 'Berlin cere virament în avans. Stuttgart acceptă POS sau virament. Bonn cere EC-Karte, iar München cash.',
  },
  {
    name: 'Creează programarea pe econsulat.ro',
    text: 'Programarea este obligatorie. În funcție de consulat, poate fi nevoie și de documente scanate încărcate înainte.',
  },
  {
    name: 'Prezintă-te la consulat cu documentele originale',
    text: 'Procura se redactează, se semnează în fața funcționarului consular și se eliberează în aceeași zi.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/procura-notariala-germania#article',
  headline: 'Procură notarială din Germania — Consulat sau notar german? Ghid 2026',
  description:
    'Ghidul principal pentru procuri notariale la consulatul României din Germania: vânzare, moștenire, generală, taxa RNNEPR de 3€ și diferența dintre consulat și notar german.',
  datePublished: '2026-04-01',
  dateModified: '2026-04-01',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/procura-notariala-germania',
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
      name: 'Acte românești Germania',
      item: 'https://www.actero.ro/acte-romanesti-germania',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Procură notarială Germania',
      item: 'https://www.actero.ro/procura-notariala-germania',
    },
  ],
}

const sections = [
  {
    id: 'consulat-vs-notar',
    title: 'Consulat românesc sau notar german',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Întrebarea clasică este dacă nu cumva e mai simplu să mergi la un notar german local. Tehnic,
          se poate. Practic, <strong>consulatul românesc este aproape întotdeauna varianta mai simplă și mai ieftină</strong>.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-2 font-semibold text-green-900">Consulat românesc — varianta recomandată</p>
            <ul className="space-y-1 text-sm text-green-800">
              <li>procura este recunoscută direct în România</li>
              <li>nu ai nevoie de apostilă</li>
              <li>nu ai nevoie de traducere legalizată</li>
              <li>costul este mai mic</li>
              <li>procura se eliberează în aceeași zi</li>
              <li>documentul este redactat direct în română</li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="mb-2 font-semibold text-gray-800">Notar german — mai complicat</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>necesită apostilă Haga</li>
              <li>necesită traducere autorizată și legalizată</li>
              <li>costul total este de obicei mai mare</li>
              <li>durata totală este mai mare</li>
              <li>există risc de refuz sau neclarități la folosirea în România</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'tipuri',
    title: 'Tipul procurii tale',
    content: (
      <div className="space-y-3">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Ai nevoie de procură pentru</th>
                <th className="hidden border border-gray-200 p-2 text-left font-semibold text-gray-700 sm:table-cell">Notar ales?</th>
                <th className="hidden border border-gray-200 p-2 text-left font-semibold text-gray-700 sm:table-cell">Capcana frecventă</th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Ghid</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  scop: 'Vânzare sau cumpărare proprietate',
                  notar: 'Recomandat',
                  capcana: 'Procura generală poate fi refuzată de notarul imobiliar',
                  href: '/procura-vanzare-proprietate-germania',
                  label: 'Ghid proprietate →',
                },
                {
                  scop: 'Moștenire sau succesiune',
                  notar: 'Recomandat',
                  capcana: 'Datele incomplete încetinesc dosarul',
                  href: '/procura-mostenire-germania',
                  label: 'Ghid moștenire →',
                },
                {
                  scop: 'Divorț, firmă, cont bancar sau alt act',
                  notar: 'Opțional',
                  capcana: 'Procura prea generală poate fi refuzată',
                  href: '/procura-generala-germania',
                  label: 'Ghid procură generală →',
                },
              ].map(({ scop, notar, capcana, href, label }, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 p-2 font-medium text-gray-800">{scop}</td>
                  <td className="hidden border border-gray-200 p-2 text-xs text-gray-600 sm:table-cell">{notar}</td>
                  <td className="hidden border border-gray-200 p-2 text-xs text-red-600 sm:table-cell">{capcana}</td>
                  <td className="border border-gray-200 p-2">
                    <Link href={href} className="text-xs font-medium text-blue-600 underline hover:text-blue-800">
                      {label}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: 'ghiduri-specifice',
    title: 'Ghiduri specifice pe tipuri de procură',
    content: (
      <div className="space-y-2">
        {[
          {
            text: 'Consulat vs notar german pentru acte în România',
            href: '/procura-consulat-vs-notar-german',
            label: 'Comparație →',
          },
          {
            text: 'Procură pentru vânzare sau cumpărare proprietate',
            href: '/procura-vanzare-proprietate-germania',
            label: 'Ghid proprietate →',
          },
          {
            text: 'Procură pentru moștenire sau succesiune',
            href: '/procura-mostenire-germania',
            label: 'Ghid moștenire →',
          },
          {
            text: 'Procură generală pentru bancă, firmă sau alte acte',
            href: '/procura-generala-germania',
            label: 'Ghid general →',
          },
          {
            text: 'Procură pentru cont bancar în România',
            href: '/procura-cont-bancar-romania-din-germania',
            label: 'Ghid bancă →',
          },
          {
            text: 'Procură pentru divorț notarial',
            href: '/procura-divort-notarial-germania',
            label: 'Ghid divorț →',
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
  {
    id: 'rnnepr',
    title: 'Taxa de 3€ RNNEPR',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          RNNEPR este registrul național în care se înscriu procurile notariale. Înscrierea este obligatorie și costă <strong>3€</strong>.
        </p>

        <div className="mb-1 rounded-lg border border-amber-200 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            <strong>Atenție Berlin:</strong> taxa se plătește exclusiv prin virament bancar, cu cel puțin 3–4 zile lucrătoare înainte.
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {[
            {
              oras: 'Bonn',
              metoda: 'EC-Karte (card debit bancă germană)',
              timing: 'Ziua programării',
              alert: null,
            },
            {
              oras: 'München',
              metoda: 'Numerar (cash)',
              timing: 'Ziua programării',
              alert: null,
            },
            {
              oras: 'Stuttgart',
              metoda: 'POS sau virament bancar\nIBAN: DE04 1007 0000 0976 1909 01\nBIC: DEUTDEBBXXX',
              timing: 'POS în ziua programării\nVirament cu minimum 3 zile înainte',
              alert: null,
            },
            {
              oras: 'Berlin',
              metoda: 'Numai virament bancar\nIBAN: DE83 1007 0000 0435 4429 00\nBIC: DEUTDEBBXXX',
              timing: 'Minimum 3–4 zile lucrătoare înainte',
              alert: 'Fără virament în avans nu primești procura',
            },
          ].map(({ oras, metoda, timing, alert }) => (
            <div
              key={oras}
              className={`rounded-lg border p-3 ${alert ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-white'}`}
            >
              <p className="mb-1 font-semibold text-gray-900">{oras}</p>
              <p className="mb-1 whitespace-pre-line text-xs text-gray-700">💳 {metoda}</p>
              <p className="whitespace-pre-line text-xs text-gray-500">⏱ {timing}</p>
              {alert ? <p className="mt-1 text-xs font-semibold text-red-700">{alert}</p> : null}
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500">
          Taxa RNNEPR este separată de eventualele taxe consulare pentru redactarea procurii.
        </p>
      </div>
    ),
  },
  {
    id: 'bonn-regula',
    title: 'Regula specială Bonn',
    content: (
      <div className="space-y-2 rounded-xl border border-blue-100 bg-blue-50 p-4">
        <p className="font-semibold text-blue-900">Consulatul Bonn cere documente scanate pe econsulat.ro înainte de programare</p>
        <p className="text-sm text-blue-800">
          Dacă ești arondat la Bonn, încarci documentele necesare pe econsulat.ro înainte de ziua programării. Prezentarea fără documente scanate poate duce la respingerea cererii.
        </p>
        <p className="text-sm text-blue-800">
          La München, Stuttgart și Berlin accentul rămâne pe documentele originale aduse în ziua programării.
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
            gresit: 'Merg la un notar german pentru o procură folosită în România',
            corect:
              'Procura de la notar german necesită apostilă și traducere. Consulatul românesc este de obicei mai simplu și mai ieftin.',
          },
          {
            gresit: 'Nu trimit viramentul de 3€ în avans la Berlin',
            corect:
              'La Berlin, plata se face doar prin virament cu minimum 3–4 zile lucrătoare înainte.',
          },
          {
            gresit: 'Fac o procură generală pentru vânzare imobiliară',
            corect:
              'Pentru tranzacții imobiliare, procura trebuie să fie specifică și suficient de clară pentru notarul din România.',
          },
          {
            gresit: 'Nu știu că procura poate fi revocată',
            corect:
              'Procura poate fi revocată ulterior prin act notarial. Revocarea se înscrie și ea în RNNEPR.',
          },
          {
            gresit: 'La Bonn vin doar cu originalele, fără documente scanate',
            corect:
              'Bonn are regulă specială: documentele trebuie încărcate pe econsulat.ro înainte de programare.',
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
    id: 'wizard',
    title: 'Când folosești ghidul rapid ActeRO',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Dacă nu știi exact ce tip de procură ai nevoie, dacă trebuie notar ales sau nu ori cum plătești taxa de 3€ la consulatul tău, ghidul rapid îți dă traseul corect pentru situația ta.
        </p>
        <div className="space-y-2 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-medium text-gray-800">Ghidul rapid te ajută să afli:</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>tipul corect de procură pentru cazul tău</li>
            <li>dacă ai nevoie de notar ales în România</li>
            <li>cum și când plătești taxa RNNEPR</li>
            <li>lista exactă de documente originale</li>
            <li>dacă ți se aplică regula specială de la Bonn</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'pagini-conexe',
    title: 'Pagini conexe pentru programare și cazuri speciale',
    content: (
      <div className="grid gap-3 sm:grid-cols-2">
        <Link href="/programare-econsulat-germania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Cum funcționează econsulat.ro</p>
          <p className="mt-1 text-sm text-gray-600">Urmărește validarea, categoria corectă și momentul potrivit pentru programare.</p>
        </Link>
        <Link href="/programare-consulat-romania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Programare la consulat în Germania</p>
          <p className="mt-1 text-sm text-gray-600">Pagina generică pentru programare, reguli și capcane înainte de depunere.</p>
        </Link>
        <Link href="/procura-consulat-vs-notar-german" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Consulat vs notar german</p>
          <p className="mt-1 text-sm text-gray-600">Comparația completă dacă încă eziți între cele două variante.</p>
        </Link>
        <Link href="/acte-romanesti-germania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Toate actele din Germania</p>
          <p className="mt-1 text-sm text-gray-600">Hubul principal pentru pașaport, buletin, titlu de călătorie și procuri.</p>
        </Link>
      </div>
    ),
  },
]

export default function ProcuraNotarialaGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="procura-notariala-germania"
      lpTopic="procura"
      h1="Procură notarială din Germania — consulat sau notar german?"
      intro="Ai ceva de rezolvat în România și nu poți merge personal. Consulatul României din Germania emite procuri notariale direct recunoscute în România, în aceeași zi, fără apostilă și fără traducere. Dar taxa de 3€ RNNEPR și regulile de plată diferă per consulat."
      tldr="Procura se face, de regulă, la consulat, nu la notar german. Programare obligatorie pe econsulat.ro. Taxă RNNEPR: 3€. Berlin cere virament în avans, iar Bonn are regulă specială pentru documente scanate. Procura se eliberează în aceeași zi."
      ctaHref="/wizard?problem=procura"
      ctaLabel="Găsește tipul de procură potrivit →"
      updatedAt="aprilie 2026"
      sourceNote="Consulatele României din Germania, RNNEPR — date verificate live per consulat"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi exact ce procură ai nevoie?"
      finalCtaText="Spune în ghidul rapid pentru ce ai nevoie de procură și din ce land ești. Primești tipul corect de procură, lista de documente și instrucțiunile exacte pentru taxa de 3€ la consulatul tău."
    />
  )
}
