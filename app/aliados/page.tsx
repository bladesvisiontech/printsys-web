import Link from 'next/link'
import { brands, categories } from '@/data/catalog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aliados',
  description: 'Marcas representadas por Printsys: GEW, Etirama, Cartes, Rotometal y más.',
}

export default function AliadosPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-card)]">
      {/* Hero */}
      <div className="bg-[var(--color-brand-dark)] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Nuestros aliados</h1>
          <p className="text-white/60 mt-3 max-w-xl">Representamos y distribuimos las marcas líderes de la industria gráfica mundial en Colombia.</p>
        </div>
      </div>

      {/* Brands grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map(brand => {
            const brandCategories = categories.filter(c => c.brands.includes(brand.id))
            return (
              <div key={brand.id} className="bg-white rounded-2xl border border-[var(--color-border)] p-7 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[var(--color-brand-dark)]">{brand.name}</h2>
                    <p className="text-xs font-semibold text-[var(--color-cta)] mt-0.5">{brand.relationship}</p>
                  </div>
                  {brand.featured && (
                    <span className="text-xs font-semibold bg-[var(--color-purple-mid)] text-white px-2.5 py-1 rounded-full">Aliado principal</span>
                  )}
                </div>

                <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">{brand.description}</p>

                {brandCategories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {brandCategories.map(c => (
                      <Link
                        key={c.id}
                        href={`/productos/${c.slug}`}
                        className="text-xs px-3 py-1 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-brand-dark)] hover:border-[var(--color-purple-mid)] transition-colors"
                      >
                        {c.icon} {c.name}
                      </Link>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-3 pt-2 border-t border-[var(--color-border)]">
                  {brand.website && (
                    <a
                      href={brand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[var(--color-muted)] hover:text-[var(--color-brand-dark)] transition-colors"
                    >
                      Sitio oficial →
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
