import { siteConfig } from '@/data/catalog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contáctanos para cotizaciones, asesoría técnica o soporte de sistemas UV/LED e impresión flexográfica.',
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-card)]">
      <div className="bg-[var(--color-brand-dark)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Contáctanos</h1>
          <p className="mt-3 text-white/60">Respondemos en menos de 24 horas</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-brand-dark)] mb-4">Información de contacto</h2>
              <div className="space-y-4">
                {siteConfig.contacts.map(c => (
                  <div key={c.email} className="bg-white rounded-2xl p-5 border border-[var(--color-border)] flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-purple-mid)]/10 flex items-center justify-center text-[var(--color-purple-mid)] font-bold text-sm shrink-0">
                      {c.name[0]}
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-[var(--color-brand-dark)] text-sm">{c.name}</p>
                      <a href={`tel:${c.phone}`} className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-brand-dark)] transition-colors">{c.phone}</a>
                      <a href={`mailto:${c.email}`} className="block text-sm text-[var(--color-purple-mid)] hover:underline">{c.email}</a>
                      {c.whatsapp && (
                        <a href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[#25D366] font-medium mt-1">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          WhatsApp
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[var(--color-border)] space-y-2">
              <h3 className="font-semibold text-[var(--color-brand-dark)] text-sm">Oficina</h3>
              <p className="text-sm text-[var(--color-muted)]">{siteConfig.address}</p>
              <p className="text-sm text-[var(--color-muted)]">{siteConfig.city}</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
            <h2 className="text-2xl font-bold text-[var(--color-brand-dark)] mb-6">Envíanos un mensaje</h2>
            <form className="space-y-4" action="mailto:david.hdez@printsys.com.co" method="post">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--color-brand-dark)] mb-1.5">Nombre *</label>
                  <input type="text" name="nombre" required
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-purple-mid)] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--color-brand-dark)] mb-1.5">Empresa</label>
                  <input type="text" name="empresa"
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-purple-mid)] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-[var(--color-brand-dark)] mb-1.5">Email *</label>
                <input type="email" name="email" required
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-purple-mid)] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[var(--color-brand-dark)] mb-1.5">Teléfono</label>
                <input type="tel" name="telefono"
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-purple-mid)] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[var(--color-brand-dark)] mb-1.5">Asunto</label>
                <select name="asunto"
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-purple-mid)] transition-colors bg-white">
                  <option value="">Selecciona un tema</option>
                  <option>Cotización de equipo</option>
                  <option>Soporte técnico GEW</option>
                  <option>Consumibles y repuestos</option>
                  <option>Prensas Etirama</option>
                  <option>Máquinas Cartes</option>
                  <option>Cilindros Rotometal</option>
                  <option>Anilox JCTPRINT</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-[var(--color-brand-dark)] mb-1.5">Mensaje *</label>
                <textarea name="mensaje" rows={4} required
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-purple-mid)] transition-colors resize-none" />
              </div>
              <button type="submit"
                className="w-full py-3.5 rounded-full bg-[var(--color-cta)] text-white font-semibold text-sm hover:bg-[var(--color-cta-hover)] transition-colors">
                Enviar mensaje
              </button>
              <p className="text-xs text-[var(--color-muted)] text-center">Respondemos en menos de 24 horas hábiles</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
