import React from 'react'

export default class Timer extends React.Component {
  state = {
    seconds: 0,
    pause: true,
  }

  startTimer = () => {
    this.timer = setInterval(this.tick, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timer)
  }

  tick = () => {
      this.setState({seconds: this.state.seconds + 1});
  }

  toggleTimer = () => {
    this.setState({ pause: !this.state.pause}, () => {
      if (this.state.pause) {
        this.stopTimer()
      } else {
        this.startTimer()
      }
    })
  }

  render() {
    (this.props.won) ? this.stopTimer() : null
    return (
        <div>
          <p><b>{this.state.seconds} seconds</b></p>
          {(this.state.pause) ?
          <button className={'start_game'} onClick={this.toggleTimer}>{'START GAME'}</button>
          : null }
          {(this.props.won) ?
          <button className={'start_game'} onClick={this.props.handleRestart}>{'START NEW GAME'}</button>
          : null }
        </div>
      )
  }
};
