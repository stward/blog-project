import React from 'react';

var NewCommentForm = function (props) {
  return(<div>
            <form>
              <div class="formgroup">
                <input type='text' placeholder='Title' onChange={ (event) => props.onChangeHandler('newCommentTitle', event.target.value)} />
              </div>
              <div class="formgroup">
                <textarea placeholder='Comment' rows='6' onChange={ (event) => props.onChangeHandler('newCommentText', event.target.value)} />
              </div>
            </form>
            <button className='btn btn-primary' onClick={ (event) => props.onSubmitHandler(event)} > Add a comment </button>
          </div>
        );
};

export default NewCommentForm;
