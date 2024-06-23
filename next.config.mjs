/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/?category=t-shirts',
      },
    ];
  },
};

export default nextConfig;
