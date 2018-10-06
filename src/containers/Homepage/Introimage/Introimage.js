import React, { Component } from 'react';
import BackgroundImage from '../../../image/school.jpg';
import { Row } from 'react-materialize';
import './Introimage.css'

const sectionStyle = {
  header: {
    width: "100%",
    height: "85vh",
    backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6) ), url(' + BackgroundImage + ')',
    backgroundSize: 'cover',
  },

  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  }
};

class Introimage extends Component {
  render() {
    return (
      <div>
        <div style={sectionStyle.header}>
          <div className="container">
            <Row className='center'>
              <h6 className="header-sub">美国留学本土高端服务品牌&nbsp; | &nbsp;美国奥法国际教育</h6>
              <h2 className="header-main"><span className="header-main-sub">用心做留学&nbsp;</span> 一路同行&nbsp; 一起成长</h2>
              <h2 className="header-main">大数据合理规划&nbsp;<span className="header-main-sub">与您一起叩开名校大门</span></h2>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Introimage;