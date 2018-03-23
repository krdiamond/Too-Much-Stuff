import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LandingImage from '../images/too_much.jpg';


export default class Landing extends Component {
  render() {
    return(
      <div className="landing_page_container">
        <div className="landing_image"> <img src={LandingImage} height="900" alt="TOO MUCH STUFF AHHHH"/> </div>
        <button className="start_button"> <Link to="/game">PLAY</Link> </button>
      </div>
    )
  }
}



// <button className="button">
//   <Link to="/game">PLAY</Link>
// </button>
