import React from 'react';
import {Link} from 'react-router'

function PostsTable(props) {
  console.log(props);
  var posts = props.posts.map(function(item) {
    return (
          <div>
            <h3>{item.postTitle}</h3>
            <div>{item.postDate}</div>
            <div>{item.postBody}</div>
            <Link to={'/editPost/' + item._id} className='btn btn-primary'>Edit Post</Link>
            <button className='btn btn-primary' onClick={(id) => props.deleteHandler(item._id)}>Delete</button>
            <Link to={'/posts/' + item._id} className='btn btn-primary'>Details</Link>
          </div>
        )
  });
  return (
    <div className='contentContainer'>
      <h1>My Blog</h1>
      <div>
        {posts}
      </div>
      <div className='line'></div>
      <Link to={'/newPost'} className='btn btn-primary btn-block'>New Post</Link>
    </div>
  )
}

export default PostsTable;
