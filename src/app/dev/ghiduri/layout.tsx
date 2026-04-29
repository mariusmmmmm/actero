import type { ReactNode } from 'react'
import { buildNoindexMetadata } from '@/lib/seo/noindexMetadata'

export const metadata = buildNoindexMetadata('Dev ghiduri', '/dev/ghiduri')

export default function DevGhiduriLayout({ children }: { children: ReactNode }) {
  return children
}
