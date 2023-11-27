module.exports = {
  handlers: [
    {
      operationName: 'DetermineVariant',
      mode: 'merge',
      handler: (req, payload) => {
        return payload
      }
    },
    {
      operationName: 'GetAnotherTest',
      mode: 'merge',
      handler: (req, payload) => {
        return payload
      }
    }
  ]
}
