'use strict'

var BlogModel = require('../models/blogModel')
var User = require('../models/userModel')

var postsController = function () {}

postsController.getAllPosts = function (req, res) {
  var usersProjection = {
    __v: false
  }

  BlogModel.find({}, usersProjection, function (err, blogs) {
    if (err) {
      return res.status(200).send({
        message: `Error al obtener los posts: ${err}`,
        status: 0
      })
    }
    User.populate(blogs, {path: 'author', select: 'email'}, function (err, blogs) {
      if (err) {
        return res.status(200).send({
          message: `Error al obtener los autores: ${err}`,
          status: 0
        })
      }
      res.send({
        message: blogs,
        status: 1
      })
    })
  }).sort({date: 'desc'})
}

postsController.getOnlyOnePost = function (req, res) {
  BlogModel.find({ _id: req.params.id_posts }, function (err, blog) {
    if (err) {
      return res.status(200).send({
        message: `Error al obtener los posts: ${err}`,
        status: 0
      })
    }
    User.populate(blog, {path: 'author', select: 'email'}, function (err, blog) {
      if (err) {
        return res.status(200).send({
          message: `Error al obtener los autores: ${err}`,
          status: 0
        })
      }
      res.send({
        message: blog,
        status: 1
      })
    })
  })
}

/* ________________________________________________________________________________ */

postsController.savePost = function (req, res) {
  const blog = new BlogModel({
    title: req.body.title,
    author: res.user,
    content: req.body.content
  })

  blog.save((err) => {
    if (err) {
      return res.status(500).send({
        message: `Error al crear el post: ${err}`,
        status: 0
      })
    }

    return res.status(200).send({
      data: 'Post guardado',
      status: 1
    })
  })
}

postsController.getPost = function (req, res) {
  BlogModel.find({ _id: '5b42be1b4b430673c4081c16' }, function (err, docs) {
    if (err) return res.status(500).send({ message: `Error al obtener el post: ${err}` })
    res.send({
      data: docs
    })
  })
}

postsController.updatePost = function (req, res) {
  BlogModel.update({ _id: '5b42be1b4b430673c4081c16' }, {$set: {
    title: req.body.title,
    content: req.body.content
  }}, function (err, docs) {
    if (err) return res.status(500).send({ message: `Error al actualizar el post: ${err}` })
    res.send({
      message: 'Post actualizado'
    })
  })
}

postsController.deletePost = function (req, res) {
  BlogModel
    .findOneAndRemove({
      _id: '5b42bc74f7cde672e500ef04'
    })
    .then(response => {
      res.send({
        message: 'Post eliminado'
      })
    })
    .catch(err => {
      res.status(500).send({ message: `Error al eliminar el post: ${err}` })
    })
}

module.exports = postsController
