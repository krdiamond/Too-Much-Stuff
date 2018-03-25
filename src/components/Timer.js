import React from 'react'

export default class Timer extends React.Component {
  state = {
    elapsed: 0,
  }

  componentDidMount = () => {
      // componentDidMount is called by react when the component
      // has been rendered on the page. We can set the interval here:
      this.timer = setInterval(this.tick, 1000);
  }

  // shouldComponentUpdate(nextProps) {
  //   this.props.won === nextProps.won
  // }

  stopTimer = () => {
      // This method is called immediately before the component is removed
      // from the page and destroyed. We can clear the interval here:
      clearInterval(this.timer);
  }

  tick = () => {
      this.setState({elapsed: this.state.elapsed + 1});
  }

  render() {
    { (this.props.won) ? this.stopTimer() : null }
    return <p><b>{this.state.elapsed} seconds</b></p>;
  }
};
