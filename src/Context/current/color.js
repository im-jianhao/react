import React from "react";

const style = {
  color: "red",
  title: "haha"
};

// 默认值，在根组件不使用Provider的时候
// 子孙组件context中拿到的是默认值{ style }
const MyContext = React.createContext({ style });

export { MyContext, style };
