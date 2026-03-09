module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        options: { mode: ["react-component"] },
      }
    );
    return cfg;
  },
}