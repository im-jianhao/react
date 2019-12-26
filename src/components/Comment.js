import React, { Component, Fragment } from "react";

import CommentFrom from "./CommentFrom";
import CommentList from "./CommentList";

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      msg: ""
    };

    this.sendMsg = this.sendMsg.bind(this);
  }

  render() {
    return (
      <Fragment>
        <CommentList msg={this.state.msg}></CommentList>
        <CommentFrom sendMsg={this.sendMsg}></CommentFrom>
      </Fragment>
    );
  }

  sendMsg(msg) {
    this.setState({
      msg
    });
  }
}

export default Comment;
