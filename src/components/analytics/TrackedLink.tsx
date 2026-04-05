'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import type { ReactNode } from 'react'
import { persistAttribution, trackEvent, withAttribution } from '@/lib/analytics'

type TrackedLinkProps = {
  href: string
  className?: string
  children: ReactNode
  eventName: string
  eventParams?: Record<string, string | number | boolean | null | undefined>
}

function buildHrefWithAttribution(href: string, searchParams: ReturnType<typeof useSearchParams>) {
  if (!href.startsWith('/')) return href

  const [pathname, hash = ''] = href.split('#')
  const [basePath, queryString = ''] = pathname.split('?')
  const nextParams = new URLSearchParams(queryString)

  ;['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'].forEach((key) => {
    if (!nextParams.has(key)) {
      const value = searchParams.get(key)
      if (value) nextParams.set(key, value)
    }
  })

  const query = nextParams.toString()
  const suffix = hash ? `#${hash}` : ''
  return `${basePath}${query ? `?${query}` : ''}${suffix}`
}

export default function TrackedLink({
  href,
  className,
  children,
  eventName,
  eventParams = {},
}: TrackedLinkProps) {
  const searchParams = useSearchParams()
  const resolvedHref = buildHrefWithAttribution(href, searchParams)

  return (
    <Link
      href={resolvedHref}
      className={className}
      onClick={() => {
        persistAttribution(searchParams)
        trackEvent(eventName, withAttribution(eventParams, searchParams))
      }}
    >
      {children}
    </Link>
  )
}
