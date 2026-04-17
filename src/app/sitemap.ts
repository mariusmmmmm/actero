import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const dates = {
    homepage: new Date('2026-04-10T00:00:00Z'),
    germany: new Date('2026-04-09T00:00:00Z'),
    italy: new Date('2026-04-15T00:00:00Z'),
    legal: new Date('2026-04-01T00:00:00Z'),
    company: new Date('2026-04-10T00:00:00Z'),
  }

  const pages: Array<{
    url: string
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly'
    priority: number
    lastModified: Date
  }> = [
    { url: 'https://www.actero.ro', changeFrequency: 'weekly', priority: 1, lastModified: dates.homepage },

    { url: 'https://www.actero.ro/acte-romanesti-germania', changeFrequency: 'weekly', priority: 0.98, lastModified: dates.germany },
    { url: 'https://www.actero.ro/acte-consulat-romania-germania', changeFrequency: 'weekly', priority: 0.9, lastModified: dates.germany },
    { url: 'https://www.actero.ro/programare-consulat-romania', changeFrequency: 'monthly', priority: 0.76, lastModified: dates.germany },
    { url: 'https://www.actero.ro/programare-econsulat-germania', changeFrequency: 'weekly', priority: 0.88, lastModified: dates.germany },

    { url: 'https://www.actero.ro/pasaport-romania-germania', changeFrequency: 'weekly', priority: 0.95, lastModified: dates.germany },
    { url: 'https://www.actero.ro/pasaport-expirat-germania', changeFrequency: 'weekly', priority: 0.92, lastModified: dates.germany },
    { url: 'https://www.actero.ro/pasaport-pierdut-furat-germania', changeFrequency: 'weekly', priority: 0.91, lastModified: dates.germany },
    { url: 'https://www.actero.ro/pasaport-crds-germania', changeFrequency: 'weekly', priority: 0.91, lastModified: dates.germany },
    { url: 'https://www.actero.ro/pasaport-cu-domiciliu-romania-din-germania', changeFrequency: 'weekly', priority: 0.89, lastModified: dates.germany },
    { url: 'https://www.actero.ro/pasaport-crds-vs-pasaport-cu-domiciliu-romania', changeFrequency: 'weekly', priority: 0.84, lastModified: dates.germany },

    { url: 'https://www.actero.ro/buletin-romania-germania', changeFrequency: 'weekly', priority: 0.94, lastModified: dates.germany },
    { url: 'https://www.actero.ro/buletin-expirat-germania', changeFrequency: 'weekly', priority: 0.9, lastModified: dates.germany },
    { url: 'https://www.actero.ro/buletin-expirat-cu-domiciliu-romania', changeFrequency: 'monthly', priority: 0.82, lastModified: dates.germany },
    { url: 'https://www.actero.ro/buletin-expirat-fara-domiciliu-romania', changeFrequency: 'monthly', priority: 0.82, lastModified: dates.germany },
    { url: 'https://www.actero.ro/buletin-pierdut-furat-cu-domiciliu-romania', changeFrequency: 'monthly', priority: 0.81, lastModified: dates.germany },
    { url: 'https://www.actero.ro/buletin-pierdut-furat-fara-domiciliu-romania', changeFrequency: 'monthly', priority: 0.81, lastModified: dates.germany },
    { url: 'https://www.actero.ro/cei-vs-cis-diaspora', changeFrequency: 'monthly', priority: 0.8, lastModified: dates.germany },

    { url: 'https://www.actero.ro/titlu-calatorie-germania', changeFrequency: 'weekly', priority: 0.9, lastModified: dates.germany },
    { url: 'https://www.actero.ro/titlu-calatorie-urgenta-germania', changeFrequency: 'weekly', priority: 0.89, lastModified: dates.germany },
    { url: 'https://www.actero.ro/titlu-calatorie-vs-pasaport-temporar', changeFrequency: 'monthly', priority: 0.82, lastModified: dates.germany },

    { url: 'https://www.actero.ro/procura-notariala-germania', changeFrequency: 'weekly', priority: 0.9, lastModified: dates.germany },
    { url: 'https://www.actero.ro/procura-consulat-vs-notar-german', changeFrequency: 'monthly', priority: 0.82, lastModified: dates.germany },
    { url: 'https://www.actero.ro/procura-vanzare-proprietate-germania', changeFrequency: 'monthly', priority: 0.84, lastModified: dates.germany },
    { url: 'https://www.actero.ro/procura-mostenire-germania', changeFrequency: 'monthly', priority: 0.84, lastModified: dates.germany },
    { url: 'https://www.actero.ro/procura-generala-germania', changeFrequency: 'monthly', priority: 0.83, lastModified: dates.germany },
    { url: 'https://www.actero.ro/procura-cont-bancar-romania-din-germania', changeFrequency: 'monthly', priority: 0.8, lastModified: dates.germany },
    { url: 'https://www.actero.ro/procura-divort-notarial-germania', changeFrequency: 'monthly', priority: 0.79, lastModified: dates.germany },

    { url: 'https://www.actero.ro/acte-copil-nascut-in-germania', changeFrequency: 'weekly', priority: 0.93, lastModified: dates.germany },
    { url: 'https://www.actero.ro/transcriere-certificat-nastere-germania', changeFrequency: 'weekly', priority: 0.9, lastModified: dates.germany },
    { url: 'https://www.actero.ro/formule-a-vs-geburtsurkunde', changeFrequency: 'monthly', priority: 0.82, lastModified: dates.germany },
    { url: 'https://www.actero.ro/primul-pasaport-copil-germania', changeFrequency: 'monthly', priority: 0.84, lastModified: dates.germany },
    { url: 'https://www.actero.ro/primul-buletin-copil-nascut-in-germania', changeFrequency: 'monthly', priority: 0.84, lastModified: dates.germany },
    { url: 'https://www.actero.ro/schimbare-domiciliu-copil-din-germania-in-romania', changeFrequency: 'monthly', priority: 0.78, lastModified: dates.germany },

    { url: 'https://www.actero.ro/acte-romanesti-italia', changeFrequency: 'weekly', priority: 0.97, lastModified: dates.italy },
    { url: 'https://www.actero.ro/pasaport-romania-italia', changeFrequency: 'weekly', priority: 0.95, lastModified: dates.italy },
    { url: 'https://www.actero.ro/pasaport-expirat-italia', changeFrequency: 'weekly', priority: 0.92, lastModified: dates.italy },
    { url: 'https://www.actero.ro/pasaport-pierdut-furat-italia', changeFrequency: 'weekly', priority: 0.91, lastModified: dates.italy },
    { url: 'https://www.actero.ro/pasaport-crds-italia', changeFrequency: 'weekly', priority: 0.9, lastModified: dates.italy },
    { url: 'https://www.actero.ro/pasaport-minor-italia', changeFrequency: 'weekly', priority: 0.88, lastModified: dates.italy },
    { url: 'https://www.actero.ro/buletin-romania-italia', changeFrequency: 'weekly', priority: 0.93, lastModified: dates.italy },
    { url: 'https://www.actero.ro/titlu-calatorie-italia', changeFrequency: 'weekly', priority: 0.9, lastModified: dates.italy },
    { url: 'https://www.actero.ro/titlu-calatorie-urgenta-italia', changeFrequency: 'weekly', priority: 0.89, lastModified: dates.italy },
    { url: 'https://www.actero.ro/procura-notariala-italia', changeFrequency: 'weekly', priority: 0.89, lastModified: dates.italy },
    { url: 'https://www.actero.ro/procura-vanzare-proprietate-italia', changeFrequency: 'monthly', priority: 0.84, lastModified: dates.italy },
    { url: 'https://www.actero.ro/transcriere-certificat-nastere-italia', changeFrequency: 'weekly', priority: 0.9, lastModified: dates.italy },
    { url: 'https://www.actero.ro/programare-consulat-romania-italia', changeFrequency: 'monthly', priority: 0.76, lastModified: dates.italy },
    { url: 'https://www.actero.ro/divort-italia-romania', changeFrequency: 'monthly', priority: 0.72, lastModified: dates.italy },
    { url: 'https://www.actero.ro/pasaport-consulat-roma', changeFrequency: 'monthly', priority: 0.67, lastModified: dates.italy },
    { url: 'https://www.actero.ro/pasaport-consulat-milano', changeFrequency: 'monthly', priority: 0.67, lastModified: dates.italy },
    { url: 'https://www.actero.ro/pasaport-consulat-bologna', changeFrequency: 'monthly', priority: 0.66, lastModified: dates.italy },
    { url: 'https://www.actero.ro/pasaport-consulat-torino', changeFrequency: 'monthly', priority: 0.66, lastModified: dates.italy },
    { url: 'https://www.actero.ro/pasaport-consulat-trieste', changeFrequency: 'monthly', priority: 0.66, lastModified: dates.italy },
    { url: 'https://www.actero.ro/pasaport-consulat-bari', changeFrequency: 'monthly', priority: 0.66, lastModified: dates.italy },
    { url: 'https://www.actero.ro/pasaport-consulat-catania', changeFrequency: 'monthly', priority: 0.65, lastModified: dates.italy },
    { url: 'https://www.actero.ro/despre', changeFrequency: 'monthly', priority: 0.45, lastModified: dates.company },
    { url: 'https://www.actero.ro/contact', changeFrequency: 'monthly', priority: 0.45, lastModified: dates.company },
    { url: 'https://www.actero.ro/termeni-si-conditii', changeFrequency: 'yearly', priority: 0.2, lastModified: dates.legal },
    { url: 'https://www.actero.ro/politica-de-confidentialitate', changeFrequency: 'yearly', priority: 0.2, lastModified: dates.legal },
  ]

  return pages
}
