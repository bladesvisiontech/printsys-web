import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar } from 'lucide-react'
import { blogPosts } from '@/data/catalog'
import PageHero from '@/components/ui/PageHero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Noticias, instalaciones y novedades de PRINT SYS: curado UV/LED, prensas flexográficas, etiquetas y empaques en Colombia y Latinoamérica.',
}

function formatDate(date: string) {
  return new Date(date + 'T00:00:00').toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className="min-h-screen bg-[var(--color-bg-card)]">
      <PageHero
        eyebrow="Novedades"
        title="Blog"
        description="Instalaciones, alianzas y noticias de PRINT SYS en la industria de etiquetas y empaques."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {posts.map(post => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="card-hover animate-fade-up group bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-bg-card)]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--color-muted)] uppercase tracking-wide">
                  <Calendar className="w-3 h-3" />
                  {formatDate(post.date)}
                </div>
                <h2 className="text-[16px] font-semibold text-[var(--color-brand-dark)] tracking-tight mt-2 group-hover:text-[var(--color-purple-mid)] transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-[13px] text-[var(--color-muted)] mt-2 leading-relaxed flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-cta)]">
                  Leer más
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
