var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  postTitle: String,
  postBody: String,
  postDate: String,
  postComments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Post', PostSchema);
