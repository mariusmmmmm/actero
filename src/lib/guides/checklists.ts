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
      id: 'cei_cis',
      title: 'Alege între CEI și CIS',
      items: [
        { id: 'b8_cei', name: 'CEI', detail: 'Prima emitere 14+ gratuită până la 30 iun 2026 · ridicare personală · setezi PIN-urile la ridicare' },
        { id: 'b8_cis', name: 'CIS', detail: '40 RON · termen mai lung · întreabă la depunere dacă localitatea permite ridicare prin procură specială' },
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
        { id: 'b8_politie', name: 'Sesizarea poliției', detail: 'Utilă dacă buletinul a fost furat, dar NU înlocuiește documentele SPCLEP; furtul se trece în declarația de la ghișeu' },
      ],
    },
  ]
}

function checklistBuletinExpiratFaraDomRo(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  return [
    {
      id: 'obligatorii',
      title: 'Documente obligatorii',
      items: [
        { id: 'b5_ci', name: 'Buletinul expirat', detail: 'Original · dacă îl mai ai, îl duci la ghișeu pentru anulare' },
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
      ],
    },
  ]
}

function checklistBuletinExpiratDomRo(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  return [
    {
      id: 'obligatorii',
      title: 'Documente obligatorii',
      items: [
        { id: 'b6_ci', name: 'Buletinul expirat', detail: 'Original · dacă îl mai ai, îl duci la ghișeu pentru anulare' },
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
      ],
    },
  ]
}

function checklistBuletinPierdutFaraDomRo(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
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
        { id: 'b7_declaratie', name: 'Detaliile despre pierdere / furt', detail: 'Locul, data aproximativă și împrejurările vor fi cerute în declarația de la ghișeu' },
        { id: 'b7_politie', name: 'Dovada poliției', detail: 'Utilă dacă a fost furat, chiar dacă nu este documentul principal cerut de SPCLEP' },
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

function checklistTitluCalatorie(consulate: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  let fotoDetail = 'Verifică regulile consulatului tău pentru fotografie'

  if (consulate === 'bonn') {
    fotoDetail = 'Fotografia se preia electronic la ghișeu — nu aduci fotografii proprii'
  } else if (consulate === 'muenchen') {
    fotoDetail = '2 fotografii biometrice color 3,5 × 4,5 cm · tipărite, nu pe telefon'
  } else if (consulate === 'stuttgart') {
    fotoDetail = 'Adulți: foto la ghișeu; minori sub 14 ani: 1 fotografie color 3,5 × 4,5 cm pe hârtie'
  } else if (consulate === 'berlin') {
    fotoDetail = 'Fotografia se preia electronic la ghișeu — nu aduci fotografii proprii'
  }

  return [
    {
      id: 'identitate',
      title: 'Documente de identificare',
      items: [
        { id: 'tc12_doc_romanesc', name: 'Un document românesc de identificare', detail: 'Original + 1 copie · pașaport expirat, CI/buletin expirat sau permis de conducere românesc' },
        { id: 'tc12_foto', name: 'Fotografie / reguli foto', detail: fotoDetail },
      ],
    },
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
        { id: 'tc12_traducere', name: 'Traducere autorizată în română', detail: 'Obligatorie la München, Stuttgart și Berlin; la Bonn nu este cerută' },
      ],
    },
  ]
}

function checklistProcuraMostenire(_c: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
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
        { id: 'pm14_deces', name: 'Certificatul de deces', detail: 'Original sau copie · verifică înainte cu notarul dacă trebuie și la consulat' },
        { id: 'pm14_rudenie', name: 'Acte care dovedesc calitatea de moștenitor', detail: 'Certificat de naștere / căsătorie, după caz · verifică exact lista cu notarul' },
      ],
    },
  ]
}

function checklistProcuraVanzare(consulate: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
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
        { id: 'pv13_bonn', name: 'Regulă specială Bonn', detail: 'Încarcă din timp pe econsulat copia actului de proprietate și copia CI a mandatarului pentru eliberare în aceeași zi' },
      ],
    },
  ]
}

function checklistProcuraGenerala(consulate: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  let plataDetail = 'Procură obișnuită = gratuită · dacă se aplică taxa RNNEPR de 3€, plata se face prin virament bancar în avans'

  if (consulate === 'berlin') {
    plataDetail = 'Berlin: procură obișnuită = gratuită · taxa RNNEPR de 3€ se plătește numai prin virament bancar, cu 3–4 zile înainte'
  } else if (consulate === 'bonn' || consulate === 'muenchen' || consulate === 'stuttgart') {
    plataDetail = 'Bonn / München / Stuttgart: procură obișnuită = gratuită · dacă se aplică taxa RNNEPR de 3€, verifici IBAN-ul în econsulat și plătești prin virament în avans'
  }

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
        { id: 'pg15_plata', name: 'Regula de plată', detail: plataDetail },
        { id: 'pg15_original', name: 'Originalul procurii', detail: 'Trebuie trimis prin curier mandatarului; fără original, procura nu produce efecte' },
        { id: 'pg15_apostila', name: 'Apostilă', detail: 'Nu este necesară dacă procura e făcută la consulatul României' },
      ],
    },
  ]
}

function checklistTranscriereNastere(consulate: ConsulateId | null, _s: SituationFlags): ChecklistSection[] {
  let regulaParinti = 'Adu certificatele de naștere românești ale ambilor părinți — cel mai sigur este să le ai indiferent de consulat.'

  if (consulate === 'bonn') {
    regulaParinti = 'Certificatele de naștere românești ale părinților sunt necesare dacă CI/pașaport nu conțin locul nașterii.'
  } else if (consulate === 'muenchen') {
    regulaParinti = 'Certificatele de naștere românești ale părinților sunt obligatorii dacă ambii părinți sunt cetățeni români.'
  } else if (consulate === 'stuttgart') {
    regulaParinti = 'Certificatele de naștere românești ale părinților sunt necesare dacă părinții nu sunt căsătoriți.'
  } else if (consulate === 'berlin') {
    regulaParinti = 'Certificatele de naștere românești ale părinților sunt obligatorii fără excepție.'
  }

  return [
    {
      id: 'copil',
      title: 'Documentele copilului',
      items: [
        { id: 'tn16_formulea', name: 'Formule A sau Geburtsurkunde', detail: 'Formule A = fără apostilă și fără traducere · Geburtsurkunde = apostilă + traducere autorizată' },
        { id: 'tn16_patronimic', name: 'Excepție Berlin pentru patronimice', detail: 'Dacă un părinte are nume patronimic, la Berlin nu merge Formule A — ai nevoie de Geburtsurkunde + apostilă + traducere' },
      ],
    },
    {
      id: 'parinti',
      title: 'Actele părinților',
      items: [
        { id: 'tn16_id', name: 'Acte de identitate valabile ale ambilor părinți', detail: 'Original · CI sau pașaport românesc' },
        { id: 'tn16_crds', name: 'Dovada domiciliului în Germania', detail: 'Necesară dacă un părinte are pașaport CRDS: Meldebescheinigung / Anmeldung / Personalausweis german' },
        { id: 'tn16_nastere_parinti', name: 'Certificatele de naștere românești ale părinților', detail: regulaParinti },
        { id: 'tn16_casatorie', name: 'Certificat de căsătorie românesc sau act de divorț', detail: 'Original · dacă părinții sunt căsătoriți sau divorțați' },
      ],
    },
    {
      id: 'particularitati',
      title: 'Particularități importante',
      items: [
        { id: 'tn16_casatorie_neinregistrata', name: 'Căsătorie germană netranscrisă', detail: 'Dacă părinții s-au căsătorit în Germania și căsătoria nu este înregistrată în România, trebuie transcrisă mai întâi' },
        { id: 'tn16_stuttgart', name: 'Opțiune poștă la Stuttgart', detail: 'Dacă vrei certificatul prin poștă, aduci la depunere plic DIN C5 autoadresat, timbrat 6,65 EUR' },
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
}
