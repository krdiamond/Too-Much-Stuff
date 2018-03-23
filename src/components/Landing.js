import React, { Component } from 'react';
import Game from './Game'
import { Route, Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return(
      <div className="landing">
        <button className="button">
          <Link to="/game">PLAY</Link>
        </button>
      </div>
    )
  }
}
