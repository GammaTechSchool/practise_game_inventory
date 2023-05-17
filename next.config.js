/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    
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
