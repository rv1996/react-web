import React from 'react';
// import logo from './logo.svg';
import img from './assets/image/background.jpg';
import { Nav, Navbar, Container } from 'react-bootstrap';
import About from './components/about/About';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './App.css';



class App extends React.Component {


  dyHeight = () => {
    return document.getElementById('navBar').clientHeight; 
  }

  render() {

    return (
      <>
        <Container fluid className="nav-primary-text-dw">
          <Navbar fixed="top" className="nav-primary-bg-dw" id="navBar">
            <Nav>
              <Nav.Item>
                <AnchorLink offset={this.dyHeight} href='#home' className="primary-brand">Darjiwala.in</AnchorLink>
              </Nav.Item>
              <Nav.Item>
                <AnchorLink offset={this.dyHeight} href='#about'>About</AnchorLink>
              </Nav.Item>
              <Nav.Item>
                <AnchorLink offset={this.dyHeight} href='#contact'>Contact</AnchorLink>
              </Nav.Item>
              <Nav.Item>

              </Nav.Item>
            </Nav>
          </Navbar>
        </Container>
        <Container fluid className="full-height">
          <Home></Home>
          <About></About>
          <Contact></Contact>
        </Container>
      </>
    );
  }
}

export default App;
