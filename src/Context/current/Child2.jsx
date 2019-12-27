import React, { Component } from "react";

// 导入color文件
import { MyContext } from "./color";

class Child2 extends Component {
  // 挂载实例
  static contextType = MyContext;

  render() {
    console.log(this);
    return (
      <div style={{ color: this.context.style.color }}>
        {this.context.style.title}
        <button
          onClick={() => {
            this.context.handleClick("blue");
          }}
        >
          改变颜色
        </button>
      </div>
    );
  }
}

export default Child2;
