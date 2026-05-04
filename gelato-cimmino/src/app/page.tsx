import Image from 'next/image'
import Link from 'next/link'
import { FLAVORS } from '@/lib/flavors'
import { WEEK_HOURS } from '@/lib/hours'
import { LOCATIONS } from '@/lib/locations'
import { getReviews } from '@/lib/reviews'
import { ReviewsSection } from '@/components/ReviewsSection'
import { NewsletterForm } from '@/components/NewsletterForm'

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

// Update this array to change which flavors appear in the Seasonal Favorites section.
const SEASONAL_FLAVORS = [
  { name: 'Pistachio',       desc: 'Rich and creamy, made with real Sicilian pistachios sourced directly from Italy.', border: '#6B8C5A', bg: '#f0fdf4', badge: 'Gelato',   seed: 'pistachio' },
  { name: 'Stracciatella',   desc: 'Silky cream gelato with delicate ribbons of fine dark chocolate throughout.',       border: '#3B1F0A', bg: '#fdf8f5', badge: 'Gelato',   seed: 'chocolate' },
  { name: 'Mango Sorbetto',  desc: 'Bright, dairy-free, and intensely fruity — pure Alphonso mango in every bite.',    border: '#CA8A04', bg: '#fefce8', badge: 'Sorbetto', seed: 'tropical'  },
  { name: 'Amarena Cherry',  desc: 'Wild Sicilian amarena cherries swirled through silky cream gelato.',                border: '#8B1A1A', bg: '#fff5f5', badge: 'Gelato',   seed: 'cherry'    },
]

export default async function HomePage() {
  const todayIndex = (new Date().getDay() + 6) % 7
  const today = WEEK_HOURS[todayIndex]
  const { reviews, rating, mapsUri } = await getReviews()

  return (
    <>
      {/* Hours banner */}
      <div className="py-2.5 px-4 text-center text-sm font-medium text-white" style={{ backgroundColor: '#1E3A6E' }}>
        <span className="inline-flex items-center gap-2 flex-wrap justify-center">
          <span className="w-2 h-2 rounded-full bg-white opacity-80 inline-block" />
          Open Today: {today.open} – {today.close}
          <span className="mx-1 opacity-40">·</span>
          <span style={{ color: 'rgba(255,255,255,0.85)' }}>Scottsdale &amp; Gilbert</span>
        </span>
      </div>

      {/* SECTION 1 — Hero: full-bleed background image */}
      {/* quality={90} and sizes="100vw" ensure correct responsive image resolution */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 'clamp(420px, 60vw, 560px)' }}
      >
        <Image
          src="/gelato-counter-staff.jpg"
          alt=""
          aria-hidden
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }} />

        {/* Hero text content */}
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
              <em className="not-italic" style={{ color: '#6EA8E0' }}>Gelato.</em>
            </h1>
            <p className="text-lg leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.7' }}>
              Handcrafted daily using Old World Italian techniques and the finest natural ingredients. Born in Torre del Greco, perfected in Scottsdale.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#flavors"
                className="inline-flex items-center justify-center text-sm font-semibold text-white px-7 py-3.5 rounded transition-colors active:scale-95 hover:opacity-90"
                style={{ backgroundColor: '#1E3A6E' }}
              >
                View Flavors
              </a>
              <a
                href="#locations"
                className="inline-flex items-center justify-center text-sm font-semibold px-7 py-3.5 rounded transition-colors active:scale-95 hover:bg-white hover:text-[#1C1C1C]"
                style={{ border: '2px solid rgba(255,255,255,0.7)', color: '#ffffff' }}
              >
                Find a Location
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 3 — Features / trust badges bar inside hero */}
        {/* Badge image: 40×40, flex-shrink-0, object-contain, vertical-align middle */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}
        >
          <span className="text-xs sm:text-sm font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.75)' }}>{`★ ${rating} Google Rating`}</span>
          <span className="inline-flex items-center gap-2">
            <Image
              src="/gelato-100-natural-badge.jpg"
              alt="100% Natural certified"
              width={40}
              height={40}
              className="rounded flex-shrink-0 object-contain"
              style={{ verticalAlign: 'middle' }}
            />
            <span className="text-xs sm:text-sm font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.75)' }}>100% Natural Ingredients</span>
          </span>
          <span className="text-xs sm:text-sm font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.75)' }}>Homemade Cones</span>
          <span className="text-xs sm:text-sm font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.75)' }}>Locally Owned &amp; Operated</span>
        </div>
      </section>

      {/* SECTION 2 — Photo strip: 3-up grid with gap, 2-up on mobile with 3rd hidden */}
      <div style={{ backgroundColor: '#ffffff', padding: '6px' }}>
        <div
          className="grid grid-cols-2 sm:grid-cols-3"
          style={{ gap: '6px', maxWidth: '100%' }}
        >
          <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <Image
              src="/gelato-shop-interior.jpg"
              alt="Gelato Cimmino shop interior"
              fill={false}
              width={800}
              height={600}
              loading="lazy"
              quality={85}
              sizes="(max-width: 640px) 50vw, 33vw"
              className="w-full h-full object-cover block"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
          <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <Image
              src="/gelato-made-fresh.jpg"
              alt="Gelato being made fresh in house"
              fill={false}
              width={800}
              height={600}
              loading="lazy"
              quality={85}
              sizes="(max-width: 640px) 50vw, 33vw"
              className="w-full h-full object-cover block"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
          {/* Third image hidden on mobile, visible sm+ */}
          <div className="hidden sm:block overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <Image
              src="/gelato-shop-atmosphere.jpg"
              alt="Inside Gelato Cimmino Scottsdale"
              fill={false}
              width={800}
              height={600}
              loading="lazy"
              quality={85}
              sizes="33vw"
              className="w-full h-full object-cover block"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
        </div>
      </div>

      {/* Features grid — 4 cards */}
      <section style={{ backgroundColor: '#F5F7F9', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
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

      {/* Seasonal Favorites — update SEASONAL_FLAVORS const to change cards */}
      <section style={{ backgroundColor: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: '#1E3A6E' }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#1E3A6E' }}>Seasonal Picks</span>
              </div>
              <h2 className="font-playfair font-bold" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
                Seasonal Favorites
              </h2>
              <p className="mt-2 text-base" style={{ color: '#6B6B6B' }}>What&apos;s churning this season — available at both locations</p>
            </div>
            <Link href="/gelato-menu" className="inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors hover:opacity-70 flex-shrink-0" style={{ color: '#1E3A6E' }}>
              Full Menu
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {SEASONAL_FLAVORS.map((f) => (
              <div
                key={f.name}
                className="rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: f.bg, border: `1px solid rgba(0,0,0,0.07)` }}
              >
                <div className="w-full" style={{ height: '8px', backgroundColor: f.border }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/${f.seed}-seasonal/400/280`}
                  alt={`${f.name} gelato`}
                  loading="lazy"
                  className="w-full block object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-playfair font-bold text-sm leading-snug" style={{ color: '#1C1C1C' }}>{f.name}</h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(30,58,110,0.12)', color: '#142857' }}>
                      {f.badge}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: '#6B6B6B', lineHeight: '1.65' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Featured Flavors grid */}
      <section id="flavors" style={{ backgroundColor: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: '#1E3A6E' }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#1E3A6E' }}>Flavors</span>
            </div>
            <h2 className="font-playfair font-bold mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
              Our Gelato
            </h2>
            <p className="text-lg" style={{ color: '#6B6B6B' }}>Made fresh every day — flavors rotate seasonally</p>
          </div>
          {/* Card grid: 1fr on small mobile, 2 cols tablet, 4 cols desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: '1.25rem' }}>
            {FEATURED.map((f) => {
              const accent = flavorAccents[f.name] ?? { border: '#1E3A6E', bg: '#ffffff' }
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
                    className="w-full block object-cover"
                    style={{ aspectRatio: '3/2' }}
                  />
                  <div className="p-4">
                    <h3 className="font-playfair font-bold text-sm leading-snug mb-1" style={{ color: '#1C1C1C' }}>{f.name}</h3>
                    <p className="text-xs leading-relaxed mb-3" style={{ color: '#6B6B6B', lineHeight: '1.6' }}>{f.description}</p>
                    <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full" style={{
                      backgroundColor: f.category === 'sorbetto' ? '#EAF2F8' : 'rgba(30,58,110,0.1)',
                      color: '#142857',
                    }}>
                      {f.category === 'sorbetto' ? 'Sorbetto' : f.category === 'specialty' ? 'Specialty' : 'Gelato'}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
          {/* "View Full Menu" button */}
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link href="/gelato-menu" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-70" style={{ color: '#1E3A6E' }}>
              View Full Menu
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Our Story: 2-column layout, single image on right */}
      {/* Left (55%): text. Right (45%): gelato-happy-customer.jpg only at 440px height */}
      {/* gelato-qualita-semplice-italian.jpg is removed from here — it belongs in philosophy only */}
      <section id="story" style={{ backgroundColor: '#EAF2F8', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            {/* Left column — text */}
            <div className="flex-1 md:pr-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: '#1E3A6E' }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#1E3A6E' }}>Our Story</span>
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
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-70" style={{ color: '#1E3A6E' }}>
                Read Our Story
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            {/* Right column — single image, 440px desktop / 280px mobile */}
            <div className="w-full md:w-auto md:flex-shrink-0" style={{ width: undefined }}>
              <div
                className="relative rounded-xl overflow-hidden w-full"
                style={{ height: 'clamp(280px, 40vw, 440px)', minWidth: 0, maxWidth: '540px' }}
              >
                <Image
                  src="/gelato-happy-customer.jpg"
                  alt="Happy customer enjoying Gelato Cimmino"
                  fill
                  quality={85}
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Philosophy / quote: centered, max-w 800px, images as object-contain side by side */}
      {/* gelato-qualita-semplice-italian.jpg appears ONCE here (left slot) */}
      {/* gelato-simple-quality-english.jpg in right slot */}
      <section style={{ backgroundColor: '#1C1C1C' }}>
        <div
          className="mx-auto px-6 text-center"
          style={{ maxWidth: '800px', paddingTop: '4rem', paddingBottom: '4rem' }}
        >
          {/* Image row */}
          <div
            className="flex flex-wrap justify-center items-center"
            style={{ gap: '2rem', marginBottom: '2rem' }}
          >
            <Image
              src="/gelato-qualita-semplice-italian.jpg"
              alt="Qualitá Semplice signage in Italian"
              width={320}
              height={240}
              quality={90}
              sizes="(max-width: 640px) 90vw, 320px"
              className="rounded-lg object-contain w-full"
              style={{ maxWidth: '320px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
            />
            <Image
              src="/gelato-simple-quality-english.jpg"
              alt="Simple Quality — Genuine Product"
              width={320}
              height={240}
              quality={90}
              sizes="(max-width: 640px) 90vw, 320px"
              className="rounded-lg object-contain w-full"
              style={{ maxWidth: '320px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
            />
          </div>
          {/* Text below images */}
          <p
            className="font-semibold uppercase"
            style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.45)', marginTop: '1.5rem', marginBottom: '0.75rem' }}
          >
            Our Philosophy
          </p>
          <p className="font-playfair italic" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: '#ffffff', letterSpacing: '-0.01em' }}>
            &ldquo;Simple quality. Genuine product.&rdquo;
          </p>
        </div>
      </section>

      {/* Testimonials / Reviews */}
      <section style={{ backgroundColor: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: 'rgba(30,58,110,0.3)' }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#1E3A6E' }}>Reviews</span>
              <div className="h-px w-8" style={{ backgroundColor: 'rgba(30,58,110,0.3)' }} />
            </div>
            <h2 className="font-playfair font-bold" style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
              What Guests Say
            </h2>
          </div>
          <ReviewsSection reviews={reviews} mapsUri={mapsUri} />
        </div>
      </section>

      {/* Two Locations — data lives in src/lib/locations.ts */}
      <section id="locations" style={{ backgroundColor: '#F5F7F9', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: '#1E3A6E' }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#1E3A6E' }}>Find Us</span>
              <div className="h-px w-8" style={{ backgroundColor: '#1E3A6E' }} />
            </div>
            <h2 className="font-playfair font-bold" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
              Two Locations
            </h2>
            <p className="mt-3 text-base" style={{ color: '#6B6B6B' }}>Same recipe. Same quality. Now closer to you.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-2xl overflow-hidden flex flex-col"
                style={{ border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}
              >
                {/* Card header */}
                <div className="px-7 pt-7 pb-5" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-playfair font-bold" style={{ fontSize: '1.5rem', color: '#1C1C1C', letterSpacing: '-0.01em' }}>
                      {loc.name}
                    </h3>
                    {loc.isComingSoon && (
                      <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(30,58,110,0.12)', color: '#142857' }}>
                        Opening Soon
                      </span>
                    )}
                  </div>
                  <p className="text-sm" style={{ color: '#6B6B6B' }}>Gelato Cimmino · {loc.cityStateZip.split(',')[1]?.trim()}</p>
                </div>

                {/* Map embed — Scottsdale only; Gilbert shows placeholder */}
                {loc.mapsEmbed ? (
                  <div style={{ height: '220px' }}>
                    <iframe
                      title={`Gelato Cimmino ${loc.name} map`}
                      src={loc.mapsEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0, display: 'block' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                ) : (
                  <div
                    className="flex flex-col items-center justify-center gap-3"
                    style={{ height: '220px', backgroundColor: '#EAF2F8' }}
                  >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1E3A6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <p className="text-sm font-medium" style={{ color: '#1E3A6E' }}>Gilbert location coming soon</p>
                  </div>
                )}

                {/* Card body */}
                <div className="px-7 py-6 flex-1 flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#1C1C1C' }}>Address</p>
                      <address className="not-italic text-sm leading-relaxed" style={{ color: '#3D3D3D' }}>
                        <p>{loc.address}</p>
                        <p>{loc.cityStateZip}</p>
                      </address>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#1C1C1C' }}>Phone</p>
                      {loc.phoneRaw ? (
                        <a href={`tel:${loc.phoneRaw}`} className="text-sm transition-colors hover:text-[#1E3A6E]" style={{ color: '#3D3D3D' }}>
                          {loc.phone}
                        </a>
                      ) : (
                        <p className="text-sm" style={{ color: '#9A9A9A' }}>{loc.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* SECTION 7 — Hours table with proper Today badge structure */}
                  {/* Day name and badge are in SEPARATE elements — never concatenated */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#1C1C1C' }}>Hours</p>
                    {loc.id === 'scottsdale' ? (
                      <table className="text-sm w-full">
                        <tbody>
                          {WEEK_HOURS.map((h, i) => (
                            <tr key={h.day} style={{ borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                              <td className="py-1.5 font-medium" style={{ color: '#1C1C1C' }}>
                                {/* Day name and Today badge are always separate elements */}
                                <span>{h.day}</span>
                                {i === todayIndex && (
                                  <span
                                    className="inline-block ml-1.5 font-semibold text-white rounded-full"
                                    style={{
                                      fontSize: '0.65rem',
                                      backgroundColor: '#1E3A6E',
                                      padding: '1px 6px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Today
                                  </span>
                                )}
                              </td>
                              <td className="py-1.5 text-right" style={{ color: i === todayIndex ? '#1C1C1C' : '#6B6B6B', fontWeight: i === todayIndex ? 600 : undefined }}>
                                {h.open} – {h.close}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div className="space-y-1">
                        {loc.hours.map((h) => (
                          <div key={h.days} className="flex justify-between text-sm">
                            <span style={{ color: '#6B6B6B' }}>{h.days}</span>
                            <span className="font-medium" style={{ color: '#1C1C1C' }}>{h.time}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 mt-auto pt-2">
                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-4 py-3 rounded-lg transition-opacity hover:opacity-90 active:scale-95"
                      style={{ backgroundColor: '#1E3A6E' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      Get Directions
                    </a>
                    {loc.phoneRaw ? (
                      <a
                        href={`tel:${loc.phoneRaw}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-3 rounded-lg transition-colors hover:bg-[#1E3A6E] hover:text-white"
                        style={{ border: '1.5px solid rgba(0,0,0,0.15)', color: '#3D3D3D' }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
                        Call
                      </a>
                    ) : (
                      <span
                        className="flex-1 inline-flex items-center justify-center text-sm font-medium px-4 py-3 rounded-lg"
                        style={{ border: '1.5px solid rgba(0,0,0,0.08)', color: '#9A9A9A', cursor: 'not-allowed' }}
                      >
                        Call — Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter — wire up to email provider in NewsletterForm.tsx */}
      <section style={{ backgroundColor: '#EAF2F8', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8" style={{ backgroundColor: 'rgba(30,58,110,0.4)' }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#1E3A6E' }}>Stay in the Loop</span>
            <div className="h-px w-8" style={{ backgroundColor: 'rgba(30,58,110,0.4)' }} />
          </div>
          <h2 className="font-playfair font-bold mb-3" style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
            Stay Updated on Seasonal Flavors
          </h2>
          <p className="text-base mb-8" style={{ color: '#6B6B6B', lineHeight: '1.7' }}>
            Get updates on new flavors, specials, and events at both locations.
          </p>
          <NewsletterForm />
          <p className="text-xs mt-4" style={{ color: '#8A8A8A' }}>No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  )
}
