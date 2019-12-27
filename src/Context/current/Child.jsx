import React, { Component } from "react";

// 导入color文件
import { MyContext } from "./color";

const { Consumer } = MyContext;

class Child extends Component {
  // 挂载实例
  static contextType = MyContext;

  render() {
    return (
      <>
        <div style={{ color: this.context.style.color }}>
          {this.context.style.title}
          {this.props.children}
        </div>
        {/* 函数式组件需要使用Consumer，通过函数执行返回一个JSX元素 */}
        <Consumer>{value => <div>{value.style.title}</div>}</Consumer>
      </>
    );
  }
}

export default Child;
