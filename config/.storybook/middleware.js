const Appstrap = require('../../../appstrap/index')

module.exports = function(app) {
  app.use(new Appstrap({config: 'config/appstrap/config.js', watch: true}))
  return app
}