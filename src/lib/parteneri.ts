import type { ConsulateId } from '@/types'

export interface Partener {
  id: string
  nume: string
  categorie: string
  meta: string
  tags?: string[]
  statusLabel?: string
  contactUrl?: string
  contactLabel?: string
  consulate: ConsulateId[]
}

export function getParteneriForConsulate(consulate: ConsulateId | null): Partener[] {
  if (!consulate) return PARTENERI
  return PARTENERI.filter(p => p.consulate.includes(consulate))
}

const PARTENERI: Partener[] = [
  {
    id: 'consulat-bonn',
    nume: 'Consulatul României — Bonn',
    categorie: 'Servicii consulare oficiale',
    meta: 'Bonn · Depunere L-V cu programare · Ridicare L-J 14:00–15:00',
    tags: ['Pașapoarte', 'Procuri', 'Stare civilă'],
    statusLabel: '✓ Oficial',
    contactUrl: 'https://econsulat.ro',
    contactLabel: 'Deschide econsulat.ro →',
    consulate: ['bonn'],
  },
  {
    id: 'consulat-munchen',
    nume: 'Consulatul României — München',
    categorie: 'Servicii consulare oficiale',
    meta: 'München · Depunere L-J 08:00–14:00, V 08:00–12:00 · Ridicare L-J 14:00–16:00',
    tags: ['Pașapoarte', 'Procuri', 'Stare civilă'],
    statusLabel: '✓ Oficial',
    contactUrl: 'https://econsulat.ro',
    contactLabel: 'Deschide econsulat.ro →',
    consulate: ['muenchen'],
  },
  {
    id: 'consulat-stuttgart',
    nume: 'Consulatul României — Stuttgart',
    categorie: 'Servicii consulare oficiale',
    meta: 'Stuttgart · Depunere L-V 09:00–15:00 · Ridicare L-V 10:00–14:00',
    tags: ['Pașapoarte', 'Procuri', 'Stare civilă'],
    statusLabel: '✓ Oficial',
    contactUrl: 'https://econsulat.ro',
    contactLabel: 'Deschide econsulat.ro →',
    consulate: ['stuttgart'],
  },
  {
    id: 'consulat-berlin',
    nume: 'Ambasada României — Berlin',
    categorie: 'Servicii consulare oficiale',
    meta: 'Berlin · Depunere L-V 08:00–13:30 · Ridicare L-V 13:00–14:00',
    tags: ['Pașapoarte', 'Procuri', 'Stare civilă'],
    statusLabel: '✓ Oficial',
    contactUrl: 'https://econsulat.ro',
    contactLabel: 'Deschide econsulat.ro →',
    consulate: ['berlin'],
  },
]
