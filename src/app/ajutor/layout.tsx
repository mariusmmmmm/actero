import type { ReactNode } from 'react'
import { buildNoindexMetadata } from '@/lib/seo/noindexMetadata'

export const metadata = buildNoindexMetadata('Ajutor', '/ajutor')

export default function AjutorLayout({ children }: { children: ReactNode }) {
  return children
}
