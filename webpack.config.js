var webpack = require('webpack')
var fs = require('fs');
var path = require('path')

module.exports = {
  entry: {main: './src/index.js'},
  output: {
    filename: 'app.build.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    // chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendor'],
    //   filename: 'vendor.js'
    // })
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        query: {
          plugins: [
            ['import', [{ libraryName: "antd", style: true }]],
          ],
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    },{
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /(\.jp(e)g|\.png|\.gif|\.svg)$/,
      exclude: /node_modules/,
      use: {
        loader: 'file-loader',
        query: {
          name: '[name].[ext]'
        },
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'fonts/[name].[hash:7].[ext]'
      }
    }]
  },
  resolve: {
    alias: {
      boss: path.resolve(__dirname, './src/boss.js')
    }
  }
};
