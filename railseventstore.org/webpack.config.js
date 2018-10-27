const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "source"),
  output: {
    path: path.resolve(__dirname, ".tmp/dist"),
    filename: "javascripts/all.js"
  },
  entry: ["./stylesheets/styles.css"],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "stylesheets/all.css"
    })
  ]
};