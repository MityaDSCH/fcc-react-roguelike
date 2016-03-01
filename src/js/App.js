import React from 'react';
import InfoBar from './InfoBar';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      health: 1,
      level: 1,
      weapon: "Milk"
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
    </div>
  }
}
