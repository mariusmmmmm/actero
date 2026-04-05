'use client'

import { useState } from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import { trackEvent, withAttribution } from '@/lib/analytics'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    if (!form.email.trim() || !form.message.trim()) return

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name || undefined,
          email: form.email,
          subject: form.subject || undefined,
          message: form.message,
        }),
      })

      if (res.ok) {
        trackEvent('contact_submit_success', withAttribution({ source_page: 'contact' }))
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <main className="min-h-screen bg-white flex flex-col">
        <SiteHeader />
        <div className="max-w-2xl mx-auto w-full px-5 py-8 flex-1 flex flex-col justify-center text-center">
          <div className="text-5xl mb-4">✉️</div>
          <h1 className="text-xl font-bold text-gray-900 mb-3">Mesaj trimis</h1>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Mulțumim. Mesajul tău a fost trimis către contact@actero.ro.
          </p>
          <a
            href="/"
            className="block w-full py-4 bg-gray-900 text-white font-semibold rounded-xl text-sm text-center"
          >
            Înapoi la homepage
          </a>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <SiteHeader />
      <div className="max-w-2xl mx-auto w-full px-5 py-8 flex-1">
        <div className="mb-8 flex justify-end">
          <a href="/" className="text-sm text-gray-400 hover:text-gray-600">
            ← Înapoi
          </a>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Contact</h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            Trimite-ne un mesaj și revine cineva din echipa ActeRO pe email.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-6">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
            Email de contact
          </div>
          <div className="text-sm font-semibold text-gray-900">contact@actero.ro</div>
        </div>

        <div className="flex flex-col gap-4">
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Numele tău (opțional)"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-400"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Emailul tău"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-400"
          />

          <input
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subiect (opțional)"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-400"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Scrie mesajul tău..."
            rows={6}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 resize-none focus:outline-none focus:border-gray-400"
          />

          <button
            onClick={handleSubmit}
            disabled={!form.email.trim() || !form.message.trim() || status === 'loading'}
            className="w-full py-4 bg-gray-900 text-white font-semibold rounded-xl text-sm disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Se trimite...' : 'Trimite mesajul →'}
          </button>

          {status === 'error' && (
            <p className="text-sm text-red-500 text-center">
              A apărut o eroare. Încearcă din nou.
            </p>
          )}
        </div>
      </div>
    </main>
  )
}
