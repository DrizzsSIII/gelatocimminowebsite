'use client'
import { useState } from 'react'

// TODO: Replace REPLACE_WITH_YOUR_FORM_ID with your Formspree form ID from formspree.io
const FORMSPREE_ID = 'REPLACE_WITH_YOUR_FORM_ID'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
    if (res.ok) { setStatus('success'); form.reset() }
    else setStatus('error')
  }

  if (status === 'success') return (
    <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
      <p className="text-green-800 font-medium text-lg">Message sent!</p>
      <p className="text-green-700 text-sm mt-1">We&apos;ll get back to you within 24 hours.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        type="text"
        placeholder="Your name"
        required
        className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
      />
      <input
        name="email"
        type="email"
        placeholder="Email address"
        required
        className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
      />
      <textarea
        name="message"
        placeholder="Your message..."
        rows={5}
        required
        className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 resize-none"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-[#3B1F0A] text-white rounded-lg py-3 text-sm font-medium hover:bg-[#2a1507] transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'error' && (
        <p className="text-red-600 text-sm text-center">Something went wrong. Please call us at (480) 590-1025.</p>
      )}
    </form>
  )
}
