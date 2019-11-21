module.exports = {
  routes: [
    { path: '/test-config', mode: 'merge', get: {fixture: 'merged'} }
  ]
}