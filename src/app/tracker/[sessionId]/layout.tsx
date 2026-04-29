import type { ReactNode } from 'react'
import { buildNoindexMetadata } from '@/lib/seo/noindexMetadata'

export const metadata = buildNoindexMetadata('Tracker', '/ghid')

export default function TrackerLayout({ children }: { children: ReactNode }) {
  return children
}
