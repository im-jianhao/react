import React, { Component } from "react";

import Comment from "./components/Comment";

import TestPropTypes from "./TestPropTypes";

class App extends Component {
  constructor() {
    super();

    this.del = this.del.bind(this);
  }

  render() {
    return (
      <>
        <Comment></Comment>
        <TestPropTypes index={1} value={"haha"} del={this.del}></TestPropTypes>
      </>
    );
  }

  del() {
    console.log(1);
  }
}

export default App;
