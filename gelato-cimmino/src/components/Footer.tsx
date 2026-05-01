import Link from 'next/link'
import Image from 'next/image'

const LINKS = [
  { label: 'About the Owner', href: '/about' },
  { label: 'Core Values', href: '/about/core-values' },
  { label: 'FAQs', href: '/about/faqs' },
  { label: 'Our Gelato Menu', href: '/gelato-menu' },
  { label: 'Coffee & Drinks', href: '/coffee-drinks' },
  { label: 'Fresh Ingredients', href: '/our-gelato/fresh-ingredients' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C1C1C' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          <div>
            <Image src="/logo-blue.jpg" alt="Gelato Cimmino" width={130} height={40} className="h-9 w-auto object-contain mb-4" />
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#8A8A8A' }}>
              Authentic Italian gelato crafted daily from fresh, natural ingredients.
              Old World techniques, Scottsdale flavors.
            </p>
            <div className="flex gap-4">
              {[
                { label: 'Facebook', href: 'https://www.facebook.com/gelatocimmino', icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="currentColor" /> },
                { label: 'Instagram', href: 'https://www.instagram.com/gelatocimmino', icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></> },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="transition-colors hover:text-[#4A8DB5]" style={{ color: '#8A8A8A' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#4A8DB5' }}>Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors hover:text-[#4A8DB5]" style={{ color: '#8A8A8A' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#4A8DB5' }}>Visit Us</h3>
            <address className="not-italic text-sm leading-relaxed mb-5" style={{ color: '#8A8A8A' }}>
              <p>7140 E Main St</p>
              <p>Scottsdale, AZ 85251</p>
              <a href="tel:4805901025" className="block mt-2 transition-colors hover:text-[#4A8DB5]">(480) 590-1025</a>
              <a href="mailto:gelatocimmino@gmail.com" className="block mt-1 transition-colors hover:text-[#4A8DB5]">gelatocimmino@gmail.com</a>
            </address>
            <div className="text-sm space-y-1" style={{ color: '#8A8A8A' }}>
              <p>Mon–Wed: 10 AM – 9 PM</p>
              <p>Thu–Sat: 10 AM – 10 PM</p>
              <p>Sun: 10 AM – 9 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-xs" style={{ color: '#5A5A5A' }}>© {new Date().getFullYear()} Gelato Cimmino. All rights reserved.</p>
          <p className="text-xs" style={{ color: '#5A5A5A' }}>Serving: Scottsdale · Phoenix · Gilbert · Tempe · Mesa</p>
        </div>
      </div>
    </footer>
  )
}
