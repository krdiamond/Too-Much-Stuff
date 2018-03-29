import React, { Component } from 'react';


class Item extends Component {

  render() {
    return (
        <img
          style={{left: this.props.x, top: this.props.y}}
          onMouseDown={(this.props.findTheMovingItem) ? (e)=>this.props.findTheMovingItem(e,this.props.id) : null}
          src={this.props.img.src}
          alt={this.props.img.name}
          className={this.props.className}
          id={this.props.id}
          key={this.props.id}
        />
      )
    }
  }

export default Item;
