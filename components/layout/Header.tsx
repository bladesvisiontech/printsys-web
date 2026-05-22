'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { X, Menu, Phone, ChevronRight } from 'lucide-react'
import { categories } from '@/data/catalog'
import { categoryIconMap } from '@/lib/categoryIcons'
import { siteConfig } from '@/data/catalog'

const navItems = [
  {
    label: 'Productos',
    href: '/productos',
    children: categories.map(c => ({ label: c.name, slug: c.slug, href: `/productos/${c.slug}` })),
  },
  { label: 'Aliados', href: '/aliados' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  const whatsapp = siteConfig.contacts[0]?.whatsapp
  const phone = siteConfig.contacts[0]?.phone

  return (
    <>
      {/* ── Desktop / top header ────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0" onClick={close}>
            <Image src="/logo-printsys.svg" alt="Printsys" width={140} height={40} priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(item => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => 'children' in item && setDropdown(item.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-[var(--color-brand-dark)] hover:text-[var(--color-purple-mid)] transition-colors"
                >
                  {item.label}
                </Link>
                {'children' in item && item.children && dropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-[var(--color-border)] py-1.5 z-50">
                    {item.children.map(child => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-2.5 px-4 py-2 text-[13px] text-[var(--color-brand-dark)] hover:bg-[var(--color-bg-card)] transition-colors"
                      >
                        <span className="text-[var(--color-muted)]">{categoryIconMap[child.slug]}</span>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contacto"
              className="inline-flex items-center px-5 py-2 rounded-full bg-[var(--color-cta)] text-white text-sm font-semibold hover:bg-[var(--color-cta-hover)] transition-all shadow-[0_0_14px_rgba(86,198,45,0.3)] active:scale-[0.98]"
            >
              Cotizar
            </Link>
          </div>

          {/* Mobile: solo logo visible, nav está en bottom bar */}
        </div>
      </header>

      {/* ── Mobile bottom bar ───────────────────────────────────────── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex h-16 border-t border-[var(--color-border)] bg-white/98 backdrop-blur-sm">
        {/* MENU */}
        <button
          onClick={() => setOpen(o => !o)}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 text-[var(--color-brand-dark)] active:bg-zinc-50 transition-colors"
        >
          {open
            ? <X className="w-5 h-5" />
            : <Menu className="w-5 h-5" />
          }
          <span className="text-[10px] font-semibold uppercase tracking-wider">{open ? 'Cerrar' : 'Menú'}</span>
        </button>

        {/* CALL */}
        <a
          href={`tel:${phone}`}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 border-x border-[var(--color-border)] text-[var(--color-brand-dark)] active:bg-zinc-50 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Llamar</span>
        </a>

        {/* COTIZAR */}
        <Link
          href="/contacto"
          onClick={close}
          className="flex flex-[1.6] flex-col items-center justify-center bg-[var(--color-cta)] active:bg-[var(--color-cta-hover)] transition-colors"
        >
          <span className="text-[13px] font-bold text-white uppercase tracking-wider">Cotizar</span>
        </Link>
      </div>

      {/* ── Mobile drawer (slide up) ─────────────────────────────────── */}
      {/* Backdrop */}
      <div
        onClick={close}
        className={`lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Drawer panel */}
      <div
        className={`lg:hidden fixed bottom-16 left-0 right-0 z-40 bg-white rounded-t-2xl border-t border-[var(--color-border)] transition-transform duration-300 ease-out ${open ? 'translate-y-0' : 'translate-y-full'}`}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-zinc-200" />
        </div>

        <nav className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto pb-6">
          {/* Productos con subcategorías */}
          <div>
            <Link
              href="/productos"
              onClick={close}
              className="flex items-center justify-between px-3 py-3 rounded-xl text-[var(--color-brand-dark)] font-semibold text-[15px] hover:bg-[var(--color-bg-card)] transition-colors"
            >
              Productos
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </Link>
            <div className="mt-1 grid grid-cols-2 gap-1.5 px-1">
              {categories.map(c => (
                <Link
                  key={c.slug}
                  href={`/productos/${c.slug}`}
                  onClick={close}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[var(--color-bg-card)] hover:bg-zinc-100 transition-colors"
                >
                  <span className="text-[var(--color-purple-mid)] shrink-0">{categoryIconMap[c.slug]}</span>
                  <span className="text-[12px] font-medium text-[var(--color-brand-dark)] leading-tight">{c.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="h-px bg-[var(--color-border)] mx-2 my-2" />

          <Link href="/aliados" onClick={close} className="flex items-center justify-between px-3 py-3 rounded-xl text-[var(--color-brand-dark)] font-semibold text-[15px] hover:bg-[var(--color-bg-card)] transition-colors">
            Aliados
            <ChevronRight className="w-4 h-4 text-zinc-400" />
          </Link>

          <Link href="/contacto" onClick={close} className="flex items-center justify-between px-3 py-3 rounded-xl text-[var(--color-brand-dark)] font-semibold text-[15px] hover:bg-[var(--color-bg-card)] transition-colors">
            Contacto
            <ChevronRight className="w-4 h-4 text-zinc-400" />
          </Link>

          {/* WhatsApp */}
          {whatsapp && (
            <>
              <div className="h-px bg-[var(--color-border)] mx-2 my-2" />
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[var(--color-bg-card)] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <span className="text-[14px] font-semibold text-[var(--color-brand-dark)]">WhatsApp</span>
              </a>
            </>
          )}
        </nav>
      </div>
    </>
  )
}
