import React, { Component } from 'react';
import { Row } from 'react-materialize';
import GenerateRank from './GenerateRank/GenerateRank';
import './Tablerank.css';


class Tablerank extends Component {
  render() {
    return (
      <div>
        <div className="container margintop">
          <div className="row">
            <Row className='center tableTitle blue darken-4 white-text rowFix'>
              <div className>美国留学选校</div>
            </Row>
            <table className="centered bordered responsive-table">
              <thead className="whiteBorder">
                <tr whiteBorder>
                  <th className="blue darken-4 white-text colshort">2019排名</th>
                  <th className="blue darken-4 white-text colshort">2018排名</th>
                  <th className="blue darken-4 white-text colshort">排名变化</th>
                  <th className="blue darken-4 white-text colshort-1">大学名称</th>
                  <th className="blue darken-4 white-text colshort-1">英文名</th>
                  <th className="blue darken-4 white-text colshort">TOEFL要求</th>
                </tr>
              </thead>
              <tbody className="zoomout">
                <GenerateRank oldRank={'1'}
                  newRank={'1'}
                  Icon={'arrow_right_alt'}
                  schoolChinese={'普林斯顿大学'}
                  schoolEnglish={'Princeton University'}
                  toelf={'108'}
                />
              </tbody>
              <tbody className="zoomout">
                <GenerateRank
                  oldRank={'2'}
                  newRank={'2'}
                  Icon={'arrow_right_alt'}
                  schoolChinese={'哈佛大学'}
                  schoolEnglish={'Harvard University'}
                  toelf={'105'}
                />
              </tbody>


            </table>
          </div>
        </div>
      </div >
    );
  }
}

export default Tablerank;