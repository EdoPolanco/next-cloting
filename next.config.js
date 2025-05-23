const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "export",
  images: {
    unoptimized: true
  }
};

module.exports = withContentlayer(nextConfig);