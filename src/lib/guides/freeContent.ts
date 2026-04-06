import type { GuideId } from '@/types'

export type FreeBlockType = 'info' | 'warning' | 'tip' | 'action' | 'note'

export type FreeStep = {
  id: number
  title: string
  blocks: { text: string; type: FreeBlockType }[]
}

export type GhidFreeContent = {
  title: string
  meta: { free: string; total: string }
  steps: FreeStep[]
  paywallTeaser: string[]
  totalSteps: number
  lockedSteps: { id: number; title: string }[]
}

export const ghidFreeMap: Record<GuideId, GhidFreeContent> = {
  'pasaport-crds-de': {
    title: 'Ghid reînnoire pașaport CRDS · Germania',
    meta: { free: '2 pași gratuiți', total: '7 pași total' },
    totalSteps: 7,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Pașaportul expirat sau distrus/deteriorat — original (chiar și în stare proastă, cu condiția să existe elemente de identificare).', type: 'info' },
          { text: 'Cartea de identitate românească (dacă o ai, chiar expirată) — original. Va fi anulată la eliberarea noului pașaport CRDS — e normal.', type: 'info' },
          { text: 'Certificat de naștere românesc — original.', type: 'info' },
          { text: 'Document de domiciliu în Germania: Meldebescheinigung, Anmeldung sau Personalausweis german — original, emis în ultimii 5 ani.', type: 'info' },
          { text: '2 fotografii color recente, 3,5 × 4,5 cm, fond alb. Automatele foto din Rossmann sau DM (selectezi „biometric") produc fotografii acceptate.', type: 'tip' },
          { text: 'Certificat de căsătorie românesc — doar dacă ești căsătorit/ă ȘI ți-ai schimbat numele. Dacă nu ți-ai schimbat numele, nu e necesar.', type: 'info' },
          { text: 'Certificatele plastifiate, rupte, pătate sau corectate cu scotch sunt nule de drept și nu sunt acceptate la ghișeu. Solicită duplicat de la primărie dacă e cazul.', type: 'warning' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Scanează toate documentele din lista de mai sus înainte să creezi cererea pe econsulat.ro. Platforma îți va cere să le încarci.', type: 'info' },
          { text: 'Format recomandat: JPG sau PDF · calitate bună, lizibile, fără tăieturi. Fotografiile: scanate sau fotografiate pe fond alb, fără umbre.', type: 'tip' },
          { text: 'Pregătește și câte o copie simplă din fiecare document original — o vei aduce la ghișeu alături de original.', type: 'action' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Cont și cerere pe econsulat.ro' },
      { id: 4, title: 'Obține programarea' },
      { id: 5, title: 'Pregătire pentru ziua programării' },
      { id: 6, title: 'Ziua consulatului' },
      { id: 7, title: 'Ridică pașaportul' },
    ],
    paywallTeaser: [
      'Cum creezi cererea corect pe econsulat.ro (pas cu pas)',
      'Cum obții programarea — inclusiv trucuri reale din comunitate',
      'Card consulat complet: adresă, telefon, Maps, Waze, program',
      'Ce se întâmplă exact la ghișeu și cum reacționezi dacă ți se cere ceva neașteptat',
      'Checklist downloadabil pentru ghișeu + Tracker dosar',
    ],
  },
  'pasaport-crds-nou-de': {
    title: 'Ghid primul pașaport CRDS · Germania',
    meta: { free: '2 pași gratuiți', total: '7 pași total' },
    totalSteps: 7,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Certificat de naștere românesc — original. Certificatele plastifiate, rupte sau pătate sunt nule de drept — solicită duplicat dacă e cazul.', type: 'info' },
          { text: 'Carte de identitate românească (dacă există, chiar expirată) — original. Va fi anulată la eliberarea pașaportului CRDS.', type: 'info' },
          { text: 'Document de domiciliu în Germania: Meldebescheinigung / Anmeldung / Personalausweis german — original, emis în ultimii 5 ani.', type: 'info' },
          { text: '2 fotografii color recente, 3,5 × 4,5 cm, fond alb. Automatele din Rossmann/DM (selectezi „biometric") sunt acceptate.', type: 'tip' },
          { text: 'Certificat de căsătorie românesc — doar dacă ești căsătorit/ă ȘI ți-ai schimbat numele. Dacă nu ți-ai schimbat numele, nu e necesar.', type: 'info' },
          { text: 'Taxa: 53€ — se achită la consulat (Bonn = EC-Karte, München = numerar, Stuttgart = POS sau transfer bancar).', type: 'action' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Scanează toate documentele din lista de mai sus înainte să creezi cererea pe econsulat.ro.', type: 'info' },
          { text: 'Format recomandat: JPG sau PDF · calitate bună, lizibile, fără tăieturi.', type: 'tip' },
          { text: 'Pregătește și câte o copie simplă din fiecare document original.', type: 'action' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Cont și cerere pe econsulat.ro' },
      { id: 4, title: 'Obține programarea' },
      { id: 5, title: 'Pregătire pentru ziua programării' },
      { id: 6, title: 'Ziua consulatului' },
      { id: 7, title: 'Ridică pașaportul' },
    ],
    paywallTeaser: [
      'Cum creezi cererea corect pe econsulat.ro',
      'Cum obții programarea rapid',
      'Card consulat complet cu adresă, telefon, Maps, Waze',
      'Checklist downloadabil + Tracker dosar',
    ],
  },
  'pasaport-de-cu-domiciliu': {
    title: 'Ghid pașaport · Domiciliu România · Germania',
    meta: { free: '2 pași gratuiți', total: '7 pași total' },
    totalSteps: 7,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Cartea de identitate valabilă cu domiciliu în România — original. Trebuie să fie valabilă și cu numele actual.', type: 'info' },
          { text: 'Pașaportul anterior (dacă există, chiar expirat) — original.', type: 'info' },
          { text: 'Certificat de naștere românesc — original. Certificate plastifiate/deteriorate = nule de drept.', type: 'info' },
          { text: '2 fotografii color recente, 3,5 × 4,5 cm, fond alb. Excepție München: fotografiile se fac la consulat — nu aduci fotografii proprii.', type: 'tip' },
          { text: 'Certificat de căsătorie românesc — doar dacă ești căsătorit/ă ȘI ți-ai schimbat numele.', type: 'info' },
          { text: 'Nu ai nevoie de Anmeldung — domiciliul e în România, dovedit de CI. Taxa: 53€ la consulat.', type: 'action' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Scanează documentele din lista de mai sus. Format: JPG sau PDF, calitate bună.', type: 'info' },
          { text: 'Pregătește câte o copie simplă din fiecare document original.', type: 'action' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Cont și cerere pe econsulat.ro' },
      { id: 4, title: 'Obține programarea' },
      { id: 5, title: 'Pregătire pentru ziua programării' },
      { id: 6, title: 'Ziua consulatului' },
      { id: 7, title: 'Ridică pașaportul' },
    ],
    paywallTeaser: [
      'Cum selectezi corect serviciul pe econsulat.ro (nu CRDS)',
      'Cum obții programarea și cât durează',
      'Card consulat complet cu adresă, Maps, Waze, program',
      'Checklist downloadabil + Tracker dosar',
    ],
  },
  'pasaport-de-cu-domiciliu-pierdut': {
    title: 'Ghid pașaport pierdut/furat · Germania',
    meta: { free: '2 pași gratuiți', total: '7 pași total' },
    totalSteps: 7,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Cartea de identitate valabilă cu domiciliu în România — original.', type: 'info' },
          { text: 'Certificat de naștere românesc — original. Certificate deteriorate = nule de drept.', type: 'info' },
          { text: 'Dacă a fost PIERDUT: declarație pe proprie răspundere — se completează direct la ghișeul consulatului.', type: 'info' },
          { text: 'Dacă a fost FURAT: confirmare poliție locală (Verlustanzeige/Diebstahlsanzeige) + traducere autorizată în română.', type: 'warning' },
          { text: 'Dacă a fost DISTRUS: prezinți documentul distrus/deteriorat sau fragmentele — trebuie să existe elemente de identificare.', type: 'info' },
          { text: '2 fotografii color recente, 3,5 × 4,5 cm, fond alb. München: fotografiile se fac la consulat.', type: 'tip' },
          { text: 'Certificat de căsătorie românesc — doar dacă ești căsătorit/ă ȘI ți-ai schimbat numele. Taxa: 53€ la consulat.', type: 'action' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Scanează documentele disponibile. Declarația pentru pierdere se completează la ghișeu — nu e nevoie s-o prepari în avans.', type: 'info' },
          { text: 'Dacă ai nevoie de traducere autorizată (caz furt), partenerii ActeRO din Germania pot face acest lucru rapid.', type: 'tip' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Cont și cerere pe econsulat.ro' },
      { id: 4, title: 'Obține programarea' },
      { id: 5, title: 'Pregătire pentru ziua programării' },
      { id: 6, title: 'Ziua consulatului' },
      { id: 7, title: 'Ridică pașaportul' },
    ],
    paywallTeaser: [
      'Cum completezi cererea pe econsulat.ro pentru document lipsă',
      'Ce se întâmplă la ghișeu când declari pierderea',
      'Card consulat complet + program ridicare',
      'Checklist downloadabil + Tracker dosar',
    ],
  },
  'buletin-de-fara-domiciliu': {
    title: 'Ghid buletin expirat · Fără domiciliu RO',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Din septembrie 2025, cererea pentru buletin se depune numai cu prezență fizică în România. Nu se poate face prin procură de la distanță.', type: 'warning' },
          { text: 'Buletinul expirat — original. Dacă îl mai ai, ia-l cu tine; funcționarul îl va reține sau anula la depunerea cererii.', type: 'info' },
          { text: 'Certificat de naștere românesc — original. Certificatele plastifiate, rupte sau corectate nu sunt acceptate la ghișeu.', type: 'info' },
          { text: 'Document de călătorie valabil pentru drumul în România — pașaport sau titlu de călătorie. Fără el nu ajungi la SPCLEP.', type: 'warning' },
          { text: 'Certificat de căsătorie românesc — original — doar dacă ți-ai schimbat numele prin căsătorie.', type: 'info' },
          { text: 'Unde mergi: la SPCLEP-ul corespunzător ultimului domiciliu pe care l-ai avut înregistrat în România. Verifică localitatea exactă înainte să cumperi biletul.', type: 'action' },
          { text: 'Verifică înainte dacă SPCLEP-ul tău lucrează cu CEI, CIS sau ambele și ce taxă cere la depunere. Practica diferă încă între localități.', type: 'tip' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Verifică toate originalele: să fie lizibile, neplastifiate și în numele actual. Dacă ceva e deteriorat, rezolvă duplicatul înainte de deplasare.', type: 'info' },
          { text: 'Notează adresa exactă și programul SPCLEP-ului competent. Nu toate localitățile lucrează în fiecare zi pentru evidența persoanelor.', type: 'action' },
          { text: 'Dacă nu ai alt act românesc valabil, planifică întâi întoarcerea în România și abia apoi depunerea la SPCLEP — sunt două momente diferite.', type: 'warning' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Planifică deplasarea în România' },
      { id: 4, title: 'Pregătire pentru deplasare' },
      { id: 5, title: 'Ziua la SPCLEP' },
      { id: 6, title: 'Ridică buletinul' },
    ],
    paywallTeaser: [
      'Cum găsești și contactezi SPCLEP-ul competent',
      'Cum faci programare online (acolo unde există)',
      'Ce se întâmplă la ghișeul SPCLEP — pas cu pas',
      'Checklist downloadabil + Tracker dosar',
    ],
  },
  'buletin-de-cu-domiciliu': {
    title: 'Ghid buletin expirat · Domiciliu activ RO',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Din septembrie 2025, cererea pentru buletin se depune numai cu prezență fizică în România. Nu se poate face prin procură de la distanță.', type: 'warning' },
          { text: 'Buletinul expirat — original. Dacă îl ai, îl duci la ghișeu și va fi anulat la depunerea cererii.', type: 'info' },
          { text: 'Certificat de naștere românesc — original. Dacă este plastifiat sau deteriorat, trebuie duplicat înainte de deplasare.', type: 'info' },
          { text: 'Dovada adresei de domiciliu din România — extras de carte funciară recent, act de proprietate sau documentul cerut de SPCLEP-ul tău. Dacă nu ești proprietar, verifică și condițiile de găzduire.', type: 'info' },
          { text: 'Certificat de căsătorie românesc — original — doar dacă numele tău actual diferă de cel din certificatul de naștere.', type: 'info' },
          { text: 'Document de călătorie valabil pentru drumul în România — pașaport sau titlu de călătorie, dacă nu poți intra doar cu un document străin.', type: 'tip' },
          { text: 'Unde mergi: la SPCLEP din sectorul sau orașul unde ai deja domiciliul activ în România.', type: 'action' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Verifică toate originalele și fă-ți o listă clară cu ce iei la ghișeu. Dacă adresa din România este sensibilă, confirmă din timp exact ce act de spațiu cere SPCLEP-ul tău.', type: 'info' },
          { text: 'Verifică dacă SPCLEP-ul lucrează cu programare online sau doar prin prezentare directă. Procedura diferă de la un oraș la altul.', type: 'action' },
          { text: 'Nu presupune că fotografia se face automat la ghișeu în toate localitățile. Unele ghișee încă cer fotografie sau copie după documente — confirmă local înainte de drum.', type: 'warning' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Planifică deplasarea în România' },
      { id: 4, title: 'Pregătire pentru deplasare' },
      { id: 5, title: 'Ziua la SPCLEP' },
      { id: 6, title: 'Ridică buletinul' },
    ],
    paywallTeaser: [
      'Cum găsești SPCLEP-ul tău și programarea online',
      'Ce se întâmplă la ghișeu — pas cu pas',
      'Checklist downloadabil + Tracker dosar',
    ],
  },
  'buletin-de-fara-domiciliu-pierdut': {
    title: 'Ghid buletin pierdut/furat · Fără domiciliu RO',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Prezența ta fizică la SPCLEP este obligatorie. Nu poți declara pierderea sau furtul prin procură.', type: 'warning' },
          { text: 'Certificat de naștere românesc — original. Este documentul de bază de identificare dacă buletinul nu mai este la tine.', type: 'info' },
          { text: 'Pașaport valabil sau alt act de identitate românesc cu fotografie, dacă îl ai — ajută mult la identificarea la ghișeu.', type: 'info' },
          { text: 'Dacă buletinul a fost PIERDUT: declarația se dă la SPCLEP, pe loc. Nu ai nevoie de hârtie separată înainte.', type: 'info' },
          { text: 'Dacă buletinul a fost FURAT: păstrează sesizarea de la poliția germană sau română. Nu este actul principal pentru SPCLEP, dar te ajută să explici cronologia.', type: 'warning' },
          { text: 'Dacă documentul a fost DISTRUS: du cu tine ce a rămas din el, dacă mai există fragmente identificabile.', type: 'info' },
          { text: 'Unde mergi: la SPCLEP-ul corespunzător ultimului domiciliu înregistrat în România.', type: 'action' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Strânge toate actele rămase care te pot identifica: pașaport, permis românesc, certificat de căsătorie, copii vechi de CI dacă le ai. Nu sunt toate obligatorii, dar pot debloca situațiile neclare.', type: 'info' },
          { text: 'Asigură-te că ai un document valabil pentru călătoria în România. Ghidul de buletin nu rezolvă partea de intrare în țară.', type: 'warning' },
          { text: 'Notează exact când ai constatat lipsa documentului și, dacă a fost furt, unde l-ai declarat. Informația îți va fi cerută în declarația de la ghișeu.', type: 'tip' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Planifică deplasarea în România' },
      { id: 4, title: 'Pregătire pentru deplasare' },
      { id: 5, title: 'Ziua la SPCLEP' },
      { id: 6, title: 'Ridică buletinul' },
    ],
    paywallTeaser: [
      'Cum găsești SPCLEP-ul competent',
      'Procedura exactă pentru buletin pierdut/furat la SPCLEP',
      'Checklist downloadabil + Tracker dosar',
    ],
  },
  'buletin-de-cu-domiciliu-pierdut': {
    title: 'Ghid buletin pierdut/furat · Domiciliu activ RO',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Prezența ta fizică la SPCLEP este obligatorie. Cererea pentru document lipsă nu se poate depune prin procură.', type: 'warning' },
          { text: 'Certificat de naștere românesc — original. Dacă este plastifiat, rupt sau pătat, trebuie duplicat înainte de drum.', type: 'info' },
          { text: 'Pașaport valabil sau alt act românesc cu fotografie, dacă îl ai — ajută funcționarul să te identifice mai repede.', type: 'info' },
          { text: 'Extras de carte funciară pentru adresa din România — maxim 30 de zile. Varianta electronică PDF emisă din epay.ancpi.ro este acceptată, nu ai nevoie de exemplar pe hârtie de la OCPI.', type: 'info' },
          { text: 'Dacă buletinul a fost PIERDUT: declarația se completează la ghișeu. Dacă a fost FURAT: raportul poliției te ajută pentru cronologie, dar NU este documentul principal SPCLEP — funcționarul înregistrează furtul din declarația ta.', type: 'warning' },
          { text: 'La depunere vei alege între CEI și CIS. CEI este gratuită la prima emitere pentru 14+ până la 30 iunie 2026 și se ridică personal, cu setarea PIN-urilor; CIS costă 40 RON și are reguli locale mai flexibile la ridicare.', type: 'tip' },
          { text: 'Dacă ți-ai schimbat numele, ia și certificatul de căsătorie românesc în original.', type: 'info' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Verifică toate originalele și pune-le în ordinea în care le vei prezenta: identificare, stare civilă, adresă, dovada plății dacă este cazul.', type: 'info' },
          { text: 'Dacă mergi pe CIS sau dacă nu mai intri la prima emitere gratuită de CEI, plătește taxa înainte la CEC Bank sau la un automat SelfPay și păstrează dovada. Pentru prima CEI gratuită nu plătești nimic.', type: 'action' },
          { text: 'Asigură-te că ai un document valabil pentru călătoria în România și că știi exact la ce SPCLEP mergi. Domiciliul activ nu înseamnă că poți depune oriunde.', type: 'warning' },
          { text: 'Dacă ai copii vechi după buletinul dispărut, ia-le cu tine. Nu înlocuiesc documentul, dar pot accelera verificarea datelor în sistem.', type: 'tip' },
          { text: 'Decide dinainte dacă vrei CEI sau CIS. CEI se face mai repede și îți cere ridicare personală cu activarea PIN-urilor; CIS durează mai mult, dar poate fi mai simplă dacă nu ai nevoie de funcțiile electronice.', type: 'note' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Planifică deplasarea în România' },
      { id: 4, title: 'Pregătire pentru deplasare' },
      { id: 5, title: 'Ziua la SPCLEP' },
      { id: 6, title: 'Ridică buletinul' },
    ],
    paywallTeaser: [
      'Cum găsești SPCLEP-ul exact de care aparții',
      'Ce declari la ghișeu dacă buletinul e pierdut sau furat',
      'Ce se întâmplă la depunere și la ridicare',
      'Checklist downloadabil + Tracker dosar',
    ],
  },
  'titlu-calatorie-urgenta-de': {
    title: 'Titlu de călătorie urgență · Germania',
    meta: { free: '2 pași gratuiți', total: '5 pași total' },
    totalSteps: 5,
    steps: [
      {
        id: 1,
        title: 'Identifică documentele necesare',
        blocks: [
          { text: 'Ai nevoie de CEL PUȚIN UN document românesc de identificare, în original. Acceptat oricare dintre acestea: CI sau buletin expirat / pașaport românesc expirat / permis de conducere românesc / certificat de naștere românesc cu CNP (dacă nu mai ai niciun alt document cu fotografie).', type: 'info' },
          { text: 'Ghidul este același indiferent dacă ai pașaport expirat, buletin expirat sau ambele. Ce act ai acum schimbă doar documentul pe care îl aduci — nu procedura.', type: 'info' },
          { text: 'Dacă documentul a fost PIERDUT: nu ai nevoie de nicio hârtie în avans. Declarația privind împrejurările pierderii se completează direct la ghișeul consulatului.', type: 'warning' },
          { text: 'Dacă documentul a fost FURAT: du-te PRIMUL la poliția locală (Polizei) și depune Diebstahlsanzeige. Primești o adeverință scrisă. Această adeverință trebuie însoțită de traducere autorizată în română: obligatorie la München, Stuttgart și Berlin. La Bonn traducerea nu este cerută — adeverința poliției este suficientă.', type: 'warning' },
          { text: 'Nu ai nevoie de econsulat.ro și nu există programare online pentru titlul de călătorie. Te prezinți direct la consulat în intervalul dedicat.', type: 'tip' },
          { text: 'Nu ai nevoie de: Anmeldung, Aufenthaltstitel, apostilă, traduceri pentru documente germane, nicio sumă de bani — serviciul este GRATUIT.', type: 'info' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește-te pentru consulat',
        blocks: [
          { text: 'FOTOGRAFII: depinde strict de consulatul tău. La München trebuie să aduci 2 fotografii biometrice color proprii — de la centre foto sau automate (NU salvate pe telefon). La Bonn, Stuttgart și Berlin fotografia se preia electronic la ghișeu — nu aduci nimic.', type: 'warning' },
          { text: 'Dacă nu ești sigur de consulatul tău sau dacă nu vrei să riști un drum degeaba: adu 2 fotografii biometrice (3,5 × 4,5 cm, fond alb, față descoperită). Automatele din Rossmann sau DM (selectezi „biometric”) sunt acceptate.', type: 'tip' },
          { text: 'Recomandare oficială de la toate consulatele: îmbracă-te în culori închise pentru o fotografie mai clară.', type: 'info' },
          { text: 'Titlul de călătorie nu conține date biometrice (amprente digitale). Este un document mai simplu decât pașaportul — de aceea se eliberează în aceeași zi.', type: 'note' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Mergi la consulat azi' },
      { id: 4, title: 'La ghișeu' },
      { id: 5, title: 'Ce faci după ce ajungi în România' },
    ],
    paywallTeaser: [
      'Programul exact de preluare la consulatul tău și adresa cu hartă',
      'Ce spui la ghișeu și la ce să te aștepți pas cu pas',
      'Ce faci dacă nu ai absolut niciun document românesc la tine',
      'Cum treci frontiera cu titlul de călătorie și ce se întâmplă cu documentul',
      'Pașii obligatorii în România după ce ajungi — pașaport în 1-2 zile, cum și de unde',
    ],
  },
  'titlu-calatorie-de': {
    title: 'Ghid titlu de călătorie · Germania',
    meta: { free: '2 pași gratuiți', total: '5 pași total' },
    totalSteps: 5,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Ai nevoie de UN document românesc de identitate cu fotografie — pașaport expirat, carte de identitate/buletin expirat sau permis de conducere românesc. Original + 1 copie.', type: 'info' },
          { text: 'Dacă nu ai niciun document de identitate: certificatul de naștere românesc sau orice alt act în care apare CNP-ul tău. Original + 1 copie. (confirmat bonn.mae.ro/node/479)', type: 'info' },
          { text: 'Dacă documentul a fost PIERDUT: declarație pe proprie răspundere — se completează pe loc la ghișeul consulatului. Nu trebuie pregătită în avans. (confirmat Bonn + München)', type: 'info' },
          { text: 'Dacă documentul a fost FURAT: adeverință eliberată de poliția locală (Verlustanzeige / Diebstahlsanzeige). La München, Stuttgart și Berlin: obligatoriu însoțită de traducere autorizată în română. La Bonn: traducerea NU este cerută — adeverința singură este suficientă.', type: 'warning' },
          { text: 'Dacă documentul a fost DISTRUS sau DETERIORAT: prezinți documentul în starea în care se află sau fragmentele din el.', type: 'info' },
          { text: 'Titlul de călătorie este GRATUIT — nu plătești nimic la consulat. (Legea 1/2017, confirmat la toate cele 4 consulate)', type: 'tip' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește fotografiile',
        blocks: [
          { text: 'Regula fotografiilor diferă per consulat — citește cu atenție ce se aplică la tine.', type: 'warning' },
          { text: 'Bonn: fotografia se preia ELECTRONIC la ghișeu — nu aduci fotografii proprii. Poartă haine de culoare închisă pentru calitate mai bună. (confirmat bonn.mae.ro/node/479)', type: 'info' },
          { text: 'München: aduci 2 fotografii color format biometric (3,5 × 4,5 cm, fond alb). NU fotografii salvate pe telefon — obținute de la centre foto sau automate de pașaport. (confirmat muenchen.mae.ro/node/479)', type: 'info' },
          { text: 'Stuttgart: adulții — fotografia se preia electronic la ghișeu, nu aduci proprii. Minori sub 14 ani: 1 fotografie color 3,5 × 4,5 cm pe suport hârtie. (confirmat stuttgart.mae.ro/node/479)', type: 'info' },
          { text: 'Berlin: fotografia se preia electronic la ghișeu — nu aduci fotografii proprii. Poartă haine de culoare închisă. (confirmat berlin.mae.ro/node/271)', type: 'info' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Mergi la consulat' },
      { id: 4, title: 'Ridică titlul de călătorie' },
      { id: 5, title: 'Ce faci în România' },
    ],
    paywallTeaser: [
      'Intervalul orar exact la consulatul tău — când să ajungi și când nu',
      'Ce spui și ce completezi la ghișeu — cererea se face pe loc',
      'Când ridici titlul — Bonn: același sau altă zi; München/Stuttgart/Berlin: aceeași zi',
      'Cardul complet al consulatului tău: adresă, program, particularități',
      'Ce trebuie să faci URGENT în România — pașaport în 5 zile vs. buletin în 10 zile',
      'Ce se întâmplă dacă funcționarul cere ceva neașteptat',
    ],
  },
  'procura-vanzare-de': {
    title: 'Procură de vânzare/cumpărare proprietate · Germania',
    meta: { free: '2 pași gratuiți', total: '7 pași total' },
    totalSteps: 7,
    steps: [
      {
        id: 1,
        title: 'Adună documentele necesare',
        blocks: [
          { text: 'Act de identitate valabil (pașaport sau carte de identitate românească) — original. Confirmat Bonn, München, Stuttgart, Berlin.', type: 'info' },
          { text: 'Copie după actul de identitate al persoanei pe care o împuternicești (mandatarul) — sau datele sale complete: nume, prenume, CNP, serie CI/pașaport, număr, dată și loc eliberare, adresă. Confirmat München, Stuttgart, Berlin.', type: 'info' },
          { text: 'Copie după actul de proprietate al imobilului — contract de vânzare-cumpărare, certificat de moștenitor, titlu de proprietate, sau orice document care dovedește proprietatea. OBLIGATORIU pentru procuri de transfer. Confirmat Bonn, München, Stuttgart, Berlin.', type: 'info' },
          { text: 'Dacă există: copie după cadastru și încheierea de intabulare. Recomandat de surse notariale.', type: 'info' },
          { text: 'Dacă imobilul este bun comun (cumpărat în căsătorie) — soțul/soția trebuie să dea și el/ea o procură. O puteți face împreună la același consulat sau separat, în documente diferite. Confirmat notarial.', type: 'warning' },
          { text: 'Consulatul NU cere apostilă și NU cere traducere pentru documentele germane. Procura redactată la consulat este direct valabilă în România, fără formalități suplimentare. Avantaj față de procura făcută la notar german (care necesită apostilă + traducere legalizată).', type: 'tip' },
          { text: 'Nu ai nevoie de NIF. Românii cu CNP sunt deja înregistrați fiscal — NIF se aplică doar cetățenilor străini fără CNP. Confirmat ANAF.', type: 'info' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește conținutul procurii',
        blocks: [
          { text: 'Acesta este pasul pe care majoritatea îl sare — și din cauza lui procura ajunge insuficientă sau refuzată la notar în România. Conținutul procurii trebuie stabilit ÎNAINTE de programare.', type: 'warning' },
          { text: 'Contactează notarul din România care va instrumenta tranzacția și întreabă: ce împuterniciri exacte trebuie să conțină procura? (preț fix sau la negociere, dreptul de a încasa banii, dreptul de a preda imobilul, dreptul de a semna contract preliminar, etc.)', type: 'action' },
          { text: 'Dacă nu ai notar ales încă: o procură specială standard de vânzare include dreptul de a vinde la prețul negociat de mandatar, de a semna contractul autentic, de a încasa prețul și de a preda imobilul. Consulul poate redacta textul pe loc.', type: 'info' },
          { text: 'Valabilitate: dacă nu specifici un termen, procura expiră după 3 ani. Dacă tranzacția are un termen clar, e mai sigur să specifici o durată mai scurtă (ex. 6 sau 12 luni). Cod Civil art. 2015.', type: 'info' },
          { text: 'Pregătește în scris ce vrei să cuprindă procura: obiectul (imobilul descris cu adresă și număr cadastral dacă știi), cine este mandatarul (date complete), ce puteri îi dai. Cu cât ești mai precis, cu atât mai repede se redactează la ghișeu.', type: 'tip' },
          { text: 'Tarif publicitate notarială (RNNEPR): 3€ — se achită la consulat. Consulatul înscrie procura în registrul notarial național din oficiu.', type: 'info' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Creează cererea pe econsulat.ro' },
      { id: 4, title: 'Obține programarea la consulat' },
      { id: 5, title: 'Pregătire pentru ziua programării' },
      { id: 6, title: 'Ziua consulatului — semnezi procura' },
      { id: 7, title: 'Trimite procura și coordonează cu notarul din România' },
    ],
    paywallTeaser: [
      'Fluxul exact pe econsulat.ro — ce serviciu alegi, ce câmp completezi, cum trimiți documentele',
      'Regula specifică Bonn: ce trebuie trimis în avans pentru eliberare în aceeași zi',
      'Ce se întâmplă la ghișeu — cum semnezi, cum plătești 3€, ce primești',
      'Cardul consulatului tău cu adresă, program și metoda de plată pentru 3€',
      'Cum trimiți procura mandatarului și ce trebuie să verifice notarul din România',
      'Cauzele frecvente de refuz la notar și cum le eviți înainte să pleci de acasă',
    ],
  },
  'procura-mostenire-de': {
    title: 'Ghid procură · Moștenire · Germania',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Actul de identitate valabil — original ✅. Consulatul autentifică procura doar dacă te prezinți personal cu documentul de identitate valabil.', type: 'info' },
          { text: 'Datele complete ale persoanei pe care o împuternicești în România — nume, CNP, serie și număr CI, adresă ✅. Fără ele, procura nu poate fi redactată corect.', type: 'info' },
          { text: 'Datele notarului din România care instrumentează succesiunea ⚠️. Ideal: nume, localitate, date de contact și ce trebuie să conțină procura.', type: 'info' },
          { text: 'Certificatul de deces al persoanei decedate ⚠️. Nu am confirmare oficială că este cerut de consulat în toate cazurile, dar notarul din România îl va folosi aproape sigur în dosarul de succesiune.', type: 'warning' },
          { text: 'Actele care îți dovedesc calitatea de moștenitor — de exemplu certificat de naștere sau de căsătorie ⚠️. Verifică înainte cu notarul dacă trebuie doar trimise în România sau și prezentate la consulat.', type: 'warning' },
          { text: 'Serviciul consular pentru procuri este gratuit ✅. Poate apărea separat tariful de publicitate notarială de 3 euro, dacă actul trebuie înscris în registrele notariale din România ✅.', type: 'tip' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Scanează actul de identitate valabil și păstrează originalul pregătit pentru consulat. ✅', type: 'info' },
          { text: 'Cere notarului din România să-ți spună exact ce trebuie să conțină procura pentru succesiune: cine te reprezintă, la ce birou notarial și pentru ce formalități exacte. ⚠️', type: 'action' },
          { text: 'Pregătește datele complete ale mandatarului din România: nume, CNP, serie și număr CI, adresă. ✅ Fără ele, textul procurii poate ieși greșit.', type: 'info' },
          { text: 'Ține la îndemână certificatul de deces și actele care dovedesc relația de rudenie. ⚠️ Nu am confirmare oficială că sunt cerute la consulat în toate cazurile, dar notarul din România le poate cere pentru redactare sau verificare.', type: 'warning' },
          { text: 'Dacă nu ai încă notar ales, caută unul înainte de programare. Pentru succesiune contează să ai un birou notarial care știe deja dosarul sau îl poate deschide în România. ⚠️', type: 'tip' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Obține programarea' },
      { id: 4, title: 'Pregătire pentru ziua programării' },
      { id: 5, title: 'Semnează procura la consulat' },
      { id: 6, title: 'Trimite procura în România' },
    ],
    paywallTeaser: [
      'Cum obții programarea pe econsulat.ro pentru acte notariale',
      'Cum te pregătești pentru consulat fără să uiți un detaliu important',
      'Ce se întâmplă la ghișeu când semnezi procura de moștenire',
      'Cum trimiți procura autentificată în România, fără să pierzi timp',
      'Ce faci dacă nu ai încă notar ales în dosarul de succesiune',
    ],
  },
  'procura-generala-de': {
    title: 'Procură notarială generală · Germania',
    meta: { free: '2 pași gratuiți', total: '7 pași total' },
    totalSteps: 7,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Act de identitate românesc valabil — pașaport sau carte de identitate — original. (confirmat muenchen.mae.ro/node/259 + berlin.mae.ro/node/470 + stuttgart.mae.ro/node/496)', type: 'info' },
          { text: 'Datele complete ale persoanei pe care o împuternicești (mandatarul): nume și prenume complet, data și locul nașterii, adresă domiciliu, CNP, seria și numărul actului de identitate, data și locul eliberării. (confirmat muenchen.mae.ro/node/259 + berlin.mae.ro/node/470)', type: 'info' },
          { text: 'Dacă nu cunoști CNP-ul sau seria de CI a mandatarului, procura nu poate fi autentificată. Obține aceste date complet și corect înainte de programare.', type: 'warning' },
          { text: 'Este recomandabilă și o copie a actului de identitate al mandatarului — nu e obligatorie, dar simplifică redactarea. (berlin.mae.ro/node/470)', type: 'tip' },
          { text: 'Conținutul exact al procurii — ce anume îl/o împuternicești să facă. Consulatul redactează documentul pe loc pornind de la ce îi comunici, dar nu decide conținutul în locul tău.', type: 'info' },
          { text: 'Taxă procură: GRATUITĂ pentru procuri obișnuite (firmă/ONRC, cont bancar, cazier, permis, înregistrare auto). Excepție: dacă procura va fi folosită la un notar din România (divorț notarial, succesiune, vânzare prin mandatar) → taxă suplimentară de 3 euro plătită prin virament bancar în avans. (confirmat econsulat.ro + berlin.mae.ro/node/470 + stuttgart.mae.ro/node/496)', type: 'info' },
          { text: 'Prezența mandatarului NU este necesară la consulat. Vii singur. (confirmat toate consulatele GE)', type: 'tip' },
        ],
      },
      {
        id: 2,
        title: 'Stabilește conținutul exact al procurii',
        blocks: [
          { text: 'Acesta este pasul cel mai des sărit — și cauza principală pentru care procurile sunt respinse sau insuficiente în România. Răspunderea pentru un conținut incomplet sau greșit e exclusiv a ta. (muenchen.mae.ro/node/259)', type: 'warning' },
          { text: 'Contactează în prealabil autoritatea sau notarul din România unde va fi folosită procura și întreabă exact ce conținut trebuie să aibă — ce operațiuni, ce instituții, ce termene.', type: 'action' },
          { text: 'Pentru divorț la notar: procura acoperă NUMAI depunerea cererii. Certificatul final de divorț necesită prezența fizică a ambilor soți — nu se poate ridica prin procură. (notari.pro) Notarul din dosar îți poate da modelul corect de conținut.', type: 'info' },
          { text: 'Pentru firmă (ONRC/Registrul Comerțului): specifică exact operațiunile — înmatriculare, modificare act constitutiv, dizolvare, numire administrator etc. (procura GRATUITĂ — ONRC nu e notar public)', type: 'info' },
          { text: 'ING România NU acceptă procuri pentru deschidere cont. Dacă vrei un cont ING, trebuie deschis online prin aplicație. (wise.com/ro confirmat)', type: 'warning' },
          { text: 'Pentru cont bancar (BCR, BRD, Raiffeisen, BT, CEC): nicio bancă nu impune un format propriu obligatoriu. (BRD confirmă explicit: modele orientative). Specifică operațiunile dorite: retrageri, viramente, deschidere/închidere cont, ridicare card, semnare contract credit etc.', type: 'info' },
          { text: 'Procura trebuie redactată în limba română. Consulatul o redactează pe loc în fața ta. Valabilitate implicită: 3 ani. Excepție: procuri pentru pensie = 18 luni.', type: 'tip' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Plătește taxa de publicitate notarială (dacă e cazul)' },
      { id: 4, title: 'Cerere pe econsulat.ro' },
      { id: 5, title: 'Obține programarea' },
      { id: 6, title: 'Ziua consulatului — semnezi și ridici procura pe loc' },
      { id: 7, title: 'Trimite procura mandatarului în România' },
    ],
    paywallTeaser: [
      'Când și cum plătești taxa de 3 euro prin virament bancar — cu IBAN-ul corect per consulat, cu min. 3-4 zile înainte',
      'Cum navighezi în econsulat.ro și ce selectezi exact la Acte notariale',
      'Cum obții programarea — cât durează validarea și când apar locuri disponibile',
      'Ce se întâmplă la ghișeu: de la identificare până la semnare și ridicare pe loc',
      'Cum trimiți originalul în România în siguranță și dacă ai nevoie de apostilă',
      'Ce faci dacă funcționarul cere ceva neașteptat + limitele procurii de divorț',
    ],
  },
  'buletin-de-primul-de': {
    title: 'Ghid: Primul buletin românesc · Schimbare domiciliu din străinătate',
    meta: { free: '2 pași gratuiți', total: '7 pași total' },
    totalSteps: 7,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Certificat de naștere românesc — original ✅', type: 'info' },
          { text: 'Certificatele plastifiate, rupte, pătate sau corectate sunt nule de drept. Dacă al tău e deteriorat, solicită un duplicat de la serviciul de stare civilă al județului unde ai fost înregistrat la naștere, înainte de deplasare. ✅', type: 'warning' },
          { text: 'Pașaportul românesc valabil sau expirat — original ✅. Acesta este obligatoriu pentru procedura de schimbare domiciliu din străinătate în România.', type: 'info' },
          { text: 'Dacă nu ai pașaport românesc deloc, ai nevoie de certificatul de cetățenie română — eliberat de Autoritatea Națională pentru Cetățenie sau de la consulatul României din Germania. ⚠️ Verifică în avans termenele de eliberare.', type: 'warning' },
          { text: 'Actul de identitate german (Personalausweis) sau pașaportul german — original ✅. Se prezintă alături de documentele românești.', type: 'info' },
          { text: 'Dovada adresei de domiciliu în România — original ✅. Vezi Pasul 2 pentru opțiuni detaliate.', type: 'info' },
          { text: 'Nu trebuie să aduci fotografii — imaginea facială și amprentele digitale se preiau biometric la ghișeul SPCLEP. ✅', type: 'info' },
          { text: 'Certificat de căsătorie românesc — original · doar dacă ești căsătorit/ă ȘI ți-ai schimbat numele prin căsătorie ✅. Certificatele de stare civilă trebuie să fie emise de autoritățile române — dacă certificatul de căsătorie e german, acesta trebuie transcris în prealabil în Registrul de Stare Civilă din România. ✅', type: 'info' },
          { text: 'Taxa: CEI este GRATUITĂ la prima eliberare pentru cetățeni 14+ (finanțare PNRR, valabilă până la 30 iunie 2026) ✅. CIS costă 40 RON indiferent de situație. ✅ Plata se face exclusiv la CEC Bank sau automate SelfPay — nu la ghișeul SPCLEP. ✅', type: 'info' },
          { text: 'Dacă aplici după 30 iunie 2026, prima CEI va costa 70 RON. Planifică deplasarea înainte de această dată pentru a beneficia de gratuitate. ✅', type: 'warning' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește dovada de adresă',
        blocks: [
          { text: 'Fără o adresă de domiciliu în România, cererea nu poate fi depusă. Stabilirea domiciliului și cererea pentru CI se fac simultan, în aceeași vizită la SPCLEP. ✅', type: 'warning' },
          { text: "Nu se aplică regula generică 'CEI la orice SPCLEP'. Pentru schimbarea domiciliului din străinătate în România trebuie să mergi exact la SPCLEP-ul de pe raza adresei pe care o alegi ca domiciliu. ✅", type: 'warning' },
          { text: 'Opțiunea 1 — Proprietate proprie: actul de proprietate (titlu de proprietate, contract de vânzare-cumpărare autentificat, sau extras de carte funciară — nu mai vechi de 30 de zile) — original. ✅', type: 'info' },
          { text: 'Opțiunea 2 — Adresa unui familiar sau prieten din România: proprietarul vine cu tine la SPCLEP și semnează declarația de primire în spațiu direct în fața funcționarului, prezentând actul de proprietate și CI-ul propriu. NU este necesară notarizarea. ✅', type: 'info' },
          { text: 'Dacă proprietarul NU poate veni cu tine la SPCLEP, declarația trebuie notarizată (la notar român — valabilă 90 de zile) SAU dată la consulatul României din Germania (valabilă 6 luni, cu traducere și legalizare). ✅', type: 'warning' },
          { text: 'Opțiunea 3 — Contract de închiriere: trebuie să fie înregistrat la ANAF (Declarația C168, obligatorie din 2023 — obligația proprietarului) SAU autentificat la notar SAU atestat de avocat. Un contract simplu neînregistrat nu este acceptat la SPCLEP. ✅', type: 'info' },
          { text: 'Stabilește adresa și pregătește documentul aferent ÎNAINTE să rezervi biletul de avion. Pregătirea adresei este cel mai lung pas din întregul proces.', type: 'action' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Alege tipul de carte de identitate' },
      { id: 4, title: 'Planifică deplasarea și programarea' },
      { id: 5, title: 'Pregătire pentru ziua deplasării' },
      { id: 6, title: 'Ziua la SPCLEP' },
      { id: 7, title: 'Ridică buletinul' },
    ],
    paywallTeaser: [
      'Diferențele concrete între CEI și CIS: termen, cost, valid sau nu pentru UE — și de ce CEI este varianta logică dacă vii din Germania',
      'La ce SPCLEP trebuie să mergi pentru schimbarea domiciliului din străinătate (nu e oricare)',
      'Cum te programezi online și ce formular specific se completează la ghișeu',
      'Ce se întâmplă cu pașaportul tău românesc la eliberarea CI — și de ce trebuie să-l aduci cu tine',
      'Ce faci dacă funcționarul cere ceva suplimentar față de lista ta',
      'Când și cum ridici buletinul — și de ce nu poți trimite pe altcineva',
    ],
  },
  'buletin-de-primul-de-b': {
    title: 'Primul buletin românesc · Germania',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Verifică documentele necesare',
        blocks: [
          { text: 'Certificat de naștere românesc transcris — original (obținut prin Ghidul #16). Documentul dovedește identitatea și cetățenia română și trebuie să conțină CNP-ul.', type: 'info' },
          { text: 'Certificatul de naștere plastifiat, rupt, pătat sau corectat cu scotch este nul de drept — nu se acceptă la ghișeu. Dacă al tău e deteriorat, solicită duplicat înainte de a pleca în România.', type: 'warning' },
          { text: 'Dovada rezidenței în Germania — unul din: pașaport CRDS valabil sau Anmeldung / Meldebescheinigung emis de autoritățile germane — original. Fără apostilă, fără traducere.', type: 'info' },
          { text: 'Certificat de căsătorie românesc — original — doar dacă ești căsătorit/ă și ți-ai schimbat numele prin căsătorie. Dacă nu ți-ai schimbat numele, nu e necesar.', type: 'info' },
          { text: 'Prima CEI este GRATUITĂ pentru cetățenii 14+ ani, până la 30 iunie 2026 (finanțare PNRR). Nu ai nicio taxă de plătit la depunere — nu e nevoie de chitanță sau plată în avans.', type: 'tip' },
          { text: 'Dacă ești minor (14–18 ani): trebuie să fii însoțit obligatoriu de unul dintre părinți la ghișeu. Fără prezența unui părinte, cererea nu se poate depune.', type: 'warning' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Verifică că certificatul de naștere transcris este intact: nedeteriorat, neplastifiat, fără corecturi. Dacă e în stare proastă, trebuie duplicat înainte de deplasare.', type: 'action' },
          { text: 'Documentele se prezintă exclusiv în original la ghișeu. Funcționarul face copii pe loc — nu trebuie să aduci copii proprii.', type: 'info' },
          { text: 'Creează un cont pe hub.mai.gov.ro înainte de a pleca din Germania — validarea contului se face prin email și e necesară înainte de a putea face programarea la SPCLEP.', type: 'action' },
          { text: 'Programarea online pe hub.mai.gov.ro este obligatorie — nu te prezenta la SPCLEP fără programare activă în sistem. Ghișeele nu primesc walk-in pentru CEI.', type: 'warning' },
          { text: 'Din 1 august 2025, poți merge la ORICE SPCLEP din România, indiferent de adresa de domiciliu. Dacă orașul preferat nu are locuri, verifică localitățile din jur — sloturile se actualizează constant din anulări.', type: 'tip' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Creează cont și programează-te pe hub.mai.gov.ro' },
      { id: 4, title: 'Planifică deplasarea în România' },
      { id: 5, title: 'Ziua la SPCLEP — depunerea cererii' },
      { id: 6, title: 'Ridică CEI-ul și activează PIN-urile' },
    ],
    paywallTeaser: [
      'Cum te programezi exact pe hub.mai.gov.ro — pas cu pas, ce selectezi, ce câmp completezi',
      'La ce SPCLEP mergi și cum găsești cel mai rapid slot disponibil din țară',
      'Ce se întâmplă la ghișeu: fotografie biometrică, amprente, semnătură — tot procesul explicat',
      'Ce faci dacă funcționarul cere ceva care nu e în lista ta',
      'Cum ridici CEI-ul și cum activezi singur PIN-urile cu aplicația MAI',
      'Ce faci după: adresa de domiciliu pe CEI și accesul la servicii digitale românești',
    ],
  },
  'transcriere-nastere-de': {
    title: 'Transcriere certificat de naștere · Germania',
    meta: { free: '2 pași gratuiți', total: '7 pași total' },
    totalSteps: 7,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Document principal al copilului — alege UNA din variante:\n\n• Extras de naștere multilingv „Formule A” (Auszug aus dem Geburtseintrag)\nFără apostilă, fără traducere. Varianta recomandată — cere de la Standesamt.\n\n• SAU Geburtsurkunde (certificat standard german)\nNecesită apostilă de la Haga + traducere autorizată în română.', type: 'info' },
          { text: 'Berlin — excepție patronimice: dacă un părinte are nume patronimic (ex. „-escu”, „-eanu”, „-vici”), Formule A NU este acceptat. Obligatoriu Geburtsurkunde + apostilă + traducere autorizată în română.', type: 'warning' },
          { text: 'Acte de identitate ale AMBILOR părinți — CI sau pașaport valabile — original. Dacă un părinte are pașaport CRDS (mențiunea domiciliu Germania), prezintă și Meldebescheinigung / Anmeldung / Personalausweis german — original.', type: 'info' },
          { text: 'Certificate de naștere românești ale părinților — cerința diferă per consulat: Bonn dacă CI/pașaport nu conțin locul nașterii; München dacă ambii părinți sunt cetățeni români; Stuttgart doar dacă părinții nu sunt căsătoriți; Berlin obligatorii fără excepție. Sfat: aduce-le oricum.', type: 'info' },
          { text: 'Certificat de căsătorie românesc al părinților (dacă sunt căsătoriți) — original. Sau sentință/certificat de divorț cu mențiunea „definitivă și irevocabilă”.', type: 'info' },
          { text: 'BLOCKER — căsătorie în Germania neînregistrată în RO: dacă v-ați căsătorit în Germania și căsătoria NU este transcrisă în registrele românești, trebuie transcrisă MAI ÎNTÂI căsătoria — abia după se poate depune cererea de naștere.', type: 'warning' },
          { text: 'Dacă un părinte este cetățean german: extras multilingv Formule A — fără apostilă, fără traducere. Dacă un părinte este cetățean alt stat UE parte la Convenția de la Viena 1976: extras multilingv — fără apostilă, fără traducere. Dacă un părinte este cetățean non-UE: certificatul de naștere al acelui părinte tradus în română + apostilat.', type: 'info' },
          { text: 'Fără taxă: transcrierea certificatelor de naștere este gratuită la toate 4 consulatele din Germania.', type: 'tip' },
          { text: 'Certificatele deteriorate, plastifiate, rupte sau corectate cu scotch sunt nule de drept și nu sunt acceptate la ghișeu. Solicită duplicat înainte de programare dacă vreun document e în această stare.', type: 'warning' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Scanează toate documentele din lista de mai sus înainte să creezi cererea pe econsulat.ro. Format: JPG sau PDF, calitate bună, lizibile, fără tăieturi. Fotografiază pe fond alb.', type: 'action' },
          { text: 'Stuttgart: formularul cererii se printează EXCLUSIV la consulat — nu acasă, nu online. Nu este disponibil pentru descărcare în avans.', type: 'warning' },
          { text: 'Dacă nu ai Formule A și trebuie să îl soliciți de la Standesamt, fă asta ÎNAINTE să deschizi cererea pe econsulat.ro. Standesamt eliberează de obicei în 1–2 săptămâni.', type: 'tip' },
          { text: 'La ghișeu prezinți toate documentele în original. La Bonn și Stuttgart, aduce și câte o copie simplă din fiecare.', type: 'info' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Creează cererea pe econsulat.ro' },
      { id: 4, title: 'Obține programarea' },
      { id: 5, title: 'Pregătire pentru ziua programării' },
      { id: 6, title: 'Ziua consulatului' },
      { id: 7, title: 'Ridică certificatul românesc' },
    ],
    paywallTeaser: [
      'Cum creezi cererea pe econsulat.ro și ce secțiune selectezi exact',
      'Când apar programările și cum obții un loc mai repede',
      'Ce se întâmplă la ghișeu: ce semnezi pe loc, ce primești',
      'Card consulat: adresă, program ridicare, particularități per consulat',
      'Cum ridici certificatul — inclusiv opțiunea poștă la Stuttgart',
      'Ce faci dacă funcționarul cere ceva care nu e în lista ta',
    ],
  },
}
