import React, { Component } from 'react';
import { Row, Icon } from 'react-materialize';
import './Quickintro.css';

class Quickintro extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <Row className='center'>
                <h5 className="headerDesign fontColor">选择奥法国际教育的理由</h5>
                <hr />
              </Row>
            </div>
            <div className="col s3">
              <Row className='center'>
                <Icon medium className="colorChange">account_balance</Icon><br />
                <p className="fontColor">奥法深知知己知彼，百战不殆的道理，在申请的这片江湖，紧密的与各大名校合作，获取第一手信息资源，以便更精准的为学生服务</p>
              </Row>
            </div>
            <div className="col s1"></div>
            <div className="col s4">
              <Row className='center'>
                <Icon medium className="colorChange">supervisor_account</Icon><br />
                <p className="fontColor">奥法国际教育拥有强大的服务团队，团队导师均毕业于美国名校，亲身经历美国留学的各个阶段，熟知学校的生存法则，且98%以上拥有硕士以上学历。他们不仅知识渊博，还深知各大名校的不外宣之道并能巧妙的运用到名校申请之中，使得我们百战百胜。团队中超过三成为外籍老师，且这些外籍老师中大部分为现任招生官、学校董事。</p>
              </Row>
            </div>
            <div className="col s1"></div>
            <div className="col s3">
              <Row className='center'>
                <Icon medium className="colorChange">assessment</Icon><br />
                <p className="fontColor">在教育咨询的领域里，奥法教育凭借大数据分析，资源整合而独步江湖，大到留学，广告，出行，生活，小至游学，暑课，监管，都有奥法的身影。</p>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quickintro;