import test from 'node:test'
import assert from 'node:assert/strict'

import {
  deriveConsulateId,
  getConsulateCard,
  getRegionOptionsByCountry,
} from '@/lib/utils/deriveConsulate'
import {
  getPassportLostTranslationRule,
  getTravelBadgeSummary,
  getTravelBookingRule,
  getTravelIssuanceRule,
  getTravelPhotoRule,
} from '@/lib/guides/consulateRules'

test('maps Molise to Bari so Italy wizard uses the right consulate', () => {
  assert.equal(deriveConsulateId('it', 'Molise'), 'bari')
})

test('maps Nordrhein-Westfalen to Bonn for Germany', () => {
  assert.equal(deriveConsulateId('de', 'NW'), 'bonn')
})

test('returns Italy regions instead of German bundeslands for Italy', () => {
  const regions = getRegionOptionsByCountry('it')

  assert.ok(regions.some((region) => region.code === 'Molise'))
  assert.ok(!regions.some((region) => region.code === 'NW'))
})

test('Bologna consulate card keeps the dedicated warning about relaxed booking', () => {
  const card = getConsulateCard('bologna')

  assert.ok(
    card.warnings.some((warning) =>
      warning.includes('programarea nu este obligatorie pentru toate fluxurile uzuale')
    )
  )
})

test('Catania consulate card warns that direct confirmation is mandatory', () => {
  const card = getConsulateCard('catania')

  assert.ok(
    card.warnings.some((warning) =>
      warning.includes('Confirmarea directă este obligatorie înainte de deplasare')
    )
  )
})

test('Italy lost passport rule stays specific to Italy and asks for authorized translation', () => {
  assert.match(
    getPassportLostTranslationRule('roma'),
    /traducere autorizată în română/
  )
})

test('Torino travel rule stays strict and does not imply walk-in availability', () => {
  const bookingRule = getTravelBookingRule('torino', true)
  const badge = getTravelBadgeSummary('torino', true)
  const issuance = getTravelIssuanceRule('torino')

  assert.match(bookingRule, /exclusiv cu programare/)
  assert.match(badge, /numai cu programare/)
  assert.doesNotMatch(issuance, /aceeași zi/)
})

test('Roma urgent travel rule keeps the dedicated 11:00-13:00 urgent window', () => {
  assert.match(getTravelBookingRule('roma', true), /11:00.*13:00/)
})

test('Bonn travel badge remains the generic no-booking Germany flow', () => {
  assert.equal(
    getTravelBadgeSummary('bonn', true),
    'fără programare · aceeași zi'
  )
})

test('Milano travel photo rule stays distinct from Torino for minors', () => {
  assert.match(getTravelPhotoRule('milano'), /1 fotografie/)
  assert.match(getTravelPhotoRule('torino'), /2 fotografii/)
})
