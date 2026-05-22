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
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-8 scrollbar-none">
          {[{ id: 'all', name: 'Todos' }, ...brands.map(b => ({ id: b.id, name: b.name }))].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveBrand(tab.id)}
              className={`relative shrink-0 px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeBrand === tab.id
                  ? 'bg-[var(--color-brand-dark)] text-white shadow-sm'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-brand-dark)] hover:bg-zinc-100'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center text-[var(--color-muted)] text-sm">No hay productos disponibles.</div>
      ) : (
        <div key={activeBrand} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 stagger animate-fade-in">
          {filtered.map(product => (
            <div key={product.id} className="animate-fade-up">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
