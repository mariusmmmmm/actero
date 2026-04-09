'use client'

import { useState, useCallback } from 'react'
import { useAppStore } from '@/store/appStore'
import { getGuideChecklist, type ChecklistSection } from '@/lib/guides/checklists'

export default function ChecklistTab() {
  const guideId = useAppStore(s => s.guideId)
  const consulate = useAppStore(s => s.consulate)
  const situation = useAppStore(s => s.situation)
  const checklistState = useAppStore(s => s.checklistState)
  const setChecklistItem = useAppStore(s => s.setChecklistItem)

  const [downloadLoading, setDownloadLoading] = useState(false)

  const sections: ChecklistSection[] = getGuideChecklist(guideId, consulate, situation)
  const allItems = sections.flatMap(s => s.items)

  const checkedCount = allItems.filter(item => checklistState[item.id]?.checked).length
  const totalCount = allItems.length
  const pct = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0

  const toggle = useCallback((id: string) => {
    setChecklistItem(id, !checklistState[id]?.checked)
  }, [checklistState, setChecklistItem])

  const handleDownload = useCallback(() => {
    setDownloadLoading(true)
    const lines: string[] = [
      'LISTA DE ACTE — ActeRO',
      `Ghid: ${guideId ?? ''} · Consulat: ${consulate?.toUpperCase() ?? ''}`,
      `Generat: ${new Date().toLocaleDateString('ro-RO')}`,
      '',
    ]
    for (const sec of sections) {
      lines.push(`== ${sec.title.toUpperCase()} ==`)
      for (const item of sec.items) {
        const checked = checklistState[item.id]?.checked ? '[x]' : '[ ]'
        lines.push(`${checked} ${item.name}`)
        if (item.detail) lines.push(`    ${item.detail}`)
      }
      lines.push('')
    }
    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `actero-lista-acte-${guideId ?? 'ghid'}.txt`
    a.click()
    URL.revokeObjectURL(url)
    setDownloadLoading(false)
  }, [sections, checklistState, guideId, consulate])

  if (!sections.length) {
    return (
      <div className="px-5 py-8 text-center text-sm text-gray-400">
        Lista de acte nu este disponibilă pentru ghidul selectat.
      </div>
    )
  }

  return (
    <div className="pb-6">
      <div className="px-5 pt-5 pb-4 border-b border-gray-100">
        <h2 className="text-base font-bold text-gray-900 mb-2">Lista de acte</h2>
        <div className="flex items-center gap-3 mb-1">
          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-2 bg-green-500 rounded-full transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-green-600 tabular-nums w-12 text-right">
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

      {sections.map(sec => (
        <div key={sec.id} className="px-5 pt-4">
          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400 mb-2">
            {sec.title}
          </p>
          {sec.items.map(item => {
            const checked = !!checklistState[item.id]?.checked
            return (
              <button
                key={item.id}
                onClick={() => toggle(item.id)}
                className="flex items-start gap-3 py-3 border-b border-gray-50 text-left w-full group active:bg-gray-50 transition-colors"
              >
                <div className={`w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center mt-0.5 transition-colors ${
                  checked
                    ? 'bg-green-500 border-green-500'
                    : 'border-gray-300 group-active:border-gray-400'
                }`}>
                  {checked && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium leading-snug ${checked ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                    {item.name}
                  </p>
                  {item.detail && (
                    <p className="text-xs text-gray-400 mt-0.5 leading-snug">{item.detail}</p>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      ))}

      <div className="px-5 pt-5">
        <button
          onClick={handleDownload}
          disabled={downloadLoading}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-100 text-sm font-medium text-gray-700 active:bg-gray-200 transition-colors disabled:opacity-50"
        >
          <span>⬇</span>
          {downloadLoading ? 'Se descarcă...' : 'Descarcă lista pentru ghișeu'}
        </button>
        <p className="text-[11px] text-gray-400 text-center mt-2">
          Format text · poți printa sau trimite pe telefon
        </p>
      </div>
    </div>
  )
}
