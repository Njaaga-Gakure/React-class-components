import React, { Component } from "react";

export default class DidMount extends Component {
  state = {
    character: {},
  };

  // akin to useEffect hook
  componentDidMount() {
    console.log("component did mount");
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/1");
        const data = await response.json();
        this.setState({ character: { ...data } });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }
  render() {
    console.log("render");
    const { name } = this.state.character;
    return <h1 style={{ color: "white", letterSpacing: "2px" }}>{name}</h1>;
  }
}
