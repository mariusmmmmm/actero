import type { ReactNode } from 'react'
import { buildNoindexMetadata } from '@/lib/seo/noindexMetadata'

export const metadata = buildNoindexMetadata('Paywall', '/paywall')

export default function PaywallLayout({ children }: { children: ReactNode }) {
  return children
}
