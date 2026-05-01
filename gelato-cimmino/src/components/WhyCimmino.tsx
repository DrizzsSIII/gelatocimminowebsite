const FEATURES = [
  {
    title: '100% Natural',
    description: 'No artificial flavors, colors, or preservatives — every ingredient is chosen for taste and quality.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Homemade Cones',
    description: 'Baked fresh in-house each morning — crispy, golden, and made to hold every scoop.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: 'Fresh Daily',
    description: "Small batches churned every morning. When a flavor sells out, it's gone — no reheating, no shortcuts.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Old World Recipe',
    description: 'Rooted in Southern Italian tradition — every recipe brought directly from Torre del Greco.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
]

export default function WhyCimmino() {
  return (
    <section className="bg-white py-20 lg:py-24 border-t border-black/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand" />
            <span className="font-inter text-xs text-brand tracking-widest uppercase font-semibold">Why us</span>
          </div>
          <h2 className="font-playfair font-bold text-[#1C1C1C] text-3xl lg:text-4xl tracking-tightest">
            Why Cimmino
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-[#F5F7F9] border border-black/10 rounded-xl p-6 hover:border-[#4A8DB5]/30 transition-colors"
            >
              <div className="text-[#4A8DB5] mb-4">{f.icon}</div>
              <h3 className="font-playfair font-bold text-[#1C1C1C] text-lg mb-2">{f.title}</h3>
              <p className="font-inter text-sm text-[#6B6B6B] leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
