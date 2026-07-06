'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json() as { ok?: boolean; error?: string }
      if (!res.ok || !result.ok) throw new Error(result.error ?? 'No se pudo enviar el mensaje')
      setStatus('sent')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'No se pudo enviar el mensaje')
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center text-center py-10 gap-3">
        <CheckCircle2 className="w-10 h-10 text-[var(--color-cta)]" />
        <h3 className="text-[17px] font-semibold text-[var(--color-brand-dark)]">¡Mensaje enviado!</h3>
        <p className="text-[13px] text-[var(--color-muted)] max-w-xs">Gracias por escribirnos. Te responderemos en menos de 24 horas hábiles.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-[13px] font-semibold text-[var(--color-purple-mid)] hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-semibold text-[var(--color-brand-dark)] uppercase tracking-wider mb-1.5">Nombre *</label>
          <input type="text" name="nombre" required
            className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-[13px] bg-[var(--color-bg-card)] focus:bg-white focus:outline-none focus:border-[var(--color-purple-mid)] transition-all" />
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-[var(--color-brand-dark)] uppercase tracking-wider mb-1.5">Empresa</label>
          <input type="text" name="empresa"
            className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-[13px] bg-[var(--color-bg-card)] focus:bg-white focus:outline-none focus:border-[var(--color-purple-mid)] transition-all" />
        </div>
      </div>
      <div>
        <label className="block text-[11px] font-semibold text-[var(--color-brand-dark)] uppercase tracking-wider mb-1.5">Email *</label>
        <input type="email" name="email" required
          className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-[13px] bg-[var(--color-bg-card)] focus:bg-white focus:outline-none focus:border-[var(--color-purple-mid)] transition-all" />
      </div>
      <div>
        <label className="block text-[11px] font-semibold text-[var(--color-brand-dark)] uppercase tracking-wider mb-1.5">Teléfono</label>
        <input type="tel" name="telefono"
          className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-[13px] bg-[var(--color-bg-card)] focus:bg-white focus:outline-none focus:border-[var(--color-purple-mid)] transition-all" />
      </div>
      <div>
        <label className="block text-[11px] font-semibold text-[var(--color-brand-dark)] uppercase tracking-wider mb-1.5">Asunto</label>
        <select name="asunto"
          className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-[13px] bg-[var(--color-bg-card)] focus:bg-white focus:outline-none focus:border-[var(--color-purple-mid)] transition-all">
          <option value="">Selecciona un tema</option>
          <option>Cotización de equipo</option>
          <option>Soporte técnico GEW</option>
          <option>Consumibles y repuestos</option>
          <option>Prensas Etirama</option>
          <option>Prensas Alfaflexo</option>
          <option>Máquinas Cartes</option>
          <option>Cilindros Rotometal</option>
          <option>Anilox JCTPRINT</option>
          <option>Otro</option>
        </select>
      </div>
      <div>
        <label className="block text-[11px] font-semibold text-[var(--color-brand-dark)] uppercase tracking-wider mb-1.5">Mensaje *</label>
        <textarea name="mensaje" rows={4} required
          className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] text-[13px] bg-[var(--color-bg-card)] focus:bg-white focus:outline-none focus:border-[var(--color-purple-mid)] transition-all resize-none" />
      </div>

      {status === 'error' && (
        <p className="text-[12px] text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[var(--color-cta)] text-white text-sm font-semibold hover:bg-[var(--color-cta-hover)] transition-all duration-200 shadow-[0_0_16px_rgba(86,198,45,0.25)] hover:shadow-[0_0_24px_rgba(86,198,45,0.4)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
        {status !== 'sending' && <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
      </button>
      <p className="text-[11px] text-[var(--color-muted)] text-center">Respondemos en menos de 24 horas hábiles</p>
    </form>
  )
}
