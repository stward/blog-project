import React from 'react'
import {Link} from 'react-router'

var Home = function(props) {
  return (
    <div>
      <h1>My Blog</h1>
      <h3>Welcome {props.route.user}</h3>
      <div></div>
      <Link to={'/posts'} className='btn btn-primary'>View All Posts</Link>
      <Link to={'/newPost'} className='btn btn-primary'>New Post</Link>
    </div>
  )
}

export default Home
