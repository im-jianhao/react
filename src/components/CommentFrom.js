import React, { Component, Fragment } from "react";

class CommentFrom extends Component {
  constructor() {
    super();
    this.state = {
      value: "aaa"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <Fragment>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={this.state.value}
          onChange={this.handleChange}
        ></textarea>
        <br />
        <button onClick={this.handleClick}>提交</button>
      </Fragment>
    );
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleClick() {
    this.props.sendMsg(this.state.value);
  }
}

export default CommentFrom;
