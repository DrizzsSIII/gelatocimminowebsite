'use client'
import { useState } from 'react'

export function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: wire up to an email provider (Mailchimp, ConvertKit, etc.)
    setStatus('success')
    setEmail('')
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl px-6 py-5 text-center" style={{ backgroundColor: 'rgba(30,58,110,0.12)', border: '1px solid rgba(30,58,110,0.25)' }}>
        <p className="font-semibold text-sm" style={{ color: '#142857' }}>You&apos;re on the list!</p>
        <p className="text-xs mt-1" style={{ color: '#1E3A6E' }}>We&apos;ll let you know when new flavors drop.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1 px-4 py-3 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A6E]"
        style={{ border: '1px solid rgba(0,0,0,0.15)', color: '#1C1C1C' }}
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 active:scale-95 whitespace-nowrap"
        style={{ backgroundColor: '#1E3A6E' }}
      >
        Subscribe
      </button>
    </form>
  )
}
