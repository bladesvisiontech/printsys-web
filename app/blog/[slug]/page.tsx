import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Calendar, ExternalLink } from 'lucide-react'
import { blogPosts, getBlogPostBySlug } from '@/data/catalog'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

function formatDate(date: string) {
  return new Date(date + 'T00:00:00').toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://www.printsys.com.co${post.image}`,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'PRINT SYS' },
    publisher: { '@type': 'Organization', name: 'PRINT SYS' },
    mainEntityOfPage: `https://www.printsys.com.co/blog/${post.slug}`,
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-card)]">
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Slim breadcrumb header */}
      <div className="relative bg-[var(--color-brand-dark)] overflow-hidden">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[var(--color-purple-dark)] opacity-20 blur-[60px]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
          <div className="flex items-center gap-2 text-[11px] text-white/30 mb-4">
            <Link href="/blog" className="hover:text-white/60 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white/60 line-clamp-1">{post.title}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[12px] font-medium text-white/50 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(post.date)}
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">{post.title}</h1>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[var(--color-border)] mb-10">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map(tag => (
            <span key={tag} className="text-[11px] font-semibold bg-white border border-[var(--color-border)] px-3 py-1 rounded-full text-[var(--color-brand-dark)] tracking-wide">
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-5">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-[var(--color-brand-dark)] text-[16px] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {post.sourceUrl && (
          <a
            href={post.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] text-[var(--color-muted)] hover:text-[var(--color-brand-dark)] transition-colors mt-8"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Ver publicación original
          </a>
        )}

        <div className="border-t border-[var(--color-border)] mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-[13px] text-[var(--color-muted)] hover:text-[var(--color-brand-dark)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Ver todas las noticias
          </Link>
          <Link
            href="/contacto"
            className="group shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-cta)] text-white text-[13px] font-semibold hover:bg-[var(--color-cta-hover)] transition-all duration-200 shadow-[0_0_16px_rgba(86,198,45,0.3)] active:scale-[0.98]"
          >
            Solicitar cotización
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <div className="bg-white border-t border-[var(--color-border)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="text-[13px] font-bold text-[var(--color-brand-dark)] uppercase tracking-widest mb-6">
              Más noticias
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map(p => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="card-hover group bg-[var(--color-bg-card)] rounded-2xl border border-[var(--color-border)] overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-[14px] font-semibold text-[var(--color-brand-dark)] leading-snug line-clamp-2 group-hover:text-[var(--color-purple-mid)] transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
