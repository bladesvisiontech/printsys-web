import Link from 'next/link'
import Image from 'next/image'
import { categories, getFeaturedBrands, siteConfig } from '@/data/catalog'
import ProductCard from '@/components/ui/ProductCard'

export default function HomePage() {
  const featuredBrands = getFeaturedBrands()

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--color-brand-dark)] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--color-purple-light)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 text-white/80 px-4 py-1.5 rounded-full mb-6">
              Distribuidor oficial GEW · Colombia
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
              Tecnología de impresión{' '}
              <span className="gradient-text">de vanguardia</span>
            </h1>
            <p className="text-white/60 mt-6 text-lg max-w-xl leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/productos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--color-cta)] text-white font-semibold hover:bg-[var(--color-cta-hover)] transition-colors"
              >
                Ver catálogo completo
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:border-white/50 transition-colors"
              >
                Solicitar asesoría
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand logos strip ────────────────────────────────────────── */}
      <section className="border-b border-[var(--color-border)] bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] text-center mb-6">Nuestros aliados estratégicos</p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {featuredBrands.map(brand => (
              <Link
                key={brand.id}
                href={`/aliados`}
                className="text-lg font-bold text-[var(--color-brand-dark)] opacity-50 hover:opacity-100 transition-opacity"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category sections ────────────────────────────────────────── */}
      {categories.map((cat, idx) => {
        const previewProducts = cat.products.filter(p => p.featured).slice(0, 4)
        const fallbackProducts = cat.products.slice(0, 4)
        const displayProducts = previewProducts.length >= 2 ? previewProducts : fallbackProducts

        return (
          <section
            key={cat.id}
            className={`py-16 ${idx % 2 === 0 ? 'bg-[var(--color-bg-card)]' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section header */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                <div>
                  <div className="text-3xl mb-2">{cat.icon}</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-brand-dark)]">{cat.name}</h2>
                  <p className="text-sm text-[var(--color-muted)] mt-1 max-w-lg">{cat.description}</p>
                </div>
                <Link
                  href={`/productos/${cat.slug}`}
                  className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[var(--color-brand-dark)] text-[var(--color-brand-dark)] text-sm font-semibold hover:bg-[var(--color-brand-dark)] hover:text-white transition-colors"
                >
                  VER PRODUCTOS →
                </Link>
              </div>

              {/* Product cards */}
              {displayProducts.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {displayProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </section>
        )
      })}

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-brand-dark)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">¿Por qué Printsys?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏆', title: 'Representación oficial', desc: 'Distribuidores y agentes autorizados de marcas líderes mundiales.' },
              { icon: '🔧', title: 'Servicio técnico', desc: 'Instalación, puesta en marcha y mantenimiento preventivo y correctivo.' },
              { icon: '🚀', title: 'Stock local', desc: 'Repuestos y consumibles disponibles en Colombia para respuesta inmediata.' },
              { icon: '🎓', title: 'Capacitación', desc: 'Formación técnica a operadores y equipos de mantenimiento in-situ.' },
            ].map(s => (
              <div key={s.title} className="text-center">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="bg-white py-16 border-t border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-brand-dark)]">¿Listo para optimizar tu proceso de impresión?</h2>
          <p className="text-[var(--color-muted)] mt-4 leading-relaxed">Contáctanos y uno de nuestros especialistas te ayudará a encontrar la solución ideal.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[var(--color-cta)] text-white font-semibold hover:bg-[var(--color-cta-hover)] transition-colors"
            >
              Solicitar cotización
            </Link>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[var(--color-border)] text-[var(--color-brand-dark)] font-semibold hover:border-[var(--color-purple-mid)] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
