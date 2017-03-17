import React from 'react';
import NewCommentForm from '../views/NewCommentForm';
import $ from 'jquery';

var PostDetail = React.createClass ({
  getInitialState: function () {
    return (
      {
        postTitle: null,
        postBody: null,
        postDate: null,
        newCommentText: null,
        postComments: null,
        comments: []
      }
    );
  },
  componentWillMount: function () {
    this.getPostFromServer();
  },
  getPostFromServer: function () {
    var self = this;
    $.ajax({
      url: '/api/posts/' + this.props.params.postId,
      method: 'GET'
    }).done(function (data) {
      self.setState({postTitle: data.postTitle, postBody: data.postBody, postDate: data.postDate, comments: data.postComments});
    })
  },
  onChangeHandler: function (field, value) {
    var newData = {};
    newData[field] = value;
    this.setState(newData);
  },
  onSubmitHandler: function (e) {
    e.preventDefault();
    const commentData = {text: this.state.newCommentText, title: this.state.newCommentTitle};
    $.ajax({
      url: '/api/posts/' + this.props.params.postId + '/comments',
      method: 'POST',
      data: commentData
    }).done((data) => {
      console.log(data);
      var newCommentId = data.postComments.pop();
      var comments = this.state.comments;
      if (!comments) {
        comments = [];
      }
      var newComment = {_id: newCommentId, author: {local: {username: this.props.user.local.username}}, body: this.state.newCommentText, title: this.state.newCommentTitle};
      comments.push(newComment);
      this.setState({comments: comments});
    });
  },
  deleteCommentHandler: function(id) {
    $.ajax({
      url: '/api/posts/comments/' + id,
      method: 'DELETE'
    }).done(function(data) {
      console.log('react: deleted comment with id: ' + id);
    });
    this.setState({comments: this.state.comments.filter(function (item) {
      return item._id !== id;
    })
    });
  },
  renderComments: function () {
    if (this.state.comments) {
      var self = this
      return this.state.comments.map(function (item) {
        return (<div className='commentContainer'>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <div><strong>- {item.author && item.author.local ? item.author.local.username : 'Author was banned.'}</strong></div>
                  <button className='btn btn-primary' onClick={(id) => self.deleteCommentHandler(item._id)}>Delete</button>
                </div>)
      });
    }
  },
  render: function () {
    return (
       <div className='contentContainer'>
        <div>
          <h1>{this.state.postTitle}</h1>
          <div>{this.state.postBody}</div>
        </div>
        <a className="btn btn-primary" href="#/posts">Back to Blog</a>
        <div className='line'></div>
        <h2>Comments</h2>
        {this.renderComments()}
        <NewCommentForm onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler}/>
      </div>
    );
  }
});

export default PostDetail;
