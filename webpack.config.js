const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: ["./src/main.js"],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js",
    library: ["vue-plugin-sample"],
    libraryTarget: "umd"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
