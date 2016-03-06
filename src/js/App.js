import React from 'react';
import InfoBar from './InfoBar';
import GameContainer from './GameContainer';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // Info
      health: '100%',
      level: 1,
      weapon: 'Milk',
      // Map
      map: {
        mapCells: 50
      },
      cellSize: 10,
      hero: {
        x: 3,
        y: 3
      }
    };
  }

  render() {
    return <div>
      {/*<HelloText name="World" />*/}
      <InfoBar
        health={this.state.health}
        level={this.state.level}
        weapon={this.state.weapon}
      />
      <GameContainer
        cellSize={this.state.cellSize}
        map={this.state.map}
        hero={this.state.hero}
      />
    </div>
  }
}
