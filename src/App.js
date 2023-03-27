import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Dropdown } from 'react-bootstrap';


function App() {
  const navigateTo = (url) => {
    window.location.href = url;
  };

  return (
    <Container className="mt-5">
      <Container fluid className="text-center bg-light py-5">
        <h1 className="display-4">Learn Web3</h1>
        <p className="lead">Your ultimate guide to mastering Web3, Blockchain, and Cryptocurrencies</p>
    </Container>

      <div className="text-center">
        <Dropdown onSelect={navigateTo}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Choose a topic
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="introduction-to-cryptocurrencies.html">
              Introduction to Cryptocurrencies and Blockchain
            </Dropdown.Item>
            <Dropdown.Item eventKey="setting-up-crypto-wallet.html">
              Setting up a Crypto Wallet and Buying Cryptocurrencies
            </Dropdown.Item>
            <Dropdown.Item eventKey="introduction-to-web3.html">
              Introduction to Web3
            </Dropdown.Item>
            <Dropdown.Item eventKey="smart-contracts-and-solidity.html">
              Smart Contracts and Solidity
            </Dropdown.Item>
            <Dropdown.Item eventKey="ethereum-development.html">
              Ethereum Development
            </Dropdown.Item>
            <Dropdown.Item eventKey="nfts.html">
              NFTs (Non-Fungible Tokens)
            </Dropdown.Item>
            <Dropdown.Item eventKey="decentralized-finance.html">
              Decentralized Finance (DeFi)
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Container>
  );
}

export default App;
