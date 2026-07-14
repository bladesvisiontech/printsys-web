import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { brands, categories, getBrandBySlug } from '@/data/catalog'
import { toYouTubeEmbed } from '@/lib/youtube'
import PageHero from '@/components/ui/PageHero'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return brands.map(b => ({ marca: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ marca: string }> }): Promise<Metadata> {
  const { marca } = await params
  const brand = getBrandBySlug(marca)
  if (!brand) return {}
  return { title: brand.name, description: brand.description }
}

export default async function BrandPage({ params }: { params: Promise<{ marca: string }> }) {
  const { marca } = await params
  const brand = getBrandBySlug(marca)
  if (!brand) notFound()

  const brandCategories = categories.filter(c => c.brands.includes(brand.id))
  const brandProducts = brandCategories.flatMap(c => c.products.filter(p => p.brandId === brand.id))

  return (
    <div className="min-h-screen bg-[var(--color-bg-card)]">
      <PageHero
        title={brand.name}
        description={brand.description}
        titleImage={brand.logo}
      >
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] text-white/30 mt-4">
          <Link href="/aliados" className="hover:text-white/60 transition-colors">Aliados</Link>
          <span>/</span>
          <span className="text-white/60">{brand.name}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-5">
          <div className="bg-white/8 border border-white/10 rounded-lg px-3.5 py-1.5">
            <span className="text-white text-[13px] font-semibold">{brand.relationship}</span>
          </div>
          {brand.tagline && (
            <div className="bg-white/8 border border-white/10 rounded-lg px-3.5 py-1.5">
              <span className="text-white/70 text-[13px] italic">{brand.tagline}</span>
            </div>
          )}
        </div>

        {brand.website && (
          <a
            href={brand.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] text-white/60 hover:text-white transition-colors mt-5"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Sitio oficial
          </a>
        )}
      </PageHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {brand.video_url && (
          <div className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden mb-14">
            <div className="aspect-video">
              <iframe
                src={toYouTubeEmbed(brand.video_url)}
                title={`Video — ${brand.name}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {brand.gallery && brand.gallery.length > 0 && (
          <>
            <h2 className="text-[13px] font-bold text-[var(--color-brand-dark)] uppercase tracking-widest mb-5">
              Galería {brand.name}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-14">
              {brand.gallery.map((img, i) => (
                <div key={img} className="relative aspect-square rounded-2xl border border-[var(--color-border)] overflow-hidden bg-white">
                  <Image
                    src={img}
                    alt={`${brand.name} ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {brandCategories.length > 0 && (
          <>
            <h2 className="text-[13px] font-bold text-[var(--color-brand-dark)] uppercase tracking-widest mb-5">
              Categorías donde encontrarás {brand.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
              {brandCategories.map(cat => (
                <Link
                  key={cat.id}
                  href={`/productos/${cat.slug}`}
                  className="card-hover group flex items-center gap-3 bg-white rounded-2xl border border-[var(--color-border)] p-5 hover:border-zinc-400 transition-all"
                >
                  <span className="text-[var(--color-purple-mid)] shrink-0">{cat.icon}</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-[var(--color-brand-dark)] text-[14px] tracking-tight">{cat.name}</p>
                    <p className="text-[12px] text-[var(--color-muted)] mt-0.5 line-clamp-1">{cat.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-300 ml-auto shrink-0 group-hover:translate-x-0.5 group-hover:text-zinc-500 transition-all" />
                </Link>
              ))}
            </div>
          </>
        )}

        {brandProducts.length > 0 && (
          <>
            <h2 className="text-[13px] font-bold text-[var(--color-brand-dark)] uppercase tracking-widest mb-5">
              Productos {brand.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {brandProducts.map(p => (
                <Link
                  key={p.id}
                  href={`/productos/${p.categoryId}/${p.slug}`}
                  className="inline-flex items-center gap-1.5 text-[13px] px-3.5 py-2 rounded-xl bg-white border border-[var(--color-border)] text-[var(--color-brand-dark)] hover:border-zinc-400 hover:bg-zinc-50 transition-all"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-border)] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/aliados"
            className="group inline-flex items-center gap-1.5 text-[13px] text-[var(--color-muted)] hover:text-[var(--color-brand-dark)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Ver todos los aliados
          </Link>
          <Link
            href="/contacto"
            className="group shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-cta)] text-white text-[13px] font-semibold hover:bg-[var(--color-cta-hover)] transition-all duration-200 shadow-[0_0_16px_rgba(86,198,45,0.3)] active:scale-[0.98]"
          >
            Solicitar cotización
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
