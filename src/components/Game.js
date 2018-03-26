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
    won: false,
    time: 0,
    started: false,
    top: [],
    bottom: [],
  }

  startGame = () => {
    fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(imgs => {
      console.log("NUM IMGS:", imgs.length)
      const mission = imgs.slice(0, 3)
      const rand = Math.floor(Math.random() * (imgs.length - 5))
      const top = imgs.slice(rand, rand + 6)
      let bottom = imgs.slice(0, rand)
      bottom = [...bottom, ...imgs.slice(rand + 6)]
      this.setState({ imgs, mission, top, bottom, won: false, found: [], started: true })
    })
  }

  handleItemClick = (img) => {
    let foundImgs = this.state.found
    const filteredTopImgsLeft = this.state.top.filter((item) => item.name !== img.name)
    const filteredBottomImgsLeft = this.state.bottom.filter((item) => item.name !== img.name)
    if (!this.state.found.includes(img) && this.state.mission.includes(img)) foundImgs = [...this.state.found, img]
    const uniqFoundImgs = foundImgs.filter((item, index) => foundImgs.indexOf(item) === index)
    this.setState({ found: uniqFoundImgs, top: filteredTopImgsLeft, bottom: filteredBottomImgsLeft}, () => this.handleWin())
  }

  handleWin = () => {
    if (this.state.mission.length === this.state.found.length) {
      this.setState({ won: true, started: false }, () => {
        //POST game to /games
        const options = {
          method: 'post',
          headers: {
            "Content-Type": 'application/json',
            Accepts: 'application/json'
          },
          body: JSON.stringify({ "game": {"username": this.props.currentUser.username, "time": this.state.time} })
        }

        fetch('http://localhost:3000/games', options)
          .then(res => res.json())
          .then(game => console.log("GAME PERSISTED:", game))
      }
    )}
  }

  setFinalTime = (seconds) => {
    this.setState({time: seconds})
  }

  render() {
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
            <ItemList id="location-1" className="item" list={this.state.bottom} handleClick={this.handleItemClick}/>
          </div>
          <div id="item-location-2">
            <ItemList id="location-2" className="item" list={this.state.top} handleClick={this.handleItemClick}/>
          </div>
        </div>

    </div>
    )
  }
}
