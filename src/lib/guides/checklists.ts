import type { ConsulateId, SituationFlags } from '@/types'

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
  return fn(consulate, situation)
}

type ChecklistFn = (c: ConsulateId | null, s: SituationFlags) => ChecklistSection[]

// ── Ghid #1 + #2 — pasaport CRDS ─────────────────────────────────────────────

function checklistPasaportCrds(consulate: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  const fotoDetail = consulate === 'bonn'
    ? '2 foto color 3,5×4,5 cm, fond alb · Rossmann/DM (biometric) acceptate'
    : 'Fotografiile se fac la ghișeul consulatului — nu le aduce proprii'
  return [
    {
      id: 'obligatorii',
      title: 'Documente obligatorii',
      items: [
        { id: 'p1_pasaport', name: 'Pașaportul expirat sau distrus', detail: 'Original · chiar dacă e în stare proastă' },
        { id: 'p1_ci', name: 'Cartea de identitate românească', detail: 'Original · chiar expirată · va fi anulată la ridicare' },
        { id: 'p1_nastere', name: 'Certificat de naștere românesc', detail: 'Original · nu se acceptă plastifiat, rupt sau corectat' },
        { id: 'p1_domiciliu', name: 'Document domiciliu Germania', detail: 'Meldebescheinigung / Anmeldung / Personalausweis german · original · max 5 ani' },
        { id: 'p1_foto', name: 'Fotografii', detail: fotoDetail },
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

// ── Ghid #3 + #4 — pasaport domiciliu RO ─────────────────────────────────────

function checklistPasaportDomiciliuRo(consulate: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
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
      ],
    },
  ]
}

function checklistBuletinPrimulDe(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
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

function checklistTitluCalatorieUrgenta(consulate: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  const fotoDetail = consulate === 'muenchen'
    ? '2 fotografii biometrice color 3,5 × 4,5 cm · tipărite, nu pe telefon'
    : 'La Bonn, Stuttgart și Berlin fotografia se preia la ghișeu; dacă nu ești sigur, adu 2 fotografii biometrice de rezervă'

  return [
    {
      id: 'identitate',
      title: 'Documente de identificare',
      items: [
        { id: 'tc11_doc_romanesc', name: 'Un document românesc de identificare', detail: 'Original · CI/buletin expirat, pașaport românesc expirat, permis românesc sau certificat de naștere românesc cu CNP' },
        { id: 'tc11_foto', name: 'Fotografii biometrice', detail: fotoDetail },
      ],
    },
    {
      id: 'furt',
      title: 'Dacă documentul a fost furat',
      items: [
        { id: 'tc11_politie', name: 'Diebstahlsanzeige de la poliția locală', detail: 'Obligatorie înainte de consulat' },
        { id: 'tc11_traducere', name: 'Traducere autorizată în română', detail: 'Obligatorie la München, Stuttgart și Berlin; recomandată și la Bonn' },
      ],
    },
  ]
}

// ── Generic fallback ──────────────────────────────────────────────────────────

function checklistGeneric(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  return [
    {
      id: 'obligatorii',
      title: 'Documente necesare',
      items: [
        { id: 'g_nastere', name: 'Certificat de naștere românesc', detail: 'Original' },
        { id: 'g_identitate', name: 'Act de identitate', detail: 'Original' },
      ],
    },
  ]
}

const CHECKLISTS: Record<string, ChecklistFn> = {
  'pasaport-crds-de': checklistPasaportCrds,
  'pasaport-crds-nou-de': checklistPasaportCrds,
  'pasaport-de-cu-domiciliu': checklistPasaportDomiciliuRo,
  'pasaport-de-cu-domiciliu-pierdut': checklistPasaportDomiciliuRo,
  'buletin-de-fara-domiciliu': checklistGeneric,
  'buletin-de-cu-domiciliu': checklistGeneric,
  'buletin-de-fara-domiciliu-pierdut': checklistGeneric,
  'buletin-de-cu-domiciliu-pierdut': checklistBuletinPierdutDomRo,
  'buletin-de-primul-de': checklistBuletinPrimulDe,
  'buletin-de-primul-de-b': checklistBuletinPrimulDeB,
  'titlu-calatorie-urgenta-de': checklistTitluCalatorieUrgenta,
}
