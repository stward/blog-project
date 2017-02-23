import React, { Component } from 'react';
import {Link} from 'react-router'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ul className='nav nav-tabs'>
          <li role='presentation'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
