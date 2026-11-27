import type { NextConfig } from "next";
import { execSync } from "node:child_process";

function commitHash(): string {
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA;
  try {
    return execSync("git rev-parse HEAD").toString().trim();
  } catch {
    return "unknown";
  }
}

const nextConfig: NextConfig = {
  // Generate a fully static site into `out/` for GitHub Pages.
  output: "export",
  // Emit `about/index.html` style files, which GitHub Pages serves reliably.
  // Legacy `about.html` URLs are kept by `scripts/legacy-redirects.mjs`.
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_COMMIT_HASH: commitHash(),
  },
};

export default nextConfig;
