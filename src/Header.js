import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="hero-section">
      <h1>Welcome to Learn Web3</h1>
      <p>
        Explore the world of cryptocurrencies, blockchain, and decentralized applications.
        Learn about Ethereum, DeFi, NFTs, and more. Start your journey to becoming a Web3 expert today!
      </p>
      <img src="./hero-image.jpg" alt="Web3 illustration" />
    </header>
  );
}

export default Header;
