import Image from 'next/image'
import Link from 'next/link'
import { Globe, Wrench, Handshake, TrendingUp, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/data/catalog'
import PageHero from '@/components/ui/PageHero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description: 'Conoce a PRINT SYS S.A.S.: nuestra historia, misión, visión y por qué somos el aliado tecnológico de la industria de etiquetas y empaques.',
}

const razones = [
  {
    Icon: Globe,
    title: 'Tecnología de Clase Mundial',
    desc: 'Representamos fabricantes reconocidos internacionalmente por su innovación y calidad.',
  },
  {
    Icon: Wrench,
    title: 'Conocimiento Técnico',
    desc: 'Asesoramos a nuestros clientes para seleccionar e implementar la solución adecuada para cada aplicación.',
  },
  {
    Icon: Handshake,
    title: 'Acompañamiento Cercano',
    desc: 'Construimos relaciones de largo plazo basadas en confianza, soporte y atención personalizada.',
  },
  {
    Icon: TrendingUp,
    title: 'Resultados para Nuestros Clientes',
    desc: 'Cada solución busca mejorar productividad, calidad, eficiencia y competitividad.',
  },
]

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-card)]">
      <PageHero
        eyebrow="Desde 2019"
        title="Quiénes Somos"
        description="La mejor tecnología solo genera resultados cuando está acompañada de conocimiento, experiencia y un compromiso genuino con el éxito de cada cliente."
      />

      {/* Historia */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-3">Nuestro origen</p>
            <p className="text-[var(--color-brand-dark)] text-lg leading-relaxed">
              En PRINT SYS S.A.S. creemos que la mejor tecnología solo genera resultados cuando está acompañada de conocimiento, experiencia y un compromiso genuino con el éxito de cada cliente.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">
              Desde nuestra fundación en 2019, nacimos con un propósito claro: ofrecer soluciones tecnológicas ágiles, sencillas y confiables que ayuden a la industria de etiquetas y empaques a mejorar su productividad, calidad y competitividad.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">
              Más que suministrar equipos y consumibles, nos convertimos en un aliado estratégico que acompaña a cada cliente en la identificación, implementación y optimización de la solución que mejor se adapta a sus necesidades.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--color-border)]">
            <Image
              src="/quienes-somos/tecnologia.jpg"
              alt="Printsys"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Hoy */}
      <div className="bg-white border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--color-border)] order-2 lg:order-1">
              <Image
                src="/quienes-somos/experiencia.jpg"
                alt="Curado UV LED GEW aplicado en la industria"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-3">Hoy</p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Hoy representamos fabricantes líderes a nivel mundial y ofrecemos un portafolio integral de soluciones para impresión, curado UV y UV LED, inspección, automatización, anilox, cilindros de impresión y otras tecnologías especializadas para la industria gráfica.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Gracias a la confianza de nuestros clientes y aliados, nuestra experiencia respalda proyectos en diferentes países de Latinoamérica, contribuyendo al crecimiento de empresas que buscan innovar, optimizar sus procesos y alcanzar los más altos estándares de calidad.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Por qué PRINT SYS */}
      <section className="bg-[var(--color-brand-dark)] py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid pointer-events-none opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">¿Por qué PRINT SYS?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {razones.map(({ Icon, title, desc }) => (
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

      {/* Nuestra Esencia — Misión / Visión */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-brand-dark)] tracking-tight">Nuestra Esencia</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8">
            <h3 className="text-[13px] font-bold text-[var(--color-brand-dark)] uppercase tracking-widest">Misión</h3>
            <div className="w-10 h-1 rounded-full bg-[var(--color-cta)] mt-4 mb-5" />
            <p className="text-[var(--color-muted)] leading-relaxed">
              Impulsar el crecimiento de la industria de etiquetas y empaques mediante soluciones tecnológicas de clase mundial, asesoría especializada y un servicio cercano que genere valor sostenible para nuestros clientes.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8">
            <h3 className="text-[13px] font-bold text-[var(--color-brand-dark)] uppercase tracking-widest">Visión</h3>
            <div className="w-10 h-1 rounded-full bg-[var(--color-cta)] mt-4 mb-5" />
            <p className="text-[var(--color-muted)] leading-relaxed">
              Ser el aliado tecnológico de mayor confianza para la industria gráfica en Latinoamérica, reconocido por la excelencia de nuestras soluciones, la innovación constante y el compromiso con el éxito de nuestros clientes.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-white py-20 border-t border-[var(--color-border)]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-brand-dark)] tracking-tight">
            Hablemos sobre cómo podemos impulsar los ahorros energéticos en su empresa
          </h2>
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
    </div>
  )
}
