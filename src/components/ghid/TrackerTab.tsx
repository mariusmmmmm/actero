'use client'

import { useRouter } from 'next/navigation'
import { useAppStore } from '@/store/appStore'
import { getGuideSteps } from '@/lib/guides/steps'

export default function TrackerTab({
  guideIdOverride,
}: {
  guideIdOverride?: string | null
}) {
  const router = useRouter()
  const storeGuideId = useAppStore((s) => s.guideId)
  const guideId = guideIdOverride ?? storeGuideId
  const currentStepIndex = useAppStore((s) => s.currentStepIndex)
  const trackerState = useAppStore((s) => s.trackerState)
  const setTrackerStep = useAppStore((s) => s.setTrackerStep)
  const checklistState = useAppStore((s) => s.checklistState)
  const sessionId = useAppStore((s) => s.sessionId)
  const consulate = useAppStore((s) => s.consulate)

  const steps = getGuideSteps(guideId, consulate)

  const checklistTotal = Object.keys(checklistState).length
  const checklistDone = Object.values(checklistState).filter(
    (item) => item?.checked
  ).length

  const handleMarkDone = (idx: number) => {
    setTrackerStep(idx, 'done')
  }

  const handleFinalizat = () => {
    router.push(`/finalizat?session=${sessionId ?? ''}`)
  }

  const allDone = steps.length > 0 && steps.every(
    (_, i) => trackerState[i]?.status === 'done'
  )

  if (!steps.length) {
    return (
      <div className="px-5 py-8 text-center text-sm text-gray-400">
        Stadiul dosarului nu este disponibil pentru ghidul selectat.
      </div>
    )
  }

  return (
    <div className="pb-6">
      <div className="border-b border-gray-100 px-5 pb-4 pt-5">
        <h2 className="mb-1 text-base font-bold text-gray-900">Unde ai ajuns</h2>
        <p className="text-xs text-gray-400">
          Marchezi tu progresul · actualizat de tine
        </p>
      </div>

      <div className="px-5 pt-3">
        {steps.map((step, idx) => {
          const state =
            trackerState[idx]?.status ??
            (idx < currentStepIndex
              ? 'done'
              : idx === currentStepIndex
                ? 'active'
                : 'todo')

          const isDone = state === 'done'
          const isActive = state === 'active'
          const isTodo = state === 'todo'
          const isLast = idx === steps.length - 1

          return (
            <div key={idx} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div
                  className={`mt-1 h-4 w-4 flex-shrink-0 rounded-full transition-colors ${
                    isDone
                      ? 'bg-green-500'
                      : isActive
                        ? 'bg-orange-400 ring-2 ring-orange-100'
                        : 'bg-gray-200'
                  }`}
                />
                {!isLast && (
                  <div
                    className={`my-1 min-h-[20px] w-0.5 flex-1 ${
                      isDone ? 'bg-green-200' : 'bg-gray-100'
                    }`}
                  />
                )}
              </div>

              <div className="flex-1 pb-4">
                <p
                  className={`text-sm font-semibold leading-snug ${
                    isTodo ? 'text-gray-300' : 'text-gray-900'
                  }`}
                >
                  {step.shortLabel ?? step.title}
                </p>

                {isDone && (
                  <p className="mt-0.5 text-xs text-green-600">✓ Rezolvat</p>
                )}

                {isActive && (
                  <div className="mt-1.5">
                    {step.id === 'documente' &&
                    checklistTotal > 0 &&
                    checklistDone < checklistTotal ? (
                      <div className="rounded-lg bg-orange-50 px-3 py-2 text-xs text-orange-700">
                        {checklistDone} din {checklistTotal} documente bifate · vezi lista de acte
                      </div>
                    ) : (
                      <div className="rounded-lg bg-orange-50 px-3 py-2 text-xs text-orange-700">
                        Pas curent
                      </div>
                    )}
                    <button
                      onClick={() => handleMarkDone(idx)}
                      className="mt-2 text-xs font-medium text-gray-500 underline underline-offset-2"
                    >
                      Marcheaza ca rezolvat →
                    </button>
                  </div>
                )}

                {isTodo && (
                  <p className="mt-0.5 text-xs text-gray-400">
                    {step.todoNote ?? 'Urmeaza'}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {allDone && (
        <div className="mx-5 mt-2 rounded-2xl border border-green-200 bg-green-50 p-4">
          <p className="mb-1 text-sm font-bold text-green-800">
            Ai terminat toti pasii!
          </p>
          <p className="mb-3 text-xs text-green-700">
            Cand primesti documentul, marcheaza ghidul ca finalizat.
          </p>
          <button
            onClick={handleFinalizat}
            className="w-full rounded-xl bg-green-600 py-3 text-sm font-bold text-white transition-colors active:bg-green-700"
          >
            Am rezolvat! →
          </button>
        </div>
      )}

      {!allDone && (
        <div className="mx-5 mt-3 flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3">
          <span className="flex-shrink-0 text-lg">🔔</span>
          <p className="text-xs leading-snug text-gray-500">
            <span className="font-semibold text-gray-700">
              Bifeaza pasii pe masura ce avansezi.
            </span>{' '}
            Progresul e salvat in browser.
          </p>
        </div>
      )}
    </div>
  )
}
