import React from 'react';

export default class InfoBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id='info-container'>
        <img href="../img/repeater.jpg"></img>
        <p>Health: {this.props.health}</p>
        <p>Level: {this.props.level}</p>
        <p>Weapon:<br /> {this.props.weapon}</p>
      </div>
    )

  }


}
