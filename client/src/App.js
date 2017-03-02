import React, { Component } from 'react';
import {Link} from 'react-router'
import $ from 'jquery'
import './App.css';

var App = React.createClass ({
  getInitialState: function() {
    return (
      {
        user: null,
        thisYear: null
      }
    )
  },
  getCurrentUser: function() {
    var self = this
    $.ajax({
      url: '/getCurrentUser',
      method: 'GET'
    }).done(function(data) {
      self.setState({user: data})
    })
  },
  componentWillMount: function() {
    this.getCurrentUser()
    this.setState({thisYear: new Date()})
  },
  render() {
    return (
      <div>
        <ul className='nav nav-tabs'>
          <li role='presentation'>
            <Link to='/'>Home</Link>
          </li>
          <li role='presentation'>
            <Link to='/about'>About</Link>
          </li>
          <li role='presentation'>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li role='presentation'>
            <Link to='/posts'>Posts</Link>
          </li>
          <li role='presentation'>
            <Link to='/logIn'>Log In</Link>
          </li>
          <li role='presentation'>
            <Link to='/signUp'>Sign Up</Link>
          </li>
          <li role='presentation'>
            <Link to='/'>{this.state.user ? 'Welcome ' + this.state.user.local.username : null}</Link>
          </li>
        </ul>
        {this.props.children}
        <div className='footer'>&copy; Spencer Ward - {this.state.thisYear.getFullYear()}</div>
      </div>
    );
  }
})

export default App;
