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
  specsImage?: string
  specsNote?: string
  images: string[]
  datasheet_url?: string
  video_url?: string
  videoImage?: string
  applicationImages?: { image: string; caption?: string; note?: string }[]
  featured?: boolean
}

export interface ProductCategory {
  id: string
  slug: string
  name: string
  description: string
  icon: string
  image?: string
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
  video_url?: string
  logo?: string
  gallery?: string[]
  accentColor: string
  featured?: boolean
}

export interface SiteContact {
  name: string
  phone: string
  email: string
  whatsapp?: string
}

export interface CompatBrand {
  id: string
  name: string
  logo: string
}

export interface SiteConfig {
  name: string
  legalName?: string
  nit?: string
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
  heroEyebrow?: string
  heroTitle?: string
  heroHighlight?: string
  heroVideo?: string
  compatBrands?: CompatBrand[]
}
