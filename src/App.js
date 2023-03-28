import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Section1 from './components/Sections/Section1/Section1';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Learn Web3</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/section1">1. Introduction to Web3 and Cryptocurrencies</Nav.Link>
              <Nav.Link href="/section2">2. Blockchain Technology Basics</Nav.Link>
              <Nav.Link href="/section3">3. Ethereum and Smart Contracts</Nav.Link>
              <Nav.Link href="/section4">4. Decentralized Finance (DeFi)</Nav.Link>
              <Nav.Link href="/section5">5. Non-fungible Tokens (NFTs)</Nav.Link>
              <Nav.Link href="/section6">6. Building Decentralized Applications (dApps)</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/section1" component={Section1} />
          {/* Add other routes here */}
          <Redirect from="/" to="/section1" />
        </Switch>
        <Header />
      </div>
    </Router>
  );
}

export default App;
