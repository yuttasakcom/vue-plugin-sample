import { resolve } from "path";

const config = {
  entry: resolve(__dirname, "src/main.js"),
  output: {
    filename: "vue-plugin-sample.js",
    path: resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};

export default config;
