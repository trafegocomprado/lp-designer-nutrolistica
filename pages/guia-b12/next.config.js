/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // gera pasta /out com HTML estático — necessário para Cloudflare Pages
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
