'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { persistAttribution, trackOnce, withAttribution } from '@/lib/analytics'

export default function SeoAnalytics({
  lpSlug,
  lpTopic,
}: {
  lpSlug: string
  lpTopic: string
}) {
  const searchParams = useSearchParams()

  useEffect(() => {
    persistAttribution(searchParams)
    trackOnce(
      `seo_lp_view:${lpSlug}`,
      'seo_lp_view',
      withAttribution(
        {
          lp_slug: lpSlug,
          lp_topic: lpTopic,
        },
        searchParams
      )
    )
  }, [lpSlug, lpTopic, searchParams])

  return null
}
