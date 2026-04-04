import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Despre noi',
  description:
    'ActeRO s-a născut dintr-o frustrare reală: românii din diaspora merită informații corecte, clare și gratuite despre actele lor.',
}

export default function DesprePage() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] px-6 py-24 text-center">
        <span className="inline-block rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/60 mb-8">
          Povestea noastră
        </span>
        <h1 className="mx-auto max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
          Am văzut cum{' '}
          <em className="not-italic text-green-400">sistemul</em>{' '}
          îi frânge pe cei de departe.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/60">
          ActeRO s-a născut dintr-o frustrare reală și dintr-o convingere
          simplă: românii din diaspora merită să fie tratați ca cetățeni egali.
        </p>
      </section>

      {/* ── BODY ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-2xl px-6 py-16 space-y-14">

        {/* Cum a început */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Cum a început
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Am văzut asta de prea multe ori. Un prieten care face{' '}
            <strong className="text-gray-900">
              300 de kilometri până la consulat
            </strong>{' '}
            cu toate actele pregătite — și este trimis acasă pentru că lista de
            pe site era veche. O rudă care pierde o moștenire pentru că nu știa
            că are nevoie de o procură specifică. O mamă care nu poate veni la
            botezul copilului ei pentru că pașaportul i-a expirat cu o lună
            înainte și nu a găsit programare.
          </p>

          {/* Blockquote */}
          <blockquote className="mt-8 rounded-xl bg-gray-50 border-l-4 border-gray-900 px-6 py-5">
            <p className="text-base italic leading-relaxed text-gray-700">
              „Am făcut 3 drumuri până la consulat. De fiecare dată mi s-a spus
              că lipsește ceva. Nimeni nu mi-a spus de la început exact ce
              trebuie."
            </p>
            <footer className="mt-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
              — Român din Germania, grup Facebook diaspora
            </footer>
          </blockquote>
        </section>

        {/* Problema reală */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Problema reală
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Nu e vina oamenilor. Informațiile sunt{' '}
            <strong className="text-gray-900">
              contradictorii, împrăștiate și greu de găsit
            </strong>
            . Același act are cerințe diferite în funcție de consulat.
            Platformele oficiale sunt greu de folosit. Și în lipsa informației
            corecte, oamenii ajung să plătească intermediarilor sute de euro
            pentru ceva ce ar putea rezolva singuri — sau pur și simplu renunță.
          </p>
        </section>

        {/* De ce ActeRO */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            De ce ActeRO
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Am construit ActeRO cu o convingere simplă:{' '}
            <strong className="text-gray-900">
              informația corectă nu ar trebui să coste sute de euro și zile
              pierdute
            </strong>
            . Fiecare român din diaspora merită să știe exact ce acte are
            nevoie, în ce ordine, cu ce costuri — înainte să facă primul pas.
            Nu după al treilea drum degeaba.
          </p>
        </section>

        {/* Stats grid */}
        <section className="grid grid-cols-2 gap-4">
          {[
            { value: '5.7M', label: 'români cu rezidență oficială în afara țării' },
            { value: '923K', label: 'servicii consulare prestate în 2024' },
            { value: '3×',   label: 'drumuri medii până la rezolvarea unui act' },
            { value: '0€',   label: 'cât ar trebui să coste informația corectă' },
          ].map(({ value, label }) => (
            <div
              key={value}
              className="rounded-xl border border-gray-200 bg-white px-6 py-8 text-center"
            >
              <p className="text-4xl font-black text-gray-900 mb-2">{value}</p>
              <p className="text-sm leading-snug text-gray-500">{label}</p>
            </div>
          ))}
        </section>

        {/* Promisiunea noastră */}
        <section className="rounded-2xl bg-[#1a1a1a] px-8 py-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
            Promisiunea noastră
          </p>
          <ul className="space-y-4">
            {[
              {
                bold: 'Informații verificate',
                rest: '— actualizate constant, specifice fiecărui consulat',
              },
              {
                bold: 'Fără drumuri degeaba',
                rest: '— știi exact ce acte îți trebuie înainte să pleci',
              },
              {
                bold: 'Fără intermediari',
                rest: '— informația corectă la un preț corect, nu sute de euro pentru o hârtie',
              },
              {
                bold: 'Fără surprize',
                rest: '— costuri clare, pași clari, rezultat previzibil',
              },
            ].map(({ bold, rest }) => (
              <li key={bold} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-500" />
                <p className="text-base text-white/80">
                  <strong className="font-semibold text-white">{bold}</strong>{' '}
                  {rest}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Unde suntem acum */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Unde suntem acum
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            ActeRO e construit pentru românii de pretutindeni. Nu suntem o
            instituție, nu suntem un intermediar. Suntem{' '}
            <strong className="text-gray-900">un ghid</strong> — ca un prieten
            care a trecut deja prin sistem și îți spune exact ce să faci.
            Simplu. Corect. Fără drumuri degeaba.
          </p>
        </section>

      </div>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-stone-100 px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Gata să rezolvi actele fără bătăi de cap?
        </h2>
        <p className="text-base text-gray-500 mb-8">
          Începe gratuit — fără cont, fără surprize.
        </p>
        <Link
          href="/wizard"
          className="inline-block rounded-full bg-[#1a1a1a] px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition-colors"
        >
          Începe acum 🇷🇴
        </Link>
        {/* Tricolor decorativ */}
        <div className="mt-8 flex justify-center gap-1">
          <div className="h-1 w-8 rounded-full bg-blue-600" />
          <div className="h-1 w-8 rounded-full bg-yellow-400" />
          <div className="h-1 w-8 rounded-full bg-red-600" />
        </div>
      </section>

    </main>
  )
}
