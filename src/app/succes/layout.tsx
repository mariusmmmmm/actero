import type { ReactNode } from 'react'
import { buildNoindexMetadata } from '@/lib/seo/noindexMetadata'

export const metadata = buildNoindexMetadata('Succes', '/succes')

export default function SuccesLayout({ children }: { children: ReactNode }) {
  return children
}
