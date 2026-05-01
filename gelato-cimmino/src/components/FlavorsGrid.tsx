import { FLAVORS } from '@/lib/flavors'

export default function FlavorsGrid() {
  return (
    <section id="menu" className="bg-[#F5F7F9] py-20 lg:py-28 border-t border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#4A8DB5]" />
            <span className="font-inter text-xs text-[#4A8DB5] tracking-widest uppercase font-semibold">Flavors</span>
          </div>
          <h2 className="font-playfair font-bold text-[#1C1C1C] text-4xl lg:text-5xl tracking-tightest mb-3">
            Our Gelato
          </h2>
          <p className="font-inter text-[#6B6B6B] text-lg">
            Made fresh every day — flavors rotate seasonally
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {FLAVORS.map((flavor) => (
            <div
              key={flavor.name}
              className="group rounded-xl overflow-hidden border border-black/10 bg-white hover:border-[#4A8DB5]/30 hover:shadow-sm transition-all"
            >
              <div
                className="h-24 lg:h-28 w-full transition-transform duration-300 group-hover:scale-[1.02]"
                style={{ backgroundColor: flavor.color }}
                aria-hidden="true"
              />
              <div className="p-4">
                <h3 className="font-playfair font-bold text-[#1C1C1C] text-base leading-snug mb-1">
                  {flavor.name}
                </h3>
                <p className="font-inter text-xs text-[#6B6B6B] leading-relaxed mb-3">
                  {flavor.description}
                </p>
                <span
                  className={`inline-block text-xs font-inter font-semibold px-2.5 py-1 rounded-full ${
                    flavor.category === 'sorbetto'
                      ? 'bg-[#EAF2F8] text-[#2E6A8F]'
                      : 'bg-[#4A8DB5]/10 text-[#2E6A8F]'
                  }`}
                >
                  {flavor.category === 'sorbetto' ? 'Sorbetto' : flavor.category === 'specialty' ? 'Specialty' : 'Gelato'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#find-us"
            className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-[#4A8DB5] hover:text-[#2E6A8F] transition-colors"
          >
            See Full Menu
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
