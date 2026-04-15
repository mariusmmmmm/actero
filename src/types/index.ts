// ActeRO — types/index.ts
// Sursa de adevăr pentru toate tipurile din aplicație

// ─── ȚĂRI ────────────────────────────────────────────────────────────────────

export type CountryStatus = 'available' | 'coming_soon' | 'date_announced'
export type CountryCode = 'de' | 'it'

export type Country = {
  code: CountryCode | string
  name: string
  flag: string
  status: CountryStatus
  availableFrom?: string // ex: 'Mai 2026'
}

// ─── BUNDESLAND + CONSULATE ──────────────────────────────────────────────────

export type BundeslandCode =
  | 'BW' | 'BY' | 'BE' | 'BB' | 'HB' | 'HH'
  | 'HE' | 'MV' | 'NI' | 'NW' | 'RP' | 'SL'
  | 'SN' | 'ST' | 'SH' | 'TH'

export type ItalyRegionCode =
  | 'Lazio'
  | 'Abruzzo'
  | 'Campania'
  | 'Molise'
  | 'Sardegna'
  | 'Umbria'
  | 'Lombardia'
  | 'Trentino-Alto Adige'
  | 'Emilia-Romagna'
  | 'Marche'
  | 'Toscana'
  | 'San Marino'
  | 'Piemonte'
  | 'Liguria'
  | "Valle d'Aosta"
  | 'Veneto'
  | 'Friuli-Venezia Giulia'
  | 'Basilicata'
  | 'Calabria'
  | 'Puglia'
  | 'Sicilia'

export type RegionCode = BundeslandCode | ItalyRegionCode

export type GermanyConsulateId = 'muenchen' | 'bonn' | 'stuttgart' | 'berlin'
export type ItalyConsulateId = 'roma' | 'milano' | 'bologna' | 'torino' | 'trieste' | 'bari' | 'catania'
export type ConsulateId = GermanyConsulateId | ItalyConsulateId

export type ConsulateInfo = {
  countryCode: CountryCode
  id: ConsulateId
  name: string
  address: string
  addressNote?: string       // ex: 'Intrarea prin Gerberstr. 28'
  phone: string
  phoneNote: string          // ex: 'doar pentru urgențe'
  email: string
  website: string
  googleMapsUrl: string
  wazeUrl: string
  scheduleDeponere: string   // ex: 'Luni–Joi 08:00–14:00, Vineri 08:00–12:00'
  scheduleRidicare: string   // ex: 'Luni–Joi 14:00–16:00 (fără programare)'
  schedulePassportPickup?: string
  schedulePassportPickupCrds?: string
  schedulePassportPickupStandard?: string
  scheduleTitluCalatorie: string
  scheduleTravelDoc?: string
  paymentMethod: string      // ex: 'exclusiv EC-Karte' | 'exclusiv numerar'
  paymentPassport?: string
  paymentNotarial?: string
  paymentNote?: string       // ex: IBAN pentru Stuttgart
  paymentPassportNote?: string
  paymentNotarialNote?: string
  postalPickup: boolean
  postalPickupUrl?: string
  pasaportSearchUrl: string
  staffShortageNotice?: boolean
  fotografiiLaGhiseu: boolean // true = nu aduci fotografii proprii (München)
  starecivilaProgramRidicare?: string
  starecivilaPosta?: boolean
  starecivilaTermen?: string | null
  certNastereParintiRegula?: 'if_ci_lacks_birthplace' | 'if_both_romanian' | 'if_unmarried' | 'always_required'
  patronimicWarning?: boolean
  formularPrintLaConsulat?: boolean
  munchenAcelasiZiBonusPasaport?: boolean
}

// ─── WIZARD ──────────────────────────────────────────────────────────────────

export type ProblemType = 'pasaport' | 'buletin' | 'titlu-calatorie' | 'procura' | 'transcriere-nastere'

export type SituationFlags = {
  // Wizard Step 2
  bundesland?: BundeslandCode
  region?: RegionCode
  consulate?: ConsulateId       // derivat automat din bundesland

  // Path Pașaport
  hasDomiciliuRO?: boolean
  isPrimulPasaport?: boolean
  locuNastere?: 'ro' | 'de-strainatate'  // Q3 path pașaport + buletin
  pasaportStatus?: 'expirat-distrus' | 'pierdut-furat'
  pasaportCrdsCase?: 'expirat-deteriorat' | 'pierdut-furat' | 'primul'
  pasaportPierdutFurat?: boolean
  isMinorPasaport?: boolean

  // Path Buletin
  buletinStatus?: 'expirat' | 'pierdut-furat-distrus' | 'niciodata'
  hasDomiciliuAnteriorRO?: boolean  // a mai fost înregistrat vreodată în RO
  primulBuletin?: boolean
  documentPierdut?: 'pierdut' | 'furat' | 'distrus'
  tipActSolicitat?: 'CEI' | 'CIS'

  // Path Titlu de călătorie
  actDisponibil?: 'pasaport-expirat' | 'buletin-expirat' | 'ambele'
  urgenta?: 'sub-3-zile' | '1-2-saptamani'
  tipDocumentLipsa?: 'pasaport' | 'buletin' | 'ambele'

  // Path Procură
  scopProcura?: 'vanzare' | 'mostenire' | 'altceva'
  areNotar?: boolean
  notarAles?: boolean

  // Condiționale checklist (toate path-urile, colectate în checklist nu în wizard)
  isCasatorit?: boolean
  siASchimbatNume?: boolean
  hasMinorChildren?: boolean
}

// ─── GUIDE ID ────────────────────────────────────────────────────────────────

export type GuideId =
  | 'pasaport-crds-de'
  | 'pasaport-crds-de-pierdut'
  | 'pasaport-crds-nou-de'
  | 'pasaport-minor-crds-de'
  | 'pasaport-de-cu-domiciliu'
  | 'pasaport-de-cu-domiciliu-pierdut'
  | 'buletin-de-fara-domiciliu'
  | 'buletin-de-cu-domiciliu'
  | 'buletin-de-fara-domiciliu-pierdut'
  | 'buletin-de-cu-domiciliu-pierdut'
  | 'buletin-de-primul-de'
  | 'buletin-de-primul-de-b'
  | 'titlu-calatorie-urgenta-de'
  | 'titlu-calatorie-de'
  | 'procura-vanzare-de'
  | 'procura-mostenire-de'
  | 'procura-generala-de'
  | 'transcriere-nastere-de'
  | 'pasaport-crds-it'
  | 'pasaport-crds-it-pierdut'
  | 'pasaport-crds-nou-it'
  | 'pasaport-minor-crds-it'
  | 'pasaport-it-cu-domiciliu'
  | 'pasaport-it-cu-domiciliu-pierdut'
  | 'buletin-it-fara-domiciliu'
  | 'buletin-it-cu-domiciliu'
  | 'buletin-it-fara-domiciliu-pierdut'
  | 'buletin-it-cu-domiciliu-pierdut'
  | 'buletin-it-primul-it'
  | 'buletin-it-primul-it-b'
  | 'titlu-calatorie-urgenta-it'
  | 'titlu-calatorie-it'
  | 'procura-vanzare-it'
  | 'procura-mostenire-it'
  | 'procura-generala-it'
  | 'transcriere-nastere-it'

export type RouteId = 'route-a' | 'route-b' | 'route-a-it' | 'route-b-it'

export type WizardResult =
  | { type: 'guide'; guideId: GuideId }
  | { type: 'route'; routeId: RouteId; guideAId: GuideId; guideBId: GuideId }
  | { type: 'waitlist'; country: string; service: string }

// ─── CONȚINUT GHID ───────────────────────────────────────────────────────────

export type SourceLabel =
  | 'oficial-mae'       // de pe site-urile consulatelor / MAI / DEPABD
  | 'comunitate'        // experiențe verificate din grupuri Facebook diaspora
  | 'atentie-frecventa' // greșeală comună confirmată
  | 'actualizat-recent' // informație schimbată față de ce circulă pe internet
  | 'sfat-actero'       // concluzie editorială ActeRO

export type InfoBlock = {
  text: string
  source: SourceLabel
  sourceDate?: string  // ex: 'Septembrie 2025' — doar pentru 'actualizat-recent'
}

export type GuideStep = {
  id: number
  title: string
  shortLabel: string   // pentru progress dots
  isFree: boolean
  blocks: InfoBlock[]
  actionItem?: {
    label: string
    detail: string
  }
  partnerPrompt?: {
    text: string
    partnerType: 'notar' | 'traducator' | 'avocat'
  }
  hasConsulateCard?: boolean   // true = afișează card dinamic consulat (Pas 5)
  estimatedDays?: string
}

export type Guide = {
  id: GuideId
  problemType: ProblemType
  country: string
  title: string
  subtitle: string
  estimatedWeeks: string
  estimatedAppointments: number
  difficulty: 'simplu' | 'mediu' | 'complex'
  steps: GuideStep[]
  checklist: Checklist
  paywallTeaser: string[]       // bullets afișate în paywall banner
  crossSell?: GuideId[]         // ghiduri sugerate la final
}

// ─── CHECKLIST ───────────────────────────────────────────────────────────────

export type ChecklistItem = {
  id: string
  name: string
  detail: string
  isRequired: boolean
  stepRef?: number
  showExpiry?: boolean
}

export type ChecklistSection = {
  title: string
  isConditional: boolean
  conditionKey?: keyof SituationFlags
  conditionValue?: boolean | string
  items: ChecklistItem[]
}

export type Checklist = {
  guideId: GuideId
  intro: string
  sections: ChecklistSection[]
}

// ─── CHECKLIST STATE ─────────────────────────────────────────────────────────

export type ChecklistItemState = {
  checked: boolean
  expiryDate?: string
  note?: string
  notifyExpiry?: boolean
}

export type TrackerStepState = {
  status: 'done' | 'active' | 'todo'
  date?: string        // data calendaristică setată de user
  note?: string
}

// ─── PARTENERI ───────────────────────────────────────────────────────────────

export type PartnerType = 'notar' | 'traducator' | 'avocat'

export type PartnerContact = {
  type: 'whatsapp' | 'email' | 'website' | 'econsulat' | 'phone'
  value: string
  label: string
}

export type PartnerReview = {
  id: string
  authorName: string
  authorCity?: string
  text: string
  rating: number
  isVerified: boolean
  createdAt: string
}

export type Partner = {
  id: string
  isActive: boolean
  name: string
  type: PartnerType
  isOfficial: boolean
  isVerified: boolean
  city: string
  country: string
  description: string
  schedule?: string
  languages: string[]
  responseTime?: string
  tags: string[]
  contact: PartnerContact
  rating: number
  reviewCount: number
  reviews: PartnerReview[]
}

// ─── SESSION ─────────────────────────────────────────────────────────────────

export type UserSession = {
  id: string
  createdAt: string
  documentType: ProblemType
  country: string
  situation: SituationFlags
  guideId: GuideId
  isPaid: boolean
  paymentReferenceId?: string
  paidAt?: string
  email?: string
  accessToken?: string
  tokenExpiresAt?: string
  lastAccessedAt?: string
  checklistState: Record<string, ChecklistItemState>
  trackerState: Record<number, TrackerStepState>
  notes: Record<number, string>
  completedAt?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}

// ─── API PAYLOADS ─────────────────────────────────────────────────────────────

export type CreateSessionPayload = {
  problemType: ProblemType
  country: string
  situation: SituationFlags
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}

export type CreateSessionResponse = {
  sessionId: string
  guideId: GuideId
  wizardResult: WizardResult
}

export type WaitlistPayload = {
  email?: string
  phone?: string
  country: string
  service: string
  sourceUrl?: string
  utmSource?: string
}

export type HelpRequestPayload = {
  firstName?: string
  email: string
  guideId?: GuideId
  stepNumber?: number
  message: string
  sessionId?: string
}
