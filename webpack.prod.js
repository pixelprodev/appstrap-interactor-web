const devConfig = require('./webpack.dev')
const TerserPlugin = require('terser-webpack-plugin')

const { devServer, ...commonConfig } = devConfig

// all we are using at the moment is html plugin - shouldnt be part of the build
delete commonConfig.plugins

module.exports = {
  ...commonConfig,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          mangle: true,
          output: {
            comments: false
          }
        }
      })
    ]
  }
}