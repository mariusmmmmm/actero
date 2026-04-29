import type { Metadata } from 'next'

export function buildNoindexMetadata(title: string, canonicalPath: string): Metadata {
  const canonicalUrl = `https://www.actero.ro${canonicalPath}`

  return {
    title,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  }
}
