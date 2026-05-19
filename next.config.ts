import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wonderit.io',
      },
      {
        protocol: 'https',
        hostname: 'test-wp-site-wordpress.server.wonderit.io',
      },
    ],
  },
};

export default nextConfig;
