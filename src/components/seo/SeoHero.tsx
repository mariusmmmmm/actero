import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'

type SeoHeroProps = {
  title: string
  description: string
  ctaHref: string
  ctaLabel: string
}

export default function SeoHero({ title, description, ctaHref, ctaLabel }: SeoHeroProps) {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <div className="max-w-md mx-auto">
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-5 pt-10 pb-10">
          <h1 className="text-3xl font-extrabold leading-tight text-white mb-3">{title}</h1>
          <p className="text-sm leading-relaxed text-gray-400 mb-6">{description}</p>
          <Link
            href={ctaHref}
            className="block w-full rounded-xl bg-green-500 py-4 text-center text-base font-bold text-white"
          >
            {ctaLabel}
          </Link>
        </section>
      </div>
    </main>
  )
}
