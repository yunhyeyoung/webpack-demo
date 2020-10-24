var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: '.src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'output.min.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['MiniCssExtractPlugin.loader', 'css-loader'],
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // style-loader:reates `style` nodes from JS strings
          //make .css from css js string
          'MiniCssExtractPlugin.loader',
          // Translates CSS into CommonJS
          'css-loader',
          'postcss-loader', //순서중요
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]
};
