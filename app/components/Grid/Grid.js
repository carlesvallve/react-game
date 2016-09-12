require('./style.scss');

import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { refreshList } from '../actions'


const mapStateToProps = (state, ownProps) => {
  if (state.grid.active === undefined) {
    state.grid.active = ownProps.active
  }
  return state.grid
}


class Grid extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='grid'>

      </div>
    )
  }
}

Grid = connect()(Grid)

export default Grid
