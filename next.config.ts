import type { NextConfig } from "next";

const repositoryName = "fresnelk.github.io";
const basePath = process.env.NODE_ENV === "production" ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {unoptimized: true},
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
