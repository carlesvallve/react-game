require('./style.scss');

import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { refreshList } from '../actions'

import Tile from '../Tile/Tile'
import Player from '../Player/Player'


const mapStateToProps = (state, ownProps) => {
  if (state.grid.active === undefined) {
    state.grid.active = ownProps.active
  }
  return state.grid
}


class Grid extends Component {

  constructor(props) {
    super(props)

    this.createTiles = this.createTiles.bind(this)
    this.tiles = this.createTiles()
  }

  createTiles () {
    var tiles = []

    for (var y = 0; y < this.props.height; y++) {
      tiles[y] = []
      for (var x = 0; x < this.props.width; x++) {
        tiles[y][x] = <Tile key={x + '_' + y} x={x} y={y}
          style={{
            width: (100 / this.props.width) + '%',
            height: (100 / this.props.height) + '%'
          }} />
      }
    }

    console.log(tiles);
    return tiles;
  }

  render() {


    return (
      <div className='grid'>
        <div className='tiles'>{this.tiles}</div>
        <Player x={3} y={3} style={{
          width: (100 / this.props.width) + '%',
          height: (100 / this.props.height) + '%'
        }} />
      </div>
    )
  }
}

Grid = connect()(Grid)

export default Grid
