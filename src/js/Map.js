import React from 'react';

import Hero from './Hero';
import Walls from './Walls';

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mapSide: this.props.mapCells*this.props.cellSize
    }
  }

  render() {

    return (
      <div
        id='map'
        style={{
          width: this.state.mapSide,
          height: this.state.mapSide
        }}
      >
        <Walls
          cellSize={this.props.cellSize}
          walls={this.props.walls}
        />
        <Hero
          cellSize={this.props.cellSize}
          x={this.props.hero.x}
          y={this.props.hero.y}
        />
      </div>
    )
  }
}
