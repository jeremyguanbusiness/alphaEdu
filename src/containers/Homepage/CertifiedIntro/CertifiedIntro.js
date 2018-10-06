import React, { Component } from 'react';
import { Row } from 'react-materialize';
import './CertifiedIntro.css';

import AIRC from '../../../image/AIRC.png';
import ICEF from '../../../image/ICEF.png';
import NAFSA from '../../../image/nafsa.png';

class Footerend extends Component {
  render() {
    return (

      <div class="container">
        <div class="row ">
          <Row className='center'>
            <h5 className=" fontColor">奥法国际教育&middot;权威教育机构认证</h5>
            <hr />
          </Row>
        </div>
        <div class="row ">
          <div class="col s6">
            <Row className='center'>
              <img src={AIRC} alt="AIRC Logo" className="AIRC"></img>
            </Row>
          </div>
          <div class="col s6">
            <p>AIRC(美国国际招生协会，American International Recruitment Council）是在美国成立的非营利性组织。该组织为了确保留学中介机构的服务符合美国国情，且遵循行业行为规则以及道德规范，制定了一系列科学严谨的审核标准。通过AIRC认证的中介机构可以充分被学生以及家长信赖。</p>
          </div>
        </div>
        <div class="row ">
          <div class="col s6">
            <Row className='center'>
              <img src={ICEF} alt="ICEF Logo" className="ICEF"></img>
            </Row>
          </div>
          <div class="col s6">
            <p>ICEF（国际教育顾问委员会，International Consultants for Education and Fairs）成立于德国，50多年来一直致力于为学校以及各方机构搭建更好的合作交流平台。ICEF对中介机构有严格的审核系统，被其认证的留学机构不仅专业性强，服务态度佳，还能接受官方的国际招生培训。</p>
          </div>
        </div>
        <div class="row ">
          <div class="col s6">
            <Row className='center'>
              <img src={NAFSA} alt="NAFSA Logo" className="NAFSA"></img>
            </Row>
          </div>
          <div class="col s6">
            <p>NAFSA（美国国际教育工作者协会， Association of International Educators）是全世界推进国际教育的个体的协会和交换和全球性劳工发展。NAFSA通过规定很好的练习标准，提供训练和专家发展机会，提供网络机会和主张服务国际教育家和他们的机关和组织国际教育的。</p>
          </div>
        </div>
      </div>


    );
  }
}

export default Footerend;