'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Menu', href: '/gelato-menu' },
  { label: 'Find Us', href: '/#locations' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return pathname === '/'
    return href === '/' ? pathname === '/' : pathname.startsWith(href)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200"
      style={{
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Gelato Cimmino"
              width={200}
              height={90}
              className="h-8 lg:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  isActive(item.href) ? 'text-[#1E3A6E]' : 'text-[#3D3D3D] hover:text-[#1E3A6E]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:4805901025" className="text-sm transition-colors hover:text-[#1E3A6E]" style={{ color: '#3D3D3D' }}>
              (480) 590-1025
            </a>
            <a
              href="https://maps.google.com/?q=7140+E+Main+St,+Scottsdale,+AZ+85251"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white px-4 py-2 rounded transition-colors hover:opacity-90 active:scale-95"
              style={{ backgroundColor: '#1E3A6E' }}
            >
              Get Directions
            </a>
          </div>

          {/* Hamburger */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2"
          >
            <span className="block w-5 h-0.5 bg-[#1C1C1C] mb-1.5 transition-all origin-center" style={{ transform: mobileOpen ? 'rotate(45deg) translateY(6px)' : '' }} />
            <span className="block w-5 h-0.5 bg-[#1C1C1C] mb-1.5 transition-all" style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span className="block w-5 h-0.5 bg-[#1C1C1C] transition-all origin-center" style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-6px)' : '' }} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className="lg:hidden overflow-hidden transition-all duration-300" style={{ maxHeight: mobileOpen ? '400px' : '0' }}>
        <nav className="bg-white px-4 py-4 flex flex-col" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`py-2.5 text-base font-medium transition-colors ${
                isActive(item.href) ? 'text-[#1E3A6E]' : 'text-[#1C1C1C]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 flex flex-col gap-2" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <a href="tel:4805901025" className="text-sm text-center py-2" style={{ color: '#3D3D3D' }}>(480) 590-1025</a>
            <a
              href="https://maps.google.com/?q=7140+E+Main+St,+Scottsdale,+AZ+85251"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white px-4 py-2.5 rounded text-center"
              style={{ backgroundColor: '#1E3A6E' }}
            >
              Get Directions
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
