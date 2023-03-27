import React from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid className="text-center bg-light py-5">
        <h1 className="display-4">Learn Web3</h1>
        <p className="lead">
          Your ultimate guide to mastering Web3, Blockchain, and Cryptocurrencies
        </p>
        <img
          src="./logo.png"
          alt="Web3 and Blockchain illustration"
          className="img-fluid my-4"
        />
        <p>
          In today's rapidly evolving digital world, Web3 and cryptocurrencies are revolutionizing how we interact with the internet and conduct transactions. Understanding these technologies is crucial for staying ahead of the curve and unlocking new opportunities. Our comprehensive curriculum will guide you through the fundamentals of Web3, blockchain, and cryptocurrencies, empowering you to navigate this exciting landscape with confidence.
        </p>
        <h2 className="mb-3">Course Topics</h2>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Select a Topic
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#introduction">1. Introduction to Web3 and Blockchain</Dropdown.Item>
            <Dropdown.Item href="#crypto">2. Cryptocurrencies and Tokens</Dropdown.Item>
            <Dropdown.Item href="#wallets">3. Wallets and Key Management</Dropdown.Item>
            <Dropdown.Item href="#smart-contracts">4. Smart Contracts and DApps</Dropdown.Item>
            <Dropdown.Item href="#decentralized-storage">5. Decentralized Storage and Data Privacy</Dropdown.Item>
            <Dropdown.Item href="#scaling">6. Scaling and Interoperability</Dropdown.Item>
            <Dropdown.Item href="#nfts">7. Non-Fungible Tokens (NFTs)</Dropdown.Item>
            <Dropdown.Item href="#defi">8. Decentralized Finance (DeFi)</Dropdown.Item>
            <Dropdown.Item href="#dao">9. Decentralized Autonomous Organizations (DAOs)</Dropdown.Item>
            <Dropdown.Item href="#web3-development">10. Web3 Development</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </div>
  );
}

export default App;
