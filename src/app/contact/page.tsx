import type { Metadata } from 'next'
import ContactPageClient from '@/components/contact/ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact ActeRO',
  description:
    'Contactează echipa ActeRO pentru întrebări despre ghiduri, suport, colaborări sau informații despre actele românești în diaspora.',
  openGraph: {
    title: 'Contact ActeRO',
    description:
      'Trimite un mesaj echipei ActeRO pentru suport, întrebări sau colaborări.',
    url: 'https://www.actero.ro/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.actero.ro/contact',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
