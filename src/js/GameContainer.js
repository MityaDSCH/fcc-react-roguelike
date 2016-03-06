import React from 'react';

import Map from './Map';

export default class GameContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='game-container'>
        <Map />
      </div>
    )
  }
}
