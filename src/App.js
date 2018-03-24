import React, { Component } from 'react';
import Landing from './components/Landing';
import Game from './components/Game';
import UsersContainer from './components/UsersContainer';
import { Route, Redirect } from 'react-router'
import './App.css';

class App extends Component {
  state = {
    currentUser: ''
  }

  setUser = (user) => {
    this.setState({currentUser: user})
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            this.state.currentUser ? (
              <Redirect to="/game"/>
            ) : (
              <Landing/>
            )
          )}/>
          <Route path="/game" exact component={Game} />
          <Route path="/users" exact render={() => {
              return <UsersContainer handleSetUser={this.setUser}/>
            }} />
            <Route path="/users/:username" exact component={ UsersContainer } />
          </div>
        );
      }
    }

    export default App;
