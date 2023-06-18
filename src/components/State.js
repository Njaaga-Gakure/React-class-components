import React, { Component, useState } from "react";

// const State = () => {
//   const [decision, setDecision] = useState("yes");
//   const toggleAnswer = () => {
//     setDecision((prevDecision) => {
//       return prevDecision === "yes" ? "no" : "yes";
//     });
//   };
//   return (
//     <div className="card">
//       <h1 className="card-title">should i go out tonight?</h1>
//       <div className="card-answer" onClick={toggleAnswer}>
//         <h1>{decision}</h1>
//       </div>
//     </div>
//   );
// };

class State extends Component {
  state = {
    decision: "Yes",
  };
  toggleAnswer = () => {
    this.setState((prevState) => {
      return {
        decision: prevState.decision === "Yes" ? "No" : "Yes",
      };
    });
  };
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
export default State;
