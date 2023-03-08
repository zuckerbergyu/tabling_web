/* eslint-disable */

module.exports = (phase) => {
  return {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  };
};
