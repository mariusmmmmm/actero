'use client'

import { useAppStore } from '@/store/appStore'
import { getParteneriForConsulate, type Partener } from '@/lib/parteneri'

export default function ParteneriTab() {
  const consulate = useAppStore(s => s.consulate)
  const parteneri: Partener[] = getParteneriForConsulate(consulate)
  const categorii = Array.from(new Set(parteneri.map(p => p.categorie)))

  if (!parteneri.length) {
    return (
      <div className="px-5 py-8 text-center">
        <p className="text-sm text-gray-400 mb-1">Niciun partener disponibil</p>
        <p className="text-xs text-gray-300">pentru consulatul {consulate ?? 'selectat'}</p>
      </div>
    )
  }

  return (
    <div className="pb-6">
      <div className="px-5 pt-5 pb-4 border-b border-gray-100">
        <h2 className="text-base font-bold text-gray-900 mb-1">Parteneri verificați</h2>
        <p className="text-xs text-gray-400">
          Selectați de ActeRO · recenzii reale de la români din Germania
        </p>
      </div>

      {categorii.map(cat => (
        <div key={cat} className="px-5 pt-4">
          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400 mb-3">{cat}</p>
          <div className="flex flex-col gap-3">
            {parteneri.filter(p => p.categorie === cat).map(p => (
              <PartenerCard key={p.id} partener={p} />
            ))}
          </div>
        </div>
      ))}

      <div className="px-5 pt-5">
        <p className="text-[11px] text-gray-400 text-center leading-relaxed">
          Partenerii sunt verificați de echipa ActeRO.{' '}
          <a href="mailto:contact@actero.ro" className="underline">Sugerează un partener</a>
        </p>
      </div>
    </div>
  )
}

function PartenerCard({ partener: p }: { partener: Partener }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-4">
      <div className="flex items-start justify-between gap-2 mb-1">
        <p className="text-sm font-bold text-gray-900 leading-snug">{p.nume}</p>
        <span className="text-[11px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold flex-shrink-0">
          {p.statusLabel ?? '✓ Verificat'}
        </span>
      </div>
      <p className="text-xs text-gray-400 mb-2 leading-snug">{p.meta}</p>
      {p.tags?.length ? (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {p.tags.map(tag => (
            <span key={tag} className="text-[11px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      {p.contactUrl && (
        <button
          onClick={() => window.open(p.contactUrl!, '_blank', 'noopener')}
          className="w-full py-2.5 rounded-xl bg-gray-100 text-sm font-medium text-gray-700 active:bg-gray-200 transition-colors"
        >
          {p.contactLabel ?? 'Contactează →'}
        </button>
      )}
    </div>
  )
}
