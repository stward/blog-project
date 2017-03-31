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
        <div className="line"></div>
        <ul>
          {this.reposList()}
        </ul>
        <div className="line"></div>
        <h1>Tutorials</h1>
        <div className="line"></div>
        <h2>How Loops Work</h2>
        <h3>What is a loop?</h3>
        <p>Simply put, a "loop" is a javascript method to go through a list from top to bottom.</p>
        <p>In JS, there are types of data structures called arrays. Arrays keep pieces of data together in an ordered list:</p>
        <pre>
          {`
            var arr = ["a", "b", "c", "d"]
          `}
        </pre>
        <p>Each individual data in the array has two main components: a <i>key</i> and a <i>value</i>. The key determines the datas location in the array, and the value is exactly what it sounds like, the data value. JS uses 0-based numbering, so the first element in a list starts at 0, as opposed to 1. In the example above, the value "a" has the key 0, "b" has the key 1, and so on. This crucial fact leads to how loops are performed:</p>
        <h3>Iterators</h3>
        <pre>
          {`
            function forLoop (a) {
              for (var i = 0; i < a.length; i++) {
                console.log(a[i])
              }
            }
            forLoop()
            // prints "a", "b", "c", "d" to console
          `}
        </pre>
        <p>In the example above, the forLoop function uses an iterator to cycle through the array. The variable "i" is initially set to zero. As long as the value of i is less than the length of the array (4), the loop will continue to evaluate. At the end of the loop, i is incremented by one. The operation is complete once the value of i has matched the array length.</p>
        <p>The purpose of the loop is to log each value in the array. It does this by passing i, which represents a number, as the key in the array, which then returns the key's value.</p>
        <div className="line"></div>
        <h3>Objects in Arrays</h3>
        <p>Arrays can have more complex data structures than just simple values. Objects may be stored which can contain multiple pieces of information:</p>
        <pre>
          {`
            var arr = [
              {name: "a", number: 6},
              {name: "b", number: 10},
              {name: "c", number: 1}
            ]
          `}
        </pre>
        <p>In this case, a loop can pull specific bits of data out from within an object:</p>
        <pre>
          {`
            function forLoop (a) {
              for (var i = 0; i < a.length; i++) {
                console.log(a[i].name)
                console.log(a[i].number)
              }
            }
            forLoop(arr)
            // prints "a", 6, "b", 10, "c", 1 to console
          `}
        </pre>
      </div>
    );
  }
});

export default PortfolioContainer
