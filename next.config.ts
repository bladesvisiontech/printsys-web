import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.shortpixel.ai' },
      { protocol: 'https', hostname: 'www.gewuv.es' },
      { protocol: 'https', hostname: 'etirama.com.br' },
      { protocol: 'https', hostname: 'www.cartes.it' },
      { protocol: 'https', hostname: 'rotometal.pl' },
      { protocol: 'https', hostname: 'alfaflexo.com' },
    ],
  },
}

export default nextConfig
