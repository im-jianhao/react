import React, { Component } from "react";

import { MyContext, style } from "./color";

import Child from "./Child";
import Child2 from "./Child2";

const { Provider } = MyContext;

class Parent extends Component {
  constructor(props) {
    super(props);

    // 使用state维护一个状态
    // 修改Context中的数据，重新渲染DOM
    this.state = {
      style,
      handleClick: data => {
        this.setState({
          style: {
            title: "haha",
            color: data
          }
        });
      }
    };
  }
  // 有Provider就需要传一个value否则this.context: undefined
  render() {
    return (
      <Provider value={this.state}>
        <Child>
          <Child2></Child2>
        </Child>
      </Provider>
    );
  }
}

export default Parent;
