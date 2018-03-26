import React, { Component } from 'react';
import FoundBox from './FoundBox'
import MissionBox from './MissionBox'
import ItemList from './ItemList'
import DummyTimer from './DummyTimer'
import Timer from './Timer'

export default class Game extends Component {
  state = {
    imgs: [],
    found: [],
    mission: [],
    imgsLeft: [],
    won: false,
    time: 0,
    started: false,
  }

  startGame = () => {
    fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(imgs => {
      const mission = imgs.slice(0, 3)
      this.setState({ imgs, mission, imgsLeft: imgs, won: false, found: [], started: true }, () => console.log("GAME STARTED!"))
    })
  }

  handleItemClick = (img) => {
    if (this.state.mission.includes(img) && !this.state.found.includes(img)) {
      const filteredImgsLeft = this.state.imgsLeft.filter((item) => item !== img)
      this.setState({ found: [...this.state.found, img], imgsLeft: filteredImgsLeft}, () => this.handleWin())
    }
  }

  handleWin = () => {
    if (this.state.mission.length === this.state.found.length) {
      this.setState({ won: true, started: false }, () => console.log("GAME FINAL TIME:", this.state.time))
    }
  }

  setFinalTime = (seconds) => {
    this.setState({time: seconds})
  }

  render() {
    console.log("GAME STARTED?", this.state.started)
    return(
      <div className="game">
        { (!this.state.started) ?
          <button className={'start_game'} onClick={this.startGame}>{'START GAME'}</button>
          : null
        }
        <div className="game-status">
          { (this.state.started) ? <Timer won={this.state.won} handleFinalTime={this.setFinalTime}/>
             : <DummyTimer won={this.state.won} time={this.state.time}/>
          }
          <MissionBox  mission={this.state.mission} />
          <FoundBox  found={this.state.found} won={this.state.won} user={this.props.currentUser}/>

        </div>
        <div className="image_container">
          { (this.state.won) ?
            <div>
              <div className={'winning'}>{`YOU WON ${this.props.currentUser.username.toUpperCase()}!!!!`}</div>
            </div>
            : null
          }
          <div id="item-location-1">
            <ItemList id="location-1" className="item" list={this.state.imgsLeft.slice(0,-6)} handleClick={this.handleItemClick}/>
          </div>
          <div id="item-location-2">
            <ItemList id="location-2" className="item" list={this.state.imgsLeft.slice(-6)} handleClick={this.handleItemClick}/>
          </div>
        </div>

    </div>
    )
  }
}
