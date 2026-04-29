import type { ReactNode } from 'react'
import { buildNoindexMetadata } from '@/lib/seo/noindexMetadata'

export const metadata = buildNoindexMetadata('În curând', '/in-curand')

export default function InCurandLayout({ children }: { children: ReactNode }) {
  return children
}
