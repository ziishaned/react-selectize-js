const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  filename: './index.html',
  template: path.join(__dirname, 'examples/src/index.html'),
})

module.exports = {
  mode: "production",
  entry: path.join(__dirname, 'examples/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'examples/dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /(node_modules|build)/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [htmlWebpackPlugin],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  }
};
