import React, { Component } from "react";

export default class DidUpdateCont extends Component {
    state = {
        count: 1,
        character: {}
    }
    
    add = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    
    subtract = () => {
        this.setState(prevState => ({count: prevState.count <= 1 ? 1 : prevState.count - 1}))
    }
    
    getStarWarsCharacter = (id) => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => res.json())
            .then(data => this.setState({character: data}))
    }
    
    componentDidMount() {
        this.getStarWarsCharacter(this.state.count)
    }
    
    // we have access to previous props and state
    // so that we can check whether to update or not
    componentDidUpdate(prevProps, prevState) {
        console.log("Updated")
        if(prevState.count !== this.state.count) {
            this.getStarWarsCharacter(this.state.count)
        }
    }
    
    render() {
        return (
            <>
                <div className="counter">
                    <button className="counter--minus" onClick={this.subtract}>–</button>
                    <div className="counter--count">
                        <h1>{this.state.count}</h1>
                    </div>
                    <button className="counter--plus" onClick={this.add}>+</button>
                </div>
                <h1>{this.state.character.name || "Loading..."}</h1>
            </>
        )
    }
}