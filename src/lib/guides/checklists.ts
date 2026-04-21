import type { ConsulateId, SituationFlags } from '@/types'
import { getGuideCountryCode, localizeGuideTextForCountry } from '@/lib/guides/countryCopy'
import {
  getBirthBerlinNameRule,
  getBirthParentCertificatesRule,
  getBirthPostalRule,
  getMostenireDeathCertificateRule,
  getPassportLostTranslationRule,
  getRnneprPaymentRule,
  getTravelPhotoRule,
  getTravelTranslationRule,
} from '@/lib/guides/consulateRules'

export interface ChecklistItem {
  id: string
  name: string
  detail?: string
}

export interface ChecklistSection {
  id: string
  title: string
  items: ChecklistItem[]
}

export function getGuideChecklist(
  guideId: string | null,
  consulate: ConsulateId | null,
  situation: SituationFlags
): ChecklistSection[] {
  if (!guideId) return []
  const fn = CHECKLISTS[guideId]
  if (!fn) return []
  const country = getGuideCountryCode(guideId)
  return fn(consulate, situation).map((section) => ({
    ...section,
    title: localizeGuideTextForCountry(section.title, country),
    items: section.items.map((item) => ({
      ...item,
      name: localizeGuideTextForCountry(item.name, country),
      detail: item.detail ? localizeGuideTextForCountry(item.detail, country) : item.detail,
    })),
  }))
}

type ChecklistFn = (c: ConsulateId | null, s: SituationFlags) => ChecklistSection[]

// ── Ghid #1 + #2 — pasaport CRDS ─────────────────────────────────────────────

function checklistPasaportCrds(consulate: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void consulate
  void _s
  return [
    {
      id: 'obligatorii',
      title: 'Documente obligatorii',
      items: [
        { id: 'p1_pasaport', name: 'Pașaportul expirat sau distrus', detail: 'Original · chiar dacă e în stare proastă' },
        { id: 'p1_ci', name: 'Cartea de identitate românească', detail: 'Original · chiar expirată · va fi anulată la ridicare' },
        { id: 'p1_nastere', name: 'Certificat de naștere românesc', detail: 'Original · nu se acceptă plastifiat, rupt sau corectat' },
        { id: 'p1_domiciliu', name: 'Document domiciliu Germania', detail: 'Meldebescheinigung / Anmeldung / Personalausweis german · original · max 5 ani' },
        { id: 'p1_foto', name: 'Fotografii', detail: 'Nu sunt necesare separat — imaginea facială se preia biometric la ghișeu la consulatul tău' },
      ],
    },
    {
      id: 'casatorie',
      title: 'Dacă ți-ai schimbat numele prin căsătorie',
      items: [
        { id: 'p1_casatorie', name: 'Certificat de căsătorie românesc', detail: 'Original · doar dacă ți-ai schimbat numele' },
      ],
    },
  ]
}

function checklistPasaportCrdsPierdut(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _s
  return [
    {
      id: 'obligatorii',
      title: 'Documente obligatorii',
      items: [
        { id: 'p17_ci', name: 'Cartea de identitate românească', detail: 'Original · dacă o ai, chiar expirată · nu este blocant dacă lipsește' },
        { id: 'p17_nastere', name: 'Certificat de naștere românesc', detail: 'Original · nu se acceptă plastifiat, rupt sau corectat' },
        { id: 'p17_domiciliu', name: 'Document domiciliu Germania', detail: 'Meldebescheinigung / Anmeldung / Personalausweis german · original · max 5 ani' },
        { id: 'p17_foto', name: 'Fotografii', detail: 'Nu sunt necesare separat — imaginea facială se preia biometric la ghișeu la consulatul tău' },
      ],
    },
    {
      id: 'pierdere_furt',
      title: 'Dacă pașaportul a fost pierdut sau furat',
      items: [
        { id: 'p17_pierdut', name: 'Declarație pe proprie răspundere', detail: 'Pentru pașaport pierdut · se completează exclusiv la ghișeul consulatului' },
        { id: 'p17_furat', name: 'Adeverință poliție + traducere', detail: getPassportLostTranslationRule(_c) },
      ],
    },
    {
      id: 'casatorie',
      title: 'Dacă ți-ai schimbat numele prin căsătorie',
      items: [
        { id: 'p17_casatorie', name: 'Certificat de căsătorie românesc', detail: 'Original · doar dacă ți-ai schimbat numele' },
      ],
    },
  ]
}

function checklistPasaportMinorCrds(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'minor',
      title: 'Documente pentru minor',
      items: [
        { id: 'pm18_nastere', name: 'Certificat de naștere românesc al minorului', detail: 'Original · cu CNP · nu se acceptă plastifiat sau deteriorat' },
        { id: 'pm18_pasaport', name: 'Pașaportul anterior al minorului', detail: 'Original · dacă există, chiar expirat' },
        { id: 'pm18_domiciliu', name: 'Document de domiciliu în Germania', detail: 'Meldebescheinigung / Anmeldung / Personalausweis german · pe numele minorului sau al părinților · original · max 5 ani' },
        { id: 'pm18_foto', name: 'Fotografii', detail: 'Nu sunt necesare separat — imaginea facială se preia biometric la ghișeu' },
      ],
    },
    {
      id: 'parinti',
      title: 'Actele părinților',
      items: [
        { id: 'pm18_parinti_id', name: 'Actele de identitate valabile ale ambilor părinți', detail: 'Original · pașaport CRDS sau carte de identitate românească' },
        { id: 'pm18_casatorie', name: 'Certificat de căsătorie românesc al părinților', detail: 'Original · dacă sunt căsătoriți sau există diferențe de nume' },
        { id: 'pm18_crds_regula', name: 'Condiția CRDS pentru minor', detail: 'Cel puțin un părinte trebuie să aibă deja pașaport CRDS sau să depună cerere CRDS simultan cu minorul' },
      ],
    },
    {
      id: 'situatii_speciale',
      title: 'Situații speciale',
      items: [
        { id: 'pm18_un_parinte', name: 'Dacă vine un singur părinte', detail: 'Procura specială sau acord scris autentificat în original, din partea părintelui absent' },
        { id: 'pm18_divort', name: 'Dacă părinții sunt divorțați', detail: 'Sentință românească definitivă sau documentația completă pentru hotărâre judecătorească germană, după caz' },
        { id: 'pm18_14plus', name: 'Pentru minorii 14–17 ani', detail: 'Cartea de identitate a minorului, dacă există · declarația de acord a părinților se completează la ghișeu' },
      ],
    },
  ]
}

function checklistPasaportCrdsSpania(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'obligatorii',
      title: 'Documente obligatorii',
      items: [
        { id: 'pes1_pasaport', name: 'Pașaportul actual', detail: 'Original · expirat sau în curs de expirare' },
        { id: 'pes1_domiciliu', name: 'Document de domiciliu în Spania', detail: 'Certificado de empadronamiento sau certificado de residencia / NIE / tarjeta de extranjero · original' },
        { id: 'pes1_nastere', name: 'Certificat de naștere românesc', detail: 'Original + copie' },
        { id: 'pes1_foto', name: 'Fotografii', detail: 'Nu sunt necesare separat — se fac biometric la ghișeu' },
      ],
    },
    {
      id: 'casatorie',
      title: 'Dacă ți-ai schimbat numele prin căsătorie',
      items: [
        { id: 'pes1_casatorie', name: 'Certificat de căsătorie românesc', detail: 'Original + copie · dacă ești căsătorit/ă' },
      ],
    },
    {
      id: 'programare',
      title: 'Înainte de drum',
      items: [
        { id: 'pes1_econsulat', name: 'Programare făcută pe econsulat.ro', detail: 'Obligatorie la toate cele 8 consulate din Spania' },
        { id: 'pes1_taxa', name: 'Taxa pregătită', detail: '53€ standard · Madrid CRDS = 60€ total (53€ + 7€ taxă poștală obligatorie)' },
      ],
    },
  ]
}

function checklistPasaportDomiciliuRoSpania(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'obligatorii',
      title: 'Documente obligatorii',
      items: [
        { id: 'pes2_pasaport', name: 'Pașaportul actual', detail: 'Original · expirat sau în curs de expirare' },
        { id: 'pes2_ci', name: 'Cartea de identitate românească valabilă', detail: 'Original' },
        { id: 'pes2_nastere', name: 'Certificat de naștere românesc', detail: 'Original + copie' },
        { id: 'pes2_foto', name: 'Fotografii', detail: 'Nu sunt necesare separat — se fac biometric la ghișeu' },
      ],
    },
    {
      id: 'casatorie',
      title: 'Dacă ți-ai schimbat numele prin căsătorie',
      items: [
        { id: 'pes2_casatorie', name: 'Certificat de căsătorie românesc', detail: 'Original + copie · dacă ești căsătorit/ă' },
      ],
    },
    {
      id: 'programare',
      title: 'Înainte de drum',
      items: [
        { id: 'pes2_econsulat', name: 'Programare făcută pe econsulat.ro', detail: 'Obligatorie la toate cele 8 consulate din Spania' },
        { id: 'pes2_taxa', name: 'Taxa pregătită', detail: '53€ · metoda de plată depinde de consulatul tău' },
      ],
    },
  ]
}

function checklistPasaportCrdsPierdutSpania(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'obligatorii',
      title: 'Documente obligatorii',
      items: [
        { id: 'pes3_domiciliu', name: 'Document de domiciliu în Spania', detail: 'Empadronamiento sau certificado de residencia / NIE · original' },
        { id: 'pes3_nastere', name: 'Certificat de naștere românesc', detail: 'Original + copie' },
        { id: 'pes3_casatorie', name: 'Certificat de căsătorie românesc', detail: 'Original + copie · dacă ți-ai schimbat numele' },
        { id: 'pes3_econsulat', name: 'Programare pe econsulat.ro', detail: 'Obligatorie pentru pașaport' },
      ],
    },
    {
      id: 'pierdere_furt',
      title: 'În funcție de situație',
      items: [
        { id: 'pes3_pierdut', name: 'Pașaport pierdut', detail: 'Declarația de pierdere se completează direct la ghișeu' },
        { id: 'pes3_furat', name: 'Pașaport furat', detail: 'Denuncia + traducere autorizată MJ acceptată de consulatul tău' },
        { id: 'pes3_distrus', name: 'Pașaport distrus', detail: 'Adu documentul fizic deteriorat la ghișeu' },
      ],
    },
  ]
}

function checklistPasaportDomiciliuRoPierdutSpania(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'obligatorii',
      title: 'Documente obligatorii',
      items: [
        { id: 'pes4_ci', name: 'Carte de identitate românească valabilă', detail: 'Original' },
        { id: 'pes4_nastere', name: 'Certificat de naștere românesc', detail: 'Original + copie' },
        { id: 'pes4_casatorie', name: 'Certificat de căsătorie românesc', detail: 'Original + copie · dacă ți-ai schimbat numele' },
        { id: 'pes4_econsulat', name: 'Programare pe econsulat.ro', detail: 'Obligatorie pentru pașaportul cu domiciliul în România' },
      ],
    },
    {
      id: 'pierdere_furt',
      title: 'În funcție de situație',
      items: [
        { id: 'pes4_pierdut', name: 'Pașaport pierdut', detail: 'Declarația de pierdere se completează la ghișeu' },
        { id: 'pes4_furat', name: 'Pașaport furat', detail: 'Denuncia + traducere autorizată MJ acceptată de consulatul tău' },
        { id: 'pes4_distrus', name: 'Pașaport distrus', detail: 'Adu documentul fizic deteriorat' },
      ],
    },
  ]
}

function checklistBuletinAdultSpania(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'spclep',
      title: 'Documente pentru SPCLEP',
      items: [
        { id: 'bes5_ci', name: 'CI expirată sau documentul privind pierderea/furtul', detail: 'După situația ta concretă' },
        { id: 'bes5_nastere', name: 'Certificat de naștere românesc', detail: 'Original' },
        { id: 'bes5_stare', name: 'Certificat de căsătorie / divorț', detail: 'Original · dacă e cazul' },
        { id: 'bes5_adresa', name: 'Document pentru adresa de domiciliu din România', detail: 'Contract, extras sau adeverință, după caz' },
        { id: 'bes5_taxa', name: 'Taxa CI', detail: '7 lei' },
      ],
    },
  ]
}

function checklistBuletinMinorSpania(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'minor',
      title: 'Documente pentru minor',
      items: [
        { id: 'bes6_nastere', name: 'Certificatul de naștere al minorului', detail: 'Original' },
        { id: 'bes6_parinte', name: 'Actul de identitate al părintelui prezent', detail: 'Original' },
        { id: 'bes6_acord', name: 'Acordul celuilalt părinte sau hotărârea de custodie', detail: 'Dacă vine un singur părinte' },
        { id: 'bes6_ci', name: 'CI expirată a minorului', detail: 'Doar dacă este reînnoire, nu prima CI' },
        { id: 'bes6_taxa', name: 'Taxa CI', detail: '7 lei' },
        { id: 'bes6_prezenta', name: 'Prezența minorului la ghișeu', detail: 'Obligatorie' },
      ],
    },
  ]
}

function checklistBuletinMajoratSpania(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'majorat',
      title: 'Documente pentru prima CI de adult',
      items: [
        { id: 'bes7_minor_ci', name: 'Buletinul de minor expirat', detail: 'Original · se predă la SPCLEP' },
        { id: 'bes7_nastere', name: 'Certificatul de naștere', detail: 'Original' },
        { id: 'bes7_adresa', name: 'Document de domiciliu', detail: 'Doar dacă adresa s-a schimbat față de buletinul de minor' },
        { id: 'bes7_foto', name: 'Fotografie 3×4 cm', detail: 'Dacă SPCLEP-ul nu face fotografia la ghișeu' },
        { id: 'bes7_taxa', name: 'Taxa CI', detail: '7 lei' },
      ],
    },
  ]
}

function checklistBuletinMinorCrdsSpania(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'minor_crds',
      title: 'Documente pentru CI minor CRDS',
      items: [
        { id: 'bes8_nastere', name: 'Certificatul de naștere românesc al minorului', detail: 'Original + copie' },
        { id: 'bes8_domiciliu', name: 'Document de domiciliu spaniol al minorului', detail: 'Empadronamiento sau certificado de residencia / NIE' },
        { id: 'bes8_parinte', name: 'Actul de identitate al părintelui prezent', detail: 'Original' },
        { id: 'bes8_acord', name: 'Acordul celuilalt părinte / actul de custodie', detail: 'Dacă vine un singur părinte' },
        { id: 'bes8_foto', name: '6 fotografii 3×4 cm, fond alb', detail: 'Se aduc de acasă' },
        { id: 'bes8_ci', name: 'CI expirată a minorului', detail: 'Doar dacă este reînnoire' },
      ],
    },
  ]
}

function checklistBuletinCrdsSpania(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'adult_crds',
      title: 'Documente pentru CI adult CRDS',
      items: [
        { id: 'bes9_ci', name: 'CI actuală sau pașaportul valabil', detail: 'CI dacă reînnoiești · pașaport dacă este prima înregistrare CRDS' },
        { id: 'bes9_domiciliu', name: 'Document de domiciliu spaniol', detail: 'Empadronamiento sau certificado de residencia / NIE' },
        { id: 'bes9_nastere', name: 'Certificat de naștere românesc', detail: 'Original + copie' },
        { id: 'bes9_casatorie', name: 'Certificat de căsătorie', detail: 'Dacă numele s-a schimbat' },
        { id: 'bes9_foto', name: '6 fotografii 3×4 cm, fond alb', detail: 'Se aduc de acasă' },
        { id: 'bes9_programare', name: 'Programare pe econsulat.ro', detail: 'Obligatorie' },
      ],
    },
  ]
}

function checklistBuletinPierdutSpania(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'pierdere',
      title: 'Documente și dovezi utile',
      items: [
        { id: 'bes10_furt', name: 'Denuncia de la poliția spaniolă', detail: 'Necesară dacă documentul a fost furat' },
        { id: 'bes10_nastere', name: 'Certificat de naștere românesc', detail: 'Original + copie' },
        { id: 'bes10_pasaport', name: 'Pașaport valabil sau alt document cu fotografie', detail: 'Pentru identificare' },
        { id: 'bes10_foto', name: '6 fotografii 3×4 cm, fond alb', detail: 'În ambele căi: SPCLEP sau consulat' },
        { id: 'bes10_domiciliu', name: 'Document de domiciliu spaniol', detail: 'Doar dacă ai CRDS activ și mergi pe calea consulatului' },
      ],
    },
  ]
}

function checklistTitluCalatorieSpania(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'titlu_es',
      title: 'Documente pentru titlul de călătorie',
      items: [
        { id: 'tes11_pasaport', name: 'Pașaportul expirat sau documentul vechi', detail: 'Original, dacă îl mai ai' },
        { id: 'tes11_nastere', name: 'Certificat de naștere românesc sau Certificado Plurilingüe', detail: 'Original' },
        { id: 'tes11_furt', name: 'Denuncia de la poliția spaniolă', detail: 'Dacă documentul a fost furat' },
        { id: 'tes11_trad', name: 'Traducere pentru furt', detail: 'Depinde de consulatul tău; verifică regula locală' },
      ],
    },
  ]
}

function checklistTitluCalatorieUrgentaSpania(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'titlu_urgent_es',
      title: 'Documente pentru urgență',
      items: [
        { id: 'tes12_urgenta', name: 'Dovada urgenței', detail: 'Bilet de avion, document medical, certificat de deces sau alt act justificativ' },
        { id: 'tes12_pasaport', name: 'Pașaportul expirat sau documentele românești disponibile', detail: 'Orice ajută la identificare' },
        { id: 'tes12_furt', name: 'Denuncia + traducere dacă se cere', detail: 'Doar în caz de furt și după regula consulatului' },
      ],
    },
  ]
}

function checklistProcuraGeneralaSpania(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'procura_es',
      title: 'Date și documente necesare',
      items: [
        { id: 'pes13_text', name: 'Textul procurii sau modelul procurii', detail: 'Dacă nu ai textul, cere un model standard de la consulat' },
        { id: 'pes13_mandatar', name: 'Datele complete ale mandatarului', detail: 'Nume, CNP, adresă, act de identitate' },
        { id: 'pes13_id', name: 'Pașaport sau CI românească valabilă', detail: 'Original' },
      ],
    },
  ]
}

function checklistProcuraPensieSpania(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'procura_pensie_es',
      title: 'Date și documente pentru pensie',
      items: [
        { id: 'pes14_mandatar', name: 'Datele complete ale mandatarului', detail: 'Nume, CNP, adresă, serie CI' },
        { id: 'pes14_id', name: 'Pașaport sau CI românească valabilă', detail: 'Original' },
        { id: 'pes14_dosar', name: 'Număr dosar / decizie de pensionare', detail: 'Util dar nu obligatoriu' },
      ],
    },
  ]
}

function checklistProcuraVanzareSpania(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'procura_vanzare_es',
      title: 'Date și documente pentru procura imobiliară',
      items: [
        { id: 'pes15_text', name: 'Textul procurii de vânzare', detail: 'Ideal pregătit cu notarul din România' },
        { id: 'pes15_imobil', name: 'Datele exacte ale imobilului', detail: 'Adresă, număr cadastral, carte funciară' },
        { id: 'pes15_mandatar', name: 'Datele complete ale mandatarului', detail: 'Nume, CNP, adresă, CI' },
        { id: 'pes15_id', name: 'Pașaport sau CI românească valabilă', detail: 'Original' },
      ],
    },
  ]
}

function checklistTranscriereSpania(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'transcriere_es',
      title: 'Documente pentru transcriere',
      items: [
        { id: 'pes16_pluri', name: 'Certificado Plurilingüe', detail: 'Se depune direct, fără apostilă și fără traducere' },
        { id: 'pes16_literal', name: 'Certificado Literal', detail: 'Necesită apostila Haga de la TSJ și traducere autorizată în română' },
        { id: 'pes16_parinti', name: 'Actele de identitate ale părinților', detail: 'Originale' },
        { id: 'pes16_casatorie', name: 'Certificatul de căsătorie', detail: 'Dacă este cazul' },
      ],
    },
  ]
}

// ── Ghid #3 + #4 — pasaport domiciliu RO ─────────────────────────────────────

function checklistPasaportDomiciliuRo(consulate: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _s
  const fotoDetail = consulate === 'muenchen'
    ? 'Fotografiile se fac la ghișeul consulatului — nu le aduce proprii'
    : '2 foto color 3,5×4,5 cm, fond alb · Rossmann/DM (biometric) acceptate'
  return [
    {
      id: 'obligatorii',
      title: 'Documente obligatorii',
      items: [
        { id: 'p3_ci', name: 'Carte de identitate valabilă cu domiciliu România', detail: 'Original · trebuie să fie valabilă și cu numele actual' },
        { id: 'p3_pasaport', name: 'Pașaportul anterior', detail: 'Original · chiar expirat, dacă îl ai' },
        { id: 'p3_nastere', name: 'Certificat de naștere românesc', detail: 'Original · nu se acceptă plastifiat, rupt sau corectat' },
        { id: 'p3_foto', name: 'Fotografii', detail: fotoDetail },
      ],
    },
    {
      id: 'casatorie',
      title: 'Dacă ți-ai schimbat numele prin căsătorie',
      items: [
        { id: 'p3_casatorie', name: 'Certificat de căsătorie românesc', detail: 'Original · doar dacă ți-ai schimbat numele' },
      ],
    },
  ]
}

// ── Ghid #8 — buletin pierdut domiciliu RO ───────────────────────────────────

function checklistBuletinPierdutDomRo(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  const tipActSolicitat = _s.tipActSolicitat
  const documentPierdut = _s.documentPierdut
  return [
    {
      id: 'obligatorii',
      title: 'Documente obligatorii',
      items: [
        { id: 'b8_nastere', name: 'Certificat de naștere românesc', detail: 'Original · nu se acceptă plastifiat, rupt sau corectat' },
        { id: 'b8_pasaport', name: 'Pașaport valabil', detail: 'Original · folosit de funcționar pentru identificare, buletinul lipsind' },
        { id: 'b8_cf', name: 'Extras de carte funciară', detail: 'Max 30 zile · electronic (PDF ANCPI de pe epay.ancpi.ro, ~20 RON) sau hârtie' },
        { id: 'b8_taxa', name: 'Chitanța taxei', detail: '70 RON CEI (gratuit prima dată, până 30 iun 2026) / 40 RON CIS · plătită la CEC Bank sau SelfPay' },
      ],
    },
    {
      id: 'cei_cis',
      title: 'Alege între CEI și CIS',
      items: [
        ...(tipActSolicitat !== 'CIS'
          ? [{ id: 'b8_cei', name: 'CEI', detail: 'Prima emitere 14+ gratuită până la 30 iun 2026 · ridicare personală · setezi PIN-urile la ridicare' }]
          : []),
        ...(tipActSolicitat !== 'CEI'
          ? [{ id: 'b8_cis', name: 'CIS', detail: '40 RON · termen mai lung · poate fi ridicat prin procură specială notarială' }]
          : []),
      ],
    },
    {
      id: 'casatorie',
      title: 'Dacă ți-ai schimbat numele prin căsătorie',
      items: [
        { id: 'b8_casatorie', name: 'Certificat de căsătorie românesc', detail: 'Original · doar dacă ți-ai schimbat numele' },
      ],
    },
    {
      id: 'chirias',
      title: 'Dacă nu ești proprietarul locuinței',
      items: [
        { id: 'b8_gazduire', name: 'Consimțământul proprietarului/găzduitorului', detail: 'Dat la ghișeul SPCLEP, la notar sau — din Germania — la consulatul român (max 6 luni, tradus dacă e de la autorități germane)' },
        ...(documentPierdut === 'furat'
          ? [{ id: 'b8_politie', name: 'Sesizarea poliției', detail: 'Utilă dacă buletinul a fost furat, dar NU înlocuiește documentele SPCLEP; furtul se trece în declarația de la ghișeu' }]
          : documentPierdut === 'distrus'
            ? [{ id: 'b8_fragmente', name: 'Fragmentele documentului deteriorat', detail: 'Ia cu tine tot ce a rămas din buletin dacă documentul a fost distrus.' }]
            : [{ id: 'b8_declaratie', name: 'Detaliile despre pierdere', detail: 'Ține minte data aproximativă și împrejurările, pentru declarația de la ghișeu.' }]),
      ],
    },
  ]
}

function checklistBuletinExpiratFaraDomRo(_c: ConsulateId | null, s: SituationFlags): ChecklistSection[] {
  const isPrimulBuletin = s.primulBuletin === true
  const tipActSolicitat = s.tipActSolicitat
  return [
    {
      id: 'obligatorii',
      title: 'Documente obligatorii',
      items: [
        ...(!isPrimulBuletin
          ? [{ id: 'b5_ci', name: 'Buletinul expirat', detail: 'Original · dacă îl mai ai, îl duci la ghișeu pentru anulare' }]
          : []),
        { id: 'b5_nastere', name: 'Certificat de naștere românesc', detail: 'Original · nu se acceptă plastifiat sau deteriorat' },
        { id: 'b5_calatorie', name: 'Document de călătorie valabil', detail: 'Pașaport sau titlu de călătorie pentru drumul în România' },
      ],
    },
    {
      id: 'situatie',
      title: 'Înainte să pleci',
      items: [
        { id: 'b5_spclep', name: 'SPCLEP-ul competent', detail: 'Identifică localitatea ultimului domiciliu înregistrat în România' },
        { id: 'b5_casatorie', name: 'Certificat de căsătorie românesc', detail: 'Original · doar dacă ți-ai schimbat numele' },
        ...(tipActSolicitat === 'CEI'
          ? [{ id: 'b5_cei', name: 'Ai ales CEI', detail: 'Ridicarea va fi personală și vei seta PIN-urile după emitere.' }]
          : tipActSolicitat === 'CIS'
            ? [{ id: 'b5_cis', name: 'Ai ales CIS', detail: 'Termenul poate fi mai lung, dar ridicarea se poate organiza și prin procură specială notarială.' }]
            : []),
      ],
    },
  ]
}

function checklistBuletinExpiratDomRo(_c: ConsulateId | null, s: SituationFlags): ChecklistSection[] {
  const isPrimulBuletin = s.primulBuletin === true
  const tipActSolicitat = s.tipActSolicitat
  return [
    {
      id: 'obligatorii',
      title: 'Documente obligatorii',
      items: [
        ...(!isPrimulBuletin
          ? [{ id: 'b6_ci', name: 'Buletinul expirat', detail: 'Original · dacă îl mai ai, îl duci la ghișeu pentru anulare' }]
          : []),
        { id: 'b6_nastere', name: 'Certificat de naștere românesc', detail: 'Original · nu se acceptă plastifiat sau deteriorat' },
        { id: 'b6_adresa', name: 'Dovada adresei din România', detail: 'Extras CF recent, act de proprietate sau documentul cerut de SPCLEP-ul tău' },
        { id: 'b6_calatorie', name: 'Document de călătorie valabil', detail: 'Pașaport sau alt document cu care ajungi în România' },
      ],
    },
    {
      id: 'daca_nume_schimbat',
      title: 'Dacă ți-ai schimbat numele',
      items: [
        { id: 'b6_casatorie', name: 'Certificat de căsătorie românesc', detail: 'Original · dacă numele actual diferă de cel din certificatul de naștere' },
        ...(tipActSolicitat === 'CEI'
          ? [{ id: 'b6_cei', name: 'Ai ales CEI', detail: 'Ridicarea este personală și vei seta PIN-urile la final.' }]
          : tipActSolicitat === 'CIS'
            ? [{ id: 'b6_cis', name: 'Ai ales CIS', detail: 'Poți pregăti din timp o procură specială notarială dacă vrei ridicare prin altă persoană.' }]
            : []),
      ],
    },
  ]
}

function checklistBuletinPierdutFaraDomRo(_c: ConsulateId | null, s: SituationFlags): ChecklistSection[] {
  const documentPierdut = s.documentPierdut
  const tipActSolicitat = s.tipActSolicitat
  return [
    {
      id: 'obligatorii',
      title: 'Documente obligatorii',
      items: [
        { id: 'b7_nastere', name: 'Certificat de naștere românesc', detail: 'Original · baza de identificare dacă buletinul lipsește' },
        { id: 'b7_pasaport', name: 'Pașaport sau alt act românesc cu fotografie', detail: 'Original · dacă îl ai, ajută mult la identificare' },
        { id: 'b7_calatorie', name: 'Document de călătorie valabil', detail: 'Necesar pentru întoarcerea în România' },
      ],
    },
    {
      id: 'daca_lipsa',
      title: 'Dacă buletinul este pierdut sau furat',
      items: [
        ...(documentPierdut === 'distrus'
          ? [{ id: 'b7_fragmente', name: 'Fragmentele buletinului deteriorat', detail: 'Ia cu tine tot ce a rămas din documentul distrus.' }]
          : [{ id: 'b7_declaratie', name: 'Detaliile despre pierdere / furt', detail: 'Locul, data aproximativă și împrejurările vor fi cerute în declarația de la ghișeu' }]),
        ...(documentPierdut === 'furat'
          ? [{ id: 'b7_politie', name: 'Dovada poliției', detail: 'Utilă dacă a fost furat, chiar dacă nu este documentul principal cerut de SPCLEP' }]
          : []),
        ...(tipActSolicitat === 'CEI'
          ? [{ id: 'b7_cei', name: 'Ai ales CEI', detail: 'Ridicarea este personală și vei activa PIN-urile după emitere.' }]
          : tipActSolicitat === 'CIS'
            ? [{ id: 'b7_cis', name: 'Ai ales CIS', detail: 'Dacă nu poți reveni la ridicare, pregătește din timp o procură specială notarială.' }]
            : []),
      ],
    },
  ]
}

function checklistBuletinPrimulDe(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'obligatorii',
      title: 'Documente obligatorii',
      items: [
        { id: 'b9_nastere', name: 'Certificat de naștere românesc', detail: 'Original · dacă e deteriorat, solicită duplicat înainte de deplasare' },
        { id: 'b9_pasaport', name: 'Pașaport românesc valabil sau expirat', detail: 'Original · obligatoriu pentru schimbarea domiciliului din străinătate în România' },
        { id: 'b9_id_german', name: 'Act de identitate german', detail: 'Personalausweis sau pașaport german · original' },
        { id: 'b9_adresa', name: 'Dovada adresei de domiciliu în România', detail: 'Act de proprietate / declarație de primire în spațiu / contract de închiriere conform cerințelor SPCLEP' },
      ],
    },
    {
      id: 'spclep_corect',
      title: 'Alege ghișeul corect',
      items: [
        { id: 'b9_spclep_teritorial', name: 'SPCLEP-ul de pe raza adresei alese', detail: "Pentru schimbarea domiciliului din străinătate în România nu poți merge la orice SPCLEP; trebuie să depui exact la ghișeul competent pentru adresa pe care o stabilești ca domiciliu" },
      ],
    },
    {
      id: 'daca_fara_pasaport',
      title: 'Dacă nu ai pașaport românesc',
      items: [
        { id: 'b9_cetatenie', name: 'Certificat de cetățenie română', detail: 'Necesar dacă nu ai deloc pașaport românesc' },
      ],
    },
    {
      id: 'daca_casatorit',
      title: 'Dacă ți-ai schimbat numele prin căsătorie',
      items: [
        { id: 'b9_casatorie', name: 'Certificat de căsătorie românesc', detail: 'Original · certificatul german trebuie transcris în România înainte de procedură' },
      ],
    },
  ]
}

function checklistBuletinPrimulDeB(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _c
  void _s
  return [
    {
      id: 'obligatorii',
      title: 'Documente obligatorii',
      items: [
        { id: 'b10_nastere', name: 'Certificat de naștere românesc transcris', detail: 'Original · trebuie să conțină CNP-ul · dacă e deteriorat, solicită duplicat înainte de deplasare' },
        { id: 'b10_rezidenta', name: 'Dovada rezidenței în Germania', detail: 'Pașaport CRDS valabil sau Anmeldung / Meldebescheinigung · original · fără apostilă și fără traducere' },
        { id: 'b10_programare', name: 'Programare activă pe hub.mai.gov.ro', detail: 'Obligatorie pentru depunerea CEI · confirmată prin email' },
      ],
    },
    {
      id: 'rezidenta_germania',
      title: 'Document german acceptat direct',
      items: [
        { id: 'b10_fara_traducere', name: 'Anmeldung / Meldebescheinigung', detail: 'Se acceptă în original, fără apostilă și fără traducere autorizată în română' },
      ],
    },
    {
      id: 'daca_casatorit',
      title: 'Dacă ți-ai schimbat numele prin căsătorie',
      items: [
        { id: 'b10_casatorie', name: 'Certificat de căsătorie românesc', detail: 'Original · doar dacă ți-ai schimbat numele prin căsătorie' },
      ],
    },
    {
      id: 'minor',
      title: 'Dacă ai între 14 și 18 ani',
      items: [
        { id: 'b10_parinte', name: 'Prezența unuia dintre părinți la ghișeu', detail: 'Obligatorie la depunere pentru minorii 14–18 ani' },
      ],
    },
  ]
}

function getTravelDocumentSections(
  consulate: ConsulateId | null,
  situation: SituationFlags,
  prefix: 'tc11' | 'tc12'
): ChecklistSection[] {
  const tipDocumentLipsa = situation.tipDocumentLipsa ?? 'ambele'
  const includePassport = tipDocumentLipsa === 'pasaport' || tipDocumentLipsa === 'ambele'
  const includeBuletin = tipDocumentLipsa === 'buletin' || tipDocumentLipsa === 'ambele'

  const sections: ChecklistSection[] = []

  if (includePassport) {
    sections.push({
      id: `${prefix}_pasaport`,
      title: 'Dacă îți lipsește pașaportul',
      items: [
        {
          id: `${prefix}_pasaport_doc`,
          name: 'Pașaport românesc expirat sau orice detaliu despre documentul pierdut/furat',
          detail: 'Dacă îl ai, ia documentul expirat. Dacă nu îl mai ai, ajută să știi seria, numărul sau măcar anul aproximativ al emiterii.',
        },
      ],
    })
  }

  if (includeBuletin) {
    sections.push({
      id: `${prefix}_buletin`,
      title: 'Dacă îți lipsește buletinul',
      items: [
        {
          id: `${prefix}_buletin_doc`,
          name: 'Buletin expirat sau alt act românesc cu datele tale',
          detail: 'Poate fi buletinul expirat, permisul românesc sau un alt document care ajută consulatul să te identifice rapid.',
        },
      ],
    })
  }

  if (tipDocumentLipsa === 'ambele') {
    sections.push({
      id: `${prefix}_ambele`,
      title: 'Dacă îți lipsesc ambele documente',
      items: [
        {
          id: `${prefix}_ambele_nastere`,
          name: 'Certificat de naștere românesc sau alt document cu CNP',
          detail: 'Foarte util când nu mai ai nici pașaport, nici buletin la tine.',
        },
      ],
    })
  }

  if (consulate === 'muenchen') {
    sections.push({
      id: `${prefix}_foto`,
      title: 'Fotografii pentru München',
      items: [
        {
          id: `${prefix}_foto_muenchen`,
          name: '2 fotografii biometrice color 3,5 × 4,5 cm',
          detail: 'Tipărite, nu pe telefon.',
        },
      ],
    })
  } else if (consulate === 'stuttgart') {
    sections.push({
      id: `${prefix}_foto`,
      title: 'Fotografii pentru Stuttgart',
      items: [
        {
          id: `${prefix}_foto_stuttgart`,
          name: 'Regula pentru fotografie',
          detail: 'Adulți și minori 14+: foto la ghișeu. Minori sub 14 ani: 1 fotografie color 3,5 × 4,5 cm pe hârtie.',
        },
      ],
    })
  } else {
    sections.push({
      id: `${prefix}_foto`,
      title: 'Fotografie',
      items: [
        {
          id: `${prefix}_foto_default`,
          name: 'Regula pentru fotografie',
          detail: getTravelPhotoRule(consulate),
        },
      ],
    })
  }

  return sections
}

function checklistTitluCalatorieUrgenta(consulate: ConsulateId | null, situation: SituationFlags): ChecklistSection[] {
  return [
    {
      id: 'identitate',
      title: 'Documente de identificare',
      items: [
        { id: 'tc11_doc_romanesc', name: 'Un document românesc de identificare', detail: 'Original · CI/buletin expirat, pașaport românesc expirat, permis românesc sau certificat de naștere românesc cu CNP' },
        { id: 'tc11_foto', name: 'Fotografii biometrice', detail: getTravelPhotoRule(consulate) },
      ],
    },
    ...getTravelDocumentSections(consulate, situation, 'tc11'),
    {
      id: 'furt',
      title: 'Dacă documentul a fost furat',
      items: [
        { id: 'tc11_politie', name: 'Diebstahlsanzeige de la poliția locală', detail: 'Obligatorie înainte de consulat' },
        { id: 'tc11_traducere', name: 'Traducere în română', detail: getTravelTranslationRule(consulate) },
      ],
    },
  ]
}

function checklistTitluCalatorie(consulate: ConsulateId | null, situation: SituationFlags): ChecklistSection[] {
  return [
    {
      id: 'identitate',
      title: 'Documente de identificare',
      items: [
        { id: 'tc12_doc_romanesc', name: 'Un document românesc de identificare', detail: 'Original + 1 copie · pașaport expirat, CI/buletin expirat sau permis de conducere românesc' },
        { id: 'tc12_foto', name: 'Fotografie / reguli foto', detail: getTravelPhotoRule(consulate) },
      ],
    },
    ...getTravelDocumentSections(consulate, situation, 'tc12'),
    {
      id: 'fara_act',
      title: 'Dacă nu mai ai niciun act de identitate',
      items: [
        { id: 'tc12_nastere', name: 'Certificat de naștere românesc sau act cu CNP', detail: 'Original + 1 copie · folosit pentru identificare în lipsa unui act cu fotografie' },
      ],
    },
    {
      id: 'furt',
      title: 'Dacă documentul a fost furat',
      items: [
        { id: 'tc12_politie', name: 'Adeverință de la poliția locală', detail: 'Verlustanzeige / Diebstahlsanzeige' },
        { id: 'tc12_traducere', name: 'Traducere în română', detail: getTravelTranslationRule(consulate) },
      ],
    },
  ]
}

function checklistProcuraMostenire(c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _s
  return [
    {
      id: 'identitate',
      title: 'Documente de bază',
      items: [
        { id: 'pm14_id', name: 'Act de identitate valabil', detail: 'Original · pașaport sau carte de identitate românească valabilă' },
        { id: 'pm14_mandatar', name: 'Datele mandatarului din România', detail: 'Nume complet, CNP, serie și număr CI, adresă exactă' },
        { id: 'pm14_notar', name: 'Datele notarului din România', detail: 'Nume + localitate + date de contact + cerințele pentru procura de succesiune' },
      ],
    },
    {
      id: 'succesiune',
      title: 'Documente utile pentru dosarul de succesiune',
      items: [
        { id: 'pm14_deces', name: 'Certificatul de deces', detail: getMostenireDeathCertificateRule(c) },
        { id: 'pm14_rudenie', name: 'Acte care dovedesc calitatea de moștenitor', detail: 'Certificat de naștere / căsătorie, după caz · verifică exact lista cu notarul' },
      ],
    },
  ]
}

function checklistProcuraVanzare(consulate: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _s
  let plataDetail = '3€ RNNEPR, conform regulilor consulatului tău'

  if (consulate === 'bonn') {
    plataDetail = '3€ RNNEPR · EC-Karte la ghișeu în ziua programării'
  } else if (consulate === 'muenchen') {
    plataDetail = '3€ RNNEPR · numerar la ghișeu în ziua programării'
  } else if (consulate === 'stuttgart') {
    plataDetail = '3€ RNNEPR · POS la ghișeu sau virament bancar cu cel puțin 3 zile înainte'
  } else if (consulate === 'berlin') {
    plataDetail = '3€ RNNEPR · numai virament bancar, cu 3–4 zile lucrătoare înainte de programare'
  }

  return [
    {
      id: 'obligatorii',
      title: 'Documente obligatorii',
      items: [
        { id: 'pv13_id', name: 'Act de identitate valabil', detail: 'Original · pașaport sau carte de identitate românească' },
        { id: 'pv13_mandatar', name: 'Datele complete ale mandatarului', detail: 'Nume, CNP, serie și număr CI/pașaport, dată și loc eliberare, adresă' },
        { id: 'pv13_proprietate', name: 'Copie după actul de proprietate', detail: 'Contract, certificat de moștenitor, titlu de proprietate sau alt act care dovedește proprietatea' },
        { id: 'pv13_cadastru', name: 'Cadastru și încheiere de intabulare', detail: 'Dacă există · recomandate pentru redactarea corectă a procurii' },
      ],
    },
    {
      id: 'continut',
      title: 'Înainte de programare',
      items: [
        { id: 'pv13_notar', name: 'Instrucțiunile notarului din România', detail: 'Ce puteri exacte trebuie să conțină procura pentru tranzacție' },
        { id: 'pv13_puteri', name: 'Nota cu conținutul procurii', detail: 'Imobil, mandatar, preț fix sau negociere, încasarea banilor, predarea imobilului' },
        { id: 'pv13_soti', name: 'Verificare bun comun', detail: 'Dacă imobilul este bun comun, ambii soți trebuie să dea procură' },
      ],
    },
    {
      id: 'plata',
      title: 'Plata și programarea',
      items: [
        { id: 'pv13_plata', name: 'Tarif publicitate notarială (RNNEPR)', detail: plataDetail },
        ...(consulate === 'bonn'
          ? [{ id: 'pv13_bonn', name: 'Regulă specială pentru Bonn', detail: 'Încarcă din timp pe econsulat copia actului de proprietate și copia actului mandatarului pentru eliberare în aceeași zi' }]
          : []),
      ],
    },
  ]
}

function checklistProcuraGenerala(consulate: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _s
  return [
    {
      id: 'identitate',
      title: 'Date și documente obligatorii',
      items: [
        { id: 'pg15_id', name: 'Act de identitate românesc valabil', detail: 'Original · pașaport sau carte de identitate' },
        { id: 'pg15_mandatar', name: 'Datele complete ale mandatarului', detail: 'Nume complet, adresă, CNP, serie și număr act identitate, data și locul eliberării' },
        { id: 'pg15_copie', name: 'Copie CI mandatar', detail: 'Recomandată · nu obligatorie, dar ajută la redactare' },
      ],
    },
    {
      id: 'continut',
      title: 'Conținutul procurii',
      items: [
        { id: 'pg15_scop', name: 'Instrucțiunile autorității / notarului / băncii', detail: 'Ce operațiuni exacte trebuie să acopere procura' },
        { id: 'pg15_divort', name: 'Limită pentru divorțul notarial', detail: 'Procura acoperă depunerea cererii, nu și ridicarea certificatului final de divorț' },
        { id: 'pg15_banca', name: 'Limită pentru bănci', detail: 'ING nu acceptă procuri pentru deschidere cont; la celelalte bănci specifici operațiunile dorite' },
      ],
    },
    {
      id: 'plata',
      title: 'Plata și trimiterea în România',
      items: [
        { id: 'pg15_plata', name: 'Regula de plată', detail: `Procură obișnuită = gratuită. ${getRnneprPaymentRule(consulate)}` },
        { id: 'pg15_original', name: 'Originalul procurii', detail: 'Trebuie trimis prin curier mandatarului; fără original, procura nu produce efecte' },
        { id: 'pg15_apostila', name: 'Apostilă', detail: 'Nu este necesară dacă procura e făcută la consulatul României' },
      ],
    },
  ]
}

function checklistTranscriereNastere(consulate: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  void _s
  return [
    {
      id: 'copil',
      title: 'Documentele copilului',
      items: [
        { id: 'tn16_formulea', name: 'Formule A sau Geburtsurkunde', detail: 'Formule A = fără apostilă și fără traducere · Geburtsurkunde = apostilă + traducere autorizată' },
        ...(getBirthBerlinNameRule(consulate)
          ? [{ id: 'tn16_patronimic', name: 'Dacă apare și numele tatălui în acte', detail: getBirthBerlinNameRule(consulate)! }]
          : []),
      ],
    },
    {
      id: 'parinti',
      title: 'Actele părinților',
      items: [
        { id: 'tn16_id', name: 'Acte de identitate valabile ale ambilor părinți', detail: 'Original · CI sau pașaport românesc' },
        { id: 'tn16_crds', name: 'Dovada domiciliului în Germania', detail: 'Necesară dacă un părinte are pașaport CRDS: Meldebescheinigung / Anmeldung / Personalausweis german' },
        { id: 'tn16_nastere_parinti', name: 'Certificatele de naștere românești ale părinților', detail: getBirthParentCertificatesRule(consulate) },
        { id: 'tn16_casatorie', name: 'Certificat de căsătorie românesc sau act de divorț', detail: 'Original · dacă părinții sunt căsătoriți sau divorțați' },
      ],
    },
    {
      id: 'particularitati',
      title: 'Particularități importante',
      items: [
        { id: 'tn16_casatorie_neinregistrata', name: 'Căsătorie germană netranscrisă', detail: 'Dacă părinții s-au căsătorit în Germania și căsătoria nu este înregistrată în România, trebuie transcrisă mai întâi' },
        ...(getBirthPostalRule(consulate)
          ? [{ id: 'tn16_stuttgart', name: 'Opțiune de poștă', detail: getBirthPostalRule(consulate)! }]
          : []),
      ],
    },
  ]
}

// ── Generic fallback ──────────────────────────────────────────────────────────

const CHECKLISTS: Record<string, ChecklistFn> = {
  'pasaport-crds-de': checklistPasaportCrds,
  'pasaport-crds-de-pierdut': checklistPasaportCrdsPierdut,
  'pasaport-crds-nou-de': checklistPasaportCrds,
  'pasaport-minor-crds-de': checklistPasaportMinorCrds,
  'pasaport-de-cu-domiciliu': checklistPasaportDomiciliuRo,
  'pasaport-de-cu-domiciliu-pierdut': checklistPasaportDomiciliuRo,
  'buletin-de-fara-domiciliu': checklistBuletinExpiratFaraDomRo,
  'buletin-de-cu-domiciliu': checklistBuletinExpiratDomRo,
  'buletin-de-fara-domiciliu-pierdut': checklistBuletinPierdutFaraDomRo,
  'buletin-de-cu-domiciliu-pierdut': checklistBuletinPierdutDomRo,
  'buletin-de-primul-de': checklistBuletinPrimulDe,
  'buletin-de-primul-de-b': checklistBuletinPrimulDeB,
  'titlu-calatorie-urgenta-de': checklistTitluCalatorieUrgenta,
  'titlu-calatorie-de': checklistTitluCalatorie,
  'procura-vanzare-de': checklistProcuraVanzare,
  'procura-mostenire-de': checklistProcuraMostenire,
  'procura-generala-de': checklistProcuraGenerala,
  'transcriere-nastere-de': checklistTranscriereNastere,
  'pasaport-crds-it': checklistPasaportCrds,
  'pasaport-crds-it-pierdut': checklistPasaportCrdsPierdut,
  'pasaport-crds-nou-it': checklistPasaportCrds,
  'pasaport-minor-crds-it': checklistPasaportMinorCrds,
  'pasaport-it-cu-domiciliu': checklistPasaportDomiciliuRo,
  'pasaport-it-cu-domiciliu-pierdut': checklistPasaportDomiciliuRo,
  'buletin-it-fara-domiciliu': checklistBuletinExpiratFaraDomRo,
  'buletin-it-cu-domiciliu': checklistBuletinExpiratDomRo,
  'buletin-it-fara-domiciliu-pierdut': checklistBuletinPierdutFaraDomRo,
  'buletin-it-cu-domiciliu-pierdut': checklistBuletinPierdutDomRo,
  'buletin-it-primul-it': checklistBuletinPrimulDe,
  'buletin-it-primul-it-b': checklistBuletinPrimulDeB,
  'titlu-calatorie-urgenta-it': checklistTitluCalatorieUrgenta,
  'titlu-calatorie-it': checklistTitluCalatorie,
  'procura-vanzare-it': checklistProcuraVanzare,
  'procura-mostenire-it': checklistProcuraMostenire,
  'procura-generala-it': checklistProcuraGenerala,
  'transcriere-nastere-it': checklistTranscriereNastere,
  'pasaport-crds-es': checklistPasaportCrdsSpania,
  'pasaport-es-cu-domiciliu': checklistPasaportDomiciliuRoSpania,
  'pasaport-crds-es-pierdut': checklistPasaportCrdsPierdutSpania,
  'pasaport-es-cu-domiciliu-pierdut': checklistPasaportDomiciliuRoPierdutSpania,
  'pasaport-crds-pierdut-combinat-es': checklistPasaportCrdsPierdutSpania,
  'buletin-es-cu-domiciliu': checklistBuletinAdultSpania,
  'buletin-es-cu-domiciliu-minor': checklistBuletinMinorSpania,
  'buletin-es-majorat': checklistBuletinMajoratSpania,
  'buletin-es-fara-domiciliu-minor': checklistBuletinMinorCrdsSpania,
  'buletin-es-fara-domiciliu': checklistBuletinCrdsSpania,
  'buletin-es-pierdut': checklistBuletinPierdutSpania,
  'titlu-calatorie-es': checklistTitluCalatorieSpania,
  'titlu-calatorie-urgenta-es': checklistTitluCalatorieUrgentaSpania,
  'procura-generala-es': checklistProcuraGeneralaSpania,
  'procura-pensie-es': checklistProcuraPensieSpania,
  'procura-vanzare-es': checklistProcuraVanzareSpania,
  'transcriere-nastere-es': checklistTranscriereSpania,
}
