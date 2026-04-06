'use client'

import { useCallback, useMemo, useState } from 'react'
import { useAppStore } from '@/store/appStore'
import {
  getGuideChecklist,
  type ChecklistSection,
} from '@/lib/guides/checklists'

export default function ChecklistTab({
  guideIdOverride,
}: {
  guideIdOverride?: string | null
}) {
  const storeGuideId = useAppStore((s) => s.guideId)
  const guideId = guideIdOverride ?? storeGuideId
  const consulate = useAppStore((s) => s.consulate)
  const situation = useAppStore((s) => s.situation)
  const checklistState = useAppStore((s) => s.checklistState)
  const setChecklistItem = useAppStore((s) => s.setChecklistItem)

  const [downloadLoading, setDownloadLoading] = useState(false)

  const sections: ChecklistSection[] = useMemo(
    () => getGuideChecklist(guideId, consulate, situation),
    [guideId, consulate, situation]
  )

  const allItems = sections.flatMap((section) => section.items)
  const checkedCount = allItems.filter((item) => checklistState[item.id]?.checked).length
  const totalCount = allItems.length
  const pct = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0

  const toggle = useCallback((id: string) => {
    setChecklistItem(id, !checklistState[id]?.checked)
  }, [checklistState, setChecklistItem])

  const handleDownload = useCallback(() => {
    setDownloadLoading(true)

    const lines: string[] = []
    lines.push('CHECKLIST DOCUMENTE - ActeRO')
    lines.push(`Ghid: ${guideId ?? ''} · Consulat: ${consulate?.toUpperCase() ?? ''}`)
    lines.push(`Generat: ${new Date().toLocaleDateString('ro-RO')}`)
    lines.push('')

    for (const section of sections) {
      lines.push(`== ${section.title.toUpperCase()} ==`)
      for (const item of section.items) {
        const checked = checklistState[item.id]?.checked ? '[x]' : '[ ]'
        lines.push(`${checked} ${item.name}`)
        if (item.detail) {
          lines.push(`    ${item.detail}`)
        }
      }
      lines.push('')
    }

    const blob = new Blob([lines.join('\n')], {
      type: 'text/plain;charset=utf-8',
    })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `actero-checklist-${guideId ?? 'ghid'}.txt`
    anchor.click()
    URL.revokeObjectURL(url)
    setDownloadLoading(false)
  }, [sections, checklistState, guideId, consulate])

  if (!sections.length) {
    return (
      <div className="px-5 py-8 text-center text-sm text-gray-400">
        Checklist indisponibil pentru ghidul selectat.
      </div>
    )
  }

  return (
    <div className="pb-6">
      <div className="border-b border-gray-100 px-5 pb-4 pt-5">
        <h2 className="mb-2 text-base font-bold text-gray-900">
          Checklist documente
        </h2>
        <div className="mb-1 flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-2 rounded-full bg-green-500 transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="w-12 text-right text-xs font-semibold tabular-nums text-green-600">
            {checkedCount}/{totalCount}
          </span>
        </div>
        <p className="text-xs text-gray-400">
          {consulate
            ? `Consulat ${consulate.charAt(0).toUpperCase() + consulate.slice(1)}`
            : ''}
          {pct === 100 ? ' · Toate documentele bifate ✓' : ''}
        </p>
      </div>

      {sections.map((section) => (
        <div key={section.id} className="px-5 pt-4">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-gray-400">
            {section.title}
          </p>
          <div className="flex flex-col gap-0">
            {section.items.map((item) => {
              const checked = !!checklistState[item.id]?.checked

              return (
                <button
                  key={item.id}
                  onClick={() => toggle(item.id)}
                  className="group flex w-full items-start gap-3 border-b border-gray-50 py-3 text-left transition-colors active:bg-gray-50"
                >
                  <div
                    className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                      checked
                        ? 'border-green-500 bg-green-500'
                        : 'border-gray-300 group-active:border-gray-400'
                    }`}
                  >
                    {checked && (
                      <svg
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 12 12"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-sm font-medium leading-snug ${
                        checked ? 'text-gray-400 line-through' : 'text-gray-900'
                      }`}
                    >
                      {item.name}
                    </p>
                    {item.detail && (
                      <p className="mt-0.5 text-xs leading-snug text-gray-400">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      ))}

      <div className="px-5 pt-5">
        <button
          onClick={handleDownload}
          disabled={downloadLoading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-100 py-3 text-sm font-medium text-gray-700 transition-colors active:bg-gray-200 disabled:opacity-50"
        >
          <span>⬇</span>
          {downloadLoading ? 'Se descarca...' : 'Descarca lista pentru ghiseu'}
        </button>
        <p className="mt-2 text-center text-[11px] text-gray-400">
          Format text · poti printa sau trimite pe telefon
        </p>
      </div>
    </div>
  )
}
