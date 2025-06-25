/** @type {import('next').NextConfig} */
const nextConfig = {
  
   images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  experimental: {
    turbo: false,
  },// ✅ Correct new location for disabling Turbopack
};

export default nextConfig;
