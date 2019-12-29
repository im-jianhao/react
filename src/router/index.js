import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  withRouter
} from "react-router-dom";

import "./style.css";

const Home = props => <div>Home</div>;

const About = props => {
  // console.log(props);
  return <div>About</div>;
};

const Page404 = () => <div>Page404</div>;

// 可以拿到按钮点击后传递的数据 location.state
const item1 = props => {
  // console.log(props);
  return <div>item1</div>;
};

// 通过判断可以给当前被点击的元素添加以一个特殊标记
// 也可以通过 NavLink CSS伪类来实现
const Lis = withRouter(props => {
  // console.log(props);
  return ["item1", "item2", "item3"].map(item => {
    let name =
      props.location.pathname === `/switch/${item}` ? `>${item}` : item;
    return (
      <li
        key={item}
        onClick={() => {
          props.history.push(`${props.match.url}/${item}`);
        }}
      >
        {name}
      </li>
    );
  });
});

const TestSwitch = props => {
  return (
    <>
      {/* <div>
        <Link to="/switch/item1">item1</Link>
        <Link to="/switch/item2?name=haha#index">item2</Link>
        <Link to="/switch/item3">item3</Link>
      </div> */}
      <ul>
        <Lis></Lis>
      </ul>
      <Switch>
        <Route path="/switch/item1" component={item1}></Route>
        <Route
          path="/switch/:id"
          render={props => {
            console.log(props);
            // let url = new URLSearchParams(props.location.search)
            // console.log(url.get('id'));
            return <div>{props.match.params.id}</div>;
          }}
        ></Route>
        <Route component={Page404}></Route>
      </Switch>
      <Route path="/switch/haha" children={() => <div>children</div>}></Route>
      <button
        onClick={() => {
          props.history.push("/switch/item1", { name: "haha" });
        }}
      >
        click
      </button>
    </>
  );
};

/**
 * exact 精准匹配
 * NavLink 可以添加activeClassName
 * Link 路由导航
 * Switch,当需要配置两个路由路径1、/switch/item1 2、/switch/:id
 *    两个组件都会匹配，exact不管用，需要使用Switch进行排他性，从上到下，只会匹配第一个匹配的，不会向下执行
 * children 只要渲染children所在的子组件，children就会渲染，不需要精准匹配
 * withRouter 高阶组件,传递一个JSX组件,返回一个拥有router的四个属性的组件
 */
class TestRouter extends Component {
  render() {
    return (
      <Router>
        <NavLink exact to="/" activeClassName="active">
          首页
        </NavLink>
        <span> | </span>
        <NavLink
          to={{
            pathname: "/about",
            state: { id: 2 }
          }}
          activeClassName="active"
        >
          关于
        </NavLink>
        <span> | </span>
        <NavLink to="/switch" activeClassName="active">
          switch
        </NavLink>
        <span> | </span>
        <Link to="/">首页---</Link>
        <Route exact path="/haha" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/switch" component={TestSwitch}></Route>
        {/* <Route component={Page404}></Route> */}
      </Router>
    );
  }
}

export default TestRouter;
