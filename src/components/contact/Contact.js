import React from 'react';

import './contact.css';


class Contact extends React.Component {

    render() {
        return (
            <section id="contact">
                <footer id="footer" className="footer-1">
                    <div className="main-footer widgets-dark typo-light">
                        <div className="container-fluid">
                            <div className="row bottom-footer">

                                <div className="col-xs-12 col-sm-6 col-md-3">
                                    <div className="widget subscribe no-box">
                                        <h5 className="widget-title">COMPANY NAME<span></span></h5>
                                        <p>About the company, little discription will goes here.. </p>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-6 col-md-3">
                                    <div className="widget no-box">
                                        <h5 className="widget-title">Quick Links<span></span></h5>
                                        <ul className="thumbnail-widget">
                                            <li>
                                                <div className="thumb-content"><a href="#.">Get Started</a></div>
                                            </li>
                                            <li>
                                                <div className="thumb-content"><a href="#.">Top Leaders</a></div>
                                            </li>
                                            <li>
                                                <div className="thumb-content"><a href="#.">Success Stories</a></div>
                                            </li>
                                            <li>
                                                <div className="thumb-content"><a href="#.">Event/Tickets</a></div>
                                            </li>
                                            <li>
                                                <div className="thumb-content"><a href="#.">News</a></div>
                                            </li>
                                            <li>
                                                <div className="thumb-content"><a href="#.">Lifestyle</a></div>
                                            </li>
                                            <li>
                                                <div className="thumb-content"><a href="#.">About</a></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <iframe className="mapImage" title="Shop Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.51904614947495!2d72.828530576653!3d18.95150008223975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce2286d1527d%3A0x6fca2ab8ee12b70!2sMahapragya%20Public%20School!5e0!3m2!1sen!2sin!4v1585379728276!5m2!1sen!2sin" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="footer-copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <p>Copyright Company Name © 2016. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        )
    }
}

export default Contact;