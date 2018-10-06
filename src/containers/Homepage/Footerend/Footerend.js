import React, { Component } from 'react';
import './Footerend.css';
import { Row } from 'react-materialize';
import { NavLink } from 'react-router-dom';

class Footerend extends Component {
  render() {
    return (
      <footer class="page-footer white-text grey darken-3">
        <div class="container ">
          <div class="row ">
            <div class="col s4">
              <Row className='center'>
                <h6 className="white-text">热门服务</h6>
                <div className="col s6 rightAlight borderR margintopS">
                  <NavLink to="/" activeClassName="white-text" exact>
                    美国大学申请
                  </NavLink>
                </div>
                <div className="col s6 leftAlight margintopS">
                  <NavLink to="/" activeClassName="white-text" exact>
                    美国大学转学
                  </NavLink>
                </div>
                <div className="col s6  rightAlight borderR margintopS">
                  <NavLink to="/" activeClassName="white-text" exact>
                    美国研究生申请
                  </NavLink>
                </div>
                <div className="col s6  leftAlight margintopS">
                  <NavLink to="/" activeClassName="white-text" exact>
                    留学应急应对
                  </NavLink>
                </div>
                <div className="col s6  rightAlight borderR margintopS">
                  <NavLink to="/" activeClassName="white-text" exact>
                    美国高中申请
                  </NavLink>
                </div>
                <div className="col s6  leftAlight margintopS">
                  <NavLink to="/" activeClassName="white-text" exact>
                    美国大学排名
                  </NavLink>
                </div>
              </Row>
            </div>
            <div class="col s4">
              <Row className='center'>
                <div class="col s12">
                  <h6 className="white-text">联系我们</h6>
                </div>
                <div class="col s12 margintopS">
                  <h7 className="white-text">咨询电话: +1 xxx-xxx-xxxx</h7>
                </div>
                <div class="col s12 margintopS">
                  <h7 className="white-text">总部地址:xxxxxxxxxxx</h7>
                </div>
              </Row>
            </div>
            <div class="col s4">
              <Row className='center'>
                <div class="col s12">
                  <h6 className="white-text">扫码咨询</h6>
                </div>
                <div class="col s12 margintopS">
                  <h7 className="white-text">咨询电话: +1 xxx-xxx-xxxx</h7>
                </div>
              </Row>
            </div>
          </div>
        </div>
        <div class="footer-copyright grey darken-4">
          <div class="container">
            <div class="col s12 footerFix">
              <Row className='center'>
                © 2018 Copyright 美国奥法国际教育 | All Rights Reserved | Powered by 美国奥法国际教育
            </Row>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footerend;