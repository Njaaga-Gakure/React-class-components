import React, { Component } from "react";

// difference between function components
// and class components

// const Greeting = (props) => {
//   const { salutation } = props;
//   return (
//     <div className="greeting-card">
//       <h1 className="title">{salutation}, kush</h1>
//       <p className="greeting-text">This is a class Component</p>
//     </div>
//   );
// };

class Greeting extends Component {
  render() {
    // in class components, you always have access to props
    const { salutation } = this.props;
    return (
      <div className="greeting-card">
        <h1 className="title">{salutation}, kush</h1>
        <p className="greeting-text">This is a class Component</p>
      </div>
    );
  }
}

export default Greeting;
