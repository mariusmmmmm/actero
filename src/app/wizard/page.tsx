// ActeRO — app/wizard/page.tsx
// Wizard 3 pași: Problema → Țara + Bundesland → Situația

'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import SiteHeader from '@/components/layout/SiteHeader'
import { bundeslandOptions } from '@/lib/content/consulates/de'
import { useAppStore } from '@/store/appStore'
import type { BundeslandCode, CreateSessionResponse, ProblemType, SituationFlags, WizardResult } from '@/types'

// ─── STEP 1 — PROBLEMA ───────────────────────────────────────────────────────

const STEP1_OPTIONS = [
  {
    icon: '🛂',
    label: 'Nu pot ieși din Germania',
    sublabel: 'Pașaport expirat sau nou',
    value: 'pasaport' as ProblemType,
  },
  {
    icon: '🪪',
    label: 'N-am buletin valabil',
    sublabel: 'Carte de identitate expirată sau pierdută',
    value: 'buletin' as ProblemType,
  },
  {
    icon: '⚡',
    label: 'Trebuie să plec urgent',
    sublabel: 'Titlu de călătorie — fără programare',
    value: 'titlu-calatorie' as ProblemType,
  },
  {
    icon: '📜',
    label: 'Am ceva de rezolvat în România, dar nu pot merge acolo',
    sublabel: 'Procură notarială',
    value: 'procura' as ProblemType,
  },
] as const

function Step1() {
  const { problemType, setProblemType, nextWizardStep } = useAppStore()

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-2">
        <h2 className="text-xl font-bold text-gray-900">Ce act trebuie să rezolvi?</h2>
        <p className="text-sm text-gray-500 mt-1">Selectează una din opțiuni</p>
      </div>
      <div className="flex flex-col gap-3">
        {STEP1_OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setProblemType(option.value)}
            className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
              problemType === option.value
                ? 'border-gray-900 bg-gray-900 text-white'
                : 'border-gray-200 bg-white text-gray-900 hover:border-gray-400'
            }`}
          >
            <span className="text-2xl w-10 text-center">{option.icon}</span>
            <div>
              <div className={`font-semibold text-sm ${problemType === option.value ? 'text-white' : 'text-gray-900'}`}>
                {option.label}
              </div>
              <div className={`text-xs mt-0.5 ${problemType === option.value ? 'text-gray-300' : 'text-gray-500'}`}>
                {option.sublabel}
              </div>
            </div>
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={nextWizardStep}
        disabled={!problemType}
        className="mt-2 w-full py-4 bg-gray-900 text-white font-semibold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Continuă →
      </button>
    </div>
  )
}

// ─── STEP 2 — ȚARA + BUNDESLAND ──────────────────────────────────────────────

function Step2() {
  const { bundesland, setBundesland, consulate, nextWizardStep, prevWizardStep } = useAppStore()

  const consulateName = consulate
    ? { muenchen: 'München', bonn: 'Bonn', stuttgart: 'Stuttgart', berlin: 'Berlin' }[consulate]
    : null

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-2">
        <h2 className="text-xl font-bold text-gray-900">În ce land locuiești?</h2>
        <p className="text-sm text-gray-500 mt-1">🇩🇪 Germania · selectează landul tău</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {bundeslandOptions.map((b) => (
          <button
            key={b.code}
            type="button"
            onClick={() => setBundesland(b.code as BundeslandCode)}
            className={`py-3 px-3 rounded-xl border-2 text-sm font-medium text-left transition-all ${
              bundesland === b.code
                ? 'border-gray-900 bg-gray-900 text-white'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400'
            }`}
          >
            {b.name}
          </button>
        ))}
      </div>
      {consulateName && (
        <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-600">
          <span>📍</span>
          <span>Consulatul tău: <strong className="text-gray-900">{consulateName}</strong></span>
        </div>
      )}
      <div className="flex gap-3 mt-2">
        <button type="button" onClick={prevWizardStep} className="flex-1 py-4 bg-gray-100 text-gray-600 font-medium rounded-xl">
          ← Înapoi
        </button>
        <button
          type="button"
          onClick={nextWizardStep}
          disabled={!bundesland}
          className="flex-[2] py-4 bg-gray-900 text-white font-semibold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Continuă →
        </button>
      </div>
    </div>
  )
}

// ─── STEP 3 — SITUAȚIA (one-question-at-a-time) ─────────────────────────────

type Question = {
  key: keyof SituationFlags
  question: string
  options: { value: string | boolean; label: string; sublabel?: string }[]
}

function getQuestions(problemType: ProblemType): Question[] {
  switch (problemType) {
    case 'pasaport':
      return [
        {
          key: 'hasDomiciliuRO',
          question: 'Unde ai domiciliul oficial înregistrat?',
          options: [
            { value: false, label: '🇩🇪 În Germania', sublabel: 'Nu mai am adresă activă în România' },
            { value: true, label: '🇷🇴 În România', sublabel: 'Mai am adresă înregistrată acolo' },
          ],
        },
        {
          key: 'isPrimulPasaport',
          question: 'Ai mai avut pașaport românesc până acum?',
          options: [
            { value: false, label: 'Da, am mai avut', sublabel: 'A expirat sau e distrus' },
            { value: true, label: 'Nu, acesta ar fi primul', sublabel: 'Nu am avut niciodată' },
          ],
        },
        {
          key: 'locuNastere',
          question: 'Unde te-ai născut?',
          options: [
            { value: 'ro', label: '🇷🇴 În România', sublabel: 'Am CNP românesc' },
            { value: 'de-strainatate', label: '🌍 În Germania sau altă țară', sublabel: 'Nu am CNP românesc' },
          ],
        },
      ]
    case 'buletin':
      return [
        {
          key: 'buletinStatus',
          question: 'Ce s-a întâmplat cu buletinul tău?',
          options: [
            { value: 'expirat', label: 'A expirat', sublabel: 'Îl am încă la mine' },
            { value: 'pierdut-furat-distrus', label: 'L-am pierdut, furat sau distrus', sublabel: 'Nu îl mai am' },
          ],
        },
        {
          key: 'hasDomiciliuRO',
          question: 'Ai domiciliul oficial înregistrat în România?',
          options: [
            { value: false, label: 'Nu', sublabel: 'Locuiesc permanent în Germania' },
            { value: true, label: 'Da', sublabel: 'Mai am adresă activă în România' },
          ],
        },
        {
          key: 'hasDomiciliuAnteriorRO',
          question: 'Ai fost vreodată înregistrat la o primărie din România?',
          options: [
            { value: true, label: 'Da', sublabel: 'Am avut domiciliu în România la un moment dat' },
            { value: false, label: 'Nu', sublabel: 'Nu am avut niciodată' },
          ],
        },
      ]
    case 'titlu-calatorie':
      return [
        {
          key: 'actDisponibil',
          question: 'Ce act de identitate ai acum la tine?',
          options: [
            { value: 'pasaport-expirat', label: 'Pașaport expirat' },
            { value: 'buletin-expirat', label: 'Buletin expirat' },
            { value: 'ambele', label: 'Ambele expirate, pierdute sau distruse' },
          ],
        },
        {
          key: 'urgenta',
          question: 'Când trebuie să pleci?',
          options: [
            { value: 'sub-3-zile', label: 'În mai puțin de 3 zile', sublabel: 'Urgență maximă' },
            { value: '1-2-saptamani', label: 'În 1–2 săptămâni', sublabel: 'Mai am puțin timp' },
          ],
        },
      ]
    case 'procura':
      return [
        {
          key: 'scopProcura',
          question: 'Pentru ce ai nevoie de procură?',
          options: [
            { value: 'vanzare', label: '🏠 Vând sau cumpăr o proprietate', sublabel: 'Tranzacție imobiliară în România' },
            { value: 'mostenire', label: '📋 Moștenire', sublabel: 'Am rămas moștenitor' },
            { value: 'altceva', label: '📂 Altceva', sublabel: 'Divorț, firmă, cont bancar' },
          ],
        },
        {
          key: 'areNotar',
          question: 'Ai deja un notar ales în România?',
          options: [
            { value: true, label: 'Da, am notar', sublabel: 'El îmi spune exact ce procură trebuie' },
            { value: false, label: 'Nu, nu știu de unde să încep', sublabel: 'Ghidul mă ajută să găsesc unul' },
          ],
        },
      ]
  }
}

function getVisibleQuestions(problemType: ProblemType, situation: SituationFlags): Question[] {
  const all = getQuestions(problemType)

  if (problemType === 'pasaport') {
    return all.filter((q, i) => {
      if (i === 0) return true
      if (i === 1) return situation.hasDomiciliuRO === false
      if (i === 2) return situation.hasDomiciliuRO === false && situation.isPrimulPasaport === true
      return false
    })
  }

  if (problemType === 'buletin') {
    return all.filter((_, i) => {
      if (i === 0 || i === 1) return true
      if (i === 2) return situation.hasDomiciliuRO === false
      return false
    })
  }

  return all
}

function Step3() {
  const {
    country,
    currentSubStep,
    currentWizardStep,
    nextSubStep,
    prevSubStep,
    prevWizardStep,
    problemType,
    setGuideId,
    setSessionId,
    setSituationFlag,
    setTotalSubSteps,
    setWizardResult,
    situation,
    wizardDirection,
  } = useAppStore()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  if (!problemType) return null

  const questions = getVisibleQuestions(problemType, situation)
  const currentQuestion = questions[currentSubStep]
  const currentValue = currentQuestion ? situation[currentQuestion.key] : undefined
  const isLast = currentSubStep >= questions.length - 1
  const isUrgencyPath = problemType === 'titlu-calatorie'

  useEffect(() => {
    setTotalSubSteps(questions.length)
  }, [questions.length, setTotalSubSteps])

  const handleSelect = (value: string | boolean) => {
    if (!currentQuestion) return
    setSituationFlag(currentQuestion.key, value as SituationFlags[keyof SituationFlags])
  }

  const handleNext = async () => {
    if (isLast) {
      await handleFinalSubmit()
    } else {
      const updatedQuestions = getVisibleQuestions(problemType, situation)
      setTotalSubSteps(updatedQuestions.length)
      nextSubStep()
    }
  }

  async function handleFinalSubmit() {
    if (isSubmitting) return
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const res = await fetch('/api/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          problemType,
          country: country ?? 'de',
          situation,
          utmSource: searchParams.get('utm_source') ?? undefined,
          utmMedium: searchParams.get('utm_medium') ?? undefined,
          utmCampaign: searchParams.get('utm_campaign') ?? undefined,
        }),
      })

      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      const data = await res.json() as Partial<CreateSessionResponse> & { wizardResult?: WizardResult }

      if (data.sessionId && data.guideId && data.wizardResult) {
        setSessionId(data.sessionId)
        setGuideId(data.guideId)
        setWizardResult(data.wizardResult)
        router.push(`/diagnostic?session=${data.sessionId}`)
        return
      }

      if (data.wizardResult?.type === 'waitlist') {
        setWizardResult(data.wizardResult)
        router.push(`/in-curand?service=${problemType}&country=${country ?? 'de'}`)
        return
      }

      throw new Error('Invalid response')
    } catch {
      setSubmitError('A apărut o eroare. Încearcă din nou.')
      setIsSubmitting(false)
    }
  }

  if (!currentQuestion) return null

  return (
    <div
      key={`${currentWizardStep}-${currentSubStep}`}
      className={wizardDirection === 'forward'
        ? 'animate-slide-forward'
        : 'animate-slide-backward'
      }
    >
      <div className="flex flex-col gap-4">
        <div className={`rounded-xl p-4 mb-4 ${
          isUrgencyPath
            ? 'bg-amber-50 border border-amber-200'
            : 'bg-gray-50'
        }`}>
          {isUrgencyPath && (
            <p className="text-xs font-medium text-amber-700 mb-2">
              ⚡ Înțelegem că e urgent — câteva întrebări rapide
            </p>
          )}
          <p className="text-lg font-bold text-gray-900 leading-snug">
            {currentQuestion.question}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {currentQuestion.options.map((opt) => {
            const isSelected = currentValue === opt.value
            const isUrgentOption = opt.value === 'sub-3-zile'

            return (
              <button
                key={String(opt.value)}
                type="button"
                onClick={() => handleSelect(opt.value)}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                  isUrgentOption && isSelected
                    ? 'border-amber-500 bg-amber-50 text-amber-900'
                    : isSelected
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-200 bg-white text-gray-900 hover:border-gray-400'
                }`}
              >
                <div>
                  <div className={`font-semibold text-sm ${
                    isUrgentOption && isSelected
                      ? 'text-amber-900'
                      : isSelected
                      ? 'text-white'
                      : 'text-gray-900'
                  }`}>
                    {opt.label}
                  </div>
                  {opt.sublabel && (
                    <div className={`text-xs mt-0.5 ${
                      isUrgentOption && isSelected
                        ? 'text-amber-700'
                        : isSelected
                        ? 'text-gray-300'
                        : 'text-gray-500'
                    }`}>
                      {opt.sublabel}
                    </div>
                  )}
                </div>
              </button>
            )
          })}
        </div>
        <div className="flex gap-3 mt-2">
          <button
            type="button"
            onClick={() => {
              if (currentSubStep > 0) {
                prevSubStep()
              } else {
                prevWizardStep()
              }
            }}
            className="flex-1 py-4 bg-gray-100 text-gray-600 font-medium rounded-xl"
          >
            ← Înapoi
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentValue === undefined || isSubmitting}
            className="flex-[2] py-4 bg-gray-900 text-white font-semibold rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLast
              ? (isSubmitting ? 'Se pregătește ghidul...' : 'Continuă →')
              : 'Continuă →'}
          </button>
        </div>
        {isLast && (
          <p className="text-center text-xs text-gray-400 mt-3 leading-relaxed">
            Prin continuare, confirmi că ai citit{' '}
            <a href="/termeni-si-conditii" className="underline underline-offset-2">
              Termenii și Condițiile
            </a>{' '}
            și{' '}
            <a href="/politica-de-confidentialitate" className="underline underline-offset-2">
              Politica de confidențialitate
            </a>
            .
          </p>
        )}
        {submitError && (
          <p className="text-center text-sm text-red-500 mt-3">
            {submitError}
          </p>
        )}
      </div>
    </div>
  )
}

function getProgressPercent(
  wizardStep: 1 | 2 | 3,
  currentSubStep: number,
  totalSubSteps: number,
): number {
  if (wizardStep === 1) return 12
  if (wizardStep === 2) return 38
  const subProgress = totalSubSteps > 0
    ? (currentSubStep + 1) / totalSubSteps
    : 0
  return Math.round(62 + subProgress * 33)
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

function WizardPageContent() {
  const { currentWizardStep, currentSubStep, totalSubSteps } = useAppStore()

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <SiteHeader />
      <div className="max-w-2xl mx-auto w-full px-5 py-8 flex-1">
        <div className="h-1 bg-gray-100 rounded-full mb-4">
          <div
            className="h-1 bg-gray-900 rounded-full transition-all duration-300"
            style={{
              width: `${getProgressPercent(currentWizardStep, currentSubStep, totalSubSteps)}%`,
            }}
          />
        </div>

        <p className="text-xs text-gray-400 mb-1">
          {currentWizardStep < 3
            ? `Pasul ${currentWizardStep} din 3`
            : `Pasul 3 din 3 · Întrebarea ${currentSubStep + 1} din ${totalSubSteps}`
          }
        </p>

        {currentWizardStep === 1 && <Step1 />}
        {currentWizardStep === 2 && <Step2 />}
        {currentWizardStep === 3 && <Step3 />}
      </div>
    </main>
  )
}

export default function WizardPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-white flex flex-col">
        <SiteHeader />
        <div className="max-w-2xl mx-auto w-full px-5 py-8 flex-1" />
      </main>
    }>
      <WizardPageContent />
    </Suspense>
  )
}
