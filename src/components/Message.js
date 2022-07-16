import React, { Component } from "react";

class Magic extends Component {
  constructor() {
    super();
    this.state = {
      message: "Namastey Visitor"
    };
  }
  changeMessage() {
    this.setState({
      message: "Thank you for subscribing!"
    });
  }
  render() {
    return (
      <div>
        <h1>Message is {this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
export default Magic;
