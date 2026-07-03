export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: string
  name: string
  slug: string
  brandId: string
  brandName: string
  categoryId: string
  type: 'equipment' | 'consumable' | 'spare_part' | 'instrument' | 'accessory'
  shortDescription: string
  description: string
  specs: ProductSpec[]
  images: string[]
  datasheet_url?: string
  video_url?: string
  featured?: boolean
}

export interface ProductCategory {
  id: string
  slug: string
  name: string
  description: string
  icon: string
  brands: string[]          // brand IDs that appear in this category
  products: Product[]
}

export interface Brand {
  id: string
  name: string
  slug: string
  tagline: string
  relationship: string
  description: string
  website?: string
  accentColor: string
  featured?: boolean
}

export interface SiteContact {
  name: string
  phone: string
  email: string
  whatsapp?: string
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  address: string
  city: string
  phone: string
  email: string
  contacts: SiteContact[]
  social: {
    linkedin?: string
    instagram?: string
    whatsapp?: string
  }
}
