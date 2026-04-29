import type { ReactNode } from 'react'
import { buildNoindexMetadata } from '@/lib/seo/noindexMetadata'

export const metadata = buildNoindexMetadata('Token expirat', '/token-expirat')

export default function TokenExpiratLayout({ children }: { children: ReactNode }) {
  return children
}
