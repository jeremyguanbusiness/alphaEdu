import React, { Component } from 'react';
import './Tableintro.css';

class Tableintro extends Component {
  render() {
    return (
      <div>
        <div className="container margintop">
          <div className="row">
            <table className="striped centered bordered responsive-table">
              <thead>
                <tr>
                  <th className="amber darken-3 white-text fontChange">美国留学</th>
                  <th className="blue darken-4 white-text fontChange">奥法教育</th>
                  <th className="teal lighten-2 white-text fontChange">传统留学机构</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col1">Alvin</td>
                  <td className="col1-1">Eclair</td>
                  <td className="col1-1">$0.87</td>
                </tr>
                <tr>
                  <td className="col1">Alvin</td>
                  <td className="col1-1">Eclair</td>
                  <td className="col1-1">$0.87</td>
                </tr>
                <tr>
                  <td className="col1">Alvin</td>
                  <td className="col1-1">Eclair</td>
                  <td className="col1-1">$0.87</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div >
    );
  }
}

export default Tableintro;