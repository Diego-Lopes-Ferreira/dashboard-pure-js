const path = require("path");

module.exports = {
  entry: "./scripts/index.js",
  module: {
    rules: [
      // { test: /\.(js)$/, use: "babel-loader" }
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "production",
};
