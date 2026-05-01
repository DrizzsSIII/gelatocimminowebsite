const REVIEWS = [
  {
    text: "The pistachio gelato here is absolutely life-changing. Genuinely the best I've had outside of Italy — rich, fresh, and perfectly balanced. We drive across town just for this.",
    name: 'Sarah M.',
  },
  {
    text: "Discovered this gem while walking Main Street. The homemade cones alone are worth the trip. Everything tastes impossibly fresh — nothing like anything else in Scottsdale.",
    name: 'James R.',
  },
  {
    text: "If you haven't tried the Amarena Cherry gelato, you are missing out. The owners are lovely and you can tell every single batch is made with real care. A Scottsdale treasure.",
    name: 'Lucia K.',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#4A8DB5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-brand-pale py-20 lg:py-24 border-t border-charcoal/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand/30" />
            <span className="font-inter text-xs text-brand tracking-widest uppercase font-semibold">Reviews</span>
            <div className="h-px w-8 bg-brand/30" />
          </div>
          <h2 className="font-playfair font-bold text-charcoal text-3xl lg:text-4xl tracking-tightest">
            What Guests Say
          </h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible snap-x snap-mandatory scrollbar-hide">
          {REVIEWS.map((review, i) => (
            <article
              key={i}
              className="bg-white rounded-xl p-5 lg:p-7 min-w-[82vw] sm:min-w-[340px] lg:min-w-0 flex-shrink-0 lg:flex-shrink snap-start border border-charcoal/10 hover:border-brand/25 transition-colors flex flex-col"
            >
              <Stars />
              <p className="font-inter text-sm text-charcoal-mid leading-relaxed mt-4 mb-5 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-brand/15 flex items-center justify-center flex-shrink-0">
                  <span className="font-playfair font-bold text-brand text-xs">{review.name[0]}</span>
                </div>
                <div>
                  <p className="font-inter font-semibold text-xs text-charcoal">{review.name}</p>
                  <p className="font-inter text-xs text-charcoal-light">via Google</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
