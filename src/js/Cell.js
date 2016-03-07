import React from 'react';

export default class Cell extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const size = this.props.cellSize;
    return (
      <div
        className={this.props.class + ' cell'}
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
