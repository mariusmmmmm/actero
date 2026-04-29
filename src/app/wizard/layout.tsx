import type { ReactNode } from 'react'
import { buildNoindexMetadata } from '@/lib/seo/noindexMetadata'

export const metadata = buildNoindexMetadata('Wizard', '/wizard')

export default function WizardLayout({ children }: { children: ReactNode }) {
  return children
}
