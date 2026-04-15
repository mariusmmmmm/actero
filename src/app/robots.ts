import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/wizard',
          '/diagnostic',
          '/ghid',
          '/ghid/',
          '/checklist/',
          '/tracker/',
          '/paywall',
          '/succes',
          '/finalizat',
          '/token-expirat',
          '/in-curand',
          '/dev/',
        ],
      },
    ],
    sitemap: 'https://www.actero.ro/sitemap.xml',
    host: 'https://www.actero.ro',
  }
}
