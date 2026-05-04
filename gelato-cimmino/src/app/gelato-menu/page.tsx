import type { Metadata } from 'next'
import { FLAVORS, FlavorCategory, CATEGORY_LABELS, CATEGORY_DESCRIPTIONS } from '@/lib/flavors'

export const metadata: Metadata = { title: 'Our Gelato Menu' }

const CATEGORIES: FlavorCategory[] = ['gelato', 'sorbetto', 'specialty']

export default function MenuPage() {
  return (
    <>
      {/* Page hero */}
      <div style={{ backgroundColor: '#F5F7F9', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#1E3A6E' }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#1E3A6E' }}>Menu</span>
          </div>
          <h1 className="font-playfair font-bold mb-3" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
            Our Gelato Menu
          </h1>
          <p className="text-lg max-w-lg" style={{ color: '#6B6B6B' }}>
            Made fresh every morning. Flavors rotate seasonally — ask us what&apos;s churning today.
          </p>
        </div>
      </div>

      {/* Flavor categories */}
      <div style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="space-y-20">
            {CATEGORIES.map((cat) => {
              const flavors = FLAVORS.filter((f) => f.category === cat)
              return (
                <div key={cat}>
                  <div className="mb-8">
                    <h2 className="font-playfair font-bold mb-1" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
                      {CATEGORY_LABELS[cat]}
                    </h2>
                    <p className="text-sm" style={{ color: '#6B6B6B' }}>{CATEGORY_DESCRIPTIONS[cat]}</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {flavors.map((f) => (
                      <div key={f.name} className="group rounded-xl overflow-hidden bg-white transition-shadow hover:shadow-md" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                        <div className="h-20 transition-transform duration-300 group-hover:scale-[1.03]" style={{ backgroundColor: f.color }} aria-hidden />
                        <div className="p-4">
                          <h3 className="font-playfair font-bold text-sm leading-snug mb-1" style={{ color: '#1C1C1C' }}>{f.name}</h3>
                          <p className="text-xs leading-relaxed mb-3" style={{ color: '#6B6B6B' }}>{f.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {f.dairyFree && (
                              <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: '#EAF2F8', color: '#142857' }}>Dairy-Free</span>
                            )}
                            {f.glutenFree && (
                              <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: '#F5F7F9', color: '#5A5A5A' }}>GF</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Note */}
          <div className="mt-16 rounded-xl p-6 text-sm" style={{ backgroundColor: '#F5F7F9', border: '1px solid rgba(0,0,0,0.06)', color: '#6B6B6B', lineHeight: '1.7' }}>
            <strong style={{ color: '#1C1C1C' }}>Please note:</strong> Flavors are made fresh in small batches and rotate based on season and availability. When a flavor sells out for the day, it&apos;s gone — no reheating, no shortcuts. Call us at (480) 590-1025 to ask about today&apos;s selection.
          </div>
        </div>
      </div>
    </>
  )
}
