import React, { Component } from 'react';
import './ContactUs.css';
export default class ContactUs extends Component {
  render() {
    
    return (
      <section id="contact">
          <div className="container">
          <div className="text-center contactHeading">
            <h1>Reach Us..</h1>
          </div>
          <hr/>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6 contactUs">
              Mohanlal Tailor - Natwar Varma <br/>
              5, Malharaowadi, <br/>
              Dadiseth Agiyari Lane, <br/>
              Near Mahapragya Public School, <br/>
              Mumbai -400018 <br/>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
            <iframe className="mapImage" title="Shop Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.51904614947495!2d72.828530576653!3d18.95150008223975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce2286d1527d%3A0x6fca2ab8ee12b70!2sMahapragya%20Public%20School!5e0!3m2!1sen!2sin!4v1585379728276!5m2!1sen!2sin" width="600" height="450" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
          </div>
          </div>
            
        </section>
        );
  }
}