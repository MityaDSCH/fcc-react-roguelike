import React from 'react';

import Cell from './Cell';

export default class Walls extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const walls = this.props.walls.map((wall) => {
      return (
        <Cell
          class='wall'
          key={'wall' + '-' + wall.x + '-' + wall.y}
          cellSize={this.props.cellSize}
          x={wall.x}
          y={wall.y}
        />
      );
    });

    return (
      <div id='wall-container'>{walls}</div>
    );
  }
}
