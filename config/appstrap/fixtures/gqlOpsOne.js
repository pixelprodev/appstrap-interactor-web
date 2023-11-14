module.exports = {
  handlers: [
    {
      operationName: 'DetermineVariant',
      handler: (req, payload) => {
        return payload
      }
    },
    {
      operationName: 'GetAnotherTest',
      handler: (req, payload) => {
        return payload
      }
    }
  ]
}
