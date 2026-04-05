// ActeRO — app/ghid/page.tsx
// S4 — Ghid Free: primii 2 pași vizibili + paywall banner
// S5/S6/S7/S8 — Tab-uri paid: Checklist, Tracker, Parteneri

'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import SiteHeader from '@/components/layout/SiteHeader'
import { persistAttribution, trackEvent, trackOnce, withAttribution } from '@/lib/analytics'
import { TEST_MODE } from '@/lib/config'
import { ghidFreeMap, type FreeStep, type GhidFreeContent } from '@/lib/guides/freeContent'
import { useAppStore } from '@/store/appStore'
import type { GuideId } from '@/types'

const blockStyles = {
  info: 'bg-gray-50 border border-gray-200 text-gray-700',
  warning: 'bg-orange-50 border border-orange-200 text-orange-800',
  tip: 'bg-green-50 border border-green-200 text-green-800',
  action: 'bg-blue-50 border border-blue-200 text-blue-800',
  note: 'bg-yellow-50 border border-yellow-200 text-yellow-800',
}

const blockIcons = {
  info: '📋',
  warning: '⚠️',
  tip: '💡',
  action: '→',
  note: '📝',
}

function StepCard({
  step,
  isActive,
  guideId,
}: {
  step: FreeStep
  isActive: boolean
  guideId: GuideId
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldCollapse = step.id === 1 || step.id === 2
  const visibleBlocks = shouldCollapse ? step.blocks.slice(0, 2) : step.blocks
  const hiddenBlocks = shouldCollapse ? step.blocks.slice(2) : []

  return (
    <div className={`rounded-2xl border-2 p-4 mb-4 ${isActive ? 'border-green-400 bg-green-50/30' : 'border-gray-200 bg-white'}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${isActive ? 'bg-green-500 text-white' : 'bg-gray-900 text-white'}`}>
          {step.id}
        </div>
        <div className="font-semibold text-gray-900 text-sm">{step.title}</div>
      </div>
      <div className="flex flex-col gap-2 ml-11">
        {visibleBlocks.map((block, i) => (
          <div key={i} className={`rounded-xl px-3 py-2 text-sm flex gap-2 ${blockStyles[block.type]}`}>
            <span className="flex-shrink-0">{blockIcons[block.type]}</span>
            <span>{block.text}</span>
          </div>
        ))}
        {hiddenBlocks.length > 0 && (
          <>
            <button
              type="button"
              onClick={() => {
                const nextExpanded = !isExpanded
                setIsExpanded(nextExpanded)
                if (nextExpanded) {
                  trackEvent(
                    step.id === 1 ? 'free_guide_expand_step_1' : 'free_guide_expand_step_2',
                    withAttribution({ guide_id: guideId })
                  )
                }
              }}
              className="self-start mt-1 rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600 hover:border-gray-300 hover:text-gray-800 transition-colors"
            >
              {isExpanded
                ? '▲ Ascunde informațiile suplimentare'
                : step.id === 1
                  ? `▼ Vezi toate documentele necesare (${hiddenBlocks.length} în plus)`
                  : `▼ Vezi toți pașii de pregătire (${hiddenBlocks.length} în plus)`}
            </button>
            {isExpanded && (
              <div className="flex flex-col gap-2">
                {hiddenBlocks.map((block, i) => (
                  <div key={`${step.id}-${i + 2}`} className={`rounded-xl px-3 py-2 text-sm flex gap-2 ${blockStyles[block.type]}`}>
                    <span className="flex-shrink-0">{blockIcons[block.type]}</span>
                    <span>{block.text}</span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

function LockedStep({ step }: { step: { id: number; title: string } }) {
  return (
    <div className="flex items-center gap-3 py-2 opacity-40">
      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-400 flex-shrink-0">
        {step.id}
      </div>
      <span className="text-sm text-gray-400">{step.title}</span>
      <span className="ml-auto text-gray-300 text-xs">🔒</span>
    </div>
  )
}

function PaywallBanner({
  teaser,
  price,
  onUnlock,
  guideId,
  problemType,
  sessionId,
}: {
  teaser: string[]
  price: string
  onUnlock: () => void
  guideId: GuideId
  problemType?: string | null
  sessionId: string
}) {
  const [benefitsOpen, setBenefitsOpen] = useState(false)
  const bannerRef = useRef<HTMLDivElement | null>(null)
  const visibleTeaser = teaser.slice(0, 3)
  const hiddenTeaser = teaser.slice(3)

  useEffect(() => {
    const node = bannerRef.current
    if (!node || typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          trackOnce(
            `free_guide_paywall_view:${sessionId}:${guideId}`,
            'free_guide_paywall_view',
            withAttribution({
              guide_id: guideId,
              problem_type: problemType ?? undefined,
            })
          )
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [guideId, problemType, sessionId])

  return (
    <div ref={bannerRef} className="bg-gray-900 rounded-2xl p-5 my-4">
      <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/70 mb-3">
        Acces complet
      </div>
      <div className="font-bold text-white text-xl mb-2">
        Deblochezi restul ghidului complet
      </div>
      <div className="text-white font-bold text-xl mb-1">
        {price} <span className="text-gray-400 text-sm font-normal">· plată o singură dată</span>
      </div>
      <p className="text-xs text-gray-400 mb-4">Acces instant după plată</p>
      <button
        onClick={() => {
          trackEvent('free_guide_paywall_click', withAttribution({
            guide_id: guideId,
            problem_type: problemType ?? undefined,
            value: 9.99,
            currency: 'EUR',
          }))
          onUnlock()
        }}
        className="w-full py-3 bg-green-500 text-white font-bold rounded-xl text-sm"
      >
        Deblochează ghidul complet →
      </button>
      <div className="text-xs text-gray-500 text-center mt-2 mb-4">
        Checklist + tracker + parteneri verificați
      </div>
      <div className="flex flex-col gap-2">
        {visibleTeaser.map((item, i) => (
          <div key={i} className="flex gap-2 text-sm text-gray-300">
            <span className="text-green-400 flex-shrink-0">✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      {hiddenTeaser.length > 0 && (
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setBenefitsOpen(!benefitsOpen)}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-300 hover:border-white/20 hover:text-white transition-colors"
          >
            {benefitsOpen
              ? '▲ Mai puține beneficii'
              : `▼ Vezi toate beneficiile (${hiddenTeaser.length} în plus)`}
          </button>
          {benefitsOpen && (
            <div className="mt-3 flex flex-col gap-2">
              {hiddenTeaser.map((item, i) => (
                <div key={`${item}-${i}`} className="flex gap-2 text-sm text-gray-300">
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function GhidPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const sessionId = searchParams.get('session') ?? ''
  const testGuideId = searchParams.get('guide') as GuideId | null

  const guideId = useAppStore(s => s.guideId)
  const problemType = useAppStore(s => s.problemType)
  const activeGuideId = TEST_MODE && testGuideId ? testGuideId : guideId
  const content = activeGuideId ? ghidFreeMap[activeGuideId] : null

  useEffect(() => {
    persistAttribution(searchParams)
  }, [searchParams])

  useEffect(() => {
    if (!activeGuideId) return
    trackOnce(
      `free_guide_view:${sessionId || activeGuideId}`,
      'free_guide_view',
      withAttribution({
        guide_id: activeGuideId,
        problem_type: problemType ?? undefined,
      }, searchParams)
    )
  }, [activeGuideId, problemType, searchParams, sessionId])

  if (!content) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-3xl mb-3">⚠️</div>
          <p className="text-sm">Ghid negăsit. <a href="/wizard" className="underline">Reîncepe</a></p>
        </div>
      </main>
    )
  }

  const safeGuideId = activeGuideId as GuideId
  const handleUnlock = () => router.push(`/paywall?session=${sessionId}`)

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <SiteHeader />
      <div className="max-w-2xl mx-auto w-full px-5 py-6 flex-1">
        <div className="mb-4 flex justify-end">
          <a href={`/diagnostic?session=${sessionId}`} className="text-sm text-gray-400">← Înapoi</a>
        </div>
        <div className="mb-4">
          <h1 className="text-lg font-bold text-gray-900 mb-1">{content.title}</h1>
          <div className="flex gap-2">
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
              {content.meta.free}
            </span>
            <span className="bg-gray-100 text-gray-500 text-xs font-semibold px-2 py-1 rounded-full">
              {content.meta.total}
            </span>
          </div>
        </div>

        {content.steps.map((step, i) => (
          <StepCard key={step.id} step={step} isActive={i === 0} guideId={safeGuideId} />
        ))}

        <PaywallBanner
          teaser={content.paywallTeaser}
          price="9,99€"
          onUnlock={handleUnlock}
          guideId={safeGuideId}
          problemType={problemType}
          sessionId={sessionId}
        />

        <div className="px-1">
          {content.lockedSteps.map((step) => (
            <LockedStep key={step.id} step={step} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default function GhidPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-white flex flex-col">
        <SiteHeader />
        <div className="max-w-2xl mx-auto w-full px-5 py-6 flex-1" />
      </main>
    }>
      <GhidPageContent />
    </Suspense>
  )
}
