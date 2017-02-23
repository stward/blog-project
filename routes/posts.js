var express = require('express');
var Post = require('../models/post');

var Router = new express.Router();

Router.route('/')
  .get(function(req, res){
    Post.find(function(err, posts){
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
    Post.findById(req.params.id, function(err, post){
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
        res.json({ message: 'could not find course' })
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
        res.json("Post deleted!")
      }
    })
  });

module.exports = Router;
