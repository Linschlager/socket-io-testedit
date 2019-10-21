const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash].js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: [
         path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
   new HtmlWebpackPlugin({
     inject: true,
     templateContent: `
      <html lang="en">
        <head>
          <title>Socket.IO Client</title>
        </head>
        <body>
          <div id="react-root"></div>
        </body>
      </html>
      `
   }),
  ],
  devServer: {
    hot: true,
    open: true,
  }
};
