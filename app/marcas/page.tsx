import Link from 'next/link'
import { brands } from '@/data/catalog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marcas aliadas',
  description: 'Distribuidores y representantes de GEW, Etirama, Cartes, Rotometal, JCTPRINT Anilox, GMI, SPI y Resino Inks en Colombia.',
}

export default function MarcasPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-card)]">
      {/* Header */}
      <div className="bg-[var(--color-brand-dark)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Nuestras Marcas</h1>
          <p className="mt-3 text-white/60 max-w-xl mx-auto">
            Representamos a los mejores fabricantes de la industria gráfica mundial
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map(brand => (
            <Link key={brand.id} href={`/marcas/${brand.slug}`}
              className="group bg-white rounded-2xl p-7 border border-[var(--color-border)] hover:border-[var(--color-purple-mid)]/40 hover:shadow-xl transition-all overflow-hidden relative">
              {/* Accent blob */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5 -translate-y-10 translate-x-10 transition-all group-hover:opacity-10"
                style={{ backgroundColor: brand.accentColor ?? '#82319c' }} />

              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--color-brand-dark)]">{brand.name}</h2>
                    <p className="text-xs text-[var(--color-purple-mid)] font-medium mt-0.5">{brand.tagline.es}</p>
                  </div>
                  {brand.featured && (
                    <span className="text-xs bg-[var(--color-green-mid)]/15 text-[var(--color-green-dark)] px-2 py-0.5 rounded-full font-medium">Destacado</span>
                  )}
                </div>

                <p className="text-sm text-[var(--color-muted)] leading-relaxed line-clamp-4">{brand.description.es}</p>

                <div className="pt-1 flex items-center justify-between">
                  <span className="text-xs bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-brand-dark)] px-3 py-1 rounded-full">
                    {brand.relationship.es}
                  </span>
                  <div className="flex items-center gap-1 text-[var(--color-purple-mid)] text-xs font-medium group-hover:gap-2 transition-all">
                    Ver productos
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
