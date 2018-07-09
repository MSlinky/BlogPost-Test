'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var User = mongoose.model('User')

const BlogSchema = new Schema({
  title: {type: String},
  author: {type: Schema.ObjectId, ref: User},
  date: {type: Date, default: Date.now()},
  content: {type: String},
  views: 0
})

BlogSchema.pre('save', function (next) {
  next()
})

module.exports = mongoose.model('Blog', BlogSchema)
