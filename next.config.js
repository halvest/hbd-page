/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.tenor.com'], // tambahkan domain tempat host image kamu, jika ada
    formats: ['image/webp'],      // pastikan WebP diutamakan
    deviceSizes: [360, 640, 768, 1024, 1280], // responsive image sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // icon-size optimization
  },
};

module.exports = nextConfig;
