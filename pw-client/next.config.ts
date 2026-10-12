import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build to plain HTML/CSS/JS in out/ so Firebase Hosting can serve it
  // without a server function.
  output: "export",
};

export default nextConfig;
