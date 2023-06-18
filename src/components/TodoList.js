import React, { Component } from "react";

class TodoList extends Component {
  state = {
    list: [],
    inputValue: "",
  };
  updateItem = (index) => {
    this.setState((prevState) => {
      const newList = prevState.list.map((item, ind) => {
        return index === ind ? { ...item, completed: !item.completed } : item;
      });
      return { list: newList };
    });
  };
  addItem = (e) => this.setState({ inputValue: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.inputValue.trim()) {
      console.log("input cannot be empty");
      return;
    }
    this.setState((prevState) => {
      return {
        list: [
          ...prevState.list,
          { name: this.state.inputValue, completed: false },
        ],
      };
    });
    this.setState({ inputValue: "" });
  };
  render() {
    const notCompleted = this.state.list.filter(
      ({ completed }) => completed === false
    );
    return (
      <div className="list-container">
        <form onSubmit={this.handleSubmit} className="todo-form">
          <div className="form-row">
            <input
              className="form-input"
              type="text"
              onChange={this.addItem}
              value={this.state.inputValue}
            />
            <button className="form-btn">add</button>
          </div>
        </form>
        <ul>
          <p>
            ({notCompleted.length}) out of ({this.state.list.length}) tasks
            remaining
          </p>
          {this.state.list.map((item, index) => {
            const { completed } = item;
            return (
              <li
                style={{
                  color: "white",
                  textDecoration: completed ? "line-through" : "none",
                }}
                onClick={() => this.updateItem(index)}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
