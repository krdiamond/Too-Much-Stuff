import React, { Component } from 'react';
import TrashMountain from '../images/trash_mountain.jpg';
import Item from './Item'
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
      console.log("new imgsLeft after filter:", filteredImgsLeft, "img:", img)
      if (!this.state.found.includes(img)) {
        this.setState({ found: [...this.state.found, img], imgsLeft: filteredImgsLeft }, () => console.log("NEW STATE:", this.state))
      }
    }
  }

  render() {
    return(
<<<<<<< HEAD
      <div className="image_container">
        <div className="main_image"> <img src={TrashMountain} height="900" alt="Trash Mountain"/> </div>
        <div className="item">
          {this.state.imgs ? this.state.imgs.map((img) => {
            return (
              <img src={img.src} style={{height: '40px', width: '40px'}}/>
            )
          })
          : null
        }
=======
    <div>
      <div className="game">
        <div className="trash_mountain"> <img src={TrashMountain} height="900" alt="Trash Mountain"/> </div>
      </div>
      <div style={{height: 200}}>
        <ItemList list={this.state.imgsLeft} handleClick={this.handleItemClick} />
        <MissionBox mission={this.state.mission} />
        <FoundBox   found={this.state.found}
                    won={this.state.found.length === this.state.mission.length}/>
>>>>>>> 4c8b88fcaabc88edf8a7b824897b8146e81115a4
      </div>
    </div>
    )
  }
}
