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
        <!Doctype html>
        <html>
            <head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700&display=swap" rel="stylesheet">
            </head>
            <body>
                <div id="content"></div>
                <script src="/__interactor/interactor-web.js"></script>
            </body>
        </html>
      `)
    })
  }
}
