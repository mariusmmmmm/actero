import test from 'node:test'
import assert from 'node:assert/strict'

import { deriveGuideId } from '@/lib/utils/deriveGuideId'

test('routes Germany passport with domicile in Romania and lost passport to the dedicated guide', () => {
  const result = deriveGuideId('pasaport', 'de', {
    hasDomiciliuRO: true,
    pasaportStatus: 'pierdut-furat',
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'pasaport-de-cu-domiciliu-pierdut',
  })
})

test('routes Italy passport with domicile in Romania and lost passport to the dedicated guide', () => {
  const result = deriveGuideId('pasaport', 'it', {
    hasDomiciliuRO: true,
    pasaportStatus: 'pierdut-furat',
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'pasaport-it-cu-domiciliu-pierdut',
  })
})

test('routes first passport born abroad to the transcriere + passport route in Germany', () => {
  const result = deriveGuideId('pasaport', 'de', {
    isPrimulPasaport: true,
    locuNastere: 'de-strainatate',
  })

  assert.deepEqual(result, {
    type: 'route',
    routeId: 'route-a',
    guideAId: 'transcriere-nastere-de',
    guideBId: 'pasaport-crds-nou-de',
  })
})

test('routes first passport born abroad to the transcriere + passport route in Italy', () => {
  const result = deriveGuideId('pasaport', 'it', {
    isPrimulPasaport: true,
    locuNastere: 'de-strainatate',
  })

  assert.deepEqual(result, {
    type: 'route',
    routeId: 'route-a-it',
    guideAId: 'transcriere-nastere-it',
    guideBId: 'pasaport-crds-nou-it',
  })
})

test('routes first buletin for someone born abroad to the route-b flow in Italy', () => {
  const result = deriveGuideId('buletin', 'it', {
    hasDomiciliuAnteriorRO: false,
    locuNastere: 'de-strainatate',
  })

  assert.deepEqual(result, {
    type: 'route',
    routeId: 'route-b-it',
    guideAId: 'transcriere-nastere-it',
    guideBId: 'buletin-it-primul-it-b',
  })
})

test('routes urgent travel document flow to the urgent Germany guide', () => {
  const result = deriveGuideId('titlu-calatorie', 'de', {
    urgenta: 'sub-3-zile',
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'titlu-calatorie-urgenta-de',
  })
})

test('routes inheritance procura flow to the Italy inheritance guide', () => {
  const result = deriveGuideId('procura', 'it', {
    scopProcura: 'mostenire',
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'procura-mostenire-it',
  })
})

test('routes Spain passport renewal with Romanian domicile to the dedicated guide', () => {
  const result = deriveGuideId('pasaport', 'es', {
    hasDomiciliuRO: true,
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'pasaport-es-cu-domiciliu',
  })
})

test('routes Spain CRDS passport renewal to the dedicated guide', () => {
  const result = deriveGuideId('pasaport', 'es', {
    hasDomiciliuRO: false,
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'pasaport-crds-es',
  })
})

test('routes Spain CRDS lost passport flow to the dedicated guide', () => {
  const result = deriveGuideId('pasaport', 'es', {
    hasDomiciliuRO: false,
    pasaportStatus: 'pierdut-furat',
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'pasaport-crds-es-pierdut',
  })
})

test('routes Spain CRDS lost passport with urgent travel need to the combined guide', () => {
  const result = deriveGuideId('pasaport', 'es', {
    hasDomiciliuRO: false,
    pasaportStatus: 'pierdut-furat',
    urgenta: 'sub-3-zile',
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'pasaport-crds-pierdut-combinat-es',
  })
})

test('routes Spain passport with Romanian domicile and lost passport to the dedicated guide', () => {
  const result = deriveGuideId('pasaport', 'es', {
    hasDomiciliuRO: true,
    pasaportStatus: 'pierdut-furat',
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'pasaport-es-cu-domiciliu-pierdut',
  })
})

test('routes Spain adult buletin with domicile in Romania to the dedicated guide', () => {
  const result = deriveGuideId('buletin', 'es', {
    hasDomiciliuRO: true,
    isMinorBuletin: false,
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'buletin-es-cu-domiciliu',
  })
})

test('routes Spain majorat buletin flow to the dedicated guide', () => {
  const result = deriveGuideId('buletin', 'es', {
    hasDomiciliuRO: true,
    isMinorBuletin: false,
    isMajoratBuletin: true,
    buletinStatus: 'expirat',
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'buletin-es-majorat',
  })
})

test('routes Spain minor buletin with domicile in Romania to the dedicated guide', () => {
  const result = deriveGuideId('buletin', 'es', {
    hasDomiciliuRO: true,
    isMinorBuletin: true,
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'buletin-es-cu-domiciliu-minor',
  })
})

test('routes Spain adult buletin with domicile in Spain to the dedicated guide', () => {
  const result = deriveGuideId('buletin', 'es', {
    hasDomiciliuRO: false,
    isMinorBuletin: false,
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'buletin-es-fara-domiciliu',
  })
})

test('routes UK CRDS passport renewal to the dedicated guide', () => {
  const result = deriveGuideId('pasaport', 'uk', {
    hasDomiciliuRO: false,
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'pasaport-crds-uk',
  })
})

test('routes UK passport renewal with domicile in Romania to the dedicated guide', () => {
  const result = deriveGuideId('pasaport', 'uk', {
    hasDomiciliuRO: true,
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'pasaport-uk-cu-domiciliu',
  })
})

test('routes UK CRDS lost passport flow to the dedicated guide', () => {
  const result = deriveGuideId('pasaport', 'uk', {
    hasDomiciliuRO: false,
    pasaportStatus: 'pierdut-furat',
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'pasaport-crds-uk-pierdut',
  })
})

test('routes UK lost passport with Romanian domicile to the dedicated guide', () => {
  const result = deriveGuideId('pasaport', 'uk', {
    hasDomiciliuRO: true,
    pasaportStatus: 'pierdut-furat',
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'pasaport-uk-cu-domiciliu-pierdut',
  })
})

test('routes UK minor CRDS passport flow to the dedicated guide', () => {
  const result = deriveGuideId('pasaport', 'uk', {
    hasDomiciliuRO: false,
    isMinorPasaport: true,
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'pasaport-minor-crds-uk',
  })
})

test('routes UK minor passport with domicile in Romania to the dedicated guide', () => {
  const result = deriveGuideId('pasaport', 'uk', {
    hasDomiciliuRO: true,
    isMinorPasaport: true,
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'pasaport-minor-ro-uk',
  })
})

test('routes UK temporary passport flow to the dedicated guide', () => {
  const result = deriveGuideId('pasaport', 'uk', {
    hasDomiciliuRO: false,
    pasaportCrdsCase: 'temporar',
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'pasaport-temporar-uk',
  })
})

test('routes UK adult travel title flow to the dedicated guide', () => {
  const result = deriveGuideId('titlu-calatorie', 'uk', {
    titluSolicitant: 'adult',
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'titlu-calatorie-uk',
  })
})

test('routes UK travel title for minor under 14 to the dedicated guide', () => {
  const result = deriveGuideId('titlu-calatorie', 'uk', {
    titluSolicitant: 'minor-sub14',
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'titlu-calatorie-minor-sub14-uk',
  })
})

test('routes UK travel title for minor 14-18 to the dedicated guide', () => {
  const result = deriveGuideId('titlu-calatorie', 'uk', {
    titluSolicitant: 'minor-14-18',
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'titlu-calatorie-minor-14-18-uk',
  })
})

test('routes UK adult CI renewal to procura CI guide', () => {
  const result = deriveGuideId('buletin', 'uk', {
    buletinStatus: 'expirat',
    hasDomiciliuRO: true,
    isMinorBuletin: false,
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'procura-ci-uk',
  })
})

test('routes UK first minor CI to the dedicated guide', () => {
  const result = deriveGuideId('buletin', 'uk', {
    buletinStatus: 'niciodata',
    hasDomiciliuRO: true,
    isMinorBuletin: true,
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'prima-ci-minor-uk',
  })
})

test('routes UK first adult CI to the dedicated guide', () => {
  const result = deriveGuideId('buletin', 'uk', {
    buletinStatus: 'niciodata',
    hasDomiciliuRO: true,
    isMinorBuletin: false,
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'prima-ci-adult-uk',
  })
})

test('routes UK minor birth transcription to the dedicated guide', () => {
  const result = deriveGuideId('transcriere-nastere', 'uk', {
    isMinorTranscriere: true,
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'transcriere-nastere-minor-uk',
  })
})

test('routes UK adult birth transcription to the dedicated guide', () => {
  const result = deriveGuideId('transcriere-nastere', 'uk', {
    isMinorTranscriere: false,
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'transcriere-nastere-adult-uk',
  })
})

test('routes UK general procura flow to the notarial guide', () => {
  const result = deriveGuideId('procura', 'uk', {
    scopProcura: 'altceva',
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'procura-generala-uk',
  })
})

test('routes UK marriage transcription to the dedicated guide', () => {
  const result = deriveGuideId('transcriere-casatorie', 'uk', {})

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'transcriere-casatorie-uk',
  })
})

test('routes Spain minor buletin with domicile in Spain to the dedicated guide', () => {
  const result = deriveGuideId('buletin', 'es', {
    hasDomiciliuRO: false,
    isMinorBuletin: true,
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'buletin-es-fara-domiciliu-minor',
  })
})

test('routes Spain lost/furat buletin flow to the dedicated guide', () => {
  const result = deriveGuideId('buletin', 'es', {
    buletinStatus: 'pierdut-furat-distrus',
    hasDomiciliuRO: false,
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'buletin-es-pierdut',
  })
})

test('routes Spain pension procura flow to the dedicated guide', () => {
  const result = deriveGuideId('procura', 'es', {
    scopProcura: 'pensie',
  })

  assert.deepEqual(result, {
    type: 'guide',
    guideId: 'procura-pensie-es',
  })
})

test('sends unsupported Spain passport flows to waitlist', () => {
  const result = deriveGuideId('pasaport', 'es', {
    isPrimulPasaport: true,
  })

  assert.deepEqual(result, {
    type: 'waitlist',
    country: 'es',
    service: 'pasaport',
  })
})

test('sends unsupported countries to waitlist', () => {
  const result = deriveGuideId('pasaport', 'fr', {})

  assert.deepEqual(result, {
    type: 'waitlist',
    country: 'fr',
    service: 'pasaport',
  })
})
