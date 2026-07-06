import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wonderit.io',
      },
      {
        protocol: 'https',
        hostname: 'wonderit-wp-wordpress.server.wonderit.io',
      },
      {
        protocol: 'http',
        hostname: 'wonderit-wp-wordpress.server.wonderit.io',
      },
    ],
  },
};

export default nextConfig;
