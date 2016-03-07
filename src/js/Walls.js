import React from 'react';

export default class Walls extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const walls = this.props.walls.map((wall) => {
      return (
        <div
          className='wall cell'
          key={'wall-' + wall.x + '-' + wall.y}
          style={{
            width: this.props.cellSize,
            height: this.props.cellSize,
            top: wall.y*this.props.cellSize,
            left: wall.x*this.props.cellSize
          }}
        ></div>
      );
    });

    return (
      <div id='wall-container'>

        {walls}

      </div>
    );
  }
}
