import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/personal-site' : '',
  assetPrefix: isGithubPages ? '/personal-site/' : '',
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
