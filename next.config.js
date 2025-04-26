/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { dev, isServer }) => {
    // Disable webpack caching to resolve ENOENT errors
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;