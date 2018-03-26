import React, { Component } from 'react';


class Item extends Component {
  state = {
    left: 0,
    top: 0,
    style: {}
  }

  componentDidMount() {
    // console.log("MOUNTING:", this.props.img.name)
    const style = this.props.id === "location-1" ? this.divStyle1 : this.divStyle2
    this.setState({ style })
  }

  componentWillUnmount() {
    // console.log("UNMOUNTING:", this.props.img.name)
  }

  divStyle1 = {
    left: Math.floor(Math.random() * 501),
    top: Math.floor(Math.random() * 376),
  }

  divStyle2 = {
    left: Math.floor(Math.random() * 251),
    top: Math.floor(Math.random() * 201),
  }

  render() {
    return(
        <img
          style={this.state.style}
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
