import type { ReactNode } from 'react'
import { buildNoindexMetadata } from '@/lib/seo/noindexMetadata'

export const metadata = buildNoindexMetadata('Checklist', '/ghid')

export default function ChecklistLayout({ children }: { children: ReactNode }) {
  return children
}
