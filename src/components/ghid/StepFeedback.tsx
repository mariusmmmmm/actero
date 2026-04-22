'use client'

type StepFeedbackType = 'like' | 'dislike'

type StepFeedbackProps = {
  selected: StepFeedbackType | null
  isSubmitting: boolean
  isSaved: boolean
  onSelect: (value: StepFeedbackType) => void
}

export default function StepFeedback({
  selected,
  isSubmitting,
  isSaved,
  onSelect,
}: StepFeedbackProps) {
  return (
    <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-gray-800">A fost util pasul ăsta?</p>
        {isSaved && (
          <span className="text-xs text-green-600">Mulțumim pentru feedback</span>
        )}
      </div>

      <div className="mt-3 flex gap-2">
        <button
          type="button"
          disabled={isSubmitting}
          onClick={() => onSelect('like')}
          className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
            selected === 'like'
              ? 'bg-green-600 text-white'
              : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-100'
          } ${isSubmitting ? 'cursor-not-allowed opacity-60' : ''}`}
        >
          👍 Da
        </button>

        <button
          type="button"
          disabled={isSubmitting}
          onClick={() => onSelect('dislike')}
          className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
            selected === 'dislike'
              ? 'bg-red-600 text-white'
              : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-100'
          } ${isSubmitting ? 'cursor-not-allowed opacity-60' : ''}`}
        >
          👎 Nu
        </button>
      </div>
    </div>
  )
}
