/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  // To redirect your page from home page to hatever page you want
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/example/login',
  //       permanent: false,
  //     },
  //   ]
  // }
}
