export type FlavorCategory = 'gelato' | 'sorbetto' | 'specialty'

export type Flavor = {
  name: string
  description: string
  color: string
  category: FlavorCategory
  dairyFree?: boolean
  glutenFree?: boolean
}

export const FLAVORS: Flavor[] = [
  { name: 'Almond',             description: 'Rich roasted almonds blended into a luxurious cream base',                              color: '#C4A882', category: 'gelato',   glutenFree: true },
  { name: 'Almond & Orange',    description: 'Roasted almonds brightened with Sicilian orange zest',                                  color: '#D4956A', category: 'gelato',   glutenFree: true },
  { name: 'Amarena Cherry',     description: 'Wild Italian sour cherries folded into dark chocolate — a house signature',             color: '#7B1818', category: 'gelato',   glutenFree: true },
  { name: 'Chocolate Chip',     description: 'Creamy vanilla base studded with rich dark chocolate chips',                            color: '#6B4226', category: 'gelato',   glutenFree: true },
  { name: 'Cinnamon',           description: 'Warming Sicilian cinnamon — sweet, spiced, and comforting',                            color: '#C47B3A', category: 'gelato',   glutenFree: true },
  { name: 'Coconut',            description: 'Tropical coconut — creamy, delicate, and impossibly smooth',                           color: '#EDE4CC', category: 'gelato',   glutenFree: true },
  { name: 'Coffee',             description: 'Intense Italian espresso — bold, aromatic, and deeply satisfying',                     color: '#3A2010', category: 'gelato',   glutenFree: true },
  { name: 'Dark Chocolate',     description: 'Rich bittersweet cacao — intensely smooth and velvety',                                color: '#2C1A0E', category: 'gelato',   glutenFree: true },
  { name: 'Hazelnut',           description: 'Premium Giffoni hazelnuts, silky and perfectly roasted',                               color: '#A0522D', category: 'gelato',   glutenFree: true },
  { name: 'Hazelnut & Nutella', description: 'Roasted hazelnuts swirled with ribbons of Nutella',                                    color: '#7B3F1E', category: 'gelato',   glutenFree: true },
  { name: 'Milk Chocolate',     description: 'Smooth, sweet chocolate — pure comfort in every scoop',                               color: '#8B5E3C', category: 'gelato',   glutenFree: true },
  { name: 'Milk Cream',         description: 'Pure cream gelato — simple, delicate, and impossibly smooth',                          color: '#F5E8CC', category: 'gelato',   glutenFree: true },
  { name: 'Peanut Butter Cup',  description: 'Velvety peanut butter with dark chocolate ribbons',                                   color: '#B8842A', category: 'gelato',   glutenFree: true },
  { name: 'Pistachio',          description: 'Roasted Sicilian pistachios — naturally vibrant and intensely nutty',                  color: '#5A7A3A', category: 'gelato',   glutenFree: true },
  { name: 'Vanilla',            description: 'Madagascar vanilla bean — pure, fragrant, and perfectly balanced',                     color: '#F0DCA0', category: 'gelato',   glutenFree: true },
  { name: 'Blueberry',          description: 'Fresh blueberries — bright, tart, and naturally refreshing',                          color: '#3E3580', category: 'sorbetto', dairyFree: true, glutenFree: true },
  { name: 'Lemon',              description: 'Bright Amalfi lemon — clean, tart, and refreshing',                                   color: '#E8D840', category: 'sorbetto', dairyFree: true, glutenFree: true },
  { name: 'Raspberry',          description: 'Sun-ripened raspberries — vivid, tangy, and vibrant',                                 color: '#C2294A', category: 'sorbetto', dairyFree: true, glutenFree: true },
  { name: 'Strawberry',         description: 'Sun-ripened strawberries, bright and perfectly fresh',                                 color: '#D94040', category: 'sorbetto', dairyFree: true, glutenFree: true },
  { name: 'Cimmino Rock',       description: 'Our house signature — a bold multi-layered creation with unexpected depth and texture', color: '#8B6914', category: 'specialty', glutenFree: false },
]

export const CATEGORY_LABELS: Record<FlavorCategory, string> = {
  gelato:    'Gelato',
  sorbetto:  'Sorbetto',
  specialty: 'Specialty',
}

export const CATEGORY_DESCRIPTIONS: Record<FlavorCategory, string> = {
  gelato:    'Crafted daily with premium milk and natural ingredients',
  sorbetto:  'Dairy-free · fruit-forward · intensely fresh',
  specialty: 'Signature creations unique to Gelato Cimmino',
}
