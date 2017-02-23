import React from 'react';
import {Link} from 'react-router'

function PostsTable(props) {
  var posts = props.posts.map(function(item) {
    return <tr>
             <td>{item.postTitle}</td>
             <td>{item.postBody}</td>
             <td>{item.postDate}</td>
             <td><button onClick={(id) => props.deleteHandler(item._id)}>Delete</button></td>
             <td><Link to={'/editPost/' + item._id} className='btn btn-primary'>Edit Post</Link></td>
           </tr>;
  });
  return (
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
  )
}

export default PostsTable;
