import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Zap, Wrench, Package, GraduationCap } from 'lucide-react'
import { siteConfig, getBrandBySlug } from '@/data/catalog'
import HomeCatalog from '@/components/sections/HomeCatalog'

const logos = [
  { id: 'gew',       name: 'GEW',       src: '/logos/gew.svg'       },
  { id: 'etirama',   name: 'Etirama',   src: '/logos/etirama.jpg'   },
  { id: 'cartes',    name: 'Cartes',    src: '/logos/cartes.png'    },
  { id: 'rotometal', name: 'Rotometal', src: '/logos/rotometal.jpg', scale: 0.7 },
  { id: 'alfaflexo', name: 'Alfaflexo', src: '/logos/alfaflexo.jpg' },
  { id: 'kingsun',   name: 'Kingsun',   src: '/logos/kingsun.webp'  },
]

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--color-brand-dark)] overflow-hidden">
        {/* Grid texture */}
        <div className="absolute inset-0 hero-grid" />
        {/* Glow blobs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--color-purple-dark)] opacity-20 blur-[100px]" style={{ animation: 'float 8s ease-in-out infinite' }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-green-dark)] opacity-10 blur-[120px]" style={{ animation: 'float 10s ease-in-out infinite reverse' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 relative z-10">
          <div className="max-w-3xl stagger">
            <div className="animate-fade-up inline-flex items-center gap-2 text-[11px] font-semibold bg-white/8 border border-white/10 text-white/70 pl-2 pr-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
              <Image src="/logos/gew.svg" alt="GEW" width={18} height={18} className="h-[18px] w-auto rounded-sm bg-white/90 p-0.5" />
              Distribuidor oficial GEW · Colombia
            </div>
            <h1 className="animate-fade-up text-4xl sm:text-6xl font-bold text-white leading-[1.15] tracking-tight">
              Soluciones tecnológicas de impresión, acabado y etiquetado{' '}
              <span className="gradient-text">con un enfoque sostenible</span>
            </h1>
            <p className="animate-fade-up text-white/50 mt-6 text-lg max-w-xl leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="animate-fade-up flex flex-col sm:flex-row gap-3 mt-10">
              <Link
                href="/productos"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--color-cta)] text-white text-sm font-semibold hover:bg-[var(--color-cta-hover)] transition-all duration-200 shadow-[0_0_20px_rgba(86,198,45,0.35)] hover:shadow-[0_0_28px_rgba(86,198,45,0.5)] active:scale-[0.98]"
              >
                Ver catálogo
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/15 text-white/80 text-sm font-semibold hover:border-white/35 hover:text-white transition-all duration-200 active:scale-[0.98]"
              >
                Solicitar asesoría
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand logos strip ────────────────────────────────────────── */}
      <section className="border-y border-[var(--color-border)] bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 text-center mb-7">Nuestros aliados estratégicos</p>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            {logos.map(brand => (
              <Link
                key={brand.id}
                href={getBrandBySlug(brand.id) ? `/aliados/${brand.id}` : '/aliados'}
                className="opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105 flex items-center justify-center h-14 w-32"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={160}
                  height={64}
                  className="w-auto max-w-full object-contain"
                  style={{ height: `${3.5 * (brand.scale ?? 1)}rem`, maxHeight: '100%' }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Catalog with tabs ────────────────────────────────────────── */}
      <HomeCatalog />

      {/* ── Por qué Printsys ─────────────────────────────────────────── */}
      <section className="bg-[var(--color-brand-dark)] py-24">
        <div className="absolute inset-0 hero-grid pointer-events-none opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">¿Por qué Printsys?</h2>
            <p className="text-white/40 mt-3 text-sm max-w-md mx-auto">Soporte técnico especializado y acceso directo a las mejores marcas del mundo.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { Icon: Zap,            title: 'Representación oficial', desc: 'Distribuidores y agentes autorizados de marcas líderes mundiales.' },
              { Icon: Wrench,         title: 'Servicio técnico',       desc: 'Instalación, puesta en marcha y mantenimiento preventivo y correctivo.' },
              { Icon: Package,        title: 'Stock local',            desc: 'Repuestos y consumibles disponibles en Colombia para respuesta inmediata.' },
              { Icon: GraduationCap,  title: 'Capacitación',           desc: 'Formación técnica a operadores y equipos de mantenimiento in-situ.' },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 transition-colors duration-200">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-green-mid)]/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[var(--color-green-mid)]" />
                </div>
                <h3 className="font-semibold text-white text-[15px] mb-2">{title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="bg-white py-20 border-t border-[var(--color-border)]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-brand-dark)] tracking-tight">¿Listo para optimizar tu proceso?</h2>
          <p className="text-[var(--color-muted)] mt-4 leading-relaxed text-[15px]">Uno de nuestros especialistas te ayudará a encontrar la solución ideal para tu operación.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--color-cta)] text-white text-sm font-semibold hover:bg-[var(--color-cta-hover)] transition-all duration-200 shadow-[0_0_20px_rgba(86,198,45,0.25)] hover:shadow-[0_0_28px_rgba(86,198,45,0.4)] active:scale-[0.98]"
            >
              Solicitar cotización
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-[var(--color-border)] text-[var(--color-brand-dark)] text-sm font-semibold hover:border-zinc-400 transition-all duration-200 active:scale-[0.98]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
