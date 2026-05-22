export interface LocalizedString {
  es: string
  en: string
}

export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: string
  name: string
  slug: string
  type: 'equipment' | 'consumable' | 'spare_part' | 'instrument' | 'accessory'
  description: LocalizedString
  shortDescription: LocalizedString
  specs: ProductSpec[]
  images: string[]
  datasheet_url?: string
  featured?: boolean
  tags?: string[]
}

export interface Category {
  id: string
  name: LocalizedString
  slug: string
  description?: LocalizedString
  products: Product[]
}

export interface Brand {
  id: string
  name: string
  slug: string
  logo: string
  tagline: LocalizedString
  description: LocalizedString
  website?: string
  relationship: LocalizedString
  featured?: boolean
  accentColor?: string
  categories: Category[]
}

export interface SiteContact {
  name: string
  phone: string
  email: string
  whatsapp?: string
}

export interface SiteConfig {
  name: string
  tagline: LocalizedString
  description: LocalizedString
  address: string
  city: string
  country: string
  phone: string
  email: string
  contacts: SiteContact[]
  social: {
    linkedin?: string
    instagram?: string
    whatsapp?: string
  }
}
