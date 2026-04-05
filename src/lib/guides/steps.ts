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
}
