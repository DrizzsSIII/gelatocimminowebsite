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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
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
