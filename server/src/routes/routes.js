'use strict'

var postsController = require('../controllers/postsController')
var userControl = require('../controllers/userController')
var auth = require('../middlewares/auth')

module.exports = function (app) {
  app.get('/posts', postsController.getAll)

  app.get('/private', auth, function (req, res, next) {
    res.send({
      message: 'tiene acceso'
    })
  })

  app.post('/signup', userControl.signUp)
  app.post('/signin', userControl.signIn)
}
