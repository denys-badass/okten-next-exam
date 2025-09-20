import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
    images: {
        remotePatterns: [new URL(`${process.env.MOVIE_IMAGE_URL!}/**`)],
    }
}

export default nextConfig;
