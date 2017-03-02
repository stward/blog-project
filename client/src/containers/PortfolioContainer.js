import React from 'react'
import PortfolioTable from '../views/PortfolioTable'
import $ from 'jquery'

var PortfolioContainer = React.createClass({
  render: function() {
    return (
      <div>
        <PortfolioTable />
      </div>
    )
  }
})

export default PortfolioContainer
