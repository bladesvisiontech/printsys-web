import Link from 'next/link'
import { categories } from '@/data/catalog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Productos',
  description: 'Catálogo de equipos, consumibles e instrumentos para la industria gráfica. GEW, Etirama, Cartes, Rotometal y más.',
}

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-card)]">
      {/* Hero */}
      <div className="bg-[var(--color-brand-dark)] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Catálogo de productos</h1>
          <p className="text-white/60 mt-3 max-w-xl">Equipos, consumibles e instrumentos de las mejores marcas para la industria de la impresión.</p>
        </div>
      </div>

      {/* Categories grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              href={`/productos/${cat.slug}`}
              className="group bg-white rounded-2xl border border-[var(--color-border)] p-7 hover:shadow-xl hover:border-[var(--color-purple-mid)]/40 transition-all"
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h2 className="text-xl font-bold text-[var(--color-brand-dark)] group-hover:text-[var(--color-purple-mid)] transition-colors">{cat.name}</h2>
              <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed">{cat.description}</p>
              <div className="mt-5 text-sm font-semibold text-[var(--color-cta)] flex items-center gap-1">
                Ver {cat.products.length} producto{cat.products.length !== 1 ? 's' : ''} →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
