import React, { Component } from "react";

// import MyComponent from './hoc/MyComponent'

// import Parent from "./Context/current/Parent";

import Animate from "./router/Animate";

// class App extends Component {
//   render() {
//     return <Parent></Parent>;
//   }
// }

import reduxContext from "./redux/context";

import store from "./redux/index";

import Counter from "./redux/Counter";

const { Provider } = reduxContext;

class App extends Component {
  render() {
    return (
      <Provider value={{ store }}>
        <Animate></Animate>
      </Provider>
    );
  }
}

export default App;
