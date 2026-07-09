import Image from 'next/image'

const logos = [
  { id: 'bobst', name: 'BOBST', src: '/logos/compat/bobst.jpg' },
  { id: 'markandy', name: 'Mark Andy', src: '/logos/compat/markandy.jpg' },
  { id: 'heidelberg', name: 'Heidelberg', src: '/logos/compat/heidelberg.jpg' },
  { id: 'manroland', name: 'manroland', src: '/logos/compat/manroland.jpg' },
  { id: 'gallus', name: 'Gallus', src: '/logos/compat/gallus.jpg' },
  { id: 'nilpeter', name: 'Nilpeter', src: '/logos/compat/nilpeter.jpg' },
  { id: 'bhs', name: 'BHS', src: '/logos/compat/bhs.jpg' },
  { id: 'comexi', name: 'Comexi', src: '/logos/compat/comexi.jpg' },
  { id: 'windmoller', name: 'Windmöller & Hölscher', src: '/logos/compat/windmoller.jpg' },
]

// Duplicated so the CSS marquee loop is seamless
const track = [...logos, ...logos]

export default function CompatMarquee() {
  return (
    <section className="bg-white border-b border-[var(--color-border)] py-10 overflow-hidden">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 text-center mb-7 px-4">
        Compatible con las principales marcas de prensas y equipos
      </p>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex w-max animate-marquee">
          {track.map((logo, i) => (
            <div key={`${logo.id}-${i}`} className="shrink-0 w-[140px] h-14 mx-6 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image src={logo.src} alt={logo.name} width={140} height={56} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
