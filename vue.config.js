module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  outputDir: "dist/files",
  devServer: {
    disableHostCheck: true,
    open: true,
    proxy: {
      "/api": {
        target: "http://drone-gitea-server:20080",
        changeOrigin:false
      },
      "/login": {
        target: "http://drone-gitea-server:20080",
        changeOrigin:false
      }
    }
  }
};
