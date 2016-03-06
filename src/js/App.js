import React from 'react';
import InfoBar from './InfoBar';
import GameContainer from './GameContainer';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      info: {
        health: '100%',
        level: 1,
        weapon: 'Milk'
      },
      map: {
        cellSize: 10,
        mapCells: 50,
        hero: {
          x: 3,
          y: 3
        }
      }
    };
  }

  render() {
    return <div>
      <InfoBar
        {...this.state.info}
      />
      <GameContainer
        {...this.state.map}
      />
    </div>
  }
}
