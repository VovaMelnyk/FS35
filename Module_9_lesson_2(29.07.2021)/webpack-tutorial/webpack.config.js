const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "My App",
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html",
      inject: "body",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: ["babel-loader"],
      },
    ],
  },
};
