import React from 'react'
import {Link} from 'react-router'

var Home = function(props) {
  var newPostButton = null;
  if (props.user && props.user.local.username == 'spencer') {
    newPostButton = <Link to={'/newPost'} className='btn btn-primary'>New Post</Link>
  } else {
    newPostButton = ''
  }
  return (
    <div className='contentContainer'>
      <div className="center homeContainer">
        <h1>Welcome {props.user ? props.user.local.username : ''}</h1>
        <div>This is my web page. At some point there will probably be some pretty cool stuff on the home page, rather than just silly pictures.</div>
        <Link to={'/posts'} className='btn btn-primary'>View All Posts</Link>
        {newPostButton}
        <img src="images/crazies.jpg" />
        <img src="images/maggie.jpg" />
        <img src="images/dont.jpg" />
        <img src="images/computars.gif" />
      </div>
    </div>
  )
}

export default Home
