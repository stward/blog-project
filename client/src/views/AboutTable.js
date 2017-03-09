import React from 'react';
import {Link} from 'react-router'

function AboutTable() {
  return (
    <div className='contentContainer'>
      <h1>About</h1>
      <h2>Hello</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>test</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AboutTable;
