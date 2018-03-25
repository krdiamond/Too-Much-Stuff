import React, { Component } from 'react';


class Item extends Component {

  divStyle1 = {
    left: Math.floor(Math.random() * 501),
    top: Math.floor(Math.random() * 376),
  }

  divStyle2 = {
    left: Math.floor(Math.random() * 201),
    top: Math.floor(Math.random() * 101),
  }

  render() {
    return(
        <img
          style={this.props.id === "location-1" ? this.divStyle1 : this.divStyle2}
          src={this.props.img.src}
          onClick={() => (this.props.handleClick ? this.props.handleClick(this.props.img) : null )}
          alt={this.props.img.name}
          className={this.props.className}
          id={this.props.id}
        />
      )
    }
  }

export default Item;
