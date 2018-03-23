import React, { Component } from 'react';

export default class Test extends Component {
  state = {
    imgs: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/items')
      .then(res => res.json())
      .then(json => this.setState({imgs: json}))
  }

  render() {
    return(
      <div className="landing_page_container">
        {this.state.imgs ? this.state.imgs.map((img) => {
          return (
            <img src={img.src} style={{height: '30px', width: '30px'}}/>
          )
        })
        : null
      }
      </div>
    )
  }
}



// <button className="button">
//   <Link to="/game">PLAY</Link>
// </button>
