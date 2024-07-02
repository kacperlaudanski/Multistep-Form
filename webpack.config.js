const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "boundle.js",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource', 
        generator: {
          filename: './images/[name][ext]'
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Multistep Form', 
        filename: 'index.html', 
        template: 'src/template.html'
    })
  ]
};
