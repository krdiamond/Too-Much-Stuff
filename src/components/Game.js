import React, { Component } from 'react';

export default class Game extends Component {
  render() {
    console.log("Got to game!")
    return(
      <div className="game">
        <img src={require(`../images/monster.jpg`)} />
      </div>
    )
  }
}
