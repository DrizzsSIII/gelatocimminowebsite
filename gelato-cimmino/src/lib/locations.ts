// Central data for all Gelato Cimmino locations.
// Update address/phone/hours here and all sections update automatically.

export type LocationHours = { days: string; time: string }

export type Location = {
  id: string
  name: string
  address: string
  cityStateZip: string
  phone: string
  phoneRaw: string // digits only for tel: href
  mapsUrl: string
  mapsEmbed: string // Google Maps embed src — empty string if not yet available
  hours: LocationHours[]
  isComingSoon?: boolean
}

export const LOCATIONS: Location[] = [
  {
    id: 'scottsdale',
    name: 'Scottsdale',
    address: '7140 E Main St',
    cityStateZip: 'Scottsdale, AZ 85251',
    phone: '(480) 590-1025',
    phoneRaw: '4805901025',
    mapsUrl: 'https://maps.google.com/?q=7140+E+Main+St,+Scottsdale,+AZ+85251',
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.076!2d-111.92546!3d33.49490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08d15f827e67%3A0x1bc2f813d6c5ec69!2s7140%20E%20Main%20St%2C%20Scottsdale%2C%20AZ%2085251!5e0!3m2!1sen!2sus!4v1699000000000',
    hours: [
      { days: 'Mon – Wed', time: '10 AM – 9 PM' },
      { days: 'Thu – Sat', time: '10 AM – 10 PM' },
      { days: 'Sunday',    time: '10 AM – 9 PM' },
    ],
  },
  {
    id: 'gilbert',
    name: 'Gilbert',
    address: 'Address Coming Soon',
    cityStateZip: 'Gilbert, AZ',
    phone: 'Phone Coming Soon',
    phoneRaw: '',
    mapsUrl: 'https://maps.google.com/?q=Gelato+Cimmino+Gilbert+AZ',
    mapsEmbed: '',
    hours: [
      { days: 'Mon – Wed', time: '10 AM – 9 PM' },
      { days: 'Thu – Sat', time: '10 AM – 10 PM' },
      { days: 'Sunday',    time: '10 AM – 9 PM' },
    ],
    isComingSoon: true,
  },
]
