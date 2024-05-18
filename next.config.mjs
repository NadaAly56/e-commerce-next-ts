/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "6060",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
