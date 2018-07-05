'use strict'

var postsController = function () {}

postsController.getAllPosts = function (req, res) {
  res.send({
    message: 'Todos los posts'
  })
}

postsController.getOnlyOnePost = function (req, res) {
  res.send({
    message: 'Solo un posts id:' + req.params.id_posts
  })
}

/* ________________________________________________________________________________ */

postsController.savePost = function (req, res) {
  res.send({
    message: 'Guardar post id:' + req.params.id_posts
  })
}

postsController.getPost = function (req, res) {
  res.send({
    message: 'Obtener post id:' + req.params.id_posts
  })
}

postsController.updatePost = function (req, res) {
  res.send({
    message: 'Eliminar el post id:' + req.params.id_posts
  })
}

postsController.deletePost = function (req, res) {
  res.send({
    message: 'Eliminar el post id:' + req.params.id_posts
  })
}

module.exports = postsController
