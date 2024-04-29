const { merge } = require("webpack-merge");
const comConfig = require("./webpack.com.config.js");

module.exports = merge(comConfig, {
  mode: "development",
  devServer: {
    static: "./public",
    hot: true, // 默认为值true
    host: "0.0.0.0",
    port: 6060,
    open: true,
    // proxy: {
    //   "/api": {
    //     target: "https://professional.ciganyuan.com",
    //     pathRewrite: {
    //       "^/api": "",
    //     },
    //     secure: false,
    //     changeOrigin: true,
    //   },
    // },
  },
});
