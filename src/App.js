import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Section1 from './components/Sections/Section1/Section1';
import Section1_1 from './components/Sections/Section1/Section1_1';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container fluid>
          <div className="content-wrapper">
            <Sidebar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/section1" component={Section1} />
              <Route path="/section1_1" component={Section1_1} />
            </Switch>
          </div>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
