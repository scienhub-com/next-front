import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: false,
    pageExtensions: ["ts", "tsx", "mdx"],
};

export default nextConfig;
