import React from 'react'

export default class Leaderboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      leaders: []
    }
    this.fetchGames()
  }

  componentDidMount() {
    this.fetchGames()
  }


  fetchGames = () => {
    fetch('http://localhost:3000/games')
    .then(res => res.json())
    .then(leaders => this.setState({ leaders }) )
  }

  buildBoard = () => {
    if (this.state.leaders.length > 0) {
      console.log(this.state.leaders)
      return (
              <div class="grid-container" style={{display: 'grid', gridTemplateColumns: 'auto auto'}}>
                <div class="grid-item">{"PLAYER"}</div>
                <div class="grid-item">{"SECONDS"}</div>
                <div class="grid-item">{this.state.leaders[0].username}</div>
                <div class="grid-item">{this.state.leaders[0].time}</div>
                <div class="grid-item">{this.state.leaders[1].username}</div>
                <div class="grid-item">{this.state.leaders[1].time}</div>
              </div>
              )
    }
  }

  render() {
    console.log('LEADERS:', this.state.leaders)
    return(
      <div>
        <h1>{"LEADERBOARD"}</h1>
          {this.buildBoard()}
      </div>
    )
  }
}
