import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { brands, categories } from '@/data/catalog'
import PageHero from '@/components/ui/PageHero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aliados',
  description: 'Marcas representadas por Printsys: GEW, Etirama, Cartes, Rotometal y más.',
}

export default function AliadosPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-card)]">
      <PageHero
        eyebrow="Alianzas estratégicas"
        title="Nuestros aliados"
        description="Representamos y distribuimos las marcas líderes de la industria gráfica mundial en Colombia."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
          {brands.map(brand => {
            const brandCategories = categories.filter(c => c.brands.includes(brand.id))
            return (
              <div key={brand.id} className="card-hover animate-fade-up bg-white rounded-2xl border border-[var(--color-border)] p-7 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-[17px] font-semibold text-[var(--color-brand-dark)] tracking-tight">{brand.name}</h2>
                    <p className="text-[11px] font-semibold text-[var(--color-cta)] mt-0.5 uppercase tracking-wide">{brand.relationship}</p>
                  </div>
                  {brand.featured && (
                    <span className="shrink-0 text-[11px] font-semibold bg-[var(--color-purple-mid)]/10 text-[var(--color-purple-mid)] border border-[var(--color-purple-mid)]/20 px-2.5 py-1 rounded-full">
                      Principal
                    </span>
                  )}
                </div>

                <p className="text-[13px] text-[var(--color-muted)] leading-relaxed flex-1">{brand.description}</p>

                {brandCategories.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {brandCategories.map(c => (
                      <Link
                        key={c.id}
                        href={`/productos/${c.slug}`}
                        className="group/tag inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-brand-dark)] hover:border-zinc-400 hover:bg-white transition-all duration-150"
                      >
                        {c.name}
                        <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover/tag:opacity-100 -translate-x-1 group-hover/tag:translate-x-0 transition-all duration-150" />
                      </Link>
                    ))}
                  </div>
                )}

                {brand.website && (
                  <div className="pt-3 border-t border-[var(--color-border)]">
                    <a
                      href={brand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12px] text-[var(--color-muted)] hover:text-[var(--color-brand-dark)] transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Sitio oficial
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
