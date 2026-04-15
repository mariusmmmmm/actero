// ActeRO — lib/utils/deriveGuideId.ts
// Transformă răspunsurile din wizard în GuideId sau RouteId
// Bazat pe spec_final_v5.3 — toate bifurcările sunt finale

import type { CountryCode, ProblemType, SituationFlags, GuideId, WizardResult } from '@/types'

export function deriveGuideId(
  problemType: ProblemType,
  country: string,
  situation: SituationFlags
): WizardResult {
  if (country !== 'de' && country !== 'it') {
    return { type: 'waitlist', country, service: problemType }
  }

  return deriveGuideIdByCountry(problemType, country as CountryCode, situation)
}

function deriveGuideIdByCountry(
  problemType: ProblemType,
  country: CountryCode,
  situation: SituationFlags
): WizardResult {
  switch (problemType) {
    case 'pasaport':
      return derivePasaport(country, situation)
    case 'buletin':
      return deriveBuletin(country, situation)
    case 'titlu-calatorie':
      return deriveTitluCalatorie(country, situation)
    case 'procura':
      return deriveProcura(country, situation)
    case 'transcriere-nastere':
      return guide(country === 'it' ? 'transcriere-nastere-it' : 'transcriere-nastere-de')
    default:
      return { type: 'waitlist', country, service: problemType }
  }
}

// ─── PATH 1 — PAȘAPORT ───────────────────────────────────────────────────────

function derivePasaport(country: CountryCode, s: SituationFlags): WizardResult {
  const isItaly = country === 'it'
  // Domiciliu România
  if (s.hasDomiciliuRO) {
    if (s.pasaportStatus === 'pierdut-furat') {
      return guide(isItaly ? 'pasaport-it-cu-domiciliu-pierdut' : 'pasaport-de-cu-domiciliu-pierdut')
    }
    return guide(isItaly ? 'pasaport-it-cu-domiciliu' : 'pasaport-de-cu-domiciliu')
  }

  if (s.isMinorPasaport) {
    return guide(isItaly ? 'pasaport-minor-crds-it' : 'pasaport-minor-crds-de')
  }

  if (!s.isPrimulPasaport) {
    if (s.pasaportStatus === 'pierdut-furat') {
      return guide(isItaly ? 'pasaport-crds-it-pierdut' : 'pasaport-crds-de-pierdut')
    }
    return guide(isItaly ? 'pasaport-crds-it' : 'pasaport-crds-de')
  }

  if (s.locuNastere === 'ro') {
    return guide(isItaly ? 'pasaport-crds-nou-it' : 'pasaport-crds-nou-de')
  }

  return {
    type: 'route',
    routeId: isItaly ? 'route-a-it' : 'route-a',
    guideAId: isItaly ? 'transcriere-nastere-it' : 'transcriere-nastere-de',
    guideBId: isItaly ? 'pasaport-crds-nou-it' : 'pasaport-crds-nou-de',
  }
}

// ─── PATH 2 — BULETIN ────────────────────────────────────────────────────────

function deriveBuletin(country: CountryCode, s: SituationFlags): WizardResult {
  const isItaly = country === 'it'
  // Domiciliu activ în România
  if (s.hasDomiciliuRO) {
    if (s.buletinStatus === 'pierdut-furat-distrus') {
      return guide(isItaly ? 'buletin-it-cu-domiciliu-pierdut' : 'buletin-de-cu-domiciliu-pierdut')
    }
    return guide(isItaly ? 'buletin-it-cu-domiciliu' : 'buletin-de-cu-domiciliu')
  }

  if (s.hasDomiciliuAnteriorRO === false) {
    if (s.locuNastere === 'ro') {
      return guide(isItaly ? 'buletin-it-primul-it' : 'buletin-de-primul-de')
    }
    return {
      type: 'route',
      routeId: isItaly ? 'route-b-it' : 'route-b',
      guideAId: isItaly ? 'transcriere-nastere-it' : 'transcriere-nastere-de',
      guideBId: isItaly ? 'buletin-it-primul-it-b' : 'buletin-de-primul-de-b',
    }
  }

  if (s.buletinStatus === 'pierdut-furat-distrus') {
    return guide(isItaly ? 'buletin-it-fara-domiciliu-pierdut' : 'buletin-de-fara-domiciliu-pierdut')
  }
  return guide(isItaly ? 'buletin-it-fara-domiciliu' : 'buletin-de-fara-domiciliu')
}

// ─── PATH 3 — TITLU DE CĂLĂTORIE ─────────────────────────────────────────────

function deriveTitluCalatorie(country: CountryCode, s: SituationFlags): WizardResult {
  if (s.urgenta === 'sub-3-zile') {
    return guide(country === 'it' ? 'titlu-calatorie-urgenta-it' : 'titlu-calatorie-urgenta-de')
  }
  return guide(country === 'it' ? 'titlu-calatorie-it' : 'titlu-calatorie-de')
}

// ─── PATH 4 — PROCURĂ ────────────────────────────────────────────────────────

function deriveProcura(country: CountryCode, s: SituationFlags): WizardResult {
  switch (s.scopProcura) {
    case 'vanzare':
      return guide(country === 'it' ? 'procura-vanzare-it' : 'procura-vanzare-de')
    case 'mostenire':
      return guide(country === 'it' ? 'procura-mostenire-it' : 'procura-mostenire-de')
    default:
      return guide(country === 'it' ? 'procura-generala-it' : 'procura-generala-de')
  }
}

// ─── HELPER ───────────────────────────────────────────────────────────────────

function guide(guideId: GuideId): WizardResult {
  return { type: 'guide', guideId }
}
