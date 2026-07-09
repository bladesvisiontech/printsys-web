import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Product } from '@/types/catalog'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const href = `/productos/${product.categoryId}/${product.slug}`

  return (
    <div className="card-hover group bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative bg-[var(--color-bg-card)] aspect-[4/3] overflow-hidden flex items-center justify-center p-6">
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            width={320}
            height={240}
            className="object-contain max-h-full transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-zinc-300">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-medium text-zinc-400">{product.name}</span>
          </div>
        )}

        {/* Brand tag */}
        {product.brandName && (
          <span className="absolute top-3 left-3 text-[11px] font-semibold bg-white/90 backdrop-blur-sm border border-[var(--color-border)] px-2.5 py-1 rounded-full text-[var(--color-brand-dark)] tracking-wide">
            {product.brandName}
          </span>
        )}
        {product.featured && (
          <span className="absolute top-3 right-3 text-[11px] font-semibold bg-[var(--color-green-mid)] text-white px-2.5 py-1 rounded-full">
            Destacado
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 className="font-semibold text-[var(--color-brand-dark)] text-[15px] leading-snug tracking-tight">{product.name}</h3>
          <p className="text-[13px] text-[var(--color-muted)] mt-1 leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Top 2 specs */}
        {product.specs.length > 0 && (
          <div className="space-y-1.5 border-t border-[var(--color-border)] pt-3">
            {product.specs.slice(0, 2).map(spec => (
              <div key={spec.label} className="flex justify-between text-[12px]">
                <span className="text-[var(--color-muted)]">{spec.label}</span>
                <span className="font-semibold text-[var(--color-brand-dark)]">{spec.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <Link
          href={href}
          className="mt-auto group/btn inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[var(--color-brand-dark)] text-white text-[13px] font-semibold transition-all duration-200 hover:bg-[var(--color-purple-dark)] active:scale-[0.98]"
        >
          Conocer más
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
    </div>
  )
}
