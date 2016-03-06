import React from 'react';

import Hero from './Hero';

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
        <Hero
          cellSize={this.props.cellSize}
          x={this.props.hero.x*this.props.cellSize}
          y={this.props.hero.y*this.props.cellSize}
        />
      </div>
    )
  }
}
