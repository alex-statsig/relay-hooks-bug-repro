module.exports = {
  reactStrictMode: false,
  compiler: {
    relay: {
      src: "./",
      schema: "./schema.docs.graphql",
      language: "typescript",
      artifactDirectory: "./components/__generated__",
    },
  },
};
