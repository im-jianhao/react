import React, { Component } from "react";

import Old from "./lifeCycle/Old";

class App extends Component {
  constructor() {
    super();
    console.log("constructor");

    this.state = {
      name: "haha"
    };

    this.change = () => {
      this.setState({
        name: "heihei"
      });
    };
  }

  render() {
    return (
      <>
        <Old name={this.state.name}></Old>
        <button onClick={this.change}>改变</button>
      </>
    );
  }
}

export default App;
