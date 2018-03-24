import React, { Component } from 'react';
import TrashMountain from '../images/trash_mountain.jpg';
import Item from './Item'
import FoundBox from './FoundBox'
import MissionBox from './MissionBox'

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
      console.log("new imgsLeft after filter:", filteredImgsLeft, "img:", img)
      if (!this.state.found.includes(img)) {
        this.setState({ found: [...this.state.found, img], imgsLeft: filteredImgsLeft }, () => console.log("NEW STATE:", this.state))
      }
    }
  }

  render() {
    return(
      <div className="game">
        <div className="trash_mountain"> <img src={TrashMountain} height="900" alt="Trash Mountain"/> </div>
        <div> {/*This div is temporary -- will be replaced with logic/components that place items */}
          {this.state.imgsLeft ? this.state.imgsLeft.map((img) => {
            return (
              <Item img={img} key={img.id} handleClick={this.handleItemClick}/>
            )
          })
          : null
          }
        </div> {/* Temp FoundBox to test out moving items to box */}
        <div style={{height: 200}}>
          <MissionBox  mission={this.state.mission} />
          <FoundBox  found={this.state.found}
                        won={this.state.found.length === this.state.mission.length}
                        handleClick={this.handleItemClick}/>
        </div>
      </div>
    )
  }
}
