import React from 'react';

export default class Hero extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id='hero'
        style={{top: this.props.y, left: this.props.x}}
      >
      </div>
    )
  }
}
