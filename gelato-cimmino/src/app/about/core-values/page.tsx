import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Core Values' }

const VALUES = [
  {
    title: 'Bringing Italy to You',
    body: 'We source our key ingredients directly from Italy — hazelnuts from Giffoni, walnuts from Sorrento, and premium chocolate from the finest Italian producers. Authentic flavor starts with authentic ingredients.',
  },
  {
    title: 'Uncompromising Quality Milk',
    body: 'Premium milk is the foundation of great gelato. We believe the quality of our dairy is what gives our gelato that extra richness — the kind that keeps our customers coming back.',
  },
  {
    title: 'A Lively, Welcoming Environment',
    body: "Our shop is designed to be a true treat — a place to slow down, enjoy something extraordinary, and share a moment. Mario designed every detail of the Cimmino experience with you in mind.",
  },
  {
    title: 'Exploration and Discovery',
    body: "Beyond classic Italian flavors, we create signature experiences like Cimmino Rock and Amarena Cherry. We encourage you to explore, discover, and find your new favorite — visit often, because flavors change.",
  },
]

export default function CoreValuesPage() {
  return (
    <>
      <div style={{ backgroundColor: '#F5F7F9', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#4A8DB5' }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#4A8DB5' }}>About Us</span>
          </div>
          <h1 className="font-playfair font-bold mb-3" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
            Core Values
          </h1>
          <p className="text-lg max-w-xl" style={{ color: '#6B6B6B' }}>
            Our sole purpose is to create an authentic gelato experience that keeps our customers coming back and recommending us to their family and friends.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl">
            {VALUES.map((v, i) => (
              <div key={v.title} className="rounded-xl p-8" style={{ backgroundColor: '#F5F7F9', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div className="w-8 h-8 rounded-lg mb-5 flex items-center justify-center text-sm font-bold" style={{ backgroundColor: '#4A8DB5', color: '#fff' }}>
                  {i + 1}
                </div>
                <h2 className="font-playfair font-bold text-xl mb-3" style={{ color: '#1C1C1C' }}>{v.title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: '#5A5A5A', lineHeight: '1.75' }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
