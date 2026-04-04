// ActeRO — app/page.tsx
// S1 — Homepage: hero + social proof + features + testimonial + CTA

import Link from 'next/link'
import SocialProofAvatars from '@/components/home/SocialProofAvatars'
import TestimonialCarousel from '@/components/home/TestimonialCarousel'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'

// ─── COMPONENTE ───────────────────────────────────────────────────────────────

function Hero() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 px-5 pt-10 pb-8">
      <h1 className="text-3xl font-extrabold text-white leading-tight mb-3">
        Acte românești din Germania.{' '}
        <span className="text-green-400">Rezolvate corect.</span>
      </h1>
      <p className="text-sm text-gray-400 leading-relaxed mb-6">
        Ghid personalizat pentru situația ta exactă —
        fără drumuri degeaba la consulat.
      </p>

      {/* Social proof deasupra CTA */}
      <div className="flex items-center gap-3 mb-5">
        <SocialProofAvatars />
        <p className="text-xs text-gray-400">
          <strong className="text-gray-200">1400+</strong> români din Germania au rezolvat cu ActeRO
        </p>
      </div>

      <Link
        href="/wizard"
        className="block w-full py-4 bg-green-500 text-white font-bold text-center rounded-xl text-base"
      >
        Începe — primii pași gratuit →
      </Link>
      <p className="text-xs text-gray-400 text-center mt-2">
        Ghid complet de la 9,99€ · plată o singură dată
      </p>
      <p className="text-xs text-gray-500 text-center mt-2">
        Fără cont · Fără card · 30 secunde
      </p>
    </div>
  )
}

function Features() {
  const items = [
    {
      icon: '🎯',
      title: 'Ghid exact pentru situația ta',
      desc: 'Nu generic. Știm că ești în Germania, că ai buletin expirat, că nu ai domiciliu în RO.',
    },
    {
      icon: '✅',
      title: 'Zero drumuri degeaba la consulat',
      desc: 'Verifici documentele înainte de drum. Ajungi o singură dată, cu tot ce trebuie.',
    },
    {
      icon: '🔔',
      title: 'Te anunțăm înainte să expire',
      desc: 'Nu mai descoperi actul expirat când ai nevoie urgent de el.',
    },
  ]

  return (
    <div className="px-5 py-8 flex flex-col gap-5">
      {items.map((item) => (
        <div key={item.title} className="flex gap-4 items-start">
          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
            {item.icon}
          </div>
          <div>
            <div className="font-semibold text-sm text-gray-900 mb-1">{item.title}</div>
            <div className="text-sm text-gray-500 leading-relaxed">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function Services() {
  const services = [
    { icon: '🛂', title: 'Pașaport CRDS', desc: 'Expirat sau nou din Germania', href: '/wizard' },
    { icon: '🪪', title: 'Buletin', desc: 'Expirat sau pierdut', href: '/wizard' },
    { icon: '⚡', title: 'Titlu de călătorie', desc: 'Urgență — fără programare', href: '/wizard' },
    { icon: '📜', title: 'Procură notarială', desc: 'Proprietate, moștenire, altceva', href: '/wizard' },
  ]

  return (
    <div className="px-5 pb-8">
      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">
        Ce rezolvăm
      </div>
      <div className="grid grid-cols-2 gap-3">
        {services.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className="border-2 border-gray-100 rounded-xl p-4 hover:border-gray-300 transition-all"
          >
            <div className="text-2xl mb-2">{s.icon}</div>
            <div className="font-semibold text-sm text-gray-900 mb-0.5">{s.title}</div>
            <div className="text-xs text-gray-400">{s.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function HowItWorks() {
  const steps = [
    { n: '1', title: 'Descrii situația ta', desc: '3 întrebări · 30 secunde' },
    { n: '2', title: 'Primești ghidul tău', desc: 'Personalizat, pas cu pas' },
    { n: '3', title: 'Rezolvi actul', desc: 'Tu faci acțiunile, noi te ghidăm' },
  ]

  return (
    <div className="bg-gray-50 px-5 py-8">
      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-5">
        Cum funcționează
      </div>
      <div className="flex flex-col gap-4">
        {steps.map((s) => (
          <div key={s.n} className="flex gap-4 items-center">
            <div className="w-9 h-9 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
              {s.n}
            </div>
            <div>
              <div className="font-semibold text-sm text-gray-900">{s.title}</div>
              <div className="text-xs text-gray-500">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Countries() {
  const countries = [
    { flag: '🇩🇪', name: 'Germania', status: 'Disponibil', href: '/wizard', available: true },
    { flag: '🇮🇹', name: 'Italia', status: 'Mai 2026', href: '/in-curand?country=it', available: false },
    { flag: '🇪🇸', name: 'Spania', status: 'Mai 2026', href: '/in-curand?country=es', available: false },
    { flag: '🇬🇧', name: 'UK', status: 'Iun. 2026', href: '/in-curand?country=gb', available: false },
    { flag: '🇫🇷', name: 'Franța', status: 'În curând', href: '/in-curand?country=fr', available: false },
    { flag: '🇦🇹', name: 'Austria', status: 'În curând', href: '/in-curand?country=at', available: false },
  ]

  return (
    <div className="px-5 pb-8">
      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">
        Țări disponibile
      </div>
      <div className="grid grid-cols-3 gap-2">
        {countries.map((c) => (
          <Link
            key={c.name}
            href={c.href}
            className={`flex flex-col items-center py-3 px-2 rounded-xl border-2 transition-all ${
              c.available
                ? 'border-green-200 bg-green-50 hover:border-green-400'
                : 'border-gray-100 hover:border-gray-200'
            }`}
          >
            <span className="text-2xl mb-1">{c.flag}</span>
            <span className="text-xs font-semibold text-gray-700">{c.name}</span>
            <span className={`text-xs mt-0.5 ${c.available ? 'text-green-600 font-medium' : 'text-gray-400'}`}>
              {c.status}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

function BottomCTA() {
  return (
    <div className="px-5 pb-12">
      <div className="text-center mb-4">
        <div className="text-sm text-gray-500 mb-1">Informație gratuită · fără publicitate</div>
      </div>
      <Link
        href="/wizard"
        className="block w-full py-4 bg-gray-900 text-white font-bold text-center rounded-xl text-base"
      >
        Rezolvă acum — primii pași gratuit →
      </Link>
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <div className="max-w-md mx-auto">
        <Hero />
        <Features />
        <Services />
        <HowItWorks />
        <TestimonialCarousel />
        <Countries />
        <BottomCTA />
        <SiteFooter />
      </div>
    </main>
  )
}
