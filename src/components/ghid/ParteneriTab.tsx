'use client'

import { useAppStore } from '@/store/appStore'
import { getParteneriForConsulate, type Partener } from '@/lib/parteneri'

export default function ParteneriTab() {
  const consulate = useAppStore((s) => s.consulate)
  const parteneri: Partener[] = getParteneriForConsulate(consulate)

  if (!parteneri.length) {
    return (
      <div className="px-5 py-8 text-center">
        <p className="mb-1 text-sm text-gray-400">Niciun partener disponibil</p>
        <p className="text-xs text-gray-300">
          pentru consulatul {consulate ?? 'selectat'}
        </p>
      </div>
    )
  }

  const categorii = Array.from(new Set(parteneri.map((p) => p.categorie)))

  return (
    <div className="pb-6">
      <div className="border-b border-gray-100 px-5 pb-4 pt-5">
        <h2 className="mb-1 text-base font-bold text-gray-900">
          Parteneri verificati
        </h2>
        <p className="text-xs text-gray-400">
          Selectati de ActeRO · recenzii reale de la romani din diaspora
        </p>
      </div>

      {categorii.map((cat) => (
        <div key={cat} className="px-5 pt-4">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-wide text-gray-400">
            {cat}
          </p>
          <div className="flex flex-col gap-3">
            {parteneri
              .filter((p) => p.categorie === cat)
              .map((p) => (
                <PartenerCard key={p.id} partener={p} />
              ))}
          </div>
        </div>
      ))}

      <div className="px-5 pt-5">
        <p className="text-center text-[11px] leading-relaxed text-gray-400">
          Partenerii sunt verificati de echipa ActeRO.{' '}
          <a href="mailto:contact@actero.ro" className="underline">
            Sugereaza un partener
          </a>
        </p>
      </div>
    </div>
  )
}

function PartenerCard({ partener: p }: { partener: Partener }) {
  const handleContact = () => {
    if (p.contactUrl) {
      window.open(p.contactUrl, '_blank', 'noopener')
    }
  }

  return (
    <div className="rounded-2xl border border-gray-200 p-4">
      <div className="mb-1 flex items-start justify-between gap-2">
        <p className="text-sm font-bold leading-snug text-gray-900">{p.nume}</p>
        <span className="flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-semibold text-green-700">
          {p.statusLabel ?? '✓ Verificat'}
        </span>
      </div>

      <p className="mb-2 text-xs leading-snug text-gray-400">{p.meta}</p>

      {p.tags?.length ? (
        <div className="mb-3 flex flex-wrap gap-1.5">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      {p.contactUrl && (
        <button
          onClick={handleContact}
          className="w-full rounded-xl bg-gray-100 py-2.5 text-sm font-medium text-gray-700 transition-colors active:bg-gray-200"
        >
          {p.contactLabel ?? 'Contacteaza →'}
        </button>
      )}
    </div>
  )
}
