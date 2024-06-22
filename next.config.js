/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['uploadthing.com', 'lh3.googleusercontent.com','oxq.youprice.fr', 'dte.ohm-energie.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
      }
    ],
  },
}

module.exports = nextConfig
