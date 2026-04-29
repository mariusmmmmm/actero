import type { ReactNode } from 'react'
import { buildNoindexMetadata } from '@/lib/seo/noindexMetadata'

export const metadata = buildNoindexMetadata('Diagnostic', '/diagnostic')

export default function DiagnosticLayout({ children }: { children: ReactNode }) {
  return children
}
