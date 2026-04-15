import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import ConsentManager from '@/components/analytics/ConsentManager'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.actero.ro'),
  title: {
    default: 'ActeRO — Acte românești din Germania, pas cu pas',
    template: '%s · ActeRO',
  },
  description:
    'Ghid personalizat pentru pașaport, buletin și procuri din Germania. Fără drumuri degeaba la consulat.',
  keywords: [
    'pașaport expirat Germania',
    'buletin expirat Germania',
    'consulat român Germania',
    'procură notarială Germania',
    'econsulat.ro ghid',
    'acte diaspora România',
  ],
  authors: [{ name: 'ActeRO' }],
  creator: 'ActeRO',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://www.actero.ro',
    siteName: 'ActeRO',
    title: 'ActeRO — Acte românești din Germania, pas cu pas',
    description:
      'Ghid personalizat pentru pașaport, buletin și procuri din Germania. Fără drumuri degeaba la consulat.',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'ActeRO',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'ActeRO — Acte românești din Germania',
    description: 'Ghid personalizat. Fără drumuri degeaba la consulat.',
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID ?? 'G-YT5RBX61RR'
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.actero.ro/#website',
    url: 'https://www.actero.ro',
    name: 'ActeRO',
    inLanguage: 'ro',
    publisher: {
      '@id': 'https://www.actero.ro/#organization',
    },
  }
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.actero.ro/#organization',
    name: 'ActeRO',
    url: 'https://www.actero.ro',
    logo: 'https://www.actero.ro/logo.png',
    description: 'Navigator digital pentru acte românești din diaspora — pașaport, buletin, procuri, titlu de călătorie din Germania.',
    areaServed: {
      '@type': 'Country',
      name: 'Germany'
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Românii din Germania'
    },
    sameAs: [
      'https://www.facebook.com/actero.ro'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@actero.ro',
      contactType: 'customer support',
      availableLanguage: 'Romanian'
    }
  }

  return (
    <html lang="ro">
      <head>
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
            window.gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied'
            });
            window['ga-disable-${gaId}'] = true;
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConsentManager gaId={gaId} />
        {children}
      </body>
    </html>
  )
}
