import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.printsys.com.co'),
  title: {
    default: 'Printsys — Impresión · Acabado · Etiquetado',
    template: '%s | Printsys',
  },
  description: 'Principal proveedor de sistemas de curado UV/LED, instalación, soporte técnico autorizado, consumibles y repuestos. Atendemos prensas flexo, offset y otras aplicaciones especiales.',
  keywords: ['GEW', 'curado UV', 'UV LED', 'impresión flexo', 'Etirama', 'Cartes', 'Rotometal', 'Colombia', 'etiquetas'],
  openGraph: {
    siteName: 'Printsys',
    locale: 'es_CO',
    type: 'website',
    images: [{ url: '/hero-banner.jpg', width: 1080, height: 1080, alt: 'Printsys — Impresión, acabado y etiquetado' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/hero-banner.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
