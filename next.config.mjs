/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // This forces Next.js to use webpack instead of turbopack
    return config;
  },
}

export default nextConfig
