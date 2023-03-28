import React from 'react';
import { Nav, Accordion } from 'react-bootstrap';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Introduction to Web3 and Cryptocurrencies</Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
            <Nav.Item>
                <Link to="/section1_1" className="nav-link">
                 1.1. What is Web3 and Why Does It Matter?
                </Link>
            </Nav.Item>
              <Nav.Link href="#section1.2">1.2. History of Cryptocurrencies</Nav.Link>
              <Nav.Link href="#section1.3">1.3. Basics of Cryptocurrencies</Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Blockchain Technology Basics</Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link href="#section2.1">2.1. What is a Blockchain?</Nav.Link>
              <Nav.Link href="#section2.2">2.2. Consensus Mechanisms</Nav.Link>
              <Nav.Link href="#section2.3">2.3. Public vs. Private Blockchains</Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Ethereum and Smart Contracts</Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link href="#section3.1">3.1. What is Ethereum?</Nav.Link>
              <Nav.Link href="#section3.2">3.2. Smart Contracts</Nav.Link>
              <Nav.Link href="#section3.3">3.3. Solidity Basics</Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Decentralized Finance (DeFi)</Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link href="#section4.1">4.1. What is DeFi?</Nav.Link>
              <Nav.Link href="#section4.2">4.2. Key DeFi Components</Nav.Link>
              <Nav.Link href="#section4.3">4.3. DeFi Use Cases</Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Non-fungible Tokens (NFTs)</Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link href="#section5.1">5.1. What are NFTs?</Nav.Link>
              <Nav.Link href="#section5.2">5.2. NFT Use Cases</Nav.Link>
              <Nav.Link href="#section5.3">5.3. NFT Standards</Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Building Decentralized Applications (dApps)</Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link href="#section6.1">6.1. What is a dApp?</Nav.Link>
              <Nav.Link href="#section6.2">6.2. dApp Architecture</Nav.Link>
              <Nav.Link href="#section6.3">6.3. dApp Development Tools</Nav.Link>
              <Nav.Link href="#section6.4">6.4. dApp Deployment</Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Sidebar;

