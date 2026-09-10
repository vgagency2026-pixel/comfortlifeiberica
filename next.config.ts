import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/experiencias/ladera-norte-por-que-la-altitud-cambia-el-vino",
        destination: "/experiencias/ladera-norte-porque-la-altitud-cambia-el-vino",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
