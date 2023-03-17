const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  // providerImportSource: "@mdx-js/react",
  pageExtensions: ["js", "jsx", "mdx"],
});
