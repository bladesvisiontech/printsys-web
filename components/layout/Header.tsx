'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { categories } from '@/data/catalog'

const navItems = [
  { label: 'Quiénes somos', href: '/nosotros' },
  {
    label: 'Productos',
    href: '/productos',
    children: categories.map(c => ({ label: `${c.icon} ${c.name}`, href: `/productos/${c.slug}` })),
  },
  { label: 'Aliados', href: '/aliados' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo-printsys.svg"
            alt="Printsys"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(item => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setDropdown(item.label)}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-[var(--color-brand-dark)] hover:text-[var(--color-purple-mid)] transition-colors"
              >
                {item.label}
              </Link>
              {item.children && dropdown === item.label && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-[var(--radius-md)] shadow-xl border border-[var(--color-border)] py-2 z-50">
                  {item.children.map(child => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-[var(--color-brand-dark)] hover:bg-[var(--color-bg-card)] hover:text-[var(--color-purple-mid)] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contacto"
            className="inline-flex items-center px-5 py-2 rounded-full bg-[var(--color-cta)] text-white text-sm font-semibold hover:bg-[var(--color-cta-hover)] transition-colors"
          >
            Cotizar
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md text-[var(--color-brand-dark)]"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[var(--color-border)] px-4 py-4 space-y-3">
          {navItems.map(item => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block text-sm font-medium text-[var(--color-brand-dark)] py-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 space-y-1">
                  {item.children.map(child => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block text-sm text-[var(--color-muted)] py-1"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contacto"
            className="block w-full text-center px-5 py-2.5 rounded-full bg-[var(--color-cta)] text-white text-sm font-semibold mt-2"
            onClick={() => setOpen(false)}
          >
            Cotizar
          </Link>
        </div>
      )}
    </header>
  )
}
