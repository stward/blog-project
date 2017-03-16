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
  removeCurrentUser: function() {
    var self = this
    $.ajax({
      url: '/#/logout',
      method: 'GET'
    }).done(function(data) {
      self.setState({user: null})
    })
  },
  setCurrentUser: function(user) {
    this.setState({user: user})
  },
  componentWillMount: function() {
    this.getCurrentUser();
    this.setState({thisYear: new Date()});
  },
  showLogin: function () {
    const linkStyle = {cursor: 'pointer'}
    if (this.state.user) {
      return (<Link onClick={(event) => this.removeCurrentUser()} style={linkStyle}>Log Out</Link>);
    } else {
      return (<Link to='/logIn'>Log In</Link>);
    }
  },
  showSignup: function () {
    if (!this.state.user) {
      return (<Link to='/signUp'>Sign Up</Link>);
    }
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
            {this.showLogin()}
          </li>
          <li role='presentation'>
            {this.showSignup()}
          </li>
          <li role='presentation'>
            <Link to='/'>{this.state.user ? 'Welcome ' + this.state.user.local.username : null}</Link>
          </li>
        </ul>
        {this.props.children && React.cloneElement(this.props.children, {setCurrentUser: this.setCurrentUser, user: this.state.user})}
        <div className='footer'>&copy; Spencer Ward {this.state.thisYear.getFullYear()}</div>
      </div>
    );
  }
})

export default App;
