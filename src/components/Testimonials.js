import React, { Component } from 'react';
import Rakesh from './../assets/image/Rakesh_Maria_Natwar_Varma.png'
import RajK from './../assets/image/Raj_K-Purohit.jpg';
import Vijay from './../assets/image/Vijay_Darda.jpg';
import pc from './../assets/image/PC_Alexander.jpg';
import './Testimonials.css';

export default class Testimonials extends Component {
  render() {

    return (
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="row text-center">
            <h1>Testimonials</h1>
          </div>

          <div className="row text-center testContent">
            <p>
              Serviced more than 30000 customers, here is whatour few loyal customers have to say…
            </p>
          </div>
          <div className="row text-right">
            <div className="col-sm-6 col-md-6 col-lg-6">
              
                  <img className="img-responsive" src={Rakesh} />
                
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="rakeshWord">
                <p><span className="qoutes">"</span>Varmaji, is very kindhearted and down to earth person. For the last
                  20 years I have been wearing kurta’s & pyjama’s made by him. His
                  eye for detail on the measurements, fittings is exemplary<span className="qoutes">"</span>
                </p>
              </div>
              <div className="citeRakesh">
                <span>Rakesh Maria I.P.S </span><br />
                <span>Former Director-General of Home Guards </span><br />
                <span>Former Commissioner of Police, Mumbai </span><br />



              </div>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row text-center">
            <h1>Few of our customers..</h1>
          </div>
          <div className="row customers">
            <div className="col-sm-4 col-xs-4">
              <div className="card">
                <img src={RajK} className="card-img-top" alt="..." />
                <div className="card-body ">
                  <h1>Raj K Purohit</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4">
              <div className="card">
                <img src={Vijay} className="card-img-top" alt="..." />
                <div className="card-body ">
                  <h1>PC Alexander</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4">
              <div className="card">
                <img src={pc} className="card-img-top" alt="..." />
                <div className="card-body ">
                  <h1>PC Alexander</h1>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}