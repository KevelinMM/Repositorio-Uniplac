/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ww2.uniplaclages.edu.br'],
  },
  env:{
    BACKEND: 'http://172.16.248.107:3333/',
    FILESRV: ''
  }
}

module.exports = nextConfig
