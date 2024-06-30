/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/?category=shirt',
      },
    ];
  },
};

export default nextConfig;
