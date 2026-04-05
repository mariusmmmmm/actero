import SeoAnalytics from '@/components/analytics/SeoAnalytics'
import TrackedLink from '@/components/analytics/TrackedLink'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'
import type { ReactNode } from 'react'

type FaqItem = {
  question: string
  answer: string
}

type HowToStepItem = {
  name: string
  text: string
}

type SectionItem = {
  id: string
  title: string
  content: ReactNode
}

type LlmOptimizedPageProps = {
  lpSlug: string
  lpTopic: string
  h1: string
  intro: string
  tldr: string
  ctaHref: string
  ctaLabel: string
  updatedAt: string
  sourceNote: string
  faqItems: FaqItem[]
  howToSteps: HowToStepItem[]
  articleSchema: Record<string, unknown>
  breadcrumbSchema: Record<string, unknown>
  extraSchemas?: Record<string, unknown>[]
  sections: SectionItem[]
  finalCtaTitle: string
  finalCtaText: string
}

export default function LlmOptimizedPage({
  lpSlug,
  lpTopic,
  h1,
  intro,
  tldr,
  ctaHref,
  ctaLabel,
  updatedAt,
  sourceNote,
  faqItems,
  howToSteps,
  articleSchema,
  breadcrumbSchema,
  extraSchemas = [],
  sections,
  finalCtaTitle,
  finalCtaText,
}: LlmOptimizedPageProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    step: howToSteps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }

  const schemas = [faqSchema, howToSchema, articleSchema, breadcrumbSchema, ...extraSchemas]

  return (
    <>
      {schemas.map((schema, index) => (
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
          <section data-llm-section="hero" className="mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">{h1}</h1>

            <div
              data-llm-summary="true"
              className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-r-xl"
            >
              <p className="font-semibold text-sm text-blue-800 mb-1">Răspuns rapid:</p>
              <p className="text-sm text-blue-900">{tldr}</p>
            </div>

            <p className="text-base text-gray-600 leading-relaxed mb-6">{intro}</p>

            <TrackedLink
              href={ctaHref}
              eventName="seo_cta_click"
              eventParams={{
                lp_slug: lpSlug,
                lp_topic: lpTopic,
                cta_label: 'hero_cta',
              }}
              className="inline-flex rounded-xl bg-gray-900 px-6 py-4 text-base font-bold text-white"
            >
              {ctaLabel}
            </TrackedLink>
            <p className="text-sm text-gray-500 mt-3">Fără cont · Fără card · 30 de secunde</p>
          </section>

          <div className="text-xs text-gray-400 text-right mb-8">
            Actualizat: <time dateTime="2026-04-01">{updatedAt}</time> · Surse: {sourceNote}
          </div>

          {sections.map((section) => (
            <section key={section.id} data-llm-section={section.id} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <div className="text-gray-700 text-base leading-relaxed">{section.content}</div>
            </section>
          ))}

          <section data-llm-section="faq" id="intrebari-frecvente" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Întrebări frecvente</h2>
            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <details key={index} open={index === 0} className="rounded-xl border border-gray-200 p-4">
                  <summary><strong>{item.question}</strong></summary>
                  <p className="mt-3 text-gray-700">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section data-llm-section="cta" className="pb-8">
            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{finalCtaTitle}</h2>
              <p className="text-gray-600 leading-relaxed mb-5">{finalCtaText}</p>
              <TrackedLink
                href={ctaHref}
                eventName="seo_cta_click"
                eventParams={{
                  lp_slug: lpSlug,
                  lp_topic: lpTopic,
                  cta_label: 'final_cta',
                }}
                className="inline-flex rounded-xl bg-gray-900 px-6 py-4 text-base font-bold text-white"
              >
                Rezolvă gratuit →
              </TrackedLink>
            </div>
          </section>

          <SiteFooter />
        </div>
      </main>
    </>
  )
}
