import React from 'react';
import InfoBar from './InfoBar';
import GameContainer from './GameContainer';

export default class App extends React.Component {

  constructor() {
    super();

    const mapSize = 50;

    this.state = {
      info: {
        health: '100%',
        level: 1,
        weapon: 'Milk'
      },
      map: {
        cellSize: 10,
        mapCells: mapSize,
        walls: ::this.genWalls(mapSize),
        hero: {
          x: 3,
          y: 3
        }
      }
    };
  }

  genWalls(mapSize) {
    let arr = [];

    // Make arr of [x, y] for border
    for (let i = 0; i < mapSize; i++) {
      arr.push({x: i, y: 0}, {x: i, y: mapSize - 1});
      if (i > 0 && i < mapSize-1 ) {
        arr.push({x: 0, y: i}, {x: mapSize - 1, y: i});
      }
    }

    return arr;
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
