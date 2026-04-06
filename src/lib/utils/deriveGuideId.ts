// ActeRO — lib/utils/deriveGuideId.ts
// Transformă răspunsurile din wizard în GuideId sau RouteId
// Bazat pe spec_final_v5.3 — toate bifurcările sunt finale

import type { ProblemType, SituationFlags, GuideId, WizardResult } from '@/types'

export function deriveGuideId(
  problemType: ProblemType,
  country: string,
  situation: SituationFlags
): WizardResult {
  // MVP — doar Germania disponibilă
  if (country !== 'de') {
    return { type: 'waitlist', country, service: problemType }
  }

  switch (problemType) {
    case 'pasaport':
      return derivePasaport(situation)
    case 'buletin':
      return deriveBuletin(situation)
    case 'titlu-calatorie':
      return deriveTitluCalatorie(situation)
    case 'procura':
      return deriveProcura(situation)
    case 'transcriere-nastere':
      return guide('transcriere-nastere-de')
    default:
      return { type: 'waitlist', country, service: problemType }
  }
}

// ─── PATH 1 — PAȘAPORT ───────────────────────────────────────────────────────

function derivePasaport(s: SituationFlags): WizardResult {
  // Domiciliu România
  if (s.hasDomiciliuRO) {
    if (s.pasaportStatus === 'pierdut-furat') {
      return guide('pasaport-de-cu-domiciliu-pierdut')
    }
    // expirat sau distrus → Ghid #3
    return guide('pasaport-de-cu-domiciliu')
  }

  // Domiciliu Germania
  if (!s.isPrimulPasaport) {
    if (s.pasaportStatus === 'pierdut-furat') {
      return guide('pasaport-crds-de-pierdut')
    }
    // A mai avut pașaport — expirat sau distrus → Ghid #1
    return guide('pasaport-crds-de')
  }

  // Primul pașaport — bifurcare după locul nașterii
  if (s.locuNastere === 'ro') {
    // Născut în România, are CNP → Ghid #2
    return guide('pasaport-crds-nou-de')
  }

  // Născut în Germania/străinătate → Route A
  // Trebuie mai întâi transcriere certificat de naștere
  return {
    type: 'route',
    routeId: 'route-a',
    guideAId: 'transcriere-nastere-de',
    guideBId: 'pasaport-crds-nou-de',
  }
}

// ─── PATH 2 — BULETIN ────────────────────────────────────────────────────────

function deriveBuletin(s: SituationFlags): WizardResult {
  // Domiciliu activ în România
  if (s.hasDomiciliuRO) {
    if (s.buletinStatus === 'pierdut-furat-distrus') {
      return guide('buletin-de-cu-domiciliu-pierdut')
    }
    return guide('buletin-de-cu-domiciliu')
  }

  // Fără domiciliu activ în România
  // Q3: a mai fost vreodată înregistrat în RO?
  if (s.hasDomiciliuAnteriorRO === false) {
    // Niciodată înregistrat — bifurcare după locul nașterii
    if (s.locuNastere === 'ro') {
      // Născut în România, are CNP, dar niciodată înregistrat → Ghid #9
      return guide('buletin-de-primul-de')
    }
    // Născut în Germania/străinătate → Route B
    // Trebuie mai întâi transcriere certificat de naștere
    return {
      type: 'route',
      routeId: 'route-b',
      guideAId: 'transcriere-nastere-de',
      guideBId: 'buletin-de-primul-de-b',
    }
  }

  // A mai fost înregistrat în RO (hasDomiciliuAnteriorRO === true sau undefined)
  if (s.buletinStatus === 'pierdut-furat-distrus') {
    return guide('buletin-de-fara-domiciliu-pierdut')
  }
  return guide('buletin-de-fara-domiciliu')
}

// ─── PATH 3 — TITLU DE CĂLĂTORIE ─────────────────────────────────────────────

function deriveTitluCalatorie(s: SituationFlags): WizardResult {
  // Q1 (tipDocumentLipsa) nu schimbă ghidul — ajustează doar lista de documente
  if (s.urgenta === 'sub-3-zile') {
    return guide('titlu-calatorie-urgenta-de')
  }
  return guide('titlu-calatorie-de')
}

// ─── PATH 4 — PROCURĂ ────────────────────────────────────────────────────────

function deriveProcura(s: SituationFlags): WizardResult {
  // Q2 (areNotar) nu schimbă ghidul — ajustează conținut Pas 5
  switch (s.scopProcura) {
    case 'vanzare':
      return guide('procura-vanzare-de')
    case 'mostenire':
      return guide('procura-mostenire-de')
    default:
      return guide('procura-generala-de')
  }
}

// ─── HELPER ───────────────────────────────────────────────────────────────────

function guide(guideId: GuideId): WizardResult {
  return { type: 'guide', guideId }
}
