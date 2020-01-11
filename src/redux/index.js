// const redux = require("redux");

import { createStore } from "redux";

const defautState = {
  count: 0
};

const reducer = (state = defautState, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + action.payload
      };
    case "decrement":
      return {
        count: state.count - action.payload
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

// console.log(store);

// console.log(Redux);
// 订阅一个事件，在reducer被触发后调用
// store.subscribe(() => {
//   console.log(store.getState());
// })

// store.dispatch({
//   type: "increment",
//   payload: 5
// });

// store.dispatch({
//   type: "decrement",
//   payload: 4
// });

// store.dispatch({
//   type: "increment",
//   payload: 1
// });
