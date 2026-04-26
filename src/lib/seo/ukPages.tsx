import type { Metadata } from 'next'
import StructuredSeoPage, { type StructuredSeoPageProps } from '@/components/seo/StructuredSeoPage'
import { metadata as hubActeMetadata, pageProps as hubActePageProps } from './uk-content/seo_uk_hub_acte_romanesti'
import {
  articleSchema as hubActeArticleSchema,
  breadcrumbSchema as hubActeBreadcrumbSchema,
  faqSchema as hubActeFaqSchema,
} from './uk-content/seo_uk_hub_acte_romanesti'
import { metadata as hubBuletinMetadata, pageProps as hubBuletinPageProps } from './uk-content/seo_uk_hub_buletin'
import { faqSchema as hubBuletinFaqSchema } from './uk-content/seo_uk_hub_buletin'
import { metadata as geoLondraMetadata, pageProps as geoLondraPageProps } from './uk-content/seo_uk_geo_londra'
import {
  articleSchema as geoLondraArticleSchema,
  breadcrumbSchema as geoLondraBreadcrumbSchema,
  faqSchema as geoLondraFaqSchema,
  governmentOfficeSchema as geoLondraGovernmentOfficeSchema,
} from './uk-content/seo_uk_geo_londra'
import { metadata as geoManchesterMetadata, pageProps as geoManchesterPageProps } from './uk-content/seo_uk_geo_manchester'
import {
  faqSchema as geoManchesterFaqSchema,
  governmentOfficeSchema as geoManchesterGovernmentOfficeSchema,
} from './uk-content/seo_uk_geo_manchester'
import { metadata as leafBrexitMetadata, pageProps as leafBrexitPageProps } from './uk-content/seo_uk_leaf_brexit_pasaport'
import {
  articleSchema as leafBrexitArticleSchema,
  breadcrumbSchema as leafBrexitBreadcrumbSchema,
  faqSchema as leafBrexitFaqSchema,
} from './uk-content/seo_uk_leaf_brexit_pasaport'
import { metadata as leafBuletinUeMetadata, pageProps as leafBuletinUePageProps } from './uk-content/seo_uk_leaf_buletin_ue'
import {
  articleSchema as leafBuletinUeArticleSchema,
  breadcrumbSchema as leafBuletinUeBreadcrumbSchema,
  faqSchema as leafBuletinUeFaqSchema,
} from './uk-content/seo_uk_leaf_buletin_ue'
import { metadata as leafPasaportCrdsMetadata, pageProps as leafPasaportCrdsPageProps } from './uk-content/seo_uk_leaf_pasaport_crds'
import { faqSchema as leafPasaportCrdsFaqSchema } from './uk-content/seo_uk_leaf_pasaport_crds'
import { metadata as leafPasaportExpiratMetadata, pageProps as leafPasaportExpiratPageProps } from './uk-content/seo_uk_leaf_pasaport_expirat'
import {
  articleSchema as leafPasaportExpiratArticleSchema,
  breadcrumbSchema as leafPasaportExpiratBreadcrumbSchema,
  faqSchema as leafPasaportExpiratFaqSchema,
} from './uk-content/seo_uk_leaf_pasaport_expirat'
import { metadata as leafTitluUrgentMetadata, pageProps as leafTitluUrgentPageProps } from './uk-content/seo_uk_leaf_titlu_urgent'
import { faqSchema as leafTitluUrgentFaqSchema } from './uk-content/seo_uk_leaf_titlu_urgent'
import { metadata as leafApostilaMetadata, pageProps as leafApostilaPageProps } from './uk-content/seo_uk_leaf_apostila_fcdo'
import {
  articleSchema as leafApostilaArticleSchema,
  faqSchema as leafApostilaFaqSchema,
} from './uk-content/seo_uk_leaf_apostila_fcdo'
import {
  edinburghMetadata,
  edinburghPageProps,
  edinburghGovernmentOfficeSchema,
  pasaportHubMetadata,
  pasaportHubPageProps,
  procuraHubMetadata,
  procuraHubPageProps,
  copilHubMetadata,
  copilHubPageProps,
  titluHubMetadata,
  titluHubPageProps,
} from './uk-content/seo_uk_sprint3_bloc_a'
import {
  pasaportMinorMetadata,
  pasaportMinorPageProps,
  pierdutFuratMetadata,
  pierdutFuratPageProps,
  consulatCompetentMetadata,
  consulatCompetentPageProps,
  temporarMetadata,
  temporarPageProps,
  certNastereMetadata,
  certNasterePageProps,
} from './uk-content/seo_uk_sprint3_bloc_b'
import {
  procuraImobiliataMetadata,
  procuraImobiliaraPageProps,
  programareMetadata,
  programarePageProps,
  traducatorMetadata,
  traducatorPageProps,
  transcriereNastereMetadata,
  transcriereNasterePageProps,
  transcriereCasatorieMetadata,
  transcriereCasatoriePageProps,
} from './uk-content/seo_uk_sprint3_bloc_c'

type UkSeoConfig = {
  metadata: Metadata
  pageProps: StructuredSeoPageProps
}

function withSchemas(
  pageProps: StructuredSeoPageProps,
  schemaOptions: NonNullable<StructuredSeoPageProps['schemaOptions']>
): StructuredSeoPageProps {
  return {
    ...pageProps,
    schemaOptions,
  }
}

function normalizeMetadata(metadata: Metadata): Metadata {
  const title =
    typeof metadata.title === 'string'
      ? metadata.title.replace(/ \| ActeRO$/, '')
      : metadata.title

  return {
    ...metadata,
    title,
  }
}

const ukPages: Record<string, UkSeoConfig> = {
  'acte-romanesti-marea-britanie': {
    metadata: normalizeMetadata(hubActeMetadata),
    pageProps: withSchemas(hubActePageProps, {
      article: hubActeArticleSchema,
      breadcrumb: hubActeBreadcrumbSchema,
      faq: hubActeFaqSchema,
      howTo: false,
    }),
  },
  'buletin-romanesc-anglia': {
    metadata: normalizeMetadata(hubBuletinMetadata),
    pageProps: withSchemas(hubBuletinPageProps, {
      faq: hubBuletinFaqSchema,
    }),
  },
  'pasaport-consulat-londra': {
    metadata: normalizeMetadata(geoLondraMetadata),
    pageProps: withSchemas(geoLondraPageProps, {
      article: geoLondraArticleSchema,
      breadcrumb: geoLondraBreadcrumbSchema,
      faq: geoLondraFaqSchema,
      howTo: false,
      extra: [geoLondraGovernmentOfficeSchema],
    }),
  },
  'pasaport-consulat-manchester': {
    metadata: normalizeMetadata(geoManchesterMetadata),
    pageProps: withSchemas(geoManchesterPageProps, {
      faq: geoManchesterFaqSchema,
      extra: [geoManchesterGovernmentOfficeSchema],
    }),
  },
  'pasaport-romanesc-dupa-brexit': {
    metadata: normalizeMetadata(leafBrexitMetadata),
    pageProps: withSchemas(leafBrexitPageProps, {
      article: leafBrexitArticleSchema,
      breadcrumb: leafBrexitBreadcrumbSchema,
      faq: leafBrexitFaqSchema,
      howTo: false,
    }),
  },
  'pot-calatori-ue-buletin-romanesc-anglia': {
    metadata: normalizeMetadata(leafBuletinUeMetadata),
    pageProps: withSchemas(leafBuletinUePageProps, {
      article: leafBuletinUeArticleSchema,
      breadcrumb: leafBuletinUeBreadcrumbSchema,
      faq: leafBuletinUeFaqSchema,
      howTo: false,
    }),
  },
  'pasaport-crds-anglia': {
    metadata: normalizeMetadata(leafPasaportCrdsMetadata),
    pageProps: withSchemas(leafPasaportCrdsPageProps, {
      faq: leafPasaportCrdsFaqSchema,
    }),
  },
  'pasaport-expirat-anglia': {
    metadata: normalizeMetadata(leafPasaportExpiratMetadata),
    pageProps: withSchemas(leafPasaportExpiratPageProps, {
      article: leafPasaportExpiratArticleSchema,
      breadcrumb: leafPasaportExpiratBreadcrumbSchema,
      faq: leafPasaportExpiratFaqSchema,
      howTo: false,
    }),
  },
  'titlu-calatorie-urgent-anglia': {
    metadata: normalizeMetadata(leafTitluUrgentMetadata),
    pageProps: withSchemas(leafTitluUrgentPageProps, {
      faq: leafTitluUrgentFaqSchema,
    }),
  },
  'apostila-fcdo-anglia': {
    metadata: normalizeMetadata(leafApostilaMetadata),
    pageProps: withSchemas(leafApostilaPageProps, {
      article: leafApostilaArticleSchema,
      faq: leafApostilaFaqSchema,
      howTo: false,
    }),
  },
  'pasaport-consulat-edinburgh': {
    metadata: normalizeMetadata(edinburghMetadata),
    pageProps: withSchemas(edinburghPageProps, {
      extra: [edinburghGovernmentOfficeSchema],
    }),
  },
  'pasaport-romania-marea-britanie': { metadata: normalizeMetadata(pasaportHubMetadata), pageProps: pasaportHubPageProps },
  'procura-notariala-anglia': { metadata: normalizeMetadata(procuraHubMetadata), pageProps: procuraHubPageProps },
  'acte-copil-nascut-in-anglia': { metadata: normalizeMetadata(copilHubMetadata), pageProps: copilHubPageProps },
  'titlu-calatorie-anglia': { metadata: normalizeMetadata(titluHubMetadata), pageProps: titluHubPageProps },
  'pasaport-minor-anglia': { metadata: normalizeMetadata(pasaportMinorMetadata), pageProps: pasaportMinorPageProps },
  'pasaport-pierdut-furat-anglia': { metadata: normalizeMetadata(pierdutFuratMetadata), pageProps: pierdutFuratPageProps },
  'consulat-competent-anglia': { metadata: normalizeMetadata(consulatCompetentMetadata), pageProps: consulatCompetentPageProps },
  'pasaport-temporar-anglia': { metadata: normalizeMetadata(temporarMetadata), pageProps: temporarPageProps },
  'certificat-nastere-britanic-roman': { metadata: normalizeMetadata(certNastereMetadata), pageProps: certNasterePageProps },
  'procura-vanzare-proprietate-anglia': { metadata: normalizeMetadata(procuraImobiliataMetadata), pageProps: procuraImobiliaraPageProps },
  'programare-consulat-roman-anglia': { metadata: normalizeMetadata(programareMetadata), pageProps: programarePageProps },
  'traducator-autorizat-acte-romanesti-anglia': { metadata: normalizeMetadata(traducatorMetadata), pageProps: traducatorPageProps },
  'transcriere-nastere-anglia': { metadata: normalizeMetadata(transcriereNastereMetadata), pageProps: transcriereNasterePageProps },
  'transcriere-casatorie-anglia': { metadata: normalizeMetadata(transcriereCasatorieMetadata), pageProps: transcriereCasatoriePageProps },
}

export const ukSeoSlugs = Object.keys(ukPages)

export function getUkSeoMetadata(slug: string): Metadata | null {
  return ukPages[slug]?.metadata ?? null
}

export function getUkSeoPageConfig(slug: string): UkSeoConfig | null {
  return ukPages[slug] ?? null
}

export function renderUkSeoPage(slug: string) {
  const config = ukPages[slug]
  if (!config) return null

  return <StructuredSeoPage metadata={config.metadata} {...config.pageProps} />
}
