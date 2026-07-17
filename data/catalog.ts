import type { Brand, ProductCategory, SiteConfig, BlogPost } from '@/types/catalog'
import catalogData from './catalog.json'

export const siteConfig: SiteConfig = catalogData.siteConfig
export const brands: Brand[] = catalogData.brands as Brand[]
export const categories: ProductCategory[] = catalogData.categories as ProductCategory[]
export const blogPosts: BlogPost[] = (catalogData.blogPosts ?? []) as BlogPost[]

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function getCategoryBySlug(slug: string) {
  return categories.find(c => c.slug === slug)
}

export function getBrandById(id: string) {
  return brands.find(b => b.id === id)
}

export function getBrandBySlug(slug: string) {
  return brands.find(b => b.slug === slug)
}

export function getProductBySlug(categorySlug: string, productSlug: string) {
  const cat = getCategoryBySlug(categorySlug)
  return cat?.products.find(p => p.slug === productSlug)
}

export function getFeaturedBrands() {
  return brands.filter(b => b.featured)
}

export function getFeaturedProducts() {
  return categories.flatMap(c => c.products.filter(p => p.featured))
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find(p => p.slug === slug)
}
