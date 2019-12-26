import React, { Component, Fragment } from "react";

import CommentItem from "./CommentItem";

class CommentList extends Component {
  constructor() {
    super();

    this.state = {
      msgList: []
    };

    this.deleteCurrentItem = this.deleteCurrentItem.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // this.state.msgList.push(nextProps);
    this.setState({
      msgList: [...this.state.msgList, nextProps]
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.msgList.map((item, index) => {
          return (
            <CommentItem
              key={index}
              deleteCurrentItem={this.deleteCurrentItem}
              index={index}
            >
              {item.msg}
            </CommentItem>
          );
        })}
      </Fragment>
    );
  }

  deleteCurrentItem(i) {
    this.state.msgList.splice(i, 1);
    this.setState({});
  }
}

export default CommentList;
