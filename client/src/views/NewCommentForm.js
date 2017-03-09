import React from 'react';

var NewCommentForm = function (props) {
  return(<div>
            <form>
              <formgroup>
                <input type='text' placeholder='Title' onChange={ (event) => props.onChangeHandler('newCommentTitle', event.target.value)} />
                <input type='text' placeholder='Comment' onChange={ (event) => props.onChangeHandler('newCommentText', event.target.value)} />
              </formgroup>
            </form>
            <button className='btn btn-primary' onClick={ (event) => props.onSubmitHandler(event)} > Add a comment </button>
          </div>
        );
};

export default NewCommentForm;
