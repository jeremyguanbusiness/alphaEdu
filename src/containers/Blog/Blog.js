import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Link } from 'react-router-dom';
import Test1 from '../Test1/Test1';
import Test2 from '../Test2/Test2';
import Test3 from '../Test3/Test3';
import Test4 from '../Test4/Test4';
import Contact from '../Contact/Contact';
import Homepage from '../Homepage/Homepage';
import logo from '../../image/logo.png';
import { Dropdown } from 'react-materialize';
import './Blog.css';
import '../materialize.min.css';

class Blog extends Component {

  render() {
    return (
      <div className="Blog">
        <header>

          <nav>
            <div className="nav-wrapper white">
              <div className="brand-logo ">
                <NavLink to="/" exact>
                  <img src={logo} alt="logo" className="logo-resize responsive-img" />

                </NavLink>
              </div>

              <ul className="arrange right hide-on-med-and-down">
                <li>
                  <NavLink to="/" style={{ marginRight: '30px' }} exact>
                    首页
                  </NavLink>
                </li>
                <li>
                  <Dropdown options={{ hover: true, constrainWidth: false, belowOrigin: true }} trigger={
                    <Link to="/Test1/" style={{ marginRight: '30px' }} >
                      VIP升学规划
                    </Link>
                  }>
                    <NavLink activeClassName="black-text" to="/Test1/" >
                      背景提升
                    </NavLink>
                    <NavLink activeClassName="black-text" to="/Test1/" >
                      高中规划
                    </NavLink>
                    <NavLink activeClassName="black-text" to="/Test1/" >
                      社区大学规则
                    </NavLink>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown options={{ hover: true, constrainWidth: false, belowOrigin: true }} trigger={
                    <Link style={{ marginRight: '30px' }} to="/Test2/" >
                      初高中申请
                    </Link>
                  }>
                    <NavLink activeClassName="black-text lieffect" to="/Test2/" >
                      美国夏令营
                    </NavLink>
                  </Dropdown>

                </li>
                <li>
                  <Dropdown options={{ hover: true, constrainWidth: false, belowOrigin: true }} trigger={
                    <Link style={{ marginRight: '30px' }} to="/Test3/"  >
                      本硕博申请
                    </Link>
                  }>
                    <NavLink activeClassName="black-text lieffect" to="/Test3/" >
                      高中直升
                    </NavLink>
                    <NavLink activeClassName="black-text lieffect" to="/Test3/">
                      社区大学
                    </NavLink>
                    <NavLink activeClassName="black-text lieffect" to="/Test3/" >
                      普通申请
                    </NavLink>
                    <NavLink activeClassName="black-text lieffect" to="/Test3/" >
                      VIP招生官申请
                    </NavLink>
                  </Dropdown>
                </li>
                <li>
                  <NavLink style={{ marginRight: '30px' }} to="/Test4/">
                    留学紧急应对
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Contact/">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>

        </header>
        <Switch>
          <Route path="/Test1/" component={Test1} />
          <Route path="/Test2/" component={Test2} />
          <Route path="/Test3/" component={Test3} />
          <Route path="/Test4/" component={Test4} />
          <Route path="/Contact/" component={Contact} />
          <Route path="/" exact component={Homepage} />
        </Switch>
      </div >

    );
  }
}

export default Blog;

