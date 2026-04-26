import SeoAnalytics from '@/components/analytics/SeoAnalytics'
import TrackedLink from '@/components/analytics/TrackedLink'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'
import Link from 'next/link'
import type { Metadata } from 'next'

type BreadcrumbLink = {
  label: string
  href: string
}

type FaqItem = {
  question: string
  answer: string
}

type StructuredSection = {
  id: string
  title: string
  type: string
  [key: string]: unknown
}

export type StructuredSeoPageProps = {
  lpSlug: string
  lpTopic: string
  breadcrumbs: BreadcrumbLink[]
  h1: string
  tldr: {
    label: string
    text: string
  }
  intro: string
  ctaLabel: string
  ctaHref: string
  ctaNote?: string
  sourceNote: string
  sections: StructuredSection[]
  faqItems: FaqItem[]
  finalCtaTitle: string
  finalCtaText: string
  finalCtaLabel?: string
  finalCtaHref?: string
  schemaOptions?: {
    article?: Record<string, unknown> | false
    breadcrumb?: Record<string, unknown> | false
    faq?: Record<string, unknown> | false
    howTo?: Record<string, unknown> | false
    extra?: Array<Record<string, unknown>>
  }
}

type StructuredSeoPageComponentProps = StructuredSeoPageProps & {
  metadata?: Metadata
}

function getMetadataTitle(metadata?: Metadata): string | null {
  if (!metadata?.title) return null
  if (typeof metadata.title === 'string') return metadata.title
  if (typeof metadata.title === 'object' && 'absolute' in metadata.title) {
    const absolute = metadata.title.absolute
    return typeof absolute === 'string' ? absolute : null
  }
  return null
}

function getMetadataDescription(metadata?: Metadata): string {
  return typeof metadata?.description === 'string' ? metadata.description : ''
}

function getHowToSteps(sections: StructuredSection[]) {
  for (const section of sections) {
    if (section.type === 'steps' && Array.isArray(section.items)) {
      return (section.items as Array<Record<string, unknown>>).map((item, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: String(item.title ?? item.name ?? `Pasul ${index + 1}`),
        text: String(item.text ?? item.description ?? ''),
      }))
    }
  }

  for (const section of sections) {
    if ((section.type === 'checklist' || section.type === 'checklist-conditional') && Array.isArray(section.items)) {
      return (section.items as Array<Record<string, unknown>>).map((item, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: String(item.action ?? item.title ?? `Pasul ${index + 1}`),
        text: String(item.text ?? item.note ?? item.description ?? ''),
      }))
    }
  }

  return []
}

function SectionLink({
  href,
  title,
  description,
  accent = 'default',
}: {
  href: string
  title: string
  description?: string
  accent?: 'default' | 'warning' | 'info'
}) {
  const classes =
    accent === 'warning'
      ? 'rounded-xl border border-orange-200 bg-orange-50 p-4 hover:bg-orange-100/70'
      : accent === 'info'
      ? 'rounded-xl border border-blue-200 bg-blue-50 p-4 hover:bg-blue-100/70'
      : 'rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-50'

  return (
    <Link href={href} className={classes}>
      <p className="font-semibold text-gray-900">{title}</p>
      {description ? <p className="mt-1 text-sm text-gray-600">{description}</p> : null}
    </Link>
  )
}

function renderRichItem(item: Record<string, unknown>, tone: 'default' | 'warning' | 'info' = 'default') {
  const borderClass =
    tone === 'warning'
      ? 'border-orange-200 bg-orange-50'
      : tone === 'info'
      ? 'border-blue-200 bg-blue-50'
      : 'border-gray-200 bg-white'

  const severity = typeof item.severity === 'string' ? item.severity : ''
  const isCritical = severity === 'critical'
  const isWarning = severity === 'warning'

  return (
    <div
      key={`${String(item.title ?? item.text ?? item.name ?? Math.random())}`}
      className={`rounded-xl border p-4 ${isCritical ? 'border-red-200 bg-red-50' : isWarning ? 'border-amber-200 bg-amber-50' : borderClass}`}
    >
      {item.title ? <p className="font-semibold text-gray-900">{String(item.title)}</p> : null}
      {item.text ? <p className="mt-2 text-sm leading-relaxed text-gray-700">{String(item.text)}</p> : null}
      {item.note ? <p className="mt-2 text-xs text-gray-500">{String(item.note)}</p> : null}
      {typeof item.link === 'string' && typeof item.linkLabel === 'string' ? (
        <a href={item.link} className="mt-3 inline-flex text-sm font-semibold text-gray-900 underline">
          {String(item.linkLabel)}
        </a>
      ) : null}
      {typeof item.href === 'string' && typeof item.linkLabel === 'string' ? (
        <Link href={item.href} className="mt-3 inline-flex text-sm font-semibold text-gray-900 underline">
          {String(item.linkLabel)}
        </Link>
      ) : null}
    </div>
  )
}

function renderSection(section: StructuredSection) {
  switch (section.type) {
    case 'cards':
    case 'links': {
      const items = Array.isArray(section.items) ? (section.items as Array<Record<string, unknown>>) : []
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <SectionLink
              key={String(item.href ?? item.title)}
              href={String(item.href ?? '#')}
              title={String(item.title ?? '')}
              description={typeof item.description === 'string' ? item.description : undefined}
              accent={section.type === 'links' ? 'default' : 'info'}
            />
          ))}
        </div>
      )
    }

    case 'facts':
    case 'warnings':
    case 'info-block': {
      const items = Array.isArray(section.items) ? (section.items as Array<Record<string, unknown>>) : []
      return (
        <div className="space-y-3">
          {typeof section.intro === 'string' ? <p className="text-gray-600">{section.intro}</p> : null}
          {items.map((item) =>
            renderRichItem(
              item,
              section.type === 'warnings' ? 'warning' : section.type === 'info-block' ? 'info' : 'default'
            )
          )}
        </div>
      )
    }

    case 'steps': {
      const items = Array.isArray(section.items) ? (section.items as Array<Record<string, unknown>>) : []
      return (
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={String(item.step ?? index)} className="rounded-xl border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                  {String(item.step ?? index + 1)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{String(item.title ?? `Pasul ${index + 1}`)}</p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-700">{String(item.text ?? '')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    }

    case 'table': {
      const data = (section.data ?? {}) as Record<string, unknown>
      const headers = Array.isArray(data.headers) ? (data.headers as string[]) : []
      const rows = Array.isArray(data.rows) ? (data.rows as Array<Array<string>>) : []
      return (
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50">
                <tr>
                  {headers.map((header) => (
                    <th key={header} className="px-4 py-3 font-semibold text-gray-700">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index} className="border-t border-gray-100">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-3 align-top text-gray-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {typeof data.note === 'string' ? <div className="border-t border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-600">{data.note}</div> : null}
          {typeof data.photoSpecs === 'string' ? (
            <div className="border-t border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-600">{data.photoSpecs}</div>
          ) : null}
        </div>
      )
    }

    case 'comparison': {
      const rows = Array.isArray(section.rows) ? (section.rows as Array<Record<string, unknown>>) : []
      const columnSet = new Set<string>()
      rows.forEach((row) => Object.keys(row).forEach((key) => key !== 'aspect' && columnSet.add(key)))
      const columns = [...columnSet]

      return (
        <div className="space-y-3">
          {typeof section.intro === 'string' ? <p className="text-gray-600">{section.intro}</p> : null}
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-700">Aspect</th>
                    {columns.map((column) => (
                      <th key={column} className="px-4 py-3 font-semibold capitalize text-gray-700">
                        {column.replace(/([A-Z])/g, ' $1')}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="px-4 py-3 font-medium text-gray-900">{String(row.aspect ?? '')}</td>
                      {columns.map((column) => (
                        <td key={column} className="px-4 py-3 align-top text-gray-700">
                          {String(row[column] ?? '')}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {typeof section.note === 'string' ? (
            <p className="text-sm text-gray-600">
              {section.note}
              {typeof section.noteHref === 'string' ? (
                <>
                  {' '}
                  <Link href={section.noteHref} className="font-semibold underline">
                    Vezi detalii
                  </Link>
                </>
              ) : null}
            </p>
          ) : null}
        </div>
      )
    }

    case 'comparison-cards': {
      const cards = Array.isArray(section.cards) ? (section.cards as Array<Record<string, unknown>>) : []
      return (
        <div className="grid gap-3 md:grid-cols-3">
          {cards.map((card) => (
            <div key={String(card.name)} className="rounded-xl border border-gray-200 p-4">
              <p className="font-semibold text-gray-900">{String(card.name ?? '')}</p>
              {typeof card.highlight === 'string' ? <p className="mt-1 text-sm font-medium text-gray-700">{card.highlight}</p> : null}
              {Array.isArray(card.rules) ? (
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {(card.rules as string[]).map((rule) => (
                    <li key={rule}>{rule}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      )
    }

    case 'decision': {
      const options = Array.isArray(section.options) ? (section.options as Array<Record<string, unknown>>) : []
      return (
        <div className="space-y-3">
          {typeof section.intro === 'string' ? <p className="text-gray-600">{section.intro}</p> : null}
          <div className="grid gap-4">
            {options.map((option) => (
              <div key={String(option.label)} className="rounded-xl border border-gray-200 p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-gray-900">{String(option.label ?? '')}</p>
                  {typeof option.badge === 'string' ? (
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700">
                      {option.badge}
                    </span>
                  ) : null}
                </div>
                {typeof option.description === 'string' ? <p className="mt-2 text-sm text-gray-700">{option.description}</p> : null}
                {typeof option.keyFact === 'string' ? (
                  <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-blue-900">
                    {option.keyFact}
                  </div>
                ) : null}
                {typeof option.processingTime === 'string' || typeof option.fee === 'string' ? (
                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-500">
                    {typeof option.processingTime === 'string' ? <span>Termen: {option.processingTime}</span> : null}
                    {typeof option.fee === 'string' ? <span>Taxă: {option.fee}</span> : null}
                  </div>
                ) : null}
                {Array.isArray(option.requirements) ? (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
                    {(option.requirements as string[]).map((requirement) => (
                      <li key={requirement}>{requirement}</li>
                    ))}
                  </ul>
                ) : null}
                {typeof option.guideHref === 'string' && typeof option.guideLabel === 'string' ? (
                  <Link href={option.guideHref} className="mt-4 inline-flex text-sm font-semibold text-gray-900 underline">
                    {option.guideLabel}
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      )
    }

    case 'highlight': {
      return (
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
          {typeof section.text === 'string' ? <p className="text-sm leading-relaxed text-blue-900">{section.text}</p> : null}
          {Array.isArray(section.points) ? (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-blue-900">
              {(section.points as string[]).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
          {typeof section.ctaHref === 'string' && typeof section.ctaLabel === 'string' ? (
            <Link href={section.ctaHref} className="mt-4 inline-flex font-semibold text-blue-900 underline">
              {section.ctaLabel}
            </Link>
          ) : null}
          {typeof section.note === 'string' ? (
            <p className="mt-3 text-sm text-blue-800">
              {section.note}
              {typeof section.noteHref === 'string' ? (
                <>
                  {' '}
                  <Link href={section.noteHref} className="font-semibold underline">
                    Vezi ghidul
                  </Link>
                </>
              ) : null}
            </p>
          ) : null}
        </div>
      )
    }

    case 'warning-block': {
      const data = (section.data ?? null) as Record<string, unknown> | null
      return (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          {typeof section.text === 'string' ? <p className="text-sm leading-relaxed text-amber-900">{section.text}</p> : null}
          {typeof section.href === 'string' && typeof section.linkLabel === 'string' ? (
            <Link href={section.href} className="mt-4 inline-flex font-semibold text-amber-900 underline">
              {section.linkLabel}
            </Link>
          ) : null}
          {typeof section.ctaHref === 'string' && typeof section.ctaLabel === 'string' ? (
            <Link href={section.ctaHref} className="mt-4 inline-flex font-semibold text-amber-900 underline">
              {section.ctaLabel}
            </Link>
          ) : null}
          {data && Array.isArray(data.headers) && Array.isArray(data.rows) ? (
            <div className="mt-4 overflow-hidden rounded-lg border border-amber-200 bg-white">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-amber-100">
                    <tr>
                      {(data.headers as string[]).map((header) => (
                        <th key={header} className="px-4 py-3 font-semibold text-amber-950">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(data.rows as Array<Array<string>>).map((row, index) => (
                      <tr key={index} className="border-t border-amber-100">
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-4 py-3 text-gray-700">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {typeof data.photoSpecs === 'string' ? <div className="border-t border-amber-100 px-4 py-3 text-sm text-gray-600">{data.photoSpecs}</div> : null}
            </div>
          ) : null}
        </div>
      )
    }

    case 'warnings-per-consulate': {
      const consulates = Array.isArray(section.consulates) ? (section.consulates as Array<Record<string, unknown>>) : []
      return (
        <div className="grid gap-3 md:grid-cols-3">
          {consulates.map((consulate) => (
            <div key={String(consulate.name)} className="rounded-xl border border-gray-200 p-4">
              <p className="font-semibold text-gray-900">{String(consulate.name ?? '')}</p>
              {Array.isArray(consulate.rules) ? (
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {(consulate.rules as string[]).map((rule) => (
                    <li key={rule}>{rule}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      )
    }

    case 'regions': {
      const regions = Array.isArray(section.regions) ? (section.regions as string[]) : []
      return (
        <div className="space-y-3">
          {typeof section.intro === 'string' ? <p className="text-gray-600">{section.intro}</p> : null}
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            {regions.map((region) => (
              <li key={region}>{region}</li>
            ))}
          </ul>
          {typeof section.note === 'string' ? (
            <p className="text-sm text-gray-600">
              {section.note}
              {typeof section.noteHref === 'string' ? (
                <>
                  {' '}
                  <Link href={section.noteHref} className="font-semibold underline">
                    Vezi detalii
                  </Link>
                </>
              ) : null}
            </p>
          ) : null}
        </div>
      )
    }

    case 'consulate-card': {
      const data = (section.data ?? {}) as Record<string, unknown>
      const schedule = Array.isArray(data.schedule) ? (data.schedule as Array<Record<string, unknown>>) : []
      const schedulePickup = Array.isArray(data.schedulePickup) ? (data.schedulePickup as Array<Record<string, unknown>>) : []
      const phoneAlternatives = Array.isArray(data.phoneAlternatives) ? (data.phoneAlternatives as string[]) : []

      return (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          {typeof data.name === 'string' ? <p className="text-lg font-semibold text-gray-900">{data.name}</p> : null}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="space-y-2 text-sm text-gray-700">
              {typeof data.address === 'string' ? <p><strong>Adresă:</strong> {data.address}</p> : null}
              {typeof data.addressNote === 'string' ? <p>{data.addressNote}</p> : null}
              {typeof data.email === 'string' ? <p><strong>Email:</strong> {data.email}</p> : null}
              {typeof data.phone === 'string' ? <p><strong>Telefon:</strong> {data.phone}</p> : null}
              {phoneAlternatives.length ? <p><strong>Telefoane alternative:</strong> {phoneAlternatives.join(' · ')}</p> : null}
              {typeof data.phoneEmergency === 'string' ? <p><strong>Urgențe:</strong> {data.phoneEmergency}</p> : null}
              {typeof data.phoneEmergencyNote === 'string' ? <p>{data.phoneEmergencyNote}</p> : null}
              {typeof data.phoneNoInternet === 'string' ? <p><strong>Fără internet:</strong> {data.phoneNoInternet}</p> : null}
              {typeof data.phoneNoInternetNote === 'string' ? <p>{data.phoneNoInternetNote}</p> : null}
              {typeof data.website === 'string' ? <p><strong>Website:</strong> {data.website}</p> : null}
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              {schedule.length ? (
                <div>
                  <p className="font-semibold text-gray-900">Program</p>
                  <ul className="mt-1 space-y-1">
                    {schedule.map((item, index) => (
                      <li key={index}>
                        {String(item.days ?? '')}: {String(item.hours ?? '')}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {typeof data.scheduleNote === 'string' ? <p>{data.scheduleNote}</p> : null}
              {schedulePickup.length ? (
                <div>
                  <p className="font-semibold text-gray-900">Ridicare</p>
                  <ul className="mt-1 space-y-1">
                    {schedulePickup.map((item, index) => (
                      <li key={index}>
                        {String(item.days ?? '')}: {String(item.hours ?? '')}
                        {typeof item.note === 'string' ? ` · ${item.note}` : ''}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {typeof data.payment === 'string' ? <p><strong>Plată:</strong> {data.payment}</p> : null}
              {typeof data.paymentNote === 'string' ? <p>{data.paymentNote}</p> : null}
              {typeof data.bookingUrl === 'string' ? <p><strong>Programare:</strong> {data.bookingUrl}</p> : null}
              {typeof data.bookingNote === 'string' ? <p>{data.bookingNote}</p> : null}
              {typeof data.passportTracker === 'string' ? <p><strong>Tracker pașaport:</strong> {data.passportTracker}</p> : null}
              {typeof data.postalNote === 'string' ? <p><strong>Poștă:</strong> {data.postalNote}</p> : null}
            </div>
          </div>
          {typeof data.googleMapsUrl === 'string' ? (
            <a href={data.googleMapsUrl} className="mt-4 inline-flex font-semibold text-gray-900 underline">
              Deschide în Google Maps
            </a>
          ) : null}
        </div>
      )
    }

    case 'checklist':
    case 'checklist-conditional': {
      const items = Array.isArray(section.items) ? (section.items as Array<Record<string, unknown>>) : []
      return (
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="rounded-xl border border-gray-200 p-4">
              <p className="font-medium text-gray-900">
                {typeof item.action === 'string' ? item.action : typeof item.text === 'string' ? item.text : `Punct ${index + 1}`}
                {item.required === true ? ' · obligatoriu' : ''}
              </p>
              {typeof item.text === 'string' && typeof item.action === 'string' ? (
                <p className="mt-1 text-sm text-gray-700">{item.text}</p>
              ) : null}
              {typeof item.note === 'string' ? <p className="mt-2 text-xs text-gray-500">{item.note}</p> : null}
            </li>
          ))}
        </ul>
      )
    }

    case 'timeline': {
      const items = Array.isArray(section.items) ? (section.items as Array<Record<string, unknown>>) : []
      return (
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="rounded-xl border border-gray-200 p-4">
              {typeof item.period === 'string' ? <p className="text-sm font-semibold text-gray-500">{item.period}</p> : null}
              {typeof item.title === 'string' ? <p className="mt-1 font-semibold text-gray-900">{item.title}</p> : null}
              {typeof item.text === 'string' ? <p className="mt-2 text-sm text-gray-700">{item.text}</p> : null}
            </div>
          ))}
        </div>
      )
    }

    default:
      return <p className="text-sm text-gray-500">Secțiune disponibilă în versiunea structurată: {section.type}</p>
  }
}

export default function StructuredSeoPage({
  metadata,
  lpSlug,
  lpTopic,
  breadcrumbs,
  h1,
  tldr,
  intro,
  ctaLabel,
  ctaHref,
  ctaNote,
  sourceNote,
  sections,
  faqItems,
  finalCtaTitle,
  finalCtaText,
  finalCtaLabel,
  finalCtaHref,
  schemaOptions,
}: StructuredSeoPageComponentProps) {
  const metadataTitle = getMetadataTitle(metadata) ?? h1
  const metadataDescription = getMetadataDescription(metadata) || tldr.text

  const generatedBreadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://www.actero.ro${item.href === '/' ? '' : item.href}`,
    })),
  }

  const generatedArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://www.actero.ro/${lpSlug}#article`,
    headline: metadataTitle,
    description: metadataDescription,
    author: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
    publisher: { '@type': 'Organization', '@id': 'https://www.actero.ro/#organization' },
    mainEntityOfPage: `https://www.actero.ro/${lpSlug}`,
    inLanguage: 'ro',
  }

  const generatedFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const howToSteps = getHowToSteps(sections)
  const howToSchema =
    howToSteps.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: h1,
          description: tldr.text,
          step: howToSteps,
        }
      : null

  const resolvedSchemas = [
    schemaOptions?.breadcrumb === false ? null : schemaOptions?.breadcrumb ?? generatedBreadcrumbSchema,
    schemaOptions?.article === false ? null : schemaOptions?.article ?? generatedArticleSchema,
    schemaOptions?.faq === false ? null : schemaOptions?.faq ?? generatedFaqSchema,
    schemaOptions?.howTo === false ? null : schemaOptions?.howTo ?? howToSchema,
    ...(schemaOptions?.extra ?? []),
  ].filter(Boolean)

  return (
    <>
      {resolvedSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="min-h-screen bg-white">
        <SeoAnalytics lpSlug={lpSlug} lpTopic={lpTopic} />
        <SiteHeader />
        <div className="max-w-3xl mx-auto px-5 py-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1
                return (
                  <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                    {isLast ? (
                      <span className="font-medium text-gray-700">{item.label}</span>
                    ) : (
                      <Link href={item.href} className="hover:text-gray-800 hover:underline">
                        {item.label}
                      </Link>
                    )}
                    {!isLast ? <span aria-hidden="true" className="text-gray-300">/</span> : null}
                  </li>
                )
              })}
            </ol>
          </nav>

          <section className="mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">{h1}</h1>
            <div className="my-4 rounded-r-xl border-l-4 border-blue-500 bg-blue-50 p-4">
              <p className="mb-1 text-sm font-semibold text-blue-800">{tldr.label}</p>
              <p className="text-sm text-blue-900">{tldr.text}</p>
            </div>
            <p className="mb-6 text-base leading-relaxed text-gray-600">{intro}</p>
            <TrackedLink
              href={ctaHref}
              eventName="seo_cta_click"
              eventParams={{ lp_slug: lpSlug, lp_topic: lpTopic, cta_label: 'hero_cta' }}
              className="inline-flex rounded-xl bg-gray-900 px-6 py-4 text-base font-bold text-white"
            >
              {ctaLabel}
            </TrackedLink>
            <p className="mt-3 text-sm text-gray-500">{ctaNote ?? 'Fără cont · Începi gratuit · 30 de secunde'}</p>
          </section>

          <div className="mb-8 text-xs text-right text-gray-400">{sourceNote}</div>

          {sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">{section.title}</h2>
              <div className="text-base leading-relaxed text-gray-700">{renderSection(section)}</div>
            </section>
          ))}

          <section id="intrebari-frecvente" className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Întrebări frecvente</h2>
            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <details key={index} open={index === 0} className="rounded-xl border border-gray-200 p-4">
                  <summary><strong>{item.question}</strong></summary>
                  <p className="mt-3 text-gray-700">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="pb-8">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="mb-3 text-2xl font-bold text-gray-900">{finalCtaTitle}</h2>
              <p className="mb-5 leading-relaxed text-gray-600">{finalCtaText}</p>
              <TrackedLink
                href={finalCtaHref ?? ctaHref}
                eventName="seo_cta_click"
                eventParams={{ lp_slug: lpSlug, lp_topic: lpTopic, cta_label: 'final_cta' }}
                className="inline-flex rounded-xl bg-gray-900 px-6 py-4 text-base font-bold text-white"
              >
                {finalCtaLabel ?? ctaLabel}
              </TrackedLink>
            </div>
          </section>

          <SiteFooter />
        </div>
      </main>
    </>
  )
}
