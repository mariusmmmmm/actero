// ActeRO — lib/utils/deriveGuideId.ts
// Transformă răspunsurile din wizard în GuideId sau RouteId
// Bazat pe spec_final_v5.3 — toate bifurcările sunt finale

import type { CountryCode, ProblemType, SituationFlags, GuideId, WizardResult } from '@/types'

export function deriveGuideId(
  problemType: ProblemType,
  country: string,
  situation: SituationFlags
): WizardResult {
  if (country !== 'de' && country !== 'it' && country !== 'es' && country !== 'uk') {
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
      if (country === 'it') return guide('transcriere-nastere-it')
      if (country === 'de') return guide('transcriere-nastere-de')
      if (country === 'es') return guide('transcriere-nastere-es')
      if (country === 'uk') return guide(situation.isMinorTranscriere ? 'transcriere-nastere-minor-uk' : 'transcriere-nastere-adult-uk')
      return { type: 'waitlist', country, service: problemType }
    case 'transcriere-casatorie':
      if (country === 'uk') return guide('transcriere-casatorie-uk')
      return { type: 'waitlist', country, service: problemType }
    default:
      return { type: 'waitlist', country, service: problemType }
  }
}

// ─── PATH 1 — PAȘAPORT ───────────────────────────────────────────────────────

function derivePasaport(country: CountryCode, s: SituationFlags): WizardResult {
  if (country === 'uk') {
    if (s.pasaportCrdsCase === 'temporar') {
      return guide('pasaport-temporar-uk')
    }

    if (s.hasDomiciliuRO) {
      if (s.isMinorPasaport) {
        return guide('pasaport-minor-ro-uk')
      }
      if (s.pasaportStatus === 'pierdut-furat') {
        return guide('pasaport-uk-cu-domiciliu-pierdut')
      }
      return guide('pasaport-uk-cu-domiciliu')
    }

    if (s.isMinorPasaport) {
      return guide('pasaport-minor-crds-uk')
    }

    if (s.pasaportStatus === 'pierdut-furat') {
      return guide('pasaport-crds-uk-pierdut')
    }

    return guide('pasaport-crds-uk')
  }

  if (country === 'es') {
    if (s.pasaportStatus === 'pierdut-furat') {
      if (s.hasDomiciliuRO) {
        return guide('pasaport-es-cu-domiciliu-pierdut')
      }
      if (s.urgenta === 'sub-3-zile') {
        return guide('pasaport-crds-pierdut-combinat-es')
      }
      return guide('pasaport-crds-es-pierdut')
    }
    if (s.isPrimulPasaport || s.isMinorPasaport) {
      return { type: 'waitlist', country, service: 'pasaport' }
    }
    if (s.hasDomiciliuRO) {
      return guide('pasaport-es-cu-domiciliu')
    }
    return guide('pasaport-crds-es')
  }

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
  if (country === 'uk') {
    if (s.buletinStatus === 'niciodata') {
      return guide(s.isMinorBuletin ? 'prima-ci-minor-uk' : 'prima-ci-adult-uk')
    }

    if (s.hasDomiciliuRO && !s.isMinorBuletin) {
      return guide('procura-ci-uk')
    }

    return { type: 'waitlist', country, service: 'buletin' }
  }
  if (country === 'es') {
    if (s.buletinStatus === 'pierdut-furat-distrus') {
      return guide('buletin-es-pierdut')
    }
    if (s.hasDomiciliuRO) {
      if (s.isMajoratBuletin) {
        return guide('buletin-es-majorat')
      }
      return guide(s.isMinorBuletin ? 'buletin-es-cu-domiciliu-minor' : 'buletin-es-cu-domiciliu')
    }
    return guide(s.isMinorBuletin ? 'buletin-es-fara-domiciliu-minor' : 'buletin-es-fara-domiciliu')
  }

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
  if (country === 'uk') {
    if (s.titluSolicitant === 'minor-sub14') return guide('titlu-calatorie-minor-sub14-uk')
    if (s.titluSolicitant === 'minor-14-18') return guide('titlu-calatorie-minor-14-18-uk')
    return guide('titlu-calatorie-uk')
  }
  if (country === 'es') {
    if (s.urgenta === 'sub-3-zile') return guide('titlu-calatorie-urgenta-es')
    return guide('titlu-calatorie-es')
  }
  if (s.urgenta === 'sub-3-zile') {
    return guide(country === 'it' ? 'titlu-calatorie-urgenta-it' : 'titlu-calatorie-urgenta-de')
  }
  return guide(country === 'it' ? 'titlu-calatorie-it' : 'titlu-calatorie-de')
}

// ─── PATH 4 — PROCURĂ ────────────────────────────────────────────────────────

function deriveProcura(country: CountryCode, s: SituationFlags): WizardResult {
  if (country === 'uk') {
    return guide('procura-generala-uk')
  }
  if (country === 'es') {
    switch (s.scopProcura) {
      case 'vanzare':
        return guide('procura-vanzare-es')
      case 'pensie':
        return guide('procura-pensie-es')
      case 'mostenire':
        return { type: 'waitlist', country, service: 'procura' }
      default:
        return guide('procura-generala-es')
    }
  }
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
