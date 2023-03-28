import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import heroImage from './hero-image.jpg'; // Replace with the path to your desired image

function Header() {
  return (
    <Container fluid className="header-container">
      <Row>
        <Col md={6} className="header-text">
          <h1>Learn Web3 & Cryptocurrencies</h1>
          <p>
            Embark on a journey to master the world of Web3 and cryptocurrencies. Equip yourself
            with the knowledge and skills to navigate the decentralized future.
          </p>
        </Col>
        <Col md={6}>
          <img src={heroImage} alt="Web3 and Cryptocurrencies" className="header-image" />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
