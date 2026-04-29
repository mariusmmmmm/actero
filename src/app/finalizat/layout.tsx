import type { ReactNode } from 'react'
import { buildNoindexMetadata } from '@/lib/seo/noindexMetadata'

export const metadata = buildNoindexMetadata('Finalizat', '/finalizat')

export default function FinalizatLayout({ children }: { children: ReactNode }) {
  return children
}
