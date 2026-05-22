interface Props {
  eyebrow?: string
  title: string
  description?: string
  icon?: React.ReactNode
  children?: React.ReactNode
}

export default function PageHero({ eyebrow, title, description, icon, children }: Props) {
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
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">{title}</h1>
        {description && (
          <p className="text-white/50 mt-3 max-w-xl text-[15px] leading-relaxed">{description}</p>
        )}
        {children}
      </div>
    </div>
  )
}
