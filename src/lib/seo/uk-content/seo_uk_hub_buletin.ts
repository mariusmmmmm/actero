// SEO PAGE COPY — /buletin-romanesc-anglia
// Tip: HUB · buletin/CI românesc din UK
// Component: LlmOptimizedPage
// Surse: ghiduri #11-UK, #12-UK, #13-UK verificate live — Aprilie 2026

export const metadata = {
  title: 'Buletin românesc din Anglia — Ghid complet 2026 | ActeRO',
  description:
    'Carte de identitate românească din UK: procură reînnoire, prima CI minor 14+, prima CI adult 18+. Londra: 6 fotografii. Manchester/Edinburgh: 5. CI se procesează în România.',
  keywords: [
    'buletin romanesc anglia',
    'buletin romania anglia',
    'carte de identitate romaneasca anglia',
    'procura buletin anglia',
    'buletin romanesc reinnoire anglia',
    'prima carte de identitate anglia',
    'procura ci anglia consulat',
    'fotografii procura buletin anglia',
  ],
  alternates: { canonical: 'https://www.actero.ro/buletin-romanesc-anglia' },
  openGraph: {
    title: 'Buletin românesc din Anglia — Ghid 2026',
    description: 'Procură reînnoire CI, prima CI minor sau adult — la consulatele din UK. CI se procesează în România. Fotografii: 6 Londra, 5 Manchester/Edinburgh.',
    url: 'https://www.actero.ro/buletin-romanesc-anglia',
    type: 'article',
  },
};

export const pageProps = {
  lpSlug: 'buletin-romanesc-anglia',
  lpTopic:
    'Ghid pentru obținerea sau reînnoirea cărții de identitate românești din Marea Britanie. CI se procesează în România — consulatul autentifică procura sau preia cererea. Fotografii necesare diferă: 6 la Londra, 5 la Manchester și Edinburgh. Prima CI nu poate fi solicitată prin procură.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Buletin românesc Anglia', href: '/buletin-romanesc-anglia' },
  ],

  h1: 'Buletin românesc din Anglia — cum îl obții sau reînnoiești',

  tldr: {
    label: 'Răspuns rapid:',
    text:
      'Cartea de identitate românească nu se eliberează la consulat — se procesează în România. Consulatul autentifică procura prin care împuterniciți pe cineva din România să depună cererea, sau preia cererea direct (prima CI). Fotografii necesare: 6 la Londra, 5 la Manchester și Edinburgh.',
  },

  intro:
    'Primul lucru de stabilit: ai mai avut CI sau buletin românesc anterior? Procedura diferă complet.',

  ctaLabel: 'Vreau traseul exact pentru situația mea →',
  ctaHref: '/wizard?problem=buletin&tara=uk',
  ctaNote: 'Fără cont · Gratuit',

  sourceNote: 'Actualizat: aprilie 2026 · Surse: cglondra.mae.ro · manchester.mae.ro · edinburgh.mae.ro',

  sections: [
    {
      id: 'decision',
      title: 'Care este situația ta?',
      type: 'decision',
      options: [
        {
          label: 'Reînnoire CI (ai mai avut CI sau buletin anterior)',
          description: 'CI expirată, pierdută, furată, deteriorată, sau ai schimbat numele.',
          keyFact: 'Se face prin PROCURĂ autentificată la consulat. Cineva din România depune cererea la SPCLEP.',
          requirements: [
            'CI sau pașaport valabil pentru autentificare',
            'Fotografii: 6 (Londra) / 5 (Manchester, Edinburgh)',
            'Datele complete ale persoanei împuternicite din România',
          ],
          guideHref: '/wizard?problem=buletin&tara=uk',
          guideLabel: 'Ghid procura CI →',
          badge: 'Reînnoire',
          processingTime: '3–6 luni Londra/Manchester · 6–9 luni Edinburgh',
        },
        {
          label: 'Prima CI — minor 14–18 ani',
          description: 'Nicio CI anterioară. Minorul s-a născut sau a crescut fără să fi făcut CI vreodată.',
          keyFact: 'NU se poate face prin procură. Minorul se prezintă personal la consulat.',
          requirements: [
            'Minor prezent + 1 parties (Londra/Manchester) sau ambii parties (Edinburgh)',
            'Fotografii: 2 (Londra/Manchester) · 4 (Edinburgh)',
            'Edinburgh: document britanic justificativ + 2 traduceri',
          ],
          guideHref: '/wizard?problem=buletin&tara=uk',
          guideLabel: 'Ghid prima CI minor 14+ →',
          badge: 'Prima CI minor',
          processingTime: '3–6 luni Londra/Manchester · 6–9 luni Edinburgh',
        },
        {
          label: 'Prima CI — adult 18+ ani',
          description: 'Cetățean român fără nicio CI sau buletin anterior.',
          keyFact: 'NU se poate face prin procură. Prezentare personală + orice însoțitor care certifică identitatea.',
          requirements: [
            'Prezentare personală + 1 însoțitor (nu obligatoriu parties)',
            'Cert naștere românesc + dovadă adresă domiciliu RO',
            'Fotografii: 2 (Londra/Manchester) · ⚠️ ~4 (Edinburgh — verificați)',
          ],
          guideHref: '/wizard?problem=buletin&tara=uk',
          guideLabel: 'Ghid prima CI adult 18+ →',
          badge: 'Prima CI adult',
          processingTime: 'până la 6 luni',
        },
      ],
    },
    {
      id: 'photos',
      title: 'Fotografii necesare — diferențe per consulat',
      type: 'warning-block',
      text:
        'Numărul de fotografii diferă între consulate — o greșeală frecventă care blochează cererea la ghișeu.',
      data: {
        headers: ['Serviciu', 'Londra', 'Manchester', 'Edinburgh'],
        rows: [
          ['Procura CI (reînnoire)', '6 fotografii ⚠️', '5 fotografii', '5 fotografii'],
          ['Prima CI minor 14+', '2 fotografii', '2 fotografii', '4 fotografii ⚠️'],
          ['Prima CI adult 18+', '2 fotografii', '2 fotografii', '⚠️ verificați'],
        ],
        photoSpecs: '3×4cm · fundă albă jos 7mm · fundal alb · pe verso: NUME PRENUME cu majuscule',
      },
    },
    {
      id: 'key-rules',
      title: 'Reguli importante pentru toate situațiile',
      type: 'facts',
      items: [
        {
          title: 'Procura CI: NUMAI la consulat român — NU la solicitor britanic',
          text: 'Procura pentru reînnoirea CI trebuie autentificată exclusiv la un consulat sau ambasadă română. Procurile autentificate de solicitori sau notari britanici NU sunt acceptate de SPCLEP România, indiferent dacă sunt apostilate.',
        },
        {
          title: 'CI se procesează în România — termen 3–9 luni',
          text: 'Consulatul transmite cererea la SPCLEP din localitatea ta de domiciliu. CI se produce în România și se livrează la adresa de domiciliu sau la consulat (plic Royal Mail SD preplătit). Edinburgh are termene mai lungi (6–9 luni).',
        },
        {
          title: 'Prima CI nu se poate face prin procură',
          text: 'Dacă nu ai mai avut niciodată CI sau buletin, trebuie să te prezinți personal la consulat. Nu există excepție de la această regulă.',
        },
        {
          title: 'Taxe: la consulat GRATUIT · taxe separate în România',
          text: 'Consulatul nu taxează pentru serviciile de CI. Se plătesc taxe în România (contravaloare CI + timbru) — prin Ghișeul.ro sau de o persoană din România.',
        },
      ],
    },
    {
      id: 'related',
      title: 'Ghiduri detaliate',
      type: 'links',
      items: [
        { title: 'Procura reînnoire CI adult', description: 'Reînnoire, pierdere, schimbare nume. 6 vs 5 fotografii per consulat.', href: '/programare-consulat-roman-anglia' },
        { title: 'Prima CI minor 14+ din UK', description: 'Prezentare personală. Edinburgh: doc justificativ + 6-9 luni.', href: '/certificat-nastere-britanic-roman' },
        { title: 'Prima CI adult 18+ din UK', description: 'Prezentare personală + orice însoțitor. Până la 6 luni.', href: '/programare-consulat-roman-anglia' },
        { title: 'Titlu de călătorie urgent', description: 'Dacă nu ai CI sau pașaport valabil și ai nevoie de document urgent.', href: '/titlu-calatorie-urgent-anglia' },
      ],
    },
  ],

  faqItems: [
    {
      question: 'Pot reînnoi buletinul românesc din UK fără să merg în România?',
      answer: 'Da — prin procură autentificată la consulat. Consulatul autentifică procura prin care împuterniciți pe cineva din România să depună cererea la SPCLEP. CI se produce și se trimite în România (sau la consulat dacă solicitați livrare).',
    },
    {
      question: 'Câte fotografii am nevoie pentru procura buletinului la Londra?',
      answer: '6 fotografii color identice (3×4cm, bandă albă jos 7mm, fundal alb, pe verso NUME PRENUME cu majuscule). Atenție: Manchester și Edinburgh cer 5 fotografii — numărul diferă față de Londra.',
    },
    {
      question: 'Solicitorul britanic poate autentifica procura pentru buletin?',
      answer: 'Nu. Procura CI trebuie autentificată exclusiv la consulat sau ambasadă română. Procura autentificată de solicitor britanic, chiar și apostilată, nu este acceptată de SPCLEP România.',
    },
    {
      question: 'Cât durează procesarea buletinului din UK?',
      answer: 'Londra și Manchester: 3–6 luni. Edinburgh: 6–9 luni. CI se procesează în România de la SPCLEP arondat localității de domiciliu.',
    },
    {
      question: 'Prima mea CI — cum o obțin dacă nu am mai avut niciodată?',
      answer: 'Te prezinți personal la consulat — nu se poate face prin procură. Minor 14+: prezentare personală + 1 parties (Londra/Manchester) sau ambii parties (Edinburgh). Adult 18+: prezentare personală + orice însoțitor care certifică identitatea la ghișeu.',
    },
  ],

  finalCtaTitle: 'Care este situația ta exactă?',
  finalCtaText: 'Wizardul ActeRO îți identifică traseul corect în 30 de secunde — procură, prima CI minor sau adult.',
  finalCtaLabel: 'Vreau traseul exact →',
  finalCtaHref: '/wizard?problem=buletin&tara=uk',
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Câte fotografii am nevoie pentru procura buletinului la Londra?',
      acceptedAnswer: { '@type': 'Answer', text: '6 fotografii la Londra. Manchester și Edinburgh: 5 fotografii. Format: 3×4cm, bandă albă jos 7mm, fundal alb.' },
    },
    {
      '@type': 'Question',
      name: 'Solicitorul britanic poate face procura pentru buletin?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nu. Procura CI se autentifică exclusiv la consulat sau ambasadă română. Solicitorul britanic nu este acceptat de SPCLEP România.' },
    },
  ],
};
