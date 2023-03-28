import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" className="header-navbar">
        <Navbar.Brand href="/">Learn Web3</Navbar.Brand>
      </Navbar>
    </header>
  );
};

export default Header;
