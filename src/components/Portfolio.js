import React, { Component } from 'react';
import './Portfolio.css';
import Jacket from "../assets/image/Jackets.png";
import Jodhpuri from "../assets/image/Jodhpuri.png";
import kurtaPyajama from "../assets/image/kurtaPyajama.png";
import Leisure from "../assets/image/Leisure.png";
import Sherwani from "../assets/image/Sherwani.png";


export default class Porfolio extends Component {
  render() {

    return (
      <section id="portfolio">
        <div className="container">
          <div className="row">
            <div className="serviceHeading twelve columns collapsed">
              <h1>Check Out our work</h1>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-4 col-xs-4 ">
              <div className="card">
                <img src={Jacket} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1>Jackets</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4">
              <div className="card">
                <img src={kurtaPyajama} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1>Kurta Pyajama</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4">
              <div className="card">
                <img src={Leisure} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1>Leisure</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2 col-xs-2"></div>
            <div className="col-sm-4 col-xs-4">
              <div className="card">
                <img src={Sherwani} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1>Sherwani</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4">
              <div className="card">
                <img src={Jodhpuri} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1>Jodhpuri</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-2 col-xs-2"></div>


          </div>
        </div>

      </section>
    );
  }
}