'use strict'

var service = require('../services')
var UserModel = require('../models/userModel')

function signUp (req, res) {
  const user = new UserModel({
    email: 'wwfdfjdsfds',
    password: '435345534'
  })

  user.save((err) => {
    if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })

    return res.status(201).send({ token: service.createToken(user) })
  })
}

function signIn (req, res) {
  const user = {
    id: 20,
    email: 'wwwmario15@gmail.com'
  }

  return res.status(200).send({
    token: service.createToken(user)
  })
}

module.exports = {
  signUp,
  signIn
}