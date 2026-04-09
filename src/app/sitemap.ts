import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const pages: Array<{
    url: string
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly'
    priority: number
  }> = [
    { url: 'https://actero.ro', changeFrequency: 'weekly', priority: 1 },

    { url: 'https://actero.ro/acte-romanesti-germania', changeFrequency: 'weekly', priority: 0.98 },
    { url: 'https://actero.ro/acte-consulat-romania-germania', changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://actero.ro/programare-consulat-romania', changeFrequency: 'monthly', priority: 0.76 },
    { url: 'https://actero.ro/programare-econsulat-germania', changeFrequency: 'weekly', priority: 0.88 },

    { url: 'https://actero.ro/pasaport-romania-germania', changeFrequency: 'weekly', priority: 0.95 },
    { url: 'https://actero.ro/pasaport-expirat-germania', changeFrequency: 'weekly', priority: 0.92 },
    { url: 'https://actero.ro/pasaport-pierdut-furat-germania', changeFrequency: 'weekly', priority: 0.91 },
    { url: 'https://actero.ro/pasaport-crds-germania', changeFrequency: 'weekly', priority: 0.91 },
    { url: 'https://actero.ro/pasaport-cu-domiciliu-romania-din-germania', changeFrequency: 'weekly', priority: 0.89 },
    { url: 'https://actero.ro/pasaport-crds-vs-pasaport-cu-domiciliu-romania', changeFrequency: 'weekly', priority: 0.84 },

    { url: 'https://actero.ro/buletin-romania-germania', changeFrequency: 'weekly', priority: 0.94 },
    { url: 'https://actero.ro/buletin-expirat-germania', changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://actero.ro/buletin-expirat-cu-domiciliu-romania', changeFrequency: 'monthly', priority: 0.82 },
    { url: 'https://actero.ro/buletin-expirat-fara-domiciliu-romania', changeFrequency: 'monthly', priority: 0.82 },
    { url: 'https://actero.ro/buletin-pierdut-furat-cu-domiciliu-romania', changeFrequency: 'monthly', priority: 0.81 },
    { url: 'https://actero.ro/buletin-pierdut-furat-fara-domiciliu-romania', changeFrequency: 'monthly', priority: 0.81 },
    { url: 'https://actero.ro/cei-vs-cis-diaspora', changeFrequency: 'monthly', priority: 0.8 },

    { url: 'https://actero.ro/titlu-calatorie-germania', changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://actero.ro/titlu-calatorie-urgenta-germania', changeFrequency: 'weekly', priority: 0.89 },
    { url: 'https://actero.ro/titlu-calatorie-vs-pasaport-temporar', changeFrequency: 'monthly', priority: 0.82 },

    { url: 'https://actero.ro/procura-notariala-germania', changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://actero.ro/procura-consulat-vs-notar-german', changeFrequency: 'monthly', priority: 0.82 },
    { url: 'https://actero.ro/procura-vanzare-proprietate-germania', changeFrequency: 'monthly', priority: 0.84 },
    { url: 'https://actero.ro/procura-mostenire-germania', changeFrequency: 'monthly', priority: 0.84 },
    { url: 'https://actero.ro/procura-generala-germania', changeFrequency: 'monthly', priority: 0.83 },
    { url: 'https://actero.ro/procura-cont-bancar-romania-din-germania', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://actero.ro/procura-divort-notarial-germania', changeFrequency: 'monthly', priority: 0.79 },

    { url: 'https://actero.ro/acte-copil-nascut-in-germania', changeFrequency: 'weekly', priority: 0.93 },
    { url: 'https://actero.ro/transcriere-certificat-nastere-germania', changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://actero.ro/formule-a-vs-geburtsurkunde', changeFrequency: 'monthly', priority: 0.82 },
    { url: 'https://actero.ro/primul-pasaport-copil-germania', changeFrequency: 'monthly', priority: 0.84 },
    { url: 'https://actero.ro/primul-buletin-copil-nascut-in-germania', changeFrequency: 'monthly', priority: 0.84 },
    { url: 'https://actero.ro/schimbare-domiciliu-copil-din-germania-in-romania', changeFrequency: 'monthly', priority: 0.78 },

    { url: 'https://actero.ro/despre', changeFrequency: 'monthly', priority: 0.45 },
    { url: 'https://actero.ro/contact', changeFrequency: 'monthly', priority: 0.45 },
    { url: 'https://actero.ro/termeni-si-conditii', changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://actero.ro/politica-de-confidentialitate', changeFrequency: 'yearly', priority: 0.2 },
  ]

  return pages.map((page) => ({
    ...page,
    lastModified,
  }))
}
