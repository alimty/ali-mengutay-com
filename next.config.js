/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  reactStrictMode: true,
  compiler: {
    // Suppress the warning about cz-shortcut-listen
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
