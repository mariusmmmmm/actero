'use client'

import { useParams } from 'next/navigation'
import SiteHeader from '@/components/layout/SiteHeader'

export default function TrackerPlaceholderPage() {
  const params = useParams<{ sessionId: string }>()

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      <div className="max-w-2xl mx-auto w-full flex-1 px-5 py-8">
        <div className="mb-6 flex justify-end">
          <a
            href={`/ghid/${params.sessionId}`}
            className="text-sm text-gray-400 hover:text-gray-600"
          >
            ← Înapoi la ghid
          </a>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Tracker dosar</h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Această funcționalitate va fi disponibilă în curând.
          </p>
        </div>
      </div>
    </main>
  )
}
