import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>© {currentYear} Learn Web3. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
