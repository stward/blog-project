import React from 'react'
import NewPostForm from '../views/NewPostForm'
import $ from 'jquery'

var NewPostContainer = React.createClass ({
  getInitialState: function() {
    return (
      {postTitle: null, postBody: null, postDate: null}
    )
  },
  onChangeHandler: function(field, value) {
    var newData = {}
    newData[field] = value
    this.setState(newData)
  },
  onSubmit: function() {
    var that = this
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: this.state
    }).done(function(data) {
      window.location = '/#/posts';
    })
  },
  render: function() {
    return (
      <div>
        <NewPostForm onChangeHandler={this.onChangeHandler} onSubmit={this.onSubmit} />
      </div>
    )
  }
})

export default NewPostContainer
