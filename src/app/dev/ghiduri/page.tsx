'use client'

import SiteHeader from '@/components/layout/SiteHeader'
import type { GuideId } from '@/types'

const guides: { id: GuideId; title: string }[] = [
  { id: 'pasaport-crds-de', title: 'Pasaport CRDS' },
  { id: 'pasaport-crds-nou-de', title: 'Primul pasaport CRDS' },
  { id: 'pasaport-de-cu-domiciliu', title: 'Pasaport cu domiciliu in Romania' },
  { id: 'pasaport-de-cu-domiciliu-pierdut', title: 'Pasaport pierdut/furat cu domiciliu in Romania' },
  { id: 'buletin-de-fara-domiciliu', title: 'Buletin fara domiciliu RO' },
  { id: 'buletin-de-cu-domiciliu', title: 'Buletin cu domiciliu activ RO' },
  { id: 'buletin-de-fara-domiciliu-pierdut', title: 'Buletin pierdut/furat fara domiciliu RO' },
  { id: 'buletin-de-cu-domiciliu-pierdut', title: 'Buletin pierdut/furat cu domiciliu activ RO' },
  { id: 'buletin-de-primul-de', title: 'Primul buletin nascut in Romania' },
  { id: 'buletin-de-primul-de-b', title: 'Primul buletin nascut in Germania' },
  { id: 'titlu-calatorie-urgenta-de', title: 'Titlu de calatorie urgenta' },
  { id: 'titlu-calatorie-de', title: 'Titlu de calatorie standard' },
  { id: 'procura-vanzare-de', title: 'Procura vanzare' },
  { id: 'procura-mostenire-de', title: 'Procura mostenire' },
  { id: 'procura-generala-de', title: 'Procura generala' },
  { id: 'transcriere-nastere-de', title: 'Transcriere certificat de nastere' },
]

const seoPages = [
  { title: 'Pasaport expirat Germania', path: '/pasaport-expirat-germania' },
  { title: 'Buletin expirat Germania', path: '/buletin-expirat-germania' },
  { title: 'Programare consulat Romania', path: '/programare-consulat-romania' },
  { title: 'Procura notariala Germania', path: '/procura-notariala-germania' },
  { title: 'Titlu calatorie urgenta Germania', path: '/titlu-calatorie-urgenta-germania' },
]

export default function DevGhiduriPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <div className="max-w-3xl mx-auto px-5 py-8">
        <div className="mb-8 flex justify-end gap-4">
          <a href="/" className="text-sm text-gray-400 hover:text-gray-600">
            Inapoi acasa
          </a>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Ghiduri pentru testing</h1>
          <p className="mt-2 text-sm text-gray-500">
            Linkurile de mai jos merg direct pe ghidurile free si paid, fara wizard, cat timp TEST MODE este activ.
          </p>
        </div>

        <div className="grid gap-4">
          {guides.map((guide) => (
            <div key={guide.id} className="rounded-2xl border border-gray-200 bg-white p-4">
              <div className="mb-1 text-sm font-semibold text-gray-900">{guide.title}</div>
              <div className="mb-4 text-xs text-gray-400">{guide.id}</div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <a
                  href={`/ghid?session=test-session&guide=${guide.id}`}
                  className="rounded-xl bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Deschide ghid free
                </a>
                <a
                  href={`/ghid/test-session?guide=${guide.id}`}
                  className="rounded-xl border-2 border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700"
                >
                  Deschide ghid paid
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Landing pages SEO</h2>
          <p className="mt-2 text-sm text-gray-500">
            Linkuri rapide pentru testarea paginilor SEO.
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Pagină</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Path</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Test</th>
                </tr>
              </thead>
              <tbody>
                {seoPages.map((page) => (
                  <tr key={page.path} className="border-t border-gray-100">
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">{page.title}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{page.path}</td>
                    <td className="px-4 py-3">
                      <a
                        href={page.path}
                        className="inline-flex rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white"
                      >
                        Deschide
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
