import Image from 'next/image'

const BADGES = [
  '★ 4.9 Google Rating',
  '100% Natural Ingredients',
  'Homemade Cones',
  'Locally Owned & Operated',
]

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: text */}
          <div>
            {/* C-wreath brand mark + label row */}
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/c-wreath.png"
                alt=""
                width={36}
                height={36}
                className="opacity-70"
                aria-hidden="true"
              />
              <div className="h-px flex-1 max-w-[40px] bg-brand" />
              <span className="font-inter text-xs text-brand tracking-widest uppercase font-semibold">
                Scottsdale, AZ · Since 2010
              </span>
            </div>

            <h1 className="font-playfair font-bold text-charcoal text-[clamp(2.5rem,6vw,4rem)] leading-[1.08] tracking-tightest mb-6">
              Authentic<br />
              Italian<br />
              <em className="not-italic text-brand">Gelato.</em>
            </h1>

            <p className="font-inter text-charcoal-light text-lg leading-body mb-8 max-w-md">
              Handcrafted daily from fresh ingredients. Old World technique,
              new world flavors — made with love in Scottsdale&apos;s Main Street Arts District.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#menu"
                className="inline-flex items-center justify-center font-inter font-semibold text-sm bg-brand text-white px-7 py-3.5 rounded hover:bg-brand-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:scale-95"
              >
                See Our Menu
              </a>
              <a
                href="https://maps.google.com/?q=7140+E+Main+St,+Scottsdale,+AZ+85251"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-inter font-semibold text-sm border-2 border-brand text-brand px-7 py-3.5 rounded hover:bg-brand hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:scale-95"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Right: gelato photo — fixed to 4/3 landscape so it doesn't crop badly */}
          <div className="relative rounded-2xl overflow-hidden w-full aspect-[4/3]">
            <Image
              src="https://gelatocimmino.com/wp-content/uploads/2019/02/best-gelato.jpg"
              alt="Fresh Italian gelato at Gelato Cimmino, Scottsdale AZ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 pt-6 border-t border-black/10">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="font-inter text-xs sm:text-sm text-charcoal-mid font-medium uppercase tracking-wider"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
