// ActeRO — store/appStore.ts
// Zustand store — toată starea aplicației

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type {
  ProblemType,
  SituationFlags,
  GuideId,
  WizardResult,
  ChecklistItemState,
  TrackerStepState,
  BundeslandCode,
  ConsulateId,
} from '@/types'
import { deriveConsulateId } from '@/lib/utils/deriveConsulate'

// ─── TIPURI STORE ─────────────────────────────────────────────────────────────

type WizardStep = 1 | 2 | 3

type AppStore = {
  // ── WIZARD ──────────────────────────────────────────────────────────────────
  problemType: ProblemType | null
  country: string | null
  bundesland: BundeslandCode | null
  consulate: ConsulateId | null
  situation: SituationFlags
  currentWizardStep: WizardStep
  currentSubStep: number      // sub-întrebările din Step 3
  totalSubSteps: number
  wizardDirection: 'forward' | 'backward'

  setProblemType: (p: ProblemType) => void
  setCountry: (c: string) => void
  setBundesland: (b: BundeslandCode) => void
  setSituationFlag: (key: keyof SituationFlags, value: SituationFlags[keyof SituationFlags]) => void
  nextWizardStep: () => void
  prevWizardStep: () => void
  nextSubStep: () => void
  prevSubStep: () => void
  setTotalSubSteps: (n: number) => void
  resetWizard: () => void

  // ── SESSION ──────────────────────────────────────────────────────────────────
  sessionId: string | null
  guideId: GuideId | null
  wizardResult: WizardResult | null
  isPaid: boolean

  setSessionId: (id: string) => void
  setGuideId: (id: GuideId) => void
  setWizardResult: (r: WizardResult) => void
  unlockPaid: () => void

  // ── GHID PAID ────────────────────────────────────────────────────────────────
  currentStepIndex: number
  totalSteps: number
  notes: Record<number, string>

  setCurrentStepIndex: (i: number) => void
  setTotalSteps: (n: number) => void
  goToNextStep: () => void
  goToPrevStep: () => void
  setNote: (stepId: number, content: string) => void

  // ── CHECKLIST ────────────────────────────────────────────────────────────────
  checklistState: Record<string, ChecklistItemState>
  expandedItemId: string | null

  toggleChecklistItem: (itemId: string) => void
  updateChecklistItem: (itemId: string, fields: Partial<ChecklistItemState>) => void
  setExpandedItem: (id: string | null) => void

  // ── TRACKER ──────────────────────────────────────────────────────────────────
  trackerState: Record<number, TrackerStepState>
  expandedTrackerStepId: number | null

  setTrackerStepDate: (stepId: number, date: string) => void
  setTrackerStepStatus: (stepId: number, status: TrackerStepState['status']) => void
  setExpandedTrackerStep: (id: number | null) => void

  // ── COMPUTED ─────────────────────────────────────────────────────────────────
  getChecklistProgress: () => { checked: number; total: number; pct: number }
  getStepStatus: (stepId: number) => TrackerStepState['status']
}

// ─── VALORI INIȚIALE ──────────────────────────────────────────────────────────

const initialWizard = {
  problemType: null as ProblemType | null,
  country: null as string | null,
  bundesland: null as BundeslandCode | null,
  consulate: null as ConsulateId | null,
  situation: {} as SituationFlags,
  currentWizardStep: 1 as WizardStep,
  currentSubStep: 0,
  totalSubSteps: 1,
  wizardDirection: 'forward' as const,
}

const initialSession = {
  sessionId: null as string | null,
  guideId: null as GuideId | null,
  wizardResult: null as WizardResult | null,
  isPaid: false,
}

const initialGuide = {
  currentStepIndex: 0,
  totalSteps: 0,
  notes: {} as Record<number, string>,
}

const initialChecklist = {
  checklistState: {} as Record<string, ChecklistItemState>,
  expandedItemId: null as string | null,
}

const initialTracker = {
  trackerState: {} as Record<number, TrackerStepState>,
  expandedTrackerStepId: null as number | null,
}

// ─── STORE ────────────────────────────────────────────────────────────────────

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      // ── WIZARD ───────────────────────────────────────────────────────────────
      ...initialWizard,

      setProblemType: (p) => set({ problemType: p }),

      setCountry: (c) => set({ country: c }),

      setBundesland: (b) => {
        const consulate = deriveConsulateId(b)
        set({
          bundesland: b,
          consulate,
          situation: { ...get().situation, bundesland: b, consulate },
        })
      },

      setSituationFlag: (key, value) =>
        set({ situation: { ...get().situation, [key]: value } }),

      nextWizardStep: () => set((s) => ({
        currentWizardStep: Math.min(3, s.currentWizardStep + 1) as 1 | 2 | 3,
        currentSubStep: 0,
        wizardDirection: 'forward',
      })),

      prevWizardStep: () => set((s) => ({
        currentWizardStep: Math.max(1, s.currentWizardStep - 1) as 1 | 2 | 3,
        currentSubStep: 0,
        wizardDirection: 'backward',
      })),

      nextSubStep: () => set((s) => ({
        currentSubStep: s.currentSubStep + 1,
        wizardDirection: 'forward',
      })),

      prevSubStep: () => set((s) => ({
        currentSubStep: Math.max(0, s.currentSubStep - 1),
        wizardDirection: 'backward',
      })),

      setTotalSubSteps: (n) => set({ totalSubSteps: n }),

      resetWizard: () => set({ ...initialWizard, ...initialSession }),

      // ── SESSION ──────────────────────────────────────────────────────────────
      ...initialSession,

      setSessionId: (id) => set({ sessionId: id }),
      setGuideId: (id) => set({ guideId: id }),
      setWizardResult: (r) => set({ wizardResult: r }),
      unlockPaid: () => set({ isPaid: true }),

      // ── GHID PAID ────────────────────────────────────────────────────────────
      ...initialGuide,

      setCurrentStepIndex: (i) => set({ currentStepIndex: i }),
      setTotalSteps: (n) => set({ totalSteps: n }),

      goToNextStep: () => {
        const { currentStepIndex, totalSteps } = get()
        if (currentStepIndex < totalSteps - 1)
          set({ currentStepIndex: currentStepIndex + 1 })
      },

      goToPrevStep: () => {
        const { currentStepIndex } = get()
        if (currentStepIndex > 0) set({ currentStepIndex: currentStepIndex - 1 })
      },

      setNote: (stepId, content) =>
        set({ notes: { ...get().notes, [stepId]: content } }),

      // ── CHECKLIST ────────────────────────────────────────────────────────────
      ...initialChecklist,

      toggleChecklistItem: (itemId) => {
        const prev = get().checklistState[itemId]
        set({
          checklistState: {
            ...get().checklistState,
            [itemId]: { ...prev, checked: !prev?.checked },
          },
        })
      },

      updateChecklistItem: (itemId, fields) => {
        const prev = get().checklistState[itemId] ?? { checked: false }
        set({
          checklistState: {
            ...get().checklistState,
            [itemId]: { ...prev, ...fields },
          },
        })
      },

      setExpandedItem: (id) => set({ expandedItemId: id }),

      // ── TRACKER ──────────────────────────────────────────────────────────────
      ...initialTracker,

      setTrackerStepDate: (stepId, date) => {
        const prev = get().trackerState[stepId] ?? { status: 'todo' }
        set({
          trackerState: {
            ...get().trackerState,
            [stepId]: { ...prev, date },
          },
        })
      },

      setTrackerStepStatus: (stepId, status) => {
        const prev = get().trackerState[stepId] ?? {}
        set({
          trackerState: {
            ...get().trackerState,
            [stepId]: { ...prev, status },
          },
        })
      },

      setExpandedTrackerStep: (id) => set({ expandedTrackerStepId: id }),

      // ── COMPUTED ─────────────────────────────────────────────────────────────
      getChecklistProgress: () => {
        const state = get().checklistState
        const items = Object.values(state)
        const total = items.length
        const checked = items.filter((i) => i.checked).length
        const pct = total > 0 ? Math.round((checked / total) * 100) : 0
        return { checked, total, pct }
      },

      getStepStatus: (stepId) => {
        return get().trackerState[stepId]?.status ?? 'todo'
      },
    }),
    {
      name: 'actero-store',
      storage: createJSONStorage(() => sessionStorage),
      // Persistăm doar wizard + session — starea ghidului vine din DB
      partialize: (state) => ({
        problemType: state.problemType,
        country: state.country,
        bundesland: state.bundesland,
        consulate: state.consulate,
        situation: state.situation,
        sessionId: state.sessionId,
        guideId: state.guideId,
        wizardResult: state.wizardResult,
        isPaid: state.isPaid,
        currentStepIndex: state.currentStepIndex,
        notes: state.notes,
        checklistState: state.checklistState,
        trackerState: state.trackerState,
      }),
    }
  )
)
