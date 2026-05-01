import { WEEK_HOURS } from '@/lib/hours'

export default function FindUs() {
  return (
    <section id="find-us" className="bg-white py-20 lg:py-28 border-t border-charcoal/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand" />
            <span className="font-inter text-xs text-brand tracking-widest uppercase font-semibold">Location</span>
          </div>
          <h2 className="font-playfair font-bold text-charcoal text-3xl lg:text-4xl tracking-tightest">
            Find Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          <div className="space-y-8">
            <div>
              <h3 className="font-inter font-semibold text-[#1C1C1C] text-xs uppercase tracking-widest mb-3">Address</h3>
              <address className="not-italic font-inter text-[#3D3D3D] text-sm leading-relaxed">
                <p>7140 E Main St</p>
                <p>Scottsdale, AZ 85251</p>
                <a
                  href="tel:4805901025"
                  className="hover:text-[#4A8DB5] transition-colors mt-1 inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A8DB5] rounded"
                  style={{ color: '#3D3D3D' }}
                >
                  (480) 590-1025
                </a>
              </address>
            </div>

            <div>
              <h3 className="font-inter font-semibold text-[#1C1C1C] text-xs uppercase tracking-widest mb-3">Hours</h3>
              <table className="w-full font-inter text-sm border-collapse">
                <tbody>
                  {WEEK_HOURS.map((h) => (
                    <tr key={h.day} className="border-b border-black/[0.08] last:border-0">
                      <td className="py-2 pr-4 text-[#1C1C1C] font-medium w-32">{h.day}</td>
                      <td className="py-2" style={{ color: '#6B6B6B' }}>{h.open} – {h.close}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <a
              href="https://maps.google.com/?q=7140+E+Main+St,+Scottsdale,+AZ+85251"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-inter text-sm font-semibold bg-brand text-white px-5 py-3 rounded hover:bg-brand-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:scale-95"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Get Directions
            </a>
          </div>

          <div className="rounded-xl overflow-hidden border border-charcoal/10 min-h-[360px] lg:min-h-[460px]">
            <iframe
              title="Gelato Cimmino — 7140 E Main St, Scottsdale, AZ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.076!2d-111.92546!3d33.49490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08d15f827e67%3A0x1bc2f813d6c5ec69!2s7140%20E%20Main%20St%2C%20Scottsdale%2C%20AZ%2085251!5e0!3m2!1sen!2sus!4v1699000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
