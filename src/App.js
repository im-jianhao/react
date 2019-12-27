import React, { Component } from "react";

import MyComponent from './hoc/MyComponent'

// import Parent from "./Context/current/Parent";

// class App extends Component {
//   render() {
//     return <Parent></Parent>;
//   }
// }

class App extends Component {
  render() {
    return <MyComponent></MyComponent>;
  }
}

export default App;
