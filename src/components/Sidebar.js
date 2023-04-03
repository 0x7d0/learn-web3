import React from 'react';
import { Accordion, Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Introduction to Web3 and Cryptocurrencies</Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link href="/section1_1">1.1. What is Web3?</Nav.Link>
              <Nav.Link href="/section1_2">1.2. Overview of Cryptocurrencies and Blockchain</Nav.Link>
              <Nav.Link href="/section1_3">1.3. Getting Started with Wallets and Exchanges</Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Cryptocurrency Trading and Investment</Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link href="/section2_1">2.1. Fundamental Analysis</Nav.Link>
              <Nav.Link href="/section2_2">2.2. Technical Analysis</Nav.Link>
              <Nav.Link href="/section2_3">2.3. Risk Management and Portfolio Diversification</Nav.Link>
            </Nav>
          </Accordion.Body>
          </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Smart Contracts and DApps Development</Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link href="/section3_1">3.1. Introduction to Smart Contracts</Nav.Link>
              <Nav.Link href="/section3_2">3.2. Solidity Basics</Nav.Link>
              <Nav.Link href="/section3_3">3.3. Building and Deploying Smart Contracts</Nav.Link>
              <Nav.Link href="/section3_4">3.4. Developing Decentralized Applications (DApps)</Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. NFTs and DeFi</Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link href="/section4_1">4.1. Introduction to NFTs</Nav.Link>
              <Nav.Link href="/section4_2">4.2. Creating and Managing NFTs</Nav.Link>
              <Nav.Link href="/section4_3">4.3. Introduction to DeFi</Nav.Link>
              <Nav.Link href="/section4_4">4.4. Popular DeFi Protocols and Use Cases</Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Building the CryptoLearn Project</Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link href="/section5_1">5.1. Project Overview and Goals</Nav.Link>
              <Nav.Link href="/section5_2">5.2. Setting Up the Development Environment</Nav.Link>
              <Nav.Link href="/section5_3">5.3. Implementing the CRT Token</Nav.Link>
              <Nav.Link href="/section5_4">5.4. Integrating NFTs and Course Progression</Nav.Link>
              <Nav.Link href="/section5_5">5.5. Course Creation and Job Board</Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Sidebar;


       
