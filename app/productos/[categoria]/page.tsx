import { notFound } from 'next/navigation'
import Link from 'next/link'
import { categories, getBrandById } from '@/data/catalog'
import ProductGrid from '@/components/sections/ProductGrid'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return categories.map(c => ({ categoria: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ categoria: string }> }): Promise<Metadata> {
  const { categoria } = await params
  const cat = categories.find(c => c.slug === categoria)
  if (!cat) return {}
  return { title: cat.name, description: cat.description }
}

export default async function CategoryPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params
  const cat = categories.find(c => c.slug === categoria)
  if (!cat) notFound()

  const catBrands = cat.brands.map(id => getBrandById(id)).filter(Boolean)

  return (
    <div className="min-h-screen bg-[var(--color-bg-card)]">
      {/* Hero */}
      <div className="bg-[var(--color-brand-dark)] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
            <Link href="/productos" className="hover:text-white transition-colors">Productos</Link>
            <span>/</span>
            <span className="text-white/70">{cat.name}</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <div className="text-4xl mb-2">{cat.icon}</div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">{cat.name}</h1>
              <p className="text-white/60 mt-2 max-w-xl">{cat.description}</p>
            </div>
            <div className="flex items-center gap-3">
              {catBrands.map(brand => brand && (
                <div key={brand.id}
                  className="bg-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-white font-bold text-sm">{brand.name}</div>
                  <div className="text-white/40 text-xs">{brand.relationship}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product grid with brand tabs */}
      <ProductGrid category={cat} brands={catBrands.filter(Boolean) as NonNullable<typeof catBrands[0]>[]} />

      {/* CTA */}
      <div className="border-t border-[var(--color-border)] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[var(--color-brand-dark)]">¿Necesitas asesoría técnica?</h3>
            <p className="text-sm text-[var(--color-muted)] mt-1">Contáctanos y te ayudamos a elegir el equipo ideal para tu proceso</p>
          </div>
          <Link href="/contacto"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-cta)] text-white text-sm font-semibold hover:bg-[var(--color-cta-hover)] transition-colors">
            Solicitar asesoría
          </Link>
        </div>
      </div>
    </div>
  )
}
