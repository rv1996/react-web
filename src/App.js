import React from 'react';
// import logo from './logo.svg';
import { Nav, Navbar, Container } from 'react-bootstrap';
import About from './components/about/About';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Legacy from './components/legacy/Legacy';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './App.css';



class App extends React.Component {


  dyHeight = () => {
    return document.getElementById('navBar').clientHeight; 
  }

  render() {

    return (
      <>
        <section className="nav-primary-text-dw">
          <Navbar fixed="top" className="nav-primary-bg-dw" id="navBar">
            <Nav>
              <Nav.Item>
                <AnchorLink offset={this.dyHeight} href='#home' className="primary-brand">Darjiwala.in</AnchorLink>
              </Nav.Item>
              <Nav.Item>
              <AnchorLink offset={this.dyHeight} href='#legacy'>Legacy</AnchorLink>
              </Nav.Item>
              <Nav.Item>
                <AnchorLink offset={this.dyHeight} href='#about'>About us</AnchorLink>
              </Nav.Item>
              <Nav.Item>
                <AnchorLink offset={this.dyHeight} href='#services'>Services</AnchorLink>
              </Nav.Item>
              <Nav.Item>
                <AnchorLink offset={this.dyHeight} href='#testimonials'>Testimonials</AnchorLink>
              </Nav.Item>
              <Nav.Item>
                <AnchorLink offset={this.dyHeight} href='#contact'>Contact</AnchorLink>
              </Nav.Item>
              
            </Nav>
          </Navbar>
        </section>
        
        <Home></Home>
        <Legacy></Legacy>
        <About></About>
        <Services></Services>
        <Testimonials></Testimonials>
        <Contact></Contact>
        
      </>
    );
  }
}

export default App;
