import React, { Component } from 'react';
import './Resume.css'
export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <div className="container">
          <div className="row">
            <div className="aboutHeading"><h1>About us..</h1></div>
            <div className="aboutContent container">
              <div className="row textParent">
                <div className="col-sm-8 col-md-8 col-lg-8 ">
                  <p className="textLeft">
                    <span className="aboutHigh">65 years legacy</span> is now been carry forward by Natwar Mohanlal Varma.
                  </p>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4"></div>
              </div>
              <div className="row textParent">
                <div className="col-sm-4 col-md-4 col-lg-4"></div>
                <div className="col-sm-8 col-md-8 col-lg-8">
                    <p className="textRight">
                      Natwar Varma aka Nattu Bhai has been working in the space of Men’s Ethnic wear for the longest in the
                      industry. Pyjama. Nattu Bhai learned the tricks of the industry and has been a perfectionist in his work.
  
                    </p>
                </div>
              </div>
              <div className="row textParent">
                <div className="col-sm-8 col-md-8 col-lg-8">
                <p className="textLeft">
                We are one stop shop for customized tailor made Men’s Ethnic wear.
                     </p>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4"></div>
              </div>

             

              
              
            </div>
          </div>
        </div>

      </section>
    );
  }
}