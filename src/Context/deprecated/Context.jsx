import React, { Component } from "react";

import PropTypes from "prop-types";

class Context extends Component {
  // 指定接收的context的结构类型
  // 可以只是context的一部分
  static contextTypes = {
    name: PropTypes.string
  };

  // this.context取数据
  render() {
    return <div>{this.context.name}</div>;
  }
}

export default Context;