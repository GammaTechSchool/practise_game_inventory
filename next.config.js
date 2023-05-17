/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PUBLIC_URL: "http://localhost:3001/"
  },

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/items/**',
      },
    ],
  },
}

module.exports = nextConfig
