'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  password: {type: String},
  signupDate: {type: Date, default: Date.now()},
  lastLogin: Date
})

UserSchema.pre('save', function (next) {
  var user = this

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) return next(err)

      // user.password = hash
      next()
    })
  })
})

module.exports = mongoose.model('User', UserSchema)
