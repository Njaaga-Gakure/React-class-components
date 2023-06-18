import React from "react";
import {
  Greeting,
  State,
  AltState,
  ComplexState,
  DidMount,
  DidUpdate,
  DidUpdateCont,
  WillUnmount,
  TodoList,
} from "./components";

class App extends React.Component {
  state = {
    show: true,
  };

  toggle = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };
  render() {
    return (
      <main>
        {/* <Greeting salutation="guten tag" />; */}
        {/* <State /> */}
        {/* <AltState /> */}
        {/* <ComplexState /> */}
        {/* <DidMount /> */}
        {/* <DidUpdate /> */}
        {/* <DidUpdateCont /> */}
        {/* <div className="container">
          <button onClick={this.toggle}>Toggle WindowTracker</button>
          {this.state.show && <WillUnmount />}
        </div> */}
        <TodoList />
      </main>
    );
  }
}

export default App;
