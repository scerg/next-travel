/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  //output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/app")],
    prependData: `@import "shared/variables.scss";`,
  },
};

module.exports = nextConfig;
