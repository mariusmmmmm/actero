import { localizeGuideTextForCountry, localizeGuideTitleForCountry } from '@/lib/guides/countryCopy'
import type { CountryCode, GuideId } from '@/types'

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

export const ghidFreeMap = {
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
          { text: 'Fotografii: NU sunt necesare separat — imaginea facială se preia biometric la ghișeu la toate cele 4 consulate. Îmbracă-te în culori închise pentru o fotografie mai clară.', type: 'tip' },
          { text: 'Certificat de căsătorie românesc — doar dacă ești căsătorit/ă ȘI ți-ai schimbat numele. Dacă nu ți-ai schimbat numele, nu e necesar.', type: 'info' },
          { text: 'Certificatele plastifiate, rupte, pătate sau corectate cu scotch sunt nule de drept și nu sunt acceptate la ghișeu. Solicită duplicat de la primărie dacă e cazul.', type: 'warning' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Scanează toate documentele din lista de mai sus înainte să creezi cererea pe econsulat.ro. Platforma îți va cere să le încarci.', type: 'info' },
          { text: 'Format recomandat: JPG sau PDF · calitate bună, lizibile, fără tăieturi. Dimensiune recomandată: sub 2 MB per fișier (scan 150–200 DPI). Dacă fișierul e prea mare, comprimă-l pe ilovepdf.com înainte de upload.', type: 'tip' },
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
      'Listă de acte pentru ghișeu + stadiul dosarului',
    ],
  },
  'pasaport-crds-de-pierdut': {
    title: 'Ghid pașaport CRDS pierdut/furat · Germania',
    meta: { free: '2 pași gratuiți', total: '7 pași total' },
    totalSteps: 7,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Cartea de identitate românească (dacă o ai, chiar expirată) — original. Dacă nu o mai ai, nu este blocant: consulatul poate verifica identitatea și în bazele de date.', type: 'info' },
          { text: 'Certificat de naștere românesc — original. Certificatele plastifiate, rupte sau pătate sunt nule de drept — solicită duplicat dacă e cazul.', type: 'info' },
          { text: 'Document de domiciliu în Germania: Meldebescheinigung, Anmeldung sau Personalausweis german — original, emis în ultimii 5 ani.', type: 'info' },
          { text: 'Dacă a fost PIERDUT: declarație pe proprie răspundere — se completează exclusiv la ghișeul consulatului, în ziua programării.', type: 'info' },
          { text: 'Dacă a fost FURAT: adeverință poliție locală (Verlustanzeige / Diebstahlsanzeige) + traducere conform consulatului: Bonn = autorizată în română; München = autorizată; Stuttgart = legalizată; Berlin = autorizată.', type: 'warning' },
          { text: 'Certificat de căsătorie românesc — doar dacă ești căsătorit/ă ȘI ți-ai schimbat numele prin căsătorie.', type: 'info' },
          { text: 'Fotografii: NU sunt necesare separat — imaginea facială se preia biometric la ghișeu la toate cele 4 consulate. Îmbracă-te în culori închise.', type: 'tip' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Dacă pașaportul a fost FURAT în Germania: raportează la poliția locală (Diebstahlsanzeige) în 24 ore de la constatare și anunță consulatul pentru blocarea documentului în sistemul MAI.', type: 'warning' },
          { text: 'Dacă a fost PIERDUT: nu trebuie să pregătești nicio declarație în avans — se completează la ghișeu.', type: 'info' },
          { text: 'Scanează documentele disponibile (CI, certificat de naștere, document domiciliu Germania, adeverință poliție dacă e cazul). Format recomandat: JPG sau PDF, sub 2 MB per fișier.', type: 'info' },
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
      'Cum completezi corect cererea CRDS când pașaportul este pierdut sau furat',
      'Ce se întâmplă la ghișeu cu declarația de pierdere sau adeverința de furt',
      'Card consulat complet: adresă, telefon, Maps, Waze, program',
      'Listă de acte pentru ghișeu + stadiul dosarului',
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
          { text: 'Fotografii: NU sunt necesare separat — imaginea facială se preia biometric la ghișeu la toate cele 4 consulate. Îmbracă-te în culori închise pentru o fotografie mai clară.', type: 'tip' },
          { text: 'Certificat de căsătorie românesc — doar dacă ești căsătorit/ă ȘI ți-ai schimbat numele. Dacă nu ți-ai schimbat numele, nu e necesar.', type: 'info' },
          { text: 'Taxa: 53€ — se achită la consulat (Bonn = EC-Karte, München = numerar, Stuttgart = POS sau transfer bancar).', type: 'action' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Scanează toate documentele din lista de mai sus înainte să creezi cererea pe econsulat.ro.', type: 'info' },
          { text: 'Format recomandat: JPG sau PDF · calitate bună, lizibile, fără tăieturi. Dimensiune recomandată: sub 2 MB per fișier (scan 150–200 DPI). Dacă fișierul e prea mare, comprimă-l pe ilovepdf.com înainte de upload.', type: 'tip' },
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
      'Listă de acte + stadiul dosarului',
    ],
  },
  'pasaport-minor-crds-de': {
    title: 'Pașaport copil CRDS — Germania',
    meta: { free: '2 pași gratuiți', total: '7 pași total' },
    totalSteps: 7,
    steps: [
      {
        id: 1,
        title: 'Documentele necesare',
        blocks: [
          { text: 'Minorul poate obține pașaport CRDS numai dacă cel puțin un părinte are deja pașaport CRDS sau depune cerere CRDS simultan cu minorul. Dacă ambii părinți au domiciliu în România, copilul nu poate obține pașaport CRDS.', type: 'warning' },
          { text: 'Certificat de naștere românesc al minorului — original, cu CNP. Certificatele plastifiate, rupte sau corectate sunt nule de drept.', type: 'info' },
          { text: 'Dacă minorul s-a născut în Germania și nu are certificat de naștere românesc, transcrierea trebuie finalizată mai întâi.', type: 'warning' },
          { text: 'Pașaportul anterior al minorului, dacă există, chiar expirat — original. Dacă a fost pierdut sau furat, se aplică regulile pentru adeverință de poliție și traducere.', type: 'info' },
          { text: 'Document de domiciliu în Germania — Meldebescheinigung, Anmeldung sau Personalausweis german, original, emis în ultimii 5 ani. Se acceptă pe numele minorului sau al părinților.', type: 'info' },
          { text: 'Actele de identitate valabile ale ambilor părinți — pașaport CRDS sau carte de identitate românească, în original.', type: 'info' },
          { text: 'Certificat de căsătorie românesc al părinților — original, dacă sunt căsătoriți sau există diferențe de nume.', type: 'info' },
          { text: 'Dacă vine un singur părinte: procură specială sau acord scris autentificat, în original.', type: 'tip' },
          { text: 'Pentru minorii de 14–17 ani: cartea de identitate a minorului, dacă există, și declarația de acord a părinților, completată la ghișeu.', type: 'info' },
          { text: 'Fotografii: nu sunt necesare la niciun consulat pentru pașaport CRDS de minor — imaginea facială se preia biometric la ghișeu. Taxa: 53€.', type: 'info' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele',
        blocks: [
          { text: 'Scanează toate documentele din lista de la Pasul 1 înainte să creezi cererea pe econsulat.ro. Format JPG sau PDF, sub 2 MB per fișier.', type: 'action' },
          { text: 'Dacă vine un singur părinte, procura specială sau acordul scris trebuie autentificate înainte de ziua programării. Nu se fac pe loc în ziua cererii de pașaport.', type: 'warning' },
          { text: 'Dacă ambii părinți au nevoie și ei de pașaport CRDS, pot depune cererile împreună cu cea a minorului în aceeași zi.', type: 'tip' },
          { text: 'Declarația de acord pentru minorii de 14–17 ani nu se pregătește în avans — se completează direct la ghișeu.', type: 'info' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Cerere pe econsulat.ro' },
      { id: 4, title: 'Obține programarea' },
      { id: 5, title: 'Pregătire pentru ziua programării' },
      { id: 6, title: 'Ziua consulatului' },
      { id: 7, title: 'Ridică pașaportul' },
    ],
    paywallTeaser: [
      'Cum completezi corect cererea pe econsulat.ro pentru un minor',
      'Ce faci dacă un singur părinte poate veni — pașii exacți pentru procura specială',
      'Cum gestionezi hotărârea judecătorească germană de custodie, dacă există',
      'Ziua consulatului cu copilul: ce se semnează, cât durează și cum plătești',
      'Cine poate ridica pașaportul minorului și în ce condiții',
      'Card consulat complet cu adresă, program și metodă de plată pentru consulatul tău',
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
      'Listă de acte + stadiul dosarului',
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
          { text: 'Dacă a fost FURAT: adeverință poliție locală (Verlustanzeige / Diebstahlsanzeige) + traducere conform consulatului: Bonn = traducere autorizată în română; München = traducere autorizată; Stuttgart = traducere legalizată; Berlin = traducere autorizată.', type: 'warning' },
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
      'Listă de acte + stadiul dosarului',
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
          { text: 'Fotografii proprii: NU sunt necesare — imaginea facială și amprentele se preiau biometric la ghișeul SPCLEP.', type: 'info' },
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
      'Listă de acte + stadiul dosarului',
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
          { text: 'Fotografii proprii: NU sunt necesare — imaginea facială și amprentele se preiau biometric la ghișeul SPCLEP.', type: 'info' },
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
          { text: 'Nu sunt necesare pregătiri speciale pentru fotografie — imaginea facială și amprentele se preiau biometric la ghișeul SPCLEP.', type: 'warning' },
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
      'Listă de acte + stadiul dosarului',
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
      'Listă de acte + stadiul dosarului',
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
      'Listă de acte + stadiul dosarului',
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
          { text: 'Certificatul de deces al persoanei decedate — copie. La Bonn, Stuttgart și Berlin este obligatoriu să îl ai pregătit; la München verifică înainte cu notarul și cu consulatul dacă îl vor și la ghișeu.', type: 'warning' },
          { text: 'Actele de rudenie sau de calitate de moștenitor nu sunt cerute de consulat pentru autentificarea procurii. Ele rămân însă utile pentru notarul din România și pentru dosarul de succesiune.', type: 'info' },
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
          { text: 'Ține la îndemână certificatul de deces și actele care dovedesc relația de rudenie. Certificatul de deces este obligatoriu ca copie la Bonn, Stuttgart și Berlin; actele de rudenie sunt în principal pentru notarul din România, nu pentru consulat.', type: 'warning' },
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
          { text: 'Taxă procură: GRATUITĂ pentru procuri obișnuite (firmă/ONRC, cont bancar, cazier, permis, înregistrare auto). Excepție: dacă procura va fi folosită la un notar din România (divorț notarial, succesiune, vânzare prin mandatar) → taxă suplimentară de 3 euro. Metoda diferă per consulat: Bonn = EC-Karte, München = numerar, Stuttgart = POS sau virament, Berlin = numai virament în avans.', type: 'info' },
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
      'Când și cum plătești taxa de 3 euro — cu metoda corectă per consulat: EC-Karte, numerar, POS sau virament',
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
} as Record<GuideId, GhidFreeContent>

function cloneFreeGuideForCountry(base: GhidFreeContent, country: CountryCode, title?: string): GhidFreeContent {
  return {
    ...base,
    title: title ?? localizeGuideTitleForCountry(base.title, country),
    steps: base.steps.map((step) => ({
      ...step,
      title: localizeGuideTextForCountry(step.title, country),
      blocks: step.blocks.map((block) => ({
        ...block,
        text: localizeGuideTextForCountry(block.text, country),
      })),
    })),
    lockedSteps: base.lockedSteps.map((step) => ({
      ...step,
      title: localizeGuideTextForCountry(step.title, country),
    })),
    paywallTeaser: base.paywallTeaser.map((item) => localizeGuideTextForCountry(item, country)),
  }
}

Object.assign(ghidFreeMap, {
  'pasaport-crds-it': cloneFreeGuideForCountry(ghidFreeMap['pasaport-crds-de'], 'it', 'Ghid reînnoire pașaport CRDS · Italia'),
  'pasaport-crds-it-pierdut': cloneFreeGuideForCountry(ghidFreeMap['pasaport-crds-de-pierdut'], 'it', 'Ghid pașaport CRDS pierdut/furat · Italia'),
  'pasaport-crds-nou-it': cloneFreeGuideForCountry(ghidFreeMap['pasaport-crds-nou-de'], 'it', 'Ghid primul pașaport CRDS · Italia'),
  'pasaport-minor-crds-it': cloneFreeGuideForCountry(ghidFreeMap['pasaport-minor-crds-de'], 'it', 'Pașaport copil CRDS — Italia'),
  'pasaport-it-cu-domiciliu': cloneFreeGuideForCountry(ghidFreeMap['pasaport-de-cu-domiciliu'], 'it', 'Ghid pașaport · Domiciliu România · Italia'),
  'pasaport-it-cu-domiciliu-pierdut': cloneFreeGuideForCountry(ghidFreeMap['pasaport-de-cu-domiciliu-pierdut'], 'it', 'Ghid pașaport pierdut/furat · Italia'),
  'buletin-it-fara-domiciliu': cloneFreeGuideForCountry(ghidFreeMap['buletin-de-fara-domiciliu'], 'it', 'Ghid buletin expirat · Italia'),
  'buletin-it-cu-domiciliu': cloneFreeGuideForCountry(ghidFreeMap['buletin-de-cu-domiciliu'], 'it', 'Ghid buletin expirat · Domiciliu activ RO · Italia'),
  'buletin-it-fara-domiciliu-pierdut': cloneFreeGuideForCountry(ghidFreeMap['buletin-de-fara-domiciliu-pierdut'], 'it', 'Ghid buletin pierdut/furat · Italia'),
  'buletin-it-cu-domiciliu-pierdut': cloneFreeGuideForCountry(ghidFreeMap['buletin-de-cu-domiciliu-pierdut'], 'it', 'Ghid buletin pierdut/furat · Domiciliu activ RO · Italia'),
  'buletin-it-primul-it': cloneFreeGuideForCountry(ghidFreeMap['buletin-de-primul-de'], 'it', 'Primul buletin românesc · Italia'),
  'buletin-it-primul-it-b': cloneFreeGuideForCountry(ghidFreeMap['buletin-de-primul-de-b'], 'it', 'Primul buletin românesc · Născut în Italia'),
  'titlu-calatorie-urgenta-it': cloneFreeGuideForCountry(ghidFreeMap['titlu-calatorie-urgenta-de'], 'it', 'Titlu de călătorie · Urgență · Italia'),
  'titlu-calatorie-it': cloneFreeGuideForCountry(ghidFreeMap['titlu-calatorie-de'], 'it', 'Titlu de călătorie · Italia · 1–2 săptămâni'),
  'procura-vanzare-it': cloneFreeGuideForCountry(ghidFreeMap['procura-vanzare-de'], 'it', 'Procură de vânzare/cumpărare proprietate · Italia'),
  'procura-mostenire-it': cloneFreeGuideForCountry(ghidFreeMap['procura-mostenire-de'], 'it', 'Procură · Moștenire · Italia'),
  'procura-generala-it': cloneFreeGuideForCountry(ghidFreeMap['procura-generala-de'], 'it', 'Procură notarială generală · Italia'),
  'transcriere-nastere-it': cloneFreeGuideForCountry(ghidFreeMap['transcriere-nastere-de'], 'it', 'Transcriere certificat de naștere · Italia'),
  'pasaport-crds-es': {
    title: 'Pașaport românesc din Spania — cu domiciliu înregistrat (CRDS)',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Ce este CRDS și de ce contează',
        blocks: [
          { type: 'info', text: 'CRDS înseamnă că domiciliul tău oficial românesc este înregistrat în Spania. Dacă ai solicitat vreodată pașaport la consulatul din Spania cu un document de ședere spaniol, cel mai probabil ești deja CRDS.' },
          { type: 'info', text: 'Dacă nu ești sigur, verifică prima pagină a pașaportului actual: dacă scrie o adresă din Spania sau „domiciliat în străinătate”, ești CRDS.' },
          { type: 'tip', text: 'Dacă domiciliul tău este în continuare în România (buletin cu adresă din RO), folosește ghidul pentru pașaportul din Spania cu domiciliu în România.' },
        ],
      },
      {
        id: 2,
        title: 'Documentele de care ai nevoie',
        blocks: [
          { type: 'info', text: 'Pregătește aceste documente înainte de programare:' },
          { type: 'action', text: '1. Pașaportul actual (expirat sau în curs de expirare) — original.' },
          { type: 'action', text: '2. Document de domiciliu spaniol — unul din: certificado de empadronamiento sau certificado de residencia / NIE / tarjeta de extranjero, în original.' },
          { type: 'action', text: '3. Certificat de naștere românesc — original (și copie).' },
          { type: 'action', text: '4. Certificat de căsătorie românesc — dacă ești căsătorit/ă, original (și copie).' },
          { type: 'tip', text: 'Fotografiile nu sunt necesare — imaginea facială se face biometric la ghișeu. Îmbracă-te cu culori închise în partea superioară.' },
          { type: 'warning', text: 'Certificatele de naștere sau căsătorie plastifiate sau deteriorate nu sunt acceptate.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Fă programarea pe econsulat.ro' },
      { id: 4, title: 'Pregătește taxa' },
      { id: 5, title: 'Prezintă-te la consulat' },
      { id: 6, title: 'Ridică pașaportul' },
    ],
    paywallTeaser: [
      'Cum faci programarea corect pe econsulat.ro și ce greșeli să eviți',
      'Taxa exactă pentru consulatul tău și cum plătești',
      'Ce se întâmplă la ghișeu pas cu pas',
      'Când și cum ridici pașaportul pentru consulatul tău',
      'Regulile speciale pentru Madrid, Bilbao și Barcelona',
    ],
  },
  'pasaport-es-cu-domiciliu': {
    title: 'Pașaport românesc din Spania — cu domiciliu în România',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Acest ghid este pentru tine?',
        blocks: [
          { type: 'info', text: 'Acest ghid este pentru românii care au domiciliul oficial în România și vor să-și reînnoiască pașaportul de la consulatul din Spania.' },
          { type: 'tip', text: 'Dacă domiciliul tău este înregistrat în Spania și ai CRDS activ, folosește ghidul pentru pașaportul CRDS din Spania.' },
          { type: 'info', text: 'Diferența principală față de CRDS: nu ai nevoie de documente de domiciliu spaniol, iar pașaportul se ridică direct la ghișeu.' },
        ],
      },
      {
        id: 2,
        title: 'Documentele de care ai nevoie',
        blocks: [
          { type: 'info', text: 'Pregătește aceste documente înainte de programare:' },
          { type: 'action', text: '1. Pașaportul actual (expirat sau în curs de expirare) — original.' },
          { type: 'action', text: '2. Cartea de identitate românească valabilă — original.' },
          { type: 'action', text: '3. Certificat de naștere românesc — original (și copie).' },
          { type: 'action', text: '4. Certificat de căsătorie românesc — dacă ești căsătorit/ă, original (și copie).' },
          { type: 'tip', text: 'Fotografiile nu sunt necesare — imaginea facială se face biometric la ghișeu. Îmbracă-te cu culori închise în partea superioară.' },
          { type: 'warning', text: 'Certificatele de naștere sau căsătorie plastifiate sau deteriorate nu sunt acceptate.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Fă programarea pe econsulat.ro' },
      { id: 4, title: 'Pregătește taxa' },
      { id: 5, title: 'Prezintă-te la consulat' },
      { id: 6, title: 'Ridică pașaportul la ghișeu' },
    ],
    paywallTeaser: [
      'Cum faci programarea corect pe econsulat.ro',
      'Taxa exactă și metoda de plată pentru consulatul tău',
      'Ce se întâmplă la ghișeu pas cu pas',
      'Intervalul exact de ridicare pentru consulatul tău',
      'Warning-uri specifice pentru Madrid, Bilbao și Barcelona',
    ],
  },
  'pasaport-crds-es-pierdut': {
    title: 'Pașaport pierdut sau furat în Spania — cu domiciliu înregistrat (CRDS)',
    meta: { free: '2 pași gratuiți', total: '7 pași total' },
    totalSteps: 7,
    steps: [
      {
        id: 1,
        title: 'Primul lucru: ai nevoie să călătorești urgent?',
        blocks: [
          { type: 'warning', text: 'Dacă trebuie să călătorești în România sau în altă țară în mai puțin de 30 de zile, nu poți aștepta pașaportul nou. Ai nevoie mai întâi de un titlu de călătorie.' },
          { type: 'action', text: 'Dacă ai urgență de deplasare: mergi la consulat fără programare cu dovada urgenței și cere un titlu de călătorie. Este gratuit și, de regulă, se eliberează în aceeași zi.' },
          { type: 'tip', text: 'Titlul de călătorie este valabil maximum 30 de zile și se predă în România când depui pentru documentul permanent.' },
        ],
      },
      {
        id: 2,
        title: 'Documentele diferă în funcție de cum ai pierdut pașaportul',
        blocks: [
          { type: 'action', text: 'FURAT: ai nevoie de denuncia de la poliția spaniolă și de traducerea ei autorizată în română, făcută de un traducător MJ înregistrat la consulatul tău.' },
          { type: 'action', text: 'PIERDUT: nu ai nevoie de traducere. Declarația de pierdere se completează direct la ghișeul consulatului.' },
          { type: 'action', text: 'DISTRUS: aduci documentul fizic deteriorat la ghișeu.' },
          { type: 'action', text: 'În toate cazurile: document de domiciliu în Spania, certificat de naștere românesc și certificat de căsătorie dacă e cazul.' },
          { type: 'warning', text: 'Pentru pașaport furat, traducătorul autorizat MJ trebuie să fie acceptat exact de consulatul tău. Lista se cere direct consulatului.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Obține traducerea (dacă a fost furat)' },
      { id: 4, title: 'Fă programarea pe econsulat.ro' },
      { id: 5, title: 'Pregătește taxa' },
      { id: 6, title: 'Prezintă-te la consulat' },
      { id: 7, title: 'Ridică pașaportul' },
    ],
    paywallTeaser: [
      'Cum obții lista traducătorilor acceptați de consulatul tău',
      'Cum selectezi serviciul corect pe econsulat.ro',
      'Taxa exactă și metoda de plată pentru consulatul tău',
      'Cum gestionezi situația de pierdere vs furt la ghișeu',
      'Regula specială de ridicare pentru Madrid CRDS',
    ],
  },
  'pasaport-es-cu-domiciliu-pierdut': {
    title: 'Pașaport pierdut sau furat în Spania — cu domiciliu în România',
    meta: { free: '2 pași gratuiți', total: '7 pași total' },
    totalSteps: 7,
    steps: [
      {
        id: 1,
        title: 'Ai nevoie să călătorești urgent?',
        blocks: [
          { type: 'warning', text: 'Dacă trebuie să revii urgent în România, nu aștepta pașaportul nou. Ai nevoie mai întâi de un titlu de călătorie.' },
          { type: 'action', text: 'Pentru urgență, mergi la consulat fără programare cu dovada călătoriei și cere titlul de călătorie. Este gratuit.' },
          { type: 'tip', text: 'Pașaportul nou este documentul permanent și se rezolvă separat, cu programare.' },
        ],
      },
      {
        id: 2,
        title: 'Ce documente pregătești',
        blocks: [
          { type: 'action', text: 'FURAT: denuncia de la poliția spaniolă + traducere autorizată MJ acceptată de consulatul tău.' },
          { type: 'action', text: 'PIERDUT: declarația de pierdere se completează la ghișeu.' },
          { type: 'action', text: 'DISTRUS: aduci pașaportul deteriorat.' },
          { type: 'action', text: 'În toate cazurile: carte de identitate românească valabilă, certificat de naștere românesc și certificat de căsătorie dacă e cazul.' },
          { type: 'tip', text: 'Spre deosebire de varianta CRDS, nu ai nevoie de document de domiciliu spaniol.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Obține traducerea (dacă a fost furat)' },
      { id: 4, title: 'Fă programarea pe econsulat.ro' },
      { id: 5, title: 'Pregătește taxa' },
      { id: 6, title: 'Prezintă-te la consulat' },
      { id: 7, title: 'Ridică pașaportul la ghișeu' },
    ],
    paywallTeaser: [
      'Cum obții traducerea corectă pentru consulatul tău',
      'Cum selectezi serviciul de pașaport cu domiciliul în România',
      'Taxa exactă și metoda de plată la consulatul tău',
      'Cum decurge depunerea pentru pierdut vs furat',
      'Intervalul exact de ridicare la ghișeu',
    ],
  },
  'buletin-es-cu-domiciliu': {
    title: 'Carte de identitate românească — adult cu domiciliu în România',
    meta: { free: '2 pași gratuiți', total: '5 pași total' },
    totalSteps: 5,
    steps: [
      {
        id: 1,
        title: 'Unde se rezolvă cartea de identitate',
        blocks: [
          { type: 'info', text: 'Dacă domiciliul tău oficial este în România, cartea de identitate se reînnoiește în România, la SPCLEP-ul competent pentru adresa ta.' },
          { type: 'warning', text: 'Consulatul din Spania NU poate emite carte de identitate cu domiciliu în România.' },
          { type: 'tip', text: 'Dacă vrei să-ți înregistrezi domiciliul în Spania, vei intra mai târziu pe ghidul dedicat CRDS.' },
        ],
      },
      {
        id: 2,
        title: 'Documentele de care ai nevoie la SPCLEP',
        blocks: [
          { type: 'action', text: 'Cartea de identitate expirată sau, dacă a fost pierdută/furată, declarația corespunzătoare cerută de SPCLEP.' },
          { type: 'action', text: 'Certificat de naștere românesc, certificat de căsătorie/divorț dacă e cazul și document pentru adresa de domiciliu din România.' },
          { type: 'action', text: 'Taxa națională pentru CI: 7 lei.' },
          { type: 'tip', text: 'Verifică pe site-ul SPCLEP-ului dacă se face programare online înainte să pleci din Spania.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Identifică SPCLEP-ul competent' },
      { id: 4, title: 'Fă programarea și pregătește documentele' },
      { id: 5, title: 'Prezintă-te la SPCLEP și ridică CI' },
    ],
    paywallTeaser: [
      'Cum găsești SPCLEP-ul competent pentru adresa ta',
      'Cum pregătești vizita în România și programarea',
      'Ce se întâmplă dacă CI a expirat de mult sau este pierdută',
      'Ce opțiuni ai pentru urgență și ridicare',
    ],
  },
  'buletin-es-cu-domiciliu-minor': {
    title: 'Carte de identitate românească — minor cu domiciliu în România',
    meta: { free: '2 pași gratuiți', total: '5 pași total' },
    totalSteps: 5,
    steps: [
      {
        id: 1,
        title: 'Ce trebuie să știi înainte de drum',
        blocks: [
          { type: 'info', text: 'Cartea de identitate pentru minor cu domiciliu în România se rezolvă exclusiv la SPCLEP în România, nu la consulatul din Spania.' },
          { type: 'info', text: 'Minorul trebuie să fie prezent fizic la ghișeu, împreună cu cel puțin un părinte sau reprezentantul legal.' },
          { type: 'tip', text: 'Prima carte de identitate se eliberează după împlinirea vârstei de 14 ani.' },
        ],
      },
      {
        id: 2,
        title: 'Documentele de care ai nevoie',
        blocks: [
          { type: 'action', text: 'Certificatul de naștere al minorului, actele de identitate valabile ale părinților și, dacă este cazul, hotărârea de custodie sau acordul autentificat al celuilalt părinte.' },
          { type: 'action', text: 'CI expirată a minorului, dacă este reînnoire, plus documentul pentru adresa de domiciliu dacă este necesar.' },
          { type: 'action', text: 'Taxa pentru CI: 7 lei.' },
          { type: 'warning', text: 'Fără prezența minorului la ghișeu, cererea nu poate fi depusă.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Identifică SPCLEP-ul competent' },
      { id: 4, title: 'Pregătește documentele și programarea' },
      { id: 5, title: 'Prezintă-te la SPCLEP cu minorul' },
    ],
    paywallTeaser: [
      'Cum stabilești SPCLEP-ul corect pentru minor',
      'Ce documente suplimentare ai nevoie dacă vine un singur părinte',
      'Cum pregătești prima CI vs reînnoirea CI',
      'Ce termene și opțiuni de urgență există',
    ],
  },
  'pasaport-crds-pierdut-combinat-es': {
    title: 'Pașaport pierdut sau furat în Spania — CRDS — cale combinată',
    meta: { free: '2 pași gratuiți', total: '8 pași total' },
    totalSteps: 8,
    steps: [
      {
        id: 1,
        title: 'Două proceduri, o singură deplasare dacă se poate',
        blocks: [
          { type: 'info', text: 'În situația CRDS + pașaport pierdut sau furat, poți avea nevoie de două proceduri: titlu de călătorie pentru urgență și pașaport nou ca document permanent.' },
          { type: 'action', text: 'Înainte de drum, întreabă consulatul dacă poți depune și titlul de călătorie, și pașaportul în aceeași vizită.' },
          { type: 'tip', text: 'Dacă nu ai urgență, poți urma fluxul standard cu programare pentru pașaport.' },
        ],
      },
      {
        id: 2,
        title: 'Ce documente pregătești',
        blocks: [
          { type: 'action', text: 'Pentru pașaport furat: denuncia + traducere MJ acceptată de consulatul tău.' },
          { type: 'action', text: 'Pentru pașaport pierdut: declarația se completează la ghișeu.' },
          { type: 'action', text: 'Pentru CRDS: document de domiciliu spaniol, certificat de naștere românesc și dovada urgenței dacă mergi pentru titlu de călătorie.' },
          { type: 'warning', text: 'Posibilitatea de depunere combinată este neconfirmată uniform. Verifică direct cu consulatul tău înainte de deplasare.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Confirmă cu consulatul procedura combinată' },
      { id: 4, title: 'Obține traducerile necesare' },
      { id: 5, title: 'Fă programarea dacă este necesară' },
      { id: 6, title: 'Pregătește taxa pentru pașaport' },
      { id: 7, title: 'Mergi la consulat' },
      { id: 8, title: 'Ridică pașaportul și închide cazul' },
    ],
    paywallTeaser: [
      'Cum verifici dacă poți depune ambele cereri în aceeași vizită',
      'Ce traduceri sunt necesare pentru pașaport și pentru titlul de călătorie',
      'Când ai nevoie de programare separată',
      'Taxa exactă și metoda de plată pentru consulatul tău',
      'Ce faci după ce te întorci în România cu titlul de călătorie',
    ],
  },
  'buletin-es-majorat': {
    title: 'Carte de identitate la 18 ani — domiciliu în România',
    meta: { free: '2 pași gratuiți', total: '5 pași total' },
    totalSteps: 5,
    steps: [
      {
        id: 1,
        title: 'Ce se întâmplă cu buletinul la 18 ani',
        blocks: [
          { type: 'info', text: 'Buletinul de minor expiră automat la împlinirea vârstei de 18 ani, iar de atunci ai termen legal 15 zile să îți faci prima carte de identitate de adult.' },
          { type: 'warning', text: 'Procedura se rezolvă în România, la SPCLEP, nu la consulatul din Spania.' },
          { type: 'tip', text: 'Nu mai este necesară prezența părinților; mergi personal la ghișeu.' },
        ],
      },
      {
        id: 2,
        title: 'Documentele de care ai nevoie',
        blocks: [
          { type: 'action', text: 'Buletinul de minor expirat, certificatul de naștere și documentul de adresă dacă s-a schimbat domiciliul.' },
          { type: 'action', text: 'Fotografie 3×4 cm, fond alb, dacă SPCLEP-ul tău nu o face la ghișeu.' },
          { type: 'action', text: 'Taxa pentru CI: 7 lei.' },
          { type: 'tip', text: 'Pașaportul rămâne valabil după 18 ani până la data înscrisă pe el.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Identifică SPCLEP-ul competent' },
      { id: 4, title: 'Fă programarea și pregătește documentele' },
      { id: 5, title: 'Prezintă-te la SPCLEP și ridică CI' },
    ],
    paywallTeaser: [
      'Cum găsești SPCLEP-ul competent pentru adresa ta',
      'Ce faci dacă ai nevoie de CI rapid după majorat',
      'Cum actualizezi adresa dacă s-a schimbat',
      'Cum combini vizita pentru CI cu alte acte de la majorat',
    ],
  },
  'buletin-es-fara-domiciliu-minor': {
    title: 'Carte de identitate românească — minor cu domiciliu în Spania (CRDS)',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Când se rezolvă la consulatul din Spania',
        blocks: [
          { type: 'info', text: 'Dacă minorul are domiciliul înregistrat în Spania (CRDS), cartea de identitate se cere la consulatul competent, nu la SPCLEP.' },
          { type: 'warning', text: 'Pentru cartea de identitate sunt necesare 6 fotografii aduse de acasă; nu se face biometric la ghișeu.' },
          { type: 'tip', text: 'Dacă minorul are domiciliu în România, folosește ghidul pentru minor cu domiciliu în România.' },
        ],
      },
      {
        id: 2,
        title: 'Documentele de care ai nevoie',
        blocks: [
          { type: 'action', text: 'Certificatul de naștere românesc al minorului și documentul de domiciliu spaniol al minorului.' },
          { type: 'action', text: 'Actul de identitate al părintelui prezent și acordul sau actul de custodie dacă vine un singur părinte.' },
          { type: 'action', text: '6 fotografii 3×4 cm, fond alb, plus CI expirată dacă este reînnoire.' },
          { type: 'warning', text: 'Dacă minorul nu poate merge în România, pregătește și dovada motivului întemeiat, dacă consulatul o cere.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Confirmă documentele cu consulatul' },
      { id: 4, title: 'Fă programarea pe econsulat.ro' },
      { id: 5, title: 'Pregătește fotografiile minorului' },
      { id: 6, title: 'Prezintă-te la consulat cu minorul' },
    ],
    paywallTeaser: [
      'Lista completă de documente pentru consulatul tău',
      'Cum faci programarea pe econsulat.ro pentru CI minor',
      'Ce fotografii sunt acceptate și ce se semnează la ghișeu',
      'Cum se ridică CI și cât durează',
    ],
  },
  'buletin-es-fara-domiciliu': {
    title: 'Carte de identitate românească cu domiciliu în Spania — CRDS',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Ce înseamnă CRDS și când ai nevoie de el',
        blocks: [
          { type: 'info', text: 'CRDS înseamnă domiciliu înregistrat în Spania la consulat. Dacă vrei carte de identitate cu adresă spaniolă, acesta este ghidul tău.' },
          { type: 'tip', text: 'Se aplică atât pentru prima înregistrare CRDS, cât și pentru reînnoirea unei CI CRDS expirate.' },
          { type: 'warning', text: 'Pentru CI sunt necesare 6 fotografii aduse de acasă; nu se face biometric la ghișeu.' },
        ],
      },
      {
        id: 2,
        title: 'Documentele de care ai nevoie',
        blocks: [
          { type: 'action', text: 'CI actuală sau, dacă e prima înregistrare CRDS, pașaportul valabil, plus documentul de domiciliu spaniol.' },
          { type: 'action', text: 'Certificat de naștere românesc și certificat de căsătorie dacă numele s-a schimbat.' },
          { type: 'action', text: '6 fotografii 3×4 cm, fond alb.' },
          { type: 'tip', text: 'Empadronamiento-ul este suficient și se obține gratuit de la ayuntamiento.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Obține empadronamiento-ul' },
      { id: 4, title: 'Confirmă documentele cu consulatul' },
      { id: 5, title: 'Pregătește fotografiile și fă programarea' },
      { id: 6, title: 'Prezintă-te la consulat și ridică CI' },
    ],
    paywallTeaser: [
      'Cum obții empadronamiento-ul rapid',
      'Ce documente confirmi cu consulatul tău',
      'Cum faci programarea pe econsulat.ro',
      'Ce se întâmplă la ghișeu și cât durează CI',
    ],
  },
  'buletin-es-pierdut': {
    title: 'Carte de identitate pierdută sau furată — din Spania',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Primul lucru: identifică unde îți este domiciliul',
        blocks: [
          { type: 'info', text: 'Dacă ai domiciliu în România, noua carte de identitate se face la SPCLEP. Dacă ai CRDS activ, procedura se face la consulatul din Spania.' },
          { type: 'action', text: 'Folosește ultimul act avut pentru a verifica dacă adresa oficială era în România sau în Spania.' },
          { type: 'tip', text: 'Dacă ai pașaport valabil, îl poți folosi în continuare pentru identificare până primești noua CI.' },
        ],
      },
      {
        id: 2,
        title: 'Documentele de care ai nevoie',
        blocks: [
          { type: 'action', text: 'În ambele cazuri: certificat de naștere românesc, pașaport sau alt document cu fotografie și 6 fotografii 3×4 cm, fond alb.' },
          { type: 'action', text: 'Dacă a fost furată: denuncia de la poliția spaniolă. Dacă a fost pierdută: declarația se completează la ghișeul competent.' },
          { type: 'action', text: 'Dacă ai CRDS activ, adaugi și documentul de domiciliu spaniol.' },
          { type: 'warning', text: 'Fotografiile pentru CI se aduc de acasă și la SPCLEP, și la consulat.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Declară pierderea sau furtul' },
      { id: 4, title: 'Fă programarea — SPCLEP sau consulat' },
      { id: 5, title: 'Pregătește fotografiile' },
      { id: 6, title: 'Prezintă-te și ridică noua CI' },
    ],
    paywallTeaser: [
      'Pașii exacți pentru SPCLEP vs consulat',
      'Cum declari corect pierderea sau furtul',
      'Cum faci programarea potrivită pentru cazul tău',
      'Cum și de unde ridici noua CI',
    ],
  },
  'titlu-calatorie-es': {
    title: 'Titlu de călătorie din Spania — pentru întoarcerea în România',
    meta: { free: '2 pași gratuiți', total: '5 pași total' },
    totalSteps: 5,
    steps: [
      {
        id: 1,
        title: 'Ce este titlul de călătorie și pentru ce este valabil',
        blocks: [
          { type: 'info', text: 'Titlul de călătorie este documentul de urgență cu care te întorci în România sau călătorești în UE când nu mai ai pașaport valabil.' },
          { type: 'info', text: 'Este gratuit, se eliberează în aceeași zi și este valabil maximum 30 de zile.' },
          { type: 'warning', text: 'La intrarea în România valabilitatea încetează și ulterior trebuie să soliciți documentul permanent.' },
          { type: 'tip', text: 'Dacă ai zbor iminent sau urgență maximă, folosește varianta urgentă a ghidului.' },
        ],
      },
      {
        id: 2,
        title: 'Documentele de care ai nevoie',
        blocks: [
          { type: 'action', text: 'Pașaportul expirat sau documentul vechi, dacă îl mai ai.' },
          { type: 'action', text: 'Certificat de naștere românesc sau Certificado Plurilingüe spaniol.' },
          { type: 'action', text: 'Dacă pașaportul a fost furat: denuncia de la poliția spaniolă și, după consulat, traducerea cerută.' },
          { type: 'tip', text: 'Pentru adulți, fotografia se face biometric la ghișeu; pentru minori regulile diferă per consulat.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Traducere (dacă e cazul)' },
      { id: 4, title: 'Fă programarea pe econsulat.ro' },
      { id: 5, title: 'Prezintă-te la consulat și ridică titlul' },
    ],
    paywallTeaser: [
      'Când consulatul tău cere traducere pentru furt',
      'Regulile exacte pentru minori',
      'Cum faci programarea corectă pe econsulat.ro',
      'Ce faci după ce primești titlul',
    ],
  },
  'titlu-calatorie-urgenta-es': {
    title: 'Titlu de călătorie urgent din Spania — zbor iminent sau urgență',
    meta: { free: '2 pași gratuiți', total: '4 pași total' },
    totalSteps: 4,
    steps: [
      {
        id: 1,
        title: 'Mergi fără programare — dar sună înainte dacă poți',
        blocks: [
          { type: 'info', text: 'Dacă ai zbor sau urgență în 24–72h, mergi direct la consulat cu dovada urgenței, fără să mai aștepți programare pe econsulat.ro.' },
          { type: 'action', text: 'Dacă ai timp, sună consulatul înainte să pleci și anunță că vii cu o urgență pentru titlu de călătorie.' },
          { type: 'warning', text: 'Bilbao: nu te prezenta vineri; urgențele se tratează în programul local al consulatului.' },
        ],
      },
      {
        id: 2,
        title: 'Ce documente aduci cu tine',
        blocks: [
          { type: 'action', text: 'Dovada urgenței: bilet de avion, document medical, certificat de deces sau alt act justificativ.' },
          { type: 'action', text: 'Pașaportul expirat sau documentele românești pe care le mai ai.' },
          { type: 'action', text: 'Dacă a fost furat: denuncia și, dacă acel consulat cere, traducerea aferentă.' },
          { type: 'tip', text: 'Pentru adulți nu ai nevoie de fotografii; pentru minori regulile diferă per consulat.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Prezintă-te la consulat cu documentele de urgență' },
      { id: 4, title: 'Ce faci cu titlul după ce îl primești' },
    ],
    paywallTeaser: [
      'Cum tratezi refuzul fără programare dacă urgența rămâne reală',
      'Regulile pentru minori și pentru furt la consulatul tău',
      'Ce faci imediat după ce intri în România',
      'Cum programezi documentul permanent după urgență',
    ],
  },
  'procura-generala-es': {
    title: 'Procură notarială din Spania — generală sau specială',
    meta: { free: '2 pași gratuiți', total: '4 pași total' },
    totalSteps: 4,
    steps: [
      {
        id: 1,
        title: 'Ce trebuie să știi despre procurile din Spania',
        blocks: [
          { type: 'info', text: 'Procura consulară din Spania este gratuită și este valabilă direct în România, fără apostilă suplimentară.' },
          { type: 'info', text: 'Dacă nu indici alt termen în text, procura este valabilă 3 ani.' },
          { type: 'warning', text: 'Consulatul nu poate autentifica contracte, donații, testamente sau acte din tranzacții judiciare.' },
        ],
      },
      {
        id: 2,
        title: 'Ce pregătești înainte de programare',
        blocks: [
          { type: 'action', text: 'Textul procurii sau modelul de procură, dacă îl ceri de la consulat.' },
          { type: 'action', text: 'Datele complete ale mandatarului: nume, CNP, adresă și act de identitate.' },
          { type: 'action', text: 'Pașaport sau CI românească valabilă. Pentru unele situații se acceptă și CI expirată, dacă procura este chiar pentru obținerea noii CI.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Fă programarea pe econsulat.ro' },
      { id: 4, title: 'Prezintă-te la consulat și autentifică procura' },
    ],
    paywallTeaser: [
      'Cum faci programarea pe econsulat.ro',
      'Ce se întâmplă la ghișeu și cum semnezi procura',
      'Cum trimiți procura în România după autentificare',
      'Când ai nevoie de traducător înregistrat la consulat',
    ],
  },
  'procura-pensie-es': {
    title: 'Procură pentru pensie din Spania',
    meta: { free: '2 pași gratuiți', total: '4 pași total' },
    totalSteps: 4,
    steps: [
      {
        id: 1,
        title: 'Ce este procura pentru pensie și cât este valabilă',
        blocks: [
          { type: 'info', text: 'Procura pentru pensie se face la consulat, este gratuită și îți permite să împuternicești pe cineva să ridice pensia din România.' },
          { type: 'info', text: 'Are valabilitate de 18 luni, nu 3 ani ca o procură generală.' },
          { type: 'tip', text: 'Consulatul are, de regulă, model standard pentru acest tip de procură.' },
        ],
      },
      {
        id: 2,
        title: 'Ce pregătești',
        blocks: [
          { type: 'action', text: 'Datele complete ale mandatarului și actul tău de identitate românesc valabil.' },
          { type: 'action', text: 'Opțional, numărul dosarului sau al deciziei de pensionare dacă îl ai la îndemână.' },
          { type: 'tip', text: 'În Spania, procura pentru pensie este gratuită; RNNEPR nu se aplică.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Fă programarea pe econsulat.ro' },
      { id: 4, title: 'Prezintă-te și autentifică procura' },
    ],
    paywallTeaser: [
      'Cum faci programarea pe econsulat.ro',
      'Cum primești procura în aceeași zi',
      'Cum o trimiți mandatarului din România',
    ],
  },
  'procura-vanzare-es': {
    title: 'Procură pentru vânzarea unui imobil din România — din Spania',
    meta: { free: '2 pași gratuiți', total: '5 pași total' },
    totalSteps: 5,
    steps: [
      {
        id: 1,
        title: 'Ce trebuie să știi înainte de a face procura',
        blocks: [
          { type: 'info', text: 'Procura pentru vânzare imobil este valabilă direct la notarul din România și nu are nevoie de apostilă.' },
          { type: 'info', text: 'În Spania este gratuită; RNNEPR nu se aplică.' },
          { type: 'warning', text: 'Textul procurii trebuie să conțină exact datele imobilului și ale tranzacției. Greșelile pot bloca vânzarea la notar.' },
          { type: 'tip', text: 'Cel mai sigur este să lucrezi cu notarul din România înainte de programare și să vii cu textul deja pregătit.' },
        ],
      },
      {
        id: 2,
        title: 'Ce pregătești',
        blocks: [
          { type: 'action', text: 'Textul procurii pentru vânzare și datele exacte ale imobilului: adresă, număr cadastral, carte funciară.' },
          { type: 'action', text: 'Datele complete ale mandatarului și actul tău de identitate românesc valabil.' },
          { type: 'warning', text: 'Unele consulate pot cere și acte imobiliare suplimentare, cum ar fi extrasul de carte funciară.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Confirmă documentele cu consulatul' },
      { id: 4, title: 'Fă programarea pe econsulat.ro' },
      { id: 5, title: 'Prezintă-te la consulat și autentifică procura' },
    ],
    paywallTeaser: [
      'Ce documente confirmi în avans cu consulatul',
      'Cum faci programarea pentru procura imobiliară',
      'Ce se întâmplă la ghișeu și cum trimiți procura notarului',
      'Când ai nevoie de traducător autorizat pentru acte imobiliare',
    ],
  },
  'transcriere-nastere-es': {
    title: 'Transcriere certificat de naștere din Spania — copil născut în Spania',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'De ce ai nevoie de transcrierea nașterii',
        blocks: [
          { type: 'info', text: 'Pentru a obține acte românești pentru copilul născut în Spania, nașterea trebuie înregistrată și în România.' },
          { type: 'tip', text: 'Cu cât faci transcrierea mai repede, cu atât poți obține mai ușor pașaportul sau CI-ul copilului.' },
        ],
      },
      {
        id: 2,
        title: 'Ce tip de certificat spaniol ai — și ce implică fiecare',
        blocks: [
          { type: 'action', text: 'Certificado Plurilingüe: se depune direct, fără apostilă și fără traducere.' },
          { type: 'action', text: 'Certificado Literal: necesită apostila Haga de la TSJ și traducere autorizată în română.' },
          { type: 'warning', text: 'Pentru apostilă la actele de naștere nu mergi la notar; competența este la Tribunalul Superior de Justiție.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Obține apostila Haga (dacă ai Literal)' },
      { id: 4, title: 'Obține traducerea autorizată (dacă ai Literal)' },
      { id: 5, title: 'Confirmă documentele cu consulatul și fă programarea' },
      { id: 6, title: 'Prezintă-te la consulat și ridică certificatul' },
    ],
    paywallTeaser: [
      'Cum obții apostila Haga gratuită de la TSJ',
      'Când ai nevoie de traducere autorizată',
      'Ce documente confirmi cu consulatul înainte de programare',
      'Care este pasul următor după transcriere',
    ],
  },
  'pasaport-crds-uk': {
    title: 'Pașaport cu domiciliu în UK (CRDS)',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Ce documente îți trebuie',
        blocks: [
          { type: 'info', text: 'Consulatul din UK procesează cereri de pașaport românesc pentru cetățenii cu domiciliu înregistrat în Marea Britanie (CRDS).' },
          { type: 'info', text: 'Documente obligatorii: formularul de cerere, pașaportul vechi dacă există, certificatul de naștere românesc și dovada rezidenței în UK.' },
          { type: 'warning', text: 'Dacă ți-ai schimbat numele, ai nevoie și de documentul românesc corespunzător: certificat de căsătorie sau sentință de divorț, după caz.' },
          { type: 'note', text: 'Fotografia se face biometric la consulat — nu aduci fotografii de acasă.' },
        ],
      },
      {
        id: 2,
        title: 'Dovada că locuiești în UK',
        blocks: [
          { type: 'info', text: 'Londra și Manchester acceptă, fără traducere, documente precum share code, pașaport britanic, ILR, NINo, council tax, P60 sau P45.' },
          { type: 'info', text: 'Unele documente se acceptă doar cu traducere autorizată în română: contract de muncă, dovadă HMRC, adeverință de școlarizare sau contract de chirie.' },
          { type: 'warning', text: 'Edinburgh are listă proprie și nu te baza pe share code fără să verifici direct regula publicată de consulat.' },
          { type: 'tip', text: 'La Manchester pregătește și xerocopii, iar taxa de pașaport se plătește exclusiv în numerar.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Fă programarea pe econsulat.ro' },
      { id: 4, title: 'Pregătește-te pentru ziua programării' },
      { id: 5, title: 'Prezintă-te la consulat' },
      { id: 6, title: 'Ridică pașaportul' },
    ],
    paywallTeaser: [
      'Cum faci programarea corect pe econsulat.ro pentru UK',
      'Ce taxă plătești la Londra, Manchester sau Edinburgh',
      'Regula de numerar-only la Manchester și fereastra de ridicare din Edinburgh',
      'Ce verifici înainte de ridicare sau expediere prin poștă',
    ],
  },
  'pasaport-uk-cu-domiciliu': {
    title: 'Pașaport cu domiciliu în România — reînnoire din UK',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Ce documente îți trebuie',
        blocks: [
          { type: 'info', text: 'Dacă domiciliul tău oficial este în România, poți reînnoi pașaportul la consulatul din UK fără dovadă de rezidență britanică.' },
          { type: 'info', text: 'Documente obligatorii: cartea de identitate sau buletinul valabil și pașaportul anterior, dacă îl mai ai.' },
          { type: 'tip', text: 'CI provizoriu este acceptat, dar trebuie însoțit de certificatul de naștere românesc în original.' },
          { type: 'warning', text: 'Dacă ți-ai schimbat numele, CI-ul trebuie să reflecte deja noul nume înainte de programare.' },
        ],
      },
      {
        id: 2,
        title: 'Verifică valabilitatea cărții de identitate',
        blocks: [
          { type: 'warning', text: 'CI-ul trebuie să fie valabil atât la depunerea cererii, cât și la ridicarea pașaportului, peste aproximativ 60 de zile.' },
          { type: 'tip', text: 'Dacă CI expiră curând, rezolvă mai întâi procura sau fluxul pentru înnoirea cărții de identitate în România.' },
          { type: 'info', text: 'Dacă vrei să treci domiciliul pe UK, ghidul corect este cel pentru pașaport CRDS.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Fă programarea pe econsulat.ro' },
      { id: 4, title: 'Pregătește-te pentru ziua programării' },
      { id: 5, title: 'Prezintă-te la consulat' },
      { id: 6, title: 'Ridică pașaportul' },
    ],
    paywallTeaser: [
      'Cum alegi serviciul corect pe econsulat.ro pentru domiciliu în România',
      'Taxa și metoda de plată în UK, inclusiv numerar-only la Manchester',
      'Cum verifici că CI-ul rămâne valabil până la ridicare',
      'Regulile de ridicare sau expediere după consulat',
    ],
  },
  'pasaport-crds-uk-pierdut': {
    title: 'Pașaport CRDS pierdut sau furat în UK',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Pierdut sau furat — ce trebuie să faci imediat',
        blocks: [
          { type: 'info', text: 'Pentru pașaport pierdut, declarația se completează direct la ghișeu. Pentru pașaport furat, ai nevoie de raportul poliției britanice înainte de programare.' },
          { type: 'action', text: 'Dacă documentul a fost furat, păstrează raportul în original și comandă traducerea autorizată în română.' },
          { type: 'warning', text: 'La Edinburgh, confirmă direct dacă se cere și apostila FCDO pe raportul de poliție.' },
          { type: 'tip', text: 'Dacă trebuie să pleci urgent în România și nu mai ai niciun act valabil, următorul lot util va fi titlul de călătorie din UK.' },
        ],
      },
      {
        id: 2,
        title: 'Ce documente îți trebuie',
        blocks: [
          { type: 'info', text: 'Ai nevoie de certificatul de naștere românesc și de dovada rezidenței în UK. Dacă mai ai și CI sau alt document cu fotografie, ia-l cu tine.' },
          { type: 'info', text: 'Pentru furt: raportul poliției britanice în original + traducere autorizată în română.' },
          { type: 'warning', text: 'La Manchester pregătește și xerocopii simple din toate actele pe care le vei prezenta.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Fă programarea pe econsulat.ro' },
      { id: 4, title: 'Pregătește-te pentru ziua programării' },
      { id: 5, title: 'Prezintă-te la consulat' },
      { id: 6, title: 'Ridică pașaportul' },
    ],
    paywallTeaser: [
      'Cum completezi cererea pentru pașaport pierdut sau furat în UK',
      'Ce faci la ghișeu pentru pierdere vs. furt',
      'Când trebuie apostilă sau doar traducere autorizată',
      'Cum ridici noul pașaport după aprobarea cererii',
    ],
  },
  'pasaport-uk-cu-domiciliu-pierdut': {
    title: 'Pașaport domiciliu România pierdut sau furat din UK',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Pierdut sau furat — ce trebuie să faci imediat',
        blocks: [
          { type: 'info', text: 'Pentru pașaport pierdut, declarația se completează la ghișeu. Pentru furt, trebuie mai întâi raportul poliției britanice și traducerea autorizată în română.' },
          { type: 'warning', text: 'Dacă domiciliul este încă în România, ai nevoie de CI valabilă atât la depunere, cât și la ridicare.' },
          { type: 'tip', text: 'Dacă nu mai ai niciun act valabil și trebuie să pleci urgent, vom adăuga separat ghidul pentru titlu de călătorie din UK.' },
        ],
      },
      {
        id: 2,
        title: 'Verifică valabilitatea cărții de identitate',
        blocks: [
          { type: 'warning', text: 'CI-ul trebuie să fie valabil și la ridicarea pașaportului, nu doar în ziua programării.' },
          { type: 'tip', text: 'Dacă ai doar CI provizoriu, adu și certificatul de naștere românesc în original.' },
          { type: 'warning', text: 'La Manchester pregătește și xerocopii, iar taxa de pașaport se plătește exclusiv în numerar.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Fă programarea pe econsulat.ro' },
      { id: 4, title: 'Pregătește-te pentru ziua programării' },
      { id: 5, title: 'Prezintă-te la consulat' },
      { id: 6, title: 'Ridică pașaportul' },
    ],
    paywallTeaser: [
      'Cum depui cererea când domiciliul tău este încă în România',
      'Cum verifici dacă CI-ul îți rămâne valabil până la ridicare',
      'Ce pregătești pentru furt, pierdere și programare',
      'Cum ridici pașaportul sau îl primești prin poștă, unde se aplică',
    ],
  },
  'pasaport-minor-crds-uk': {
    title: 'Pașaport minor cu domiciliu în UK (CRDS)',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Condiții obligatorii înainte de programare',
        blocks: [
          { type: 'warning', text: 'Cel puțin unul dintre părinți trebuie să aibă deja pașaport CRDS sau să solicite simultan un pașaport CRDS împreună cu minorul.' },
          { type: 'warning', text: 'Minorul trebuie să aibă certificat de naștere românesc. Dacă are doar certificat britanic, se face mai întâi transcrierea.' },
          { type: 'info', text: 'Acordul ambilor părinți rămâne obligatoriu pentru schimbarea domiciliului minorului pe UK.' },
        ],
      },
      {
        id: 2,
        title: 'Ce documente sunt necesare',
        blocks: [
          { type: 'info', text: 'Documente de bază: actele de identitate ale ambilor părinți, certificatul de naștere românesc al minorului și pașaportul anterior al minorului, dacă există.' },
          { type: 'info', text: 'Pentru minorii 14+: dacă au deja CI, o aduci în original și ambii părinți dau acordul personal la ghișeu.' },
          { type: 'warning', text: 'Dacă vine un singur părinte, ai nevoie de acordul autentificat al celuilalt părinte sau de documentul de custodie recunoscut în România.' },
          { type: 'note', text: 'La Manchester pregătește și xerocopii simple din toate documentele.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Fă programarea pe econsulat.ro' },
      { id: 4, title: 'Pregătește-te pentru ziua programării' },
      { id: 5, title: 'Prezintă-te la consulat cu minorul' },
      { id: 6, title: 'Ridică pașaportul' },
    ],
    paywallTeaser: [
      'Cum faci programarea pentru minor și, dacă e cazul, pentru părintele care cere simultan CRDS',
      'Checklistul complet pentru sub 14 ani vs. 14+',
      'Regula acordului parental și ce documente merg când lipsește un părinte',
      'Cum ridici pașaportul minorului după aprobare',
    ],
  },
  'pasaport-minor-ro-uk': {
    title: 'Pașaport minor cu domiciliu în România — din UK',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Verifică documentele necesare',
        blocks: [
          { type: 'info', text: 'Dacă domiciliul oficial al minorului este în România, cererea se depune la consulatul competent din UK fără dovadă de rezidență britanică.' },
          { type: 'warning', text: 'Certificatul de naștere britanic nu este acceptat direct. Dacă minorul s-a născut în UK, trebuie mai întâi transcris în registrele române.' },
          { type: 'info', text: 'Pentru minorii sub 14 ani: certificat de naștere românesc, pașaport anterior dacă există și actele valabile ale ambilor părinți.' },
        ],
      },
      {
        id: 2,
        title: 'Ce trebuie să știi pentru minorii 14+',
        blocks: [
          { type: 'warning', text: 'Pentru minorii 14–18 ani, CI-ul sau CI provizoriu trebuie să fie valabil și la depunere, și la ridicarea pașaportului.' },
          { type: 'tip', text: 'Dacă CI-ul minorului expiră curând, rezolvați mai întâi CI-ul prin consulat sau în România, apoi pașaportul.' },
          { type: 'info', text: 'Dacă doriți trecerea domiciliului minorului pe UK, fluxul corect este pașaport minor CRDS.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Fă programarea pe econsulat.ro' },
      { id: 4, title: 'Pregătește-te pentru ziua programării' },
      { id: 5, title: 'Prezintă-te la consulat cu minorul' },
      { id: 6, title: 'Ridică pașaportul' },
    ],
    paywallTeaser: [
      'Checklist complet sub 14 ani vs. 14–18 ani',
      'Cum faci programarea pentru pașaport minor cu domiciliu în România',
      'Ce documente sunt necesare dacă vine un singur părinte',
      'Regula CI-ului la ridicare pentru minorii 14+',
    ],
  },
  'pasaport-temporar-uk': {
    title: 'Pașaport temporar în UK',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Verifică dacă ești eligibil',
        blocks: [
          { type: 'warning', text: 'Pașaportul temporar se eliberează doar în situații justificate legal: urgențe medicale, familiale, profesionale, file epuizate, pașaport depus pentru viză sau alte cazuri speciale.' },
          { type: 'info', text: 'Valabilitatea este de 12 luni. Pentru cazuri urgente acceptate, eliberarea se face de regulă în 3 zile lucrătoare.' },
          { type: 'tip', text: 'Dacă nu ai o urgență justificată, pașaportul electronic rămâne varianta mai potrivită.' },
        ],
      },
      {
        id: 2,
        title: 'Pregătește documentele justificative',
        blocks: [
          { type: 'info', text: 'Ai nevoie de act de identitate românesc, CNP și documentul care dovedește urgența: bilet, adeverință medicală, document de la angajator, dovadă viză sau pașaport cu file epuizate.' },
          { type: 'warning', text: 'Fără documente justificative, cererea de pașaport temporar poate fi respinsă.' },
          { type: 'note', text: 'La Manchester, plata este exclusiv numerar și cererile se depun doar Luni–Joi 09:30–13:30.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Fă programarea pe econsulat.ro' },
      { id: 4, title: 'Pregătește-te pentru ziua programării' },
      { id: 5, title: 'Prezintă-te la consulat' },
      { id: 6, title: 'Ridică pașaportul temporar' },
    ],
    paywallTeaser: [
      'Ce categorie selectezi pe econsulat.ro',
      'Checklist complet pentru fiecare tip de urgență',
      'Regula Manchester: interval special, numerar și fără poștă',
      'Cum ridici pașaportul în aproximativ 3 zile lucrătoare',
    ],
  },
  'titlu-calatorie-uk': {
    title: 'Titlu de călătorie adult în UK',
    meta: { free: '2 pași gratuiți', total: '5 pași total' },
    totalSteps: 5,
    steps: [
      {
        id: 1,
        title: 'Verifică dacă ai nevoie de titlu de călătorie',
        blocks: [
          { type: 'info', text: 'Titlul de călătorie este gratuit, valabil 30 de zile și se folosește exclusiv pentru întoarcerea în România.' },
          { type: 'warning', text: 'La intrarea în România, titlul își pierde valabilitatea. Pentru revenirea în UK vei avea nevoie de pașaport sau CI valabilă.' },
          { type: 'tip', text: 'Dacă ai nevoie să călătorești în altă țară decât România, verifică fluxul de pașaport temporar.' },
        ],
      },
      {
        id: 2,
        title: 'Ce documente trebuie să aduci',
        blocks: [
          { type: 'info', text: 'Adu CI sau pașaport expirat, alt document românesc cu fotografie sau, dacă nu ai nimic, trebuie să îți cunoști CNP-ul.' },
          { type: 'warning', text: 'Dacă pașaportul a fost furat, Londra/Manchester cer raport de poliție + traducere; Edinburgh cere și apostilă FCDO.' },
          { type: 'note', text: 'La Manchester programarea este obligatorie. Pentru plecare în 48h, scrii la manchester.consul@mae.ro.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Programare sau prezentare directă' },
      { id: 4, title: 'Ziua la consulat' },
      { id: 5, title: 'Pleci în România cu titlul de călătorie' },
    ],
    paywallTeaser: [
      'Cum mergi fără programare la Londra sau Edinburgh cu bilet în 7 zile',
      'Cum ceri urgență la Manchester',
      'Ce se întâmplă la ghișeu și când se eliberează pe loc',
      'Ce faci după intrarea în România ca să revii în UK',
    ],
  },
  'titlu-calatorie-minor-sub14-uk': {
    title: 'Titlu de călătorie minor sub 14 ani în UK',
    meta: { free: '2 pași gratuiți', total: '4 pași total' },
    totalSteps: 4,
    steps: [
      {
        id: 1,
        title: 'Ce documente sunt necesare',
        blocks: [
          { type: 'warning', text: 'La Londra și Manchester minorul sub 14 ani nu trebuie să fie prezent; la Edinburgh toți minorii trebuie să fie prezenți personal.' },
          { type: 'info', text: 'Ai nevoie de certificatul de naștere românesc sau certificatul britanic forma lungă cu apostilă FCDO.' },
          { type: 'info', text: 'Ambii părinți trebuie să prezinte acte de identitate valabile. Dacă vine un singur părinte, ai nevoie de document justificativ.' },
        ],
      },
      {
        id: 2,
        title: 'Programare sau prezentare directă',
        blocks: [
          { type: 'info', text: 'Londra și Edinburgh permit prezentare directă dacă există bilet către România în cel mult 7 zile lucrătoare.' },
          { type: 'warning', text: 'Manchester cere programare obligatorie; pentru urgențe de 48h se trimite email cu rezervarea de călătorie.' },
          { type: 'note', text: 'Titlul de călătorie este gratuit și este doar pentru călătoria în România.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Ziua la consulat' },
      { id: 4, title: 'Plecați în România cu titlul de călătorie' },
    ],
    paywallTeaser: [
      'Regula exactă de prezență a minorului pe consulat',
      'Ce faci dacă un părinte nu poate veni',
      'Ce documente sunt necesare dacă pașaportul minorului a fost furat',
      'Cum revine minorul în UK după intrarea în România',
    ],
  },
  'titlu-calatorie-minor-14-18-uk': {
    title: 'Titlu de călătorie minor 14–18 ani în UK',
    meta: { free: '2 pași gratuiți', total: '4 pași total' },
    totalSteps: 4,
    steps: [
      {
        id: 1,
        title: 'Ce documente sunt necesare',
        blocks: [
          { type: 'warning', text: 'Minorul 14–18 ani trebuie să fie prezent personal la consulat, la toate cele 3 consulate UK.' },
          { type: 'info', text: 'Adu certificatul de naștere românesc sau certificatul britanic forma lungă cu apostilă FCDO, plus documentele disponibile ale minorului.' },
          { type: 'info', text: 'Ambii părinți trebuie să aibă CI sau pașapoarte valabile. Dacă unul lipsește, pregătește documentul legal justificativ.' },
        ],
      },
      {
        id: 2,
        title: 'Programare sau prezentare directă',
        blocks: [
          { type: 'info', text: 'Londra și Edinburgh permit prezentare directă cu bilet spre România în cel mult 7 zile lucrătoare.' },
          { type: 'warning', text: 'Manchester cere programare obligatorie. Pentru urgențe de 48h se trimite email cu numele minorului și rezervarea.' },
          { type: 'note', text: 'La Manchester se cer 2 fotografii tip pașaport; la Londra și Edinburgh fotografia se face la consulat.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Ziua la consulat' },
      { id: 4, title: 'Plecați în România cu titlul de călătorie' },
    ],
    paywallTeaser: [
      'Ce semnează minorul 14+ la ghișeu',
      'Cum se tratează pașaportul pierdut vs. furat',
      'Ce faci dacă un părinte nu are act valabil',
      'Cum obții documentul permanent după întoarcerea în România',
    ],
  },
  'procura-ci-uk': {
    title: 'Procura pentru reînnoirea cărții de identitate din UK',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Verifică dacă poți folosi procura CI',
        blocks: [
          { type: 'info', text: 'Procura CI este pentru adultul care a avut deja buletin sau carte de identitate și vrea să o reînnoiască sau să o înlocuiască din UK.' },
          { type: 'warning', text: 'Prima carte de identitate NU se obține prin procură. Dacă nu ai avut niciodată CI, ghidul corect este pentru prima CI.' },
          { type: 'warning', text: 'La autentificare ai nevoie de un act românesc valabil: CI sau pașaport. Dacă nu ai niciunul, consulatul poate elibera mai întâi titlul de călătorie la aceeași programare.' },
        ],
      },
      {
        id: 2,
        title: 'Ce documente și fotografii pregătești',
        blocks: [
          { type: 'info', text: 'Ai nevoie de actul tău de identitate valabil și de toate datele persoanei împuternicite din România: nume, CNP, seria și numărul CI, adresă și emitent.' },
          { type: 'warning', text: 'Fotografiile diferă în funcție de consulat: Londra cere 6, iar Manchester și Edinburgh 5, toate tip 3×4 cm cu bandă albă jos.' },
          { type: 'tip', text: 'Dacă mergi la Manchester, pregătește numerar pentru taxa notarială.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Fă programarea pe econsulat.ro' },
      { id: 4, title: 'Pregătește-te pentru ziua programării' },
      { id: 5, title: 'Autentifică procura la consulat' },
      { id: 6, title: 'Persoana împuternicită depune actele în România' },
    ],
    paywallTeaser: [
      'Cum faci programarea corectă la Acte notariale → Procură CI',
      'Ce se întâmplă dacă nu ai nici CI, nici pașaport valabil',
      'Care este taxa la Londra, Manchester sau Edinburgh',
      'Ce trebuie să facă persoana împuternicită la SPCLEP în România',
    ],
  },
  'procura-generala-uk': {
    title: 'Procura notarială din UK',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Alege tipul de act notarial',
        blocks: [
          { type: 'info', text: 'La consulatele române din UK poți autentifica procuri speciale, declarații notariale, legalizări de copii, traduceri sau semnături.' },
          { type: 'warning', text: 'Consulatul nu autentifică direct contracte de vânzare-cumpărare, donații, divorțuri sau proceduri succesorale. Pentru imobil se face procura, iar contractul se semnează în România.' },
          { type: 'tip', text: 'Dacă nu poți ajunge la consulat, alternativa este notar britanic / solicitor + apostilă FCDO + traducere autorizată în română.' },
        ],
      },
      {
        id: 2,
        title: 'Ce documente și date pregătești',
        blocks: [
          { type: 'info', text: 'Pentru orice act notarial ai nevoie de CI sau pașaport românesc valabil, în original.' },
          { type: 'info', text: 'Pentru procură pregătește datele complete ale mandatarului și obiectul exact: imobil, carte funciară, acțiune sau autoritate.' },
          { type: 'warning', text: 'La Manchester actele notariale se trimit prin poștă: plic Royal Mail Special Delivery preplătit + cerere de expediere sunt obligatorii.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Fă programarea pe econsulat.ro' },
      { id: 4, title: 'Pregătește-te pentru ziua programării' },
      { id: 5, title: 'Autentifică actul la consulat' },
      { id: 6, title: 'Folosește procura în România' },
    ],
    paywallTeaser: [
      'Ce serviciu exact selectezi pe econsulat.ro',
      'Checklist complet pentru mandatar, imobil și obiectul procurii',
      'Regula Manchester: plic preplătit și expediere obligatorie',
      'Cum folosește mandatarul procura în România',
    ],
  },
  'prima-ci-minor-uk': {
    title: 'Prima carte de identitate minor 14+ din UK',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Verifică dacă poți depune la consulat',
        blocks: [
          { type: 'info', text: 'Minorul 14–18 ani poate depune cererea pentru prima CI la consulatul competent din UK, iar actul se emite în România și vine ulterior prin poștă.' },
          { type: 'warning', text: 'Prima CI nu se face prin procură: minorul trebuie să fie prezent personal.' },
          { type: 'warning', text: 'La Edinburgh, consulatul cere document britanic justificativ și 2 traduceri autorizate pentru motivul pentru care minorul nu se deplasează în România.' },
        ],
      },
      {
        id: 2,
        title: 'Ce documente sunt necesare',
        blocks: [
          { type: 'info', text: 'Documentele de bază sunt certificatul de naștere românesc al minorului, dovada domiciliului din România și actele părintelui / reprezentantului legal.' },
          { type: 'warning', text: 'Numărul de fotografii diferă: Londra și Manchester cer 2, iar Edinburgh 4.' },
          { type: 'note', text: 'La Manchester pregătește și xerocopii simple din toate actele.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Fă programarea pe econsulat.ro' },
      { id: 4, title: 'Pregătește-te pentru ziua programării' },
      { id: 5, title: 'Prezintă-te la consulat' },
      { id: 6, title: 'Achită taxele în România și primești CI prin poștă' },
    ],
    paywallTeaser: [
      'Checklist complet pentru Londra, Manchester sau Edinburgh',
      'Când trebuie să vină un singur părinte și când ambii',
      'Cum se achită taxele în România',
      'Ce termene realiste ai pentru emiterea CI',
    ],
  },
  'prima-ci-adult-uk': {
    title: 'Prima carte de identitate adult 18+ din UK',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Verifică dacă ești pe fluxul corect',
        blocks: [
          { type: 'info', text: 'Acest ghid este pentru adultul care nu a avut niciodată carte de identitate sau buletin românesc.' },
          { type: 'warning', text: 'Dacă ai avut CI anterior, fluxul mai simplu este procura pentru reînnoirea cărții de identitate.' },
          { type: 'warning', text: 'Trebuie să te prezinți personal la consulat, însoțit de un părinte sau de o persoană care îți poate certifica identitatea.' },
        ],
      },
      {
        id: 2,
        title: 'Ce documente sunt necesare',
        blocks: [
          { type: 'info', text: 'Ai nevoie de certificatul de naștere românesc, dovada domiciliului din România și actul de identitate al însoțitorului.' },
          { type: 'note', text: 'Declarația însoțitorului nu se aduce de acasă — se dă la ghișeu în fața funcționarului consular.' },
          { type: 'warning', text: 'La Manchester pregătește și xerocopii; la Edinburgh verifică direct numărul de fotografii cerut.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Fă programarea pe econsulat.ro' },
      { id: 4, title: 'Pregătește-te pentru ziua programării' },
      { id: 5, title: 'Prezintă-te la consulat cu însoțitorul' },
      { id: 6, title: 'Achită taxele în România și primești CI' },
    ],
    paywallTeaser: [
      'Cum faci programarea corectă pentru prima CI adult 18+',
      'Ce trebuie să aibă însoțitorul la ghișeu',
      'Cum se achită taxele în România și cât durează emiterea',
      'Când merită să alegi totuși varianta cu procură în loc de prima CI',
    ],
  },
  'transcriere-nastere-minor-uk': {
    title: 'Transcrierea certificatului de naștere pentru minor din UK',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Verifică ordinea corectă a transcrierilor',
        blocks: [
          { type: 'warning', text: 'Dacă părinții s-au căsătorit în UK înainte de naștere și căsătoria nu este transcrisă în România, mai întâi transcrii căsătoria.' },
          { type: 'info', text: 'Pentru minori, certificatul românesc se poate elibera în aceeași zi dacă dosarul este complet.' },
          { type: 'warning', text: 'La Edinburgh, minorul de 14+ fără document românesc valabil poate avea nevoie mai întâi de titlu de călătorie.' },
        ],
      },
      {
        id: 2,
        title: 'Ce documente sunt necesare',
        blocks: [
          { type: 'warning', text: 'Ai nevoie de certificatul britanic forma lungă, cu apostila FCDO. Forma scurtă nu este acceptată.' },
          { type: 'warning', text: 'Traducerea autorizată diferă: Londra cere 1 exemplar, iar Manchester și Edinburgh 2 exemplare originale.' },
          { type: 'tip', text: 'Dacă părinții nu sunt căsătoriți, pregătește și certificatele de naștere românești ale ambilor părinți.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Fă programarea pe econsulat.ro' },
      { id: 4, title: 'Pregătește-te pentru ziua programării' },
      { id: 5, title: 'Prezintă-te la consulat' },
      { id: 6, title: 'Primești certificatul de naștere românesc' },
    ],
    paywallTeaser: [
      'Checklist complet pe consulat, inclusiv câte traduceri duci',
      'Ce faci la Edinburgh dacă minorul are peste 14 ani',
      'Cum combini transcrierea cu pașaportul minorului când se poate',
      'Ce semnezi și ce ridici în aceeași zi la consulat',
    ],
  },
  'transcriere-nastere-adult-uk': {
    title: 'Transcrierea certificatului de naștere pentru adult din UK',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Verifică situația ta înainte de programare',
        blocks: [
          { type: 'warning', text: 'Pentru adult 18+, termenul nu este în aceeași zi ca la minor: dosarul poate dura până la 6 luni.' },
          { type: 'warning', text: 'Dacă părinții s-au căsătorit în UK înainte de naștere și căsătoria nu este transcrisă, transcrii întâi căsătoria.' },
          { type: 'tip', text: 'Dacă ai avut deja buletin sau carte de identitate, verifică dacă de fapt ai nevoie de procura pentru CI, nu de transcriere.' },
        ],
      },
      {
        id: 2,
        title: 'Ce documente sunt necesare',
        blocks: [
          { type: 'warning', text: 'Certificatul britanic trebuie să fie forma lungă și apostilat de FCDO.' },
          { type: 'warning', text: 'Traducerea autorizată diferă per consulat: Londra 1 exemplar, Manchester și Edinburgh 2 exemplare originale.' },
          { type: 'info', text: 'Pregătește și documentele de stare civilă relevante ale părinților dacă există neconcordanțe de nume sau situații de divorț / recăsătorire.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Fă programarea pe econsulat.ro' },
      { id: 4, title: 'Pregătește-te pentru ziua programării' },
      { id: 5, title: 'Prezintă-te la consulat' },
      { id: 6, title: 'Primești certificatul de naștere românesc' },
    ],
    paywallTeaser: [
      'Checklist complet pentru dosarul de transcriere adult 18+',
      'Cum urmărești dosarul pe durata celor până la 6 luni',
      'Ce faci dacă ai mai mult de 3 prenume sau acte vechi cu nume diferite',
      'Cum primești certificatul românesc la final',
    ],
  },
  'transcriere-casatorie-uk': {
    title: 'Transcriere căsătorie britanică din UK',
    meta: { free: '2 pași gratuiți', total: '6 pași total' },
    totalSteps: 6,
    steps: [
      {
        id: 1,
        title: 'Verifică ordinea transcrierilor',
        blocks: [
          { type: 'warning', text: 'Actele de stare civilă se transcriu în ordine cronologică. Dacă aveți copii născuți după căsătorie, transcrieți întâi căsătoria.' },
          { type: 'info', text: 'Transcrierea căsătoriei este necesară pentru schimbarea numelui pe acte românești, acte pentru copii, moșteniri sau drepturi patrimoniale în România.' },
          { type: 'warning', text: 'Dacă unul dintre soți a mai fost căsătorit în România, divorțul sau desfacerea căsătoriei anterioare trebuie să fie înscrisă în registrele române.' },
        ],
      },
      {
        id: 2,
        title: 'Ce documente sunt necesare',
        blocks: [
          { type: 'warning', text: 'Certificatul de căsătorie britanic trebuie apostilat de FCDO și tradus autorizat în română.' },
          { type: 'warning', text: 'Londra cere 1 exemplar al traducerii; Manchester și Edinburgh cer 2 exemplare. Edinburgh cere și 2 fotocopii per document.' },
          { type: 'info', text: 'Dacă ambii soți sunt cetățeni români, ambii trebuie să fie prezenți. Pentru căsătorie mixtă, vine cetățeanul român, iar traducătorul poate fi necesar dacă soțul/soția nu vorbește română.' },
        ],
      },
    ],
    lockedSteps: [
      { id: 3, title: 'Fă programarea pe econsulat.ro' },
      { id: 4, title: 'Pregătește-te pentru ziua programării' },
      { id: 5, title: 'Prezintă-te la consulat' },
      { id: 6, title: 'Primești certificatul de căsătorie românesc' },
    ],
    paywallTeaser: [
      'Checklist complet pe consulat: traduceri, fotocopii și prezența soților',
      'Ce se întâmplă la ghișeu și cum se eliberează certificatul în aceeași zi',
      'Cum folosești certificatul românesc pentru schimbarea numelui',
      'Ce faci dacă există căsătorii anterioare sau neconcordanțe de nume',
    ],
  },
} satisfies Partial<Record<GuideId, GhidFreeContent>>)
