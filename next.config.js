/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ww2.uniplaclages.edu.br'],
  },
  env:{
    BACKEND: 'http://172.16.248.107:3333/',
    API_EMAIL: 'http://api.uniplaclages.edu.br:3991/enviaemail',
    FILESRV: ''
  }
}

module.exports = nextConfig
