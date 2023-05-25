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
        port: '3003',
        pathname: '/items/**',
      },
      {
        protocol : 'https',
        hostname : 'practise-game-inventory.vercel.app',
        port : '',
        pathname : '/items/**'
      }
    ],
  },
}

module.exports = nextConfig
