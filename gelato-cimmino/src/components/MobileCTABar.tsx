'use client'

// Mobile-only sticky bottom bar. Only visible on screens below md breakpoint.
// "Call" dials the Scottsdale location. "Locations" scrolls to the #locations section.
export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex" style={{ backgroundColor: '#1C1C1C', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <a
        href="tel:4805901025"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3.5 text-white transition-colors hover:bg-white/10 active:bg-white/20"
        style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
        </svg>
        <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>Call Us</span>
      </a>
      <a
        href="#locations"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3.5 text-white transition-colors hover:bg-white/10 active:bg-white/20"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>Locations</span>
      </a>
    </div>
  )
}
