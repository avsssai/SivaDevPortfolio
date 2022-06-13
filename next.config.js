/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tenor.com', 'media.giphy.com']
  }
};

module.exports = nextConfig;
// next.config.js
// module.exports = {
//   webpack(config) {
//     config.infrastructureLogging = { debug: /PackFileCache/ };
//     return config;
//   }
// };
