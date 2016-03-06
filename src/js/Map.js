import React from 'react';

import Hero from './Hero';

export default class Map extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='map'>
        <Hero
          x={10}
          y={10}
        />
      </div>
    )
  }
}
