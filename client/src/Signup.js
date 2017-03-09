import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

var Signup = React.createClass({
  getInitialState: function() {
    return (
      {
        username: null,
        password: null,
        message: null
      }
    )
  },
  onChangeHandler: function(field, val) {
    var newData = {}
    newData[field] = val
    this.setState(newData)
  },
  onSubmitHandler: function() {
    var self = this
    $.ajax({
      url: '/signup',
      method: 'POST',
      data: this.state
    }).done(function(data) {
      if (data.message) {
        self.setState({message: data.message});
      } else {
        console.log('user registered');
        window.location = '/#/'
      }
    })
  },
  render: function() {
    var alertMessage = <div>{this.state.message}</div>
    return (
      <div>
        <h3>Sign Up</h3>
        {this.state.message ? alertMessage : null}
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
