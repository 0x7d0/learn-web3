import React from 'react';
import Sidebar from '../Sidebar';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="home">
          <p>
            The world is evolving rapidly, and decentralized technologies are at the forefront of this digital revolution. By investing just $4.99 in this comprehensive course, you will gain an in-depth understanding of web3 and cryptocurrencies, positioning yourself for success in this groundbreaking industry.
            </p>
            <p>
            As decentralized applications (dApps) and digital currencies continue to disrupt traditional systems, an increasing number of opportunities are emerging for skilled individuals. Our course is designed to help you navigate this complex landscape, enabling you to tap into new career paths and business prospects.
            </p>
            <p>
            By learning the ins and outs of blockchain technology, Ethereum, smart contracts, DeFi, and NFTs, you will be able to build innovative applications and contribute to the growth of the decentralized economy. This is your chance to become a pioneer in an industry that is reshaping the way we interact, transact, and create value.
            </p>
            <p>
            Our course is tailored for technical individuals who may not yet be advanced in crypto and web3 but are eager to expand their skill set. By breaking down complex concepts into easily digestible lessons, we make the learning experience enjoyable and engaging.
            </p>
            <p>
            Don't miss out on the opportunity to be a part of the decentralized revolution. For just $4.99, you can unlock a world of possibilities and set yourself apart in the rapidly growing web3 and crypto space. Invest in your future today, and start your journey towards success in the decentralized world!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
