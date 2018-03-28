import React, { Component } from 'react';
import Landing from './components/Landing';
import Game from './components/Game';
import Leaderboard from './components/Leaderboard';
import { Route, Redirect } from 'react-router'
import './App.css';

class App extends Component {
  state = {
    currentUser: ''
  }

  setUser = (user) => {
    this.setState({currentUser: user})
  }

  createUser = (newUser) => {
    console.log(newUser)
    const options = {
      method: 'post',
      headers: {
        "Content-Type": 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify({ "user": {"username": newUser.username} })
    }

    fetch('http://localhost:3000/users', options)
      .then(res => res.json())
      .then(user => this.setState({currentUser: user}))
  }

  changeUser = () => {
    this.setState({currentUser: ""})
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            this.state.currentUser ? (
              <Redirect to="/game"/>
            ) : (
              <Landing handleSetUser={this.setUser} handleAddUser={this.createUser}/>
            )
          )}/>
        <Route exact path="/game" render={() => (
              !this.state.currentUser ? (
                <Redirect to="/"/>
              ) : (
                <Game currentUser={this.state.currentUser} handleChangePlayer={this.changeUser}/>
              )
          )}/>
        <Route exact path="/leaderboard" component={Leaderboard} />
      </div>
    );
  }
}

    export default App;
