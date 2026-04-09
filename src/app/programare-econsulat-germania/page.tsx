import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Programare econsulat.ro din Germania — Cum funcționează, când apar locuri | ActeRO',
  description:
    'Econsulat.ro: fluxul complet cerere → validată → programare, când apar locuri noi, greșelile de selecție a serviciului și de ce programările sunt gratuite.',
  keywords: [
    'programare econsulat germania',
    'econsulat validata',
    'econsulat programari consulat germania',
    'econsulat ro cum functioneaza',
    'econsulat in asteptare',
    'econsulat nu gasesc programare',
    'econsulat serviciu gresit',
    'econsulat pasaport crds germania',
    'cand apar locuri econsulat',
    'programare gratuita consulat romania',
  ],
  openGraph: {
    title: 'Programare econsulat.ro din Germania — Cum funcționează, când apar locuri',
    description:
      'Fluxul complet cerere → validată → programare, când apar locuri noi și care sunt greșelile frecvente pe econsulat.',
    url: 'https://actero.ro/programare-econsulat-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/programare-econsulat-germania',
  },
}

const faqItems = [
  {
    question: 'De ce nu pot face programarea imediat după ce am trimis cererea?',
    answer:
      'Pentru că programarea devine disponibilă doar după ce cererea trece din „În așteptare” în „Validată”. Validarea este un pas separat și nu apare instant.',
  },
  {
    question: 'Cât durează validarea cererii?',
    answer:
      'Nu există un termen fix public. În practică poate dura de la câteva ore la câteva zile lucrătoare, în funcție de consulat și de calitatea documentelor încărcate.',
  },
  {
    question: 'Când apar locuri noi de programare pe econsulat.ro?',
    answer:
      'Locurile apar când se validează cereri sau se eliberează programări. În practică, mulți utilizatori observă mai des mișcare luni dimineața, dar nu există un calendar oficial fix.',
  },
  {
    question: 'Programările pe econsulat.ro sunt gratuite?',
    answer:
      'Da, complet gratuite. Nu există taxă pentru cont sau pentru obținerea unei programări.',
  },
  {
    question: 'Cererea mea a fost respinsă. Ce fac?',
    answer:
      'Trebuie să verifici motivul respingerii și să corectezi problema: document neclar, serviciu ales greșit sau date personale greșite. După aceea refaci cererea corect.',
  },
  {
    question: 'Am selectat tipul greșit de pașaport. Ce fac?',
    answer:
      'Tipul de serviciu nu se repară elegant după trimitere. În practică, de regulă trebuie refăcută cererea pe categoria corectă.',
  },
  {
    question: 'Pot avea mai multe cereri active simultan?',
    answer:
      'Tehnic se poate întâmpla, dar nu este o idee bună pentru același serviciu. Creează confuzie și complică urmărirea statusului.',
  },
  {
    question: 'Econsulat.ro se folosește și pentru titlul de călătorie?',
    answer:
      'Nu. Titlul de călătorie are un flux separat și, în practică, nu funcționează ca un serviciu clasic cu programare pe econsulat.',
  },
]

const howToSteps = [
  {
    name: 'Creezi contul pe econsulat.ro',
    text: 'Contul este gratuit și este primul pas înainte de orice cerere.',
  },
  {
    name: 'Selectezi tipul corect de serviciu',
    text: 'Aceasta este una dintre cele mai importante decizii, fiindcă o selecție greșită poate bloca tot fluxul.',
  },
  {
    name: 'Încarci documentele clar și complet',
    text: 'Fișierele neclare, incomplete sau prea mari duc frecvent la blocaje sau respingeri.',
  },
  {
    name: 'Aștepți validarea cererii',
    text: 'Abia după validare apare posibilitatea reală de programare.',
  },
  {
    name: 'Alegi slotul disponibil',
    text: 'Verifici periodic, fără să plătești intermediari pentru ceva ce este gratuit.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/programare-econsulat-germania#article',
  headline: 'Programare econsulat.ro din Germania — Cum funcționează, când apar locuri 2026',
  description:
    'Ghid despre fluxul econsulat.ro: stările cererii, validarea, alegerea serviciului și momentele în care apar locuri noi.',
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/programare-econsulat-germania',
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
      name: 'Programare econsulat Germania',
      item: 'https://actero.ro/programare-econsulat-germania',
    },
  ],
}

const sections = [
  {
    id: 'flux-stari',
    title: 'Fluxul complet al unei cereri — de ce nu apare programarea imediat',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Cea mai frecventă confuzie este să crezi că după ce trimiți cererea poți selecta
          imediat o programare. Nu așa funcționează. Programarea apare doar după validare.
        </p>

        <div className="flex flex-col gap-2">
          {[
            {
              stare: '1. Cont creat',
              descriere: 'Ai cont și poți începe o cerere.',
              color: 'border-gray-300 bg-gray-100',
              icon: '👤',
            },
            {
              stare: '2. Cerere trimisă — În așteptare',
              descriere: 'Cererea intră în coada de verificare.',
              color: 'border-blue-200 bg-blue-50',
              icon: '⏳',
            },
            {
              stare: '3. Cerere validată',
              descriere: 'Abia acum poți alege efectiv un slot de programare.',
              color: 'border-green-200 bg-green-50',
              icon: '✅',
            },
            {
              stare: '4. Programare selectată',
              descriere: 'Slotul este ales și confirmat în cont.',
              color: 'border-green-200 bg-green-50',
              icon: '📅',
            },
            {
              stare: '5. Prezentare la consulat',
              descriere: 'Mergi cu documentele originale la data programată.',
              color: 'border-green-200 bg-green-50',
              icon: '🏛️',
            },
          ].map(({ stare, descriere, color, icon }) => (
            <div key={stare} className={`flex gap-3 rounded-lg border p-3 ${color}`}>
              <span className="flex-shrink-0 text-lg">{icon}</span>
              <div>
                <p className="text-sm font-semibold text-gray-800">{stare}</p>
                <p className="mt-0.5 text-xs text-gray-600">{descriere}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Dacă starea rămâne mult timp în „În așteptare”, prima suspiciune sănătoasă este
            calitatea documentelor încărcate sau alegerea greșită a serviciului.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'selectie-serviciu',
    title: 'Greșeala #1 — tipul de serviciu selectat greșit',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Alegerea serviciului greșit este cauza principală pentru cereri respinse sau
          validate greșit.
        </p>

        <div className="space-y-2">
          {[
            {
              situatie: 'Domiciliu în Germania și ai nevoie de pașaport CRDS',
              corect: 'Pașaport CRDS',
              gresit: 'Pașaport standard',
              impact: 'Cerințele diferă și te poate bloca.',
            },
            {
              situatie: 'Domiciliu în România și ai nevoie de pașaport standard',
              corect: 'Pașaport simplu electronic',
              gresit: 'Pașaport CRDS',
              impact: 'Dosarul nu mai corespunde serviciului ales.',
            },
            {
              situatie: 'Ai nevoie de procură notarială',
              corect: 'Serviciul notarial potrivit',
              gresit: 'O altă categorie generică',
              impact: 'Cererea ajunge pe flux greșit.',
            },
            {
              situatie: 'Ai nevoie de transcriere certificat de naștere',
              corect: 'Categoria de stare civilă corespunzătoare',
              gresit: 'Alt serviciu',
              impact: 'Cazul este procesat greșit sau respins.',
            },
          ].map(({ situatie, corect, gresit, impact }) => (
            <div key={situatie} className="rounded-lg border border-gray-200 bg-white p-3">
              <p className="mb-2 text-sm font-semibold text-gray-800">{situatie}</p>
              <div className="grid gap-1 text-xs sm:grid-cols-2">
                <div className="rounded bg-green-50 p-2">
                  <p className="mb-0.5 font-semibold text-green-700">Corect</p>
                  <p className="text-green-800">{corect}</p>
                </div>
                <div className="rounded bg-red-50 p-2">
                  <p className="mb-0.5 font-semibold text-red-700">Greșit frecvent</p>
                  <p className="text-red-800">{gresit}</p>
                </div>
              </div>
              <p className="mt-1.5 text-xs text-gray-500">Impact: {impact}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'documente-scanate',
    title: 'Documentele scanate — cerințe tehnice',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Fișierele neclare sau prea mari sunt a doua mare sursă de probleme pe econsulat.
        </p>

        <div className="grid gap-2 sm:grid-cols-3">
          {[
            { label: 'Format acceptat', value: 'JPG sau PDF' },
            { label: 'Dimensiune maximă', value: 'Sub 2 MB per fișier' },
            { label: 'Calitate recomandată', value: 'Document clar și complet' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-center">
              <p className="mb-1 text-xs text-gray-500">{label}</p>
              <p className="text-sm font-semibold text-gray-800">{value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {[
            {
              tip: 'Scanează sau fotografiază frontal',
              detaliu: 'Pozele în unghi sau cu umbre creează probleme la verificare.',
            },
            {
              tip: 'Documentul trebuie să fie complet vizibil',
              detaliu: 'Fără colțuri tăiate și fără zone lipsă.',
            },
            {
              tip: 'Comprimă fișierele dacă sunt prea mari',
              detaliu: 'Important este să rămână lizibile, nu doar mici.',
            },
          ].map(({ tip, detaliu }) => (
            <div key={tip} className="rounded-lg border border-gray-200 bg-white p-3">
              <p className="text-sm font-medium text-gray-800">{tip}</p>
              <p className="mt-0.5 text-xs text-gray-600">{detaliu}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'cand-apar-locuri',
    title: 'Când apar locuri noi de programare',
    content: (
      <div className="space-y-3">
        <p className="text-gray-700">
          Nu există un program oficial simplu pentru apariția locurilor, dar există câteva
          momente când probabilitatea este mai mare.
        </p>

        <div className="space-y-2">
          {[
            {
              moment: 'Luni dimineața',
              explicatie: 'Este unul dintre momentele observate frecvent în practică.',
            },
            {
              moment: 'După anulări',
              explicatie: 'Când cineva anulează, slotul se poate elibera rapid.',
            },
            {
              moment: 'După sesiuni de validare',
              explicatie: 'Când sunt validate mai multe cereri, pot deveni vizibile mai multe sloturi.',
            },
          ].map(({ moment, explicatie }) => (
            <div key={moment} className="rounded-lg border border-gray-200 bg-white p-3">
              <p className="mb-1 text-sm font-semibold text-gray-800">🕐 {moment}</p>
              <p className="text-xs text-gray-600">{explicatie}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="mb-1 font-semibold text-red-900">
            Programările sunt gratuite
          </p>
          <p className="text-sm text-red-800">
            Nu plăti intermediari pentru ceva ce platforma oferă gratuit.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'stari-cerere',
    title: 'Ce înseamnă fiecare stare a cererii',
    content: (
      <div className="space-y-2">
        {[
          {
            stare: 'În așteptare',
            culoare: 'bg-yellow-100 text-yellow-800',
            explicatie: 'Cererea este trimisă, dar încă neverificată.',
            actiune: 'Aștepți și verifici dacă documentele sunt bune.',
          },
          {
            stare: 'Validată',
            culoare: 'bg-green-100 text-green-800',
            explicatie: 'Acum poți alege programarea.',
            actiune: 'Intri și selectezi slotul disponibil.',
          },
          {
            stare: 'Respinsă',
            culoare: 'bg-red-100 text-red-800',
            explicatie: 'Există o problemă cu documentele sau cu tipul de serviciu.',
            actiune: 'Corectezi și refaci cererea.',
          },
          {
            stare: 'Programată',
            culoare: 'bg-blue-100 text-blue-800',
            explicatie: 'Ai un slot confirmat.',
            actiune: 'Pregătești documentele originale pentru ziua programării.',
          },
          {
            stare: 'Finalizată',
            culoare: 'bg-gray-100 text-gray-700',
            explicatie: 'Cererea a fost deja procesată.',
            actiune: 'Nu mai ai pași noi pe acest flux.',
          },
        ].map(({ stare, culoare, explicatie, actiune }) => (
          <div key={stare} className="rounded-lg border border-gray-200 bg-white p-3">
            <div className="mb-1 flex items-center gap-2">
              <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${culoare}`}>
                {stare}
              </span>
            </div>
            <p className="mb-1 text-xs text-gray-700">{explicatie}</p>
            <p className="text-xs font-medium text-blue-700">→ {actiune}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'greseli',
    title: 'Greșeli frecvente pe econsulat.ro',
    content: (
      <div className="space-y-2">
        {[
          {
            gresit: 'Încerci să faci programarea imediat după trimiterea cererii',
            corect: 'Aștepți mai întâi validarea.',
          },
          {
            gresit: 'Selectezi serviciul greșit',
            corect: 'Alegi serviciul exact pentru situația ta, nu unul asemănător.',
          },
          {
            gresit: 'Încarci documente neclare',
            corect: 'Folosești fișiere lizibile și complete.',
          },
          {
            gresit: 'Plătești un intermediar',
            corect: 'Programările sunt gratuite.',
          },
          {
            gresit: 'Faci mai multe cereri simultan pentru același lucru',
            corect: 'Păstrezi un flux clar și eviți dublurile inutile.',
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
    id: 'dupa-econsulat',
    title: 'După econsulat, continui pe ghidul actului tău',
    content: (
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          {
            href: '/pasaport-romania-germania',
            title: 'Pașaport',
            text: 'Pentru CRDS, domiciliu în România, expirat sau pierdut.',
          },
          {
            href: '/procura-notariala-germania',
            title: 'Procură',
            text: 'Pentru proprietate, moștenire, bancă, divorț și alte situații notariale.',
          },
          {
            href: '/transcriere-certificat-nastere-germania',
            title: 'Transcriere',
            text: 'Pentru copilul născut în Germania și traseul ulterior către pașaport sau buletin.',
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
    id: 'acte-fara-econsulat',
    title: 'Acte care NU necesită econsulat.ro',
    content: (
      <div className="space-y-2">
        <p className="text-sm text-gray-700">
          Nu toate actele consulare trec prin aceeași logică de programare.
        </p>
        {[
          {
            act: 'Titlu de călătorie',
            detaliu: 'Are un flux separat față de serviciile clasice din econsulat.',
            href: '/titlu-calatorie-germania',
            label: 'Ghid titlu de călătorie →',
          },
          {
            act: 'Ridicare documente',
            detaliu: 'Se face de regulă în programul dedicat de ridicare.',
            href: null,
            label: null,
          },
        ].map(({ act, detaliu, href, label }) => (
          <div
            key={act}
            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3"
          >
            <div>
              <p className="text-sm font-medium text-gray-800">{act}</p>
              <p className="text-xs text-gray-600">{detaliu}</p>
            </div>
            {href && label ? (
              <Link
                href={href}
                className="ml-3 flex-shrink-0 text-xs font-medium text-blue-600 underline hover:text-blue-800"
              >
                {label}
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    ),
  },
]

export default function ProgramareEconsulatGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="programare-econsulat-germania"
      lpTopic="econsulat"
      h1="Programare pe econsulat.ro din Germania — cum funcționează și când apar locuri"
      intro="Econsulat creează confuzie pentru foarte mulți oameni pentru că butonul de programare nu apare imediat după trimiterea cererii. În realitate, mai întâi cererea trebuie validată, iar abia apoi poți vedea și selecta un slot disponibil."
      tldr="Fluxul corect este: cerere trimisă → în așteptare → validată → programare. Cele mai frecvente probleme sunt alegerea greșită a serviciului, documentele neclare și așteptarea programării înainte de validare."
      ctaHref="/pasaport-romania-germania"
      ctaLabel="Vezi un exemplu complet de flux care folosește econsulat →"
      updatedAt="aprilie 2026"
      sourceNote="econsulat.ro și regulile practice observate pe fluxurile consulare"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Ai înțeles econsulatul, dar nu știi pe ce ghid continui?"
      finalCtaText="După pagina asta, mută-te direct pe ghidul de pașaport, procură sau transcriere care corespunde serviciului tău real."
    />
  )
}
