import React from 'react';

import Map from './Map';

export default class GameContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='game-container'>
        <Map
          cellSize={this.props.cellSize}
          map={this.props.map}
          hero={this.props.hero}
        />
      </div>
    )
  }
}
