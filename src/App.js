import React, { Component } from 'react';
import Landing from './components/Landing';
import Game from './components/Game';
import Test from './components/Test';
import { Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={Landing} />
        <Route path="/game" exact component={Game} />
        <Route path="/test" exact component={Test} />
      </div>
    );
  }
}

export default App;
