var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  postTitle: String,
  postBody: String,
  postDate: String
});

module.exports = mongoose.model('Post', PostSchema);
