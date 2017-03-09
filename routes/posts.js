var express = require('express');
var Post = require('../models/post');
var Comment = require('../models/comment');
var commentAuth = require('../middleware/commentAuth');

var Router = new express.Router();

Router.use(function (req, res, next) {
  return next();
});

Router.route('/')
  .get(function(req, res){
    Post.find()
      .populate({
        path:'postComments',
        populate: {path: 'author'}
      })
      .exec(function(err, posts){
        if (err) {
          res.json(err, 'ERROR');
        } else {
          res.json(posts);
        }
      });
  })
  .post(function(req, res){
    var post = new Post({
      postTitle: req.body.postTitle,
      postBody: req.body.postBody,
      postDate: req.body.postDate
    });
    post.save(function(err, post){
      if (err) {
        res.json({ message: 'there was an error saving your post' });
      } else {
        res.json(post);
      }
    });
  });

Router.route('/:id')
  .get(function(req, res){
    Post.findById(req.params.id)
      .populate({
        path: 'postComments',
        populate: {path: 'author'}
      })
      .exec(function(err, post){
      if (err) {
        res.json({ message: 'there was an error finding this post' });
      } else {
        res.json(post);
      }
    });
  })
  .put(function(req, res){
    Post.findById(req.params.id, function(err, post){
      if(err) {
        res.json({ message: 'could not find post' })
      } else {
        post.postTitle = req.body.postTitle ? req.body.postTitle : post.postTitle;
        post.postBody = req.body.postBody ? req.body.postBody : post.postBody;
        post.postDate = req.body.postDate ? req.body.postDate : post.postDate;
        post.save( function(er) {
          if (er) {
            res.json(err)
          } else {
            res.json(post)
          }
        })
      }
    })
  })
  .delete(function(req, res){
    Post.remove({ _id: req.params.id }, function(err) {
      if(err){
        res.json({ message: "Was unable to delete post" })
      } else {
        res.json("Post deleted")
      }
    })
  });

  // routes for comments
  Router.route('/:id/comments')
    .post(function (req, res) {
      var comment = new Comment();
      comment.title = req.body.title;
      comment.body = req.body.text;
      comment.author = req.user._id;
      comment.post = req.params.id;
      comment.save(function (err, comment) {
        if (err) {
          console.log("Error at comment save");
          res.json({error: err});
        } else {
          Post.findById(req.params.id, function (err, post) {
            if (err) {
              console.log("Error at post find.");
              res.json({error: err});
            } else {
              post.postComments.push(comment._id);
              post.save(function (err, data) {
                if (err) {
                  console.log("Error at post resave.");
                  res.json({error: err});
                } else {
                  res.json(data);
                }
              });
            }
          });
        }
      });
    });

    Router.route('/comments/:commentId')
      .get(function (req, res) {
        Comment.findById(req.params.commentId)
        .populate('author')
        .exec(function (err, comment) {
          if (err) {
            res.json({});
          } else {
            res.json(comment);
          }
        });
      })
      .put(function (req, res) {
        console.log("doing commment update");
        Comment.findById(req.params.commentId, function (err, comment) {
          if (err) {
            console.log("Error finding comment");
            res.json({'error': err});
          } else {
            if (req.user) {
              console.log(typeof(comment.author));
              console.log(comment.author.toString());
              console.log(req.user._id.toString());
              if (comment.author.toString() === req.user._id.toString()) {
                comment.body = req.body.text ? req.body.text : comment.body;
                comment.title = req.body.title ? req.body.title : comment.title;
                comment.modified = true;
                comment.save(function (err, data) {
                  if (err) {
                    res.json({error: err});
                  } else {
                    res.json({message: "updated the comment."});
                  }
                });
              } else {
                console.log("Not authorized to update comments");
                res.json({message: "you are not allowed to update this comment."});
              }
            } else {
              res.json({error: 'You must be logged in to update comments'});
            }
          }
        });
      })
      .delete(function (req, res) {
        Comment.remove({'_id': req.params.commentId}, function (err, data) {
          if (err) {
            res.json({message: err});
          } else {
            res.json({message: 'deleted comment with id: '+req.params.commentId});
          }
        })
      });

function isAuthorized(req, res, next) {
  if (req.user) {
    return next();
  } else {
    return null;
  }
}

module.exports = Router;
