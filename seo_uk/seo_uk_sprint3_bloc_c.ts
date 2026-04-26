// ================================================================
// SPRINT 3 — BLOC C: Pagini #11–15
// /procura-vanzare-proprietate-anglia
// /programare-consulat-roman-anglia
// /traducator-autorizat-acte-romanesti-anglia
// /transcriere-nastere-anglia  (full page)
// /transcriere-casatorie-anglia
// ================================================================

// ----------------------------------------------------------------
// 11. /procura-vanzare-proprietate-anglia
// ----------------------------------------------------------------

export const procuraImobiliataMetadata = {
  title: 'Procură vânzare proprietate din Anglia — Consulat sau solicitor? | ActeRO',
  description:
    'Procura pentru vânzarea unui imobil din România se autentifică la consulat sau solicitor britanic + apostilă FCDO + traducere. Contractul se semnează la notarul din România.',
  keywords: [
    'procura vanzare proprietate anglia',
    'procura imobil anglia romania',
    'vand casa in romania din anglia procura',
    'procura vanzare teren anglia',
    'solicitor britanic procura romana',
    'procura apostila fcdo anglia',
  ],
  alternates: { canonical: 'https://www.actero.ro/procura-vanzare-proprietate-anglia' },
};

export const procuraImobiliaraPageProps = {
  lpSlug: 'procura-vanzare-proprietate-anglia',
  lpTopic: 'Ghid pentru vânzarea unui imobil din România când ești în UK. Procura se autentifică la consulat (aceeași zi) sau la un solicitor britanic + apostilă FCDO + traducere. Contractul de vânzare se semnează la notarul din România de persoana împuternicită.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Procura notarială Anglia', href: '/procura-notariala-anglia' },
    { label: 'Procura vânzare proprietate', href: '/procura-vanzare-proprietate-anglia' },
  ],

  h1: 'Procura vânzare proprietate din Anglia — consulat sau solicitor britanic?',

  tldr: {
    label: 'Răspuns rapid:',
    text: 'Consulatul autentifică procura în aceeași zi — contractul de vânzare NU se autentifică la consulat, ci la notarul din România de persoana împuternicită. Alternativ: solicitor britanic + apostilă FCDO + traducere autorizată română = document acceptat. Manchester: acte notariale se trimit prin poștă (plic SD obligatoriu).',
  },

  intro: 'Dacă vrei să vinzi un imobil din România fără să te deplasezi, procura este documentul cheie. Două opțiuni: consulat sau solicitor.',
  ctaLabel: 'Vreau lista exactă de documente →',
  ctaHref: '/wizard?problem=procura&tara=uk',
  ctaNote: 'Fără cont · Gratuit',
  sourceNote: 'Actualizat: aprilie 2026 · Surse: cglondra.mae.ro · manchester.mae.ro · edinburgh.mae.ro',

  sections: [
    {
      id: 'options',
      title: 'Două căi pentru autentificarea procurii',
      type: 'comparison-cards',
      cards: [
        {
          name: 'Varianta A: Consulat român',
          color: 'green',
          steps: [
            'Programare pe econsulat.ro → "Acte notariale" → "Procura specială"',
            'Vii cu CI/pașaport + datele complete ale mandatarului + datele imobilului',
            'Funcționarul redactează și autentifică procura în aceeași zi',
            'Plătești taxa notarială (variabilă, în GBP)',
            'Manchester: aduceți plic Royal Mail SD preplătit — actul se trimite prin poștă',
          ],
          note: 'Cel mai simplu dacă consulatul este accesibil.',
        },
        {
          name: 'Varianta B: Solicitor britanic + FCDO',
          color: 'neutral',
          steps: [
            'Mergi la orice solicitor britanic sau notary public',
            'Autentifică procura (în engleză sau română)',
            'Apostilezi la FCDO (gov.uk/get-document-legalised)',
            'Traduci autorizat în română (dacă nu e deja în română)',
            'Trimiți documentul mandatarului din România',
          ],
          note: 'Util dacă nu poți ajunge la consulat sau dacă solicitorul este mai aproape.',
        },
      ],
    },
    {
      id: 'what-notary-does',
      title: 'Ce face notarul din România cu procura',
      type: 'info-block',
      items: [
        {
          title: 'Notarul verifică procura și autentifică contractul de vânzare',
          text: 'Mandatarul (persoana împuternicită din România) se prezintă la notarul din localitate cu: procura autentificată în original + propria CI + titlul de proprietate + extrasul de carte funciară + certificatul fiscal. Notarul verifică procura și autentifică contractul de vânzare în numele tău.',
        },
        {
          title: 'Date necesare în procură pentru vânzare imobil',
          text: 'Datele mandatarului (nume, CNP, CI, domiciliu) + datele imobilului (adresă, nr. cadastral, nr. carte funciară, județ, localitate) + prețul de vânzare dacă este stabilit + orice alte condiții specifice.',
        },
      ],
    },
    {
      id: 'related',
      title: 'Pagini conexe',
      type: 'links',
      items: [
        { title: 'Procura notarială din Anglia', description: 'Hub pentru toate tipurile de acte notariale.', href: '/procura-notariala-anglia' },
        { title: 'Apostila FCDO', description: 'Obligatorie dacă folosiți varianta solicitor britanic.', href: '/apostila-fcdo-anglia' },
      ],
    },
  ],

  faqItems: [
    { question: 'Pot autentifica contractul de vânzare direct la consulat?', answer: 'Nu — consulatele române nu pot autentifica contracte de vânzare-cumpărare. Se autentifică procura. Contractul se semnează la notarul din România de persoana împuternicită prin procură.' },
    { question: 'Procura de la solicitor britanic este valabilă în România?', answer: 'Da, dacă este apostilată la FCDO + tradusă autorizat în română. Solicitorul britanic autentifică documentul; apostila FCDO certifică autenticitatea pentru utilizare internațională.' },
  ],

  finalCtaTitle: 'Vrei lista exactă de documente pentru consulatul tău?',
  finalCtaText: 'Wizardul ActeRO îți arată pașii exacți pentru Londra, Manchester sau Edinburgh.',
  finalCtaLabel: 'Vreau lista exactă →',
  finalCtaHref: '/wizard?problem=procura&tara=uk',
};

// ----------------------------------------------------------------
// 12. /programare-consulat-roman-anglia
// ----------------------------------------------------------------

export const programareMetadata = {
  title: 'Programare consulat român din Anglia — econsulat.ro, Ghid 2026 | ActeRO',
  description:
    'Programări pe econsulat.ro — gratuit, pentru toate cele 3 consulate. Manchester urgent: email. Londra/Edinburgh titlu: fără programare cu bilet ≤7 zile.',
  keywords: [
    'programare consulat roman anglia',
    'programare consulat londra',
    'programare consulat manchester',
    'programare consulat edinburgh',
    'econsulat ro programare anglia',
    'programare pasaport romanesc anglia',
  ],
  alternates: { canonical: 'https://www.actero.ro/programare-consulat-roman-anglia' },
};

export const programarePageProps = {
  lpSlug: 'programare-consulat-roman-anglia',
  lpTopic: 'Ghid pentru programarea la consulatele române din UK prin econsulat.ro. Excepții: titlu de călătorie la Londra și Edinburgh fără programare cu bilet ≤7 zile; Manchester titlu urgent prin email.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Programare consulat Anglia', href: '/programare-consulat-roman-anglia' },
  ],

  h1: 'Cum faci programarea la consulatul român din Anglia',

  tldr: {
    label: 'Răspuns rapid:',
    text: 'Toate programările se fac pe econsulat.ro — gratuit. Excepție: titlul de călătorie la Londra și Edinburgh se poate obține fără programare dacă ai bilet ≤7 zile lucrătoare. Manchester: programare obligatorie inclusiv pentru urgențe (email manchester.consul@mae.ro).',
  },

  intro: 'econsulat.ro este platforma unică pentru toate cele 3 consulate din UK. Gratuit, fără intermediari.',
  ctaLabel: 'Vreau ghidul pentru serviciul meu →',
  ctaHref: '/wizard?problem=pasaport&tara=uk',
  ctaNote: 'Fără cont · Gratuit',
  sourceNote: 'Actualizat: aprilie 2026 · Surse: econsulat.ro · consulatele UK',

  sections: [
    {
      id: 'steps',
      title: 'Pași pentru programare pe econsulat.ro',
      type: 'steps',
      items: [
        { step: '1', title: 'Creezi cont sau te loghezi pe econsulat.ro', text: 'Cont gratuit cu email + parolă. Datele personale se completează o singură dată.' },
        { step: '2', title: 'Cerere nouă — alegi serviciul', text: '"Pașapoarte" / "Carte de identitate" / "Acte notariale" / "Stare civilă". Selectezi tipul exact de cerere.' },
        { step: '3', title: 'Adresa ta — consulatul apare automat', text: 'econsulat.ro detectează consulatul competent pe baza adresei introduse. Londra, Manchester sau Edinburgh.' },
        { step: '4', title: 'Încarci documentele scanate și trimiți', text: 'Cererea are starea "În așteptare". Slotul de programare apare după aprobare (1-3 zile lucrătoare).' },
        { step: '5', title: 'Primești confirmarea cu data și ora', text: 'Email de confirmare cu toate detaliile. Nu uitați să printați sau salvați confirmarea.' },
      ],
    },
    {
      id: 'exceptions',
      title: 'Excepții — când nu ai nevoie de programare',
      type: 'facts',
      items: [
        { title: 'Titlu de călătorie: Londra și Edinburgh — fără programare cu bilet', text: 'Dacă ai bilet de călătorie spre România cu plecare în maxim 7 zile lucrătoare, te prezinți direct la Londra sau Edinburgh. Nu trimiți cerere pe econsulat.ro pentru această situație.' },
        { title: 'Manchester: programare obligatorie fără excepție', text: 'La Manchester nu există walk-in pentru niciun serviciu. Urgențe titlu de călătorie (plecare ≤48h): email manchester.consul@mae.ro cu biletul atașat.', severity: 'warning' },
      ],
    },
    {
      id: 'tips',
      title: 'Sfaturi practice',
      type: 'facts',
      items: [
        { title: 'Sloturile se eliberează treptat', text: 'Dacă nu există disponibilitate, reveniți după câteva zile. Nu există listă de așteptare — sloturile apar la eliberare.' },
        { title: 'Programările sunt GRATUITE', text: 'Nu apelați la intermediari care pretind că facilitează programări contra cost — programarea directă pe econsulat.ro este gratuită și funcționează.' },
        { title: 'Nu vă puteți programa online? Telefonul', text: 'Londra: 0742 528 5318 (L-V 09:00-15:00). Edinburgh/Manchester: contactați direct consulatul.' },
      ],
    },
  ],

  faqItems: [
    { question: 'Programările pe econsulat.ro sunt gratuite?', answer: 'Da, 100% gratuit. Orice serviciu care pretinde taxă pentru programare este un intermediar neautorizat.' },
    { question: 'Cât durează până primesc slotul de programare?', answer: 'De obicei 1-3 zile lucrătoare după trimiterea cererii. Dacă nu există sloturi, reveniți după câteva zile.' },
  ],

  finalCtaTitle: 'Ai programarea — vrei lista de documente?',
  finalCtaText: 'Wizardul ActeRO îți dă checklistul exact pentru serviciul și consulatul tău.',
  finalCtaLabel: 'Vreau checklistul →',
  finalCtaHref: '/wizard?problem=pasaport&tara=uk',
};

// ----------------------------------------------------------------
// 13. /traducator-autorizat-acte-romanesti-anglia
// ----------------------------------------------------------------

export const traducatorMetadata = {
  title: 'Traducător autorizat pentru acte românești în UK | ActeRO',
  description:
    'Cum alegi un traducător autorizat MJ România cu specimen la consulat. 1 exemplar la Londra, 2 la Manchester și Edinburgh.',
  keywords: [
    'traducator autorizat acte romanesti anglia',
    'traducator autorizat ministerul justitiei anglia',
    'traducere autorizata acte romanesti uk',
    'cum aleg traducator autorizat anglia',
    'specimen semnatura traducator consulat anglia',
  ],
  alternates: { canonical: 'https://www.actero.ro/traducator-autorizat-acte-romanesti-anglia' },
};

export const traducatorPageProps = {
  lpSlug: 'traducator-autorizat-acte-romanesti-anglia',
  lpTopic: 'Ghid pentru alegerea traducătorului autorizat pentru acte românești din UK. Traducătorul trebuie să fie autorizat de Ministerul Justiției din România și să aibă specimen de semnătură depus la consulatul unde vor fi prezentate documentele. Nu orice traducător britanic sau sworn translator este acceptat.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Traducător autorizat Anglia', href: '/traducator-autorizat-acte-romanesti-anglia' },
  ],

  h1: 'Traducător autorizat pentru acte românești din Anglia — ce trebuie să știi',

  tldr: {
    label: 'Răspuns rapid:',
    text: 'Traducătorul trebuie să fie autorizat de Ministerul Justiției din România cu specimen de semnătură depus la consulatul unde prezentați documentele. Un traducător britanic (sworn translator, certified translator) nu este echivalent. Traducerea acoperă atât documentul cât și apostila FCDO. Exemplare: 1 la Londra, 2 la Manchester și Edinburgh.',
  },

  intro: 'Greșeala frecventă: alegerea unui sworn translator britanic care nu este înregistrat la consulatul român. Documentul va fi refuzat la ghișeu.',
  ctaLabel: 'Vreau ghidul complet →',
  ctaHref: '/wizard?problem=transcriere&tara=uk',
  ctaNote: 'Fără cont · Gratuit',
  sourceNote: 'Actualizat: aprilie 2026 · Surse: consulatele UK · ActeRO',

  sections: [
    {
      id: 'requirements',
      title: 'Cerințele pentru traducătorul autorizat',
      type: 'facts',
      items: [
        { title: 'Autorizat de Ministerul Justiției din România', text: 'Traducătorul trebuie să fie autorizat conform legii române (Legea 178/1997). Nu orice traducător certificat sau sworn translator britanic îndeplinește această cerință.' },
        { title: 'Specimen de semnătură la consulat', text: 'Traducătorul trebuie să aibă specimenul de semnătură depus la consulatul unde veți prezenta documentele. Un traducător autorizat MJ dar fără specimen la consulatul vostru poate fi refuzat.' },
        { title: 'Traducerea acoperă documentul + apostila', text: 'Traducerea autorizată trebuie să acopere atât textul certificatului cât și textul apostilei FCDO. Manchester și Edinburgh verifică explicit că ambele sunt traduse.' },
        { title: '1 vs 2 exemplare', text: 'Londra cere 1 exemplar original. Manchester și Edinburgh cer 2 exemplare originale. Comandați numărul corect de la traducător — refacerea este costisitoare.', severity: 'warning' },
      ],
    },
    {
      id: 'how-to-find',
      title: 'Unde găsești traducătorii autorizați',
      type: 'steps',
      items: [
        { step: '1', title: 'Lista de pe site-ul consulatului tău', text: 'Fiecare consulat publică lista traducătorilor cu specimen de semnătură depus. Verificați pe cglondra.mae.ro / manchester.mae.ro / edinburgh.mae.ro secțiunea "Traducători autorizați".' },
        { step: '2', title: 'Verificați că traduce și apostila', text: 'Întrebați explicit: "Traduceți și textul apostilei FCDO?" — unii traducători traduc doar documentul principal.' },
        { step: '3', title: 'Confirmați numărul de exemplare', text: 'Manchester/Edinburgh: cereți 2 exemplare originale semnate. Londra: 1 exemplar.' },
      ],
    },
  ],

  faqItems: [
    { question: 'Sworn translator britanic este acceptat la consulatul român?', answer: 'Nu direct. Un sworn translator britanic nu este autorizat MJ România. Documentul tradus de acesta nu este acceptat la ghișeu. Trebuie traducător autorizat MJ România cu specimen la consulat.' },
    { question: 'Câte exemplare de traducere trebuie la Manchester?', answer: '2 exemplare originale semnate (nu fotocopii ale unui singur exemplar). La Londra: 1 exemplar. La Edinburgh: 2 exemplare.' },
  ],

  finalCtaTitle: 'Ai traducerea — care e pasul următor?',
  finalCtaText: 'Wizardul ActeRO îți arată traseul complet pentru transcriere sau pașaport.',
  finalCtaLabel: 'Vreau traseul complet →',
  finalCtaHref: '/wizard?problem=transcriere&tara=uk',
};

// ----------------------------------------------------------------
// 14. /transcriere-nastere-anglia  (full detailed page)
// ----------------------------------------------------------------

export const transcriereNastereMetadata = {
  title: 'Transcriere certificat de naștere britanic în UK | ActeRO',
  description:
    'Procedura completă de transcriere: long certificate, apostilă FCDO, traducere și diferențe Londra, Manchester, Edinburgh. Minor și adult.',
  keywords: [
    'transcriere nastere anglia',
    'transcriere certificat nastere britanic',
    'certificat nastere romanesc copii nascuti anglia',
    'transcriere nastere consulat roman anglia',
    'long certificate apostila fcdo transcriere',
    'transcriere nastere londra manchester edinburgh',
    'traducere certificat nastere britanic anglia',
  ],
  alternates: { canonical: 'https://www.actero.ro/transcriere-nastere-anglia' },
};

export const transcriereNasterePageProps = {
  lpSlug: 'transcriere-nastere-anglia',
  lpTopic: 'Ghid complet pentru transcrierea certificatelor de naștere britanice la consulatele române din UK. Long certificate obligatoriu. Apostilă FCDO obligatorie. Traducere: 1 exemplar Londra, 2 exemplare Manchester/Edinburgh. Minor: cert eliberat aceeași zi. Adult: până la 6 luni.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Transcriere naștere Anglia', href: '/transcriere-nastere-anglia' },
  ],

  h1: 'Transcriere certificat de naștere britanic — ghid complet 2026',

  tldr: {
    label: 'Răspuns rapid:',
    text: 'Long certificate (forma lungă) + apostilă FCDO + traducere autorizată română (cert + apostilă). 1 exemplar la Londra, 2 exemplare la Manchester și Edinburgh. Minor: cert eliberat aceeași zi dacă dosar complet. Adult: până la 6 luni (clarificare cetățenie). Edinburgh: 2 fotocopii per fiecare document.',
  },

  intro: 'Ordinea de parcurs: verifici situația căsătoriei părinților → pregătești documentele → programare → consulat → cert de naștere românesc.',
  ctaLabel: 'Vreau lista exactă pentru situația mea →',
  ctaHref: '/wizard?problem=transcriere&tara=uk',
  ctaNote: 'Fără cont · Gratuit',
  sourceNote: 'Actualizat: aprilie 2026 · Surse: cglondra.mae.ro/node/280 · manchester.mae.ro/node/280 · edinburgh.mae.ro/node/2083',

  sections: [
    {
      id: 'order',
      title: 'Ordinea cronologică — critică',
      type: 'warning-block',
      text: 'Dacă părinții s-au căsătorit în UK ÎNAINTEA nașterii și căsătoria nu este transcrisă — mai întâi transcrierea căsătoriei, abia apoi nașterea. Dacă s-au căsătorit DUPĂ naștere sau nu sunt căsătoriți — poți transcrie direct nașterea.',
    },
    {
      id: 'documents',
      title: 'Documente necesare',
      type: 'facts',
      items: [
        { title: 'Long certificate + apostilă FCDO — obligatoriu', text: 'Short certificate NU este acceptat. Comandați long certificate de la GRO (gov.uk/order-copy-birth-death-marriage-certificate). Apostilați la FCDO (gov.uk/get-document-legalised).', href: '/apostila-fcdo-anglia', linkLabel: 'Ghid apostilă FCDO →' },
        { title: 'Traducere autorizată (cert + apostilă)', text: 'Londra: 1 exemplar original. Manchester/Edinburgh: 2 exemplare originale. Traducătorul trebuie să fie autorizat MJ România cu specimen la consulatul vostru.', href: '/traducator-autorizat-acte-romanesti-anglia' },
        { title: 'CI/pașaport al parties care depune + cert căsătorie (dacă căsătoriți)', text: 'Edinburgh adaugă: 2 fotocopii per fiecare document. Dacă părinții sunt necăsătoriți: cert de naștere al ambilor parties.' },
      ],
    },
    {
      id: 'processing',
      title: 'Termen — minor vs adult',
      type: 'comparison',
      rows: [
        { aspect: 'Termen', minor: '✅ Aceeași zi (dacă CNP disponibil)', adult: 'Până la 6 luni (clarificare cetățenie)' },
        { aspect: 'Prezență minor', minor: 'Sub 14: nu. 14+: da.', adult: 'Personal obligatoriu' },
        { aspect: 'Preț', minor: 'Gratuit', adult: 'Gratuit' },
        { aspect: 'Poștă', minor: 'DA (Royal Mail SD)', adult: 'DA Londra/Edinburgh; ⚠️ Manchester verificați' },
      ],
    },
    {
      id: 'edinburgh-special',
      title: 'Edinburgh — cerințe suplimentare',
      type: 'facts',
      items: [
        { title: '2 fotocopii per fiecare document', text: 'Edinburgh cere original + 2 fotocopii pentru CI, cert căsătorie, cert naștere, cert britanic + apostilă. Pregătiți-le înainte.' },
        { title: 'Minor 14+ fără document românesc → titlu de călătorie mai întâi', text: 'Dacă minorul de 14+ ani nu are niciun document românesc valabil, Edinburgh cere mai întâi titlu de călătorie pentru identificare.' },
        { title: 'Pașaport minor aceeași zi dacă ≥3 luni', text: 'Dacă minorul are ≥3 luni și CNP disponibil, se poate depune cerere de pașaport imediat după transcriere, la aceeași programare.' },
      ],
    },
    {
      id: 'related',
      title: 'Pagini conexe',
      type: 'links',
      items: [
        { title: 'Acte copil născut în Anglia', description: 'Ordinea completă a pașilor.', href: '/acte-copil-nascut-in-anglia' },
        { title: 'Certificat britanic vs românesc', description: 'Long form vs short form și când ai nevoie de apostilă FCDO.', href: '/certificat-nastere-britanic-roman' },
        { title: 'Apostila FCDO', description: 'FCDO — nu solicitor britanic.', href: '/apostila-fcdo-anglia' },
        { title: 'Traducător autorizat', description: 'Cum alegi + câte exemplare per consulat.', href: '/traducator-autorizat-acte-romanesti-anglia' },
        { title: 'Transcriere certificat căsătorie', description: 'Dacă s-au căsătorit în UK înaintea nașterii.', href: '/transcriere-casatorie-anglia' },
      ],
    },
  ],

  faqItems: [
    { question: 'Câte exemplare de traducere trebuie pentru transcriere la Edinburgh?', answer: '2 exemplare originale ale traducerii autorizate (cert + apostilă). Edinburgh cere și 2 fotocopii per fiecare document prezentat.' },
    { question: 'Cât durează transcrierea la consulat?', answer: 'Minor: aceeași zi dacă dosarul este complet și CNP-ul este disponibil. Adult: până la 6 luni (clarificare cetățenie în România).' },
    { question: 'Pot trimite documentele prin poștă pentru transcriere?', answer: 'Nu — transcrierea necesită prezentare personală la consulat. Certificatul românesc poate fi primit prin poștă după eliberare (plic Royal Mail SD preplătit depus la cerere).' },
  ],

  finalCtaTitle: 'Vrei lista exactă pentru consulatul tău?',
  finalCtaText: 'Wizardul ActeRO îți dă checklistul complet în funcție de consulat și situația ta.',
  finalCtaLabel: 'Vreau checklistul →',
  finalCtaHref: '/wizard?problem=transcriere&tara=uk',
};

// ----------------------------------------------------------------
// 15. /transcriere-casatorie-anglia  (pagina bonus Sprint 3)
// ----------------------------------------------------------------

export const transcriereCasatorieMetadata = {
  title: 'Transcriere certificat de căsătorie britanic — Ghid 2026 | ActeRO',
  description:
    'Cert căsătorie britanic + apostilă FCDO + traducere. 1 exemplar Londra, 2 Manchester/Edinburgh. Edinburgh: +2 fotocopii per doc. Ambii soți prezenți dacă ambii români.',
  keywords: [
    'transcriere casatorie anglia',
    'transcriere certificat casatorie britanic',
    'certificat casatorie romanesc anglia',
    'transcriere casatorie consulat roman anglia',
  ],
  alternates: { canonical: 'https://www.actero.ro/transcriere-casatorie-anglia' },
};

export const transcriereCasatoriePageProps = {
  lpSlug: 'transcriere-casatorie-anglia',
  lpTopic: 'Ghid pentru transcrierea certificatelor de căsătorie britanice la consulatele române din UK. Ambii soți prezenți dacă ambii sunt cetățeni români. 1 exemplar traducere Londra, 2 exemplare Manchester/Edinburgh. Edinburgh: 2 fotocopii per document.',

  breadcrumbs: [
    { label: 'ActeRO', href: '/' },
    { label: 'Acte românești Marea Britanie', href: '/acte-romanesti-marea-britanie' },
    { label: 'Transcriere căsătorie Anglia', href: '/transcriere-casatorie-anglia' },
  ],

  h1: 'Transcriere certificat de căsătorie britanic — ghid 2026',

  tldr: {
    label: 'Răspuns rapid:',
    text: 'Cert căsătorie britanic + apostilă FCDO + traducere autorizată (cert + apostilă). 1 exemplar Londra, 2 exemplare Manchester și Edinburgh. Ambii soți obligatoriu prezenți dacă ambii sunt cetățeni români. Edinburgh: 2 fotocopii per fiecare document + orig. Eliberat aceeași zi.',
  },

  intro: 'Transcrierea căsătoriei britanice este necesară pentru schimbarea numelui pe CI/pașaport românesc și pentru transcrierea nașterii copiilor dacă s-au căsătorit înaintea nașterii.',
  ctaLabel: 'Vreau lista exactă →',
  ctaHref: '/wizard?problem=transcriere&tara=uk',
  ctaNote: 'Fără cont · Gratuit',
  sourceNote: 'Actualizat: aprilie 2026 · Surse: cglondra.mae.ro/node/281 · manchester.mae.ro/node/281 · edinburgh.mae.ro/node/281',

  sections: [
    {
      id: 'documents',
      title: 'Documente necesare',
      type: 'facts',
      items: [
        { title: 'Cert căsătorie britanic + apostilă FCDO', text: 'Certificatul original + apostilă FCDO pe verso. Edinburgh: + 2 fotocopii.', href: '/apostila-fcdo-anglia' },
        { title: 'Traducere autorizată (cert + apostilă)', text: 'Londra: 1 exemplar. Manchester/Edinburgh: 2 exemplare. Traducătorul: autorizat MJ România cu specimen la consulat.' },
        { title: 'CI/pașapoarte soți + cert naștere + cert căsătorie anterioare', text: 'Ambii soți prezenți dacă ambii cetățeni români. Edinburgh: + 2 fotocopii per document. Dacă soțul/soția este cetățean britanic: cert naștere britanic forma lungă.' },
      ],
    },
    {
      id: 'per-consulate',
      title: 'Diferențe per consulat',
      type: 'comparison',
      rows: [
        { aspect: 'Exemplare traducere', londra: '1', manchester: '2 ⚠️', edinburgh: '2 ⚠️' },
        { aspect: 'Fotocopii', londra: 'NU', manchester: '1 xerocopie', edinburgh: '2 fotocopii ⚠️' },
        { aspect: 'Căsătorie mixtă', londra: 'DOAR cetățean RO', manchester: '+ traducător dacă soț nu vorbește RO', edinburgh: 'Verificați cu consulatul' },
        { aspect: 'Termen eliberare', londra: 'Aceeași zi', manchester: 'Aceeași zi', edinburgh: 'Aceeași zi' },
        { aspect: 'Gratuit', londra: '✅', manchester: '✅', edinburgh: '✅' },
      ],
    },
    {
      id: 'related',
      title: 'Pagini conexe',
      type: 'links',
      items: [
        { title: 'Transcriere naștere', description: 'Dacă aveți și copii — transcrierea căsătoriei trebuie făcută înaintea nașterii.', href: '/transcriere-nastere-anglia' },
        { title: 'Apostila FCDO', description: 'FCDO — obligatorie pe cert căsătorie britanic.', href: '/apostila-fcdo-anglia' },
        { title: 'Buletin românesc din Anglia', description: 'Schimbarea numelui după căsătorie: procura CI.', href: '/buletin-romanesc-anglia' },
      ],
    },
  ],

  faqItems: [
    { question: 'Trebuie ambii soți prezenți pentru transcrierea căsătoriei?', answer: 'Da, dacă ambii sunt cetățeni români. Dacă căsătoria este mixtă (un soț cetățean străin), se prezintă doar cetățeanul român — soțul/soția cetățean/ă neromân/ă care nu vorbește română trebuie însoțit/ă de traducător autorizat la Londra și Manchester.' },
    { question: 'Edinburgh cere mai multe fotocopii pentru transcriere căsătorie?', answer: 'Da — Edinburgh cere original + 2 fotocopii pentru fiecare document (cert căsătorie britanic, CI, cert naștere soți). Londra și Manchester nu cer fotocopii suplimentare (Manchester cere 1 xerocopie).' },
  ],

  finalCtaTitle: 'Vrei checklistul exact pentru consulatul tău?',
  finalCtaText: 'Wizardul ActeRO îți dă lista completă și diferențele per consulat în 30 de secunde.',
  finalCtaLabel: 'Vreau checklistul →',
  finalCtaHref: '/wizard?problem=transcriere&tara=uk',
};
