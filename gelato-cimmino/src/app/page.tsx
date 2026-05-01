import Image from 'next/image'
import Link from 'next/link'
import { FLAVORS } from '@/lib/flavors'
import { WEEK_HOURS } from '@/lib/hours'

const FEATURED = FLAVORS.filter((f) =>
  ['Pistachio', 'Hazelnut & Nutella', 'Amarena Cherry', 'Dark Chocolate', 'Lemon', 'Strawberry', 'Peanut Butter Cup', 'Coconut'].includes(f.name)
)

const FEATURES = [
  { icon: '🛡', title: '100% Natural', desc: 'No artificial flavors, colors, or preservatives — every ingredient chosen for taste and quality.' },
  { icon: '🧇', title: 'Homemade Cones', desc: 'Baked fresh in-house each morning — crispy, golden, made to hold every scoop.' },
  { icon: '⏰', title: 'Made Fresh Daily', desc: "Small batches churned every morning. When a flavor sells out, it's gone." },
  { icon: '📖', title: 'Old World Recipe', desc: 'Every recipe brought directly from Torre del Greco in Southern Italy.' },
]

const REVIEWS = [
  { name: 'Sarah M.', text: "The pistachio gelato here is absolutely life-changing. Genuinely the best I've had outside of Italy — rich, fresh, and perfectly balanced. We drive across town just for this." },
  { name: 'James R.', text: "Discovered this gem while walking Main Street. The homemade cones alone are worth the trip. Everything tastes impossibly fresh — nothing like anything else in Scottsdale." },
  { name: 'Lucia K.', text: "If you haven't tried the Amarena Cherry gelato, you are missing out. The owners are lovely and you can tell every single batch is made with real care. A Scottsdale treasure." },
]

export default function HomePage() {
  const today = WEEK_HOURS[(new Date().getDay() + 6) % 7]

  return (
    <>
      {/* Hours banner */}
      <div className="py-2.5 px-4 text-center text-sm font-medium text-white" style={{ backgroundColor: '#4A8DB5' }}>
        <span className="inline-flex items-center gap-2 flex-wrap justify-center">
          <span className="w-2 h-2 rounded-full bg-white opacity-80 inline-block" />
          Open Today: {today.open} – {today.close}
          <span className="mx-1 opacity-40">·</span>
          <span style={{ color: 'rgba(255,255,255,0.85)' }}>7140 E Main St, Scottsdale</span>
        </span>
      </div>

      {/* Hero */}
      <section style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image src="/c-wreath.png" alt="" width={32} height={32} className="opacity-60" aria-hidden />
                <div className="h-px w-8" style={{ backgroundColor: '#4A8DB5' }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#4A8DB5' }}>
                  Scottsdale, AZ · Est. 2010
                </span>
              </div>
              <h1 className="font-playfair font-bold leading-tight mb-6" style={{ fontSize: 'clamp(2.8rem,6vw,4.5rem)', lineHeight: '1.06', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
                {"Scottsdale's"}<br />
                Best<br />
                <em className="not-italic" style={{ color: '#4A8DB5' }}>Gelato.</em>
              </h1>
              <p className="text-lg leading-relaxed mb-8 max-w-md" style={{ color: '#5A5A5A', lineHeight: '1.7' }}>
                Handcrafted daily using Old World Italian techniques and the finest natural ingredients. Born in Torre del Greco, perfected in Scottsdale.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/gelato-menu"
                  className="inline-flex items-center justify-center text-sm font-semibold text-white px-7 py-3.5 rounded transition-colors active:scale-95 hover:opacity-90"
                  style={{ backgroundColor: '#4A8DB5' }}
                >
                  See Our Menu
                </Link>
                <a
                  href="https://maps.google.com/?q=7140+E+Main+St,+Scottsdale,+AZ+85251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-sm font-semibold px-7 py-3.5 rounded transition-colors active:scale-95 hover:bg-[#4A8DB5] hover:text-white"
                  style={{ border: '2px solid #4A8DB5', color: '#4A8DB5' }}
                >
                  Get Directions
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden w-full aspect-[4/3]">
              <Image
                src="https://gelatocimmino.com/wp-content/uploads/2019/02/best-gelato.jpg"
                alt="Fresh Italian gelato at Gelato Cimmino"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="mt-10 pt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            {['★ 4.9 Google Rating', '100% Natural Ingredients', 'Homemade Cones', 'Locally Owned & Operated'].map((b) => (
              <span key={b} className="text-xs sm:text-sm font-medium uppercase tracking-wider" style={{ color: '#6B6B6B' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ backgroundColor: '#F5F7F9', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-playfair font-bold text-base mb-2" style={{ color: '#1C1C1C' }}>{f.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#6B6B6B', lineHeight: '1.65' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Flavors */}
      <section style={{ backgroundColor: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: '#4A8DB5' }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#4A8DB5' }}>Flavors</span>
            </div>
            <h2 className="font-playfair font-bold mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
              Our Gelato
            </h2>
            <p className="text-lg" style={{ color: '#6B6B6B' }}>Made fresh every day — flavors rotate seasonally</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {FEATURED.map((f) => (
              <div key={f.name} className="group rounded-xl overflow-hidden bg-white transition-shadow hover:shadow-md" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                <div className="h-24 lg:h-28 transition-transform duration-300 group-hover:scale-[1.02]" style={{ backgroundColor: f.color }} aria-hidden />
                <div className="p-4">
                  <h3 className="font-playfair font-bold text-sm leading-snug mb-1" style={{ color: '#1C1C1C' }}>{f.name}</h3>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: '#6B6B6B', lineHeight: '1.6' }}>{f.description}</p>
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full" style={{
                    backgroundColor: f.category === 'sorbetto' ? '#EAF2F8' : 'rgba(74,141,181,0.1)',
                    color: '#2E6A8F',
                  }}>
                    {f.category === 'sorbetto' ? 'Sorbetto' : f.category === 'specialty' ? 'Specialty' : 'Gelato'}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/gelato-menu" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-70" style={{ color: '#4A8DB5' }}>
              View Full Menu
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ backgroundColor: '#EAF2F8', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: '#4A8DB5' }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#4A8DB5' }}>Our Story</span>
              </div>
              <blockquote className="font-playfair italic mb-8 leading-snug" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: '#1C1C1C', letterSpacing: '-0.01em' }}>
                &ldquo;Born in Torre del Greco — where gelato isn&apos;t a dessert, it&apos;s a way of life.&rdquo;
              </blockquote>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3D3D', lineHeight: '1.75' }}>
                Mario Cimmino grew up watching his family make gelato the old-fashioned way — no shortcuts, no compromises. Every batch starts with the finest ingredients: fresh local dairy, seasonal fruit, real Sicilian pistachios, and premium dark chocolate sourced directly from Italy.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#3D3D3D', lineHeight: '1.75' }}>
                When Mario brought his family&apos;s recipes to Scottsdale, he wasn&apos;t just opening a gelato shop — he was sharing a piece of Southern Italy with the desert Southwest.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-70" style={{ color: '#4A8DB5' }}>
                Read Our Story
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                <Image src="https://gelatocimmino.com/wp-content/uploads/2019/02/core-values-our-owner.jpg" alt="Mario Cimmino, founder" fill className="object-cover object-top" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] mt-8">
                <Image src="https://gelatocimmino.com/wp-content/uploads/2019/02/core-values.jpg" alt="Gelato Cimmino shop" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: 'rgba(74,141,181,0.3)' }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#4A8DB5' }}>Reviews</span>
              <div className="h-px w-8" style={{ backgroundColor: 'rgba(74,141,181,0.3)' }} />
            </div>
            <h2 className="font-playfair font-bold" style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
              What Guests Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-white rounded-xl p-6 lg:p-7 flex flex-col" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#4A8DB5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#3D3D3D', lineHeight: '1.7' }}>&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold font-playfair" style={{ backgroundColor: 'rgba(74,141,181,0.15)', color: '#4A8DB5' }}>{r.name[0]}</div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: '#1C1C1C' }}>{r.name}</p>
                    <p className="text-xs" style={{ color: '#6B6B6B' }}>via Google</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section style={{ backgroundColor: '#F5F7F9', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: '#4A8DB5' }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#4A8DB5' }}>Location</span>
              </div>
              <h2 className="font-playfair font-bold mb-8" style={{ fontSize: 'clamp(2rem,3vw,2.8rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>Find Us</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#1C1C1C' }}>Address</h3>
                  <address className="not-italic text-sm leading-relaxed" style={{ color: '#3D3D3D' }}>
                    <p>7140 E Main St, Scottsdale, AZ 85251</p>
                    <a href="tel:4805901025" className="block mt-1 hover:text-[#4A8DB5] transition-colors" style={{ color: '#3D3D3D' }}>(480) 590-1025</a>
                  </address>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#1C1C1C' }}>Hours</h3>
                  <table className="text-sm w-full max-w-xs">
                    <tbody>
                      {WEEK_HOURS.map((h) => (
                        <tr key={h.day} style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                          <td className="py-2 pr-4 font-medium w-28" style={{ color: '#1C1C1C' }}>{h.day}</td>
                          <td className="py-2" style={{ color: '#6B6B6B' }}>{h.open} – {h.close}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-3 rounded transition-colors hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: '#4A8DB5' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  Get Directions
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(0,0,0,0.1)', minHeight: '400px' }}>
              <iframe
                title="Gelato Cimmino location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.076!2d-111.92546!3d33.49490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08d15f827e67%3A0x1bc2f813d6c5ec69!2s7140%20E%20Main%20St%2C%20Scottsdale%2C%20AZ%2085251!5e0!3m2!1sen!2sus!4v1699000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
