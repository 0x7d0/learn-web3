import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import CourseTopics from './components/CourseTopics/CourseTopics';
import Section1 from './components/Sections/Section1/Section1';
// Import other section components

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Learn Web3</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <CourseTopics />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/section1">
            <Section1 />
          </Route>
          {/* Add routes for other sections */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
