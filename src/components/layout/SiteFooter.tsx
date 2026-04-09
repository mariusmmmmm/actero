 'use client'

import { openCookieSettings } from '@/lib/consent'

export default function SiteFooter() {
  return (
    <div className="px-5 pb-8 border-t border-gray-100 pt-6">
      <div className="mx-auto max-w-2xl flex flex-col gap-4 text-xs text-gray-400">
        <span>© 2026 ActeRO</span>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <a href="/ajutor" className="hover:text-gray-600">Ajutor</a>
          <a href="/contact" className="hover:text-gray-600">Contact</a>
          <a href="/termeni-si-conditii" className="hover:text-gray-600">Termeni & Condiții</a>
          <a href="/politica-de-confidentialitate" className="hover:text-gray-600">Confidențialitate</a>
          <button type="button" onClick={openCookieSettings} className="hover:text-gray-600 text-left">
            Preferințe cookie-uri
          </button>
          <a href="/despre" className="hover:text-gray-600">Despre</a>
        </div>
      </div>
    </div>
  )
}
