import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { brands, getBrandBySlug } from '@/data/catalog'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return brands.map(b => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const brand = getBrandBySlug(slug)
  if (!brand) return {}
  return {
    title: brand.name,
    description: brand.description.es,
  }
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const brand = getBrandBySlug(slug)
  if (!brand) notFound()

  const totalProducts = brand.categories.reduce((n, c) => n + c.products.length, 0)

  return (
    <div className="min-h-screen bg-white">
      {/* Brand Hero */}
      <div className="bg-[var(--color-brand-dark)] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-96 h-96 rounded-full absolute -top-20 -right-20"
            style={{ backgroundColor: brand.accentColor ?? '#82319c' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/marcas" className="inline-flex items-center gap-1 text-white/50 hover:text-white text-sm mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Todas las marcas
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="text-white/40 text-sm mb-2">{brand.relationship.es}</div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">{brand.name}</h1>
              <p className="text-white/60 mt-1 text-lg">{brand.tagline.es}</p>
            </div>
            <div className="flex gap-4 text-center">
              <div className="bg-white/10 rounded-xl px-6 py-3">
                <div className="text-2xl font-bold text-white">{brand.categories.length}</div>
                <div className="text-white/50 text-xs">Categorías</div>
              </div>
              <div className="bg-white/10 rounded-xl px-6 py-3">
                <div className="text-2xl font-bold text-white">{totalProducts}</div>
                <div className="text-white/50 text-xs">Productos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-[var(--color-muted)] leading-relaxed max-w-3xl">{brand.description.es}</p>
          {brand.website && (
            <a href={brand.website} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-purple-mid)] hover:underline">
              {brand.website}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Categories & Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {brand.categories.map(cat => (
          <div key={cat.id}>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-[var(--color-brand-dark)]">{cat.name.es}</h2>
              <div className="flex-1 h-px bg-[var(--color-border)]" />
              <span className="text-xs text-[var(--color-muted)] bg-[var(--color-bg-card)] px-3 py-1 rounded-full border border-[var(--color-border)]">
                {cat.products.length} producto{cat.products.length !== 1 ? 's' : ''}
              </span>
            </div>
            {cat.description && (
              <p className="text-sm text-[var(--color-muted)] mb-6 -mt-3">{cat.description.es}</p>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.products.map(product => (
                <Link key={product.id}
                  href={`/marcas/${brand.slug}/${cat.slug}/${product.slug}`}
                  className="group bg-white rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-purple-mid)]/40 hover:shadow-lg transition-all overflow-hidden">
                  {/* Product image */}
                  {product.images[0] && (
                    <div className="aspect-video bg-[var(--color-bg-card)] overflow-hidden">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={400}
                        height={225}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  {!product.images[0] && (
                    <div className="aspect-video bg-[var(--color-bg-card)] flex items-center justify-center">
                      <div className="text-3xl font-bold text-[var(--color-border)]">{product.name[0]}</div>
                    </div>
                  )}
                  <div className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-[var(--color-brand-dark)]">{product.name}</h3>
                      {product.featured && (
                        <span className="shrink-0 text-xs bg-[var(--color-green-mid)]/15 text-[var(--color-green-dark)] px-2 py-0.5 rounded-full">Top</span>
                      )}
                    </div>
                    <p className="text-xs text-[var(--color-muted)] leading-relaxed line-clamp-2">
                      {product.shortDescription.es}
                    </p>
                    {product.specs.length > 0 && (
                      <div className="pt-1 space-y-1">
                        {product.specs.slice(0, 2).map(spec => (
                          <div key={spec.label} className="flex justify-between text-xs">
                            <span className="text-[var(--color-muted)]">{spec.label}</span>
                            <span className="font-medium text-[var(--color-brand-dark)]">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="pt-1 flex items-center gap-1 text-[var(--color-purple-mid)] text-xs font-medium">
                      Ver detalles
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[var(--color-bg-card)] border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[var(--color-brand-dark)]">¿Necesitas asesoría sobre {brand.name}?</h3>
            <p className="text-sm text-[var(--color-muted)] mt-1">Contáctanos y te ayudamos a encontrar la solución ideal</p>
          </div>
          <Link href="/contacto"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-cta)] text-white text-sm font-semibold hover:bg-[var(--color-cta-hover)] transition-colors">
            Solicitar cotización
          </Link>
        </div>
      </div>
    </div>
  )
}
