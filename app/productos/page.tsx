import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/data/catalog'
import PageHero from '@/components/ui/PageHero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Productos',
  description: 'Catálogo de equipos, consumibles e instrumentos para la industria gráfica. GEW, Etirama, Cartes, Rotometal y más.',
}

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-card)]">
      <PageHero
        eyebrow="Catálogo"
        title="Productos"
        description="Equipos, consumibles e instrumentos de las mejores marcas para la industria de la impresión."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
          {categories.map(cat => (
            <Link
              key={cat.id}
              href={`/productos/${cat.slug}`}
              className="card-hover animate-fade-up group bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-bg-card)]">
                <Image
                  src={cat.image || `/categories/${cat.slug}.jpg`}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h2 className="text-[17px] font-semibold text-[var(--color-brand-dark)] tracking-tight group-hover:text-[var(--color-purple-mid)] transition-colors">{cat.name}</h2>
                <p className="text-[13px] text-[var(--color-muted)] mt-2 leading-relaxed flex-1">{cat.description}</p>
                <div className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-cta)]">
                  Ver {cat.products.length} producto{cat.products.length !== 1 ? 's' : ''}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
