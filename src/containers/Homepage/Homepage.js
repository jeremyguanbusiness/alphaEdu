import React, { Component } from 'react';
import Introimage from './Introimage/Introimage';
import Headerinfo from './Headerinfo/Headerinfo';
import Quickintro from './Quickintro/Quickintro';
import Tableintro from './Tableintro/Tableintro';
import DemoCarousel from './Carousel/Carousel';
import Tablerank from './Tablerank/Tablerank';
import Footerend from './Footerend/Footerend';
import CertifiedIntro from './CertifiedIntro/CertifiedIntro';
import './Homepage.css';


class Homepage extends Component {
  render() {
    return (
      <div>
        <header>
          <Introimage />
          <Headerinfo />
        </header>
        <main>
          <Quickintro />
          <Tableintro />
          <DemoCarousel />
          <CertifiedIntro />
          <Tablerank />
        </main>
        <footer>
          <Footerend />
        </footer>
      </div>
    );
  }
}

export default Homepage;