const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.m?js$/, exclude: /(node_modules)/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CodePen Job Fetcher',
      template: './src/index.html'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  mode: 'development'
}