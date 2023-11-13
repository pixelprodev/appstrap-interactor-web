const devConfig = require('./webpack.dev')
const TerserPlugin = require('terser-webpack-plugin')

const { devServer, ...commonConfig } = devConfig

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
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        AWS_S3_BUCKET: JSON.stringify('launchpad--files--prod')
      }
    })
  ]
}