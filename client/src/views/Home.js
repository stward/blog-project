import React from 'react'
import {Link} from 'react-router'

var Home = function(props) {
  return (
    <div className='contentContainer'>
      <h1>Welcome {props.route.user}</h1>
      <div></div>
      <Link to={'/posts'} className='btn btn-primary'>View All Posts</Link>
      <Link to={'/newPost'} className='btn btn-primary'>New Post</Link>
    </div>
  )
}

export default Home
