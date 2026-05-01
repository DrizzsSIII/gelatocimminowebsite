'use client'
import { useState, FormEvent } from 'react'

// Sign up at https://formspree.io and replace YOUR_FORM_ID with your form's ID
const FORMSPREE_ID = 'YOUR_FORM_ID'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="rounded-xl p-8 lg:p-10" style={{ border: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#F5F7F9' }}>
      <h2 className="font-playfair font-bold text-2xl mb-2" style={{ color: '#1C1C1C' }}>Send Us a Message</h2>
      <p className="text-sm mb-8" style={{ color: '#6B6B6B' }}>Questions, catering inquiries, or just saying hello — we&apos;d love to hear from you.</p>

      {status === 'success' ? (
        <div className="rounded-lg px-5 py-4 text-sm font-medium" style={{ backgroundColor: '#EAF2F8', color: '#2E6A8F' }}>
          Thanks! We&apos;ll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#1C1C1C' }}>Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors focus:border-[#4A8DB5]"
              style={{ border: '1px solid rgba(0,0,0,0.15)', backgroundColor: '#fff', color: '#1C1C1C' }}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#1C1C1C' }}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors focus:border-[#4A8DB5]"
              style={{ border: '1px solid rgba(0,0,0,0.15)', backgroundColor: '#fff', color: '#1C1C1C' }}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#1C1C1C' }}>Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="How can we help?"
              className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors focus:border-[#4A8DB5] resize-none"
              style={{ border: '1px solid rgba(0,0,0,0.15)', backgroundColor: '#fff', color: '#1C1C1C' }}
            />
          </div>
          {status === 'error' && (
            <p className="text-sm" style={{ color: '#B91C1C' }}>Something went wrong. Please try again or email us directly.</p>
          )}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center justify-center text-sm font-semibold text-white px-7 py-3.5 rounded transition-colors hover:opacity-90 active:scale-95 disabled:opacity-60"
            style={{ backgroundColor: '#4A8DB5' }}
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  )
}
