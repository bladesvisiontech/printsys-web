import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Printsys — Impresión · Acabado · Etiquetado',
    template: '%s | Printsys',
  },
  description: 'Principal proveedor de suministros, repuestos y servicio técnico especializado en tecnología de curado UV/LED e impresión flexográfica en Colombia.',
  keywords: ['GEW', 'curado UV', 'UV LED', 'impresión flexo', 'Etirama', 'Cartes', 'Rotometal', 'Colombia', 'etiquetas'],
  openGraph: {
    siteName: 'Printsys',
    locale: 'es_CO',
    type: 'website',
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
