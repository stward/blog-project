var mongoose = require('mongoose')

var Schema = mongoose.Schema

var Comment = new Schema ({
  title: String,
  body: String,
  modified: Boolean,
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  date: {type: Date, default: Date.now},
  post: {type: Schema.Types.ObjectId, ref: 'Post'}
})

module.exports = mongoose.model('Comment', Comment)
