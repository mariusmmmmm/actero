import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? 'https://actero.ro'),
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
    url: 'https://actero.ro',
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
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://actero.ro/#organization',
    name: 'ActeRO',
    url: 'https://actero.ro',
    logo: 'https://actero.ro/logo.png',
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
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
