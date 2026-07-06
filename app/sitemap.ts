import type { MetadataRoute } from 'next'
import { categories, brands } from '@/data/catalog'

const BASE_URL = 'https://printsys-web.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/productos`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/aliados`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contacto`, changeFrequency: 'yearly', priority: 0.5 },
  ]

  const categoryRoutes: MetadataRoute.Sitemap = categories.map(cat => ({
    url: `${BASE_URL}/productos/${cat.slug}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const productRoutes: MetadataRoute.Sitemap = categories.flatMap(cat =>
    cat.products.map(p => ({
      url: `${BASE_URL}/productos/${cat.slug}/${p.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  const brandRoutes: MetadataRoute.Sitemap = brands.map(b => ({
    url: `${BASE_URL}/aliados/${b.slug}`,
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...brandRoutes]
}
