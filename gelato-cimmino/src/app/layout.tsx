import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MobileCTABar } from '@/components/MobileCTABar'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Gelato Cimmino | Authentic Italian Gelato · Scottsdale, AZ',
    template: '%s | Gelato Cimmino',
  },
  description:
    "Handcrafted Italian gelato made daily from fresh, natural ingredients. Visit us at 7140 E Main St in Scottsdale's Main Street Arts District.",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Gelato Cimmino | Authentic Italian Gelato · Scottsdale, AZ',
    description: 'Handcrafted Italian gelato made daily from fresh, natural ingredients.',
    url: 'https://gelatocimminowebsite.vercel.app',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Fresh Italian gelato at Gelato Cimmino Scottsdale',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gelato Cimmino | Scottsdale, AZ',
    description: 'Authentic Italian gelato handcrafted daily.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'IceCreamShop',
  name: 'Gelato Cimmino',
  url: 'https://gelatocimminowebsite.vercel.app',
  telephone: '+14805901025',
  email: 'gelatocimmino@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7140 E Main St',
    addressLocality: 'Scottsdale',
    addressRegion: 'AZ',
    postalCode: '85251',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 33.4942, longitude: -111.9262 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Sunday'], opens: '10:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Thursday', 'Friday', 'Saturday'], opens: '10:00', closes: '22:00' },
  ],
  servesCuisine: 'Italian',
  priceRange: '$$',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '200' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased" style={{ backgroundColor: '#ffffff', color: '#1C1C1C', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="pb-16 md:pb-0" style={{ paddingTop: '64px' }}>
          {children}
        </main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  )
}
