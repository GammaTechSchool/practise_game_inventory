/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PUBLIC_URL: "https://practise-game-inventory.vercel.app/",
  },

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3004',
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
