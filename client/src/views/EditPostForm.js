import React from 'react'

var EditPostForm = function(props) {
  var today = new Date()
  return (
      <div>
        <h1>Edit {props.post.postTitle}</h1>
        <div className='contentContainer'>
          <form>
            <div className='formgroup'>
              <label>Title</label>
              <input type='text' className='form-control' placeholder='Title' value={props.post.postTitle} onChange={(event) => props.onChangeHandler('postTitle', event.target.value)} />
            </div>
            <div className='formgroup'>
              <label>Date</label>
              <input type='date' className='form-control' placeholder='Date' value={props.post.postDate} onChange={(event) => props.onChangeHandler('postDate', event.target.value)} />
            </div>
            <div className='formgroup'>
              <label>Body</label>
              <textarea type='text' className='form-control' rows='10' placeholder='Body' value={props.post.postBody} onChange={(event) => props.onChangeHandler('postBody', event.target.value)}></textarea>
            </div>
          </form>
          <button className='btn btn-primary' onClick={() => props.onSubmit()}>Update Post</button>
          <a className='btn btn-primary' href='#/posts'>Back</a>
        </div>
      </div>
    );
}

export default EditPostForm
