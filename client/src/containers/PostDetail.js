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
        postComments: null
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
    }).done(function (data) {
      console.log(data);
    });
    var comments = this.state.comments;
    if (!comments) {
      comments = [];
    }
    var newComment = {author: {local: {username: this.props.user.local.username}}, body: this.state.newCommentText, title: this.state.newCommentTitle};
    comments.push(newComment);
    this.setState({comments: comments});
  },
  renderComments: function () {
    if (this.state.comments) {
      console.log(this.state.comments);
      return this.state.comments.map(function (item) {
        return (<div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <span><strong>--{item.author.local.username}</strong></span>
                </div>)
      });
    }
  },
  render: function () {
    return (
       <div className='contentContainer'>
        <div>
          <h4>{this.state.postTitle}</h4>
          <div>{this.state.postBody}</div>
        </div>
        <div className='line'></div>
        <div>
          <span><strong>Comments</strong></span>
        </div>
        {this.renderComments()}
        <NewCommentForm onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler}/>
      </div>
    );
  }
});

export default PostDetail;
