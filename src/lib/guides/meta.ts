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
  consulate: ConsulateId | null
): CrossSellGuide[] {
  void consulate
  if (!guideId) return []
  return CROSS_SELL[guideId] ?? []
}

const GUIDE_TITLES: Record<string, string> = {
  'pasaport-crds-de': 'pașaportul CRDS din Germania',
  'pasaport-crds-de-pierdut': 'pașaportul CRDS pierdut sau furat din Germania',
  'pasaport-crds-nou-de': 'primul pașaport CRDS din Germania',
  'pasaport-minor-crds-de': 'pașaportul CRDS pentru copil din Germania',
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
  'pasaport-crds-it': 'pașaportul CRDS din Italia',
  'pasaport-crds-it-pierdut': 'pașaportul CRDS pierdut sau furat din Italia',
  'pasaport-crds-nou-it': 'primul pașaport CRDS din Italia',
  'pasaport-minor-crds-it': 'pașaportul CRDS pentru copil din Italia',
  'pasaport-it-cu-domiciliu': 'pașaportul din Italia',
  'pasaport-it-cu-domiciliu-pierdut': 'pașaportul pierdut din Italia',
  'buletin-it-fara-domiciliu': 'buletinul din Italia',
  'buletin-it-cu-domiciliu': 'buletinul din Italia',
  'buletin-it-fara-domiciliu-pierdut': 'buletinul pierdut din Italia',
  'buletin-it-cu-domiciliu-pierdut': 'buletinul pierdut din Italia',
  'buletin-it-primul-it': 'primul buletin românesc',
  'buletin-it-primul-it-b': 'primul buletin românesc din Italia',
  'titlu-calatorie-urgenta-it': 'titlul de călătorie de urgență din Italia',
  'titlu-calatorie-it': 'titlul de călătorie din Italia',
  'procura-vanzare-it': 'procura de vânzare/cumpărare proprietate din Italia',
  'procura-mostenire-it': 'procura pentru moștenire din Italia',
  'procura-generala-it': 'procura notarială generală din Italia',
  'transcriere-nastere-it': 'transcrierea certificatului de naștere din Italia',
  'pasaport-crds-es': 'pașaportul CRDS din Spania',
  'pasaport-es-cu-domiciliu': 'pașaportul din Spania',
  'pasaport-crds-es-pierdut': 'pașaportul CRDS pierdut sau furat din Spania',
  'pasaport-es-cu-domiciliu-pierdut': 'pașaportul pierdut sau furat din Spania',
  'pasaport-crds-pierdut-combinat-es': 'pașaportul CRDS pierdut sau furat din Spania',
  'buletin-es-cu-domiciliu': 'cartea de identitate din România pentru adult aflat în Spania',
  'buletin-es-cu-domiciliu-minor': 'cartea de identitate din România pentru minor aflat în Spania',
  'buletin-es-majorat': 'cartea de identitate la 18 ani pentru cine vine din Spania',
  'buletin-es-fara-domiciliu-minor': 'cartea de identitate cu domiciliu în Spania pentru minor',
  'buletin-es-fara-domiciliu': 'cartea de identitate cu domiciliu în Spania',
  'buletin-es-pierdut': 'cartea de identitate pierdută sau furată din Spania',
  'titlu-calatorie-es': 'titlul de călătorie din Spania',
  'titlu-calatorie-urgenta-es': 'titlul de călătorie urgent din Spania',
  'procura-generala-es': 'procura notarială generală din Spania',
  'procura-pensie-es': 'procura pentru pensie din Spania',
  'procura-vanzare-es': 'procura pentru vânzarea unui imobil din Spania',
  'transcriere-nastere-es': 'transcrierea certificatului de naștere din Spania',
  'pasaport-crds-uk': 'pașaportul CRDS din Marea Britanie',
  'pasaport-uk-cu-domiciliu': 'pașaportul din Marea Britanie cu domiciliu în România',
  'pasaport-crds-uk-pierdut': 'pașaportul CRDS pierdut sau furat din Marea Britanie',
  'pasaport-uk-cu-domiciliu-pierdut': 'pașaportul pierdut sau furat din Marea Britanie',
  'pasaport-minor-crds-uk': 'pașaportul CRDS pentru copil din Marea Britanie',
  'pasaport-minor-ro-uk': 'pașaportul pentru copil cu domiciliu în România din Marea Britanie',
  'pasaport-temporar-uk': 'pașaportul temporar din Marea Britanie',
  'titlu-calatorie-uk': 'titlul de călătorie pentru adult din Marea Britanie',
  'titlu-calatorie-minor-sub14-uk': 'titlul de călătorie pentru minor sub 14 ani din Marea Britanie',
  'titlu-calatorie-minor-14-18-uk': 'titlul de călătorie pentru minor 14–18 ani din Marea Britanie',
  'procura-ci-uk': 'procura pentru reînnoirea cărții de identitate din Marea Britanie',
  'procura-generala-uk': 'procura notarială din Marea Britanie',
  'prima-ci-minor-uk': 'prima carte de identitate pentru minor 14+ din Marea Britanie',
  'prima-ci-adult-uk': 'prima carte de identitate pentru adult 18+ din Marea Britanie',
  'transcriere-nastere-minor-uk': 'transcrierea certificatului de naștere pentru minor din Marea Britanie',
  'transcriere-nastere-adult-uk': 'transcrierea certificatului de naștere pentru adult din Marea Britanie',
  'transcriere-casatorie-uk': 'transcrierea certificatului de căsătorie britanic din Marea Britanie',
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
  'transcriere-nastere-it': [
    { guideId: 'pasaport-crds-nou-it', title: 'Continuă cu primul pașaport', subtitle: 'După ce copilul primește certificatul românesc și CNP', icon: '📕' },
    { guideId: 'buletin-it-primul-it-b', title: 'Continuă cu primul buletin', subtitle: 'Pentru primul act de identitate românesc după transcriere', icon: '🪪' },
  ],
  'pasaport-crds-it': [
    { guideId: 'buletin-it-fara-domiciliu', title: 'Rezolvă și buletinul', subtitle: 'Dacă ai buletin expirat sau lipsă', icon: '🪪' },
    { guideId: 'procura-vanzare-it', title: 'Procură notarială', subtitle: 'Vânzare, moștenire sau altceva în România', icon: '📜' },
  ],
  'titlu-calatorie-urgenta-it': [
    { guideId: 'pasaport-crds-it', title: 'Rezolvă și pașaportul', subtitle: 'Documentul permanent după urgență', icon: '📕' },
    { guideId: 'buletin-it-fara-domiciliu', title: 'Rezolvă și buletinul', subtitle: 'Dacă trebuie să revii și în România', icon: '🪪' },
  ],
  'pasaport-crds-es': [
    { guideId: 'pasaport-crds-es-pierdut', title: 'Pașaport pierdut sau furat', subtitle: 'Dacă documentul nu mai este la tine', icon: '⚠️' },
    { guideId: 'buletin-es-cu-domiciliu', title: 'Carte de identitate', subtitle: 'Dacă ai și CI de rezolvat în România', icon: '🪪' },
  ],
  'pasaport-es-cu-domiciliu': [
    { guideId: 'pasaport-es-cu-domiciliu-pierdut', title: 'Pașaport pierdut sau furat', subtitle: 'Fluxul pentru lipsă de document', icon: '⚠️' },
    { guideId: 'buletin-es-cu-domiciliu', title: 'Carte de identitate adult', subtitle: 'Dacă rezolvi și CI în România', icon: '🪪' },
  ],
  'pasaport-crds-es-pierdut': [
    { guideId: 'pasaport-crds-pierdut-combinat-es', title: 'Cale combinată', subtitle: 'Dacă ai urgență și vrei să gestionezi titlu + pașaport', icon: '⚡' },
    { guideId: 'pasaport-crds-es', title: 'Pașaport CRDS standard', subtitle: 'Pentru reînnoire fără situație de pierdere/furt', icon: '📕' },
  ],
  'pasaport-es-cu-domiciliu-pierdut': [
    { guideId: 'pasaport-es-cu-domiciliu', title: 'Pașaport standard', subtitle: 'Reînnoire fără pierdere sau furt', icon: '📕' },
    { guideId: 'buletin-es-cu-domiciliu', title: 'Carte de identitate adult', subtitle: 'Dacă rezolvi și CI în România', icon: '🪪' },
  ],
  'pasaport-crds-pierdut-combinat-es': [
    { guideId: 'pasaport-crds-es-pierdut', title: 'Flux standard pașaport pierdut/furat', subtitle: 'Dacă nu combini cu titlu de călătorie', icon: '📕' },
    { guideId: 'pasaport-crds-es', title: 'Pașaport CRDS', subtitle: 'Fluxul standard de reînnoire', icon: '🧭' },
  ],
  'buletin-es-cu-domiciliu': [
    { guideId: 'pasaport-es-cu-domiciliu', title: 'Pașaport cu domiciliu în România', subtitle: 'Dacă rezolvi și pașaportul din Spania', icon: '📕' },
    { guideId: 'buletin-es-cu-domiciliu-minor', title: 'Cartea de identitate pentru minor', subtitle: 'Dacă cererea este pentru copil', icon: '🧒' },
  ],
  'buletin-es-cu-domiciliu-minor': [
    { guideId: 'buletin-es-cu-domiciliu', title: 'Cartea de identitate pentru adult', subtitle: 'Varianta pentru părinți sau alți adulți', icon: '🪪' },
    { guideId: 'pasaport-es-cu-domiciliu', title: 'Pașaport cu domiciliu în România', subtitle: 'Dacă rezolvi și pașaportul', icon: '📕' },
  ],
  'buletin-es-majorat': [
    { guideId: 'buletin-es-cu-domiciliu', title: 'Carte de identitate adult', subtitle: 'Fluxul standard pentru adult cu domiciliu în România', icon: '🪪' },
    { guideId: 'buletin-es-fara-domiciliu', title: 'CI cu domiciliu în Spania', subtitle: 'Dacă vrei să treci pe CRDS după majorat', icon: '🇪🇸' },
  ],
  'buletin-es-fara-domiciliu-minor': [
    { guideId: 'buletin-es-fara-domiciliu', title: 'CI adult cu domiciliu în Spania', subtitle: 'Varianta pentru adult CRDS', icon: '🪪' },
    { guideId: 'pasaport-crds-es', title: 'Pașaport CRDS', subtitle: 'Dacă rezolvi și pașaportul minorului sau al părintelui', icon: '📕' },
  ],
  'buletin-es-fara-domiciliu': [
    { guideId: 'pasaport-crds-es', title: 'Pașaport CRDS', subtitle: 'Document complementar pentru domiciliu în Spania', icon: '📕' },
    { guideId: 'buletin-es-pierdut', title: 'CI pierdută sau furată', subtitle: 'Fluxul pentru lipsă de document', icon: '⚠️' },
  ],
  'buletin-es-pierdut': [
    { guideId: 'buletin-es-cu-domiciliu', title: 'CI adult cu domiciliu în România', subtitle: 'Dacă domiciliul tău este încă în România', icon: '🏠' },
    { guideId: 'buletin-es-fara-domiciliu', title: 'CI cu domiciliu în Spania', subtitle: 'Dacă ai CRDS activ', icon: '🇪🇸' },
  ],
  'titlu-calatorie-es': [
    { guideId: 'titlu-calatorie-urgenta-es', title: 'Titlu de călătorie urgent', subtitle: 'Pentru zbor iminent sau urgență', icon: '⚡' },
    { guideId: 'pasaport-crds-es', title: 'Pașaport CRDS', subtitle: 'Documentul permanent după întoarcere', icon: '📕' },
  ],
  'titlu-calatorie-urgenta-es': [
    { guideId: 'titlu-calatorie-es', title: 'Titlu de călătorie standard', subtitle: 'Dacă nu mai e urgență maximă', icon: '🧭' },
    { guideId: 'pasaport-es-cu-domiciliu', title: 'Pașaport cu domiciliu în România', subtitle: 'Documentul permanent după urgență', icon: '📕' },
  ],
  'procura-generala-es': [
    { guideId: 'procura-vanzare-es', title: 'Procură pentru vânzare imobil', subtitle: 'Dacă ai nevoie de procură specială pentru proprietate', icon: '🏠' },
    { guideId: 'pasaport-crds-es', title: 'Pașaport CRDS', subtitle: 'Frecvent solicitat în paralel', icon: '📕' },
  ],
  'procura-pensie-es': [
    { guideId: 'procura-generala-es', title: 'Procură generală', subtitle: 'Dacă ai nevoie și de alte mandate', icon: '📜' },
    { guideId: 'pasaport-crds-es', title: 'Pașaport CRDS', subtitle: 'Frecvent solicitat în paralel', icon: '📕' },
  ],
  'procura-vanzare-es': [
    { guideId: 'procura-generala-es', title: 'Procură generală', subtitle: 'Dacă ai nevoie și de alte mandate', icon: '📜' },
    { guideId: 'pasaport-crds-es', title: 'Pașaport CRDS', subtitle: 'Frecvent solicitat în paralel', icon: '📕' },
  ],
  'transcriere-nastere-es': [
    { guideId: 'buletin-es-fara-domiciliu-minor', title: 'CI minor cu domiciliu în Spania', subtitle: 'După transcriere, dacă ai nevoie de CI pentru copil', icon: '🪪' },
    { guideId: 'pasaport-crds-es', title: 'Pașaport CRDS', subtitle: 'Un pas următor frecvent după transcriere', icon: '📕' },
  ],
  'pasaport-crds-uk': [
    { guideId: 'pasaport-crds-uk-pierdut', title: 'Pașaport pierdut sau furat', subtitle: 'Dacă documentul nu mai este la tine', icon: '⚠️' },
    { guideId: 'pasaport-minor-crds-uk', title: 'Pașaport minor CRDS', subtitle: 'Dacă rezolvi și actele copilului', icon: '🧒' },
  ],
  'pasaport-uk-cu-domiciliu': [
    { guideId: 'pasaport-uk-cu-domiciliu-pierdut', title: 'Pașaport pierdut sau furat', subtitle: 'Fluxul pentru lipsă de document', icon: '⚠️' },
    { guideId: 'pasaport-crds-uk', title: 'Pașaport CRDS', subtitle: 'Dacă vrei schimbarea domiciliului pe UK', icon: '📕' },
  ],
  'pasaport-crds-uk-pierdut': [
    { guideId: 'pasaport-crds-uk', title: 'Pașaport CRDS standard', subtitle: 'Pentru reînnoire fără pierdere sau furt', icon: '📕' },
    { guideId: 'pasaport-minor-crds-uk', title: 'Pașaport minor CRDS', subtitle: 'Dacă rezolvi și cazul copilului', icon: '🧒' },
  ],
  'pasaport-uk-cu-domiciliu-pierdut': [
    { guideId: 'pasaport-uk-cu-domiciliu', title: 'Pașaport standard', subtitle: 'Reînnoire fără pierdere sau furt', icon: '📕' },
    { guideId: 'pasaport-crds-uk', title: 'Pașaport CRDS', subtitle: 'Dacă vrei trecerea domiciliului pe UK', icon: '🧭' },
  ],
  'pasaport-minor-crds-uk': [
    { guideId: 'pasaport-crds-uk', title: 'Pașaport CRDS adult', subtitle: 'Necesită cel puțin un părinte cu CRDS sau cerere simultană', icon: '📕' },
    { guideId: 'pasaport-crds-uk-pierdut', title: 'Pașaport adult pierdut/furat', subtitle: 'Dacă rezolvi în paralel și actele unui părinte', icon: '⚠️' },
  ],
  'pasaport-minor-ro-uk': [
    { guideId: 'pasaport-minor-crds-uk', title: 'Pașaport minor CRDS', subtitle: 'Dacă vrei domiciliul copilului trecut în UK', icon: '🧒' },
    { guideId: 'transcriere-nastere-minor-uk', title: 'Transcriere naștere minor', subtitle: 'Dacă minorul are doar certificat britanic', icon: '🧾' },
  ],
  'pasaport-temporar-uk': [
    { guideId: 'titlu-calatorie-uk', title: 'Titlu de călătorie', subtitle: 'Dacă scopul este doar întoarcerea în România', icon: '⚡' },
    { guideId: 'pasaport-crds-uk', title: 'Pașaport electronic CRDS', subtitle: 'Dacă nu ai o urgență justificată legal', icon: '📕' },
  ],
  'titlu-calatorie-uk': [
    { guideId: 'pasaport-temporar-uk', title: 'Pașaport temporar', subtitle: 'Dacă trebuie să călătorești și în altă destinație, nu doar România', icon: '⚡' },
    { guideId: 'pasaport-crds-uk', title: 'Pașaport electronic', subtitle: 'Documentul permanent după întoarcerea în România', icon: '📕' },
  ],
  'titlu-calatorie-minor-sub14-uk': [
    { guideId: 'titlu-calatorie-minor-14-18-uk', title: 'Titlu minor 14–18 ani', subtitle: 'Dacă minorul are deja 14 ani', icon: '🧒' },
    { guideId: 'pasaport-minor-ro-uk', title: 'Pașaport minor', subtitle: 'Documentul permanent după întoarcerea în România', icon: '📕' },
  ],
  'titlu-calatorie-minor-14-18-uk': [
    { guideId: 'titlu-calatorie-minor-sub14-uk', title: 'Titlu minor sub 14 ani', subtitle: 'Dacă solicitarea este pentru un copil mai mic', icon: '🧒' },
    { guideId: 'pasaport-minor-ro-uk', title: 'Pașaport minor', subtitle: 'Documentul permanent după întoarcerea în România', icon: '📕' },
  ],
  'procura-ci-uk': [
    { guideId: 'prima-ci-adult-uk', title: 'Prima carte de identitate 18+', subtitle: 'Dacă nu ai avut niciodată CI sau buletin', icon: '🪪' },
    { guideId: 'pasaport-uk-cu-domiciliu', title: 'Pașaport cu domiciliu în România', subtitle: 'Dacă rezolvi și pașaportul din UK', icon: '📕' },
  ],
  'procura-generala-uk': [
    { guideId: 'procura-ci-uk', title: 'Procura pentru CI', subtitle: 'Dacă scopul este reînnoirea cărții de identitate', icon: '🪪' },
    { guideId: 'titlu-calatorie-uk', title: 'Titlu de călătorie', subtitle: 'Dacă nu ai act românesc valabil pentru autentificare', icon: '⚡' },
  ],
  'prima-ci-minor-uk': [
    { guideId: 'transcriere-nastere-minor-uk', title: 'Transcriere naștere minor', subtitle: 'Dacă îți lipsește certificatul românesc al minorului', icon: '🧾' },
    { guideId: 'pasaport-minor-crds-uk', title: 'Pașaport minor CRDS', subtitle: 'Pasul următor frecvent după actele de stare civilă', icon: '📕' },
  ],
  'prima-ci-adult-uk': [
    { guideId: 'transcriere-nastere-adult-uk', title: 'Transcriere naștere adult', subtitle: 'Dacă ai nevoie mai întâi de certificatul românesc', icon: '🧾' },
    { guideId: 'procura-ci-uk', title: 'Procura pentru reînnoirea CI', subtitle: 'Dacă ai avut deja CI sau buletin și vrei varianta mai simplă', icon: '📜' },
  ],
  'transcriere-nastere-minor-uk': [
    { guideId: 'pasaport-minor-crds-uk', title: 'Pașaport minor CRDS', subtitle: 'Pasul următor frecvent după transcriere și obținerea CNP-ului', icon: '📕' },
    { guideId: 'prima-ci-minor-uk', title: 'Prima CI minor 14+', subtitle: 'Dacă minorul a împlinit 14 ani și are nevoie de carte de identitate', icon: '🪪' },
  ],
  'transcriere-nastere-adult-uk': [
    { guideId: 'prima-ci-adult-uk', title: 'Prima CI adult 18+', subtitle: 'Dacă ai nevoie și de primul act de identitate românesc', icon: '🪪' },
    { guideId: 'procura-ci-uk', title: 'Procura pentru reînnoirea CI', subtitle: 'Dacă de fapt ai avut anterior buletin sau carte de identitate', icon: '📜' },
  ],
  'transcriere-casatorie-uk': [
    { guideId: 'transcriere-nastere-minor-uk', title: 'Transcriere naștere minor', subtitle: 'Dacă aveți copii născuți după căsătorie', icon: '🧾' },
    { guideId: 'procura-ci-uk', title: 'Procura pentru CI', subtitle: 'Dacă vrei schimbarea numelui pe cartea de identitate', icon: '🪪' },
  ],
}
