import React, { Component } from 'react';
import Landing from './components/Landing';
import Game from './components/Game';
import UsersContainer from './components/UsersContainer';
import { Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={Landing} />
        <Route path="/game" exact component={Game} />
        <Route path="/users" exact component={UsersContainer} />
        <Route path="/users/:username" exact component={ UsersContainer } />
      </div>
    );
  }
}

export default App;
