import Link from 'next/link'
import Image from 'next/image'
import { LOCATIONS } from '@/lib/locations'

const NAV_LINKS = [
  { label: 'About the Owner', href: '/about' },
  { label: 'Our Gelato Menu', href: '/gelato-menu' },
  { label: 'Coffee & Drinks', href: '/coffee-drinks' },
  { label: 'Fresh Ingredients', href: '/our-gelato/fresh-ingredients' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C1C1C' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14">

          {/* Brand column */}
          <div className="md:col-span-1">
            <Image src="/logo-white.png" alt="Gelato Cimmino" width={130} height={40} className="h-9 w-auto object-contain mb-4" />
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#8A8A8A' }}>
              Authentic Italian gelato crafted daily from fresh, natural ingredients.
              Old World techniques, Scottsdale &amp; Gilbert flavors.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/gelatocimmino/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded flex items-center justify-center transition-colors hover:bg-[#2A5298]"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#8A8A8A' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/gelatocimmino/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded flex items-center justify-center transition-colors hover:bg-[#2A5298]"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#8A8A8A' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#6EA8E0' }}>Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors hover:text-[#6EA8E0]" style={{ color: '#8A8A8A' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location columns — one per entry in LOCATIONS */}
          {LOCATIONS.map((loc) => (
            <div key={loc.id}>
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#6EA8E0' }}>
                {loc.name}
                {loc.isComingSoon && (
                  <span className="ml-2 normal-case text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: 'rgba(110,168,224,0.2)', color: '#6EA8E0', letterSpacing: '0' }}>
                    Soon
                  </span>
                )}
              </h3>
              <address className="not-italic text-sm leading-relaxed mb-4" style={{ color: '#8A8A8A' }}>
                <p>{loc.address}</p>
                <p>{loc.cityStateZip}</p>
                {loc.phoneRaw ? (
                  <a href={`tel:${loc.phoneRaw}`} className="block mt-2 transition-colors hover:text-[#6EA8E0]">{loc.phone}</a>
                ) : (
                  <p className="mt-2" style={{ color: '#5A5A5A' }}>{loc.phone}</p>
                )}
              </address>
              <div className="space-y-1 text-xs" style={{ color: '#5A5A5A' }}>
                {loc.hours.map((h) => (
                  <p key={h.days}>{h.days}: {h.time}</p>
                ))}
              </div>
              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold mt-4 transition-colors hover:text-[#6EA8E0]"
                style={{ color: '#6A6A6A' }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Directions
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-xs" style={{ color: '#5A5A5A' }}>© {new Date().getFullYear()} Gelato Cimmino. All rights reserved.</p>
          <p className="text-xs" style={{ color: '#5A5A5A' }}>Scottsdale · Gilbert · Phoenix · Tempe · Mesa</p>
        </div>
      </div>
    </footer>
  )
}
