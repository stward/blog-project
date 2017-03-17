import React from 'react';

var NewCommentForm = function (props) {
  return(<div>
            <form>
              <h3>Make a Comment</h3>
              <div className="form-group">
                <input type='text' className="form-control" placeholder='Title' onChange={ (event) => props.onChangeHandler('newCommentTitle', event.target.value)} />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder='Comment' rows='6' onChange={ (event) => props.onChangeHandler('newCommentText', event.target.value)} />
              </div>
            </form>
            <button className='btn btn-primary' onClick={ (event) => props.onSubmitHandler(event)} > Add a comment </button>
          </div>
        );
};

export default NewCommentForm;
