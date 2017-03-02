import React from 'react';
import {Link} from 'react-router'

function PostsTable(props) {
  var posts = props.posts.map(function(item) {
    return <tr>
             <td>{item.postTitle}</td>
             <td>{item.postBody}</td>
             <td>{item.postDate}</td>
             <td><button className='btn btn-primary' onClick={(id) => props.deleteHandler(item._id)}>Delete</button></td>
             <td><Link to={'/editPost/' + item._id} className='btn btn-primary'>Edit Post</Link></td>
           </tr>;
  });
  return (
    <div>
      <h1>Blog Posts</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {posts}
        </tbody>
      </table>
    </div>
  )
}

export default PostsTable;
