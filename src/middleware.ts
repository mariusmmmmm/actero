// ActeRO — middleware.ts
// Protejează rutele paid și admin

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { TEST_MODE } from '@/lib/config'
import { ACCESS_COOKIE_NAME } from '@/lib/security'

const PAID_ROUTES = ['/ghid/', '/checklist/', '/tracker/', '/parteneri']
const ADMIN_ROUTES = ['/admin']

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Linkul din email trebuie să poată seta cookie-ul înainte să protejăm ghidul paid.
  if (pathname === '/ghid/access') {
    return NextResponse.next()
  }

  // ── Rute paid ────────────────────────────────────────────────────────────────
  if (!TEST_MODE && PAID_ROUTES.some((r) => pathname.startsWith(r))) {
    const accessCookie = req.cookies.get(ACCESS_COOKIE_NAME)
    if (!accessCookie?.value) {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }

  // ── Rute admin ───────────────────────────────────────────────────────────────
  if (ADMIN_ROUTES.some((r) => pathname.startsWith(r))) {
    // Exceptăm pagina de login
    if (pathname === '/admin/login') return NextResponse.next()

    const adminSession = req.cookies.get('admin_session')
    if (!adminSession?.value) {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/ghid/:path*',
    '/checklist/:path*',
    '/tracker/:path*',
    '/parteneri',
    '/parteneri/:path*',
    '/admin/:path*',
  ],
}
