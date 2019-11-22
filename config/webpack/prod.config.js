const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

const baseConfig = require('./base.config')

const config = Object.assign({},
  baseConfig,
  {
    output: {
      ...baseConfig.output,
      path: path.join(process.cwd(), './lib')
    },
    mode: 'production',
    optimization: {
      minimizer: [new TerserPlugin()]
    }
  }
)

module.exports = config
