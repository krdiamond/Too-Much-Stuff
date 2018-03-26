import React from 'react'

export default class Timer extends React.Component {
  state = {
    seconds: 0,
    pause: false,
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  startTimer = () => {
    console.log("STARTING TIMER!")
    this.timer = setInterval(this.tick, 1000)
  }

  stopTimer = () => {
    console.log("STOPPING TIMER!")
    clearInterval(this.timer)
  }

  tick = () => {
    console.log("TICK!")
    this.setState({seconds: this.state.seconds + 1}, () => {
      this.props.handleFinalTime(this.state.seconds)
    });
  }

  render() {
    ((this.props.won) ? this.stopTimer() : null )
    return (
<<<<<<< HEAD
        <div id="timer">
          <p><b>{this.state.seconds} seconds</b></p>
=======
        <div className={"timer"} >
          <p><b>{this.state.seconds}</b></p>
>>>>>>> 85727745b3012a76017953e5fa9468263885a9af
        </div>
      )
  }
};
