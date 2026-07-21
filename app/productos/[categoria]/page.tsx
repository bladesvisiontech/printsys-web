import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categories, getBrandById } from '@/data/catalog'
import ProductGrid from '@/components/sections/ProductGrid'
import PageHero from '@/components/ui/PageHero'
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
      <PageHero
        title={cat.name}
        description={cat.description}
        icon={<span className="text-2xl">{cat.icon}</span>}
      >
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] text-white/30 mt-4">
          <Link href="/productos" className="hover:text-white/60 transition-colors">Productos</Link>
          <span>/</span>
          <span className="text-white/60">{cat.name}</span>
        </div>

        {/* Brand chips */}
        {catBrands.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-5">
            {catBrands.map(brand => brand && (
              <div key={brand.id} className="bg-white/8 border border-white/10 rounded-lg px-3.5 py-1.5 text-center">
                <div className="text-white text-[13px] font-semibold">{brand.name}</div>
                <div className="text-white/35 text-[11px]">{brand.relationship}</div>
              </div>
            ))}
          </div>
        )}
      </PageHero>

      <ProductGrid
        category={cat}
        brands={catBrands.filter(Boolean) as NonNullable<typeof catBrands[0]>[]}
        brandSubtitles={cat.brandLabels}
      />

      {/* CTA bar */}
      <div className="border-t border-[var(--color-border)] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[17px] font-semibold text-[var(--color-brand-dark)] tracking-tight">¿Necesitas asesoría técnica?</h3>
            <p className="text-[13px] text-[var(--color-muted)] mt-1">Te ayudamos a elegir el equipo ideal para tu proceso.</p>
          </div>
          <Link
            href="/contacto"
            className="group shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-cta)] text-white text-sm font-semibold hover:bg-[var(--color-cta-hover)] transition-all duration-200 shadow-[0_0_16px_rgba(86,198,45,0.3)] hover:shadow-[0_0_24px_rgba(86,198,45,0.45)] active:scale-[0.98]"
          >
            Solicitar asesoría
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
