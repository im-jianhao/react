import React, { Component } from "react";

export default Comp => {
  return class extends Component {
    render() {
      return (
        <>
          <div>xixi</div>
          <Comp title="haha"></Comp>
        </>
      );
    }
  };
};
