import {
  bundeslandOptions,
  bundeslandToConsulate,
  consulates as germanConsulates,
  getConsulateByBundesland as getGermanConsulateByBundesland,
} from '@/lib/content/consulates/de'
import {
  italyConsulates,
  italyRegionOptions,
  italyRegionToConsulate,
} from '@/lib/content/consulates/it'
import {
  spainConsulates,
  spainRegionOptions,
  spainRegionToConsulate,
} from '@/lib/content/consulates/es'
import {
  ukConsulates,
  ukRegionOptions,
  ukRegionToConsulate,
} from '@/lib/content/consulates/uk'
import type {
  BundeslandCode,
  ConsulateId,
  ConsulateInfo,
  CountryCode,
  GermanyConsulateId,
  ItalyConsulateId,
  ItalyRegionCode,
  RegionCode,
  SpainConsulateId,
  SpainRegionCode,
  UkConsulateId,
  UkRegionCode,
} from '@/types'

export { bundeslandOptions, italyRegionOptions, spainRegionOptions, ukRegionOptions }

export function getRegionOptionsByCountry(country: CountryCode): { code: RegionCode; name: string }[] {
  if (country === 'it') {
    return italyRegionOptions.map((item) => ({ code: item.code, name: item.name }))
  }
  if (country === 'es') {
    return spainRegionOptions.map((item) => ({ code: item.code, name: item.name }))
  }
  if (country === 'uk') {
    return ukRegionOptions.map((item) => ({ code: item.code, name: item.name }))
  }
  return bundeslandOptions.map((item) => ({ code: item.code, name: item.name }))
}

export function getConsulateCountry(consulateId: ConsulateId | null): CountryCode | null {
  if (!consulateId) return null
  if (consulateId === 'bonn' || consulateId === 'muenchen' || consulateId === 'stuttgart' || consulateId === 'berlin') {
    return 'de'
  }
  if (consulateId === 'roma' || consulateId === 'milano' || consulateId === 'bologna' || consulateId === 'torino' || consulateId === 'trieste' || consulateId === 'bari' || consulateId === 'catania') {
    return 'it'
  }
  if (consulateId === 'londra' || consulateId === 'manchester' || consulateId === 'edinburgh') {
    return 'uk'
  }
  return 'es'
}

export function deriveConsulateId(country: CountryCode, region: RegionCode): ConsulateId {
  if (country === 'it') {
    return italyRegionToConsulate[region as ItalyRegionCode]
  }
  if (country === 'es') {
    return spainRegionToConsulate[region as SpainRegionCode]
  }
  if (country === 'uk') {
    return ukRegionToConsulate[region as UkRegionCode]
  }
  return bundeslandToConsulate[region as BundeslandCode]
}

export function deriveConsulateInfo(country: CountryCode, region: RegionCode): ConsulateInfo {
  const consulateId = deriveConsulateId(country, region)
  return getConsulateById(consulateId)
}

export function getConsulateConfirmation(country: CountryCode, region: RegionCode): {
  consulateName: string
  shortNote: string
} {
  const c = deriveConsulateInfo(country, region)
  return {
    consulateName: c.name,
    shortNote: 'Adresa, programul și informațiile de contact le găsești în ghidul tău.',
  }
}

export function getConsulateById(id: ConsulateId): ConsulateInfo {
  const country = getConsulateCountry(id)
  if (country === 'it') {
    return italyConsulates[id as ItalyConsulateId]
  }
  if (country === 'es') {
    return spainConsulates[id as SpainConsulateId]
  }
  if (country === 'uk') {
    return ukConsulates[id as UkConsulateId]
  }
  return germanConsulates[id as GermanyConsulateId]
}

export function getConsulateByBundesland(bundesland: BundeslandCode): ConsulateInfo {
  return getGermanConsulateByBundesland(bundesland)
}

export function getConsulateCard(consulateId: ConsulateId): ConsulateInfo & { warnings: string[] } {
  const c = getConsulateById(consulateId)

  const warnings: string[] = []
  if (c.staffShortageNotice) {
    warnings.push('Capacitate redusă sau date neclare pe site — verifică direct la consulat înainte de drum.')
  }
  if (c.addressNote) {
    warnings.push(c.addressNote)
  }
  if (c.fotografiiLaGhiseu) {
    warnings.push('Fotografiile se fac la ghișeu — nu veni cu fotografii proprii pentru pașaport.')
  }
  if (c.paymentMethod.includes('verifică') || c.paymentMethod.includes('⚠️')) {
    warnings.push('Metoda de plată nu este clară pe site — confirmă direct la ghișeu.')
  }
  if (consulateId === 'bologna') {
    warnings.push('La Bologna, programarea nu este obligatorie pentru toate fluxurile uzuale.')
  }
  if (consulateId === 'catania') {
    warnings.push('La Catania, site-ul este neîntreținut. Confirmarea directă este obligatorie înainte de deplasare.')
  }

  return { ...c, warnings }
}
