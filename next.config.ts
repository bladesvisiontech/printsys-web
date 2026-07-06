import type { NextConfig } from 'next'

// All product images are now hosted locally under /public — no external
// domains needed. Add entries here only if a future product image must be
// hotlinked (not recommended: see feedback_printsys memory on hotlink risk).
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
}

export default nextConfig
