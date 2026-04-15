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

test('sends unsupported countries to waitlist', () => {
  const result = deriveGuideId('pasaport', 'es', {})

  assert.deepEqual(result, {
    type: 'waitlist',
    country: 'es',
    service: 'pasaport',
  })
})
