import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Section1 from './Section1';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Learn Web3</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Course Topics" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#section1">1. Introduction to Web3 and Cryptocurrencies</NavDropdown.Item>
                <NavDropdown.Item href="#section2">2. Blockchain Technology Basics</NavDropdown.Item>
                <NavDropdown.Item href="#section3">3. Ethereum and Smart Contracts</NavDropdown.Item>
                <NavDropdown.Item href="#section4">4. Decentralized Finance (DeFi)</NavDropdown.Item>
                <NavDropdown.Item href="#section5">5. Non-fungible Tokens (NFTs)</NavDropdown.Item>
                <NavDropdown.Item href="#section6">6. Building Decentralized Applications (dApps)</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Header />
      <Section1 />
    </div>
  );
}

export default App;
