import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import PostsContainer from './containers/PostsContainer'
import AboutContainer from './containers/AboutContainer'
import Home from './views/Home';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/about' component={AboutContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
