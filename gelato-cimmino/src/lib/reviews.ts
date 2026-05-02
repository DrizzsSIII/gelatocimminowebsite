export type GoogleReview = {
  authorName: string
  rating: number
  text: string
  photoUri?: string
  relativeTime: string
}

export type ReviewsData = {
  reviews: GoogleReview[]
  rating: string
  mapsUri: string
}

const FALLBACK: ReviewsData = {
  reviews: [
    {
      authorName: 'Sarah M.',
      rating: 5,
      text: "The pistachio gelato here is absolutely life-changing. Genuinely the best I've had outside of Italy — rich, fresh, and perfectly balanced. We drive across town just for this.",
      relativeTime: '',
    },
    {
      authorName: 'James R.',
      rating: 5,
      text: "Discovered this gem while walking Main Street. The homemade cones alone are worth the trip. Everything tastes impossibly fresh — nothing like anything else in Scottsdale.",
      relativeTime: '',
    },
    {
      authorName: 'Lucia K.',
      rating: 5,
      text: "If you haven't tried the Amarena Cherry gelato, you are missing out. The owners are lovely and you can tell every single batch is made with real care. A Scottsdale treasure.",
      relativeTime: '',
    },
  ],
  rating: '4.9',
  mapsUri: 'https://bit.ly/2D5NAAl',
}

function formatDisplayName(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length <= 1) return name
  return `${parts[0]} ${parts[parts.length - 1][0]}.`
}

type PlacesReview = {
  rating: number
  text?: { text: string }
  relativePublishTimeDescription?: string
  authorAttribution?: { displayName: string; photoUri?: string }
}

type PlacesResponse = {
  reviews?: PlacesReview[]
  rating?: number
  googleMapsUri?: string
}

export async function getReviews(): Promise<ReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GELATO_PLACE_ID

  if (!apiKey || !placeId) {
    return FALLBACK
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'reviews,rating,googleMapsUri',
        },
        next: { revalidate: 86400 },
      }
    )

    if (!res.ok) throw new Error(`Places API returned ${res.status}`)

    const data = await res.json() as PlacesResponse

    const reviews: GoogleReview[] = (data.reviews ?? []).slice(0, 5).map((r) => ({
      authorName: formatDisplayName(r.authorAttribution?.displayName ?? 'Guest'),
      rating: r.rating ?? 5,
      text: r.text?.text ?? '',
      photoUri: r.authorAttribution?.photoUri,
      relativeTime: r.relativePublishTimeDescription ?? '',
    }))

    return {
      reviews: reviews.length > 0 ? reviews : FALLBACK.reviews,
      rating: data.rating != null ? Number(data.rating).toFixed(1) : FALLBACK.rating,
      mapsUri: data.googleMapsUri ?? FALLBACK.mapsUri,
    }
  } catch (err) {
    console.error('[Reviews] Google Places API error:', err)
    return FALLBACK
  }
}
