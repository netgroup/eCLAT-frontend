module.exports = {
  devServer: {
    proxy: {
      "^/backend": {
        target: "http://localhost:3000",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/backend": "/" },
      },
    },
  },
};
