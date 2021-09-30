import React, { Component } from "react";

class Hello extends Component {
    render() {
        return (
            <div className="f1 tc">
                <h1>Hello World</h1>
                <p>Welcome {this.props.greetings}</p>
            </div>
        );
    }
}

export default Hello;