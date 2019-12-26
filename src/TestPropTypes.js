import React, { Component } from "react";

import PropTypes from "prop-types";

class TestPropTypes extends Component {
  // 第二种方式通过，ES6 static 运算符定义
  static propTypes = {
    del: PropTypes.func,
    value: PropTypes.string.isRequired,
    index: function(props, propName, componentName) {
      /**
       * props => 父组件传递过来的属性的集合
       * propName => 要检测的属性名，对应函数 ： 前面对应的属性名
       * componentName => 函数所作用的类
       */
      console.log(props);
      console.log(propName);
      console.log(componentName);
      if (!/1/.test(props[propName])) {
        return new Error(
          'Invalid prop `' + propName + '` supplied to' +
          ' `' + componentName + '`. Validation failed.'
        );
      }
    },
  
  };

  // 默认值
  static defaultProps = {
    value: "xixi"
  };

  render() {
    return <div onClick={this.props.del}>{this.props.value}</div>;
  }
}

// 第一种方式，通过 . 来定义
// TestPropTypes.propTypes = {
//   del: PropTypes.func,
//   value: PropTypes.string,
//   index: PropTypes.number
// };

export default TestPropTypes;
