import React from "react"

export default class WillUnmount extends React.Component {
    state = {
        windowWidth: window.innerWidth
    }
    
    watchWidth = () => {
        console.log("run")
        this.setState({windowWidth: window.innerWidth})
    }
    
    componentDidMount() {
        console.log("mount")
        window.addEventListener("resize", this.watchWidth)
    }
    componentWillUnmount () {
        window.removeEventListener("resize", this.watchWidth)
    }
    render() {
        return (
            <h1>Window width: {this.state.windowWidth}</h1>
        )
    }
}
