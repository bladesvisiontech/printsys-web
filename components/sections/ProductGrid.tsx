'use client'

import { useState } from 'react'
import ProductCard from '@/components/ui/ProductCard'
import type { ProductCategory, Brand } from '@/types/catalog'

interface Props {
  category: ProductCategory
  brands: Brand[]
}

export default function ProductGrid({ category, brands }: Props) {
  const [activeBrand, setActiveBrand] = useState<string>('all')

  const filtered = activeBrand === 'all'
    ? category.products
    : category.products.filter(p => p.brandId === activeBrand)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Brand tabs */}
      {brands.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
          <button
            onClick={() => setActiveBrand('all')}
            className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-colors border ${
              activeBrand === 'all'
                ? 'bg-[var(--color-brand-dark)] text-white border-[var(--color-brand-dark)]'
                : 'bg-white text-[var(--color-brand-dark)] border-[var(--color-border)] hover:border-[var(--color-purple-mid)]'
            }`}
          >
            Todos
          </button>
          {brands.map(brand => (
            <button
              key={brand.id}
              onClick={() => setActiveBrand(brand.id)}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-colors border ${
                activeBrand === brand.id
                  ? 'bg-[var(--color-brand-dark)] text-white border-[var(--color-brand-dark)]'
                  : 'bg-white text-[var(--color-brand-dark)] border-[var(--color-border)] hover:border-[var(--color-purple-mid)]'
              }`}
            >
              {brand.name}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center text-[var(--color-muted)]">No hay productos disponibles.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
