/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "scontent-sjc3-1.cdninstagram.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
