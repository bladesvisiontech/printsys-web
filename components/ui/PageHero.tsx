import Image from 'next/image'

interface Props {
  eyebrow?: string
  title: string
  description?: string
  icon?: React.ReactNode
  titleImage?: string
  children?: React.ReactNode
}

export default function PageHero({ eyebrow, title, description, icon, titleImage, children }: Props) {
  return (
    <div className="relative bg-[var(--color-brand-dark)] overflow-hidden">
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[var(--color-purple-dark)] opacity-20 blur-[80px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-white mb-5">
            {icon}
          </div>
        )}
        {eyebrow && !icon && (
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-3">{eyebrow}</p>
        )}
        {titleImage ? (
          <>
            <h1 className="sr-only">{title}</h1>
            <div className="h-16 sm:h-20 w-auto max-w-[280px] bg-white rounded-xl p-3 flex items-center">
              <Image src={titleImage} alt={title} width={280} height={80} className="w-full h-full object-contain" />
            </div>
          </>
        ) : (
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">{title}</h1>
        )}
        {description && (
          <p className="text-white/50 mt-3 max-w-xl text-[15px] leading-relaxed">{description}</p>
        )}
        {children}
      </div>
    </div>
  )
}
