'use client'

import { getTodayHours } from '@/lib/hours'

export default function HoursBanner() {
  const today = getTodayHours()

  return (
    <div className="bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="font-inter font-semibold text-xs uppercase tracking-widest">Open Today</span>
            <span className="font-inter text-sm font-medium opacity-90">
              {today.open} – {today.close}
            </span>
          </div>

          <a
            href="https://maps.google.com/?q=7140+E+Main+St,+Scottsdale,+AZ+85251"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-inter text-xs text-white/80 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            7140 E Main St, Scottsdale, AZ 85251
          </a>
        </div>
      </div>
    </div>
  )
}
