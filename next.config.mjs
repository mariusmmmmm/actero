/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/titlu-calatorie-urgent-spania',
        destination: '/titlu-calatorie-urgenta-spania',
        permanent: true,
      },
      {
        source: '/transcriere-certificat-nastere-spania',
        destination: '/transcriere-nastere-spania',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
