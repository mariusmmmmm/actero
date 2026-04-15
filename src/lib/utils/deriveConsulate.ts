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
import type {
  BundeslandCode,
  ConsulateId,
  ConsulateInfo,
  CountryCode,
  GermanyConsulateId,
  ItalyConsulateId,
  ItalyRegionCode,
  RegionCode,
} from '@/types'

export { bundeslandOptions, italyRegionOptions }

export function getRegionOptionsByCountry(country: CountryCode): { code: RegionCode; name: string }[] {
  return country === 'it'
    ? italyRegionOptions.map((item) => ({ code: item.code, name: item.name }))
    : bundeslandOptions.map((item) => ({ code: item.code, name: item.name }))
}

export function getConsulateCountry(consulateId: ConsulateId | null): CountryCode | null {
  if (!consulateId) return null
  return consulateId === 'bonn' || consulateId === 'muenchen' || consulateId === 'stuttgart' || consulateId === 'berlin'
    ? 'de'
    : 'it'
}

export function deriveConsulateId(country: CountryCode, region: RegionCode): ConsulateId {
  if (country === 'it') {
    return italyRegionToConsulate[region as ItalyRegionCode]
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
  if (getConsulateCountry(id) === 'it') {
    return italyConsulates[id as ItalyConsulateId]
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
