import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
   render() {
      return (
         <section id="about">
            <div className="container" id="scrollAbout">
               <div className="row">
                  <div className="legacyHeading"><h1>LEGACY</h1></div>
                  <div className="legacyContent container">
                     <div className="row textParent">
                        <div className="col-sm-8 col-md-8 col-lg-8">
                           <p className="textLeft">
                              Our ancestors havebeen known by name of “darji”. It hasbeen said that <span className="legacyHigh">"darji"</span> as caste in the Rajasthani Hindu Marwari
                              tribe were given blessings from the god that our generation will never go hungry. One sewing machine and a darji can
                              feed his family / make livelihood of it.
                           </p>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4"></div>
                     </div>
                     <div className="row textParent">
                        <div className="col-sm-4 col-md-4 col-lg-4"></div>
                        <div className="col-sm-8 col-md-8 col-lg-8 ">
                           <p className="textRight">
                              Mumbai is a city of migrants, our daadaji mr. Mohanlal sawarmal varma had come to
                              mumbai in the early 1960-70's
                              from fatehpur - sikar (rajasthan).
                           </p>
                        </div>
                     </div>
                     <div className="row textParent">
                        <div className="col-sm-8 col-md-8 col-lg-8">
                           <p className="textLeft">
                              Like every other migrant our dadaji made his livelihood of blessings received by our ancestors.
                              A darji and his sewing machine.. That’s where itall started – mohanlal tailors.
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