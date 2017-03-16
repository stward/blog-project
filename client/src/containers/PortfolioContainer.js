import React from 'react'
import PortfolioTable from '../views/PortfolioTable'
import $ from 'jquery'

var PortfolioContainer = React.createClass({
  getInitialState: function () {
    return {
      repos: []
    }
  },
  componentWillMount: function () {
    this.getReposFromGitHub();
  },
  getReposFromGitHub: function () {
    var self = this;
    $.ajax({
      url: 'https://api.github.com/users/stward/repos',
      method: 'GET'
    }).done(function (data) {
      console.log(data);
      var repos = data.map(function (item) {
        return ({
          name: item.name,
          url: item.svn_url
        })
      });
      console.log(repos);
      self.setState({repos: repos});
    });
  },
  reposList: function () {
    return this.state.repos.map(function (item) {
      return <li key={item.name}><a href={item.url} target='_blank'>{item.name}</a></li>
    });
  },
  render: function () {
    return (
      <div className='contentContainer'>
        <h1>GitHub Repos</h1>
        <ul>
          {this.reposList()}
        </ul>
        <div className="line"></div>
      </div>
    );
  }
});

export default PortfolioContainer
