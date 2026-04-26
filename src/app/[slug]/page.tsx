import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getSpainSeoMetadata, getSpainSeoPageConfig, renderSpainSeoPage, spainSeoSlugs } from '@/lib/seo/spainPages'
import { getUkSeoMetadata, getUkSeoPageConfig, renderUkSeoPage, ukSeoSlugs } from '@/lib/seo/ukPages'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return [...spainSeoSlugs, ...ukSeoSlugs].map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  return getSpainSeoMetadata(slug) ?? getUkSeoMetadata(slug) ?? {}
}

export default async function GenericSpainSeoPage({ params }: PageProps) {
  const { slug } = await params

  const spainConfig = getSpainSeoPageConfig(slug)
  const ukConfig = getUkSeoPageConfig(slug)

  if (!spainConfig && !ukConfig) {
    notFound()
  }

  if (spainConfig) {
    return renderSpainSeoPage(slug)
  }

  return renderUkSeoPage(slug)
}
