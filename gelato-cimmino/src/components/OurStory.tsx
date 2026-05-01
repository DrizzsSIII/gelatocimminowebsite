import Image from 'next/image'

export default function OurStory() {
  return (
    <section id="story" className="bg-brand-pale py-20 lg:py-28 border-t border-charcoal/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: pull quote + owner photo */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-brand" />
              <span className="font-inter text-xs text-brand tracking-widest uppercase font-semibold">Our Story</span>
            </div>

            <blockquote className="font-playfair italic text-charcoal text-[clamp(1.6rem,3.5vw,2.6rem)] leading-snug tracking-tightest mb-10">
              &ldquo;Born in Torre del Greco, Southern Italy — where gelato isn&apos;t a dessert, it&apos;s a way of life.&rdquo;
            </blockquote>

            {/* Owner photo */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
              <Image
                src="https://gelatocimmino.com/wp-content/uploads/2019/02/core-values-our-owner.jpg"
                alt="Mario Cimmino, founder of Gelato Cimmino"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand/15 flex items-center justify-center flex-shrink-0">
                <span className="font-playfair font-bold text-brand">M</span>
              </div>
              <div>
                <p className="font-inter font-semibold text-charcoal text-sm">Mario Cimmino</p>
                <p className="font-inter text-xs text-charcoal-light mt-0.5">Founder &amp; Master Gelatiere</p>
              </div>
            </div>
          </div>

          {/* Right: story copy */}
          <div className="lg:pt-16">
            <p className="font-inter text-charcoal-mid text-base leading-body mb-5">
              Mario Cimmino grew up watching his family make gelato the old-fashioned way — no shortcuts, no compromises. Every batch starts with the finest ingredients: fresh local dairy, seasonal fruit, real Sicilian pistachios, and premium dark chocolate sourced from Italy.
            </p>
            <p className="font-inter text-charcoal-mid text-base leading-body mb-5">
              When Mario brought his family&apos;s recipes to Scottsdale&apos;s Main Street Arts District, he wasn&apos;t just opening a gelato shop — he was sharing a piece of Southern Italy with the desert Southwest. Today, every scoop is still made by hand, every single day, the same way it was back home in Torre del Greco.
            </p>
            <p className="font-inter text-charcoal-mid text-base leading-body mb-8">
              Come visit us. Taste the difference that tradition makes.
            </p>

            {/* Core values photo */}
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-8">
              <Image
                src="https://gelatocimmino.com/wp-content/uploads/2019/02/core-values.jpg"
                alt="Gelato Cimmino core values — quality, tradition, freshness"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <a
              href="#find-us"
              className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-brand hover:text-brand-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand rounded"
            >
              Visit Us
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
