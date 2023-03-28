import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import './Section1.css';

const topics = [
  'What is a cryptocurrency?',
  'History of cryptocurrencies',
  'Introduction to blockchain technology',
  'How do cryptocurrencies work?',
  'Understanding decentralized systems and distributed ledgers',
  'Key concepts: Public and private keys, digital signatures, and cryptographic hashing',
  'Types of cryptocurrencies: Bitcoin, Ethereum, and altcoins',
  'Consensus algorithms: Proof of Work (PoW), Proof of Stake (PoS), and others',
  'Use cases of blockchain technology beyond cryptocurrencies'
];

function Section1() {
  return (
    <Container className="Section1">
      <Row>
        <Col md={3}>
          <ListGroup>
            {topics.map((topic, index) => (
              <ListGroup.Item key={index}>{topic}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={9}>
          <h1>Introduction to Cryptocurrencies and Blockchain</h1>
          <p>
            Welcome to the first section of our Web3 and Cryptocurrency
            course. In this section, you will be introduced to the fundamental
            concepts and technologies underlying the cryptocurrency and
            blockchain ecosystem. By the end of this section, you should have
            a solid understanding of the basics of cryptocurrencies and
            blockchain technology, as well as the key concepts and principles
            that underpin their functioning. This foundation will prepare you
            for the more advanced topics covered in the subsequent sections of
            the curriculum.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Section1;
