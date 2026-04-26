// ================================================================
// SPRINT 3 — BLOC B: Pagini #6–10
// /pasaport-minor-anglia
// /pasaport-pierdut-furat-anglia
// /consulat-competent-anglia
// /pasaport-temporar-anglia
// /certificat-nastere-britanic-roman
// ================================================================

// ----------------------------------------------------------------
// 6. /pasaport-minor-anglia
// ----------------------------------------------------------------

export const pasaportMinorMetadata = {
  title: 'Pașaport copil din Anglia — Ghid 2026 | ActeRO',
  description:
    'Pașaport minor din UK: cert naștere britanic blocat (long form + apostilă FCDO + transcriere). CRDS: condiție pașaport parental. ~60 zile. Londra, Manchester, Edinburgh.',
  keywords: [
    'pasaport minor anglia',
    'pasaport copil anglia 2026',
    'pasaport minor romanesc anglia',
    'pasaport copil consulat anglia',
    'pasaport crds minor anglia',
    'pasaport minor domiciliu romania anglia',
  ],
  alternates: { canonical: 'https://www.actero.ro/pasaport-minor-anglia' },
};

export const pasaportMinorPageProps = {
  lpSlug: 'pasaport-minor-anglia',
  lpTopic: 'Ghid pentru pașaportul unui minor (0-18 ani) din Marea Britanie. Doua situații: CRDS (necesită pașaport parental + cert naștere românesc) sau domiciliu România (necesită CI parental + cert naștere românesc). Certificatul britanic blocat direct — obligatoriu transcriere înainte.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Pașaport România Marea Britanie', href: '/pasaport-romania-marea-britanie' },
    { label: 'Pașaport minor Anglia', href: '/pasaport-minor-anglia' },
  ],

  h1: 'Pașaport copil din Anglia — ghid 2026',

  tldr: {
    label: 'Răspuns rapid:',
    text: 'Pașaportul unui minor din UK necesită certificat de naștere ROMÂNESC — certificatul britanic nu este acceptat direct. Dacă minorul s-a născut în UK, mai întâi transcriere. Pașaport CRDS: cel puțin unul dintre părinți trebuie să aibă sau să ceară simultan pașaport CRDS. Pașaport domiciliu România: fără această condiție. Termen ~60 zile.',
  },

  intro: 'Doi pași critici înainte de programare: (1) stabilești tipul de pașaport (CRDS sau domiciliu România); (2) verifici că ai certificatul de naștere românesc.',
  ctaLabel: 'Vreau lista exactă pentru copilul meu →',
  ctaHref: '/wizard?problem=pasaport-minor&tara=uk',
  ctaNote: 'Fără cont · Gratuit',
  sourceNote: 'Actualizat: aprilie 2026 · Surse: consulatele UK · ActeRO',

  sections: [
    {
      id: 'decision',
      title: 'CRDS sau domiciliu România?',
      type: 'decision',
      options: [
        {
          label: 'Pașaport CRDS minor (domiciliu UK)',
          description: 'Copilul va avea adresa UK pe pașaport.',
          keyFact: '⚠️ Condiție specială: cel puțin unul dintre părinți trebuie să aibă deja pașaport CRDS activ SAU să depună cerere CRDS simultan.',
          requirements: ['Cert naștere românesc', 'Dovadă CRDS parental sau cerere simultană', 'Ambii părinți prezenți (în general)'],
          guideHref: '/wizard?problem=pasaport-minor&tara=uk',
          guideLabel: 'Ghid pașaport CRDS minor →',
          badge: 'CRDS',
        },
        {
          label: 'Pașaport domiciliu România',
          description: 'Copilul va rămâne cu adresa din România pe pașaport.',
          keyFact: 'Fără condiție privind pașaportul părinților — mai simplu dacă părinții nu au CRDS.',
          requirements: ['Cert naștere românesc', 'CI/pașaport ambii părinți', 'Ambii părinți prezenți (în general)'],
          guideHref: '/wizard?problem=pasaport-minor&tara=uk',
          guideLabel: 'Ghid pașaport minor domiciliu RO →',
          badge: 'Domiciliu RO',
        },
      ],
    },
    {
      id: 'birth-cert',
      title: '⚠️ Certificatul de naștere britanic nu este acceptat direct',
      type: 'warning-block',
      text: 'Dacă copilul s-a născut în UK și are doar certificat britanic — mai întâi transcriere la consulat pentru a obține certificatul de naștere românesc, abia apoi pașaportul. Transcrierea se face în aceeași zi dacă dosarul este complet.',
      ctaLabel: 'Ghid transcriere naștere minor →',
      ctaHref: '/transcriere-nastere-anglia',
    },
    {
      id: 'related',
      title: 'Ghiduri detaliate',
      type: 'links',
      items: [
        { title: 'Acte copil născut în Anglia', description: 'Ordinea completă: transcriere → cert naștere RO → pașaport.', href: '/acte-copil-nascut-in-anglia' },
        { title: 'Titlu de călătorie minor', description: 'Dacă minorul nu are niciun document valabil și trebuie să plece urgent.', href: '/titlu-calatorie-anglia' },
        { title: 'Prima CI minor 14+', description: 'Edinburgh: 4 fotografii + doc justificativ.', href: '/buletin-romanesc-anglia' },
      ],
    },
  ],

  faqItems: [
    { question: 'Copilul meu s-a născut în UK. Pot depune direct cerere de pașaport?', answer: 'Nu direct — mai întâi transcriere (long certificate britanic + apostilă FCDO + traducere → cert naștere românesc). Abia cu certificatul românesc poți depune cerere de pașaport.' },
    { question: 'Ce este condiția CRDS parental pentru pașaport minor?', answer: 'Pentru pașaport CRDS minor, cel puțin unul dintre părinți trebuie să aibă deja pașaport cu domiciliu UK (CRDS) sau să depună cerere de pașaport CRDS simultan. Fără această condiție, minorul nu poate obține pașaport CRDS.' },
  ],

  finalCtaTitle: 'Vrei lista exactă pentru copilul tău?',
  finalCtaText: 'Wizardul ActeRO identifică tipul de pașaport și documentele necesare în 30 de secunde.',
  finalCtaLabel: 'Vreau lista exactă →',
  finalCtaHref: '/wizard?problem=pasaport-minor&tara=uk',
};

// ----------------------------------------------------------------
// 7. /pasaport-pierdut-furat-anglia
// ----------------------------------------------------------------

export const pierdutFuratMetadata = {
  title: 'Pașaport românesc pierdut sau furat în Anglia — Ce faci 2026 | ActeRO',
  description:
    'Pașaport pierdut: declarație la ghișeu. Pașaport furat: raport poliție + traducere. Edinburgh: + apostilă FCDO (obligatorie). Ghid complet pentru Londra, Manchester, Edinburgh.',
  keywords: [
    'pasaport pierdut anglia',
    'pasaport furat anglia',
    'pasaport romanesc pierdut anglia ce fac',
    'pasaport furat anglia consulat',
    'pasaport pierdut furat uk 2026',
    'apostila fcdo pasaport furat edinburgh',
  ],
  alternates: { canonical: 'https://www.actero.ro/pasaport-pierdut-furat-anglia' },
};

export const pierdutFuratPageProps = {
  lpSlug: 'pasaport-pierdut-furat-anglia',
  lpTopic: 'Ghid pentru pașaportul românesc pierdut sau furat în UK. Pierdut: declarație la ghișeu, fără documente suplimentare. Furat: raport poliție britanic + traducere autorizată română. Edinburgh: raportul de poliție trebuie apostilat la FCDO.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Pașaport România Marea Britanie', href: '/pasaport-romania-marea-britanie' },
    { label: 'Pașaport pierdut/furat Anglia', href: '/pasaport-pierdut-furat-anglia' },
  ],

  h1: 'Pașaport românesc pierdut sau furat în Anglia — ce faci',

  tldr: {
    label: 'Răspuns rapid:',
    text: 'Pașaport PIERDUT: declari la ghișeu (declarație pe proprie răspundere) — fără documente suplimentare. Pașaport FURAT: mai întâi raport la poliția britanică, apoi traducere autorizată română. Edinburgh: + apostilă FCDO pe raportul de poliție (obligatorie). Pașaportul nou durează ~60 zile. Dacă trebuie să pleci urgent: titlu de călătorie (aceeași zi, gratuit).',
  },

  intro: 'Procedura diferă complet între pierdut și furat. Edinburgh are o cerință suplimentară față de Londra și Manchester.',
  ctaLabel: 'Vreau traseul exact pentru situația mea →',
  ctaHref: '/wizard?problem=pasaport-pierdut&tara=uk',
  ctaNote: 'Fără cont · Gratuit',
  sourceNote: 'Actualizat: aprilie 2026 · Surse: consulatele UK · ActeRO',

  sections: [
    {
      id: 'pierdut-vs-furat',
      title: 'Pierdut sau furat — ce faci imediat',
      type: 'comparison-cards',
      cards: [
        {
          name: 'Pașaport PIERDUT',
          color: 'neutral',
          steps: [
            'Nu trebuie să faci nimic înainte de programare',
            'Declari pierderea direct la ghișeul consulatului',
            'Completezi declarație pe proprie răspundere la ghișeu',
            'Zero documente suplimentare',
          ],
        },
        {
          name: 'Pașaport FURAT',
          color: 'warning',
          steps: [
            '1. Mergi la poliția britanică și declari furtul',
            '2. Primești raport de poliție (crime reference number)',
            '3. Traduci raportul — traducător autorizat MJ România',
            '[EDINBURGH] ⚠️ 4. Apostilezi raportul la FCDO (gov.uk/get-document-legalised)',
            '5. Prezinți raportul + traducerea la consulat',
          ],
        },
      ],
    },
    {
      id: 'edinburgh-apostila',
      title: '⚠️ Edinburgh: apostilă FCDO pe raportul de poliție',
      type: 'warning-block',
      text: 'Edinburgh este singurul consulat din UK care cere apostilarea raportului de poliție britanic în caz de furt. Londra și Manchester acceptă raportul + traducerea, fără apostilă. Apostila se obține de la FCDO (gov.uk/get-document-legalised), nu de la notarul britanic.',
      href: '/apostila-fcdo-anglia',
      linkLabel: 'Ghid apostilă FCDO →',
    },
    {
      id: 'urgent',
      title: 'Nu ai niciun document și trebuie să pleci urgent',
      type: 'highlight',
      text: 'Titlul de călătorie se obține în aceeași zi, gratuit — exclusiv pentru întoarcerea în România. Londra/Edinburgh: fără programare cu bilet ≤7 zile. Manchester: email urgent.',
      ctaLabel: 'Titlu de călătorie urgent →',
      ctaHref: '/titlu-calatorie-urgent-anglia',
    },
    {
      id: 'related',
      title: 'Pagini conexe',
      type: 'links',
      items: [
        { title: 'Apostila FCDO', description: 'Edinburgh: obligatorie pe raportul de poliție.', href: '/apostila-fcdo-anglia' },
        { title: 'Titlu de călătorie urgent', description: 'Dacă trebuie să pleci imediat în România.', href: '/titlu-calatorie-urgent-anglia' },
        { title: 'Pașaport expirat în Anglia', description: 'Dacă pașaportul nu e pierdut ci expirat — procedura diferă.', href: '/pasaport-expirat-anglia' },
      ],
    },
  ],

  faqItems: [
    { question: 'Trebuie să raportez pierderea pașaportului la poliție?', answer: 'Nu este obligatoriu pentru pașaportul PIERDUT — declari la ghișeul consulatului. Dacă pașaportul a fost FURAT: raportul la poliție este obligatoriu pentru cerere.' },
    { question: 'Edinburgh cere apostilă pe raportul de poliție pentru pașaport furat?', answer: 'Da — Edinburgh este singurul consulat UK cu această cerință. Apostila se obține de la FCDO (gov.uk/get-document-legalised), termen 1 zi (online) sau 15-20 zile (poștă).' },
    { question: 'Câte exemplare de traducere trebuie pentru raportul de poliție?', answer: 'Londra: 1 exemplar. Manchester și Edinburgh: 2 exemplare (plus apostilă la Edinburgh).' },
  ],

  finalCtaTitle: 'Care este situația ta exactă?',
  finalCtaText: 'Wizardul ActeRO îți confirmă pașii și documentele pentru consulatul tău.',
  finalCtaLabel: 'Vreau traseul exact →',
  finalCtaHref: '/wizard?problem=pasaport-pierdut&tara=uk',
};

// ----------------------------------------------------------------
// 8. /consulat-competent-anglia
// ----------------------------------------------------------------

export const consulatCompetentMetadata = {
  title: 'Ce consulat român ți se potrivește în UK? | ActeRO',
  description:
    'Identifică consulatul competent după zona din UK. North East England (Northumberland, Durham): Edinburgh SAU Manchester — ambele acceptă. Ghid 2026.',
  keywords: [
    'care consulat roman anglia',
    'consulat competent uk romani',
    'consulat roman zona mea anglia',
    'jurisdictie consulat edinburgh manchester',
    'consulat roman northumberland anglia',
    'consulat roman yorkshire',
    'consulat roman scoția romani',
  ],
  alternates: { canonical: 'https://www.actero.ro/consulat-competent-anglia' },
};

export const consulatCompetentPageProps = {
  lpSlug: 'consulat-competent-anglia',
  lpTopic: 'Ghid de routing pentru românii din UK: identificarea consulatului competent (Londra, Manchester sau Edinburgh) în funcție de zona de reședință. Include zona de conflict Edinburgh-Manchester pentru North East England.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Care consulat te deservește', href: '/consulat-competent-anglia' },
  ],

  h1: 'Care consulat român te deservește în UK — Londra, Manchester sau Edinburgh?',

  tldr: {
    label: 'Răspuns rapid:',
    text: 'Londra: sudul Angliei, Londra, Wales, Midlands, East England. Manchester: Nord-Vest Anglia, Yorkshire. Edinburgh: Scoția, Irlanda de Nord, Nordul Angliei până la Middlesbrough. North East England (Northumberland, Durham, N. Yorkshire): Edinburgh SAU Manchester — ambele acceptă cereri.',
  },

  intro: 'econsulat.ro detectează automat consulatul competent pe baza adresei introduse. Dacă totuși nu ești sigur, tabelul de mai jos clarifică.',
  ctaLabel: 'Vreau să văd ghidul pentru consulatul meu →',
  ctaHref: '/wizard?problem=pasaport&tara=uk',
  ctaNote: 'Fără cont · Gratuit',
  sourceNote: 'Actualizat: aprilie 2026 · Surse: cglondra.mae.ro/node/258 · edinburgh.mae.ro/node/258 · manchester.mae.ro/node/258',

  sections: [
    {
      id: 'jurisdiction-table',
      title: 'Tabel complet: regiune → consulat',
      type: 'table',
      data: {
        headers: ['Regiune / Zonă', 'Consulat competent'],
        rows: [
          ['Londra (Greater London — toate 32 boroughs)', 'Londra'],
          ['Sud-Est Anglia (Kent, Surrey, Sussex, Hampshire, Berkshire)', 'Londra'],
          ['Sud-Vest Anglia (Dorset, Somerset, Devon, Cornwall, Wiltshire)', 'Londra'],
          ['East Anglia (Essex, Suffolk, Norfolk, Cambridgeshire, Hertfordshire)', 'Londra'],
          ['Midlands (West Midlands, East Midlands, Warwickshire, Oxfordshire, Leicestershire)', 'Londra'],
          ['Wales (toate județele)', 'Londra'],
          ['Nord-Vest Anglia (Greater Manchester, Lancashire, Merseyside, Cheshire, Cumbria)', 'Manchester'],
          ['Yorkshire (West, South, East Yorkshire, Bradford, Leeds, Sheffield)', 'Manchester'],
          ['North East England (Northumberland, Tyne and Wear, Durham, Teesside, Middlesbrough)', '⚠️ Edinburgh SAU Manchester (ambele acceptă)'],
          ['Scoția (toate regiunile)', 'Edinburgh'],
          ['Irlanda de Nord (Belfast, Londonderry, Antrim etc.)', 'Edinburgh'],
          ['Nordul Angliei până la Keswick, Penrith, Darlington, Stockton, Middlesbrough', 'Edinburgh'],
        ],
      },
    },
    {
      id: 'conflict-zone',
      title: '⚠️ Zona de conflict: North East England',
      type: 'info-block',
      items: [
        {
          title: 'Northumberland, Durham, North Yorkshire — Edinburgh sau Manchester?',
          text: 'Edinburgh revendică explicit "Nordul Angliei până la Middlesbrough inclusiv". Manchester revendică Northumberland, Durham, North Yorkshire. Ambele consulate acceptă cereri din această zonă. Edinburgh însuși îi trimite pe cei din aceste zone la Manchester ca alternativă. Recomandare practică: alege consulatul mai aproape de tine sau cel cu slotul disponibil mai devreme.',
        },
      ],
    },
    {
      id: 'consulates',
      title: 'Cele 3 consulate',
      type: 'links',
      items: [
        { title: 'Consulat Londra', description: 'Card acceptat. 1 traducere transcrieri. Itinerante 10 locații.', href: '/pasaport-consulat-londra' },
        { title: 'Consulat Manchester', description: 'EXCLUSIV numerar. Xerocopii. 2 traduceri. Plic SD notarial.', href: '/pasaport-consulat-manchester' },
        { title: 'Consulat Edinburgh', description: 'Temporar ~18 GBP. Vineri 12:00. Apostilă furt.', href: '/pasaport-consulat-edinburgh' },
      ],
    },
  ],

  faqItems: [
    { question: 'Pot depune cererea de pașaport la orice consulat din UK?', answer: 'În general trebuie să mergi la consulatul competent pentru zona ta. Totuși, în practică consulatele procesează cererile depuse la ghișeul lor indiferent de zona de proveniență. econsulat.ro indică automat consulatul recomandat pe baza adresei tale.' },
    { question: 'Dacă locuiesc în Northumberland — merg la Edinburgh sau Manchester?', answer: 'Ambele consulate acceptă cereri din Northumberland, Durham și North Yorkshire. Edinburgh revendică această zonă în jurisdicție, dar însuși sugerează Manchester ca alternativă. Alegeți consulatul mai aproape sau cu slot disponibil mai repede.' },
  ],

  finalCtaTitle: 'Ai identificat consulatul — care e pasul următor?',
  finalCtaText: 'Wizardul ActeRO îți dă lista de documente pentru consulatul și situația ta.',
  finalCtaLabel: 'Vreau lista de documente →',
  finalCtaHref: '/wizard?problem=pasaport&tara=uk',
};

// ----------------------------------------------------------------
// 9. /pasaport-temporar-anglia
// ----------------------------------------------------------------

export const temporarMetadata = {
  title: 'Pașaport temporar din Anglia — Edinburgh ~18 GBP, 3 zile lucrătoare | ActeRO',
  description:
    'Pașaport temporar 12 luni, urgențe demonstrate. Edinburgh: ~18 GBP (față de ~46 GBP Londra/Manchester). Manchester: depunere L-J 09:30–13:30. Ghid complet 2026.',
  keywords: [
    'pasaport temporar anglia',
    'pasaport temporar romanesc uk',
    'taxa pasaport temporar edinburgh',
    'pasaport temporar urgenta anglia',
    'pasaport temporar manchester 09:30',
    'pasaport temporar 12 luni anglia',
  ],
  alternates: { canonical: 'https://www.actero.ro/pasaport-temporar-anglia' },
};

export const temporarPageProps = {
  lpSlug: 'pasaport-temporar-anglia',
  lpTopic: 'Pașaport temporar (12 luni) din UK pentru urgențe demonstrate. Edinburgh: ~18 GBP — semnificativ mai ieftin față de Londra și Manchester (~46 GBP). Manchester: depunere exclusiv L-J 09:30-13:30, fără poștă. 3 zile lucrătoare pentru urgențe.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Pașaport România Marea Britanie', href: '/pasaport-romania-marea-britanie' },
    { label: 'Pașaport temporar Anglia', href: '/pasaport-temporar-anglia' },
  ],

  h1: 'Pașaport temporar din Anglia — Edinburgh: ~18 GBP',

  tldr: {
    label: 'Răspuns rapid:',
    text: 'Valabil 12 luni, eliberat în 3 zile lucrătoare (urgențe) sau 60 de zile (fără urgență). Edinburgh: ~18 GBP față de ~46 GBP la Londra și Manchester. Necesită urgență demonstrată cu documente. Manchester: depunere EXCLUSIV L-J 09:30–13:30, fără poștă.',
  },

  intro: 'Pașaportul temporar este soluția când ai o urgență demonstrată și nu poți aștepta 60 de zile pentru pașaportul electronic.',
  ctaLabel: 'Vreau traseul exact →',
  ctaHref: '/wizard?problem=pasaport-temporar&tara=uk',
  ctaNote: 'Fără cont · Gratuit',
  sourceNote: 'Actualizat: aprilie 2026 · Surse: consulatele UK · ActeRO',

  sections: [
    {
      id: 'eligibility',
      title: 'Când poți cere pașaport temporar',
      type: 'facts',
      items: [
        { title: 'Urgențe acceptate', text: 'File pașaport epuizate cu vize valabile · pașaport depus pentru viză + urgență · urgență medicală / familială / profesională demonstrată · stare de beligeranță cu destinația · minor cu tratament urgent / concursuri internaționale. Necesită documente justificative în original.' },
        { title: '⚠️ Fără urgență — termen 60 zile', text: 'Dacă nu ai urgență demonstrată, pașaportul temporar se poate cere, dar termenul este 60 zile (același ca electronic). În acest caz, pașaportul electronic este mai practic.' },
      ],
    },
    {
      id: 'edinburgh-advantage',
      title: '✅ Edinburgh — avantajul de taxă',
      type: 'comparison',
      rows: [
        { aspect: 'Taxă pașaport temporar', londra: '~46 GBP', manchester: '~46 GBP', edinburgh: '✅ ~18 GBP' },
        { aspect: 'Depunere ore speciale', londra: 'Program normal', manchester: '⚠️ L-J 09:30–13:30', edinburgh: 'Program normal' },
        { aspect: 'Poștă disponibilă', londra: 'DA', manchester: '❌ NU', edinburgh: 'DA' },
        { aspect: 'Termen urgență', londra: '3 zile luc.', manchester: '3 zile luc.', edinburgh: '3 zile luc.' },
      ],
      note: 'Dacă locuiești în Scoția sau Irlanda de Nord și ai o urgență — Edinburgh este cea mai ieftină opțiune din UK cu 28 GBP economie.',
    },
    {
      id: 'related',
      title: 'Pagini conexe',
      type: 'links',
      items: [
        { title: 'Titlu de călătorie urgent', description: 'Dacă ai nevoie să pleci în România ASTĂZI — gratuit, aceeași zi.', href: '/titlu-calatorie-urgent-anglia' },
        { title: 'Pașaport expirat în Anglia', description: 'Pașaport electronic standard — ~60 zile.', href: '/pasaport-expirat-anglia' },
        { title: 'Consulat Edinburgh', description: 'Detalii program, adresă, taxe 2026.', href: '/pasaport-consulat-edinburgh' },
      ],
    },
  ],

  faqItems: [
    { question: 'Pașaportul temporar e mai ieftin la Edinburgh?', answer: 'Da — ~18 GBP la Edinburgh față de ~46 GBP la Londra și Manchester. Economie de ~28 GBP.' },
    { question: 'Pot cere pașaport temporar la Manchester fără urgență documentată?', answer: 'Da, dar termenul devine 60 zile (nu 3 zile). Depunere exclusiv L-J 09:30–13:30. Fără poștă la Manchester pentru temporar.' },
  ],

  finalCtaTitle: 'Ai o urgență demonstrată?',
  finalCtaText: 'Wizardul ActeRO îți confirmă eligibilitatea și documentele necesare.',
  finalCtaLabel: 'Vreau traseul exact →',
  finalCtaHref: '/wizard?problem=pasaport-temporar&tara=uk',
};

// ----------------------------------------------------------------
// 10. /certificat-nastere-britanic-roman
// ----------------------------------------------------------------

export const certNastereMetadata = {
  title: 'Certificat britanic vs românesc — diferențe esențiale | ActeRO',
  description:
    'Long form vs short form, apostilă FCDO și reguli de traducere per consulat. Pagina explică documentul; procedura completă de transcriere este separată.',
  keywords: [
    'certificat nastere britanic roman',
    'long form short form certificate anglia',
    'transcriere certificat nastere britanic',
    'apostila certificat nastere uk',
    'certificat nastere romanesc copii uk',
    'certificat nastere anglia roman diferenta',
  ],
  alternates: { canonical: 'https://www.actero.ro/certificat-nastere-britanic-roman' },
};

export const certNasterePageProps = {
  lpSlug: 'certificat-nastere-britanic-roman',
  lpTopic: 'Comparație informațională: certificat de naștere britanic vs românesc pentru cetățenii din diaspora UK. Ce format britanic e necesar (long form), de ce e nevoie de apostilă FCDO, cum diferă numărul de exemplare de traducere per consulat, și cum se obține certificatul românesc prin transcriere.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Certificat naștere britanic vs românesc', href: '/certificat-nastere-britanic-roman' },
  ],

  h1: 'Certificat de naștere britanic vs românesc — ce trebuie să știi',

  tldr: {
    label: 'Răspuns rapid:',
    text: 'Certificatul britanic forma scurtă (short certificate) nu este acceptat de consulatele române — trebuie forma lungă (long certificate) cu datele ambilor părinți. Forma lungă trebuie apostilată la FCDO înainte de a fi prezentată. Traducere autorizată: 1 exemplar la Londra, 2 exemplare la Manchester și Edinburgh.',
  },

  intro: 'Această pagină explică diferențele dintre documentul britanic și cel românesc. Dacă vrei pașii administrativi compleți, mergi apoi în ghidul de transcriere sau în hub-ul pentru copil născut în UK.',
  ctaLabel: 'Vreau ghidul complet de transcriere →',
  ctaHref: '/wizard?problem=transcriere&tara=uk',
  ctaNote: 'Fără cont · Gratuit',
  sourceNote: 'Actualizat: aprilie 2026 · Surse: consulatele UK · GRO UK · ActeRO',

  sections: [
    {
      id: 'comparison',
      title: 'Certificat britanic — long form vs short form',
      type: 'comparison',
      rows: [
        { aspect: 'Conținut', longForm: 'Datele ambilor părinți, detalii complete', shortForm: 'Minime — fără date părinți' },
        { aspect: 'Acceptat pentru transcriere', longForm: '✅ DA', shortForm: '❌ NU' },
        { aspect: 'Unde se comandă', longForm: 'GRO: gov.uk/order-copy-birth-death-marriage-certificate', shortForm: 'GRO (nu e util pentru acte RO)' },
        { aspect: 'Cost', longForm: '~£12.50 (GRO)', shortForm: '~£12.50' },
        { aspect: 'Apostilă FCDO necesară', longForm: '✅ DA — înainte de prezentare', shortForm: '— (nu e util)' },
      ],
    },
    {
      id: 'translation-rules',
      title: 'Traducere — exemplare per consulat',
      type: 'table',
      data: {
        headers: ['Consulat', 'Exemplare traducere', 'Acoperire traducere'],
        rows: [
          ['Londra', '1 exemplar original', 'Cert + apostilă'],
          ['Manchester', '2 exemplare originale ⚠️', 'Cert + apostilă'],
          ['Edinburgh', '2 exemplare originale ⚠️', 'Cert + apostilă'],
        ],
      },
    },
    {
      id: 'related',
      title: 'Pagini conexe',
      type: 'links',
      items: [
        { title: 'Transcriere certificat naștere în UK', description: 'Procedura completă pentru minori și adulți, cu diferențele per consulat.', href: '/transcriere-nastere-anglia' },
        { title: 'Apostila FCDO', description: 'Cum obții apostila — nu de la solicitor.', href: '/apostila-fcdo-anglia' },
        { title: 'Acte copil născut în Anglia', description: 'Fluxul complet pentru copil: transcriere → pașaport → alte acte.', href: '/acte-copil-nascut-in-anglia' },
        { title: 'Traducător autorizat', description: 'Cum alegi traducătorul și câte exemplare trebuie.', href: '/traducator-autorizat-acte-romanesti-anglia' },
      ],
    },
  ],

  faqItems: [
    { question: 'Am short certificate pentru copilul meu. Pot face transcrierea?', answer: 'Nu — consulatele române acceptă exclusiv long certificate (forma lungă cu datele ambilor părinți). Comandați long certificate de la GRO (gov.uk/order-copy-birth-death-marriage-certificate, ~£12.50).' },
    { question: 'Apostila se obține de la GRO sau de la FCDO?', answer: 'De la FCDO (gov.uk/get-document-legalised). GRO emite certificatul; FCDO apostilează documentul. Doi pași separați.' },
  ],

  finalCtaTitle: 'Ai documentul clarificat și vrei procedura completă?',
  finalCtaText: 'Wizardul ActeRO te duce spre ghidul de transcriere potrivit și îți spune ce documente mai trebuie pentru consulatul tău.',
  finalCtaLabel: 'Vreau procedura completă →',
  finalCtaHref: '/wizard?problem=transcriere&tara=uk',
};
