import React from 'react';

import Cell from './Cell';

export default class Hero extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const size = this.props.cellSize;
    return (
      <Cell
        class='hero'
        cellSize={this.props.cellSize}
        x={this.props.x}
        y={this.props.y}
      />
    )
  }
}
