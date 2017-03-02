import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

var Login = React.createClass({
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
      url: '/logIn',
      method: 'POST',
      data: this.state
    }).done(function(data) {
      if (data.message) {
        window.location = '/#/'
        console.log('message: ' + data.message);
      } else {
        window.location = '/#/'
        console.log('signed in');
      }
    })
  },
  render: function() {
    if (this.state.user) {
      return (
        <div>
          <div>Welcome {this.state.user.local.username.toUpperCase()}! You are already logged in.</div>
        </div>
      )
    } else {
      return (
        <div>
          <h3>Log In</h3>
          <form>
            <input type='text' placeholder='username' onChange={(event) => this.onChangeHandler('username', event.target.value)} />
            <input type='text' placeholder='password' onChange={(event) => this.onChangeHandler('password', event.target.value)} />
          </form>
          <button onClick={(event) => this.onSubmitHandler()}>Log In</button>
        </div>
      )
    }
  }
})

export default Login
