var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'src'),
      loader: 'react-hot!babel'
    }, {
      test: /\.scss$/,
      include: path.join(__dirname, 'src'),
      loader: 'style!css!postcss!sass'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: function () {
    return [autoprefixer({ browsers: ['last 3 versions'] })];
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
