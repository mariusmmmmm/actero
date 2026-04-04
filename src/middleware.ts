// ActeRO — middleware.ts
// Protejează rutele paid și admin

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { TEST_MODE } from '@/lib/config'

const PAID_ROUTES = ['/ghid/', '/checklist/', '/tracker/', '/parteneri']
const ADMIN_ROUTES = ['/admin']

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // ── Rute paid ────────────────────────────────────────────────────────────────
  if (!TEST_MODE && PAID_ROUTES.some((r) => pathname.startsWith(r))) {
    const sessionCookie = req.cookies.get('actero_session')
    if (!sessionCookie?.value) {
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
