import type { CountryCode, GuideId, RouteId } from '@/types'

export function getGuideCountryCode(guideId: string | null): CountryCode {
  if (guideId?.endsWith('-it')) return 'it'
  return 'de'
}

export function getRouteCountryCode(routeId: string | null): CountryCode {
  if (routeId?.endsWith('-it')) return 'it'
  return 'de'
}

export function getCountryLabel(country: CountryCode): string {
  return country === 'it' ? 'Italia' : 'Germania'
}

export function getCountryResidenceDocs(country: CountryCode): string {
  if (country === 'it') {
    return 'carta d’identità italiană, certificato di residenza sau permesso di soggiorno'
  }
  return 'Meldebescheinigung, Anmeldung sau Personalausweis german'
}

export function localizeGuideTextForCountry(text: string, country: CountryCode): string {
  if (country === 'de') return text

  return text
    .replaceAll('Germania', 'Italia')
    .replaceAll('germană', 'italiană')
    .replaceAll('german', 'italian')
    .replaceAll('Auszug aus dem Geburtseintrag', 'estratto multilingue dell’atto di nascita')
    .replaceAll('Geburtsurkunde', 'certificat de naștere italian')
    .replaceAll('Standesamt', 'comune / ufficio di stare civilă')
    .replaceAll('la toate 4 consulatele din Italia', 'la consulatele din Italia')
    .replaceAll('Cum ridici certificatul — inclusiv opțiunea poștă la Stuttgart', 'Cum ridici certificatul și dacă există opțiune prin poștă la consulatul tău')
    .replaceAll('Document domiciliu Germania', 'Document domiciliu Italia')
    .replaceAll('Document de domiciliu în Germania', 'Document de domiciliu în Italia')
    .replaceAll('Dovada rezidenței în Germania', 'Dovada rezidenței în Italia')
    .replaceAll('Document german acceptat direct', 'Document italian acceptat direct')
    .replaceAll('Căsătorie germană netranscrisă', 'Căsătorie italiană netranscrisă')
    .replaceAll('Meldebescheinigung / Anmeldung / Personalausweis german · original · max 5 ani', 'carta d’identità italiană / certificato di residenza / permesso di soggiorno · original · valabil')
    .replaceAll('Meldebescheinigung / Anmeldung / Personalausweis german', 'carta d’identità italiană / certificato di residenza / permesso di soggiorno')
    .replaceAll('Meldebescheinigung, Anmeldung sau Personalausweis german — original, emis în ultimii 5 ani.', 'carta d’identità italiană, certificato di residenza sau permesso di soggiorno — original.')
    .replaceAll('Meldebescheinigung, Anmeldung sau Personalausweis german', 'carta d’identità italiană, certificato di residenza sau permesso di soggiorno')
    .replaceAll('Meldebescheinigung / Anmeldung / Personalausweis german — original, emis în ultimii 5 ani.', 'carta d’identità italiană / certificato di residenza / permesso di soggiorno — original.')
    .replaceAll('Pașaport CRDS valabil sau Anmeldung / Meldebescheinigung · original · fără apostilă și fără traducere', 'Pașaport CRDS valabil sau certificato di residenza / carta d’identità italiană · original · fără apostilă și fără traducere')
    .replaceAll('Necesară dacă un părinte are pașaport CRDS: Meldebescheinigung / Anmeldung / Personalausweis german', 'Necesară dacă un părinte are pașaport CRDS: certificato di residenza / carta d’identità italiană / permesso di soggiorno')
    .replaceAll('Anmeldung / Meldebescheinigung · original · fără apostilă și fără traducere autorizată în română', 'certificato di residenza / carta d’identità italiană · original · fără apostilă și fără traducere autorizată în română')
    .replaceAll('Anmeldung / Meldebescheinigung', 'certificato di residenza / carta d’identità italiană')
    .replaceAll('Anmeldung sau Meldebescheinigung', 'certificato di residenza sau carta d’identità italiană')
    .replaceAll('Personalausweis german', 'carta d’identità italiană')
    .replaceAll('Anmeldung', 'certificato di residenza')
    .replaceAll('Meldebescheinigung', 'certificato di residenza')
    .replaceAll('Rossmann/DM', 'un studio foto local')
    .replaceAll('bancă germană', 'banca ta')
    .replaceAll('Dacă pașaportul a fost FURAT în Germania', 'Dacă pașaportul a fost furat în Italia')
    .replaceAll('raportează la poliția locală (Diebstahlsanzeige)', 'raportează la poliția locală')
    .replaceAll('Verlustanzeige / Diebstahlsanzeige', 'adeverința poliției italiene')
    .replaceAll('certificato di residenza, certificato di residenza sau Personalausweis italian', 'carta d’identità italiană, certificato di residenza sau permesso di soggiorno')
    .replaceAll('certificato di residenza / certificato di residenza / Personalausweis italian', 'carta d’identità italiană / certificato di residenza / permesso di soggiorno')
    .replaceAll('Berlin — excepție patronimice: dacă un părinte are nume patronimic (ex. „-escu”, „-eanu”, „-vici”), Formule A NU este acceptat. Obligatoriu certificat de naștere italian + apostilă + traducere autorizată în română.', 'Dacă numele din actele părinților sau ale copilului ridică probleme de transliterare, confirmă direct cu consulatul dacă extrasul multilingv este suficient sau dacă se cere certificatul de naștere italian cu apostilă și traducere.')
}

export function localizeGuideTitleForCountry(title: string, country: CountryCode): string {
  if (country === 'de') return title
  return title.replaceAll('Germania', 'Italia')
}

export function convertGuideIdToItaly(guideId: GuideId): GuideId {
  return guideId.replace(/-de$/, '-it') as GuideId
}

export function convertRouteIdToItaly(routeId: RouteId): RouteId {
  if (routeId === 'route-a') return 'route-a-it'
  if (routeId === 'route-b') return 'route-b-it'
  return routeId
}
