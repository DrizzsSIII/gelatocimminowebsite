export type Drink = {
  name: string
  description: string
  category: 'espresso' | 'specialty' | 'pairing'
}

export const DRINKS: Drink[] = [
  { name: 'Espresso', description: 'Classic Italian single or double shot — bold and aromatic', category: 'espresso' },
  { name: 'Cappuccino', description: 'Espresso with velvety steamed milk and a thick layer of foam', category: 'espresso' },
  { name: 'Caffè Latte', description: 'Smooth espresso with silky steamed milk', category: 'espresso' },
  { name: 'Americano', description: 'Espresso diluted with hot water — clean and full-bodied', category: 'espresso' },
  { name: "Caffè Affogato", description: 'A scoop of vanilla gelato drowned in a shot of hot espresso — the ultimate Italian pairing', category: 'specialty' },
  { name: "Caffè del Nonno", description: "Grandfather's coffee — a traditional cold Italian coffee drink served with fresh cream", category: 'specialty' },
  { name: 'Gelato Float', description: 'Your choice of gelato paired with sparkling water or Italian soda', category: 'pairing' },
  { name: 'Gelato Smoothie', description: "Blended gelato with fresh ingredients — ask about today's flavors", category: 'pairing' },
]

export const DRINK_CATEGORY_LABELS: Record<Drink['category'], string> = {
  espresso: 'Espresso & Coffee',
  specialty: 'Specialty Drinks',
  pairing: 'Gelato Pairings',
}
