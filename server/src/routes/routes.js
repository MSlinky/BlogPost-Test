'use strict'

var userControl = require('../controllers/userController')
var postsController = require('../controllers/postsController')
var auth = require('../middlewares/auth')

module.exports = function (app) {
  app.get('/posts', postsController.getAllPosts)
  app.get('/post/:id_posts', postsController.getOnlyOnePost)

  app.post('/posts/save', auth, postsController.savePost)
  app.get('/posts/get/:id_posts', auth, postsController.getPost)
  app.put('/posts/update/:id_posts', auth, postsController.updatePost)
  app.delete('/posts/delete/:id_posts', auth, postsController.deletePost)

  app.post('/signup', userControl.signUp)
  app.post('/signin', userControl.signIn)
}
