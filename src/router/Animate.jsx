import React, { Component } from "react";

import { CSSTransition } from "react-transition-group";

import "./ani.css";

class Animate extends Component {
  state = {
    show: false
  };

  setInProp = () => {
    this.setState(state => ({
      show: !state.show
    }));
  };

  render() {
    return (
  <div>
    <CSSTransition
      in={this.state.show}
      timeout={5000}
      classNames="my-node"
      mountOnEnter
      unmountOnExit
    >
      <div>{"I'll receive my-node-* classes"}</div>
    </CSSTransition>
    <button type="button" onClick={this.setInProp}>
      Click to Enter
    </button>
  </div>
    );
  }
}

export default Animate;
