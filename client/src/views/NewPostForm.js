import React from 'react'

var NewPostForm = function(props) {
  return (
      <div>
        <form>
          <div className='form-group'>
            <label htmlFor='postTitle'>Title</label>
            <input type='text' placeholder='Title' id='postTitle' onChange={(event) => props.onChangeHandler('postTitle', event.target.value)} />
          </div>
          <div className='form-group'>
            <label htmlFor='postBody'>Body</label>
            <input type='text' placeholder='Body' id='postBody' onChange={(event) => props.onChangeHandler('postBody', event.target.value)} />
          </div>
          <div className='form-group'>
            <label htmlFor='postDate'>Date</label>
            <input type='text' placeholder='Date' id='postDate' onChange={(event) => props.onChangeHandler('postDate', event.target.value)} />
          </div>
        </form>
        <button className='btn' onClick={() => props.onSubmit()}>Create Post</button>
      </div>
    );
}

export default NewPostForm
