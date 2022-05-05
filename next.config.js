/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/blog/page',
        destination: '/blog/page/1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
