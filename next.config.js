/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: 'always', // css 명을 자동으로 붙여줌
      labelFormat: '[filename]--[local]',
    }
  }
}

module.exports = nextConfig
