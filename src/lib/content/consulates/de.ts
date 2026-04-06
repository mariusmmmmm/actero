// ActeRO — lib/content/consulates/de.ts
// Date consulate Germania — verificate live pe site-urile oficiale MAE, Aprilie 2026

import type { BundeslandCode, ConsulateId, ConsulateInfo } from '@/types'

// ─── MAPARE BUNDESLAND → CONSULAT ────────────────────────────────────────────

export const bundeslandToConsulate: Record<BundeslandCode, ConsulateId> = {
  BW: 'stuttgart',
  BY: 'muenchen',
  BE: 'berlin',
  BB: 'berlin',
  HB: 'bonn',
  HH: 'bonn',
  HE: 'bonn',
  MV: 'berlin',
  NI: 'bonn',
  NW: 'bonn',
  RP: 'bonn',
  SL: 'bonn',
  SN: 'berlin',
  ST: 'berlin',
  SH: 'bonn',
  TH: 'berlin',
}

// ─── DATE CONSULATE ───────────────────────────────────────────────────────────

export const consulates: Record<ConsulateId, ConsulateInfo> = {
  bonn: {
    id: 'bonn',
    name: 'Consulatul General al României la Bonn',
    address: 'Legionsweg 14, 53117 Bonn',
    phone: '+49 228 6838135',
    phoneNote: 'doar pentru urgențe — programările exclusiv pe econsulat.ro',
    email: 'info@konsulat-rumaenien-bonn.de',
    website: 'https://bonn.mae.ro',
    googleMapsUrl: 'https://maps.google.com/?q=Legionsweg+14+53117+Bonn',
    wazeUrl: 'https://waze.com/ul?ll=50.7374,7.0982&navigate=yes',
    scheduleDeponere: 'Luni–Vineri · cu programare prealabilă pe econsulat.ro',
    scheduleRidicare: 'Luni–Joi 14:00–15:00 (fără programare)',
    scheduleTitluCalatorie: 'Luni–Vineri 09:00–12:00 (fără programare)',
    paymentMethod: 'exclusiv EC-Karte (card debit bancă germană)',
    postalPickup: false,
    pasaportSearchUrl: 'https://bonn.mae.ro/cauta-pasaport',
    staffShortageNotice: true,
    fotografiiLaGhiseu: false,
    // Surse verificate: bonn.mae.ro/node/734, bonn.mae.ro/node/913 — Aprilie 2026
  },

  muenchen: {
    id: 'muenchen',
    name: 'Consulatul General al României în München',
    address: 'Richard-Strauss-Strasse 149, 81679 München',
    phone: '+49 89 553307',
    phoneNote: 'doar pentru urgențe — programările exclusiv pe econsulat.ro',
    email: 'contact@informatiiconsulare.ro',
    website: 'https://muenchen.mae.ro',
    googleMapsUrl: 'https://maps.google.com/?q=Richard-Strauss-Strasse+149+81679+München',
    wazeUrl: 'https://waze.com/ul?ll=48.1468,11.6085&navigate=yes',
    scheduleDeponere: 'Luni–Joi 08:00–14:00 · Vineri 08:00–12:00 · cu programare',
    scheduleRidicare: 'Luni–Joi 14:00–16:00 (fără programare)',
    scheduleTitluCalatorie: 'În programul normal, fără programare · depunere + eliberare în aceeași zi',
    paymentMethod: 'exclusiv numerar (cash)',
    postalPickup: true,
    postalPickupUrl: 'https://muenchen.mae.ro/node/1546',
    pasaportSearchUrl: 'https://muenchen.mae.ro/cauta-pasaport',
    staffShortageNotice: false,
    fotografiiLaGhiseu: true,
    // Surse verificate: muenchen.mae.ro/node/414, muenchen.mae.ro/node/413 — Aprilie 2026
  },

  stuttgart: {
    id: 'stuttgart',
    name: 'Consulatul General al României la Stuttgart',
    address: 'Hauptstätter Str. 70, 70178 Stuttgart',
    addressNote: '⚠️ Intrarea prin Gerberstr. 28 (nu prin Hauptstätter Str.)',
    phone: '+49 711 6648611',
    phoneNote: 'doar pentru urgențe — programările exclusiv pe econsulat.ro',
    email: 'stuttgart@mae.ro',
    website: 'https://stuttgart.mae.ro',
    googleMapsUrl: 'https://maps.google.com/?q=Hauptstätter+Str.+70+70178+Stuttgart',
    wazeUrl: 'https://waze.com/ul?ll=48.7689,9.1727&navigate=yes',
    scheduleDeponere: 'Luni–Vineri 09:00–15:00 · cu programare',
    scheduleRidicare: 'Luni–Vineri 10:00–14:00 (fără programare)',
    scheduleTitluCalatorie: 'Luni–Vineri 10:00–14:00 (fără programare) · depunere + procesare în același interval',
    paymentMethod: 'POS (EC-Karte) la ghișeu sau transfer bancar în avans',
    paymentNote: 'Transfer: IBAN DE04 1007 0000 0976 1909 01 · BIC DEUTDEBBXXX · cu cel puțin 3 zile înainte',
    postalPickup: true,
    postalPickupUrl: 'https://stuttgart.mae.ro/local-news/1015',
    pasaportSearchUrl: 'https://stuttgart.mae.ro/cauta-pasaport',
    staffShortageNotice: false,
    fotografiiLaGhiseu: false,
    // Surse verificate: stuttgart.mae.ro/node/734, stuttgart.mae.ro/node/913, stuttgart.mae.ro/node/500 — Aprilie 2026
  },

  berlin: {
    id: 'berlin',
    name: 'Ambasada României în R.F. Germania — Secție Consulară',
    address: 'Dorotheenstrasse 62-66, 10117 Berlin',
    phone: '+49 30 21239555',
    phoneNote: 'Call Center MAE București — timp de așteptare ridicat. Alt nr: +49 30 21239514',
    email: 'konsulat.berlin@rumaenische-botschaft.de',
    website: 'https://berlin.mae.ro',
    googleMapsUrl: 'https://maps.google.com/?q=Dorotheenstrasse+62+10117+Berlin',
    wazeUrl: 'https://waze.com/ul?ll=52.5192,13.3827&navigate=yes',
    scheduleDeponere: 'Luni–Vineri 08:00–13:30 · cu programare',
    scheduleRidicare: 'Luni–Vineri 13:00–14:00 (fără programare)',
    scheduleTitluCalatorie: 'Luni–Vineri 08:00–10:00 (fără programare)',
    paymentMethod: '⚠️ Verificați metoda de plată direct la ghișeu',
    postalPickup: false,
    pasaportSearchUrl: 'https://berlin.mae.ro/cauta-pasaport',
    staffShortageNotice: false,
    fotografiiLaGhiseu: false,
    // Surse verificate: berlin.mae.ro/node/270, berlin.mae.ro/node/258 — Aprilie 2026
    // Metoda de plată: nespecificată pe nicio pagină oficială Berlin — DE VERIFICAT
  },
}

// ─── HELPER ───────────────────────────────────────────────────────────────────

export function getConsulateByBundesland(bundesland: BundeslandCode): ConsulateInfo {
  const id = bundeslandToConsulate[bundesland]
  return consulates[id]
}

export function getConsulateById(id: ConsulateId): ConsulateInfo {
  return consulates[id]
}

// ─── LISTE UI ─────────────────────────────────────────────────────────────────

export const bundeslandOptions: { code: BundeslandCode; name: string }[] = [
  { code: 'BW', name: 'Baden-Württemberg' },
  { code: 'BY', name: 'Bayern' },
  { code: 'BE', name: 'Berlin' },
  { code: 'BB', name: 'Brandenburg' },
  { code: 'HB', name: 'Bremen' },
  { code: 'HH', name: 'Hamburg' },
  { code: 'HE', name: 'Hessen' },
  { code: 'MV', name: 'Mecklenburg-Vorpommern' },
  { code: 'NI', name: 'Niedersachsen' },
  { code: 'NW', name: 'Nordrhein-Westfalen' },
  { code: 'RP', name: 'Rheinland-Pfalz' },
  { code: 'SL', name: 'Saarland' },
  { code: 'SN', name: 'Sachsen' },
  { code: 'ST', name: 'Sachsen-Anhalt' },
  { code: 'SH', name: 'Schleswig-Holstein' },
  { code: 'TH', name: 'Thüringen' },
]
