import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

var Signup = React.createClass({
  getInitialState: function() {
    return (
      {
        username: null,
        password: null
      }
    )
  },
  onChangeHandler: function(field, val) {
    var newData = {}
    newData[field] = val
    this.setState(newData)
  },
  onSubmitHandler: function() {
    $.ajax({
      url: '/signup',
      method: 'POST',
      data: this.state
    }).done(function(err, data) {
      if (err) {
        console.log(err);
      } else {
        if (data.message) {
          console.log(data.message);
          window.location = '/#/signUp'
        } else {
          console.log('user registered');
          window.location = '/#/'
        }
      }
    })
  },
  render: function() {
    return (
      <div>
        <h3>Sign Up</h3>
        <form>
          <input type='text' placeholder='username' onChange={(event) => this.onChangeHandler('username', event.target.value)} />
          <input type='text' placeholder='password' onChange={(event) => this.onChangeHandler('password', event.target.value)} />
          <button onClick={(event) => this.onSubmitHandler()}>Submit</button>
        </form>
      </div>
    )
  }
})

export default Signup
