'use strict'

const jwt = require('jsonwebtoken')
const moment = require('moment')
const config = require('../config')

function createToken (user) {
  const playload = {
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  }

  return jwt.sign(playload, config.SECRET_TOKEN)
}

function decodeToken (token) {
  const decoded = new Promise(function (resolve, reject) {
    try {
      jwt.verify(token, config.SECRET_TOKEN, function (err, decoded) {
        if (err) {
          reject(new Error('Error de token'))
        } else {
          resolve(decoded.sub)
        }
      })
    } catch (err) {
      reject(new Error('Invalid token'))
    }
  })

  return decoded
}

module.exports = {
  createToken,
  decodeToken
}
