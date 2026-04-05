import type { Metadata } from 'next'
import LlmOptimizedPage from '@/components/seo/LlmOptimizedPage'

export const metadata: Metadata = {
  title: 'Pașaport expirat în Germania? Ghid complet 2026 — ActeRO',
  description: 'Cum reînnoiești pașaportul românesc din Germania, pas cu pas. CRDS vs domiciliu RO, consulate München · Bonn · Stuttgart · Berlin, taxe, program, documente.',
  keywords: ['pasaport expirat germania', 'pasaport crds', 'reinnoire pasaport germania', 'consulat romania germania', 'econsulat programare pasaport'],
  openGraph: {
    title: 'Pașaport expirat în Germania — Ghid complet',
    description: 'Ghid personalizat: CRDS, documente, consulate, taxe, trucuri programare.',
    url: 'https://actero.ro/pasaport-expirat-germania',
    type: 'article',
  },
  alternates: {
    canonical: 'https://actero.ro/pasaport-expirat-germania',
  },
}

const faqItems = [
  {
    question: 'Cât costă reînnoirea pașaportului în Germania în 2026?',
    answer: 'Taxa pentru pașaport românesc în Germania este 53€, achitată la consulat. Metoda de plată diferă: München acceptă exclusiv numerar (cash), Bonn acceptă EC-Karte, Stuttgart acceptă POS sau transfer bancar. Taxa este valabilă din 1 octombrie 2025.',
  },
  {
    question: 'Ce este pașaportul CRDS și cine îl poate obține?',
    answer: 'Pașaportul CRDS (Certificat de Reședință în Domiciliu Străin) se eliberează românilor care au domiciliul oficial înregistrat în Germania, nu în România. Are mențiunea domiciliu Germania, este valabil 10 ani și permite înregistrarea adresei germane ca domiciliu oficial. Se obține exclusiv la consulatele României din Germania.',
  },
  {
    question: 'Cât durează să primesc pașaportul după depunere?',
    answer: 'Pașaportul se produce la București și se trimite la consulat. Durata estimată este 6-10 săptămâni de la depunerea cererii la consulat. Se poate verifica statusul online pe pagina consulatului respectiv.',
  },
  {
    question: 'Trebuie să aduc fotografii la consulat pentru pașaport?',
    answer: 'Nu. Fotografiile pentru pașaportul românesc se fac direct la consulat, în format electronic (biometric). Nu este necesar să aduci fotografii de acasă. Este recomandat să porți îmbrăcăminte de culoare închisă.',
  },
  {
    question: 'Cum obțin programare la consulat pentru pașaport?',
    answer: 'Programările se obțin exclusiv pe econsulat.ro, după ce cererea de pașaport trece în starea Validată. Programările noi se eliberează de obicei luni dimineața la 08:00. Intrați pe platformă exact la 08:00 pentru cele mai bune șanse.',
  },
  {
    question: 'Pot ridica pașaportul prin poștă din Germania?',
    answer: 'Da, consulatele din München și Stuttgart oferă opțiunea de ridicare a pașaportului prin poștă. La München trebuie depus un plic C5 autoadresat și timbrat. La Stuttgart se bifează opțiunea în portalul econsulat.ro. La Bonn și Berlin ridicarea se face personal.',
  },
]

const howToSteps = [
  {
    name: 'Scanează documentele',
    text: 'Scanează toate documentele necesare: pașaport vechi (chiar dacă e expirat), certificat de naștere românesc, document de domiciliu german (Anmeldung/Meldebescheinigung).',
  },
  {
    name: 'Creează cont pe econsulat.ro',
    text: 'Accesează econsulat.ro și creează un cont cu adresa de email. Nu este necesar CNP-ul pentru înregistrare.',
  },
  {
    name: 'Inițiază cererea de pașaport',
    text: 'Login → Cerere nouă → Pașapoarte → Pașaport simplu electronic CRDS. Completează formularul și încarcă documentele scanate. Trimite cererea — starea devine În așteptare.',
  },
  {
    name: 'Obține programarea',
    text: 'Așteaptă validarea cererii (1-3 zile lucrătoare). Luni la 08:00 intră pe econsulat.ro și selectează prima dată disponibilă la consulatul tău.',
  },
  {
    name: 'Prezintă-te la consulat',
    text: 'Vino cu documentele în original + câte o copie din fiecare. Fotografiile se fac la consulat. Plătești taxa: 53€ (metodă de plată specifică per consulat).',
  },
  {
    name: 'Ridică pașaportul',
    text: 'Verifică statusul pe pagina consulatului. Când e disponibil, te prezinți în programul de ridicare (fără programare). München și Stuttgart oferă și opțiune prin poștă.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://actero.ro/pasaport-expirat-germania#article',
  headline: 'Pașaport expirat în Germania — Ghid complet 2026',
  description: 'Ghid complet pentru reînnoirea pașaportului românesc din Germania: CRDS, documente, consulate, taxe, programare pe econsulat.ro.',
  datePublished: '2026-01-01',
  dateModified: '2026-04-01',
  author: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://actero.ro/#organization' },
  mainEntityOfPage: 'https://actero.ro/pasaport-expirat-germania',
  about: [
    { '@type': 'Thing', name: 'Pașaport românesc' },
    { '@type': 'Thing', name: 'Consulatul României Germania' },
    { '@type': 'Thing', name: 'econsulat.ro' },
  ],
  mentions: [
    { '@type': 'Organization', name: 'Consulatul General al României în München', address: 'Richard-Strauss-Strasse 149, 81679 München' },
    { '@type': 'Organization', name: 'Consulatul General al României la Bonn', address: 'Legionsweg 14, 53117 Bonn' },
    { '@type': 'Organization', name: 'Consulatul General al României la Stuttgart' },
    { '@type': 'Organization', name: 'Ambasada României la Berlin' },
  ],
  inLanguage: 'ro',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ActeRO', item: 'https://actero.ro' },
    { '@type': 'ListItem', position: 2, name: 'Pașaport expirat Germania', item: 'https://actero.ro/pasaport-expirat-germania' },
  ],
}

export default function PasaportExpiratGermaniaPage() {
  return (
    <LlmOptimizedPage
      lpSlug="pasaport-expirat-germania"
      lpTopic="pasaport"
      h1="Pașaport expirat în Germania?"
      intro="Ghidul tău exact — adaptat pentru consulatul tău din Germania. Fără drumuri degeaba."
      tldr="Românii din Germania pot reînnoi pașaportul la unul din cele 4 consulate (München, Bonn, Stuttgart, Berlin). Taxa este 53€, durata 6-10 săptămâni, fotografiile se fac la consulat. Cei cu domiciliu în Germania obțin pașaport CRDS; cei cu domiciliu în România obțin pașaport clasic. Programarea se face pe econsulat.ro, de obicei disponibilă luni la 08:00."
      ctaHref="/wizard?problem=pasaport"
      ctaLabel="Rezolvă gratuit în 30 de secunde →"
      updatedAt="aprilie 2026"
      sourceNote="muenchen.mae.ro, bonn.mae.ro, stuttgart.mae.ro, berlin.mae.ro"
      faqItems={faqItems}
      howToSteps={howToSteps}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      sections={[
        {
          id: 'context',
          title: 'De ce e diferit dacă ești în Germania',
          content: (
            <>
              <p className="mb-3">În Germania, pașaportul se rezolvă exclusiv prin consulatele României și prin platforma econsulat.ro. Diferența mare față de informațiile vechi de pe internet este că trebuie să știi clar dacă intri pe fluxul de pașaport CRDS sau pe fluxul de pașaport cu domiciliu în România.</p>
              <p>Dacă alegi greșit serviciul, poți pierde timp, programare și răbdare. De aceea merită să pornești cu situația ta exactă, nu cu o listă generică.</p>
            </>
          ),
        },
        {
          id: 'situations',
          title: 'Care e situația ta?',
          content: (
            <>
              <p className="mb-3"><strong>1. Domiciliu în Germania:</strong> dacă nu mai ai adresă activă în România, vei solicita pașaport CRDS. Acesta are mențiunea de domiciliu în străinătate și este varianta potrivită pentru mulți români stabiliți în Germania.</p>
              <p><strong>2. Domiciliu în România:</strong> dacă încă ai domiciliul oficial în România, vei solicita pașaport simplu electronic standard. Procedura seamănă, dar selecția serviciului în econsulat.ro este diferită.</p>
            </>
          ),
        },
        {
          id: 'consulates',
          title: 'Consulatul tău în Germania',
          content: (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th scope="col" className="py-2 pr-3">Consulat</th>
                  <th scope="col" className="py-2 pr-3">Landuri</th>
                  <th scope="col" className="py-2 pr-3">Metodă plată 53€</th>
                  <th scope="col" className="py-2">Program ridicare</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="py-3 pr-3"><strong>München</strong> — Richard-Strauss-Str. 149</td>
                  <td className="py-3 pr-3">Bayern</td>
                  <td className="py-3 pr-3">Numerar (cash)</td>
                  <td className="py-3">Luni–Joi 14:00–16:00</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="py-3 pr-3"><strong>Bonn</strong> — Legionsweg 14</td>
                  <td className="py-3 pr-3">NRW, RP, HE, SL, NI, HB, HH, SH</td>
                  <td className="py-3 pr-3">EC-Karte</td>
                  <td className="py-3">Luni–Joi 14:00–15:00</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="py-3 pr-3"><strong>Stuttgart</strong> — Hauptstätter Str. 70</td>
                  <td className="py-3 pr-3">Baden-Württemberg</td>
                  <td className="py-3 pr-3">POS sau transfer bancar</td>
                  <td className="py-3">Luni–Vineri 10:00–14:00</td>
                </tr>
                <tr className="align-top">
                  <td className="py-3 pr-3"><strong>Berlin</strong> — Dorotheenstrasse 62-66</td>
                  <td className="py-3 pr-3">Berlin, BB, SN, ST, TH, MV</td>
                  <td className="py-3 pr-3">—</td>
                  <td className="py-3">Luni–Vineri 13:00–14:00</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          id: 'mistakes',
          title: 'Greșeli care te trimit acasă de la ghișeu',
          content: (
            <ul className="list-disc pl-5 space-y-2">
              <li>Alegi serviciul greșit în econsulat.ro: CRDS vs pașaport standard.</li>
              <li>Încarci documente ilizibile sau incomplete și cererea rămâne blocată la validare.</li>
              <li>Te prezinți fără copiile simple ale documentelor originale.</li>
              <li>Nu verifici metoda de plată a consulatului și ajungi cu cardul la München sau cu cash la Bonn.</li>
            </ul>
          ),
        },
      ]}
      finalCtaTitle="Ghidul tău personalizat, pas cu pas"
      finalCtaText="ActeRO îți arată exact ce documente ai nevoie, cum obții programarea și ce se întâmplă la consulat — personalizat pentru consulatul tău din Germania."
    />
  )
}
