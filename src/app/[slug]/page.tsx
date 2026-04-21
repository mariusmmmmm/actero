import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getSpainSeoMetadata, getSpainSeoPageConfig, renderSpainSeoPage, spainSeoSlugs } from '@/lib/seo/spainPages'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return spainSeoSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  return getSpainSeoMetadata(slug) ?? {}
}

export default async function GenericSpainSeoPage({ params }: PageProps) {
  const { slug } = await params

  if (!getSpainSeoPageConfig(slug)) {
    notFound()
  }

  return renderSpainSeoPage(slug)
}
