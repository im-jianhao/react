import React, { Component } from "react";

import reduxContext from "./context";

class Counter extends Component {
  static contextType = reduxContext;
  constructor(props) {
    super(props);
    //  初始化状态
    this.state = {
      count: ""
    };

    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.increment}> + </button>
      </>
    );
  }
  // 钩子函数，修改count为store中存储的数据
  componentDidMount() {
    this.setState({
      count: this.context.store.getState().count
    });
    this.context.store.subscribe(() => {
      this.setState({
        count: this.context.store.getState().count
      });
    });
  }
  // 增加，修改后重新读取
  increment() {
    this.context.store.dispatch({
      type: "increment",
      payload: 1
    });
  }
}

export default Counter;