/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ww2.uniplaclages.edu.br'],
  },
  env:{
    BACKEND: 'https://apidev.uniplaclages.edu.br:40002/',
    API_EMAIL: 'http://api.uniplaclages.edu.br:3991/enviaemail',
    FILESRV: 'https://apidev.uniplaclages.edu.br:40002/'
  }
}

module.exports = nextConfig
