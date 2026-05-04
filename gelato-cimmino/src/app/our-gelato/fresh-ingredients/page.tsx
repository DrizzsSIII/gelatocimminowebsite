import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Fresh Ingredients' }

const INGREDIENTS = [
  { name: 'Giffoni Hazelnuts', origin: 'Campania, Italy', desc: 'Grown in the hills of Giffoni Valle Piana — considered the finest hazelnuts in the world. Protected by DOP designation.' },
  { name: 'Sicilian Pistachios', origin: 'Bronte, Sicily', desc: 'The Bronte pistachio is prized for its intense green color and extraordinary flavor. We use nothing else for our pistachio gelato.' },
  { name: 'Sorrento Walnuts', origin: 'Sorrento, Italy', desc: 'Harvested from the hills above the Amalfi Coast, these walnuts are milder and sweeter than standard varieties.' },
  { name: 'Premium Milk & Cream', origin: 'Local Dairy Partners', desc: "Mario believes the quality of milk is what gives gelato its 'extra umph.' We source from trusted local dairies committed to quality." },
  { name: 'Fresh Seasonal Fruit', origin: 'Local & Regional', desc: 'Our sorbetto flavors use real, ripe fruit — no concentrates, no artificial colors. When strawberries are at peak season, you taste it.' },
  { name: 'Amarena Cherries', origin: 'Bologna, Italy', desc: 'These wild Italian sour cherries are preserved in syrup and imported directly from Italy. Essential for our signature Amarena Cherry gelato.' },
]

export default function FreshIngredientsPage() {
  return (
    <>
      <div style={{ backgroundColor: '#F5F7F9', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#1E3A6E' }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#1E3A6E' }}>Our Gelato</span>
          </div>
          <h1 className="font-playfair font-bold mb-3" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
            Fresh Ingredients
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: '#6B6B6B' }}>
            We believe exceptional gelato starts with exceptional ingredients. No artificial flavors, colors, or preservatives — ever.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INGREDIENTS.map((ing) => (
              <div key={ing.name} className="rounded-xl p-6" style={{ border: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#F5F7F9' }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#1E3A6E' }}>{ing.origin}</p>
                <h2 className="font-playfair font-bold text-lg mb-3" style={{ color: '#1C1C1C' }}>{ing.name}</h2>
                <p className="text-sm leading-relaxed" style={{ color: '#5A5A5A', lineHeight: '1.7' }}>{ing.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-xl p-8 text-center" style={{ backgroundColor: '#EAF2F8', border: '1px solid rgba(30,58,110,0.2)' }}>
            <p className="font-playfair italic text-xl mb-2" style={{ color: '#1C1C1C' }}>
              &ldquo;No artificial flavors, colors, or preservatives — every ingredient is chosen for taste and quality.&rdquo;
            </p>
            <p className="text-sm" style={{ color: '#1E3A6E' }}>— Mario Cimmino, Founder</p>
          </div>
        </div>
      </div>
    </>
  )
}
