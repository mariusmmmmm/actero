import type { BundeslandCode } from '@/types'

export const CITY_TO_BUNDESLAND: Record<string, BundeslandCode> = {
  münchen: 'BY', munich: 'BY', augsburg: 'BY', nürnberg: 'BY',
  nuremberg: 'BY', regensburg: 'BY', ingolstadt: 'BY', würzburg: 'BY',
  fürth: 'BY', erlangen: 'BY', bayreuth: 'BY', passau: 'BY',
  berlin: 'BE',
  hamburg: 'HH',
  köln: 'NW', cologne: 'NW', düsseldorf: 'NW', dortmund: 'NW',
  essen: 'NW', duisburg: 'NW', bochum: 'NW', wuppertal: 'NW',
  bielefeld: 'NW', bonn: 'NW', münster: 'NW', aachen: 'NW',
  gelsenkirchen: 'NW', krefeld: 'NW', oberhausen: 'NW',
  frankfurt: 'HE', wiesbaden: 'HE', kassel: 'HE', darmstadt: 'HE',
  offenbach: 'HE', hanau: 'HE',
  stuttgart: 'BW', karlsruhe: 'BW', freiburg: 'BW', mannheim: 'BW',
  heidelberg: 'BW', ulm: 'BW', konstanz: 'BW', heilbronn: 'BW',
  pforzheim: 'BW', reutlingen: 'BW',
  hannover: 'NI', braunschweig: 'NI', osnabrück: 'NI', oldenburg: 'NI',
  wolfsburg: 'NI', göttingen: 'NI', hildesheim: 'NI',
  bremen: 'HB',
  leipzig: 'SN', dresden: 'SN', chemnitz: 'SN', zwickau: 'SN',
  magdeburg: 'ST', halle: 'ST', dessau: 'ST',
  erfurt: 'TH', jena: 'TH', gera: 'TH', weimar: 'TH',
  rostock: 'MV', schwerin: 'MV', greifswald: 'MV',
  kiel: 'SH', lübeck: 'SH', flensburg: 'SH',
  saarbrücken: 'SL',
  mainz: 'RP', koblenz: 'RP', trier: 'RP', ludwigshafen: 'RP',
  kaiserslautern: 'RP',
  potsdam: 'BB', cottbus: 'BB', 'frankfurt an der oder': 'BB',
}

export function findBundeslandByCity(input: string): BundeslandCode | null {
  const key = input.toLowerCase().trim()
  return CITY_TO_BUNDESLAND[key] ?? null
}
