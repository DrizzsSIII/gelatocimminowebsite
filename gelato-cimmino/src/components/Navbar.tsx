'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

type Child = { label: string; href: string }
type NavItem = { label: string; href: string; children?: Child[] }

const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us', href: '/about',
    children: [
      { label: 'Core Values', href: '/about/core-values' },
      { label: 'FAQs', href: '/about/faqs' },
    ],
  },
  { label: 'Our Gelato Menu', href: '/gelato-menu' },
  { label: 'Coffee & Drinks', href: '/coffee-drinks' },
  {
    label: 'Our Gelato', href: '/our-gelato',
    children: [
      { label: 'Fresh Ingredients', href: '/our-gelato/fresh-ingredients' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

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
              src="/logo-blue.jpg"
              alt="Gelato Cimmino"
              width={130}
              height={40}
              className="h-8 lg:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                      isActive(item.href) ? 'text-[#4A8DB5]' : 'text-[#3D3D3D] hover:text-[#4A8DB5]'
                    }`}
                  >
                    {item.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" className="mt-px opacity-40 group-hover:opacity-70 transition-transform duration-200 group-hover:rotate-180">
                      <path d="M1 3l4 4 4-4" />
                    </svg>
                  </Link>
                  <div className="absolute top-full left-0 pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150">
                    <div className="bg-white rounded-lg py-1 min-w-[170px]" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.12)', border: '1px solid rgba(0,0,0,0.08)' }}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            pathname === child.href
                              ? 'text-[#4A8DB5] bg-[#EAF2F8]'
                              : 'text-[#3D3D3D] hover:text-[#4A8DB5] hover:bg-[#F5F7F9]'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                    isActive(item.href) ? 'text-[#4A8DB5]' : 'text-[#3D3D3D] hover:text-[#4A8DB5]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:4805901025" className="text-sm transition-colors hover:text-[#4A8DB5]" style={{ color: '#3D3D3D' }}>
              (480) 590-1025
            </a>
            <a
              href="https://maps.google.com/?q=7140+E+Main+St,+Scottsdale,+AZ+85251"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white px-4 py-2 rounded transition-colors active:scale-95"
              style={{ backgroundColor: '#4A8DB5' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2E6A8F')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4A8DB5')}
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
      <div className="lg:hidden overflow-hidden transition-all duration-300" style={{ maxHeight: mobileOpen ? '640px' : '0' }}>
        <nav className="bg-white px-4 py-4 flex flex-col" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          {NAV.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className={`py-2.5 text-base font-medium transition-colors flex-1 ${
                    isActive(item.href) ? 'text-[#4A8DB5]' : 'text-[#1C1C1C]'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="p-2 text-[#6B6B6B]"
                  >
                    <svg width="14" height="14" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: openDropdown === item.label ? 'rotate(180deg)' : '', transition: 'transform 0.2s' }}>
                      <path d="M1 3l4 4 4-4" />
                    </svg>
                  </button>
                )}
              </div>
              {item.children && openDropdown === item.label && (
                <div className="pl-4 pb-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block py-2 text-sm transition-colors ${
                        pathname === child.href ? 'text-[#4A8DB5]' : 'text-[#6B6B6B] hover:text-[#4A8DB5]'
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-3 pt-3 flex flex-col gap-2" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <a href="tel:4805901025" className="text-sm text-center py-2" style={{ color: '#3D3D3D' }}>(480) 590-1025</a>
            <a
              href="https://maps.google.com/?q=7140+E+Main+St,+Scottsdale,+AZ+85251"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white px-4 py-2.5 rounded text-center"
              style={{ backgroundColor: '#4A8DB5' }}
            >
              Get Directions
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
