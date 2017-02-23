import React from 'react'
import PostsTable from '../views/PostsTable'
import $ from 'jquery'

// stateful component
var PostsContainer = React.createClass({
  getInitialState: function() {
    return ({posts: null})
  },
  componentWillMount: function() {
    this.getPostsFromServer();
  },
  getPostsFromServer: function() {
    var that = this
    $.ajax({
      url: '/api/posts',
      method: 'GET'
    }).done(function(data) {
      that.setState({posts: data})
    })
  },
  deleteHandler: function(id) {
    $.ajax({
      url: '/api/posts/' + id,
      method: 'DELETE'
    }).done(function(data) {
      console.log('deleted post with id: ' + id);
    })
    var newData = this.state.posts.filter(function(item) {
      return item._id !== id
    })
    this.setState({posts: newData})
  },
  render: function() {
    return (
      <div>
        {this.state.posts ? <PostsTable animals={this.state.posts} deleteHandler={this.deleteHandler} /> : null}
      </div>
    )
  }
})

export default PostsContainer
