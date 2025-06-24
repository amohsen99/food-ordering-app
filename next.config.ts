import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // turbo: false, // 👈 Disable Turbopack, use Webpack instead
  },
};

export default nextConfig;
