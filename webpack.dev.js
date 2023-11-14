require('dotenv').config()
const { DefinePlugin } = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Appstrap = require('../appstrap')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '/build/ui'),
    filename: '[name].bundle.js',
    clean: true,
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    onBeforeSetupMiddleware: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      
      const strap = new Appstrap({ repository: 'config/appstrap', watch: true, gqlEndpoint: '/gql' })
      devServer.app.use(strap)
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new DefinePlugin({
      'process.env': {
        AWS_S3_BUCKET: JSON.stringify('launchpad--files--dev')
      }
    })
  ]
}