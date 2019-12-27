import React, { Component } from "react";

import hoc from "./hoc";

class MyComponent extends Component {
  render() {
    console.log(this);
    return <div>hhhhh</div>;
  }
}

export default hoc(MyComponent);
