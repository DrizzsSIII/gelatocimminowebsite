'use client'
import { useState } from 'react'

const FAQS = [
  { q: 'What is the difference between gelato and ice cream?', a: "Gelato is made with more milk and less cream than ice cream, and contains less air — making it denser, richer, and more intensely flavored. It's also served at a slightly warmer temperature, giving it a silkier texture." },
  { q: 'Are your flavors made fresh every day?', a: "Yes. Every batch of gelato is churned fresh each morning. When a flavor sells out for the day, it's gone — we never reheat or serve yesterday's gelato." },
  { q: 'Do you have dairy-free options?', a: "Yes! Our sorbetto flavors — Blueberry, Lemon, Raspberry, and Strawberry — are completely dairy-free and vegan-friendly, made entirely from fresh fruit." },
  { q: 'Are any flavors gluten-free?', a: "The majority of our flavors are gluten-free. However, some specialty items (like Cimmino Rock) may contain gluten. Please ask our team when you visit and we'll help you choose safely." },
  { q: 'Where do your ingredients come from?', a: "We source key ingredients directly from Italy — hazelnuts from Giffoni, walnuts from Sorrento, and premium chocolates from Italian producers. Our milk and dairy come from quality local suppliers." },
  { q: 'Do you offer coffee drinks?', a: "Yes! We offer authentic Italian espresso drinks including Caffè Affogato (espresso over gelato), Caffè del Nonno, cappuccino, and more. Visit our Coffee & Drinks page for the full menu." },
  { q: 'Do you do catering or events?', a: "We love bringing gelato to events! Contact us at gelatocimmino@gmail.com or call (480) 590-1025 to discuss catering options for your event." },
  { q: 'What are your hours?', a: "We are open Monday–Wednesday 10 AM–9 PM, Thursday–Saturday 10 AM–10 PM, and Sunday 10 AM–9 PM." },
]

export default function FAQsClient() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
      <div style={{ backgroundColor: '#F5F7F9', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#1E3A6E' }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#1E3A6E' }}>About Us</span>
          </div>
          <h1 className="font-playfair font-bold mb-3" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-lg max-w-xl" style={{ color: '#6B6B6B' }}>
            Everything you&apos;ve wanted to know about gelato, our ingredients, and our shop.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
                  style={{ backgroundColor: open === i ? '#EAF2F8' : '#ffffff' }}
                >
                  <span className="font-semibold text-sm pr-4" style={{ color: '#1C1C1C' }}>{faq.q}</span>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E3A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="flex-shrink-0 transition-transform duration-200"
                    style={{ transform: open === i ? 'rotate(180deg)' : '' }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: '#5A5A5A', lineHeight: '1.75' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
