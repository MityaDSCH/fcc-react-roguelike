import React from 'react';

export default class Hero extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const size = this.props.cellSize;
    return (
      <div
        id='hero'
        className='cell'
        style={{
          top: this.props.y*size,
          left: this.props.x*size,
          height: size,
          width: size
        }}
      >
      </div>
    )
  }
}
