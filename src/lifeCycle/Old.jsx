// import React, { Component } from "react";
import React, { PureComponent } from "react";

class Container extends PureComponent {
  // props 传和不传的区别
  // constructor和super中传递一个形参(props)可以拿到父组件传递过来的值
  constructor(props) {
    super(props);
    console.log("child constructor");
    this.state = {
      name: "haha"
    };
  }

  // UNSAFE_componentWillMount() {
  //   console.log("child UNSAFE_componentWillMount");
  // }

  componentDidMount() {
    console.log("child componentDidMount");
  }

  // 需要在自身组件中定义一个状态state
  static getDerivedStateFromProps(props, state) {
    console.log(props);
    console.log(state);
    return {
      name: props.name
    };
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   // console.log(nextProps);
  //   console.log("child UNSAFE_componentWillReceiveProps");
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps);
  //   console.log(this.props);
  //   console.log("child shouldComponentUpdate");
  //   return nextProps.name === this.props.name ? false : true;
  // }

  render() {
    console.log("child render");
    return <div>{this.state.name}</div>;
  }
}

export default Container;
