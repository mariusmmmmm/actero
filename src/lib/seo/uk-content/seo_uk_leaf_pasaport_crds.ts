// SEO PAGE COPY — /pasaport-crds-anglia
// Tip: LEAF conversie · pașaport CRDS
// Component: LlmOptimizedPage
// Surse: ghiduri #1-UK, #3-UK verificate live — Aprilie 2026

export const metadata = {
  title: 'Pașaport CRDS în Anglia — Domiciliu înregistrat în UK | ActeRO',
  description:
    'Pașaport cu domiciliu în UK (CRDS): certificat naștere + dovadă rezidență UK (share code, NINo, P60). Edinburgh: reguli rezidență diferite. ~60 zile, taxă GBP.',
  keywords: [
    'pasaport crds anglia',
    'pasaport romanesc domiciliu anglia',
    'pasaport cu domiciliul in uk',
    'crds anglia pasaport',
    'pasaport romanesc share code anglia',
    'pasaport crds documente necesare anglia',
    'pasaport romanesc domiciliu uk 2026',
    'cetăţean roman domiciliu strainatate pasaport anglia',
  ],
  alternates: { canonical: 'https://www.actero.ro/pasaport-crds-anglia' },
  openGraph: {
    title: 'Pașaport CRDS în Anglia — Domiciliu înregistrat în UK',
    description: 'Certificat naștere + dovadă rezidență UK. Edinburgh: fără share code — NINo sau ILR. ~60 zile, taxă GBP.',
    url: 'https://www.actero.ro/pasaport-crds-anglia',
    type: 'article',
  },
};

export const pageProps = {
  lpSlug: 'pasaport-crds-anglia',
  lpTopic:
    'Ghid pentru obținerea sau reînnoirea pașaportului românesc cu domiciliu înregistrat în UK (CRDS — Cetățean Român cu Domiciliul în Străinătate). Diferit de pașaportul cu domiciliu în România: necesită certificat de naștere românesc și dovadă de rezidență UK. Regulile privind dovada de rezidență diferă între Edinburgh și Londra/Manchester.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Pașaport România Marea Britanie', href: '/pasaport-romania-marea-britanie' },
    { label: 'Pașaport CRDS Anglia', href: '/pasaport-crds-anglia' },
  ],

  h1: 'Pașaport CRDS din Anglia — cu domiciliu înregistrat în UK',

  tldr: {
    label: 'Răspuns rapid:',
    text:
      'Pașaportul CRDS este pentru cetățenii români care și-au înregistrat oficial domiciliul în UK. Necesită certificat de naștere românesc + dovadă rezidență UK. Dovada de rezidență acceptată diferă: Londra/Manchester acceptă share code, NINo, P60, P45, council tax; Edinburgh acceptă NINo, ILR, pașaport britanic (fără share code). Termen ~60 zile lucrătoare.',
  },

  intro:
    'Dacă domiciliul tău oficial este în UK (pașaportul tău arată o adresă britanică sau ai CRDS activ), aceasta este cererea corectă. Dacă domiciliul rămâne în România, consultați ghidul pentru pașaport domiciliu România.',

  ctaLabel: 'Vreau lista exactă pentru consulatul meu →',
  ctaHref: '/wizard?problem=pasaport&tara=uk',
  ctaNote: 'Fără cont · Gratuit',

  sourceNote: 'Actualizat: aprilie 2026 · Surse: cglondra.mae.ro · manchester.mae.ro · edinburgh.mae.ro',

  sections: [
    {
      id: 'crds-explained',
      title: 'Ce înseamnă CRDS și cum știi că te aplică',
      type: 'info-block',
      items: [
        {
          title: 'CRDS = Cetățean Român cu Domiciliul în Străinătate',
          text: 'CRDS este statutul prin care un cetățean român își înregistrează oficial domiciliul în altă țară, în cazul tău în UK. Pașaportul CRDS arată adresa din UK în loc de un județ românesc. Dacă ai deja CRDS și vrei să reînnoiești pașaportul — acesta este ghidul corect.',
        },
        {
          title: 'Nu ești sigur dacă ai CRDS?',
          text: 'Verifică pașaportul vechi: dacă adresa înscrisă este din UK → ești CRDS. Dacă adresa este un județ din România → ești pe domiciliu România. Dacă este primul pașaport → verificați cu consulatul dacă ați schimbat domiciliul anterior.',
        },
      ],
    },
    {
      id: 'documents',
      title: 'Documente necesare',
      type: 'facts',
      items: [
        {
          title: 'Certificatul de naștere românesc — obligatoriu',
          text: 'Spre deosebire de pașaportul cu domiciliu în România (unde e suficientă CI), pașaportul CRDS necesită certificatul de naștere românesc în original. Dacă nu ai certificat românesc (ai doar cel britanic), trebuie mai întâi transcriere (ghid #14-UK sau #15-UK).',
          href: '/transcriere-nastere-anglia',
          linkLabel: 'Ghid transcriere naștere →',
        },
        {
          title: 'Dovada de rezidență UK — diferă între consulate',
          text: 'Aceasta este diferența principală față de pașaportul domiciliu România: trebuie să dovedești că locuiești efectiv în UK.',
        },
        {
          title: 'Dovadă rezidență — Londra și Manchester',
          text: 'Fără traducere: share code, pașaport britanic, ILR, NINo, council tax (an curent), P60, P45.\nCu traducere autorizată română: contract de muncă + dovadă HMRC, self-employed HMRC, adeverință școlarizare, contract chirie ≥1 an.',
        },
        {
          title: 'Dovadă rezidență — Edinburgh ⚠️ diferit',
          text: 'Edinburgh NU acceptă share code ca dovadă de rezidență. Documente acceptate la Edinburgh: pașaport britanic, ILR, card albastru/galben, card violet muncă, rezidență permanentă, NINo.',
          severity: 'warning',
        },
      ],
    },
    {
      id: 'process',
      title: 'Procesul pe scurt',
      type: 'steps',
      items: [
        {
          step: '1',
          title: 'Faci programarea pe econsulat.ro',
          text: '„Pașapoarte" → „Pașaport simplu electronic CRDS adult". Încarci cert naștere + dovadă rezidență scanate.',
        },
        {
          step: '2',
          title: 'Te prezinți la consulat cu documentele',
          text: 'Fotografiere biometrică + amprente. Plătești taxa în GBP. Primești chitanța.',
        },
        {
          step: '3',
          title: 'Aștepți ~60 zile lucrătoare',
          text: 'Edinburgh în practică ~45 zile. NU există urgență pentru pașaport electronic. Pui CI-ul la dispoziție la depunere sau la ridicare (obligatoriu CRDS).',
        },
        {
          step: '4',
          title: 'Ridici pașaportul',
          text: 'Londra: programare pe econsulat.ro sau poștă. Edinburgh: L-J 15:00–17:00 fără programare. Manchester: L-J 15:00–16:30 sau poștă.',
        },
      ],
    },
    {
      id: 'important-notes',
      title: 'Atenții importante CRDS',
      type: 'warnings',
      items: [
        {
          title: 'Predarea CI la depunere sau la ridicare',
          text: 'Ca cetățean CRDS, ești obligat prin lege să predai CI-ul românesc. Poți alege să o predai la depunere sau la ridicarea pașaportului. Dacă ai CI și pașaport valabil și pleci urgent, optează pentru predarea la ridicare.',
          severity: 'warning',
        },
        {
          title: 'Pașaport CRDS pierdut sau furat',
          text: 'Procedura este mai complexă decât pentru domiciliu România. Edinburgh: raportul de poliție trebuie apostilat la FCDO (obligatoriu). Londra/Manchester: raport + traducere autorizată, fără apostilă.',
          href: '/pasaport-pierdut-furat-anglia',
          linkLabel: 'Ghid pașaport pierdut/furat →',
          severity: 'warning',
        },
        {
          title: 'Schimbare de domiciliu în interiorul UK (altă regiune)',
          text: 'Dacă te-ai mutat din zona Manchester în zona Londra sau invers, consulatul competent se schimbă. Poți depune cererea la noul consulat — econsulat.ro detectează zona automat.',
        },
      ],
    },
    {
      id: 'vs-non-crds',
      title: 'CRDS vs. Pașaport domiciliu România — diferențe cheie',
      type: 'comparison',
      rows: [
        { aspect: 'CI necesară', crds: 'DA (predată la depunere sau ridicare)', domRo: 'DA (valabilă la depunere și ridicare)' },
        { aspect: 'Cert naștere', crds: '✅ Obligatoriu', domRo: 'Opțional (dacă CI provizoriu)' },
        { aspect: 'Dovadă rezidență UK', crds: '✅ Obligatorie', domRo: '❌ Nu este necesară' },
        { aspect: 'Termen', crds: '~60 zile lucrătoare', domRo: '~60 zile lucrătoare' },
        { aspect: 'Pașaport arată', crds: 'Adresă UK', domRo: 'Județ România' },
      ],
    },
    {
      id: 'related',
      title: 'Pagini conexe',
      type: 'links',
      items: [
        { title: 'Pașaport expirat în Anglia', description: 'Dacă nu ești sigur dacă ești CRDS sau domiciliu România.', href: '/pasaport-expirat-anglia' },
        { title: 'Transcriere certificat naștere', description: 'Dacă nu ai cert de naștere românesc — obligatoriu pentru CRDS.', href: '/transcriere-nastere-anglia' },
        { title: 'Pașaport CRDS pierdut/furat', description: 'Edinburgh: apostilă FCDO pe raportul de poliție.', href: '/pasaport-pierdut-furat-anglia' },
        { title: 'Consulat Londra', description: 'Program, taxă GBP, card acceptat.', href: '/pasaport-consulat-londra' },
        { title: 'Consulat Manchester', description: 'EXCLUSIV numerar. Xerocopii obligatorii.', href: '/pasaport-consulat-manchester' },
        { title: 'Consulat Edinburgh', description: 'Fără share code la dovada rezidență. Vineri 12:00.', href: '/pasaport-consulat-edinburgh' },
      ],
    },
  ],

  faqItems: [
    {
      question: 'Ce dovadă de rezidență UK este acceptată la Edinburgh pentru pașaport CRDS?',
      answer: 'Edinburgh NU acceptă share code. Documente acceptate: pașaport britanic, ILR, card albastru/galben, card violet muncă, rezidență permanentă, NINo. Londra și Manchester acceptă în plus: share code, P60, P45, council tax.',
    },
    {
      question: 'Ce este CRDS și cum știu dacă am domiciliu în UK?',
      answer: 'CRDS (Cetățean Român cu Domiciliul în Străinătate) înseamnă că ți-ai înregistrat oficial domiciliul în UK la consulat. Verifică pașaportul vechi: dacă adresa înscrisă este din UK, ești CRDS. Dacă adresa este un județ din România, ești pe domiciliu România.',
    },
    {
      question: 'Trebuie să predau CI-ul la depunerea cererii CRDS?',
      answer: 'Ca cetățean CRDS ești obligat să predai CI-ul, dar poți alege: la depunere sau la ridicarea pașaportului. Dacă ai nevoie de CI în intervalul de producție (~60 zile), optează pentru predarea la ridicare.',
    },
    {
      question: 'Pașaportul CRDS este mai complicat decât cel cu domiciliu în România?',
      answer: 'Da — necesită obligatoriu certificat de naștere românesc și dovadă de rezidență UK, față de domiciliu România care necesită doar CI valabilă. Termenul de procesare este același (~60 zile).',
    },
  ],

  finalCtaTitle: 'Vrei lista exactă de documente pentru CRDS?',
  finalCtaText: 'Wizardul ActeRO identifică consulatul tău și îți dă lista completă în 30 de secunde.',
  finalCtaLabel: 'Vreau lista exactă →',
  finalCtaHref: '/wizard?problem=pasaport&tara=uk',
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ce dovadă de rezidență UK este acceptată la Edinburgh pentru pașaport CRDS?',
      acceptedAnswer: { '@type': 'Answer', text: 'Edinburgh NU acceptă share code. Acceptă: pașaport britanic, ILR, card albastru/galben, NINo. Londra și Manchester acceptă în plus share code, P60, P45, council tax.' },
    },
    {
      '@type': 'Question',
      name: 'Ce este pașaportul CRDS?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pașaportul CRDS (Cetățean Român cu Domiciliul în Străinătate) are adresa din UK înscrisă. Necesită certificat de naștere românesc și dovadă de rezidență UK — diferit de pașaportul cu domiciliu în România.' },
    },
  ],
};
