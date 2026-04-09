import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Pașaport pierdut sau furat în Germania — Ce faci imediat | ActeRO',
  description:
    'Pașaport românesc pierdut sau furat în Germania: ordinea pașilor, declarația la ghișeu și diferențele practice pe consulat. Ghid 2026.',
  keywords: [
    'pasaport pierdut germania',
    'pasaport furat germania',
    'declaratie consulat pasaport pierdut',
    'adeverinta politie pasaport furat germania',
    'traducere adeverinta furt pasaport romania',
    'pasaport distrus deteriorat germania',
    'pasaport pierdut crds germania',
    'blocare pasaport furat mai romania',
    'declaratie pierdere pasaport consulat',
    'ce documente pasaport pierdut consulat germania',
  ],
  openGraph: {
    title: 'Pașaport pierdut sau furat în Germania — Ce faci imediat',
    description:
      'Ordinea pașilor pentru pierdere sau furt, plus ce se schimbă la dosar și la consulat.',
    url: 'https://actero.ro/pasaport-pierdut-furat-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/pasaport-pierdut-furat-germania',
  },
}

const faqItems = [
  {
    question: 'Pașaportul meu a fost furat în Germania. Ce fac imediat?',
    answer:
      'Dacă este furt, trebuie să separi foarte clar partea locală din Germania de partea consulară. Prima reacție practică nu este identică cu cea pentru pierdere.',
  },
  {
    question: 'Trebuie să pregătesc o declarație de pierdere înainte de a merge la consulat?',
    answer:
      'Nu. Aceasta este una dintre cele mai frecvente confuzii: declarația nu se pregătește acasă, ci se gestionează la ghișeu.',
  },
  {
    question: 'Am nevoie de traducerea adeverinței de poliție pentru toate consulatele?',
    answer:
      'Nu toate consulatele tratează identic acest pas. Aici apar diferențe practice importante care merită verificate înainte să plătești traducerea.',
  },
  {
    question: 'Este diferit dacă domiciliul meu este în Germania față de cel din România?',
    answer:
      'Da. Fluxul de documente și unele cerințe se schimbă în funcție de CRDS versus domiciliu în România.',
  },
  {
    question: 'Pașaportul meu a fost distrus sau deteriorat fizic — e același traseu?',
    answer:
      'Nu chiar. Când documentul există fizic, chiar deteriorat, logica procedurală diferă de cazul în care el lipsește complet.',
  },
  {
    question: 'Pot face un pașaport nou dacă nu am alt act de identitate?',
    answer:
      'Da, situația poate fi rezolvată și fără un alt act la îndemână, dar trebuie înțeles corect cum se face identificarea.',
  },
  {
    question: 'Cât costă și cât durează noul pașaport după pierdere sau furt?',
    answer:
      'Costul și termenul nu sunt principalul lucru care se schimbă aici. Diferența importantă este la pașii și documentele de urgență.',
  },
  {
    question: 'Dacă am pașaportul pierdut și nu am nicio altă formă de identificare, cum plec în România?',
    answer:
      'Există o soluție de urgență pentru întoarcerea în România, dacă nu poți aștepta noul pașaport.',
  },
]

const howToSteps = [
  {
    name: 'Clarifici dacă e pierdut, furat sau deteriorat',
    text: 'De aici pleacă toată logica următorilor pași.',
  },
  {
    name: 'Dacă e furt, rezolvi și partea locală din Germania',
    text: 'Nu amesteca obligațiile față de poliția locală cu ce cere efectiv consulatul.',
  },
  {
    name: 'Verifici cerința consulatului pentru documente suplimentare',
    text: 'Aici apar diferențe practice mai ales la adeverință și traducere.',
  },
  {
    name: 'Faci cererea pe fluxul corect',
    text: 'Trebuie să fie corelată și cu situația ta de domiciliu, nu doar cu faptul că pașaportul lipsește.',
  },
  {
    name: 'Te prezinți la consulat cu dosarul complet',
    text: 'Declarația, identificarea și restul verificărilor se rezolvă la ghișeu.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/pasaport-pierdut-furat-germania#article',
  headline: 'Pașaport pierdut sau furat în Germania — Ce faci imediat 2026',
  description:
    'Ghid pentru pașaport românesc pierdut sau furat în Germania: ordine de pași, diferențe între pierdere și furt și orientare pe consulat.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/pasaport-pierdut-furat-germania',
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
      name: 'Pașaport pierdut / furat Germania',
      item: 'https://actero.ro/pasaport-pierdut-furat-germania',
    },
  ],
}

const sections = [
  {
    id: 'urgenta',
    title: 'Ce faci imediat — în funcție de ce s-a întâmplat',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              icon: 'FURAT',
              titlu: 'Furt',
              pasi: [
                'Te ocupi de partea locală din Germania',
                'Separi rapid pasul de blocare de pasul de consulat',
                'Pregătești dovada de care ai nevoie',
                'Abia apoi continui spre consulat',
              ],
              color: 'border-red-200 bg-red-50',
              titleColor: 'text-red-900',
              textColor: 'text-red-800',
            },
            {
              icon: 'PIERDUT',
              titlu: 'Pierdere',
              pasi: [
                'Nu pornești automat spre poliție',
                'Nu pregătești declarația acasă',
                'Te concentrezi pe fluxul consular',
                'Mergi pe traseul corect al cererii',
              ],
              color: 'border-orange-200 bg-orange-50',
              titleColor: 'text-orange-900',
              textColor: 'text-orange-800',
            },
            {
              icon: 'DETERIORAT',
              titlu: 'Distrus / deteriorat',
              pasi: [
                'Nu intri pe aceeași logică de pierdere/furt',
                'Dacă documentul există fizic, îl aduci',
                'Te uiți la fluxul de reînnoire',
              ],
              color: 'border-gray-200 bg-gray-50',
              titleColor: 'text-gray-900',
              textColor: 'text-gray-700',
            },
          ].map(({ icon, titlu, pasi, color, titleColor, textColor }) => (
            <div key={titlu} className={`rounded-xl border p-4 ${color}`}>
              <p className={`mb-2 text-lg font-bold ${titleColor}`}>{icon}</p>
              <p className={`mb-2 text-sm font-semibold ${titleColor}`}>{titlu}</p>
              <ol className="space-y-1">
                {pasi.map((pas, index) => (
                  <li key={index} className={`flex gap-2 text-xs ${textColor}`}>
                    <span className="flex-shrink-0 font-bold">{index + 1}.</span>
                    {pas}
                  </li>
                ))}
              </ol>
              {titlu === 'Distrus / deteriorat' ? (
                <Link
                  href="/pasaport-expirat-germania"
                  className="mt-2 inline-block text-xs text-gray-600 underline hover:text-gray-900"
                >
                  Ghid pașaport expirat / deteriorat →
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'traducere-politie',
    title: 'Adeverință poliție + traducere — diferit per consulat',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-700">
          Aici apar diferențe practice importante. Nu toate consulatele tratează la fel adeverința de la poliție și forma traducerii.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Consulat</th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Adeverință poliție</th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Traducere</th>
                <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Observație</th>
              </tr>
            </thead>
            <tbody>
              {[
                { consulat: 'Bonn', adeverinta: 'Importantă', traducere: 'Mai relaxată', tip: 'Verifici regula locală actuală', highlight: false },
                { consulat: 'München', adeverinta: 'Importantă', traducere: 'Necesită atenție', tip: 'De regulă autorizată', highlight: false },
                { consulat: 'Stuttgart', adeverinta: 'Importantă', traducere: 'Mai strictă', tip: 'Aici trebuie verificată cu mare atenție', highlight: true },
                { consulat: 'Berlin', adeverinta: 'Importantă', traducere: 'Necesită atenție', tip: 'De regulă autorizată', highlight: false },
              ].map(({ consulat, adeverinta, traducere, tip, highlight }) => (
                <tr key={consulat} className={highlight ? 'bg-amber-50' : 'bg-white even:bg-gray-50'}>
                  <td className="border border-gray-200 p-2 font-semibold text-gray-800">{consulat}</td>
                  <td className="border border-gray-200 p-2 text-gray-700">{adeverinta}</td>
                  <td className="border border-gray-200 p-2 text-gray-700">{traducere}</td>
                  <td className={`border border-gray-200 p-2 text-xs ${highlight ? 'font-semibold text-amber-800' : 'text-gray-600'}`}>
                    {tip}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
            <p className="mb-1 text-sm font-semibold text-gray-800">Traducere autorizată</p>
            <p className="text-xs text-gray-600">
              În multe cazuri aceasta este suficientă, dar nu porni din presupunerea că regula este identică la toate consulatele.
            </p>
          </div>
          <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
            <p className="mb-1 text-sm font-semibold text-amber-900">Cazul mai strict</p>
            <p className="text-xs text-amber-800">
              Tocmai aici oamenii pierd timp și bani dacă nu verifică dinainte cerința corectă.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'documente',
    title: 'Documentele necesare — pe situație și domiciliu',
    content: (
      <div className="space-y-4">
        <div>
          <p className="mb-2 font-semibold text-gray-900">Domiciliu Germania (CRDS)</p>
          <div className="space-y-2">
            {[
              { req: true, doc: 'Certificat de naștere românesc', detaliu: 'Original și în stare bună.' },
              { req: true, doc: 'Document de domiciliu în Germania', detaliu: 'Dovada domiciliului pentru fluxul CRDS.' },
              { req: false, label: 'dacă o ai', doc: 'Carte de identitate românească', detaliu: 'Poate ajuta la identificare.' },
              { req: false, label: 'dacă a fost furat', doc: 'Adeverință poliție + traducere', detaliu: 'Conform regulii consulatului tău.' },
              { req: false, label: 'dacă a fost pierdut', doc: 'Declarație pe proprie răspundere', detaliu: 'Se completează la ghișeu.' },
            ].map(({ req, doc, detaliu, label }) => (
              <div key={`crds-${doc}`} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-3">
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
          <p className="mt-2 rounded p-2 text-xs text-blue-700 bg-blue-50">
            Pe CRDS, fotografiile proprii nu sunt necesare.
          </p>
        </div>

        <div>
          <p className="mb-2 font-semibold text-gray-900">Domiciliu România</p>
          <div className="space-y-2">
            {[
              { req: true, doc: 'Carte de identitate valabilă cu domiciliu în România', detaliu: 'Documentul central al fluxului standard.' },
              { req: true, doc: 'Certificat de naștere românesc', detaliu: 'Original și în stare bună.' },
              { req: true, doc: 'Fotografii biometrice', detaliu: 'Cu excepția situațiilor locale precum München.' },
              { req: false, label: 'dacă a fost furat', doc: 'Adeverință poliție + traducere', detaliu: 'Conform regulii consulatului tău.' },
              { req: false, label: 'dacă a fost pierdut', doc: 'Declarație pe proprie răspundere', detaliu: 'Se completează la ghișeu.' },
            ].map(({ req, doc, detaliu, label }) => (
              <div key={`ro-${doc}`} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-3">
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
      </div>
    ),
  },
  {
    id: 'blocare-mai',
    title: 'Blocarea documentului furat în sistem',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="mb-2 font-semibold text-red-900">Dacă pașaportul a fost furat, tratează-l ca urgență reală</p>
          <p className="text-sm text-red-800">
            Un pașaport furat nu este doar un document lipsă, ci și un risc până când situația lui este clarificată și blocată corespunzător.
          </p>
        </div>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            În practică, primul reflex bun este să te ocupi repede de blocare și de dovada furtului, nu să aștepți calm programarea ca și cum ar fi doar un document expirat.
          </p>
          <p>
            După ce ajungi la consulat și depui corect, vechiul document intră pe traseul de anulare și noul dosar merge înainte.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'urgenta-plecare',
    title: 'Trebuie să pleci urgent și nu poți aștepta',
    content: (
      <div className="space-y-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <p className="font-semibold text-amber-900">Ai nevoie să te întorci rapid în România?</p>
        <p className="text-sm text-amber-800">
          Dacă nu poți aștepta emiterea unui nou pașaport, există varianta titlului de călătorie pentru întoarcerea urgentă în România.
        </p>
        <Link
          href="/titlu-calatorie-urgenta-germania"
          className="inline-block text-sm font-medium text-amber-900 underline hover:text-amber-700"
        >
          Ghid titlu de călătorie urgent →
        </Link>
      </div>
    ),
  },
  {
    id: 'greseli',
    title: 'Greșeli frecvente care îi blochează pe oameni',
    content: (
      <div className="space-y-2">
        {[
          {
            gresit: 'Pregătesc declarația de pierdere acasă și o aduc printată',
            corect: 'Declarația se completează la ghișeul consulatului.',
          },
          {
            gresit: 'Plătesc traducerea fără să știu exact ce cere consulatul meu',
            corect: 'Verifici întâi cerința locală, pentru că nu toate consulatele merg la fel.',
          },
          {
            gresit: 'Tratez furtul ca pe o pierdere banală',
            corect: 'Furtul are o logică de urgență și de blocare care trebuie luată în serios.',
          },
          {
            gresit: 'Nu disting între pierdere și deteriorare',
            corect: 'Dacă documentul există fizic, chiar deteriorat, traseul nu mai este același cu pierderea sau furtul.',
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
    id: 'wizard',
    title: 'Când folosești ghidul rapid ActeRO',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Dacă nu ești sigur ce documente aduci exact, ce tip de traducere îți trebuie sau ce se schimbă între CRDS și domiciliu în România, ghidul rapid îți scurtează mult drumul.
        </p>
        <div className="space-y-2 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-medium text-gray-800">Ghidul rapid te ajută să afli:</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>ce logică ți se aplică în ziua constatării pierderii sau furtului</li>
            <li>ce consulat și ce flux ți se aplică</li>
            <li>ce documente pregătești concret</li>
            <li>ce alternativă ai dacă trebuie să pleci urgent</li>
          </ul>
        </div>
      </div>
    ),
  },
]

export default function PasaportPierdutFuratGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="pasaport-pierdut-furat-germania"
      lpTopic="pasaport"
      h1="Pașaport românesc pierdut sau furat în Germania — ce faci imediat"
      intro="Dacă pașaportul lipsește, primul lucru nu este să te gândești la noul document, ci să clarifici ce s-a întâmplat: este pierdut, furat sau doar deteriorat? Din răspunsul ăsta pornește tot traseul corect."
      tldr="Furtul, pierderea și deteriorarea nu au aceeași logică practică. La pierdere nu pregătești declarația acasă. La furt trebuie tratată rapid și partea de blocare și dovadă. Dacă ai nevoie să pleci urgent, există și alternativa titlului de călătorie."
      ctaHref="/titlu-calatorie-urgenta-germania"
      ctaLabel="Dacă trebuie să pleci repede, vezi titlul de călătorie urgent →"
      updatedAt="aprilie 2026"
      sourceNote="MAE, consulatele României din Germania"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Nu știi dacă trebuie să refaci pașaportul sau să mergi pe soluția de urgență?"
      finalCtaText="Dacă nu poți aștepta programarea și emiterea unui nou pașaport, mută-te direct pe ghidul pentru titlu de călătorie urgent."
    />
  )
}
