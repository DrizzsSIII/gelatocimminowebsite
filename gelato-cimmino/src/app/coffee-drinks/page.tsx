import type { Metadata } from 'next'
import { DRINKS, DRINK_CATEGORY_LABELS } from '@/lib/drinks'

export const metadata: Metadata = { title: 'Coffee & Drinks' }

type Cat = 'espresso' | 'specialty' | 'pairing'
const CATS: Cat[] = ['espresso', 'specialty', 'pairing']

export default function CoffeePage() {
  return (
    <>
      <div style={{ backgroundColor: '#F5F7F9', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#4A8DB5' }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#4A8DB5' }}>Drinks</span>
          </div>
          <h1 className="font-playfair font-bold mb-3" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
            Coffee & Drinks
          </h1>
          <p className="text-lg max-w-xl" style={{ color: '#6B6B6B' }}>
            Authentic Italian coffee and unique gelato pairings — the perfect complement to your scoop.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="space-y-16">
            {CATS.map((cat) => {
              const items = DRINKS.filter((d) => d.category === cat)
              return (
                <div key={cat}>
                  <h2 className="font-playfair font-bold mb-6" style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
                    {DRINK_CATEGORY_LABELS[cat]}
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {items.map((d) => (
                      <div key={d.name} className="rounded-xl p-6 bg-white" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                        <div className="w-8 h-8 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#EAF2F8' }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A8DB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {cat === 'espresso' ? <><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></> : cat === 'specialty' ? <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></> : <><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></>}
                          </svg>
                        </div>
                        <h3 className="font-playfair font-bold text-base mb-2" style={{ color: '#1C1C1C' }}>{d.name}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B', lineHeight: '1.65' }}>{d.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
