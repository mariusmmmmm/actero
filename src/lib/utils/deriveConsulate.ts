// ActeRO — lib/utils/deriveConsulate.ts
// Derivă consulatul din Bundesland și expune datele pentru card dinamic

import type { BundeslandCode, ConsulateId, ConsulateInfo } from '@/types'
import {
  bundeslandToConsulate,
  consulates,
  getConsulateByBundesland,
  getConsulateById,
} from '@/lib/content/consulates/de'

export { getConsulateByBundesland, getConsulateById }

// Derivă ConsulateId din Bundesland
export function deriveConsulateId(bundesland: BundeslandCode): ConsulateId {
  return bundeslandToConsulate[bundesland]
}

// Returnează ConsulateInfo complet din Bundesland
export function deriveConsulateInfo(bundesland: BundeslandCode): ConsulateInfo {
  return getConsulateByBundesland(bundesland)
}

// Confirmarea afișată în wizard după selecția Bundesland-ului
export function getConsulateConfirmation(bundesland: BundeslandCode): {
  consulateName: string
  shortNote: string
} {
  const c = deriveConsulateInfo(bundesland)
  return {
    consulateName: c.name,
    shortNote: 'Adresa, programul și informațiile de contact le găsești în ghidul tău.',
  }
}

// Date pentru cardul dinamic din Pas 5 al ghidului
export function getConsulateCard(consulateId: ConsulateId): {
  name: string
  address: string
  addressNote?: string
  phone: string
  phoneNote: string
  googleMapsUrl: string
  wazeUrl: string
  scheduleDeponere: string
  scheduleRidicare: string
  schedulePassportPickup?: string
  scheduleTitluCalatorie: string
  scheduleTravelDoc?: string
  paymentMethod: string
  paymentPassport?: string
  paymentNotarial?: string
  paymentNote?: string
  paymentPassportNote?: string
  paymentNotarialNote?: string
  postalPickup: boolean
  postalPickupUrl?: string
  pasaportSearchUrl: string
  staffShortageNotice: boolean
  fotografiiLaGhiseu: boolean
  starecivilaProgramRidicare?: string
  starecivilaPosta?: boolean
  starecivilaTermen?: string | null
  certNastereParintiRegula?: 'if_ci_lacks_birthplace' | 'if_both_romanian' | 'if_unmarried' | 'always_required'
  patronimicWarning?: boolean
  formularPrintLaConsulat?: boolean
  munchenAcelasiZiBonusPasaport?: boolean
  warnings: string[]
} {
  const c = getConsulateById(consulateId)

  const warnings: string[] = []
  if (c.staffShortageNotice) {
    warnings.push('Deficit de personal anunțat — programările pot fi mai rare decât la alte consulate.')
  }
  if (c.addressNote) {
    warnings.push(c.addressNote)
  }
  if (c.fotografiiLaGhiseu) {
    warnings.push('Fotografiile se fac la consulat — nu veniți cu fotografii proprii.')
  }
  if (c.paymentMethod.includes('⚠️')) {
    warnings.push('Metoda de plată nu este specificată pe site — verificați direct la ghișeu.')
  }

  return {
    name: c.name,
    address: c.address,
    addressNote: c.addressNote,
    phone: c.phone,
    phoneNote: c.phoneNote,
    googleMapsUrl: c.googleMapsUrl,
    wazeUrl: c.wazeUrl,
    scheduleDeponere: c.scheduleDeponere,
    scheduleRidicare: c.scheduleRidicare,
    schedulePassportPickup: c.schedulePassportPickup,
    scheduleTitluCalatorie: c.scheduleTitluCalatorie,
    scheduleTravelDoc: c.scheduleTravelDoc,
    paymentMethod: c.paymentMethod,
    paymentPassport: c.paymentPassport,
    paymentNotarial: c.paymentNotarial,
    paymentNote: c.paymentNote,
    paymentPassportNote: c.paymentPassportNote,
    paymentNotarialNote: c.paymentNotarialNote,
    postalPickup: c.postalPickup,
    postalPickupUrl: c.postalPickupUrl,
    pasaportSearchUrl: c.pasaportSearchUrl,
    staffShortageNotice: c.staffShortageNotice ?? false,
    fotografiiLaGhiseu: c.fotografiiLaGhiseu,
    starecivilaProgramRidicare: c.starecivilaProgramRidicare,
    starecivilaPosta: c.starecivilaPosta,
    starecivilaTermen: c.starecivilaTermen,
    certNastereParintiRegula: c.certNastereParintiRegula,
    patronimicWarning: c.patronimicWarning,
    formularPrintLaConsulat: c.formularPrintLaConsulat,
    munchenAcelasiZiBonusPasaport: c.munchenAcelasiZiBonusPasaport,
    warnings,
  }
}
