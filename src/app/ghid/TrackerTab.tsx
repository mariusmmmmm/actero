'use client'

import { useRouter } from 'next/navigation'
import { useAppStore } from '@/store/appStore'
import { getGuideSteps } from '@/lib/guides/steps'

export default function TrackerTab() {
  const router = useRouter()
  const guideId = useAppStore(s => s.guideId)
  const currentStepIndex = useAppStore(s => s.currentStepIndex)
  const trackerState = useAppStore(s => s.trackerState)
  const setTrackerStep = useAppStore(s => s.setTrackerStep)
  const checklistState = useAppStore(s => s.checklistState)
  const sessionId = useAppStore(s => s.sessionId)

  const steps = getGuideSteps(guideId)

  const checklistTotal = Object.keys(checklistState).length
  const checklistDone = Object.values(checklistState).filter(i => i.checked).length

  const allDone = steps.length > 0 && steps.every((_, i) => trackerState[i]?.status === 'done')

  const handleFinalizat = () => {
    router.push(`/finalizat?session=${sessionId ?? ''}&ghid=${guideId ?? ''}`)
  }

  if (!steps.length) {
    return (
      <div className="px-5 py-8 text-center text-sm text-gray-400">
        Tracker indisponibil pentru ghidul selectat.
      </div>
    )
  }

  return (
    <div className="pb-6">
      <div className="px-5 pt-5 pb-4 border-b border-gray-100">
        <h2 className="text-base font-bold text-gray-900 mb-1">Dosarul tău</h2>
        <p className="text-xs text-gray-400">Marchezi tu progresul · salvat în browser</p>
      </div>

      <div className="px-5 pt-3">
        {steps.map((step, idx) => {
          const status = trackerState[idx]?.status ?? (
            idx < currentStepIndex ? 'done' :
            idx === currentStepIndex ? 'active' :
            'todo'
          )
          const isDone = status === 'done'
          const isActive = status === 'active'
          const isTodo = status === 'todo'
          const isLast = idx === steps.length - 1

          return (
            <div key={idx} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full flex-shrink-0 mt-1 transition-colors ${
                  isDone ? 'bg-green-500' :
                  isActive ? 'bg-orange-400 ring-2 ring-orange-100' :
                  'bg-gray-200'
                }`} />
                {!isLast && (
                  <div className={`w-0.5 flex-1 my-1 min-h-[20px] ${isDone ? 'bg-green-200' : 'bg-gray-100'}`} />
                )}
              </div>

              <div className="flex-1 pb-4">
                <p className={`text-sm font-semibold leading-snug ${isTodo ? 'text-gray-300' : 'text-gray-900'}`}>
                  {step.shortLabel ?? step.title}
                </p>

                {isDone && (
                  <p className="text-xs text-green-600 mt-0.5">✓ Rezolvat</p>
                )}

                {isActive && (
                  <div className="mt-1.5">
                    {step.id === 'documente' && checklistTotal > 0 && checklistDone < checklistTotal ? (
                      <div className="bg-orange-50 rounded-lg px-3 py-2 text-xs text-orange-700">
                        {checklistDone} din {checklistTotal} documente bifate · vezi Checklist
                      </div>
                    ) : (
                      <div className="bg-orange-50 rounded-lg px-3 py-2 text-xs text-orange-700">
                        Pas curent
                      </div>
                    )}
                    <button
                      onClick={() => setTrackerStep(idx, 'done')}
                      className="mt-2 text-xs font-medium text-gray-500 underline underline-offset-2"
                    >
                      Marchează ca rezolvat →
                    </button>
                  </div>
                )}

                {isTodo && (
                  <p className="text-xs text-gray-400 mt-0.5">{step.todoNote ?? 'Urmează'}</p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {allDone ? (
        <div className="mx-5 mt-2 rounded-2xl bg-green-50 border border-green-200 p-4">
          <p className="text-sm font-bold text-green-800 mb-1">Ai terminat toți pașii!</p>
          <p className="text-xs text-green-700 mb-3">
            Când primești documentul, marchează ghidul ca finalizat.
          </p>
          <button
            onClick={handleFinalizat}
            className="w-full py-3 rounded-xl bg-green-600 text-white text-sm font-bold active:bg-green-700 transition-colors"
          >
            Am rezolvat! →
          </button>
        </div>
      ) : (
        <div className="mx-5 mt-3 rounded-xl bg-gray-50 border border-gray-100 p-3 flex gap-3 items-start">
          <span className="text-lg flex-shrink-0">🔔</span>
          <p className="text-xs text-gray-500 leading-snug">
            <span className="font-semibold text-gray-700">Bifează pașii pe măsură ce avansezi.</span>{' '}
            Progresul e salvat în browser.
          </p>
        </div>
      )}
    </div>
  )
}
