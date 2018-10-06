import React, { Component } from 'react';
import { Row } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import './Headerinfo.css';

class Headerinfo extends Component {
  render() {
    return (
      <div>
        <div className="container marginfix ">
          <div className="row">
            <div className="col s4 blue darken-4 margin-maintain">
              <Row className='center'>
                <h4 className="white-text">权威认证</h4>
                <p className="white-text widthFix">奥法国际教育作为美国招生协会AIRC认证和国际教育顾问委员会ICEF认可的权威留学机构，一直秉承“用心做留学”和“为中国学生留学美国指路引航”的服务理念，将学生的利益和客户的满意放在第一位。</p>
              </Row>
            </div>
            <div className="col s4  teal lighten-2 margin-maintain">
              <Row className='center'>
                <div className="white-text widthFix">
                  <h4 className="white-text">精品留学服务</h4>
                  <div className="col s6 margintopsmall borderRight">
                    <NavLink to="/" activeClassName="white-text" exact>
                      美国大学申请
                  </NavLink>
                  </div>
                  <div className="col s6 margintopsmall">
                    <NavLink to="/" activeClassName="white-text" exact>
                      美国大学转学
                  </NavLink>
                  </div>
                  <div className="col s6 margintopmedium borderRight">
                    <NavLink to="/" activeClassName="white-text" exact>
                      美国研究生申请
                  </NavLink>
                  </div>
                  <div className="col s6 margintopmedium">
                    <NavLink to="/" activeClassName="white-text" exact>
                      留学应急应对
                  </NavLink>
                  </div>
                  <div className="col s6 margintopmedium borderRight">
                    <NavLink to="/" activeClassName="white-text" exact>
                      美国高中申请
                  </NavLink>
                  </div>
                  <div className="col s6 margintopmedium">
                    <NavLink to="/" activeClassName="white-text" exact>
                      美国大学排名
                  </NavLink>
                  </div>
                </div>
              </Row>
            </div>
            <div className="col s4 amber darken-3 margin-maintain">
              <Row className='center'>
                <h4 className="white-text">24/7全天候服务</h4>
                <p className="white-text margintopsmall-1">Email: xxx@xxx.com</p>
                <br />
                <p className="white-text margintopsmall">联系电话: +1 xxx-xxx-xxxx</p>
                <br />
                <p className="white-text margintopsmall">微信联系: xxxxxxxxxx</p>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Headerinfo;