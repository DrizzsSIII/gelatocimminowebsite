import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = { title: 'About Us' }

export default function AboutPage() {
  return (
    <>
      <div style={{ backgroundColor: '#F5F7F9', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#4A8DB5' }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#4A8DB5' }}>About Us</span>
          </div>
          <h1 className="font-playfair font-bold mb-3" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
            The Cimmino Story
          </h1>
          <p className="text-lg max-w-xl" style={{ color: '#6B6B6B' }}>
            A family tradition carried from Southern Italy to the heart of Scottsdale.
          </p>
        </div>
      </div>

      {/* Story */}
      <div style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <blockquote className="font-playfair italic mb-8 leading-snug" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: '#1C1C1C', letterSpacing: '-0.01em' }}>
                &ldquo;Born in Torre del Greco, Southern Italy — where gelato isn&apos;t a dessert, it&apos;s a way of life.&rdquo;
              </blockquote>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: '#3D3D3D', lineHeight: '1.75' }}>
                <p>
                  Mario Cimmino grew up watching his family make gelato the old-fashioned way — no shortcuts, no compromises. Every batch starts with the finest ingredients: fresh local dairy, seasonal fruit, real Sicilian pistachios, and premium dark chocolate sourced directly from Italy.
                </p>
                <p>
                  When Mario brought his family&apos;s recipes to Scottsdale&apos;s Main Street Arts District, he wasn&apos;t just opening a gelato shop — he was sharing a piece of Southern Italy with the desert Southwest. Today, every scoop is still made by hand, the same way it was back home in Torre del Greco.
                </p>
                <p>
                  Come visit us. Taste the difference that tradition makes.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-playfair font-bold" style={{ backgroundColor: 'rgba(74,141,181,0.15)', color: '#4A8DB5' }}>M</div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#1C1C1C' }}>Mario Cimmino</p>
                  <p className="text-xs" style={{ color: '#6B6B6B' }}>Founder &amp; Master Gelatiere</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                  alt="Mario Cimmino, founder of Gelato Cimmino"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80"
                  alt="Gelato Cimmino shop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-page cards */}
      <div style={{ backgroundColor: '#F5F7F9', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {[
              { href: '/about/core-values', title: 'Core Values', desc: 'The principles behind every batch we make.' },
              { href: '/about/faqs', title: 'FAQs', desc: 'Common questions about gelato, our shop, and ingredients.' },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group bg-white rounded-xl p-6 transition-shadow hover:shadow-md"
                style={{ border: '1px solid rgba(0,0,0,0.08)' }}
              >
                <h3 className="font-playfair font-bold text-lg mb-2 group-hover:text-[#4A8DB5] transition-colors" style={{ color: '#1C1C1C' }}>{card.title}</h3>
                <p className="text-sm mb-4" style={{ color: '#6B6B6B' }}>{card.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#4A8DB5' }}>
                  Learn more
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
