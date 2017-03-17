import React from 'react'

var NewPostForm = function(props) {
  return (
      <div className='contentContainer'>
        <form>
          <h1>New Post</h1>
          <div className='formgroup'>
            <label htmlFor='postTitle'>Title</label>
            <input type='text' className='form-control' placeholder='Title' id='postTitle' onChange={(event) => props.onChangeHandler('postTitle', event.target.value)} />
          </div>
          <div className='formgroup'>
            <label htmlFor='postDate'>Date</label>
            <input type='date' className='form-control' placeholder='Date' id='postDate' onChange={(event) => props.onChangeHandler('postDate', event.target.value)} />
          </div>
          <div className='formgroup'>
            <label htmlFor='postBody'>Body</label>
            <textarea type='text' className='form-control' rows='10' placeholder='Body' id='postBody' onChange={(event) => props.onChangeHandler('postBody', event.target.value)}></textarea>
          </div>
        </form>
        <button className='btn btn-primary' onClick={() => props.onSubmit()}>Create Post</button>
        <a className='btn btn-primary' href='#/posts'>Back</a>
      </div>
    );
}

export default NewPostForm
