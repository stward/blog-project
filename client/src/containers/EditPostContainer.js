import React from 'react'
import EditPostForm from '../views/EditPostForm'
import $ from 'jquery'

var EditPostContainer = React.createClass ({
  getInitialState: function() {
    return (
      {postTitle: null, postBody: null, postDate: null}
    )
  },
  componentWillMount: function() {
    this.getPostById();
  },
  getPostById: function() {
    var that = this
    $.ajax({
      url: '/api/posts/' + this.props.params.postId,
      method: 'GET'
    }).done(function(data) {
      console.log(data);
      that.setState(data)
    })
  },
  onChangeHandler: function(field, value) {
    var newData = {}
    newData[field] = value
    this.setState(newData)
  },
  onSubmit: function() {
    var that = this
    $.ajax({
      url: '/api/posts/' + this.props.params.postId,
      method: 'PUT',
      data: this.state
    }).done(function(data) {
      console.log(data)
      window.location='#/posts'
    })
  },
  render: function() {
    return (
      <div>
        <EditPostForm onChangeHandler={this.onChangeHandler} onSubmit={this.onSubmit} post={this.state} />
      </div>
    )
  }
})

export default EditPostContainer
