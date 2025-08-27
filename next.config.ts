import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
    },
};

module.exports = {
    images: {
        remotePatterns: [new URL(`${process.env.MOVIE_IMAGE_URL}/**`)]
    }
}

export default nextConfig;
