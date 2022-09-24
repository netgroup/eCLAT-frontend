module.exports = {
  devServer: {
    proxy: {
      "^/backend": {
        target: "http://localhost:3200/api/v1",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/backend": "/" },
      },
    },
  },
};
