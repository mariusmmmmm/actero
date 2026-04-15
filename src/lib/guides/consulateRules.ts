import type { ConsulateId } from '@/types'
import { getConsulateById, getConsulateCountry } from '@/lib/utils/deriveConsulate'

type RuleSet = {
  shortName?: string
  passportLostTranslationRule?: string
  travelTranslationRule?: string
  travelPhotoRule?: string
  travelIssuanceRule?: string
  travelPickupTeaser?: string
  travelBookingRule?: string
  travelBookingUrgentRule?: string
  travelBadgeSummary?: string
  travelBadgeSummaryUrgent?: string
  rnneprPaymentRule?: string
  procuraSalePrescanRule?: string | null
  mostenireDeathCertificateRule?: string
  birthParentCertificatesRule?: string
  birthBerlinNameRule?: string | null
  birthProcessingRule?: string
  birthPickupRule?: string
  birthPostalRule?: string | null
  birthSameDayPassportRule?: string | null
  travelBonnFridayRule?: string | null
}

const COUNTRY_DEFAULT_RULES: Record<'de' | 'it', RuleSet> = {
  de: {
    passportLostTranslationRule: 'Pentru pașaport furat · ai nevoie de adeverința poliției + traducere autorizată în română.',
    travelTranslationRule: 'Dacă documentul a fost furat, ai nevoie de adeverința poliției + traducere autorizată în română.',
    travelPhotoRule: 'Fotografia se preia la ghișeu — nu trebuie să aduci fotografii proprii.',
    travelIssuanceRule: 'Titlul se eliberează, de regulă, în aceeași zi.',
    travelBookingRule: 'Titlul de călătorie se obține, de regulă, fără programare, direct la consulat.',
    travelBookingUrgentRule: 'Nu ai nevoie de econsulat.ro și nu există programare online pentru titlul de călătorie. Te prezinți direct la consulat în intervalul dedicat.',
    travelBadgeSummary: 'fără programare · aceeași zi în majoritatea cazurilor',
    travelBadgeSummaryUrgent: 'fără programare · aceeași zi',
    mostenireDeathCertificateRule: 'Verifică înainte dacă trebuie să ai și copia certificatului de deces la ghișeu.',
    birthParentCertificatesRule: 'Adu certificatele de naștere românești ale părinților dacă nu ești sigur de regula consulatului tău.',
  },
  it: {
    passportLostTranslationRule: 'Pentru pașaport furat · ai nevoie de adeverința poliției + traducere autorizată în română, făcută de un traducător autorizat de Ministerul Justiției.',
    travelTranslationRule: 'Dacă documentul a fost furat, ai nevoie de adeverința poliției. În Italia, pentru titlul de călătorie nu se cere de regulă traducere în română.',
    travelPhotoRule: 'Adulții fac fotografia la ghișeu. Pentru minorii sub 14 ani, verifică regula exactă în cardul consulatului.',
    travelIssuanceRule: 'Titlul se eliberează, de regulă, în aceeași zi după verificarea identității și a documentelor de călătorie.',
    travelPickupTeaser: 'Vezi regula exactă de preluare și eliberare pentru consulatul tău.',
    travelBookingRule: 'Verifică direct dacă titlul de călătorie se face cu programare sau în interval walk-in la consulatul tău.',
    travelBookingUrgentRule: 'Pentru urgențe, verifică direct dacă poți merge fără programare la consulatul tău.',
    travelBadgeSummary: 'verifică regula consulatului înainte de drum',
    travelBadgeSummaryUrgent: 'verifică regula consulatului · posibil aceeași zi',
    rnneprPaymentRule: 'Taxa RNNEPR pentru procuri se plătește, de regulă, prin virament bancar în avans.',
    mostenireDeathCertificateRule: 'Verifică înainte dacă trebuie să ai și copia certificatului de deces la ghișeu.',
    birthParentCertificatesRule: 'Confirmă direct cu consulatul și, dacă poți, du certificatele de naștere ale părinților.',
  },
}

const CONSULATE_RULES: Record<ConsulateId, RuleSet> = {
  bonn: {
    shortName: 'Bonn',
    passportLostTranslationRule: 'Pentru pașaport furat · ai nevoie de adeverința poliției. Dacă vrei să fii complet acoperit, poți veni și cu traducerea în română.',
    travelTranslationRule: 'Dacă documentul a fost furat, ai nevoie de adeverința poliției. Dacă vrei să fii complet acoperit, poți veni și cu traducerea în română.',
    travelIssuanceRule: 'De regulă ridici titlul în aceeași zi dacă te prezinți dimineața, de luni până joi. Dacă depui vineri, de obicei revii luni la ridicare.',
    travelPickupTeaser: 'Bonn: de regulă în aceeași zi dacă mergi dimineața, de luni până joi; vineri ridicarea poate rămâne pentru luni.',
    travelBonnFridayRule: 'Dacă te prezinți vineri dimineața, de regulă ridici titlul luni după-amiaza.',
    rnneprPaymentRule: 'Taxa de 3€ RNNEPR se plătește astfel la Bonn: virament bancar în avans pentru taxa de 3€ RNNEPR.',
    procuraSalePrescanRule: 'La Bonn, pentru eliberare în aceeași zi, încarci din timp pe econsulat copia actului de proprietate și copia actului mandatarului.',
    mostenireDeathCertificateRule: 'Ia la tine și copia certificatului de deces. Actele de rudenie rămân utile pentru notarul din România.',
    birthParentCertificatesRule: 'Certificatele de naștere românești ale părinților sunt necesare dacă actele lor nu conțin locul nașterii.',
  },
  muenchen: {
    shortName: 'München',
    travelPhotoRule: 'Ai nevoie de 2 fotografii biometrice color, tipărite.',
    travelIssuanceRule: 'Titlul se eliberează în aceeași zi, în programul normal al consulatului.',
    travelPickupTeaser: 'München: de regulă în aceeași zi, în programul normal al consulatului.',
    mostenireDeathCertificateRule: 'Verifică înainte cu notarul și cu consulatul dacă vor și copia certificatului de deces la ghișeu.',
    birthParentCertificatesRule: 'Certificatele de naștere românești ale părinților sunt necesare dacă ambii părinți sunt cetățeni români.',
    birthSameDayPassportRule: 'La München, dacă certificatul transcris era ultimul act lipsă, poți continua în aceeași zi cu pașaportul copilului.',
  },
  stuttgart: {
    shortName: 'Stuttgart',
    passportLostTranslationRule: 'Pentru pașaport furat · ai nevoie de adeverința poliției + traducere legalizată în română.',
    travelTranslationRule: 'Dacă documentul a fost furat, ai nevoie de adeverința poliției + traducere în română.',
    travelPhotoRule: 'Adulții fac fotografia la ghișeu. Pentru minorii sub 14 ani, adu 1 fotografie color 3,5 × 4,5 cm pe hârtie.',
    travelIssuanceRule: 'Depunerea și eliberarea se fac în același interval, de regulă în aceeași zi.',
    travelPickupTeaser: 'Stuttgart: de regulă în aceeași zi, după depunerea cererii.',
    rnneprPaymentRule: 'Taxa de 3€ RNNEPR se plătește astfel la Stuttgart: POS (EC-Karte) la ghișeu sau virament bancar în avans pentru taxa de 3€ RNNEPR.',
    mostenireDeathCertificateRule: 'Ia la tine și copia certificatului de deces. Actele de rudenie rămân utile pentru notarul din România.',
    birthParentCertificatesRule: 'Certificatele de naștere românești ale părinților sunt necesare dacă părinții nu sunt căsătoriți.',
    birthPostalRule: 'Dacă vrei certificatul prin poștă, adu la depunere plic DIN C5 autoadresat, timbrat 6,65 EUR.',
  },
  berlin: {
    shortName: 'Berlin',
    travelIssuanceRule: 'Depunerea și eliberarea se fac în același interval, de regulă în aceeași zi.',
    travelPickupTeaser: 'Berlin: de regulă în aceeași zi, în intervalul dedicat.',
    mostenireDeathCertificateRule: 'Ia la tine și copia certificatului de deces. Actele de rudenie rămân utile pentru notarul din România.',
    birthParentCertificatesRule: 'Certificatele de naștere românești ale părinților sunt obligatorii fără excepție.',
    birthBerlinNameRule: 'Dacă la un părinte apare și numele tatălui în acte, Formule A nu este acceptat. Ai nevoie de Geburtsurkunde + apostilă + traducere autorizată.',
  },
  roma: {
    shortName: 'Roma',
    travelPhotoRule: 'Adulții fac fotografia la ghișeu. Pentru minorii sub 14 ani, adu 2 fotografii tip pașaport.',
    travelBookingRule: 'La Roma, urgențele se preiau fără programare între 11:00 și 13:00. În rest, mergi cu programare pe econsulat.ro.',
    travelBookingUrgentRule: 'La Roma, urgențele se preiau fără programare, de luni până vineri, între 11:00 și 13:00.',
    travelBadgeSummary: 'cu programare · urgențe 11:00–13:00',
    travelBadgeSummaryUrgent: 'walk-in urgențe 11:00–13:00 · de regulă aceeași zi',
  },
  milano: {
    shortName: 'Milano',
    travelPhotoRule: 'Adulții fac fotografia la ghișeu. Pentru minorii sub 14 ani, adu 1 fotografie tip pașaport.',
    travelBookingRule: 'La Milano, titlul urgent se poate rezolva fără programare după apel pe linia de urgență. Pentru cazurile non-urgente mergi cu programare.',
    travelBookingUrgentRule: 'La Milano, titlul urgent se poate rezolva fără programare, după apel pe linia de urgență a consulatului.',
    travelBadgeSummary: 'urgent fără programare după apel · altfel cu programare',
    travelBadgeSummaryUrgent: 'apel urgență · fără programare · de regulă aceeași zi',
    birthParentCertificatesRule: 'Certificatele de naștere românești ale părinților sunt de regulă cerute și merită pregătite din start.',
    birthSameDayPassportRule: 'La Milano, dacă transcrierea se rezolvă în aceeași zi și acesta era ultimul act lipsă, întreabă direct dacă poți continua imediat cu pașaportul copilului.',
  },
  bologna: {
    shortName: 'Bologna',
    travelPhotoRule: 'Adulții fac fotografia la ghișeu. Pentru minorii sub 14 ani, prezența copilului este obligatorie și fotografia se face biometric la ghișeu.',
    travelBookingRule: 'La Bologna, pentru fluxul uzual programarea nu este obligatorie. Pentru urgențe poți merge walk-in dacă ai documente justificative.',
    travelBookingUrgentRule: 'La Bologna, poți merge walk-in pentru urgențe dacă ai documente justificative. Biletul de avion singur nu este suficient.',
    travelBadgeSummary: 'de regulă fără programare · urgențele cer dovezi',
    travelBadgeSummaryUrgent: 'walk-in cu dovezi · de regulă aceeași zi',
    birthParentCertificatesRule: 'Regula nu este foarte clară pe site. Dacă le ai, du-le cu tine ca să eviți un drum în plus.',
  },
  torino: {
    shortName: 'Torino',
    travelPhotoRule: 'Adulții fac fotografia la ghișeu. Pentru minorii sub 14 ani, adu 2 fotografii tip pașaport.',
    travelIssuanceRule: 'Titlul se eliberează după depunerea cererii conform programării și verificării făcute de consulat.',
    travelBookingRule: 'La Torino, titlul de călătorie se face exclusiv cu programare pe econsulat.ro. Nu există walk-in nici pentru urgențe.',
    travelBookingUrgentRule: 'La Torino, titlul de călătorie se face exclusiv cu programare pe econsulat.ro. Nu există walk-in nici pentru urgențe.',
    travelBadgeSummary: 'numai cu programare · fără walk-in',
    travelBadgeSummaryUrgent: 'numai cu programare · fără walk-in',
    birthParentCertificatesRule: 'Certificatele de naștere românești ale părinților sunt de regulă cerute și merită pregătite din start.',
    birthPostalRule: 'Dacă vrei certificatul prin poștă, întreabă direct la depunere cum se folosește plicul preplătit sau metoda acceptată de consulat.',
  },
  trieste: {
    shortName: 'Trieste',
    travelPhotoRule: 'Adulții fac fotografia la ghișeu. Pentru minorii sub 14 ani, adu 1 fotografie tip pașaport.',
    travelIssuanceRule: 'Titlul se eliberează după depunerea cererii conform programării și verificării făcute de consulat.',
    travelBookingRule: 'La Trieste, tratează titlul de călătorie ca flux cu programare. Nu există interval walk-in confirmat.',
    travelBookingUrgentRule: 'La Trieste, tratează titlul de călătorie ca flux cu programare. Nu există interval walk-in confirmat.',
    travelBadgeSummary: 'cu programare · fără walk-in confirmat',
    travelBadgeSummaryUrgent: 'cu programare · fără walk-in confirmat',
    rnneprPaymentRule: 'Taxa RNNEPR pentru procuri se plătește astfel la Trieste: virament bancar în avans pentru 3€ RNNEPR + 5€ verificare registru.',
    birthParentCertificatesRule: 'Certificatele de naștere românești ale părinților sunt de regulă cerute și merită pregătite din start.',
  },
  bari: {
    shortName: 'Bari',
    travelPhotoRule: 'Adulții fac fotografia la ghișeu. Pentru minorii sub 14 ani, adu 2 fotografii tip pașaport.',
    travelIssuanceRule: 'Titlul se eliberează după depunerea cererii conform programării și verificării făcute de consulat.',
    travelBookingRule: 'La Bari, tratează titlul de călătorie ca flux cu programare. Nu există walk-in confirmat.',
    travelBookingUrgentRule: 'La Bari, tratează titlul de călătorie ca flux cu programare. Nu există walk-in confirmat.',
    travelBadgeSummary: 'cu programare · fără walk-in confirmat',
    travelBadgeSummaryUrgent: 'cu programare · fără walk-in confirmat',
    birthParentCertificatesRule: 'Certificatele de naștere românești ale părinților sunt de regulă cerute și merită pregătite din start.',
    birthPostalRule: 'La Bari, întreabă direct dacă poți primi documentul prin DHL după depunere.',
  },
  catania: {
    shortName: 'Catania',
    travelPhotoRule: 'Adulții fac fotografia la ghișeu. Pentru minorii sub 14 ani, adu 2 fotografii tip pașaport.',
    travelIssuanceRule: 'Titlul se eliberează după depunerea cererii conform programării și verificării făcute de consulat.',
    travelBookingRule: 'La Catania, mergi doar cu programare și confirmă direct înainte de drum. Nu există urgențe walk-in confirmate.',
    travelBookingUrgentRule: 'La Catania, mergi doar cu programare și confirmă direct înainte de drum. Nu există urgențe walk-in confirmate.',
    travelBadgeSummary: 'cu programare · confirmare directă obligatorie',
    travelBadgeSummaryUrgent: 'cu programare · confirmare directă obligatorie',
    birthParentCertificatesRule: 'Regula nu este confirmată online. Confirmă direct cu consulatul și, dacă poți, du certificatele părinților.',
  },
}

function getResolvedRules(consulate: ConsulateId | null): RuleSet {
  if (!consulate) return {}
  const country = getConsulateCountry(consulate)
  if (!country) return {}
  return {
    ...COUNTRY_DEFAULT_RULES[country],
    ...CONSULATE_RULES[consulate],
  }
}

export function getShortConsulateName(consulate: ConsulateId | null): string {
  const shortName = getResolvedRules(consulate).shortName
  if (shortName) return shortName
  return 'consulatul tău'
}

export function getPassportLostTranslationRule(consulate: ConsulateId | null): string {
  const rule = getResolvedRules(consulate).passportLostTranslationRule
  if (rule) return rule
  return 'Pentru pașaport furat · ai nevoie de adeverința poliției și, după caz, de traducerea cerută de consulatul tău.'
}

export function getPassportPaymentRule(consulate: ConsulateId | null): string {
  if (!consulate) {
    return 'Taxa: 53€ — se achită la consulat, după metoda acceptată acolo.'
  }

  const card = getConsulateById(consulate)
  const method = card.paymentPassport ?? card.paymentMethod
  return `Taxa: 53€ — se achită la consulat (${method}).`
}

export function getPassportPickupRule(consulate: ConsulateId | null): string {
  if (!consulate) {
    return 'Când statusul este „disponibil”, mergi în programul de ridicare al consulatului tău, fără programare.'
  }

  const card = getConsulateById(consulate)
  return `Când statusul este „disponibil”, mergi în programul de ridicare al consulatului tău, fără programare: ${card.schedulePassportPickup ?? card.scheduleRidicare}.`
}

export function getPostalPickupRule(consulate: ConsulateId | null): string | null {
  if (!consulate || !getConsulateById(consulate).postalPickup) return null
  return 'Poți opta și pentru ridicare prin poștă — vezi detaliile din cardul consulatului.'
}

export function getTravelTranslationRule(consulate: ConsulateId | null): string {
  const rule = getResolvedRules(consulate).travelTranslationRule
  if (rule) return rule
  return 'Dacă documentul a fost furat, ai nevoie de adeverința poliției și de traducerea cerută de consulatul tău.'
}

export function getTravelPhotoRule(consulate: ConsulateId | null): string {
  const rule = getResolvedRules(consulate).travelPhotoRule
  if (rule) return rule
  return 'Regula fotografiei depinde de consulatul tău.'
}

export function getTravelIssuanceRule(consulate: ConsulateId | null): string {
  const rule = getResolvedRules(consulate).travelIssuanceRule
  if (rule) return rule
  return 'Titlul se eliberează, de regulă, în aceeași zi.'
}

export function getTravelFreeRule(consulate: ConsulateId | null): string {
  void consulate
  return 'Titlul de călătorie este gratuit. Nu plătești taxă consulară pentru emiterea lui.'
}

export function getTravelPickupTeaser(consulate: ConsulateId | null): string {
  if (!consulate) {
    return 'Când ridici titlul depinde de regula consulatului tău și de momentul în care depui cererea.'
  }

  const rule = getResolvedRules(consulate).travelPickupTeaser
  if (rule) {
    return getConsulateCountry(consulate) === 'it'
      ? `${getShortConsulateName(consulate)}: ${rule}`
      : rule
  }

  return 'Când ridici titlul depinde de regula consulatului tău.'
}

export function getTravelBookingRule(consulate: ConsulateId | null, urgent = false): string {
  const rules = getResolvedRules(consulate)
  const rule = urgent ? rules.travelBookingUrgentRule : rules.travelBookingRule
  if (rule) return rule
  return urgent
    ? 'Pentru urgențe, verifică direct dacă poți merge fără programare la consulatul tău.'
    : 'Titlul de călătorie se obține, de regulă, fără programare, direct la consulat.'
}

export function getTravelBadgeSummary(consulate: ConsulateId | null, urgent = false): string {
  const rules = getResolvedRules(consulate)
  const rule = urgent ? rules.travelBadgeSummaryUrgent : rules.travelBadgeSummary
  if (rule) return rule
  return urgent ? 'fără programare · aceeași zi' : 'fără programare · aceeași zi în majoritatea cazurilor'
}

export function getTravelBonnFridayRule(consulate: ConsulateId | null): string | null {
  return getResolvedRules(consulate).travelBonnFridayRule ?? null
}

export function getRnneprPaymentRule(consulate: ConsulateId | null): string {
  const rule = getResolvedRules(consulate).rnneprPaymentRule
  if (rule) return rule
  if (!consulate) return 'Taxa de 3€ RNNEPR se plătește după regula consulatului tău.'
  return `Taxa de 3€ RNNEPR se plătește astfel la ${getShortConsulateName(consulate)}: ${getConsulateById(consulate).paymentNotarial ?? 'verifică direct la ghișeu'}.`
}

export function getProcuraSalePrescanRule(consulate: ConsulateId | null): string | null {
  return getResolvedRules(consulate).procuraSalePrescanRule ?? null
}

export function getMostenireDeathCertificateRule(consulate: ConsulateId | null): string {
  const rule = getResolvedRules(consulate).mostenireDeathCertificateRule
  if (rule) return rule
  return 'Verifică înainte dacă trebuie să ai și copia certificatului de deces la ghișeu.'
}

export function getBirthParentCertificatesRule(consulate: ConsulateId | null): string {
  const rule = getResolvedRules(consulate).birthParentCertificatesRule
  if (rule) return rule
  return 'Adu certificatele de naștere românești ale părinților dacă nu ești sigur de regula consulatului tău.'
}

export function getBirthBerlinNameRule(consulate: ConsulateId | null): string | null {
  return getResolvedRules(consulate).birthBerlinNameRule ?? null
}

export function getBirthProcessingRule(consulate: ConsulateId | null): string {
  const rule = getResolvedRules(consulate).birthProcessingRule
  if (rule) return rule
  if (!consulate) return 'Primești recipisa de depunere și verifici apoi programul de ridicare sau opțiunea prin poștă, după regula consulatului tău.'
  const term = getConsulateById(consulate).starecivilaTermen
  return term
    ? `Primești recipisa de depunere. Termen orientativ la ${getShortConsulateName(consulate)}: ${term}.`
    : `Primești recipisa de depunere și verifici apoi direct cu ${getShortConsulateName(consulate)} când este gata certificatul.`
}

export function getBirthPickupRule(consulate: ConsulateId | null): string {
  const rule = getResolvedRules(consulate).birthPickupRule
  if (rule) return rule
  if (!consulate) return 'Când certificatul este gata, îl ridici în programul de ridicare al consulatului tău sau folosești opțiunea de poștă, dacă există.'
  return `Când certificatul este gata, îl ridici în programul de ridicare al consulatului tău: ${getConsulateById(consulate).starecivilaProgramRidicare ?? 'verifică direct la consulat'}.`
}

export function getBirthPostalRule(consulate: ConsulateId | null): string | null {
  return getResolvedRules(consulate).birthPostalRule ?? null
}

export function getBirthMunichPassportRule(consulate: ConsulateId | null): string | null {
  return getResolvedRules(consulate).birthSameDayPassportRule ?? null
}

export function personalizeGuideText(
  text: string,
  consulate: ConsulateId | null
): string | null {
  if (
    text.includes('adeverință poliție locală') &&
    text.includes('traducere conform consulatului') &&
    (text.includes('Bonn =') || text.includes('München =') || text.includes('Stuttgart =') || text.includes('Berlin ='))
  ) {
    return getPassportLostTranslationRule(consulate)
  }

  if (getConsulateCountry(consulate) === 'it' && text.startsWith('Berlin — excepție patronimice:')) {
    return 'Dacă numele din actele părinților sau ale copilului ridică probleme de transliterare, confirmă direct cu consulatul dacă extrasul multilingv este suficient sau dacă se cere certificatul de naștere italian cu apostilă și traducere.'
  }

  const postalRule = getPostalPickupRule(consulate)
  const birthBerlinRule = getBirthBerlinNameRule(consulate)
  const birthPostalRule = getBirthPostalRule(consulate)
  const birthMunichPassportRule = getBirthMunichPassportRule(consulate)
  const bonnFridayRule = getTravelBonnFridayRule(consulate)
  const salePrescanRule = getProcuraSalePrescanRule(consulate)

  switch (text) {
    case 'Nu trebuie să aduci fotografii — imaginea facială se preia biometric la ghișeu la toate cele 4 consulate.':
      return 'Nu trebuie să aduci fotografii — imaginea facială se preia biometric la ghișeu la consulatul tău.'
    case 'Taxa: 53€ — se achită la consulat (metodă diferită per consulat: Bonn = EC-Karte, München = numerar, Stuttgart = POS sau transfer bancar).':
    case 'Taxa: 53€ — se achită la consulat (Bonn = EC-Karte, München = numerar, Stuttgart = POS sau transfer bancar).':
    case 'Taxa: 53€ — se achită la consulat (metodă diferită per consulat: Bonn = EC-Karte, München = numerar, Stuttgart = POS sau transfer bancar, Berlin = POS card debit sau virament).':
      return getPassportPaymentRule(consulate)
    case 'Când statusul e „disponibil", te prezinți în programul de ridicare (fără programare):\n• Bonn: Luni–Joi 14:00–15:00\n• München: Luni–Joi 14:00–16:00\n• Stuttgart: Luni–Vineri 10:00–14:00\n• Berlin: Luni–Vineri 13:00–14:00':
      return getPassportPickupRule(consulate)
    case 'München și Stuttgart: poți opta pentru ridicare prin poștă — vezi detalii în cardul consulatului.':
    case 'Ridicare prin poștă: disponibilă la München și Stuttgart — vezi detaliile din cardul consulatului.':
      return postalRule
    case 'Stuttgart: la ridicare poate fi cerut și certificatul de naștere al minorului sub 14 ani, în original sau copie.':
      return consulate === 'stuttgart'
        ? 'La Stuttgart, la ridicare poate fi cerut și certificatul de naștere al minorului sub 14 ani, în original sau copie.'
        : null
    case 'Dacă documentul a fost FURAT: adeverință poliție locală (Verlustanzeige / Diebstahlsanzeige) + traducere conform consulatului: Bonn = autorizată în română; München = autorizată; Stuttgart = legalizată; Berlin = autorizată.':
    case 'Dacă documentul a fost FURAT: adeverință poliție locală (adeverința poliției italiene) + traducere conform consulatului: Bonn = autorizată în română; München = autorizată; Stuttgart = legalizată; Berlin = autorizată.':
    case 'Dacă a fost FURAT: adeverință poliție locală (Verlustanzeige / Diebstahlsanzeige) + traducere conform consulatului: Bonn = traducere autorizată în română; München = traducere autorizată; Stuttgart = traducere legalizată; Berlin = traducere autorizată.':
    case 'Dacă a fost FURAT: adeverință poliție locală (adeverința poliției italiene) + traducere conform consulatului: Bonn = traducere autorizată în română; München = traducere autorizată; Stuttgart = traducere legalizată; Berlin = traducere autorizată.':
      return getPassportLostTranslationRule(consulate)
    case 'Nu ai nevoie de econsulat.ro și nu există programare online pentru titlul de călătorie. Te prezinți direct la consulat în intervalul dedicat.':
      return getTravelBookingRule(consulate, true)
    case 'Fotografii: NU sunt necesare separat — imaginea facială se preia biometric la ghișeu la toate cele 4 consulate. Îmbracă-te în culori închise pentru o fotografie mai clară.':
    case 'Fotografii: NU sunt necesare separat — imaginea facială se preia biometric la ghișeu la toate cele 4 consulate. Îmbracă-te în culori închise.':
      return 'Fotografii: nu sunt necesare separat — imaginea facială se preia biometric la ghișeu. Îmbracă-te în culori închise pentru o fotografie mai clară.'
    case 'Titlul de călătorie este GRATUIT — nu plătești nimic la consulat. (Legea 1/2017, confirmat la toate cele 4 consulate)':
      return getTravelFreeRule(consulate)
    case '2 fotografii color recente, 3,5 × 4,5 cm, fond alb. Excepție München: fotografiile se fac la consulat — nu aduci fotografii proprii.':
      return consulate === 'muenchen'
        ? 'Fotografiile se fac la consulat — nu aduci fotografii proprii.'
        : '2 fotografii color recente, 3,5 × 4,5 cm, fond alb.'
    case '2 fotografii color recente, 3,5 × 4,5 cm, fond alb. München: fotografiile se fac la consulat.':
      return consulate === 'muenchen'
        ? 'Fotografiile se fac la consulat — nu aduci fotografii proprii.'
        : '2 fotografii color recente, 3,5 × 4,5 cm, fond alb.'
    case 'BONN — REGULĂ SPECIALĂ: Dacă nu trimiți în avans pe econsulat.ro copia actului de proprietate și copia CI a mandatarului, procura NU se eliberează în aceeași zi. Este singurul flux din produs în care econsulat este folosit și pentru transmiterea documentelor scanate înainte de vizită. Trimite documentele înainte de a veni la consulat.':
      return salePrescanRule
    case 'München / Stuttgart / Berlin: poți veni cu documentele în ziua programării și procura se redactează în aceeași zi — fără pre-scanning obligatoriu.':
      return consulate && consulate !== 'bonn'
        ? 'Poți veni cu documentele direct în ziua programării — fără trimitere în avans.'
        : null
    case 'Programarea se face prin econsulat.ro → „Programările mele” → „Programare nouă” → alegi consulatul tău → prima dată disponibilă. Obligatorie la toate cele 4 consulatele.':
      return 'Programarea se face prin econsulat.ro → „Programările mele” → „Programare nouă” → alegi consulatul tău → prima dată disponibilă.'
    case 'BERLIN — PLATĂ ÎN AVANS: taxa de 3€ RNNEPR se achită NUMAI prin virament bancar, cu 3–4 zile lucrătoare înainte de prezentarea la consulat. Fă transferul imediat după ce primești programarea.':
      return consulate === 'berlin'
        ? 'La Berlin, taxa de 3€ RNNEPR se achită numai prin virament bancar, cu 3–4 zile lucrătoare înainte de programare.'
        : null
    case 'Tarif 3€ RNNEPR — pregătește metoda de plată conform consulatului tău: Bonn = EC-Karte la ghișeu, München = numerar la ghișeu, Stuttgart = POS sau virament, Berlin = numai virament înainte de programare.':
      return getRnneprPaymentRule(consulate)
    case 'Bonn: EC-Karte (card de debit bancă germană) la ghișeu, în ziua programării.':
      return consulate === 'bonn' ? text : null
    case 'München: numerar (cash) la ghișeu, în ziua programării.':
      return consulate === 'muenchen' ? text : null
    case 'Stuttgart: POS (EC-Karte) la ghișeu sau virament în avans la IBAN DE04 1007 0000 0976 1909 01 · BIC DEUTDEBBXXX.':
      return consulate === 'stuttgart' ? text : null
    case 'Berlin: NUMAI virament bancar în avans la IBAN DE83 1007 0000 0435 4429 00 · BIC DEUTDEBBXXX · Botschaft von Rumänien · Deutsche Bank Berlin, cu 3–4 zile lucrătoare înainte.':
      return consulate === 'berlin' ? text : null
    case 'Poți solicita la programare IBAN-ul pentru taxa de 3 euro (Bonn/München/Stuttgart), dacă nu l-ai identificat anterior.':
      return consulate && consulate !== 'berlin'
        ? 'Dacă nu ai IBAN-ul sau detaliul de plată, cere-l din timp prin programare sau verifică-l în cardul consulatului.'
        : null
    case 'Excepție Bonn: procurile imobiliare (vânzare, succesiune) NU se eliberează în aceeași zi dacă nu ai trimis în prealabil copiile actelor de proprietate și CI-urile scanate pe econsulat.ro. (bonn.mae.ro/node/496)':
      return consulate === 'bonn'
        ? 'La Bonn, procurile imobiliare nu se eliberează în aceeași zi dacă nu ai trimis din timp copiile scanate cerute în econsulat.'
        : null
    case 'Act de identitate valabil (pașaport sau carte de identitate românească) — original. Confirmat Bonn, München, Stuttgart, Berlin.':
      return 'Act de identitate valabil în original: pașaport sau carte de identitate românească.'
    case 'Copie după actul de identitate al persoanei pe care o împuternicești (mandatarul) — sau datele sale complete: nume, prenume, CNP, serie CI/pașaport, număr, dată și loc eliberare, adresă. Confirmat München, Stuttgart, Berlin.':
      return 'Pregătește copia actului mandatarului sau toate datele lui complete: nume, prenume, CNP, serie și număr, dată și loc al eliberării, adresă.'
    case 'Copie după actul de proprietate al imobilului — contract de vânzare-cumpărare, certificat de moștenitor, titlu de proprietate, sau orice document care dovedește proprietatea. OBLIGATORIU pentru procuri de transfer. Confirmat Bonn, München, Stuttgart, Berlin.':
      return 'Adu copia actului de proprietate pentru imobil: contract, certificat de moștenitor, titlu de proprietate sau alt document care dovedește proprietatea.'
    case 'Certificatul de deces al persoanei decedate — copie. La Bonn, Stuttgart și Berlin este obligatoriu să îl ai pregătit; la München verifică înainte cu notarul și cu consulatul dacă îl vor și la ghișeu.':
      return `Certificatul de deces al persoanei decedate — copie. ${getMostenireDeathCertificateRule(consulate)}`
    case 'La Bonn, Stuttgart și Berlin: ai la tine și copia certificatului de deces. Actele de rudenie sau de calitate de moștenitor nu sunt cerute de consulat, dar rămân utile pentru notarul din România.':
      return getMostenireDeathCertificateRule(consulate)
    case 'Ține la îndemână certificatul de deces și actele care dovedesc relația de rudenie. Certificatul de deces este obligatoriu ca copie la Bonn, Stuttgart și Berlin; actele de rudenie sunt în principal pentru notarul din România, nu pentru consulat.':
      return `${getMostenireDeathCertificateRule(consulate)} Actele de rudenie rămân utile mai ales pentru notarul din România.`
    case 'Dacă documentul a fost furat și nu ai depus încă Diebstahlsanzeige la poliție — fă asta ÎNAINTE de a pleca la consulat. Adeverința poliției este obligatorie la toate consulatele. Traducerea autorizată în română este obligatorie: München, Stuttgart, Berlin. La Bonn traducerea nu este cerută — adeverința poliției este suficientă.':
      return `Dacă documentul a fost furat și nu ai depus încă Diebstahlsanzeige la poliție, fă asta înainte de a pleca la consulat. ${getTravelTranslationRule(consulate)}`
    case 'Dacă documentul a fost FURAT: du-te PRIMUL la poliția locală (Polizei) și depune Diebstahlsanzeige. Primești o adeverință scrisă. Această adeverință trebuie însoțită de traducere autorizată în română: obligatorie la München, Stuttgart și Berlin. La Bonn traducerea nu este cerută — adeverința poliției este suficientă.':
      return `Dacă documentul a fost furat, mergi mai întâi la poliția locală și obține adeverința. ${getTravelTranslationRule(consulate)}`
    case 'La Bonn, Stuttgart și Berlin: funcționarul preia fotografia electronic la ghișeu — nu aduci fotografii. La München: funcționarul verifică fotografiile biometrice pe care le-ai adus.':
      return getTravelPhotoRule(consulate)
    case 'FOTOGRAFII: depinde strict de consulatul tău. La München trebuie să aduci 2 fotografii biometrice color proprii — de la centre foto sau automate (NU salvate pe telefon). La Bonn, Stuttgart și Berlin fotografia se preia electronic la ghișeu — nu aduci nimic.':
      return `Fotografii: ${getTravelPhotoRule(consulate)}`
    case 'Titlul de călătorie nu conține date biometrice (amprente digitale). Este un document mai simplu decât pașaportul — de aceea se eliberează în aceeași zi.':
      return getTravelIssuanceRule(consulate)
    case 'Eliberare în aceeași zi la toate consulatele: München explicit / Berlin (preluare + eliberare 08:00–10:00) / Stuttgart implicit / Bonn implicit — titlurile nu apar în slotul de ridicare 14:00–15:00 (rezervat pașapoarte + stare civilă procesate din RO).':
      return getTravelIssuanceRule(consulate)
    case 'Bonn: dacă te prezinți VINERI dimineața, ridici titlul LUNI după-amiaza. Intervalul de ridicare 14:00–15:00 există doar Luni–Joi. Planifică în consecință.':
      return bonnFridayRule
    case 'München: eliberare în aceeași zi cu depunerea cererii, în program normal.':
      return consulate === 'muenchen' ? 'La München, titlul se eliberează în aceeași zi.' : null
    case 'Stuttgart: depunere și procesare în același interval 10:00–14:00 — ridici în aceeași zi.':
      return consulate === 'stuttgart' ? 'La Stuttgart, titlul se eliberează de regulă în aceeași zi.' : null
    case 'Berlin: depunere și eliberare în același interval 08:00–10:00 — ridici în aceeași ședință.':
      return consulate === 'berlin' ? 'La Berlin, titlul se eliberează de regulă în aceeași zi.' : null
    case 'Bonn: depunere 09:00–12:00. Ridicare Luni–Joi 14:00–15:00 — de regulă în aceeași zi dacă te prezinți Luni–Joi dimineața.':
      return consulate === 'bonn' ? 'La Bonn, de regulă ridici titlul în aceeași zi dacă mergi dimineața, de luni până joi.' : null
    case 'Dacă documentul a fost PIERDUT: declarație pe proprie răspundere — se completează pe loc la ghișeul consulatului. Nu trebuie pregătită în avans. (confirmat Bonn + München)':
      return 'Dacă documentul a fost pierdut, declarația pe proprie răspundere se completează pe loc la ghișeul consulatului.'
    case 'Dacă nu ai niciun document de identitate: certificatul de naștere românesc sau orice alt act în care apare CNP-ul tău. Original + 1 copie. (confirmat bonn.mae.ro/node/479)':
      return 'Dacă nu ai niciun document de identitate, ia certificatul de naștere românesc sau orice alt act în care apare CNP-ul tău. Original + 1 copie.'
    case 'Dacă documentul a fost FURAT: adeverință eliberată de poliția locală (Verlustanzeige / Diebstahlsanzeige). La München, Stuttgart și Berlin: obligatoriu însoțită de traducere autorizată în română. La Bonn: traducerea NU este cerută — adeverința singură este suficientă.':
    case 'Dacă documentul a fost FURAT: adeverință eliberată de poliția locală (adeverința poliției italiene). La München, Stuttgart și Berlin: obligatoriu însoțită de traducere autorizată în română. La Bonn: traducerea NU este cerută — adeverința singură este suficientă.':
      return getTravelTranslationRule(consulate)
    case 'Bonn: fotografia se preia ELECTRONIC la ghișeu — nu aduci fotografii proprii. Poartă haine de culoare închisă pentru calitate mai bună. (confirmat bonn.mae.ro/node/479)':
      return consulate === 'bonn'
        ? 'Fotografia se preia la ghișeu — nu aduci fotografii proprii. Poartă haine de culoare închisă pentru o imagine mai clară.'
        : null
    case 'München: aduci 2 fotografii color format biometric (3,5 × 4,5 cm, fond alb). NU fotografii salvate pe telefon — obținute de la centre foto sau automate de pașaport. (confirmat muenchen.mae.ro/node/479)':
      return consulate === 'muenchen'
        ? 'Adu 2 fotografii biometrice color 3,5 × 4,5 cm, tipărite, nu pe telefon.'
        : null
    case 'Stuttgart: adulții — fotografia se preia electronic la ghișeu, nu aduci proprii. Minori sub 14 ani: 1 fotografie color 3,5 × 4,5 cm pe suport hârtie. (confirmat stuttgart.mae.ro/node/479)':
      return consulate === 'stuttgart'
        ? 'La Stuttgart, adulții fac fotografia la ghișeu. Pentru minorii sub 14 ani, adu 1 fotografie color 3,5 × 4,5 cm pe hârtie.'
        : null
    case 'Berlin: fotografia se preia electronic la ghișeu — nu aduci fotografii proprii. Poartă haine de culoare închisă. (confirmat berlin.mae.ro/node/271)':
      return consulate === 'berlin'
        ? 'La Berlin, fotografia se preia la ghișeu — nu aduci fotografii proprii. Poartă haine de culoare închisă.'
        : null
    case 'München: la ridicarea certificatului transcris, dacă era singurul document lipsă pentru pașaportul copilului, poți depune pașaportul în aceeași zi — fără programare separată.':
      return birthMunichPassportRule
    case 'München: verifică pe muenchen.mae.ro dacă există consulat itinerant planificat în Bavaria — ar reduce distanța până la consulat. Calendarul 2026 nu era publicat la apr. 2026, dar procedura de consultare a fost lansată.':
      return consulate === 'muenchen'
        ? 'La München, verifică din timp dacă există consulat itinerant planificat în Bavaria.'
        : null
    case 'Stuttgart: dacă vrei certificatul prin poștă, pregătește un plic DIN C5 autoadresat, timbrat 6,65 EUR, și ia-l cu tine la depunere. Fără plic, ridici personal.':
      return birthPostalRule
    case 'La ghișeu funcționarul verifică documentele originale și printează formularul cererii (Stuttgart: se printează exclusiv la consulat). Semnezi pe loc declarația că nașterea nu a mai fost înscrisă în registrele românești — generată automat de sistemul SIMISC.':
      return consulate === 'stuttgart'
        ? 'La ghișeu funcționarul verifică documentele originale și printează formularul cererii direct la consulat. Semnezi pe loc declarația că nașterea nu a mai fost înscrisă în registrele românești.'
        : 'La ghișeu funcționarul verifică documentele originale și îți pregătește formularul cererii. Semnezi pe loc declarația că nașterea nu a mai fost înscrisă în registrele românești.'
    case 'Primești un bon/recipisă de depunere. Termen de procesare: Bonn 7–30 de zile; München: cazurile simple se pot ridica în aceeași zi; Stuttgart și Berlin: termen nepublicat oficial, estimat similar Bonn.':
      return getBirthProcessingRule(consulate)
    case 'Program ridicare acte stare civilă: Bonn — Luni–Joi 14:00–15:00; München — Luni/Miercuri/Joi 11:00–14:00, Marți 15:00–18:00; Stuttgart — Luni–Vineri 14:00–15:00; Berlin — Luni–Vineri 13:00–14:00.':
      return getBirthPickupRule(consulate)
    case 'München: dacă nu ridici în 3 luni de la data depunerii, certificatul este trimis la DPCS Sector 1 București și poate fi ridicat doar de acolo.':
      return consulate === 'muenchen' ? text : null
    case 'Stuttgart: dacă ai adus plicul DIN C5 la depunere, certificatul îți este trimis prin poștă — nu mai trebuie să revii la consulat.':
      return consulate === 'stuttgart' ? 'Dacă ai adus plicul la depunere, certificatul îți este trimis prin poștă.' : null
    case 'Berlin — excepție patronimice: dacă un părinte are nume patronimic (ex. „-escu”, „-eanu”, „-vici”), Formule A NU este acceptat. Obligatoriu Geburtsurkunde + apostilă + traducere autorizată în română.':
      return birthBerlinRule
    case 'Certificate de naștere românești ale părinților — cerința diferă per consulat: Bonn dacă CI/pașaport nu conțin locul nașterii; München dacă ambii părinți sunt cetățeni români; Stuttgart doar dacă părinții nu sunt căsătoriți; Berlin obligatorii fără excepție. Sfat: aduce-le oricum.':
      return `Certificatele de naștere românești ale părinților: ${getBirthParentCertificatesRule(consulate)}`
    case 'Stuttgart: formularul cererii se printează EXCLUSIV la consulat — nu acasă, nu online. Nu este disponibil pentru descărcare în avans.':
      return consulate === 'stuttgart'
        ? 'La Stuttgart, formularul cererii se printează exclusiv la consulat.'
        : null
    case 'La ghișeu prezinți toate documentele în original. La Bonn și Stuttgart, aduce și câte o copie simplă din fiecare.':
      return consulate === 'bonn' || consulate === 'stuttgart'
        ? 'La ghișeu prezinți toate documentele în original și e bine să ai și câte o copie simplă din fiecare.'
        : 'La ghișeu prezinți toate documentele în original.'
    case 'Dacă pașaportul a fost FURAT: ai nevoie de adeverință de poliție + traducere în română conform consulatului tău: Bonn = autorizată, Stuttgart = legalizată, München și Berlin = autorizată.':
    case 'Dacă pașaportul a fost furat — ai nevoie de adeverință de poliție + traducere în română conform consulatului tău: Bonn = autorizată, Stuttgart = legalizată, München și Berlin = autorizată.':
      return getPassportLostTranslationRule(consulate)
    case 'Dacă documentul a fost FURAT (nu expirat/pierdut), ai nevoie și de adeverință poliție. La München, Stuttgart și Berlin trebuie și traducere autorizată în română — pregătește-o înainte.':
      return getTravelTranslationRule(consulate)
    case 'La Bonn, Stuttgart și Berlin, copia certificatului de deces trebuie pregătită înainte de programare. Actele de rudenie sau de calitate de moștenitor nu sunt cerute de consulat, dar rămân utile pentru notarul din România.':
      return getMostenireDeathCertificateRule(consulate)
    case 'Dacă procura e pentru divorț notarial, succesiune sau vânzare prin mandatar: taxa de publicitate notarială de 3 euro se plătește după regula consulatului tău — Bonn = EC-Karte, München = numerar, Stuttgart = POS sau virament, Berlin = virament în avans.':
      return `Dacă procura va fi folosită la notar în România, ${getRnneprPaymentRule(consulate).toLowerCase()}.`
    case 'Taxă procură: GRATUITĂ pentru procuri obișnuite (firmă/ONRC, cont bancar, cazier, permis, înregistrare auto). Excepție: dacă procura va fi folosită la un notar din România (divorț notarial, succesiune, vânzare prin mandatar) → taxă suplimentară de 3 euro. Metoda diferă per consulat: Bonn = EC-Karte, München = numerar, Stuttgart = POS sau virament, Berlin = numai virament în avans.':
      return `Procura este gratuită pentru fluxurile obișnuite. Dacă actul trebuie înscris în registrele notariale din România, ${getRnneprPaymentRule(consulate).toLowerCase()}.`
    default:
      return text
  }
}

type BlockLike = { text: string }

export function personalizeBlocksForConsulate<T extends BlockLike>(
  blocks: T[],
  consulate: ConsulateId | null
): T[] {
  return blocks.flatMap((block) => {
    const nextText = personalizeGuideText(block.text, consulate)
    if (!nextText) return []
    return [{ ...block, text: nextText }]
  })
}

type StepLike<TBlock extends BlockLike> = { blocks: TBlock[] }

export function personalizeStepsForConsulate<TBlock extends BlockLike, TStep extends StepLike<TBlock>>(
  steps: TStep[],
  consulate: ConsulateId | null
): TStep[] {
  return steps.map((step) => ({
    ...step,
    blocks: personalizeBlocksForConsulate(step.blocks, consulate),
  }))
}

export function personalizeGuideTeaserForConsulate(
  teaser: string[],
  consulate: ConsulateId | null
): string[] {
  return teaser.flatMap((item) => {
    if (item === 'Când ridici titlul — Bonn: același sau altă zi; München/Stuttgart/Berlin: aceeași zi') {
      return [getTravelPickupTeaser(consulate)]
    }
    if (item === 'Regula specifică Bonn: ce trebuie trimis în avans pentru eliberare în aceeași zi') {
      return consulate === 'bonn' ? [item] : []
    }
    return [item]
  })
}

export const guideConsulateSpecDe = {
  countryCode: 'DE',
  consulates: ['bonn', 'muenchen', 'stuttgart', 'berlin'] as const,
  commonFields: [
    'name',
    'address',
    'phone',
    'email',
    'website',
    'googleMapsUrl',
    'wazeUrl',
    'scheduleDeponere',
    'scheduleRidicare',
    'schedulePassportPickup',
    'scheduleTravelDoc',
    'paymentPassport',
    'paymentNotarial',
    'paymentPassportNote',
    'paymentNotarialNote',
    'postalPickup',
    'postalPickupUrl',
    'starecivilaProgramRidicare',
    'starecivilaPosta',
    'starecivilaTermen',
  ],
  procedureRuleBuckets: [
    'passport.photo_capture',
    'passport.lost_or_stolen.translation_rule',
    'passport.pickup_rule',
    'notarial.rnnepr_payment_rule',
    'notarial.sale_prescan_required',
    'travel_doc.photo_rule',
    'travel_doc.stolen_doc_translation_rule',
    'travel_doc.same_day_release_rule',
    'birth_transcription.parent_birth_cert_rule',
    'birth_transcription.formule_a_exception',
    'birth_transcription.printed_form_rule',
    'birth_transcription.postal_delivery_rule',
    'birth_transcription.pickup_rule',
  ],
} as const

export const guideConsulateSpecIt = {
  countryCode: 'IT',
  consulates: ['roma', 'milano', 'bologna', 'torino', 'trieste', 'bari', 'catania'] as const,
  commonFields: [
    'name',
    'address',
    'phone',
    'email',
    'website',
    'googleMapsUrl',
    'wazeUrl',
    'scheduleDeponere',
    'scheduleRidicare',
    'schedulePassportPickup',
    'schedulePassportPickupCrds',
    'schedulePassportPickupStandard',
    'scheduleTravelDoc',
    'paymentPassport',
    'paymentNotarial',
    'paymentPassportNote',
    'paymentNotarialNote',
    'postalPickup',
    'postalPickupUrl',
    'starecivilaProgramRidicare',
    'starecivilaPosta',
    'starecivilaTermen',
  ],
  procedureRuleBuckets: [
    'passport.photo_capture',
    'passport.lost_or_stolen.translation_rule',
    'passport.payment_rule',
    'passport.pickup_rule',
    'passport.postal_pickup_rule',
    'passport.minor_processing_time_rule',
    'travel_doc.photo_rule',
    'travel_doc.stolen_doc_translation_rule',
    'travel_doc.same_day_release_rule',
    'travel_doc.booking_requirement_rule',
    'notarial.rnnepr_payment_rule',
    'notarial.sale_prescan_required',
    'birth_transcription.parent_birth_cert_rule',
    'birth_transcription.special_name_rule',
    'birth_transcription.printed_form_rule',
    'birth_transcription.processing_rule',
    'birth_transcription.pickup_rule',
    'birth_transcription.postal_delivery_rule',
    'birth_transcription.same_day_next_step_rule',
  ],
  countryNotes: [
    'Pașaportul are fotografie biometrică la ghișeu în toată Italia.',
    'Pentru pașaport furat se cere, de regulă, traducere autorizată în română a dovezii de la poliție.',
    'Pentru titlul de călătorie după furt, traducerea nu este cerută în Italia.',
    'Taxa RNNEPR se plătește, de regulă, prin virament bancar în avans.',
    'Catania intră în produs cu avertisment puternic de confirmare directă.',
  ],
  highlightedLocalExceptions: [
    'Roma: ridicare pașaport CRDS diferită de pașaportul cu domiciliu în România.',
    'Milano: titlul de călătorie urgent poate fi rezolvat fără programare după apel pe linia de urgență.',
    'Bologna: programarea nu este obligatorie pentru toate fluxurile uzuale.',
    'Torino: titlul de călătorie este tratat conservator ca flux cu programare.',
    'Trieste și Bari: pentru pașapoartele CRDS ale minorilor termenul orientativ este 2–3 luni.',
  ],
} as const
