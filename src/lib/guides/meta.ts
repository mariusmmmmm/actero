import type { ConsulateId } from '@/types'

export interface CrossSellGuide {
  guideId: string
  title: string
  subtitle: string
  icon: string
}

export function getGuideTitle(guideId: string | null): string | null {
  if (!guideId) return null
  return GUIDE_TITLES[guideId] ?? null
}

export function getCrossSellGuides(
  guideId: string | null,
  _consulate: ConsulateId | null
): CrossSellGuide[] {
  if (!guideId) return []
  return CROSS_SELL[guideId] ?? []
}

const GUIDE_TITLES: Record<string, string> = {
  'pasaport-crds-de': 'pașaportul CRDS din Germania',
  'pasaport-crds-de-pierdut': 'pașaportul CRDS pierdut sau furat din Germania',
  'pasaport-crds-nou-de': 'primul pașaport CRDS din Germania',
  'pasaport-de-cu-domiciliu': 'pașaportul din Germania',
  'pasaport-de-cu-domiciliu-pierdut': 'pașaportul pierdut din Germania',
  'buletin-de-fara-domiciliu': 'buletinul din Germania',
  'buletin-de-cu-domiciliu': 'buletinul din Germania',
  'buletin-de-fara-domiciliu-pierdut': 'buletinul pierdut din Germania',
  'buletin-de-cu-domiciliu-pierdut': 'buletinul pierdut din Germania',
  'buletin-de-primul-de': 'primul buletin românesc',
  'buletin-de-primul-de-b': 'primul buletin românesc din Germania',
  'titlu-calatorie-urgenta-de': 'titlul de călătorie de urgență din Germania',
  'titlu-calatorie-de': 'titlul de călătorie din Germania',
  'procura-vanzare-de': 'procura de vânzare/cumpărare proprietate din Germania',
  'procura-mostenire-de': 'procura pentru moștenire din Germania',
  'procura-generala-de': 'procura notarială generală din Germania',
  'transcriere-nastere-de': 'transcrierea certificatului de naștere din Germania',
}

const CROSS_SELL: Record<string, CrossSellGuide[]> = {
  'pasaport-crds-de': [
    { guideId: 'buletin-de-fara-domiciliu', title: 'Rezolvă și buletinul', subtitle: 'Dacă ai buletin expirat sau lipsă', icon: '🪪' },
    { guideId: 'procura-vanzare-de', title: 'Procură notarială', subtitle: 'Vânzare, moștenire sau altceva în România', icon: '📜' },
  ],
  'pasaport-crds-de-pierdut': [
    { guideId: 'titlu-calatorie-urgenta-de', title: 'Titlu de călătorie urgent', subtitle: 'Dacă trebuie să pleci imediat în România', icon: '⚡' },
    { guideId: 'buletin-de-fara-domiciliu-pierdut', title: 'Rezolvă și buletinul', subtitle: 'Dacă ai și buletinul lipsă sau expirat', icon: '🪪' },
  ],
  'buletin-de-cu-domiciliu-pierdut': [
    { guideId: 'pasaport-crds-de', title: 'Rezolvă și pașaportul CRDS', subtitle: 'Dacă ai și pașaport expirat', icon: '📕' },
    { guideId: 'titlu-calatorie-de', title: 'Titlu de călătorie', subtitle: 'Dacă ai nevoie să pleci urgent', icon: '⚡' },
  ],
  'buletin-de-fara-domiciliu': [
    { guideId: 'pasaport-crds-de', title: 'Rezolvă și pașaportul CRDS', subtitle: 'Dacă ai și pașaport expirat', icon: '📕' },
    { guideId: 'procura-vanzare-de', title: 'Procură notarială', subtitle: 'Vânzare, moștenire sau altceva în România', icon: '📜' },
  ],
  'pasaport-de-cu-domiciliu': [
    { guideId: 'buletin-de-cu-domiciliu', title: 'Rezolvă și buletinul', subtitle: 'Dacă are nevoie de reînnoire', icon: '🪪' },
    { guideId: 'procura-vanzare-de', title: 'Procură notarială', subtitle: 'Vânzare, moștenire sau altceva în România', icon: '📜' },
  ],
  'titlu-calatorie-urgenta-de': [
    { guideId: 'pasaport-crds-de', title: 'Rezolvă și pașaportul', subtitle: 'Documentul permanent după urgență', icon: '📕' },
    { guideId: 'buletin-de-fara-domiciliu', title: 'Rezolvă și buletinul', subtitle: 'Dacă trebuie să revii și în România', icon: '🪪' },
  ],
  'titlu-calatorie-de': [
    { guideId: 'pasaport-crds-de', title: 'Rezolvă și pașaportul', subtitle: 'Documentul permanent după revenirea în România', icon: '📕' },
    { guideId: 'buletin-de-fara-domiciliu', title: 'Rezolvă și buletinul', subtitle: 'Dacă ai nevoie de carte de identitate nouă', icon: '🪪' },
  ],
  'transcriere-nastere-de': [
    { guideId: 'pasaport-crds-nou-de', title: 'Continuă cu primul pașaport', subtitle: 'După ce copilul primește certificatul românesc și CNP', icon: '📕' },
    { guideId: 'buletin-de-primul-de-b', title: 'Continuă cu primul buletin', subtitle: 'Pentru primul act de identitate românesc după transcriere', icon: '🪪' },
  ],
}
