import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
  icons: { icon: '/favicon.svg' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'IceCreamShop',
  name: 'Gelato Cimmino',
  image: 'https://gelatocimminowebsite-7fbz.vercel.app/images/hero-gelato.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7140 E Main St',
    addressLocality: 'Scottsdale',
    addressRegion: 'AZ',
    postalCode: '85251',
  },
  telephone: '+14805901025',
  openingHours: ['Mo-We 10:00-21:00', 'Th-Sa 10:00-22:00', 'Su 10:00-21:00'],
  priceRange: '$$',
  servesCuisine: 'Italian',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" style={{ backgroundColor: '#ffffff', color: '#1C1C1C', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
        <Navbar />
        <main style={{ paddingTop: '64px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
