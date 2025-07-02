/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    return config;
  },
  // 👇 Disable Turbopack explicitly
  experimental: {
    turbo: false,
  },
};

module.exports = nextConfig;
