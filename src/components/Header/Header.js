import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div>
          <h1 className="header-title">Learn Web3 & Cryptocurrencies</h1>
          <h2 className="header-subtitle">Unlock the Future of Decentralized Technology</h2>
        </div>
      </Container>
    </header>
  );
};

export default Header;
