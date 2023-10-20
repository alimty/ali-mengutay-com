/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['source.unsplash.com', 'unsplash.com'],
  },
};

module.exports = nextConfig;
