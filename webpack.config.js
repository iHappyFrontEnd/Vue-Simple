var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'js/app.js'
  },
  devServer: {
    contentBase: './dist',
    port: 8900,
    open: true,
    host: '0.0.0.0'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'static/img/[name].[ext]'
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'static/font/[name].[ext]'
          }
        }
      },
      {
        test: /\.css$/,
        use: {
          loader: 'style-loader!css-loader'
        }
      }
    ]
  },
  // resolve: {
  //   alias: {
  //     vue: 'vue/dist/vue.js'
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    })
  ]
}