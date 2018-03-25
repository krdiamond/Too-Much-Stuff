import React, { Component } from 'react';
import FoundBox from './FoundBox'
import MissionBox from './MissionBox'
import ItemList from './ItemList'

export default class Game extends Component {
  state = {
    imgs: [],
    found: [],
    mission: [],
    imgsLeft: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(imgs => {
      const mission = imgs.slice(0, 3)
      this.setState({ imgs, mission, imgsLeft: imgs })
    })
  }

  handleItemClick = (img) => {
    if (this.state.mission.includes(img)) {
      const filteredImgsLeft = this.state.imgsLeft.filter((item) => item !== img)
      if (!this.state.found.includes(img)) {
        this.setState({ found: [...this.state.found, img], imgsLeft: filteredImgsLeft })
      }
    }
  }

  render() {
    return(
      <div className="game">
        <div className="game-status">
          <MissionBox  mission={this.state.mission} />
          <FoundBox found={this.state.found} won={this.state.found.length === this.state.mission.length}/>
        </div>
        <div className="image_container">
          <div id="item-location-1">
            <ItemList id="location-1" className="item" list={this.state.imgsLeft.slice(0,-2)} handleClick={this.handleItemClick}/>
          </div>
          <div id="item-location-2">
            <ItemList id="location-2" className="item" list={this.state.imgsLeft.slice(-2)} handleClick={this.handleItemClick}/>
          </div>
        </div>

    </div>
    )
  }
}
