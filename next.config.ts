import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=0, stale-while-revalidate=59',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
