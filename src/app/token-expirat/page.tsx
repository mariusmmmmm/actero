// ActeRO — app/token-expirat/page.tsx
// Pagina afișată când tokenul din email e invalid sau expirat

import SiteHeader from '@/components/layout/SiteHeader'

export default function TokenExpiratPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <SiteHeader />
      <div className="max-w-md mx-auto w-full px-5 py-8 flex-1 flex flex-col justify-center">

        <div className="text-center">
          <div className="text-5xl mb-5">🔗</div>
          <h1 className="text-xl font-bold text-gray-900 mb-3">
            Linkul nu mai este valabil
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            Linkul de acces a expirat sau nu este valid.
            Linkurile sunt valabile 6 luni de la data plății.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 text-left mb-8">
            <div className="text-sm font-semibold text-orange-800 mb-2">
              Cum recuperezi accesul:
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 text-sm text-orange-700">
                <span className="flex-shrink-0">1.</span>
                <span>Caută în email un mesaj de la <strong>ghid@actero.ro</strong></span>
              </div>
              <div className="flex gap-2 text-sm text-orange-700">
                <span className="flex-shrink-0">2.</span>
                <span>Verifică folderul <strong>Spam</strong> dacă nu găsești</span>
              </div>
              <div className="flex gap-2 text-sm text-orange-700">
                <span className="flex-shrink-0">3.</span>
                <span>
                  Dacă tot nu găsești, scrie la{' '}
                  <a href="mailto:contac@actero.ro" className="font-semibold underline">
                    contac@actero.ro
                  </a>{' '}
                  cu data plății — îți trimitem un link nou în cel mult 24h.
                </span>
              </div>
            </div>
          </div>

          <a
            href="mailto:contac@actero.ro"
            className="block w-full py-4 bg-gray-900 text-white font-semibold rounded-xl text-sm text-center mb-3"
          >
            Scrie-ne la contac@actero.ro →
          </a>
          <a
            href="/"
            className="block w-full py-4 bg-gray-100 text-gray-600 font-medium rounded-xl text-sm text-center"
          >
            Înapoi la ActeRO
          </a>
        </div>

      </div>
    </main>
  )
}
