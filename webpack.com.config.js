const path = require("path");
const { VueLoaderPlugin } = require("vue-loader/dist/index");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "./build"),
    // clean: true, // 在生成文件之前清空 output 目录,可以不用CleanWebpackPlugin
    // publicPath: "./dist/",
    // assetModuleFilename: "img/[name]_[hash:8][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
          {
            loader: "postcss-loader",
            // options: {
            //   postcssOptions: {
            //     // 早期使用插件写法：require("autoprefixer")，现在不用写requirel
            //     plugins: ["autoprefixer"],
            //   },
            // },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        // 1、打包两张图片，并且这两张图片有自己的地址，将地址设置到img/bgi中
        // 缺点：多加载图片的两次请求
        // type: "asset/resource",

        // 2、将图片进行base64编码，并且将编码后的源码放到打包的js文件中
        // 缺点：造成js文件非常大，下载js文件本身消耗时间过长，
        // type: "asset/inline",

        // 3、合理的规范：
        // - 对于小一点的图片，可以进行base64的编码
        // - 对于大一点的图片，单独的图片打包，形成url地址，单独的请求这个url图片
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 60 * 1024,
          },
        },
        generator: {
          // 占位符：name=原来的图片名称 ext=拓展名 hash=Webpack生成的hash
          filename: "img/[name]_[hash:8][ext]",
        },
      },
      {
        // 处理字体图标的文件（字体默认是"asset/resource"模块去处理
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/inline",
      },
      {
        // 'asset/source'：导出资源的源代码
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              //   plugins: [
              //     "@babel/plugin-transform-arrow-functions",
              //     "@babel/plugin-transform-block-scoping",
              //   ],
              //   presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),

    new HtmlWebpackPlugin({
      title: "Webpack Demo",
      template: "./public/index.html",
      // 将 favicon.ico 复制到生成的 HTML 文件所在的输出目录，自定义路径需要CopyWebpackPlugin
      // favicon: path.resolve("./public/favicon.ico"),
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      commonText: "'DefinePlugin注入的全局变量'",
    }),
  ],
  resolve: {
    extensions: [".js", ".json", ".mjs", ".vue", ".ts", ".jsx", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
