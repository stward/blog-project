import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import PostsContainer from './containers/PostsContainer'
import NewPostContainer from './containers/NewPostContainer'
import AboutContainer from './containers/AboutContainer'
import PortfolioContainer from './containers/PortfolioContainer'
import Home from './views/Home';
import Login from './Login';
import Signup from './Signup';
import $ from 'jquery';
import './index.css';

var AppWrapper = React.createClass({
  render: function() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='/about' component={AboutContainer} />
          <Route path='/portfolio' component={PortfolioContainer} />
          <Route path='/posts' component={PostsContainer} />
          <Route path='/newPost' component={NewPostContainer} />
          <Route path='/logIn' component={Login} />
          <Route path='/signUp' component={Signup} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root')
);
