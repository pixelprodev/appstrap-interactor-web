module.exports = {
  handlers: [
    {
      path: '/foo',
      method: 'GET',
      mode: 'merge',
      payload: {
        bar: 'baz'
      }
    }
  ]
}
