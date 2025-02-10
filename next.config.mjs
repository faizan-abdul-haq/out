import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default withSentryConfig(
  nextConfig,
  {
    silent: true,
    org: "javascript-mastery",
    project: "javascript-nextjs",
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,

    // Menonaktifkan plugin Webpack untuk menghindari upload source maps
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  }
);
