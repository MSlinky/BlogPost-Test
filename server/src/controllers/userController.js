'use strict'

var service = require('../services')
var UserModel = require('../models/userModel')

function signUp (req, res) {
  const user = new UserModel({
    email: req.body.email,
    password: req.body.password
  })

  user.save((err) => {
    if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })

    return res.status(201).send({ token: service.createToken(user) })
  })
}

function signIn (req, res) {
  UserModel.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send({ message: err })
    if (!user) return res.status(404).send({ message: 'Error en el usuario o contraseña' })

    if (user.password !== req.body.password) {
      return res.status(404).send({
        message: 'Error en el usuario o contraseña'
      })
    }

    req.user = user
    res.status(200).send({
      message: 'Te has logueado correctamente',
      token: service.createToken(user)
    })
  })
}

module.exports = {
  signUp,
  signIn
}
