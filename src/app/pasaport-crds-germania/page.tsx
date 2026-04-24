import type { Metadata } from 'next'
import Link from 'next/link'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Pașaport CRDS din Germania — Ce este, cine îl face, ce documente',
  description:
    'Pașaportul CRDS se face dacă domiciliul oficial e în Germania, nu în România. Fără fotografii, fără Aufenthaltstitel, CI se anulează. Ghid complet 2026.',
  keywords: [
    'pasaport crds germania',
    'domiciliu germania pasaport romanesc',
    'ce inseamna crds pasaport',
    'pasaport crds ce este',
    'pasaport romanesc fara domiciliu romania',
    'pasaport crds diferenta pasaport standard',
    'crds econsulat romania',
    'pasaport simplu electronic crds germania',
    'ce documente pasaport crds germania',
    'carte identitate anulata pasaport crds',
  ],
  openGraph: {
    title: 'Pașaport CRDS din Germania — Ce este, cine îl face, ce documente',
    description:
      'CRDS înseamnă domiciliu oficial în Germania. Fără fotografii proprii, CI se anulează și ai nevoie de document de domiciliu german.',
    url: 'https://www.actero.ro/pasaport-crds-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.actero.ro/pasaport-crds-germania',
  },
}

const faqItems = [
  {
    question: 'Ce înseamnă CRDS pe pașaport?',
    answer:
      'CRDS arată că domiciliul tău oficial este în afara României, în cazul nostru în Germania. Mențiunea apare pe pașaport și înlocuiește logica domiciliului în România.',
  },
  {
    question: 'Cum știu dacă am nevoie de pașaport CRDS sau de pașaport standard?',
    answer:
      'Dacă nu mai ai domiciliu activ în România și nu ai carte de identitate valabilă cu adresă din România, ești în mod normal pe fluxul CRDS. Dacă ai domiciliu activ în România, rămâi pe fluxul standard.',
  },
  {
    question: 'Trebuie să aduc fotografii pentru pașaportul CRDS?',
    answer:
      'Nu. La toate cele 4 consulate din Germania, imaginea facială pentru pașaportul CRDS se preia biometric direct la ghișeu.',
  },
  {
    question: 'Ce se întâmplă cu cartea de identitate românească dacă primesc pașaport CRDS?',
    answer:
      'Cartea de identitate românească va fi anulată la eliberarea noului pașaport CRDS. Este un pas normal și obligatoriu dacă domiciliul tău oficial este în Germania.',
  },
  {
    question: 'Am Aufenthaltstitel. Este document necesar?',
    answer:
      'Nu. Aufenthaltstitel-ul nu apare în listele oficiale ca document necesar pentru pașaportul CRDS.',
  },
  {
    question: 'Ce document din Germania dovedește domiciliul pentru pașaportul CRDS?',
    answer:
      'Meldebescheinigung, Anmeldung sau Personalausweis german, în original, emis în ultimii 5 ani. Nu necesită apostilă și nici traducere.',
  },
  {
    question: 'Pot face pașaport CRDS dacă m-am născut în Germania și nu am CNP?',
    answer:
      'Da, dar înainte trebuie făcută transcrierea certificatului de naștere german în registrele românești. Abia după aceea poți continua cu pașaportul.',
  },
  {
    question: 'Cât costă pașaportul CRDS și cât durează?',
    answer:
      'Taxa este 53€ la toate cele 4 consulate. Termenul de procesare este de 45 de zile lucrătoare de la depunere, la care se adaugă timpul de așteptare pentru programare.',
  },
]

const howToSteps = [
  {
    name: 'Verifică dacă te califici pentru CRDS',
    text: 'Nu mai ai domiciliu activ în România, nu ai carte de identitate valabilă cu adresă din România și ai domiciliul principal în Germania.',
  },
  {
    name: 'Identifică sub-situația ta',
    text: 'Poate fi vorba de un pașaport anterior expirat, pierdut sau de primul pașaport. Fiecare sub-caz pornește din aceeași logică CRDS, dar are nuanțe proprii.',
  },
  {
    name: 'Scanează documentele și creează cererea pe econsulat.ro',
    text: 'Selectezi obligatoriu serviciul de pașaport CRDS și încarci documentele scanate.',
  },
  {
    name: 'Obții programarea și te prezinți cu originalele',
    text: 'Te prezinți la consulat cu documentele originale. Nu aduci fotografii proprii și plătești taxa conform regulii consulatului tău.',
  },
  {
    name: 'Ridici pașaportul după termenul de procesare',
    text: 'Verifici statusul pe site-ul consulatului și te prezinți la ridicare fără programare suplimentară.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.actero.ro/pasaport-crds-germania#article',
  headline: 'Pașaport CRDS din Germania — Ce este, cine îl face, ce documente 2026',
  description:
    'Ghid despre pașaportul CRDS pentru românii cu domiciliu în Germania: ce înseamnă, cine se califică și ce diferă față de pașaportul standard.',
  datePublished: '2026-04-01',
  dateModified: '2026-04-01',
  author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
  mainEntityOfPage: 'https://www.actero.ro/pasaport-crds-germania',
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
      name: 'Pașaport CRDS Germania',
      item: 'https://www.actero.ro/pasaport-crds-germania',
    },
  ],
}

const sections = [
  {
    id: 'ce-este-crds',
    title: 'Ce înseamnă CRDS',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="mb-2 font-semibold text-blue-900">CRDS înseamnă domiciliu oficial în Germania</p>
          <p className="text-sm text-blue-800">
            Dacă domiciliul tău oficial nu mai este în România, ci în Germania, pașaportul pe care îl soliciți intră pe fluxul CRDS.
          </p>
        </div>
        <p className="text-sm text-gray-700">
          Diferența față de pașaportul standard este procedurală: ce alegi pe econsulat.ro, ce documente aduci și ce se întâmplă cu cartea de identitate românească.
        </p>
        <div className="grid gap-2 sm:grid-cols-3 text-sm">
          {[
            { label: 'Selectezi pe econsulat.ro', value: 'Pașaport simplu electronic CRDS' },
            { label: 'Document adresă', value: 'Meldebescheinigung / Anmeldung / Personalausweis german' },
            { label: 'Fotografii proprii', value: 'Nu — biometric la ghișeu' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg border border-gray-200 bg-white p-3">
              <p className="mb-1 text-xs text-gray-500">{label}</p>
              <p className="font-medium text-gray-800">{value}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'te-califici',
    title: 'Ești pe fluxul CRDS?',
    content: (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="mb-2 font-semibold text-green-900">Ești CRDS dacă:</p>
            <ul className="space-y-1 text-sm text-green-800">
              <li>nu mai ai domiciliu activ în România</li>
              <li>nu ai carte de identitate valabilă cu adresă din România</li>
              <li>domiciliul tău principal este în Germania</li>
              <li>ai avut deja un pașaport CRDS</li>
            </ul>
          </div>

          <div className="rounded-xl border border-red-100 bg-red-50 p-4">
            <p className="mb-2 font-semibold text-red-900">Nu ești CRDS dacă:</p>
            <ul className="space-y-1 text-sm text-red-800">
              <li>ai carte de identitate valabilă cu adresă din România</li>
              <li>menții domiciliu activ în România</li>
              <li>stai în Germania doar temporar</li>
            </ul>
            <p className="mt-2 text-xs text-red-700">
              În aceste cazuri mergi pe fluxul standard de pașaport.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
          <p className="text-sm text-amber-800">
            Dacă ultimul tău pașaport avea deja mențiunea CRDS, ești foarte probabil pe același flux și acum.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'sub-situatii',
    title: 'Situația ta exactă',
    content: (
      <div className="space-y-2">
        {[
          {
            icon: '📗',
            titlu: 'Pașaport CRDS anterior expirat sau deteriorat',
            descriere: 'Cel mai comun caz: ai mai avut pașaport CRDS și a expirat sau s-a deteriorat.',
            href: '/pasaport-expirat-germania',
            label: 'Ghid reînnoire pașaport expirat →',
            color: 'border-green-200 bg-green-50',
            textColor: 'text-green-900',
            linkColor: 'text-green-700',
          },
          {
            icon: '🔴',
            titlu: 'Pașaport CRDS anterior pierdut sau furat',
            descriere: 'Ai mai avut pașaport CRDS, dar l-ai pierdut sau ți-a fost furat.',
            href: '/wizard?problem=pasaport',
            label: 'Vezi traseul în ghidul rapid →',
            color: 'border-red-100 bg-red-50',
            textColor: 'text-red-900',
            linkColor: 'text-red-700',
          },
          {
            icon: '🆕',
            titlu: 'Primul pașaport CRDS — născut în România',
            descriere: 'Nu ai mai avut niciodată pașaport, dar ai CNP și domiciliul este în Germania.',
            href: '/wizard?problem=pasaport',
            label: 'Vezi traseul în ghidul rapid →',
            color: 'border-blue-100 bg-blue-50',
            textColor: 'text-blue-900',
            linkColor: 'text-blue-700',
          },
          {
            icon: '🧒',
            titlu: 'Primul pașaport CRDS — născut în Germania',
            descriere: 'Înainte de pașaport trebuie transcris certificatul de naștere german.',
            href: '/acte-copil-nascut-in-germania',
            label: 'Ghid acte copil / varianta pașaport →',
            color: 'border-purple-100 bg-purple-50',
            textColor: 'text-purple-900',
            linkColor: 'text-purple-700',
          },
        ].map(({ icon, titlu, descriere, href, label, color, textColor, linkColor }) => (
          <div key={titlu} className={`flex gap-3 rounded-xl border p-4 ${color}`}>
            <span className="flex-shrink-0 text-2xl">{icon}</span>
            <div>
              <p className={`mb-1 font-semibold ${textColor}`}>{titlu}</p>
              <p className="mb-2 text-sm text-gray-600">{descriere}</p>
              <Link href={href} className={`text-sm font-medium underline hover:opacity-80 ${linkColor}`}>
                {label}
              </Link>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'documente',
    title: 'Documentele necesare pentru pașaport CRDS',
    content: (
      <div className="space-y-3">
        <div className="space-y-2">
          {[
            {
              required: true,
              doc: 'Pașaportul anterior',
              detaliu:
                'Original. Dacă este doar expirat sau deteriorat, îl aduci. Dacă este pierdut sau furat, intri pe alt sub-caz.',
            },
            {
              required: true,
              doc: 'Certificat de naștere românesc',
              detaliu:
                'Original. Dacă este plastifiat sau deteriorat, trebuie înlocuit înainte de programare.',
            },
            {
              required: true,
              doc: 'Document de domiciliu în Germania',
              detaliu:
                'Meldebescheinigung, Anmeldung sau Personalausweis german, în original, emis în ultimii 5 ani.',
            },
            {
              required: false,
              label: 'dacă o ai',
              doc: 'Carte de identitate românească',
              detaliu:
                'O aduci chiar și expirată. Va fi anulată la eliberarea pașaportului CRDS.',
            },
            {
              required: false,
              label: 'condiționat',
              doc: 'Certificat de căsătorie românesc',
              detaliu:
                'Doar dacă ți-ai schimbat numele prin căsătorie.',
            },
          ].map(({ required, doc, detaliu, label }) => (
            <div key={doc} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-3">
              <span className="flex-shrink-0 text-lg">{required ? '✅' : '⚪'}</span>
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

        <div className="space-y-1 rounded-lg border border-blue-100 bg-blue-50 p-3">
          <p className="text-xs font-semibold text-blue-800">Fotografii: NU sunt necesare</p>
          <p className="text-xs text-blue-700">
            La toate cele 4 consulate, imaginea facială se preia biometric la ghișeu.
          </p>
          <p className="text-xs text-blue-700">
            <strong>Nu ai nevoie de:</strong> Aufenthaltstitel, apostilă sau traduceri pentru documentele germane de domiciliu.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'diferente',
    title: 'CRDS vs pașaport standard — diferențele în practică',
    content: (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Aspect</th>
              <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">CRDS</th>
              <th className="border border-gray-200 p-2 text-left font-semibold text-gray-700">Standard</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                aspect: 'Ce selectezi pe econsulat.ro',
                crds: 'Pașaport simplu electronic CRDS',
                std: 'Pașaport simplu electronic',
              },
              {
                aspect: 'Fotografii proprii',
                crds: 'Nu',
                std: 'Da, în general 2 bucăți',
              },
              {
                aspect: 'Document adresă',
                crds: 'Document german de domiciliu',
                std: 'Nu, adresa este pe CI',
              },
              {
                aspect: 'CI românească',
                crds: 'Se anulează la eliberare',
                std: 'Rămâne document principal',
              },
              {
                aspect: 'Aufenthaltstitel necesar',
                crds: 'Nu',
                std: 'Nu',
              },
            ].map(({ aspect, crds, std }, i) => (
              <tr key={aspect} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-200 p-2 text-xs font-medium text-gray-800">{aspect}</td>
                <td className="border border-gray-200 p-2 text-xs text-blue-700">{crds}</td>
                <td className="border border-gray-200 p-2 text-xs text-green-700">{std}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'ci-anulata',
    title: 'Ce se întâmplă cu cartea de identitate',
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
          <p className="mb-2 font-semibold text-orange-900">Cartea de identitate românească va fi anulată</p>
          <p className="text-sm text-orange-800">
            Dacă primești pașaport CRDS, cartea de identitate cu adresă din România devine incompatibilă cu noul tău domiciliu oficial și este anulată la eliberare.
          </p>
        </div>

        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>De ce se anulează?</strong> Pentru că nu poți avea simultan domiciliu oficial în Germania și o carte de identitate activă cu adresă din România.
          </p>
          <p>
            <strong>Este o problemă?</strong> Nu. Este pasul normal al procedurii.
          </p>
          <p>
            <strong>Dacă vrei să revii cu domiciliul în România?</strong> Poți solicita ulterior o nouă carte de identitate prin procedura de restabilire a domiciliului.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'greseli',
    title: 'Greșeli frecvente pe fluxul CRDS',
    content: (
      <div className="space-y-2">
        {[
          {
            gresit: 'Selectez pașaport standard când domiciliul meu este în Germania',
            corect:
              'Dacă nu mai ai domiciliu activ în România, trebuie să alegi fluxul CRDS.',
          },
          {
            gresit: 'Nu aduc cartea de identitate expirată pentru că nu mai este valabilă',
            corect:
              'Dacă o ai, merită s-o aduci. Consulatul o anulează în cadrul procedurii.',
          },
          {
            gresit: 'Aduc fotografii biometrice pentru CRDS',
            corect:
              'Pentru CRDS fotografiile proprii nu sunt necesare. Imaginea se preia la ghișeu.',
          },
          {
            gresit: 'Aduc Aufenthaltstitel în loc de document de domiciliu',
            corect:
              'Documentele de domiciliu relevante sunt Meldebescheinigung, Anmeldung sau Personalausweis german.',
          },
          {
            gresit: 'Cred că pașaportul CRDS mă împiedică să mai fac acte în România',
            corect:
              'Pașaportul CRDS rămâne un document românesc valid. Poți continua să faci acte în România când ai nevoie.',
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
          Dacă ai confirmat că ești pe fluxul CRDS, dar nu ești sigur de situația exactă, ghidul rapid îți spune ce traseu ți se aplică și ce documente trebuie să pregătești.
        </p>
        <div className="space-y-2 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-medium text-gray-800">Ghidul rapid te ajută să afli:</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>sub-situația ta exactă</li>
            <li>ce se întâmplă cu cartea de identitate</li>
            <li>ce documente lipsesc sau trebuie înlocuite</li>
            <li>cum plătești la consulatul tău specific</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'pagini-conexe',
    title: 'Pagini conexe din clusterul pașaport Germania',
    content: (
      <div className="grid gap-3 sm:grid-cols-2">
        <Link href="/pasaport-romania-germania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Hub pașaport Germania</p>
          <p className="mt-1 text-sm text-gray-600">Vezi toate variantele: CRDS, domiciliu în România, expirat, pierdut sau copil.</p>
        </Link>
        <Link href="/pasaport-crds-vs-pasaport-cu-domiciliu-romania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">CRDS vs domiciliu în România</p>
          <p className="mt-1 text-sm text-gray-600">Comparatorul care te ajută să alegi serviciul corect pe econsulat.</p>
        </Link>
        <Link href="/programare-econsulat-germania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Programare pe econsulat.ro</p>
          <p className="mt-1 text-sm text-gray-600">Pașii platformei, validarea și greșelile frecvente la alegerea serviciului.</p>
        </Link>
        <Link href="/transcriere-certificat-nastere-germania" className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50">
          <p className="font-semibold text-gray-900">Transcriere pentru copil născut în Germania</p>
          <p className="mt-1 text-sm text-gray-600">Obligatorie înainte de primul pașaport CRDS pentru copil fără CNP.</p>
        </Link>
      </div>
    ),
  },
]

export default function PasaportCRDSGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="pasaport-crds-germania"
      lpTopic="pasaport"
      h1="Pașaport CRDS din Germania — ce este, cine îl face și ce diferă"
      intro="CRDS nu este un tip special de pașaport, ci mențiunea care arată că domiciliul tău oficial este în Germania, nu în România. Dacă nu mai ai adresă activă în România, acesta este fluxul care ți se aplică."
      tldr="CRDS înseamnă domiciliu în Germania. Nu aduci fotografii proprii, cartea de identitate românească se anulează la eliberare și ai nevoie de document de domiciliu german. Taxă: 53€. Termen: 45 zile lucrătoare."
      ctaHref="/wizard?problem=pasaport"
      ctaLabel="Confirmă traseul tău în 30 de secunde →"
      updatedAt="aprilie 2026"
      sourceNote="MAE, econsulat.ro, consulatele României din Germania — date verificate live"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={sections}
      finalCtaTitle="Ești pe CRDS dar nu știi exact ce sub-situație ai?"
      finalCtaText="Ghidul rapid ActeRO îți confirmă dacă ești pe fluxul CRDS, identifică situația exactă și îți dă lista completă de documente pentru consulatul tău."
    />
  )
}
