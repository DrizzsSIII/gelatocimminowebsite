import Image from 'next/image'
import Link from 'next/link'
import { FLAVORS } from '@/lib/flavors'
import { WEEK_HOURS } from '@/lib/hours'
import { getReviews } from '@/lib/reviews'
import { ReviewsSection } from '@/components/ReviewsSection'

export const revalidate = 86400

const FEATURED = FLAVORS.filter((f) =>
  ['Pistachio', 'Hazelnut & Nutella', 'Amarena Cherry', 'Dark Chocolate', 'Lemon', 'Strawberry', 'Peanut Butter Cup', 'Coconut'].includes(f.name)
)

const flavorAccents: Record<string, { border: string; bg: string }> = {
  'Amarena Cherry':     { border: '#8B1A1A', bg: '#fff5f5' },
  'Coconut':            { border: '#94a3b8', bg: '#f8fafc' },
  'Dark Chocolate':     { border: '#3B1F0A', bg: '#fdf8f5' },
  'Hazelnut & Nutella': { border: '#8B5E3C', bg: '#fdf6ee' },
  'Peanut Butter Cup':  { border: '#C4793A', bg: '#fff7ed' },
  'Pistachio':          { border: '#6B8C5A', bg: '#f0fdf4' },
  'Lemon':              { border: '#ca8a04', bg: '#fefce8' },
  'Strawberry':         { border: '#e11d48', bg: '#fff1f2' },
}

const FEATURES = [
  {
    title: '100% Natural',
    desc: 'No artificial flavors, colors, or preservatives — every ingredient chosen for taste and quality.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B1F0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12"/>
        <path d="M12 12C12 7 8 4 4 4c0 4 2 8 8 8z"/>
        <path d="M12 12c0-5 4-8 8-8-1 4-4 8-8 8z"/>
      </svg>
    ),
  },
  {
    title: 'Homemade Cones',
    desc: 'Baked fresh in-house each morning — crispy, golden, made to hold every scoop.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B1F0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 10l5 12 5-12"/>
        <path d="M5 10h14"/>
        <path d="M8 6a4 4 0 018 0"/>
      </svg>
    ),
  },
  {
    title: 'Made Fresh Daily',
    desc: "Small batches churned every morning. When a flavor sells out, it's gone.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B1F0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v5l3 3"/>
      </svg>
    ),
  },
  {
    title: 'Old World Recipe',
    desc: 'Every recipe brought directly from Torre del Greco in Southern Italy.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B1F0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
      </svg>
    ),
  },
]

// Placeholder images from picsum.photos (deterministic per seed).
// source.unsplash.com was discontinued June 2022 — replace with real gelato photography when available.
const flavorImageSeeds: Record<string, string> = {
  'Amarena Cherry':     'cherry',
  'Coconut':            'coconut',
  'Dark Chocolate':     'chocolate',
  'Hazelnut & Nutella': 'hazelnut',
  'Peanut Butter Cup':  'peanutbutter',
  'Pistachio':          'pistachio',
  'Lemon':              'lemon',
  'Strawberry':         'strawberry',
}

export default async function HomePage() {
  const todayIndex = (new Date().getDay() + 6) % 7
  const today = WEEK_HOURS[todayIndex]
  const { reviews, rating, mapsUri } = await getReviews()

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

      {/* Hero — full-bleed background image */}
      <section className="relative overflow-hidden" style={{ minHeight: '580px' }}>
        <Image
          src="/gelato-counter-staff.jpg"
          alt=""
          aria-hidden
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 lg:pt-24 lg:pb-14">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/c-wreath.png" alt="" width={32} height={32} className="opacity-80" aria-hidden />
              <div className="h-px w-8 bg-white/40" />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Scottsdale, AZ · Est. 2010
              </span>
            </div>
            <h1 className="font-playfair font-bold leading-tight mb-6" style={{ fontSize: 'clamp(2.8rem,6vw,4.5rem)', lineHeight: '1.06', color: '#ffffff', letterSpacing: '-0.02em' }}>
              {"Scottsdale's"}<br />
              Best<br />
              <em className="not-italic" style={{ color: '#7EC8E3' }}>Gelato.</em>
            </h1>
            <p className="text-lg leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.7' }}>
              Handcrafted daily using Old World Italian techniques and the finest natural ingredients. Born in Torre del Greco, perfected in Scottsdale.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#flavors"
                className="inline-flex items-center justify-center text-sm font-semibold text-white px-7 py-3.5 rounded transition-colors active:scale-95 hover:opacity-90"
                style={{ backgroundColor: '#4A8DB5' }}
              >
                See Our Menu
              </a>
              <a
                href="https://maps.google.com/?q=7140+E+Main+St,+Scottsdale,+AZ+85251"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm font-semibold px-7 py-3.5 rounded transition-colors active:scale-95 hover:bg-white hover:text-[#1C1C1C]"
                style={{ border: '2px solid rgba(255,255,255,0.7)', color: '#ffffff' }}
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
          <span className="text-xs sm:text-sm font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.75)' }}>{`★ ${rating} Google Rating`}</span>
          <span className="inline-flex items-center gap-2">
            <Image src="/gelato-100-natural-badge.jpg" alt="100% Natural certified" width={52} height={52} className="rounded object-contain" />
            <span className="text-xs sm:text-sm font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.75)' }}>100% Natural Ingredients</span>
          </span>
          <span className="text-xs sm:text-sm font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.75)' }}>Homemade Cones</span>
          <span className="text-xs sm:text-sm font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.75)' }}>Locally Owned &amp; Operated</span>
        </div>
      </section>

      {/* Photo strip */}
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: '4px' }}>
          <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <Image src="/gelato-shop-interior.jpg" alt="Gelato Cimmino shop interior" width={600} height={450} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <Image src="/gelato-made-fresh.jpg" alt="Gelato being made fresh in house" width={600} height={450} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <Image src="/gelato-shop-atmosphere.jpg" alt="Inside Gelato Cimmino Scottsdale" width={600} height={450} loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Features */}
      <section style={{ backgroundColor: '#F5F7F9', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                <div className="mb-3">{f.icon}</div>
                <h3 className="font-playfair font-bold text-base mb-2" style={{ color: '#1C1C1C' }}>{f.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#6B6B6B', lineHeight: '1.65' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Flavors */}
      <section id="flavors" style={{ backgroundColor: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
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
            {FEATURED.map((f) => {
              const accent = flavorAccents[f.name] ?? { border: '#4A8DB5', bg: '#ffffff' }
              const seed = flavorImageSeeds[f.name] ?? f.name.toLowerCase()
              return (
                <div
                  key={f.name}
                  className="rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    border: '1px solid rgba(0,0,0,0.08)',
                    borderTop: `4px solid ${accent.border}`,
                    backgroundColor: accent.bg,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://picsum.photos/seed/${seed}/400/267`}
                    alt={`${f.name} gelato`}
                    loading="lazy"
                    className="w-full object-cover"
                    style={{ aspectRatio: '3/2' }}
                  />
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
              )
            })}
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
      <section id="story" style={{ backgroundColor: '#EAF2F8', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
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
              <div className="relative rounded-xl overflow-hidden" style={{ height: '320px' }}>
                <Image src="/gelato-happy-customer.jpg" alt="Happy customer enjoying Gelato Cimmino" fill className="object-cover object-center" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="relative rounded-xl overflow-hidden mt-8" style={{ height: '320px' }}>
                <Image src="/gelato-qualita-semplice-italian.jpg" alt="Qualitá Semplice — Simple Quality, Genuine Product" fill className="object-cover object-center" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section style={{ backgroundColor: '#1C1C1C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="rounded-xl overflow-hidden" style={{ height: '280px', position: 'relative' }}>
              <Image src="/gelato-qualita-semplice-italian.jpg" alt="Qualitá Semplice signage in Italian" fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, 50vw" />
            </div>
            <div className="rounded-xl overflow-hidden" style={{ height: '280px', position: 'relative' }}>
              <Image src="/gelato-simple-quality-english.jpg" alt="Simple Quality — Genuine Product" fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, 50vw" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.45)' }}>Our Philosophy</p>
            <p className="font-playfair italic" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: '#ffffff', letterSpacing: '-0.01em' }}>
              &ldquo;Simple quality. Genuine product.&rdquo;
            </p>
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
          <ReviewsSection reviews={reviews} mapsUri={mapsUri} />
        </div>
      </section>

      {/* Find Us */}
      <section id="find-us" style={{ backgroundColor: '#F5F7F9', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
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
                      {WEEK_HOURS.map((h, i) => (
                        <tr
                          key={h.day}
                          style={{
                            borderBottom: '1px solid rgba(0,0,0,0.06)',
                            backgroundColor: i === todayIndex ? '#f0fdf4' : undefined,
                          }}
                        >
                          <td className="py-2 font-medium">
                            <span className="flex items-center gap-2">
                              <span>{h.day}</span>
                              {i === todayIndex && (
                                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">
                                  Today
                                </span>
                              )}
                            </span>
                          </td>
                          <td className="py-2" style={{ color: i === todayIndex ? '#1C1C1C' : '#6B6B6B', fontWeight: i === todayIndex ? 600 : undefined }}>{h.open} – {h.close}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <a
                  href="https://maps.google.com/?q=7140+E+Main+St,+Scottsdale,+AZ+85251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-3 rounded transition-colors hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: '#4A8DB5' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  Get Directions
                </a>
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
