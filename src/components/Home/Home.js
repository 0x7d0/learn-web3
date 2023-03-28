import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col>
            <h1>Welcome to Learn Web3</h1>
            <p>
              Discover the world of web3 technologies and cryptocurrencies. Learn
              about blockchain, Ethereum, smart contracts, decentralized finance,
              non-fungible tokens, and more.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
