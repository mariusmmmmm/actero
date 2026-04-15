// ActeRO — app/page.tsx
// S1 — Homepage: hero + social proof + features + testimonial + CTA

import type { Metadata } from 'next'
import Link from 'next/link'
import SocialProofAvatars from '@/components/home/SocialProofAvatars'
import TestimonialCarousel from '@/components/home/TestimonialCarousel'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'

export const metadata: Metadata = {
  title: 'ActeRO | Ghiduri pentru acte românești în diaspora',
  description:
    'ActeRO te ajută să afli exact ce pași urmezi pentru pașaport, buletin, titlu de călătorie, procuri și actele copilului născut în străinătate.',
  keywords: [
    'acte românești diaspora',
    'acte românești în străinătate',
    'pașaport românesc diaspora',
    'buletin românesc diaspora',
    'procură notarială diaspora',
    'titlu de călătorie românia',
  ],
  openGraph: {
    title: 'ActeRO | Ghiduri pentru acte românești în diaspora',
    description:
      'Ghiduri clare pentru pașaport, buletin, titlu de călătorie, procuri și actele copilului născut în străinătate.',
    url: 'https://www.actero.ro',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.actero.ro',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.actero.ro/#organization',
  name: 'ActeRO',
  url: 'https://www.actero.ro',
  email: 'contact@actero.ro',
  description:
    'ActeRO oferă ghiduri clare pentru acte românești în diaspora: pașaport, buletin, titlu de călătorie, procuri și acte pentru copii născuți în străinătate.',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.actero.ro/#website',
  url: 'https://www.actero.ro',
  name: 'ActeRO',
  inLanguage: 'ro',
  description:
    'Ghiduri pentru acte românești în diaspora, cu pași clari și orientare rapidă spre situația potrivită.',
}

// ─── COMPONENTE ───────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-5 pt-10 pb-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-white leading-tight mb-3">
          Ghiduri clare pentru{' '}
          <span className="text-green-400">acte românești în diaspora.</span>
        </h1>
        <p className="text-sm text-gray-300 leading-relaxed mb-3">
          ActeRO te ajută să afli rapid ce urmează pentru pașaport, buletin, titlu de
          călătorie, procuri și actele copilului născut în străinătate.
        </p>
        <p className="text-sm text-gray-400 leading-relaxed mb-6">
          Primești ghidul potrivit pentru situația ta exactă —
          fără drumuri degeaba, fără informații contradictorii și fără să cauți ore întregi
          prin grupuri sau forumuri.
        </p>

        {/* Social proof deasupra CTA */}
        <div className="flex items-center gap-3 mb-5">
          <SocialProofAvatars />
          <p className="text-xs text-gray-400">
            <strong className="text-gray-200">120+</strong> români din diaspora au rezolvat cu ActeRO — lansat în martie 2026
          </p>
        </div>

        <Link
          href="/wizard?country=de"
          className="block w-full py-4 bg-green-500 text-white font-bold text-center rounded-xl text-base"
        >
          Începe — primii pași gratuit →
        </Link>
        <p className="text-xs text-gray-400 text-center mt-2">
          Ghid complet de la 9,99€ · plată o singură dată
        </p>
        <p className="text-xs text-gray-500 text-center mt-2">
          Fără cont · Începi gratuit · 30 secunde
        </p>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    {
      icon: '🎯',
      title: 'Ghid exact pentru situația ta',
      desc: 'Nu primești informație generică. Începem de la țara ta, problema ta și autoritatea unde ajungi efectiv.',
    },
    {
      icon: '✅',
      title: 'Mai puține drumuri făcute degeaba',
      desc: 'Verifici din timp documentele, costurile, programarea și diferențele importante dintre autorități.',
    },
    {
      icon: '🔔',
      title: 'Te anunțăm înainte să expire',
      desc: 'Primești reminder înainte să expire actul, ca să nu ajungi din nou în urgență.',
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

function AudienceFit() {
  const items = [
    'românilor care locuiesc în altă țară și trebuie să rezolve acte românești',
    'părinților cu copii născuți în străinătate care au nevoie de acte românești',
    'persoanelor care au o urgență și trebuie să înțeleagă rapid ce variantă li se aplică',
  ]

  return (
    <div className="px-5 py-8 border-t border-gray-100">
      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">
        Pentru Cine Este
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-3">ActeRO este pentru românii care vor claritate, nu presupuneri</h2>
      <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
        {items.map((item) => (
          <p key={item}>• ActeRO se potrivește {item}.</p>
        ))}
      </div>
    </div>
  )
}

function Services() {
  const services = [
    { icon: '🛂', title: 'Pașaport', desc: 'Expirat, pierdut, CRDS sau domiciliu în România', href: '/pasaport-expirat-germania' },
    { icon: '🪪', title: 'Buletin', desc: 'Expirat, pierdut sau primul buletin', href: '/buletin-expirat-germania' },
    { icon: '⚡', title: 'Titlu de călătorie', desc: 'Urgență, fără programare', href: '/titlu-calatorie-urgenta-germania' },
    { icon: '📜', title: 'Procură notarială', desc: 'Proprietate, moștenire, bancă, divorț', href: '/procura-notariala-germania' },
  ]

  return (
    <div className="px-5 pb-8">
      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">
        Ce Poți Rezolva Cu ActeRO
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-3">Pornim de la problema ta, nu de la o listă generică de acte</h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-5">
        Fiecare categorie de mai jos duce spre ghiduri și pași adaptați situației tale, iar pe
        măsură ce adăugăm țări noi, aceeași logică rămâne valabilă.
      </p>
      <p className="text-sm text-gray-600 leading-relaxed mb-5">
        <Link href="/acte-romanesti-germania" className="font-medium text-blue-600 hover:text-blue-800 underline">
          Vezi și pagina principală: toate actele românești pe care le poți porni din Germania →
        </Link>
      </p>
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

function SeoGuides() {
  const guides = [
    {
      title: 'Toate actele românești din Germania',
      desc: 'Pagina principală pentru pașaport, buletin, titlu de călătorie, procuri și acte pentru copil.',
      href: '/acte-romanesti-germania',
    },
    {
      title: 'Acte pentru copil născut în Germania',
      desc: 'Transcriere, primul pașaport, primul buletin și schimbarea domiciliului copilului.',
      href: '/acte-copil-nascut-in-germania',
    },
    {
      title: 'Programare pe econsulat.ro',
      desc: 'Cum trece cererea din „În așteptare” în „Validată” și când apar locurile.',
      href: '/programare-econsulat-germania',
    },
    {
      title: 'CRDS vs domiciliu în România',
      desc: 'Comparator clar pentru a nu selecta tipul greșit de pașaport.',
      href: '/pasaport-crds-vs-pasaport-cu-domiciliu-romania',
    },
    {
      title: 'CEI vs CIS pentru diaspora',
      desc: 'Diferențele care schimbă ce SPCLEP alegi și cum folosești buletinul.',
      href: '/cei-vs-cis-diaspora',
    },
    {
      title: 'Titlu de călătorie vs pașaport temporar',
      desc: 'Ce rezolvi în Germania și ce rezolvi după ce ajungi în România.',
      href: '/titlu-calatorie-vs-pasaport-temporar',
    },
  ]

  return (
    <div className="px-5 py-8 border-t border-gray-100">
      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">
        Ghiduri Utile
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-3">Intrări directe către ghidurile cele mai căutate</h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-5">
        Dacă știi deja aproximativ problema, poți intra direct în paginile de orientare de mai jos
        și apoi continua spre ghidul exact sau spre ghidul rapid.
      </p>
      <div className="space-y-3">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="block rounded-xl border-2 border-gray-100 p-4 transition-all hover:border-gray-300"
          >
            <p className="text-sm font-semibold text-gray-900 mb-1">{guide.title}</p>
            <p className="text-sm text-gray-500 leading-relaxed">{guide.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

function HowItWorks() {
  const steps = [
    { n: '1', title: 'Descrii situația ta', desc: 'Alegi problema și țara sau zona care ți se aplică' },
    { n: '2', title: 'Primești traseul corect', desc: 'ActeRO separă situațiile care par similare, dar au pași diferiți' },
    { n: '3', title: 'Urmezi ghidul potrivit', desc: 'Știi ce documente pregătești, unde mergi și ce greșeli eviți' },
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

function Guidance() {
  const links = [
    {
      title: 'Cum obții programare',
      desc: 'Dacă serviciul trece prin econsulat.ro sau prin consulat, ordinea pașilor contează.',
      href: '/programare-consulat-romania',
    },
    {
      title: 'Pașaport din străinătate',
      desc: 'CRDS, domiciliu în România, expirat sau pierdut — situații diferite, trasee diferite.',
      href: '/pasaport-expirat-germania',
    },
    {
      title: 'Buletin din străinătate',
      desc: 'Prezență fizică, CEI vs CIS, domiciliu activ sau nu — nu toate cazurile arată la fel.',
      href: '/buletin-expirat-germania',
    },
  ]

  return (
    <div className="bg-gray-50 px-5 py-8">
      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">
        Cum Alegi Ghidul Corect
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-3">Cea mai mare greșeală este să pornești de la informația greșită</h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-5">
        Multe proceduri par asemănătoare la suprafață, dar se schimbă în funcție de țară,
        domiciliu, urgență sau autoritatea unde ajungi. De aceea, ActeRO pornește de la
        situația ta exactă și apoi te trimite spre ghidul potrivit.
      </p>
      <div className="space-y-3">
        {links.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="block rounded-xl border-2 border-white bg-white p-4 hover:border-gray-300 transition-all"
          >
            <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

function Countries() {
  const countries = [
    { flag: '🇩🇪', name: 'Germania', status: 'Disponibil', href: '/wizard?country=de', available: true },
    { flag: '🇮🇹', name: 'Italia', status: 'Disponibil', href: '/wizard?country=it', available: true },
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
      <p className="text-sm text-gray-600 leading-relaxed mb-5">
        Poți intra acum direct pe Germania sau Italia. Homepage-ul rămâne punctul de intrare
        general, iar ghidurile se adaptează în funcție de țara și consulatul tău.
      </p>
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

function Trust() {
  return (
    <div className="px-5 py-8 border-t border-gray-100">
      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">
        Surse Și Clarificări
      </div>
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>
          ActeRO nu este consulat și nu promite scurtături. Rolul proiectului nostru este să
          transforme informația oficială și diferențele reale dintre proceduri într-un traseu
          clar, pe înțelesul omului.
        </p>
        <p>
          Folosim surse oficiale și verificări recurente, iar acolo unde regulile diferă între
          autorități, arătăm explicit diferența în loc să o ascundem sub o listă generică.
        </p>
        <p>
          Programările oficiale sunt gratuite, iar notificările de expirare te ajută să nu
          descoperi actul expirat exact când ai nevoie urgent de el.
        </p>
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
        href="/wizard?country=de"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <SiteHeader />
      <Hero />
      <div className="max-w-2xl mx-auto">
        <Features />
        <AudienceFit />
        <Services />
        <SeoGuides />
        <HowItWorks />
        <Guidance />
        <TestimonialCarousel />
        <Countries />
        <Trust />
        <BottomCTA />
        <SiteFooter />
      </div>
    </main>
  )
}
