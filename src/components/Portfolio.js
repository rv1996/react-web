import React, { Component } from 'react';
import './Portfolio.css';
import Jacket from "../assets/image/Jackets.png";

// const images = [
//   { id: "1", src: "../assets/image/Jackets.png" },
//   { id: "2", src: "../assets/image/Jodhpuri.png" },
//   { id: "3", src: "../assets/image/kurtaPyajama.png" },
//   { id: "4", src: "../assets/image/Leisure.png" },
//   { id: "5", src: "../assets/image/Sherwani.png" }

// ]

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
            <div className="col-sm-3 col-xs-6 ">
              <div className="card">
                <img src={Jacket} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1>Jackets</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-6">
              <div className="card">
                <img src={Jacket} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1>Jackets</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-6">
              <div className="card">
                <img src={Jacket} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1>Jackets</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-6">
              <div className="card">
                <img src={Jacket} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1>Jackets</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-3 col-xs-6">
              <div className="card">
                <img src={Jacket} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1>Jackets</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-3 col-xs-6">
              <div className="card">
                <img src={Jacket} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1>Jackets</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-2"></div>


          </div>
        </div>

      </section>
    );
  }
}