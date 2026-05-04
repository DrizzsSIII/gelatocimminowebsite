'use client'
import { useState } from 'react'
import type { GoogleReview } from '@/lib/reviews'

const TRUNCATE_AT = 220

function ReviewCard({ review }: { review: GoogleReview }) {
  const [expanded, setExpanded] = useState(false)
  const needsTruncation = review.text.length > TRUNCATE_AT
  const displayText =
    !expanded && needsTruncation
      ? review.text.slice(0, TRUNCATE_AT).trimEnd() + '…'
      : review.text

  return (
    <div className="bg-white rounded-xl p-6 lg:p-7 flex flex-col" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
      <div className="flex gap-0.5 mb-4">
        {[...Array(Math.min(review.rating, 5))].map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#1E3A6E">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#3D3D3D', lineHeight: '1.7' }}>
        &ldquo;{displayText}&rdquo;
        {needsTruncation && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-1 font-semibold hover:opacity-70 transition-opacity"
            style={{ color: '#1E3A6E' }}
          >
            {expanded ? 'read less' : 'read more'}
          </button>
        )}
      </p>
      <div className="flex items-center gap-3">
        {review.photoUri ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.photoUri}
            alt={review.authorName}
            referrerPolicy="no-referrer"
            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold font-playfair"
            style={{ backgroundColor: 'rgba(30,58,110,0.15)', color: '#1E3A6E' }}
          >
            {review.authorName[0]}
          </div>
        )}
        <div>
          <p className="text-xs font-semibold" style={{ color: '#1C1C1C' }}>{review.authorName}</p>
          <p className="text-xs" style={{ color: '#6B6B6B' }}>via Google</p>
        </div>
      </div>
    </div>
  )
}

export function ReviewsSection({
  reviews,
  mapsUri,
}: {
  reviews: GoogleReview[]
  mapsUri: string
}) {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <ReviewCard key={`${r.authorName}-${i}`} review={r} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href={mapsUri}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 text-sm font-semibold px-6 py-3 rounded-lg transition-colors hover:bg-[#1E3A6E] hover:text-white hover:border-[#1E3A6E]"
          style={{ border: '2px solid rgba(0,0,0,0.15)', color: '#3D3D3D' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Read all our reviews on Google
        </a>
      </div>
    </>
  )
}
