import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    trailingSlash: true, // обязательно для корректного маршрутизатора
    output: "export",
    basePath: "/"
};

export default nextConfig;
