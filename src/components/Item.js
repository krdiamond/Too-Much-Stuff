import React, { Component } from 'react';


class Item extends Component {

  divStyle = {
    left: Math.floor(Math.random() * 801),
    top: Math.floor(Math.random() * 801),
  }

  render() {
    return(
        <img
          style={this.divStyle}
          src={this.props.img.src}
          onClick={() => (this.props.handleClick ? this.props.handleClick(this.props.img) : null )}
          alt={this.props.img.name}
          className={this.props.className}
        />
      )
    }
  }

export default Item;
