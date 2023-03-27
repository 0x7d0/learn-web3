import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Dropdown } from 'react-bootstrap';


function App() {
  const navigateTo = (url) => {
    window.location.href = url;
  };

  return (
    <Container className="mt-5">
      <Jumbotron className="text-center">
        <h1>Welcome to Learn Web3</h1>
        <p>
          Are you ready to embark on a journey into the world of web3, cryptocurrencies, and decentralized technologies? At Learn Web3, we provide a comprehensive curriculum designed to take you from a complete beginner to an intermediate level in web3 and blockchain development. Our expertly crafted course covers essential topics, such as cryptocurrencies, blockchain, smart contracts, decentralized applications (dApps), non-fungible tokens (NFTs), and decentralized finance (DeFi). By joining our community, you'll gain the knowledge and skills needed to navigate the rapidly evolving web3 ecosystem and capitalize on the opportunities it presents. So, why wait? Dive in, explore our content, and unlock the power of web3 today!
        </p>
      </Jumbotron>
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
