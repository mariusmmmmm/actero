import type { ConsulateId } from '@/types'
import { getGuideCountryCode, localizeGuideTextForCountry } from '@/lib/guides/countryCopy'
import {
  getBirthPostalRule,
  getRnneprPaymentRule,
  getTravelBookingRule,
  getTravelIssuanceRule,
} from '@/lib/guides/consulateRules'

export interface TrackerStep {
  id: string
  title: string
  shortLabel?: string
  todoNote?: string
}

export function getGuideSteps(
  guideId: string | null,
  consulate: ConsulateId | null = null
): TrackerStep[] {
  if (!guideId) return []
  const country = getGuideCountryCode(guideId)
  return personalizeTrackerSteps(STEPS[guideId] ?? STEPS_GENERIC, guideId, consulate).map((step) => ({
    ...step,
    title: localizeGuideTextForCountry(step.title, country),
    shortLabel: step.shortLabel ? localizeGuideTextForCountry(step.shortLabel, country) : step.shortLabel,
    todoNote: step.todoNote ? localizeGuideTextForCountry(step.todoNote, country) : step.todoNote,
  }))
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

const STEPS_BULETIN_LIPSA: TrackerStep[] = [
  { id: 'documente', title: 'Documentele necesare', shortLabel: 'Documente', todoNote: 'Strânge actele care te identifică și clarifică situația pierdere/furt' },
  { id: 'planificare', title: 'Planifică deplasarea în România', shortLabel: 'Planificare', todoNote: 'Verifică SPCLEP-ul competent și cum ajungi în țară' },
  { id: 'pregatire', title: 'Pregătire pentru deplasare', shortLabel: 'Pregătire', todoNote: 'Pune în ordine actele și detaliile despre lipsa documentului' },
  { id: 'spclep', title: 'Ziua la SPCLEP', shortLabel: 'SPCLEP', todoNote: 'Dai declarația și depui cererea pentru noua carte de identitate' },
  { id: 'ridicare', title: 'Ridică noul buletin', shortLabel: 'Ridicare', todoNote: 'Verifică dacă primești CEI sau CIS și cum se ridică în localitatea ta' },
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

const STEPS_TITLU_STANDARD: TrackerStep[] = [
  { id: 'documente', title: 'Documentele necesare', shortLabel: 'Documente', todoNote: 'Pregătește actul românesc în original și o copie' },
  { id: 'fotografii', title: 'Pregătește fotografiile', shortLabel: 'Fotografii', todoNote: 'Regulile diferă în funcție de consulat' },
  { id: 'consulat', title: 'Mergi la consulat', shortLabel: 'Consulat', todoNote: 'Fără programare · doar în intervalul dedicat' },
  { id: 'ridicare', title: 'Ridică titlul de călătorie', shortLabel: 'Ridicare', todoNote: 'De regulă în aceeași zi' },
  { id: 'romania', title: 'Ce faci în România', shortLabel: 'România', todoNote: 'Rezolvă documentul permanent înainte să pleci iar' },
]

const STEPS_PROCURA: TrackerStep[] = [
  { id: 'documente', title: 'Documentele necesare', shortLabel: 'Documente', todoNote: 'Strânge actul de identitate, datele mandatarului și cerințele notarului' },
  { id: 'pregatire', title: 'Pregătește documentele', shortLabel: 'Pregătire', todoNote: 'Scanează actele și clarifică textul procurii cu notarul din România' },
  { id: 'programare', title: 'Obține programarea', shortLabel: 'Programare', todoNote: 'Cererea pentru procuri se face din econsulat.ro' },
  { id: 'consulat', title: 'Mergi la consulat', shortLabel: 'Consulat', todoNote: 'Te prezinți personal cu documentele în original' },
  { id: 'semnare', title: 'Semnează procura', shortLabel: 'Semnare', todoNote: 'Verifici cu atenție textul înainte să semnezi' },
  { id: 'trimitere', title: 'Trimite procura în România', shortLabel: 'Trimitere', todoNote: 'Trimite originalul către notar sau mandatar cu tracking' },
]

const STEPS_PROCURA_VANZARE: TrackerStep[] = [
  { id: 'documente', title: 'Adună documentele necesare', shortLabel: 'Documente', todoNote: 'Act identitate, act de proprietate și datele mandatarului' },
  { id: 'continut', title: 'Pregătește conținutul procurii', shortLabel: 'Conținut', todoNote: 'Clarifică puterile exacte cu notarul din România' },
  { id: 'cerere', title: 'Creează cererea pe econsulat.ro', shortLabel: 'Cerere', todoNote: 'Încarcă actele cerute și verifică dacă există pași suplimentari înainte de programare' },
  { id: 'programare', title: 'Obține programarea la consulat', shortLabel: 'Programare', todoNote: 'Verifică din timp dacă ai de plătit taxa de 3€ înainte de prezentare' },
  { id: 'pregatire', title: 'Pregătire pentru ziua programării', shortLabel: 'Pregătire', todoNote: 'Verifică metoda de plată a consulatului tău' },
  { id: 'consulat', title: 'Ziua consulatului — semnezi procura', shortLabel: 'Consulat', todoNote: 'Verifică atent datele imobilului și ale mandatarului înainte să semnezi' },
  { id: 'trimitere', title: 'Trimite procura și coordonează cu notarul', shortLabel: 'Trimitere', todoNote: 'Trimite duplicatul cu tracking și o scanare către notar' },
]

const STEPS_PROCURA_GENERALA: TrackerStep[] = [
  { id: 'documente', title: 'Documentele necesare', shortLabel: 'Documente', todoNote: 'Pregătește actul de identitate și datele complete ale mandatarului' },
  { id: 'continut', title: 'Stabilește conținutul exact al procurii', shortLabel: 'Conținut', todoNote: 'Clarifică exact operațiunile cu notarul, banca sau autoritatea din România' },
  { id: 'taxa', title: 'Plătește taxa de publicitate notarială', shortLabel: 'Taxă', todoNote: 'Doar dacă procura va fi folosită la notar în România' },
  { id: 'cerere', title: 'Cerere pe econsulat.ro', shortLabel: 'Cerere', todoNote: 'Selectează Acte notariale → Autentificări → Procuri' },
  { id: 'programare', title: 'Obține programarea', shortLabel: 'Programare', todoNote: 'Disponibilă după validarea cererii' },
  { id: 'consulat', title: 'Ziua consulatului — semnezi și ridici procura', shortLabel: 'Consulat', todoNote: 'Procura se eliberează pe loc, în aceeași zi' },
  { id: 'trimitere', title: 'Trimite procura mandatarului în România', shortLabel: 'Trimitere', todoNote: 'Trimite originalul prin curier și păstrează o copie scanată' },
]

const STEPS_TRANSCRIERE_NASTERE: TrackerStep[] = [
  { id: 'documente', title: 'Documentele necesare', shortLabel: 'Documente', todoNote: 'Alege între Formule A și Geburtsurkunde + verifică actele părinților' },
  { id: 'pregatire', title: 'Pregătește documentele', shortLabel: 'Pregătire', todoNote: 'Scanează actele și verifică particularitățile consulatului tău' },
  { id: 'cerere', title: 'Creează cererea pe econsulat.ro', shortLabel: 'Cerere', todoNote: 'Selectează serviciul de transcriere naștere din Acte de stare civilă' },
  { id: 'programare', title: 'Obține programarea', shortLabel: 'Programare', todoNote: 'Disponibilă după validarea cererii în econsulat' },
  { id: 'consulat', title: 'Pregătire pentru ziua programării', shortLabel: 'Consulat', todoNote: 'Originale + copii și, dacă vrei poștă unde este disponibilă, pregătești tot ce cere consulatul tău' },
  { id: 'depunere', title: 'Ziua consulatului', shortLabel: 'Depunere', todoNote: 'Semnezi declarația că nașterea nu a mai fost înscrisă în registrele românești' },
  { id: 'ridicare', title: 'Ridică certificatul românesc', shortLabel: 'Ridicare', todoNote: 'Verifică programul de ridicare și dacă există opțiune prin poștă la consulatul tău' },
]

const STEPS_GENERIC: TrackerStep[] = [
  { id: 'documente', title: 'Strânge documentele', shortLabel: 'Documente' },
  { id: 'cerere', title: 'Depune cererea', shortLabel: 'Cerere' },
  { id: 'autoritate', title: 'Prezintă-te la autoritate', shortLabel: 'Autoritate' },
  { id: 'ridicare', title: 'Ridică documentul', shortLabel: 'Ridicare' },
]

const STEPS_BULETIN_CONSULAT_ES: TrackerStep[] = [
  { id: 'documente', title: 'Verifică documentele necesare', shortLabel: 'Documente', todoNote: 'Confirmă regula exactă cu consulatul tău' },
  { id: 'programare', title: 'Fă programarea', shortLabel: 'Programare', todoNote: 'Programarea pe econsulat.ro este obligatorie' },
  { id: 'fotografii', title: 'Pregătește fotografiile', shortLabel: 'Fotografii', todoNote: '6 fotografii 3×4 cm, fond alb' },
  { id: 'consulat', title: 'Prezintă-te la consulat', shortLabel: 'Consulat', todoNote: 'Mergi cu originalele și fotografiile' },
  { id: 'ridicare', title: 'Ridică cartea de identitate', shortLabel: 'Ridicare', todoNote: 'Verifică intervalul de ridicare la consulatul tău' },
]

const STEPS: Record<string, TrackerStep[]> = {
  'pasaport-crds-de': STEPS_PASAPORT,
  'pasaport-crds-de-pierdut': STEPS_PASAPORT,
  'pasaport-crds-nou-de': STEPS_PASAPORT,
  'pasaport-minor-crds-de': STEPS_PASAPORT,
  'pasaport-de-cu-domiciliu': STEPS_PASAPORT,
  'pasaport-de-cu-domiciliu-pierdut': STEPS_PASAPORT,
  'buletin-de-fara-domiciliu': STEPS_BULETIN,
  'buletin-de-cu-domiciliu': STEPS_BULETIN,
  'buletin-de-fara-domiciliu-pierdut': STEPS_BULETIN_LIPSA,
  'buletin-de-cu-domiciliu-pierdut': STEPS_BULETIN_LIPSA,
  'buletin-de-primul-de': STEPS_BULETIN_PRIMUL,
  'buletin-de-primul-de-b': STEPS_BULETIN_PRIMUL_B,
  'titlu-calatorie-urgenta-de': STEPS_TITLU_URGENTA,
  'titlu-calatorie-de': STEPS_TITLU_STANDARD,
  'procura-vanzare-de': STEPS_PROCURA_VANZARE,
  'procura-mostenire-de': STEPS_PROCURA,
  'procura-generala-de': STEPS_PROCURA_GENERALA,
  'transcriere-nastere-de': STEPS_TRANSCRIERE_NASTERE,
  'pasaport-crds-it': STEPS_PASAPORT,
  'pasaport-crds-it-pierdut': STEPS_PASAPORT,
  'pasaport-crds-nou-it': STEPS_PASAPORT,
  'pasaport-minor-crds-it': STEPS_PASAPORT,
  'pasaport-it-cu-domiciliu': STEPS_PASAPORT,
  'pasaport-it-cu-domiciliu-pierdut': STEPS_PASAPORT,
  'buletin-it-fara-domiciliu': STEPS_BULETIN,
  'buletin-it-cu-domiciliu': STEPS_BULETIN,
  'buletin-it-fara-domiciliu-pierdut': STEPS_BULETIN_LIPSA,
  'buletin-it-cu-domiciliu-pierdut': STEPS_BULETIN_LIPSA,
  'buletin-it-primul-it': STEPS_BULETIN_PRIMUL,
  'buletin-it-primul-it-b': STEPS_BULETIN_PRIMUL_B,
  'titlu-calatorie-urgenta-it': STEPS_TITLU_URGENTA,
  'titlu-calatorie-it': STEPS_TITLU_STANDARD,
  'procura-vanzare-it': STEPS_PROCURA_VANZARE,
  'procura-mostenire-it': STEPS_PROCURA,
  'procura-generala-it': STEPS_PROCURA_GENERALA,
  'transcriere-nastere-it': STEPS_TRANSCRIERE_NASTERE,
  'pasaport-crds-es': STEPS_PASAPORT,
  'pasaport-es-cu-domiciliu': STEPS_PASAPORT,
  'pasaport-crds-es-pierdut': STEPS_PASAPORT,
  'pasaport-es-cu-domiciliu-pierdut': STEPS_PASAPORT,
  'pasaport-crds-pierdut-combinat-es': STEPS_PASAPORT,
  'buletin-es-cu-domiciliu': STEPS_BULETIN,
  'buletin-es-cu-domiciliu-minor': STEPS_BULETIN_PRIMUL,
  'buletin-es-majorat': STEPS_BULETIN_PRIMUL,
  'buletin-es-fara-domiciliu-minor': STEPS_BULETIN_CONSULAT_ES,
  'buletin-es-fara-domiciliu': STEPS_BULETIN_CONSULAT_ES,
  'buletin-es-pierdut': STEPS_BULETIN_CONSULAT_ES,
  'titlu-calatorie-es': STEPS_TITLU_STANDARD,
  'titlu-calatorie-urgenta-es': STEPS_TITLU_URGENTA,
  'procura-generala-es': STEPS_PROCURA_GENERALA,
  'procura-pensie-es': STEPS_PROCURA,
  'procura-vanzare-es': STEPS_PROCURA_VANZARE,
  'transcriere-nastere-es': STEPS_TRANSCRIERE_NASTERE,
}

function personalizeTrackerSteps(
  steps: TrackerStep[],
  guideId: string | null,
  consulate: ConsulateId | null
): TrackerStep[] {
  return steps.map((step) => {
    if ((guideId === 'procura-vanzare-de' || guideId === 'procura-vanzare-it') && step.id === 'cerere' && consulate === 'bonn') {
      return {
        ...step,
        todoNote: 'La Bonn, încarci din timp copiile cerute înainte de programare.',
      }
    }

    if ((guideId === 'procura-vanzare-de' || guideId === 'procura-vanzare-it') && step.id === 'programare') {
      return {
        ...step,
        todoNote: getRnneprPaymentRule(consulate),
      }
    }

    if ((guideId === 'transcriere-nastere-de' || guideId === 'transcriere-nastere-it') && step.id === 'consulat') {
      return {
        ...step,
        todoNote: getBirthPostalRule(consulate)
          ? 'Originale + copii, iar pentru poștă pregătești și plicul cerut de consulatul tău.'
          : 'Originale + copii, pregătite pentru consulatul tău.',
      }
    }

    if ((guideId === 'transcriere-nastere-de' || guideId === 'transcriere-nastere-it') && step.id === 'ridicare') {
      return {
        ...step,
        todoNote: getBirthPostalRule(consulate)
          ? 'Verifică programul de ridicare sau folosește opțiunea prin poștă, dacă ai pregătit-o la depunere.'
          : 'Verifică programul de ridicare al consulatului tău.',
      }
    }

    if (guideId === 'titlu-calatorie-urgenta-it' && step.id === 'consulat') {
      return {
        ...step,
        todoNote: getTravelBookingRule(consulate, true),
      }
    }

    if (guideId === 'titlu-calatorie-urgenta-it' && step.id === 'ghiseu') {
      return {
        ...step,
        todoNote: getTravelIssuanceRule(consulate),
      }
    }

    if (guideId === 'titlu-calatorie-it' && step.id === 'consulat') {
      return {
        ...step,
        todoNote: getTravelBookingRule(consulate, false),
      }
    }

    if (guideId === 'titlu-calatorie-it' && step.id === 'ridicare') {
      return {
        ...step,
        todoNote: getTravelIssuanceRule(consulate),
      }
    }

    return step
  })
}
