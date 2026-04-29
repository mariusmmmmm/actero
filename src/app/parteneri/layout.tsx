import type { ReactNode } from 'react'
import { buildNoindexMetadata } from '@/lib/seo/noindexMetadata'

export const metadata = buildNoindexMetadata('Parteneri', '/parteneri')

export default function ParteneriLayout({ children }: { children: ReactNode }) {
  return children
}
