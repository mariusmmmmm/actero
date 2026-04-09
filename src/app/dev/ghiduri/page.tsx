'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import type { GuideId } from '@/types'

const guides: { id: GuideId; title: string }[] = [
  { id: 'pasaport-crds-de', title: 'Reînnoire pașaport CRDS · Germania' },
  { id: 'pasaport-crds-de-pierdut', title: 'Pașaport CRDS pierdut/furat · Germania' },
  { id: 'pasaport-crds-nou-de', title: 'Primul pașaport CRDS · Germania' },
  { id: 'pasaport-minor-crds-de', title: 'Pașaport copil CRDS · Germania' },
  { id: 'pasaport-de-cu-domiciliu', title: 'Pașaport · Domiciliu România · Germania' },
  { id: 'pasaport-de-cu-domiciliu-pierdut', title: 'Pașaport pierdut/furat · Domiciliu România · Germania' },
  { id: 'buletin-de-fara-domiciliu', title: 'Buletin expirat · Fără domiciliu RO' },
  { id: 'buletin-de-cu-domiciliu', title: 'Buletin expirat · Domiciliu activ RO' },
  { id: 'buletin-de-fara-domiciliu-pierdut', title: 'Buletin pierdut/furat · Fără domiciliu RO' },
  { id: 'buletin-de-cu-domiciliu-pierdut', title: 'Buletin pierdut/furat · Domiciliu activ RO' },
  { id: 'buletin-de-primul-de', title: 'Primul buletin românesc · Născut în România' },
  { id: 'buletin-de-primul-de-b', title: 'Primul buletin românesc · Născut în Germania' },
  { id: 'titlu-calatorie-urgenta-de', title: 'Titlu de călătorie · Urgență' },
  { id: 'titlu-calatorie-de', title: 'Titlu de călătorie · Germania · 1–2 săptămâni' },
  { id: 'procura-vanzare-de', title: 'Procură notarială · Vânzare / cumpărare proprietate' },
  { id: 'procura-mostenire-de', title: 'Procură notarială · Moștenire / succesiune' },
  { id: 'procura-generala-de', title: 'Procură notarială generală · Germania' },
  { id: 'transcriere-nastere-de', title: 'Transcriere certificat de naștere · Germania' },
]

const seoPages = [
  { title: 'Acte românești din Germania', path: '/acte-romanesti-germania' },
  { title: 'Acte la consulatul României din Germania', path: '/acte-consulat-romania-germania' },
  { title: 'Acte pentru copil născut în Germania', path: '/acte-copil-nascut-in-germania' },
  { title: 'Pașaport românesc din Germania', path: '/pasaport-romania-germania' },
  { title: 'Pașaport CRDS din Germania', path: '/pasaport-crds-germania' },
  { title: 'Pașaport cu domiciliu în România din Germania', path: '/pasaport-cu-domiciliu-romania-din-germania' },
  { title: 'CRDS vs pașaport cu domiciliu în România', path: '/pasaport-crds-vs-pasaport-cu-domiciliu-romania' },
  { title: 'Pașaport expirat în Germania', path: '/pasaport-expirat-germania' },
  { title: 'Pașaport pierdut sau furat în Germania', path: '/pasaport-pierdut-furat-germania' },
  { title: 'Primul pașaport copil în Germania', path: '/primul-pasaport-copil-germania' },
  { title: 'Buletin din Germania', path: '/buletin-romania-germania' },
  { title: 'Buletin expirat în Germania', path: '/buletin-expirat-germania' },
  { title: 'Buletin expirat cu domiciliu în România', path: '/buletin-expirat-cu-domiciliu-romania' },
  { title: 'Buletin expirat fără domiciliu în România', path: '/buletin-expirat-fara-domiciliu-romania' },
  { title: 'Buletin pierdut sau furat cu domiciliu în România', path: '/buletin-pierdut-furat-cu-domiciliu-romania' },
  { title: 'Buletin pierdut sau furat fără domiciliu în România', path: '/buletin-pierdut-furat-fara-domiciliu-romania' },
  { title: 'CEI vs CIS pentru diaspora', path: '/cei-vs-cis-diaspora' },
  { title: 'Primul buletin copil născut în Germania', path: '/primul-buletin-copil-nascut-in-germania' },
  { title: 'Schimbare domiciliu copil din Germania în România', path: '/schimbare-domiciliu-copil-din-germania-in-romania' },
  { title: 'Titlu de călătorie din Germania', path: '/titlu-calatorie-germania' },
  { title: 'Titlu de călătorie urgentă din Germania', path: '/titlu-calatorie-urgenta-germania' },
  { title: 'Titlu de călătorie vs pașaport temporar', path: '/titlu-calatorie-vs-pasaport-temporar' },
  { title: 'Programare la consulatul României', path: '/programare-consulat-romania' },
  { title: 'Programare pe econsulat.ro', path: '/programare-econsulat-germania' },
  { title: 'Procură notarială din Germania', path: '/procura-notariala-germania' },
  { title: 'Consulat vs notar german pentru procură', path: '/procura-consulat-vs-notar-german' },
  { title: 'Procură generală din Germania', path: '/procura-generala-germania' },
  { title: 'Procură pentru moștenire din Germania', path: '/procura-mostenire-germania' },
  { title: 'Procură pentru vânzare proprietate din Germania', path: '/procura-vanzare-proprietate-germania' },
  { title: 'Procură pentru cont bancar în România', path: '/procura-cont-bancar-romania-din-germania' },
  { title: 'Procură pentru divorț notarial din Germania', path: '/procura-divort-notarial-germania' },
  { title: 'Transcriere certificat de naștere din Germania', path: '/transcriere-certificat-nastere-germania' },
  { title: 'Formule A vs Geburtsurkunde', path: '/formule-a-vs-geburtsurkunde' },
]

const routes = [
  {
    id: 'route-a',
    when: 'Primul pasaport, domiciliu in Germania, nascut in Germania/strainatate',
    guideA: 'transcriere-nastere-de',
    guideB: 'pasaport-crds-nou-de',
  },
  {
    id: 'route-b',
    when: 'Primul buletin, fara domiciliu anterior in Romania, nascut in Germania/strainatate',
    guideA: 'transcriere-nastere-de',
    guideB: 'buletin-de-primul-de-b',
  },
]

export default function DevGhiduriPage() {
  const [checkedSeoPages, setCheckedSeoPages] = useState<Set<string>>(new Set())

  const checkedSeoCount = checkedSeoPages.size
  const seoProgressLabel = useMemo(
    () => `${checkedSeoCount} / ${seoPages.length} verificate în sesiunea curentă`,
    [checkedSeoCount]
  )

  const toggleSeoPage = (path: string) => {
    setCheckedSeoPages((current) => {
      const next = new Set(current)
      if (next.has(path)) {
        next.delete(path)
      } else {
        next.add(path)
      }
      return next
    })
  }

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <div className="max-w-3xl mx-auto px-5 py-8">
        <div className="mb-8 flex justify-end gap-4">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600">
            Inapoi acasa
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Ghiduri pentru testing</h1>
          <p className="mt-2 text-sm text-gray-500">
            Linkurile de mai jos merg direct pe ghidurile free si paid, fara ghidul rapid, cat timp TEST MODE este activ.
          </p>
        </div>

        <div className="grid gap-4">
          {guides.map((guide) => (
            <div key={guide.id} className="rounded-2xl border border-gray-200 bg-white p-4">
              <div className="mb-1 text-sm font-semibold text-gray-900">{guide.title}</div>
              <div className="mb-4 text-xs text-gray-400">{guide.id}</div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link
                  href={`/ghid?session=test-session&guide=${guide.id}`}
                  className="rounded-xl bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Deschide ghid free
                </Link>
                <Link
                  href={`/ghid/test-session?guide=${guide.id}`}
                  className="rounded-xl border-2 border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700"
                >
                  Deschide ghid paid
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Route-uri compuse</h2>
          <p className="mt-2 text-sm text-gray-500">
            Cazuri din ghidul rapid care nu duc direct intr-un singur ghid, ci intr-o succesiune de doua ghiduri.
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Route</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Cand se aplica</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Ghid A</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Ghid B</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((route) => (
                  <tr key={route.id} className="border-t border-gray-100 align-top">
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">{route.id}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{route.when}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      <Link
                        href={`/ghid?session=test-session&guide=${route.guideA}`}
                        className="underline underline-offset-2"
                      >
                        {route.guideA}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      <Link
                        href={`/ghid?session=test-session&guide=${route.guideB}`}
                        className="underline underline-offset-2"
                      >
                        {route.guideB}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Landing pages SEO</h2>
          <p className="mt-2 text-sm text-gray-500">
            Linkuri rapide pentru testarea paginilor SEO. Bifările sunt doar locale pe pagină și nu se salvează nicăieri.
          </p>
          <div className="mt-3 inline-flex rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-800">
            {seoProgressLabel}
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Check</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Pagină</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Path</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Test</th>
                </tr>
              </thead>
              <tbody>
                {seoPages.map((page) => (
                  <tr key={page.path} className="border-t border-gray-100">
                    <td className="px-4 py-3">
                      <label className="inline-flex cursor-pointer items-center justify-center">
                        <input
                          type="checkbox"
                          checked={checkedSeoPages.has(page.path)}
                          onChange={() => toggleSeoPage(page.path)}
                          className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          aria-label={`Marchează pagina ${page.title} ca verificată`}
                        />
                      </label>
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">{page.title}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{page.path}</td>
                    <td className="px-4 py-3">
                      <Link
                        href={page.path}
                        className="inline-flex rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white"
                      >
                        Deschide
                      </Link>
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
