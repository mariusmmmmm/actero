import type { ReactNode } from 'react'
import { buildNoindexMetadata } from '@/lib/seo/noindexMetadata'

export const metadata = buildNoindexMetadata('Ghid', '/ghid')

export default function GhidLayout({ children }: { children: ReactNode }) {
  return children
}
