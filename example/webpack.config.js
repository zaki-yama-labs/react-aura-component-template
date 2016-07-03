var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var libraryName = 'hereIsYourLibraryName';

module.exports = {
  context: __dirname,
  entry: {
    javascript: './src/scripts/index.js'
  },

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['react', 'es2015']
        }
      },
      {
        test: require.resolve('./src/scripts/index'),
        loaders: ['expose?' + libraryName, 'babel-loader?presets[]=react,presets[]=es2015']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('index.css')
  ]
};
