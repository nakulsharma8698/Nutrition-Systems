import React from "react";
export default class Countdown extends React.Component {
  state = {
    min: null,
    sec: null
  };
  componentDidMount() {
    this.secondsRemaining = this.props.secs;
    this.intervalHandle = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }
  tick() {
    let hours = this.props.showHours
      ? Math.floor(this.secondsRemaining / 3600)
      : 0;
    let min = Math.floor((this.secondsRemaining - hours * 3600) / 60);
    let sec = this.secondsRemaining - min * 60 - hours * 3600;

    if (sec < 10) {
      sec = "0" + sec;
    }

    if (min < 10) {
      min = "0" + min;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
    }
    this.setState({ min, sec, hours });

    this.secondsRemaining--;
  }
  render() {
    return (
      <span>
        {this.props.showHours && `${this.state.hours}:`}
        {this.state.min}:{this.state.sec}
      </span>
    );
  }
}
