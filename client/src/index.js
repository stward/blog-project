import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import PostsContainer from './containers/PostsContainer'
import PostDetail from './containers/PostDetail'
import NewPostContainer from './containers/NewPostContainer'
import EditPostContainer from './containers/EditPostContainer'
import AboutContainer from './containers/AboutContainer'
import PortfolioContainer from './containers/PortfolioContainer'
import Home from './views/Home';
import Login from './Login';
import Signup from './Signup';
import $ from 'jquery';

var AppWrapper = React.createClass({
  render: function() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='/about' component={AboutContainer} />
          <Route path='/portfolio' component={PortfolioContainer} />
          <Route path='/posts' component={PostsContainer} />
          <Route path='/posts/:postId' component={PostDetail} />
          <Route path='/newPost' component={NewPostContainer} />
          <Route path='/editPost/:postId' component={EditPostContainer} />
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
