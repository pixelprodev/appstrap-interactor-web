module.exports = {
  entry: ['@babel/polyfill', './src/Index.js'],
  output: {
    filename: 'web-ui.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /(\.js[x]?$)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
