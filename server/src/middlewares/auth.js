'use strict'

const services = require('../services')

function isAuth (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({
      message: 'No tiene autorización'
    })
  }

  const token = req.headers.authorization.split(' ')[1]

  services.decodeToken(token)
    .then(response => {
      res.user = response
      next()
    })
    .catch(response => {
      res.send({
        message: 'Error de token'
      })
    })
}

module.exports = isAuth
