import type { Metadata } from 'next'
import FAQsClient from './FAQsClient'

export const metadata: Metadata = { title: 'FAQs' }

export default function FAQsPage() {
  return <FAQsClient />
}
