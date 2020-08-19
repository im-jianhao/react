const UPDATE_COLOR = "UPDATE_COLOR";
const UPDATE_TITLE = "UPDATE_TITLE";

const initState = {
  title: "第一次",
  color: "red",
};

function reducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_COLOR:
      return { ...state, color: action.color };
    case UPDATE_TITLE:
      return { ...state, title: action.title };
    default:
      return state;
  }
}

function creatState(reducer) {
  let state;
  let listeners = [];
  // action需要有一个type属性，用于指定动作的类型
  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((l) => l());
  }
  // 手动执行一遍dispatch，初始化数据
  dispatch({ type: "@@TYPE/REDUX_INIT" });

  function getState() {
    return state;
  }
  // 订阅
  function subscribe(listener) {
    listeners.push(listener);
    //取消订阅
    return function () {
      listeners = listeners.filter((item) => item !== listener);
    };
  }

  return {
    dispatch,
    getState,
    subscribe,
  };
}

const store = creatState(reducer);

const unSubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log(store.getState());

store.dispatch({ type: UPDATE_COLOR, color: "green" });
// 取消订阅
unSubscribe();
store.dispatch({ type: UPDATE_TITLE, title: "第二次" });
