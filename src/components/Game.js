import React, { Component } from 'react';
import TrashMountain from '../images/trash_mountain.jpg';

export default class Game extends Component {
  state = {
    imgs: []
  }

<<<<<<< HEAD
  // componentDidMount() {
  //   fetch('http://localhost:3000/items')
  //   .then(res => res.json())
  //   .then(json => this.setState({imgs: json}))
  // }
=======
  componentDidMount() {
    fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(json => this.setState({imgs: json}, () => console.log("stage imgs after fetch", this.state.imgs)))
  }
>>>>>>> 276f4afd78a0326d97a7f33b02b2408ccb45d76c

  render() {
    console.log("Got to game!")
    return(
      <div className="image_container">
        <div className="main_image"> <img src={TrashMountain} height="900" alt="Trash Mountain"/> </div>
        <div>
          {this.state.imgs ? this.state.imgs.map((img) => {
            return (
              <img src={img.src} style={{height: '40px', width: '40px'}}/>
            )
          })
          : null
        }
      </div>
    </div>
  )
}
}
