'use strict'

var postsController = function () {}

postsController.getAll = function (req, res) {
  res.send({
    message: 'hola desde el controlador'
  })
}

module.exports = postsController
