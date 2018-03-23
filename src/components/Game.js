import React, { Component } from 'react';
import TrashMountain from '../images/trash_mountain.jpg';
import Item from './Item'
import SolutionBox from './SolutionBox'

export default class Game extends Component {
  state = {
    imgs: [],
    solution: [],
    mission: [],
    imgsLeft: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(imgs => {
      const mission = imgs.slice(0, 3)
      this.setState({ imgs, mission, imgsLeft: imgs }, () => console.log("stage imgs after fetch", this.state))
    })
  }

  handleItemClick = (img) => {
    if (this.state.mission.includes(img)) {
      const imgsLeft = this.state.imgs.filter((item) => item !== img)
      this.setState({ solution: [...this.state.solution, img], imgsLeft: imgsLeft })
    }
  }

  render() {
    return(
      <div className="game">
        <div className="trash_mountain"> <img src={TrashMountain} height="900" alt="Trash Mountain"/> </div>
        <div>
          {this.state.imgs ? this.state.imgs.map((img) => {
            return (
              <Item img={img} handleClick={this.handleItemClick}/>
            )
          })
          : null
          }
        </div>
        <SolutionBox solution={this.state.solution} handleClick={this.handleItemClick}/>
      </div>
  )
}
}
