import React from 'react';
import InfoBar from './InfoBar';
import GameContainer from './GameContainer';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      health: '100%',
      level: 1,
      weapon: 'Milk'
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
      <GameContainer />
    </div>
  }
}
