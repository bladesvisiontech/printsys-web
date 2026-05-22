import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedBrands, brands } from '@/data/catalog'

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: 'Reparación y mantenimiento de sistemas UV',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Asesoría técnica de sistemas UV y UV LED',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Sistemas UV portátiles para pruebas de curado In Situ',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Mini unidad de laboratorio UV y LED UV para pruebas de curado',
  },
]

const sustainability = [
  'Los LEDs UV reducen la potencia total del sistema instalado',
  'Los LEDs UV reducen la demanda máxima al inicio',
  'Los LEDs UV reducen el consumo durante la operación',
  'Los LEDs UV reducen la huella de carbono, incluso en instalaciones de emisiones netas cero',
]

export default function HomePage() {
  const featuredBrands = getFeaturedBrands()

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center py-16">
          <div className="space-y-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)] text-xs text-[var(--color-purple-mid)] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-green-mid)]" />
              Distribuidor oficial GEW desde 2019
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[var(--color-brand-dark)]">
              Somos el{' '}
              <span className="gradient-text">principal proveedor</span>{' '}
              de suministros, repuestos y servicio técnico especializado
            </h1>
            <p className="text-base text-[var(--color-purple-mid)] font-medium">
              en tecnología de curado UV/LED
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-cta)] text-white text-sm font-semibold hover:bg-[var(--color-cta-hover)] transition-colors shadow-lg shadow-green-500/20">
                Conoce más aquí
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/marcas/gew"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-border)] text-[var(--color-brand-dark)] text-sm font-medium hover:border-[var(--color-purple-mid)] transition-colors">
                Ver GEW
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-[var(--color-brand-dark)]">
              <Image
                src="https://cdn.shortpixel.ai/spai118/q_lossy+ret_img+to_auto/www.gewuv.es/wp-content/uploads/LeoLED2-STD-LeoLED2-Cassette-and-AeroLED2-DSC_4997-Simplified-2000px.jpg"
                alt="GEW AeroLED2 y LeoLED2"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 -z-10 blur-3xl opacity-20 gradient-brand rounded-full scale-75" />
          </div>
        </div>
      </section>

      {/* ── Aliados banner ───────────────────────────────────────── */}
      <div className="bg-[var(--color-brand-dark)] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-6 overflow-x-auto">
          <span className="text-white/40 text-xs font-medium whitespace-nowrap shrink-0">Nuestros aliados</span>
          <div className="flex items-center gap-8">
            {brands.slice(0, 6).map(b => (
              <Link key={b.id} href={`/marcas/${b.slug}`}
                className="text-white/60 hover:text-white text-sm font-semibold transition-colors whitespace-nowrap">
                {b.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── About ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 aspect-video rounded-2xl overflow-hidden">
              <Image src="https://cdn.shortpixel.ai/spai118/q_lossy+ret_img+to_auto/www.gewuv.es/wp-content/uploads/E4C-en-prensa-1.jpg"
                alt="Sistema UV en prensa" width={700} height={400} className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image src="https://cdn.shortpixel.ai/spai118/q_lossy+ret_img+to_auto/www.gewuv.es/wp-content/uploads/DSC_4570_Main-Image-Edited-1.5-1024x682.jpg"
                alt="Técnico GEW" width={350} height={350} className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image src="https://cdn.shortpixel.ai/spai118/q_lossy+ret_img+to_auto/www.gewuv.es/wp-content/uploads/Conversion-de-etiquetas-12-scaled-2240x1866.jpg"
                alt="Conversión de etiquetas" width={350} height={350} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-5">
            <span className="text-2xl text-[var(--color-purple-mid)]">✦</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-brand-dark)] leading-tight">
              Brindamos soluciones en tecnología de Curado UV/LED e Impresión Flexográfica
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Nuestro portafolio incluye el suministro de equipos nuevos, repuestos y servicio técnico especializado de las marcas GEW, Etirama, Cartes, Rotometal y más aliados estratégicos para la industria de la impresión en Colombia.
            </p>
            <ul className="space-y-2">
              {['Distribuidor oficial GEW desde 2019', 'Servicio técnico en todo el país', 'Equipos para pruebas de curado en su prensa', 'Instalación y actualización de sistemas'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-brand-dark)]">
                  <span className="w-5 h-5 rounded-full bg-[var(--color-green-mid)]/15 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-[var(--color-green-mid)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/nosotros"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-cta)] text-white text-sm font-semibold hover:bg-[var(--color-cta-hover)] transition-colors">
              Conócenos
            </Link>
          </div>
        </div>
      </section>

      {/* ── Servicios ────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--color-bg-card)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-brand-dark)]">Nuestros servicios</h2>
            <p className="mt-2 text-[var(--color-muted)] text-sm">Tenemos una solución a la medida de tus necesidades</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(s => (
              <div key={s.title}
                className="group bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-all space-y-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-green-mid)]/10 text-[var(--color-green-mid)] flex items-center justify-center group-hover:bg-[var(--color-green-mid)] group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <p className="text-sm font-medium text-[var(--color-brand-dark)] leading-snug">{s.title}</p>
                <Link href="/servicios"
                  className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--color-cta)] text-white text-xs font-semibold hover:bg-[var(--color-cta-hover)] transition-colors">
                  Conoce más aquí
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marcas ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-brand-dark)]">Nuestras marcas aliadas</h2>
            <p className="mt-2 text-[var(--color-muted)] text-sm">Representamos a los mejores fabricantes de la industria gráfica</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredBrands.map(brand => (
              <Link key={brand.id} href={`/marcas/${brand.slug}`}
                className="group relative bg-[var(--color-bg-card)] rounded-2xl p-6 border border-[var(--color-border)] hover:border-[var(--color-purple-mid)]/40 hover:shadow-xl transition-all overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 -translate-y-8 translate-x-8"
                  style={{ backgroundColor: brand.accentColor }} />
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[var(--color-brand-dark)]">{brand.name}</h3>
                  <p className="text-xs text-[var(--color-purple-mid)] font-medium">{brand.tagline.es}</p>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed line-clamp-3">{brand.description.es}</p>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-white bg-[var(--color-brand-dark)]/60 px-3 py-1 rounded-full">
                      {brand.relationship.es}
                    </span>
                    <svg className="w-5 h-5 text-[var(--color-purple-mid)] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/marcas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-border)] text-[var(--color-brand-dark)] text-sm font-medium hover:border-[var(--color-purple-mid)] transition-colors">
              Ver todos los aliados
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--color-bg-card)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-purple-mid)]">Lo que dicen nuestros clientes</p>
            <blockquote className="text-2xl sm:text-3xl font-bold text-[var(--color-brand-dark)] leading-tight">
              "Printsys ha transformado nuestra empresa con sus soluciones tecnológicas de vanguardia. Una alianza excepcional."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-purple-mid)]/20 flex items-center justify-center text-[var(--color-purple-mid)] font-bold text-sm">G</div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-brand-dark)]">Gerente — Imprenta Campaña</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-[var(--color-green-mid)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src="https://cdn.shortpixel.ai/spai118/q_lossy+ret_img+to_auto/www.gewuv.es/wp-content/uploads/IMG_1968_2000px.jpg"
              alt="Prensa con sistema GEW" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-purple-dark)]/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Sostenibilidad ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src="https://cdn.shortpixel.ai/spai118/q_lossy+ret_img+to_auto/www.gewuv.es/wp-content/uploads/Recubrimiento-industrial-conversion-y-acabado-10-scaled.jpg"
              alt="Sostenibilidad LED UV" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-brand-dark)] leading-tight">
              La tecnología LED UV tiene un{' '}
              <span className="gradient-text">impacto positivo en la sostenibilidad</span>
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {sustainability.map((text, i) => (
                <div key={i} className="flex gap-3 p-4 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-green-mid)]/15 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[var(--color-green-mid)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-xs text-[var(--color-brand-dark)] leading-snug">{text}</p>
                </div>
              ))}
            </div>
            <Link href="/marcas/gew"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-cta)] text-white text-sm font-semibold hover:bg-[var(--color-cta-hover)] transition-colors">
              Descubrir GEW UV LED
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Final ────────────────────────────────────────────── */}
      <section className="py-14 bg-[var(--color-brand-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-left">
            ¡Podemos asesorarte en todas tus necesidades!
          </h2>
          <Link href="/contacto"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-cta)] text-white font-semibold hover:bg-[var(--color-cta-hover)] transition-colors">
            Conoce más aquí
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
