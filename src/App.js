import React, { Component } from 'react';
import Landing from './components/Landing';
import Game from './components/Game';
import { Route } from "react-router-dom";
import './App.css';

class App extends Component {
  state = {
    x: 0,
    y: 0
  }

  onMouseMove = (e) => {
    this.setState({ x: e.screenX, y: e.screenY });
  }

  render() {
    const { x, y } = this.state;
    return (
      <div className="app" onMouseMove={this.onMouseMove}>
        <Route path="/" exact component={Landing} />
        <Route path="/game" exact component={Game} />
        <Route path="/users" exact component={Game} />
        <h1>Mouse coordinates: { x } { y }</h1>
      </div>
    );
  }
}

export default App;
