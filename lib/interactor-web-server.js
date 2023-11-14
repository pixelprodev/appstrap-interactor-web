const express = require('express')
const path = require('path')

exports = module.exports = function createInstance () {
  return new Server()
}

class Server extends express {
  constructor () {
    super()
    this.get('/__interactor/interactor-web.js', (req, res) => res.sendFile(path.join(__dirname, 'interactor-web.js')))
    this.get('/__interactor', (req, res) => {
      res.send(`
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Appstrap Interactor</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css">
        </head>
        
        <body>
            <div id="root" />
        </body>
        
        <script src="/__interactor/interactor-web.js"></script>
        </html>
      `)
    })
  }
}
