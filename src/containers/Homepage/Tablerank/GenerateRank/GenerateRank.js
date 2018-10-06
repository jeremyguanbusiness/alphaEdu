import React from 'react';
import { Icon } from 'react-materialize';

const GenerateRank = props => (
  <tr >
    <td className="colshort">{props.newRank}</td>
    <td className="colshort">{props.oldRank}</td>
    <td className="colshort"><Icon tiny>{props.Icon}</Icon></td>
    <td className="colshort-1">{props.schoolChinese}</td>
    <td className="colshort-1">{props.schoolEnglish}</td>
    <td className="colshort">{props.toelf}</td>
  </tr>
);

export default GenerateRank;