import React, { Component } from 'react';
import TrashMountain from '../images/trash_mountain.jpg';

export default class Game extends Component {
  state = {
    imgs: []
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000/items')
  //   .then(res => res.json())
  //   .then(json => this.setState({imgs: json}))
  // }

  render() {
    console.log("Got to game!")
    return(
      <div className="image_container">
        <div className="main_image"> <img src={TrashMountain} height="900" alt="Trash Mountain"/> </div>
        <div>
          {this.state.imgs ? this.state.imgs.map((img) => {
            return (
              <img src={img.src} style={{height: '30px', width: '30px'}}/>
            )
          })
          : null
        }
      </div>
    </div>
  )
}
}
