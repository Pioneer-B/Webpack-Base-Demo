const path = require("path");
const { merge } = require("webpack-merge");
const comConfig = require("./webpack.com.config.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(comConfig, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./public"),
          // 可以省略，但不建议；
          // 打包时虽然会默认复制到打包的目录下，但webpack-dev-server运行时不会默认复制到打包的目录下
          to: path.resolve(__dirname, "./build"),
          globOptions: {
            ignore: ["**/.DS_Store", "**/index.html"],
          },
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false, // 禁用生成 bundle.js.LICENSE.txt 文件
      }),
    ],
  },
});
