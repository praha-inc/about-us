const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  mdxOptions: {
    remarkPlugins: [require("remark-emoji")],
  },
});

module.exports = withNextra({});
