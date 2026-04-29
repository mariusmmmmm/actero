import type { ReactNode } from 'react'
import { buildNoindexMetadata } from '@/lib/seo/noindexMetadata'

export const metadata = buildNoindexMetadata('Ghid', '/ghid')

export default function GhidSessionLayout({ children }: { children: ReactNode }) {
  return children
}
