import React, { Fragment } from "react";

const CommentItem = props => {
  if (props.flag) {
    return (
      <Fragment>
        <div>
          {props.children}
          <input
            type="button"
            value="删除"
            onClick={() => {
              props.deleteCurrentItem(props.index);
            }}
          />
        </div>
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>
  }
};

export default CommentItem;