import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react'
import { categories, getCategoryBySlug, getProductBySlug, getBrandById } from '@/data/catalog'
import { toYouTubeEmbed } from '@/lib/youtube'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return categories.flatMap(cat =>
    cat.products.map(p => ({ categoria: cat.slug, producto: p.slug }))
  )
}

export async function generateMetadata({ params }: { params: Promise<{ categoria: string; producto: string }> }): Promise<Metadata> {
  const { categoria, producto } = await params
  const product = getProductBySlug(categoria, producto)
  if (!product) return {}
  return { title: product.name, description: product.shortDescription }
}

export default async function ProductPage({ params }: { params: Promise<{ categoria: string; producto: string }> }) {
  const { categoria, producto } = await params
  const cat = getCategoryBySlug(categoria)
  const product = getProductBySlug(categoria, producto)
  if (!cat || !product) notFound()

  const brand = getBrandById(product.brandId)

  return (
    <div className="min-h-screen bg-[var(--color-bg-card)]">
      {/* Slim breadcrumb header */}
      <div className="relative bg-[var(--color-brand-dark)] overflow-hidden">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[var(--color-purple-dark)] opacity-20 blur-[60px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="flex items-center gap-2 text-[11px] text-white/30">
            <Link href="/productos" className="hover:text-white/60 transition-colors">Productos</Link>
            <span>/</span>
            <Link href={`/productos/${cat.slug}`} className="hover:text-white/60 transition-colors">{cat.name}</Link>
            <span>/</span>
            <span className="text-white/60">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image gallery */}
          <div className="flex flex-col gap-4">
            {product.images.length > 0 ? (
              product.images.map((img, i) => (
                <div key={img} className="bg-white rounded-2xl border border-[var(--color-border)] aspect-square flex items-center justify-center p-10 overflow-hidden">
                  <Image
                    src={img}
                    alt={i === 0 ? product.name : `${product.name} ${i + 1}`}
                    width={600}
                    height={600}
                    className="object-contain max-h-full transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              ))
            ) : (
              <div className="bg-white rounded-2xl border border-[var(--color-border)] aspect-square flex items-center justify-center p-10 overflow-hidden">
                <div className="flex flex-col items-center gap-3 text-zinc-200">
                  <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium text-zinc-400">{product.name}</span>
                </div>
              </div>
            )}
          </div>

          {/* Info panel */}
          <div className="flex flex-col gap-6">
            {brand && (
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-semibold bg-white border border-[var(--color-border)] px-3 py-1 rounded-full text-[var(--color-brand-dark)] tracking-wide">
                  {brand.name}
                </span>
                <span className="text-[11px] text-[var(--color-muted)]">{brand.relationship}</span>
                {product.featured && (
                  <span className="text-[11px] font-semibold bg-[var(--color-green-mid)] text-white px-2.5 py-1 rounded-full">Destacado</span>
                )}
              </div>
            )}

            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-brand-dark)] tracking-tight">{product.name}</h1>
              <p className="text-[var(--color-muted)] mt-3 leading-relaxed text-[15px] whitespace-pre-line">{product.description}</p>
            </div>

            {/* Specs table */}
            {product.specs.length > 0 && (
              <div className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden">
                <div className="px-5 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-card)]">
                  <h2 className="text-[11px] font-bold text-[var(--color-brand-dark)] uppercase tracking-widest">Especificaciones técnicas</h2>
                </div>
                <div className="divide-y divide-[var(--color-border)]">
                  {product.specs.map(spec => (
                    <div key={spec.label} className="flex justify-between px-5 py-3 text-[13px] hover:bg-zinc-50 transition-colors">
                      <span className="text-[var(--color-muted)]">{spec.label}</span>
                      <span className="font-semibold text-[var(--color-brand-dark)] text-right max-w-[60%]">{spec.value}</span>
                    </div>
                  ))}
                </div>
                {product.specsImage && (
                  <div className="border-t border-[var(--color-border)] p-4">
                    <Image
                      src={product.specsImage}
                      alt={`Especificaciones — ${product.name}`}
                      width={800}
                      height={500}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                )}
                {product.specsNote && (
                  <p className="px-5 py-3 text-[12px] text-[var(--color-muted)] border-t border-[var(--color-border)] italic">
                    {product.specsNote}
                  </p>
                )}
                {product.datasheet_url && (
                  <a
                    href={product.datasheet_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 text-[13px] font-semibold text-[var(--color-brand-dark)] border-t border-[var(--color-border)] bg-[var(--color-bg-card)] hover:bg-zinc-100 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Ver ficha técnica en PDF
                  </a>
                )}
              </div>
            )}

            {/* Video */}
            {product.video_url && (
              <div className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src={toYouTubeEmbed(product.video_url)}
                    title={`Video — ${product.name}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {product.videoImage && (
              <div className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden p-4">
                <Image
                  src={product.videoImage}
                  alt={`${product.name}`}
                  width={800}
                  height={500}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/contacto?producto=${encodeURIComponent(product.name)}`}
                className="group flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--color-cta)] text-white text-sm font-semibold hover:bg-[var(--color-cta-hover)] transition-all duration-200 shadow-[0_0_16px_rgba(86,198,45,0.3)] hover:shadow-[0_0_24px_rgba(86,198,45,0.45)] active:scale-[0.98]"
              >
                Solicitar cotización
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              {product.datasheet_url && (
                <a
                  href={product.datasheet_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--color-border)] text-[var(--color-brand-dark)] text-sm font-semibold hover:border-zinc-400 transition-all duration-200 active:scale-[0.98]"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Ficha técnica
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-border)] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href={`/productos/${cat.slug}`}
            className="group inline-flex items-center gap-1.5 text-[13px] text-[var(--color-muted)] hover:text-[var(--color-brand-dark)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Ver todos en {cat.name}
          </Link>
          <Link
            href="/contacto"
            className="group shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-brand-dark)] text-white text-[13px] font-semibold hover:bg-[var(--color-purple-dark)] transition-all duration-200 active:scale-[0.98]"
          >
            ¿Necesitas asesoría?
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
