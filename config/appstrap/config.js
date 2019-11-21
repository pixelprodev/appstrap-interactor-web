module.exports = {
  routes: [
    { path: '/test-config',
      get: (req, res) => res.json({hello: 'world'}),
      post: (req, res) => res.send('ok')
    },
    { path: '/test-config-two',
      put: (req, res) => res.json({hello: 'config-two'}),
    }
  ]
}