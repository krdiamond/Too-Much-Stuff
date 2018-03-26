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
    this.timer = setInterval(this.tick, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timer)
  }

  tick = () => {
    this.setState({seconds: this.state.seconds + 1}, () => {
      this.props.handleFinalTime(this.state.seconds)
    });
  }

  render() {
    if (this.props.won) this.stopTimer()
    return (
          <div className={"timer"} >
            <strong>{this.state.seconds}</strong>
          </div>
      )
  }
};
