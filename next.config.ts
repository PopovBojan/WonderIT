import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Prefer this app over the parent Documents/ lockfile as Turbopack root.
  turbopack: {
    root: path.join(__dirname),
  },
  // Allow Cursor browser / local tooling on 127.0.0.1 during development.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  output: 'standalone',
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://wonderit.io/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000",
          },
        ],
      },
    ];
  },
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
