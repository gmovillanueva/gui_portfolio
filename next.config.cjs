/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack5: true,
  webpack: (config, {isServer}) => {
      if(!isServer){
        config.resolve.fallback = {
          fs: false,
          path: false,
          os: false,
        }
      }
    return config;
  },
  images: {
    loader: 'custom',
    formats: ['image/avif', 'image/webp', 'image/png'],
  },
};

module.exports = nextConfig;
