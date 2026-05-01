import type { Metadata } from 'next'
import { WEEK_HOURS } from '@/lib/hours'

export const metadata: Metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <>
      <div style={{ backgroundColor: '#F5F7F9', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#4A8DB5' }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#4A8DB5' }}>Contact</span>
          </div>
          <h1 className="font-playfair font-bold mb-3" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', color: '#1C1C1C', letterSpacing: '-0.02em' }}>
            Find Us
          </h1>
          <p className="text-lg max-w-xl" style={{ color: '#6B6B6B' }}>
            Come visit us in Scottsdale&apos;s Main Street Arts District.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#1C1C1C' }}>Address</h2>
                <address className="not-italic text-base leading-relaxed" style={{ color: '#3D3D3D' }}>
                  <p>7140 E Main St</p>
                  <p>Scottsdale, AZ 85251</p>
                </address>
              </div>

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#1C1C1C' }}>Phone & Email</h2>
                <div className="space-y-2 text-base">
                  <a href="tel:4805901025" className="block transition-colors hover:text-[#4A8DB5]" style={{ color: '#3D3D3D' }}>(480) 590-1025</a>
                  <a href="mailto:gelatocimmino@gmail.com" className="block transition-colors hover:text-[#4A8DB5]" style={{ color: '#3D3D3D' }}>gelatocimmino@gmail.com</a>
                </div>
              </div>

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#1C1C1C' }}>Hours</h2>
                <table className="text-sm w-full max-w-xs">
                  <tbody>
                    {WEEK_HOURS.map((h) => (
                      <tr key={h.day} style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                        <td className="py-2.5 pr-4 font-medium w-28" style={{ color: '#1C1C1C' }}>{h.day}</td>
                        <td className="py-2.5" style={{ color: '#6B6B6B' }}>{h.open} – {h.close}</td>
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
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Get Directions on Google Maps
              </a>
            </div>

            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(0,0,0,0.1)', minHeight: '480px' }}>
              <iframe
                title="Gelato Cimmino — 7140 E Main St, Scottsdale, AZ"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.076!2d-111.92546!3d33.49490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08d15f827e67%3A0x1bc2f813d6c5ec69!2s7140%20E%20Main%20St%2C%20Scottsdale%2C%20AZ%2085251!5e0!3m2!1sen!2sus!4v1699000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '480px', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
