/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/titlu-calatorie-urgent-spania',
        destination: '/titlu-calatorie-urgenta-spania',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
