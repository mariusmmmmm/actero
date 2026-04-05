export interface TrackerStep {
  id: string
  title: string
  shortLabel?: string
  todoNote?: string
}

export function getGuideSteps(guideId: string | null): TrackerStep[] {
  if (!guideId) return []
  return STEPS[guideId] ?? STEPS_GENERIC
}

const STEPS_PASAPORT: TrackerStep[] = [
  { id: 'documente', title: 'Strânge documentele', shortLabel: 'Documente', todoNote: 'Pregătește originalele' },
  { id: 'econsulat', title: 'Cont și cerere pe econsulat.ro', shortLabel: 'Cerere' },
  { id: 'programare', title: 'Obține programarea', shortLabel: 'Programare', todoNote: 'Disponibil după validarea cererii' },
  { id: 'pregatire', title: 'Pregătire pentru consulat', shortLabel: 'Pregătire' },
  { id: 'consulat', title: 'Ziua consulatului', shortLabel: 'Consulat', todoNote: 'La data programării' },
  { id: 'ridicare', title: 'Ridică pașaportul', shortLabel: 'Ridicare', todoNote: 'La ~45 zile lucrătoare de la depunere' },
]

const STEPS_BULETIN: TrackerStep[] = [
  { id: 'documente', title: 'Strânge documentele', shortLabel: 'Documente', todoNote: 'Inclusiv extras CF și taxa plătită' },
  { id: 'planificare', title: 'Planifică deplasarea în România', shortLabel: 'Planificare' },
  { id: 'pregatire', title: 'Pregătire pentru deplasare', shortLabel: 'Pregătire' },
  { id: 'spclep', title: 'Ziua la SPCLEP', shortLabel: 'SPCLEP', todoNote: 'La data deplasării' },
  { id: 'ridicare', title: 'Ridică buletinul', shortLabel: 'Ridicare', todoNote: 'La ~5 zile (CEI) sau ~30 zile (CIS)' },
]

const STEPS_BULETIN_PRIMUL: TrackerStep[] = [
  { id: 'documente', title: 'Documentele necesare', shortLabel: 'Documente', todoNote: 'Pregătește actele de identitate și certificatul de naștere' },
  { id: 'adresa', title: 'Pregătește dovada de adresă', shortLabel: 'Adresă', todoNote: 'Fără adresă în România nu poți depune cererea' },
  { id: 'tip_ci', title: 'Alege tipul de carte de identitate', shortLabel: 'Tip CI' },
  { id: 'planificare', title: 'Planifică deplasarea și programarea', shortLabel: 'Planificare' },
  { id: 'pregatire', title: 'Pregătire pentru ziua deplasării', shortLabel: 'Pregătire' },
  { id: 'spclep', title: 'Ziua la SPCLEP', shortLabel: 'SPCLEP', todoNote: 'La data programării sau a prezentării la ghișeu' },
  { id: 'ridicare', title: 'Ridică buletinul', shortLabel: 'Ridicare', todoNote: 'CEI ~5 zile / CIS ~30–45 zile' },
]

const STEPS_BULETIN_PRIMUL_B: TrackerStep[] = [
  { id: 'documente', title: 'Verifică documentele necesare', shortLabel: 'Documente', todoNote: 'Certificatul transcris trebuie să fie în original și intact' },
  { id: 'pregatire', title: 'Pregătește documentele', shortLabel: 'Pregătire', todoNote: 'Creează contul pe hub.mai.gov.ro și pregătește originalele' },
  { id: 'programare', title: 'Creează cont și programează-te', shortLabel: 'Programare', todoNote: 'Programarea online este obligatorie pentru CEI' },
  { id: 'deplasare', title: 'Planifică deplasarea în România', shortLabel: 'Deplasare' },
  { id: 'spclep', title: 'Ziua la SPCLEP — depunerea cererii', shortLabel: 'SPCLEP', todoNote: 'La data programării confirmate' },
  { id: 'ridicare', title: 'Ridică CEI-ul și activează PIN-urile', shortLabel: 'Ridicare', todoNote: 'În medie ~5 zile calendaristice de la depunere' },
]

const STEPS_TITLU_URGENTA: TrackerStep[] = [
  { id: 'documente', title: 'Identifică documentele necesare', shortLabel: 'Documente', todoNote: 'Asigură-te că ai măcar un document românesc în original' },
  { id: 'pregatire', title: 'Pregătește-te pentru consulat', shortLabel: 'Pregătire', todoNote: 'Verifică pozele și cazul furtului înainte să pleci' },
  { id: 'consulat', title: 'Mergi la consulat azi', shortLabel: 'Consulat', todoNote: 'Fără programare · mergi în intervalul dedicat' },
  { id: 'ghiseu', title: 'La ghișeu', shortLabel: 'Ghișeu', todoNote: 'Primești titlul în aceeași zi dacă identitatea este confirmată' },
  { id: 'romania', title: 'Ce faci după ce ajungi în România', shortLabel: 'România', todoNote: 'Titlul expiră la intrarea în țară · rezolvă imediat documentul permanent' },
]

const STEPS_GENERIC: TrackerStep[] = [
  { id: 'documente', title: 'Strânge documentele', shortLabel: 'Documente' },
  { id: 'cerere', title: 'Depune cererea', shortLabel: 'Cerere' },
  { id: 'autoritate', title: 'Prezintă-te la autoritate', shortLabel: 'Autoritate' },
  { id: 'ridicare', title: 'Ridică documentul', shortLabel: 'Ridicare' },
]

const STEPS: Record<string, TrackerStep[]> = {
  'pasaport-crds-de': STEPS_PASAPORT,
  'pasaport-crds-nou-de': STEPS_PASAPORT,
  'pasaport-de-cu-domiciliu': STEPS_PASAPORT,
  'pasaport-de-cu-domiciliu-pierdut': STEPS_PASAPORT,
  'buletin-de-fara-domiciliu': STEPS_BULETIN,
  'buletin-de-cu-domiciliu': STEPS_BULETIN,
  'buletin-de-fara-domiciliu-pierdut': STEPS_BULETIN,
  'buletin-de-cu-domiciliu-pierdut': STEPS_BULETIN,
  'buletin-de-primul-de': STEPS_BULETIN_PRIMUL,
  'buletin-de-primul-de-b': STEPS_BULETIN_PRIMUL_B,
  'titlu-calatorie-urgenta-de': STEPS_TITLU_URGENTA,
}
