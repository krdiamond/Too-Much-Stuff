import React, { Component } from 'react';
import TrashMountain from '../images/trash_mountain.jpg';

export default class Game extends Component {
  render() {
    console.log("Got to game!")
    return(
      <div className="game">
        <div className="trash_mountain"> <img src={TrashMountain} height="900" alt="Trash Mountain"/> </div>
      </div>
    )
  }
}
