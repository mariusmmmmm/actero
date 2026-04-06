'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'
import { useAppStore } from '@/store/appStore'
import { getGuideTitle, getCrossSellGuides } from '@/lib/guides/meta'
import type { ConsulateId, GuideId } from '@/types'

const SHARE_TEXT = (ghidLabel: string) =>
  `Am rezolvat ${ghidLabel} cu ActeRO. Dacă și tu ești blocat, încearcă — primii pași sunt gratuiți.`

const SHARE_URL = 'https://actero.ro'

function FinalizatPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session')
  const guideId = useAppStore(s => s.guideId)
  const consulate = useAppStore(s => s.consulate)

  const [copied, setCopied] = useState(false)
  const [isBootstrapping, setIsBootstrapping] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function bootstrapSession() {
      if (!sessionId) {
        if (!cancelled) setIsBootstrapping(false)
        return
      }

      try {
        const res = await fetch(`/api/session/bootstrap?session=${sessionId}`, {
          cache: 'no-store',
        })

        if (!res.ok) {
          if (!cancelled) setIsBootstrapping(false)
          return
        }

        const data = await res.json() as {
          sessionId: string
          guideId: GuideId | null
          isPaid: boolean
          situation?: { consulate?: ConsulateId | null }
        }

        useAppStore.setState({
          sessionId: data.sessionId,
          guideId: data.guideId,
          isPaid: data.isPaid,
          consulate: data.situation?.consulate ?? null,
        })
      } catch (err) {
        console.error('Finalizat bootstrap error:', err)
      } finally {
        if (!cancelled) setIsBootstrapping(false)
      }
    }

    void bootstrapSession()

    return () => {
      cancelled = true
    }
  }, [sessionId])

  useEffect(() => {
    if (!isBootstrapping && !guideId) router.replace('/')
  }, [guideId, isBootstrapping, router])

  const ghidLabel = getGuideTitle(guideId) ?? 'actul'
  const crossSell = getCrossSellGuides(guideId, consulate)
  const isBirthTranscriptionGuide = guideId === 'transcriere-nastere-de'
  const shareText = SHARE_TEXT(ghidLabel)
  const shareEncoded = encodeURIComponent(shareText + '\n' + SHARE_URL)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText + '\n' + SHARE_URL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback silențios
    }
  }

  if (isBootstrapping) return null
  if (!guideId) return null

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-5 py-8">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="text-2xl font-black text-gray-900 mb-2">
            Felicitări!
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
            Ai rezolvat{' '}
            <span className="font-semibold text-gray-700">{ghidLabel}</span>.
            {' '}Ai făcut ceva pe care mulți îl amână luni de zile.
          </p>
        </div>

        <div className="mb-6">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
            Ajută și un prieten cu aceeași problemă
          </p>
          <div className="bg-gray-50 rounded-2xl p-4 mb-3">
            <p className="text-sm text-gray-600 italic leading-relaxed mb-4">
              „{shareText}”
            </p>
            <div className="flex gap-2">
              <a
                href={`https://wa.me/?text=${shareEncoded}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold text-center active:opacity-80 transition-opacity"
              >
                WhatsApp
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}&quote=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-[#1877F2] text-white text-xs font-bold text-center active:opacity-80 transition-opacity"
              >
                Facebook
              </a>
              <button
                onClick={handleCopy}
                className="flex-1 py-2.5 rounded-xl bg-gray-200 text-gray-700 text-xs font-bold active:bg-gray-300 transition-colors"
              >
                {copied ? '✓ Copiat' : 'Copiază'}
              </button>
            </div>
          </div>
        </div>

        {crossSell.length > 0 && (
          <div className="mb-6">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
              {isBirthTranscriptionGuide ? 'Acum poți obține primul pașaport sau buletin al copilului' : 'Ce urmează'}
            </p>
            {isBirthTranscriptionGuide && (
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Transcrierea a deblocat următorul pas. Alege dacă vrei să continui cu primul
                pașaport sau cu primul buletin al copilului.
              </p>
            )}
            <div className="flex flex-col gap-2">
              {crossSell.map(item => (
                <Link
                  key={item.guideId}
                  href={`/wizard?hint=${item.guideId}`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 active:bg-gray-50 transition-colors"
                >
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 leading-snug">{item.title}</p>
                    <p className="text-xs text-gray-400 leading-snug">{item.subtitle}</p>
                  </div>
                  <span className="text-gray-300 flex-shrink-0">›</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="rounded-xl bg-blue-50 border border-blue-100 p-4 mb-6 flex gap-3 items-start">
          <span className="text-lg flex-shrink-0">🔔</span>
          <div>
            <p className="text-sm font-semibold text-blue-900 mb-0.5">
              Te anunțăm înainte să expire
            </p>
            <p className="text-xs text-blue-700 leading-snug">
              Vom trimite un email cu 3 luni înainte de expirare, ca să nu te trezești din nou în urgență.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/ghid"
            className="text-xs text-gray-400 underline underline-offset-2"
          >
            ← Înapoi la ghidul tău
          </Link>
        </div>
      </div>
      <SiteFooter />
    </main>
  )
}

export default function FinalizatPage() {
  return (
    <Suspense fallback={null}>
      <FinalizatPageContent />
    </Suspense>
  )
}
