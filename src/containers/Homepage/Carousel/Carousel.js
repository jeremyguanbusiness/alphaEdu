import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import BC from '../../../image/BC.png';
import BU from '../../../image/BU.png';
import Caltech from '../../../image/Caltech.png';
import CMU from '../../../image/CMU.png';
import JHU from '../../../image/JHU.jpg';
import UCB from '../../../image/UCB.png';
import UCD from '../../../image/UCD.png';
import UCI from '../../../image/UCI.jpg';
import UCLA from '../../../image/UCLA.jpg';
import UCSB from '../../../image/UCSB.jpg';
import UCSD from '../../../image/UCSD.png';
import UIUC from '../../../image/UIUC.png';
import UMichigan from '../../../image/UMichigan.png';
import UNC from '../../../image/UNC.jpg';
import USC from '../../../image/usc.jpg';
import UTAustin from '../../../image/UTAustin.png';
import WashUStLouis from '../../../image/WashUStLouis.png';
import './Carousel.css';

class DemoCarousel extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 1000,
      autoplay: true,
      focusOnSelect: true,
      variableWidth: true
    };
    return (
      <div className="container  ">
        <div className="row">
          <Slider {...settings}>
            <div>
              <img src={BC} className="imageSize" alt="BC"></img>
            </div>
            <div>
              <img src={BU} className="imageSize" alt="BU"></img>
            </div>
            <div>
              <img src={Caltech} className="imageSize" alt="Caltech"></img>
            </div>
            <div>
              <img src={CMU} className="imageSize" alt="CMU"></img>
            </div>
            <div>
              <img src={JHU} className="imageSize" alt="JHU"></img>
            </div>
            <div>
              <img src={UCB} className="imageSize" alt="UCB"></img>
            </div>
            <div>
              <img src={UCD} className="imageSize" alt="UCD"></img>
            </div>
            <div>
              <img src={UCI} className="imageSize" alt="UCI"></img>
            </div>
            <div>
              <img src={UCLA} className="imageSize" alt="UCLA"></img>
            </div>
            <div>
              <img src={UCSB} className="imageSize" alt="UCSB"></img>
            </div>
            <div>
              <img src={UCSD} className="imageSize" alt="UCSD"></img>
            </div>
            <div>
              <img src={UIUC} className="imageSize" alt="UIUC"></img>
            </div>
            <div>
              <img src={UMichigan} className="imageSize" alt="UMichigan"></img>
            </div>
            <div>
              <img src={UNC} className="imageSize" alt="UNC"></img>
            </div>
            <div>
              <img src={USC} className="imageSize" alt="USC"></img>
            </div>
            <div>
              <img src={UTAustin} className="imageSize" alt="UTAustin"></img>
            </div>
            <div>
              <img src={WashUStLouis} className="imageSize" alt="WashUStLouis"></img>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
};

export default DemoCarousel;