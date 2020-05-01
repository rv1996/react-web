import React, { Component } from 'react';
import illustration from '../assets/image/illustration.svg';

import './Header.css';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>

        {/* <Home></Home>
        <Legacy></Legacy>
        <About></About>
        <Services></Services>
        <Testimonials></Testimonials>
        <Contact></Contact> */}
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#scrollAbout">Legacy</a></li>
               <li><a className="smoothscroll" href="#resume">About</a></li>
               <li><a className="smoothscroll" href="#portfolio">Services</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
         <section className="main" id='home'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mx-auto text-center">
                            <img src={illustration} className="illustration" alt="needle" />
                        </div>
                    </div>
                </div>

                <div className="name">
                    <svg height="120" stroke="#eb792a" strokeWidth="2" className="text-line" width="100%">
                        <text x="50%" className="main_text" dominantBaseline="middle" textAnchor="middle" y="50%">Darjiwala</text>
                    </svg>
                </div>

                <p className="text-center legacy_text">Legacy of 65 years</p>
                <p className="text-center shop_text">One stop shop for Men's ethnic wear</p>

            </section>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#scrollAbout"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}