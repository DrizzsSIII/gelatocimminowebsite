import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Our Gelato' }

const FACTS = [
  { label: 'Less fat', detail: 'Gelato has 4–8% fat vs. 14–25% in ice cream — lighter, yet richer in flavor.' },
  { label: 'Less air', detail: 'Ice cream is churned to add air (up to 50%). Gelato has minimal overrun, making it denser.' },
  { label: 'Served warmer', detail: 'Gelato is served at a higher temperature, giving it that signature silky, soft texture.' },
  { label: 'More intense', detail: 'Less fat means your taste buds get the full impact of every flavor — no dilution.' },
]

export default function OurGelatoPage() {
  return (
    <>
      <div style={{ backgroundColor: '#F5F7F9', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#4A8DB5' }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#4A8DB5' }}>Our Gelato</span>
          </div>
          <h1 className="font-playfair font-bold mb-3" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
            What Makes Gelato Special
          </h1>
          <p className="text-lg max-w-xl" style={{ color: '#6B6B6B' }}>
            Gelato isn&apos;t just ice cream under a different name. It&apos;s a fundamentally different — and superior — experience.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="font-playfair font-bold mb-6" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
                Gelato vs. Ice Cream
              </h2>
              <div className="space-y-5">
                {FACTS.map((f) => (
                  <div key={f.label} className="flex gap-4">
                    <div className="w-1 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: '#4A8DB5', minHeight: '40px' }} />
                    <div>
                      <p className="font-semibold text-sm mb-1" style={{ color: '#1C1C1C' }}>{f.label}</p>
                      <p className="text-sm leading-relaxed" style={{ color: '#5A5A5A' }}>{f.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5 text-base" style={{ color: '#3D3D3D', lineHeight: '1.75' }}>
              <h2 className="font-playfair font-bold mb-6" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
                How We Make It
              </h2>
              <p>
                Every morning, before we open, the gelato-making process begins. We start with fresh, high-quality dairy — the foundation that Mario believes is what separates great gelato from ordinary frozen dessert.
              </p>
              <p>
                Our fruit flavors use real fruit, never concentrates. Our nut-based flavors use premium Italian-sourced nuts — hazelnuts from Giffoni, pistachios from Sicily. Every ingredient is chosen with intention.
              </p>
              <p>
                The churning process is slower and colder than ice cream, incorporating minimal air. The result is a texture that is impossibly smooth and dense — and a flavor that is pure and intense.
              </p>
              <Link href="/our-gelato/fresh-ingredients" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-70" style={{ color: '#4A8DB5' }}>
                Learn about our ingredients
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
