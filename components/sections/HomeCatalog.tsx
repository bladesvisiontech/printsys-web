'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/data/catalog'
import ProductCard from '@/components/ui/ProductCard'

export default function HomeCatalog() {
  const [active, setActive] = useState(categories[0].slug)

  const cat = categories.find(c => c.slug === active)!
  const display = cat.products.filter(p => p.featured).slice(0, 4)
  const products = display.length >= 2 ? display : cat.products.slice(0, 4)

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-2">Catálogo</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-brand-dark)] tracking-tight">Nuestros productos</h2>
        </div>

        {/* Tabs — desktop: horizontal pills / mobile: 2-col grid */}
        <div className="hidden sm:flex flex-wrap items-center gap-1.5 mb-8">
          {categories.map(c => (
            <button
              key={c.slug}
              onClick={() => setActive(c.slug)}
              className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                active === c.slug
                  ? 'bg-[var(--color-brand-dark)] text-white shadow-sm'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-brand-dark)] hover:bg-zinc-100'
              }`}
            >
              <span className={active === c.slug ? 'text-white' : 'text-[var(--color-muted)]'}>
                {c.icon}
              </span>
              {c.name}
            </button>
          ))}
        </div>

        {/* Mobile: 2-col grid */}
        <div className="grid grid-cols-2 gap-2 mb-6 sm:hidden">
          {categories.map(c => (
            <button
              key={c.slug}
              onClick={() => setActive(c.slug)}
              className={`flex items-center gap-2.5 px-3.5 py-3 rounded-xl text-left text-[13px] font-medium transition-all duration-200 border ${
                active === c.slug
                  ? 'bg-[var(--color-brand-dark)] text-white border-[var(--color-brand-dark)]'
                  : 'bg-[var(--color-bg-card)] text-[var(--color-brand-dark)] border-[var(--color-border)] hover:border-zinc-400'
              }`}
            >
              <span className={`shrink-0 ${active === c.slug ? 'text-white' : 'text-[var(--color-muted)]'}`}>
                {c.icon}
              </span>
              <span className="leading-tight">{c.name}</span>
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div key={active} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
          {products.map(product => (
            <div key={product.id} className="animate-fade-up">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-8 flex justify-end">
          <Link
            href={`/productos/${active}`}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--color-border)] text-[var(--color-brand-dark)] text-sm font-semibold hover:border-[var(--color-brand-dark)] hover:bg-[var(--color-brand-dark)] hover:text-white transition-all duration-200 active:scale-[0.98]"
          >
            Ver todos en {cat.name}
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
