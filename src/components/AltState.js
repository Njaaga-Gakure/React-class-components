import React, { Component } from "react";

class AltState extends Component {
  constructor() {
    super();
    this.state = {
      decision: "Yes",
    };
    this.toggleAnswer = this.toggleAnswer.bind(this);
  }
  toggleAnswer() {
    this.setState((prevState) => {
      return {
        decision: prevState.decision === "Yes" ? "No" : "Yes",
      };
    });
  }
  render() {
    return (
      <div className="card">
        <h1 className="card-title">should i go out tonight?</h1>
        <div className="card-answer" onClick={this.toggleAnswer}>
          <h1>{this.state.decision}</h1>
        </div>
      </div>
    );
  }
}
export default AltState;
