'use client'

import { useEffect } from 'react'
import { persistAttribution, trackOnce, withAttribution } from '@/lib/analytics'

export default function SeoAnalytics({
  lpSlug,
  lpTopic,
}: {
  lpSlug: string
  lpTopic: string
}) {
  useEffect(() => {
    const searchParams =
      typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search)
        : undefined

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
  }, [lpSlug, lpTopic])

  return null
}
